# PEAK Crossplay 新页 Brief

## 机会结论

- **页面类型**：信息型游戏指南（平台状态、官方计划、复核清单）。
- **唯一新主题**：`PEAK crossplay`，URL 为 `/peak-crossplay-guide`（英文）及对应 locale 路由。
- **主关键词**：`peak crossplay`。
- **近似候选**：`is peak crossplay`、`does peak have crossplay`、`can you crossplay peak`、`peak crossplay pc ps5`。
- **长尾词**：`does peak have crossplay`、`can you crossplay peak`、`is peak game crossplay`、`peak crossplay pc ps5`、`peak game ps5 crossplay`。
- **搜索意图**：信息型、平台兼容性核验；用户需要当前可玩性和官方计划，不是房间码操作教程。
- **下载站判断**：本站是游戏 Wiki/攻略站，不是下载站；没有版本下载 CTA，本页不触发下载站版本新鲜度门禁。

## GSC 与现有页冲突检查

近 28 天 GSC（本地 Trends `/api/gsc-site-detail`，`sc-domain:peak-game.wiki`）中，地图类机会最高：`peak map today` 23 次展示、平均位置 21.7；它已明确落到 `/map-rotation`，应优化已有页而非新建。跨平台相关的 60 天词 `crossplay peak` 只有 1 次展示，但已落到 `/room-codes/`，说明本站有初始相关性，现有页的核心意图仍是房间码/加入流程。

`room-codes` 已包含一段 crossplay 状态说明，但标题、首屏答案和主体结构服务于 JOIN GAME 与房间码。新页只承接“是否跨平台、当前 PC/主机状态、官方计划、何时重新核对”意图，并回链旧页处理复制/输入代码，避免把两个意图合并。

## Similarweb Keyword Generator（global `country=999`，recent 28d）

指标含义：`averageVolume` 为月搜索量，`windowVolume` 为当前 28 天窗口，`difficulty` 为 Similarweb 难度，`primaryIntent` 为 Similarweb 意图。关键词生成器无法提供国家级数据，本表不把全球量当作本地量。

### 候选种子对比

| 种子 | 精确月量 | 28d 量 | 难度 | 意图 | 结论 |
| --- | ---: | ---: | ---: | --- | --- |
| `peak map today` | 26,110 | 45,990 | 66 | Navigational + Informational | **已有页** `/map-rotation`，不新建 |
| `peak achievements` | 8,553 | 6,340 | 60 | Informational | **已有页** `/achievements`，支持段落/FAQ |
| `peak crossplay` | 3,893 | 2,010 | 43 | Informational | **新建**专门平台状态页 |
| `peak cooking` | 1,106 | 440 | 0 | Informational | **已有页** `/peak-cooking-guide` |
| `peak revive` | 343 | 240 | 0 | Informational | **已有页** `/peak-revive-guide` |
| `peak custom mode achievements` | 32 | 0 | 0 | 未标注 | 成就页 FAQ，不建页 |

### `peak crossplay` 三个 tab 逐项判断

| Tab | 候选 | 月量 / 28d | 难度 | 意图与页面匹配 | 动作 |
| --- | --- | ---: | ---: | --- | --- |
| phrase match | `peak crossplay` | 3,893 / 2,010 | 43 | 直接平台状态问题，页面匹配度高 | **新建主页面** |
| phrase match | `is peak crossplay` | 4,216 / 2,070 | 43 | 是/否型问句，适合首屏答案与 H2 | 新页首屏 + FAQ |
| phrase match | `does peak have crossplay` | 679 / 340 | 46 | 同一意图的自然问法 | FAQ |
| phrase match | `peak crossplay pc ps5` | 325 / 0 | 0 | 平台组合长尾，当前证据不足以声称已支持 | FAQ/限制说明 |
| phrase match | `can you crossplay peak` | 76 / 120 | 43 | 低量问句，适合正文自然出现 | FAQ/正文 |
| related keywords | `peak map today` | 26,110 / 45,990 | 66 | 地图导航意图，与跨平台页不匹配 | **已有页内链 anchor** |
| related keywords | `peak game` | 219,142 / 152,720 | 62 | 泛导航/信息词，范围过宽 | 不做主词，首页/品牌词 |
| related keywords | `peak wiki` | 58,386 / 40,840 | 23 | Wiki 导航意图 | 品牌导航，不建页 |
| related keywords | `peak mods` | 33,625 / 17,370 | 5 | Mod 导航/安装意图，已有 mod 页 | 已有页支持段落/内链 |
| related keywords | `peak map today` | 26,110 / 45,990 | 66 | 与本页不同的每日地图需求 | `/map-rotation` 内链 anchor |
| question keywords | `does peak have crossplay` | 679 / 340 | 46 | 直接回答当前状态 | FAQ + 首屏 |
| question keywords | `hat peak crossplay` | 65 / 10 | 0 | 德语拼写/低量，不能当德语市场证据 | 不做，locale 仅作低置信 fallback |

