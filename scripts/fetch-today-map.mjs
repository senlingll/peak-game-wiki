import { execFile as execFileCallback } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const projectRoot = resolve(import.meta.dirname, '..');
const dataPath = resolve(projectRoot, 'data/today-map.json');
const defaultSources = [
  { id: 'skydler', label: 'PEAK Map Today', url: 'https://peak.skydler.me/' },
  { id: 'steam', label: 'Steam Community daily map guide', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3553972295' },
];
const userAgent = 'peak-game-wiki-daily-map/1.0 (+https://peak-game.wiki/map-rotation)';
const maxResponseBytes = 4 * 1024 * 1024;
const execFile = promisify(execFileCallback);
const supportedBiomes = new Set(['SHORE', 'TROPICS', 'ROOTS', 'ALPINE', 'MESA', 'CALDERA', 'KILN', 'GLOOM', 'CITADEL']);
const biomeDisplayNames = { SHORE: 'Shore', TROPICS: 'Tropics', ROOTS: 'Roots', ALPINE: 'Alpine', MESA: 'Mesa', CALDERA: 'Caldera', KILN: 'The Kiln', GLOOM: 'Gloom', CITADEL: 'Citadel' };

const mapLabels = "current map|map name|today[’']s map|today map|map";
const routeLabels = 'current route|route|path|stage';
const biomeLabels = 'biome|region|island';
const resetLabels = 'next reset|reset time|reset';

function resolveBuildDate() {
  const configured = process.env.BUILD_DATE;
  if (/^\d{4}-\d{2}-\d{2}$/.test(configured ?? '')) return configured;
  return new Date().toISOString().slice(0, 10);
}

function decodeHtmlEntities(value) {
  return String(value ?? '')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&#x2F;/gi, '/')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function cleanText(value) {
  return decodeHtmlEntities(value)
    .replace(/\r\n?/g, '\n')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(?:p|div|li|h[1-6]|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter(Boolean)
    .join('\n')
    .trim();
}

function cleanField(value) {
  const cleaned = cleanText(value)
    .replace(/^[-–—*]+\s*/, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+\[[^\]]+\]\([^)]*\)\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.length > 160 ? '' : cleaned;
}

function extractField(text, labels) {
  const source = cleanText(text);
  const linePattern = new RegExp(
    `(?:^|\\n|\\|)\\s*(?:[-*]\\s+)?(?:\\*\\*)?(?:${labels})(?:\\*\\*)?\\s*(?::|=|[-–—])\\s*([^\\n|]+)`,
    'im',
  );
  const jsonPattern = new RegExp(`['"](?:${labels})['"]\\s*:\\s*['"]([^'"]+)['"]`, 'i');
  return cleanField(source.match(linePattern)?.[1] || source.match(jsonPattern)?.[1] || '');
}

function dateFromParts(year, month, day) {
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  if (date.getUTCFullYear() !== Number(year) || date.getUTCMonth() !== Number(month) - 1 || date.getUTCDate() !== Number(day)) return null;
  return date.toISOString().slice(0, 10);
}

function extractDates(text) {
  const source = cleanText(text);
  const dates = new Set();
  for (const match of source.matchAll(/\b(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})\b/g)) {
    const date = dateFromParts(match[1], match[2], match[3]);
    if (date) dates.add(date);
  }
  const monthNames = 'January|February|March|April|May|June|July|August|September|October|November|December';
  const monthFirst = new RegExp(`\\b(${monthNames})\\s+(\\d{1,2})(?:st|nd|rd|th)?[,]?\\s+(20\\d{2})\\b`, 'gi');
  for (const match of source.matchAll(monthFirst)) {
    const month = new Date(`${match[1]} 1, ${match[3]} UTC`).getUTCMonth() + 1;
    const date = dateFromParts(match[3], month, match[2]);
    if (date) dates.add(date);
  }
  const dayFirst = new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(${monthNames})[,]?\\s+(20\\d{2})\\b`, 'gi');
  for (const match of source.matchAll(dayFirst)) {
    const month = new Date(`${match[2]} 1, ${match[3]} UTC`).getUTCMonth() + 1;
    const date = dateFromParts(match[3], month, match[1]);
    if (date) dates.add(date);
  }
  return [...dates];
}

function createdDate(value) {
  if (!value) return null;
  const date = new Date(createdTimestamp(value));
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
}

function createdTimestamp(value) {
  const timestamp = typeof value === 'number' ? value * 1000 : Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : NaN;
}

function sourceUrl(value) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (!/(^|\.)reddit\.com$/i.test(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function mediaUrl(value) {
  try {
    const url = new URL(decodeHtmlEntities(value));
    return ['http:', 'https:'].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

function mediaType(value, hint = '') {
  if (/v\.redd\.it|video|\.mp4(?:[?#]|$)/i.test(`${value} ${hint}`)) return 'video';
  if (/\.(?:avif|gif|jpe?g|png|webp)(?:[?#]|$)/i.test(value) || /image/i.test(hint)) return 'image';
  return null;
}

function extractMedia(post) {
  const candidates = [];
  const add = (value, typeHint = '', altValue = '') => {
    const url = mediaUrl(value);
    const type = url ? mediaType(url, typeHint) : null;
    if (url && type && !candidates.some((candidate) => candidate.url === url)) candidates.push({ url, type, alt: altValue });
  };

  const redditVideo = post.secure_media?.reddit_video || post.media?.reddit_video;
  add(redditVideo?.fallback_url, 'video', post.title);
  add(post.url_overridden_by_dest, post.post_hint, post.title);
  add(post.url, post.post_hint, post.title);
  add(post.preview?.images?.[0]?.source?.url, 'image', post.title);
  for (const value of Object.values(post.media_metadata ?? {})) add(value?.s?.u, 'image', post.title);
  return candidates[0] ?? null;
}

function normalizeRedditPost(raw) {
  const post = raw?.data ?? raw;
  if (!post || typeof post !== 'object') return null;
  const permalink = post.permalink || post.link;
  const url = sourceUrl(permalink?.startsWith('/') ? `https://www.reddit.com${permalink}` : permalink);
  if (!url) return null;
  return {
    title: cleanText(post.title),
    body: cleanText(post.selftext || post.body || post.selftext_html),
    flair: cleanText(post.link_flair_text),
    createdAt: post.created_utc ?? post.created ?? post.published,
    url,
    media: extractMedia(post),
  };
}

