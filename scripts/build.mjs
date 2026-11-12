import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { formatSnapshotDate, injectTodayMapSection, localeOrder, renderAchievementGuide, renderArticlePage, renderBadgesGuide, renderContact, renderHome, renderItemsPage, renderLegal, renderMapGuide, renderSitemap, STYLESHEET_HREF } from './locales.mjs';
import { articleOrder } from './article-guides.mjs';
import { GONE_PATHS, isLocalizedRedirectRoute, isRedirectedArticle } from './route-policy.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const outputRoot = resolve(projectRoot, 'dist');
const indexNowKeyFile = '486e54d85508048c925002fb4ab792b7.txt';
const buildTimestamp = new Date().toISOString();
const buildDate = /^\d{4}-\d{2}-\d{2}$/.test(process.env.BUILD_DATE ?? '')
  ? process.env.BUILD_DATE
  : buildTimestamp.slice(0, 10);
const requestedArticleOrder = process.env.PUBLISHED_ARTICLES
  ? [...new Set(process.env.PUBLISHED_ARTICLES.split(',').map((slug) => slug.trim().toLowerCase()).filter(Boolean))]
  : articleOrder;
const publishedArticleOrder = requestedArticleOrder.filter((slug) => !isRedirectedArticle(slug));

if (!publishedArticleOrder.length) {
  throw new Error('PUBLISHED_ARTICLES must include at least one known article slug.');
}
const unknownArticles = publishedArticleOrder.filter((slug) => !articleOrder.includes(slug));
if (unknownArticles.length) throw new Error(`Unknown PUBLISHED_ARTICLES: ${unknownArticles.join(', ')}`);

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

