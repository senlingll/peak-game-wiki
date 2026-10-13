# PEAK Multiplayer Mod 页面 Brief

## 机会结论

执行日期：2026-10-14。目标站点是九语言 PEAK 游戏百科，不是游戏下载站。GSC 最近 28 天只有一个达到默认阈值的机会词 `peak map today`（23 次曝光，平均排名 21.65，CTR 4.35%），但它已经明确映射到 `/map-rotation`，因此不新建页面。

Similarweb keyword generator 使用全局 `country=999`、最近 28 天窗口，逐个读取了 phrase match、related keywords、question keywords 三个 tab。选择 `peak multiplayer mod` 的原因是它有独立的 mod 安装/兼容性任务意图，且站内没有 mod 页面；已有联机排查、房间码、存档重连和 crossplay 章节不满足这一完整任务。

## 候选逐项判断

指标口径：Similarweb `averageVolume` 为月均搜索量，`windowVolume` 为当前窗口量，difficulty 为 Similarweb difficulty，意图来自返回的 `primaryIntent`/`secondaryIntent`。这些数字是全球方向性证据，不与 GSC 数字直接比较。

| 种子 / tab | 候选词 | 月均 / 窗口 | difficulty | 意图与页面匹配 | 决定 |
| --- | --- | ---: | ---: | --- | --- |
| PEAK multiplayer / phrase match | `peak multiplayer mod` | 6,384 / 3,850 | 11 | 信息型，目标是寻找多人 mod、安装入口和联机兼容性；站内无同意图页面 | **新建页面主词** |
| PEAK multiplayer / related | `peak multiplayer mod` | 6,384 / 3,850 | 11 | 与 phrase match 同词，Thunderstore 为领先站点 | **新建页面主词** |
| PEAK multiplayer / phrase match | `peak multiplayer` | 983 / 1,230 | 47 | 泛联机意图，已有 `/peak-multiplayer-troubleshooting` 与 `/peak-solo-and-public-lobbies` | 支持段落 / 内链 anchor |
| PEAK multiplayer / related | `peak mod multiplayer` | 514 / 850 | 61 | 仍是 mod 联机变体，适合安装与依赖章节，不足以另开页面 | 支持段落 |
| PEAK multiplayer / question | `how to download peak multiplayer mod` | 98 / 0 | 0 | 下载/安装任务；没有稳定单文件直链，应该链接 Thunderstore 社区页并说明用管理器 | FAQ + 安装步骤 |
| PEAK multiplayer / question | `how to get peak multiplayer mod` | 79 / 0 | 0 | 与上词同一任务，不单独建页 | FAQ |
| PEAK multiplayer / question | `does peak save your progress multiplayer` | 142 / 350 | 0 | 存档意图已由 `/peak-save-and-reconnect` 覆盖 | 现有页 FAQ / 内链 |
| PEAK crossplay / phrase | `peak crossplay` | 3,893 / 2,090 | 43 | 高需求，但 `/room-codes` 已有 Crossplay 章节和 FAQ | 现有页支持段落 / 内链 anchor |
| PEAK crossplay / related | `is peak crossplay` | 4,216 / 2,250 | 43 | 与上词同意图，已有房间码页回答当前状态 | 现有页 FAQ |
| PEAK crossplay / question | `does peak have crossplay` | 679 / 300 | 46 | 问题型，已有房间码页 FAQ；新建会与其抢同一答案 | 现有页 FAQ |
| PEAK crossplay / phrase | `peak crossplay pc ps5` | 325 / 50 | 0 | 平台组合问题，适合作为 crossplay 段落的表格行 | 支持段落 |
| PEAK achievements / phrase | `peak achievements` | 8,553 / 6,840 | 60 | 成就总表/清单意图，已有 `/achievements` | 现有页主词，不新建 |
| PEAK achievements / phrase | `peak all achievements` | 949 / 1,590 | 57 | 仍是列表意图，已有成就指南 | 现有页支持段落 |
| PEAK achievements / question | `do mods disable achievements in peak` | 41 / 500 | 0 | 与新 mod 页相关，但应作为边界 FAQ；不能声称所有 mod 都禁成就 | 新页 FAQ |
| PEAK controller / phrase | `peak controller support` | 464 / 840 | 0 | 结果含控制器与非游戏同名词，意图不稳定；已有联机页控制器排查 | 现有页支持段落 |
| PEAK controller / question | `does peak have controller support` | 875 / 120 | 0 | 可作为控制器 FAQ，不能独立支撑新页 | 现有页 FAQ |

