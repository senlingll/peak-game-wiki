const articleLink = (slug, label) => '[[link:' + slug + '|' + label + ']]';
const mapLink = (label) => articleLink('map-rotation#today-map', label);
const media = (src, width, height, alt, caption) => ({ src, width, height, alt, caption });

export const peakTipsTranslations = {
  zh: {
    meta: {
      title: 'PEAK 游戏技巧：攀登前必须知道的 12 件事',
      description: '刚开始玩 PEAK？这 12 条必备技巧涵盖体力、饥饿、烹饪、绳索与链条、合作生存、寒冷和路线规划，助你做好首次攀登准备。',
      schema: 'PEAK 新手技巧指南，介绍体力、饥饿、烹饪、攀登工具、寒冷、合作生存和每日地图路线。',
    },
    primaryKeyword: 'PEAK 游戏技巧',
    eyebrow: '实战指南 - 第一次攀登的决策',
    h1: 'PEAK 游戏技巧 - 活过第一次攀登',
    intro: 'PEAK 是一款可以单人或合作游玩的攀登 roguelike，目标是穿过不断变化的地形和多个生物群系环境抵达山顶。这些 PEAK 游戏技巧把第一次攀登整理成一套可执行的流程：先学会抓攀，保护体力，准备食物，说明下一步，再在出发前查看' + mapLink('今天的 PEAK 地图轮换') + '。如果你还不了解整体玩法，可以先阅读' + articleLink('what-is-peak-game', 'PEAK 是什么') + '。',
    answerLabel: '简短答案',
    answer: '想在 PEAK 走得更远，关键是只为眼前的决定消耗资源，而不是看到什么都提前投入。抓攀要有节奏，体力见底前先暂停，饥饿变成危机前先吃东西，能烹饪就不要把食物全部生吃，并按地形选择携带的路线工具。合作时要保持能互相帮助的距离，在 boost 前说明意图，也要保护 Scout 或当前能复活队友的人。寒冷和每日路线变化更奖励准备，而不是盲目加速。',
    tocLabel: '本页内容',
    tocFaq: '技巧 FAQ',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, 'PEAK 玩家在陡峭路线旁分享食物和攀登装备，并帮助队友向上移动', '编辑插图：成功攀登需要观察路线、管理食物、选择装备并与队友协作。'),
    sections: [
      {
        title: '先掌握基本操作',
        paragraphs: [
          '技巧 1 很基础，却决定了后面的所有动作：按住鼠标左键抓住可攀爬表面，在动作变成慌乱选择前松开并重新站位。短促、明确的抓攀能让你看清下一个落脚或抓握位置，也更容易控制路线。先在安全地面熟悉节奏，再去狭窄平台上临时摸索。',
          '技巧 2 和技巧 3 关注两种会悄悄结束一局的资源。体力既是移动预算，也是犯错后的恢复余量，不要为了省几秒把最后一点体力耗在没有退路的动作上。饥饿同样是规划信号：在变成紧急问题前进食，为更长的推进保留储备，并记住绕路或救援队友会让原本很短的路线变得昂贵。',
        ],
        bullets: [
          ['技巧 1 - 学会抓攀', '按住鼠标左键抓住表面，松开前先确认下一步是安全动作。'],
          ['技巧 2 - 保护体力', '在可靠地面暂停，为下一次投入或撤退保留能量。'],
          ['技巧 3 - 留意饥饿', '把食物当作路线规划的一部分，而不是最后一秒才按下的按钮。'],
        ],
      },
      {
        title: '把食物煮熟再吃',
        paragraphs: [
          '技巧 4：有安全机会时就烹饪食物。在当前游戏循环中，烹饪可以显著提高一次食物发现的价值，而把所有东西直接生吃是新手常见的浪费。具体收益可能取决于食物和当前版本，因此应该阅读游戏内说明，不要把一个固定规则套到所有材料上。',
          '烹饪也是时机选择。尽量在稳定地面上、队伍进入长距离暴露路线之前准备食物，并为返程或帮助倒地玩家留下储备。不要因为停下来做饭，就忽略眼前已经看见的危险。',
        ],
        bullets: [
          ['技巧 4 - 在难段前烹饪', '利用安全暂停提升食物价值，再把结果带进真正需要它的路线。'],
        ],
      },
      {
        title: '绳索和链条怎么选',
        paragraphs: [
          '技巧 5：把绳索和链条的区别理解为路线决策。绳索是你携带并放置的便携线路工具，可以在队伍需要延长路线或建立更安全的连接时使用。链条则是攀登过程中遇到的、安装在地形上的路线辅助。当前路线已经提供可靠线路时，优先利用链条；当出现缺口、别扭的接近角度或需要备用方案时，再保留绳索。',
          '不要只看物品名称就做选择。观察固定点在哪里、谁需要使用线路，以及第一个人滑落或路线改变后会发生什么。具体互动和物品效果可能随更新变化，所以仍要遵循当前提示；这里讲的是规划上的区别，不保证每张地图布局都一样。',
        ],
        bullets: [
          ['技巧 5 - 让线路匹配地形', '已有链条时用它完成明确的攀登，把便携绳索留给需要额外延伸或恢复的路线。'],
        ],
      },
      {
        title: '出发前做好准备',
        paragraphs: [
          '技巧 6 和技巧 7 在第一次严肃攀登前就要完成。先搜索起点附近的椰果和其他补给，再进入回头成本很高的地形。你不需要把所有东西都捡完；带上能够保护第一个目标的物资即可，然后及时出发，不要为了完美背包把体力耗在起点。',
          '背包空间和负重是取舍，不是把每个看起来有趣的物品都带上的理由。按照下一个障碍选择装备，给食物安排清楚用途，也不要让四名玩家都携带同一种狭窄用途的工具。轻量而且每个人都说得清用途的配置，更容易应对路线变化，也更容易在失误后重新补齐。',
        ],
        bullets: [
          ['技巧 6 - 收集附近补给', '先拿起点附近的椰果和有用食物，避免进入路线后才发现容易回收的补给已经在身后。'],
          ['技巧 7 - 为下一个问题装包', '在负重、食物、路线工具和恢复选项之间平衡，不要为了塞满每个格子而携带冗余物品。'],
        ],
      },
      {
        title: '和队伍一起行动',
        paragraphs: [
          '根据官方 Steam 描述，PEAK 支持单人游玩，也支持最多四人的合作攀登。合作生存最有效的状态，是整队像一个共同读取路线的单位。保持足够近的距离来分享信息和提供帮助，但不要挤在同一个危险边缘上。说清下一个集合平台，以及谁负责先测试路线。',
          '技巧 8 是让队伍在决定上保持一致，即使每个人移动速度不同。技巧 9 是有计划地使用 boost：先确认接受帮助的玩家有可用的落点或抓握点，再使用协助，不要把队友推向没人观察过的边缘。只有当 boost 带来更好的下一步时，它才真正节省时间。',
          '技巧 10 是保持恢复意识。负责侦察的 Scout 可以减少错误投入；当前 Scout 的 revive 机制也可能在满足游戏内提示后让队伍救回倒地队友。保护正在执行这个任务的玩家，说明谁负责救谁，并以当前提示为准，因为角色和效果可能在更新后改变。',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK 队友在明亮的山地路线旁协作攀登并共享装备', 'Steam 官方截图：合作推进依赖共同的路线沟通和有计划的帮助。'),
        bullets: [
          ['技巧 8 - 作为队伍移动', '说清下一个目标，并在危险路段把队友重新集合起来。'],
          ['技巧 9 - 有计划地 boost', '使用团队协助前确认落点和之后要做的动作。'],
          ['技巧 10 - 保护恢复机会', '让 Scout 或指定的救援者安全操作，其余队友负责看住路线。'],
        ],
      },
      {
        title: '留意寒冷',
        paragraphs: [
          '技巧 11：把寒冷看成路线和时间问题，而不只是状态图标。不要在暴露路段停留太久，朝当前游戏显示的可用遮蔽或较温暖区域移动，也不要为了等待效果消失而耗尽最后一点体力。“how to avoid the cold in PEAK game”这个问题最实用的答案，是进入暴露区前先规划穿越方式。',
          '如果寒冷路段可能迫使队伍放慢速度，就提前留下食物和恢复选项。物品名称、保暖效果和具体触发条件可能随版本变化，应查看当前说明，不要假定某一种消耗品永远可以抵消寒冷。队友落后时，在安全地面沟通暂停，不要让对方独自猜路线。',
        ],
        bullets: [
          ['技巧 11 - 有计划地通过寒冷路段', '先侦察暴露路线，保留穿越所需的体力，并在游戏内核对当前可用的保暖选项。'],
        ],
      },
      {
        title: '用今天的地图规划路线',
        kind: 'today-map',
        paragraphs: [
          '技巧 12：出发前先' + mapLink('查看今天的 PEAK 地图轮换') + '。每日轮换可能改变首先出现的生物群系环境和路线决策，因此昨天的装备笔记不一定适合今天的攀登。下面的构建时卡片可以作为带日期的规划信号；重置后仍要在 PEAK 中确认活动路线。',
          '地图不能代替侦察。它能告诉你大方向上要准备什么，当前游戏场景才会告诉你下一个真正的投入点、休息点、危险或救援问题在哪里。把每日笔记变成计划前，先比较日期、来源、重置状态和路线字段。',
          '这也是回答第一次攀登应该带什么的最清晰方法。先从下一个已知地形决定开始，补上能保护它的食物和恢复余量，再留一个可灵活使用的选项应对地图无法显示的信息。路线变化应该改变优先级，而不是让你放弃所有可靠习惯。',
        ],
        bullets: [
          ['技巧 12 - 离开营地前查看', '用每日路线做准备，再由实时游戏确认具体路径。'],
        ],
      },
      {
        title: '把 12 条技巧变成一次出发流程',
        paragraphs: [
          '可以把十二条技巧压缩成一个短循环：检查附近补给，选择轻量配置，约定第一个目标，并找出下一个安全暂停点。攀登时使用短促抓攀，保护体力，在 boost 发生前先沟通；当队伍已经没有明确的恢复方案时就停下来。单人也能执行这套流程，只是路线沟通和恢复检查都要自己完成。',
          '结束后记录实际发生的事情，不要只凭记忆重写路线。记下日期、当时的地图环境、真正有用的工具和造成麻烦的决定。带日期的观察比一条可能只适用于某个 seed、某个补丁或某支队伍的自信规则更有价值。',
        ],
      },
      {
        title: '接下来如何让 PEAK 跑得更稳',
        paragraphs: [
          '如果还想理解路线层级和难度，可以继续阅读[[link:peak-levels-biomes-difficulty|PEAK 关卡与难度指南]]。',
          '基本动作熟悉后，可以对照我们的' + articleLink('peak-biomes-list', '生物群系列表') + '理解路线环境，并在下一次尝试前回到' + articleLink('map-rotation', '每日地图页面') + '。如果需要更完整的入门背景，可以阅读我们的' + articleLink('how-to-play-peak', '完整新手指南') + '，并继续阅读' + articleLink('what-is-peak-game', 'PEAK 是什么') + '。',
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'PEAK 游戏技巧 FAQ',
      items: [
        ['PEAK 是一款很难的游戏吗？', 'PEAK 的难点来自攀登动作、体力、饥饿、装备、寒冷、路线判断和团队配合的相互影响。只要保护下一个安全暂停点，保留恢复选项，并根据当前地图和版本调整计划，难度就更容易管理。'],
        ['怎样才能在 PEAK 走得更远？', '使用一套可重复的小流程：收集附近补给，烹饪有价值的食物，携带匹配地形的路线工具，在体力耗尽前暂停，并说明下一次投入。在合作模式中保持能互相 boost 或救援的距离，不要独自冲在前面。'],
        ['在 PEAK 中如何避免寒冷？', '进入前先侦察寒冷或暴露路段，避免原地停留，为穿越留下体力，并使用当前游戏显示的保暖或保护选项。具体物品效果可能变化，更新后要重新查看游戏内说明。'],
        ['PEAK 应该怎么玩？', '把 PEAK 当作一个共同解决路线和资源问题的游戏。无论单人还是最多四人合作，都要读取下一段攀登，选择安全暂停点，有计划地使用食物和攀登工具，并把当前游戏场景作为对旧攻略的最终核验。'],
      ],
    },
    source: {
      eyebrow: '来源与边界',
      title: '让技巧对应当前游戏',
      body: '平台、单人/合作模式和队伍人数信息来自 PEAK 官方 Steam 页面。每日路线环境在构建时从维护中的地图记录写入。本文的建议属于实战指导；具体物品效果、寒冷行为、Scout revive 提示以及绳索和链条互动，都应在更新后回到当前游戏中核对。',
      links: [
        ['PEAK 官方 Steam 页面', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Map Today 来源', 'https://peak.skydler.me/'],
        ['Steam 官方新闻', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', '查看今天的 PEAK 地图'],
      ['what-is-peak-game', '从新手指南开始'],
      ['peak-biomes-list', '浏览生物群系资料'],
      ['peak-game-update', '查看当前更新背景'],
      ['peak-levels-biomes-difficulty', '了解关卡与难度'],
    ],
    relatedLabel: '相关 PEAK 指南',
  },

  es: {
    meta: {
      title: 'Consejos para PEAK: 12 cosas antes de escalar',
      description: '¿Eres nuevo en PEAK? Estos 12 consejos esenciales cubren resistencia, hambre, cocina, cuerdas y cadenas, supervivencia cooperativa, frío y planificación de ruta antes de tu primera escalada.',
      schema: 'Guía práctica de consejos para PEAK sobre resistencia, hambre, cocina, herramientas de escalada, frío, supervivencia cooperativa y mapa diario.',
    },
    primaryKeyword: 'consejos para el juego PEAK',
    eyebrow: 'Guía de campo - decisiones para tu primera escalada',
    h1: 'Consejos para PEAK - Sobrevive a tu primera escalada',
    intro: 'PEAK es un roguelike de escalada que puedes jugar en solitario o en cooperativo. El objetivo es alcanzar la cima atravesando terrenos cambiantes y varios contextos de bioma. Estos consejos para el juego PEAK convierten la primera escalada en una rutina manejable: aprende a agarrarte, protege la resistencia, prepara comida, comunica el siguiente movimiento y consulta el ' + mapLink('mapa de PEAK de hoy') + ' antes de salir. Para entender el ciclo completo, empieza por ' + articleLink('what-is-peak-game', 'qué es PEAK') + '.',
    answerLabel: 'Respuesta breve',
    answer: 'Para llegar más lejos en PEAK, gasta recursos en la próxima decisión y no en todas las posibilidades visibles. Usa agarres cortos, detente antes de agotar la resistencia, controla el hambre, cocina cuando sea seguro y lleva una herramienta que encaje con el terreno. En cooperativo, mantén una distancia útil, avisa antes de hacer un boost y protege al Scout o a quien pueda revivir a un compañero. El frío y la rotación diaria premian la preparación, no correr sin mirar.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas sobre consejos',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, 'Escaladores de PEAK comparten comida y equipo mientras un compañero ayuda a otro en una ruta empinada', 'Ilustración editorial: una escalada segura combina lectura de ruta, comida, equipo y coordinación.'),
    sections: [
      {
        title: 'Domina primero lo básico',
        paragraphs: [
          'El consejo 1 es sencillo pero fundamental: mantén pulsado el botón izquierdo del ratón para agarrarte a una superficie escalable y suéltalo antes de convertir el movimiento en una decisión desesperada. Los agarres breves y deliberados dejan tiempo para ver el siguiente apoyo y mantener el control. Practica el ritmo en suelo seguro antes de improvisar en una cornisa estrecha.',
          'Los consejos 2 y 3 tratan dos recursos que pueden terminar una partida sin avisar. La resistencia es tu presupuesto de movimiento y también tu margen de recuperación, así que no gastes la última reserva solo para ahorrar unos segundos. El hambre también es una señal de planificación: come antes de que sea una emergencia, guarda algo para un tramo largo y recuerda que un desvío o un rescate puede encarecer una ruta corta.',
        ],
        bullets: [
          ['Consejo 1 - Aprende a agarrarte', 'Mantén pulsado el botón izquierdo y suelta pensando ya en el siguiente movimiento seguro.'],
          ['Consejo 2 - Protege la resistencia', 'Haz una pausa en terreno fiable y guarda energía para avanzar o retroceder.'],
          ['Consejo 3 - Vigila el hambre', 'Trata la comida como parte de la ruta, no como un botón de último segundo.'],
        ],
      },
      {
        title: 'Cocina la comida',
        paragraphs: [
          'Consejo 4: cocina siempre que la situación te ofrezca un momento seguro. En el ciclo actual del juego, cocinar puede aumentar mucho el valor de un hallazgo, mientras que comer todo crudo suele desperdiciar recursos para un principiante. El beneficio exacto puede depender del objeto y de la versión, así que lee la descripción del juego en lugar de aplicar una regla fija a cada ingrediente.',
          'Cocinar también exige elegir el momento. Prepara la comida en suelo estable, antes de que el grupo entre en una sección larga y expuesta, y deja reservas para volver o ayudar a un jugador caído. No conviertas una parada para cocinar en una excusa para ignorar el peligro visible.',
        ],
        bullets: [
          ['Consejo 4 - Cocina antes del tramo difícil', 'Usa una pausa segura para mejorar la comida y llévala a la parte de la ruta que realmente la necesita.'],
        ],
      },
      {
        title: 'Cuerdas frente a cadenas',
        paragraphs: [
          'Consejo 5: entiende la diferencia entre una cuerda y una cadena como una decisión de ruta. La cuerda es la línea portátil que llevas y colocas cuando el equipo necesita ampliar o crear una conexión más segura. La cadena es una ayuda fijada al terreno que encuentras durante la escalada. Si el camino ya ofrece una línea fiable, aprovecha la cadena; guarda la cuerda para un hueco, un ángulo incómodo o un plan de respaldo.',
          'No elijas solo por el nombre del objeto. Mira dónde está el punto de anclaje, quién necesita usar la línea y qué ocurrirá si el primer jugador resbala o la ruta cambia. La interacción exacta puede cambiar con una actualización, por lo que debes seguir el aviso actual; esta es una distinción para planificar, no una promesa sobre cada mapa.',
        ],
        bullets: [
          ['Consejo 5 - Ajusta la línea al terreno', 'Usa una cadena disponible para una subida estable y reserva la cuerda portátil para extender o recuperar una ruta.'],
        ],
      },
      {
        title: 'Prepárate antes de escalar',
        paragraphs: [
          'Los consejos 6 y 7 se aplican antes de la primera subida seria. Busca cocos y otros suministros cerca del inicio antes de entrar en un terreno donde volver sea caro. No hace falta recogerlo todo: lleva lo necesario para proteger el primer objetivo y sal del campamento antes de gastar toda la resistencia buscando un inventario perfecto.',
          'El espacio y el peso de la mochila son decisiones de equilibrio, no una invitación a guardar cada objeto interesante. Elige el equipo para el siguiente obstáculo, conserva la comida con un propósito claro y evita que los cuatro jugadores lleven la misma herramienta de uso limitado. Un conjunto ligero y fácil de explicar se adapta mejor a una ruta cambiante.',
        ],
        bullets: [
          ['Consejo 6 - Reúne suministros cercanos', 'Recoge cocos y comida útil antes de que la ruta convierta el regreso sencillo en una mala idea.'],
          ['Consejo 7 - Prepara el problema siguiente', 'Equilibra peso, comida, utilidad de ruta y recuperación en vez de llenar todos los huecos.'],
        ],
      },
      {
        title: 'Juega con un equipo',
        paragraphs: [
          'Según la descripción oficial de Steam, PEAK permite jugar en solitario y cooperar con grupos de hasta cuatro personas. La supervivencia cooperativa funciona mejor cuando el grupo lee la ruta como una sola unidad. Mantente lo bastante cerca para compartir información y ayudar, pero no te amontones en el mismo borde inseguro. Anuncia la siguiente plataforma de reunión y quién va a probar el camino.',
          'El consejo 8 es mantener al equipo unido en las decisiones aunque cada jugador avance a un ritmo distinto. El consejo 9 es usar el boost con intención: confirma que el jugador que recibe la ayuda tiene un apoyo o aterrizaje útil antes de activarlo, y no lo empujes hacia un borde que nadie ha explorado. Un boost solo ahorra tiempo si crea un mejor movimiento siguiente.',
          'El consejo 10 es cuidar la recuperación. Un Scout que observa por delante puede evitar compromisos malos, y la opción de revive del Scout puede permitir recuperar a un compañero caído cuando se cumple la condición que muestra el juego. Protege a quien realiza esa tarea, di quién ayuda a quién y comprueba el aviso actual, porque los roles y efectos pueden cambiar.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Compañeros de PEAK coordinan una escalada y comparten equipo junto a una ruta montañosa luminosa', 'Captura oficial de Steam: el progreso cooperativo depende de avisos de ruta y ayuda deliberada.'),
        bullets: [
          ['Consejo 8 - Avanzad juntos', 'Anuncia el objetivo y reunid al grupo antes de una sección que pueda separaros.'],
          ['Consejo 9 - Usa el boost con un plan', 'Comprueba el aterrizaje y el movimiento posterior antes de ayudar.'],
          ['Consejo 10 - Protege la recuperación', 'Deja que el Scout o el ayudante designado opere con seguridad mientras el resto vigila la ruta.'],
        ],
      },
      {
        title: 'Vigila el frío',
        paragraphs: [
          'Consejo 11: trata el frío como un problema de ruta y tiempo, no solo como un icono de estado. Evita quedarte quieto en zonas expuestas, avanza hacia la cobertura o el área más cálida que muestre la versión actual y no gastes toda la resistencia esperando. La respuesta más útil a cómo evitar el frío en el juego PEAK es planificar el tramo expuesto antes de entrar.',
          'Conserva comida y recuperación si el frío puede obligar al grupo a ir más despacio. Los nombres de los objetos, sus efectos de calor y los umbrales exactos pueden cambiar; usa la descripción actual y no supongas que un consumible siempre cancela el frío. Si un compañero se retrasa, acordad una pausa en suelo seguro.',
        ],
        bullets: [
          ['Consejo 11 - Cruza el frío con un plan', 'Explora la sección expuesta, guarda resistencia para cruzarla y comprueba las opciones de calor en el juego.'],
        ],
      },
      {
        title: 'Planifica con el mapa de hoy',
        kind: 'today-map',
        paragraphs: [
          'Consejo 12: consulta el ' + mapLink('mapa de PEAK de hoy') + ' antes de empezar. La rotación diaria puede cambiar el bioma y las decisiones de ruta que aparecen primero, así que una nota de equipo de ayer quizá ya no sirva. Usa la tarjeta generada durante el build como señal fechada y confirma la ruta activa en PEAK después del reinicio.',
          'El mapa no sustituye la exploración. Indica qué preparar a grandes rasgos; la partida actual muestra el siguiente compromiso, descanso, peligro o problema de rescate. Antes de convertir un registro diario en un plan, compara fecha, fuente, estado del reinicio y campos de ruta.',
          'Esta es también la forma más clara de decidir qué llevar en la primera escalada. Empieza por el siguiente terreno conocido, añade comida y recuperación para protegerlo y deja una opción flexible para la información que el mapa no puede mostrar. Una ruta cambiante debe cambiar tus prioridades, no borrar tus buenos hábitos.',
        ],
        bullets: [
          ['Consejo 12 - Mira el mapa antes de salir', 'Usa la ruta diaria para prepararte y deja que el juego confirme el camino exacto.'],
        ],
      },
      {
        title: 'Convierte los 12 consejos en una rutina',
        paragraphs: [
          'Junta los doce consejos en un ciclo corto: revisa los suministros cercanos, elige una carga ligera, acuerda el primer objetivo e identifica la próxima pausa segura. Durante la subida, usa agarres cortos, protege la resistencia, anuncia los boosts y detente cuando el equipo ya no tenga una recuperación clara. La rutina también sirve en solitario; allí tú haces la llamada de ruta y la comprobación de recuperación.',
          'Al terminar, anota lo que ocurrió en lugar de reescribir la ruta de memoria. Guarda la fecha, el contexto del mapa, la herramienta que más ayudó y la decisión que causó problemas. Una observación fechada vale más que una regla segura que solo describe una semilla, un parche o un grupo.',
        ],
      },
      {
        title: 'Siguientes pasos para mejorar tus partidas',
        paragraphs: [
          'Para entender mejor las capas de la ruta y la dificultad, continúa con la [[link:peak-levels-biomes-difficulty|guía de niveles y dificultad de PEAK]].',
          'Cuando los fundamentos sean naturales, compara el contexto de la ruta con nuestra ' + articleLink('peak-biomes-list', 'lista de biomas') + ' y vuelve a la ' + articleLink('map-rotation', 'página del mapa diario') + ' antes del siguiente intento. Para una introducción más amplia, consulta ' + articleLink('how-to-play-peak', 'nuestra guía completa para principiantes') + ' y ' + articleLink('what-is-peak-game', 'aprende qué es PEAK') + '.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'Preguntas frecuentes sobre consejos para PEAK',
      items: [
        ['¿PEAK es un juego difícil?', 'PEAK puede ser exigente porque combina movimiento de escalada, resistencia, hambre, equipo, frío, lectura de ruta y trabajo en equipo. Se vuelve más manejable si proteges la próxima pausa segura, conservas una opción de recuperación y ajustas el plan al mapa y la versión actuales.'],
        ['¿Cómo puedo llegar más lejos en PEAK?', 'Repite un ciclo pequeño: reúne suministros cercanos, cocina la comida útil, lleva una herramienta adecuada al terreno, descansa antes de agotar la resistencia y comunica el siguiente compromiso. En cooperativo, mantente cerca para ayudar o revivir en vez de correr solo.'],
        ['¿Cómo evito el frío en PEAK?', 'Explora los tramos fríos o expuestos, evita quedarte quieto, guarda resistencia para cruzarlos y usa las opciones de calor o protección que muestre el juego actual. Los efectos pueden cambiar, así que vuelve a leer la descripción después de una actualización.'],
        ['¿Cómo se debería jugar PEAK?', 'Juega PEAK como un problema compartido de ruta y recursos. En solitario o con hasta cuatro jugadores, lee la siguiente subida, elige una pausa segura, gasta comida y utilidad con intención y toma la partida actual como autoridad frente a una guía antigua.'],
      ],
    },
    source: {
      eyebrow: 'Fuentes y límites',
      title: 'Mantén los consejos ligados al juego actual',
      body: 'La información sobre plataforma, juego individual/cooperativo y tamaño del grupo procede de la página oficial de PEAK en Steam. El contexto de la ruta diaria se escribe durante el build desde el registro de mapas mantenido. Estas recomendaciones son orientación práctica; comprueba en el juego actual los efectos de objetos, el frío, el revive del Scout y las interacciones de cuerdas y cadenas tras cada actualización.',
      links: [
        ['Página oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Fuente de PEAK Map Today', 'https://peak.skydler.me/'],
        ['Noticias oficiales de Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', 'Consultar el mapa de PEAK de hoy'],
      ['what-is-peak-game', 'Empezar con la guía para principiantes'],
      ['peak-biomes-list', 'Explorar la referencia de biomas'],
      ['peak-game-update', 'Revisar el contexto de las actualizaciones'],
      ['peak-levels-biomes-difficulty', 'Entender niveles y dificultad'],
    ],
    relatedLabel: 'Guías relacionadas de PEAK',
  },

  ja: {
    meta: {
      title: 'PEAK攻略：登る前に知っておきたい12のコツ',
      description: 'PEAKを始めたばかり？スタミナ、空腹、料理、ロープとチェーン、協力プレイ、寒さ、ルート計画まで、初登頂前に知りたい12の必須ポイントを紹介します。',
      schema: 'スタミナ、空腹、料理、登攀道具、寒さ、協力プレイ、デイリーマップを扱うPEAKの実践攻略。',
    },
    primaryKeyword: 'PEAK ゲームのコツ',
    eyebrow: 'フィールドガイド - 初登頂の判断',
    h1: 'PEAK攻略 - 初登頂を生き残るコツ',
    intro: 'PEAKはソロでも協力でも遊べる、登攀を中心にしたローグライクです。変化する地形と複数のバイオームを越えて頂上を目指します。この PEAK ゲームのコツでは、つかむ操作、スタミナ管理、食料の準備、次の行動の共有、出発前の' + mapLink('今日のPEAKマップ') + '確認を、最初の登攀で使える流れにまとめます。ゲーム全体の説明は' + articleLink('what-is-peak-game', 'PEAKとは何か') + 'から確認できます。',
    answerLabel: '先に結論',
    answer: 'PEAKで先へ進むには、見えている可能性すべてではなく、次の判断に必要な資源だけを使うのが基本です。短くつかみ、スタミナを使い切る前に休み、空腹が危険になる前に食べ、安全なら料理を行い、地形に合った道具を持ち込みます。協力時は助けられる距離を保ち、boostの前に声をかけ、Scoutや蘇生を担当する仲間を守りましょう。寒さと日替わりルートには速さより準備が効きます。',
    tocLabel: 'このページの内容',
    tocFaq: 'コツ FAQ',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, '急なPEAKのルートで食料と登攀道具を共有し仲間を助けるクライマー', '編集イラスト：ルートの確認、食料、道具、チームワークが登頂を支えます。'),
    sections: [
      {
        title: 'まず基本操作を覚える',
        paragraphs: [
          'コツ1は単純ですが重要です。左クリックを長押しして登れる面をつかみ、動きが焦りに変わる前に離して位置を取り直します。短く意識的につかめば、次の足場や手掛かりを確認しながら進めます。狭い足場で試す前に、安全な場所でこのリズムを練習してください。',
          'コツ2とコツ3は、気付かないうちに挑戦を終わらせる資源の管理です。スタミナは移動の予算であると同時に、失敗から戻る余裕でもあります。数秒を節約するために最後まで使い切らないようにしましょう。空腹も計画の合図です。緊急になる前に食べ、長い区間のために残し、迂回や救助で短い道も高くつくことを覚えておきます。',
        ],
        bullets: [
          ['コツ1 - つかむ操作を覚える', '左クリックを長押しし、次の安全な動きを考えてから離します。'],
          ['コツ2 - スタミナを守る', '安定した地面で休み、次の行動や撤退のための力を残します。'],
          ['コツ3 - 空腹を見る', '食料を最後の瞬間のボタンではなく、ルート計画の一部として扱います。'],
        ],
      },
      {
        title: '食料は料理して使う',
        paragraphs: [
          'コツ4は、安全に止まれるなら料理することです。現在のゲームループでは、料理によって食料を見つけた価値を大きく高められる場合があり、何でも生で食べるのは初心者がしやすい無駄です。効果はアイテムやバージョンで変わる可能性があるため、材料すべてに固定のルールを当てはめず、ゲーム内説明を確認してください。',
          '料理はタイミングも選びます。安定した場所で、長く開けた区間へ入る前に準備し、帰り道や倒れた仲間の助けに使う分を残します。料理のための停止で、目の前に見えている危険を見落とさないようにしましょう。',
        ],
        bullets: [
          ['コツ4 - 難所の前に料理する', '安全な休憩で食料の価値を高め、本当に必要な区間へ持っていきます。'],
        ],
      },
      {
        title: 'ロープとチェーンを使い分ける',
        paragraphs: [
          'コツ5では、ロープとチェーンの違いをルート判断として考えます。ロープは持ち運んで設置する携帯用のラインで、チームが接続を延長したい時や、より安全なつながりを作りたい時に使います。チェーンは登攀中に地形へ取り付けられたルート補助として現れます。道に信頼できるチェーンがあるなら活用し、隙間や難しい進入角度、予備の手段が必要な時にロープを残します。',
          '名前だけで選ばないでください。取り付け位置、誰がラインを使うか、先行者が滑った時やルートが変わった時にどうなるかを見ます。細かな挙動はアップデートで変わる可能性があるので、現在表示される操作案内を優先してください。',
        ],
        bullets: [
          ['コツ5 - 地形に合うラインを選ぶ', '既存のチェーンは決まった登りに使い、携帯ロープは延長や救助が必要な場面に残します。'],
        ],
      },
      {
        title: '登る前に準備する',
        paragraphs: [
          'コツ6とコツ7は、本格的な登りに入る前の準備です。開始地点の近くでココナッツなどの補給を探し、戻るのが難しくなる地形へ進む前に必要なものを確保します。すべてを集める必要はありません。最初の目標を守る分だけ持ち、完璧なバッグを作ろうとしてスタミナを使い切らないようにします。',
          'バッグの空きと重さは取捨選択です。次の障害に必要な道具を選び、食料の目的を決め、4人全員が同じ用途の狭い道具を持つ状態を避けます。軽く説明しやすい構成なら、ルートが変わっても対応しやすく、失敗後の補充も簡単です。',
        ],
        bullets: [
          ['コツ6 - 近くの補給を集める', '戻りやすい場所にあるココナッツや食料を、出発前に確保します。'],
          ['コツ7 - 次の問題に合わせて詰める', '重さ、食料、ルート道具、回復手段を釣り合わせ、空きを埋めるためだけに持ちません。'],
        ],
      },
      {
        title: 'チームで進む',
        paragraphs: [
          '公式Steamの説明によると、PEAKはソロに対応し、最大4人の協力プレイもできます。協力サバイバルでは、全員が一つのルートを読むチームとして動くと安定します。情報を共有して助け合える距離を保ちつつ、危険な縁に全員が重ならないようにします。次の集合場所と、先に道を試す人を声に出してください。',
          'コツ8は、移動速度が違っても判断をそろえることです。コツ9はboostを目的なしに使わないことです。助けを受ける人に足場や着地点があるか確認してから使い、誰も見ていない縁へ仲間を押し出さないようにします。次の動きが良くなる時だけ、boostは時間を節約します。',
          'コツ10は回復への意識です。先を見て動くScoutは無理な進入を減らし、現在のScoutのrevive手段は、画面の条件を満たした時に倒れた仲間を戻す助けになります。担当者を守り、誰が誰を助けるかを伝え、役割や効果は更新後に現在の表示で確認しましょう。',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, '明るい山道でPEAKの仲間が登攀を調整し道具を共有している画面', 'Steam公式スクリーンショット：協力プレイはルートの声かけと意図的な援助で進みます。'),
        bullets: [
          ['コツ8 - まとまって進む', '次の目標を伝え、分断される前にチームを集合させます。'],
          ['コツ9 - 計画してboostする', '援助する前に着地点と、その後の動きを確認します。'],
          ['コツ10 - 回復を守る', 'Scoutや担当者が安全に作業できるよう、他のメンバーがルートを見張ります。'],
        ],
      },
      {
        title: '寒さに注意する',
        paragraphs: [
          'コツ11では、寒さをステータスアイコンだけでなく、ルートと時間の問題として扱います。開けた場所で立ち止まらず、現在のゲームが示す遮蔽や暖かい場所へ進み、効果を待つためにスタミナを使い切らないでください。PEAKゲームで寒さを避ける方法を一言でいえば、露出した区間へ入る前に通り方を決めることです。',
          '寒い区間で速度が落ちる可能性があるなら、食料と回復手段を残します。アイテム名、暖める効果、正確な条件はバージョン依存なので、特定の消耗品が常に寒さを消すと決めつけず、現在の説明を読んでください。仲間が遅れたら、安全な地面で一度止まることを伝えます。',
        ],
        bullets: [
          ['コツ11 - 寒い区間を計画して越える', '露出した道を先に見て、横断分のスタミナを残し、現在の防寒手段をゲーム内で確認します。'],
        ],
      },
      {
        title: '今日のマップでルートを考える',
        kind: 'today-map',
        paragraphs: [
          'コツ12は、開始前に' + mapLink('今日のPEAKマップを確認する') + 'ことです。日替わりローテーションで、最初に出るバイオームやルート判断が変わるため、昨日の装備メモが今日の登りに合うとは限りません。下のビルド時カードを日付付きの目安にし、リセット後はPEAK内で現在のルートを確認してください。',
          'マップは偵察の代わりにはなりません。大まかな準備は示せても、次の本当の決断、休憩、危険、救助の問題は現在のセッションで確認するものです。日々の記録を計画に使う前に、日付、参照元、リセット状態、ルート欄を比べましょう。',
          '初登頂で何を持つかを決める時も同じです。次の地形に必要なものを起点に、食料と回復の余裕を足し、マップにない情報へ対応する柔軟な枠を残します。変わるルートは優先順位を変えますが、良い習慣まで捨てる必要はありません。',
        ],
        bullets: [
          ['コツ12 - 出発前に確認する', 'デイリールートで準備し、正確な道はゲーム内で確かめます。'],
        ],
      },
      {
        title: '12のコツを最初の流れにする',
        paragraphs: [
          '12個のコツは短い流れにまとめられます。近くの補給を確認し、軽い装備を選び、最初の目標と次の安全な休憩場所を決めます。登っている間は短くつかみ、スタミナを守り、boostの前に声をかけ、回復の見込みがなくなったら止まります。ソロでも同じ流れを使えますが、ルートの声かけと回復確認を自分で行います。',
          '終了後は記憶だけでルートを作り直さず、実際に起きたことを書き留めます。日付、マップの状況、役立った道具、問題を生んだ判断を記録してください。日付のある観察は、特定のシード、パッチ、チームにしか当てはまらない断定より役に立ちます。',
        ],
      },
      {
        title: '次のPEAKプレイに向けて',
        paragraphs: [
          'ルートの層と難易度も理解したい場合は、[[link:peak-levels-biomes-difficulty|PEAKのレベルと難易度ガイド]]を続けて確認してください。',
          '基本が身についたら、ルートの環境を' + articleLink('peak-biomes-list', 'バイオーム一覧') + 'で比べ、次の挑戦の前に' + articleLink('map-rotation', 'デイリーマップページ') + 'へ戻りましょう。より広い入門情報が必要なら、' + articleLink('how-to-play-peak', '初心者向けの総合ガイド') + 'を確認し、' + articleLink('what-is-peak-game', 'PEAKとは何かを読む') + 'のがおすすめです。',
        ],
      },
    ],
    faq: {
      eyebrow: 'クイック回答',
      title: 'PEAKゲームのコツ FAQ',
      items: [
        ['PEAKは難しいゲームですか？', '登攀操作、スタミナ、空腹、道具、寒さ、ルート判断、チームワークが重なるため、PEAKは難しく感じることがあります。次の安全な休憩を守り、回復手段を残し、現在のマップとバージョンに合わせれば管理しやすくなります。'],
        ['PEAKで遠くまで進むにはどうすればいいですか？', '近くの補給を集め、役立つ食料を料理し、地形に合う道具を持ち、スタミナを使い切る前に休み、次の決断を共有する短い流れを繰り返します。協力時は一人で先へ走らず、boostや救助が届く距離を保ちます。'],
        ['PEAKで寒さを避けるにはどうすればいいですか？', '寒い、または露出した区間を先に見て、立ち止まらず、横断のためのスタミナを残し、現在のゲームが示す防寒や保護手段を使います。効果は変わる可能性があるので、更新後に説明を確認してください。'],
        ['PEAKはどのように遊ぶべきですか？', 'PEAKをルートと資源を一緒に解くゲームとして遊びます。ソロでも最大4人でも、次の登りを読み、安全な休憩を決め、食料と登攀道具を意図的に使い、古い攻略より現在のセッションを優先します。'],
      ],
    },
    source: {
      eyebrow: '参照元と注意点',
      title: '現在のゲームに合わせて確認する',
      body: 'プラットフォーム、ソロ/協力プレイ、人数の情報はPEAK公式Steamページに基づきます。デイリールートの情報は、維持しているマップ記録からビルド時に書き込まれます。ここでの提案は実践的な目安であり、アイテム効果、寒さ、Scoutのrevive表示、ロープとチェーンの挙動は更新後に現在のゲームで確認してください。',
      links: [
        ['PEAK公式Steamページ', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Map Todayの参照元', 'https://peak.skydler.me/'],
        ['Steam公式ニュース', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', '今日のPEAKマップを見る'],
      ['what-is-peak-game', '初心者ガイドから始める'],
      ['peak-biomes-list', 'バイオーム資料を見る'],
      ['peak-game-update', '現在の更新背景を確認する'],
      ['peak-levels-biomes-difficulty', 'レベルと難易度を知る'],
    ],
    relatedLabel: '関連するPEAKガイド',
  },

  fr: {
    meta: {
      title: 'Astuces PEAK : 12 choses à savoir avant de grimper',
      description: 'Vous commencez PEAK ? Ces 12 conseils essentiels couvrent l’endurance, la faim, la cuisine, cordes et chaînes, la survie en coopération, le froid et la préparation d’itinéraire.',
      schema: 'Guide pratique des astuces PEAK sur l’endurance, la faim, la cuisine, les outils d’escalade, le froid, la coopération et la carte du jour.',
    },
    primaryKeyword: 'astuces pour le jeu PEAK',
    eyebrow: 'Guide de terrain - décisions pour la première ascension',
    h1: 'Astuces PEAK - Survivre à la première ascension',
    intro: 'PEAK est un roguelike d’escalade jouable seul ou en coopération. Le but est d’atteindre le sommet à travers des terrains changeants et plusieurs contextes de biome. Ces astuces pour le jeu PEAK transforment la première ascension en routine claire : apprendre à s’agripper, protéger son endurance, préparer la nourriture, annoncer le prochain mouvement et consulter la ' + mapLink('carte PEAK du jour') + ' avant de partir. Pour comprendre la boucle générale, commencez par ' + articleLink('what-is-peak-game', 'ce qu’est PEAK') + '.',
    answerLabel: 'Réponse courte',
    answer: 'Pour aller plus loin dans PEAK, dépensez les ressources pour la prochaine décision, pas pour toutes les possibilités visibles. Utilisez des prises courtes, arrêtez-vous avant de vider votre endurance, surveillez la faim, cuisinez quand la situation est sûre et prenez l’outil adapté au terrain. En coopération, restez à portée d’aide, annoncez un boost avant de l’utiliser et protégez le Scout ou le joueur qui peut ranimer un équipier. Le froid et la rotation quotidienne récompensent la préparation plutôt que la précipitation.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ des astuces',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, 'Des grimpeurs de PEAK partagent nourriture et équipement tandis qu’un équipier aide un autre sur une pente raide', 'Illustration éditoriale : une ascension réussie combine lecture de route, nourriture, équipement et coordination.'),
    sections: [
      {
        title: 'Maîtriser les bases',
        paragraphs: [
          'Astuce 1 : maintenez le bouton gauche de la souris pour vous agripper à une surface escaladable, puis relâchez et replacez-vous avant que le mouvement ne devienne une décision de panique. Des prises courtes et volontaires laissent le temps de voir le prochain appui et de garder le contrôle. Entraînez le rythme sur un sol sûr avant d’improviser sur une corniche étroite.',
          'Les astuces 2 et 3 concernent deux ressources qui peuvent terminer une partie discrètement. L’endurance est à la fois votre budget de mouvement et votre marge de récupération : ne dépensez pas la dernière réserve pour gagner quelques secondes. La faim est aussi un signal de planification : mangez avant l’urgence, gardez de quoi franchir une longue section et souvenez-vous qu’un détour ou un sauvetage rend une route courte plus coûteuse.',
        ],
        bullets: [
          ['Astuce 1 - Apprendre la prise', 'Maintenez le clic gauche, puis relâchez en ayant déjà prévu un mouvement sûr.'],
          ['Astuce 2 - Protéger l’endurance', 'Faites une pause sur un terrain fiable et gardez de l’énergie pour avancer ou reculer.'],
          ['Astuce 3 - Surveiller la faim', 'Considérez la nourriture comme une partie de la route, pas comme un bouton de dernière seconde.'],
        ],
      },
      {
        title: 'Cuisiner la nourriture',
        paragraphs: [
          'Astuce 4 : cuisinez dès que la situation offre une pause sûre. Dans la boucle actuelle, la cuisson peut augmenter fortement la valeur d’une trouvaille, tandis que tout manger cru gaspille souvent une ressource utile pour un débutant. Le bénéfice exact peut dépendre de l’objet et de la version ; lisez donc la description en jeu au lieu d’appliquer une règle permanente à chaque ingrédient.',
          'La cuisine est aussi une question de moment. Préparez la nourriture sur un sol stable avant une longue section exposée, et gardez une réserve pour le retour ou pour aider un joueur à terre. Une pause cuisine ne doit pas vous faire oublier le danger déjà visible.',
        ],
        bullets: [
          ['Astuce 4 - Cuisiner avant le passage difficile', 'Profitez d’un arrêt sûr pour améliorer la nourriture, puis emportez-la vers la section qui en a besoin.'],
        ],
      },
      {
        title: 'Cordes ou chaînes ?',
        paragraphs: [
          'Astuce 5 : faites de la différence entre corde et chaîne une décision de route. La corde est une ligne portable que vous emportez et installez lorsque l’équipe doit prolonger ou créer une connexion plus sûre. La chaîne est une aide fixée au terrain que vous rencontrez pendant l’ascension. Utilisez une chaîne quand le chemin propose déjà une ligne fiable et gardez la corde pour un vide, une approche inconfortable ou un plan de secours.',
          'Ne choisissez pas seulement selon le nom de l’objet. Observez le point d’attache, le joueur qui devra utiliser la ligne et ce qui arriverait si le premier grimpeur glissait ou si la route changeait. Les interactions précises peuvent évoluer avec les mises à jour : suivez le message actuel et prenez cette distinction comme une méthode de préparation, pas comme une promesse pour chaque carte.',
        ],
        bullets: [
          ['Astuce 5 - Adapter la ligne au terrain', 'Utilisez la chaîne disponible pour une montée établie et gardez la corde portable pour prolonger ou récupérer une route.'],
        ],
      },
      {
        title: 'Se préparer avant de grimper',
        paragraphs: [
          'Les astuces 6 et 7 interviennent avant la première montée sérieuse. Cherchez les noix de coco et autres provisions près du départ avant d’entrer dans un terrain où le retour coûte cher. Vous n’avez pas besoin de tout ramasser : prenez ce qui protège le premier objectif, puis partez au lieu d’épuiser votre endurance pour remplir un sac parfait.',
          'L’espace et le poids du sac sont des compromis, pas une raison de garder chaque objet intéressant. Choisissez l’équipement pour le prochain obstacle, donnez un rôle clair à la nourriture et évitez que les quatre joueurs portent le même outil spécialisé. Une charge légère et explicable s’adapte mieux à une route qui change et se reconstitue plus facilement après une erreur.',
        ],
        bullets: [
          ['Astuce 6 - Prendre les provisions proches', 'Ramassez les noix de coco et la nourriture utile avant que le retour facile ne disparaisse derrière vous.'],
          ['Astuce 7 - Équiper le prochain problème', 'Équilibrez poids, nourriture, utilité de route et récupération au lieu de remplir chaque emplacement.'],
        ],
      },
      {
        title: 'Jouer en équipe',
        paragraphs: [
          'Selon la description officielle de Steam, PEAK se joue seul ou en coopération jusqu’à quatre personnes. La survie en coopération fonctionne mieux quand le groupe lit la route comme une seule unité. Restez assez proches pour partager les informations et aider, sans vous agglutiner sur le même bord dangereux. Annoncez la prochaine plateforme de regroupement et le joueur qui teste le passage.',
          'L’astuce 8 consiste à garder une décision commune même si les joueurs n’avancent pas à la même vitesse. L’astuce 9 consiste à utiliser le boost avec intention : vérifiez que le joueur aidé possède un appui ou un atterrissage utile, et ne le poussez pas vers un bord que personne n’a observé. Un boost ne fait gagner du temps que s’il améliore le mouvement suivant.',
          'L’astuce 10 est de protéger la récupération. Un Scout qui regarde devant réduit les engagements hasardeux, et l’option de revive du Scout peut permettre de ramener un équipier à terre lorsque la condition affichée est remplie. Protégez la personne qui s’en charge, dites qui récupère qui et vérifiez le message actuel, car les rôles et les effets peuvent changer.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Des équipiers de PEAK coordonnent une ascension et partagent leur équipement sur une route montagneuse lumineuse', 'Capture officielle Steam : la progression en coopération dépend des appels de route et d’une aide réfléchie.'),
        bullets: [
          ['Astuce 8 - Avancer ensemble', 'Annoncez l’objectif et regroupez l’équipe avant une section qui pourrait la séparer.'],
          ['Astuce 9 - Booster avec un plan', 'Vérifiez l’atterrissage et le mouvement suivant avant d’utiliser l’aide.'],
          ['Astuce 10 - Protéger la récupération', 'Laissez le Scout ou l’aide désignée agir en sécurité pendant que les autres gardent la route.'],
        ],
      },
      {
        title: 'Surveiller le froid',
        paragraphs: [
          'Astuce 11 : traitez le froid comme un problème de route et de temps, pas seulement comme une icône. Évitez de rester immobile dans les sections exposées, avancez vers l’abri ou la zone plus chaude indiquée par le jeu actuel et ne videz pas votre endurance en attendant. La meilleure réponse à la question comment éviter le froid dans le jeu PEAK est de planifier la traversée avant d’entrer dans la zone exposée.',
          'Gardez nourriture et récupération si le froid peut ralentir l’équipe. Les noms des objets, leurs effets de chaleur et les seuils précis sont sensibles à la version : utilisez la description actuelle et ne supposez pas qu’un consommable annule toujours le froid. Si un équipier est en retard, annoncez une pause sur un sol sûr.',
        ],
        bullets: [
          ['Astuce 11 - Traverser le froid avec un plan', 'Repérez la route exposée, gardez de l’endurance pour la traversée et vérifiez les options de chaleur en jeu.'],
        ],
      },
      {
        title: 'Planifier avec la carte du jour',
        kind: 'today-map',
        paragraphs: [
          'Astuce 12 : consultez la ' + mapLink('carte PEAK du jour') + ' avant de commencer. La rotation quotidienne peut changer le biome et les décisions de route qui arrivent en premier ; la note d’équipement d’hier n’est donc pas forcément valable aujourd’hui. Utilisez la carte écrite au build comme repère daté, puis confirmez la route active dans PEAK après le reset.',
          'La carte ne remplace pas le repérage. Elle indique la préparation générale ; la session actuelle montre le prochain engagement, le repos, le danger ou le problème de sauvetage réel. Comparez la date, la source, l’état du reset et les champs de route avant de transformer une note quotidienne en plan.',
          'C’est aussi la meilleure façon de décider quoi emporter pour une première ascension. Partez du prochain terrain connu, ajoutez la nourriture et la récupération qui le protègent, puis gardez une option souple pour ce que la carte ne peut pas montrer. Une route variable doit changer vos priorités, pas vos bonnes habitudes.',
        ],
        bullets: [
          ['Astuce 12 - Vérifier avant de quitter le camp', 'Utilisez la route quotidienne pour vous préparer, puis laissez la partie confirmer le chemin exact.'],
        ],
      },
      {
        title: 'Transformer les 12 astuces en routine',
        paragraphs: [
          'Assemblez les douze astuces en une courte boucle : vérifiez les provisions proches, choisissez une charge légère, accordez-vous sur le premier objectif et repérez la prochaine pause sûre. Pendant la montée, utilisez des prises courtes, protégez l’endurance, annoncez les boosts et arrêtez-vous lorsque la récupération n’est plus claire. La routine fonctionne aussi seul, mais vous devez alors faire vous-même l’appel de route et le contrôle de récupération.',
          'Après la partie, notez ce qui s’est vraiment passé au lieu de réécrire la route de mémoire. Inscrivez la date, le contexte de la carte, l’outil qui a compté et la décision qui a posé problème. Une observation datée est plus utile qu’une règle certaine qui ne décrit qu’une graine, un patch ou une équipe.',
        ],
      },
      {
        title: 'Prochaines étapes pour de meilleures parties',
        paragraphs: [
          'Pour mieux comprendre les couches de la route et la difficulté, consultez aussi le [[link:peak-levels-biomes-difficulty|guide des niveaux et de la difficulté de PEAK]].',
          'Quand les bases deviennent naturelles, comparez le contexte avec notre ' + articleLink('peak-biomes-list', 'liste des biomes') + ' et revenez à la ' + articleLink('map-rotation', 'page de la carte quotidienne') + ' avant le prochain essai. Pour une introduction plus large, consultez ' + articleLink('how-to-play-peak', 'notre guide complet pour débutants') + ' et ' + articleLink('what-is-peak-game', 'découvrez ce qu’est PEAK') + '.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ des astuces du jeu PEAK',
      items: [
        ['PEAK est-il un jeu difficile ?', 'PEAK peut être exigeant parce que l’escalade, l’endurance, la faim, l’équipement, le froid, la lecture de route et l’équipe interagissent. Il devient plus gérable en protégeant la prochaine pause sûre, en gardant une option de récupération et en adaptant le plan à la carte et à la version actuelles.'],
        ['Comment aller plus loin dans PEAK ?', 'Répétez une petite boucle : ramassez les provisions proches, cuisinez la nourriture utile, prenez un outil adapté au terrain, faites une pause avant de vider l’endurance et annoncez le prochain engagement. En coopération, restez à portée de boost ou de récupération au lieu de partir seul.'],
        ['Comment éviter le froid dans PEAK ?', 'Repérez les sections froides ou exposées, ne restez pas immobile, gardez de l’endurance pour la traversée et utilisez les options de chaleur ou de protection affichées par le jeu actuel. Les effets changent ; relisez la description après une mise à jour.'],
        ['Comment faut-il jouer à PEAK ?', 'Jouez à PEAK comme à un problème partagé de route et de ressources. Seul ou jusqu’à quatre, lisez la prochaine montée, choisissez une pause sûre, dépensez nourriture et utilité avec intention et donnez la priorité à la session actuelle plutôt qu’à une ancienne astuce.'],
      ],
    },
    source: {
      eyebrow: 'Sources et limites',
      title: 'Relier les astuces au jeu actuel',
      body: 'Les informations de plateforme, de jeu solo ou coopératif et de taille de groupe viennent de la page Steam officielle de PEAK. Le contexte de la route quotidienne est écrit pendant le build depuis le registre de cartes maintenu. Ces recommandations sont pratiques ; vérifiez dans le jeu actuel les effets des objets, le froid, le revive du Scout et les interactions des cordes et chaînes après les mises à jour.',
      links: [
        ['Page Steam officielle de PEAK', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Source PEAK Map Today', 'https://peak.skydler.me/'],
        ['Actualités officielles Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', 'Voir la carte PEAK du jour'],
      ['what-is-peak-game', 'Commencer par le guide débutant'],
      ['peak-biomes-list', 'Parcourir la référence des biomes'],
      ['peak-game-update', 'Revoir le contexte des mises à jour'],
      ['peak-levels-biomes-difficulty', 'Comprendre niveaux et difficulté'],
    ],
    relatedLabel: 'Guides PEAK associés',
  },

  de: {
    meta: {
      title: 'PEAK-Spieletipps: 12 Dinge vor dem Aufstieg',
      description: 'Ganz neu bei PEAK? Diese 12 wichtigen Tipps behandeln Ausdauer, Hunger, Kochen, Seile und Ketten, Koop-Überleben, Kälte und Routenplanung vor deinem ersten Aufstieg.',
      schema: 'Praktischer PEAK-Tipps-Guide zu Ausdauer, Hunger, Kochen, Kletterausrüstung, Kälte, Koop-Überleben und der Tagesroute.',
    },
    primaryKeyword: 'PEAK-Spieletipps',
    eyebrow: 'Feldguide - Entscheidungen für den ersten Aufstieg',
    h1: 'PEAK-Spieletipps - Den ersten Aufstieg überleben',
    intro: 'PEAK ist ein Kletter-Roguelike für Einzelspieler oder Koop. Das Ziel ist der Gipfel, doch auf dem Weg dorthin ändern sich Gelände und Biome. Diese PEAK-Spieletipps machen den ersten Aufstieg überschaubar: Greifen lernen, Ausdauer schützen, Nahrung vorbereiten, den nächsten Schritt ansagen und vor dem Start die ' + mapLink('heutige PEAK-Karte') + ' prüfen. Die große Spielschleife erklärt unser Guide zu ' + articleLink('what-is-peak-game', 'Was ist PEAK?') + '.',
    answerLabel: 'Die kurze Antwort',
    answer: 'Wer in PEAK weiter kommen will, sollte Ressourcen für die nächste Entscheidung ausgeben, nicht für jede sichtbare Möglichkeit. Nutze kurze Griffe, pausiere vor leerer Ausdauer, behalte den Hunger im Blick, koche bei einer sicheren Gelegenheit und wähle ein Werkzeug passend zum Gelände. Im Koop bleibst du in hilfreicher Reichweite, kündigst einen Boost an und schützt den Scout oder die Person, die einen Mitspieler wiederbeleben kann. Kälte und die tägliche Route belohnen Vorbereitung statt blindes Tempo.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Tipps-FAQ',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, 'PEAK-Kletterer teilen Nahrung und Ausrüstung, während ein Teammitglied an einer steilen Route hilft', 'Redaktionelle Illustration: Ein sicherer Aufstieg verbindet Routenlesen, Nahrung, Ausrüstung und Teamarbeit.'),
    sections: [
      {
        title: 'Lerne zuerst die Grundlagen',
        paragraphs: [
          'Tipp 1 ist einfach, aber entscheidend: Halte die linke Maustaste gedrückt, um eine kletterbare Fläche zu greifen, und löse den Griff, bevor aus der Bewegung eine Panikentscheidung wird. Kurze, bewusste Griffe lassen dich den nächsten Halt sehen und die Route kontrollieren. Übe den Rhythmus auf sicherem Boden, bevor du an einer schmalen Kante improvisierst.',
          'Tipps 2 und 3 betreffen zwei Ressourcen, die einen Lauf unauffällig beenden können. Ausdauer ist dein Bewegungsbudget und zugleich deine Reserve für Fehler. Verbrauche den letzten Rest nicht, nur um ein paar Sekunden zu sparen. Hunger ist ebenfalls ein Planungssignal: Iss vor dem Notfall, spare etwas für einen langen Abschnitt und bedenke, dass ein Umweg oder eine Rettung eine kurze Route verteuern kann.',
        ],
        bullets: [
          ['Tipp 1 - Den Griff lernen', 'Halte die linke Maustaste und löse erst, wenn der nächste Schritt sicher geplant ist.'],
          ['Tipp 2 - Ausdauer schützen', 'Pausiere auf zuverlässigem Boden und bewahre Energie für den nächsten Einsatz oder Rückzug.'],
          ['Tipp 3 - Hunger beobachten', 'Behandle Nahrung als Teil der Routenplanung und nicht als Taste für den letzten Moment.'],
        ],
      },
      {
        title: 'Koche deine Nahrung',
        paragraphs: [
          'Tipp 4: Koche, sobald die Situation eine sichere Pause erlaubt. Im aktuellen Spielablauf kann Kochen den Wert eines gefundenen Lebensmittels deutlich erhöhen; alles roh zu essen ist für Anfänger häufig eine Verschwendung. Der genaue Nutzen kann vom Gegenstand und der Version abhängen. Lies deshalb die Beschreibung im Spiel, statt eine feste Regel auf jedes Lebensmittel anzuwenden.',
          'Kochen ist außerdem eine Frage des Zeitpunkts. Bereite Nahrung auf stabilem Boden vor einem langen, ungeschützten Abschnitt zu und bewahre etwas für den Rückweg oder für einen gefallenen Mitspieler auf. Eine Kochpause darf nicht dazu führen, dass du die sichtbare Gefahr vor dir ignorierst.',
        ],
        bullets: [
          ['Tipp 4 - Vor dem schwierigen Abschnitt kochen', 'Nutze einen sicheren Halt, verbessere den Wert der Nahrung und nimm sie in den Abschnitt mit, der sie braucht.'],
        ],
      },
      {
        title: 'Seile und Ketten unterscheiden',
        paragraphs: [
          'Tipp 5: Verstehe den Unterschied zwischen Seil und Kette als Routenentscheidung. Ein Seil ist eine tragbare Linie, die du mitbringst und platzierst, wenn das Team eine Verbindung verlängern oder sicherer herstellen muss. Eine Kette ist eine am Gelände befestigte Hilfe, der du beim Aufstieg begegnest. Gibt es bereits eine verlässliche Kette, nutze sie; bewahre das Seil für eine Lücke, einen schwierigen Zugang oder einen Ausweichplan auf.',
          'Entscheide nicht nur nach dem Namen. Prüfe den Befestigungspunkt, wer die Linie verwenden muss und was passiert, wenn der erste Kletterer abrutscht oder sich die Route ändert. Die genaue Interaktion kann sich mit Updates ändern. Folge daher dem aktuellen Hinweis und verstehe diese Erklärung als Planungshilfe, nicht als Zusage für jedes Kartenlayout.',
        ],
        bullets: [
          ['Tipp 5 - Die Linie an das Gelände anpassen', 'Nutze eine vorhandene Kette für den vorgesehenen Aufstieg und spare das tragbare Seil für Verlängerung oder Rettung.'],
        ],
      },
      {
        title: 'Bereite dich vor dem Klettern vor',
        paragraphs: [
          'Tipps 6 und 7 beginnen vor dem ersten ernsthaften Aufstieg. Suche in der Nähe des Starts nach Kokosnüssen und anderen Vorräten, bevor du Gelände betrittst, in dem ein Rückweg teuer wird. Du musst nicht alles sammeln: Nimm genug für das erste Ziel mit und verlasse den Startbereich, statt die Ausdauer für einen perfekten Rucksack zu verbrauchen.',
          'Rucksackplatz und Gewicht sind Abwägungen und kein Grund, jeden interessanten Gegenstand mitzunehmen. Wähle Ausrüstung für das nächste Hindernis, gib Nahrung einen klaren Zweck und vermeide, dass alle vier Spieler dasselbe Spezialwerkzeug tragen. Eine leichte, verständliche Ausrüstung lässt sich bei einer wechselnden Route besser einsetzen und nach einem Fehler leichter ersetzen.',
        ],
        bullets: [
          ['Tipp 6 - Nahe Vorräte sammeln', 'Nimm Kokosnüsse und nützliche Nahrung mit, solange der einfache Rückweg noch offen ist.'],
          ['Tipp 7 - Für das nächste Problem packen', 'Balanciere Gewicht, Nahrung, Routenwerkzeug und Erholung, statt jeden Platz zu füllen.'],
        ],
      },
      {
        title: 'Spiele im Team',
        paragraphs: [
          'Laut der offiziellen Steam-Beschreibung unterstützt PEAK Einzelspiel und Koop-Gruppen mit bis zu vier Personen. Koop-Überleben funktioniert am besten, wenn alle die Route als eine Einheit lesen. Bleibe nah genug zum Teilen von Informationen und Helfen, aber dränge dich nicht mit allen an dieselbe unsichere Kante. Sage die nächste Sammelplattform und die Person an, die den Weg testet.',
          'Tipp 8 bedeutet, Entscheidungen gemeinsam zu treffen, auch wenn Spieler unterschiedlich schnell vorankommen. Tipp 9 bedeutet, einen Boost bewusst einzusetzen: Prüfe zuerst, ob der unterstützte Spieler einen brauchbaren Halt oder Landeplatz hat, und schiebe niemanden an eine Kante, die niemand angesehen hat. Ein Boost spart nur dann Zeit, wenn er den nächsten Zug verbessert.',
          'Tipp 10 ist die Aufmerksamkeit für Erholung. Ein Scout, der vorausblickt, verhindert schlechte Festlegungen, und die aktuelle Scout-Revive-Option kann einen gefallenen Mitspieler zurückbringen, wenn die im Spiel angezeigte Bedingung erfüllt ist. Schütze die ausführende Person, sage an, wer wen rettet, und prüfe den aktuellen Hinweis, weil Rollen und Effekte nach Updates anders sein können.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK-Teammitglieder koordinieren einen Aufstieg und teilen Ausrüstung an einer hellen Bergroute', 'Offizieller Steam-Screenshot: Koop-Fortschritt braucht gemeinsame Routenansagen und gezielte Hilfe.'),
        bullets: [
          ['Tipp 8 - Als Gruppe vorgehen', 'Sage das nächste Ziel an und sammle das Team, bevor ein riskanter Abschnitt es trennt.'],
          ['Tipp 9 - Mit Plan boosten', 'Prüfe Landeplatz und Folgebewegung, bevor du die Teamhilfe einsetzt.'],
          ['Tipp 10 - Erholung schützen', 'Lass Scout oder Helfer sicher arbeiten, während die übrigen Spieler die Route sichern.'],
        ],
      },
      {
        title: 'Achte auf die Kälte',
        paragraphs: [
          'Tipp 11: Behandle Kälte als Problem von Route und Zeit und nicht nur als Statussymbol. Bleibe in ungeschützten Bereichen nicht stehen, bewege dich zur aktuell angezeigten Deckung oder wärmeren Zone und verbrauche nicht die letzte Ausdauer beim Warten. Die beste Antwort auf die Frage, wie man Kälte im PEAK-Spiel vermeidet, ist die Planung des offenen Abschnitts vor dem Betreten.',
          'Halte Nahrung und Erholung bereit, wenn die Kälte das Tempo des Teams senken kann. Gegenstandsnamen, Wärmeeffekte und genaue Auslöser sind versionsabhängig. Verlasse dich daher auf die aktuelle Beschreibung und nicht auf die Annahme, ein bestimmtes Verbrauchsobjekt hebe Kälte immer auf. Wenn ein Mitspieler zurückbleibt, vereinbart eine Pause auf sicherem Boden.',
        ],
        bullets: [
          ['Tipp 11 - Kälte mit Plan überqueren', 'Kläre den offenen Weg, spare Ausdauer für die Überquerung und prüfe aktuelle Wärmeoptionen im Spiel.'],
        ],
      },
      {
        title: 'Mit der heutigen Karte planen',
        kind: 'today-map',
        paragraphs: [
          'Tipp 12: Prüfe vor dem Start die ' + mapLink('heutige PEAK-Karte') + '. Die tägliche Rotation kann ändern, welches Biom und welche Routenentscheidung zuerst erscheint. Die Ausrüstungsnotiz von gestern passt deshalb möglicherweise nicht zum heutigen Aufstieg. Verwende die beim Build geschriebene Karte als datierten Hinweis und bestätige die aktive Route nach dem Reset in PEAK.',
          'Die Karte ersetzt keine Erkundung. Sie zeigt die grobe Vorbereitung; die aktuelle Partie zeigt den nächsten Einsatz, Rastpunkt, Gefahrenbereich oder Rettungsbedarf. Vergleiche Datum, Quelle, Reset-Status und Routenfelder, bevor du einen Tagesdatensatz in einen Plan verwandelst.',
          'So lässt sich auch die Ausrüstung für den ersten Aufstieg sinnvoll wählen. Beginne beim nächsten bekannten Gelände, ergänze Nahrung und Erholung für diesen Abschnitt und lasse eine flexible Option für Informationen frei, die die Karte nicht zeigen kann. Eine wechselnde Route soll Prioritäten ändern, nicht gute Gewohnheiten abschaffen.',
        ],
        bullets: [
          ['Tipp 12 - Vor dem Verlassen des Starts prüfen', 'Nutze die Tagesroute zur Vorbereitung und lass das Spiel den genauen Weg bestätigen.'],
        ],
      },
      {
        title: 'Die 12 Tipps als erste Routine nutzen',
        paragraphs: [
          'Fasse die zwölf Tipps zu einer kurzen Schleife zusammen: Prüfe nahe Vorräte, wähle eine leichte Ausrüstung, vereinbare das erste Ziel und finde den nächsten sicheren Halt. Beim Aufstieg nutzt du kurze Griffe, schützt die Ausdauer, kündigst Boosts an und stoppst, wenn keine klare Erholung mehr möglich ist. Die Routine funktioniert auch allein; dann übernimmst du Routenansage und Erholungsprüfung selbst.',
          'Schreibe nach dem Lauf auf, was tatsächlich passiert ist, statt die Route aus dem Gedächtnis neu zu erfinden. Notiere Datum, Kartenkontext, hilfreiches Werkzeug und die problematische Entscheidung. Eine datierte Beobachtung ist nützlicher als eine sichere Regel, die nur einen Seed, einen Patch oder ein Team beschreibt.',
        ],
      },
      {
        title: 'Nächste Schritte für bessere PEAK-Läufe',
        paragraphs: [
          'Wenn du die Routenebenen und Schwierigkeit besser einordnen willst, lies auch den [[link:peak-levels-biomes-difficulty|Guide zu PEAK-Leveln und Schwierigkeit]].',
          'Wenn die Grundlagen sitzen, vergleiche den Routen-Kontext mit unserer ' + articleLink('peak-biomes-list', 'Biome-Liste') + ' und öffne vor dem nächsten Versuch die ' + articleLink('map-rotation', 'tägliche Kartenseite') + '. Für den größeren Einstieg kannst du ' + articleLink('how-to-play-peak', 'unseren vollständigen Anfängerleitfaden') + ' lesen und ' + articleLink('what-is-peak-game', 'erfahren, was PEAK ist') + '.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Schnelle Antworten',
      title: 'FAQ zu PEAK-Spieletipps',
      items: [
        ['Ist PEAK ein schwieriges Spiel?', 'PEAK kann anspruchsvoll sein, weil Kletterbewegung, Ausdauer, Hunger, Ausrüstung, Kälte, Routenlesen und Teamarbeit zusammenspielen. Mit einem geschützten nächsten Rastpunkt, einer Erholungsoption und einem an Karte und Version angepassten Plan wird es überschaubarer.'],
        ['Wie komme ich in PEAK weiter?', 'Wiederhole eine kleine Schleife: Sammle nahe Vorräte, koche nützliche Nahrung, nimm ein passendes Routenwerkzeug mit, pausiere vor leerer Ausdauer und sprich die nächste Entscheidung ab. Im Koop bleibst du in Reichweite für Boost oder Rettung, statt allein vorauszulaufen.'],
        ['Wie vermeide ich Kälte in PEAK?', 'Erkunde kalte oder offene Abschnitte vorher, bleibe nicht stehen, spare Ausdauer für die Überquerung und nutze die Wärme- oder Schutzoptionen, die das aktuelle Spiel zeigt. Gegenstandseffekte können sich ändern; lies die Beschreibung nach Updates erneut.'],
        ['Wie sollte man PEAK spielen?', 'Spiele PEAK als gemeinsames Problem aus Route und Ressourcen. Lies allein oder mit bis zu vier Spielern den nächsten Aufstieg, wähle eine sichere Pause, setze Nahrung und Kletterausrüstung bewusst ein und vertraue der aktuellen Partie mehr als einem alten Guide.'],
      ],
    },
    source: {
      eyebrow: 'Quellen und Grenzen',
      title: 'Tipps an das aktuelle Spiel binden',
      body: 'Informationen zu Plattform, Einzel- oder Koop-Spiel und Gruppengröße stammen von der offiziellen PEAK-Steamseite. Der Kontext der Tagesroute wird beim Build aus dem gepflegten Kartenprotokoll geschrieben. Die Empfehlungen sind praktische Hinweise; Gegenstandseffekte, Kälte, Scout-Revive sowie Seil- und Ketteninteraktionen müssen nach Updates im aktuellen Spiel geprüft werden.',
      links: [
        ['Offizielle PEAK-Steamseite', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK-Map-Today-Quelle', 'https://peak.skydler.me/'],
        ['Offizielle Steam-News', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', 'Heutige PEAK-Karte ansehen'],
      ['what-is-peak-game', 'Mit dem Anfänger-Guide beginnen'],
      ['peak-biomes-list', 'Biome-Referenz durchsuchen'],
      ['peak-game-update', 'Aktuellen Update-Kontext prüfen'],
      ['peak-levels-biomes-difficulty', 'Level und Schwierigkeit verstehen'],
    ],
    relatedLabel: 'Verwandte PEAK-Guides',
  },

  pt: {
    meta: {
      title: 'Dicas de PEAK: 12 coisas antes de escalar',
      description: 'Está começando em PEAK? Estas 12 dicas essenciais cobrem resistência, fome, cozinha, cordas e correntes, sobrevivência cooperativa, frio e planejamento de rota antes da primeira subida.',
      schema: 'Guia prático de dicas para PEAK sobre resistência, fome, cozinha, ferramentas de escalada, frio, cooperação e mapa diário.',
    },
    primaryKeyword: 'dicas para o jogo PEAK',
    eyebrow: 'Guia de campo - decisões para a primeira escalada',
    h1: 'Dicas de PEAK - Sobreviva à sua primeira escalada',
    intro: 'PEAK é um roguelike de escalada que pode ser jogado sozinho ou em cooperação. O objetivo é chegar ao topo atravessando terrenos variáveis e diferentes contextos de bioma. Estas dicas para o jogo PEAK transformam a primeira escalada em uma rotina simples: aprenda a agarrar, preserve a resistência, prepare comida, avise o próximo movimento e confira o ' + mapLink('mapa de PEAK de hoje') + ' antes de sair. Para entender o ciclo completo, comece por ' + articleLink('what-is-peak-game', 'o que é PEAK') + '.',
    answerLabel: 'Resposta rápida',
    answer: 'Para chegar mais longe em PEAK, use recursos na próxima decisão e não em todas as possibilidades que aparecem. Faça agarrões curtos, pare antes de gastar toda a resistência, controle a fome, cozinhe quando houver segurança e leve uma ferramenta adequada ao terreno. No coop, mantenha uma distância que permita ajudar, avise antes de usar um boost e proteja o Scout ou quem consegue reviver um companheiro. O frio e a rotação diária favorecem preparação, não pressa sem observação.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ de dicas',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, 'Escaladores de PEAK compartilham comida e equipamento enquanto um companheiro ajuda outro em uma rota íngreme', 'Ilustração editorial: uma escalada segura combina leitura da rota, comida, equipamento e trabalho em equipe.'),
    sections: [
      {
        title: 'Domine o básico primeiro',
        paragraphs: [
          'A dica 1 é simples, mas fundamental: segure o botão esquerdo do mouse para agarrar uma superfície escalável e solte antes que o movimento vire uma decisão desesperada. Agarrões curtos e intencionais deixam você enxergar o próximo apoio e manter o controle. Treine o ritmo em um chão seguro antes de improvisar em uma borda estreita.',
          'As dicas 2 e 3 cuidam de dois recursos que podem encerrar uma tentativa sem chamar atenção. A resistência é seu orçamento de movimento e também sua margem para se recuperar de um erro; não gaste a última reserva para economizar alguns segundos. A fome também orienta o planejamento: coma antes da emergência, guarde algo para uma seção longa e lembre que um desvio ou resgate pode tornar uma rota curta muito mais cara.',
        ],
        bullets: [
          ['Dica 1 - Aprenda a agarrar', 'Segure o botão esquerdo e solte já pensando no próximo movimento seguro.'],
          ['Dica 2 - Proteja a resistência', 'Faça uma pausa em terreno confiável e guarde energia para avançar ou recuar.'],
          ['Dica 3 - Observe a fome', 'Trate a comida como parte da rota, não como um botão de última hora.'],
        ],
      },
      {
        title: 'Cozinhe a sua comida',
        paragraphs: [
          'Dica 4: cozinhe quando a situação oferecer uma parada segura. No ciclo atual do jogo, cozinhar pode aumentar bastante o valor de um alimento encontrado, enquanto comer tudo cru costuma desperdiçar recursos para quem está começando. O benefício exato pode depender do item e da versão, então leia a descrição dentro do jogo em vez de aplicar uma regra fixa a todo ingrediente.',
          'Cozinhar também é uma decisão de tempo. Prepare a comida em um local estável, antes de a equipe entrar em uma área longa e exposta, e deixe uma reserva para a volta ou para ajudar alguém derrubado. Uma parada para cozinhar não deve fazer você ignorar o perigo que já está visível.',
        ],
        bullets: [
          ['Dica 4 - Cozinhe antes do trecho difícil', 'Use uma pausa segura para melhorar o valor da comida e leve o resultado para a parte que precisa dele.'],
        ],
      },
      {
        title: 'Cordas ou correntes?',
        paragraphs: [
          'Dica 5: entenda a diferença entre corda e corrente como uma escolha de rota. A corda é uma linha portátil que você leva e instala quando a equipe precisa prolongar ou criar uma conexão mais segura. A corrente é um auxílio preso ao terreno que aparece durante a escalada. Quando o caminho já oferece uma linha confiável, aproveite a corrente; guarde a corda para uma lacuna, uma aproximação difícil ou um plano reserva.',
          'Não escolha apenas pelo nome do item. Observe o ponto de fixação, quem vai usar a linha e o que acontece se o primeiro jogador escorregar ou a rota mudar. A interação exata pode mudar com atualizações; siga o aviso atual e trate esta diferença como uma forma de planejar, não como uma promessa para todos os mapas.',
        ],
        bullets: [
          ['Dica 5 - Combine a linha com o terreno', 'Use uma corrente disponível em uma subida estabelecida e reserve a corda portátil para extensão ou recuperação.'],
        ],
      },
      {
        title: 'Prepare-se antes de escalar',
        paragraphs: [
          'As dicas 6 e 7 acontecem antes da primeira subida séria. Procure cocos e outros suprimentos perto do início antes de entrar em um terreno onde voltar custará caro. Você não precisa pegar tudo: leve o suficiente para proteger o primeiro objetivo e saia antes de gastar toda a resistência tentando montar uma mochila perfeita.',
          'Espaço e peso da mochila são escolhas de equilíbrio, não um motivo para guardar cada objeto interessante. Escolha o equipamento para o próximo obstáculo, dê uma função clara à comida e evite que os quatro jogadores carreguem a mesma ferramenta de uso limitado. Uma carga leve e fácil de explicar se adapta melhor quando a rota muda e pode ser reposta com mais facilidade após um erro.',
        ],
        bullets: [
          ['Dica 6 - Reúna suprimentos próximos', 'Pegue cocos e comida útil enquanto o retorno simples ainda está disponível.'],
          ['Dica 7 - Arrume a mochila para o próximo problema', 'Equilibre peso, comida, utilidade de rota e recuperação em vez de preencher todos os espaços.'],
        ],
      },
      {
        title: 'Jogue em equipe',
        paragraphs: [
          'Segundo a descrição oficial na Steam, PEAK permite jogar sozinho e cooperar em grupos de até quatro pessoas. A sobrevivência em cooperação funciona melhor quando todos leem a rota como uma única unidade. Fique perto o bastante para compartilhar informação e ajudar, mas não se amontoe na mesma borda perigosa. Avise qual será a próxima plataforma de encontro e quem vai testar o caminho.',
          'A dica 8 é manter as decisões alinhadas mesmo quando os jogadores avançam em ritmos diferentes. A dica 9 é usar o boost com intenção: confirme que o jogador que recebe ajuda tem um apoio ou pouso útil e não empurre ninguém para uma borda que ainda não foi observada. Um boost só economiza tempo quando melhora o próximo movimento.',
          'A dica 10 é cuidar da recuperação. Um Scout que observa à frente pode evitar compromissos ruins, e a opção de revive do Scout pode permitir trazer de volta um companheiro caído quando a condição exibida pelo jogo for atendida. Proteja quem está realizando essa tarefa, diga quem está ajudando quem e confira o aviso atual, pois funções e efeitos podem mudar.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Companheiros de PEAK coordenam uma escalada e compartilham equipamento em uma rota montanhosa iluminada', 'Captura oficial da Steam: o progresso em cooperação depende de avisos de rota e ajuda planejada.'),
        bullets: [
          ['Dica 8 - Avancem juntos', 'Anuncie o objetivo e reúna o grupo antes que uma seção arriscada o separe.'],
          ['Dica 9 - Use o boost com um plano', 'Confira o pouso e o movimento seguinte antes de usar a ajuda da equipe.'],
          ['Dica 10 - Proteja a recuperação', 'Deixe o Scout ou ajudante designado agir com segurança enquanto os outros cuidam da rota.'],
        ],
      },
      {
        title: 'Fique atento ao frio',
        paragraphs: [
          'Dica 11: trate o frio como um problema de rota e tempo, não apenas como um ícone de status. Evite ficar parado em áreas expostas, avance em direção à cobertura ou região mais quente mostrada pelo jogo atual e não gaste toda a resistência esperando. A resposta mais útil para como evitar o frio no jogo PEAK é planejar o trecho exposto antes de entrar nele.',
          'Guarde comida e recuperação se o frio puder diminuir o ritmo da equipe. Nomes de itens, efeitos de aquecimento e condições exatas dependem da versão; use a descrição atual e não presuma que um consumível sempre cancela o frio. Se um companheiro ficar para trás, combine uma pausa em terreno seguro.',
        ],
        bullets: [
          ['Dica 11 - Atravesse o frio com um plano', 'Explore o trecho exposto, reserve resistência para a travessia e confira as opções de aquecimento no jogo.'],
        ],
      },
      {
        title: 'Planeje com o mapa de hoje',
        kind: 'today-map',
        paragraphs: [
          'Dica 12: confira o ' + mapLink('mapa de PEAK de hoje') + ' antes de começar. A rotação diária pode mudar o bioma e as decisões de rota que aparecem primeiro, então a anotação de equipamento de ontem talvez não sirva para a escalada de hoje. Use o cartão escrito durante o build como um sinal com data e confirme a rota ativa em PEAK depois do reset.',
          'O mapa não substitui a exploração. Ele indica a preparação geral; a sessão atual mostra o próximo compromisso, ponto de descanso, perigo ou necessidade de resgate. Compare data, fonte, estado do reset e campos da rota antes de transformar um registro diário em plano.',
          'Esse também é o melhor modo de decidir o que levar na primeira escalada. Comece pelo próximo terreno conhecido, acrescente comida e recuperação para protegê-lo e deixe uma opção flexível para aquilo que o mapa não consegue mostrar. Uma rota variável deve mudar suas prioridades, não eliminar seus bons hábitos.',
        ],
        bullets: [
          ['Dica 12 - Confira antes de sair', 'Use a rota diária para se preparar e deixe o jogo confirmar o caminho exato.'],
        ],
      },
      {
        title: 'Transforme as 12 dicas em uma rotina',
        paragraphs: [
          'Junte as doze dicas em um ciclo curto: verifique os suprimentos próximos, escolha uma carga leve, combine o primeiro objetivo e identifique a próxima pausa segura. Durante a subida, use agarrões curtos, proteja a resistência, avise antes dos boosts e pare quando a equipe já não tiver uma recuperação clara. A rotina funciona no solo também; nesse caso, você faz a chamada da rota e a verificação de recuperação.',
          'Depois da partida, anote o que realmente aconteceu em vez de reconstruir a rota de memória. Registre a data, o contexto do mapa, a ferramenta que mais ajudou e a decisão que causou problemas. Uma observação datada vale mais do que uma regra confiante que só descreve uma seed, um patch ou uma equipe.',
        ],
      },
      {
        title: 'Próximos passos para partidas melhores',
        paragraphs: [
          'Para entender melhor as camadas da rota e a dificuldade, continue com o [[link:peak-levels-biomes-difficulty|guia de níveis e dificuldade de PEAK]].',
          'Quando os fundamentos estiverem naturais, compare o contexto da rota com a nossa ' + articleLink('peak-biomes-list', 'lista de biomas') + ' e volte à ' + articleLink('map-rotation', 'página do mapa diário') + ' antes da próxima tentativa. Para uma introdução mais ampla, consulte ' + articleLink('how-to-play-peak', 'o nosso guia completo para iniciantes') + ' e ' + articleLink('what-is-peak-game', 'entenda o que é PEAK') + '.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'FAQ sobre dicas para o jogo PEAK',
      items: [
        ['PEAK é um jogo difícil?', 'PEAK pode ser exigente porque movimento de escalada, resistência, fome, equipamento, frio, leitura da rota e trabalho em equipe se combinam. Fica mais administrável quando você protege a próxima pausa segura, guarda uma opção de recuperação e adapta o plano ao mapa e à versão atuais.'],
        ['Como consigo chegar mais longe em PEAK?', 'Repita um ciclo pequeno: reúna suprimentos próximos, cozinhe comida útil, leve uma ferramenta adequada ao terreno, descanse antes de esgotar a resistência e comunique o próximo compromisso. No coop, fique perto o suficiente para dar boost ou ajudar em vez de correr sozinho.'],
        ['Como evito o frio em PEAK?', 'Explore antes os trechos frios ou expostos, não fique parado, guarde resistência para atravessá-los e use as opções de aquecimento ou proteção mostradas pelo jogo atual. Os efeitos podem mudar, então releia a descrição depois de uma atualização.'],
        ['Como se deve jogar PEAK?', 'Jogue PEAK como um problema compartilhado de rota e recursos. Sozinho ou com até quatro pessoas, leia a próxima subida, escolha uma pausa segura, gaste comida e utilidade de forma intencional e dê prioridade à sessão atual em vez de um guia antigo.'],
      ],
    },
    source: {
      eyebrow: 'Fontes e limites',
      title: 'Mantenha as dicas ligadas ao jogo atual',
      body: 'As informações de plataforma, jogo solo/cooperativo e tamanho do grupo vêm da página oficial de PEAK na Steam. O contexto da rota diária é escrito durante o build a partir do registro de mapas mantido. Estas recomendações são orientação prática; confirme no jogo atual os efeitos dos itens, o frio, o revive do Scout e as interações de cordas e correntes depois das atualizações.',
      links: [
        ['Página oficial de PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Fonte PEAK Map Today', 'https://peak.skydler.me/'],
        ['Notícias oficiais da Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', 'Ver o mapa de PEAK de hoje'],
      ['what-is-peak-game', 'Começar pelo guia para iniciantes'],
      ['peak-biomes-list', 'Explorar a referência de biomas'],
      ['peak-game-update', 'Revisar o contexto das atualizações'],
      ['peak-levels-biomes-difficulty', 'Entender níveis e dificuldade'],
    ],
    relatedLabel: 'Guias relacionados de PEAK',
  },

  ko: {
    meta: {
      title: 'PEAK 게임 팁: 등반 전에 알아둘 12가지',
      description: 'PEAK를 처음 시작했나요? 이 12가지 핵심 팁으로 스태미나, 허기, 요리, 로프와 체인, 협동 생존, 추위와 첫 등반 전 경로 계획까지 익히세요.',
      schema: '스태미나, 허기, 요리, 등반 도구, 추위, 협동 생존, 일일 맵 경로를 다루는 PEAK 실전 팁 가이드입니다.',
    },
    primaryKeyword: 'PEAK 게임 팁',
    eyebrow: '필드 가이드 - 첫 등반을 위한 판단',
    h1: 'PEAK 게임 팁 - 첫 등반에서 살아남기',
    intro: 'PEAK는 혼자 또는 협동으로 플레이할 수 있는 등반 로그라이크입니다. 변화하는 지형과 여러 바이옴을 통과해 정상에 도달하는 것이 목표입니다. 이 PEAK 게임 팁은 첫 등반을 관리 가능한 순서로 바꿔 줍니다. 잡기 동작을 익히고, 스태미나를 아끼고, 음식을 준비하고, 다음 행동을 알리고, 출발 전에 ' + mapLink('오늘의 PEAK 맵') + '을 확인하세요. 전체 게임 흐름은 ' + articleLink('what-is-peak-game', 'PEAK가 어떤 게임인지') + '부터 읽어 보세요.',
    answerLabel: '짧은 답변',
    answer: 'PEAK에서 더 멀리 가려면 눈에 보이는 모든 가능성에 자원을 쓰지 말고 바로 다음 판단을 위해 사용하세요. 짧게 잡고, 스태미나가 바닥나기 전에 쉬고, 허기가 위급해지기 전에 먹고, 안전한 순간에 요리하고, 지형에 맞는 도구를 챙기면 됩니다. 협동에서는 서로 도울 수 있는 거리를 유지하고, boost 전에 의사를 알리며, Scout나 동료를 부활시킬 수 있는 플레이어를 지켜 주세요. 추위와 일일 경로 변화에는 무작정 빠르게 움직이는 것보다 준비가 중요합니다.',
    tocLabel: '이 페이지의 내용',
    tocFaq: '팁 FAQ',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, '가파른 PEAK 경로에서 동료를 돕고 음식과 등반 장비를 나누는 플레이어들', '편집 일러스트: 안전한 등반은 경로 파악, 음식, 장비, 팀워크가 함께 필요합니다.'),
    sections: [
      {
        title: '먼저 기본기를 익히세요',
        paragraphs: [
          '팁 1은 단순하지만 모든 움직임의 바탕입니다. 마우스 왼쪽 버튼을 길게 눌러 오를 수 있는 표면을 잡고, 움직임이 당황스러운 선택이 되기 전에 놓고 위치를 다시 잡으세요. 짧고 의도적인 잡기는 다음 손잡이나 발판을 볼 시간을 주고 경로를 통제하기 쉽게 합니다. 좁은 절벽에서 바로 시험하지 말고 안전한 땅에서 리듬을 익히세요.',
          '팁 2와 팁 3은 눈치채기 전에 한 판을 끝낼 수 있는 자원에 관한 내용입니다. 스태미나는 이동에 쓰는 예산인 동시에 실수 후 회복할 여유입니다. 몇 초를 아끼려고 마지막 분량까지 사용하지 마세요. 허기도 계획의 신호입니다. 위급해지기 전에 먹고, 긴 구간을 위해 남겨 두며, 우회나 동료 구조 때문에 짧은 경로도 비싸질 수 있다는 점을 기억하세요.',
        ],
        bullets: [
          ['팁 1 - 잡기 동작 익히기', '왼쪽 버튼을 누르고 다음 안전한 움직임을 생각한 뒤 놓으세요.'],
          ['팁 2 - 스태미나 지키기', '믿을 수 있는 지면에서 쉬고 다음 행동이나 후퇴를 위한 에너지를 남기세요.'],
          ['팁 3 - 허기 확인하기', '음식을 마지막 순간에 누르는 버튼이 아니라 경로 계획의 일부로 취급하세요.'],
        ],
      },
      {
        title: '음식은 요리해서 먹으세요',
        paragraphs: [
          '팁 4: 안전하게 멈출 수 있는 순간에는 음식을 요리하세요. 현재 게임 흐름에서는 요리가 발견한 음식의 가치를 크게 높일 수 있고, 모든 음식을 날것으로 먹는 것은 초보자에게 흔한 낭비입니다. 정확한 효과는 아이템과 버전에 따라 달라질 수 있으므로 모든 재료에 같은 규칙을 적용하지 말고 게임 내 설명을 확인하세요.',
          '요리는 타이밍을 정하는 일이기도 합니다. 안정적인 지면에서, 팀이 길고 노출된 구간에 들어가기 전에 음식을 준비하고, 돌아갈 때나 쓰러진 동료를 도울 때 쓸 분량을 남기세요. 요리 때문에 멈췄다고 해서 눈앞의 위험을 무시해서는 안 됩니다.',
        ],
        bullets: [
          ['팁 4 - 어려운 구간 전에 요리하기', '안전한 휴식 지점에서 음식의 가치를 높인 뒤 필요한 경로로 가져가세요.'],
        ],
      },
      {
        title: '로프와 체인을 구분하세요',
        paragraphs: [
          '팁 5: 로프와 체인의 차이를 경로 선택으로 이해하세요. 로프는 직접 가져와 설치하는 휴대용 연결 수단으로, 팀이 더 긴 연결을 만들거나 더 안전한 통로를 마련할 때 사용합니다. 체인은 등반 중 지형에 고정된 경로 보조물로 만납니다. 이미 믿을 만한 체인이 있는 길이라면 체인을 이용하고, 틈이나 불편한 접근 각도 또는 예비 계획이 필요할 때 로프를 남겨 두세요.',
          '아이템 이름만 보고 고르지는 마세요. 고정 지점이 어디인지, 누가 연결 수단을 사용할지, 선행 플레이어가 미끄러지거나 경로가 달라졌을 때 어떻게 되는지 살펴보세요. 세부 상호작용은 업데이트로 바뀔 수 있으니 현재 표시되는 안내를 우선하고, 이 설명은 모든 맵의 배치를 보장하는 규칙이 아니라 계획 방법으로 받아들이세요.',
        ],
        bullets: [
          ['팁 5 - 지형에 맞는 연결 수단 고르기', '정해진 등반에는 보이는 체인을 쓰고, 연장이나 구조가 필요한 곳에는 휴대용 로프를 남기세요.'],
        ],
      },
      {
        title: '등반 전에 준비하세요',
        paragraphs: [
          '팁 6과 팁 7은 첫 번째 본격적인 등반 전에 적용합니다. 돌아오기 어려운 지형으로 들어가기 전에 시작 지점 주변에서 코코넛과 다른 보급품을 찾으세요. 모든 것을 모을 필요는 없습니다. 첫 목표를 지킬 만큼만 챙기고, 완벽한 배낭을 만들겠다고 출발 지점에서 스태미나를 모두 쓰지 마세요.',
          '배낭 공간과 무게는 선택의 문제이지 흥미로운 물건을 전부 가져가야 한다는 뜻이 아닙니다. 다음 장애물에 필요한 장비를 고르고, 음식에 분명한 용도를 정하고, 네 명 모두가 같은 좁은 용도의 도구를 들지 않도록 하세요. 가볍고 용도를 설명하기 쉬운 구성은 경로가 바뀌어도 다루기 쉽고 실수 후 다시 갖추기도 편합니다.',
        ],
        bullets: [
          ['팁 6 - 가까운 보급품 모으기', '돌아오기 쉬운 동안 시작 지점 근처의 코코넛과 유용한 음식을 챙기세요.'],
          ['팁 7 - 다음 문제에 맞춰 배낭 꾸리기', '모든 칸을 채우기보다 무게, 음식, 경로 도구, 회복 수단을 균형 있게 선택하세요.'],
        ],
      },
      {
        title: '팀과 함께 플레이하세요',
        paragraphs: [
          '공식 Steam 설명에 따르면 PEAK는 혼자 플레이할 수 있고 최대 네 명이 협동할 수 있습니다. 협동 생존은 모두가 하나의 팀처럼 경로를 읽을 때 가장 안정적입니다. 정보를 나누고 도울 수 있을 만큼 가까이 움직이되, 같은 위험한 가장자리에 몰리지 마세요. 다음 집결 지점과 먼저 경로를 시험할 플레이어를 말해 두세요.',
          '팁 8은 이동 속도가 달라도 팀의 판단을 맞추는 것입니다. 팁 9는 boost를 목적 없이 쓰지 않는 것입니다. 도움을 받을 플레이어에게 실제로 쓸 수 있는 발판이나 착지 지점이 있는지 확인한 뒤 사용하고, 아무도 살펴보지 않은 가장자리로 동료를 밀어 넣지 마세요. 다음 움직임이 좋아질 때만 boost가 시간을 절약합니다.',
          '팁 10은 회복 상황을 의식하는 것입니다. 앞을 살피는 Scout는 무리한 진입을 줄여 주며, 현재 Scout revive 기능은 게임에 표시된 조건을 만족하면 쓰러진 동료를 되돌리는 데 도움이 될 수 있습니다. 그 역할을 맡은 플레이어를 보호하고 누가 누구를 구할지 말한 뒤, 역할과 효과가 업데이트로 바뀔 수 있으므로 현재 안내를 확인하세요.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, '밝은 산악 경로에서 PEAK 팀원들이 등반을 조율하고 장비를 공유하는 모습', '공식 Steam 스크린샷: 협동 진행에는 경로를 함께 알리고 신중하게 도와주는 과정이 필요합니다.'),
        bullets: [
          ['팁 8 - 함께 이동하기', '위험한 구간에서 갈라지기 전에 다음 목표를 알리고 팀을 다시 모으세요.'],
          ['팁 9 - 계획하고 boost하기', '팀 지원을 사용하기 전에 착지 지점과 다음 움직임을 확인하세요.'],
          ['팁 10 - 회복 기회 지키기', 'Scout나 지정된 구조 담당자가 안전하게 행동하도록 나머지 팀이 경로를 지켜 주세요.'],
        ],
      },
      {
        title: '추위를 살피세요',
        paragraphs: [
          '팁 11: 추위를 단순한 상태 아이콘이 아니라 경로와 시간의 문제로 생각하세요. 노출된 구간에서 가만히 서 있지 말고, 현재 게임에 표시되는 엄폐물이나 더 따뜻한 곳으로 이동하며, 효과를 기다리느라 스태미나를 다 쓰지 마세요. PEAK 게임에서 추위를 피하는 방법을 찾는다면 노출 구간에 들어가기 전에 통과 방법을 정하는 것이 가장 실용적입니다.',
          '추위 때문에 팀의 속도가 느려질 수 있다면 음식과 회복 수단을 남겨 두세요. 아이템 이름, 보온 효과, 정확한 발동 조건은 버전에 따라 달라질 수 있으므로 특정 소모품이 항상 추위를 없앤다고 가정하지 말고 현재 설명을 확인하세요. 동료가 늦어지면 안전한 지면에서 잠시 멈추자고 알리세요.',
        ],
        bullets: [
          ['팁 11 - 계획을 세워 추위 통과하기', '노출된 길을 먼저 살피고 건너는 데 필요한 스태미나를 남긴 뒤 현재 보온 수단을 확인하세요.'],
        ],
      },
      {
        title: '오늘의 맵으로 경로를 계획하세요',
        kind: 'today-map',
        paragraphs: [
          '팁 12: 시작하기 전에 ' + mapLink('오늘의 PEAK 맵을 확인') + '하세요. 일일 로테이션은 처음 만나는 바이옴과 경로 판단을 바꿀 수 있으므로 어제의 장비 메모가 오늘의 등반에 맞지 않을 수 있습니다. 아래의 빌드 시점 카드를 날짜가 있는 참고 자료로 사용하고, 리셋 후에는 PEAK 안에서 현재 경로를 확인하세요.',
          '맵이 정찰을 대신해 주지는 않습니다. 맵은 큰 방향의 준비를 알려 주고, 다음에 실제로 자원을 투입할 지점, 쉴 곳, 위험, 구조 문제는 현재 세션에서 확인해야 합니다. 일일 기록을 계획으로 바꾸기 전에 날짜, 출처, 리셋 상태, 경로 항목을 비교하세요.',
          '첫 등반에 무엇을 가져갈지 정할 때도 같은 방법을 쓰면 됩니다. 다음에 만날 지형을 기준으로 음식과 회복 여유를 더하고, 맵에 나오지 않는 정보에 대응할 유연한 자리를 남기세요. 변화하는 경로는 우선순위를 바꾸지만 좋은 습관까지 버리게 하지는 않습니다.',
        ],
        bullets: [
          ['팁 12 - 출발 전에 확인하기', '일일 경로로 준비한 다음 정확한 길은 실시간 게임에서 확인하세요.'],
        ],
      },
      {
        title: '12가지 팁을 첫 등반 루틴으로 만들기',
        paragraphs: [
          '열두 가지 팁을 짧은 순서로 묶어 보세요. 가까운 보급품을 확인하고, 가벼운 장비를 고르고, 첫 목표와 다음 안전한 휴식 지점을 정합니다. 등반 중에는 짧게 잡고, 스태미나를 지키고, boost 전에 말하고, 회복할 방법이 더 이상 분명하지 않으면 멈추세요. 혼자 플레이할 때도 같은 흐름을 쓸 수 있지만 경로 안내와 회복 확인을 직접 해야 합니다.',
          '플레이가 끝나면 기억만으로 경로를 다시 쓰지 말고 실제로 일어난 일을 적으세요. 날짜, 맵 상황, 가장 도움이 된 도구, 문제를 만든 판단을 기록하면 됩니다. 날짜가 있는 관찰은 한 번의 시드, 한 번의 패치, 한 팀에만 맞는 단정적인 규칙보다 오래 유용합니다.',
        ],
      },
      {
        title: '더 나은 PEAK 플레이를 위한 다음 단계',
        paragraphs: [
          '경로의 층위와 난이도를 더 잘 이해하려면 [[link:peak-levels-biomes-difficulty|PEAK 레벨 및 난이도 가이드]]도 이어서 읽어 보세요.',
          '기본기가 익숙해지면 ' + articleLink('peak-biomes-list', '바이옴 목록') + '에서 경로 환경을 비교하고 다음 시도 전에 ' + articleLink('map-rotation', '일일 맵 페이지') + '로 돌아오세요. 더 넓은 입문 설명이 필요하다면 ' + articleLink('how-to-play-peak', '전체 초보자 가이드') + '를 읽고 ' + articleLink('what-is-peak-game', 'PEAK가 어떤 게임인지 알아보세요') + '.',
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK 게임 팁 FAQ',
      items: [
        ['PEAK는 어려운 게임인가요?', '등반 움직임, 스태미나, 허기, 장비, 추위, 경로 파악, 팀워크가 함께 작동하기 때문에 PEAK는 어렵게 느껴질 수 있습니다. 다음 안전한 휴식 지점을 지키고 회복 수단을 남기며 현재 맵과 버전에 맞춰 계획을 바꾸면 관리하기 쉬워집니다.'],
        ['PEAK에서 더 멀리 가려면 어떻게 해야 하나요?', '가까운 보급품을 모으고, 쓸모 있는 음식을 요리하고, 지형에 맞는 경로 도구를 가져가고, 스태미나가 바닥나기 전에 쉬고, 다음 행동을 알리는 짧은 흐름을 반복하세요. 협동에서는 혼자 앞서 달리지 말고 boost나 구조를 할 수 있는 거리를 유지하세요.'],
        ['PEAK에서 추위를 피하려면 어떻게 해야 하나요?', '차갑거나 노출된 구간을 먼저 살피고, 멈춰 서지 말고, 건너는 데 필요한 스태미나를 남기며, 현재 게임에 표시되는 보온 또는 보호 수단을 사용하세요. 아이템 효과는 바뀔 수 있으므로 업데이트 후 설명을 다시 확인하세요.'],
        ['PEAK는 어떻게 플레이해야 하나요?', 'PEAK를 경로와 자원을 함께 해결하는 게임으로 플레이하세요. 혼자 또는 최대 네 명으로 등반할 때 다음 지형을 읽고, 안전한 휴식을 정하고, 음식과 등반 도구를 의도적으로 사용하며, 오래된 공략보다 현재 세션을 우선하면 됩니다.'],
      ],
    },
    source: {
      eyebrow: '출처와 한계',
      title: '현재 게임에 맞춰 팁 확인하기',
      body: '플랫폼, 싱글/협동 플레이, 팀 규모 정보는 PEAK 공식 Steam 페이지에서 가져왔습니다. 일일 경로 정보는 유지 중인 맵 기록을 빌드 시점에 작성합니다. 이 글의 내용은 실전 조언이며, 아이템 효과, 추위, Scout revive 안내, 로프와 체인 상호작용은 업데이트 후 현재 게임에서 확인해야 합니다.',
      links: [
        ['PEAK 공식 Steam 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['PEAK Map Today 출처', 'https://peak.skydler.me/'],
        ['Steam 공식 뉴스', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', '오늘의 PEAK 맵 보기'],
      ['what-is-peak-game', '초보자 가이드로 시작하기'],
      ['peak-biomes-list', '바이옴 자료 둘러보기'],
      ['peak-game-update', '현재 업데이트 배경 확인하기'],
      ['peak-levels-biomes-difficulty', '레벨과 난이도 이해하기'],
    ],
    relatedLabel: '관련 PEAK 가이드',
  },

  it: {
    meta: {
      title: 'Consigli PEAK: 12 cose prima di arrampicarsi',
      description: 'Hai appena iniziato PEAK? Questi 12 consigli essenziali spiegano resistenza, fame, cucina, corde e catene, sopravvivenza cooperativa, freddo e pianificazione del percorso.',
      schema: 'Guida pratica ai consigli per PEAK su resistenza, fame, cucina, strumenti di arrampicata, freddo, cooperazione e mappa giornaliera.',
    },
    primaryKeyword: 'consigli per il gioco PEAK',
    eyebrow: 'Guida sul campo - decisioni per la prima scalata',
    h1: 'Consigli PEAK - Sopravvivere alla prima scalata',
    intro: 'PEAK è un roguelike di arrampicata giocabile da soli o in cooperativa. L’obiettivo è raggiungere la cima attraversando terreni variabili e diversi contesti di bioma. Questi consigli per il gioco PEAK trasformano la prima scalata in una routine gestibile: impara ad afferrare, proteggi la resistenza, prepara il cibo, comunica la prossima mossa e controlla la ' + mapLink('mappa PEAK di oggi') + ' prima di partire. Per capire il ciclo generale, comincia da ' + articleLink('what-is-peak-game', 'che cos’è PEAK') + '.',
    answerLabel: 'Risposta breve',
    answer: 'Per arrivare più lontano in PEAK, usa le risorse per la decisione successiva e non per ogni possibilità visibile. Fai prese brevi, fermati prima di esaurire la resistenza, controlla la fame, cucina quando è sicuro e porta uno strumento adatto al terreno. In cooperativa resta abbastanza vicino per aiutare, annuncia il boost prima di usarlo e proteggi lo Scout o chi può rianimare un compagno. Il freddo e la rotazione giornaliera premiano la preparazione più della velocità senza osservazione.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ dei consigli',
    heroImage: media('/media/peak-game-tips.webp', 1024, 576, 'Scalatori di PEAK condividono cibo e attrezzatura mentre un compagno aiuta un altro su un percorso ripido', 'Illustrazione editoriale: una scalata sicura unisce lettura del percorso, cibo, equipaggiamento e collaborazione.'),
    sections: [
      {
        title: 'Impara prima le basi',
        paragraphs: [
          'Il consiglio 1 è semplice ma fondamentale: tieni premuto il tasto sinistro del mouse per afferrare una superficie scalabile, poi lascia la presa e riposizionati prima che il movimento diventi una scelta dettata dal panico. Prese brevi e deliberate ti permettono di vedere il prossimo appiglio e mantenere il controllo. Prova il ritmo su terreno sicuro prima di improvvisare su una sporgenza stretta.',
          'I consigli 2 e 3 riguardano due risorse che possono chiudere una partita senza farsi notare. La resistenza è il tuo budget di movimento e anche il margine per recuperare da un errore: non consumare l’ultima riserva solo per risparmiare qualche secondo. Anche la fame è un segnale di pianificazione: mangia prima dell’emergenza, conserva qualcosa per un tratto lungo e ricorda che una deviazione o un salvataggio può rendere costoso un percorso breve.',
        ],
        bullets: [
          ['Consiglio 1 - Imparare la presa', 'Tieni premuto il tasto sinistro e lascia la presa solo dopo aver previsto il prossimo movimento sicuro.'],
          ['Consiglio 2 - Proteggere la resistenza', 'Fermati su un terreno affidabile e conserva energia per il prossimo impegno o per la ritirata.'],
          ['Consiglio 3 - Controllare la fame', 'Tratta il cibo come parte del percorso, non come un pulsante dell’ultimo secondo.'],
        ],
      },
      {
        title: 'Cuoci il cibo',
        paragraphs: [
          'Consiglio 4: cucina quando la situazione offre una pausa sicura. Nel ciclo di gioco attuale, la cottura può aumentare molto il valore di un alimento trovato, mentre mangiare tutto crudo è uno spreco comune per chi è alle prime armi. Il beneficio preciso può dipendere dall’oggetto e dalla versione, quindi leggi la descrizione in gioco invece di applicare una regola fissa a ogni ingrediente.',
          'Cucinare è anche una scelta di tempo. Prepara il cibo su un terreno stabile, prima che la squadra entri in una sezione lunga ed esposta, e lascia una scorta per il ritorno o per aiutare un compagno a terra. Una sosta per cucinare non deve farti ignorare il pericolo già visibile.',
        ],
        bullets: [
          ['Consiglio 4 - Cucinare prima del tratto difficile', 'Usa una pausa sicura per aumentare il valore del cibo e portalo nella sezione che ne ha bisogno.'],
        ],
      },
      {
        title: 'Corde o catene?',
        paragraphs: [
          'Consiglio 5: interpreta la differenza tra corda e catena come una scelta di percorso. La corda è una linea portatile che porti e installi quando la squadra deve prolungare o creare un collegamento più sicuro. La catena è un aiuto fissato al terreno che incontri durante la scalata. Se il percorso offre già una linea affidabile, usa la catena; conserva la corda per un vuoto, un accesso scomodo o un piano di riserva.',
          'Non scegliere guardando solo il nome dell’oggetto. Osserva il punto di fissaggio, chi dovrà usare la linea e cosa succede se il primo giocatore scivola o il percorso cambia. L’interazione precisa può cambiare con gli aggiornamenti: segui l’indicazione attuale e considera questa differenza un metodo di preparazione, non una promessa valida per ogni mappa.',
        ],
        bullets: [
          ['Consiglio 5 - Adattare la linea al terreno', 'Usa una catena disponibile per una salita già definita e conserva la corda portatile per estendere o recuperare il percorso.'],
        ],
      },
      {
        title: 'Preparati prima di arrampicarti',
        paragraphs: [
          'I consigli 6 e 7 valgono prima della prima salita seria. Cerca noci di cocco e altre scorte vicino alla partenza, prima di entrare in un terreno dove tornare indietro costa caro. Non devi raccogliere tutto: prendi abbastanza per proteggere il primo obiettivo e parti invece di consumare tutta la resistenza per costruire uno zaino perfetto.',
          'Lo spazio e il peso dello zaino sono compromessi, non un motivo per conservare ogni oggetto interessante. Scegli l’equipaggiamento per il prossimo ostacolo, assegna uno scopo chiaro al cibo ed evita che tutti e quattro portino lo stesso strumento specializzato. Un carico leggero e facile da spiegare si adatta meglio a un percorso variabile e si ricostruisce più facilmente dopo un errore.',
        ],
        bullets: [
          ['Consiglio 6 - Raccogliere le scorte vicine', 'Prendi noci di cocco e cibo utile finché il ritorno semplice è ancora possibile.'],
          ['Consiglio 7 - Preparare il problema successivo', 'Bilancia peso, cibo, utilità di percorso e recupero invece di riempire ogni spazio.'],
        ],
      },
      {
        title: 'Gioca in squadra',
        paragraphs: [
          'Secondo la descrizione ufficiale di Steam, PEAK permette di giocare da soli e in cooperativa con gruppi fino a quattro persone. La sopravvivenza cooperativa funziona meglio quando il gruppo legge il percorso come un’unica unità. Resta abbastanza vicino per condividere informazioni e aiutare, ma non ammassarti sullo stesso bordo pericoloso. Comunica la prossima piattaforma di ritrovo e chi proverà il passaggio.',
          'Il consiglio 8 è mantenere una decisione comune anche quando i giocatori avanzano a velocità diverse. Il consiglio 9 è usare il boost con intenzione: verifica che il giocatore aiutato abbia un appoggio o un atterraggio utile e non spingerlo verso un bordo che nessuno ha controllato. Un boost fa risparmiare tempo solo se migliora il movimento successivo.',
          'Il consiglio 10 è proteggere il recupero. Uno Scout che guarda avanti può evitare impegni sbagliati, mentre l’opzione di revive dello Scout può permettere di riportare in gioco un compagno a terra quando viene soddisfatta la condizione mostrata. Proteggi chi svolge questo compito, dì chi aiuta chi e controlla l’indicazione attuale, perché ruoli ed effetti possono cambiare.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Compagni di PEAK coordinano una scalata e condividono l’attrezzatura su un percorso di montagna luminoso', 'Schermata ufficiale Steam: il progresso cooperativo richiede comunicazioni sul percorso e aiuto intenzionale.'),
        bullets: [
          ['Consiglio 8 - Avanzare insieme', 'Comunica l’obiettivo e riunisci la squadra prima che una sezione rischiosa la separi.'],
          ['Consiglio 9 - Usare il boost con un piano', 'Controlla atterraggio e movimento successivo prima di usare l’aiuto della squadra.'],
          ['Consiglio 10 - Proteggere il recupero', 'Lascia che lo Scout o il soccorritore designato operi in sicurezza mentre gli altri controllano il percorso.'],
        ],
      },
      {
        title: 'Fai attenzione al freddo',
        paragraphs: [
          'Consiglio 11: considera il freddo un problema di percorso e tempo, non solo un’icona di stato. Evita di restare fermo nelle sezioni esposte, muoviti verso la copertura o la zona più calda mostrata dal gioco attuale e non consumare l’ultima resistenza aspettando. La risposta più utile a come evitare il freddo nel gioco PEAK è pianificare il tratto esposto prima di entrarci.',
          'Conserva cibo e recupero se il freddo può rallentare la squadra. Nomi degli oggetti, effetti di calore e condizioni precise dipendono dalla versione: usa la descrizione attuale e non pensare che un consumabile annulli sempre il freddo. Se un compagno resta indietro, concordate una pausa su terreno sicuro.',
        ],
        bullets: [
          ['Consiglio 11 - Attraversare il freddo con un piano', 'Esplora il percorso esposto, conserva resistenza per attraversarlo e controlla le opzioni di calore in gioco.'],
        ],
      },
      {
        title: 'Pianifica con la mappa di oggi',
        kind: 'today-map',
        paragraphs: [
          'Consiglio 12: controlla la ' + mapLink('mappa PEAK di oggi') + ' prima di iniziare. La rotazione giornaliera può cambiare il bioma e le decisioni di percorso che compaiono per prime, quindi la nota sull’equipaggiamento di ieri potrebbe non valere per la scalata di oggi. Usa la scheda scritta durante il build come riferimento datato e conferma il percorso attivo in PEAK dopo il reset.',
          'La mappa non sostituisce l’esplorazione. Indica la preparazione generale; la sessione attuale mostra il prossimo impegno, il riposo, il pericolo o il problema di salvataggio reale. Confronta data, fonte, stato del reset e campi del percorso prima di trasformare un registro giornaliero in un piano.',
          'Questo è anche il modo più chiaro per decidere cosa portare alla prima scalata. Parti dal prossimo terreno conosciuto, aggiungi cibo e recupero per proteggerlo e lascia un’opzione flessibile per ciò che la mappa non può mostrare. Un percorso variabile deve cambiare le priorità, non cancellare le buone abitudini.',
        ],
        bullets: [
          ['Consiglio 12 - Controllare prima di partire', 'Usa il percorso giornaliero per prepararti e lascia che il gioco confermi la strada precisa.'],
        ],
      },
      {
        title: 'Trasforma i 12 consigli in una routine',
        paragraphs: [
          'Riunisci i dodici consigli in un ciclo breve: controlla le scorte vicine, scegli un carico leggero, concorda il primo obiettivo e individua la prossima pausa sicura. Durante la salita usa prese brevi, proteggi la resistenza, annuncia i boost e fermati quando il recupero non è più chiaro. La routine funziona anche in solitaria, ma in quel caso devi fare da te la comunicazione del percorso e il controllo del recupero.',
          'Dopo la partita, annota ciò che è successo davvero invece di riscrivere il percorso a memoria. Registra data, contesto della mappa, strumento più utile e decisione che ha creato problemi. Un’osservazione datata vale più di una regola sicura che descrive solo un seed, una patch o una squadra.',
        ],
      },
      {
        title: 'Prossimi passi per partite migliori',
        paragraphs: [
          'Per capire meglio i livelli del percorso e la difficoltà, continua con la [[link:peak-levels-biomes-difficulty|guida ai livelli e alla difficoltà di PEAK]].',
          'Quando le basi diventano naturali, confronta il contesto del percorso con la nostra ' + articleLink('peak-biomes-list', 'lista dei biomi') + ' e torna alla ' + articleLink('map-rotation', 'pagina della mappa giornaliera') + ' prima del prossimo tentativo. Per un’introduzione più ampia, consulta ' + articleLink('how-to-play-peak', 'la nostra guida completa per principianti') + ' e ' + articleLink('what-is-peak-game', 'scopri che cos’è PEAK') + '.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ sui consigli per il gioco PEAK',
      items: [
        ['PEAK è un gioco difficile?', 'PEAK può essere impegnativo perché movimento di arrampicata, resistenza, fame, equipaggiamento, freddo, lettura del percorso e lavoro di squadra interagiscono. Diventa più gestibile proteggendo la prossima pausa sicura, conservando un’opzione di recupero e adattando il piano alla mappa e alla versione attuali.'],
        ['Come posso arrivare più lontano in PEAK?', 'Ripeti un ciclo breve: raccogli le scorte vicine, cucina il cibo utile, porta uno strumento adatto al terreno, riposa prima di esaurire la resistenza e comunica il prossimo impegno. In cooperativa resta abbastanza vicino per il boost o il salvataggio invece di correre avanti da solo.'],
        ['Come evito il freddo in PEAK?', 'Esplora prima i tratti freddi o esposti, non restare fermo, conserva resistenza per attraversarli e usa le opzioni di calore o protezione mostrate dal gioco attuale. Gli effetti possono cambiare, quindi rileggi la descrizione dopo un aggiornamento.'],
        ['Come si dovrebbe giocare a PEAK?', 'Gioca a PEAK come a un problema condiviso di percorso e risorse. Da solo o con un massimo di quattro persone, leggi la prossima salita, scegli una pausa sicura, usa cibo e utilità con intenzione e dai priorità alla sessione attuale rispetto a una guida vecchia.'],
      ],
    },
    source: {
      eyebrow: 'Fonti e limiti',
      title: 'Collega i consigli al gioco attuale',
      body: 'Le informazioni su piattaforma, gioco in solitaria o cooperativo e dimensione del gruppo provengono dalla pagina Steam ufficiale di PEAK. Il contesto del percorso giornaliero viene scritto durante il build dal registro delle mappe mantenuto. Queste sono indicazioni pratiche: dopo gli aggiornamenti verifica nel gioco gli effetti degli oggetti, il freddo, il revive dello Scout e le interazioni di corde e catene.',
      links: [
        ['Pagina Steam ufficiale di PEAK', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Fonte PEAK Map Today', 'https://peak.skydler.me/'],
        ['Notizie ufficiali di Steam', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['map-rotation', 'Vedi la mappa PEAK di oggi'],
      ['what-is-peak-game', 'Inizia dalla guida per principianti'],
      ['peak-biomes-list', 'Esplora il riferimento dei biomi'],
      ['peak-game-update', 'Controlla il contesto degli aggiornamenti'],
      ['peak-levels-biomes-difficulty', 'Capire livelli e difficoltà'],
    ],
    relatedLabel: 'Guide PEAK correlate',
  },
};
