# PEAK Cooking Guide: SEO Brief

Research date: 2026-09-25. This brief records the pre-implementation decision for one new informational guide. Similarweb keyword data is global (`country=999`) and covers 2026-08-29 through 2026-09-25. Similarweb `averageVolume` is reported as monthly average searches; `windowVolume` is the separate recent 28-day value. Difficulty is reproduced as returned. A returned `0` is not treated as proof of low competition.

## Decision

Create one page at `/peak-cooking-guide` for the English global query `PEAK cooking`. The distinct intent is to learn how cooking works, compare documented cooked effects, and avoid wasting or harming the team with non-food items. The current `/items/` page is a broad searchable 134-entry catalog with cooking notes inside item rows; it does not provide a cooking workflow or a consolidated cooked-effects guide. The new page summarizes that separate task and links back to the full item catalog.

Do not create pages for `PEAK food`, solo play, maps, or Final Ascent. The first belongs to `/items/`; solo guidance overlaps `/what-is-peak-game`, `/how-to-play-peak`, and `/peak-game-tips`; map and biome queries map to `/map-rotation` and `/peak-biomes-list`; completion and badge language maps to `/achievements` and `/badges-guide`.

## Demand and Cannibalization

GSC site overview for the latest stored 28-day window (2026-08-26 to 2026-09-22) reports 1,742 clicks, 33,702 impressions, and average position 7.07. The inspected near-position queries are map/biome-led and already resolve to map or biome pages; no cooking query appeared in the saved GSC evidence. Representative page-level rows:

| GSC query | Current URL | Clicks | Impressions | CTR | Position | Decision |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `peak map today` | `/map-rotation` | 6 | 113 | 5.31% | 12.14 | Improve the existing map page; no new page |
| `peak biomes today` | `/map-rotation` | 0 | 82 | 0% | 10.20 | Improve the existing map page; no new page |
| `map peak` | `/map-rotation` | 0 | 30 | 0% | 11.07 | Keep assigned to map rotation |
| `peak map biomes today` | `/map-rotation` | 1 | 44 | 2.27% | 10.36 | Keep assigned to map rotation |
| `peak biomes` | `/peak-biomes-list` | 0 | 64 | 0% | 7.75 | Keep assigned to the biomes list |

Similarweb seed comparison, all exact matches and global `country=999`:

| Candidate | Monthly average | 28-day volume | Difficulty | Intent | Existing page fit | Decision |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `PEAK cooking` | 1,225 | 1,190 | 0 | Informational | `/items/` has row-level notes, not a cooking guide | New page |
| `PEAK solo` | 1,067 | 1,010 | 0 | Not returned | Beginner and play-method guides cover the intent | Existing pages; no new page |
| `PEAK solo guide` | 263 | 0 | 55 | Informational | `/what-is-peak-game`, `/how-to-play-peak`, `/peak-game-tips` | Existing pages; no new page |
| `PEAK Final Ascent` | 1,025 | 1,240 | 1 | Informational | Achievement, badge, map, and update pages cover adjacent intent | Existing pages; no new page |

`PEAK cooking` has an exact-match monthly average of 1,225, a 1,190 28-day value, an August 2026 trend value of 3,592, and Similarweb-reported difficulty 0. It is informational. The leading site is `peak.wiki.gg`. The `peak food` and `peak food guide` variants show greater broad food demand but map to the existing item catalog and are not used to justify another general food page.

## SERP Review

Google regional requests for US, Japan, and Germany timed out in this environment. Current Bing snapshots were fetched on 2026-09-25 for `PEAK cooking`, `PEAK game cooking guide`, and `PEAK game food effects`. Bing resolved to Chinese-language generic PEAK results and repeated substantially the same list for all three queries: the site's Chinese homepage, a Baidu PEAK entry, the official Steam store page, and the community PEAK Wiki homepage. No cooking-specific guide appeared in those snapshots. These results are recorded as cross-market SERP observations, not as English or local-market Google rankings.