### 不做的页面

- 不建 `peak crossplay` 页面：房间码页已经有当前平台、官方跨平台计划、FAQ 和来源，新增会重复回答。
- 不建 `peak achievements` 页面：成就清单和“不解锁”问题已有两个页面，mod 对成就的影响放入新页边界 FAQ。
- 不建 `peak controller` 页面：Similarweb 结果混入 Fruity Peak，且站内联机排查页已有 Continue Run/控制器检查。
- 不建 `peak save and reconnect` 页面：已有版本感知存档页，相关问题从新页内链过去。

## 页面决定

- 页面类型：文章 / 实用指南
- URL：`/peak-multiplayer-mod`
- Primary keyword：`peak multiplayer mod`
- Secondary：`peak multiplayer mods`、`how to install PEAK mods`、`PEAK mod manager`、`PEAK mods with friends`
- FAQ：`how to download peak multiplayer mod`、`how to get peak multiplayer mod`、`does everyone need the same PEAK mod`、`do mods disable achievements in PEAK`
- H1：`PEAK Multiplayer Mod: Install, Check Compatibility, and Play Safely`
- 结构：mod 词义边界；Thunderstore/r2modman 安装步骤；host/all-clients/依赖判断；房间码、存档、成就和版本兼容性；常见联机失败；FAQ；来源与限制。

## 版本与下载新鲜度门

这是游戏百科而非下载站，但候选问题含 download/install，因此执行版本核验。Steam 官方新闻数据截至 2026-10-14 可见的最新确认补丁仍为 `2.6.b`（2026-10-06）；Thunderstore PEAK 社区页在 2026-10-14 返回约 2,800 个包、总下载量约 54,877,734，并列出最近更新时间到 2026-10-13。页面不声称存在单一“最新版多人 mod”，也不放未经核验的二进制直链；安装 CTA 指向 Thunderstore 社区页与 r2modman 官方页面，读者在页面内选择当前包和依赖。

## 媒体与内链

页面使用三张已有官方 Steam WebP 截图：`peak-coop-climb.webp`（hero/多人场景）、`peak-climb-ridge.webp`（安装后短测）、`peak-final-ascent.webp`（版本与兼容性边界）。不生成 AI 假 UI 或 mod 截图。正文内链指向 `room-codes`、`peak-multiplayer-troubleshooting`、`peak-save-and-reconnect`、`peak-achievements-not-unlocking` 和 `peak-game-update`；首页文章列表提供可爬取入口。

## 验收目标

- 首段 100 词内出现 `peak multiplayer mod` 与当前边界。
- H1、title、description、至少两个 H2 和 FAQ 覆盖主词/长尾词，但不堆砌。
- 原始 HTML 可见正文、表格、步骤、FAQ、三张不同 WebP 图和 alt/caption。
- `/peak-multiplayer-mod` 及 8 个本地化路由生成，canonical/hreflang/sitemap 与 locale route 一致。
- 页面明确第三方 mod 风险、当前版本核验、没有稳定直链时的官方页面 fallback。

## 最终验收记录

- 构建：`npm.cmd run build`，`BUILD_DATE=2026-10-14`，成功生成 279 条 sitemap URL；9 条新页面 URL 均带 `lastmod=2026-10-14`。
- 页面：9 个 HTML 均有 self-canonical、10 个 hreflang（含 `x-default`）、Article/FAQ schema、表格、步骤、3 个 WebP 视觉点和 200 状态证据。
- 多语言：`i18n-keyword-map.json` 覆盖 9 个 locale；新页面 focused i18n strict/date 审计 0 issues。非英语市场无本地 Similarweb 量级时，关键词地图明确记录 `machine_translation_fallback` 与低置信度。
- 浏览器：系统 Chrome `--headless=new` 生成桌面/移动截图；CDP 390×844 复核菜单、标题、正文、图片和页面根宽度，无页面级横向溢出。证据保存在任务指定 validationRoot。
- CI：仅把新 slug 加入既有 `PUBLISHED_ARTICLES` 白名单，保留原有 staged-diff 空提交保护，没有新增 workflow 自提交或推送构建产物的逻辑。