function parseRedditJson(payload) {
  const children = Array.isArray(payload?.data?.children) ? payload.data.children : [];
  return children.map(normalizeRedditPost).filter(Boolean);
}

function xmlTag(block, tag) {
  const pattern = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i');
  return decodeHtmlEntities(pattern.exec(block)?.[1] || '');
}

function xmlAttribute(block, tag, attribute) {
  const pattern = new RegExp(`<${tag}[^>]+\\b${attribute}=["']([^"']+)["']`, 'i');
  return decodeHtmlEntities(pattern.exec(block)?.[1] || '');
}

function parseRssFeed(xml) {
  const entries = [...xml.matchAll(/<(?:entry|item)\b[\s\S]*?<\/(?:entry|item)>/gi)];
  return entries.map((match) => {
    const block = match[0];
    const link = xmlAttribute(block, 'link', 'href') || xmlTag(block, 'link') || xmlTag(block, 'id');
    const post = {
      title: xmlTag(block, 'title'),
      body: xmlTag(block, 'content') || xmlTag(block, 'description'),
      flair: '',
      created: xmlTag(block, 'published') || xmlTag(block, 'pubDate') || xmlTag(block, 'updated'),
      permalink: link,
      url: link,
      post_hint: '',
      media_metadata: {},
    };
    const enclosure = xmlAttribute(block, 'enclosure', 'url') || xmlAttribute(block, 'media:content', 'url');
    if (enclosure) post.url_overridden_by_dest = enclosure;
    return normalizeRedditPost(post);
  }).filter(Boolean);
}

