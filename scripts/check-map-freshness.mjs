import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildTodayMapSnapshot, siteCalendarDay, siteOffsetIso } from './today-map-rotation.mjs';
import { injectTodayMapSection, renderMapGuide } from './locales.mjs';

const projectRoot = resolve(import.meta.dirname, '..');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function renderPage(locale, timestamp, history) {
  const buildDate = siteCalendarDay(timestamp);
  const todayMap = buildTodayMapSnapshot(timestamp, buildDate);
  assert(todayMap.date === buildDate, `${locale} snapshot date ${todayMap.date} != ${buildDate}`);
  assert(siteCalendarDay(todayMap.updatedAt) === todayMap.date, `${locale} written calendar day diverges from the estimate`);
  const options = {
    buildDate,
    dateModified: buildDate,
    buildTimestamp: timestamp,
    todayMap,
    mapHistory: history,
  };
  return injectTodayMapSection(renderMapGuide(locale, options), locale, todayMap, buildDate, timestamp, history);
}

function days(html, name) {
  return [...html.matchAll(new RegExp(`data-${name}="([^"]+)"`, 'g'))].map((match) => match[1]);
}

function titleOf(html) {
  return html.match(/<title>(.*?)<\/title>/)?.[1] ?? '';
}

function h1Of(html) {
  return html.match(/<h1 id="article-title">(.*?)<\/h1>/)?.[1] ?? '';
}

const history = JSON.parse(await readFile(resolve(projectRoot, 'data/peak-map-history.json'), 'utf8'));
const mismatchAt = '2026-10-18T19:24:39.183Z';
assert(siteCalendarDay(mismatchAt) === '2026-10-19', `expected Shanghai day 2026-10-19, got ${siteCalendarDay(mismatchAt)}`);
assert(siteOffsetIso(mismatchAt).startsWith('2026-10-19T'), siteOffsetIso(mismatchAt));

const zh = renderPage('zh', mismatchAt, history);
const en = renderPage('en', mismatchAt, history);

for (const day of [...days(zh, 'estimate-day'), ...days(zh, 'written-day')]) {
  assert(day === '2026-10-19', `zh day ${day} is not the build calendar day`);
}
for (const day of [...days(en, 'estimate-day'), ...days(en, 'written-day')]) {
  assert(day === '2026-10-19', `en day ${day} is not the build calendar day`);
}
assert(!zh.includes('2026-10-18'), 'zh page still shows the previous UTC calendar day');
assert(!en.includes('2026-10-18'), 'en page still shows the previous UTC calendar day');

assert(titleOf(zh) === 'PEAK 今日地图（10月19日更新）：轮换估算、生物群系与重置时间', titleOf(zh));
assert(h1Of(zh) === 'PEAK 今日地图：10月19日轮换估算与重置倒计时', h1Of(zh));
assert(zh.includes('今天（2026-10-19）'), 'zh first answer is missing the build date');
assert(zh.includes('非官方'), 'zh disclaimer missing');
assert(zh.includes('请以游戏内为准'), 'zh in-game disclaimer missing');
assert(zh.includes('class="freshness-strip"'), 'zh freshness strip missing');
assert(zh.includes('相对昨日：'), 'zh yesterday comparison missing');
assert(zh.includes('本次构建备注'), 'zh build note missing');
assert(zh.includes('Patch 2.6.a'), 'zh patch history was removed');
assert(zh.includes('Patch 2.04.a') && zh.includes('Patch 2.03.a'), 'zh should keep the last three patch notes');
assert(zh.includes('先看上方今日区块'), 'zh FAQ no longer points at the today block');
assert(zh.includes('href="/zh/"'), 'zh hub link missing');
assert(zh.includes('href="/zh/items/"'), 'zh items link missing');
assert(zh.includes('rel="canonical" href="https://peak-game.wiki/zh/map-rotation/"'), 'zh canonical changed');
assert(zh.includes('上海'), 'zh Shanghai time missing');
assert(zh.includes('"dateModified":"2026-10-19"'), 'zh dateModified is not the estimate day');
assert(zh.includes('article:modified_time" content="2026-10-19T'), 'zh modified time does not use the Shanghai calendar day');

assert(titleOf(en) === 'PEAK Map Today (Updated Oct 19): Daily Rotation Estimate &amp; Reset', titleOf(en));
assert(h1Of(en) === 'PEAK Map Today: Updated Daily Rotation, Biomes &amp; Checks', h1Of(en));
assert(en.includes('Short answer: today is Oct 19, 2026 (version 2.6.b).'), 'en short answer is missing the build date and version');
assert(en.includes('What PEAK map rotation actually changes'), 'en evergreen section was rewritten or removed');
assert(en.includes('class="freshness-strip"'), 'en freshness strip missing');
assert(en.includes('Jump to Today\'s PEAK Map'), 'en jump link missing');
assert(en.includes('Community estimate, not official'), 'en disclaimer missing from the freshness strip');
assert(en.includes('not an official announcement'), 'en card disclaimer was removed');
assert(en.includes('This build'), 'en build note missing');
assert(en.includes('Patch 2.6.a'), 'en patch history was removed');
assert(en.includes('rel="canonical" href="https://peak-game.wiki/map-rotation"'), 'en canonical changed');
assert(!en.includes('rel="canonical" href="https://peak-game.wiki/map-rotation/"'), 'en canonical gained a trailing slash');
assert(en.includes('"dateModified":"2026-10-19"'), 'en dateModified is not the estimate day');

const laterAt = '2026-11-02T02:00:00.000Z';
const laterZh = renderPage('zh', laterAt, []);
const laterEn = renderPage('en', laterAt, []);
assert(titleOf(laterZh).includes('11月2日') && !titleOf(laterZh).includes('10月19日'), titleOf(laterZh));
assert(h1Of(laterZh).includes('11月2日') && !h1Of(laterZh).includes('10月19日'), h1Of(laterZh));
assert(titleOf(laterEn).includes('Updated Nov 2') && !titleOf(laterEn).includes('Oct 19'), titleOf(laterEn));
assert(days(laterZh, 'estimate-day').every((day) => day === '2026-11-02'), 'later zh estimate day was hardcoded');
assert(days(laterZh, 'written-day').every((day) => day === '2026-11-02'), 'later zh written day diverged');

console.log('Map freshness checks passed.');
console.log(`Mismatch window ${mismatchAt} renders as estimate/written ${siteCalendarDay(mismatchAt)}.`);
