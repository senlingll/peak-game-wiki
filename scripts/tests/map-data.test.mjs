import assert from 'node:assert/strict';
import test from 'node:test';
import { access } from 'node:fs/promises';
import { buildTodayMapSnapshot, isCurrentMapSnapshot, parseWikiRotation, BIOME_DISPLAY_NAMES } from '../today-map-rotation.mjs';
import { fetchTodayMap } from '../fetch-today-map.mjs';
import { renderHome, injectTodayMapSection, localeOrder, renderArticlePage } from '../locales.mjs';
import { officialUpdateFacts } from '../official-update-facts.mjs';

// A small source fixture exercises reset boundaries and biome variants without a network dependency.
const timerText = `
const RESET_HOUR_UTC = 17;
const RESET_MINUTE_UTC = 0;
const RESET_YEAR = 2026;
const RESET_MONTH = 8;
const RESET_DAY = 4;
const START_DATE = new Date(Date.UTC(RESET_YEAR, RESET_MONTH - 1, RESET_DAY, RESET_HOUR_UTC, RESET_MINUTE_UTC, 0));
function getResetBoundary(time) {
  const currentDate = new Date(time);
  const boundary = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), RESET_HOUR_UTC, RESET_MINUTE_UTC, 0));
  if (currentDate < boundary) { boundary.setUTCDate(boundary.getUTCDate() - 1); }
  return boundary;
}
getJsonContent('MediaWiki:Maps.json').then(json => {
  const biomeVariations = json.biomes;
  function getVariationForDate(time) {
    const currentReset = getResetBoundary(time);
    const daysPassed = Math.floor((currentReset - START_DATE) / (24 * 60 * 60 * 1000));
    const index = ((daysPassed % biomeVariations.length) + biomeVariations.length) % biomeVariations.length;
    return biomeVariations[index];
  }
});`;
const mapsText = JSON.stringify({ biomes: [
  ['shore', 'tropics', 'alpine', 'caldera', 'kiln'].map(biome => ({ biome })),
  [{ biome: 'shore', variant: 'BlueBeach' }, ...['roots', 'mesa', 'gloom', 'citadel'].map(biome => ({ biome }))],
] });
const snapshot = (timestamp) => buildTodayMapSnapshot(timestamp, timestamp.slice(0, 10), { timerText, mapsText, sourceFetchedAt: timestamp });
const updateData = { entries: [
  { date: '2026-10-23', title: 'Patch Notes 3.0.1', kind: 'PATCH' },
  { date: '2026-10-22', title: 'CROSSPLAY HAS ARRIVED TO PEAK', kind: 'UPDATE' },
] };

test('17:00 UTC changes the community map and retains variant names', () => {
  const before = snapshot('2026-08-05T16:59:59Z');
  const after = snapshot('2026-08-05T17:00:00Z');
  assert.equal(before.map, 'Shore → Tropics → Alpine → Caldera → The Kiln');
  assert.equal(after.map, 'Shore (BlueBeach) → Roots → Mesa → Gloom → Citadel');
  assert.equal(before.resetAt, after.currentResetAt);
  assert.equal(after.estimated, true);
  assert.deepEqual(after.media.map(item => item.url), ['shore', 'roots', 'mesa', 'gloom', 'citadel'].map(biome => `/media/peak-map-${biome}.webp`));
  assert.equal(after.media[0].biome, 'Shore');
  assert.ok(after.media.every(item => item.illustrative === true));
});

test('all supported biomes have local WebP reference images', async () => {
  await Promise.all(Object.keys(BIOME_DISPLAY_NAMES).map(biome => access(new URL(`../../public/media/peak-map-${biome}.webp`, import.meta.url))));
});

test('expired, future, legacy and relabelled source records are rejected', () => {
  const value = snapshot('2026-08-05T12:00:00Z');
  assert.equal(isCurrentMapSnapshot(value, value.date, '2026-08-05T16:59:59Z'), true);
  assert.equal(isCurrentMapSnapshot(value, value.date, '2026-08-05T17:00:00Z'), false);
  assert.equal(isCurrentMapSnapshot(value, value.date, '2026-08-05T11:59:59Z'), false);
  assert.equal(isCurrentMapSnapshot({ ...value, date: '2026-08-06' }, '2026-08-06', '2026-08-06T12:00:00Z'), false);
  assert.equal(isCurrentMapSnapshot({ ...value, sourceFetchedAt: null }, value.date, '2026-08-05T13:00:00Z'), false);
  assert.equal(isCurrentMapSnapshot({ ...value, source: { url: value.source.url } }, value.date, '2026-08-05T13:00:00Z'), false);
  assert.throws(() => buildTodayMapSnapshot('2026-08-05T18:00:00Z', value.date, { timerText, mapsText, sourceFetchedAt: '2026-08-05T16:59:59Z' }));
});