function extractSkydlerMaps(script) {
  const match = script.match(/\b(?:rf|[A-Za-z_$][\w$]*)\s*=\s*\{\s*maps:\s*\[([^\]]+)\]/);
  if (!match) return null;
  const maps = [...match[1].matchAll(/[`'"]([A-Za-z][A-Za-z0-9 _-]*)[`'"]/g)]
    .map((item) => item[1].trim().toUpperCase())
    .filter((map) => supportedBiomes.has(map));
  return maps.length >= 2 ? maps : null;
}

function extractSkydlerAsset(script, biome) {
  const assetPaths = [...script.matchAll(/[`'"](\/assets\/[^`'"]+)[`'"]/g)].map((item) => item[1]);
  return assetPaths.find((path) => path.toLowerCase().includes(`/${biome.toLowerCase()}-`)) || null;
}

function extractSkydlerMedia(script, maps, buildDate, source) {
  return maps.map((biome) => {
    const assetPath = extractSkydlerAsset(script, biome);
    if (!assetPath) return null;
    const label = biomeDisplayNames[biome] || biome;
    return {
      type: 'image',
      biome: label,
      alt: `${label} map from today's rotation`,
      caption: `${label} map image from PEAK Map Today, fetched ${buildDate}.`,
      url: new URL(assetPath, source.url).toString(),
    };
  }).filter(Boolean);
}

function nextResetAt(buildDate, fetchedAt) {
  const reset = new Date(`${buildDate}T17:00:00.000Z`);
  const observed = new Date(fetchedAt);
  if (!Number.isNaN(observed.getTime()) && observed >= reset) reset.setUTCDate(reset.getUTCDate() + 1);
  return reset.toISOString();
}

function mapResultFromSequence(maps, buildDate, fetchedAt, source, media = null) {
  const displayMaps = maps.map((map) => biomeDisplayNames[map] || map);
  const sequence = displayMaps.join(' \u2192 ');
  return {
    date: buildDate,
    map: sequence,
    route: 'Daily biome sequence',
    biome: displayMaps.join(', '),
    resetAt: nextResetAt(buildDate, fetchedAt),
    updatedAt: fetchedAt,
    sourceFetchedAt: fetchedAt,
    source: { label: source.label, url: source.url },
    fallbackSource: source.id === 'skydler'
      ? { label: defaultSources[1].label, url: defaultSources[1].url }
      : source.id === 'steam'
        ? { label: defaultSources[0].label, url: defaultSources[0].url }
        : null,
    media: Array.isArray(media) ? media : media ? [media] : [],
  };
}

async function parseSkydlerSource(rootHtml, buildDate, fetchedAt, source) {
  const scriptPath = rootHtml.match(/<script[^>]+src=["']([^"']+index-[^"']+\.js)["']/i)?.[1];
  if (!scriptPath) return null;
  const scriptUrl = new URL(scriptPath, source.url).toString();
  const scriptResponse = await fetchSource(scriptUrl);
  const maps = extractSkydlerMaps(scriptResponse.text);
  if (!maps) return null;
  const media = extractSkydlerMedia(scriptResponse.text, maps, buildDate, source);
  return mapResultFromSequence(maps, buildDate, fetchedAt, source, media);
}

function hasCurrentSteamCycle(html, buildDate) {
  const monthNames = 'January|February|March|April|May|June|July|August|September|October|November|December';
  const pattern = new RegExp(`\\b\\d{1,2}\\s*(?:->|→)\\s*(\\d{1,2})\\s+(${monthNames})\\s+(20\\d{2})\\b`, 'gi');
  return [...cleanText(html).matchAll(pattern)].some((match) => {
    const month = new Date(`${match[2]} 1, ${match[3]} UTC`).getUTCMonth() + 1;
    return dateFromParts(match[3], month, match[1]) === buildDate;
  });
}

function extractExplicitBiomeSequence(html) {
  const text = cleanText(html);
  const pattern = /(?:today(?:['’´]s)?\s+biomes?|current\s+biomes?|today(?:['’´]s)?\s+map(?:\s+sequence)?)\s*[:=-]\s*([^\n<]{8,180})/i;
  const value = text.match(pattern)?.[1] || '';
  const maps = value.split(/\s*(?:,|\/|->|→)\s*/)
    .map((item) => item.trim().toUpperCase())
    .filter((item) => supportedBiomes.has(item));
  return maps.length >= 2 ? maps : null;
}

function extractSteamMedia(html) {
  const tags = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  const tag = tags.find((value) => /sharedFilePreviewImage/i.test(value));
  const url = tag?.match(/\bsrc=["']([^"']+)["']/i)?.[1];
  const safeUrl = url ? mediaUrl(url) : null;
  return safeUrl
    ? { type: 'image', url: safeUrl, alt: 'Steam community daily PEAK map guide', caption: 'Image from the dated Steam community map guide.' }
    : null;
}

function parseSteamSource(html, buildDate, fetchedAt, source) {
  if (!hasCurrentSteamCycle(html, buildDate)) return null;
  const maps = extractExplicitBiomeSequence(html);
  if (!maps) return null;
  return mapResultFromSequence(maps, buildDate, fetchedAt, source, extractSteamMedia(html));
}

function extractResetAt(text) {
  const value = extractField(text, resetLabels);
  if (!value) return null;
  const iso = value.match(/\b20\d{2}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})\b/i)?.[0];
  if (iso) {
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? null : date.toISOString();
  }
  const date = extractDates(value)[0];
  const time = value.match(/\b(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(UTC|GMT|[+-]\d{2}:?\d{2})\b/i);
  if (!date || !time) return null;
  const zone = time[4].toUpperCase() === 'UTC' || time[4].toUpperCase() === 'GMT' ? 'Z' : time[4].replace(/^(\+[0-9]{2})([0-9]{2})$/, '$1:$2');
  const parsed = new Date(`${date}T${time[1].padStart(2, '0')}:${time[2]}:${time[3] || '00'}${zone}`);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function selectTodayMap(posts, buildDate, fetchedAt) {
  const candidates = posts.map((post) => {
    const text = `${post.title}\n${post.body}\n${post.flair}`;
    const dates = extractDates(text);
    const hasMatchingDate = dates.length ? dates.includes(buildDate) : createdDate(post.createdAt) === buildDate;
    const dailySignal = /\b(?:daily|today|current|rotation|reset|seed)\b/i.test(text);
    const map = extractField(text, mapLabels);
    const route = extractField(text, routeLabels);
    const biome = extractField(text, biomeLabels);
    const locationCount = [map, route, biome].filter(Boolean).length;
    if (!hasMatchingDate || !dailySignal || (locationCount < 2 && !post.media)) return null;
    return {
      score: locationCount * 10 + (dates.includes(buildDate) ? 5 : 0) + (post.media ? 1 : 0),
      post,
      map: map || null,
      route: route || null,
      biome: biome || null,
      resetAt: extractResetAt(text),
    };
  }).filter(Boolean).sort((left, right) => right.score - left.score || createdTimestamp(right.post.createdAt) - createdTimestamp(left.post.createdAt));

  const selected = candidates[0];
  if (!selected) return null;
  const media = selected.post.media
    ? {
      type: selected.post.media.type,
      url: selected.post.media.url,
      alt: `PEAK daily map media from r/PeakGame: ${selected.post.title}`.slice(0, 180),
      caption: `Community media from r/PeakGame, fetched ${buildDate}.`,
    }
    : null;
  return {
    date: buildDate,
    map: selected.map,
    route: selected.route,
    biome: selected.biome,
    resetAt: selected.resetAt,
    updatedAt: fetchedAt,
    sourceFetchedAt: fetchedAt,
    source: { label: 'r/PeakGame community post', url: selected.post.url },
    fallbackSource: null,
    media,
  };
}

function emptyTodayMap(buildDate, fetchedAt) {
  return {
    date: buildDate,
    map: null,
    route: null,
    biome: null,
    resetAt: null,
    updatedAt: fetchedAt,
    sourceFetchedAt: fetchedAt,
    source: null,
    fallbackSource: null,
    media: null,
  };
}

async function fetchSource(url) {
  const proxy = process.env.TODAY_MAP_PROXY?.trim();
  if (proxy) return fetchSourceViaProxy(url, proxy);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.TODAY_MAP_FETCH_TIMEOUT_MS) || 15000);
  try {
    const response = await fetch(url, {
      headers: { accept: 'text/html, application/javascript, application/json, application/rss+xml, text/xml;q=0.9', 'user-agent': userAgent },
      redirect: 'follow',
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    if (Buffer.byteLength(text, 'utf8') > maxResponseBytes) throw new Error('response exceeds 4 MB');
    return { text, contentType: response.headers.get('content-type') || '' };
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchSourceViaProxy(url, proxy) {
  const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
  const timeoutSeconds = Math.max(1, Math.ceil((Number(process.env.TODAY_MAP_FETCH_TIMEOUT_MS) || 15000) / 1000));
  const statusMarker = '__PEAK_HTTP_STATUS__';
  const proxyUrl = /^socks5:\/\//i.test(proxy) ? proxy.replace(/^socks5:\/\//i, 'socks5h://') : proxy;
  const { stdout } = await execFile(curl, [
    '-L', '--silent', '--show-error', '--compressed',
    '--max-time', String(timeoutSeconds),
    '--proxy', proxyUrl,
    '-A', userAgent,
    '-w', `\n${statusMarker}%{http_code}`,
    url,
  ], { maxBuffer: maxResponseBytes + 1024, windowsHide: true });
  const markerIndex = stdout.lastIndexOf(`\n${statusMarker}`);
  if (markerIndex < 0) throw new Error('proxy response did not include an HTTP status');
  const status = Number(stdout.slice(markerIndex + statusMarker.length + 1).trim());
  if (status < 200 || status >= 300) throw new Error(`HTTP ${status}`);
  const text = stdout.slice(0, markerIndex);
  if (Buffer.byteLength(text, 'utf8') > maxResponseBytes) throw new Error('response exceeds 4 MB');
  return { text, contentType: '' };
}

function parseSource(text, contentType, url) {
  if (contentType.includes('json') || /\.json(?:\?|$)/i.test(url)) {
    const payload = JSON.parse(text);
    return parseRedditJson(payload);
  }
  return parseRssFeed(text);
}

async function parseConfiguredSource(source, buildDate, fetchedAt) {
  const response = await fetchSource(source.url);
  if (source.id === 'skydler') return parseSkydlerSource(response.text, buildDate, fetchedAt, source);
  if (source.id === 'steam') return parseSteamSource(response.text, buildDate, fetchedAt, source);
  const posts = parseSource(response.text, response.contentType, source.url);
  return selectTodayMap(posts, buildDate, fetchedAt);
}

async function writeTodayMap(value) {
  await writeFile(dataPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function main() {
  const buildDate = resolveBuildDate();
  const fetchedAt = new Date().toISOString();
  const configuredUrl = process.env.TODAY_MAP_SOURCE_URL;
  const sources = configuredUrl
    ? [{ id: 'custom', label: 'Configured map source', url: configuredUrl }]
    : defaultSources;
  const errors = [];
  let result = null;

  for (const [index, source] of sources.entries()) {
    try {
      if (index > 0) console.log(`Primary map source unavailable; trying fallback: ${source.label}`);
      result = await parseConfiguredSource(source, buildDate, fetchedAt);
      if (result) {
        const detail = [result.map, result.route, result.biome].some(Boolean) ? 'with location fields' : 'with media only';
        console.log(`Found today's PEAK map ${detail} from ${result.source.label}: ${result.source.url}`);
        break;
      }
      errors.push(`${source.url}: no current map with explicit fields`);
    } catch (error) {
      errors.push(`${source.url}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  await writeTodayMap(result || emptyTodayMap(buildDate, fetchedAt));
  if (result) {
    console.log(`Wrote today's PEAK map data for ${buildDate}.`);
  } else {
    console.warn(`No verified PEAK map data found for ${buildDate}; wrote a pending record.`);
    for (const error of errors) console.warn(`- ${error}`);
  }
}

export { emptyTodayMap, extractSkydlerMaps, extractSkydlerMedia, parseRedditJson, parseRssFeed, parseSkydlerSource, parseSteamSource, selectTodayMap };

if (import.meta.url === pathToFileURL(resolve(process.argv[1] || '')).href) await main();
