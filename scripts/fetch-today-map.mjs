import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildTodayMapSnapshot } from './today-map-rotation.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const dataPath = resolve(projectRoot, 'data/today-map.json');
const historyPath = resolve(projectRoot, 'data/peak-map-history.json');

function resolveBuildDate() {
  const configured = process.env.BUILD_DATE;
  return /^\d{4}-\d{2}-\d{2}$/.test(configured ?? '') ? configured : new Date().toISOString().slice(0, 10);
}

function emptyTodayMap(buildDate, updatedAt = new Date().toISOString()) {
  return {
    date: buildDate,
    map: null,
    route: null,
    biome: null,
    resetAt: null,
    currentResetAt: null,
    updatedAt,
    sourceFetchedAt: updatedAt,
    estimated: false,
    source: null,
    license: null,
    media: [],
  };
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
  };
  const next = [entry, ...history.filter((item) => item?.date !== entry.date)].slice(0, 30);
  await writeFile(historyPath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
}

async function main() {
  const buildDate = resolveBuildDate();
  const updatedAt = new Date();
  const result = buildTodayMapSnapshot(updatedAt, buildDate);
  await writeTodayMap(result);
  await appendMapHistory(result);
  console.log(`Computed today's estimated PEAK map for ${result.date}: ${result.map}`);
  console.log(`Next reset: ${result.resetAt}`);
}

export { appendMapHistory, buildTodayMapSnapshot, emptyTodayMap };

if (import.meta.url === pathToFileURL(resolve(process.argv[1] || '')).href) await main();