The best available content/source comparison is the community-maintained [PEAK Wiki Items table](https://peak.wiki.gg/wiki/Items). The current repository snapshot records 51 food entries and 16 explicit food cooking notes, but its listed last-edit date is 2026-08-14. It distributes cooking information across item rows and does not answer the workflow and risk questions in one page. Similarweb's cooking questions also surface Reddit and video results, which is evidence of unresolved user questions rather than authoritative mechanic data.

The information gain is a source-dated, item-by-item cooked effect table; a separate list of non-food cooking interactions; a short process that uses only documented controls; and explicit unanswered cases where the source does not support a claim. Google SERP structure remains unverified and is disclosed rather than inferred.

## Similarweb Candidate Audit

The keyword generator returned 63 phrase-match rows, 100 related-keyword rows, and 12 question rows. The following PEAK-game candidates were individually checked for volume, returned difficulty, intent, and fit. When Similarweb did not return intent or monthly average, the table says so; informational intent is inferred from question wording only where stated. Obvious Snow Peak cookware, Kodiak food, Moonlight Peaks, homonyms, misspellings, and unrelated food/cooking results were rejected as no-action noise.

### Phrase Match

| Candidate | Monthly avg. | 28-day | Difficulty | Intent | Page match and action |
| --- | ---: | ---: | ---: | --- | --- |
| `peak cooking` | 1,225 | 1,190 | 0 | Informational | Exact primary; new cooking guide |
| `cooking peak` | 568 | 1,790 | 0 | Informational | Same intent; H2 wording and anchor to new guide, not a second page |
| `cooking food peak` | 40 | 1,100 | 0 | Not returned | Cooking process/effects section in the new guide |
| `peak cooking badge` | 28 | 920 | 0 | Not returned | Existing `/badges-guide`; section/FAQ there, no new page |
| `peak cooking game` | 0 | 840 | 0 | Not returned | Low/unstable average and broad game wording; no separate target |
| `any benefit of cooking food beyond once` | Not returned | 540 | 0 | Informational, inferred from question | FAQ only; explain that a repeat benefit is not established by the cited snapshot |
| `peak cooking milk` | 151 | 460 | 0 | Not returned | New guide effect table; Fortified Milk has a documented cooked effect |
| `peak cooking non consumables` | 52 | 390 | 0 | Not returned | New guide's non-food section/FAQ, limited to sourced items |
| `does cooking water do anything in peak` | Not returned | 370 | 0 | Informational, inferred from question | No page claim: the inspected source does not verify a water cooking effect |
| `what does cooking the book of bones do peak` | Not returned | 370 | 0 | Informational, inferred from question | New guide FAQ; source table says no effect |
| `peak all cooking effects` | Not returned | 300 | 0 | Not returned | New guide's consolidated table; not a separate page |
| `peak cooking rescue claw` | Not returned | 280 | 0 | Not returned | New guide non-food table; source says immediately incinerated |
| `peak levels of cooking` | Not returned | 260 | 0 | Not returned | Ambiguous level/stage wording; no cooking-level system verified, no action |
| `what luggage chas cooking pot peak` | 40 | 200 | 0 | Not returned | Misspelled/ambiguous item wording; no action or invented cooking-pot entity |
| `peak what does cooking backpack do` | 63 | 130 | 0 | Informational, inferred from question | Source snapshot has no cooking note for Backpack; no unsupported effect claim |
| `cooking in peak` | 51 | 120 | 0 | Not returned | New guide section and natural internal anchor |
| `what does cooking the flare do in peak` | 67 | 60 | 56 | Informational | New guide FAQ/table; source records up to 20 Injury within 4.8 m |
| `what does cooking the parasol do in peak` | 67 | 60 | 55 | Informational | Source snapshot has no cooking effect; no asserted effect and no new page |
| `peak cooking random items` | 48 | 30 | 0 | Not returned | New guide's boundary/risk section only; do not recommend random cooking |
| `what does cooking the antidote do in peak` | 62 | 30 | 56 | Informational | New guide FAQ/table; source records poison removal in a 4.8 m radius |
| `what does cooking the binoculars do in peak` | 64 | 30 | 55 | Informational | No cooking note in snapshot; no action |
| `what does cooking the flying disc do in peak` | 64 | 30 | 57 | Informational | No cooking note in snapshot; no action |
| `what does cooking the anti rope do in peak` | 54 | 20 | 56 | Informational | New guide FAQ/table; source says immediately incinerated |
| `what does cooking the bandage do in peak` | 54 | 20 | 2 | Informational | New guide FAQ; source says no effect |
| `what does cooking the first-aid kit do in peak` | 53 | 10 | 0 | Informational | New guide FAQ; source says no effect |
| `cooking peak wiki` / `peak cooking wiki` | 38 each | 10 each | 0 | Navigational, inferred | Link to the existing item source; no new wiki/index page |

### Related Keywords

| Candidate | Monthly avg. | 28-day | Difficulty | Intent | Page match and action |
| --- | ---: | ---: | ---: | --- | --- |
| `peak food` | 3,998 | 4,390 | 61 | Informational | Existing `/items/` remains the broad food target |
| `peak food guide` | 2,269 | 3,870 | 56 | Informational | Existing item catalog; add a contextual link to the cooking guide |
| `peak foods` | 897 | 1,260 | 65 | Informational + navigational | Existing item catalog; no new food page |
| `food peak` | 1,067 | 1,990 | 0 | Not returned | Word-order/homonym ambiguity; no separate target |
| `cooking peak` | 568 | 1,790 | 0 | Informational | New guide H2/anchor; same primary intent |
| `packaged food peak` | 379 | 1,310 | 0 | Not returned | Existing `/items/` packaged-food rows |
| `things that can be cooked peak` | 60 | 820 | 0 | Not returned | New guide's effects table and item boundary section |
| `peak airline food` | 182 | 660 | 0 | Not returned | Existing `/items/` item record; internal item anchor |
| `peak all food` | 103 | 520 | 0 | Not returned | Existing `/items/` categories; no new page |
| `food items in peak` | 76 | 250 | 0 | Informational + navigational | Existing `/items/` page; link to cooking guide for cooked effects |
| `peak edible foods` | 273 | 250 | 55 | Informational | Existing `/items/` catalog; no duplicate list |
| `peak safe foods` | 247 | 90 | 55 | Informational | Existing food rows; avoid an unsupported blanket “safe” ranking |
| `cook food peak` | 57 | 120 | 0 | Informational | New guide process section and anchor |
| `should you cook food once or twice in peak` | 69 | 60 | 0 | Informational | New guide FAQ, answer bounded by sources |
| `peak cooking non consumables` | 52 | 390 | 0 | Not returned | New guide FAQ/table for documented interactions only |
| `peak foods ranked` | 50 | 460 | 0 | Not returned | No ranking evidence or stable tier basis; do not create or rank |
| `cooked marshmallow peak` | 237 | 320 | 0 | Not returned | No corresponding cooked effect in the inspected food-note list; no claim |
| `cooked backpack peak` | 49 | 950 | 0 | Not returned | Source snapshot has no Backpack cooking note; no effect claim |
| `peak food camp boss` / `peak food camp ghost` | 64 each | 130 each | 0 | Informational | Camp/boss strategy is a different intent and not verified by the item table; no action |
| `peak safe to eat foods` | 96 | 30 | 0 | Informational | Broad consumable lookup remains in `/items/`; no unsupported safety label |
| `cook the cure all peak` | 103 | 10 | 0 | Informational | Route to the Book of Bones FAQ; item table says no effect |
| `peak should i cook everything` | 103 | 0 | 0 | Informational | FAQ boundary: no, the table includes no-effect and hazardous interactions |
| `peak should i double cook` | 52 | 0 | 0 | Informational | FAQ only; a repeat benefit is not established in current cited evidence |
| `does airplane food heal you in peak` | 51 | 0 | 0 | Informational | Existing `/items/` hunger/stat fields; not a cooking page section |

### Question Keywords

Question rows below were checked individually. A dash means Similarweb did not return a monthly average; use the 28-day value only. For rows with a blank tool intent, intent is inferred from the question, not reported by Similarweb.

| Question candidate | Monthly avg. | 28-day | Difficulty | Intent | Page decision |
| --- | ---: | ---: | ---: | --- | --- |
| `does cooking water do anything in peak` | Not returned | 370 | 0 | Informational, inferred | No answer without source evidence; defer rather than invent a mechanic |
| `what does cooking the book of bones do peak` | Not returned | 370 | 0 | Informational, inferred | FAQ: the inspected item row says no effect |
| `what luggage has cooking pot peak` | 40 | 200 | 0 | Informational, inferred | Misspelled and ambiguous; no new item/page claim |
| `what does cooking the flare do in peak` | 67 | 60 | 56 | Informational | FAQ/table: explosion can deal up to 20 Injury within 4.8 m |
| `what does cooking the parasol do in peak` | 67 | 60 | 55 | Informational | No documented result in the inspected source; no effect claim |
| `what does cooking backpack do in peak` | 62 | 30 | 56 | Informational | No documented result in the inspected source; no effect claim |
| `what does cooking the antidote do in peak` | 62 | 30 | 56 | Informational | FAQ/table: explosion removes up to 20 Poison within 4.8 m |
| `what does cooking the binoculars do in peak` | 64 | 30 | 55 | Informational | No documented cooking result; no action |
| `what does cooking the flying disc do in peak` | 64 | 30 | 57 | Informational | No documented cooking result; no action |
| `what does cooking the anti rope do in peak` | 54 | 20 | 56 | Informational | FAQ/table: immediately incinerated per item table |
| `what does cooking the bandage do in peak` | 54 | 20 | 2 | Informational | FAQ: item table says no effect |
| `what does cooking the first-aid kit do in peak` | 53 | 10 | 0 | Informational | FAQ: item table says no effect |

## Sources, Freshness, and Media

- Game/update source: official [PEAK Steam news feed](https://store.steampowered.com/news/app/3527290). Its latest saved item is **Patch 2.4.C**, dated 2026-09-14; the patch says “Amulets can no longer be cooked.” This current official rule is called out separately and takes precedence over older item-table snapshots.
- Item effect source: community-maintained [PEAK Wiki Items](https://peak.wiki.gg/wiki/Items), project snapshot last edited 2026-08-14. It records 51 foods and 16 explicit food cooking notes. Cite this as community-maintained reference data, not as a developer-authored source, and tell readers the table is a dated snapshot.
- This is an informational game wiki, not a game download site, and the selected cluster has no download intent. No game version, download URL, file size, package, or download CTA is published by this page.
- Use three distinct existing in-game item assets already in the repository: Portable Stove (`/media/items/portable-stove.webp`), Green Shroomberry (`/media/items/green-shroomberry.webp`), and cooked bird (`/media/items/cooked-bird.webp`). These are community-maintained wiki item images, not Steam screenshots. Keep localized alt text and captions; the site footer already credits the item source and CC BY-SA license. The official Steam screenshot library has no verified cooking-specific scene in the checked assets, so no unrelated screenshot, video embed, or generated fake gameplay is added.

## Implementation and Acceptance

- Page type: informational article/field guide. Implementation skill: `seo-article-writer`; final repair pass: `seo-implementation-auditor`.
- Primary keyword: `PEAK cooking` (global English only). Candidate comparisons: `cooking peak`, `PEAK food`, `PEAK food guide`, `PEAK cooking milk`, `PEAK all cooking effects`; only the first is the new-page focus. Food lookup terms remain assigned to `/items/`.
- Slug: `peak-cooking-guide`. H1: `PEAK Cooking Guide`. Title begins with the primary term; first paragraph and short answer explain the cooker and what the page covers.
- Structure: short answer; cooking workflow and source limits; 16-row food-effect table; separate non-food interaction table including the 2.4.C amulet rule; route-choice guidance; FAQ; source/update note.
- Internal links: `/items/` from guide and back from the item catalog; `/badges-guide/` for the cooking badge; the home page article-link band is generated from `articleOrder`. Avoid top-navigation placement.
- External links: official Steam news for the dated patch exception; community PEAK Wiki Items table for item-level rows, with community attribution and source dating.
- Locales: implement all homepage locales (`en`, `zh`, `es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`) using the established routes. Only English has a supported primary keyword. Similarweb country-specific values are unavailable; Google regional SERPs timed out; non-English candidates stay explicitly unvalidated and are not used as SEO target keywords. The per-locale evidence map is `validationRoot/i18n-keyword-map.json`.
- Content-depth result: the built English page contains 2,043 visible words; the Chinese page contains 4,768 visible characters. This is a source-led reference guide rather than a short explainer: its 16-row food table, separate non-food table, and 10 query-specific FAQ entries answer distinct item questions. The depth is intentional and the copy avoids a universal tier list or unsupported repeat-cooking claims. Every other locale has the same decision structure, localized metadata, FAQ, image text, and links.
- Technical acceptance: static raw-HTML content, Article/FAQ schema based on visible copy, self-canonical, reciprocal hreflang and x-default, generated sitemap entry with 2026-09-25 lastmod, root English `/peak-cooking-guide`, localized `/locale/peak-cooking-guide/`, image count 3 unique assets, and a crawlable entry from the home article band plus `/items/`.
- CI: add only `peak-cooking-guide` to the existing `PUBLISHED_ARTICLES` allowlist so scheduled Cloudflare builds include it. Do not change the workflow's daily-data commit/push behavior or commit generated `dist/` output.
