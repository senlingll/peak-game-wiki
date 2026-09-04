# PEAK Game Wiki

PEAK Game Wiki is an independent, multilingual static wiki for map rotations, items, badges, co-op guidance, achievements, and official update context. The canonical site is <https://peak-game.wiki/>.

## Quick start

Requirements: Node.js 20 or newer and Python 3 for the local static server.

```powershell
npm.cmd run dev
```

`dev` rebuilds the site first, then serves the generated `dist/` directory at <http://localhost:4173/>. To build without starting a server:

```powershell
npm.cmd run build
```

## Project map

- `scripts/build.mjs` is the build entry point. It renders all published pages into `dist/`.
- `scripts/locales.mjs` owns shared rendering, routes, metadata, hreflang, sitemap output, and localized layout copy.
- `scripts/article-guides.mjs` contains the English article sources. `scripts/article-*-locales.mjs` contains article translations.
- `scripts/map-guide.mjs` and `scripts/achievement-guide.mjs` contain the other guide sources.
- `data/today-map.json` is the build-time current map record. `data/peak-map-history.json` powers dated rotation history, and `data/peak-updates.json` powers the update log.
- `public/` contains assets copied into the publish directory.
- `docs/` contains operations, SEO planning, and outreach material.
- `dist/` is generated output and is ignored by Git. Edit source scripts or data files, then rebuild.

The supported locale routes are English at the root plus `zh`, `es`, `ja`, `ko`, `de`, `fr`, `pt`, and `it`. Non-English pages use a trailing slash; English pages use the root-level route convention.

## Daily content flow

The scheduled workflow in `.github/workflows/daily-map-build.yml` fetches the current map, optionally refreshes official Steam update entries, commits verified data changes, builds the static site, deploys Pages, and pings IndexNow. The fetchers keep fields pending when a source cannot be verified; they must not be replaced with guessed map or patch data.

For a manual data refresh, see [data/README.md](data/README.md) and [docs/operations.md](docs/operations.md).

## Deployment

Cloudflare Pages serves the `dist/` directory from the existing `peak-game-wiki` project. After a successful build, the direct deployment command is:

```powershell
npx.cmd wrangler whoami
npx.cmd wrangler pages deploy dist --project-name peak-game-wiki --branch main
```

Cloudflare and GitHub credentials are provided by the local environment or CI secrets. Do not commit or print tokens.

## Sources and boundaries

Official game facts and visual media start with the [PEAK Steam page](https://store.steampowered.com/app/3527290/PEAK/) and the [Steam News API](https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=3527290&count=20&format=json). The wiki separates source-backed facts from practical field notes and directs players to verify time-sensitive routes and mechanics in the current game.

## Item database expansion rationale

The homepage item database expanded from 6 to 16 entries to serve verified Bing demand in Asian-language searches and provide clearer source material for AI citations. Google Ads Planner reports no measurable PEAK keyword volume, so it is not used as this expansion's KPI. Bing evidence included Chinese `peak道具` (73 impressions, 37 clicks, 50.7% CTR, average position 1.9), Chinese `peak地图轮换` (104 impressions, 46.2% CTR, average position 1.5), and Korean `피크 맵 로테이션` (56% CTR, average position 1.5).

The English opportunity `peak game items` was assessed at KD 27.8 but without confirmed volume; `peak items` was assessed at KD 51.7 and remains out of scope. The expansion therefore prioritizes Bing visibility, AI citation coverage, and homepage completeness rather than paid links or a separate landing page.