其它种子 tab 的代表性判断：`peak achievements guide`（619 / 2,070，phrase match）与现有 `/achievements` 相同意图；`peak food guide`（2,146 / 1,430，related）已由 cooking 页承接；`how to revive in peak`（1,170 / 700，phrase/question）已有 revive 页；`peak map rotation today`（1,483 / 4,400，phrase）与 `/map-rotation` 重合；自定义模式成就问题量低，应放成就 FAQ，不应单独建页。完整原始 JSON 在验证目录的 `similarweb/`。

## SERP 与信息增量

已抓取 Bing 的 `PEAK crossplay`、`is PEAK crossplay`、`does PEAK have crossplay`，结果受本机地区重定向影响，混入中文同名词；原始结果保存在 `serp-research-crossplay.json`。可用的信息增量来自官方来源和现有 SERP 缺口：

1. 先给当前结论，再区分“Steam/PC 已可玩”和“主机/跨平台计划”。
2. 解释房间码只是大厅身份，不是跨平台已上线的证据。
3. 给出发布前检查表：平台、版本、官方日期、加入方式、账号/存档规则。
4. 用独立页面承接跨平台问句，旧 `room-codes` 页面继续承接操作型 JOIN GAME 意图。

官方来源：Steam 产品页、Patch 2.04.a `THE KILN IS BACK`、Landfall PEAK FAQ。Steam 直连在本次抓取中超时，但仓库现有文章已保留官方 URL；Landfall FAQ 返回 200 并包含 cross-platform、console、Steam-friends only、matchmaking 等关键词。

## 页面结构与验收目标

- **H1**：`Is PEAK Crossplay? Current PC, Console & Room-Code Status`。
- **H2**：当前是否可用、Landfall 官方计划、房间码边界、当前版本如何联机、混合平台前核对项、crossplay/matchmaking/room codes 的边界、FAQ。
- **首屏覆盖**：标题、H1、首段和简短答案均出现 `PEAK crossplay` 与 Steam/PC 当前状态。
- **视觉点**：3 个不同的既有官方/编辑素材：`peak-coop-climb.webp`（hero）、`peak-climb-ridge.webp`（官方路线）、`peak-map-route.webp`（复核清单上下文）；imagegen 本次因网关 429 未生成，使用真实素材优先策略。
- **内部链接**：room-codes、peak-solo-and-public-lobbies、peak-multiplayer-troubleshooting、map-rotation、items；旧 room-codes 英文 related 增加本页回链。
- **canonical/hreflang**：沿现有静态站规则，英文 `/peak-crossplay-guide`，其它 locale 使用 `/{locale}/peak-crossplay-guide/`，生成 self-canonical、互链和 x-default。
- **验收**：构建成功；9 个页面 HTML 可发现；sitemap 含 9 个新 URL 且 `lastmod=2026-10-18`；Article、BreadcrumbList、FAQPage schema 与可见内容一致；桌面/移动无水平溢出。

## 多语言关键词边界

首页实际有 9 个 locale：`en`、`zh`、`es`、`ja`、`fr`、`de`、`pt`、`ko`、`it`。Similarweb 关键词生成器本次仅接受全球 `country=999`，没有可验证的当地量，因此除英语外的 primary/related keyword 记录为 `machine_translation_fallback`、`confidence=low`，不把英文全球指标冒充当地证据。具体地图见验证目录 `i18n-keyword-map.json`。
