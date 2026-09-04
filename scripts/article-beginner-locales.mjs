const media = (src, width, height, alt, caption) => ({ src, width, height, alt, caption });

export const whatIsPeakTranslations = {
  zh: {
    meta: {
      title: 'PEAK 是什么游戏？玩法与地图新手指南',
      description: '刚接触 PEAK？了解这款游戏是什么、如何游玩、地图轮换怎样改变路线，以及如何查看今日活动地图，为首次攀登做好完整准备。',
      schema: 'PEAK 新手指南，介绍合作攀登玩法、路线与装备决策、地图轮换术语，以及查看每日地图的方法。',
    },
    primaryKeyword: 'PEAK 是什么游戏',
    eyebrow: '新手指南：理解第一次攀登',
    h1: 'PEAK 是什么游戏？',
    intro: 'PEAK 是什么游戏？它是一款在 Steam 上进行的合作攀登与生存游戏，玩家需要观察地形、管理资源，并互相帮助抵达山顶。本指南会先用直白的语言解释核心循环，再带你查看[[link:map-rotation#today-map|今天的 PEAK 地图]]，以及第一次出发前需要掌握的术语。',
    answerLabel: '简要回答',
    answer: 'PEAK 是一款适用于 Windows Steam 平台的合作攀登游戏。根据官方商店说明，你可以单人游玩，也可以和最多四人的队伍一起游玩。它的核心难点不只是向上移动：队伍要读懂不断变化的路线，决定什么时候使用攀登工具，管理食物和体力，并在计划出错后设法恢复。地图和生物群系名称只能提供背景，当前游戏场景显示的路线才是眼前这次挑战的最终依据。',
    tocLabel: '本页内容',
    tocFaq: '新手 FAQ',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK 玩家协同攀登并共享装备', 'Steam 官方截图：PEAK 的核心是观察路线，并和队友共同做出决定。'),
    sections: [
      {
        title: '一句话解释 PEAK 是什么游戏',
        paragraphs: [
          'PEAK 是一款以攀登为核心的合作游戏，压力主要来自路线本身。官方 Steam 页面同时列出了单人模式，以及最多四人的合作多人玩法。“一起向上爬”可以概括它的表面体验，却没有说清最关键的部分：每次攀登都要求队伍判断还能推进多远、应该携带什么，以及计划失败时谁能够提供帮助。',
          '这是玩家整理的独立指南，因此官方事实和实战建议会分开说明。平台、合作模式和人数信息来自 Steam；下面的建议是帮助队伍在路线型游戏中做决定的方法，不代表所有玩家都必须使用同一套装备或走同一条路线。'
        ],
        bullets: [
          ['平台', '官方商店将 PEAK 列为 Steam Windows 游戏。'],
          ['模式', '商店页面列出单人、多人、合作和在线合作类别。'],
          ['队伍人数', '官方描述支持最多四人的队伍。']
        ]
      },
      {
        title: 'PEAK 的核心玩法循环如何运作',
        paragraphs: [
          '一次典型尝试往往从路线判断开始，而不是从战斗配装开始。队伍先观察下一段攀登、缺口、危险或不确定的通道，再决定要花多少时间侦察。攀登工具和恢复手段有价值，是因为它们可以在压力下保护一次判断。食物和体力相关资源同样重要：一段看似很短的路线，在绕路、等待更安全的动作或救援队友时，消耗可能会明显增加。',
          '即使游戏没有正式的职业系统，团队沟通也属于玩法的一部分。一名玩家可以负责提前观察，另一名玩家携带有用工具，而所有人都能从预先约定的暂停点中受益。新手可以养成一个简单习惯：说清下一次要做什么、哪项资源负责保护这个动作，以及什么情况会让队伍选择撤回。'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'PEAK 新手流程图，展示观察路线、准备装备和开始攀登三个阶段', '编辑插图：一次 PEAK 尝试可以先统一路线判断，再准备装备，最后开始攀登。'),
        table: {
          caption: 'PEAK 攀登中的关键决定',
          headers: ['决定', '要问的问题', '为什么重要'],
          rows: [
            ['路线', '下一次要推进到哪里？', '明确目标可以避免队伍为每个可见方向都消耗资源。'],
            ['装备', '需要时由谁使用这个工具？', '共享背包只有在责任和时机清楚时才真正有用。'],
            ['节奏', '下一个安全暂停点在哪里？', '计划好的暂停能保护体力，也能给队伍一个重新集合的位置。'],
            ['恢复', '什么情况会触发撤回？', '提前约定撤退规则，可以避免一次失误变成全队救援。']
          ]
        }
      },
      {
        title: 'PEAK 的地图、生物群系与轮换系统',
        paragraphs: [
          '新玩家经常搜索[[link:map-rotation#today-map|地图轮换如何运作]]，因为地图、路线和生物群系这几个词很容易混在一起。地图是你要穿越的空间，路线是路径或顺序的背景，而生物群系是更宽泛的区域名称。每日轮换让问题带上了时间限制：带日期的序列可以帮助规划，但不能替代当前游戏场景真正显示的路线。',
          '如果想查看[[link:map-rotation#today-map|今天的活动地图]]，请打开每日记录并检查日期、来源、路线和重置状态。数据仍在等待核验时，应以当前游戏为准，而不是依赖没有日期的旧截图。地图页面还会解释如何把每日答案和长期有效的规划建议分开，这正是一个实用 PEAK Wiki 需要做好的区分。',
          '如果要继续熟悉这些术语，可以阅读我们的[[link:peak-biomes-list|生物群系列表]]。它整理当前有来源支持的名称，并明确区分生物群系标签和完整地图分配。'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAK 游戏画面中玩家在危险地形旁使用绳索', 'Steam 官方截图：当前场景显示的路线和危险，比单独把生物群系名称当作固定地图更有参考价值。')
      },
      {
        title: '第一次玩 PEAK 怎么开始',
        paragraphs: [
          '第一次出发不需要背下一份未经验证的强度榜。无论路线熟不熟，都可以使用一套短流程。目标是每次只做一个共同决定，并为恢复留下余量。等队伍积累了一些带日期的观察记录后，再逐步改进路线笔记，同时不要把个人经验误写成官方规则。',
          '单人和合作都能使用同一套流程，但沟通负担不同。单人时，你需要自己做路线判断和恢复决定；组队时，应说出下一次投入和暂停点，避免队友基于不同假设消耗共享资源。集合点是一种协调习惯，并不能保证地形安全。'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, 'PEAK 玩家接近低能见度路线中的高处平台', 'Steam 官方截图：先根据眼前路线决定下一步，再确认投入和安全暂停点。'),
        bullets: [
          ['1. 确认本局', '确认谁在游玩、游戏显示哪条路线，以及所有人是否理解第一个目标。'],
          ['2. 先侦察再投入', '在使用能保护路线的道具之前，先观察第一段有实际影响的攀登或危险。'],
          ['3. 分配工具', '提前说清谁负责路线辅助、食物或恢复，不要把责任留在默认状态。'],
          ['4. 约定暂停', '找到一个集合点，并提前约定触发撤退的明确条件。'],
          ['5. 记录一次结果', '结束后保存日期、路线、版本，以及影响最大的那个决定。']
        ]
      },
      {
        title: '更新内容如何影响新手理解',
        paragraphs: [
          '如果你因为新生物群系或补丁而搜索“PEAK 是什么游戏”，可以先看[[link:peak-game-update|最新更新日志]]。它把官方标题和日期与社区解读分开，让新玩家判断一条消息是在宣布新内容、改变机制，还是只修复了一个问题。',
          '更新后可以重新执行同一套新手流程：阅读官方标题，查看当前地图，验证一个路线假设，再记录发生了什么变化。这个方法比背下一条可能只适用于旧版本的建议更耐用，也更容易在下一次补丁后重新检查。'
        ]
      }
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'PEAK 是什么游戏？FAQ',
      items: [
        ['PEAK 是多人游戏吗？', '是。官方 Steam 页面列出多人、合作和在线合作，并支持最多四人的队伍；同一来源也说明 PEAK 支持单人游玩。'],
        ['在 PEAK 里要做什么？', '你要在变化的路线环境中攀登，观察地形，管理装备和资源，并与队友协调。具体危险和道具效果取决于当前游戏版本和本局场景。'],
        ['PEAK 的地图轮换如何运作？', '带日期的路线或生物群系序列可能随时间变化。请先阅读[[link:map-rotation#today-map|每日地图]]的构建记录，再在本局中确认活动路线，因为静态页面不能替代游戏状态。'],
        ['PEAK 最多可以几个人一起玩？', '官方 Steam 描述支持最多四人的队伍。如果平台或多人支持发生变化，请重新查看当前商店页面和补丁信息。'],
        ['PEAK 是生存游戏还是攀登游戏？', '最实用的概括是合作攀登与生存游戏：攀登是核心移动挑战，资源和恢复决定制造生存压力的方式。'],
        ['PEAK 新手应该带什么？', '从能保护下一次可见决定的最小组合开始：路线辅助工具、按需要准备的食物或体力支持，以及恢复计划。不要把未经验证的强度榜当成通用规则。']
      ]
    },
    source: {
      eyebrow: '来源与边界',
      title: '基于当前来源的新手指南',
      body: '平台、模式、合作和人数事实来自 PEAK 官方 Steam 页面。地图和重置信息是本站在构建时维护的记录。攀登建议属于实用指引；如果更新后或当前场景与记录不一致，应重新核对。',
      links: [
        ['PEAK 官方 Steam 页面', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam 官方动态', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', '查看今天的活动地图'],
      ['peak-biomes-list', '浏览生物群系列表'],
      ['peak-game-update', '阅读最新更新日志'],
      ['peak-map-rotation-schedule', '查看重置时间']
    ],
    relatedLabel: '相关 PEAK 指南'
  },

  es: {
    meta: {
      title: '¿Qué es el juego PEAK? Guía de juego y mapas',
      description: '¿Eres nuevo en PEAK? Descubre qué juego es, cómo funciona, cómo la rotación cambia la ruta y cómo consultar el mapa activo de hoy antes de tu primera escalada.',
      schema: 'Guía para principiantes de PEAK sobre el bucle cooperativo de escalada, las decisiones de ruta y equipo, la rotación de mapas y el mapa diario.'
    },
    primaryKeyword: 'qué es el juego PEAK',
    eyebrow: 'Guía para principiantes: entiende tu primera escalada',
    h1: '¿Qué es el juego PEAK?',
    intro: '¿Qué es el juego PEAK? Es un juego cooperativo de escalada y supervivencia para Steam en el que debes leer el terreno, administrar recursos y ayudar a tu equipo a llegar a la cima. Esta guía explica el bucle principal con palabras sencillas y después te lleva al[[link:map-rotation#today-map|mapa activo de PEAK de hoy]] y a los términos que conviene conocer antes de tu primera partida.',
    answerLabel: 'Respuesta breve',
    answer: 'PEAK es un juego cooperativo de escalada para Windows en Steam. Según la descripción oficial de la tienda, puedes jugar en solitario o con un grupo de hasta cuatro personas. El reto no consiste solo en avanzar hacia arriba: el equipo debe leer una ruta cambiante, decidir cuándo gastar herramientas de escalada, administrar comida y resistencia, y recuperarse cuando un plan sale mal. Los mapas y los nombres de los biomas dan contexto, pero la ruta que aparece en la sesión actual es la referencia final para la partida que tienes delante.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas de principiantes',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'Jugadores de PEAK coordinando una escalada y compartiendo equipo', 'Captura oficial de Steam: PEAK gira alrededor de leer la ruta y tomar decisiones en equipo.'),
    sections: [
      {
        title: '¿Qué es PEAK en una frase?',
        paragraphs: [
          'PEAK es un juego cooperativo centrado en escalar, y la presión nace de la propia ruta. La página oficial de Steam indica que hay juego individual y multijugador cooperativo para grupos de hasta cuatro personas. “Subir juntos” resume la experiencia superficial, pero deja fuera la parte útil: cada ascenso pide decidir cuánto más se puede avanzar, qué merece ocupar un espacio y quién puede ayudar cuando el plan falla.',
          'Esta es una guía independiente, por lo que separamos los hechos oficiales de los consejos prácticos. La plataforma, las categorías cooperativas y el número de jugadores proceden de Steam. Las recomendaciones siguientes son métodos de decisión para un juego basado en rutas, no una afirmación de que todos los equipos deban llevar el mismo equipamiento o seguir el mismo camino.'
        ],
        bullets: [
          ['Plataforma', 'La tienda oficial presenta PEAK como un juego de Windows para Steam.'],
          ['Modos', 'La página de la tienda incluye las categorías individual, multijugador, cooperativo y cooperativo en línea.'],
          ['Tamaño del grupo', 'La descripción oficial admite grupos de hasta cuatro personas.']
        ]
      },
      {
        title: 'Cómo funciona el bucle de juego de PEAK',
        paragraphs: [
          'Una partida normal comienza con una decisión de ruta, no con una configuración de combate. El grupo observa la siguiente escalada, el salto, el peligro o el paso incierto y decide cuánto tiempo dedicar a explorar. Las herramientas de escalada y las opciones de recuperación importan porque protegen una decisión cuando aumenta la presión. La comida y los recursos relacionados con la resistencia también cuentan: una ruta corta puede resultar cara si hay que desviarse, esperar o ayudar a un compañero.',
          'La comunicación forma parte de la mecánica aunque el juego no presente un sistema formal de roles. Una persona puede leer el camino por delante, otra llevar una herramienta útil y todos pueden beneficiarse de acordar un punto de pausa. Un buen hábito para principiantes es decir cuál es el siguiente compromiso, qué recurso lo protege y qué situación haría que el grupo se diera la vuelta.'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'Diagrama del flujo inicial de PEAK: explorar la ruta, preparar el equipo y escalar', 'Ilustración editorial: una partida de PEAK puede empezar compartiendo la lectura de la ruta, preparando el equipo y escalando.'),
        table: {
          caption: 'Decisiones detrás de una escalada en PEAK',
          headers: ['Decisión', 'Pregunta útil', 'Por qué importa'],
          rows: [
            ['Ruta', '¿Cuál es el siguiente compromiso?', 'Un objetivo claro evita gastar recursos en todas las posibilidades visibles.'],
            ['Equipo', '¿Quién usará la herramienta cuando haga falta?', 'El inventario compartido solo ayuda si la responsabilidad y el momento están claros.'],
            ['Ritmo', '¿Dónde está la próxima pausa segura?', 'Una pausa prevista protege la resistencia y ofrece un punto de reunión.'],
            ['Recuperación', '¿Cuál es nuestra regla para retroceder?', 'Un plan de retirada evita que un error se convierta en un rescate de todo el grupo.']
          ]
        }
      },
      {
        title: 'Mapas, biomas y rotación en PEAK',
        paragraphs: [
          'Los jugadores nuevos suelen buscar[[link:map-rotation#today-map|cómo funciona la rotación del mapa]] porque mapa, ruta y bioma se mezclan con facilidad. Un mapa es el espacio que recorres; una ruta es el camino o el contexto de la secuencia; un bioma es una etiqueta regional más amplia. La rotación diaria hace que la pregunta sea temporal: una secuencia fechada puede ayudarte a planear, pero no sustituye la ruta que muestra tu sesión actual.',
          'Para ver el[[link:map-rotation#today-map|mapa activo de hoy]], abre la entrada diaria y comprueba la fecha, la fuente, la ruta y el estado del reinicio. Si los datos están pendientes, confía en la partida actual y no en una captura antigua sin fecha. La página del mapa también explica cómo separar una respuesta diaria de un consejo de planificación que siga siendo útil, una distinción importante para una wiki de PEAK.',
          'Para ampliar el vocabulario, consulta nuestra[[link:peak-biomes-list|lista de biomas]]. Allí se reúnen los nombres respaldados por fuentes y se distingue una etiqueta de bioma de una asignación completa de mapa.'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Jugador de PEAK usando una cuerda junto a un peligro del terreno', 'Captura oficial de Steam: la ruta y el peligro visibles aportan más contexto que tratar un nombre de bioma como un mapa fijo.')
      },
      {
        title: 'Cómo empezar tu primera partida de PEAK',
        paragraphs: [
          'No necesitas memorizar una lista de niveles sin verificar para comenzar. Usa un ciclo corto que funcione tanto en una ruta conocida como en una nueva. El objetivo es tomar una decisión compartida cada vez y conservar margen para recuperarse. Cuando el grupo reúna varias observaciones fechadas, podrá mejorar sus notas sin convertir una experiencia personal en una regla oficial.',
          'El mismo ciclo sirve para jugar en solitario y en cooperativo, aunque cambia la carga de comunicación. Solo debes decidir la ruta y la recuperación por tu cuenta. En grupo, anuncia el siguiente compromiso y el punto de pausa para que nadie gaste recursos compartidos con una suposición distinta. Un punto de reunión ayuda a coordinarse, pero no garantiza que el terreno sea seguro.'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, 'Jugador de PEAK acercándose a una cresta de baja visibilidad', 'Captura oficial de Steam: decide el siguiente movimiento a partir de la ruta visible y después confirma el recurso y la pausa segura.'),
        bullets: [
          ['1. Confirma la sesión', 'Comprueba quién juega, qué ruta muestra el juego y si todos entienden el primer objetivo.'],
          ['2. Explora antes de comprometerte', 'Mira la primera escalada o peligro importante antes de gastar el objeto que podría protegerla.'],
          ['3. Reparte la utilidad', 'Di quién lleva la ayuda de ruta, la comida o la responsabilidad de recuperación.'],
          ['4. Elige una pausa', 'Identifica un punto de reunión y una condición clara para dar la vuelta.'],
          ['5. Guarda una nota', 'Después del intento, registra fecha, ruta, versión y la decisión que más influyó.']
        ]
      },
      {
        title: 'Cómo encajan las actualizaciones para un principiante',
        paragraphs: [
          'Si buscaste qué es el juego PEAK porque apareció un bioma o un parche nuevo, empieza por las[[link:peak-game-update|últimas actualizaciones]]. Esa página separa los títulos y las fechas oficiales de la interpretación comunitaria, para que puedas distinguir un anuncio de contenido, un cambio de mecánica y una corrección de errores.',
          'Después de una actualización, repite el mismo ciclo: lee el título oficial, consulta el mapa actual, prueba una sola suposición de ruta y registra qué cambió. Es una forma más resistente de aprender que memorizar un consejo escrito para una versión anterior.'
        ]
      }
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: '¿Qué es el juego PEAK? Preguntas frecuentes',
      items: [
        ['¿PEAK es un juego multijugador?', 'Sí. La ficha oficial de Steam incluye multijugador, cooperativo y cooperativo en línea, y describe grupos de hasta cuatro personas. La misma fuente también indica que PEAK se puede jugar en solitario.'],
        ['¿Qué se hace en PEAK?', 'Escalas por contextos de ruta cambiantes, lees el terreno, administras el equipo y los recursos, y coordinas al grupo. Los peligros y efectos exactos dependen de la versión y de la sesión actual.'],
        ['¿Cómo funciona la rotación de mapas de PEAK?', 'Una secuencia de ruta o bioma con fecha puede cambiar. Lee el[[link:map-rotation#today-map|mapa diario]] para consultar el registro del build y confirma después la ruta activa en la partida, porque una página estática no sustituye al estado del juego.'],
        ['¿Cuántos jugadores pueden jugar juntos en PEAK?', 'La descripción oficial de Steam admite grupos de hasta cuatro personas. Si cambia el soporte de la plataforma o del multijugador, vuelve a comprobar la tienda y las notas del parche.'],
        ['¿PEAK es un juego de supervivencia o de escalada?', 'La descripción más útil es juego cooperativo de escalada y supervivencia: escalar es el reto central de movimiento, mientras que los recursos y la recuperación crean la presión de supervivencia.'],
        ['¿Qué debe llevar un principiante en PEAK?', 'Empieza con lo mínimo que proteja la siguiente decisión visible: ayuda de ruta, comida o apoyo de resistencia según haga falta y un plan de recuperación. No trates una lista de niveles no verificada como una regla universal.']
      ]
    },
    source: {
      eyebrow: 'Fuentes y límites',
      title: 'Una guía para principiantes basada en fuentes actuales',
      body: 'Los datos de plataforma, modos, cooperación y número de jugadores proceden de la página oficial de PEAK en Steam. Los datos de mapas y reinicios son registros mantenidos durante el build. Los consejos de escalada son orientación práctica y deben revisarse después de una actualización o cuando la sesión no coincida con el registro.',
      links: [
        ['Página oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Noticias oficiales de Steam', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', 'Consultar el mapa activo de hoy'],
      ['peak-biomes-list', 'Explorar la lista de biomas'],
      ['peak-game-update', 'Leer las últimas actualizaciones'],
      ['peak-map-rotation-schedule', 'Ver las horas de reinicio']
    ],
    relatedLabel: 'Guías relacionadas de PEAK'
  },

  ja: {
    meta: {
      title: 'PEAKとは？ゲームプレイとマップの初心者ガイド',
      description: 'PEAKを始めたばかり？どんなゲームでどう遊ぶのか、ローテーションがルートをどう変えるのか、今日のアクティブなマップの確認方法まで初心者向けに解説します。',
      schema: 'PEAKの初心者向けガイド。協力型クライミングの流れ、ルートと装備の判断、マップローテーション、毎日のマップ確認方法を解説します。'
    },
    primaryKeyword: 'PEAKとは',
    eyebrow: '初心者ガイド：最初の登山を理解する',
    h1: 'PEAKとは？',
    intro: 'PEAKとは？Steamで遊べる協力型のクライミング・サバイバルゲームで、地形を読み、資源を管理し、仲間と助け合いながら山頂を目指します。このガイドでは基本の流れを分かりやすく説明し、最初に[[link:map-rotation#today-map|今日のPEAKマップ]]を確認する方法と、初めて挑戦する前に知っておきたい用語を紹介します。',
    answerLabel: '短い答え',
    answer: 'PEAKはSteam for Windows向けの協力型クライミングゲームです。公式ストアの説明によると、ソロでも、最大4人のグループでも遊べます。難しさは単に上へ移動することではありません。チームは変化するルートを読み、クライミング用の道具を使うタイミングを決め、食料やスタミナを管理し、計画が崩れたときに立て直す必要があります。マップやバイオーム名は背景を示しますが、目の前のセッションで表示されるルートが最終的な判断材料です。',
    tocLabel: 'このページの内容',
    tocFaq: '初心者FAQ',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAKでプレイヤーが装備を共有しながら協力して登る場面', 'Steam公式スクリーンショット：PEAKではルートを読み、チームで判断することが中心になります。'),
    sections: [
      {
        title: 'PEAKを一言で説明すると？',
        paragraphs: [
          'PEAKは登ることを中心にした協力型ゲームで、プレッシャーはルートそのものから生まれます。公式Steamページにはソロプレイと、最大4人の協力マルチプレイが記載されています。「一緒に登る」と説明することはできますが、それだけでは重要な部分が伝わりません。毎回の登山で、どこまで進むか、何を持つか、計画が失敗したときに誰が助けるかをチームで決める必要があります。',
          'このページは独立したプレイヤー向けガイドなので、公式情報と実践的な助言を分けています。プラットフォーム、協力モード、人数の情報はSteamに基づきます。以下の提案はルート型ゲームで判断するための方法であり、全員が同じ装備や道を使うべきだという意味ではありません。'
        ],
        bullets: [
          ['プラットフォーム', '公式ストアではPEAKをSteamのWindows向けゲームとして掲載しています。'],
          ['モード', 'ストアページにはシングルプレイヤー、マルチプレイヤー、協力、オンライン協力のカテゴリがあります。'],
          ['人数', '公式説明では最大4人のグループに対応しています。']
        ]
      },
      {
        title: 'PEAKのゲームプレイの流れ',
        paragraphs: [
          '通常の挑戦は戦闘ビルドではなく、ルートの判断から始まります。次の登り、段差、危険、または不確かな通路を見て、どれだけ偵察するかを決めます。クライミング用の道具や立て直しの手段が役立つのは、プレッシャーの中でも一つの判断を守れるからです。食料やスタミナに関わる資源も重要です。短く見えるルートでも、迂回したり安全な動きを待ったりすると負担が増えることがあります。',
          '正式な役割システムがなくても、チームの会話はゲームの仕組みの一部です。一人が先のルートを見て、別の一人が道具を持ち、全員が次の休止地点を共有できます。初心者は、次に何をするか、それを守る資源は何か、どの状況なら引き返すかを声に出す習慣から始めるとよいでしょう。'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'PEAK初心者向けの流れを示す図：ルート確認、装備準備、登山開始', '編集部作成の図：PEAKではルートの判断を共有し、装備を準備してから登り始めます。'),
        table: {
          caption: 'PEAKの登山で行う判断',
          headers: ['判断', '確認する質問', '重要な理由'],
          rows: [
            ['ルート', '次に進む目標はどこか？', '目標を決めると、見える可能性すべてに資源を使わずに済みます。'],
            ['装備', '必要なとき誰が道具を使うか？', '共有インベントリは担当とタイミングが明確なときに役立ちます。'],
            ['ペース', '次の安全な休止地点はどこか？', '計画した休止はスタミナを守り、合流する場所になります。'],
            ['立て直し', '引き返す条件は何か？', '撤退の基準があれば、一度のミスが全員の救助につながるのを防げます。']
          ]
        }
      },
      {
        title: 'PEAKのマップ、バイオーム、ローテーション',
        paragraphs: [
          '初心者が[[link:map-rotation#today-map|マップローテーションの仕組み]]を検索するのは、マップ、ルート、バイオームという言葉が混同されやすいからです。マップは移動する空間、ルートは道筋や順番の文脈、バイオームはより広い地域ラベルです。日ごとのローテーションには時間的な要素があるため、日付付きの順序は計画に役立っても、現在のセッションに表示されるルートの代わりにはなりません。',
          '[[link:map-rotation#today-map|今日のアクティブなマップ]]を確認するには、日次エントリーを開いて日付、出典、ルート、リセット状態を見てください。データが確認待ちなら、日付のない古い画像ではなく現在のゲームを優先します。マップページでは、毎日の回答と長期的に使える計画の助言を分けて読む方法も説明しています。',
          '用語をさらに確認したい場合は、[[link:peak-biomes-list|バイオーム一覧]]を読んでください。出典で確認できる名前を整理し、バイオームのラベルとマップ全体の割り当てを区別しています。'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAKの危険な地形のそばでロープを使うプレイヤー', 'Steam公式スクリーンショット：固定されたバイオーム名より、現在見えているルートと危険のほうが判断材料になります。')
      },
      {
        title: 'PEAKを初めて遊ぶときの始め方',
        paragraphs: [
          '初回から未確認の最強装備リストを覚える必要はありません。慣れたルートでも新しいルートでも使える短い流れを決めましょう。毎回一つの判断を共有し、立て直しの余裕を残すことが目的です。日付付きの観察が増えたら、個人の経験を公式ルールに変えてしまわないよう注意しながら、ルートメモを更新できます。',
          'ソロでも協力でも流れは使えますが、会話の負担は変わります。ソロでは自分でルートと立て直しを判断します。チームでは次の行動と休止地点を声に出し、異なる前提で共有資源を使わないようにします。集合地点は連携のための習慣であり、地形が安全だと保証するものではありません。'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, '見通しの悪いルートの高所へ近づくPEAKのプレイヤー', 'Steam公式スクリーンショット：見えているルートから次の行動を決め、使う資源と安全な休止地点を確認します。'),
        bullets: [
          ['1. セッションを確認', '参加者、ゲームに表示されたルート、最初の目標を全員で確認します。'],
          ['2. 先に偵察', 'ルートを守る道具を使う前に、最初の重要な登りや危険を観察します。'],
          ['3. 道具を分担', 'ルート支援、食料、立て直しを誰が担当するかを決めます。'],
          ['4. 休止地点を決める', '合流できる場所と、引き返す明確な条件を決めます。'],
          ['5. 結果を一つ記録', '終了後に日付、ルート、バージョン、最も影響した判断を残します。']
        ]
      },
      {
        title: 'アップデートを初心者の理解に取り入れる方法',
        paragraphs: [
          '新しいバイオームやパッチを見てPEAKとは何かを検索したなら、まず[[link:peak-game-update|最新アップデート]]を確認してください。公式タイトルと日付をコミュニティの解釈から分けているので、内容の追加、仕組みの変更、バグ修正のどれなのかを判断しやすくなります。',
          'アップデート後も同じ初心者向けの流れを繰り返します。公式タイトルを読み、現在のマップを確認し、ルートの仮説を一つ試し、変わった点を記録します。古いバージョン向けの助言を暗記するより、変更後も確認しやすい方法です。'
        ]
      }
    ],
    faq: {
      eyebrow: 'よくある質問',
      title: 'PEAKとは？初心者FAQ',
      items: [
        ['PEAKはマルチプレイゲームですか？', 'はい。公式Steamページにはマルチプレイヤー、協力、オンライン協力が記載され、最大4人のグループに対応しています。同じ情報源ではソロプレイも案内されています。'],
        ['PEAKでは何をしますか？', '変化するルートを登り、地形を読み、装備と資源を管理し、仲間と連携します。危険やアイテムの効果は現在のゲームとバージョンによって変わります。'],
        ['PEAKのマップローテーションはどう動きますか？', '日付のあるルートやバイオームの順序は変化する可能性があります。[[link:map-rotation#today-map|日次マップ]]でビルド時の記録を確認し、現在のルートはゲーム内でも確認してください。静的ページだけでゲームの状態を置き換えることはできません。'],
        ['PEAKは何人で遊べますか？', '公式Steamの説明では最大4人のグループに対応しています。プラットフォームやマルチプレイの仕様が変わった場合は、最新のストア情報とパッチ情報を確認してください。'],
        ['PEAKはサバイバルゲームですか、それともクライミングゲームですか？', '協力型クライミング・サバイバルゲームと表現するのが分かりやすいでしょう。登ることが移動の中心で、資源と立て直しの判断がサバイバルのプレッシャーを作ります。'],
        ['PEAK初心者は何を持っていくべきですか？', '次に見えている判断を守る最小限から始めます。ルート支援、必要に応じた食料やスタミナの助け、そして立て直しの計画を用意してください。未確認のランキングを普遍的なルールにしないことも大切です。']
      ]
    },
    source: {
      eyebrow: '出典と範囲',
      title: '現在の出典に基づく初心者ガイド',
      body: 'プラットフォーム、モード、協力プレイ、人数の情報はPEAK公式Steamページに基づきます。マップとリセットの情報は当サイトがビルド時に管理する記録です。登山の助言は実践的な案内なので、アップデート後や現在のセッションが記録と違う場合は再確認してください。',
      links: [
        ['PEAK公式Steamページ', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam公式ニュース', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', '今日のアクティブなマップを見る'],
      ['peak-biomes-list', 'バイオーム一覧を読む'],
      ['peak-game-update', '最新アップデートを確認する'],
      ['peak-map-rotation-schedule', 'リセット時刻を見る']
    ],
    relatedLabel: '関連するPEAKガイド'
  },

  fr: {
    meta: {
      title: 'Qu’est-ce que PEAK ? Guide débutant du jeu et des cartes',
      description: 'Vous découvrez PEAK ? Apprenez ce qu’est le jeu, comment il fonctionne, comment la rotation modifie la route et comment vérifier la carte active du jour avant votre première ascension.',
      schema: 'Guide débutant de PEAK sur la boucle de grimpe coopérative, les choix de route et d’équipement, la rotation des cartes et la carte quotidienne.'
    },
    primaryKeyword: 'qu est-ce que PEAK',
    eyebrow: 'Guide débutant : comprendre la première ascension',
    h1: 'Qu’est-ce que PEAK ?',
    intro: 'Qu’est-ce que PEAK ? C’est un jeu coopératif de grimpe et de survie sur Steam : il faut lire le terrain, gérer les ressources et s’entraider pour atteindre un sommet. Ce guide explique la boucle de jeu en termes simples, puis vous montre comment consulter la[[link:map-rotation#today-map|carte PEAK active du jour]] et le vocabulaire utile avant une première partie.',
    answerLabel: 'Réponse courte',
    answer: 'PEAK est un jeu de grimpe coopératif sur Windows via Steam. D’après la description officielle de la boutique, il est possible de jouer seul ou avec un groupe de quatre personnes au maximum. Le défi ne consiste pas seulement à monter : l’équipe doit lire une route qui change, décider quand utiliser un outil de grimpe, gérer la nourriture et l’endurance, puis se remettre d’une erreur. Les cartes et les noms de biomes donnent du contexte, mais la route affichée par la session en cours reste la référence finale.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ débutant',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'Des joueurs de PEAK coordonnent une ascension et partagent leur équipement', 'Capture d’écran Steam officielle : PEAK repose sur la lecture de la route et les décisions d’équipe.'),
    sections: [
      {
        title: 'PEAK en une phrase',
        paragraphs: [
          'PEAK est un jeu coopératif centré sur la grimpe, et la pression vient de la route elle-même. La page Steam officielle mentionne le jeu solo ainsi que la coopération multijoueur jusqu’à quatre personnes. « Monter ensemble » décrit l’expérience générale, mais ne dit pas l’essentiel : chaque ascension demande de décider jusqu’où pousser, quoi emporter et qui pourra aider si le plan échoue.',
          'Ce guide est indépendant ; les faits officiels et les conseils pratiques sont donc séparés. La plateforme, les catégories de coopération et le nombre de joueurs viennent de Steam. Les recommandations ci-dessous sont des méthodes de décision pour un jeu fondé sur les routes, pas une règle imposant le même équipement ou le même chemin à toutes les équipes.'
        ],
        bullets: [
          ['Plateforme', 'La boutique officielle présente PEAK comme un jeu Windows sur Steam.'],
          ['Modes', 'La page de la boutique mentionne le solo, le multijoueur, la coopération et la coopération en ligne.'],
          ['Taille du groupe', 'La description officielle prend en charge un groupe de quatre personnes au maximum.']
        ]
      },
      {
        title: 'Comment fonctionne la boucle de jeu de PEAK',
        paragraphs: [
          'Une tentative classique commence par une décision de route plutôt que par un build de combat. Le groupe observe la prochaine montée, le vide, le danger ou le passage incertain, puis décide du temps à consacrer au repérage. Les outils de grimpe et les options de récupération sont précieux car ils protègent une décision sous pression. La nourriture et les ressources liées à l’endurance comptent également : une route courte peut coûter cher si l’équipe doit faire un détour, attendre ou aider un joueur.',
          'La communication fait partie de la mécanique même si le jeu ne propose pas de rôles officiels. Un joueur peut lire la route, un autre porter un outil utile, et tous profitent d’un point d’arrêt décidé à l’avance. Un bon réflexe pour débuter consiste à dire quelle est la prochaine action, quelle ressource la protège et quelle condition ferait renoncer le groupe.'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'Schéma du parcours débutant de PEAK : observer, préparer l’équipement puis grimper', 'Illustration éditoriale : une tentative PEAK peut commencer par une lecture commune de la route, suivie de la préparation et de la grimpe.'),
        table: {
          caption: 'Les décisions derrière une ascension dans PEAK',
          headers: ['Décision', 'Question à poser', 'Pourquoi c’est important'],
          rows: [
            ['Route', 'Quel est le prochain engagement ?', 'Un objectif clair évite de dépenser des ressources pour chaque possibilité visible.'],
            ['Équipement', 'Qui utilisera l’outil si nécessaire ?', 'L’inventaire partagé aide seulement si le rôle et le moment sont compris.'],
            ['Rythme', 'Où est la prochaine pause sûre ?', 'Une pause planifiée protège l’endurance et fournit un point de regroupement.'],
            ['Récupération', 'Quelle est notre règle pour faire demi-tour ?', 'Un plan de repli empêche une erreur de devenir un sauvetage complet.']
          ]
        }
      },
      {
        title: 'Cartes, biomes et rotation dans PEAK',
        paragraphs: [
          'Les nouveaux joueurs cherchent souvent[[link:map-rotation#today-map|comment fonctionne la rotation des cartes]], car carte, route et biome sont faciles à confondre. Une carte est l’espace à parcourir ; une route est le chemin ou le contexte d’une séquence ; un biome est une étiquette régionale plus large. La rotation quotidienne rend la question sensible au temps : une séquence datée aide à planifier, mais ne remplace pas la route affichée par la session actuelle.',
          'Pour consulter la[[link:map-rotation#today-map|carte PEAK active aujourd’hui]], ouvrez l’entrée quotidienne et vérifiez sa date, sa source, sa route et son état de reset. Si les données sont en attente, fiez-vous au jeu actuel plutôt qu’à une ancienne capture sans date. La page des cartes explique aussi comment séparer une réponse quotidienne des conseils de planification durables, une distinction importante pour un wiki PEAK utile.',
          'Pour le vocabulaire plus large, consultez notre[[link:peak-biomes-list|liste des biomes]]. Elle rassemble les noms soutenus par les sources et distingue une étiquette de biome d’une affectation complète de carte.'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Joueur de PEAK utilisant une corde près d’un danger du terrain', 'Capture d’écran Steam officielle : la route et le danger visibles sont plus utiles qu’un nom de biome traité comme une carte fixe.')
      },
      {
        title: 'Comment commencer sa première partie de PEAK',
        paragraphs: [
          'Il n’est pas nécessaire de mémoriser une tier list non vérifiée pour commencer. Utilisez une courte boucle qui fonctionne sur une route connue comme sur une route nouvelle. Le but est de prendre une décision commune à la fois et de conserver une marge pour récupérer. Après plusieurs observations datées, l’équipe peut améliorer ses notes sans transformer une expérience en règle officielle.',
          'La même boucle fonctionne en solo et en coopération, mais la communication change. Seul, vous prenez vous-même la décision de route et de récupération. En groupe, annoncez la prochaine action et le point de pause pour éviter que les ressources partagées soient dépensées selon des hypothèses différentes. Un point de regroupement aide à se coordonner, mais ne garantit pas que le terrain soit sûr.'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, 'Joueur de PEAK approchant une crête dans une route peu visible', 'Capture d’écran Steam officielle : choisissez l’action suivante depuis la route visible, puis confirmez la ressource et la pause sûre.'),
        bullets: [
          ['1. Confirmer la session', 'Vérifiez qui joue, la route affichée par le jeu et la compréhension du premier objectif.'],
          ['2. Observer avant de s’engager', 'Regardez la première montée ou le premier danger important avant de dépenser l’objet qui peut la protéger.'],
          ['3. Répartir l’utilité', 'Dites qui porte l’aide de route, la nourriture ou la responsabilité de récupération.'],
          ['4. Choisir une pause', 'Repérez un point de regroupement et une condition claire pour faire demi-tour.'],
          ['5. Noter un résultat', 'Après l’essai, enregistrez la date, la route, la version et la décision la plus importante.']
        ]
      },
      {
        title: 'La place des mises à jour pour un débutant',
        paragraphs: [
          'Si vous avez cherché ce qu’est PEAK après l’apparition d’un biome ou d’un patch, commencez par les[[link:peak-game-update|dernières mises à jour]]. Cette page sépare les titres et dates officiels de l’interprétation communautaire afin d’indiquer si une annonce ajoute du contenu, modifie une mécanique ou corrige seulement un problème.',
          'Après une mise à jour, répétez la même boucle : lisez le titre officiel, consultez la carte actuelle, testez une hypothèse de route et notez ce qui a changé. Cette méthode résiste mieux aux versions successives que le fait de mémoriser un conseil écrit pour une ancienne version.'
        ]
      }
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'Qu’est-ce que PEAK ? FAQ débutant',
      items: [
        ['PEAK est-il un jeu multijoueur ?', 'Oui. La fiche Steam officielle mentionne le multijoueur, la coopération et la coopération en ligne, avec des groupes jusqu’à quatre personnes. La même source indique aussi que PEAK se joue en solo.'],
        ['Que fait-on dans PEAK ?', 'On grimpe dans des contextes de route changeants, on lit le terrain, on gère l’équipement et les ressources, et on se coordonne avec le groupe. Les dangers et effets exacts dépendent de la session et de la version.'],
        ['Comment fonctionne la rotation des cartes de PEAK ?', 'Une séquence de route ou de biomes datée peut changer. Consultez la[[link:map-rotation#today-map|carte quotidienne]] pour le relevé du build, puis confirmez la route active dans le jeu, car une page statique ne remplace pas l’état de la session.'],
        ['Combien de joueurs peuvent jouer ensemble dans PEAK ?', 'La description officielle Steam prend en charge un groupe de quatre personnes au maximum. Vérifiez la boutique et les notes de patch si la plateforme ou le multijoueur évoluent.'],
        ['PEAK est-il un jeu de survie ou de grimpe ?', 'La description la plus utile est jeu coopératif de grimpe et de survie : la grimpe est le défi de mouvement central, tandis que les ressources et la récupération créent la pression de survie.'],
        ['Que doit emporter un débutant dans PEAK ?', 'Commencez par le minimum qui protège la prochaine décision visible : aide de route, nourriture ou soutien d’endurance si nécessaire, et plan de récupération. Ne prenez pas une tier list non vérifiée pour une règle universelle.']
      ]
    },
    source: {
      eyebrow: 'Sources et limites',
      title: 'Un guide débutant fondé sur les sources actuelles',
      body: 'Les faits sur la plateforme, les modes, la coopération et le nombre de joueurs viennent de la page Steam officielle de PEAK. Les données de carte et de reset sont des relevés maintenus au build. Les conseils de grimpe sont pratiques et doivent être revérifiés après une mise à jour ou lorsque la session diffère du relevé.',
      links: [
        ['Page Steam officielle de PEAK', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Actualités officielles Steam', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', 'Voir la carte active du jour'],
      ['peak-biomes-list', 'Parcourir la liste des biomes'],
      ['peak-game-update', 'Lire les dernières mises à jour'],
      ['peak-map-rotation-schedule', 'Voir les heures de reset']
    ],
    relatedLabel: 'Guides PEAK associés'
  },

  de: {
    meta: {
      title: 'Was ist PEAK? Einsteiger-Guide zu Gameplay und Karten',
      description: 'Neu bei PEAK? Erfahre, was das Spiel ist, wie es funktioniert, wie die Rotation die Route verändert und wie du die heutige aktive Karte vor dem ersten Aufstieg prüfst.',
      schema: 'Einsteiger-Guide zu PEAK mit Koop-Kletterablauf, Routen- und Ausrüstungsentscheidungen, Kartenrotation und täglicher Kartenprüfung.'
    },
    primaryKeyword: 'was ist PEAK',
    eyebrow: 'Einsteiger-Guide: Der erste Aufstieg erklärt',
    h1: 'Was ist PEAK?',
    intro: 'Was ist PEAK? Ein Koop-Kletter- und Survival-Spiel auf Steam, in dem du Gelände liest, Ressourcen verwaltest und dein Team bis zum Gipfel unterstützt. Dieser Guide erklärt den Ablauf in einfachen Worten und zeigt danach die[[link:map-rotation#today-map|heutige aktive PEAK-Karte]] sowie die Begriffe, die du vor deinem ersten Lauf kennen solltest.',
    answerLabel: 'Die kurze Antwort',
    answer: 'PEAK ist ein Koop-Kletterspiel für Windows auf Steam. Laut offizieller Store-Beschreibung kannst du allein oder mit einer Gruppe von bis zu vier Personen spielen. Die Herausforderung besteht nicht nur darin, nach oben zu kommen: Das Team muss eine wechselnde Route lesen, den Einsatz von Kletterausrüstung planen, Nahrung und Ausdauer verwalten und Fehler auffangen. Karten und Biom-Namen liefern Kontext, aber die in der aktuellen Session angezeigte Route ist die maßgebliche Grundlage für den Lauf.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Einsteiger-FAQ',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK-Spieler koordinieren einen Aufstieg und teilen Ausrüstung', 'Offizieller Steam-Screenshot: Bei PEAK zählen Routenlesen und gemeinsame Entscheidungen.'),
    sections: [
      {
        title: 'PEAK in einem Satz erklärt',
        paragraphs: [
          'PEAK ist ein Koop-Spiel mit dem Schwerpunkt Klettern; der Druck entsteht durch die Route selbst. Auf der offiziellen Steam-Seite stehen Einzelspieler- und Koop-Multiplayer für Gruppen von bis zu vier Personen. „Gemeinsam nach oben“ fasst das Erlebnis zusammen, lässt aber den wichtigen Teil aus: Bei jedem Aufstieg entscheidet das Team, wie weit es gehen kann, was es mitnimmt und wer hilft, wenn der Plan scheitert.',
          'Dieser Text ist ein unabhängiger Spieler-Guide, deshalb trennen wir offizielle Fakten von praktischen Hinweisen. Plattform, Koop-Kategorien und Gruppengröße stammen von Steam. Die folgenden Empfehlungen sind Methoden für Entscheidungen in einem routenbasierten Spiel und keine Vorgabe für ein bestimmtes Loadout oder einen einzigen Weg.'
        ],
        bullets: [
          ['Plattform', 'Der offizielle Store führt PEAK als Windows-Spiel auf Steam.'],
          ['Modi', 'Die Store-Seite nennt Einzelspieler, Mehrspieler, Koop und Online-Koop.'],
          ['Gruppengröße', 'Die offizielle Beschreibung unterstützt Gruppen von bis zu vier Personen.']
        ]
      },
      {
        title: 'So funktioniert der PEAK-Gameplay-Loop',
        paragraphs: [
          'Ein typischer Lauf beginnt mit einer Routenentscheidung und nicht mit einem Kampf-Build. Die Gruppe schaut auf den nächsten Aufstieg, eine Lücke, eine Gefahr oder einen unsicheren Abschnitt und entscheidet, wie lange sie erkundet. Kletterwerkzeuge und Erholungsoptionen sind wertvoll, weil sie Entscheidungen unter Druck absichern. Nahrung und ausdauerbezogene Ressourcen zählen ebenfalls: Ein kurzer Abschnitt kann teuer werden, wenn das Team ausweicht, wartet oder einen Mitspieler rettet.',
          'Kommunikation gehört zur Mechanik, auch wenn das Spiel kein formales Rollensystem vorgibt. Eine Person kann den Weg vorauslesen, eine andere ein nützliches Werkzeug tragen, und alle profitieren von einem vereinbarten Haltepunkt. Ein guter Einsteiger-Habit ist, das nächste Vorhaben, die schützende Ressource und die Bedingung für einen Rückzug laut zu benennen.'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'PEAK-Einsteigerablauf mit Route prüfen, Ausrüstung vorbereiten und klettern', 'Redaktionelle Grafik: Erst Route und Ressourcen abstimmen, dann Ausrüstung vorbereiten und klettern.'),
        table: {
          caption: 'Entscheidungen bei einem PEAK-Aufstieg',
          headers: ['Entscheidung', 'Frage', 'Warum es zählt'],
          rows: [
            ['Route', 'Was ist der nächste verbindliche Schritt?', 'Ein klares Ziel verhindert, dass Ressourcen für jede sichtbare Möglichkeit ausgegeben werden.'],
            ['Ausrüstung', 'Wer nutzt das Werkzeug bei Bedarf?', 'Geteiltes Inventar hilft nur, wenn Zuständigkeit und Zeitpunkt klar sind.'],
            ['Tempo', 'Wo ist die nächste sichere Pause?', 'Eine geplante Pause schützt Ausdauer und schafft einen Sammelpunkt.'],
            ['Erholung', 'Wann drehen wir um?', 'Eine Rückzugsregel verhindert, dass ein Fehler eine Gruppenrettung auslöst.']
          ]
        }
      },
      {
        title: 'PEAK-Karten, Biome und die Rotation',
        paragraphs: [
          'Neue Spieler suchen oft nach[[link:map-rotation#today-map|der Funktionsweise der Kartenrotation]], weil Karte, Route und Biom leicht durcheinandergeraten. Eine Karte ist der Raum, den du durchquerst; eine Route ist der Weg oder Sequenz-Kontext; ein Biom ist eine umfassendere regionale Bezeichnung. Durch die tägliche Rotation wird die Antwort zeitabhängig: Ein datierter Ablauf hilft bei der Planung, ersetzt aber nicht die Route, die deine aktuelle Session zeigt.',
          'Für die[[link:map-rotation#today-map|heutige aktive Karte]] öffnest du den Tageseintrag und prüfst Datum, Quelle, Route und Reset-Status. Wenn die Daten noch ausstehen, zählt die aktuelle Session mehr als ein undatierter alter Screenshot. Die Kartenseite erklärt außerdem, wie man eine Tagesantwort von dauerhaft nützlichen Planungshinweisen trennt, was für ein gutes PEAK-Wiki entscheidend ist.',
          'Für weitere Begriffe kannst du unsere[[link:peak-biomes-list|Biome-Liste]] lesen. Sie führt die aktuell quellenbasierten Namen auf und trennt Biom-Bezeichnungen von einer vollständigen Kartenzuordnung.'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAK-Spieler verwenden ein Seil neben einer gefährlichen Route', 'Offizieller Steam-Screenshot: Sichtbare Route und Gefahr sind hilfreicher als ein Biom-Name als angeblich feste Karte.')
      },
      {
        title: 'So startest du deinen ersten PEAK-Lauf',
        paragraphs: [
          'Du brauchst zum Start keine ungeprüfte Tierlist. Verwende einen kurzen Ablauf, der bei einer bekannten und einer neuen Route funktioniert. Ziel ist, jeweils eine gemeinsame Entscheidung zu treffen und Spielraum für Erholung zu behalten. Nach mehreren datierten Beobachtungen kann das Team seine Notizen verbessern, ohne persönliche Erfahrung als offizielle Regel auszugeben.',
          'Der Ablauf funktioniert allein und im Koop, aber die Kommunikation ändert sich. Allein triffst du Routen- und Erholungsentscheidungen selbst. In der Gruppe kündigst du den nächsten Schritt und den Haltepunkt an, damit niemand gemeinsame Ressourcen mit anderen Annahmen ausgibt. Ein Sammelpunkt hilft bei der Koordination, garantiert aber kein sicheres Gelände.'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, 'PEAK-Spieler nähern sich einer schlecht einsehbaren Höhenroute', 'Offizieller Steam-Screenshot: Von der sichtbaren Route aus den nächsten Schritt wählen und dann Ressource und Pause bestätigen.'),
        bullets: [
          ['1. Session bestätigen', 'Kläre, wer spielt, welche Route das Spiel zeigt und ob alle das erste Ziel verstehen.'],
          ['2. Vor dem Einsatz erkunden', 'Sieh dir den ersten wichtigen Aufstieg oder Gefahrenabschnitt an, bevor du das schützende Werkzeug ausgibst.'],
          ['3. Hilfsmittel verteilen', 'Lege fest, wer Routenhilfe, Nahrung oder Erholung übernimmt.'],
          ['4. Pause wählen', 'Bestimme einen Sammelpunkt und eine klare Bedingung für den Rückzug.'],
          ['5. Eine Notiz speichern', 'Halte nach dem Versuch Datum, Route, Version und die wichtigste Entscheidung fest.']
        ]
      },
      {
        title: 'Wie Updates das Verständnis von Einsteigern verändern',
        paragraphs: [
          'Wenn du wegen eines neuen Bioms oder Patches nach „Was ist PEAK?“ suchst, starte mit den[[link:peak-game-update|neuesten Updates]]. Dort werden offizielle Titel und Daten von Community-Deutungen getrennt, sodass du erkennst, ob eine Meldung neue Inhalte, eine Mechanikänderung oder nur einen Bugfix ankündigt.',
          'Nach einem Update wiederholst du den gleichen Ablauf: offiziellen Titel lesen, aktuelle Karte prüfen, eine Routenannahme testen und die Änderung notieren. Das ist nachhaltiger, als einen Tipp zu lernen, der nur für eine ältere Version geschrieben wurde.'
        ]
      }
    ],
    faq: {
      eyebrow: 'Schnelle Antworten',
      title: 'Was ist PEAK? Einsteiger-FAQ',
      items: [
        ['Ist PEAK ein Mehrspielerspiel?', 'Ja. Der offizielle Steam-Eintrag nennt Mehrspieler, Koop und Online-Koop und unterstützt Gruppen von bis zu vier Personen. Dieselbe Quelle nennt auch den Einzelspielermodus.'],
        ['Was macht man in PEAK?', 'Du kletterst durch wechselnde Routen, liest das Gelände, verwaltest Ausrüstung und Ressourcen und koordinierst dich mit dem Team. Die genauen Gefahren und Gegenstandseffekte hängen von Session und Version ab.'],
        ['Wie funktioniert die PEAK-Kartenrotation?', 'Ein datierter Routen- oder Biom-Ablauf kann sich ändern. Lies die[[link:map-rotation#today-map|Tageskarte]] als Build-Zeile und bestätige danach die aktive Route im Spiel, weil eine statische Seite den Spielzustand nicht ersetzt.'],
        ['Mit wie vielen Personen kann man PEAK spielen?', 'Die offizielle Steam-Beschreibung unterstützt eine Gruppe von bis zu vier Personen. Prüfe Store und Patch-Informationen erneut, wenn sich Plattform- oder Multiplayer-Support ändern.'],
        ['Ist PEAK ein Survival- oder ein Kletterspiel?', 'Die nützlichste Kurzbeschreibung ist Koop-Kletter- und Survival-Spiel: Klettern ist die zentrale Bewegungsaufgabe, Ressourcen und Erholung erzeugen den Survival-Druck.'],
        ['Was sollten Anfänger in PEAK mitnehmen?', 'Beginne mit dem kleinsten Set, das die nächste sichtbare Entscheidung schützt: Routenhilfe, Nahrung oder Ausdauerunterstützung nach Bedarf und ein Erholungsplan. Eine ungeprüfte Tierlist ist keine allgemeine Regel.']
      ]
    },
    source: {
      eyebrow: 'Quellen und Grenzen',
      title: 'Ein Einsteiger-Guide auf Basis aktueller Quellen',
      body: 'Plattform-, Modus-, Koop- und Spielerzahl-Fakten stammen von der offiziellen PEAK-Steam-Seite. Karten- und Reset-Daten sind Build-Zeilen, die diese Website pflegt. Kletterhinweise sind praktische Orientierung und sollten nach Updates oder bei Abweichungen der aktuellen Session erneut geprüft werden.',
      links: [
        ['Offizielle PEAK-Steam-Seite', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Offizielle Steam-News', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', 'Heutige aktive Karte prüfen'],
      ['peak-biomes-list', 'Biome-Liste öffnen'],
      ['peak-game-update', 'Neueste Updates lesen'],
      ['peak-map-rotation-schedule', 'Reset-Zeiten ansehen']
    ],
    relatedLabel: 'Verwandte PEAK-Guides'
  },

  pt: {
    meta: {
      title: 'O que é PEAK? Guia para iniciantes de jogo e mapas',
      description: 'Chegou agora ao PEAK? Entenda que jogo é, como funciona, como a rotação muda a rota e como verificar o mapa ativo de hoje antes da primeira subida.',
      schema: 'Guia para iniciantes de PEAK sobre o ciclo cooperativo de escalada, decisões de rota e equipamento, rotação de mapas e mapa diário.'
    },
    primaryKeyword: 'o que é PEAK',
    eyebrow: 'Guia para iniciantes: entendendo a primeira escalada',
    h1: 'O que é PEAK?',
    intro: 'O que é PEAK? É um jogo cooperativo de escalada e sobrevivência na Steam, no qual você lê o terreno, administra recursos e ajuda a equipe a chegar ao topo. Este guia explica o ciclo principal em linguagem simples e depois mostra o[[link:map-rotation#today-map|mapa ativo de PEAK de hoje]] e os termos úteis antes da primeira partida.',
    answerLabel: 'Resposta curta',
    answer: 'PEAK é um jogo cooperativo de escalada para Windows na Steam. De acordo com a descrição oficial da loja, você pode jogar sozinho ou com um grupo de até quatro pessoas. O desafio não é simplesmente subir: a equipe precisa ler uma rota que muda, decidir quando usar ferramentas de escalada, administrar comida e resistência e se recuperar quando um plano dá errado. Mapas e nomes de biomas oferecem contexto, mas a rota exibida na sessão atual é a referência final para o percurso à sua frente.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ para iniciantes',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'Jogadores de PEAK coordenando uma escalada e compartilhando equipamentos', 'Captura oficial da Steam: PEAK combina leitura de rota com decisões da equipe.'),
    sections: [
      {
        title: 'PEAK explicado em uma frase',
        paragraphs: [
          'PEAK é um jogo cooperativo focado em escalada, e a pressão vem da própria rota. A página oficial da Steam lista jogo solo e multiplayer cooperativo para grupos de até quatro pessoas. “Subir juntos” resume a experiência, mas deixa de fora a parte mais importante: cada subida exige decidir até onde avançar, o que levar e quem poderá ajudar quando o plano falhar.',
          'Este é um guia independente, por isso separamos fatos oficiais de sugestões práticas. Plataforma, categorias de cooperação e número de jogadores vêm da Steam. As recomendações abaixo são métodos para tomar decisões em um jogo baseado em rotas, não uma regra de que todas as equipes devem usar o mesmo equipamento ou seguir o mesmo caminho.'
        ],
        bullets: [
          ['Plataforma', 'A loja oficial lista PEAK como um jogo de Windows na Steam.'],
          ['Modos', 'A página da loja lista categorias de um jogador, multijogador, cooperativo e cooperativo online.'],
          ['Tamanho do grupo', 'A descrição oficial suporta grupos de até quatro pessoas.']
        ]
      },
      {
        title: 'Como funciona o ciclo de jogo do PEAK',
        paragraphs: [
          'Uma tentativa típica começa com uma decisão de rota, não com uma configuração de combate. O grupo observa a próxima escalada, o vão, o perigo ou a passagem incerta e decide quanto tempo gastar explorando. Ferramentas de escalada e opções de recuperação têm valor porque protegem uma decisão sob pressão. Comida e recursos ligados à resistência também importam: uma rota curta pode ficar cara quando a equipe precisa desviar, esperar ou ajudar um companheiro.',
          'A comunicação faz parte da mecânica mesmo sem um sistema formal de funções. Uma pessoa pode observar a rota à frente, outra carregar uma ferramenta útil e todos podem se beneficiar de um ponto de pausa combinado. Um bom hábito para iniciantes é dizer qual será o próximo compromisso, qual recurso o protege e qual situação faria o grupo voltar.'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'Diagrama do fluxo inicial de PEAK: observar a rota, preparar o equipamento e escalar', 'Ilustração editorial: uma tentativa pode começar com uma leitura compartilhada, seguida da preparação e da escalada.'),
        table: {
          caption: 'As decisões por trás de uma escalada no PEAK',
          headers: ['Decisão', 'Pergunta para fazer', 'Por que importa'],
          rows: [
            ['Rota', 'Qual é o próximo compromisso?', 'Um objetivo claro evita gastar recursos em todas as possibilidades visíveis.'],
            ['Equipamento', 'Quem usará a ferramenta quando necessário?', 'O inventário compartilhado só ajuda quando responsabilidade e momento estão claros.'],
            ['Ritmo', 'Onde fica a próxima pausa segura?', 'Uma pausa planejada protege a resistência e cria um ponto de reunião.'],
            ['Recuperação', 'Qual é a regra para voltar?', 'Um plano de retirada impede que um erro vire um resgate de toda a equipe.']
          ]
        }
      },
      {
        title: 'Mapas, biomas e rotação no PEAK',
        paragraphs: [
          'Novos jogadores costumam pesquisar[[link:map-rotation#today-map|como funciona a rotação de mapas]] porque mapa, rota e bioma são fáceis de confundir. Mapa é o espaço percorrido; rota é o caminho ou contexto da sequência; bioma é um rótulo regional mais amplo. A rotação diária torna a resposta temporal: uma sequência datada ajuda no planejamento, mas não substitui a rota exibida pela sessão atual.',
          'Para ver o[[link:map-rotation#today-map|mapa ativo de hoje]], abra o registro diário e confira data, fonte, rota e estado do reset. Se os dados estiverem pendentes, confie no jogo atual em vez de uma captura antiga sem data. A página de mapas também explica como separar uma resposta diária de conselhos de planejamento duradouros, uma diferença essencial para uma wiki de PEAK útil.',
          'Para ampliar o vocabulário, leia nossa[[link:peak-biomes-list|lista de biomas]]. Ela reúne os nomes apoiados pelas fontes e diferencia um rótulo de bioma de uma atribuição completa de mapa.'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Jogador de PEAK usando uma corda perto de um perigo do terreno', 'Captura oficial da Steam: a rota e o perigo visíveis são mais úteis do que tratar um nome de bioma como mapa fixo.')
      },
      {
        title: 'Como começar sua primeira partida de PEAK',
        paragraphs: [
          'Você não precisa decorar uma lista de melhores equipamentos sem verificação para começar. Use um ciclo curto que funcione em uma rota conhecida ou nova. O objetivo é tomar uma decisão compartilhada por vez e manter margem para recuperação. Depois de algumas observações com data, a equipe pode melhorar as anotações sem transformar experiência pessoal em regra oficial.',
          'O mesmo ciclo funciona no modo solo e cooperativo, mas a comunicação muda. Sozinho, você decide a rota e a recuperação. Em grupo, anuncie o próximo compromisso e o ponto de pausa para evitar que recursos compartilhados sejam gastos com suposições diferentes. Um ponto de reunião ajuda na coordenação, mas não garante que o terreno seja seguro.'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, 'Jogador de PEAK se aproximando de uma crista em uma rota de pouca visibilidade', 'Captura oficial da Steam: escolha o próximo movimento pela rota visível e depois confirme o recurso e a pausa segura.'),
        bullets: [
          ['1. Confirme a sessão', 'Veja quem está jogando, qual rota o jogo mostra e se todos entendem o primeiro objetivo.'],
          ['2. Observe antes de se comprometer', 'Analise a primeira escalada ou perigo importante antes de gastar o item que poderia protegê-la.'],
          ['3. Divida a utilidade', 'Diga quem leva ajuda de rota, comida ou fica responsável pela recuperação.'],
          ['4. Escolha uma pausa', 'Identifique um ponto de reunião e uma condição clara para voltar.'],
          ['5. Registre um resultado', 'Depois da tentativa, anote data, rota, versão e a decisão mais importante.']
        ]
      },
      {
        title: 'Como as atualizações entram na visão de um iniciante',
        paragraphs: [
          'Se você pesquisou o que é PEAK por causa de um bioma ou patch novo, comece pelas[[link:peak-game-update|últimas atualizações]]. A página separa títulos e datas oficiais da interpretação da comunidade, para que fique claro se a notícia anuncia conteúdo, muda uma mecânica ou apenas corrige um problema.',
          'Depois de uma atualização, repita o mesmo ciclo: leia o título oficial, consulte o mapa atual, teste uma hipótese de rota e registre o que mudou. Esse método dura mais do que memorizar uma recomendação escrita para uma versão anterior.'
        ]
      }
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'O que é PEAK? FAQ',
      items: [
        ['PEAK é um jogo multijogador?', 'Sim. A página oficial da Steam lista multijogador, cooperativo e cooperativo online, com grupos de até quatro pessoas. A mesma fonte também informa que PEAK pode ser jogado sozinho.'],
        ['O que se faz no PEAK?', 'Você escala por contextos de rota que mudam, lê o terreno, gerencia equipamentos e recursos e coordena o grupo. Os perigos e efeitos dos itens dependem da sessão e da versão atual.'],
        ['Como funciona a rotação de mapas do PEAK?', 'Uma sequência de rota ou bioma com data pode mudar. Leia o[[link:map-rotation#today-map|mapa diário]] para consultar o registro do build e depois confirme a rota ativa no jogo, pois uma página estática não substitui o estado da sessão.'],
        ['Quantas pessoas podem jogar PEAK juntas?', 'A descrição oficial da Steam suporta grupos de até quatro pessoas. Verifique a loja e as informações de patch se o suporte da plataforma ou do multiplayer mudar.'],
        ['PEAK é um jogo de sobrevivência ou de escalada?', 'A descrição mais útil é jogo cooperativo de escalada e sobrevivência: escalar é o desafio central de movimento, enquanto recursos e recuperação criam a pressão de sobrevivência.'],
        ['O que um iniciante deve levar no PEAK?', 'Comece com o mínimo que proteja a próxima decisão visível: ajuda de rota, comida ou apoio à resistência conforme necessário e um plano de recuperação. Não trate uma lista não verificada como regra universal.']
      ]
    },
    source: {
      eyebrow: 'Fontes e limites',
      title: 'Um guia para iniciantes baseado em fontes atuais',
      body: 'Fatos de plataforma, modos, cooperação e número de jogadores vêm da página oficial do PEAK na Steam. Dados de mapas e resets são registros mantidos durante o build. As sugestões de escalada são orientação prática e devem ser revistas após atualizações ou quando a sessão divergir do registro.',
      links: [
        ['Página oficial do PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Notícias oficiais da Steam', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', 'Ver o mapa ativo de hoje'],
      ['peak-biomes-list', 'Explorar a lista de biomas'],
      ['peak-game-update', 'Ler as últimas atualizações'],
      ['peak-map-rotation-schedule', 'Ver os horários de reset']
    ],
    relatedLabel: 'Guias relacionados de PEAK'
  },

  ko: {
    meta: {
      title: 'PEAK 게임이란? 플레이와 지도 초보자 가이드',
      description: 'PEAK를 처음 시작했나요? 어떤 게임인지, 어떻게 진행하는지, 로테이션이 경로를 어떻게 바꾸는지와 오늘 활성 맵을 확인하는 법을 첫 등반 전에 알아보세요.',
      schema: 'PEAK 초보자 가이드로 협동 등반 흐름, 경로와 장비 판단, 지도 로테이션 및 일일 지도 확인 방법을 설명합니다.'
    },
    primaryKeyword: 'PEAK 게임이란',
    eyebrow: '초보자 가이드: 첫 등반 이해하기',
    h1: 'PEAK 게임이란?',
    intro: 'PEAK 게임이란 무엇일까요? Steam에서 즐기는 협동 등반 및 생존 게임으로, 지형을 읽고 자원을 관리하며 팀원과 서로 도와 정상에 도달해야 합니다. 이 가이드는 핵심 플레이 흐름을 쉽게 설명한 뒤[[link:map-rotation#today-map|오늘의 PEAK 지도]]를 확인하는 방법과 첫 출발 전에 알아둘 용어를 안내합니다.',
    answerLabel: '짧은 답변',
    answer: 'PEAK는 Steam의 Windows에서 즐기는 협동 등반 게임입니다. 공식 상점 설명에 따르면 혼자 플레이하거나 최대 4명이 함께 플레이할 수 있습니다. 어려움은 단순히 위로 이동하는 데서 끝나지 않습니다. 팀은 계속 변하는 경로를 읽고, 등반 도구를 사용할 시점을 정하고, 음식과 체력을 관리하며, 계획이 틀어졌을 때 회복해야 합니다. 지도와 바이옴 이름은 배경 정보를 제공하지만, 현재 세션에 표시된 경로가 눈앞의 도전에 대한 최종 기준입니다.',
    tocLabel: '이 페이지의 내용',
    tocFaq: '초보자 FAQ',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK 플레이어들이 장비를 공유하며 등반을 협력하는 모습', 'Steam 공식 스크린샷: PEAK는 경로를 읽고 팀으로 판단하는 게임입니다.'),
    sections: [
      {
        title: 'PEAK를 한 문장으로 설명하면',
        paragraphs: [
          'PEAK는 등반에 초점을 둔 협동 게임이며, 압박감은 경로 자체에서 발생합니다. 공식 Steam 페이지에는 싱글플레이와 최대 4명의 협동 멀티플레이가 함께 안내되어 있습니다. “함께 올라간다”는 말은 표면적인 경험을 설명하지만 중요한 부분을 놓칩니다. 매번 등반할 때마다 팀은 얼마나 더 나아갈지, 무엇을 가져갈지, 계획이 실패했을 때 누가 도울지를 결정해야 합니다.',
          '이 글은 독립적인 플레이어 가이드이므로 공식 사실과 실전 조언을 구분합니다. 플랫폼, 협동 모드와 인원 정보는 Steam을 기준으로 합니다. 아래 조언은 경로 중심 게임에서 판단하기 위한 방법이며, 모든 팀이 같은 장비나 같은 길을 사용해야 한다는 뜻은 아닙니다.'
        ],
        bullets: [
          ['플랫폼', '공식 상점은 PEAK를 Steam Windows 게임으로 소개합니다.'],
          ['모드', '상점 페이지에는 싱글플레이, 멀티플레이, 협동 및 온라인 협동 범주가 표시됩니다.'],
          ['팀 규모', '공식 설명은 최대 4명으로 구성된 팀을 지원합니다.']
        ]
      },
      {
        title: 'PEAK의 핵심 플레이 흐름',
        paragraphs: [
          '일반적인 도전은 전투 세팅보다 경로를 결정하는 일에서 시작합니다. 팀은 다음 등반 구간, 틈, 위험 요소 또는 불확실한 통로를 살펴보고 얼마나 정찰할지 정합니다. 등반 도구와 회복 수단은 압박 속에서 하나의 결정을 보호하기 때문에 가치가 있습니다. 음식과 체력 관련 자원도 중요합니다. 짧아 보이는 경로라도 우회하거나 안전한 동작을 기다리거나 팀원을 돕는 동안 비용이 커질 수 있습니다.',
          '게임에 공식 역할 시스템이 없어도 소통은 플레이 방식의 일부입니다. 한 명은 앞의 경로를 살피고, 다른 한 명은 필요한 도구를 들며, 모두가 미리 정한 휴식 지점을 활용할 수 있습니다. 초보자는 다음에 무엇을 할지, 그 행동을 보호할 자원은 무엇인지, 어떤 상황에서 돌아설지를 말로 공유하는 습관부터 시작하면 좋습니다.'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'PEAK 초보자 흐름도: 경로 관찰, 장비 준비, 등반 시작의 세 단계', '편집 삽화: PEAK에서는 경로를 함께 판단하고 장비를 준비한 뒤 등반을 시작합니다.'),
        table: {
          caption: 'PEAK 등반에서 내려야 하는 결정',
          headers: ['결정', '확인할 질문', '중요한 이유'],
          rows: [
            ['경로', '다음 목표는 어디인가요?', '목표가 분명하면 보이는 모든 가능성에 자원을 낭비하지 않습니다.'],
            ['장비', '필요할 때 누가 도구를 사용하나요?', '공유 인벤토리는 담당자와 타이밍이 분명할 때 도움이 됩니다.'],
            ['속도', '다음 안전한 휴식 지점은 어디인가요?', '계획된 휴식은 체력을 지키고 팀이 다시 모일 위치를 제공합니다.'],
            ['회복', '어떤 상황에서 돌아서나요?', '후퇴 기준이 있으면 한 번의 실수가 팀 전체의 구조 상황으로 번지는 것을 막을 수 있습니다.']
          ]
        }
      },
      {
        title: 'PEAK의 지도, 바이옴과 로테이션 시스템',
        paragraphs: [
          '새 플레이어가[[link:map-rotation#today-map|지도 로테이션이 어떻게 작동하는지]] 찾는 이유는 지도, 경로와 바이옴이라는 말이 쉽게 섞이기 때문입니다. 지도는 이동하는 공간이고, 경로는 길이나 순서의 맥락이며, 바이옴은 더 넓은 지역을 가리키는 이름입니다. 일일 로테이션은 시간에 따라 달라질 수 있으므로 날짜가 있는 순서는 계획에 도움을 줄 수 있지만 현재 세션에 표시된 경로를 대신할 수는 없습니다.',
          '[[link:map-rotation#today-map|오늘의 활성 지도]]를 보려면 일일 기록을 열고 날짜, 출처, 경로와 초기화 상태를 확인하세요. 데이터가 확인 대기 중이라면 날짜 없는 오래된 스크린샷보다 현재 게임을 우선해야 합니다. 지도 페이지는 일일 답변과 오래 사용할 수 있는 계획 조언을 분리해서 읽는 방법도 설명합니다.',
          '용어를 더 익히고 싶다면[[link:peak-biomes-list|바이옴 목록]]을 확인하세요. 출처가 확인된 이름을 정리하고 바이옴 라벨과 전체 지도 배정을 구분합니다.'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAK의 위험한 지형 옆에서 로프를 사용하는 플레이어', 'Steam 공식 스크린샷: 고정된 바이옴 이름보다 현재 보이는 경로와 위험이 더 중요한 판단 자료입니다.')
      },
      {
        title: 'PEAK 첫 플레이를 시작하는 방법',
        paragraphs: [
          '처음부터 확인되지 않은 티어 목록을 외울 필요는 없습니다. 익숙한 경로와 새로운 경로 모두에 적용할 수 있는 짧은 흐름을 사용하세요. 한 번에 하나의 공동 결정을 내리고 회복할 여유를 남기는 것이 목표입니다. 날짜가 있는 관찰 기록이 쌓이면 개인 경험을 공식 규칙으로 착각하지 않으면서 경로 메모를 개선할 수 있습니다.',
          '솔로와 협동 모두 같은 흐름을 사용할 수 있지만 소통의 부담은 달라집니다. 혼자라면 경로와 회복 결정을 직접 내려야 합니다. 팀으로 플레이할 때는 다음 행동과 휴식 지점을 말해 서로 다른 가정으로 공유 자원을 사용하지 않도록 하세요. 집결 지점은 협력 습관이지 지형이 안전하다는 보장은 아닙니다.'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, '시야가 낮은 경로의 높은 지점에 접근하는 PEAK 플레이어', 'Steam 공식 스크린샷: 눈앞의 경로를 바탕으로 다음 행동을 정한 뒤 사용할 자원과 안전한 휴식 지점을 확인합니다.'),
        bullets: [
          ['1. 세션 확인', '누가 플레이하는지, 게임이 어떤 경로를 표시하는지, 모두 첫 목표를 이해했는지 확인하세요.'],
          ['2. 먼저 정찰', '경로를 보호할 도구를 사용하기 전에 첫 번째 주요 등반이나 위험을 살펴보세요.'],
          ['3. 도구 분배', '경로 지원, 음식과 회복을 누가 담당할지 미리 말하세요.'],
          ['4. 휴식 선택', '모일 장소와 돌아설 명확한 조건을 정하세요.'],
          ['5. 결과 기록', '시도 후 날짜, 경로, 버전과 가장 큰 영향을 준 결정을 저장하세요.']
        ]
      },
      {
        title: '초보자가 업데이트를 이해하는 방법',
        paragraphs: [
          '새 바이옴이나 패치가 나와 PEAK 게임이 무엇인지 검색했다면[[link:peak-game-update|최신 업데이트]]부터 확인하세요. 공식 제목과 날짜를 커뮤니티 해석과 분리해 콘텐츠 추가인지, 메커니즘 변경인지, 버그 수정인지 판단할 수 있습니다.',
          '업데이트 후에는 같은 초보자 흐름을 반복하세요. 공식 제목을 읽고, 현재 지도를 확인하고, 경로 가정을 하나 시험한 뒤 무엇이 바뀌었는지 기록합니다. 이전 버전에만 맞는 조언을 외우는 것보다 오래 사용할 수 있는 방법입니다.'
        ]
      }
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK 게임이란? FAQ',
      items: [
        ['PEAK는 멀티플레이 게임인가요?', '네. 공식 Steam 페이지에는 멀티플레이, 협동과 온라인 협동이 표시되어 있고 최대 4명의 팀을 지원한다고 설명합니다. 같은 출처에서 싱글플레이도 안내합니다.'],
        ['PEAK에서 무엇을 하나요?', '변화하는 경로를 등반하고 지형을 읽으며 장비와 자원을 관리하고 팀과 협력합니다. 구체적인 위험과 아이템 효과는 현재 세션과 버전에 따라 달라집니다.'],
        ['PEAK 지도 로테이션은 어떻게 작동하나요?', '날짜가 있는 경로 또는 바이옴 순서는 바뀔 수 있습니다.[[link:map-rotation#today-map|일일 지도]]에서 빌드 기록을 확인한 다음 게임 안에서 활성 경로를 확인하세요. 정적 페이지는 게임 상태를 대신할 수 없습니다.'],
        ['PEAK는 몇 명이 함께 플레이할 수 있나요?', '공식 Steam 설명은 최대 4명으로 구성된 팀을 지원합니다. 플랫폼이나 멀티플레이 지원이 바뀌면 최신 상점과 패치 정보를 다시 확인하세요.'],
        ['PEAK는 생존 게임인가요, 등반 게임인가요?', '협동 등반 및 생존 게임이라고 설명하는 것이 가장 알맞습니다. 등반은 핵심 이동 도전이고 자원과 회복 판단이 생존 압박을 만듭니다.'],
        ['PEAK 초보자는 무엇을 가져가야 하나요?', '다음에 보이는 결정을 보호할 최소한부터 시작하세요. 경로 지원 도구, 필요한 음식이나 체력 지원, 회복 계획을 준비하면 됩니다. 확인되지 않은 티어 목록을 보편적인 규칙으로 취급하지 마세요.']
      ]
    },
    source: {
      eyebrow: '출처와 범위',
      title: '현재 출처에 근거한 초보자 가이드',
      body: '플랫폼, 모드, 협동과 인원 정보는 PEAK 공식 Steam 페이지에서 가져왔습니다. 지도와 초기화 정보는 사이트가 빌드 시 관리하는 기록입니다. 등반 조언은 실전 안내이므로 업데이트 후 또는 현재 세션이 기록과 다를 때 다시 확인해야 합니다.',
      links: [
        ['PEAK 공식 Steam 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam 공식 뉴스', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', '오늘의 활성 지도 확인'],
      ['peak-biomes-list', '바이옴 목록 보기'],
      ['peak-game-update', '최신 업데이트 읽기'],
      ['peak-map-rotation-schedule', '초기화 시간 보기']
    ],
    relatedLabel: '관련 PEAK 가이드'
  },

  it: {
    meta: {
      title: 'Cos’è PEAK? Guida per principianti a gioco e mappe',
      description: 'Hai appena iniziato PEAK? Scopri che gioco è, come funziona, come la rotazione cambia il percorso e come controllare la mappa attiva di oggi prima della prima scalata.',
      schema: 'Guida per principianti di PEAK sul ciclo cooperativo di arrampicata, sulle decisioni di percorso ed equipaggiamento, sulla rotazione e sulla mappa giornaliera.'
    },
    primaryKeyword: 'cos è PEAK',
    eyebrow: 'Guida per principianti: capire la prima scalata',
    h1: 'Cos’è PEAK?',
    intro: 'Cos’è PEAK? È un gioco cooperativo di arrampicata e sopravvivenza su Steam, in cui devi leggere il terreno, gestire le risorse e aiutare la squadra a raggiungere la vetta. Questa guida spiega il ciclo principale in modo semplice e poi mostra la[[link:map-rotation#today-map|mappa attiva di PEAK di oggi]] e i termini utili prima della prima partita.',
    answerLabel: 'La risposta breve',
    answer: 'PEAK è un gioco cooperativo di arrampicata per Windows su Steam. Secondo la descrizione ufficiale del negozio, puoi giocare da solo o con un gruppo fino a quattro persone. La sfida non consiste solo nel muoversi verso l’alto: la squadra deve leggere un percorso variabile, decidere quando usare gli strumenti da arrampicata, gestire cibo e resistenza e recuperare dopo un errore. Mappe e nomi dei biomi danno contesto, ma il percorso mostrato dalla sessione attuale è il riferimento finale per la scalata davanti a te.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ per principianti',
    heroImage: media('/media/peak-coop-climb.webp', 1200, 675, 'Giocatori di PEAK coordinano una scalata e condividono l’equipaggiamento', 'Schermata ufficiale Steam: PEAK richiede di leggere il percorso e decidere insieme.'),
    sections: [
      {
        title: 'PEAK spiegato in una frase',
        paragraphs: [
          'PEAK è un gioco cooperativo incentrato sull’arrampicata e la pressione nasce dal percorso stesso. La pagina ufficiale Steam indica il gioco in solitaria e il multiplayer cooperativo per gruppi fino a quattro persone. “Salire insieme” descrive l’esperienza generale, ma non la parte più utile: ogni ascesa richiede di decidere quanto spingersi avanti, cosa portare e chi potrà aiutare quando il piano fallisce.',
          'Questa è una guida indipendente, quindi separiamo i fatti ufficiali dai consigli pratici. Piattaforma, modalità cooperative e numero di giocatori provengono da Steam. Le indicazioni seguenti sono metodi per prendere decisioni in un gioco basato sui percorsi, non una regola che impone lo stesso equipaggiamento o la stessa strada a ogni squadra.'
        ],
        bullets: [
          ['Piattaforma', 'Il negozio ufficiale presenta PEAK come gioco Windows su Steam.'],
          ['Modalità', 'La pagina del negozio elenca giocatore singolo, multiplayer, cooperativa e cooperativa online.'],
          ['Gruppo', 'La descrizione ufficiale supporta gruppi fino a quattro persone.']
        ]
      },
      {
        title: 'Come funziona il ciclo di gioco di PEAK',
        paragraphs: [
          'Una partita tipica inizia con una decisione sul percorso, non con una build da combattimento. Il gruppo osserva la prossima salita, il varco, il pericolo o il passaggio incerto e decide quanto tempo dedicare all’esplorazione. Gli strumenti da arrampicata e le opzioni di recupero sono importanti perché proteggono una decisione sotto pressione. Anche cibo e risorse legate alla resistenza contano: un percorso breve può diventare costoso se bisogna deviare, aspettare o aiutare un compagno.',
          'La comunicazione fa parte della meccanica anche senza un sistema ufficiale di ruoli. Un giocatore può leggere il percorso in anticipo, un altro portare uno strumento utile e tutti possono beneficiare di una pausa concordata. Una buona abitudine per chi inizia è dire quale sarà il prossimo impegno, quale risorsa lo protegge e quale situazione farebbe tornare indietro la squadra.'
        ],
        image: media('/media/what-is-peak-game-beginner-flow.webp', 1024, 1024, 'Schema del flusso iniziale di PEAK: osservare il percorso, preparare l’equipaggiamento e iniziare la scalata', 'Illustrazione editoriale: una partita può iniziare condividendo la lettura del percorso, preparando l’equipaggiamento e poi arrampicandosi.'),
        table: {
          caption: 'Le decisioni dietro una scalata in PEAK',
          headers: ['Decisione', 'Domanda da fare', 'Perché conta'],
          rows: [
            ['Percorso', 'Qual è il prossimo impegno?', 'Un obiettivo chiaro evita di spendere risorse per ogni possibilità visibile.'],
            ['Equipaggiamento', 'Chi userà lo strumento quando serve?', 'L’inventario condiviso aiuta solo quando responsabilità e momento sono chiari.'],
            ['Ritmo', 'Dove si trova la prossima pausa sicura?', 'Una pausa pianificata protegge la resistenza e crea un punto di ritrovo.'],
            ['Recupero', 'Qual è la regola per tornare indietro?', 'Un piano di ritirata impedisce che un errore diventi un salvataggio di tutta la squadra.']
          ]
        }
      },
      {
        title: 'Mappe, biomi e rotazione in PEAK',
        paragraphs: [
          'I nuovi giocatori cercano spesso[[link:map-rotation#today-map|come funziona la rotazione delle mappe]] perché mappa, percorso e bioma si confondono facilmente. La mappa è lo spazio da attraversare; il percorso è il sentiero o il contesto della sequenza; il bioma è un’etichetta regionale più ampia. La rotazione giornaliera rende la risposta legata al tempo: una sequenza datata aiuta a pianificare, ma non sostituisce il percorso mostrato dalla sessione attuale.',
          'Per vedere la[[link:map-rotation#today-map|mappa attiva di oggi]], apri la voce giornaliera e controlla data, fonte, percorso e stato del reset. Se i dati sono in attesa, dai priorità al gioco attuale invece di una vecchia immagine senza data. La pagina delle mappe spiega anche come separare una risposta giornaliera dai consigli di pianificazione che restano utili, una distinzione importante per una wiki PEAK.',
          'Per il vocabolario più ampio, leggi la nostra[[link:peak-biomes-list|lista dei biomi]]. Raccoglie i nomi supportati dalle fonti e distingue un’etichetta di bioma dall’assegnazione completa di una mappa.'
        ],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Giocatore di PEAK che usa una corda accanto a un pericolo del terreno', 'Schermata ufficiale Steam: il percorso e il pericolo visibili sono più utili di un nome di bioma trattato come una mappa fissa.')
      },
      {
        title: 'Come iniziare la prima partita di PEAK',
        paragraphs: [
          'Non devi memorizzare una tier list non verificata per iniziare. Usa un ciclo breve che funzioni su un percorso conosciuto o nuovo. L’obiettivo è prendere una decisione condivisa alla volta e conservare margine per recuperare. Dopo alcune osservazioni datate, la squadra potrà migliorare le note senza trasformare l’esperienza personale in una regola ufficiale.',
          'Lo stesso ciclo funziona in solitaria e in cooperativa, ma cambia il peso della comunicazione. Da solo prendi le decisioni sul percorso e sul recupero. In gruppo, annuncia il prossimo impegno e il punto di pausa per evitare che le risorse condivise vengano spese sulla base di ipotesi diverse. Un punto di ritrovo aiuta il coordinamento, ma non garantisce che il terreno sia sicuro.'
        ],
        image: media('/media/peak-climb-ridge.webp', 1200, 675, 'Giocatore di PEAK che si avvicina a una cresta su un percorso poco visibile', 'Schermata ufficiale Steam: scegli il prossimo movimento dal percorso visibile, poi conferma la risorsa e la pausa sicura.'),
        bullets: [
          ['1. Conferma la sessione', 'Controlla chi gioca, quale percorso mostra il gioco e se tutti comprendono il primo obiettivo.'],
          ['2. Esplora prima di impegnarti', 'Osserva la prima salita o il pericolo importante prima di consumare l’oggetto che potrebbe proteggerla.'],
          ['3. Dividi l’utilità', 'Stabilisci chi porta il supporto al percorso, il cibo o la responsabilità del recupero.'],
          ['4. Scegli una pausa', 'Individua un punto di ritrovo e una condizione chiara per tornare indietro.'],
          ['5. Registra un risultato', 'Dopo il tentativo, salva data, percorso, versione e la decisione che ha inciso di più.']
        ]
      },
      {
        title: 'Come inserire gli aggiornamenti nella guida per principianti',
        paragraphs: [
          'Se hai cercato cos’è PEAK dopo un nuovo bioma o una patch, parti dagli[[link:peak-game-update|ultimi aggiornamenti]]. La pagina separa titoli e date ufficiali dall’interpretazione della community, così puoi capire se un annuncio aggiunge contenuti, cambia una meccanica o corregge solo un errore.',
          'Dopo un aggiornamento, ripeti lo stesso ciclo: leggi il titolo ufficiale, controlla la mappa attuale, prova una sola ipotesi sul percorso e registra cosa è cambiato. È più duraturo che memorizzare un consiglio scritto per una versione precedente.'
        ]
      }
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'Cos’è PEAK? FAQ',
      items: [
        ['PEAK è un gioco multiplayer?', 'Sì. La pagina Steam ufficiale include multiplayer, cooperativa e cooperativa online e descrive gruppi fino a quattro persone. La stessa fonte indica anche il gioco in solitaria.'],
        ['Cosa si fa in PEAK?', 'Si attraversano percorsi variabili arrampicandosi, si legge il terreno, si gestiscono equipaggiamento e risorse e si collabora con il gruppo. Pericoli ed effetti degli oggetti dipendono dalla sessione e dalla versione.'],
        ['Come funziona la rotazione delle mappe di PEAK?', 'Una sequenza datata di percorsi o biomi può cambiare. Leggi la[[link:map-rotation#today-map|mappa giornaliera]] per il record del build e poi conferma nel gioco il percorso attivo, perché una pagina statica non sostituisce lo stato della sessione.'],
        ['Quante persone possono giocare insieme a PEAK?', 'La descrizione ufficiale Steam supporta gruppi fino a quattro persone. Controlla nuovamente negozio e patch se cambiano il supporto della piattaforma o del multiplayer.'],
        ['PEAK è un gioco di sopravvivenza o di arrampicata?', 'La descrizione più utile è gioco cooperativo di arrampicata e sopravvivenza: arrampicarsi è la sfida di movimento centrale, mentre risorse e recupero creano la pressione della sopravvivenza.'],
        ['Cosa dovrebbe portare un principiante in PEAK?', 'Inizia con il minimo che protegga la prossima decisione visibile: supporto al percorso, cibo o aiuto alla resistenza se serve e un piano di recupero. Non trattare una tier list non verificata come regola universale.']
      ]
    },
    source: {
      eyebrow: 'Fonti e limiti',
      title: 'Una guida per principianti basata sulle fonti attuali',
      body: 'I fatti su piattaforma, modalità, cooperazione e numero di giocatori provengono dalla pagina ufficiale di PEAK su Steam. I dati su mappe e reset sono record mantenuti durante il build. I consigli di arrampicata sono indicazioni pratiche e vanno ricontrollati dopo gli aggiornamenti o quando la sessione differisce dal record.',
      links: [
        ['Pagina ufficiale di PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Notizie ufficiali Steam', 'https://store.steampowered.com/news/app/3527290']
      ]
    },
    related: [
      ['map-rotation', 'Controlla la mappa attiva di oggi'],
      ['peak-biomes-list', 'Apri la lista dei biomi'],
      ['peak-game-update', 'Leggi gli ultimi aggiornamenti'],
      ['peak-map-rotation-schedule', 'Vedi gli orari del reset']
    ],
    relatedLabel: 'Guide PEAK correlate'
  }
};
