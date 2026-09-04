const articleLink = (slug, label) => '[[link:' + slug + '|' + label + ']]';
const mapLink = (label) => articleLink('map-rotation#today-map', label);

export const peakLevelsTranslations = {
  zh: {
    meta: {
      title: 'PEAK 关卡、生物群系与难度：完整指南',
      description: 'PEAK 有多少关卡？了解生物群系顺序、Ascents 难度系统，以及每日地图轮换如何改变今天要攀登的路线。',
      schema: '一份以来源为基础的 PEAK 关卡、生物群系顺序、Ascents 难度系统和构建时每日地图路线指南。',
    },
    primaryKeyword: 'PEAK 关卡、生物群系与难度',
    eyebrow: '进度指南 - 解释路线层级',
    h1: 'PEAK 关卡、生物群系与难度 - 详解',
    intro: '如果你正在查找 PEAK 游戏如何显示关卡信息，先看路线，而不是寻找传统的经验值等级条。PEAK 中有三个相互关联的概念：攀登路线、生物群系标签和 Ascents 难度修正。本指南先给出实用答案，再链接到' + articleLink('peak-biomes-list', '生物群系列表') + '了解地形细节。当前构建快照显示的是五个路线位置（已在该日期的游戏内确认）；具体名称和顺序来自构建时路线数据，重置或更新后可能变化。',
    answerLabel: '简短答案',
    answer: 'PEAK 并不是用一个永久不变的玩家等级总数来表达进度。当前面向游戏的路线资料包含九个有名称的生物群系标签（已在本次快照的游戏内确认）：Shore、Tropics、Roots、Alpine、Mesa、Caldera、The Kiln、Gloom 和 Citadel。当前每日记录显示五个路线位置（已在本次快照的游戏内确认）。这些位置说明攀登环境，Ascents 则是独立的难度修正，可以叠加减益。这里的数量是带日期的证据，不代表之后每个版本都会保持同样结构。',
    tocLabel: '本页内容',
    tocFaq: '关卡 FAQ',
    heroImage: {
      alt: 'PEAK 攀登路线从海岸、热带和高山地形上升至火山山顶的编辑插图',
      caption: '编辑插图 - 与其把 PEAK 看成传统玩家等级条，不如把进度理解为逐层上升的路线。',
    },
    sections: [
      {
        title: 'PEAK 关卡与生物群系：当前路线术语',
        paragraphs: [
          '在 PEAK 中，玩家常用关卡来概括一次攀登，但这个词可能把多个层次混在一起。生物群系是区域环境名称，路线是本局呈现的顺序，Ascents 则会改变这次攀登承受的压力。没有明确来源支持时，不要把这些标签解释成传统角色等级。',
          '下表记录当前维护路线数据中出现的九个有名称生物群系标签（已在本次快照的游戏内确认）。它是参考名册，不表示每局都会包含全部名称，也不表示它们构成永久顺序。地形提示只用于规划：先用它决定要观察什么，再由当前游戏确认实际地形和危险。',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'PEAK 游戏截图展示危险地形附近的路线和攀登决策',
          caption: 'Steam 官方截图 - 眼前实际显示的路线才是这次攀登的最终依据。',
          width: 1200,
          height: 675,
        },
        table: {
          caption: '当前生物群系名册 - 九个名称已在本次维护快照的游戏内确认',
          headers: ['生物群系', '路线角色', '需要观察的风险', '首先要问的问题'],
          rows: [
            ['Shore', '路线数据中的海岸开场环境。', '检查第一个必须作出的选择、边缘和高度变化。', '在使用团队道具前，哪里可以暂停？'],
            ['Tropics', '路线包含时出现的植被岛屿环境。', '观察视野、攀登线和穿过密集地形的安全方式。', '哪条路还能保留撤退选择？'],
            ['Roots', '当前序列包含时出现的有机根系环境。', '注意影响移动和重新站位的狭窄通道。', '团队能否在下一段狭窄路段前重新集合？'],
            ['Alpine', '路线来源报告的高海拔或山地环境。', '保护体力，并找出暴露地形上的可靠休息点。', '完成这次攀登后，下一处安全暂停在哪里？'],
            ['Mesa', '每日序列出现时的岩石高原环境。', '比较直线路径与失败后仍能恢复的路线。', '如果第一方案失败，哪条路更安全？'],
            ['Caldera', '维护名册中的火山盆地环境。', '在当前版本中核对高温、熔岩及其他危险。', '下一个不可逆决定需要什么资源保护？'],
            ['The Kiln', '来源名册中的独立后段或火山路线名称。', '不要假定布局固定，检查当前路径和出口。', '道具耗尽前，下一处恢复点在哪里？'],
            ['Gloom', '路线包含时出现的黑暗或低能见度环境。', '约定视觉报点，并明确撤退规则。', '团队还能可靠看见并沟通什么？'],
            ['Citadel', '列出的序列接近末段时出现的结构化环境。', '在重大选择处放慢速度，为最后推进保留工具。', '下一步是在前进，还是会制造救援问题？'],
          ],
        },
      },
      {
        title: 'Ascents 难度系统如何运作',
        paragraphs: [
          'Ascents 最适合被理解为叠加在攀登之上的难度修正，而不是额外的生物群系或玩家关卡。启用某个 Ascent 后，游戏会把对应的限制或减益应用到本局。因此即使路线熟悉，也可能需要重新规划：生物群系告诉你大致环境，Ascent 改变失误的代价和恢复资源的价值。',
          '当前游戏显示的修正效果应优先于旧攻略。本页不会虚构一个永久的 Ascents 数量，也不会给出所有版本通用的难度排名。开始前阅读选择界面，记下版本，并把社区简称当作待核实线索，而不是官方规则。',
        ],
        bullets: [
          ['阅读当前修正', '选择装备或决定推进速度前，先查看 Ascent 的说明。'],
          ['分开理解路线和难度', '生物群系描述环境；Ascent 改变这个环境中施加的规则或压力。'],
          ['重新规划恢复', '根据实际显示的惩罚，保留食物、攀登道具和撤退选项。'],
          ['记录版本', '带日期的笔记可以区分当前游戏效果和旧社区解释。'],
        ],
      },
      {
        title: '每日地图轮换如何改变关卡',
        kind: 'today-map',
        paragraphs: [
          '回答“PEAK 今天是什么关卡？”最快的方法，是查看下面带日期的路线记录。打开' + mapLink('查看今天的 PEAK 地图轮换') + '，就能看到主地图页使用的构建时地图、路线、生物群系、重置和来源字段。内容会写入静态 HTML，因此无需等待客户端 JavaScript 执行。',
          '在本文发布时，当前路线是一条五位置攀登（已在该日期的游戏内确认）。维护历史显示，不同日期的中间环境可能是 Roots、Alpine 或 Mesa；当前来源也把 Caldera 和 The Kiln 识别为名册名称。这说明每日轮换可以改变今天要攀登的路线，却不改变生物群系术语本身。',
          '把轮换当作带日期的起点，不要把它当成每个大厅、补丁或未来重置都会重复的承诺。重置后，把显示的顺序与游戏内路线对照，再阅读当前 Ascent 修正。地图页回答今天启用了什么，本页说明这条路线与关卡和难度的关系。',
        ],
      },
      {
        title: '攀登前如何读取 PEAK 的关卡信息',
        paragraphs: [
          '如果你是因为搜索“how to display level PEAK game”来到这里，可以使用下面的阅读方法。PEAK 的信息重点是当前路线层级和有效难度，而不是给本局强行套上一个等级数字。目标不是背诵未经核实的强度表，而是依据屏幕上的信息做出下一步决定。',
        ],
        bullets: [
          ['确认路线', '先打开' + mapLink('今天的活动地图') + '查看带日期的来源记录，再和即将开始的游戏对照。'],
          ['识别生物群系', '用生物群系名称建立地形预期，但把具体危险留给当前游戏确认。'],
          ['阅读 Ascent', '记下屏幕显示的减益或限制，不要把熟悉的路线自动当成熟悉的难度。'],
          ['规划一个决定', '确定下一处安全休息、需要的道具，以及触发撤退的条件。'],
          ['核对版本', '重要观察应记录日期和更新背景，方便之后修正建议。'],
        ],
      },
      {
        title: '学习 PEAK 进度体系的下一步',
        paragraphs: [
          '如果想把路线层级和难度理解转成实际准备，请继续阅读[[link:peak-game-tips|PEAK 游戏技巧]]，并用' + articleLink('how-to-play-peak', '首次攀登新手指南') + '复习完整流程。',
          '建立可靠理解最快的方法，是把当前路线检查和稳定术语页结合起来。如果核心玩法还不熟，先读' + articleLink('what-is-peak-game', 'PEAK 是什么') + '；遇到陌生名称时对照' + articleLink('peak-biomes-list', '完整生物群系列表') + '；怀疑路线或 Ascent 背景因补丁变化时，查看' + articleLink('peak-game-update', '更新日志') + '。需要今天的答案时，出发前回到' + articleLink('map-rotation', '每日地图页') + '。',
          '这样即使路线改变，页面仍然有用：每日记录告诉你今天检查什么，生物群系名册解释名称，而游戏本身确认当前关卡环境和难度修正。',
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'PEAK 关卡、生物群系与难度 FAQ',
      items: [
        ['PEAK 有多少关卡？', 'PEAK 没有一个永久固定的传统玩家关卡总数。当前维护名册包含九个有名称的生物群系（已在本次快照的游戏内确认），当前每日记录显示五个路线位置（已在本次快照的游戏内确认）。它们是路线和环境事实，不是经验值等级系统。'],
        ['PEAK 有哪些生物群系？', '当前名称名册是 Shore、Tropics、Roots、Alpine、Mesa、Caldera、The Kiln、Gloom 和 Citadel。每日路线显示的顺序可能变化，因此应以当前游戏和带日期的地图记录为准，不要把名册当成永久时间表。'],
        ['PEAK 的 Ascents 难度系统是什么？', 'Ascents 会给攀登添加难度修正或减益。它和生物群系标签分开：生物群系说明路线环境，当前 Ascent 改变本局承受的压力或限制。效果可能随更新变化，请阅读游戏内当前说明。'],
        ['PEAK 今天是什么关卡？', 'PEAK 没有一个通用的每日玩家关卡数字。打开' + mapLink('今天的活动地图') + '查看当前路线和生物群系顺序，再阅读游戏里显示的 Ascent。构建时卡片是带日期的参考，当前游戏对局才是最终依据。'],
        ['PEAK 是难度很高的游戏吗？', '它可能很有挑战，因为路线判断、体力、装备、恢复和团队配合会同时发挥作用。实际难度还取决于当前 Ascent 和地形。第一次尝试时采用较低压力的计划并提前约定撤退条件，比给游戏贴一个绝对难度标签更有用。'],
      ],
    },
    source: {
      eyebrow: '来源与限制',
      title: '本关卡指南如何维护',
      body: '生物群系名册和带日期的路线说法来自本站维护的 PEAK Map Today 构建数据，并把游戏使用的路线名称作为当前参考。PEAK 官方 Steam 页面和 Steam 新闻流提供游戏与更新背景。具体界面文字、Ascent 效果、危险和活动路线都可能受当前版本影响，仍应在游戏内核对。',
      links: [
        ['PEAK 官方 Steam 页面', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Map Today 来源', 'https://peak.skydler.me/'],
        ['Steam 官方新闻流', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', '对照完整生物群系列表'],
      ['map-rotation', '查看今天的 PEAK 地图'],
      ['what-is-peak-game', '从 PEAK 是什么开始'],
      ['peak-game-update', '阅读更新日志'],
      ['peak-game-tips', '查看 PEAK 游戏技巧'],
    ],
    relatedLabel: '相关 PEAK 指南',
  },

  es: {
    meta: {
      title: 'Niveles, biomas y dificultad de PEAK: guía completa',
      description: '¿Cuántos niveles tiene PEAK? Aprende el orden de los biomas, el sistema de dificultad Ascents y cómo la rotación diaria cambia la ruta de hoy.',
      schema: 'Guía basada en fuentes sobre los niveles de PEAK, el orden de los biomas, el sistema Ascents y la ruta diaria generada durante el build.',
    },
    primaryKeyword: 'niveles, biomas y dificultad de PEAK',
    eyebrow: 'Guía de progresión - capas de la ruta',
    h1: 'Niveles, biomas y dificultad de PEAK - explicados',
    intro: 'Si buscas cómo se muestra el nivel en el juego PEAK, empieza por la ruta y no por una barra de experiencia tradicional. PEAK combina tres ideas: la ruta de escalada, la etiqueta del bioma y un modificador de dificultad Ascents. Esta guía responde primero y enlaza con la ' + articleLink('peak-biomes-list', 'lista de biomas') + ' para los detalles del terreno. La escalada actual tiene cinco posiciones, confirmadas dentro del juego para esta instantánea fechada; los nombres y el orden se escriben desde los datos de ruta del build y pueden cambiar tras un reinicio o una actualización.',
    answerLabel: 'Respuesta corta',
    answer: 'PEAK no usa un total permanente de nivel del jugador para describir el progreso. El registro actual orientado al juego contiene nueve etiquetas de bioma con nombre, confirmadas dentro del juego para esta instantánea: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom y Citadel. El registro diario actual muestra cinco posiciones de ruta, también confirmadas dentro del juego para esta instantánea. Esas posiciones describen el contexto de la escalada; Ascents es un modificador separado que puede añadir penalizaciones. Son datos fechados, no una promesa de que todos los parches mantendrán la misma estructura.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas sobre niveles',
    heroImage: {
      alt: 'Ilustración editorial de una ruta de PEAK que sube por terreno costero, tropical, alpino y volcánico',
      caption: 'Ilustración editorial: la progresión de PEAK se entiende mejor como capas de ruta que como un nivel de jugador convencional.',
    },
    sections: [
      {
        title: 'Niveles y biomas de PEAK: el vocabulario actual de la ruta',
        paragraphs: [
          'En PEAK, nivel puede ser una forma cómoda de hablar de una escalada, pero también puede mezclar conceptos distintos. Un bioma es un contexto regional con nombre, una ruta es la secuencia de la partida y Ascents cambia la presión de esa partida. No conviertas estas etiquetas en una escalera de niveles de personaje sin una fuente que lo confirme.',
          'La tabla reúne las nueve etiquetas de bioma que aparecen en los datos de ruta mantenidos, confirmadas dentro del juego para esta instantánea. Es un repertorio de referencia: no afirma que cada partida cargue todos los nombres ni que sea un orden fijo. Las notas de riesgo son una ayuda de planificación; el juego actual debe confirmar la geometría y los peligros.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Captura de PEAK con una decisión de escalada junto a un peligro del terreno',
          caption: 'Captura oficial de Steam: la ruta visible en la partida es la autoridad final para la escalada.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: 'Repertorio actual de biomas: nueve nombres confirmados dentro del juego para esta instantánea',
          headers: ['Bioma', 'Papel en la ruta', 'Riesgo que revisar', 'Primera pregunta útil'],
          rows: [
            ['Shore', 'Contexto costero de apertura en los datos de ruta.', 'Revisa el primer compromiso, los bordes y los cambios de altura.', '¿Dónde puede parar el equipo antes de gastar utilidad compartida?'],
            ['Tropics', 'Contexto de isla con vegetación cuando entra en la ruta.', 'Lee la visibilidad, las líneas de escalada y la salida más segura.', '¿Qué camino conserva una retirada?'],
            ['Roots', 'Contexto orgánico o de raíces cuando aparece en la secuencia.', 'Busca movimientos incómodos y pasos que limiten recolocarse.', '¿Podemos reunirnos antes del siguiente tramo estrecho?'],
            ['Alpine', 'Contexto elevado o montañoso comunicado por la fuente.', 'Protege la resistencia e identifica descansos fiables.', '¿Cuál es la próxima pausa segura después de esta subida?'],
            ['Mesa', 'Contexto de meseta rocosa cuando está en la rotación.', 'Compara la línea directa con una ruta recuperable si falla el plan.', '¿Qué camino es más seguro si el primero no funciona?'],
            ['Caldera', 'Contexto de cuenca volcánica del vocabulario mantenido.', 'Comprueba calor, lava y otros peligros en la versión actual.', '¿Qué recurso protege la próxima decisión irreversible?'],
            ['The Kiln', 'Etiqueta de ruta volcánica o avanzada del repertorio.', 'No supongas un diseño fijo; revisa el camino y sus salidas.', '¿Dónde está el próximo punto de recuperación?'],
            ['Gloom', 'Contexto oscuro o de visibilidad reducida cuando aparece.', 'Acuerda indicaciones visuales y una regla de retirada.', '¿Qué puede ver y comunicar el equipo con fiabilidad?'],
            ['Citadel', 'Contexto estructurado y monumental hacia el final de la secuencia listada.', 'Reduce el ritmo y guarda herramientas para el último avance.', '¿El siguiente movimiento progresa o crea un rescate?'],
          ],
        },
      },
      {
        title: 'Cómo funciona el sistema de dificultad Ascents',
        paragraphs: [
          'Ascents se entiende mejor como un modificador de dificultad sobre una escalada, no como otro bioma ni como otro nivel de jugador. Cuando hay un Ascent activo, el juego aplica su limitación o penalización a la partida. Por eso una ruta conocida puede exigir otro plan: el bioma da el contexto y Ascent cambia el coste del error y el valor de la recuperación.',
          'La descripción que muestra la versión actual debe estar por encima de una guía antigua. Esta página no inventa un número permanente de Ascents ni una clasificación universal. Lee la selección dentro del juego, anota la versión y usa cualquier abreviatura de la comunidad como una pista que hay que verificar.',
        ],
        bullets: [
          ['Lee el modificador activo', 'Mira la descripción de Ascents antes de elegir equipo o empujar con más riesgo.'],
          ['Separa ruta y dificultad', 'El bioma describe el contexto; Ascent cambia las reglas o la presión de ese contexto.'],
          ['Reserva recuperación', 'Guarda comida, utilidad de escalada y una retirada según la penalización real mostrada.'],
          ['Anota la versión', 'Una nota fechada distingue un efecto actual de una explicación antigua de la comunidad.'],
        ],
      },
      {
        title: 'Cómo la rotación diaria cambia los niveles',
        kind: 'today-map',
        paragraphs: [
          'La respuesta más rápida a ¿qué nivel tiene PEAK hoy? es el registro de ruta con fecha que aparece abajo. Abre ' + mapLink('la rotación del mapa de PEAK de hoy') + ' para ver los mismos campos de mapa, ruta, bioma, reinicio y fuente que usa la página diaria principal. El contenido se escribe en HTML estático, antes de cualquier JavaScript del cliente.',
          'En la fecha de publicación, la ruta actual tiene cinco posiciones, confirmadas dentro del juego para esta instantánea. El historial mantenido muestra que el contexto central puede ser Roots, Alpine o Mesa en fechas distintas, mientras que la fuente actual también reconoce Caldera y The Kiln como nombres del repertorio. Una rotación diaria puede cambiar lo que subes sin cambiar el significado del vocabulario.',
          'Usa la rotación como un punto de partida fechado, no como una promesa para todos los lobbies, parches o reinicios futuros. Después del reinicio, compara la secuencia con tu partida y lee el modificador Ascents activo. La página del mapa responde qué está activo; esta guía explica cómo se relaciona con el nivel y la dificultad.',
        ],
      },
      {
        title: 'Cómo leer un nivel de PEAK antes de escalar',
        paragraphs: [
          'Si la búsqueda cómo mostrar el nivel en el juego PEAK te trajo aquí, aplica este método breve. PEAK es más claro cuando identificas la capa de ruta y la dificultad activa antes de asignar un número a la partida. La meta no es memorizar una tier list sin verificar, sino tomar la siguiente decisión con lo que aparece en pantalla.',
        ],
        bullets: [
          ['Confirma la ruta', 'Abre ' + mapLink('el mapa activo de hoy') + ' y compara el registro fechado con la partida que vas a jugar.'],
          ['Nombra el bioma', 'Usa el nombre para preparar expectativas del terreno, sin inventar peligros concretos.'],
          ['Lee Ascents', 'Anota la penalización o limitación visible antes de tratar una ruta conocida como dificultad conocida.'],
          ['Planifica una decisión', 'Elige el siguiente descanso, la utilidad necesaria y la condición que activa la retirada.'],
          ['Comprueba la versión', 'Guarda fecha y contexto de actualización cuando una observación deba reutilizarse.'],
        ],
      },
      {
        title: 'Siguientes pasos para entender la progresión de PEAK',
        paragraphs: [
          'Si quieres convertir la lectura de la ruta en decisiones prácticas, continúa con nuestros [[link:peak-game-tips|consejos para PEAK]] y repasa el ciclo completo en ' + articleLink('how-to-play-peak', 'la guía para tu primera partida') + '.',
          'Para construir un modelo fiable, combina la comprobación de la ruta actual con vocabulario estable. Empieza por ' + articleLink('what-is-peak-game', 'qué es PEAK') + ' si el ciclo principal aún es nuevo; consulta la ' + articleLink('peak-biomes-list', 'lista completa de biomas') + ' cuando no conozcas un nombre; y abre el ' + articleLink('peak-game-update', 'registro de actualizaciones') + ' si un parche puede haber cambiado la ruta o el contexto de Ascents. Para la respuesta de hoy, vuelve a la ' + articleLink('map-rotation', 'página del mapa diario') + ' antes de escalar.',
          'Así la guía sigue siendo útil cuando cambia la ruta: el registro diario dice qué revisar hoy, el repertorio explica los nombres y el juego confirma el contexto actual del nivel y el modificador de dificultad.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'Preguntas frecuentes sobre niveles, biomas y dificultad de PEAK',
      items: [
        ['¿Cuántos niveles tiene PEAK?', 'PEAK no presenta un total permanente de niveles de jugador convencional. El repertorio actual contiene nueve biomas con nombre, confirmados dentro del juego para esta instantánea, y el registro diario actual muestra cinco posiciones de ruta, también confirmadas dentro del juego. Son datos de ruta y entorno, no una escalera de experiencia.'],
        ['¿Cuáles son los biomas de PEAK?', 'El repertorio actual es Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom y Citadel. El orden de la ruta diaria puede cambiar, así que usa el juego actual y el registro fechado en vez de tratar el repertorio como un calendario fijo.'],
        ['¿Qué es el sistema de dificultad Ascents?', 'Ascents añade un modificador o penalización a la escalada. Es distinto de la etiqueta de bioma: el bioma describe el contexto de la ruta y el Ascent activo cambia la presión o la limitación de esa partida. Comprueba la descripción actual porque los efectos pueden cambiar con las actualizaciones.'],
        ['¿Qué nivel tiene PEAK hoy?', 'No existe un número universal de nivel de jugador para cada día. Abre ' + mapLink('el mapa activo de hoy') + ' para ver la ruta y la secuencia de biomas, y después lee el Ascent que muestra tu juego. La tarjeta del build es una referencia fechada; tu partida actual es la autoridad final.'],
        ['¿PEAK es un juego difícil?', 'Puede ser exigente porque la lectura de la ruta, la resistencia, el equipo, la recuperación y el trabajo en equipo interactúan. La dificultad también depende de Ascents y del terreno. Una primera partida con menos presión y una retirada acordada sirve mejor que una valoración absoluta.'],
      ],
    },
    source: {
      eyebrow: 'Fuentes y límites',
      title: 'Cómo se mantiene esta guía de niveles',
      body: 'El repertorio de biomas y las rutas fechadas proceden de los datos de PEAK Map Today mantenidos por este sitio, usando las etiquetas de ruta del juego como referencia actual. La página oficial de PEAK en Steam y sus noticias aportan contexto general del juego y de las actualizaciones. El texto exacto de la interfaz, los efectos de Ascents, los peligros y la ruta activa dependen de la versión actual y deben comprobarse dentro del juego.',
      links: [
        ['Página oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Fuente de PEAK Map Today', 'https://peak.skydler.me/'],
        ['Noticias oficiales de Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', 'Comparar la lista completa de biomas'],
      ['map-rotation', 'Consultar el mapa de PEAK de hoy'],
      ['what-is-peak-game', 'Empezar por qué es PEAK'],
      ['peak-game-update', 'Leer el registro de actualizaciones'],
      ['peak-game-tips', 'Ver los consejos para PEAK'],
    ],
    relatedLabel: 'Guías relacionadas de PEAK',
  },

  ja: {
    meta: {
      title: 'PEAKのレベル・バイオーム・難易度：完全ガイド',
      description: 'PEAKには何レベルある？バイオームの順序、Ascentsの難易度システム、毎日のマップローテーションをわかりやすく解説します。',
      schema: 'PEAKのレベル、バイオームの順序、Ascentsの難易度システム、ビルド時のデイリーマップを解説する出典重視のガイド。',
    },
    primaryKeyword: 'PEAKのレベル・バイオーム・難易度',
    eyebrow: '進行ガイド - ルートの層を解説',
    h1: 'PEAKのレベル・バイオーム・難易度を解説',
    intro: 'PEAK gameのレベル表示について調べているなら、まず経験値バーではなくルートを見てください。PEAKでは、登山ルート、バイオーム名、Ascentsによる難易度補正という三つの要素がつながっています。このページでは先に答えを示し、地形の詳細は' + articleLink('peak-biomes-list', 'バイオーム一覧') + 'へ案内します。現在の登山は五つのルート位置で構成されており、この日付のスナップショットでゲーム内確認済みです。名前と順序はビルド時のルートデータから書き込まれ、リセットやアップデートで変わる可能性があります。',
    answerLabel: '要点',
    answer: 'PEAKは、進行を表すための固定されたプレイヤーレベル総数を使っていません。現在のゲーム向けルート資料には、九つの名前付きバイオームが含まれます（このスナップショットでゲーム内確認済み）：Shore、Tropics、Roots、Alpine、Mesa、Caldera、The Kiln、Gloom、Citadelです。現在のデイリー記録には五つのルート位置があります（このスナップショットでゲーム内確認済み）。位置は登る環境を表し、Ascentsは別の難易度補正としてデバフを加えることがあります。これらは日付のある記録であり、将来も同じ構成になるという保証ではありません。',
    tocLabel: '目次',
    tocFaq: 'レベル FAQ',
    heroImage: {
      alt: '海岸、熱帯、高山、火山の地形を通って上昇するPEAKの登山ルートを描いた編集イラスト',
      caption: '編集イラスト：PEAKの進行は、通常のプレイヤーレベルよりもルートの層として捉えると理解しやすくなります。',
    },
    sections: [
      {
        title: 'PEAKのレベルとバイオーム：現在のルート用語',
        paragraphs: [
          'PEAKでレベルという言葉を使うと、一回の登山を簡単に説明できます。しかし、バイオーム、ルート、難易度を同じものとして扱うと混乱します。バイオームは地域の名前、ルートはそのセッションが示す順序、Ascentsはセッションにかかる負荷を変える要素です。根拠のないキャラクターレベル表に置き換えないでください。',
          '次の表は、維持されているルートデータに登場する九つの名前付きバイオームをまとめたものです（このスナップショットでゲーム内確認済み）。すべての名前が毎回登場することや、永久に固定された順番を示す表ではありません。地形の説明は準備の視点なので、実際の形状や危険は現在のゲームで確認します。',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: '危険な地形の近くでPEAKのルートを判断するプレイ画面',
          caption: 'Steam公式スクリーンショット：目の前のセッションに表示されるルートが最終的な基準です。',
          width: 1200,
          height: 675,
        },
        table: {
          caption: '現在のバイオーム名簿：このスナップショットでゲーム内確認済みの九つの名前',
          headers: ['バイオーム', 'ルートでの役割', '確認するリスク', '最初に考えること'],
          rows: [
            ['Shore', 'ルートデータにおける海岸の開始環境。', '最初の決断、縁、標高の変化を確認する。', '共有アイテムを使う前に休める場所はどこか。'],
            ['Tropics', 'ルートに含まれるときの植生豊かな島の環境。', '視界、登るライン、密集した地形からの安全な抜け道を見る。', '撤退の選択肢を残せる道はどれか。'],
            ['Roots', 'シーケンスに含まれるときの有機的な根の環境。', '動きにくい場所や立て直しを妨げる通路を探す。', '狭い区間の前に合流できるか。'],
            ['Alpine', 'ソースが示す高所または山岳環境。', 'スタミナを守り、開けた地形の休憩場所を特定する。', 'この登りの後の安全な休憩地点はどこか。'],
            ['Mesa', 'デイリーシーケンスに現れる岩の台地環境。', '直線と、失敗しても戻せる道を比べる。', '最初の計画が崩れたとき安全なのはどの道か。'],
            ['Caldera', '維持されている用語に含まれる火山盆地環境。', '現在のバージョンで熱、溶岩、その他の危険を確認する。', '次の後戻りできない判断を守る資源は何か。'],
            ['The Kiln', '名簿にある独立した後半または火山ルート名。', '固定された地形だと決めつけず、道と出口を見る。', '道具を使い切る前の次の回復地点はどこか。'],
            ['Gloom', 'ルートに含まれるときの暗さや低視界の環境。', '視覚的なコールと撤退条件をチームで決める。', '何が見えて、何を確実に伝えられるか。'],
            ['Citadel', '列挙された順序の終盤に近い構造的な環境。', '大きな分岐で速度を落とし、最後の押し上げに道具を残す。', '次の行動は前進か、それとも救助を招くか。'],
          ],
        },
      },
      {
        title: 'Ascentsの難易度システム',
        paragraphs: [
          'Ascentsは、別のバイオームやプレイヤーレベルではなく、登山に重ねる難易度補正です。Ascentが有効なとき、ゲームはその制限やデバフをセッションに適用します。そのため、知っているルートでも計画を変える必要があります。バイオームは環境を示し、Ascentはミスの代償や回復資源の価値を変えます。',
          '現在のゲームに表示される説明は、古い攻略記事より優先してください。このページではAscentsの恒久的な総数や、全バージョンに通用する難易度ランキングを作りません。選択画面を読み、バージョンを記録し、コミュニティの略称は確認すべき手掛かりとして扱います。',
        ],
        bullets: [
          ['補正を読む', '装備や進み方を決める前に、現在のAscentの説明を確認する。'],
          ['ルートと難易度を分ける', 'バイオームは環境、Ascentはそこにかかるルールや負荷を示す。'],
          ['回復を残す', '表示されたペナルティに合わせ、食料、登山道具、撤退手段を温存する。'],
          ['バージョンを記録する', '日付があれば、現在の効果と古いコミュニティ解説を区別できる。'],
        ],
      },
      {
        title: 'デイリーマップのローテーションがレベルを変える仕組み',
        kind: 'today-map',
        paragraphs: [
          '「今日のPEAKのレベルは？」という質問への最短の答えは、下にある日付付きのルート記録です。' + mapLink('今日のPEAKマップローテーションを確認') + 'を開くと、メインのデイリーページと同じビルド時のマップ、ルート、バイオーム、リセット、ソース情報を見られます。内容は静的HTMLに書き込まれるため、クライアントJavaScriptを待つ必要はありません。',
          '公開時点の現在ルートは五つの位置で構成され、この日付のゲーム内で確認されています。維持された履歴では、中央の環境が日によってRoots、Alpine、Mesaのいずれかになっています。また、現在のソースはCalderaとThe Kilnも名簿に含めています。ローテーションが今日の登山内容を変えても、用語の意味まで変わるわけではありません。',
          'ローテーションは日付付きの出発点として使い、すべてのロビー、パッチ、未来のリセットで同じになると考えないでください。リセット後に表示順をゲーム内で比べ、現在のAscent補正を読みます。マップページは今日の内容を答え、このページはそれがレベルと難易度にどう関係するかを説明します。',
        ],
      },
      {
        title: '登る前にPEAKのレベル情報を読む方法',
        paragraphs: [
          '「how to display level peak game」で検索してこのページに来た場合は、次の短い手順を使ってください。PEAKでは、プレイに無理に数字を付ける前に、現在のルート層と難易度を特定することが重要です。目的は未確認のティア表を覚えることではなく、画面にある根拠で次の判断をすることです。',
        ],
        bullets: [
          ['ルートを確認', mapLink('今日の有効なマップ') + 'を開き、日付付きソースとこれから遊ぶセッションを比べる。'],
          ['バイオームを特定', '名前から地形の予想を立てるが、具体的な危険は現在のゲームに任せる。'],
          ['Ascentを読む', '表示されたデバフや制限を記録し、知っている道を知っている難易度だと決めつけない。'],
          ['一つの判断を計画', '次の安全な休憩、必要な道具、撤退を始める条件を決める。'],
          ['バージョンを確認', '重要な観察には日付とアップデートの背景を添え、後で修正できるようにする。'],
        ],
      },
      {
        title: 'PEAKの進行を学ぶ次のステップ',
        paragraphs: [
          'ルートの理解を具体的な準備に変えたい場合は、[[link:peak-game-tips|PEAK攻略のコツ]]と' + articleLink('how-to-play-peak', '初回プレイ向けガイド') + 'も確認してください。',
          '安定した理解を作るには、現在のルート確認と用語の基準ページを組み合わせます。基本ループが初めてなら' + articleLink('what-is-peak-game', 'PEAKとは何か') + 'を読み、名前が分からなければ' + articleLink('peak-biomes-list', 'バイオーム一覧') + 'を比べ、パッチでルートやAscentの状況が変わったと思ったら' + articleLink('peak-game-update', 'アップデートログ') + 'を開きます。今日の答えは出発前に' + articleLink('map-rotation', 'デイリーマップページ') + 'へ戻って確認してください。',
          'この分け方ならルートが変わっても役立ちます。日々の記録は今日の確認対象を示し、名簿は名前を説明し、ゲーム本体は現在のレベル環境と難易度補正を確定します。',
        ],
      },
    ],
    faq: {
      eyebrow: 'よくある質問',
      title: 'PEAKのレベル・バイオーム・難易度 FAQ',
      items: [
        ['PEAKには何レベルありますか？', 'PEAKには、固定された通常のプレイヤーレベル総数はありません。現在の名簿には九つの名前付きバイオームがあり、このスナップショットのゲーム内で確認済みです。現在のデイリー記録には五つのルート位置があり、こちらもゲーム内で確認済みです。これは経験値レベルの階層ではなく、ルートと環境の情報です。'],
        ['PEAKのバイオームは何ですか？', '現在の名前付き名簿はShore、Tropics、Roots、Alpine、Mesa、Caldera、The Kiln、Gloom、Citadelです。デイリールートの順序は変わる可能性があるので、固定スケジュールではなく現在のゲームと日付付きマップ記録を使ってください。'],
        ['Ascentsの難易度システムとは何ですか？', 'Ascentsは登山に難易度補正やデバフを加えます。バイオーム名とは別の仕組みで、バイオームがルート環境を示すのに対し、Ascentはそのセッションにかかる負荷や制限を変えます。効果はアップデートで変わる可能性があるため、現在のゲーム内説明を確認してください。'],
        ['今日のPEAKは何レベルですか？', mapLink('今日の有効なマップ') + 'で現在のルートとバイオーム順を確認し、ゲーム内に表示されたAscentを読みます。毎日のプレイヤーレベル番号はありません。ビルド時のカードは日付付きの参考であり、現在のセッションが最終的な基準です。'],
        ['PEAKは難しいゲームですか？', 'ルートの読み取り、スタミナ、装備、回復、チームワークが同時に関わるため、難しく感じることがあります。難易度はAscentと現在の地形にも左右されます。最初は負荷を抑え、撤退条件を決めて試すほうが、絶対的な評価を付けるより実用的です。'],
      ],
    },
    source: {
      eyebrow: '出典と注意',
      title: 'このレベルガイドの更新方法',
      body: 'バイオーム名簿と日付付きルートの説明は、当サイトが維持するPEAK Map Todayのビルドデータに基づき、ゲームで使われるルート名を現在の基準として扱っています。PEAK公式SteamページとSteamニュースはゲームとアップデートの背景を補います。UIの文言、Ascentの効果、危険、現在のルートはバージョンに依存するため、ゲーム内で確認してください。',
      links: [
        ['PEAK公式Steamページ', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Map Todayのソース', 'https://peak.skydler.me/'],
        ['Steam公式ニュース', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', 'バイオーム一覧と比較する'],
      ['map-rotation', '今日のPEAKマップを見る'],
      ['what-is-peak-game', 'PEAKとは何かから読む'],
      ['peak-game-update', 'アップデートログを読む'],
      ['peak-game-tips', 'PEAK攻略のコツを見る'],
    ],
    relatedLabel: 'PEAK関連ガイド',
  },

  fr: {
    meta: {
      title: 'Niveaux, biomes et difficulté de PEAK : guide complet',
      description: 'Combien de niveaux compte PEAK ? Découvrez l’ordre des biomes, le système de difficulté Ascents et l’effet de la rotation quotidienne.',
      schema: 'Guide documenté sur les niveaux de PEAK, l’ordre des biomes, le système Ascents et la carte quotidienne écrite au build.',
    },
    primaryKeyword: 'niveaux, biomes et difficulté de PEAK',
    eyebrow: 'Guide de progression - les couches de la route',
    h1: 'Niveaux, biomes et difficulté de PEAK - expliqués',
    intro: 'Si vous cherchez comment afficher le niveau dans le jeu PEAK, commencez par la route plutôt que par une barre d’expérience classique. PEAK relie trois notions : la route d’ascension, le nom du biome et un modificateur de difficulté Ascents. Cette page donne la réponse utile puis renvoie vers la ' + articleLink('peak-biomes-list', 'liste des biomes') + ' pour les détails du terrain. L’ascension actuelle comporte cinq positions, confirmées dans le jeu pour cet instantané daté ; les noms et l’ordre viennent des données de route du build et peuvent changer après un reset ou une mise à jour.',
    answerLabel: 'Réponse courte',
    answer: 'PEAK ne décrit pas la progression avec un total permanent de niveaux de joueur. Les données de route actuelles destinées au jeu contiennent neuf noms de biomes, confirmés dans le jeu pour cet instantané : Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom et Citadel. Le relevé quotidien actuel affiche cinq positions de route, elles aussi confirmées dans le jeu pour cet instantané. Ces positions décrivent le contexte de l’ascension ; Ascents est un modificateur distinct qui peut ajouter des pénalités. Ce sont des éléments datés, pas la garantie que chaque future version gardera la même structure.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ des niveaux',
    heroImage: {
      alt: 'Illustration éditoriale d’une route PEAK qui monte à travers des terrains côtier, tropical, alpin et volcanique',
      caption: 'Illustration éditoriale : la progression de PEAK se comprend mieux comme une succession de routes que comme un niveau de joueur classique.',
    },
    sections: [
      {
        title: 'Niveaux et biomes de PEAK : le vocabulaire actuel des routes',
        paragraphs: [
          'Dans PEAK, niveau peut servir de raccourci pour parler d’une ascension, mais ce mot mélange facilement plusieurs couches. Un biome est un contexte régional nommé, une route est la séquence de la partie et Ascents modifie la pression de cette partie. Sans source explicite, ne transformez pas ces étiquettes en progression de personnage.',
          'Le tableau rassemble les neuf noms de biomes exposés par les données de route maintenues, confirmés dans le jeu pour cet instantané. Il s’agit d’un répertoire de référence : il ne dit pas que chaque partie charge tous les noms ni qu’il existe un ordre permanent. Les remarques de terrain servent à préparer la prochaine décision ; la partie actuelle confirme la géométrie et les dangers.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Capture de PEAK montrant un choix de route près d’un danger du terrain',
          caption: 'Capture officielle Steam : la route visible dans la session reste la référence finale.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: 'Répertoire actuel des biomes : neuf noms confirmés dans le jeu pour cet instantané',
          headers: ['Biome', 'Rôle dans la route', 'Risque à vérifier', 'Première question utile'],
          rows: [
            ['Shore', 'Contexte côtier d’ouverture dans les données de route.', 'Vérifiez le premier engagement, les bords et le dénivelé.', 'Où le groupe peut-il faire une pause avant de dépenser un outil partagé ?'],
            ['Tropics', 'Contexte d’île végétalisée lorsqu’il apparaît dans la route.', 'Lisez la visibilité, les lignes d’escalade et la sortie la plus sûre.', 'Quel chemin conserve une possibilité de retraite ?'],
            ['Roots', 'Contexte organique ou marqué par les racines dans la séquence.', 'Repérez les mouvements difficiles et les passages qui limitent le replacement.', 'Le groupe peut-il se regrouper avant le prochain passage étroit ?'],
            ['Alpine', 'Contexte élevé ou montagneux indiqué par la source.', 'Protégez l’endurance et repérez des repos fiables.', 'Quel est le prochain repos sûr après cette montée ?'],
            ['Mesa', 'Contexte de plateau rocheux lorsqu’il apparaît dans la rotation.', 'Comparez la ligne directe avec une route récupérable en cas d’échec.', 'Quel itinéraire reste le plus sûr si le premier plan échoue ?'],
            ['Caldera', 'Contexte de bassin volcanique du vocabulaire maintenu.', 'Vérifiez la chaleur, la lave et les autres dangers dans la version actuelle.', 'Quelle ressource protège la prochaine décision irréversible ?'],
            ['The Kiln', 'Nom de route volcanique ou avancée dans le répertoire.', 'N’imaginez pas une disposition fixe ; examinez le chemin et ses sorties.', 'Où se trouve le prochain point de récupération ?'],
            ['Gloom', 'Contexte sombre ou peu visible lorsqu’il est présent.', 'Convenez des repères visuels et d’une règle de retraite.', 'Que l’équipe peut-elle encore voir et communiquer correctement ?'],
            ['Citadel', 'Contexte structuré et monumental vers la fin de la séquence listée.', 'Ralentissez aux choix importants et gardez des outils pour la poussée finale.', 'Le prochain mouvement fait-il progresser ou crée-t-il un sauvetage ?'],
          ],
        },
      },
      {
        title: 'Le système de difficulté Ascents',
        paragraphs: [
          'Ascents est un modificateur de difficulté superposé à l’ascension, pas un biome supplémentaire ni un niveau de joueur. Lorsqu’un Ascent est actif, le jeu applique sa contrainte ou sa pénalité à la partie. Une route connue peut donc demander un autre plan : le biome donne le cadre, tandis que l’Ascent modifie le coût de l’erreur et la valeur de la récupération.',
          'La description de la version actuelle doit primer sur un ancien guide. Cette page n’invente ni un nombre permanent d’Ascents ni un classement valable pour toutes les versions. Lisez la sélection en jeu, notez la version et considérez les raccourcis communautaires comme des pistes à vérifier.',
        ],
        bullets: [
          ['Lisez le modificateur actif', 'Consultez la description d’Ascents avant de choisir l’équipement ou de pousser la route.'],
          ['Séparez route et difficulté', 'Le biome décrit le contexte ; l’Ascent change les règles ou la pression de ce contexte.'],
          ['Gardez une récupération', 'Réservez nourriture, outil d’escalade et retraite selon la pénalité réellement affichée.'],
          ['Notez la version', 'Une note datée distingue un effet actuel d’une explication communautaire ancienne.'],
        ],
      },
      {
        title: 'Comment la rotation quotidienne change les niveaux',
        kind: 'today-map',
        paragraphs: [
          'La réponse la plus rapide à « Quel niveau de PEAK est actif aujourd’hui ? » se trouve dans le relevé daté ci-dessous. Ouvrez ' + mapLink('la rotation de la carte PEAK du jour') + ' pour voir les mêmes champs de carte, route, biome, reset et source que sur la page quotidienne principale. Le contenu est écrit dans le HTML statique avant l’exécution du JavaScript client.',
          'À la publication, la route actuelle comporte cinq positions, confirmées dans le jeu pour cet instantané daté. L’historique montre que le contexte central peut être Roots, Alpine ou Mesa selon le jour, tandis que la source actuelle reconnaît aussi Caldera et The Kiln comme noms du répertoire. Une rotation peut donc changer ce que vous grimpez sans changer le sens des termes.',
          'Utilisez la rotation comme point de départ daté, pas comme une promesse valable pour chaque lobby, patch ou reset futur. Après le reset, comparez la séquence avec votre partie et lisez l’Ascent actif. La page de carte répond à la question du jour ; ce guide explique le lien avec les niveaux et la difficulté.',
        ],
      },
      {
        title: 'Lire un niveau de PEAK avant de grimper',
        paragraphs: [
          'Si la recherche comment afficher le niveau dans le jeu PEAK vous a conduit ici, appliquez cette méthode courte. PEAK devient plus lisible lorsque vous identifiez la couche de route et la difficulté active avant d’attribuer un chiffre à la partie. Le but n’est pas de mémoriser une tier list non vérifiée, mais de prendre la prochaine décision avec les informations affichées.',
        ],
        bullets: [
          ['Confirmez la route', 'Ouvrez ' + mapLink('la carte active du jour') + ' et comparez le relevé daté avec la partie que vous allez lancer.'],
          ['Nommez le biome', 'Utilisez le nom pour préparer votre lecture du terrain, sans inventer de danger précis.'],
          ['Lisez Ascents', 'Notez la pénalité ou la contrainte visible avant de considérer une route connue comme une difficulté connue.'],
          ['Planifiez une décision', 'Choisissez le prochain repos, l’outil nécessaire et la condition qui déclenche la retraite.'],
          ['Vérifiez la version', 'Ajoutez la date et le contexte de mise à jour à toute observation importante.'],
        ],
      },
      {
        title: 'Prochaines étapes pour comprendre la progression de PEAK',
        paragraphs: [
          'Pour transformer la lecture de la route en préparation concrète, consultez aussi nos [[link:peak-game-tips|astuces PEAK]] et ' + articleLink('how-to-play-peak', 'le guide de la première ascension') + '.',
          'Pour construire un modèle fiable, combinez une vérification de route actuelle avec un vocabulaire stable. Commencez par ' + articleLink('what-is-peak-game', 'ce qu’est PEAK') + ' si le cycle principal est nouveau ; consultez la ' + articleLink('peak-biomes-list', 'liste complète des biomes') + ' quand un nom vous échappe ; et ouvrez le ' + articleLink('peak-game-update', 'journal des mises à jour') + ' si un patch a pu changer la route ou le contexte d’Ascents. Pour la réponse du jour, revenez à la ' + articleLink('map-rotation', 'page de la carte quotidienne') + ' avant de grimper.',
          'Cette séparation reste utile quand la route change : le relevé quotidien indique quoi vérifier aujourd’hui, le répertoire explique les noms et le jeu confirme le contexte de niveau et le modificateur actifs.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ sur les niveaux, biomes et la difficulté de PEAK',
      items: [
        ['Combien de niveaux compte PEAK ?', 'PEAK ne présente pas un total permanent de niveaux de joueur classiques. Le répertoire actuel contient neuf biomes nommés, confirmés dans le jeu pour cet instantané, et le relevé quotidien affiche cinq positions de route, elles aussi confirmées dans le jeu. Ce sont des informations de route et d’environnement, pas une échelle d’expérience.'],
        ['Quels sont les biomes de PEAK ?', 'Le répertoire actuel est Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom et Citadel. L’ordre d’une route quotidienne peut changer ; utilisez donc la partie actuelle et le relevé daté plutôt qu’un calendrier fixe.'],
        ['Qu’est-ce que le système de difficulté Ascents ?', 'Ascents ajoute un modificateur ou une pénalité à l’ascension. C’est différent du biome : le biome décrit le contexte et l’Ascent actif modifie la pression ou la contrainte de la partie. Consultez la description actuelle, car les effets peuvent changer avec les mises à jour.'],
        ['Quel niveau de PEAK est actif aujourd’hui ?', 'Il n’existe pas de numéro universel de niveau du joueur pour chaque jour. Ouvrez ' + mapLink('la carte active du jour') + ' pour voir la route et la séquence de biomes, puis lisez l’Ascent dans votre jeu. La carte du build est une référence datée ; la session actuelle reste la source finale.'],
        ['PEAK est-il un jeu difficile ?', 'Le jeu peut être exigeant, car lecture de route, endurance, équipement, récupération et coopération interagissent. La difficulté dépend aussi d’Ascents et du terrain. Pour débuter, un plan moins risqué avec une règle de retraite claire est plus utile qu’une note absolue.'],
      ],
    },
    source: {
      eyebrow: 'Sources et limites',
      title: 'Comment ce guide des niveaux est maintenu',
      body: 'Le répertoire des biomes et les routes datées viennent des données PEAK Map Today maintenues par ce site, avec les noms utilisés par le jeu comme référence actuelle. La page Steam officielle de PEAK et le fil d’actualités Steam fournissent le contexte général du jeu et des mises à jour. Les textes d’interface, effets d’Ascents, dangers et route active dépendent de la version actuelle et doivent être vérifiés en jeu.',
      links: [
        ['Page Steam officielle de PEAK', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Source PEAK Map Today', 'https://peak.skydler.me/'],
        ['Fil d’actualités Steam officiel', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', 'Comparer la liste complète des biomes'],
      ['map-rotation', 'Voir la carte PEAK du jour'],
      ['what-is-peak-game', 'Commencer par ce qu’est PEAK'],
      ['peak-game-update', 'Lire le journal des mises à jour'],
      ['peak-game-tips', 'Voir les astuces PEAK'],
    ],
    relatedLabel: 'Guides PEAK associés',
  },

  de: {
    meta: {
      title: 'PEAK-Level, Biome und Schwierigkeit: Kompletter Guide',
      description: 'Wie viele Level hat PEAK? Erfahre die Biome-Reihenfolge, das Ascents-Schwierigkeitssystem und wie die tägliche Kartenrotation deinen Aufstieg ändert.',
      schema: 'Quellenbewusster Guide zu PEAK-Leveln, Biome-Reihenfolge, Ascents-Schwierigkeitssystem und der täglichen Build-Kartenroute.',
    },
    primaryKeyword: 'PEAK-Level, Biome und Schwierigkeit',
    eyebrow: 'Fortschrittsguide - Routenebenen erklärt',
    h1: 'PEAK-Level, Biome und Schwierigkeit erklärt',
    intro: 'Wenn du wissen willst, wie man Levelinformationen im PEAK-Spiel anzeigt, beginne mit der Route statt mit einer klassischen XP-Leiste. PEAK verbindet drei Ebenen: die Kletterroute, den Biom-Namen und einen Ascents-Schwierigkeitsmodifikator. Dieser Guide beantwortet die Frage zuerst und verweist für mehr Geländedetails auf die ' + articleLink('peak-biomes-list', 'Biome-Liste') + '. Der aktuelle Aufstieg umfasst fünf Routenpositionen, im datierten Snapshot im Spiel bestätigt; Namen und Reihenfolge stammen aus Build-Routendaten und können sich nach Reset oder Update ändern.',
    answerLabel: 'Kurzantwort',
    answer: 'PEAK beschreibt Fortschritt nicht mit einer dauerhaft festen Gesamtzahl von Spielerleveln. Die aktuelle spielbezogene Routenquelle enthält neun benannte Biome, für diesen Snapshot im Spiel bestätigt: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom und Citadel. Der aktuelle Tagesdatensatz zeigt fünf Routenpositionen, ebenfalls für diesen Snapshot im Spiel bestätigt. Diese Positionen beschreiben den Kletterkontext; Ascents ist ein getrenntes Schwierigkeitssystem, das Debuffs hinzufügen kann. Die Angaben sind datierte Belege und keine Zusage für jede kommende Version.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Level-FAQ',
    heroImage: {
      alt: 'Redaktionelle Illustration einer PEAK-Kletterroute durch Küsten-, Tropen-, Alpen- und Vulkangelände',
      caption: 'Redaktionelle Illustration: PEAK-Fortschritt lässt sich besser als Abfolge von Routenebenen verstehen als als klassisches Spielerlevel.',
    },
    sections: [
      {
        title: 'PEAK-Level und Biome: das aktuelle Routen-Vokabular',
        paragraphs: [
          'In PEAK ist Level ein nützliches Kurzwort für einen Aufstieg, kann aber mehrere Dinge vermischen. Ein Biom ist ein benannter regionaler Kontext, eine Route ist die Reihenfolge der aktuellen Partie und Ascents verändert den Druck dieser Partie. Ohne ausdrückliche Quelle sollten diese Begriffe nicht zu einer Charakter-Levelleiter gemacht werden.',
          'Die Tabelle sammelt die neun benannten Biome, die in den gepflegten Routendaten auftauchen und für diesen Snapshot im Spiel bestätigt sind. Sie ist ein Nachschlagewerk, keine Behauptung, dass jede Partie jeden Namen enthält oder dass die Reihenfolge dauerhaft feststeht. Die Geländenotizen helfen bei der Vorbereitung; Geometrie und Gefahren bestätigt die aktuelle Partie.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'PEAK-Spielszene mit einer Routenentscheidung nahe einer Geländegefahr',
          caption: 'Offizieller Steam-Screenshot: Die sichtbare Route der aktuellen Partie ist die letzte Instanz.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: 'Aktuelles Biom-Verzeichnis: neun Namen für diesen Snapshot im Spiel bestätigt',
          headers: ['Biom', 'Rollen in der Route', 'Zu prüfendes Risiko', 'Nützliche erste Frage'],
          rows: [
            ['Shore', 'Küstenkontext am Anfang der Routendaten.', 'Erste Festlegung, Kanten und Höhenwechsel prüfen.', 'Wo kann das Team pausieren, bevor gemeinsame Ausrüstung verbraucht wird?'],
            ['Tropics', 'Bewachsener Inselkontext, wenn er in der Route vorkommt.', 'Sicht, Kletterlinien und den sichersten Ausgang lesen.', 'Welcher Weg lässt einen Rückzug offen?'],
            ['Roots', 'Organischer oder wurzelreicher Kontext in passenden Sequenzen.', 'Unbequeme Bewegungen und schwer korrigierbare Passagen suchen.', 'Kann sich die Gruppe vor dem nächsten engen Abschnitt sammeln?'],
            ['Alpine', 'Höhen- oder Bergkontext, den die Quelle meldet.', 'Ausdauer schützen und verlässliche Raststellen erkennen.', 'Wo liegt die nächste sichere Pause nach diesem Aufstieg?'],
            ['Mesa', 'Felsiger Plateau-Kontext in der täglichen Sequenz.', 'Direktweg und nach einem Fehler erholbare Route vergleichen.', 'Welche Route bleibt sicher, wenn der erste Plan scheitert?'],
            ['Caldera', 'Vulkanischer Beckenkontext im gepflegten Vokabular.', 'Hitze, Lava und weitere Gefahren in der aktuellen Version prüfen.', 'Welche Ressource schützt die nächste unumkehrbare Entscheidung?'],
            ['The Kiln', 'Eigenständiger später oder vulkanischer Routenname im Verzeichnis.', 'Keine feste Karte annehmen; Weg und Ausgänge prüfen.', 'Wo ist der nächste Erholungspunkt, bevor die Ausrüstung ausgeht?'],
            ['Gloom', 'Dunkler oder sichtarmer Kontext, wenn er in der Route steht.', 'Sichtmeldungen und eine klare Rückzugsregel vereinbaren.', 'Was kann das Team noch zuverlässig sehen und mitteilen?'],
            ['Citadel', 'Strukturierter, monumentaler Kontext gegen Ende der gelisteten Sequenz.', 'Bei großen Entscheidungen langsamer werden und Werkzeug für den Endspurt behalten.', 'Ist der nächste Zug Fortschritt oder entsteht ein Rettungsproblem?'],
          ],
        },
      },
      {
        title: 'Das Ascents-Schwierigkeitssystem',
        paragraphs: [
          'Ascents sind am besten als Schwierigkeitsmodifikatoren über einer Kletterpartie zu verstehen, nicht als zusätzliche Biome oder Spielerlevel. Wenn ein Ascent aktiv ist, wendet das Spiel seine Einschränkung oder seinen Debuff auf die Partie an. Dadurch kann eine bekannte Route einen neuen Plan verlangen: Das Biom liefert den Rahmen, Ascents verändert Fehlerkosten und den Wert von Erholung.',
          'Die Beschreibung der aktuellen Spielversion steht über einem alten Guide. Diese Seite erfindet weder eine dauerhafte Zahl von Ascents noch eine für jede Version gültige Rangliste. Lies die Auswahl im Spiel, notiere die Version und behandle Community-Abkürzungen als Hinweise, die noch geprüft werden müssen.',
        ],
        bullets: [
          ['Aktiven Modifikator lesen', 'Vor Ausrüstungsauswahl und riskantem Vorstoß die Ascent-Beschreibung prüfen.'],
          ['Route und Schwierigkeit trennen', 'Das Biom beschreibt den Kontext; Ascent verändert Regeln oder Druck dieses Kontextes.'],
          ['Erholung einplanen', 'Nahrung, Kletterausrüstung und Rückzug entsprechend der tatsächlich angezeigten Strafe zurückhalten.'],
          ['Version notieren', 'Ein datierter Eintrag trennt einen aktuellen Effekt von einer alten Community-Erklärung.'],
        ],
      },
      {
        title: 'Wie die tägliche Kartenrotation die Level verändert',
        kind: 'today-map',
        paragraphs: [
          'Die schnellste Antwort auf die Frage, welches Level PEAK heute hat, steht im datierten Routeneintrag unten. Öffne ' + mapLink('die heutige PEAK-Kartenrotation') + ', um dieselben Build-Felder für Karte, Route, Biom, Reset und Quelle wie auf der täglichen Hauptseite zu sehen. Der Inhalt wird in statisches HTML geschrieben, bevor Client-JavaScript läuft.',
          'Zum Veröffentlichungszeitpunkt enthält die aktuelle Route fünf Positionen, für diesen datierten Snapshot im Spiel bestätigt. Die gepflegte Historie zeigt Roots, Alpine oder Mesa als wechselnden mittleren Kontext an verschiedenen Tagen; die aktuelle Quelle führt außerdem Caldera und The Kiln im Verzeichnis. Die Rotation ändert also den heutigen Aufstieg, nicht die Bedeutung der Begriffe.',
          'Nutze die Rotation als datierten Startpunkt und nicht als Versprechen für jede Lobby, jeden Patch oder jeden zukünftigen Reset. Vergleiche die Reihenfolge nach dem Reset mit deiner Partie und lies den aktiven Ascent-Modifikator. Die Kartenseite beantwortet, was heute aktiv ist; dieser Guide erklärt den Bezug zu Leveln und Schwierigkeit.',
        ],
      },
      {
        title: 'Vor dem Klettern ein PEAK-Level lesen',
        paragraphs: [
          'Wenn die Suche nach der Levelanzeige im PEAK-Spiel dich hierher geführt hat, hilft diese kurze Methode. PEAK wird verständlicher, wenn du Routenebene und aktive Schwierigkeit feststellst, bevor du der Partie eine Zahl gibst. Das Ziel ist keine ungeprüfte Tier-Liste, sondern eine nächste Entscheidung auf Basis der sichtbaren Informationen.',
        ],
        bullets: [
          ['Route bestätigen', 'Öffne ' + mapLink('die aktive Karte von heute') + ' und vergleiche den datierten Eintrag mit deiner bevorstehenden Partie.'],
          ['Biom benennen', 'Nutze den Namen als Geländekontext, ohne konkrete Gefahren zu erfinden.'],
          ['Ascents lesen', 'Notiere Debuff oder Einschränkung, bevor eine bekannte Route automatisch als bekannte Schwierigkeit gilt.'],
          ['Eine Entscheidung planen', 'Nächste sichere Rast, benötigte Ausrüstung und Rückzugsbedingung festlegen.'],
          ['Version prüfen', 'Bei wichtigen Beobachtungen Datum und Update-Kontext ergänzen.'],
        ],
      },
      {
        title: 'Nächste Schritte für PEAK-Fortschritt',
        paragraphs: [
          'Für konkrete Entscheidungen beim ersten Aufstieg helfen außerdem unsere [[link:peak-game-tips|PEAK-Spieletipps]] und ' + articleLink('how-to-play-peak', 'der Leitfaden für den ersten Lauf') + '.',
          'Ein zuverlässiges Modell entsteht aus aktueller Routenprüfung und stabilem Vokabular. Beginne mit ' + articleLink('what-is-peak-game', 'was PEAK ist') + ', wenn der Kern noch neu ist; vergleiche die ' + articleLink('peak-biomes-list', 'vollständige Biome-Liste') + ' bei unbekannten Namen; und öffne das ' + articleLink('peak-game-update', 'Update-Log') + ', wenn ein Patch Route oder Ascent-Kontext verändert haben könnte. Für die heutige Antwort kehrst du vor dem Aufstieg zur ' + articleLink('map-rotation', 'täglichen Kartenseite') + ' zurück.',
          'So bleibt der Guide auch bei einer neuen Route hilfreich: Der Tagesdatensatz sagt, was heute zu prüfen ist, das Biom-Verzeichnis erklärt Namen, und das Spiel bestätigt aktuellen Levelkontext und Schwierigkeitsmodifikator.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Schnelle Antworten',
      title: 'PEAK-Level-, Biom- und Schwierigkeits-FAQ',
      items: [
        ['Wie viele Level hat PEAK?', 'PEAK zeigt keine dauerhaft feste Gesamtzahl klassischer Spielerlevel. Das aktuelle Verzeichnis enthält neun benannte Biome, für diesen Snapshot im Spiel bestätigt, und der tägliche Datensatz zeigt fünf Routenpositionen, ebenfalls im Spiel bestätigt. Das sind Routen- und Umgebungsdaten, keine XP-Leiter.'],
        ['Welche Biome gibt es in PEAK?', 'Das aktuelle Verzeichnis lautet Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom und Citadel. Die Reihenfolge der Tagesroute kann wechseln. Nutze deshalb Spiel und datierten Karteneintrag statt eines festen Kalenders.'],
        ['Was ist das Ascents-Schwierigkeitssystem?', 'Ascents fügt einer Kletterpartie einen Schwierigkeitsmodifikator oder Debuff hinzu. Das Biom beschreibt den Routenrahmen, während das aktive Ascent den Druck oder die Einschränkung der Partie verändert. Lies die aktuelle Spielbeschreibung, weil Effekte durch Updates wechseln können.'],
        ['Welches Level hat PEAK heute?', 'Es gibt keine allgemeine tägliche Spielerlevel-Zahl. Öffne ' + mapLink('die aktive Karte von heute') + ' für Route und Biome-Sequenz und lies danach das Ascent im Spiel. Die Build-Karte ist eine datierte Referenz; die laufende Partie bleibt maßgeblich.'],
        ['Ist PEAK ein schwieriges Spiel?', 'Es kann fordernd sein, weil Routenlesen, Ausdauer, Ausrüstung, Erholung und Teamarbeit zusammenspielen. Die Schwierigkeit hängt auch von Ascents und Gelände ab. Für den Einstieg ist ein risikoärmerer Plan mit klarer Rückzugsregel nützlicher als eine absolute Bewertung.'],
      ],
    },
    source: {
      eyebrow: 'Quellen und Grenzen',
      title: 'So wird dieser Level-Guide gepflegt',
      body: 'Biom-Verzeichnis und datierte Routen stammen aus den von dieser Seite gepflegten PEAK-Map-Today-Builddaten; die im Spiel verwendeten Routennamen gelten als aktuelle Referenz. Die offizielle PEAK-Steamseite und Steam-News liefern allgemeinen Spiel- und Update-Kontext. UI-Texte, Ascent-Effekte, Gefahren und aktive Route hängen von der aktuellen Version ab und sollten im Spiel geprüft werden.',
      links: [
        ['Offizielle PEAK-Steamseite', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK-Map-Today-Quelle', 'https://peak.skydler.me/'],
        ['Offizieller Steam-Newsfeed', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', 'Vollständige Biome-Liste vergleichen'],
      ['map-rotation', 'Heutige PEAK-Karte prüfen'],
      ['what-is-peak-game', 'Mit was PEAK ist beginnen'],
      ['peak-game-update', 'Update-Log lesen'],
      ['peak-game-tips', 'PEAK-Spieletipps öffnen'],
    ],
    relatedLabel: 'Verwandte PEAK-Guides',
  },

  pt: {
    meta: {
      title: 'Níveis, biomas e dificuldade de PEAK: guia completo',
      description: 'Quantos níveis existem em PEAK? Entenda a ordem dos biomas, o sistema de dificuldade Ascents e como a rotação diária muda a rota de hoje.',
      schema: 'Guia baseado em fontes sobre níveis de PEAK, ordem dos biomas, sistema de dificuldade Ascents e rota diária gravada no build.',
    },
    primaryKeyword: 'níveis, biomas e dificuldade de PEAK',
    eyebrow: 'Guia de progressão - camadas da rota',
    h1: 'Níveis, biomas e dificuldade de PEAK explicados',
    intro: 'Se você quer saber como exibir o nível no jogo PEAK, comece pela rota, não por uma barra tradicional de XP. PEAK reúne três ideias: a rota de escalada, o nome do bioma e um modificador de dificuldade Ascents. Este guia responde primeiro e leva à ' + articleLink('peak-biomes-list', 'lista de biomas') + ' para os detalhes do terreno. A escalada atual tem cinco posições de rota, confirmadas dentro do jogo para este snapshot datado; os nomes e a ordem vêm dos dados de rota do build e podem mudar depois de um reset ou atualização.',
    answerLabel: 'Resposta curta',
    answer: 'PEAK não usa um total permanente de níveis do jogador para descrever progresso. O registro atual voltado ao jogo contém nove biomas nomeados, confirmados dentro do jogo para este snapshot: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. O registro diário atual mostra cinco posições de rota, também confirmadas dentro do jogo para este snapshot. Essas posições descrevem o contexto da escalada; Ascents é um modificador separado que pode acrescentar penalidades. São evidências datadas, não uma promessa de que todas as versões futuras terão a mesma estrutura.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ de níveis',
    heroImage: {
      alt: 'Ilustração editorial de uma rota de PEAK subindo por terrenos costeiro, tropical, alpino e vulcânico',
      caption: 'Ilustração editorial: a progressão de PEAK é mais clara como camadas de rota do que como um nível convencional de jogador.',
    },
    sections: [
      {
        title: 'Níveis e biomas de PEAK: o vocabulário atual da rota',
        paragraphs: [
          'Em PEAK, nível é um atalho útil para falar de uma escalada, mas pode misturar várias camadas. Um bioma é um contexto regional com nome, uma rota é a sequência apresentada pela partida e Ascents muda a pressão dessa partida. Sem uma fonte explícita, não transforme esses rótulos em uma escada de níveis de personagem.',
          'A tabela reúne os nove nomes de biomas expostos pelos dados de rota mantidos, confirmados dentro do jogo para este snapshot. É um repertório de referência: não afirma que toda partida carregará todos os nomes nem que existe uma ordem permanente. As notas ajudam a planejar; a sessão atual confirma a geometria e os perigos.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Captura de PEAK mostrando uma decisão de rota perto de um perigo do terreno',
          caption: 'Captura oficial da Steam: a rota visível na sessão é a autoridade final da escalada.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: 'Repertório atual de biomas: nove nomes confirmados dentro do jogo para este snapshot',
          headers: ['Bioma', 'Papel na rota', 'Risco a verificar', 'Primeira pergunta útil'],
          rows: [
            ['Shore', 'Contexto costeiro de abertura nos dados da rota.', 'Confira o primeiro compromisso, bordas e mudanças de altura.', 'Onde o grupo pode parar antes de gastar utilidade compartilhada?'],
            ['Tropics', 'Contexto de ilha com vegetação quando entra na rota.', 'Observe visibilidade, linhas de escalada e a saída mais segura.', 'Qual caminho mantém uma opção de recuo?'],
            ['Roots', 'Contexto orgânico ou de raízes quando aparece na sequência.', 'Procure movimentos desconfortáveis e passagens que limitam reposicionamento.', 'O grupo consegue se reunir antes do próximo trecho estreito?'],
            ['Alpine', 'Contexto de altitude ou montanha indicado pela fonte.', 'Proteja a resistência e encontre pausas confiáveis.', 'Onde fica a próxima pausa segura depois desta subida?'],
            ['Mesa', 'Contexto de platô rochoso quando aparece na sequência diária.', 'Compare a linha direta com uma rota recuperável se o plano falhar.', 'Qual caminho é mais seguro se a primeira ideia der errado?'],
            ['Caldera', 'Contexto de bacia vulcânica do vocabulário mantido.', 'Confirme calor, lava e outros perigos na versão atual.', 'Qual recurso protege a próxima decisão sem retorno?'],
            ['The Kiln', 'Nome de rota vulcânica ou avançada do repertório.', 'Não presuma um layout fixo; verifique caminho e saídas.', 'Onde está o próximo ponto de recuperação?'],
            ['Gloom', 'Contexto escuro ou de baixa visibilidade quando aparece.', 'Combine chamadas visuais e uma regra clara de retirada.', 'O que a equipe ainda consegue ver e comunicar com segurança?'],
            ['Citadel', 'Contexto estruturado e monumental perto do fim da sequência listada.', 'Diminua o ritmo nas escolhas maiores e guarde ferramentas para o avanço final.', 'O próximo movimento é progresso ou cria uma situação de resgate?'],
          ],
        },
      },
      {
        title: 'O sistema de dificuldade Ascents',
        paragraphs: [
          'Ascents deve ser entendido como um modificador de dificuldade sobre a escalada, não como um bioma extra ou outro nível do jogador. Quando um Ascent está ativo, o jogo aplica sua limitação ou penalidade à partida. Uma rota conhecida pode exigir outro plano: o bioma informa o contexto, enquanto o Ascent altera o custo do erro e o valor da recuperação.',
          'A descrição mostrada pela versão atual deve prevalecer sobre um guia antigo. Esta página não inventa uma quantidade permanente de Ascents nem uma classificação universal. Leia a seleção no jogo, registre a versão e trate abreviações da comunidade como pistas que precisam de confirmação.',
        ],
        bullets: [
          ['Leia o modificador ativo', 'Confira a descrição de Ascents antes de escolher equipamentos ou avançar com risco.'],
          ['Separe rota e dificuldade', 'O bioma descreve o contexto; o Ascent muda regras ou pressão desse contexto.'],
          ['Reserve recuperação', 'Guarde comida, utilidade de escalada e uma opção de recuo conforme a penalidade exibida.'],
          ['Registre a versão', 'Uma anotação datada separa um efeito atual de uma explicação antiga da comunidade.'],
        ],
      },
      {
        title: 'Como a rotação diária muda os níveis',
        kind: 'today-map',
        paragraphs: [
          'A resposta mais rápida para saber qual nível está ativo em PEAK hoje é o registro de rota datado abaixo. Abra ' + mapLink('a rotação do mapa de PEAK de hoje') + ' para ver os mesmos campos de mapa, rota, bioma, reset e fonte usados pela página diária principal. O conteúdo é gravado no HTML estático antes de qualquer JavaScript do cliente.',
          'Na publicação, a rota atual tem cinco posições, confirmadas dentro do jogo para este snapshot datado. O histórico mantido mostra Roots, Alpine ou Mesa como o contexto central em dias diferentes; a fonte atual também reconhece Caldera e The Kiln como nomes do repertório. A rotação muda o que você escala hoje sem mudar o significado dos termos.',
          'Use a rotação como ponto de partida com data, não como promessa para todos os lobbies, patches ou resets futuros. Depois do reset, compare a sequência com a sua partida e leia o modificador Ascents ativo. A página do mapa responde o que está ativo; este guia explica a relação com níveis e dificuldade.',
        ],
      },
      {
        title: 'Como ler um nível de PEAK antes de escalar',
        paragraphs: [
          'Se a busca sobre como exibir o nível no jogo PEAK trouxe você até aqui, use este método curto. PEAK fica mais compreensível quando você identifica a camada da rota e a dificuldade ativa antes de atribuir um número à partida. A meta não é decorar uma tier list sem fonte, mas tomar a próxima decisão com as informações na tela.',
        ],
        bullets: [
          ['Confirme a rota', 'Abra ' + mapLink('o mapa ativo de hoje') + ' e compare o registro datado com a partida que você vai jogar.'],
          ['Nomeie o bioma', 'Use o nome para preparar a leitura do terreno, sem inventar perigos específicos.'],
          ['Leia Ascents', 'Anote a penalidade ou limitação exibida antes de chamar uma rota conhecida de dificuldade conhecida.'],
          ['Planeje uma decisão', 'Escolha a próxima pausa segura, a utilidade necessária e a condição de retirada.'],
          ['Confira a versão', 'Em observações importantes, guarde a data e o contexto da atualização.'],
        ],
      },
      {
        title: 'Próximos passos para entender a progressão de PEAK',
        paragraphs: [
          'Para transformar a leitura da rota em decisões práticas, consulte também as nossas [[link:peak-game-tips|dicas de PEAK]] e ' + articleLink('how-to-play-peak', 'o guia da primeira partida') + '.',
          'Para montar um modelo confiável, combine a checagem da rota atual com um vocabulário estável. Comece por ' + articleLink('what-is-peak-game', 'o que é PEAK') + ' se o ciclo principal ainda for novo; compare a ' + articleLink('peak-biomes-list', 'lista completa de biomas') + ' quando um nome não for familiar; e abra o ' + articleLink('peak-game-update', 'registro de atualizações') + ' se um patch puder ter alterado a rota ou o contexto de Ascents. Para a resposta de hoje, volte à ' + articleLink('map-rotation', 'página do mapa diário') + ' antes de escalar.',
          'Essa separação continua útil quando a rota muda: o registro diário indica o que verificar hoje, o repertório explica os nomes e o jogo confirma o contexto atual do nível e o modificador de dificuldade.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'FAQ sobre níveis, biomas e dificuldade de PEAK',
      items: [
        ['Quantos níveis existem em PEAK?', 'PEAK não apresenta um total permanente de níveis convencionais do jogador. O repertório atual contém nove biomas nomeados, confirmados dentro do jogo para este snapshot, e o registro diário mostra cinco posições de rota, também confirmadas dentro do jogo. São dados de rota e ambiente, não uma escada de XP.'],
        ['Quais são os biomas de PEAK?', 'O repertório atual é Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. A ordem da rota diária pode mudar, então use o jogo atual e o registro datado em vez de um calendário fixo.'],
        ['O que é o sistema de dificuldade Ascents?', 'Ascents adiciona um modificador ou penalidade à escalada. Ele é separado do bioma: o bioma descreve o contexto da rota, enquanto o Ascent ativo muda a pressão ou a limitação da partida. Confira a descrição atual porque os efeitos podem mudar com as atualizações.'],
        ['Qual nível está ativo em PEAK hoje?', 'Não existe um número universal de nível do jogador para cada dia. Abra ' + mapLink('o mapa ativo de hoje') + ' para ver a rota e a sequência de biomas, depois leia o Ascent mostrado no jogo. O cartão do build é uma referência datada; a sessão atual é a autoridade final.'],
        ['PEAK é um jogo difícil?', 'Pode ser exigente porque leitura da rota, resistência, equipamentos, recuperação e trabalho em equipe interagem. A dificuldade também depende de Ascents e do terreno. Um primeiro plano com menos pressão e uma regra de recuo clara é mais útil que uma nota absoluta.'],
      ],
    },
    source: {
      eyebrow: 'Fontes e limites',
      title: 'Como este guia de níveis é mantido',
      body: 'O repertório de biomas e as rotas com data vêm dos dados de PEAK Map Today mantidos pelo site, usando os nomes de rota do jogo como referência atual. A página oficial de PEAK na Steam e o feed de notícias da Steam fornecem contexto geral do jogo e das atualizações. Textos da interface, efeitos de Ascents, perigos e rota ativa dependem da versão atual e devem ser conferidos dentro do jogo.',
      links: [
        ['Página oficial de PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Fonte do PEAK Map Today', 'https://peak.skydler.me/'],
        ['Feed oficial de notícias da Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', 'Comparar a lista completa de biomas'],
      ['map-rotation', 'Ver o mapa de PEAK de hoje'],
      ['what-is-peak-game', 'Começar por o que é PEAK'],
      ['peak-game-update', 'Ler o registro de atualizações'],
      ['peak-game-tips', 'Ver as dicas de PEAK'],
    ],
    relatedLabel: 'Guias relacionados de PEAK',
  },

  ko: {
    meta: {
      title: 'PEAK 레벨, 바이옴, 난이도 완벽 가이드',
      description: 'PEAK에는 레벨이 몇 개 있을까요? 바이옴 순서, Ascents 난이도 시스템, 매일 바뀌는 지도 로테이션을 설명합니다.',
      schema: 'PEAK 레벨과 바이옴 순서, Ascents 난이도 시스템, 빌드 시 기록되는 일일 지도 경로를 다루는 출처 기반 가이드입니다.',
    },
    primaryKeyword: 'PEAK 레벨, 바이옴, 난이도',
    eyebrow: '진행 가이드 - 경로의 층위 설명',
    h1: 'PEAK 레벨, 바이옴, 난이도 설명',
    intro: 'PEAK 게임에서 레벨을 어떻게 표시하는지 찾고 있다면 전통적인 경험치 바보다 먼저 경로를 확인하세요. PEAK에는 등반 경로, 바이옴 이름, Ascents 난이도 보정이라는 세 가지 연결된 개념이 있습니다. 이 글은 핵심 답부터 설명하고, 지형 세부 정보는 ' + articleLink('peak-biomes-list', '바이옴 목록') + '으로 연결합니다. 현재 등반은 다섯 개 경로 위치로 표시되며 이 날짜의 스냅샷에서 게임 내 확인을 마쳤습니다. 이름과 순서는 빌드 시 경로 데이터로 기록되며 리셋이나 업데이트 뒤 달라질 수 있습니다.',
    answerLabel: '짧은 답',
    answer: 'PEAK는 진행도를 설명할 때 영구적인 플레이어 레벨 총계를 사용하지 않습니다. 현재 게임 기준 경로 자료에는 아홉 개의 이름 있는 바이옴이 있으며 이 스냅샷에서 게임 내 확인되었습니다: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, Citadel입니다. 현재 일일 기록에는 다섯 개 경로 위치가 표시되며 이것도 이 스냅샷에서 게임 내 확인되었습니다. 이 위치들은 등반 환경을 나타내고, Ascents는 별도의 난이도 보정으로 디버프를 추가할 수 있습니다. 이 숫자들은 날짜가 있는 근거이며 앞으로도 모든 버전에서 같은 구조라는 뜻은 아닙니다.',
    tocLabel: '이 페이지에서',
    tocFaq: '레벨 FAQ',
    heroImage: {
      alt: '해안, 열대, 고산, 화산 지형을 지나 정상으로 오르는 PEAK 경로를 표현한 편집 일러스트',
      caption: '편집 일러스트: PEAK의 진행은 일반적인 플레이어 레벨보다 경로의 층위로 이해하는 편이 정확합니다.',
    },
    sections: [
      {
        title: 'PEAK 레벨과 바이옴: 현재 경로 용어',
        paragraphs: [
          'PEAK에서 레벨은 한 번의 등반을 간단히 부르는 말로 쓸 수 있지만 여러 개념을 섞기 쉽습니다. 바이옴은 이름이 있는 지역 환경이고, 경로는 현재 게임이 보여 주는 순서이며, Ascents는 그 게임에 걸리는 부담을 바꿉니다. 명확한 출처가 없다면 이 용어를 캐릭터 레벨 표로 바꾸어 해석하지 마세요.',
          '아래 표는 관리 중인 경로 데이터에 노출된 아홉 개 이름 있는 바이옴을 정리한 것입니다. 이 스냅샷에서 게임 내 확인을 마쳤습니다. 모든 게임이 모든 이름을 포함한다거나 영구적인 순서를 보장하는 표는 아닙니다. 지형 메모는 준비를 위한 관점이며 실제 지형과 위험은 현재 게임에서 확인해야 합니다.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: '위험한 지형 근처에서 PEAK 경로를 판단하는 플레이 화면',
          caption: 'Steam 공식 스크린샷: 현재 세션에 표시된 경로가 이번 등반의 최종 기준입니다.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: '현재 바이옴 목록: 이 스냅샷에서 게임 내 확인된 아홉 개 이름',
          headers: ['바이옴', '경로 역할', '확인할 위험', '먼저 물어볼 질문'],
          rows: [
            ['Shore', '경로 데이터의 해안 시작 환경.', '첫 번째 선택, 가장자리, 높이 변화를 확인합니다.', '공용 장비를 쓰기 전에 어디서 쉴 수 있을까요?'],
            ['Tropics', '경로에 포함될 때의 식생 섬 환경.', '시야, 등반선, 울창한 지형을 통과할 안전한 길을 읽습니다.', '후퇴 선택지를 남기는 길은 어느 쪽일까요?'],
            ['Roots', '순서에 포함될 때의 유기적 뿌리 환경.', '움직임을 어렵게 하고 재정비를 제한하는 통로를 찾습니다.', '다음 좁은 구간 전에 팀이 다시 모일 수 있을까요?'],
            ['Alpine', '출처가 보고한 고지대 또는 산악 환경.', '체력을 아끼고 노출된 지형의 안정적인 휴식처를 찾습니다.', '이 등반 뒤 다음 안전한 휴식은 어디일까요?'],
            ['Mesa', '일일 순서에 나타나는 바위 고원 환경.', '직선과 실패해도 회복할 수 있는 경로를 비교합니다.', '첫 계획이 실패하면 어느 길이 더 안전할까요?'],
            ['Caldera', '관리 중인 용어에 포함된 화산 분지 환경.', '현재 버전에서 열기, 용암 및 다른 위험을 확인합니다.', '다음 되돌릴 수 없는 선택을 지킬 자원은 무엇일까요?'],
            ['The Kiln', '목록에 있는 독립적인 후반 또는 화산 경로 이름.', '고정된 배치라고 가정하지 말고 길과 출구를 확인합니다.', '장비를 다 쓰기 전에 다음 회복 지점은 어디일까요?'],
            ['Gloom', '경로에 포함될 때의 어둡거나 시야가 낮은 환경.', '시각적 콜과 명확한 후퇴 규칙을 정합니다.', '팀이 무엇을 안정적으로 보고 전달할 수 있을까요?'],
            ['Citadel', '나열된 순서 후반의 구조적이고 장대한 환경.', '큰 선택에서 속도를 늦추고 마지막 추진을 위한 도구를 남깁니다.', '다음 행동은 전진일까요, 구조 상황을 만들까요?'],
          ],
        },
      },
      {
        title: 'Ascents 난이도 시스템',
        paragraphs: [
          'Ascents는 추가 바이옴이나 플레이어 레벨이 아니라 등반 위에 얹히는 난이도 보정입니다. Ascent가 활성화되면 게임이 그 제한이나 디버프를 현재 게임에 적용합니다. 그래서 익숙한 경로도 다른 계획을 요구할 수 있습니다. 바이옴은 환경을 알려 주고, Ascent는 실수의 대가와 회복 자원의 가치를 바꿉니다.',
          '현재 게임이 보여 주는 설명을 오래된 공략보다 우선하세요. 이 페이지는 Ascents의 영구적인 개수나 모든 버전에 적용되는 난이도 순위를 만들어 내지 않습니다. 게임 내 선택 화면을 읽고 버전을 기록하며 커뮤니티 표현은 확인이 필요한 단서로 다루세요.',
        ],
        bullets: [
          ['활성 보정 읽기', '장비나 공격적인 진행을 정하기 전에 Ascent 설명을 확인합니다.'],
          ['경로와 난이도 분리', '바이옴은 환경을 설명하고 Ascent는 그 환경의 규칙이나 부담을 바꿉니다.'],
          ['회복 수단 남기기', '실제로 표시된 패널티에 맞춰 음식, 등반 장비, 후퇴 수단을 보존합니다.'],
          ['버전 기록', '날짜가 있는 기록으로 현재 효과와 오래된 커뮤니티 설명을 구분합니다.'],
        ],
      },
      {
        title: '일일 지도 로테이션이 레벨을 바꾸는 방식',
        kind: 'today-map',
        paragraphs: [
          'PEAK가 오늘 어떤 레벨인지 묻는 가장 빠른 방법은 아래의 날짜가 있는 경로 기록을 보는 것입니다. ' + mapLink('오늘의 PEAK 지도 로테이션 확인') + '을 열면 메인 일일 지도 페이지와 같은 빌드 시 지도, 경로, 바이옴, 리셋, 출처 필드를 확인할 수 있습니다. 내용은 클라이언트 JavaScript가 실행되기 전에 정적 HTML에 기록됩니다.',
          '게시 시점의 현재 경로는 다섯 개 위치로 구성되며 이 날짜의 스냅샷에서 게임 내 확인되었습니다. 관리 중인 기록을 보면 가운데 환경은 날짜에 따라 Roots, Alpine, Mesa가 될 수 있고, 현재 출처는 Caldera와 The Kiln도 목록 이름으로 인정합니다. 로테이션은 오늘 오르는 내용을 바꾸지만 용어의 의미를 바꾸지는 않습니다.',
          '로테이션은 날짜가 있는 출발점으로 사용하고 모든 로비, 패치, 미래 리셋에서 반복된다고 생각하지 마세요. 리셋 뒤 게임의 순서와 비교하고 활성 Ascents 보정을 읽습니다. 지도 페이지는 오늘 활성화된 내용을 답하고, 이 가이드는 그것이 레벨과 난이도에 어떤 의미인지 설명합니다.',
        ],
      },
      {
        title: '등반 전에 PEAK 레벨 정보 읽기',
        paragraphs: [
          'PEAK 게임 레벨 표시 방법을 검색해 이 페이지에 왔다면 다음 짧은 방법을 사용하세요. PEAK에서는 게임에 억지로 숫자를 붙이기 전에 현재 경로 층위와 난이도를 확인하는 것이 중요합니다. 목표는 확인되지 않은 티어표를 외우는 것이 아니라 화면에 보이는 근거로 다음 결정을 내리는 것입니다.',
        ],
        bullets: [
          ['경로 확인', mapLink('오늘 활성 지도') + '를 열고 날짜가 있는 기록을 곧 시작할 게임과 비교합니다.'],
          ['바이옴 이름 확인', '이름으로 지형을 예상하되 구체적인 위험은 현재 게임에서 확인합니다.'],
          ['Ascent 읽기', '표시된 디버프나 제한을 기록하고 익숙한 길을 익숙한 난이도로 단정하지 않습니다.'],
          ['한 가지 결정 계획', '다음 안전한 휴식, 필요한 장비, 후퇴를 시작할 조건을 정합니다.'],
          ['버전 확인', '중요한 관찰에는 날짜와 업데이트 배경을 함께 기록합니다.'],
        ],
      },
      {
        title: 'PEAK 진행을 배우는 다음 단계',
        paragraphs: [
          '경로를 읽는 법을 실제 준비로 연결하려면 [[link:peak-game-tips|PEAK 게임 팁]]과 ' + articleLink('how-to-play-peak', '첫 플레이 초보자 가이드') + '도 확인하세요.',
          '신뢰할 수 있는 이해를 만들려면 현재 경로 확인과 안정적인 용어 페이지를 함께 사용하세요. 기본 흐름이 낯설다면 ' + articleLink('what-is-peak-game', 'PEAK란 무엇인가') + '부터 읽고, 이름이 익숙하지 않으면 ' + articleLink('peak-biomes-list', '전체 바이옴 목록') + '을 비교하며, 패치가 경로나 Ascent 환경을 바꿨을 수 있으면 ' + articleLink('peak-game-update', '업데이트 로그') + '를 확인합니다. 오늘의 답을 보려면 등반 전에 ' + articleLink('map-rotation', '일일 지도 페이지') + '로 돌아오세요.',
          '이렇게 나누면 경로가 바뀌어도 가이드가 유효합니다. 일일 기록은 오늘 확인할 대상을 알려 주고, 바이옴 목록은 이름을 설명하며, 게임은 현재 레벨 환경과 난이도 보정을 확정합니다.',
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK 레벨, 바이옴, 난이도 FAQ',
      items: [
        ['PEAK에는 레벨이 몇 개 있나요?', 'PEAK에는 영구적인 일반 플레이어 레벨 총계가 표시되지 않습니다. 현재 목록에는 아홉 개 이름 있는 바이옴이 있으며 이 스냅샷에서 게임 내 확인되었습니다. 현재 일일 기록은 다섯 개 경로 위치를 보여 주며 이것도 게임 내 확인되었습니다. 이는 XP 레벨 단계가 아니라 경로와 환경 정보입니다.'],
        ['PEAK의 바이옴은 무엇인가요?', '현재 이름 목록은 Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, Citadel입니다. 일일 경로의 순서는 바뀔 수 있으므로 고정 일정으로 보지 말고 현재 게임과 날짜가 있는 지도 기록을 사용하세요.'],
        ['Ascents 난이도 시스템이 무엇인가요?', 'Ascents는 등반에 난이도 보정이나 디버프를 추가합니다. 바이옴 이름과는 별개로 바이옴은 경로 환경을, 활성 Ascent는 게임에 적용되는 부담이나 제한을 설명합니다. 업데이트에 따라 효과가 달라질 수 있으니 현재 게임 설명을 확인하세요.'],
        ['오늘 PEAK는 어떤 레벨인가요?', '매일 고정된 플레이어 레벨 숫자가 있는 것은 아닙니다. ' + mapLink('오늘 활성 지도') + '에서 경로와 바이옴 순서를 확인한 뒤 게임에 표시된 Ascent를 읽으세요. 빌드 시 카드는 날짜가 있는 참고이며 현재 게임이 최종 기준입니다.'],
        ['PEAK는 어려운 게임인가요?', '경로 읽기, 체력, 장비, 회복, 팀워크가 함께 작동하기 때문에 어려울 수 있습니다. 난이도는 Ascents와 현재 지형에도 좌우됩니다. 처음에는 부담이 낮은 계획과 명확한 후퇴 규칙을 정하는 것이 절대 평가보다 유용합니다.'],
      ],
    },
    source: {
      eyebrow: '출처와 한계',
      title: '이 레벨 가이드의 유지 방식',
      body: '바이옴 목록과 날짜가 있는 경로 설명은 사이트가 관리하는 PEAK Map Today 빌드 데이터에서 가져오며 게임에서 사용하는 경로 이름을 현재 기준으로 삼습니다. PEAK 공식 Steam 페이지와 Steam 뉴스는 게임 및 업데이트의 일반적인 배경을 제공합니다. UI 문구, Ascent 효과, 위험, 활성 경로는 현재 버전에 따라 달라질 수 있으므로 게임 내에서 확인하세요.',
      links: [
        ['PEAK 공식 Steam 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Map Today 출처', 'https://peak.skydler.me/'],
        ['Steam 공식 뉴스', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', '전체 바이옴 목록 비교'],
      ['map-rotation', '오늘의 PEAK 지도 확인'],
      ['what-is-peak-game', 'PEAK란 무엇인지 먼저 보기'],
      ['peak-game-update', '업데이트 로그 읽기'],
      ['peak-game-tips', 'PEAK 게임 팁 보기'],
    ],
    relatedLabel: '관련 PEAK 가이드',
  },

  it: {
    meta: {
      title: 'Livelli, biomi e difficoltà di PEAK: guida completa',
      description: 'Quanti livelli ha PEAK? Scopri l’ordine dei biomi, il sistema di difficoltà Ascents e come la rotazione quotidiana cambia la scalata di oggi.',
      schema: 'Guida basata sulle fonti ai livelli di PEAK, all’ordine dei biomi, al sistema Ascents e al percorso giornaliero scritto durante il build.',
    },
    primaryKeyword: 'livelli, biomi e difficoltà di PEAK',
    eyebrow: 'Guida alla progressione - i livelli del percorso',
    h1: 'Livelli, biomi e difficoltà di PEAK spiegati',
    intro: 'Se stai cercando come mostrare il livello nel gioco PEAK, parti dal percorso e non da una normale barra dell’esperienza. PEAK unisce tre concetti: il percorso di arrampicata, il nome del bioma e un modificatore di difficoltà Ascents. Questa guida dà subito la risposta e rimanda alla ' + articleLink('peak-biomes-list', 'lista dei biomi') + ' per i dettagli del terreno. La scalata attuale ha cinque posizioni di percorso, confermate nel gioco per questo snapshot datato; nomi e ordine provengono dai dati del percorso al build e possono cambiare dopo un reset o un aggiornamento.',
    answerLabel: 'Risposta breve',
    answer: 'PEAK non descrive la progressione con un totale permanente di livelli del giocatore. I dati attuali del percorso rivolti al gioco contengono nove biomi con nome, confermati nel gioco per questo snapshot: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. Il record giornaliero attuale mostra cinque posizioni di percorso, anch’esse confermate nel gioco per questo snapshot. Le posizioni descrivono il contesto della scalata; Ascents è un modificatore separato che può aggiungere penalità. Sono dati con una data, non una promessa per ogni versione futura.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ sui livelli',
    heroImage: {
      alt: 'Illustrazione editoriale di un percorso di PEAK che sale tra terreno costiero, tropicale, alpino e vulcanico',
      caption: 'Illustrazione editoriale: la progressione di PEAK è più chiara come livelli del percorso che come livello convenzionale del giocatore.',
    },
    sections: [
      {
        title: 'Livelli e biomi di PEAK: il vocabolario attuale del percorso',
        paragraphs: [
          'In PEAK, livello è un modo pratico per parlare di una scalata, ma può confondere piani diversi. Un bioma è un contesto regionale con un nome, un percorso è la sequenza della partita e Ascents cambia la pressione applicata a quella partita. Senza una fonte esplicita, non trasformare queste etichette in una scala di livelli del personaggio.',
          'La tabella raccoglie i nove biomi con nome esposti dai dati di percorso mantenuti, confermati nel gioco per questo snapshot. È un repertorio di riferimento: non dice che ogni partita contiene tutti i nomi o che l’ordine sia permanente. Le note servono a preparare la prossima decisione; la sessione attuale conferma geometria e pericoli.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Schermata di PEAK con una decisione sul percorso vicino a un pericolo del terreno',
          caption: 'Schermata ufficiale Steam: il percorso visibile nella sessione è il riferimento finale della scalata.',
          width: 1200,
          height: 675,
        },
        table: {
          caption: 'Repertorio attuale dei biomi: nove nomi confermati nel gioco per questo snapshot',
          headers: ['Bioma', 'Ruolo nel percorso', 'Rischio da controllare', 'Prima domanda utile'],
          rows: [
            ['Shore', 'Contesto costiero iniziale nei dati del percorso.', 'Controlla il primo impegno, i bordi e i cambi di altezza.', 'Dove può fermarsi la squadra prima di spendere utilità condivisa?'],
            ['Tropics', 'Contesto di isola con vegetazione quando appare nel percorso.', 'Leggi visibilità, linee di salita e uscita più sicura.', 'Quale strada lascia una possibilità di ritirata?'],
            ['Roots', 'Contesto organico o di radici quando compare nella sequenza.', 'Cerca movimenti scomodi e passaggi che limitano il riposizionamento.', 'La squadra può ricompattarsi prima del prossimo tratto stretto?'],
            ['Alpine', 'Contesto elevato o montano indicato dalla fonte.', 'Proteggi la resistenza e individua pause affidabili.', 'Dove si trova la prossima pausa sicura dopo questa salita?'],
            ['Mesa', 'Contesto di altopiano roccioso quando appare nella sequenza giornaliera.', 'Confronta la linea diretta con un percorso recuperabile se il piano fallisce.', 'Quale strada resta più sicura se il primo piano non funziona?'],
            ['Caldera', 'Contesto di bacino vulcanico del vocabolario mantenuto.', 'Verifica calore, lava e altri pericoli nella versione attuale.', 'Quale risorsa protegge la prossima decisione senza ritorno?'],
            ['The Kiln', 'Nome di percorso vulcanico o avanzato del repertorio.', 'Non dare per fissa la disposizione; controlla strada e uscite.', 'Dove si trova il prossimo punto di recupero?'],
            ['Gloom', 'Contesto buio o con poca visibilità quando compare.', 'Concorda richiami visivi e una regola chiara di ritirata.', 'Che cosa la squadra riesce ancora a vedere e comunicare bene?'],
            ['Citadel', 'Contesto strutturato e monumentale verso la fine della sequenza elencata.', 'Rallenta nelle scelte importanti e conserva strumenti per lo slancio finale.', 'La prossima azione fa avanzare o crea un problema di soccorso?'],
          ],
        },
      },
      {
        title: 'Il sistema di difficoltà Ascents',
        paragraphs: [
          'Ascents è un modificatore di difficoltà applicato alla scalata, non un bioma aggiuntivo né un altro livello del giocatore. Quando un Ascent è attivo, il gioco applica il suo limite o la sua penalità alla partita. Un percorso conosciuto può quindi richiedere un piano diverso: il bioma dà il contesto, mentre l’Ascent cambia il costo dell’errore e il valore del recupero.',
          'La descrizione mostrata dal gioco attuale deve avere la precedenza su una guida vecchia. Questa pagina non inventa un numero permanente di Ascents né una classifica valida per ogni versione. Leggi la selezione in gioco, annota la versione e considera le abbreviazioni della community come indizi da verificare.',
        ],
        bullets: [
          ['Leggi il modificatore attivo', 'Controlla la descrizione di Ascents prima di scegliere l’equipaggiamento o spingere il percorso.'],
          ['Separa percorso e difficoltà', 'Il bioma descrive il contesto; l’Ascent cambia regole o pressione di quel contesto.'],
          ['Conserva il recupero', 'Tieni cibo, strumenti di salita e una ritirata in base alla penalità mostrata davvero.'],
          ['Annota la versione', 'Una nota datata distingue un effetto attuale da una spiegazione vecchia della community.'],
        ],
      },
      {
        title: 'Come la rotazione giornaliera cambia i livelli',
        kind: 'today-map',
        paragraphs: [
          'La risposta più rapida a quale livello di PEAK è attivo oggi si trova nel record del percorso datato qui sotto. Apri ' + mapLink('la rotazione della mappa PEAK di oggi') + ' per vedere gli stessi campi di mappa, percorso, bioma, reset e fonte usati dalla pagina giornaliera principale. Il contenuto viene scritto nell’HTML statico prima di qualsiasi JavaScript del client.',
          'Al momento della pubblicazione, il percorso attuale ha cinque posizioni, confermate nel gioco per questo snapshot datato. La cronologia mantenuta mostra Roots, Alpine o Mesa come contesto centrale in giorni diversi; la fonte attuale riconosce inoltre Caldera e The Kiln nel repertorio. La rotazione cambia ciò che scali oggi senza cambiare il significato dei termini.',
          'Usa la rotazione come punto di partenza con una data, non come promessa per ogni lobby, patch o reset futuro. Dopo il reset, confronta la sequenza con la partita e leggi il modificatore Ascents attivo. La pagina della mappa risponde a cosa è attivo oggi; questa guida spiega il rapporto con livelli e difficoltà.',
        ],
      },
      {
        title: 'Come leggere un livello di PEAK prima di arrampicarti',
        paragraphs: [
          'Se la ricerca su come mostrare il livello nel gioco PEAK ti ha portato qui, usa questo metodo breve. PEAK è più chiaro quando identifichi il livello del percorso e la difficoltà attiva prima di assegnare un numero alla partita. L’obiettivo non è memorizzare una tier list non verificata, ma prendere la prossima decisione con le informazioni visibili.',
        ],
        bullets: [
          ['Conferma il percorso', 'Apri ' + mapLink('la mappa attiva di oggi') + ' e confronta il record datato con la partita che stai per iniziare.'],
          ['Nomina il bioma', 'Usa il nome per preparare la lettura del terreno, senza inventare pericoli specifici.'],
          ['Leggi Ascents', 'Annota penalità o limite visibile prima di considerare un percorso noto come una difficoltà nota.'],
          ['Pianifica una decisione', 'Scegli la prossima pausa sicura, lo strumento necessario e la condizione di ritirata.'],
          ['Controlla la versione', 'Per le osservazioni importanti conserva data e contesto dell’aggiornamento.'],
        ],
      },
      {
        title: 'Prossimi passi per capire la progressione di PEAK',
        paragraphs: [
          'Per trasformare la lettura del percorso in decisioni pratiche, consulta anche i nostri [[link:peak-game-tips|consigli per PEAK]] e ' + articleLink('how-to-play-peak', 'la guida per la prima partita') + '.',
          'Per costruire un modello affidabile, combina il controllo del percorso attuale con un vocabolario stabile. Inizia da ' + articleLink('what-is-peak-game', 'che cos’è PEAK') + ' se il ciclo principale è nuovo; confronta la ' + articleLink('peak-biomes-list', 'lista completa dei biomi') + ' quando un nome non è familiare; e apri il ' + articleLink('peak-game-update', 'registro degli aggiornamenti') + ' se una patch può aver cambiato percorso o contesto di Ascents. Per la risposta di oggi, torna alla ' + articleLink('map-rotation', 'pagina della mappa giornaliera') + ' prima di scalare.',
          'Questa separazione resta utile quando il percorso cambia: il record giornaliero indica cosa verificare oggi, il repertorio spiega i nomi e il gioco conferma il contesto attuale del livello e il modificatore di difficoltà.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ su livelli, biomi e difficoltà di PEAK',
      items: [
        ['Quanti livelli ci sono in PEAK?', 'PEAK non mostra un totale permanente di livelli convenzionali del giocatore. Il repertorio attuale contiene nove biomi con nome, confermati nel gioco per questo snapshot, e il record giornaliero mostra cinque posizioni di percorso, anch’esse confermate nel gioco. Sono dati di percorso e ambiente, non una scala di esperienza.'],
        ['Quali sono i biomi di PEAK?', 'Il repertorio attuale è Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. L’ordine del percorso giornaliero può cambiare, quindi usa il gioco attuale e il record datato invece di un calendario fisso.'],
        ['Che cos’è il sistema di difficoltà Ascents?', 'Ascents aggiunge un modificatore o una penalità alla scalata. È separato dal bioma: il bioma descrive il contesto del percorso, mentre l’Ascent attivo modifica pressione o limiti della partita. Controlla la descrizione attuale perché gli effetti possono cambiare con gli aggiornamenti.'],
        ['Quale livello di PEAK è attivo oggi?', 'Non esiste un numero universale di livello del giocatore per ogni giorno. Apri ' + mapLink('la mappa attiva di oggi') + ' per vedere percorso e sequenza dei biomi, poi leggi l’Ascent mostrato dal gioco. La scheda del build è un riferimento datato; la sessione attuale resta la fonte finale.'],
        ['PEAK è un gioco difficile?', 'Può essere impegnativo perché lettura del percorso, resistenza, equipaggiamento, recupero e lavoro di squadra interagiscono. La difficoltà dipende anche da Ascents e dal terreno. Un primo piano meno rischioso con una regola chiara di ritirata è più utile di una valutazione assoluta.'],
      ],
    },
    source: {
      eyebrow: 'Fonti e limiti',
      title: 'Come viene mantenuta questa guida ai livelli',
      body: 'Il repertorio dei biomi e i percorsi datati provengono dai dati PEAK Map Today mantenuti dal sito, usando i nomi di percorso del gioco come riferimento attuale. La pagina ufficiale di PEAK su Steam e il feed di notizie Steam forniscono il contesto generale del gioco e degli aggiornamenti. Testi dell’interfaccia, effetti di Ascents, pericoli e percorso attivo dipendono dalla versione corrente e vanno controllati nel gioco.',
      links: [
        ['Pagina ufficiale di PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Fonte PEAK Map Today', 'https://peak.skydler.me/'],
        ['Feed ufficiale delle notizie Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['peak-biomes-list', 'Confronta la lista completa dei biomi'],
      ['map-rotation', 'Controlla la mappa di PEAK di oggi'],
      ['what-is-peak-game', 'Inizia da che cos’è PEAK'],
      ['peak-game-update', 'Leggi il registro degli aggiornamenti'],
      ['peak-game-tips', 'Vedi i consigli per PEAK'],
    ],
    relatedLabel: 'Guide PEAK correlate',
  },
};
