# PEAK Achievements 页面 Brief

## 执行信息

- 执行日期：2026-08-30
- 工作流：`seo-opportunity-to-publish` Full publish mode
- 站点：`https://peak-game.wiki`
- 页面类型：信息型游戏指南（article / guide）
- 选定 URL：英文 `/achievements`；其他首页 locale 使用 `/zh/achievements/`、`/es/achievements/`、`/ja/achievements/`、`/fr/achievements/`、`/de/achievements/`、`/pt/achievements/`、`/ko/achievements/`、`/it/achievements/`
- 必须同步的 locale：`en`、`zh`、`es`、`ja`、`fr`、`de`、`pt`、`ko`、`it`

## 机会分析

### 数据可用性

- GSC：通过 `D:\Domains\Trends` 的本机 GSC API 读取 `sc-domain:peak-game.wiki`，28 天缓存窗口为 2026-07-31 至 2026-08-27（数据有约 3 天延迟），站点汇总为 818 clicks、20,406 impressions、平均位置 6.75。当前可用 Token 为服务端已配置的授权记录，未在仓库或报告中保存凭据。
- GSC 当前页面分布：`/map-rotation` 184 clicks、4,225 impressions、位置 7.84；首页 123 clicks、3,658 impressions、位置 7.70；`/de/` 58 clicks、2,118 impressions、位置 6.61；`/ja/` 23 clicks、462 impressions、位置 6.78；`/ko/` 83 clicks、998 impressions、位置 6.59。成就/徽章相关词当前全部落到首页或 locale 首页，没有独立成就 URL。
- Similarweb：站点关键词和概览接口可用，但上月站点关键词/流量为 0；补充落地页窗口为 2026-08-03 至 2026-08-30。`/map-rotation` 有 810 clicks、19 keywords，首要词为 `peak map today`；首页有 220 clicks，首要词为 `peak wiki`。
- Similarweb keyword generator：当前接口只接受全球 `country=999`。英语结果最可靠；西语、葡语有可用全球匹配；中文、日语、韩语的非 ASCII 查询出现编码混淆，法语、德语、意大利语没有可靠 exact 数据。以下本地化词使用全球 Similarweb、官方 Steam 用语和现有 locale 约定作为方向性证据，不声称为本地市场搜索量。
- SERP：当前工具列表没有原生 `web_search`，且不能用浏览器查询搜索结果页。SERP 结构判断基于 Similarweb leading sites（主要为 `peak.wiki.gg`、Steam、Steam Community）、已知官方 Steam 页面与本站现有结构；不把这些证据表述为当前 Google Top 3。

### 候选对比

| 候选主题 | Similarweb 月均量 | 28 天窗口量 | 难度 | 意图 | 页面决策 |
| --- | ---: | ---: | ---: | --- | --- |
| `PEAK achievements` | 10,415 | 19,020 | 58 | 信息型 | 选中。独立成就指南能承接 Steam 成就、追踪、条件边界和 FAQ。 |
| `PEAK badges` | 7,722 | 22,840 | 70 | 信息型 | 次选。与首页现有 badges/progress 模块词义相近，先在新指南中清楚区分，不另开重复页面。 |
| `PEAK items` | 6,977 | 20,260 | 0 | 信息型 | 主题过宽，首页已有 item database 入口，暂不新增。 |
| `PEAK multiplayer` | 1,398 | 610 | 70 | 信息型/导航型 | 可作为后续页面，当前不如成就主题集中。 |
| `PEAK map today` | 21,311 | 58,180 | 60 | 导航型 | 拒绝新增，已由 `/map-rotation` 承接，避免关键词蚕食。 |

### 选题结论

选择 `PEAK achievements`，原因是：

1. 需求足够明确，且 Similarweb 量级高于其他不冲突的信息型候选。
2. 相关长尾词能自然组成完整指南：`peak achievement guide`（约 3,311 月均）、`peak all achievements`（约 1,231）、`peak new achievements`（约 1,916）、`peak hidden achievements`（约 1,638），以及 `how to get all peak achievements`、`do custom runs do achievements peak`、`why am i not getting achievements in peak` 等问题词。
3. 现有首页只提供 badges/achievements 的进度模型，没有成就条件、追踪方法、模式边界或缺失成就排查的独立页面，搜索意图不重复。
4. 页面可以提供比常见短清单更有用的信息增量：Steam achievements 与游戏内 badges 的定义边界、版本敏感性、条件记录模板、联机/自定义模式的谨慎核验路径，以及成就未同步时的排查流程。

### GSC 词到页面映射

