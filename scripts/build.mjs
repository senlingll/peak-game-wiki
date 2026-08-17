import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { localeOrder, renderHome, renderLegal, renderSitemap } from './locales.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const outputRoot = resolve(projectRoot, 'dist');

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const entry of ['styles.css', 'app.js', 'robots.txt', 'llms.txt', 'llms-full.txt']) {
  await cp(resolve(projectRoot, entry), resolve(outputRoot, entry), { recursive: true });
}

await cp(resolve(projectRoot, 'public'), outputRoot, { recursive: true });
await writeFile(resolve(outputRoot, 'index.html'), renderHome('en'), 'utf8');
for (const page of ['about', 'privacy', 'terms']) {
  await writeFile(resolve(outputRoot, `${page}.html`), renderLegal('en', page), 'utf8');
}
await writeFile(resolve(outputRoot, 'sitemap.xml'), renderSitemap(), 'utf8');

for (const locale of localeOrder.filter((code) => code !== 'en')) {
  const localeRoot = resolve(outputRoot, locale);
  await mkdir(localeRoot, { recursive: true });
  await writeFile(resolve(localeRoot, 'index.html'), renderHome(locale), 'utf8');
  for (const page of ['about', 'privacy', 'terms']) {
    const pageRoot = resolve(localeRoot, page);
    await mkdir(pageRoot, { recursive: true });
    await writeFile(resolve(pageRoot, 'index.html'), renderLegal(locale, page), 'utf8');
  }
}

console.log(`Built static site to ${outputRoot}`);
