export const START_DATE = Date.UTC(2026, 8, 2, 17, 0, 0);
export const RESET_INTERVAL_MS = 24 * 60 * 60 * 1000;
export const PEAK_WIKI_TIMER_URL = 'https://peak.wiki.gg/wiki/MediaWiki:Common.js';
export const CC_BY_SA_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';
export const CURRENT_GAME_VERSION = '2.6.b';
export const SITE_TIMEZONE = process.env.SITE_TIMEZONE || 'Asia/Shanghai';

export const ROTATIONS = [
  ['shore', 'tropics', 'alpine', 'caldera', 'kiln'],
  ['shore', 'roots', 'alpine', 'gloom', 'citadel'],
  ['shore', 'roots', 'mesa', 'caldera', 'kiln'],
  ['shore', 'tropics', 'alpine', 'gloom', 'citadel'],
  ['shore', 'tropics', 'alpine', 'caldera', 'kiln'],
  ['shore', 'roots', 'mesa', 'gloom', 'citadel'],
  ['shore', 'tropics', 'mesa', 'caldera', 'kiln'],
  ['shore', 'roots', 'alpine', 'gloom', 'citadel'],
  ['shore', 'tropics', 'alpine', 'caldera', 'kiln'],
  ['shore', 'roots', 'mesa', 'gloom', 'citadel'],
  ['shore', 'tropics', 'alpine', 'caldera', 'kiln'],
  ['shore', 'tropics', 'mesa', 'gloom', 'citadel'],
  ['shore', 'roots', 'mesa', 'caldera', 'kiln'],
  ['shore', 'roots', 'alpine', 'gloom', 'citadel'],
  ['shore', 'tropics', 'mesa', 'caldera', 'kiln'],
  ['shore', 'tropics', 'alpine', 'gloom', 'citadel'],
  ['shore', 'roots', 'alpine', 'caldera', 'kiln'],
  ['shore', 'roots', 'mesa', 'caldera', 'kiln'],
  ['shore', 'tropics', 'mesa', 'gloom', 'citadel'],
  ['shore', 'roots', 'alpine', 'caldera', 'kiln'],
  ['shore', 'roots', 'mesa', 'gloom', 'citadel'],
];

export const BIOME_DISPLAY_NAMES = {
  shore: 'Shore',
  tropics: 'Tropics',
  roots: 'Roots',
  alpine: 'Alpine',
  mesa: 'Mesa',
  caldera: 'Caldera',
  kiln: 'The Kiln',
  gloom: 'Gloom',
  citadel: 'Citadel',
};

function asDate(value) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid rotation timestamp: ${value}`);
  return date;
}

function pad2(value) {
  return String(value).padStart(2, '0');
}

export function siteCalendarDay(value = new Date()) {
  const date = asDate(value);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SITE_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const bag = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${bag.year}-${pad2(bag.month)}-${pad2(bag.day)}`;
}

export function siteOffsetIso(value) {
  const date = asDate(value);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SITE_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const bag = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  let year = Number(bag.year);
  let month = Number(bag.month);
  let day = Number(bag.day);
  let hour = Number(bag.hour);
  if (hour === 24) {
    hour = 0;
    const next = new Date(Date.UTC(year, month - 1, day));
    next.setUTCDate(next.getUTCDate() + 1);
    year = next.getUTCFullYear();
    month = next.getUTCMonth() + 1;
    day = next.getUTCDate();
  }
  const asUtc = Date.UTC(year, month - 1, day, hour, Number(bag.minute), Number(bag.second));
  const offsetMinutes = Math.round((asUtc - date.getTime()) / 60000);
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const absolute = Math.abs(offsetMinutes);
  return `${year}-${pad2(month)}-${pad2(day)}T${pad2(hour)}:${pad2(bag.minute)}:${pad2(bag.second)}${sign}${pad2(Math.floor(absolute / 60))}:${pad2(absolute % 60)}`;
}

export function shiftIsoDate(isoDate, days) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(isoDate || ''));
  if (!match) return null;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function compareRouteToHistory(map, history, estimateDate) {
  const entries = Array.isArray(history) ? history : [];
  const previous = entries.find((item) => item && typeof item.date === 'string' && item.date < estimateDate && typeof item.map === 'string' && item.map.trim());
  if (!previous || !map) {
    return { status: 'unknown', previousMap: null, previousDate: null, yesterday: false };
  }
  return {
    status: previous.map === map ? 'same' : 'changed',
    previousMap: previous.map,
    previousDate: previous.date,
    yesterday: previous.date === shiftIsoDate(estimateDate, -1),
  };
}

export function getCurrentResetAt(value = new Date()) {
  const now = asDate(value);
  const todayReset = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 17, 0, 0);
  return now.getTime() >= todayReset ? todayReset : todayReset - RESET_INTERVAL_MS;
}

export function getRotationIndex(currentResetAt) {
  const daysPassed = Math.floor((Number(currentResetAt) - START_DATE) / RESET_INTERVAL_MS);
  return ((daysPassed % ROTATIONS.length) + ROTATIONS.length) % ROTATIONS.length;
}

export function getRotationAt(value = new Date()) {
  const now = asDate(value);
  const currentResetAt = getCurrentResetAt(now);
  const index = getRotationIndex(currentResetAt);
  const nextResetAt = currentResetAt + RESET_INTERVAL_MS;
  const biomes = ROTATIONS[index];
  return {
    index,
    biomes: [...biomes],
    currentResetAt: new Date(currentResetAt).toISOString(),
    nextResetAt: new Date(nextResetAt).toISOString(),
  };
}

export function buildTodayMapSnapshot(value = new Date(), displayDate = null) {
  const now = asDate(value);
  const rotation = getRotationAt(now);
  const names = rotation.biomes.map((biome) => BIOME_DISPLAY_NAMES[biome] || biome);
  const updatedAt = now.toISOString();
  const siteDay = siteCalendarDay(now);
  const requested = /^\d{4}-\d{2}-\d{2}$/.test(displayDate || '') ? displayDate : '';
  if (requested && requested !== siteDay) {
    console.warn(`Map estimate date ${requested} does not match ${SITE_TIMEZONE} write day ${siteDay}. Using ${siteDay}.`);
  }
  const date = siteDay;
  return {
    date,
    map: names.join(' → '),
    route: 'Daily biome sequence',
    biome: names.join(', '),
    resetAt: rotation.nextResetAt,
    currentResetAt: rotation.currentResetAt,
    updatedAt,
    sourceFetchedAt: updatedAt,
    estimated: true,
    source: { label: 'PEAK Wiki timer', url: PEAK_WIKI_TIMER_URL },
    license: { label: 'CC BY-SA 4.0', url: CC_BY_SA_URL },
    media: rotation.biomes.map((biome) => {
      const label = BIOME_DISPLAY_NAMES[biome] || biome;
      return {
        type: 'image',
        biome: label,
        alt: `${label} map from today's estimated rotation`,
        caption: 'PEAK Wiki (wiki.gg), CC BY-SA 4.0.',
        url: `/media/peak-map-${biome}.webp`,
      };
    }),
  };
}
