import { execFile as execFileCallback } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const projectRoot = resolve(import.meta.dirname, '..');
const dataPath = resolve(projectRoot, 'data/today-map.json');
const defaultSourceUrls = [
  'https://www.reddit.com/r/PeakGame/new.json?raw_json=1&limit=50',
  // Reddit's public JSON endpoint may return 403 while the public Atom feed remains available.
  'https://www.reddit.com/r/PeakGame/.rss?limit=50',
  'https://old.reddit.com/r/PeakGame/new/.rss?limit=50',
];
const userAgent = 'peak-game-wiki-daily-map/1.0 (+https://peak-game.wiki/map-rotation)';
const maxResponseBytes = 4 * 1024 * 1024;
const execFile = promisify(execFileCallback);

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
      headers: { accept: 'application/json, application/rss+xml, text/xml;q=0.9', 'user-agent': userAgent },
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

async function writeTodayMap(value) {
  await writeFile(dataPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function main() {
  const buildDate = resolveBuildDate();
  const fetchedAt = new Date().toISOString();
  const configuredUrl = process.env.TODAY_MAP_SOURCE_URL;
  const sourceUrls = configuredUrl ? [configuredUrl] : defaultSourceUrls;
  const errors = [];
  let result = null;

  for (const url of sourceUrls) {
    try {
      const response = await fetchSource(url);
      const posts = parseSource(response.text, response.contentType, url);
      result = selectTodayMap(posts, buildDate, fetchedAt);
      if (result) {
        const detail = [result.map, result.route, result.biome].some(Boolean) ? 'with location fields' : 'with media only';
        console.log(`Found a dated PEAK community post ${detail}: ${result.source.url}`);
        break;
      }
      errors.push(`${url}: no matching dated post with explicit map fields`);
    } catch (error) {
      errors.push(`${url}: ${error instanceof Error ? error.message : String(error)}`);
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

export { emptyTodayMap, parseRedditJson, parseRssFeed, selectTodayMap };

if (import.meta.url === pathToFileURL(resolve(process.argv[1] || '')).href) await main();
