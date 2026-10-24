const officialStore = 'https://store.steampowered.com/app/3527290/PEAK/';
const crossplayNews = 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114033058';
const patch301News = 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114037507';
const patch204News = 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1842846814441503';

export const peakSoloLocaleOverrides = {
  zh: {
    primaryKeyword: 'PEAK 可以单人玩吗',
    intro: 'PEAK 可以单人玩吗？可以。官方 Steam 页面将单人模式列为支持类型，并说明多人队伍最多 4 人。本指南说明独自攀登时路线、背包、节奏和补救都由一名侦察员负责，并核对截至 2026 年 10 月 24 日的跨平台与房间码信息。公开大厅浏览和随机匹配未见于本次核验的官方资料。',
    answer: '可以。Steam 商店确认 PEAK 支持单人游玩。独自行动时，你需要自己读路线、安排道具和节奏，也要为失误留出补救空间。官方 2026 年 10 月 22 日公告确认跨平台游玩已上线；10 月 23 日的 3.0.1 补丁说明修复了跨地区房间码加入问题。这些是玩家主动组队的方式，不等于公开大厅浏览或随机匹配。',
    heroImage: { alt: '一名 PEAK 侦察员隔着雾气望向 Citadel', caption: 'Steam 官方商店截图展示侦察员接近 Citadel 的场景；它只是环境示例，不代表固定路线或地图状态。' },
    sections: {
      0: {
        title: '官方资料确认的 PEAK 单人和组队信息',
        paragraphs: [
          '官方 Steam 商品页列出单人、多人、合作和在线合作类型，并说明队伍最多可有 4 名玩家。因此，对“PEAK 可以单人玩吗？”的回答是肯定的；单人不是绕过联机功能的临时办法。商店分类只能确认玩法类型，不能证明单人和合作模式的节奏或难度完全相同。',
          '平台信息在 2026 年 10 月有更新。10 月 22 日的官方跨平台公告表示，PEAK 已登陆主机，Steam 玩家现可跨平台游玩。10 月 23 日的 3.0.1 补丁说明称，跨地区加入游戏的房间码问题应已修复。平台可用性和加入行为可能随补丁变化，查阅这些带日期的公告更可靠。',
          '截至 2026 年 10 月 24 日，本次核验的官方商店和公告没有说明游戏内公开大厅浏览器、陌生人服务器列表或自动匹配队列。这只是当前资料范围的边界，不代表未来不会增加功能。房间码或好友邀请用于加入已协调好的队伍，不应描述成随机匹配。',
        ],
        table: {
          caption: 'PEAK 单人模式、队伍人数与当前加入方式',
          headers: ['问题', '核对来源', '资料可确认的内容'],
          rows: [
            ['可以单人玩吗？', '官方 Steam 商品页', '可以；商店列出单人模式。'],
            ['最多几人一起玩？', '官方 Steam 商品页', '商品介绍写明队伍最多 4 人。'],
            ['Steam 能和主机玩家一起玩吗？', '2026-10-22 跨平台公告', '公告称主机上线后跨平台游玩已开放。'],
            ['队伍可以用房间码吗？', '2.04.a 与 3.0.1 补丁说明', '2.04.a 加入房间码；3.0.1 修复跨地区加入问题。'],
            ['有公开大厅浏览器吗？', '截至 2026-10-24 核验的官方商店与新闻', '本次资料未说明此功能。'],
            ['有自动随机匹配吗？', '截至 2026-10-24 核验的官方商店与新闻', '本次资料未说明此功能。'],
          ],
        },
      },
      1: { image: { alt: '一名 PEAK 侦察员穿过尖刺障碍，另一名侦察员在远处等待', caption: 'Steam 官方游戏截图展示危险路段；在投入有限道具前先观察路线。' } },
      2: {
        title: '没有在线好友时如何寻找队友',
        paragraphs: [
          '想和别人一起玩时，可以使用 Steam 好友邀请，或把房间码直接分享给约好的玩家。10 月 22 日的跨平台公告扩大了 Steam 与支持的主机版本之间的组队范围；10 月 23 日的 3.0.1 补丁处理了跨地区房间码加入问题。两项更新都没有说明加入了开放大厅浏览器或随机队列。',
          '社区组队帖可以帮你认识玩家，但组队和管理由玩家自行组织。加入前说明平台、地区、目标和语音安排；房间码只发给计划邀请的人。若某社区自称官方，先通过开发者链接核实。',
        ],
        image: { alt: '两名 PEAK 侦察员并肩站在岩石高台上', caption: 'Steam 官方商店截图展示合作玩法；画面不代表公开匹配大厅。' },
        table: {
          caption: '组队方式及其来源边界',
          headers: ['方式', '能做什么', '来源状态'],
          rows: [
            ['Steam 好友邀请', '通过平台直接邀请好友。', '适合已经认识或事先约好的玩家。'],
            ['房间码', '把代码发给计划加入的玩家，并通过 JOIN GAME 加入。', '2.04.a 官方加入；3.0.1 处理跨地区加入问题。'],
            ['社区组队帖', '认识玩家并协商一场游戏。', '玩家自行组织，规则和管理情况各不相同。'],
            ['公开大厅浏览器', '让玩家查看开放队伍。', '截至核验日期，官方资料未说明此功能。'],
            ['自动随机匹配', '不经直接邀请自动分配队友。', '截至核验日期，官方资料未说明此功能。'],
          ],
        },
      },
    },
    faq: {
      eyebrow: '常见问题',
      title: 'PEAK 可以单人玩吗？常见问题',
      items: [
        ['PEAK 可以单人玩吗？', '可以。官方 Steam 页面列出单人模式。独自游玩时，路线、道具、节奏和补救都要由一名玩家负责。'],
        ['PEAK 最多支持几名玩家？', '官方 Steam 商品介绍说明队伍最多 4 人。平台发行情况可能变化，请以当前平台商店为准。'],
        ['PEAK 有公开大厅或随机匹配吗？', '截至 2026 年 10 月 24 日核验的官方商店和公告未说明公开大厅浏览器或随机匹配队列。跨平台和房间码适合已协调好的队伍，不等于开放匹配。'],
        ['Steam 玩家现在能和主机玩家联机吗？', '官方 2026 年 10 月 22 日公告确认主机发行后跨平台游玩已开放。具体加入方法请查看当前平台设置和公告。'],
        ['PEAK 单人模式有多难？', '没有适用于每一局的固定难度结论。路线、道具选择和经验都会影响挑战；先设定一个看得见的目标，并留出撤退选择。'],
        ['没有好友时怎么找人一起玩？', '可以先通过好友邀请、房间码，或明确标注为玩家自建的组队社区协调队伍。社区帖不代表官方匹配队列。'],
        ['Fanny Pack 在单人模式能用吗？', '2026 年 9 月 2 日的 2.04.a 补丁说明称单人模式禁用了 Fanny Pack。依赖该规则前请查看后续官方补丁。'],
      ],
    },
    source: {
      eyebrow: '来源与范围',
      title: '本指南的来源与更新边界',
      body: '官方 Steam 商品页确认单人模式及最多 4 人组队。2026 年 10 月 22 日跨平台公告和 10 月 23 日 3.0.1 补丁是跨平台游玩与跨地区房间码加入的当前来源。2.04.a 仅用于说明当时加入的房间码和 Fanny Pack 单人规则。截至 2026 年 10 月 24 日，核验的官方资料没有记载公开大厅浏览或随机匹配；这不是对未来版本的承诺。',
      links: [
        ['官方 PEAK Steam 页面', officialStore],
        ['跨平台游玩公告（2026-10-22）', crossplayNews],
        ['3.0.1 补丁说明（2026-10-23）', patch301News],
        ['2.04.a 补丁说明（2026-09-02）', patch204News],
      ],
    },
    relatedLabel: '相关 PEAK 攻略',
    related: [['room-codes', '使用 PEAK 房间码组队'], ['map-rotation', '查看当前 PEAK 路线'], ['items', '浏览 PEAK 道具目录'], ['badges-guide', '查看 PEAK 徽章指南'], ['peak-game-update', '查看 PEAK 官方更新']],
  },
  es: {
    primaryKeyword: '¿Se puede jugar a PEAK en solitario?',
    intro: '¿Se puede jugar a PEAK en solitario? Sí. La página oficial de Steam incluye el modo para un jugador y describe grupos multijugador de hasta cuatro personas. Esta guía explica las decisiones de ruta, inventario, ritmo y recuperación que recaen en una sola persona y resume las fuentes sobre crossplay y códigos de sala consultadas hasta el 24 de octubre de 2026. Las fuentes oficiales revisadas no documentan un navegador de salas públicas ni una cola aleatoria.',
    answer: 'Sí. Steam confirma que PEAK admite el modo para un jugador. En solitario, tú te encargas de leer la ruta, gestionar el equipo y dejar margen para recuperarte de un error. El anuncio oficial del 22 de octubre de 2026 confirmó el crossplay tras el lanzamiento en consolas; la nota 3.0.1 del 23 de octubre abordó los códigos de sala entre regiones. Son opciones para unirse a un grupo coordinado, no una cola pública confirmada.',
    heroImage: { alt: 'Un explorador de PEAK mira hacia Citadel entre la niebla', caption: 'Captura oficial de Steam con un explorador acercándose a Citadel; ilustra el entorno, no una ruta o mapa fijo.' },
    sections: {
      0: {
        title: 'Qué confirman las fuentes oficiales sobre jugar a PEAK en solitario',
        paragraphs: [
          'La página oficial de Steam clasifica PEAK como juego para un jugador, multijugador, cooperativo y cooperativo en línea. La descripción indica grupos de hasta cuatro personas. ¿Se puede jugar a PEAK en solitario? Sí: Steam confirma el modo para un jugador. Estas categorías confirman los modos, pero no prometen que las partidas solo y cooperativas tengan el mismo ritmo o dificultad.',
          'La información de plataformas cambió en octubre de 2026. El anuncio oficial del 22 de octubre dice que PEAK ya salió en consolas y que el crossplay está disponible para jugadores de Steam. Las notas 3.0.1 del 23 de octubre dicen que se corrigieron los códigos de sala para unirse a partidas de otras regiones. Consulta esos avisos fechados porque la disponibilidad puede cambiar.',
          'La tienda y los anuncios oficiales revisados hasta el 24 de octubre no documentan un navegador de salas públicas, una lista de servidores para desconocidos ni una cola automática de matchmaking. Es el límite de las fuentes consultadas, no una garantía sobre futuras versiones. Un código de sala o una invitación sirven para un grupo coordinado; no equivalen a emparejamiento aleatorio.',
        ],
        table: {
          caption: 'PEAK en solitario, tamaño del grupo y formas actuales de unirse',
          headers: ['Pregunta', 'Fuente consultada', 'Qué confirma'],
          rows: [
            ['¿Se puede jugar en solitario?', 'Página oficial de Steam', 'Sí; Steam incluye el modo para un jugador.'],
            ['¿Cuántas personas pueden jugar juntas?', 'Página oficial de Steam', 'La descripción indica hasta cuatro personas.'],
            ['¿Steam puede jugar con consolas?', 'Anuncio de crossplay, 2026-10-22', 'El anuncio dice que el crossplay está disponible tras el lanzamiento en consolas.'],
            ['¿Se puede usar un código de sala?', 'Notas 2.04.a y 3.0.1', '2.04.a añadió los códigos; 3.0.1 abordó las uniones entre regiones.'],
            ['¿Hay navegador de salas públicas?', 'Tienda/noticias oficiales revisadas al 2026-10-24', 'Las fuentes consultadas no documentan esta función.'],
            ['¿Hay matchmaking automático?', 'Tienda/noticias oficiales revisadas al 2026-10-24', 'Las fuentes consultadas no documentan esta función.'],
          ],
        },
      },
      1: { image: { alt: 'Un explorador de PEAK cruza una zona de pinchos mientras otro espera al otro lado', caption: 'Captura oficial de Steam de un peligro del recorrido; observa la ruta antes de gastar un recurso limitado.' } },
      2: {
        title: 'Cómo encontrar grupo si tus amigos no están conectados',
        paragraphs: [
          'Si quieres compañía, empieza con una invitación de Steam o comparte un código de sala directamente con las personas con quienes quieres jugar. El anuncio de crossplay del 22 de octubre amplió las opciones entre Steam y las consolas compatibles; la actualización 3.0.1 del día 23 abordó los códigos de sala entre regiones. Ninguno de esos avisos confirma un navegador abierto ni una cola aleatoria.',
          'Una publicación comunitaria para buscar grupo puede ayudarte a conocer jugadores, pero la organiza la comunidad. Aclara plataforma, región, objetivo y voz antes de unirte. Mantén privado el código de sala y comprueba cualquier espacio que se presente como oficial mediante un enlace del desarrollador.',
        ],
        image: { alt: 'Dos exploradores de PEAK juntos sobre una meseta rocosa', caption: 'Captura oficial de Steam de una partida cooperativa; no representa un lobby de matchmaking público.' },
        table: {
          caption: 'Opciones para encontrar grupo y su límite',
          headers: ['Opción', 'Qué permite', 'Estado de la fuente'],
          rows: [
            ['Invitación de Steam', 'Invitar directamente desde la plataforma.', 'Adecuada para amistades o grupos coordinados.'],
            ['Código de sala', 'Compartir un código con el grupo previsto y usar JOIN GAME.', 'Añadido en 2.04.a; 3.0.1 abordó las uniones entre regiones.'],
            ['Publicación comunitaria', 'Conocer jugadores y acordar una partida.', 'Organizada por jugadores; las reglas varían.'],
            ['Navegador de salas públicas', 'Permitiría ver grupos abiertos.', 'No aparece en las fuentes oficiales consultadas hasta la fecha indicada.'],
            ['Matchmaking automático', 'Asignaría jugadores sin invitación directa.', 'No aparece en las fuentes oficiales consultadas hasta la fecha indicada.'],
          ],
        },
      },
    },
    faq: {
      eyebrow: 'Respuestas rápidas', title: 'Preguntas frecuentes sobre PEAK en solitario',
      items: [
        ['¿Se puede jugar a PEAK en solitario?', 'Sí. La página oficial de Steam incluye el modo para un jugador. En solitario, una persona se ocupa de la ruta, los recursos, el ritmo y la recuperación.'],
        ['¿Cuántos jugadores admite PEAK?', 'La descripción oficial de Steam indica grupos de hasta cuatro personas. Comprueba la tienda de la plataforma actual por si cambia la disponibilidad.'],
        ['¿PEAK tiene salas públicas o matchmaking?', 'Las fuentes oficiales consultadas hasta el 24 de octubre de 2026 no documentan un navegador público ni una cola aleatoria. El crossplay y los códigos de sala sirven para un grupo coordinado.'],
        ['¿Steam puede jugar ahora con consolas?', 'El anuncio oficial del 22 de octubre de 2026 dice que el crossplay está disponible tras el lanzamiento en consolas. Consulta el aviso y los ajustes de tu plataforma para el método actual.'],
        ['¿Qué dificultad tiene PEAK en solitario?', 'No hay una dificultad fija válida para todas las partidas. Influyen la ruta, el equipo y la experiencia; empieza con un objetivo visible y conserva una opción para retirarte.'],
        ['¿Cómo encuentro gente si mis amigos no están?', 'Coordina una invitación, un código de sala o una comunidad de jugadores claramente identificada como tal. Una publicación comunitaria no es una cola oficial.'],
        ['¿Se puede usar Fanny Pack en solitario?', 'Las notas 2.04.a del 2 de septiembre de 2026 dicen que Fanny Pack está desactivada en solitario. Revisa notas posteriores antes de depender de esa regla.'],
      ],
    },
    source: {
      eyebrow: 'Fuentes y alcance', title: 'Fuentes y límites de esta guía',
      body: 'La página oficial de Steam confirma el modo individual y grupos de hasta cuatro personas. El anuncio del 22 de octubre de 2026 y las notas 3.0.1 del 23 de octubre son las fuentes actuales sobre crossplay y códigos de sala entre regiones. La nota 2.04.a se usa solo para fechar la introducción de códigos y la regla de Fanny Pack en solitario. Las fuentes oficiales revisadas hasta el 24 de octubre no documentan salas públicas ni matchmaking aleatorio; esto no predice futuras versiones.',
      links: [['Página oficial de PEAK en Steam', officialStore], ['Anuncio de crossplay (2026-10-22)', crossplayNews], ['Notas 3.0.1 (2026-10-23)', patch301News], ['Notas 2.04.a (2026-09-02)', patch204News]],
    },
    relatedLabel: 'Guías relacionadas de PEAK',
    related: [['room-codes', 'Unirse con códigos de sala de PEAK'], ['map-rotation', 'Consultar la ruta actual'], ['items', 'Ver el catálogo de objetos'], ['badges-guide', 'Abrir la guía de insignias'], ['peak-game-update', 'Consultar las actualizaciones oficiales']],
  },
  ja: {
    primaryKeyword: 'PEAKはソロで遊べる？',
    intro: 'PEAKはソロで遊べる？はい。Steam公式ページにはシングルプレイがあり、マルチプレイは最大4人と記載されています。このガイドでは、ルート、持ち物、ペース配分、立て直しを一人で判断する際の考え方と、2026年10月24日までに確認できたクロスプレイとルームコードの情報をまとめます。確認した公式情報には、公開ロビー検索やランダムマッチングは記載されていません。',
    answer: 'はい。Steam公式ページはPEAKのシングルプレイ対応を示しています。ソロではルート確認、道具の管理、ペース調整、失敗後の対応を自分で行います。2026年10月22日の公式告知でコンソール版とのクロスプレイが案内され、10月23日の3.0.1では地域をまたぐルームコード参加が修正対象になりました。これは一緒に遊ぶ相手を決めて参加する方法で、公開ロビーやランダムマッチングの確認とは別です。',
    heroImage: { alt: '霧の中でCitadelを見上げるPEAKのスカウト', caption: 'Steam公式ストアのスクリーンショット。Citadelに近づく場面であり、固定ルートや当日のマップを示すものではありません。' },
    sections: {
      0: {
        title: 'PEAKのソロ対応について公式情報で確認できること',
        paragraphs: [
          'Steam公式ページは、シングルプレイ、マルチプレイ、協力プレイ、オンライン協力プレイを掲載し、最大4人のグループに対応すると説明しています。したがって「PEAKはソロで遊べる？」への答えは「はい」です。これはモードの案内であり、ソロと協力プレイの進行速度や難しさが同じという意味ではありません。',
          '対応プラットフォームの情報は2026年10月に更新されました。10月22日の公式告知では、コンソール版の発売に伴いSteamプレイヤーとのクロスプレイが利用可能とされています。10月23日の3.0.1パッチは、別地域のゲームにルームコードで参加する問題を修正対象にしています。利用状況は変わるため、日付付きの告知を確認してください。',
          '2026年10月24日までに確認した公式ストアと告知には、公開ロビー検索、見知らぬ人向けのサーバー一覧、自動マッチングキューの記載はありません。これは確認した資料の範囲であり、今後も追加されないという保証ではありません。ルームコードや招待は、参加する相手を決めたグループ向けで、ランダムな割り当てとは異なります。',
        ],
        table: {
          caption: 'PEAKのソロ、グループ人数、現在の参加方法',
          headers: ['質問', '確認した情報源', '確認できる内容'],
          rows: [
            ['ソロで遊べる？', 'Steam公式ページ', 'はい。シングルプレイ対応と記載。'],
            ['一緒に遊べる人数は？', 'Steam公式ページ', '説明では最大4人。'],
            ['Steamとコンソールで遊べる？', '2026-10-22のクロスプレイ告知', 'コンソール発売後、クロスプレイが利用可能と案内。'],
            ['ルームコードを使える？', '2.04.aと3.0.1のパッチノート', '2.04.aで追加され、3.0.1で地域間参加を修正。'],
            ['公開ロビー検索はある？', '2026-10-24までに確認した公式情報', '確認した資料には記載なし。'],
            ['自動マッチングはある？', '2026-10-24までに確認した公式情報', '確認した資料には記載なし。'],
          ],
        },
      },
      1: { image: { alt: 'PEAKのスカウトがトゲの障害を越え、別のスカウトが向こう側で待っている', caption: 'Steam公式ゲーム画面。限られた道具を使う前に危険なルートを確認しましょう。' } },
      2: {
        title: '友達がオンラインでないときに一緒に遊ぶ方法',
        paragraphs: [
          '誰かと遊びたい場合は、Steamのフレンド招待を使うか、遊ぶ相手にルームコードを直接共有します。10月22日のクロスプレイ告知でSteamと対応コンソール間の選択肢が広がり、10月23日の3.0.1では地域間のルームコード参加が修正対象になりました。どちらの更新も、公開ロビー検索やランダムキューの追加を示すものではありません。',
          'コミュニティの募集投稿で一緒に遊ぶ人を探せますが、募集や管理はプレイヤー側が行います。参加前にプラットフォーム、地域、目的、ボイスチャットを確認しましょう。ルームコードは招待する相手だけに共有し、公式と名乗るコミュニティは開発元のリンクから確認してください。',
        ],
        image: { alt: '岩の台地で並んで立つPEAKのスカウト2人', caption: 'Steam公式ストアの協力プレイ画像。公開マッチングロビーを示す画像ではありません。' },
        table: {
          caption: 'グループを見つける方法とその範囲',
          headers: ['方法', 'できること', '情報源と注意点'],
          rows: [
            ['Steamフレンド招待', 'プラットフォームから直接招待。', '知り合いや事前に調整したグループ向け。'],
            ['ルームコード', '参加予定の相手にコードを共有してJOIN GAMEを使う。', '2.04.aで追加。3.0.1では地域間参加を修正。'],
            ['コミュニティ募集', '他のプレイヤーと知り合い、プレイを相談する。', 'プレイヤー主催で、ルールや管理は場所によって異なる。'],
            ['公開ロビー検索', '公開中のグループを探せる機能。', '確認日までの公式情報には記載なし。'],
            ['自動マッチング', '招待なしでプレイヤーを自動で組み合わせる機能。', '確認日までの公式情報には記載なし。'],
          ],
        },
      },
    },
    faq: {
      eyebrow: 'よくある質問', title: 'PEAKのソロプレイでよくある質問',
      items: [
        ['PEAKはソロで遊べますか？', 'はい。Steam公式ページにシングルプレイ対応と記載されています。ルート、道具、ペース、立て直しは一人で判断します。'],
        ['PEAKは何人で遊べますか？', 'Steam公式の説明では最大4人です。対応プラットフォームは各ストアの最新情報を確認してください。'],
        ['PEAKに公開ロビーやマッチングはありますか？', '2026年10月24日までに確認した公式情報には、公開ロビー検索やランダムマッチングキューの記載がありません。クロスプレイやルームコードは、参加者を決めたグループ向けです。'],
        ['Steamとコンソールで一緒に遊べますか？', '2026年10月22日の公式告知では、コンソール発売後のクロスプレイが利用可能とされています。現在の手順は告知とプラットフォーム設定を確認してください。'],
        ['PEAKのソロは難しいですか？', 'すべてのランに当てはまる固定の難易度はありません。ルート、道具選び、経験が影響するため、見通せる目標から始め、撤退できる余地を残しましょう。'],
        ['友達がいないときはどうやって人を探しますか？', 'フレンド招待、ルームコード、またはプレイヤー主催と明示された募集コミュニティで調整できます。コミュニティ投稿は公式のマッチングキューではありません。'],
        ['ソロでFanny Packを使えますか？', '2026年9月2日の2.04.aパッチノートでは、ソロプレイでFanny Packが無効とされています。後の公式パッチも確認してください。'],
      ],
    },
    source: {
      eyebrow: '情報源と対象範囲', title: 'このガイドの情報源と更新範囲',
      body: 'Steam公式ページはシングルプレイ対応と最大4人のグループを示しています。2026年10月22日のクロスプレイ告知と10月23日の3.0.1パッチノートは、現在のクロスプレイと地域間ルームコード参加の情報源です。2.04.aはルームコードの導入時期とFanny Packのソロ制限を示すために引用しています。10月24日までに確認した公式情報には公開ロビー検索やランダムマッチングの記載がありませんが、将来の更新を予測するものではありません。',
      links: [['PEAK Steam公式ページ', officialStore], ['クロスプレイ告知（2026-10-22）', crossplayNews], ['3.0.1パッチノート（2026-10-23）', patch301News], ['2.04.aパッチノート（2026-09-02）', patch204News]],
    },
    relatedLabel: '関連するPEAKガイド',
    related: [['room-codes', 'PEAKのルームコードを使う'], ['map-rotation', '現在のルートを確認'], ['items', 'アイテム一覧を見る'], ['badges-guide', 'バッジガイドを見る'], ['peak-game-update', '公式アップデートを確認']],
  },
  fr: {
    primaryKeyword: 'Peut-on jouer à PEAK en solo ?',
    intro: 'Peut-on jouer à PEAK en solo ? Oui. La page Steam officielle indique un mode solo et décrit des groupes multijoueurs de quatre personnes maximum. Ce guide explique les décisions de route, d’équipement, de rythme et de récupération qui reposent sur une seule personne, puis résume les sources sur le crossplay et les codes de salon consultées jusqu’au 24 octobre 2026. Les sources officielles vérifiées ne décrivent ni navigateur de salons publics ni file de matchmaking aléatoire.',
    answer: 'Oui. Steam confirme que PEAK propose le jeu en solo. Sans équipe, vous gérez vous-même la route, les objets, le rythme et la marge de récupération. L’annonce officielle du 22 octobre 2026 indique que le crossplay est disponible après le lancement sur consoles ; la note 3.0.1 du 23 octobre traite des codes de salon entre régions. Ces options servent à rejoindre un groupe organisé, pas à confirmer une file publique.',
    heroImage: { alt: 'Un scout de PEAK regarde Citadel dans le brouillard', caption: 'Capture officielle de la boutique Steam montrant un scout qui approche de Citadel ; elle ne représente ni une route fixe ni une carte du jour.' },
    sections: {
      0: {
        title: 'Ce que les sources officielles confirment sur PEAK en solo',
        paragraphs: [
          'La page Steam officielle classe PEAK en solo, multijoueur, coopératif et coopératif en ligne. Sa description indique des groupes de quatre joueurs maximum. Peut-on jouer à PEAK en solo ? Oui : Steam confirme le mode solo. Ces catégories confirment des modes, mais ne garantissent pas un rythme ou une difficulté identiques entre solo et coop.',
          'Les informations de plateforme ont changé en octobre 2026. L’annonce officielle du 22 octobre indique que PEAK est sorti sur consoles et que le crossplay est disponible pour les joueurs Steam. Les notes 3.0.1 du 23 octobre indiquent que les codes de salon permettant de rejoindre des parties d’autres régions ont été corrigés. Consultez ces annonces datées, car la disponibilité peut évoluer.',
          'La boutique et les annonces officielles vérifiées jusqu’au 24 octobre ne décrivent pas de navigateur de salons publics, de liste de serveurs pour inconnus ou de file automatique de matchmaking. C’est la limite des sources consultées, pas une promesse sur les futures versions. Un code de salon ou une invitation sert à rejoindre un groupe coordonné ; ce n’est pas une attribution aléatoire.',
        ],
        table: {
          caption: 'PEAK en solo, taille de groupe et façons actuelles de rejoindre',
          headers: ['Question', 'Source vérifiée', 'Ce qu’elle confirme'],
          rows: [
            ['Peut-on jouer en solo ?', 'Page Steam officielle', 'Oui ; Steam indique le mode solo.'],
            ['Combien de joueurs peuvent jouer ensemble ?', 'Page Steam officielle', 'La description indique quatre personnes maximum.'],
            ['Steam peut-il jouer avec les consoles ?', 'Annonce de crossplay du 2026-10-22', 'Le crossplay est annoncé après la sortie console.'],
            ['Peut-on utiliser un code de salon ?', 'Notes 2.04.a et 3.0.1', '2.04.a a ajouté les codes ; 3.0.1 a traité les joins entre régions.'],
            ['Existe-t-il un navigateur de salons publics ?', 'Boutique/actualités vérifiées au 2026-10-24', 'Les sources consultées ne décrivent pas cette fonction.'],
            ['Existe-t-il un matchmaking automatique ?', 'Boutique/actualités vérifiées au 2026-10-24', 'Les sources consultées ne décrivent pas cette fonction.'],
          ],
        },
      },
      1: { image: { alt: 'Un scout de PEAK traverse des pointes pendant qu’un autre attend de l’autre côté', caption: 'Capture officielle de gameplay Steam montrant un danger ; examinez le passage avant d’utiliser une ressource limitée.' } },
      2: {
        title: 'Trouver un groupe quand vos amis ne sont pas en ligne',
        paragraphs: [
          'Pour jouer avec d’autres personnes, utilisez une invitation Steam ou partagez un code de salon directement avec le groupe prévu. L’annonce de crossplay du 22 octobre élargit les possibilités entre Steam et les consoles prises en charge ; la mise à jour 3.0.1 du 23 octobre traite des codes entre régions. Aucune de ces annonces ne confirme un navigateur public ou une file aléatoire.',
          'Une publication communautaire de recherche de groupe peut aider à rencontrer des joueurs, mais le groupe et sa modération sont organisés par les joueurs. Précisez la plateforme, la région, l’objectif et le chat vocal avant de rejoindre. Gardez le code privé et vérifiez toute communauté qui se dit officielle via un lien du développeur.',
        ],
        image: { alt: 'Deux scouts de PEAK se tiennent ensemble sur un plateau rocheux', caption: 'Capture officielle de la boutique Steam montrant la coopération ; elle ne montre pas un lobby de matchmaking public.' },
        table: {
          caption: 'Options de groupe et limites des sources',
          headers: ['Option', 'Ce qu’elle permet', 'État de la source'],
          rows: [
            ['Invitations Steam', 'Inviter directement depuis la plateforme.', 'Pour des amis ou un groupe organisé à l’avance.'],
            ['Code de salon', 'Partager un code avec les joueurs prévus et utiliser JOIN GAME.', 'Ajouté en 2.04.a ; 3.0.1 a traité les joins entre régions.'],
            ['Recherche communautaire', 'Rencontrer des joueurs et convenir d’une partie.', 'Organisée par les joueurs ; règles et modération variables.'],
            ['Navigateur de salons publics', 'Permettrait de consulter des groupes ouverts.', 'Non décrit dans les sources officielles vérifiées à cette date.'],
            ['Matchmaking automatique', 'Attribuerait un groupe sans invitation directe.', 'Non décrit dans les sources officielles vérifiées à cette date.'],
          ],
        },
      },
    },
    faq: {
      eyebrow: 'Réponses rapides', title: 'Questions fréquentes sur PEAK en solo',
      items: [
        ['Peut-on jouer à PEAK en solo ?', 'Oui. La page Steam officielle indique un mode solo. Une personne gère alors la route, les objets, le rythme et la récupération.'],
        ['Combien de joueurs PEAK accepte-t-il ?', 'La description officielle de Steam indique quatre joueurs maximum. Vérifiez la boutique de votre plateforme pour toute évolution.'],
        ['PEAK propose-t-il des salons publics ou du matchmaking ?', 'Les sources officielles vérifiées jusqu’au 24 octobre 2026 ne décrivent ni navigateur public ni file aléatoire. Le crossplay et les codes servent à rejoindre un groupe organisé.'],
        ['Steam peut-il jouer avec les consoles maintenant ?', 'L’annonce officielle du 22 octobre 2026 indique que le crossplay est disponible après le lancement console. Consultez l’annonce et les réglages de plateforme pour la procédure actuelle.'],
        ['PEAK est-il difficile en solo ?', 'Il n’existe pas de difficulté fixe pour toutes les parties. L’itinéraire, les choix d’objets et l’expérience comptent ; commencez par un objectif visible et gardez une option de repli.'],
        ['Comment trouver des joueurs sans amis en ligne ?', 'Organisez une invitation, un code de salon ou une communauté clairement identifiée comme gérée par des joueurs. Une publication communautaire n’est pas une file officielle.'],
        ['Le Fanny Pack fonctionne-t-il en solo ?', 'Les notes 2.04.a du 2 septembre 2026 indiquent que le Fanny Pack est désactivé en solo. Vérifiez les notes officielles suivantes avant de vous y fier.'],
      ],
    },
    source: {
      eyebrow: 'Sources et périmètre', title: 'Sources et limites du guide',
      body: 'La page Steam officielle confirme le mode solo et des groupes de quatre joueurs maximum. L’annonce du 22 octobre 2026 et les notes 3.0.1 du 23 octobre sont les sources actuelles sur le crossplay et les codes de salon entre régions. 2.04.a est cité uniquement pour dater l’ajout des codes et la règle du Fanny Pack en solo. Les sources officielles vérifiées jusqu’au 24 octobre ne décrivent pas de navigateur public ni de matchmaking aléatoire ; cela ne prédit pas les prochaines mises à jour.',
      links: [['Page officielle PEAK sur Steam', officialStore], ['Annonce de crossplay (2026-10-22)', crossplayNews], ['Notes 3.0.1 (2026-10-23)', patch301News], ['Notes 2.04.a (2026-09-02)', patch204News]],
    },
    relatedLabel: 'Guides PEAK associés',
    related: [['room-codes', 'Rejoindre avec un code de salon PEAK'], ['map-rotation', 'Voir l’itinéraire actuel'], ['items', 'Parcourir le catalogue d’objets'], ['badges-guide', 'Consulter le guide des badges'], ['peak-game-update', 'Voir les mises à jour officielles']],
  },
  de: {
    primaryKeyword: 'Kann man PEAK allein spielen?',
    intro: 'Kann man PEAK allein spielen? Ja. Die offizielle Steam-Seite führt Einzelspieler als unterstützten Modus und beschreibt Gruppen mit bis zu vier Personen. Dieser Ratgeber erklärt, welche Routen-, Ausrüstungs-, Tempo- und Erholungsentscheidungen allein anfallen, und fasst die bis zum 24. Oktober 2026 geprüften Quellen zu Crossplay und Raumcodes zusammen. Einen öffentlichen Lobbybrowser oder eine zufällige Matchmaking-Warteschlange dokumentieren die geprüften offiziellen Quellen nicht.',
    answer: 'Ja. Steam bestätigt den Einzelspielermodus für PEAK. Allein triffst du die Routen- und Ausrüstungsentscheidungen selbst und musst eine Reserve für Fehler einplanen. Die offizielle Crossplay-Meldung vom 22. Oktober 2026 nennt Crossplay nach dem Konsolenstart; der Hotfix 3.0.1 vom 23. Oktober behandelt Raumcode-Beitritte zwischen Regionen. Das sind Wege für koordinierte Gruppen, keine bestätigte öffentliche Warteschlange.',
    heroImage: { alt: 'Ein PEAK-Scout blickt im Nebel zur Citadel', caption: 'Offizieller Steam-Shop-Screenshot eines Scouts vor der Citadel; er zeigt weder eine feste Route noch die Tageskarte.' },
    sections: {
      0: {
        title: 'Was offizielle Quellen zum Solo-Spiel in PEAK bestätigen',
        paragraphs: [
          'Die offizielle Steam-Seite führt Einzelspieler, Mehrspieler, Koop und Online-Koop auf. In der Beschreibung steht, dass Gruppen aus bis zu vier Personen bestehen können. Die Antwort auf die Hauptfrage lautet daher ja: PEAK unterstützt Solo-Spiel. Die Kategorien bestätigen Spielmodi, versprechen aber nicht dasselbe Tempo oder dieselbe Schwierigkeit wie im Koop.',
          'Die Plattforminformationen änderten sich im Oktober 2026. Die offizielle Meldung vom 22. Oktober sagt, dass PEAK auf Konsolen erschienen ist und Crossplay für Steam-Spieler verfügbar ist. Die Patch Notes 3.0.1 vom 23. Oktober nennen eine Korrektur für Raumcode-Beitritte in Spiele anderer Regionen. Prüfe diese datierten Meldungen, da sich die Verfügbarkeit ändern kann.',
          'Der offizielle Shop und die Meldungen, die bis zum 24. Oktober geprüft wurden, dokumentieren keinen öffentlichen Lobbybrowser, keine Serverliste für Fremde und keine automatische Matchmaking-Warteschlange. Das beschreibt den geprüften Quellenstand und schließt spätere Funktionen nicht aus. Raumcodes und Einladungen sind für koordinierte Gruppen gedacht, nicht für zufällige Zuteilung.',
        ],
        table: {
          caption: 'PEAK solo spielen, Gruppengröße und aktuelle Beitrittswege',
          headers: ['Frage', 'Geprüfte Quelle', 'Was sie bestätigt'],
          rows: [
            ['Kann man solo spielen?', 'Offizielle Steam-Seite', 'Ja; Einzelspieler ist aufgeführt.'],
            ['Wie viele können zusammen spielen?', 'Offizielle Steam-Seite', 'Die Beschreibung nennt bis zu vier Personen.'],
            ['Kann Steam mit Konsolen spielen?', 'Crossplay-Meldung vom 2026-10-22', 'Crossplay ist nach dem Konsolenstart verfügbar.'],
            ['Kann man einen Raumcode nutzen?', 'Patch Notes 2.04.a und 3.0.1', '2.04.a fügte Raumcodes hinzu; 3.0.1 behandelte regionale Beitritte.'],
            ['Gibt es einen öffentlichen Lobbybrowser?', 'Offizielle Quellen bis 2026-10-24', 'In den geprüften Quellen nicht dokumentiert.'],
            ['Gibt es automatisches Matchmaking?', 'Offizielle Quellen bis 2026-10-24', 'In den geprüften Quellen nicht dokumentiert.'],
          ],
        },
      },
      1: { image: { alt: 'Ein PEAK-Scout überquert Stacheln, während ein weiterer auf der anderen Seite wartet', caption: 'Offizieller Steam-Gameplay-Screenshot einer Gefahrenstelle; prüfe den Weg, bevor du ein knappes Hilfsmittel einsetzt.' } },
      2: {
        title: 'Eine Gruppe finden, wenn Freunde nicht online sind',
        paragraphs: [
          'Wenn du mit anderen spielen möchtest, nutze eine Steam-Freundeseinladung oder teile einen Raumcode direkt mit den vorgesehenen Mitspielern. Die Crossplay-Meldung vom 22. Oktober erweitert die Möglichkeiten zwischen Steam und unterstützten Konsolen; Patch 3.0.1 vom 23. Oktober behandelte Raumcode-Beitritte zwischen Regionen. Keine der Meldungen bestätigt einen offenen Lobbybrowser oder eine Zufallswarteschlange.',
          'Ein Community-Aufruf zur Gruppensuche kann Kontakte vermitteln, wird aber von Spielern organisiert. Klärt Plattform, Region, Ziel und Sprachchat vor dem Beitritt. Teile den Raumcode nur mit der vorgesehenen Gruppe und prüfe einen angeblich offiziellen Community-Kanal über einen Entwicklerlink.',
        ],
        image: { alt: 'Zwei PEAK-Scouts stehen gemeinsam auf einem felsigen Plateau', caption: 'Offizieller Steam-Shop-Screenshot mit Koop-Spielern; er zeigt keine öffentliche Matchmaking-Lobby.' },
        table: {
          caption: 'Gruppenoptionen und ihre Grenzen',
          headers: ['Option', 'Was sie ermöglicht', 'Quellenstatus'],
          rows: [
            ['Steam-Einladung', 'Spieler direkt über die Plattform einladen.', 'Für Freunde oder vorher koordinierte Gruppen.'],
            ['Raumcode', 'Code mit den vorgesehenen Spielern teilen und JOIN GAME nutzen.', 'Mit 2.04.a eingeführt; 3.0.1 behandelte regionale Beitritte.'],
            ['Community-Suche', 'Andere Spieler kennenlernen und eine Runde absprechen.', 'Von Spielern organisiert; Regeln und Moderation variieren.'],
            ['Öffentlicher Lobbybrowser', 'Offene Gruppen durchsuchen.', 'In den bis zum Prüftag geprüften offiziellen Quellen nicht beschrieben.'],
            ['Automatisches Matchmaking', 'Spieler ohne direkte Einladung zuteilen.', 'In den bis zum Prüftag geprüften offiziellen Quellen nicht beschrieben.'],
          ],
        },
      },
    },
    faq: {
      eyebrow: 'Kurzantworten', title: 'Häufige Fragen zu PEAK im Solomodus',
      items: [
        ['Kann man PEAK allein spielen?', 'Ja. Die offizielle Steam-Seite führt den Einzelspielermodus auf. Allein kümmerst du dich um Route, Ausrüstung, Tempo und Erholung.'],
        ['Wie viele Spieler unterstützt PEAK?', 'Laut offizieller Steam-Beschreibung können bis zu vier Personen zusammenspielen. Prüfe den aktuellen Store deiner Plattform auf spätere Änderungen.'],
        ['Hat PEAK öffentliche Lobbys oder Matchmaking?', 'Die bis zum 24. Oktober 2026 geprüften offiziellen Quellen dokumentieren weder einen öffentlichen Browser noch eine zufällige Warteschlange. Crossplay und Raumcodes helfen koordinierten Gruppen.'],
        ['Können Steam-Spieler jetzt mit Konsolen spielen?', 'Die offizielle Meldung vom 22. Oktober 2026 sagt, dass Crossplay nach dem Konsolenstart verfügbar ist. Prüfe die Meldung und die aktuellen Plattformoptionen.'],
        ['Wie schwierig ist PEAK allein?', 'Es gibt keine feste Schwierigkeit für jeden Lauf. Route, Ausrüstung und Erfahrung spielen mit; setze ein klares Zwischenziel und halte einen Rückweg offen.'],
        ['Wie finde ich Spieler, wenn Freunde fehlen?', 'Stimme eine Einladung, einen Raumcode oder einen klar als spielergeführt gekennzeichneten Community-Aufruf ab. Das ist keine offizielle Warteschlange.'],
        ['Ist der Fanny Pack im Solomodus verfügbar?', 'Die Patch Notes 2.04.a vom 02.09.2026 sagen, dass der Fanny Pack im Solospiel deaktiviert ist. Prüfe neuere offizielle Patch Notes.'],
      ],
    },
    source: {
      eyebrow: 'Quellen und Umfang', title: 'Quellen und Grenzen dieses Ratgebers',
      body: 'Die offizielle Steam-Seite bestätigt den Einzelspielermodus und Gruppen mit bis zu vier Personen. Die Crossplay-Meldung vom 22. Oktober 2026 und Patch Notes 3.0.1 vom 23. Oktober sind die aktuellen Quellen zu Crossplay und regionalen Raumcode-Beitritten. 2.04.a wird nur für die Einführung der Raumcodes und die damalige Fanny-Pack-Regel im Solomodus zitiert. Offizielle Quellen, die bis zum 24. Oktober geprüft wurden, dokumentieren keinen öffentlichen Lobbybrowser und kein zufälliges Matchmaking; künftige Updates sind damit nicht vorweggenommen.',
      links: [['Offizielle PEAK-Seite auf Steam', officialStore], ['Crossplay-Meldung (2026-10-22)', crossplayNews], ['Patch Notes 3.0.1 (2026-10-23)', patch301News], ['Patch Notes 2.04.a (2026-09-02)', patch204News]],
    },
    relatedLabel: 'Verwandte PEAK-Guides',
    related: [['room-codes', 'Mit PEAK-Raumcodes beitreten'], ['map-rotation', 'Aktuelle Route ansehen'], ['items', 'Item-Katalog öffnen'], ['badges-guide', 'PEAK-Abzeichen-Leitfaden ansehen'], ['peak-game-update', 'Offizielle Updates ansehen']],
  },
  pt: {
    primaryKeyword: 'Dá para jogar PEAK sozinho?',
    intro: 'Dá para jogar PEAK sozinho? Sim. A página oficial do Steam lista o modo para um jogador e descreve grupos multiplayer de até quatro pessoas. Este guia explica as decisões de rota, inventário, ritmo e recuperação que ficam com uma pessoa e resume as fontes consultadas até 24 de outubro de 2026 sobre crossplay e códigos de sala. As fontes oficiais verificadas não descrevem um navegador de salas públicas nem uma fila aleatória de matchmaking.',
    answer: 'Sim. O Steam confirma que PEAK tem modo para um jogador. No solo, você cuida da rota, dos itens, do ritmo e da margem para se recuperar de um erro. O anúncio oficial de 22 de outubro de 2026 confirmou o crossplay após o lançamento nos consoles; a nota 3.0.1 de 23 de outubro tratou da entrada por código de sala entre regiões. São opções para grupos combinados, não uma fila pública confirmada.',
    heroImage: { alt: 'Um explorador de PEAK observa Citadel através da neblina', caption: 'Captura oficial da loja Steam mostrando um explorador se aproximando de Citadel; não representa uma rota fixa nem o mapa do dia.' },
    sections: {
      0: {
        title: 'O que as fontes oficiais confirmam sobre jogar PEAK solo',
        paragraphs: [
          'A página oficial do Steam lista PEAK como jogo para um jogador, multiplayer, cooperativo e cooperativo online. A descrição fala em grupos de até quatro pessoas. Portanto, a resposta principal é sim: PEAK permite jogar solo. Essas categorias confirmam os modos, mas não prometem o mesmo ritmo ou a mesma dificuldade no solo e no cooperativo.',
          'As informações de plataforma mudaram em outubro de 2026. O anúncio oficial de 22 de outubro informa que PEAK chegou aos consoles e que o crossplay está disponível para jogadores Steam. As notas 3.0.1 de 23 de outubro dizem que códigos de sala para entrar em jogos de outras regiões foram corrigidos. Consulte esses avisos datados, pois a disponibilidade pode mudar.',
          'A loja e os anúncios oficiais verificados até 24 de outubro não descrevem navegador de salas públicas, lista de servidores para desconhecidos ou fila automática de matchmaking. Esse é o limite das fontes consultadas, não uma garantia sobre versões futuras. Código de sala e convite servem para entrar em um grupo combinado; não são distribuição aleatória de jogadores.',
        ],
        table: {
          caption: 'PEAK solo, tamanho do grupo e formas atuais de entrar',
          headers: ['Pergunta', 'Fonte verificada', 'O que confirma'],
          rows: [
            ['Dá para jogar solo?', 'Página oficial do Steam', 'Sim; o modo para um jogador está listado.'],
            ['Quantas pessoas podem jogar juntas?', 'Página oficial do Steam', 'A descrição indica até quatro pessoas.'],
            ['Steam pode jogar com consoles?', 'Anúncio de crossplay, 2026-10-22', 'O crossplay foi anunciado após o lançamento nos consoles.'],
            ['É possível usar código de sala?', 'Notas 2.04.a e 3.0.1', '2.04.a adicionou códigos; 3.0.1 tratou da entrada entre regiões.'],
            ['Há navegador de salas públicas?', 'Loja/notícias oficiais até 2026-10-24', 'As fontes consultadas não descrevem esse recurso.'],
            ['Há matchmaking automático?', 'Loja/notícias oficiais até 2026-10-24', 'As fontes consultadas não descrevem esse recurso.'],
          ],
        },
      },
      1: { image: { alt: 'Um explorador de PEAK atravessa espinhos enquanto outro espera do outro lado', caption: 'Captura oficial de gameplay do Steam mostrando um perigo da rota; observe a passagem antes de gastar um recurso limitado.' } },
      2: {
        title: 'Como encontrar um grupo quando seus amigos não estão online',
        paragraphs: [
          'Se quiser companhia, use um convite de amigo Steam ou compartilhe um código de sala diretamente com as pessoas com quem pretende jogar. O anúncio de crossplay de 22 de outubro ampliou as opções entre Steam e consoles compatíveis; a atualização 3.0.1 de 23 de outubro tratou de códigos de sala entre regiões. Nenhum dos avisos confirma um navegador público ou uma fila aleatória.',
          'Uma publicação comunitária de procura por grupo pode ajudar você a conhecer jogadores, mas o grupo e a moderação são organizados pelos próprios jogadores. Combine plataforma, região, objetivo e voz antes de entrar. Mantenha o código de sala privado e confira por um link do desenvolvedor qualquer comunidade que se apresente como oficial.',
        ],
        image: { alt: 'Dois exploradores de PEAK estão juntos em um platô rochoso', caption: 'Captura oficial da loja Steam mostrando cooperação; não representa um lobby público de matchmaking.' },
        table: {
          caption: 'Opções para encontrar grupo e seus limites',
          headers: ['Opção', 'O que oferece', 'Estado da fonte'],
          rows: [
            ['Convite de amigo Steam', 'Convidar alguém diretamente pela plataforma.', 'Para amigos ou grupos combinados com antecedência.'],
            ['Código de sala', 'Compartilhar com o grupo previsto e entrar por JOIN GAME.', 'Adicionado em 2.04.a; 3.0.1 tratou de entradas entre regiões.'],
            ['Comunidade de grupo', 'Conhecer jogadores e combinar uma partida.', 'Organizada por jogadores; regras e moderação variam.'],
            ['Navegador de salas públicas', 'Permitiria ver grupos abertos.', 'Não descrito nas fontes oficiais verificadas até a data indicada.'],
            ['Matchmaking automático', 'Distribuiria jogadores sem convite direto.', 'Não descrito nas fontes oficiais verificadas até a data indicada.'],
          ],
        },
      },
    },
    faq: {
      eyebrow: 'Respostas rápidas', title: 'Perguntas frequentes sobre PEAK solo',
      items: [
        ['Dá para jogar PEAK sozinho?', 'Sim. A página oficial do Steam lista o modo para um jogador. No solo, uma pessoa cuida da rota, dos itens, do ritmo e da recuperação.'],
        ['Quantas pessoas PEAK suporta?', 'A descrição oficial do Steam fala em grupos de até quatro pessoas. Confira a loja da sua plataforma caso a disponibilidade mude.'],
        ['PEAK tem salas públicas ou matchmaking?', 'As fontes oficiais verificadas até 24 de outubro de 2026 não descrevem navegador público nem fila aleatória. Crossplay e códigos de sala ajudam grupos combinados.'],
        ['Jogadores Steam podem jogar com consoles agora?', 'O anúncio oficial de 22 de outubro de 2026 informa que o crossplay está disponível após o lançamento nos consoles. Confira o aviso e as opções atuais da plataforma.'],
        ['PEAK é difícil no solo?', 'Não há uma dificuldade fixa para toda partida. A rota, as escolhas de itens e a experiência influenciam; comece com um objetivo visível e mantenha uma opção de recuo.'],
        ['Como encontrar jogadores se meus amigos não estão?', 'Combine um convite, código de sala ou espaço comunitário identificado como organizado por jogadores. Uma publicação da comunidade não é uma fila oficial.'],
        ['Fanny Pack funciona no solo?', 'As notas 2.04.a de 2 de setembro de 2026 dizem que Fanny Pack fica desativada no solo. Confira notas oficiais posteriores antes de contar com essa regra.'],
      ],
    },
    source: {
      eyebrow: 'Fontes e escopo', title: 'Fontes e limites deste guia',
      body: 'A página oficial do Steam confirma o modo para um jogador e grupos de até quatro pessoas. O anúncio de 22 de outubro de 2026 e as notas 3.0.1 de 23 de outubro são as fontes atuais para crossplay e códigos de sala entre regiões. 2.04.a é citado apenas para datar a adição dos códigos e a regra de Fanny Pack no solo. As fontes oficiais verificadas até 24 de outubro não descrevem navegador público nem matchmaking aleatório; isso não prevê atualizações futuras.',
      links: [['Página oficial de PEAK no Steam', officialStore], ['Anúncio de crossplay (2026-10-22)', crossplayNews], ['Notas 3.0.1 (2026-10-23)', patch301News], ['Notas 2.04.a (2026-09-02)', patch204News]],
    },
    relatedLabel: 'Guias PEAK relacionados',
    related: [['room-codes', 'Entrar com códigos de sala PEAK'], ['map-rotation', 'Ver a rota atual'], ['items', 'Abrir o catálogo de itens'], ['badges-guide', 'Ver o guia de distintivos'], ['peak-game-update', 'Consultar atualizações oficiais']],
  },
  ko: {
    primaryKeyword: 'PEAK 혼자 할 수 있나요?',
    intro: 'PEAK 혼자 할 수 있나요? 네. Steam 공식 페이지는 싱글 플레이를 지원하며, 멀티플레이 그룹은 최대 4명이라고 안내합니다. 이 가이드는 혼자 등반할 때 한 명이 맡아야 하는 경로, 장비, 페이스 조절과 회복 판단을 설명하고 2026년 10월 24일까지 확인한 크로스플레이와 방 코드 정보를 정리합니다. 확인한 공식 자료에는 공개 로비 탐색이나 무작위 매칭 대기열이 나와 있지 않습니다.',
    answer: '네. Steam은 PEAK의 싱글 플레이를 지원한다고 안내합니다. 혼자 플레이하면 경로와 아이템, 속도, 실수 후 회복을 직접 판단해야 합니다. 2026년 10월 22일 공식 공지는 콘솔 출시 후 크로스플레이가 가능하다고 밝혔고, 10월 23일 3.0.1 패치는 지역 간 방 코드 참가 문제를 다뤘습니다. 이는 함께할 사람을 정한 뒤 참가하는 방법이며 공개 매칭 대기열이 확인됐다는 뜻은 아닙니다.',
    heroImage: { alt: '안개 속에서 Citadel을 바라보는 PEAK 정찰대원', caption: 'Citadel에 다가가는 모습을 담은 Steam 공식 상점 스크린샷입니다. 고정 경로나 오늘의 맵을 뜻하지 않습니다.' },
    sections: {
      0: {
        title: 'PEAK 솔로 플레이에 관해 공식 자료가 확인해 주는 점',
        paragraphs: [
          'Steam 공식 페이지는 PEAK를 싱글 플레이, 멀티플레이, 협동 플레이, 온라인 협동 플레이로 분류하고 최대 4명이 함께할 수 있다고 설명합니다. 따라서 PEAK를 혼자 할 수 있느냐는 질문의 답은 네입니다. 이 표기는 플레이 모드를 확인해 줄 뿐, 솔로와 협동의 진행 속도나 난이도가 같다는 뜻은 아닙니다.',
          '플랫폼 정보는 2026년 10월에 바뀌었습니다. 10월 22일 공식 공지는 콘솔 출시와 함께 Steam 플레이어가 크로스플레이를 이용할 수 있다고 안내합니다. 10월 23일 3.0.1 패치 노트는 다른 지역의 게임에 방 코드로 참가할 때의 문제를 수정했다고 합니다. 이용 가능 여부는 바뀔 수 있으니 날짜가 있는 공지를 확인하세요.',
          '10월 24일까지 확인한 공식 상점과 공지에는 공개 로비 탐색, 낯선 사람을 위한 서버 목록, 자동 매칭 대기열이 설명되어 있지 않습니다. 이는 확인한 자료의 범위이지 향후 기능이 추가되지 않는다는 보장이 아닙니다. 방 코드와 초대는 함께할 사람을 정한 그룹에 쓰는 방법이며 무작위 배정과 다릅니다.',
        ],
        table: {
          caption: 'PEAK 솔로 플레이, 그룹 인원과 현재 참가 방법',
          headers: ['질문', '확인한 출처', '확인 가능한 내용'],
          rows: [
            ['혼자 플레이할 수 있나요?', 'Steam 공식 페이지', '네. 싱글 플레이가 표시되어 있습니다.'],
            ['몇 명이 함께 플레이할 수 있나요?', 'Steam 공식 페이지', '설명에는 최대 4명이라고 나옵니다.'],
            ['Steam과 콘솔이 함께할 수 있나요?', '2026-10-22 크로스플레이 공지', '콘솔 출시 후 크로스플레이가 가능하다고 안내합니다.'],
            ['방 코드를 쓸 수 있나요?', '2.04.a 및 3.0.1 패치 노트', '2.04.a에 추가됐고 3.0.1은 지역 간 참가 문제를 다뤘습니다.'],
            ['공개 로비 탐색 기능이 있나요?', '2026-10-24까지 확인한 공식 자료', '확인한 자료에는 설명되어 있지 않습니다.'],
            ['자동 매칭 기능이 있나요?', '2026-10-24까지 확인한 공식 자료', '확인한 자료에는 설명되어 있지 않습니다.'],
          ],
        },
      },
      1: {
        title: 'PEAK 솔로 등반을 감당하기 쉽게 계획하는 법',
        paragraphs: [
          '혼자 등반하면 경로, 장비, 진행 속도, 회복 판단을 모두 한 정찰대원이 맡습니다. 한 번에 모든 생물 군계를 대비하기보다 다음으로 넘어갈 구간부터 정하세요. 위험한 곳을 오르기 전에 도구나 스태미나를 쓸지 멈춰서 살피고, 다음에 안전하게 쉴 곳과 되돌아갈 여지가 남는지 확인하세요.',
          '일부 시스템은 솔로에서 다르다고 공식 패치가 명시했습니다. 2.04.a 패치 노트는 솔로 플레이에서 Fanny Pack이 비활성화된다고 합니다. 이는 날짜가 있는 출처 기반 규칙이지, 다른 아이템이나 배지, 부활이 언제나 같은 방식으로 작동한다는 증거는 아닙니다. 모드별 상호작용에 의지하기 전 최신 공식 노트를 읽고, 최종적으로 게임 내 안내를 확인하세요.',
          '첫 시도에서는 눈으로 확인할 수 있는 학습 목표를 정하세요. 다음 안전 지점에 도착하기, 경로 선택 하나를 시험하기, 어느 구간에서 계획이 늦어지는지 찾기가 예입니다. 성공한 한 번의 등반을 모든 사람에게 쉬운 루트라고 부르지 말고, 실제로 일어난 일을 기록하세요. 솔로 결과는 현재 경로와 판단, 사용 중인 버전에 따라 달라집니다.',
          '다음 선택이 분명하지 않다면 지형이 잘 보이는 곳에서 멈추세요. 현재 경로와 천천히 가더라도 회복 여지를 남기는 길을 비교합니다. 다음에 무엇이 있는지 모르는데 남은 유용한 자원을 모두 써야만 할 것 같다면 기다리거나 물러나거나 그 시도를 끝내는 편이 나을 수 있습니다. 목표는 매번 정상을 강제로 밟는 게 아니라 반복 가능한 계획을 찾는 것입니다.',
        ],
        bullets: [
          ['경로 먼저 확인', '보이는 장애물을 살핀 뒤 가방을 열거나 아이템을 사용하세요.'],
          ['회복 여유 확보', '팀원이 구조하거나 여분 장비를 대신 보관해 줄 거라고 기대하지 마세요.'],
          ['짧게 멈춰 판단', '경로가 잘 보이는 곳에서 멈추고 다음 선택을 바꾼 요소를 기록하세요.'],
          ['솔로 규칙 확인', '아이템이나 배지 상호작용을 계획하기 전에 최신 패치 노트를 확인하세요.'],
        ],
        image: { alt: 'PEAK 정찰대원이 가시 장애물을 건너고 다른 정찰대원이 반대편에서 기다리는 모습', caption: '위험 구간을 담은 Steam 공식 게임 스크린샷입니다. 한정된 아이템을 쓰기 전에 경로를 살펴보세요.' },
      },
      2: {
        title: '친구가 온라인이 아닐 때 그룹 찾기',
        paragraphs: [
          '다른 사람과 플레이하고 싶다면 Steam 친구 초대를 사용하거나 함께할 사람에게 방 코드를 직접 공유하세요. 10월 22일 크로스플레이 공지로 Steam과 지원되는 콘솔 간 선택지가 넓어졌고, 10월 23일 3.0.1 업데이트는 지역 간 방 코드 참가 문제를 다뤘습니다. 두 공지 모두 공개 로비 탐색이나 무작위 대기열이 추가됐다고 설명하지 않습니다.',
          '커뮤니티 구인 글로 플레이어를 만날 수 있지만 그룹과 운영은 플레이어가 맡습니다. 참가 전에 플랫폼, 지역, 목표와 음성 채팅을 정하세요. 방 코드는 초대할 사람에게만 공유하고, 공식이라고 주장하는 커뮤니티는 개발자 링크로 확인하세요.',
        ],
        image: { alt: '바위 고원에 나란히 서 있는 PEAK 정찰대원 두 명', caption: '협동 플레이를 담은 Steam 공식 상점 스크린샷이며 공개 매칭 로비를 나타내지는 않습니다.' },
        table: {
          caption: '그룹을 찾는 방법과 출처 범위',
          headers: ['방법', '가능한 일', '출처 상태'],
          rows: [
            ['Steam 친구 초대', '플랫폼에서 직접 초대합니다.', '아는 사람이나 미리 조율한 그룹에 적합합니다.'],
            ['방 코드', '예정된 플레이어와 코드를 공유한 뒤 JOIN GAME을 사용합니다.', '2.04.a에 추가됐고 3.0.1은 지역 간 참가를 다뤘습니다.'],
            ['커뮤니티 구인', '플레이어를 만나 함께할 게임을 정합니다.', '플레이어 운영이며 규칙과 관리가 다릅니다.'],
            ['공개 로비 탐색', '열린 그룹을 찾아볼 수 있는 기능입니다.', '확인 날짜까지 공식 자료에 설명되어 있지 않습니다.'],
            ['자동 매칭', '직접 초대 없이 플레이어를 배정합니다.', '확인 날짜까지 공식 자료에 설명되어 있지 않습니다.'],
          ],
        },
      },
    },
    faq: {
      eyebrow: '빠른 답변', title: 'PEAK 솔로 플레이 자주 묻는 질문',
      items: [
        ['PEAK 혼자 할 수 있나요?', '네. Steam 공식 페이지에 싱글 플레이가 표시되어 있습니다. 혼자서는 경로, 아이템, 페이스와 회복을 직접 판단합니다.'],
        ['PEAK는 몇 명까지 지원하나요?', 'Steam 공식 설명은 최대 4명 그룹을 안내합니다. 플랫폼별 출시 상황은 현재 스토어에서 확인하세요.'],
        ['PEAK에 공개 로비나 매칭이 있나요?', '2026년 10월 24일까지 확인한 공식 자료는 공개 로비 탐색이나 무작위 매칭 대기열을 설명하지 않습니다. 크로스플레이와 방 코드는 조율된 그룹에 쓰입니다.'],
        ['Steam 플레이어와 콘솔 플레이어가 지금 함께할 수 있나요?', '2026년 10월 22일 공식 공지는 콘솔 출시 후 크로스플레이가 가능하다고 안내합니다. 현재 참가 방법은 공지와 플랫폼 설정을 확인하세요.'],
        ['PEAK 솔로는 얼마나 어렵나요?', '모든 플레이에 적용되는 고정 난이도는 없습니다. 경로, 아이템 선택과 경험이 영향을 줍니다. 눈에 보이는 목표부터 시작하고 후퇴 선택을 남겨 두세요.'],
        ['친구가 없을 때 플레이어를 어떻게 찾나요?', '친구 초대, 방 코드 또는 플레이어 운영임을 명확히 표시한 커뮤니티에서 조율할 수 있습니다. 커뮤니티 글은 공식 매칭 대기열이 아닙니다.'],
        ['솔로에서 Fanny Pack을 쓸 수 있나요?', '2026년 9월 2일 2.04.a 패치 노트는 솔로 플레이에서 Fanny Pack이 비활성화된다고 합니다. 이후 공식 패치도 확인하세요.'],
      ],
    },
    source: {
      eyebrow: '출처와 범위', title: '이 가이드의 출처와 한계',
      body: 'Steam 공식 페이지는 싱글 플레이와 최대 4명 그룹을 확인해 줍니다. 2026년 10월 22일 크로스플레이 공지와 10월 23일 3.0.1 패치 노트는 현재 크로스플레이와 지역 간 방 코드 참가의 출처입니다. 2.04.a는 방 코드 추가 시점과 솔로의 Fanny Pack 규칙을 설명할 때만 인용합니다. 10월 24일까지 확인한 공식 자료에는 공개 로비 탐색이나 무작위 매칭이 나오지 않으며, 이는 미래 업데이트를 예측하지 않습니다.',
      links: [['PEAK Steam 공식 페이지', officialStore], ['크로스플레이 공지 (2026-10-22)', crossplayNews], ['3.0.1 패치 노트 (2026-10-23)', patch301News], ['2.04.a 패치 노트 (2026-09-02)', patch204News]],
    },
    relatedLabel: '관련 PEAK 가이드',
    related: [['room-codes', 'PEAK 방 코드로 참가하기'], ['map-rotation', '현재 경로 확인'], ['items', '아이템 목록 보기'], ['badges-guide', '배지 가이드 보기'], ['peak-game-update', '공식 업데이트 확인']],
  },
  it: {
    primaryKeyword: 'Si può giocare a PEAK in solitaria?',
    intro: 'Si può giocare a PEAK in solitaria? Sì. La pagina ufficiale di Steam include la modalità per un giocatore e descrive gruppi multiplayer fino a quattro persone. Questa guida spiega le decisioni di percorso, equipaggiamento, ritmo e recupero che ricadono su una sola persona e riassume le fonti consultate fino al 24 ottobre 2026 su crossplay e codici stanza. Le fonti ufficiali verificate non descrivono un browser di lobby pubbliche né una coda casuale di matchmaking.',
    answer: 'Sì. Steam conferma che PEAK supporta il gioco in solitaria. Da soli bisogna gestire percorso, oggetti, ritmo e margine per recuperare dopo un errore. L’annuncio ufficiale del 22 ottobre 2026 ha confermato il crossplay dopo il lancio su console; la nota 3.0.1 del 23 ottobre ha trattato i codici stanza tra regioni. Sono opzioni per gruppi coordinati, non una coda pubblica confermata.',
    heroImage: { alt: 'Uno scout di PEAK guarda Citadel attraverso la nebbia', caption: 'Screenshot ufficiale dello store Steam con uno scout diretto verso Citadel; non mostra un percorso fisso né la mappa del giorno.' },
    sections: {
      0: {
        title: 'Cosa confermano le fonti ufficiali sul gioco in solitaria',
        paragraphs: [
          'La pagina ufficiale di Steam classifica PEAK come gioco per un giocatore, multigiocatore, cooperativo e cooperativo online. La descrizione indica gruppi fino a quattro persone. Si può giocare a PEAK in solitaria? Sì: Steam conferma la modalità per un giocatore. Queste categorie confermano le modalità, ma non garantiscono lo stesso ritmo o la stessa difficoltà rispetto alla cooperativa.',
          'Le informazioni sulle piattaforme sono cambiate nell’ottobre 2026. L’annuncio ufficiale del 22 ottobre afferma che PEAK è uscito su console e che il crossplay è disponibile per i giocatori Steam. Le note 3.0.1 del 23 ottobre indicano una correzione per i codici stanza usati per entrare in partite di altre regioni. Consulta gli avvisi con data perché la disponibilità può cambiare.',
          'Lo store e gli annunci ufficiali verificati fino al 24 ottobre non descrivono un browser di lobby pubbliche, un elenco di server per sconosciuti o una coda automatica di matchmaking. Questo è il limite delle fonti controllate, non una garanzia sulle versioni future. Codici stanza e inviti servono per gruppi coordinati, non per l’assegnazione casuale.',
        ],
        table: {
          caption: 'PEAK in solitaria, dimensione del gruppo e modi attuali per unirsi',
          headers: ['Domanda', 'Fonte verificata', 'Cosa conferma'],
          rows: [
            ['Si può giocare in solitaria?', 'Pagina ufficiale di Steam', 'Sì; è indicata la modalità per un giocatore.'],
            ['Quante persone possono giocare insieme?', 'Pagina ufficiale di Steam', 'La descrizione indica fino a quattro persone.'],
            ['Steam può giocare con le console?', 'Annuncio crossplay del 2026-10-22', 'Il crossplay è annunciato dopo il lancio su console.'],
            ['Si può usare un codice stanza?', 'Note 2.04.a e 3.0.1', '2.04.a ha aggiunto i codici; 3.0.1 ha trattato gli ingressi tra regioni.'],
            ['C’è un browser di lobby pubbliche?', 'Fonti ufficiali verificate al 2026-10-24', 'La funzione non è descritta nelle fonti consultate.'],
            ['C’è matchmaking automatico?', 'Fonti ufficiali verificate al 2026-10-24', 'La funzione non è descritta nelle fonti consultate.'],
          ],
        },
      },
      1: { image: { alt: 'Uno scout di PEAK supera spuntoni mentre un altro aspetta dall’altra parte', caption: 'Screenshot ufficiale di gioco Steam con un pericolo del percorso; osserva il passaggio prima di usare una risorsa limitata.' } },
      2: {
        title: 'Come trovare un gruppo quando gli amici non sono online',
        paragraphs: [
          'Se vuoi giocare con altre persone, usa un invito Steam o condividi un codice stanza direttamente con chi hai concordato di giocare. L’annuncio crossplay del 22 ottobre ha ampliato le opzioni tra Steam e console supportate; l’aggiornamento 3.0.1 del 23 ottobre ha trattato i codici tra regioni. Nessuno dei due avvisi conferma un browser aperto o una coda casuale.',
          'Un post comunitario per cercare un gruppo può aiutarti a conoscere altri giocatori, ma il gruppo e la moderazione sono gestiti dai giocatori. Chiarisci piattaforma, regione, obiettivo e chat vocale prima di entrare. Mantieni privato il codice stanza e verifica tramite un link dello sviluppatore qualsiasi spazio che si dichiari ufficiale.',
        ],
        image: { alt: 'Due scout di PEAK sono insieme su un altopiano roccioso', caption: 'Screenshot ufficiale dello store Steam con gioco cooperativo; non mostra una lobby di matchmaking pubblica.' },
        table: {
          caption: 'Opzioni per trovare un gruppo e relativi limiti',
          headers: ['Opzione', 'Cosa offre', 'Stato della fonte'],
          rows: [
            ['Invito Steam', 'Invitare direttamente dalla piattaforma.', 'Per amici o gruppi organizzati in anticipo.'],
            ['Codice stanza', 'Condividere il codice con il gruppo previsto e usare JOIN GAME.', 'Aggiunto in 2.04.a; 3.0.1 ha trattato gli ingressi tra regioni.'],
            ['Ricerca comunitaria', 'Conoscere giocatori e concordare una partita.', 'Organizzata dai giocatori; regole e moderazione variano.'],
            ['Browser di lobby pubbliche', 'Permetterebbe di vedere gruppi aperti.', 'Non descritto nelle fonti ufficiali verificate fino alla data indicata.'],
            ['Matchmaking automatico', 'Assegnerebbe giocatori senza inviti diretti.', 'Non descritto nelle fonti ufficiali verificate fino alla data indicata.'],
          ],
        },
      },
    },
    faq: {
      eyebrow: 'Risposte rapide', title: 'Domande frequenti su PEAK in solitaria',
      items: [
        ['Si può giocare a PEAK in solitaria?', 'Sì. La pagina ufficiale di Steam include la modalità per un giocatore. Da soli si gestiscono percorso, oggetti, ritmo e recupero.'],
        ['Quanti giocatori supporta PEAK?', 'La descrizione ufficiale di Steam indica gruppi fino a quattro persone. Controlla lo store della tua piattaforma per eventuali cambiamenti.'],
        ['PEAK ha lobby pubbliche o matchmaking?', 'Le fonti ufficiali verificate fino al 24 ottobre 2026 non descrivono un browser pubblico né una coda casuale. Crossplay e codici stanza servono a gruppi coordinati.'],
        ['I giocatori Steam possono giocare con le console?', 'L’annuncio ufficiale del 22 ottobre 2026 dice che il crossplay è disponibile dopo il lancio su console. Consulta l’avviso e le impostazioni attuali della piattaforma.'],
        ['Quanto è difficile PEAK in solitaria?', 'Non esiste una difficoltà fissa per ogni partita. Percorso, scelta degli oggetti ed esperienza incidono; inizia con un obiettivo visibile e tieni aperta una via di ritirata.'],
        ['Come trovare giocatori se gli amici non ci sono?', 'Concorda un invito, un codice stanza o uno spazio comunitario chiaramente gestito dai giocatori. Un post della community non è una coda ufficiale.'],
        ['Fanny Pack è disponibile in solitaria?', 'Le note 2.04.a del 2 settembre 2026 dicono che Fanny Pack è disattivato in solitaria. Verifica le note ufficiali successive.'],
      ],
    },
    source: {
      eyebrow: 'Fonti e ambito', title: 'Fonti e limiti della guida',
      body: 'La pagina ufficiale di Steam conferma la modalità per un giocatore e gruppi fino a quattro persone. L’annuncio del 22 ottobre 2026 e le note 3.0.1 del 23 ottobre sono le fonti attuali per crossplay e codici stanza tra regioni. 2.04.a è citato solo per datare l’introduzione dei codici e la regola Fanny Pack in solitaria. Le fonti ufficiali verificate fino al 24 ottobre non descrivono lobby pubbliche o matchmaking casuale; questo non anticipa aggiornamenti futuri.',
      links: [['Pagina ufficiale PEAK su Steam', officialStore], ['Annuncio crossplay (2026-10-22)', crossplayNews], ['Note 3.0.1 (2026-10-23)', patch301News], ['Note 2.04.a (2026-09-02)', patch204News]],
    },
    relatedLabel: 'Guide PEAK correlate',
    related: [['room-codes', 'Unirsi con i codici stanza PEAK'], ['map-rotation', 'Vedere il percorso attuale'], ['items', 'Aprire il catalogo oggetti'], ['badges-guide', 'Consultare la guida ai badge'], ['peak-game-update', 'Vedere gli aggiornamenti ufficiali']],
  },
};
