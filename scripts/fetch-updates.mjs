import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = resolve(import.meta.dirname, '..');
const dataPath = resolve(projectRoot, 'data/peak-updates.json');
const sourceUrl = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=3527290&count=20&format=json';
const fallbackNewsUrl = 'https://store.steampowered.com/news/app/3527290';
const officialFeedName = 'steam_community_announcements';

function isOfficialNewsItem(item) {
  return item?.feedname === officialFeedName;
}

function classifyUpdate(title) {
  const value = String(title ?? '');
  if (/patch|hotfix|bug fix/i.test(value)) return 'PATCH';
  if (/announcement|arrives|biome|citadel|gloom|ascent/i.test(value)) return 'CONTENT';
  return 'UPDATE';
}

function titleSummary(title, kind) {
  const value = String(title ?? '').trim();
  if (kind === 'PATCH') return `Official patch or fix post titled ${value}; open the source for the exact changes.`;
  if (kind === 'CONTENT') return `Official content or announcement post titled ${value}; open the source for the complete release details.`;
  return `Official Steam news entry titled ${value}; open the source for the complete details.`;
}

function normalizeItem(item) {
  const timestamp = Number(item?.date);
  const date = Number.isFinite(timestamp) ? new Date(timestamp * 1000).toISOString().slice(0, 10) : '';
  const title = String(item?.title ?? '').replace(/\s+/g, ' ').trim();
  if (!date || !title) return null;
  const kind = classifyUpdate(title);
  return {
    date,
    title,
    summary: titleSummary(title, kind),
    url: /^https?:\/\//i.test(item?.url ?? '') ? item.url : fallbackNewsUrl,
    kind,
  };
}

async function readExisting() {
  try {
    return JSON.parse(await readFile(dataPath, 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT' || error instanceof SyntaxError) return { source: { label: 'Official Steam News API', url: sourceUrl }, entries: [] };
    throw error;
  }
}

async function main() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.PEAK_UPDATES_FETCH_TIMEOUT_MS) || 20000);
  try {
    const response = await fetch(sourceUrl, {
      headers: { accept: 'application/json', 'user-agent': 'peak-game-wiki-updates/1.0 (+https://peak-game.wiki/peak-game-update)' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const entries = (payload?.appnews?.newsitems ?? []).filter(isOfficialNewsItem).map(normalizeItem).filter(Boolean).sort((left, right) => right.date.localeCompare(left.date)).slice(0, 20);
    if (!entries.length) throw new Error('official feed returned no usable update entries');
    const existing = await readExisting();
    const next = { source: { label: 'Official Steam News API', url: sourceUrl }, entries };
    if (JSON.stringify(existing) !== JSON.stringify(next)) {
      await writeFile(dataPath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
      console.log(`Updated ${entries.length} official PEAK update entries.`);
    } else {
      console.log('Official PEAK update data is already current.');
    }
  } finally {
    clearTimeout(timeout);
  }
}

export { classifyUpdate, isOfficialNewsItem, normalizeItem, titleSummary };

if (import.meta.url === pathToFileURL(resolve(process.argv[1] || '')).href) await main();
