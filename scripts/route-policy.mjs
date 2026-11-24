/**
 * 路由策略：集中记录需要迁移、保留或返回 410 的旧地址。
 */

export const DEFAULT_PUBLISHED_ARTICLES = [
  'peak-biomes-list',
  'peak-game-update',
  'what-is-peak-game',
  'peak-game-price',
  'peak-system-requirements',
  'peak-map-rotation-schedule',
  'room-codes',
  'peak-photon-troubleshooting',
  'peak-revive-guide',
  'peak-cooking-guide',
  'peak-secret-ending-guide',
  'peak-solo-and-public-lobbies',
  'peak-multiplayer-mod',
  'peak-controller-support',
];

export const REDIRECT_ARTICLES = {
  'peak-map-rotation-schedule': 'map-rotation',
  'peak-biomes-list': 'map-rotation',
  'peak-solo-and-public-lobbies': 'room-codes',
  'peak-game-update': 'map-rotation',
  'badges-guide': 'achievements',
  'what-is-peak-game': 'home',
};

/**
 * 记录按语言单独合并到对应工具页的旧文章路径（其余语言保留独立页面）。
 */
export const LOCALIZED_REDIRECTS = {
  '/peak-photon-troubleshooting': '/room-codes/#connection-check',
  '/de/peak-photon-troubleshooting': '/de/room-codes/#connection-check',
  '/es/peak-photon-troubleshooting': '/es/room-codes/#connection-check',
  '/fr/peak-photon-troubleshooting': '/fr/room-codes/#connection-check',
  '/it/peak-photon-troubleshooting': '/it/room-codes/#connection-check',
  '/ja/peak-photon-troubleshooting': '/ja/room-codes/#connection-check',
  '/ko/peak-photon-troubleshooting': '/ko/room-codes/#connection-check',
  '/pt/peak-photon-troubleshooting': '/pt/room-codes/#connection-check',
  '/peak-multiplayer-mod': '/room-codes/#connection-check',
  '/de/peak-multiplayer-mod': '/de/room-codes/#connection-check',
  '/fr/peak-multiplayer-mod': '/fr/room-codes/#connection-check',
  '/it/peak-multiplayer-mod': '/it/room-codes/#connection-check',
  '/ja/peak-multiplayer-mod': '/ja/room-codes/#connection-check',
  '/ko/peak-multiplayer-mod': '/ko/room-codes/#connection-check',
  '/pt/peak-multiplayer-mod': '/pt/room-codes/#connection-check',
};

const gonePaths = [
  '/de/peak-controller-support', '/es/peak-controller-support', '/fr/peak-controller-support', '/it/peak-controller-support', '/ko/peak-controller-support', '/peak-controller-support', '/pt/peak-controller-support', '/zh/peak-controller-support',
  '/de/peak-cooking-guide', '/es/peak-cooking-guide', '/fr/peak-cooking-guide', '/it/peak-cooking-guide', '/ja/peak-cooking-guide', '/ko/peak-cooking-guide', '/peak-cooking-guide', '/pt/peak-cooking-guide',
  '/de/peak-game-price', '/es/peak-game-price', '/fr/peak-game-price', '/it/peak-game-price', '/ja/peak-game-price', '/ko/peak-game-price', '/peak-game-price', '/pt/peak-game-price', '/zh/peak-game-price',
  '/de/peak-revive-guide', '/es/peak-revive-guide', '/fr/peak-revive-guide', '/it/peak-revive-guide', '/ja/peak-revive-guide', '/ko/peak-revive-guide', '/peak-revive-guide', '/pt/peak-revive-guide',
  '/de/peak-secret-ending-guide', '/fr/peak-secret-ending-guide', '/it/peak-secret-ending-guide', '/ja/peak-secret-ending-guide', '/ko/peak-secret-ending-guide', '/peak-secret-ending-guide', '/pt/peak-secret-ending-guide',
  '/de/peak-system-requirements', '/es/peak-system-requirements', '/fr/peak-system-requirements', '/it/peak-system-requirements', '/ja/peak-system-requirements', '/ko/peak-system-requirements', '/peak-system-requirements', '/pt/peak-system-requirements', '/zh/peak-system-requirements',
];

export const GONE_PATHS = new Set(gonePaths);

/**
 * 判断一个站内路径是否属于已核对的 410 清单。
 *
 * @param {string} pathname 站内路径
 * @returns {boolean} 是否应返回 410
 */
export function isGonePath(pathname) {
  const withoutQuery = String(pathname ?? '').split(/[?#]/, 1)[0];
  const normalized = `/${withoutQuery.replace(/^\/+|\/+$/g, '')}`;
  return GONE_PATHS.has(normalized);
}

/**
 * 判断路径是否应通过永久重定向合并到目标工具页或首页。
 *
 * @param {string} pathname 站内路径
 * @returns {boolean} 是否属于按语言重定向的路径
 */
export function isLocalizedRedirect(pathname) {
  const withoutQuery = String(pathname ?? '').split(/[?#]/, 1)[0];
  const normalized = `/${withoutQuery.replace(/^\/+|\/+$/g, '')}`;
  return Object.hasOwn(LOCALIZED_REDIRECTS, normalized);
}

/**
 * 获取某语言文章的重定向目标地址；若未配置按语言重定向则返回 null。
 *
 * @param {string} locale 语言代码
 * @param {string} slug 文章路径
 * @returns {string | null} 重定向目标路径或 null
 */
export function getLocalizedRedirectTarget(locale, slug) {
  const pagePath = String(slug ?? '').split('#', 1)[0].replace(/^\/+|\/+$/g, '');
  const normalized = locale === 'en' ? `/${pagePath}` : `/${locale}/${pagePath}`;
  return LOCALIZED_REDIRECTS[normalized] ?? null;
}

/**
 * 判断某语言文章是否已经通过按语言重定向合并到目标页。
 *
 * @param {string} locale 语言代码
 * @param {string} slug 文章路径
 * @returns {boolean} 是否不应生成独立页面
 */
export function isLocalizedRedirectRoute(locale, slug) {
  return getLocalizedRedirectTarget(locale, slug) !== null;
}

/**
 * 判断一个文章 slug 是否已经迁移到主题工具页。
 *
 * @param {string} slug 文章 slug
 * @returns {boolean} 是否不应继续生成独立文章
 */
export function isRedirectedArticle(slug) {
  return Object.hasOwn(REDIRECT_ARTICLES, slug);
}

