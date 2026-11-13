import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildTodayMapSnapshot, emptyTodayMap, PEAK_WIKI_TIMER_URL, PEAK_WIKI_MAPS_URL } from './today-map-rotation.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const dataPath = resolve(projectRoot, 'data/today-map.json');
const historyPath = resolve(projectRoot, 'data/peak-map-history.json');

function resolveBuildDate() {
  const configured = process.env.BUILD_DATE;
  return /^\d{4}-\d{2}-\d{2}$/.test(configured ?? '') ? configured : new Date().toISOString().slice(0, 10);
}

function resolveFetchTimestamp(value = process.env.TODAY_MAP_FETCH_AT) {
  const parsed = value && Number.isFinite(Date.parse(value)) ? new Date(value) : new Date();
  return parsed.toISOString();
}

async function writeTodayMap(value) {
  await writeFile(dataPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function appendMapHistory(value) {
  let history = [];
  try {
    const parsed = JSON.parse(await readFile(historyPath, 'utf8'));
    if (Array.isArray(parsed)) history = parsed;
  } catch (error) {
    if (error?.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error;
  }
  const entry = {
    date: value.date,
    map: value.map || null,
    route: value.route || null,
    biome: value.biome || null,
    resetAt: value.resetAt || null,
    currentResetAt: value.currentResetAt || null,
    estimated: value.estimated === true,
    source: value.source || null,
    license: value.license || null,
    sourceFetchedAt: value.sourceFetchedAt || null,
  };
  const next = [entry, ...history.filter((item) => item?.date !== entry.date)].slice(0, 30);
  await writeFile(historyPath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
}

export async function fetchTodayMap(buildDate, fetchImpl = fetch, fetchTimestamp = null) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.TODAY_MAP_FETCH_TIMEOUT_MS) || 20000);
  try {
    const texts = await Promise.all([PEAK_WIKI_TIMER_URL, PEAK_WIKI_MAPS_URL].map(async (url) => {
      const response = await fetchImpl(url, { signal: controller.signal, headers: { 'user-agent': 'peak-game-wiki-map/2.0 (+https://peak-game.wiki/map-rotation)' } });
      if (!response.ok) throw new Error(`Community map source returned HTTP ${response.status}`);
      return response.text();
    }));
    const sourceFetchedAt = resolveFetchTimestamp(fetchTimestamp);
    return buildTodayMapSnapshot(sourceFetchedAt, buildDate, { timerText: texts[0], mapsText: texts[1], sourceFetchedAt });
  } catch {
    console.warn('Community map source could not be verified; publishing a pending entry.');
    return emptyTodayMap(buildDate);
  } finally {
    controller.abort();
    clearTimeout(timeout);
  }
}

async function main() {
  const result = await fetchTodayMap(resolveBuildDate(), fetch, process.env.TODAY_MAP_FETCH_AT);
  await writeTodayMap(result);
  if (result.map) await appendMapHistory(result);
  console.log(`PEAK map for ${result.date}: ${result.map || 'pending'}`);
}

export { appendMapHistory, buildTodayMapSnapshot, emptyTodayMap };

if (import.meta.url === pathToFileURL(resolve(process.argv[1] || '')).href) await main();