test('changed algorithm, invalid JSON and unknown biomes fail closed', async () => {
  assert.throws(() => parseWikiRotation(timerText.replace('daysPassed %', '(daysPassed + 1) %'), mapsText));
  assert.throws(() => parseWikiRotation(timerText.replace('getUTCDate() - 1', 'getUTCDate() - 2'), mapsText));
  assert.throws(() => parseWikiRotation(timerText, '<html>unavailable</html>'));
  assert.throws(() => parseWikiRotation(timerText, mapsText.replace('shore', 'unknown')));
  for (const fetchImpl of [
    async () => { throw new Error('offline'); },
    async () => ({ ok: false, status: 503 }),
    async () => ({ ok: true, text: async () => '<html>blocked</html>' }),
  ]) {
    const result = await fetchTodayMap('2026-11-03', fetchImpl);
    assert.equal(result.map, null);
    assert.equal(result.sourceFetchedAt, null);
    assert.deepEqual(result.media, []);
  }
});

test('all nine locales share the official patch, FAQ schema and pending map state', () => {
  for (const locale of localeOrder) {
    const html = renderHome(locale, { buildDate: '2026-11-03', updateData });
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const faq = schemas.flatMap(value => value['@graph'] || [value]).find(value => value['@type'] === 'FAQPage');
    assert.ok(faq, locale);
    assert.ok(faq.mainEntity.some(item => item.acceptedAnswer.text.includes('3.0.1')), locale);
    assert.ok(faq.mainEntity.some(item => item.acceptedAnswer.text === officialUpdateFacts[locale].crossplay), locale);
    assert.ok(html.includes(officialUpdateFacts[locale].patch), locale);
    const map = injectTodayMapSection('</section><div class="container article-layout">', locale, snapshot('2026-08-05T12:00:00Z'), '2026-11-03', '2026-11-03T12:00:00Z', updateData, ['peak-game-update', 'peak-biomes-list']);
    assert.ok(map.includes('>3.0.1</a>'), locale);
    assert.ok(!map.includes('is-estimated'), locale);
    assert.ok(!map.includes('BlueBeach'), locale);
    assert.ok(!map.includes('data-carousel-slide'), locale);
    assert.ok(!map.includes('peak-gloom-guide'), locale);
    assert.ok(!map.includes('peak-citadel-guide'), locale);
    const article = renderArticlePage(locale, 'peak-game-update', { buildDate: '2026-11-03', updateData });
    assert.match(article, /article-answer[\s\S]*?3\.0\.1/, locale);
    const current = injectTodayMapSection('</section><div class="container article-layout">', locale, snapshot('2026-11-03T12:00:00Z'), '2026-11-03', '2026-11-03T12:01:00Z', updateData);
    assert.equal([...current.matchAll(/data-carousel-slide /g)].length, 5, locale);
    assert.ok(current.includes('https://peak.wiki.gg/wiki/Shore'), locale);
    assert.ok(!current.includes('today-map-media-pending'), locale);
    const missing = renderHome(locale, { buildDate: '2026-11-03' });
    assert.ok(!missing.includes('Patch Notes 3.0.1'), locale);
  }
});

test('homepage summaries fail closed after a reset instead of repeating yesterday', () => {
  const stale = snapshot('2026-08-05T12:00:00Z');
  const html = renderHome('en', {
    buildDate: '2026-08-06',
    buildTimestamp: '2026-08-05T17:10:00Z',
    todayMap: stale,
  });
  assert.match(html, /August 6, 2026/);
  assert.match(html, /Today not confirmed/);
  assert.doesNotMatch(html, /Shore \u2192 Tropics \u2192 Alpine/);
});

test('Portuguese reset labels use Brasilia time', () => {
  const current = snapshot('2026-08-05T12:00:00Z');
  const html = renderHome('pt', {
    buildDate: '2026-08-05',
    buildTimestamp: '2026-08-05T12:00:00Z',
    todayMap: current,
  });
  assert.match(html, /14:00 PT/);
  assert.doesNotMatch(html, /17:00 PT/);
});
