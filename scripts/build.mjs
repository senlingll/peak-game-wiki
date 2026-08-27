import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { formatSnapshotDate, injectTodayMapSection, localeOrder, renderHome, renderLegal, renderMapGuide, renderSitemap } from './locales.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const outputRoot = resolve(projectRoot, 'dist');
const buildTimestamp = new Date().toISOString();
const buildDate = /^\d{4}-\d{2}-\d{2}$/.test(process.env.BUILD_DATE ?? '')
  ? process.env.BUILD_DATE
  : buildTimestamp.slice(0, 10);

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

const todayMap = await readTodayMap();

const renderOptions = { buildDate, dateModified: buildDate };
const renderMapGuidePage = (locale) => injectTodayMapSection(renderMapGuide(locale, renderOptions), locale, todayMap, buildDate, buildTimestamp);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const entry of ['styles.css', 'app.js', 'robots.txt', 'llms.txt', 'llms-full.txt']) {
  await cp(resolve(projectRoot, entry), resolve(outputRoot, entry), { recursive: true });
}

await cp(resolve(projectRoot, 'public'), outputRoot, { recursive: true });
await writeFile(resolve(outputRoot, 'index.html'), renderHome('en', renderOptions), 'utf8');
for (const page of ['about', 'privacy', 'terms']) {
  await writeFile(resolve(outputRoot, `${page}.html`), renderLegal('en', page, renderOptions), 'utf8');
}
await writeFile(resolve(outputRoot, 'sitemap.xml'), renderSitemap(buildDate), 'utf8');
await writeFile(resolve(outputRoot, 'map-rotation.html'), renderMapGuidePage('en'), 'utf8');

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
}

console.log(`Built static site to ${outputRoot}`);
console.log(`Build date: ${buildDate}`);
console.log(`Footer snapshot dates: ${localeOrder.map((locale) => `${locale}=${formatSnapshotDate(locale, buildDate)}`).join(' | ')}`);
