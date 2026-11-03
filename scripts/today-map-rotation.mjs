import { createHash } from 'node:crypto';

export const RESET_INTERVAL_MS = 24 * 60 * 60 * 1000;
export const PEAK_WIKI_TIMER_URL = 'https://peak.wiki.gg/wiki/MediaWiki:Common.js?action=raw';
export const PEAK_WIKI_MAPS_URL = 'https://peak.wiki.gg/wiki/MediaWiki:Maps.json?action=raw';
export const CC_BY_SA_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';
export const BIOME_DISPLAY_NAMES = {
  shore: 'Shore', tropics: 'Tropics', roots: 'Roots', alpine: 'Alpine', mesa: 'Mesa',
  caldera: 'Caldera', kiln: 'The Kiln', gloom: 'Gloom', citadel: 'Citadel',
};

// Parse supported constants and data only; never execute downloaded JavaScript.
export function parseWikiRotation(timerText, mapsText) {
  const constants = {};
  for (const key of ['RESET_HOUR_UTC', 'RESET_MINUTE_UTC', 'RESET_YEAR', 'RESET_MONTH', 'RESET_DAY']) {
    const match = timerText.match(new RegExp(`const\\s+${key}\\s*=\\s*(\\d+)\\s*;`));
    if (!match) throw new Error(`Unsupported community timer: missing ${key}`);
    constants[key] = Number(match[1]);
  }
  const supported = [
    /Date\.UTC\(RESET_YEAR,\s*RESET_MONTH\s*-\s*1,\s*RESET_DAY,\s*RESET_HOUR_UTC,\s*RESET_MINUTE_UTC,\s*0\)/,
    /Math\.floor\(\(currentReset\s*-\s*START_DATE\)\s*\/\s*\(24\s*\*\s*60\s*\*\s*60\s*\*\s*1000\)\)/,
    /\(\(daysPassed\s*%\s*biomeVariations\.length\)\s*\+\s*biomeVariations\.length\)\s*%\s*biomeVariations\.length/,
    /return\s+biomeVariations\[index\]/,
    /getJsonContent\('MediaWiki:Maps\.json'\)/,
  ];
  if (!supported.every((pattern) => pattern.test(timerText))) throw new Error('Unsupported community rotation algorithm');
  const boundary = timerText.match(/function getResetBoundary\(time\)\s*\{[\s\S]*?return boundary;\s*\}/)?.[0].replace(/\s+/g, '');
  const expectedBoundary = 'functiongetResetBoundary(time){constcurrentDate=newDate(time);constboundary=newDate(Date.UTC(currentDate.getUTCFullYear(),currentDate.getUTCMonth(),currentDate.getUTCDate(),RESET_HOUR_UTC,RESET_MINUTE_UTC,0));if(currentDate<boundary){boundary.setUTCDate(boundary.getUTCDate()-1);}returnboundary;}';
  if (boundary !== expectedBoundary) throw new Error('Unsupported community reset boundary');
  const { RESET_YEAR: year, RESET_MONTH: month, RESET_DAY: day, RESET_HOUR_UTC: hour, RESET_MINUTE_UTC: minute } = constants;
  const startAt = Date.UTC(year, month - 1, day, hour, minute);
  const start = new Date(startAt);
  if (year < 2025 || year > 2100 || start.getUTCFullYear() !== year || start.getUTCMonth() !== month - 1 || start.getUTCDate() !== day || hour > 23 || minute > 59) {
    throw new Error('Invalid community reset constants');
  }
  const rotations = JSON.parse(mapsText).biomes;
  if (!Array.isArray(rotations) || !rotations.length || rotations.length > 10000) throw new Error('Invalid community map pool');
  for (const row of rotations) {
    if (!Array.isArray(row) || row.length !== 5 || !row.every((entry) => entry && Object.hasOwn(BIOME_DISPLAY_NAMES, entry.biome) && (entry.variant === undefined || /^[A-Za-z0-9 ]{1,60}$/.test(entry.variant)))) {
      throw new Error('Unsupported community biome or variant');
    }
  }
  return { startAt, hour, minute, rotations };
}

export function emptyTodayMap(date, updatedAt = new Date().toISOString()) {
  return { date, map: null, route: null, biome: null, resetAt: null, currentResetAt: null,
    updatedAt, sourceFetchedAt: null, estimated: false, source: null, license: null, media: [] };
}

export function buildTodayMapSnapshot(value, displayDate, { timerText, mapsText, sourceFetchedAt }) {
  const now = new Date(value);
  const fetchedAt = new Date(sourceFetchedAt);
  const config = parseWikiRotation(timerText, mapsText);
  const todayReset = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), config.hour, config.minute);
  const currentResetAt = now.getTime() >= todayReset ? todayReset : todayReset - RESET_INTERVAL_MS;
  if (!Number.isFinite(now.getTime()) || !Number.isFinite(fetchedAt.getTime()) || fetchedAt.getTime() > now.getTime() || fetchedAt.getTime() < currentResetAt) {
    throw new Error('Source fetch must belong to the current reset interval');
  }
  const days = Math.floor((currentResetAt - config.startAt) / RESET_INTERVAL_MS);
  const index = ((days % config.rotations.length) + config.rotations.length) % config.rotations.length;
  const entries = config.rotations[index];
  const names = entries.map(({ biome, variant }) => `${BIOME_DISPLAY_NAMES[biome]}${variant && variant !== 'Default' ? ` (${variant})` : ''}`);
  const hash = (text) => createHash('sha256').update(text).digest('hex');
  return {
    date: displayDate || now.toISOString().slice(0, 10), map: names.join(' → '),
    route: 'Daily biome sequence', biome: names.join(', '),
    resetAt: new Date(currentResetAt + RESET_INTERVAL_MS).toISOString(),
    currentResetAt: new Date(currentResetAt).toISOString(), updatedAt: now.toISOString(),
    sourceFetchedAt: fetchedAt.toISOString(), estimated: true,
    source: { label: 'PEAK Wiki community map pool', url: PEAK_WIKI_MAPS_URL, timerUrl: PEAK_WIKI_TIMER_URL,
      mapsSha256: hash(mapsText), timerSha256: hash(timerText), poolSize: config.rotations.length, rotationIndex: index },
    license: { label: 'CC BY-SA 4.0', url: CC_BY_SA_URL },
    // Existing images show biome examples, not the exact island or variant.
    media: [],
  };
}

export function isCurrentMapSnapshot(data, buildDate, buildTimestamp) {
  const now = Date.parse(buildTimestamp);
  const start = Date.parse(data?.currentResetAt);
  const end = Date.parse(data?.resetAt);
  const fetched = Date.parse(data?.sourceFetchedAt);
  return Boolean(data?.date === buildDate && data?.map && data?.biome && data?.estimated === true
    && data?.source?.url === PEAK_WIKI_MAPS_URL && data?.source?.timerUrl === PEAK_WIKI_TIMER_URL
    && /^[a-f0-9]{64}$/.test(data.source.mapsSha256) && /^[a-f0-9]{64}$/.test(data.source.timerSha256)
    && data.source.poolSize > 0 && end - start === RESET_INTERVAL_MS
    && start <= fetched && fetched <= now && now < end);
}
