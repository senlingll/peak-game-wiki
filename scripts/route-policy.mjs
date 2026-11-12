/**
 * 路由策略：集中记录需要迁移、保留或返回 410 的旧地址。
 */

export const REDIRECT_ARTICLES = {
  'peak-map-rotation-schedule': 'map-rotation',
  'peak-biomes-list': 'map-rotation',
  'peak-solo-and-public-lobbies': 'room-codes',
  'peak-game-update': 'map-rotation',
};

/**
 * 记录仍有搜索价值、但应合并到对应语言首页的旧工具地址。
 */
export const LOCALIZED_REDIRECTS = {
  '/zh/what-is-peak-game': '/zh/',
  '/es/what-is-peak-game': '/es/',
  '/pt/what-is-peak-game': '/pt/',
};

const gonePaths = [
  '/achievements',
  '/de/achievements', '/fr/achievements', '/it/achievements', '/ko/achievements', '/pt/achievements',
  '/badges-guide', '/de/badges-guide', '/es/badges-guide', '/fr/badges-guide', '/it/badges-guide', '/ja/badges-guide', '/ko/badges-guide', '/pt/badges-guide', '/zh/badges-guide',
  '/items', '/de/items', '/es/items', '/fr/items', '/it/items', '/ko/items', '/pt/items',
  '/de/peak-controller-support', '/es/peak-controller-support', '/fr/peak-controller-support', '/it/peak-controller-support', '/ko/peak-controller-support', '/peak-controller-support', '/pt/peak-controller-support', '/zh/peak-controller-support',
  '/de/peak-cooking-guide', '/es/peak-cooking-guide', '/fr/peak-cooking-guide', '/it/peak-cooking-guide', '/ja/peak-cooking-guide', '/ko/peak-cooking-guide', '/peak-cooking-guide', '/pt/peak-cooking-guide',
  '/de/peak-game-price', '/es/peak-game-price', '/fr/peak-game-price', '/it/peak-game-price', '/ja/peak-game-price', '/ko/peak-game-price', '/peak-game-price', '/pt/peak-game-price', '/zh/peak-game-price',
  '/de/peak-multiplayer-mod', '/fr/peak-multiplayer-mod', '/it/peak-multiplayer-mod', '/ja/peak-multiplayer-mod', '/ko/peak-multiplayer-mod', '/peak-multiplayer-mod', '/pt/peak-multiplayer-mod',
  '/de/peak-photon-troubleshooting', '/es/peak-photon-troubleshooting', '/fr/peak-photon-troubleshooting', '/it/peak-photon-troubleshooting', '/ja/peak-photon-troubleshooting', '/ko/peak-photon-troubleshooting', '/peak-photon-troubleshooting', '/pt/peak-photon-troubleshooting',
  '/de/peak-revive-guide', '/es/peak-revive-guide', '/fr/peak-revive-guide', '/it/peak-revive-guide', '/ja/peak-revive-guide', '/ko/peak-revive-guide', '/peak-revive-guide', '/pt/peak-revive-guide',
  '/de/peak-secret-ending-guide', '/fr/peak-secret-ending-guide', '/it/peak-secret-ending-guide', '/ja/peak-secret-ending-guide', '/ko/peak-secret-ending-guide', '/peak-secret-ending-guide', '/pt/peak-secret-ending-guide',
  '/de/peak-system-requirements', '/es/peak-system-requirements', '/fr/peak-system-requirements', '/it/peak-system-requirements', '/ja/peak-system-requirements', '/ko/peak-system-requirements', '/peak-system-requirements', '/pt/peak-system-requirements', '/zh/peak-system-requirements',
  '/de/what-is-peak-game', '/fr/what-is-peak-game', '/it/what-is-peak-game', '/ja/what-is-peak-game', '/ko/what-is-peak-game', '/what-is-peak-game',
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
 * 判断路径是否应通过永久重定向合并到语言首页。
 *
 * @param {string} pathname 站内路径
 * @returns {boolean} 是否属于语言首页重定向
 */
export function isLocalizedRedirect(pathname) {
  const withoutQuery = String(pathname ?? '').split(/[?#]/, 1)[0];
  const normalized = `/${withoutQuery.replace(/^\/+|\/+$/g, '')}`;
  return Object.hasOwn(LOCALIZED_REDIRECTS, normalized);
}

/**
 * 判断某语言文章是否已经合并到该语言首页。
 *
 * @param {string} locale 语言代码
 * @param {string} slug 文章路径
 * @returns {boolean} 是否不应生成独立页面
 */
export function isLocalizedRedirectRoute(locale, slug) {
  const pagePath = String(slug ?? '').split('#', 1)[0].replace(/^\/+|\/+$/g, '');
  return isLocalizedRedirect(locale === 'en' ? `/${pagePath}` : `/${locale}/${pagePath}`);
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