| 查询 | clicks | impressions | 平均位置 | 当前落地页 | 判断 |
| --- | ---: | ---: | ---: | --- | --- |
| `peak wiki badges` | 0 | 35 | 8.91 | `/` | 首页已有 badges 进度模块，但缺少独立解释页；新页用成就/徽章边界承接。 |
| `peak achievements wiki` | 0 | 5 | 6.60 | `/` | 已有明确成就导航意图，适合从首页扩展到 `/achievements`。 |
| `beharrlichkeit des pfadfinders peak` | 18 | 98 | 2.70 | `/de/` | 德语具体成就名已有强信号，新页提供版本化清单和条件记录入口。 |
| `ambition des pfadfinders peak` | 3 | 85 | 5.24 | `/de/` | 同属具体成就名需求，首页当前承接不足。 |
| `peak 実績` | 0 | 1 | 3.00 | `/ja/` | 日语成就意图已有曝光，新增日语页保持对应词汇。 |
| `peak succès` | 1 | 1 | 5.00 | `/fr/` | 法语成就意图已有一次点击，新增法语页承接相关查询。 |
| `피크 도전과제 보상` | 3 | 15 | 10.27 | `/ko/` | 韩语奖励/成就问题已出现，页面 FAQ 覆盖追踪和核验边界。 |

`peak achievements wiki` 的关键词页接口也确认其 5 次曝光全部落到首页；这支持“新增独立意图页并从首页 progress 区块链接”的决策，而不是继续把所有成就词堆在首页。

## 关键词边界

### 默认语言（英文）

- Primary：`PEAK achievements`
- Candidate comparison：`PEAK achievement guide`、`PEAK all achievements`、`PEAK hidden achievements`、`PEAK new achievements`
- Long-tail：`how to get all PEAK achievements`、`do custom runs do achievements PEAK`、`why am I not getting achievements in PEAK`
- 需避免：把 `PEAK map today`、`PEAK map rotation` 当作本页主词；把 `PEAK badges` 当作 Steam achievements 的同义词；在没有维护清单时声称每个成就的具体条件。

### 多语言 Target-Market Keyword Map

| locale | 假设市场 | 本页主关键词 | 相关词（3-5 个） | 拒绝/边界 | 意图 | 证据与信心 |
| --- | --- | --- | --- | --- | --- | --- |
| en | US/全球英语 | `PEAK achievements` | `PEAK achievement guide`; `PEAK all achievements`; `PEAK hidden achievements`; `how to get all PEAK achievements` | `PEAK badges` 仅作为对照词 | 信息型 | Similarweb 全球 exact/相关/问题词；高 |
| zh | 中国大陆 | `PEAK 成就` | `PEAK Steam 成就`; `PEAK 成就攻略`; `PEAK 全成就`; `PEAK 新成就` | `PEAK 徽章` 保留为游戏内 badges 语义，不作主词 | 信息型 | 中文 Steam/游戏社区惯用词与现有中文 locale；Similarweb 非 ASCII exact 不稳定；中 |
| es | 西班牙 | `logros de PEAK` | `guía de logros de PEAK`; `todos los logros de PEAK`; `logros de Steam de PEAK`; `nuevos logros de PEAK` | `insignias de PEAK` 用于 badges 对照 | 信息型 | Similarweb 全球西语匹配与西语 Steam 用语；中高 |
| ja | 日本 | `PEAK 実績` | `PEAK Steam 実績`; `PEAK 実績 攻略`; `PEAK 全実績`; `PEAK 新実績` | `PEAK バッジ` 仅表示游戏内 badges | 信息型 | 日本 Steam 常用“実績”与现有日文 locale；Similarweb 非 ASCII exact 不稳定；中 |
| fr | 法国 | `succès PEAK` | `succès Steam de PEAK`; `guide des succès PEAK`; `tous les succès PEAK`; `nouveaux succès PEAK` | `badges PEAK` 不代替平台成就 | 信息型 | 法语 Steam/游戏页面常用 `succès`；本地 Similarweb exact 不足；中低 |
| de | 德国 | `PEAK Erfolge` | `Steam-Erfolge PEAK`; `alle Erfolge in PEAK`; `versteckte Erfolge PEAK`; `neue Erfolge PEAK` | `PEAK Abzeichen` 仅用于区分 badges | 信息型 | 德语 Steam 用语与现有 locale；本地 Similarweb exact 不足；中低 |
| pt | 巴西 | `conquistas PEAK` | `conquistas Steam do PEAK`; `guia de conquistas PEAK`; `todas as conquistas PEAK`; `novas conquistas PEAK` | `distintivos do PEAK` 仅作 badges 对照 | 信息型 | Similarweb 全球葡语匹配与巴西葡语用法；中 |
| ko | 韩国 | `PEAK 도전 과제` | `PEAK Steam 도전 과제`; `PEAK 업적`; `PEAK 전체 도전 과제`; `PEAK 새 도전 과제` | `PEAK 배지` 不作为平台成就主词 | 信息型 | 韩国 Steam 常用 `도전 과제`；Similarweb 非 ASCII exact 不稳定；中低 |
| it | 意大利 | `obiettivi di PEAK` | `obiettivi Steam PEAK`; `guida obiettivi PEAK`; `tutti gli obiettivi di PEAK`; `nuovi obiettivi PEAK` | `badge di PEAK` 保留为对照词 | 信息型 | 意大利语 Steam/游戏惯用 `obiettivi`；本地 Similarweb exact 不足；中低 |

## 页面方案

