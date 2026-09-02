const officialTitles = {
  patch203: "Patch Notes 2.03.a",
  gloom: "ONE MORE WEEK OF GLOOM + THE CITADEL",
  patch202: "PATCH 2.02.a",
  patch201: "PATCH 2.01.a: Frog cooldown and bug fixes",
  ascent: "THE FINAL ASCENT",
  biome: "THE FINAL BIOME UPDATE ARRIVES AUGUST 11!",
};

export const peakGameUpdateTranslations = {
  zh: {
    meta: {
      title: "PEAK 游戏更新日志：补丁说明、地图与改动",
      description: "跟进每次 PEAK 游戏更新：新地图、补丁说明和轮换变化一目了然，页面顶部显示今日地图，并在每次构建时核对来源。",
      schema: "一份以来源为依据的 PEAK 游戏更新日志，连接官方补丁标题、地图轮换、每日地图数据和版本相关的路线规划。",
    },
    eyebrow: "版本动态 - 先看官方标题",
    h1: "PEAK 游戏更新日志",
    intro: "在查找 PEAK 游戏更新？先打开 [[link:map-rotation#today-map|今日地图]]，查看构建时写入的当前路线，再用这份日志按日期梳理官方补丁标题与生物群系公告。每条只记录 Steam 官方新闻确认的内容；具体机制仍以完整原文为准。",
    answerLabel: "简要答案",
    answer: "这份 PEAK 游戏更新日志中，最近确认的条目是 2026 年 8 月 27 日的 Patch Notes 2.03.a、8 月 24 日的 Gloom 与 Citadel 公告，以及 8 月 18 日的 Patch 2.02.a。更早的记录包括 Frog 冷却时间与错误修复补丁、The Final Ascent 和最终生物群系公告。本页记录官方标题、日期和谨慎摘要，并把它们连接到每日地图与路线规划页面。",
    tocLabel: "本页内容",
    tocFaq: "更新 FAQ",
    heroImage: {
      alt: "PEAK 官方 The Final Ascent 作品图，用于说明更新背景",
      caption: "Steam 官方作品图 - 用日期明确的更新作为参考，不代替完整补丁说明。",
    },
    sections: [
      {
        title: "PEAK 更新后先查看今日地图",
        paragraphs: [
          "把路线答案放在顶部，是因为补丁可能改变旧地图记录所对应的版本背景。下面的构建时卡片会在来源和位置字段齐全时显示当前日期记录。它只是快照，并不保证每个大厅或未来重置都会完全相同。",
          "卡片已核验时，把记录日期与游戏版本对照，再用它了解路线方向。如果状态为待核验，请打开游戏直接确认当前路线。这样，在更新刚发布而来源尚未完成检查的短暂阶段，PEAK 游戏更新页面仍然有用。",
        ],
      },
      {
        title: "已确认的 PEAK 游戏更新",
        paragraphs: [
          "下表由一份小型版本化数据文件生成，初始数据来自官方 Steam News API。源文件保存官方标题、发布日期、克制的标题级摘要和 Steam 新闻链接；当完整补丁内容没有被独立转录时，本页不会凭空补写机制细节。",
          "日志刻意保持紧凑。玩家可以快速定位相关版本，打开第一方原文查看完整说明，再使用地图或时间表页面决定需要重新检查什么。构建时抓取到新的官方条目后，它会按日期放到顶部，让页面保持为可持续维护的参考。",
        ],
      },
      {
        title: "PEAK 游戏更新如何影响地图轮换",
        paragraphs: [
          "更新和每日轮换回答的是不同问题。补丁说明描述版本事件；轮换描述特定日期被记录的路线背景。生物群系公告可能解释为什么值得关注一个新区域，但公告本身不能证明它会出现在每个玩家的当前路线中。先读更新，再查看带日期的地图数据，并在游戏内确认。",
          "当标题出现新生物群系或路线词汇时，这个区别尤其重要。官方动态可以证明 Gloom、Citadel、Caldera 或 The Kiln 在某次更新中被提及；但如果没有当前路线记录，它不能回答重置后你的大厅会显示什么顺序。重置时间和近期日期记录请查看 [[link:peak-map-rotation-schedule|轮换时间表]]。",
        ],
        bullets: [
          ["检查版本", "在复用旧路线记录前，先写下补丁标题和发布日期。"],
          ["检查路线", "把带日期的地图记录与当前游戏显示的路线进行对照。"],
          ["检查机制", "具体改动应以完整官方原文为准，不要从标题推断数值或行为。"],
          ["检查笔记", "标记建议是实测、官方信息还是未核验内容，方便之后修正。"],
        ],
      },
      {
        title: "实用的 PEAK 补丁说明阅读方法",
        paragraphs: [
          "先确认官方日期和标题，再只提取会改变玩家决策的内容。冷却时间变化可能影响队伍何时投入；新生物群系公告可能改变玩家搜索地图时使用的词汇；错误修复标题可能关系到稳定性，却不一定改变路线本身。本页需要把这些情况分开，而不是把每次更新都称为新地图。",
          "读完后，在一次普通游戏中验证一个假设，并把结果与游戏版本一起记录。一次成功或失败不能证明某条规则永远成立。用来源、游戏内观察和带日期笔记组成小闭环，才能让 PEAK 游戏更新日志真正有用，同时不超出来源能够支持的范围。",
          "把更新日期和地图记录日期保存在不同字段中。前者表示官方信息何时发布，后者表示路线何时被观察到。对照两个日期，可以解释为什么旧社区建议可能仍描述真实路线，却不一定适用于当前版本。",
        ],
        bullets: [
          ["1. 找到官方原文", "使用已链接的 Steam 动态，保留准确标题和日期。"],
          ["2. 分类改动", "区分补丁说明、内容公告、错误修复和社区背景。"],
          ["3. 重新检查路线", "打开当前地图记录，并在游戏内确认活动路线。"],
          ["4. 更新笔记", "记录版本、证据和不确定性，留给下一次构建继续维护。"],
        ],
      },
    ],
    faq: {
      eyebrow: "快速回答",
      title: "PEAK 游戏更新 FAQ",
      items: [
        ["PEAK 多久更新一次？", "官方 Steam 动态是发布公告和补丁文章的可靠记录。不要根据一小段条目历史假定固定的每周或每月节奏；请查看动态页确认当前规律。"],
        ["PEAK 游戏更新会改变地图吗？", "更新可能改变内容、路线背景或机制，但补丁标题本身不能证明每日顺序。更新后查看带日期的地图记录，并在游戏内确认活动路线。"],
        ["PEAK 最新补丁说明在哪里？", "本日志总结已确认的标题，并链接到官方动态。当前路线请打开 [[link:map-rotation#today-map|今日地图]]；重置背景请查看 [[link:peak-map-rotation-schedule|轮换时间表]]。"],
        ["每条都是完整补丁摘要吗？", "不是。当完整且可核验的转录不可用时，本页只保留标题级条目。具体机制、数值和实现细节请打开官方 Steam 原文。"],
        ["更新日志如何保持最新？", "构建流程可以抓取官方 Steam News API，把标题和日期与已保存数据比较，并把新的确认条目放到顶部。生成页面不依赖客户端 JavaScript 才能显示日志。"],
      ],
    },
    source: {
      eyebrow: "来源与边界",
      title: "先记录官方更新，再补充社区解释",
      body: "这份 PEAK 游戏更新日志中的日期和标题来自官方 Steam 动态。每日路线来自构建时维护的地图来源。社区解释可以补充实战经验，但应单独标注，并在成为确定性建议前与当前游戏进行对照。",
      links: [["官方 Steam 动态", "https://store.steampowered.com/news/app/3527290"], ["PEAK 官方 Steam 页面", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "打开今日地图"], ["peak-map-rotation-schedule", "查看轮换时间表"], ["what-is-peak-game", "从新手指南开始"]],
    relatedLabel: "相关 PEAK 指南",
  },

  es: {
    meta: {
      title: "Actualización de PEAK: notas de parche y mapas",
      description: "Sigue cada actualización de PEAK: nuevos mapas, notas de parche y cambios de rotación, con el mapa de hoy arriba y los datos revisados en cada build.",
      schema: "Registro de actualizaciones de PEAK basado en fuentes, con títulos oficiales, contexto de rotación, datos diarios y consejos condicionados por la versión.",
    },
    eyebrow: "Panel de versiones - primero el título oficial",
    h1: "Registro de actualizaciones de PEAK",
    intro: "¿Buscas una actualización de PEAK? Empieza por el [[link:map-rotation#today-map|mapa de hoy]] para ver la ruta registrada durante el build y usa este registro para ordenar por fecha los parches y anuncios de biomas. Cada entrada se limita a lo confirmado en las noticias oficiales de Steam; la publicación completa conserva los detalles exactos.",
    answerLabel: "Respuesta breve",
    answer: "Las entradas confirmadas más recientes de este registro de actualizaciones de PEAK son Patch Notes 2.03.a del 27 de agosto de 2026, el anuncio de Gloom y Citadel del 24 de agosto y Patch 2.02.a del 18 de agosto. Antes aparecen el parche del enfriamiento de Frog y correcciones, The Final Ascent y el anuncio del bioma final. Esta página conserva títulos, fechas y resúmenes prudentes, y los conecta con el mapa diario y las guías de rutas.",
    tocLabel: "En esta página",
    tocFaq: "FAQ de actualizaciones",
    heroImage: {
      alt: "Arte oficial de The Final Ascent de PEAK usado como contexto de actualización",
      caption: "Arte oficial de Steam: una referencia fechada, no un sustituto de las notas completas.",
    },
    sections: [
      {
        title: "Comprueba el mapa de hoy después de una actualización de PEAK",
        paragraphs: [
          "La respuesta sobre la ruta aparece arriba porque un parche puede cambiar la versión a la que pertenecía una nota antigua. La tarjeta generada durante el build muestra el registro fechado actual cuando la fuente y los campos de ubicación están disponibles. Es una instantánea, no una promesa para todos los lobbies o futuros reinicios.",
          "Cuando la tarjeta está verificada, compara su fecha con tu versión del juego y úsala para orientarte. Si está pendiente, abre el juego y confirma la ruta directamente. Así el registro sigue siendo útil durante el breve intervalo entre la llegada de una actualización y la comprobación de la fuente.",
        ],
      },
      {
        title: "Entradas confirmadas de actualizaciones de PEAK",
        paragraphs: [
          "La tabla se genera desde un archivo de datos pequeño y versionado, inicializado con la API oficial de Steam News. El archivo conserva el título oficial, la fecha de publicación, un resumen limitado al nivel del título y el enlace a la noticia de Steam. No inventa un resumen completo cuando todavía no existe una transcripción independiente y respaldada por fuentes.",
          "El registro es intencionadamente compacto. Permite localizar rápidamente una versión, abrir la publicación de primera mano para leer las notas exactas y usar las páginas de mapas o de horarios para saber qué revisar. Cuando un build obtiene una nueva entrada oficial, la coloca arriba por fecha para mantener esta referencia viva.",
        ],
      },
      {
        title: "Cómo puede afectar una actualización de PEAK a la rotación del mapa",
        paragraphs: [
          "Una actualización y una rotación diaria responden a preguntas distintas. Las notas describen un evento de versión; la rotación describe el contexto de ruta registrado en una fecha concreta. Un anuncio de bioma puede explicar por qué conviene revisar una zona nueva, pero por sí solo no demuestra que sea la ruta activa en cada sesión. Lee la actualización, comprueba los datos fechados y confirma dentro del juego.",
          "La diferencia importa especialmente cuando el título menciona un bioma o una ruta nueva. El feed oficial puede confirmar que Gloom, Citadel, Caldera o The Kiln fueron mencionados en una actualización. Sin un registro de ruta actual, no puede decir qué secuencia mostrará tu lobby después del reinicio. Para el horario y los registros recientes, consulta el [[link:peak-map-rotation-schedule|calendario de rotación]].",
        ],
        bullets: [
          ["Comprueba la versión", "Anota el título y la fecha del parche antes de reutilizar una nota de ruta antigua."],
          ["Comprueba la ruta", "Compara el registro diario con la ruta que muestra tu sesión actual."],
          ["Comprueba la mecánica", "Usa la publicación oficial completa para los cambios exactos, no solo el titular."],
          ["Comprueba tus notas", "Marca cada consejo como observado, oficial o sin verificar para poder corregirlo después."],
        ],
      },
      {
        title: "Una forma práctica de leer las notas de parche de PEAK",
        paragraphs: [
          "Empieza por la fecha y el título oficiales, y extrae solo las frases que cambian una decisión del jugador. Un cambio de enfriamiento puede afectar al momento de comprometerse. Un anuncio de bioma puede cambiar las palabras que usan los jugadores al buscar mapas. Un título de correcciones puede mejorar la fiabilidad sin cambiar la ruta. El registro debe distinguir estos casos en lugar de llamar mapa nuevo a cada actualización.",
          "Después, prueba una suposición en una partida normal y guarda el resultado junto con la versión. Un solo éxito o fallo no demuestra una regla universal. El pequeño ciclo de fuente, sesión y nota fechada da valor práctico al registro sin afirmar más de lo que respalda la fuente.",
          "Guarda la fecha de la actualización y la fecha del registro del mapa en campos distintos. La primera indica cuándo se publicó la información oficial; la segunda, cuándo se observó la ruta. Compararlas explica por qué un consejo antiguo de la comunidad puede describir una ruta real y aun así no describir la versión actual.",
        ],
        bullets: [
          ["1. Identifica la publicación oficial", "Usa el feed de Steam enlazado y conserva el título y la fecha exactos."],
          ["2. Clasifica el cambio", "Separa notas de parche, anuncios de contenido, correcciones y contexto comunitario."],
          ["3. Revisa la ruta", "Abre el registro de mapa actual y confirma la secuencia dentro del juego."],
          ["4. Actualiza la nota", "Añade versión, evidencia e incertidumbre para el siguiente build."],
        ],
      },
    ],
    faq: {
      eyebrow: "Respuestas rápidas",
      title: "FAQ sobre las actualizaciones de PEAK",
      items: [
        ["¿Cada cuánto recibe actualizaciones PEAK?", "El feed oficial de noticias de Steam es el registro fiable de anuncios y parches. No supongas una frecuencia semanal o mensual fija a partir de unos pocos registros; revisa el feed para conocer el patrón actual."],
        ["¿Una actualización de PEAK cambia el mapa?", "Puede cambiar contenido, contexto de ruta o mecánicas, pero el título de un parche no demuestra la secuencia diaria. Comprueba el registro fechado y confirma la ruta activa dentro del juego después de actualizar."],
        ["¿Dónde están las últimas notas de parche de PEAK?", "Este registro resume los títulos confirmados y enlaza al feed oficial. Para la ruta actual, abre el [[link:map-rotation#today-map|mapa de hoy]]; para el reinicio, consulta el [[link:peak-map-rotation-schedule|calendario de rotación]]."],
        ["¿Cada entrada es un resumen completo del parche?", "No. Cuando no hay una transcripción completa y respaldada, la entrada se mantiene al nivel del título. Abre la publicación oficial de Steam para conocer mecánicas, cifras y detalles de implementación."],
        ["¿Cómo se mantiene actualizado el registro?", "El flujo de build puede consultar la API oficial de Steam News, comparar títulos y fechas con los datos guardados y anteponer nuevas entradas confirmadas. La página generada no necesita JavaScript del cliente para mostrar el registro."],
      ],
    },
    source: {
      eyebrow: "Fuentes y límites",
      title: "Actualizaciones oficiales antes que resúmenes comunitarios",
      body: "Las fechas y los títulos de este registro de actualizaciones de PEAK proceden del feed oficial de noticias de Steam. La ruta diaria procede de la fuente de mapas mantenida durante el build. Las explicaciones de la comunidad pueden aportar experiencia, pero deben etiquetarse por separado y comprobarse con el juego actual antes de convertirse en una regla definitiva.",
      links: [["Noticias oficiales de Steam", "https://store.steampowered.com/news/app/3527290"], ["Página oficial de PEAK en Steam", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "Abrir el mapa de hoy"], ["peak-map-rotation-schedule", "Leer el calendario de rotación"], ["what-is-peak-game", "Empezar con la guía para principiantes"]],
    relatedLabel: "Guías relacionadas de PEAK",
  },

  ja: {
    meta: {
      title: "PEAKゲーム更新ログ：パッチノートとマップ",
      description: "PEAKのゲーム更新を確認。新マップ、パッチノート、ローテーション変更をまとめ、今日のマップを上部に表示してビルドごとに更新します。",
      schema: "公式の更新タイトルとマップローテーション、日別データ、バージョンに応じたルート判断を結び付けるPEAK更新ログです。",
    },
    eyebrow: "バージョン情報 - 公式タイトルを先に確認",
    h1: "PEAKゲーム更新ログ",
    intro: "PEAKのゲーム更新を探していますか？まず [[link:map-rotation#today-map|今日のマップ]]でビルド時に記録された現在のルートを確認し、このログで公式パッチとバイオーム告知を日付順に追いかけてください。各項目はSteam公式ニュースで確認できる範囲に限定し、正確な仕様は元の投稿を参照します。",
    answerLabel: "要点",
    answer: "このPEAKゲーム更新ログで直近に確認できるのは、2026年8月27日のPatch Notes 2.03.a、8月24日のGloomとCitadelに関する告知、8月18日のPatch 2.02.aです。それ以前にはFrogのクールダウンとバグ修正、The Final Ascent、最後のバイオーム告知があります。このページでは公式タイトル、日付、控えめな要約を記録し、日別マップとルート計画のページへつなげています。",
    tocLabel: "このページの内容",
    tocFaq: "更新FAQ",
    heroImage: {
      alt: "更新の背景として使うPEAK公式The Final Ascentアートワーク",
      caption: "Steam公式アートワーク - 日付のある更新の目印であり、詳細なパッチノートの代わりではありません。",
    },
    sections: [
      {
        title: "PEAKの更新後は今日のマップを確認",
        paragraphs: [
          "古いマップメモがどのバージョンを前提にしているかは、パッチで変わることがあります。そのためルートの答えを上部に置いています。下のビルド時カードは、ソースと位置情報がそろっている場合に現在の日付記録を表示します。これはスナップショットであり、すべてのロビーや今後のリセットを保証するものではありません。",
          "カードが確認済みなら、記録日とゲームのバージョンを比べてルートの目安にしてください。保留中なら、ゲームを開いて現在のルートを直接確認します。更新直後でソース確認が済んでいない短い期間でも、PEAKゲーム更新ページを役立つ状態に保てます。",
        ],
      },
      {
        title: "確認済みのPEAKゲーム更新",
        paragraphs: [
          "表は、公式Steam News APIを元にした小さなバージョン管理データからビルド時に生成されます。ソースファイルには公式タイトル、公開日、タイトルから確認できる範囲の控えめな要約、Steamニュースへのリンクを保存します。完全なパッチ内容を独自に書き起こしていない場合、詳細な仕様を推測して追加することはありません。",
          "ログは意図的に簡潔です。関連するバージョンをすぐ見つけ、一次情報の投稿で正確な内容を読み、マップやスケジュールのページで再確認すべき点を判断できます。ビルドで新しい公式項目を取得した場合は、日付順で先頭に追加されます。",
        ],
      },
      {
        title: "PEAKのゲーム更新がマップローテーションに与える影響",
        paragraphs: [
          "更新と毎日のローテーションは別の問いに答えます。パッチノートはバージョン上の出来事を説明し、ローテーションは特定の日に記録されたルートの状況を示します。バイオームの告知は新しいエリアを確認する理由にはなりますが、それだけで全セッションの現在ルートを証明するものではありません。更新を読んだら、日付付きのマップデータを確認し、ゲーム内でも確かめてください。",
          "タイトルに新しいバイオームやルートの言葉が含まれる場合、この区別は特に重要です。公式フィードから、Gloom、Citadel、Caldera、The Kilnが更新で言及されたことは確認できます。しかし現在のルート記録がなければ、リセット後に自分のロビーでどの順番になるかは分かりません。リセット時刻と最近の記録は[[link:peak-map-rotation-schedule|ローテーションスケジュール]]で確認できます。",
        ],
        bullets: [
          ["バージョンを確認", "古いルートメモを使う前に、パッチのタイトルと日付を書き留めます。"],
          ["ルートを確認", "日付付きのマップ記録と、現在のセッションに表示されたルートを比べます。"],
          ["仕様を確認", "正確な変更は見出しから推測せず、公式投稿全文を使います。"],
          ["メモを確認", "実測、公式情報、未確認の助言を分けて記録し、後から修正できるようにします。"],
        ],
      },
      {
        title: "PEAKのパッチノートを読む実用的な方法",
        paragraphs: [
          "公式の日付とタイトルを確認してから、プレイヤーの判断を変える記述だけを抜き出します。クールダウンの変更はチームが動くタイミングに影響するかもしれません。新バイオームの告知はマップ検索で使う言葉を変えるかもしれません。バグ修正のタイトルは安定性に関係しても、ルート自体を変えるとは限りません。すべての更新を新マップと呼ばず、違いを分けて扱います。",
          "読んだ後は、通常のプレイで一つの仮説を試し、ゲームのバージョンと結果を記録します。一度の成功や失敗だけで普遍的なルールとは判断しません。ソース、セッション、日付付きメモという小さな流れが、根拠を超えずにPEAKゲーム更新ログへ実用性を加えます。",
          "更新日とマップ記録日は別の項目に保存します。前者は公式情報が公開された日、後者はルートを観察した日です。二つの日付を比べると、古いコミュニティの助言が実際のルートを説明していても、現在のバージョンには合わない理由を説明できます。",
        ],
        bullets: [
          ["1. 公式投稿を特定", "リンク先のSteamフィードを使い、正確なタイトルと日付を残します。"],
          ["2. 変更を分類", "パッチノート、コンテンツ告知、バグ修正、コミュニティ情報を分けます。"],
          ["3. ルートを再確認", "現在のマップ記録を開き、ゲーム内で有効なルートを確認します。"],
          ["4. メモを更新", "次のビルドで使えるよう、バージョン、根拠、不確実性を追加します。"],
        ],
      },
    ],
    faq: {
      eyebrow: "よくある質問",
      title: "PEAKゲーム更新 FAQ",
      items: [
        ["PEAKはどのくらいの頻度で更新されますか？", "公式Steamニュースフィードが、リリース告知とパッチ投稿を確認するための基準です。少数の履歴だけから毎週や毎月の固定周期を決めつけず、現在のフィードを確認してください。"],
        ["PEAKのゲーム更新でマップは変わりますか？", "更新でコンテンツ、ルートの状況、仕様が変わる可能性はありますが、パッチタイトルだけでは毎日の順番は証明できません。更新後は日付付き記録を確認し、ゲーム内で有効なルートを確かめます。"],
        ["PEAKの最新パッチノートはどこですか？", "このログでは確認済みのタイトルをまとめ、公式フィードへリンクしています。現在のルートは[[link:map-rotation#today-map|今日のマップ]]、リセットの情報は[[link:peak-map-rotation-schedule|ローテーションスケジュール]]を開いてください。"],
        ["すべての項目が完全なパッチ要約ですか？", "いいえ。完全で根拠のある書き起こしがない場合、項目はタイトルの範囲にとどめています。正確な仕様、数値、実装内容は公式Steam投稿を確認してください。"],
        ["更新ログはどうやって最新になりますか？", "ビルド処理で公式Steam News APIを取得し、保存済みのタイトルと日付を比べ、新たに確認できた項目を先頭に追加できます。生成ページは、ログを表示するためにクライアントJavaScriptを必要としません。"],
      ],
    },
    source: {
      eyebrow: "出典と範囲",
      title: "コミュニティ要約より先に公式更新を確認",
      body: "このPEAKゲーム更新ログの日付とタイトルは公式Steamニュースフィードを出典としています。毎日のルートはビルド時に管理しているマップソースから取得します。コミュニティの説明は経験を補えますが、別の情報として示し、確定的なルールにする前に現在のゲームと照合します。",
      links: [["公式Steamニュース", "https://store.steampowered.com/news/app/3527290"], ["PEAK公式Steamページ", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "今日のマップを開く"], ["peak-map-rotation-schedule", "ローテーションスケジュールを見る"], ["what-is-peak-game", "初心者ガイドから始める"]],
    relatedLabel: "関連するPEAKガイド",
  },

  fr: {
    meta: {
      title: "Mise à jour de PEAK : patch notes et cartes",
      description: "Suivez chaque mise à jour de PEAK : nouvelles cartes, patch notes et changements de rotation, avec la carte du jour en haut et des données vérifiées au build.",
      schema: "Journal des mises à jour de PEAK fondé sur des sources, reliant les titres officiels, la rotation des cartes, les données quotidiennes et le contexte de version.",
    },
    eyebrow: "Bureau des versions - les titres officiels en premier",
    h1: "Journal des mises à jour de PEAK",
    intro: "Vous cherchez une mise à jour de PEAK ? Commencez par la [[link:map-rotation#today-map|carte du jour]] pour voir la route enregistrée au build, puis utilisez ce journal pour classer les patch notes et les annonces de biomes par date. Chaque entrée se limite aux informations confirmées par les actualités officielles Steam ; le billet complet reste la source des détails précis.",
    answerLabel: "Réponse courte",
    answer: "Les dernières entrées confirmées de ce journal des mises à jour de PEAK sont Patch Notes 2.03.a du 27 août 2026, l'annonce de Gloom et Citadel du 24 août, puis Patch 2.02.a du 18 août. Les entrées précédentes couvrent le patch du temps de recharge de Frog et des corrections, The Final Ascent et l'annonce du dernier biome. Cette page conserve les titres, les dates et des résumés prudents, puis les relie à la carte quotidienne et aux pages de préparation de route.",
    tocLabel: "Sur cette page",
    tocFaq: "FAQ des mises à jour",
    heroImage: {
      alt: "Illustration officielle de The Final Ascent de PEAK servant de contexte de mise à jour",
      caption: "Illustration officielle Steam : un repère daté, pas un remplacement des notes complètes.",
    },
    sections: [
      {
        title: "Vérifier la carte du jour après une mise à jour de PEAK",
        paragraphs: [
          "La réponse sur la route se trouve en haut, car un patch peut changer le contexte de version d'une ancienne note de carte. La carte générée au build affiche l'enregistrement daté actuel lorsque la source et les champs de localisation sont disponibles. C'est un instantané, pas une promesse valable pour chaque lobby ou chaque prochain reset.",
          "Lorsque la carte est vérifiée, comparez sa date à votre version du jeu et utilisez-la pour vous orienter. Si elle est en attente, ouvrez le jeu et confirmez directement la route actuelle. Le journal reste ainsi utile pendant le court délai entre l'arrivée d'une mise à jour et la vérification de sa source.",
        ],
      },
      {
        title: "Entrées confirmées des mises à jour de PEAK",
        paragraphs: [
          "Le tableau est généré depuis un petit fichier de données versionné, initialisé avec l'API officielle Steam News. Le fichier source conserve le titre officiel, la date de publication, un résumé prudent limité au titre et le lien vers l'actualité Steam. Il n'invente pas un résumé complet lorsque le billet n'a pas été transcrit séparément avec des sources suffisantes.",
          "Le journal reste volontairement compact. Vous pouvez trouver rapidement la version concernée, ouvrir la publication de première main pour lire les notes exactes, puis utiliser les pages de carte ou de calendrier pour savoir quoi revérifier. Une nouvelle entrée officielle récupérée au build est placée en tête selon sa date.",
        ],
      },
      {
        title: "Comment une mise à jour de PEAK peut toucher la rotation des cartes",
        paragraphs: [
          "Une mise à jour et une rotation quotidienne ne répondent pas à la même question. Les notes décrivent un événement de version ; la rotation décrit le contexte de route signalé à une date donnée. Une annonce de biome peut expliquer pourquoi une nouvelle zone mérite d'être vérifiée, mais elle ne prouve pas à elle seule que cette zone est active dans chaque session. Lisez la mise à jour, consultez les données datées et confirmez dans le jeu.",
          "Cette distinction compte surtout lorsque le titre mentionne un nouveau biome ou une nouvelle route. Le fil officiel peut établir que Gloom, Citadel, Caldera ou The Kiln a été mentionné dans une mise à jour. Sans relevé de route actuel, il ne peut pas dire quelle séquence votre lobby affichera après le reset. Pour l'heure du reset et les entrées récentes, consultez le [[link:peak-map-rotation-schedule|calendrier de rotation]].",
        ],
        bullets: [
          ["Vérifier la version", "Notez le titre et la date du patch avant de réutiliser une ancienne note de route."],
          ["Vérifier la route", "Comparez l'entrée datée de la carte avec la route affichée par la session actuelle."],
          ["Vérifier les mécaniques", "Utilisez le billet officiel complet pour les changements précis, plutôt que le seul titre."],
          ["Vérifier les notes", "Indiquez si un conseil est observé, officiel ou non vérifié pour pouvoir le corriger ensuite."],
        ],
      },
      {
        title: "Une méthode pratique pour lire les patch notes de PEAK",
        paragraphs: [
          "Commencez par la date et le titre officiels, puis relevez seulement les phrases qui modifient une décision de joueur. Un changement de temps de recharge peut modifier le moment où une équipe s'engage. Une annonce de biome peut changer les termes utilisés pour chercher une carte. Un titre de correction peut améliorer la fiabilité sans changer la route. Le journal doit distinguer ces cas au lieu d'appeler chaque mise à jour une nouvelle carte.",
          "Après lecture, testez une hypothèse dans une partie normale et notez le résultat avec la version du jeu. Un seul succès ou échec ne prouve pas une règle universelle. Le petit cycle source, session et note datée donne une utilité pratique au journal sans dépasser ce que la source permet d'affirmer.",
          "Conservez la date de mise à jour et la date du relevé de carte dans des champs différents. La première indique quand l'information officielle a été publiée ; la seconde indique quand la route a été observée. Leur comparaison explique pourquoi un ancien conseil communautaire peut décrire une route réelle sans décrire la version actuelle.",
        ],
        bullets: [
          ["1. Identifier le billet officiel", "Utilisez le fil Steam lié et conservez le titre et la date exacts."],
          ["2. Classer le changement", "Séparez patch notes, annonces de contenu, corrections et contexte communautaire."],
          ["3. Revérifier la route", "Ouvrez l'entrée de carte actuelle et confirmez la séquence dans le jeu."],
          ["4. Mettre la note à jour", "Ajoutez version, éléments de preuve et incertitudes pour le prochain build."],
        ],
      },
    ],
    faq: {
      eyebrow: "Réponses rapides",
      title: "FAQ des mises à jour de PEAK",
      items: [
        ["À quelle fréquence PEAK reçoit-il des mises à jour ?", "Le fil d'actualités officiel Steam est la référence fiable pour les annonces et les billets de patch. Ne déduisez pas une cadence hebdomadaire ou mensuelle fixe d'une courte série d'entrées ; vérifiez le fil actuel."],
        ["Une mise à jour de PEAK change-t-elle la carte ?", "Une mise à jour peut modifier le contenu, le contexte de route ou les mécaniques, mais le titre du patch ne prouve pas la séquence quotidienne. Consultez le relevé daté et confirmez la route active dans le jeu après la mise à jour."],
        ["Où trouver les derniers patch notes de PEAK ?", "Ce journal résume les titres confirmés et renvoie au fil officiel. Pour la route actuelle, ouvrez la [[link:map-rotation#today-map|carte du jour]] ; pour le reset, consultez le [[link:peak-map-rotation-schedule|calendrier de rotation]]."],
        ["Chaque entrée est-elle un résumé complet du patch ?", "Non. Lorsqu'une transcription complète et sourcée n'est pas disponible, l'entrée reste limitée au niveau du titre. Ouvrez le billet officiel Steam pour les mécaniques, les chiffres et les détails d'implémentation."],
        ["Comment le journal reste-t-il à jour ?", "Le workflow de build peut récupérer l'API officielle Steam News, comparer les titres et les dates aux données enregistrées, puis ajouter les nouvelles entrées confirmées en tête. La page générée n'a pas besoin de JavaScript côté client pour afficher le journal."],
      ],
    },
    source: {
      eyebrow: "Sources et limites",
      title: "Les mises à jour officielles avant les résumés communautaires",
      body: "Les dates et les titres de ce journal des mises à jour de PEAK viennent du fil d'actualités officiel Steam. La route quotidienne vient de la source de cartes maintenue au build. Les explications de la communauté peuvent apporter de l'expérience, mais elles doivent être signalées séparément et confrontées au jeu actuel avant de devenir une règle définitive.",
      links: [["Actualités officielles Steam", "https://store.steampowered.com/news/app/3527290"], ["Page officielle de PEAK sur Steam", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "Ouvrir la carte du jour"], ["peak-map-rotation-schedule", "Lire le calendrier de rotation"], ["what-is-peak-game", "Commencer par le guide débutant"]],
    relatedLabel: "Guides PEAK associés",
  },

  de: {
    meta: {
      title: "PEAK-Updates: Patchnotes und Karten",
      description: "Bleib über jedes PEAK-Update informiert: neue Karten, Patchnotes und Rotationsänderungen, mit der heutigen Karte oben und geprüften Build-Daten.",
      schema: "Ein quellenbasiertes PEAK-Update-Log, das offizielle Patch-Titel mit Kartenrotation, täglichen Daten und versionsabhängiger Routenplanung verbindet.",
    },
    eyebrow: "Versionszentrale - offizielle Titel zuerst",
    h1: "PEAK-Update-Log",
    intro: "Suchst du nach einem PEAK-Update? Öffne zuerst die [[link:map-rotation#today-map|heutige Karte]], um die beim Build erfasste aktuelle Route zu sehen, und nutze dann dieses Log für die chronologische Einordnung offizieller Patchnotes und Biom-Ankündigungen. Jeder Eintrag bleibt auf das beschränkt, was die offiziellen Steam-News bestätigen; der vollständige Beitrag ist die Quelle für genaue Details.",
    answerLabel: "Kurzantwort",
    answer: "Die jüngsten bestätigten Einträge in diesem PEAK-Update-Log sind Patch Notes 2.03.a vom 27. August 2026, die Ankündigung zu Gloom und Citadel vom 24. August sowie Patch 2.02.a vom 18. August. Frühere Einträge behandeln die Abklingzeit von Frog und Fehlerbehebungen, The Final Ascent und die Ankündigung des letzten Bioms. Die Seite sammelt Titel, Datum und vorsichtige Zusammenfassungen und verknüpft sie mit der Tageskarte und den Routenplanungsseiten.",
    tocLabel: "Auf dieser Seite",
    tocFaq: "Update-FAQ",
    heroImage: {
      alt: "Offizielles PEAK-Artwork zu The Final Ascent als Kontext für ein Update",
      caption: "Offizielles Steam-Artwork: ein datierter Bezugspunkt, kein Ersatz für vollständige Patchnotes.",
    },
    sections: [
      {
        title: "Prüfe nach einem PEAK-Update die heutige Karte",
        paragraphs: [
          "Die Routen-Antwort steht oben, weil ein Patch den Versionskontext einer älteren Kartennotiz verändern kann. Die Build-Zeit-Karte unten zeigt den aktuellen datierten Eintrag, wenn Quelle und Ortsfelder verfügbar sind. Sie ist eine Momentaufnahme und keine Zusage, dass jede Lobby oder jeder künftige Reset gleich aussieht.",
          "Wenn die Karte bestätigt ist, vergleiche ihr Datum mit deiner Spielversion und nutze sie zur Orientierung. Bei einem ausstehenden Status öffnest du das Spiel und bestätigst die aktuelle Route direkt. So bleibt das PEAK-Update-Log auch in der kurzen Zeit zwischen Update und Quellenprüfung nützlich.",
        ],
      },
      {
        title: "Bestätigte PEAK-Update-Einträge",
        paragraphs: [
          "Die Tabelle wird aus einer kleinen versionierten Datendatei erzeugt, die mit der offiziellen Steam-News-API befüllt wurde. Die Quelldatei speichert den offiziellen Titel, das Veröffentlichungsdatum, eine zurückhaltende Zusammenfassung auf Titelebene und den Steam-News-Link. Eine vollständige Patch-Zusammenfassung wird nicht erfunden, wenn der Beitrag nicht unabhängig transkribiert wurde.",
          "Das Log bleibt bewusst kompakt. Spieler finden schnell die passende Version, öffnen den Originalbeitrag für die genauen Hinweise und nutzen anschließend die Karten- oder Zeitplanseiten, um die richtigen Punkte erneut zu prüfen. Neue offizielle Einträge aus einem Build werden nach Datum oben ergänzt.",
        ],
      },
      {
        title: "Wie ein PEAK-Update die Kartenrotation beeinflussen kann",
        paragraphs: [
          "Ein Update und eine tägliche Rotation beantworten unterschiedliche Fragen. Patchnotes beschreiben ein Versionsereignis; die Rotation beschreibt den Routen-Kontext, der an einem bestimmten Datum gemeldet wurde. Eine Biom-Ankündigung kann erklären, warum ein neues Gebiet interessant ist, beweist aber allein nicht, dass es in jeder Sitzung die aktive Route ist. Lies das Update, prüfe die datierten Kartendaten und bestätige die Route im Spiel.",
          "Das ist besonders wichtig, wenn ein Titel ein neues Biom oder eine neue Route nennt. Der offizielle Feed kann belegen, dass Gloom, Citadel, Caldera oder The Kiln in einem Update erwähnt wurden. Ohne aktuellen Routeneintrag kann er jedoch nicht sagen, welche Reihenfolge deine Lobby nach dem Reset zeigt. Reset-Zeit und aktuelle Einträge findest du im [[link:peak-map-rotation-schedule|Rotationsplan]].",
        ],
        bullets: [
          ["Version prüfen", "Notiere Patch-Titel und Datum, bevor du eine alte Routennotiz wiederverwendest."],
          ["Route prüfen", "Vergleiche den datierten Karteneintrag mit der Route deiner aktuellen Sitzung."],
          ["Mechanik prüfen", "Nutze für genaue Änderungen den vollständigen offiziellen Beitrag, nicht nur die Überschrift."],
          ["Notizen prüfen", "Kennzeichne Hinweise als beobachtet, offiziell oder ungeprüft, damit sie später korrigiert werden können."],
        ],
      },
      {
        title: "PEAK-Patchnotes praktisch lesen",
        paragraphs: [
          "Beginne mit dem offiziellen Datum und Titel und ziehe dann nur Aussagen heraus, die eine Spielerentscheidung verändern. Eine Änderung an einer Abklingzeit kann den Zeitpunkt eines Vorstoßes beeinflussen. Eine neue Biom-Ankündigung kann die Suchbegriffe für Karten verändern. Ein Fehlerbehebungs-Titel kann die Zuverlässigkeit verbessern, ohne die Route zu ändern. Das Log sollte diese Fälle trennen und nicht jedes Update als neue Karte bezeichnen.",
          "Teste danach eine Annahme in einem normalen Lauf und notiere das Ergebnis zusammen mit der Spielversion. Ein einzelner Erfolg oder Fehlschlag beweist keine allgemeine Regel. Der kleine Kreislauf aus Quelle, Sitzung und datierter Notiz macht das PEAK-Update-Log praktisch, ohne mehr zu behaupten, als die Quelle hergibt.",
          "Speichere Update-Datum und Kartendatum in getrennten Feldern. Das erste zeigt, wann die offizielle Information veröffentlicht wurde; das zweite, wann die Route beobachtet wurde. Der Vergleich erklärt, warum ein älterer Community-Tipp eine echte Route beschreiben kann, aber nicht mehr zur aktuellen Version passen muss.",
        ],
        bullets: [
          ["1. Offiziellen Beitrag finden", "Nutze den verlinkten Steam-Feed und bewahre den genauen Titel und das Datum auf."],
          ["2. Änderung einordnen", "Trenne Patchnotes, Inhaltsankündigungen, Fehlerbehebungen und Community-Kontext."],
          ["3. Route erneut prüfen", "Öffne den aktuellen Karteneintrag und bestätige die aktive Reihenfolge im Spiel."],
          ["4. Notiz aktualisieren", "Ergänze Version, Beleg und Unsicherheit für den nächsten Build."],
        ],
      },
    ],
    faq: {
      eyebrow: "Schnelle Antworten",
      title: "PEAK-Update-FAQ",
      items: [
        ["Wie oft bekommt PEAK Updates?", "Der offizielle Steam-News-Feed ist die verlässliche Quelle für Veröffentlichungsankündigungen und Patchbeiträge. Leite aus wenigen Einträgen keinen festen Wochen- oder Monatsrhythmus ab, sondern prüfe den aktuellen Feed."],
        ["Ändert ein PEAK-Update die Karte?", "Ein Update kann Inhalte, Routen-Kontext oder Mechaniken ändern, aber ein Patch-Titel beweist nicht die tägliche Reihenfolge. Prüfe nach dem Update den datierten Karteneintrag und bestätige die aktive Route im Spiel."],
        ["Wo finde ich die neuesten PEAK-Patchnotes?", "Dieses Log fasst bestätigte Titel zusammen und verlinkt den offiziellen Feed. Für die aktuelle Route öffnest du die [[link:map-rotation#today-map|heutige Karte]], für den Reset den [[link:peak-map-rotation-schedule|Rotationsplan]]."],
        ["Ist jeder Eintrag eine vollständige Patch-Zusammenfassung?", "Nein. Wenn keine vollständige, quellenbasierte Abschrift vorliegt, bleibt der Eintrag auf Titelebene. Für genaue Mechaniken, Zahlen und Implementierungsdetails öffnest du den offiziellen Steam-Beitrag."],
        ["Wie bleibt das Update-Log aktuell?", "Der Build-Workflow kann die offizielle Steam-News-API abrufen, Titel und Daten mit den gespeicherten Einträgen vergleichen und neue bestätigte Einträge oben ergänzen. Die generierte Seite braucht kein Client-JavaScript, um das Log anzuzeigen."],
      ],
    },
    source: {
      eyebrow: "Quellen und Grenzen",
      title: "Offizielle Updates vor Community-Zusammenfassungen",
      body: "Daten und Titel in diesem PEAK-Update-Log stammen aus dem offiziellen Steam-News-Feed. Die tägliche Route stammt aus der beim Build gepflegten Kartenquelle. Community-Erklärungen können praktische Erfahrung ergänzen, sollten aber getrennt gekennzeichnet und vor einer definitiven Regel mit dem aktuellen Spiel abgeglichen werden.",
      links: [["Offizielle Steam-News", "https://store.steampowered.com/news/app/3527290"], ["Offizielle PEAK-Steam-Seite", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "Heutige Karte öffnen"], ["peak-map-rotation-schedule", "Rotationsplan lesen"], ["what-is-peak-game", "Mit dem Einsteiger-Guide beginnen"]],
    relatedLabel: "Verwandte PEAK-Guides",
  },

  pt: {
    meta: {
      title: "Atualização de PEAK: notas, mapas e mudanças",
      description: "Acompanhe cada atualização de PEAK: novos mapas, notas de patch e mudanças na rotação, com o mapa de hoje no topo e dados verificados no build.",
      schema: "Registro de atualizações de PEAK baseado em fontes, conectando títulos oficiais, rotação de mapas, dados diários e planejamento conforme a versão.",
    },
    eyebrow: "Central de versões - títulos oficiais primeiro",
    h1: "Registro de atualizações de PEAK",
    intro: "Procurando uma atualização de PEAK? Comece pelo [[link:map-rotation#today-map|mapa de hoje]] para ver a rota registrada no build e use este registro para organizar notas de patch e anúncios de biomas por data. Cada entrada se limita ao que as notícias oficiais da Steam confirmam; a publicação completa continua sendo a fonte dos detalhes exatos.",
    answerLabel: "Resposta curta",
    answer: "As entradas confirmadas mais recentes deste registro de atualizações de PEAK são Patch Notes 2.03.a, de 27 de agosto de 2026, o anúncio de Gloom e Citadel, de 24 de agosto, e Patch 2.02.a, de 18 de agosto. Antes delas estão o patch do tempo de recarga de Frog e correções de bugs, The Final Ascent e o anúncio do bioma final. Esta página registra títulos, datas e resumos cautelosos, conectando-os ao mapa diário e às páginas de planejamento de rotas.",
    tocLabel: "Nesta página",
    tocFaq: "FAQ de atualizações",
    heroImage: {
      alt: "Arte oficial de The Final Ascent de PEAK usada como contexto de atualização",
      caption: "Arte oficial da Steam: uma referência datada, não um substituto para as notas completas.",
    },
    sections: [
      {
        title: "Confira o mapa de hoje depois de uma atualização de PEAK",
        paragraphs: [
          "A resposta sobre a rota fica no topo porque um patch pode mudar a versão associada a uma nota antiga de mapa. O cartão gerado no build mostra o registro datado atual quando a fonte e os campos de localização estão disponíveis. É um retrato do momento, não uma promessa para todos os lobbies ou futuros resets.",
          "Quando o cartão está verificado, compare a data com a versão do seu jogo e use-a para se orientar. Se estiver pendente, abra o jogo e confirme a rota atual diretamente. Assim, o registro continua útil no curto intervalo entre a chegada de uma atualização e a verificação da fonte.",
        ],
      },
      {
        title: "Entradas confirmadas de atualizações de PEAK",
        paragraphs: [
          "A tabela é gerada a partir de um pequeno arquivo de dados versionado, alimentado inicialmente pela API oficial Steam News. O arquivo de origem guarda o título oficial, a data de publicação, um resumo cuidadoso limitado ao título e o link para a notícia da Steam. Ele não inventa um resumo completo quando a publicação ainda não foi transcrita de forma independente e verificável.",
          "O registro é intencionalmente compacto. O jogador encontra rapidamente a versão relevante, abre a publicação original para ler as notas exatas e depois usa as páginas de mapa ou de horário para decidir o que revisar. Uma nova entrada oficial obtida durante o build é colocada no topo pela data.",
        ],
      },
      {
        title: "Como uma atualização de PEAK pode afetar a rotação do mapa",
        paragraphs: [
          "Uma atualização e uma rotação diária respondem a perguntas diferentes. As notas descrevem um evento de versão; a rotação descreve o contexto de rota registrado em uma data específica. Um anúncio de bioma pode explicar por que vale conferir uma área nova, mas sozinho não prova que ela seja a rota ativa em toda sessão. Leia a atualização, confira os dados datados e confirme no jogo.",
          "Essa diferença importa especialmente quando o título menciona um bioma ou uma rota nova. O feed oficial pode confirmar que Gloom, Citadel, Caldera ou The Kiln foi citado em uma atualização. Sem um registro atual de rota, ele não informa qual sequência o seu lobby mostrará depois do reset. Para o horário do reset e os registros recentes, consulte o [[link:peak-map-rotation-schedule|cronograma de rotação]].",
        ],
        bullets: [
          ["Confira a versão", "Anote o título e a data do patch antes de reutilizar uma nota de rota antiga."],
          ["Confira a rota", "Compare o registro datado do mapa com a rota exibida pela sessão atual."],
          ["Confira a mecânica", "Use a publicação oficial completa para mudanças exatas, em vez de inferir pelo título."],
          ["Confira as notas", "Marque o conselho como observado, oficial ou não verificado para poder corrigi-lo depois."],
        ],
      },
      {
        title: "Uma maneira prática de ler as notas de patch de PEAK",
        paragraphs: [
          "Comece pela data e pelo título oficiais e extraia apenas as afirmações que mudam uma decisão do jogador. Uma mudança no tempo de recarga pode alterar quando a equipe se compromete. Um anúncio de bioma pode mudar os termos usados nas buscas por mapas. Um título de correção pode melhorar a estabilidade sem mudar a rota. O registro deve separar esses casos, em vez de chamar toda atualização de mapa novo.",
          "Depois da leitura, teste uma suposição em uma partida normal e registre o resultado junto com a versão do jogo. Um único sucesso ou falha não prova uma regra universal. O pequeno ciclo entre fonte, sessão e nota datada dá valor prático ao registro sem afirmar mais do que a fonte permite.",
          "Mantenha a data da atualização e a data do registro do mapa em campos separados. A primeira mostra quando a informação oficial foi publicada; a segunda, quando a rota foi observada. Comparar as duas ajuda a explicar por que uma dica antiga da comunidade pode descrever uma rota real, mas não a versão atual.",
        ],
        bullets: [
          ["1. Identifique a publicação oficial", "Use o feed da Steam e preserve o título e a data exatos."],
          ["2. Classifique a mudança", "Separe notas de patch, anúncios de conteúdo, correções e contexto da comunidade."],
          ["3. Verifique a rota novamente", "Abra o registro atual do mapa e confirme a sequência no jogo."],
          ["4. Atualize a nota", "Adicione versão, evidência e incerteza para o próximo build."],
        ],
      },
    ],
    faq: {
      eyebrow: "Respostas rápidas",
      title: "FAQ sobre atualizações de PEAK",
      items: [
        ["Com que frequência PEAK recebe atualizações?", "O feed oficial de notícias da Steam é o registro confiável de anúncios e posts de patch. Não presuma uma frequência semanal ou mensal fixa a partir de poucos registros; confira o feed atual."],
        ["Uma atualização de PEAK muda o mapa?", "Uma atualização pode mudar conteúdo, contexto de rota ou mecânicas, mas o título do patch não prova a sequência diária. Confira o registro datado e confirme a rota ativa no jogo depois de atualizar."],
        ["Onde estão as notas de patch mais recentes de PEAK?", "Este registro resume os títulos confirmados e leva ao feed oficial. Para a rota atual, abra o [[link:map-rotation#today-map|mapa de hoje]]; para o reset, veja o [[link:peak-map-rotation-schedule|cronograma de rotação]]."],
        ["Cada entrada é um resumo completo do patch?", "Não. Quando uma transcrição completa e apoiada por fontes não está disponível, a entrada fica no nível do título. Abra o post oficial da Steam para mecânicas, números e detalhes de implementação."],
        ["Como o registro de atualizações fica atual?", "O fluxo de build pode consultar a API oficial Steam News, comparar títulos e datas com os dados salvos e inserir no topo novas entradas confirmadas. A página gerada não depende de JavaScript do cliente para mostrar o registro."],
      ],
    },
    source: {
      eyebrow: "Fontes e limites",
      title: "Atualizações oficiais antes de resumos da comunidade",
      body: "As datas e os títulos deste registro de atualizações de PEAK vêm do feed oficial de notícias da Steam. A rota diária vem da fonte de mapas mantida no build. Explicações da comunidade podem acrescentar experiência prática, mas devem ser identificadas separadamente e comparadas com o jogo atual antes de virarem uma regra definitiva.",
      links: [["Notícias oficiais da Steam", "https://store.steampowered.com/news/app/3527290"], ["Página oficial de PEAK na Steam", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "Abrir o mapa de hoje"], ["peak-map-rotation-schedule", "Ler o cronograma de rotação"], ["what-is-peak-game", "Começar pelo guia para iniciantes"]],
    relatedLabel: "Guias relacionados de PEAK",
  },

  ko: {
    meta: {
      title: "PEAK 게임 업데이트 로그: 패치 노트와 지도",
      description: "PEAK 게임 업데이트를 한곳에서 확인하세요. 새 지도, 패치 노트와 로테이션 변경을 정리하고 오늘의 지도를 상단에 표시합니다.",
      schema: "공식 패치 제목과 지도 로테이션, 일일 데이터, 버전별 경로 계획을 연결하는 출처 기반 PEAK 업데이트 로그입니다.",
    },
    eyebrow: "버전 기록 - 공식 제목부터 확인",
    h1: "PEAK 게임 업데이트 로그",
    intro: "PEAK 게임 업데이트를 찾고 있나요? 먼저 [[link:map-rotation#today-map|오늘의 지도]]에서 빌드 시 기록된 현재 루트를 확인한 뒤, 이 로그에서 공식 패치 노트와 바이옴 공지를 날짜순으로 살펴보세요. 각 항목은 Steam 공식 뉴스에서 확인된 범위로만 작성하며, 정확한 메커니즘은 원문을 기준으로 합니다.",
    answerLabel: "간단한 답변",
    answer: "이 PEAK 게임 업데이트 로그에서 가장 최근에 확인된 항목은 2026년 8월 27일 Patch Notes 2.03.a, 8월 24일 Gloom과 Citadel 공지, 8월 18일 Patch 2.02.a입니다. 그 전에는 Frog 쿨다운과 버그 수정 패치, The Final Ascent, 마지막 바이옴 공지가 있습니다. 이 페이지는 공식 제목과 날짜, 신중한 요약을 기록하고 일일 지도 및 루트 계획 페이지로 연결합니다.",
    tocLabel: "이 페이지의 내용",
    tocFaq: "업데이트 FAQ",
    heroImage: {
      alt: "업데이트 배경으로 사용하는 PEAK 공식 The Final Ascent 아트워크",
      caption: "Steam 공식 아트워크 - 날짜가 있는 업데이트 기준이며 전체 패치 노트를 대신하지 않습니다.",
    },
    sections: [
      {
        title: "PEAK 업데이트 후 오늘의 지도를 확인하세요",
        paragraphs: [
          "패치가 예전 지도 기록의 버전 배경을 바꿀 수 있으므로 루트 정보를 상단에 배치했습니다. 아래 빌드 시점 카드는 출처와 위치 필드가 있으면 현재 날짜의 기록을 보여 줍니다. 이는 스냅샷이며 모든 로비나 다음 리셋이 같다는 보장은 아닙니다.",
          "카드가 확인 완료 상태라면 기록 날짜를 게임 버전과 비교해 루트 방향을 파악하세요. 대기 상태라면 게임을 열어 현재 루트를 직접 확인하세요. 업데이트가 적용된 직후 출처 확인이 끝나지 않은 짧은 시간에도 이 PEAK 업데이트 로그를 활용할 수 있습니다.",
        ],
      },
      {
        title: "확인된 PEAK 게임 업데이트 항목",
        paragraphs: [
          "표는 공식 Steam News API에서 시작한 작은 버전 관리 데이터 파일을 빌드할 때 생성합니다. 원본 파일에는 공식 제목, 게시 날짜, 제목 수준에서 확인 가능한 보수적인 요약, Steam 뉴스 링크가 저장됩니다. 전체 패치 내용이 독립적으로 옮겨 적히지 않은 경우 세부 메커니즘을 만들어 내지 않습니다.",
          "로그는 의도적으로 간결합니다. 관련 버전을 빠르게 찾고, 원문에서 정확한 패치 내용을 읽은 뒤, 지도나 일정 페이지에서 무엇을 다시 확인할지 결정할 수 있습니다. 빌드 중 새 공식 항목을 가져오면 날짜순으로 맨 위에 추가합니다.",
        ],
      },
      {
        title: "PEAK 게임 업데이트가 지도 로테이션에 미치는 영향",
        paragraphs: [
          "업데이트와 일일 로테이션은 서로 다른 질문에 답합니다. 패치 노트는 버전 이벤트를 설명하고, 로테이션은 특정 날짜에 기록된 루트 상황을 설명합니다. 바이옴 공지는 새로운 지역을 확인할 이유가 될 수 있지만, 그 공지만으로 모든 세션에서 해당 지역이 활성 루트라는 뜻은 아닙니다. 업데이트를 읽고 날짜가 있는 지도 데이터를 확인한 뒤 게임 안에서 다시 확인하세요.",
          "제목에 새 바이옴이나 루트 관련 표현이 들어가면 이 차이가 특히 중요합니다. 공식 피드는 Gloom, Citadel, Caldera, The Kiln이 업데이트에서 언급되었다는 사실을 보여 줄 수 있습니다. 하지만 현재 루트 기록 없이는 리셋 후 내 로비에 어떤 순서가 나올지 알 수 없습니다. 리셋 시간과 최근 기록은 [[link:peak-map-rotation-schedule|로테이션 일정]]에서 확인하세요.",
        ],
        bullets: [
          ["버전 확인", "이전 루트 메모를 재사용하기 전에 패치 제목과 날짜를 적어 두세요."],
          ["루트 확인", "날짜가 있는 지도 기록과 현재 세션에 표시된 루트를 비교하세요."],
          ["메커니즘 확인", "정확한 변경은 제목만 보고 추측하지 말고 공식 원문을 확인하세요."],
          ["메모 확인", "조언을 실측, 공식 정보, 미확인으로 나누어 나중에 수정할 수 있게 하세요."],
        ],
      },
      {
        title: "PEAK 패치 노트를 읽는 실용적인 방법",
        paragraphs: [
          "공식 날짜와 제목을 확인한 다음 플레이어의 결정을 바꾸는 문장만 추립니다. 쿨다운 변경은 팀이 움직일 타이밍에 영향을 줄 수 있습니다. 새 바이옴 공지는 지도 검색에 사용하는 용어를 바꿀 수 있습니다. 버그 수정 제목은 안정성에 중요해도 루트 자체를 바꾸지 않을 수 있습니다. 모든 업데이트를 새 지도라고 부르지 말고 각각을 구분하세요.",
          "읽은 뒤에는 일반적인 게임에서 가정 하나를 시험하고 결과를 게임 버전과 함께 기록하세요. 한 번의 성공이나 실패만으로 보편적인 규칙을 만들 수는 없습니다. 출처, 세션, 날짜가 있는 메모라는 작은 순환이 근거를 넘지 않으면서 PEAK 업데이트 로그를 실용적으로 만듭니다.",
          "업데이트 날짜와 지도 기록 날짜는 서로 다른 필드에 보관하세요. 전자는 공식 정보가 게시된 때를, 후자는 루트를 관찰한 때를 나타냅니다. 두 날짜를 비교하면 오래된 커뮤니티 팁이 실제 루트를 설명하더라도 현재 버전에는 맞지 않을 수 있는 이유를 알 수 있습니다.",
        ],
        bullets: [
          ["1. 공식 게시물 찾기", "연결된 Steam 피드를 사용하고 정확한 제목과 날짜를 남기세요."],
          ["2. 변경 분류하기", "패치 노트, 콘텐츠 공지, 버그 수정, 커뮤니티 맥락을 나누세요."],
          ["3. 루트 다시 확인하기", "현재 지도 기록을 열고 게임 안에서 활성 순서를 확인하세요."],
          ["4. 메모 업데이트하기", "다음 빌드를 위해 버전, 근거와 불확실성을 추가하세요."],
        ],
      },
    ],
    faq: {
      eyebrow: "빠른 답변",
      title: "PEAK 게임 업데이트 FAQ",
      items: [
        ["PEAK는 얼마나 자주 업데이트되나요?", "공식 Steam 뉴스 피드가 출시 공지와 패치 게시물을 확인하는 기준입니다. 짧은 기록만 보고 매주 또는 매달 고정된 주기를 가정하지 말고 현재 피드를 확인하세요."],
        ["PEAK 게임 업데이트로 지도가 바뀌나요?", "업데이트는 콘텐츠, 루트 상황 또는 메커니즘을 바꿀 수 있지만 패치 제목만으로 일일 순서를 증명할 수는 없습니다. 업데이트 후 날짜가 있는 지도 기록을 확인하고 게임 안에서 활성 루트를 확인하세요."],
        ["PEAK 최신 패치 노트는 어디에서 보나요?", "이 로그는 확인된 제목을 정리하고 공식 피드로 연결합니다. 현재 루트는 [[link:map-rotation#today-map|오늘의 지도]], 리셋 정보는 [[link:peak-map-rotation-schedule|로테이션 일정]]을 여세요."],
        ["모든 항목이 전체 패치 요약인가요?", "아닙니다. 완전하고 출처가 확인된 전사가 없으면 항목은 제목 수준으로 유지합니다. 정확한 메커니즘, 수치와 구현 세부 사항은 공식 Steam 게시물을 확인하세요."],
        ["업데이트 로그는 어떻게 최신 상태가 되나요?", "빌드 워크플로가 공식 Steam News API를 가져오고 저장된 제목과 날짜를 비교한 다음 새로 확인된 항목을 위에 추가할 수 있습니다. 생성된 페이지는 로그를 표시하기 위해 클라이언트 JavaScript가 필요하지 않습니다."],
      ],
    },
    source: {
      eyebrow: "출처와 범위",
      title: "커뮤니티 요약보다 먼저 확인하는 공식 업데이트",
      body: "이 PEAK 게임 업데이트 로그의 날짜와 제목은 공식 Steam 뉴스 피드에서 가져옵니다. 일일 루트는 빌드 시 유지되는 지도 출처에서 가져옵니다. 커뮤니티 설명은 실전 경험을 더할 수 있지만 별도로 표시하고, 확정적인 규칙이 되기 전에 현재 게임과 대조해야 합니다.",
      links: [["공식 Steam 뉴스", "https://store.steampowered.com/news/app/3527290"], ["PEAK 공식 Steam 페이지", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "오늘의 지도 열기"], ["peak-map-rotation-schedule", "로테이션 일정 보기"], ["what-is-peak-game", "초보자 가이드부터 시작"]],
    relatedLabel: "관련 PEAK 가이드",
  },

  it: {
    meta: {
      title: "Aggiornamenti di PEAK: patch note e mappe",
      description: "Segui ogni aggiornamento di PEAK: nuove mappe, patch note e cambiamenti della rotazione, con la mappa di oggi in alto e dati verificati al build.",
      schema: "Registro degli aggiornamenti di PEAK basato sulle fonti, con titoli ufficiali, contesto della rotazione, dati giornalieri e pianificazione legata alla versione.",
    },
    eyebrow: "Registro versioni - prima i titoli ufficiali",
    h1: "Registro degli aggiornamenti di PEAK",
    intro: "Cerchi un aggiornamento di PEAK? Inizia dalla [[link:map-rotation#today-map|mappa di oggi]] per vedere il percorso registrato durante il build, poi usa questo registro per ordinare per data le patch note ufficiali e gli annunci dei biomi. Ogni voce si limita a ciò che confermano le notizie ufficiali di Steam; il post completo resta la fonte per i dettagli esatti.",
    answerLabel: "Risposta breve",
    answer: "Le voci confermate più recenti di questo registro degli aggiornamenti di PEAK sono Patch Notes 2.03.a del 27 agosto 2026, l'annuncio di Gloom e Citadel del 24 agosto e Patch 2.02.a del 18 agosto. Prima compaiono il patch sul cooldown di Frog e sulle correzioni, The Final Ascent e l'annuncio dell'ultimo bioma. La pagina conserva titoli, date e sintesi prudenti, collegandoli alla mappa giornaliera e alle pagine per pianificare il percorso.",
    tocLabel: "In questa pagina",
    tocFaq: "FAQ sugli aggiornamenti",
    heroImage: {
      alt: "Artwork ufficiale di The Final Ascent di PEAK usato come contesto per un aggiornamento",
      caption: "Artwork ufficiale Steam: un riferimento datato, non un sostituto delle patch note complete.",
    },
    sections: [
      {
        title: "Controlla la mappa di oggi dopo un aggiornamento di PEAK",
        paragraphs: [
          "La risposta sul percorso appare in alto perché una patch può cambiare la versione a cui si riferisce una vecchia nota della mappa. La scheda generata durante il build mostra il record datato attuale quando fonte e campi di posizione sono disponibili. È uno snapshot, non una promessa valida per ogni lobby o per ogni reset futuro.",
          "Quando la scheda è verificata, confronta la data con la versione del gioco e usala per orientarti. Se è in attesa, apri il gioco e conferma direttamente il percorso attuale. Così il registro resta utile anche nel breve intervallo tra l'arrivo di un aggiornamento e la verifica della fonte.",
        ],
      },
      {
        title: "Voci confermate degli aggiornamenti di PEAK",
        paragraphs: [
          "La tabella viene generata da un piccolo file di dati versionato, inizializzato con l'API ufficiale Steam News. Il file sorgente conserva il titolo ufficiale, la data di pubblicazione, una sintesi prudente limitata al titolo e il link alla notizia Steam. Non inventa un riassunto completo quando il post non è stato trascritto in modo indipendente e verificabile.",
          "Il registro è volutamente compatto. Il giocatore può trovare subito la versione interessata, aprire il post originale per le note esatte e usare le pagine della mappa o del programma per capire cosa ricontrollare. Una nuova voce ufficiale recuperata durante il build viene inserita in cima in base alla data.",
        ],
      },
      {
        title: "Come un aggiornamento di PEAK può influire sulla rotazione della mappa",
        paragraphs: [
          "Un aggiornamento e una rotazione giornaliera rispondono a domande diverse. Le patch note descrivono un evento di versione; la rotazione descrive il contesto del percorso segnalato in una data precisa. Un annuncio di bioma può spiegare perché controllare una nuova area, ma da solo non dimostra che quella sia la rotta attiva in ogni sessione. Leggi l'aggiornamento, controlla i dati datati e conferma nel gioco.",
          "La distinzione è importante soprattutto quando il titolo cita un nuovo bioma o percorso. Il feed ufficiale può confermare che Gloom, Citadel, Caldera o The Kiln sono stati menzionati in un aggiornamento. Senza un record attuale del percorso, però, non può dire quale sequenza vedrà la tua lobby dopo il reset. Per l'orario del reset e le voci recenti, consulta il [[link:peak-map-rotation-schedule|programma della rotazione]].",
        ],
        bullets: [
          ["Controlla la versione", "Annota titolo e data della patch prima di riutilizzare una vecchia nota sul percorso."],
          ["Controlla il percorso", "Confronta il record datato della mappa con il percorso mostrato dalla sessione attuale."],
          ["Controlla la meccanica", "Per i cambiamenti esatti usa il post ufficiale completo, non solo il titolo."],
          ["Controlla le note", "Indica se un consiglio è osservato, ufficiale o non verificato per poterlo correggere in seguito."],
        ],
      },
      {
        title: "Un modo pratico per leggere le patch note di PEAK",
        paragraphs: [
          "Inizia dalla data e dal titolo ufficiali, poi estrai solo le frasi che cambiano una decisione del giocatore. Un cambiamento al cooldown può influire sul momento in cui la squadra si impegna. Un annuncio di bioma può cambiare le parole usate per cercare le mappe. Un titolo sulle correzioni può migliorare l'affidabilità senza cambiare il percorso. Il registro deve distinguere questi casi invece di chiamare ogni aggiornamento una nuova mappa.",
          "Dopo la lettura, prova un'ipotesi in una partita normale e registra il risultato insieme alla versione del gioco. Un solo successo o fallimento non dimostra una regola universale. Il piccolo ciclo fonte, sessione e nota datata dà valore pratico al registro senza andare oltre ciò che la fonte consente di affermare.",
          "Conserva la data dell'aggiornamento e quella del record della mappa in campi separati. La prima indica quando è stata pubblicata l'informazione ufficiale; la seconda quando è stato osservato il percorso. Confrontarle spiega perché un vecchio consiglio della comunità può descrivere un percorso reale senza descrivere la versione attuale.",
        ],
        bullets: [
          ["1. Trova il post ufficiale", "Usa il feed Steam collegato e conserva titolo e data esatti."],
          ["2. Classifica il cambiamento", "Separa patch note, annunci di contenuti, correzioni e contesto della comunità."],
          ["3. Ricontrolla il percorso", "Apri il record attuale della mappa e conferma la sequenza nel gioco."],
          ["4. Aggiorna la nota", "Aggiungi versione, prove e incertezza per il build successivo."],
        ],
      },
    ],
    faq: {
      eyebrow: "Risposte rapide",
      title: "FAQ sugli aggiornamenti di PEAK",
      items: [
        ["Con quale frequenza PEAK riceve aggiornamenti?", "Il feed ufficiale delle notizie Steam è il riferimento affidabile per annunci e post delle patch. Non dedurre una cadenza settimanale o mensile fissa da pochi record; controlla il feed attuale."],
        ["Un aggiornamento di PEAK cambia la mappa?", "Un aggiornamento può cambiare contenuti, contesto del percorso o meccaniche, ma il titolo di una patch non dimostra la sequenza giornaliera. Controlla il record datato e conferma nel gioco il percorso attivo dopo l'aggiornamento."],
        ["Dove trovo le patch note più recenti di PEAK?", "Questo registro riassume i titoli confermati e collega il feed ufficiale. Per il percorso attuale apri la [[link:map-rotation#today-map|mappa di oggi]]; per il reset consulta il [[link:peak-map-rotation-schedule|programma della rotazione]]."],
        ["Ogni voce è un riassunto completo della patch?", "No. Quando non è disponibile una trascrizione completa e verificabile, la voce resta a livello di titolo. Apri il post ufficiale Steam per meccaniche, numeri e dettagli di implementazione."],
        ["Come resta aggiornato il registro?", "Il workflow di build può recuperare l'API ufficiale Steam News, confrontare titoli e date con i dati salvati e aggiungere in cima le nuove voci confermate. La pagina generata non dipende da JavaScript lato client per mostrare il registro."],
      ],
    },
    source: {
      eyebrow: "Fonti e limiti",
      title: "Aggiornamenti ufficiali prima dei riassunti della comunità",
      body: "Date e titoli di questo registro degli aggiornamenti di PEAK provengono dal feed ufficiale delle notizie Steam. Il percorso giornaliero proviene dalla fonte delle mappe mantenuta durante il build. Le spiegazioni della comunità possono aggiungere esperienza, ma vanno indicate separatamente e confrontate con il gioco attuale prima di diventare una regola definitiva.",
      links: [["Notizie ufficiali Steam", "https://store.steampowered.com/news/app/3527290"], ["Pagina ufficiale di PEAK su Steam", "https://store.steampowered.com/app/3527290/PEAK/"]],
    },
    related: [["map-rotation", "Apri la mappa di oggi"], ["peak-map-rotation-schedule", "Leggi il programma della rotazione"], ["what-is-peak-game", "Inizia dalla guida per principianti"]],
    relatedLabel: "Guide PEAK correlate",
  },
};

const localizedBiomeRosterCopy = {
  zh: {
    sentence: '\u5982\u9700\u67e5\u770b\u8fd9\u4e9b\u540d\u79f0\u7684\u3001\u7531\u6765\u6e90\u652f\u6301\u7684\u540d\u5355\uff0c\u8bf7\u53c2\u9605[[link:peak-biomes-list|\u751f\u7269\u7fa4\u7cfb\u5217\u8868]]\u3002',
    label: '\u6d4f\u89c8\u751f\u7269\u7fa4\u7cfb\u540d\u5355',
  },
  es: {
    sentence: 'Para consultar una lista de estos nombres respaldada por fuentes, revisa la [[link:peak-biomes-list|lista de biomas]].',
    label: 'Explorar la lista de biomas',
  },
  ja: {
    sentence: '\u3053\u308c\u3089\u306e\u540d\u524d\u3092\u51fa\u5178\u4ed8\u304d\u3067\u78ba\u8a8d\u3067\u304d\u308b\u4e00\u89a7\u306f\u3001[[link:peak-biomes-list|\u30d0\u30a4\u30aa\u30fc\u30e0\u4e00\u89a7]]\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    label: '\u30d0\u30a4\u30aa\u30fc\u30e0\u4e00\u89a7\u3092\u898b\u308b',
  },
  fr: {
    sentence: 'Pour consulter une liste de ces noms \u00e9tay\u00e9e par les sources, lisez la [[link:peak-biomes-list|liste des biomes]].',
    label: 'Voir la liste des biomes',
  },
  de: {
    sentence: 'Eine quellenbasierte Liste dieser Namen findest du in der [[link:peak-biomes-list|Biome-Liste]].',
    label: 'Biome-Liste durchsuchen',
  },
  pt: {
    sentence: 'Para ver uma lista desses nomes apoiada por fontes, consulte a [[link:peak-biomes-list|lista de biomas]].',
    label: 'Ver a lista de biomas',
  },
  ko: {
    sentence: '\uc774 \uc774\ub984\ub4e4\uc758 \ucd9c\ucc98 \uae30\ubc18 \ubaa9\ub85d\uc740 [[link:peak-biomes-list|\ubc14\uc774\uc634 \ubaa9\ub85d]]\uc5d0\uc11c \ud655\uc778\ud558\uc138\uc694.',
    label: '\ubc14\uc774\uc634 \ubaa9\ub85d \ubcf4\uae30',
  },
  it: {
    sentence: 'Per un elenco di questi nomi basato sulle fonti, consulta la [[link:peak-biomes-list|lista dei biomi]].',
    label: 'Esplora la lista dei biomi',
  },
};

for (const [locale, copy] of Object.entries(localizedBiomeRosterCopy)) {
  const translation = peakGameUpdateTranslations[locale];
  translation.sections[2].paragraphs[1] += ` ${copy.sentence}`;
  translation.related = [...translation.related, ['peak-biomes-list', copy.label]];
}

const localizedSummaries = {
  en: {
    [officialTitles.patch203]: "Official patch-notes post for version 2.03.a; open the source for the exact changes.",
    [officialTitles.gloom]: "Official announcement about an additional week of Gloom and The Citadel.",
    [officialTitles.patch202]: "Official patch-notes post for version 2.02.a; open the source for the exact changes.",
    [officialTitles.patch201]: "Official patch post naming the Frog cooldown and bug fixes in its title.",
    [officialTitles.ascent]: "Official update post titled The Final Ascent; use the source for the complete release details.",
    [officialTitles.biome]: "Official announcement that the final biome update would arrive on August 11.",
  },
  zh: {
    [officialTitles.patch203]: "2.03.a 版本的官方补丁说明文章；具体改动请打开来源查看。",
    [officialTitles.gloom]: "官方公告：Gloom 与 The Citadel 额外延长一周。",
    [officialTitles.patch202]: "2.02.a 版本的官方补丁说明文章；具体改动请打开来源查看。",
    [officialTitles.patch201]: "官方补丁标题明确提到 Frog 冷却时间与错误修复。",
    [officialTitles.ascent]: "标题为 The Final Ascent 的官方更新文章；完整发布内容请查看来源。",
    [officialTitles.biome]: "官方公告：最终生物群系更新将于 8 月 11 日到来。",
  },
  es: {
    [officialTitles.patch203]: "Publicación oficial de notas del parche 2.03.a; abre la fuente para ver los cambios exactos.",
    [officialTitles.gloom]: "Anuncio oficial: Gloom y The Citadel tendrán una semana adicional.",
    [officialTitles.patch202]: "Publicación oficial de notas del parche 2.02.a; abre la fuente para ver los cambios exactos.",
    [officialTitles.patch201]: "El título del parche oficial menciona el enfriamiento de Frog y correcciones de errores.",
    [officialTitles.ascent]: "Publicación oficial titulada The Final Ascent; consulta la fuente para todos los detalles.",
    [officialTitles.biome]: "Anuncio oficial de la llegada del último bioma el 11 de agosto.",
  },
  ja: {
    [officialTitles.patch203]: "バージョン2.03.aの公式パッチノート投稿です。正確な変更内容は出典を確認してください。",
    [officialTitles.gloom]: "GloomとThe Citadelがさらに1週間続くことを知らせる公式告知です。",
    [officialTitles.patch202]: "バージョン2.02.aの公式パッチノート投稿です。正確な変更内容は出典を確認してください。",
    [officialTitles.patch201]: "公式パッチのタイトルにFrogのクールダウンとバグ修正が明記されています。",
    [officialTitles.ascent]: "The Final Ascentと題された公式更新投稿です。詳細は出典の全文を確認してください。",
    [officialTitles.biome]: "最後のバイオーム更新が8月11日に登場することを知らせる公式告知です。",
  },
  fr: {
    [officialTitles.patch203]: "Billet officiel de patch notes pour la version 2.03.a ; consultez la source pour les changements précis.",
    [officialTitles.gloom]: "Annonce officielle : Gloom et The Citadel restent une semaine supplémentaire.",
    [officialTitles.patch202]: "Billet officiel de patch notes pour la version 2.02.a ; consultez la source pour les changements précis.",
    [officialTitles.patch201]: "Le titre du patch officiel mentionne le temps de recharge de Frog et des corrections de bugs.",
    [officialTitles.ascent]: "Publication officielle intitulée The Final Ascent ; consultez la source pour les détails complets.",
    [officialTitles.biome]: "Annonce officielle de l'arrivée du dernier biome le 11 août.",
  },
  de: {
    [officialTitles.patch203]: "Offizieller Patchnotes-Beitrag für Version 2.03.a; genaue Änderungen stehen in der Quelle.",
    [officialTitles.gloom]: "Offizielle Ankündigung: Gloom und The Citadel bleiben eine weitere Woche verfügbar.",
    [officialTitles.patch202]: "Offizieller Patchnotes-Beitrag für Version 2.02.a; genaue Änderungen stehen in der Quelle.",
    [officialTitles.patch201]: "Der Titel des offiziellen Patches nennt Frogs Abklingzeit und Fehlerbehebungen.",
    [officialTitles.ascent]: "Offizieller Update-Beitrag mit dem Titel The Final Ascent; die Quelle enthält die vollständigen Details.",
    [officialTitles.biome]: "Offizielle Ankündigung: Das letzte Biom-Update erscheint am 11. August.",
  },
  pt: {
    [officialTitles.patch203]: "Post oficial de notas do patch da versão 2.03.a; abra a fonte para conferir as mudanças exatas.",
    [officialTitles.gloom]: "Anúncio oficial: Gloom e The Citadel terão mais uma semana.",
    [officialTitles.patch202]: "Post oficial de notas do patch da versão 2.02.a; abra a fonte para conferir as mudanças exatas.",
    [officialTitles.patch201]: "O título do patch oficial menciona o tempo de recarga de Frog e correções de bugs.",
    [officialTitles.ascent]: "Post de atualização oficial intitulado The Final Ascent; consulte a fonte para os detalhes completos.",
    [officialTitles.biome]: "Anúncio oficial de que a atualização do bioma final chegaria em 11 de agosto.",
  },
  ko: {
    [officialTitles.patch203]: "2.03.a 버전의 공식 패치 노트 게시물입니다. 정확한 변경 사항은 출처를 확인하세요.",
    [officialTitles.gloom]: "Gloom과 The Citadel이 한 주 더 유지된다는 공식 공지입니다.",
    [officialTitles.patch202]: "2.02.a 버전의 공식 패치 노트 게시물입니다. 정확한 변경 사항은 출처를 확인하세요.",
    [officialTitles.patch201]: "공식 패치 제목에 Frog 쿨다운과 버그 수정이 명시되어 있습니다.",
    [officialTitles.ascent]: "The Final Ascent라는 제목의 공식 업데이트 게시물입니다. 전체 내용은 출처를 확인하세요.",
    [officialTitles.biome]: "마지막 바이옴 업데이트가 8월 11일에 도착한다는 공식 공지입니다.",
  },
  it: {
    [officialTitles.patch203]: "Post ufficiale delle patch note per la versione 2.03.a; apri la fonte per i cambiamenti esatti.",
    [officialTitles.gloom]: "Annuncio ufficiale: Gloom e The Citadel restano per un'altra settimana.",
    [officialTitles.patch202]: "Post ufficiale delle patch note per la versione 2.02.a; apri la fonte per i cambiamenti esatti.",
    [officialTitles.patch201]: "Il titolo della patch ufficiale cita il cooldown di Frog e le correzioni di bug.",
    [officialTitles.ascent]: "Post di aggiornamento ufficiale intitolato The Final Ascent; usa la fonte per i dettagli completi.",
    [officialTitles.biome]: "Annuncio ufficiale dell'arrivo dell'ultimo aggiornamento del bioma l'11 agosto.",
  },
};

const genericSummaryTemplates = {
  en: {
    PATCH: "Official patch-notes entry; open the source for the exact changes.",
    CONTENT: "Official content announcement; open the source for the complete context.",
    UPDATE: "Official update entry; open the source for the complete release details.",
    ANNOUNCEMENT: "Official announcement; open the source for the complete context.",
    default: "Official PEAK update entry; open the source for the complete details.",
  },
  zh: {
    PATCH: "官方补丁说明条目；具体改动请打开来源查看。",
    CONTENT: "官方内容公告；完整背景请打开来源查看。",
    UPDATE: "官方更新条目；完整发布内容请打开来源查看。",
    ANNOUNCEMENT: "官方公告；完整背景请打开来源查看。",
    default: "官方 PEAK 更新条目；完整内容请打开来源查看。",
  },
  es: {
    PATCH: "Entrada oficial de notas de parche; abre la fuente para ver los cambios exactos.",
    CONTENT: "Anuncio oficial de contenido; abre la fuente para consultar el contexto completo.",
    UPDATE: "Entrada de actualización oficial; abre la fuente para ver todos los detalles.",
    ANNOUNCEMENT: "Anuncio oficial; abre la fuente para consultar el contexto completo.",
    default: "Entrada oficial de actualización de PEAK; abre la fuente para ver los detalles.",
  },
  ja: {
    PATCH: "公式パッチノート項目です。正確な変更内容は出典を確認してください。",
    CONTENT: "公式コンテンツ告知です。詳しい背景は出典を確認してください。",
    UPDATE: "公式更新項目です。完全な内容は出典を確認してください。",
    ANNOUNCEMENT: "公式告知です。詳しい背景は出典を確認してください。",
    default: "PEAK公式更新項目です。詳しい内容は出典を確認してください。",
  },
  fr: {
    PATCH: "Entrée officielle de patch notes ; consultez la source pour les changements précis.",
    CONTENT: "Annonce officielle de contenu ; consultez la source pour le contexte complet.",
    UPDATE: "Entrée de mise à jour officielle ; consultez la source pour les détails complets.",
    ANNOUNCEMENT: "Annonce officielle ; consultez la source pour le contexte complet.",
    default: "Entrée officielle de mise à jour de PEAK ; consultez la source pour les détails.",
  },
  de: {
    PATCH: "Offizieller Patchnotes-Eintrag; genaue Änderungen stehen in der Quelle.",
    CONTENT: "Offizielle Inhaltsankündigung; den vollständigen Kontext findest du in der Quelle.",
    UPDATE: "Offizieller Update-Eintrag; vollständige Details stehen in der Quelle.",
    ANNOUNCEMENT: "Offizielle Ankündigung; den vollständigen Kontext findest du in der Quelle.",
    default: "Offizieller PEAK-Update-Eintrag; vollständige Details stehen in der Quelle.",
  },
  pt: {
    PATCH: "Entrada oficial de notas de patch; abra a fonte para ver as mudanças exatas.",
    CONTENT: "Anúncio oficial de conteúdo; abra a fonte para conferir o contexto completo.",
    UPDATE: "Entrada oficial de atualização; abra a fonte para ver os detalhes completos.",
    ANNOUNCEMENT: "Anúncio oficial; abra a fonte para conferir o contexto completo.",
    default: "Entrada oficial de atualização de PEAK; abra a fonte para ver os detalhes.",
  },
  ko: {
    PATCH: "공식 패치 노트 항목입니다. 정확한 변경 사항은 출처를 확인하세요.",
    CONTENT: "공식 콘텐츠 공지입니다. 전체 맥락은 출처를 확인하세요.",
    UPDATE: "공식 업데이트 항목입니다. 전체 내용은 출처를 확인하세요.",
    ANNOUNCEMENT: "공식 공지입니다. 전체 맥락은 출처를 확인하세요.",
    default: "PEAK 공식 업데이트 항목입니다. 자세한 내용은 출처를 확인하세요.",
  },
  it: {
    PATCH: "Voce ufficiale delle patch note; apri la fonte per i cambiamenti esatti.",
    CONTENT: "Annuncio ufficiale di contenuti; apri la fonte per il contesto completo.",
    UPDATE: "Voce ufficiale di aggiornamento; apri la fonte per tutti i dettagli.",
    ANNOUNCEMENT: "Annuncio ufficiale; apri la fonte per il contesto completo.",
    default: "Voce ufficiale di aggiornamento di PEAK; apri la fonte per i dettagli.",
  },
};

export const articleUpdateCopy = Object.fromEntries(Object.keys(genericSummaryTemplates).map((locale) => {
  const labels = {
    en: { empty: "No verified official update entries are available for this build.", caption: "Confirmed official PEAK update entries", date: "Date", type: "Type", entry: "Official entry", summary: "Source-backed summary", note: "Titles and dates are read from official Steam news data at build time. The linked post is the authority for exact patch details.", sourceFallback: "Open the official Steam post for the complete details.", kind: { PATCH: "PATCH", CONTENT: "CONTENT", UPDATE: "UPDATE", ANNOUNCEMENT: "ANNOUNCEMENT" } },
    zh: { empty: "本次构建没有可核验的官方更新条目。", caption: "已确认的 PEAK 官方更新条目", date: "日期", type: "类型", entry: "官方条目", summary: "来源摘要", note: "标题和日期在构建时从官方 Steam 动态数据读取。具体补丁细节以链接的官方文章为准。", sourceFallback: "请打开官方 Steam 文章查看完整内容。", kind: { PATCH: "补丁", CONTENT: "内容", UPDATE: "更新", ANNOUNCEMENT: "公告" } },
    es: { empty: "No hay entradas oficiales verificadas para este build.", caption: "Entradas oficiales confirmadas de PEAK", date: "Fecha", type: "Tipo", entry: "Entrada oficial", summary: "Resumen respaldado por la fuente", note: "Los títulos y las fechas se leen de las noticias oficiales de Steam durante el build. La publicación enlazada es la autoridad para los detalles exactos.", sourceFallback: "Abre la publicación oficial de Steam para ver todos los detalles.", kind: { PATCH: "PARCHE", CONTENT: "CONTENIDO", UPDATE: "ACTUALIZACIÓN", ANNOUNCEMENT: "ANUNCIO" } },
    ja: { empty: "このビルドで確認できた公式更新項目はありません。", caption: "確認済みのPEAK公式更新項目", date: "日付", type: "種類", entry: "公式項目", summary: "出典に基づく要約", note: "タイトルと日付はビルド時に公式Steamニュースから読み込みます。正確なパッチ内容はリンク先の投稿を確認してください。", sourceFallback: "完全な内容は公式Steam投稿を確認してください。", kind: { PATCH: "パッチ", CONTENT: "コンテンツ", UPDATE: "更新", ANNOUNCEMENT: "告知" } },
    fr: { empty: "Aucune entrée officielle vérifiée n'est disponible pour ce build.", caption: "Entrées officielles confirmées de PEAK", date: "Date", type: "Type", entry: "Entrée officielle", summary: "Résumé sourcé", note: "Les titres et les dates sont lus au build depuis les actualités officielles Steam. Le billet lié fait autorité pour les détails précis du patch.", sourceFallback: "Consultez le billet officiel Steam pour les détails complets.", kind: { PATCH: "PATCH", CONTENT: "CONTENU", UPDATE: "MISE À JOUR", ANNOUNCEMENT: "ANNONCE" } },
    de: { empty: "Für diesen Build sind keine bestätigten offiziellen Update-Einträge verfügbar.", caption: "Bestätigte offizielle PEAK-Updates", date: "Datum", type: "Typ", entry: "Offizieller Eintrag", summary: "Quellenbasierte Zusammenfassung", note: "Titel und Daten werden beim Build aus den offiziellen Steam-News gelesen. Der verlinkte Beitrag ist die maßgebliche Quelle für genaue Patchdetails.", sourceFallback: "Öffne den offiziellen Steam-Beitrag für die vollständigen Details.", kind: { PATCH: "PATCH", CONTENT: "INHALT", UPDATE: "UPDATE", ANNOUNCEMENT: "ANKÜNDIGUNG" } },
    pt: { empty: "Não há entradas oficiais verificadas disponíveis para este build.", caption: "Entradas oficiais confirmadas de PEAK", date: "Data", type: "Tipo", entry: "Entrada oficial", summary: "Resumo baseado na fonte", note: "Títulos e datas são lidos das notícias oficiais da Steam durante o build. A publicação vinculada é a autoridade para os detalhes exatos do patch.", sourceFallback: "Abra a publicação oficial da Steam para ver os detalhes completos.", kind: { PATCH: "PATCH", CONTENT: "CONTEÚDO", UPDATE: "ATUALIZAÇÃO", ANNOUNCEMENT: "ANÚNCIO" } },
    ko: { empty: "이 빌드에서 확인된 공식 업데이트 항목이 없습니다.", caption: "확인된 PEAK 공식 업데이트 항목", date: "날짜", type: "유형", entry: "공식 항목", summary: "출처 기반 요약", note: "제목과 날짜는 빌드 시 공식 Steam 뉴스 데이터에서 읽습니다. 정확한 패치 내용은 연결된 게시물을 기준으로 합니다.", sourceFallback: "전체 내용은 공식 Steam 게시물을 확인하세요.", kind: { PATCH: "패치", CONTENT: "콘텐츠", UPDATE: "업데이트", ANNOUNCEMENT: "공지" } },
    it: { empty: "Non sono disponibili voci ufficiali verificate per questo build.", caption: "Voci ufficiali confermate degli aggiornamenti di PEAK", date: "Data", type: "Tipo", entry: "Voce ufficiale", summary: "Sintesi basata sulla fonte", note: "Titoli e date vengono letti dalle notizie ufficiali Steam durante il build. Il post collegato è la fonte autorevole per i dettagli esatti della patch.", sourceFallback: "Apri il post ufficiale Steam per i dettagli completi.", kind: { PATCH: "PATCH", CONTENT: "CONTENUTI", UPDATE: "AGGIORNAMENTO", ANNOUNCEMENT: "ANNUNCIO" } },
  }[locale];
  return [locale, { ...labels, summaries: localizedSummaries[locale], generic: genericSummaryTemplates[locale] }];
}));
