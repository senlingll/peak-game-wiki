# How to Revive in PEAK 页面 Brief

## 执行与决策

- 执行日期：2026-09-24
- 工作流：`seo-opportunity-to-publish` Full publish；页面类型选择 `seo-article-writer` 信息型游戏指南。
- 站点：`https://peak-game.wiki`；首页实际提供 9 个 locale：`en`、`zh`、`es`、`ja`、`fr`、`de`、`pt`、`ko`、`it`。
- 主题：`How to Revive in PEAK`；页面使用已有草稿 route `peak-revive-guide`，不另建重复意图 URL。
- 英文 URL：`https://peak-game.wiki/peak-revive-guide`。其余语言沿用目录路由 `/{locale}/peak-revive-guide/`。
- 结论：新建这一页。它解释状态判断、倒地恢复与死亡后复活的边界；站内没有承接该完整搜索意图的既有页面。
- 不是下载站，也不是下载意图页；没有下载 CTA、安装包、版本号或安装步骤。下载站版本新鲜度检查不适用。

## 数据与时效边界

- Similarweb Keyword Generator：查询日期 `2026-09-24`，全球 `country=999`，28 天窗口 `2026-08-28` 至 `2026-09-24`。`averageVolume` 是月均搜索量，`windowVolume` 是窗口量；`difficulty=0` 是接口分数，不代表真实竞争为零。`competition` 字段未返回时不作推断。
- GSC：最近 28 天 HTTP 200；站点汇总 1,904 clicks、37,607 impressions、CTR 5.06%、平均位置 7.06。500 个查询中没有 revive 候选。6 个位置 10–30 查询指向现有 map/biomes 页面，应各自优化，不据此另建复活页。
- Bing SERP：仅把 validationRoot 内的快照作为有限观察。精确查询 `how to revive in PEAK` 提取的结果对 `revive` 有明显歧义；加上 `Scout Effigy` 的 PEAK 专属查询可见 Steam、PEAK Wiki 与站内同类站点结果。该快照不足以声称已完整确认 Google TOP 结构或稳定排名。
- Google SERP 在本轮环境没有可用的原生搜索工具；此前快照尝试超时或落到 consent 页面。因此 Brief 不虚报 Google TOP 页面标题、排名或当地语言需求。补足状态决策表、版本边界和“没有证据就不猜固定复活点”作为可核对的信息增量。

## 核心候选比较

| 核心词 | Similarweb 月均 / 28 天量 | difficulty / competition | 意图与页面匹配 | 处置 |
| --- | ---: | --- | --- | --- |
| `how to revive in PEAK` | 1,367 / 1,050 | 0 / 未返回 | 信息型；三 tab 均出现 exact term；没有专门讲 PEAK 救援状态的页面 | 新建一页 |
| `PEAK disconnected from Photon` | 1,390 / 2,000 | 0 / 未返回 | 独立连接故障意图；远端已有 `/peak-photon-troubleshooting` 页面覆盖 | 既有页承接；不新建 |
| `PEAK achievements` | 9,120 / 20,110 | 59 / 未返回 | 成就清单与解锁信息；已有 `/achievements` 完整承接 | 既有页支持段落/FAQ |
| `PEAK items` | 6,687 / 16,360 | 57 / 未返回 | 目录/查找意图；已有 `/items/` | 既有页与内链 anchor |
| `PEAK how many players` | 5,096 / 4,970 | 65 / 未返回 | 联机人数信息；已有 `/room-codes/` 和新手指南涉及人数/联机 | 既有页支持段落/FAQ |

Photon 的窗口需求较高，但远端 `origin/main` 已有 `/peak-photon-troubleshooting`，并有对应多语言 route；因此 Photon 不再是待创建的新页候选。27 条 Photon 候选逐项更新了页面匹配和动作：疑问句进入既有页 FAQ，其他同意图变体进入支持段落；西语错误短语只作为现有西语页内链 anchor，不宣称有本地搜索量；`disconnected from photon reason exception` 月均量为 0 且缺少 PEAK 语境，标记不做。本轮选择复活指南，因为它在三个 tab 都有一致主题信号、意图边界清晰，且不会把网络故障与队友恢复混为一页。难度字段均按 Similarweb 原始值报告，不将 `0` 解读成竞争不存在。

## GSC 已有页面机会

| 查询 | 28 天 impressions / 平均位置 | 页面映射 | 决策 |
| --- | ---: | --- | --- |
| `peak map today` | 123 / 12.67 | `/map-rotation` | 优化地图页标题、日期说明与内链 |
| `peak` | 82 / 16.80 | 多个首页 locale；查询本身歧义 | 不新建页面 |
| `peak map biomes today` | 60 / 10.37 | `/map-rotation` | 地图页支持段落 |
| `peak biomes today` | 97 / 11.07 | `/map-rotation` | 地图页支持段落 |
| `map peak` | 61 / 11.75 | `/map-rotation` | 内链 anchor / 地图页支持 |
| `peak biomes` | 52 / 10.10 | `/peak-biomes-list` | 生物群系清单页支持段落 |

这些 GSC 词与复活意图不同；页面映射用于避免错误地把地图机会拿来支持复活主题。逐 query 和 page mapping 证据见 `gsc-opportunities.json`。

## Similarweb 三 Tab 与全部候选

五个英文 seed 共检查 185 条返回候选：`revive` 23 条、`photon` 27 条、`achievements`、`items`、`players` 各 45 条。每条记录都保留 tab、月均搜索量、窗口量、difficulty、competition、Similarweb/人工意图、页面匹配度、动作与理由；Photon 逐项映射已按当前远端页面修订。完整逐词表在 validationRoot 的 `keyword-candidate-review.md` 与 JSON。精选对照见 `keyword-shortlist.md`。