- H1（英文）：`PEAK Achievements Guide: Steam Achievements, Badges & Tracking Tips`
- SEO title（英文）：同 H1，控制在 60 字符附近并包含完整主关键词。
- Meta description（英文）：说明本页回答如何查看、记录、核验 PEAK Steam achievements，并区分 badges、更新和自定义模式边界。
- 首屏答案：直接回答本页是 Steam achievements 的追踪指南；当前站点快照按 64 项 Steam achievements 组织入口，但数量和条件应以 Steam 成就页及当前版本为准。
- 结构：
  1. 什么是 PEAK achievements：Steam 成就与游戏内 badges 的定义边界。
  2. 如何追踪 PEAK 全成就：Steam 个人资料、成就页、条件记录和版本标记步骤。
  3. 如何组织成就清单：路线/探索、合作、更新敏感、隐藏或条件不明四类对照表。
  4. 自定义局、联机与新成就：只陈述可核验范围，说明如何用当前 Steam 页面和游戏版本复查。
  5. 为什么 PEAK 成就没有跳出：同步、条件、版本、模式和重启后的排查顺序。
  6. 五分钟完成计划：把 `PEAK all achievements` 需求变成可维护的逐项记录。
  7. FAQ：覆盖 `how to get all PEAK achievements`、隐藏成就、新成就、自定义局和 badges 区别。
- 必备内容：先给结论、短段落、步骤、表格、边界说明、事实/经验区分、FAQ、官方 Steam 商店与 Steam 成就页来源。
- 内链：
  - 首页 progress/badges 区块链接到新页面；
  - 新页面链接首页地图轮换指南、item database、updates 和 progress 区块；
  - 不加入顶部导航，保持现有核心导航精简。
- 外链：官方 [Steam store](https://store.steampowered.com/app/3527290/PEAK/) 与 [Steam achievement list](https://steamcommunity.com/stats/3527290/achievements/)，新窗口打开并使用 `rel="noopener"`。

## 媒体 Brief

- 页面属于游戏 wiki guide，已有官方 Steam WebP 媒体，足够覆盖 3 个有语义的视觉点，不需要生成 AI 图片。
- 特色图：`/media/peak-climb-ridge.webp`，用于 hero，语义化 alt/caption。
- 正文图 1：`/media/peak-final-ascent.webp`，用于版本敏感性/更新成就上下文。
- 正文图 2：`/media/peak-coop-climb.webp`，用于合作成就和联机记录上下文。
- 图片全部使用现有官方 Steam 媒体，保留 WebP、显式宽高、正文图 lazy loading；不把截图当成成就条件证据。

## 版本新鲜度门

- 结论：不适用。本站是独立游戏 wiki，不是下载站；新页面是成就信息指南，不包含下载、APK、安装包、最新版本或下载 CTA。
- 版本处理：页面会把成就数量、更新影响和自定义模式结论写成可复查的版本敏感信息，不声称永久固定；链接官方 Steam 页面供读者核验。

## On-page Acceptance Target

- 所有 9 个 locale 的页面必须在构建后的 raw HTML 中包含 `title`、description、canonical、正确 `lang`、hreflang、单一 H1、答案、H2/H3、表格、FAQ 和图片 alt/caption。
- 英文页的 `PEAK achievements` 必须出现在 title、description、H1、至少一个 H2、首 100 个有意义词和正文；与 4 个候选词比较时主词保持最强综合覆盖，不通过堆砌重复短语达标。
- 非英文页使用上表锁定的本地化主关键词，不把英文主词替换进标题、H1、FAQ 或内部锚文本；`PEAK`、`Steam`、官方页面名等实体按现有站点政策保留。
- 结果为信息型页面，tool demand-fulfillment 标记为 `not_scored`。
- 结构化数据：Article、BreadcrumbList、FAQPage；JSON-LD 只描述页面上可见的正文、FAQ、来源和媒体。
- 目标：英文约 1,200-1,800 visible words，其他语言保持同等信息深度；raw HTML crawlability 通过；无 noindex、错误 canonical、缺失 sitemap 或跨语言落点。
- Sitemap：新增所有 9 个 route，`<lastmod>` 使用 `2026-08-30`；同时维护 llms 索引和首页上下文入口。

## 验收与交付

- 构建：`npm.cmd run build`，必要时用 `BUILD_DATE=2026-08-30` 固定验收日期。
- raw HTML：逐页检查 9 个成就页面的 TDK、H1/H2/H3、主词覆盖、FAQ、JSON-LD、canonical/hreflang、图片和内部/外部链接。
- i18n：运行 `audit_i18n_site.py` 的 strict UI/date 检查，并人工抽查英语、西语、日语、德语/中文页面的 visible text 与属性残留。
- 浏览器：启动本地静态服务器，使用 Playwright 检查桌面/移动端首屏、表格横向可读性、TOC、FAQ、图片、语言切换和无水平溢出；结束本任务启动的服务器。
- Git：只提交本任务相关源文件、brief、sitemap 和 llms 文件；保留用户已有 `logs/`、`public/ads.txt`；构建通过后提交并推送 `origin main`，不强推。
