# PEAK Game Price Page Brief

## Decision

- Page type: informational price guide with commercial/transactional price-check intent.
- Primary keyword: `peak game price`.
- Similarweb evidence: 1,213 average monthly searches; 1,290 in the latest 28-day window; difficulty 48; primary intent `Informational`; exact match in phrase match and related keywords; global `country=999`; latest trend month `2026-08`.
- Why this is a new page: the existing `what-is-peak-game` page explains the game and play modes but does not publish Steam prices. A dated, region-by-region official price table serves a distinct purchase decision. Existing PS5/crossplay searches map to `/room-codes/`; map and biome GSC opportunities map to existing map pages.
- Recommended URL: English `/peak-game-price`; localized routes follow the existing nine-locale route pattern. English routes omit the final slash; localized routes use a slash.
- SERP limitation: the environment did not expose the SEO skill's native `web_search` tool. I did not query a search engine through a browser or ad hoc HTTP request and do not claim verified current top-three rankings or competitor heading structures. Similarweb `leadingSite` is recorded only as a click leader, not as a SERP position.

## Similarweb Candidate Review

Keyword generator data was collected for five topic seeds (`PEAK game`, `PEAK game price`, `PEAK game mods`, `PEAK game PS5`, `PEAK game save`). Each response contains phrase match, related keywords, and question keywords. The keyword generator supports only the global `country=999` scope. `averageVolume` is treated as monthly search volume; `windowVolume` is shown separately. Difficulty `0` is not interpreted as no competition.

| Candidate | Source tab | Monthly / 28-day volume | Difficulty | Intent | Page match and action |
| --- | --- | ---: | ---: | --- | --- |
| `peak game price` | Phrase match + related | 1,213 / 1,290 | 48 | Informational | New price guide; exact primary match and distinct purchase decision. |
| `how much is peak` | Related | 1,218 / 3,360 | 48 | Informational | FAQ on the new price page; broad wording, so not primary. Steam is the click leader. |
| `how much does peak cost on steam` | Related | 979 / 1,070 | 46 | Informational | H2/supporting phrase on the price page; direct Steam price intent. |
| `peak price` | Related | 2,767 / 3,130 | 44 | Informational | Do not target; ambiguous entity and broader than the game query. |
| `peak steam price` | Related | 654 / 300 | 42 | Intent not reported | Supporting wording only; do not make it primary without stronger market evidence. |
| `peak game price history` | Phrase + related | 164 / 0 | 72 | Intent not reported | Do not use; high difficulty and no first-party historical price series. |
| `peak game for sale` | Related | 51 / 720 | 0 | Intent not reported | Mention a dated sale only; ephemeral query is not a separate page. |
| Price-related candidates | Question keywords | No relevant rows returned | N/A | N/A | The price seed's questions tab was checked and returned no price-specific candidate. |
| `peak mods` | Related | 38,715 / 56,060 | 15 | Navigational | Do not create an article; click leader is Thunderstore and the intent is to reach a mod catalog. |
| `peak multiplayer mod` | Related | 6,626 / 10,320 | 58 | Informational | Do not create; mod/download compatibility is a different and riskier intent, and current Photon troubleshooting already covers mod removal. |
| `peak game ps5` | Phrase match | 2,398 / 3,500 | 48 | Informational | Existing `/room-codes/` platform section; no new page. |
| `is peak on ps5` | Related | 5,867 / 5,640 | 27 | Informational | Existing `/room-codes/` FAQ; no new page. |
| `is peak cross platform` | Related | 5,566 / 5,540 | 52 | Informational | Existing `/room-codes/` section and FAQ; no new page. |
| `peak crossplay` | Related | 3,979 / 4,150 | 0 | Informational | Existing `/room-codes/` support paragraph/FAQ and internal-link anchor. |
| `does peak save your progress` | Related | 668 / 580 | 0 | Intent not reported | Do not create; official sources checked do not document a save/resume mechanic. |
| `how to save peak game` | Question keywords | 145 / 1,210 | 0 | Intent not reported | Do not publish as an FAQ answer until the mechanic is verified; current click leader is Steam Community. |
| `why does my peak game keep lagging, fps dropping` | Question keywords | 44 / 1,340 | 0 | Intent not reported | No new page; small monthly sample and an existing connection troubleshooting page covers adjacent support intent. |

