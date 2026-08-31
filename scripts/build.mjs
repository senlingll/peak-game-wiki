import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { formatSnapshotDate, injectTodayMapSection, localeOrder, renderAchievementGuide, renderArticlePage, renderHome, renderLegal, renderMapGuide, renderSitemap } from './locales.mjs';
import { articleOrder } from './article-guides.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const outputRoot = resolve(projectRoot, 'dist');
const indexNowKeyFile = '486e54d85508048c925002fb4ab792b7.txt';
const buildTimestamp = new Date().toISOString();
const buildDate = /^\d{4}-\d{2}-\d{2}$/.test(process.env.BUILD_DATE ?? '')
  ? process.env.BUILD_DATE
  : buildTimestamp.slice(0, 10);
const publishedArticleOrder = process.env.PUBLISHED_ARTICLES
  ? process.env.PUBLISHED_ARTICLES.split(',').map((slug) => slug.trim().toLowerCase()).filter((slug) => articleOrder.includes(slug))
  : articleOrder;

if (!publishedArticleOrder.length) {
  throw new Error('PUBLISHED_ARTICLES must include at least one known article slug.');
}

async function readTodayMap() {
  try {
    return JSON.parse(await readFile(resolve(projectRoot, 'data/today-map.json'), 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT' || error instanceof SyntaxError) {
      console.warn('No valid data/today-map.json found; building a pending daily-map card.');
      return {};
    }
    throw error;
  }
}

async function readJsonFile(file, fallback) {
  try {
    return JSON.parse(await readFile(resolve(projectRoot, file), 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT' || error instanceof SyntaxError) {
      console.warn(`No valid ${file} found; using an empty build-time data set.`);
      return fallback;
    }
    throw error;
  }
}

const todayMap = await readTodayMap();
const updateData = await readJsonFile('data/peak-updates.json', { entries: [] });
const mapHistory = await readJsonFile('data/peak-map-history.json', []);

const renderOptions = { buildDate, dateModified: buildDate, buildTimestamp, todayMap, updateData, mapHistory, publishedArticles: publishedArticleOrder };
const renderMapGuidePage = (locale) => injectTodayMapSection(renderMapGuide(locale, renderOptions), locale, todayMap, buildDate, buildTimestamp);
const notFoundHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <meta name="theme-color" content="#17212d" />
    <title>Page not found | PEAK Game Wiki</title>
    <link rel="icon" href="/assets/favicon.ico" sizes="any" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body class="legal-page">
    <main class="legal-main">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p class="legal-intro">The page you requested does not exist or may have moved.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/">Return home</a>
          <a class="button button-primary" href="/map-rotation">Check today's map</a>
        </div>
      </div>
    </main>
  </body>
</html>
`;

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const entry of ['styles.css', 'app.js', 'robots.txt', 'llms.txt', 'llms-full.txt', indexNowKeyFile]) {
  await cp(resolve(projectRoot, entry), resolve(outputRoot, entry), { recursive: true });
}

await cp(resolve(projectRoot, 'public'), outputRoot, { recursive: true });
await writeFile(resolve(outputRoot, 'index.html'), renderHome('en', renderOptions), 'utf8');
await writeFile(resolve(outputRoot, '404.html'), notFoundHtml, 'utf8');
for (const page of ['about', 'privacy', 'terms']) {
  await writeFile(resolve(outputRoot, `${page}.html`), renderLegal('en', page, renderOptions), 'utf8');
}
await writeFile(resolve(outputRoot, 'sitemap.xml'), renderSitemap(buildDate, publishedArticleOrder), 'utf8');
await writeFile(resolve(outputRoot, 'map-rotation.html'), renderMapGuidePage('en'), 'utf8');
await writeFile(resolve(outputRoot, 'achievements.html'), renderAchievementGuide('en', renderOptions), 'utf8');
for (const slug of publishedArticleOrder) {
  await writeFile(resolve(outputRoot, `${slug}.html`), renderArticlePage('en', slug, renderOptions), 'utf8');
}

for (const locale of localeOrder.filter((code) => code !== 'en')) {
  const localeRoot = resolve(outputRoot, locale);
  await mkdir(localeRoot, { recursive: true });
  await writeFile(resolve(localeRoot, 'index.html'), renderHome(locale, renderOptions), 'utf8');
  for (const page of ['about', 'privacy', 'terms']) {
    const pageRoot = resolve(localeRoot, page);
    await mkdir(pageRoot, { recursive: true });
    await writeFile(resolve(pageRoot, 'index.html'), renderLegal(locale, page, renderOptions), 'utf8');
  }
  const guideRoot = resolve(localeRoot, 'map-rotation');
  await mkdir(guideRoot, { recursive: true });
  await writeFile(resolve(guideRoot, 'index.html'), renderMapGuidePage(locale), 'utf8');
  const achievementRoot = resolve(localeRoot, 'achievements');
  await mkdir(achievementRoot, { recursive: true });
  await writeFile(resolve(achievementRoot, 'index.html'), renderAchievementGuide(locale, renderOptions), 'utf8');
  for (const slug of publishedArticleOrder) {
    const articleRoot = resolve(localeRoot, slug);
    await mkdir(articleRoot, { recursive: true });
    await writeFile(resolve(articleRoot, 'index.html'), renderArticlePage(locale, slug, renderOptions), 'utf8');
  }
}

console.log(`Built static site to ${outputRoot}`);
console.log(`Build date: ${buildDate}`);
console.log(`Footer snapshot dates: ${localeOrder.map((locale) => `${locale}=${formatSnapshotDate(locale, buildDate)}`).join(' | ')}`);
