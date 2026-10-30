# PEAK Controller Support 新页 Brief

## 1. 机会结论

- **页面类型**：信息型游戏指南，回答“PEAK 支持手柄吗”、PC 连接、输入方式选择和常见排错。
- **唯一新主题**：`Does PEAK Have Controller Support?`，slug 为 `/peak-controller-support`；其它语言沿站点既有 locale 路由生成。
- **主关键词**：`peak controller support`。
- **长尾关键词**：`does peak have controller support`、`can you play peak with a controller`、`peak controller or keyboard`、`how to use xbox controller in peak`、`peak controller not working`。
- **搜索意图**：信息型和轻教程型。用户先要一个当前、可验证的“支持/不支持”答案，再要 PC 连接、输入方式比较和故障排查；不是下载、购买或房间码导航意图。
- **新建理由**：现有 `/how-to-play-peak/` 解释通用新手操作，但没有独立承接 Steam 手柄支持字段、Xbox/PS4/PS5 范围、控制器与键鼠比较和输入故障排查。`/room-codes/` 与 `/peak-crossplay-guide/` 解决大厅加入和平台状态，不应吸收完整的输入设备意图。

## 2. GSC 与现有页面冲突

本轮 GSC 机会快照显示，地图类查询仍是本站最明确的机会：`peak map today` 近 28 天有 23 次展示、平均位置约 21.7，应该继续优化已有 `/map-rotation`，不能因为相关词再新建地图页。跨平台词曾落到 `/room-codes/`，但该页首屏和主体仍服务于房间码/JOIN GAME；控制器词没有一个专门的页面承接。

冲突结论如下：

| 现有页面/主题 | 覆盖意图 | 本轮处理 |
| --- | --- | --- |
| `/how-to-play-peak/` | 新手流程、通用键位、爬山循环 | 保留为基础页；加入新页内链，必要时在 FAQ 提及控制器 |
| `/room-codes/` | 创建/加入大厅、JOIN GAME、房间码 | 不复制控制器教程；新页回链处理联机问题 |
| `/peak-crossplay-guide/` | PC/主机平台与跨平台状态 | 不把“控制器支持”误判为主机 crossplay |
| `/map-rotation`、地图文章 | 今日地图和路线 | 地图相关词继续做已有页支持，不新建 |
| `/items/`、烹饪、复活、成就、mod 页面 | 对应实体或机制 | 相关词放已有页段落/FAQ或内链，不新建同义页 |

## 3. Similarweb Keyword Generator 证据

查询范围为 global `country=999`、recent 28d。`averageVolume` 为月均搜索量，`windowVolume` 为当前 28 天窗口，`difficulty` 为 Similarweb 难度。该接口没有返回独立的 competition 字段，因此本 brief 以 `difficulty` 作为竞争代理，并明确记录 competition 为“未提供”，不把难度 0 解释成没有竞争。原始 JSON 保存在本任务 validationRoot 的 `keyword_tabs_*_difficulty_all.json`。

### 3.1 候选种子筛选

| 种子/核心词 | 月量 | 28d 量 | difficulty | competition | 意图与页面匹配 | 动作 |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `peak map today` | 26,110 | 45,990 | 66 | 未提供 | 地图导航/信息；与现有地图页高度匹配 | **已有页支持段落/内链 anchor** |
| `peak achievements` | 8,553 | 6,340 | 60 | 未提供 | 成就信息；已有成就页高度匹配 | **已有页支持段落/FAQ** |
| `peak crossplay` | 3,893 | 2,010 | 43 | 未提供 | 平台状态；适合独立 crossplay 页 | 已有独立主题，本轮不重复建页 |
| `peak cooking` | 1,106 | 440 | 0 | 未提供 | 烹饪机制；已有 cooking 页 | **已有页支持段落** |
| `peak revive` | 343 | 240 | 0 | 未提供 | 复活机制；已有 revive 页 | **已有页支持段落/FAQ** |
| `peak custom mode achievements` | 32 | 0 | 0 | 未提供 | 成就长尾，量低且与成就页相同 | **FAQ**，不新建 |
| `peak controller` | 483 | 220 | 0 | 未提供 | 控制器泛问法；与本页直接匹配 | 新页自然覆盖，作为辅助词 |
| `peak controller support` | 464 | 510 | 0 | 未提供 | 直接支持状态；页面匹配度最高 | **新建本页主关键词** |

### 3.2 Phrase match tab（逐项判断）

数据文件：`keyword_tabs_peak_controller_difficulty_all.json` 的 `phrase_match`。