## GSC And Site Evidence

- GSC Trends API, last 28 days ending `2026-09-25`: 1,742 clicks, 33,702 impressions, average position 7.07. Five hundred stored queries were scanned.
- Six queries met the 10–30 position / 50+ impression screen. They were `peak map today` (123 impressions, position 12.67), `peak biomes today` (97, 11.07), `peak` (82, 16.80), `map peak` (61, 11.75), `peak map biomes today` (60, 10.37), and `peak biomes` (52, 10.10). Keyword-page mapping points to `/map-rotation`, `/peak-biomes-list`, the home page, and localized map routes. They are existing-page optimization opportunities, not price-page evidence.
- Similarweb site traffic overview (August 2026): about 2,777 average monthly visits and 1,749 unique users. The first 100 site keywords contain map/wiki queries and no `peak game price` row; absence from this first page is not treated as zero demand.
- Similarweb country-specific local keyword requests returned no exact match for the tested localized price phrases. A Semrush fallback request failed with HTTP 403. The target-market map therefore keeps non-English primary keywords unset and marks them deferred; translated phrases are not presented as proven search terms.
- All eight non-English pages still receive complete, natural copy for readers, but no translated phrase is assigned to the page's `primaryKeyword` field or recorded as a proven SEO target. The locale evidence map deliberately uses `primaryKeyword: null` and empty `relatedKeywords` until local demand can be verified.

## Verified Price Snapshot

Steam's official App Details API returned HTTP 200 for all nine target markets on `2026-09-25`. At that check, all storefronts showed a temporary 38% discount. The API does not provide an offer end date, so the page must call this a dated snapshot and direct readers to the live regional Steam listing before buying.

| Locale market | Regular price | Sale price at check | Source country |
| --- | ---: | ---: | --- |
| US | $7.99 | $4.95 | `us` |
| China | CNY 33.00 | CNY 20.46 | `cn` |
| Spain | EUR 7.49 | EUR 4.64 | `es` |
| Japan | JPY 880 | JPY 545 | `jp` |
| South Korea | KRW 8,400 | KRW 5,210 | `kr` |
| Germany | EUR 7.49 | EUR 4.64 | `de` |
| France | EUR 7.49 | EUR 4.64 | `fr` |
| Brazil | BRL 23.99 | BRL 14.87 | `br` |
| Italy | EUR 7.49 | EUR 4.64 | `it` |

This is not a download site or download-intent page. There are no file CTAs, package facts, or version claims to update. The official Steam News API was checked as context; its latest announcement was `Patch 2.4.C: Bookworm badge fix, lag fix and more`, published `2026-09-14`. No version fields are added to this price article.

## Content And Acceptance

- SEO title: `PEAK Game Price in 2026: Steam Prices by Region`.
- H1: `PEAK Game Price: Steam Prices by Region`.
- Description: lead with the dated sale snapshot, list price comparison, and reminder to confirm the live regional Steam checkout price.
- Outline: direct price answer; nine-market official price table; list price versus temporary sale; what the Steam purchase includes; steps to check the live regional listing and cart; limits of a one-day price snapshot; FAQ.
- Supporting terms: `how much is PEAK`, `how much does PEAK cost on Steam`, `PEAK Steam price`, `PEAK price by country`. Only the first three have Similarweb candidate rows; the last is a descriptive section phrase, not a claimed metric-backed keyword.
- FAQ: current US price; country/currency differences; sale duration; historical sale claims; console availability (link to `/room-codes/`, not duplicated).
- Internal links: link out to `what-is-peak-game`, `room-codes`, and `peak-game-update`; add a contextual link from `what-is-peak-game` to the new page. Do not add the page to the top navigation.
- Media: three distinct existing official Steam assets (`peak-final-ascent.webp`, `peak-coop-climb.webp`, `peak-map-route.webp`) used once each, with localized alt text/captions. The key art and gameplay shots show the actual game and are explicitly not presented as price screenshots.
- Acceptance: the exact primary phrase appears in the title, first 100 meaningful words, and at least one H2; raw HTML includes answer/table/FAQ; all nine route translations have localized title, description, H1, canonical, reciprocal hreflang, Article and FAQ schema where supported; the sitemap includes every route with `lastmod=2026-09-25`; validate page status, three unique media references, desktop/mobile rendering, and no horizontal overflow.
