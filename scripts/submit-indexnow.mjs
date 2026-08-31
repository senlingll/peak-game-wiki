import { readdir, readFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const artifactRoot = resolve(projectRoot, process.env.INDEXNOW_ARTIFACT_DIR?.trim() || 'dist');
const sitemapPath = resolve(artifactRoot, 'sitemap.xml');

function decodeXml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/gi)]
    .map((match) => {
      const block = match[1];
      const loc = block.match(/<loc\b[^>]*>([\s\S]*?)<\/loc>/i)?.[1];
      const lastmod = block.match(/<lastmod\b[^>]*>([\s\S]*?)<\/lastmod>/i)?.[1];
      return {
        url: loc ? decodeXml(loc.trim()) : '',
        lastmod: lastmod?.trim() || '',
      };
    })
    .filter((entry) => entry.url && entry.lastmod);
}

function discoverKeyFile(names) {
  return names.find((name) => /^[0-9a-f]{32}\.txt$/i.test(name));
}

const buildDate = process.env.INDEXNOW_DATE?.trim() || process.env.BUILD_DATE?.trim() || new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(buildDate)) throw new Error('BUILD_DATE must use YYYY-MM-DD format');

const sitemap = await readFile(sitemapPath, 'utf8');
const entries = parseSitemap(sitemap);
const urls = [...new Set(entries.filter((entry) => entry.lastmod === buildDate).map((entry) => entry.url))];
if (urls.length > 10000) throw new Error(`IndexNow urlList exceeds 10,000 URLs: ${urls.length}`);

const configuredKey = process.env.INDEXNOW_KEY?.trim();
if (process.env.INDEXNOW_REQUIRE_SECRET === '1' && !configuredKey) {
  throw new Error('INDEXNOW_KEY is required for this run');
}

const configuredKeyFile = process.env.INDEXNOW_KEY_FILE?.trim();
const keyFileName = configuredKeyFile || (configuredKey ? '' : discoverKeyFile(await readdir(artifactRoot)));
if (!configuredKey && !keyFileName) throw new Error('No IndexNow key found in the publish directory or environment');

const key = configuredKey || (await readFile(resolve(artifactRoot, keyFileName), 'utf8')).trim();
const keyStem = keyFileName ? basename(keyFileName, '.txt') : '';
if (!/^[0-9a-f]{32}$/i.test(key)) throw new Error('IndexNow key must be 32 hexadecimal characters');
if (keyFileName && key.toLowerCase() !== keyStem.toLowerCase()) {
  throw new Error('IndexNow key file name and content do not match');
}

if (!urls.length) {
  console.log(`IndexNow: no URLs have lastmod=${buildDate}`);
  process.exit(0);
}

const hosts = new Set(urls.map((url) => new URL(url).hostname));
if (hosts.size !== 1) throw new Error('IndexNow submissions must contain one hostname');
const host = [...hosts][0];

if (process.env.INDEXNOW_DRY_RUN === '1') {
  console.log(`IndexNow dry-run: ${urls.length} URLs for ${host} with lastmod=${buildDate}`);
  process.exit(0);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'User-Agent': 'peak-game-wiki-indexnow/1.0',
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  }),
});

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow rejected the request with HTTP ${response.status}`);
}

console.log(`IndexNow accepted ${urls.length} URLs for ${host} (HTTP ${response.status}).`);