| 候选词 | 月量 / 28d | difficulty / competition | 搜索意图 | 页面匹配度与动作 |
| --- | ---: | --- | --- | --- |
| `peak controller support` | 464 / 510 | 0 / 未提供 | 信息型，直接问支持范围 | **新建页主词**；标题、H1、首段和表格 |
| `peak controller` | 483 / 220 | 0 / 未提供 | 泛信息型，可能寻找输入方式 | 新页正文自然覆盖；不单独建页 |
| `does peak have controller support` | 875 / 130 | 0 / 未提供 | 是/否型信息问句 | 新页首屏答案 + **FAQ** |
| `can you play peak with a controller` | 181 / 400 | 0 / 未提供 | 轻教程型信息问句 | 新页连接步骤 + **FAQ** |
| `peak controls controller` | 32 / 400 | 0 / 未提供 | 控制键位查询 | 新页控制器测试步骤；不承诺固定全键位表 |
| `how to use xbox controller in peak. what are the controls` | 未返回月均 / 380 | 0 / 未提供 | 设备连接和键位问句 | 新页 PC 设置段落 + **FAQ** |
| `peak kbm or controller` | 未返回月均 / 250 | 0 / 未提供 | 控制器与键鼠比较 | 新页比较表；不单独建页 |
| `peak on controller` | 97 / 250 | 0 / 未提供 | 泛设备查询 | 新页自然覆盖；不单独建页 |
| `fruity peak controller` | 990 / 3,150 | 0 / 未提供 | FL Studio Fruity Peak 音频插件 | 与 PEAK 游戏不匹配，**不做** |
| `how to use ps4 controller speaker on pc` | 40 / 1,050 | 0 / 未提供 | PS4 音频硬件问题 | 与游戏输入意图不匹配，**不做** |

### 3.3 Related keywords tab（逐项判断）

| 候选词 | 月量 / 28d | difficulty / competition | 搜索意图 | 页面匹配度与动作 |
| --- | ---: | --- | --- | --- |
| `peak controller support` | 464 / 510 | 0 / 未提供 | 直接支持状态 | **新页主词**，与 phrase match 交叉验证 |
| `can you play peak with a controller` | 181 / 400 | 0 / 未提供 | 能否使用手柄 | 新页首屏/FAQ |
| `peak kbm or controller` | 未返回月均 / 250 | 0 / 未提供 | 输入方式比较 | 新页比较表 |
| `peak on controller` | 97 / 250 | 0 / 未提供 | 手柄游玩泛问法 | 新页正文自然覆盖 |
| `peak controller` | 483 / 220 | 0 / 未提供 | 泛控制器导航 | 新页辅助词；不单独建页 |
| `does peak have controller support` | 875 / 130 | 0 / 未提供 | 支持是/否 | 新页 FAQ |
| `peak game controller or mkb` | 23 / 10 | 0 / 未提供 | 控制器/键鼠比较 | 新页比较表；低量，不单独建页 |
| `can i play peak with a controller` | 111 / 0 | 0 / 未提供 | 能否使用手柄 | FAQ 同义问法 |
| `can i use contorlelr on peak` | 65 / 0 | 0 / 未提供 | 拼写错误的支持问句 | 不在可见文案中堆砌；覆盖意图即可 |
| `do i need to use controller for peaj` | 14 / 0 | 0 / 未提供 | 低量拼写错误/误写 | **不做** |
| `peak controller or keyboard` | 383 / 0 | 0 / 未提供 | 控制器与键盘比较 | 新页比较表/FAQ |
| `play peak with controller` | 40 / 0 | 0 / 未提供 | 操作型信息 | 新页设置段落；不单独建页 |

### 3.4 Question keywords tab（逐项判断）

数据仍来自 `keyword_tabs_peak_controller_difficulty_all.json` 的 `questions`。该 tab 混入了大量与游戏无关的 Fruity Peak、PS4/PS5 扬声器和 DJ 控制器问题，不能因为出现 `controller` 就视为本站机会。

| 候选词 | 月量 / 28d | difficulty / competition | 搜索意图 | 页面匹配度与动作 |
| --- | ---: | --- | --- | --- |
| `does peak have controller support` | 875 / 130 | 0 / 未提供 | 直接支持问句 | **FAQ**，并在首屏直接回答 |
| `how to use xbox controller in peak. what are th eonctrols` | 未返回月均 / 380 | 0 / 未提供 | Xbox 连接与控制 | 新页设置/测试步骤 + FAQ |
| `how to use backpack in peak controller` | 26 / 0 | 0 / 未提供 | 控制器下的背包操作 | 放入已有 `/how-to-play-peak/` 支持段落，同时从新页链接回基础操作 |
| `how to use fruity peak controller` | 184 / 1,780 | 0 / 未提供 | FL Studio 插件 | **不做**，与游戏无关 |
| `how to test ps4 controller speaker on pc` | 57 / 1,050 | 0 / 未提供 | PS4 音频硬件 | **不做**，与 PEAK 无关 |
| `how to automate fruity peak controller` | 未返回月均 / 470 | 0 / 未提供 | 音频自动化 | **不做** |
| `how to use ps4 controller speaker on pc` | 40 / 1,050 | 0 / 未提供 | PS4 音频硬件 | **不做** |
| `how to use backpack in peak controller` | 26 / 0 | 0 / 未提供 | 游戏内控制器操作 | 已有页支持段落；不新建背包页 |
| `how to turn off ps5 controller speaker` | 130 / 0 | 0 / 未提供 | 系统音频设置 | **不做** |

