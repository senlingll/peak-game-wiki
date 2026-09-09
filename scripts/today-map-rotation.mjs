export const START_DATE = Date.UTC(2026, 8, 2, 17, 0, 0);
export const RESET_INTERVAL_MS = 24 * 60 * 60 * 1000;
export const PEAK_WIKI_TIMER_URL = 'https://peak.wiki.gg/wiki/MediaWiki:Common.js';
export const CC_BY_SA_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';

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

function dateKey(value) {
  return asDate(value).toISOString().slice(0, 10);
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
  const date = /^\d{4}-\d{2}-\d{2}$/.test(displayDate || '') ? displayDate : dateKey(now);
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