### 选中主题中的候选动作

| 关键词 | 月均 / 窗口量 | difficulty / competition | 意图与页面匹配 | 动作 |
| --- | ---: | --- | --- | --- |
| `how to revive in PEAK` | 1,367 / 1,050 | 0 / 未返回 | 信息型；精确匹配新指南 | 新建页面主词 |
| `how to revive someone in PEAK` | 343 / 540 | 0 / 未返回 | 救队友信息意图；同页直接回答 | 正文步骤 + FAQ |
| `how to revive downed players in PEAK` | 28 / 40 | 0 / 未返回 | 倒地状态操作问题 | 正文支持段落 |
| `how to revive in PEAK in the final level` | 未返回 / 970 | 0 / 未返回 | 末关卡边界问题 | 小节 + FAQ；只给条件式答案 |
| `how to resurrect in PEAK` | 325 / 1,100 | 0 / 未返回 | 死亡后复活信息意图 | 独立 H2 + FAQ |
| `how to resurrect in PEAK after getting stab` | 75 / 1,100 | 0 / 未返回 | 有窗口量；特定死亡机制无来源确认 | 不承诺机制；正文不编造该场景答案 |
| `peak last revive point` | 80 / 1,090 | 0 / 未返回 | 寻找固定地点；没有通用祭坛证据 | FAQ + “不要猜固定坐标”说明 |
| `peak how to revive friend` | 294 / 690 | 0 / 未返回 | 合作队友意图 | 正文与上下文 anchor |

## Target-Market Keyword Map

Similarweb Keyword Generator 当前只提供全球 `country=999`，不作为西语、日语、德语、法语、葡语、韩语、意大利语或中文的当地量级。英文主词也仅有全球量与有限 Bing 快照，标为中等信心，不声称 US-only volume。非英语 locale 保留自然翻译正文、title、H1 和 FAQ，但其 SEO `primaryKeyword` 设为未验证/空值；不把直译、模型猜词或有歧义的 Bing 结果宣称为当地主关键词。旧翻译短语记录在拒绝/未验证栏，待当地 GSC、Similarweb、Google Ads/Trends 或可靠本地 SERP 证据出现后再设主词。

逐 locale 的 market、主词、相关词、拒绝翻译、意图、证据与 confidence 已写入 validationRoot 的 `i18n-keyword-map.json`，在页面实现前生成。本页实际 locale 路由保持站点既有格式，不翻译 slug。

## 内容方案

- SEO title / H1：`How to Revive in PEAK: Downed Scouts, Effigy & Co-op`
- Primary：`how to revive in PEAK`。候选比较：`how to revive someone in PEAK`、`how to resurrect in PEAK`、`how to revive downed players in PEAK`、`peak last revive point`。
- 信息型结构：先给结论，再区分 unconscious/downed 与 dead；说明倒地恢复步骤、Scout Effigy 条件、checkpoint respawn 与 resurrection 的区别、固定复活点证据边界、失败排查、末关卡限制、FAQ。
- 事实边界：本地维护的 Scout Effigy 条目记录“目标位置复活死亡 Scout、不会在 solo 生成”；Checkpoint Flag 条目记录“一次性 respawn checkpoint 给放置它的 Scout”。社区 Wiki 用于术语/观察参考，不称为官方规则。Book of Bones 或 Ancient Statue 不作为已验证复活机制。具体恢复提示、目标与补丁差异以当前游戏为准。
- 必备结构：状态决策表、恢复步骤列表、checkpoint 对照表、五条 FAQ、错误条件和来源说明。关键词 `after getting stab` 不作事实推断，也不为其制造虚假答案。

## 图片与链接

- 页面属于游戏 wiki；已检查官方 Steam 商店图片资产。正文使用两张真实 Steam 游戏截图 `peak-coop-climb.webp` 与 `peak-final-ascent.webp`；hero 使用一张明确标注为编辑插图的 `peak-revive-decision.webp`，不是实机/UI截图。三图都有相邻说明、alt 和 WebP；编辑插图 142,092 bytes（小于 150 KB）。本指南不需要弱相关视频。
- 页面链接至 Scout Effigy 物品条目、Rescue Claw、PEAK 地图、合作技巧、新手指南和 room-code 指南；官方外链含 Steam 与 Landfall FAQ，社区 Wiki 来源明确标为社区维护。
- 首页的 guides link band 按 `PUBLISHED_ARTICLES` 生成；现有 daily Pages workflow 的文章白名单将加入该 slug，使后续定时构建继续发布此页。不新增 workflow，也不改 workflow 中显式暂存、空提交跳过和推送部署产物逻辑。

## 验收目标

- 9 个静态 HTML 路由都有本地化 title、description、H1、canonical、自指 hreflang、互相 return links、Article 和 FAQ schema、正文与静态内链。
- 英文主词出现在 title、description、H1、首屏、正文与 FAQ；原始 HTML 包含完整内容、表格、步骤和三处视觉点。
- 本地 `npm.cmd run build` 成功，发现实际 HTML 输出路径，sitemap 包含 9 个新 URL；本地 HTTP URL 返回 200。
- 系统 Chrome/Edge headless 检查英文桌面/移动截图与 DOM、每图请求成功、canonical/hreflang、横向溢出、9 locale 页面 marker；不启动可见浏览器。
- 当前源码构建产物写入项目约定的 `dist/`。若本轮不执行 Cloudflare production deploy，最终结果会明确记录部署状态，不把本地构建说成线上已发布。