**三个 tab 的共同结论**：与游戏实体 `PEAK` 同时出现的支持/连接/比较问法集中到同一个新页；地图、成就、料理、复活、联机和 mod 词保留给已有页面；拼写错误只覆盖真实意图，不把错误写法塞进标题；明显属于音频插件或硬件的候选全部拒绝。

## 4. SERP 调研与信息增量

已抓取并保存以下 Bing SERP HTML：`serp-bing-peak-controller-support.html`、`serp-bing-can-you-play-peak-with-a-controller.html`、`serp-bing-does-peak-have-controller-support.html`。结果存在 “PEAK” 与普通英文单词/其它品牌混淆；相关结果中出现官方 Steam 产品页、Steam Community 的 controller 讨论、Steam Deck/Controller setup 指南和 controller-not-working 文章。`does peak have controller support` 的一次抓取被英文语法页面污染，因此不把该页当作有效竞品证据。

可交付的信息增量：

1. 先给支持结论，再把 Steam 元数据能证明的范围（完整 Xbox、PS4、PS5、部分 Bluetooth 标记）和不能证明的范围分开。
2. 给出 PC 连接和安全测试流程，而不是编造一份跨设备永久键位表。
3. 用控制器 vs 键鼠表格按移动、攀爬、物品和长时间联机场景比较。
4. 用症状优先的排错表区分设备、Steam layout、重映射器、无线连接和网络问题。
5. 明确控制器支持不等于主机版本或跨平台；分别链接 `/peak-crossplay-guide/` 和 `/room-codes/`。

## 5. 页面实现 Brief

- **H1**：`Does PEAK Have Controller Support?`
- **首屏**：主关键词、Yes 结论、Steam 官方支持字段、Windows PC 范围和“版本/设备可能改变提示”的边界。
- **H2 结构**：Steam 官方确认项；PC 连接与安全测试；控制器 vs 键鼠；controller not working 排错；支持范围不承诺什么；FAQ；来源与限制。
- **FAQ**：至少覆盖 `does peak have controller support`、`can you play peak with a controller`、PS5/Xbox、键盘提示、房间码关系、键鼠比较、crossplay 边界。
- **内链**：从新页链接 `how-to-play-peak`、`room-codes`、`peak-crossplay-guide`、`peak-photon-troubleshooting`；从英文和 8 个 locale 的 `how-to-play-peak` related 区块回链新页。
- **外链**：官方 Steam 产品页和 Landfall PEAK FAQ；不把 403 的社区 Wiki 请求当作官方证据。

## 6. 图片、来源和验收目标

本站是游戏 Wiki，新增页必须图文并茂。本页复用已核验并已在站内使用的 Steam 官方媒体，不生成 AI 假 UI：

| 视觉点 | 文件 | 用途 |
| --- | --- | --- |
| Hero | `/media/peak-climb-ridge.webp` | 说明真实游戏场景与互动提示，不冒充键位图 |
| 正文图 1 | `/media/peak-coop-climb.webp` | PC 手柄安全测试的联机上下文 |
| 正文图 2 | `/media/peak-map-route.webp` | 输入方式比较和可重复短路线测试上下文 |

每张图都有语义化 `alt` 和 caption；页面源码与构建产物应至少出现 3 个 distinct image URL。验收目标为：9 个 locale 页面均生成；canonical、自指 hreflang、互链 return link、x-default、Article/FAQ schema、sitemap URL、图片 alt/caption、首段主词和静态内链全部通过；桌面和移动无水平溢出。

## 7. 下载站与版本新鲜度判断

**not_applicable**。本站是游戏 Wiki/攻略站，本页不提供 APK、EXE、安装包或下载 CTA，也不是 download intent 页面；因此不需要检查软件包最新版本、文件大小、直链或同步下载字段。Steam 与 Landfall 链接仅作为事实来源。

## 8. 证据路径

- Similarweb 原始 tab JSON：本任务 validationRoot 下 `keyword_tabs_peak_controller_difficulty_all.json` 及其它 `keyword_tabs_*_difficulty_all.json`。
- SERP 原始 HTML：本任务 validationRoot 下 `serp-bing-*.html`。
- 官方素材抓取：本任务 validationRoot 下 `steam-store.html`、`steam-news.html`。
- 页面生成源：`scripts/article-guides.mjs`、`scripts/article-controller-locales.mjs`、`scripts/article-locales.mjs`。