async function validateSitemap(outputRoot) {
  const sitemapPath = resolve(outputRoot, 'sitemap.xml');
  const sitemap = await readFile(sitemapPath, 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const issues = [];

  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const relativePath = pathname.replace(/^\/+/, '');
    const target = !relativePath
      ? resolve(outputRoot, 'index.html')
      : relativePath.endsWith('/')
        ? resolve(outputRoot, relativePath, 'index.html')
        : resolve(outputRoot, `${relativePath}.html`);
    let html;

    try {
      html = await readFile(target, 'utf8');
    } catch {
      issues.push(`${url} -> missing ${target}`);
      continue;
    }

    if (/<meta\s+[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
      issues.push(`${url} -> noindex`);
    }
  }

  if (issues.length) {
    throw new Error(`Sitemap contains non-indexable URLs:\n${issues.join('\n')}`);
  }
}

const todayMap = await readJsonFile('data/today-map.json', null);
const updateData = await readJsonFile('data/peak-updates.json', { entries: [] });
const mapHistory = await readJsonFile('data/peak-map-history.json', []);

const renderOptions = { buildDate, dateModified: buildDate, buildTimestamp, todayMap, updateData, mapHistory, publishedArticles: publishedArticleOrder };
const renderMapGuidePage = (locale) => injectTodayMapSection(renderMapGuide(locale, renderOptions), locale, todayMap, buildDate, buildTimestamp, updateData, publishedArticleOrder);

const notFoundHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <meta name="theme-color" content="#17212d" />
    <title>Page not found | PEAK Game Wiki</title>
    <link rel="icon" href="/assets/favicon.ico" sizes="any" />
    <link rel="stylesheet" href="${STYLESHEET_HREF}" />
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

for (const entry of ['styles.css', 'app.js', 'items.js', 'robots.txt', 'llms.txt', 'llms-full.txt', indexNowKeyFile]) {
  await cp(resolve(projectRoot, entry), resolve(outputRoot, entry), { recursive: true });
}

await cp(resolve(projectRoot, 'public'), outputRoot, { recursive: true });
await writeFile(resolve(outputRoot, 'index.html'), renderHome('en', renderOptions), 'utf8');
await writeFile(resolve(outputRoot, '404.html'), notFoundHtml, 'utf8');
for (const page of ['about', 'privacy', 'terms']) {
  await writeFile(resolve(outputRoot, `${page}.html`), renderLegal('en', page, renderOptions), 'utf8');
}
const contactRoot = resolve(outputRoot, 'contact');
await mkdir(contactRoot, { recursive: true });
await writeFile(resolve(contactRoot, 'index.html'), renderContact('en', renderOptions), 'utf8');
await writeFile(resolve(outputRoot, 'map-rotation.html'), renderMapGuidePage('en'), 'utf8');
await writeFile(resolve(outputRoot, 'achievements.html'), renderAchievementGuide('en', renderOptions), 'utf8');
const badgesGuideRoot = resolve(outputRoot, 'badges-guide');
await mkdir(badgesGuideRoot, { recursive: true });
await writeFile(resolve(badgesGuideRoot, 'index.html'), renderBadgesGuide('en', renderOptions), 'utf8');
const itemsRoot = resolve(outputRoot, 'items');
await mkdir(itemsRoot, { recursive: true });
await writeFile(resolve(itemsRoot, 'index.html'), renderItemsPage('en', renderOptions), 'utf8');
for (const slug of publishedArticleOrder) {
  if (slug === 'room-codes') {
    const articleRoot = resolve(outputRoot, slug);
    await mkdir(articleRoot, { recursive: true });
    await writeFile(resolve(articleRoot, 'index.html'), renderArticlePage('en', slug, renderOptions), 'utf8');
  } else {
    await writeFile(resolve(outputRoot, `${slug}.html`), renderArticlePage('en', slug, renderOptions), 'utf8');
  }
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
  const contactLocaleRoot = resolve(localeRoot, 'contact');
  await mkdir(contactLocaleRoot, { recursive: true });
  await writeFile(resolve(contactLocaleRoot, 'index.html'), renderContact(locale, renderOptions), 'utf8');
  const guideRoot = resolve(localeRoot, 'map-rotation');
  await mkdir(guideRoot, { recursive: true });
  await writeFile(resolve(guideRoot, 'index.html'), renderMapGuidePage(locale), 'utf8');
  const achievementRoot = resolve(localeRoot, 'achievements');
  await mkdir(achievementRoot, { recursive: true });
  await writeFile(resolve(achievementRoot, 'index.html'), renderAchievementGuide(locale, renderOptions), 'utf8');
  const badgesGuideLocaleRoot = resolve(localeRoot, 'badges-guide');
  await mkdir(badgesGuideLocaleRoot, { recursive: true });
  await writeFile(resolve(badgesGuideLocaleRoot, 'index.html'), renderBadgesGuide(locale, renderOptions), 'utf8');
  const itemsLocaleRoot = resolve(localeRoot, 'items');
  await mkdir(itemsLocaleRoot, { recursive: true });
  await writeFile(resolve(itemsLocaleRoot, 'index.html'), renderItemsPage(locale, renderOptions), 'utf8');
  for (const slug of publishedArticleOrder) {
    if (isLocalizedRedirectRoute(locale, slug)) continue;
    const articleRoot = resolve(localeRoot, slug);
    await mkdir(articleRoot, { recursive: true });
    await writeFile(resolve(articleRoot, 'index.html'), renderArticlePage(locale, slug, renderOptions), 'utf8');
  }
}

// 德文护符页是单独的德语工具页，不创建其他语言壳页。
for (const slug of ['grossmut-des-pfadfinders', 'beharrlichkeit-des-pfadfinders']) {
  const amuletRoot = resolve(outputRoot, 'de', slug);
  await mkdir(amuletRoot, { recursive: true });
  await writeFile(resolve(amuletRoot, 'index.html'), renderArticlePage('de', slug, renderOptions), 'utf8');
}

// 生成器仍可为共享组件构建中间页面，但已核对的 410 地址必须从最终产物中移除。
for (const pathname of GONE_PATHS) {
  const relative = pathname.replace(/^\//, '');
  await rm(resolve(outputRoot, `${relative}.html`), { force: true });
  await rm(resolve(outputRoot, relative, 'index.html'), { force: true });
  await rm(resolve(outputRoot, relative), { recursive: true, force: true });
}

await writeFile(resolve(outputRoot, 'sitemap.xml'), renderSitemap(buildDate, publishedArticleOrder), 'utf8');
await validateSitemap(outputRoot);

console.log(`Built static site to ${outputRoot}`);
console.log(`Build date: ${buildDate}`);
console.log(`Footer snapshot dates: ${localeOrder.map((locale) => `${locale}=${formatSnapshotDate(locale, buildDate)}`).join(' | ')}`);
