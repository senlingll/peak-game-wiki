import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const outputRoot = resolve(projectRoot, 'dist');

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const entry of ['index.html', 'about.html', 'privacy.html', 'terms.html', 'styles.css', 'app.js', 'robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt']) {
  await cp(resolve(projectRoot, entry), resolve(outputRoot, entry), { recursive: true });
}

await cp(resolve(projectRoot, 'public'), outputRoot, { recursive: true });

console.log(`Built static site to ${outputRoot}`);
