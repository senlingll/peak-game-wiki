const articleLink = (slug, label) => '[[link:' + slug + '|' + label + ']]';
const mapLink = (label) => articleLink('map-rotation#today-map', label);

const sourceLinks = {
  steam: 'https://store.steampowered.com/app/3527290/PEAK/',
  patch: 'https://store.steampowered.com/news/app/3527290/view/716788653799506284',
};

export const rescueClawTranslations = {
  zh: {
    meta: {
      title: 'PEAK Rescue Claw 救援爪指南：范围、拉回队友与合作救援',
      description: '了解如何在 PEAK 中找到 Rescue Claw、瞄准并拉回队友、如何判断有效范围，以及它是否影响成就；内容依据官方 2.04.a 更新说明。',
      schema: '一份以来源为依据的 PEAK Rescue Claw 指南，涵盖 2.04.a 中 THE KILN 的行李背景、队友瞄准、未公布的范围、成就不确定性与合作恢复规划。',
    },
    primaryKeyword: 'PEAK Rescue Claw 救援爪',
    eyebrow: '合作救援指南 - 官方 2.04.a 背景',
    h1: 'PEAK Rescue Claw 救援爪指南：范围、拉回队友与合作救援',
    intro: 'Rescue Claw 是 PEAK 中用于合作恢复的工具：队友坠落、卡在不利位置，或 Scout 需要脱离险境时，它能为队伍争取重新接触路线的机会。官方 2.04.a 更新说明了它作用在队友身上时的关键行为；本页把已确认的来源信息与实战判断分开。想先了解攀登循环，可以阅读' + articleLink('how-to-play-peak', 'PEAK 新手攀登指南') + '，再用' + articleLink('peak-game-tips', '合作生存技巧') + '准备下一次出发。',
    answerLabel: '简短答案',
    answer: '当队友需要重新接触地形时使用 Rescue Claw。根据官方 THE KILN 更新的行李背景寻找它，瞄准队友，按当前游戏提示触发，并让操作员站在可以继续恢复的位置。官方来源确认爪子完成后队友的布娃娃状态时间会缩短，但没有公布精确范围、保证落点或成就触发条件。',
    tocLabel: '本页内容',
    tocFaq: 'Rescue Claw FAQ',
    heroImage: {
      alt: 'PEAK 登山者使用爪索帮助队友到达山崖的编辑插图',
      caption: '编辑插图：Rescue Claw 是团队恢复决策，不保证每次都能安全落地。',
    },
    sections: [
      {
        title: 'Rescue Claw 能为合作队伍做什么',
        paragraphs: [
          '救援工具和路线工具的任务不同。当队友掉到下一个安全抓点下方、卡在危险边缘，或 Scout 暴露在难以处理的位置时，队伍需要把一次错误移动转化为重新抓住地形的机会。Rescue Claw 属于这个恢复计划：携带者决定时机，队友说清下一个抓点，其余成员负责保护路线。',
          '官方补丁的表述比许多社区总结更窄。Patch 2.04.a 说明，对朋友使用 Rescue Claw 会让对方处于布娃娃状态的时间变短，爪子完成后更容易抓住某个物体。这确认了面向朋友的合作互动，以及完成后的恢复帮助；它并没有保证每次救援都能成功。',
        ],
        bullets: [
          ['判断是否需要救援', '当下一步重点是恢复队友，而不是继续向上时，再考虑使用工具。'],
          ['先说清抓点', '让队友在尝试前说出想要接触的表面或平台。'],
          ['保护操作员', '让使用 Rescue Claw 的玩家站在不需要马上接受第二次救援的位置。'],
        ],
      },
      {
        title: '如何在 PEAK 中获得 Rescue Claw',
        paragraphs: [
          '目前能由官方确认的获取背景是 THE KILN 的 luggage spawner（行李生成点）。在 Patch 2.04.a《THE KILN IS BACK》中，开发者写道：“Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.” 这句话的实际用法是：检查当前路线提供的行李机会，尤其留意公告点名的生成点。',
          '这段话没有指出 Rescue Claw 专属坐标、刷新计时、掉落百分比或保证出现的规则。如果你找到的行李里没有该工具，应记录路线和版本，而不是把一局经历当成永久生成规律。当前游戏和最新官方更新的优先级高于旧清单。',
        ],
        bullets: [
          ['查看公告提到的行李背景', '根据当前路线和更新背景检查对应的 luggage spawner。'],
          ['控制预期', '补丁改变了行李背景，但没有承诺每次搜索都会得到 Rescue Claw。'],
          ['核对当前版本', '旧物品清单与当前游戏不一致时，以游戏和最新官方说明为准。'],
        ],
      },
      {
        title: '如何瞄准并对队友使用 Rescue Claw',
        paragraphs: [
          '把使用过程当成一次需要沟通的交接。操作员应站在仍然有恢复余地的位置，面向队友，在触发当前提示前对准目标队友。队友要说清准备抓住的平台或边缘，其他成员则避免把一次险情扩大成新的险情。',
          '官方 2.04.a 的关键原文是：“Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” 本页将其译为：“对朋友使用 Rescue Claw 后，对方处于布娃娃状态的时间会缩短，爪子完成后更容易抓住某个物体。” 这是便于中文读者理解的译文，不是官方中文文本。官方原文出处：Patch 2.04.a THE KILN IS BACK，Steam News，URL：' + sourceLinks.patch + '。',
          '当缺口、短距离坠落或 Scout 遇险变成恢复问题，而不再是普通攀登问题时，才使用这个工具。救援仍然需要接收者、看得见的恢复表面，以及让操作员保持安全的位置。以上是团队实践，不是官方公布的范围或成功保证。',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Steam 官方截图中的 PEAK 队友在陡峭路线旁协作攀登',
          caption: 'Steam 官方截图：保持间距并清楚沟通路线，才能给救援尝试留下空间。',
        },
        bullets: [
          ['触发前', '说清目标队友、准备接触的表面，以及谁负责这次操作。'],
          ['拉回过程中', '让队伍保持足够稳定以便沟通，不要把一次险情变成多人的险情。'],
          ['完成后', '等队友重新接触地形，再让队伍继续前进。'],
        ],
      },
      {
        title: 'Rescue Claw 的范围有多大？',
        paragraphs: [
          '本页采用的官方 PEAK 来源没有公布 Rescue Claw 的精确范围。本指南不会把社区测量当成已确认数据，也不会把视觉距离估计写成保证。直接回答“Rescue Claw 的范围是多少？”：请在游戏中核对当前瞄准行为；这里没有官方数字。',
          '如果要自己观察，应站在稳定位置，在视线中同时看到队友和可以恢复的表面。当前提示不接受目标时就靠近一些，不要在真正的救援边缘进行测试。记录要绑定游戏版本，因为后续补丁可能改变行为。这是一种谨慎的观察方法，不是官方测量。',
          '范围也不能替代路线规划。更远的作用距离不能让危险落点变安全；即使距离较短，只要队友就在平台下方，也可能仍然有价值。先读路线，再决定 Rescue Claw 是否值得消耗剩余的恢复选项。',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Steam 官方截图展示 PEAK 中需要判断下一个安全位置的攀登路线',
          caption: 'Steam 官方截图：依赖工具前，先检查路线和可恢复空间。',
        },
      },
      {
        title: 'Rescue Claw 会影响成就吗？',
        paragraphs: [
          '官方 2.04.a 公告没有说使用 Rescue Claw 会解锁成就、徽章或特殊奖励。公告讨论的是队友互动和较短的布娃娃状态时间，并没有定义成就条件。因此，本页不会声称拉回队友计入某个特定解锁。',
          '如果你在测试一个疑似目标，请记录具体动作、模式、队友状态、路线背景和当前版本，然后查看平台结果。在当前游戏或官方 Steam 记录确认前，把社区报告当作线索。关于平台成就和游戏内进度的区别，请阅读' + articleLink('achievements', 'PEAK 成就指南') + '。',
          '一次没有解锁并不能证明工具失效。条件可能与工具无关、受版本影响，或者只是没有写进补丁说明。把救援建议和成就猜测分开，避免把有用的合作技巧变成错误承诺。',
        ],
      },
      {
        title: 'Rescue Claw 与绳索工具如何配合',
        paragraphs: [
          'Rescue Claw 是应对型工具：它服务于“队友需要恢复机会时怎么办”。绳索工具是路线准备选择：它服务于“队伍要怎样接近下一个障碍”。不要因为绳索路线看起来别扭就消耗救援工具，也不要以为绳索能代替队友恢复计划。这是规划上的职责区分，不是对隐藏物品数值的推断。',
          '可以在首页物品库比较当前条目：' + articleLink('home#database', 'Rescue Claw 物品卡') + '、' + articleLink('home#database', 'Anti-Rope Cannon 条目') + '和' + articleLink('home#database', 'Rope Shooter 条目') + '。物品库把名称和大致的团队或路线角色放在一起；具体效果仍应在游戏中核对。',
          '出发前决定谁携带恢复工具、谁负责报路线，以及下一步失败后队伍要怎样处理。然后' + mapLink('查看今天的 PEAK 地图') + '，让装备选择从当前路线背景开始。缺口多的路线可能需要不同准备；如果主要风险是队友分离，重点就应放在恢复计划。',
        ],
        bullets: [
          ['路线工具', '为预计要穿越的地形做准备。'],
          ['恢复工具', '为偏离预定路线的队友保留清楚的处理方案。'],
          ['版本核对', '更新后重新阅读当前物品提示和官方公告背景。'],
        ],
      },
      {
        title: 'Rescue Claw 合作使用检查清单',
        paragraphs: [
          '尝试前可以按下面的顺序快速沟通：确认目标，说明落点，确认操作员位置，等当前提示接受队友后再触发，最后等队友重新抓住地形再移动。如果任何一步说不清，就先暂停并重新建立位置。',
          '这份清单是基于实战经验的建议，不是官方规定的操作顺序。它能避免队伍把 Rescue Claw 当成慌乱时的按钮，并把尚未验证的部分明确标出来。官方补丁提供互动事实，时机、沟通和判断仍由队伍负责。',
        ],
        bullets: [
          ['1. 目标', '说出需要这次恢复尝试的队友。'],
          ['2. 落点', '约定队友在动作完成后要尝试抓住的表面。'],
          ['3. 位置', '让操作员停在稳定且仍可恢复的路线位置。'],
          ['4. 确认', '以当前游戏提示为准，等队友重新接触地形后再前进。'],
        ],
      },
      {
        title: '了解 Rescue Claw 后的下一步',
        paragraphs: [
          'Rescue Claw 最适合成为路线计划的一部分，而不是冒险跳跃的许可。下一局前可以阅读' + articleLink('peak-game-tips', '合作生存技巧') + '，复习' + articleLink('how-to-play-peak', '新手攀登指南') + '，并' + mapLink('查看今天的 PEAK 地图') + '了解当前路线背景。回到游戏后，再按你实际游玩的版本核对提示、目标和落点。',
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'Rescue Claw FAQ',
      items: [
        ['Rescue Claw 在 PEAK 中的有效范围多大？', '本页采用的官方来源没有公布精确范围。请在游戏中从稳定位置测试当前瞄准行为，不要把社区测量当作官方数据。'],
        ['Rescue Claw 能抓住队友吗？', '可以。官方 2.04.a 说明可以对朋友使用 Rescue Claw，并表示爪子完成后朋友更容易抓住某个物体。公告没有保证必定抓住，也没有定义所有瞄准条件。'],
        ['Rescue Claw 会影响成就吗？', '官方 2.04.a 公告没有确认任何成就效果。它说明了队友互动，没有说明成就条件；在作出判断前，请核对当前游戏和 Steam 记录。'],
      ],
    },
    source: {
      eyebrow: '官方来源与限制',
      title: 'Patch 2.04.a 确认了什么',
      body: '本指南的主要来源是 Steam 官方文章《THE KILN IS BACK》（Patch 2.04.a）。公告记录了行李变化，并写道：“Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” 本页将其译为中文，译文不是官方中文文本。官方原文出处：Patch 2.04.a THE KILN IS BACK，Steam News，URL：' + sourceLinks.patch + '。公告没有公布精确范围、坐标、刷新率、掉落率或成就条件；这些部分有意保留为待核对信息。',
      links: [
        ['Patch 2.04.a：THE KILN IS BACK', sourceLinks.patch],
        ['PEAK Steam 官方页面', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', '查看今天的 PEAK 地图'],
      ['peak-game-tips', '准备合作救援'],
      ['how-to-play-peak', '复习攀登基础'],
      ['achievements', '查看成就背景'],
    ],
    relatedLabel: '相关 PEAK 指南',
  },

  es: {
    meta: {
      title: 'Guía de Rescue Claw en PEAK: alcance, tirones y rescates cooperativos',
      description: 'Aprende a conseguir Rescue Claw en PEAK, apuntar a tus compañeros, entender su alcance no publicado y comprobar su relación con los logros según el parche oficial 2.04.a.',
      schema: 'Guía de PEAK basada en fuentes sobre Rescue Claw: contexto de equipaje de THE KILN en 2.04.a, objetivos aliados, alcance no publicado, logros y recuperación cooperativa.',
    },
    primaryKeyword: 'Rescue Claw PEAK',
    eyebrow: 'Guía de rescate cooperativo - contexto oficial 2.04.a',
    h1: 'Guía de Rescue Claw en PEAK: alcance, tirones y rescates cooperativos',
    intro: 'Rescue Claw es la herramienta de recuperación cooperativa de PEAK para cuando un compañero cae, queda atrapado en una posición mala o el Scout necesita salir de una situación expuesta. La actualización oficial 2.04.a explica su comportamiento clave al usarla sobre un compañero; esta guía separa ese dato comprobado de los consejos de partida. Para entender el ciclo de escalada, empieza por ' + articleLink('how-to-play-peak', 'la guía para principiantes') + ' y consulta ' + articleLink('peak-game-tips', 'los consejos de supervivencia cooperativa') + ' antes de convertir un rescate en tu plan principal.',
    answerLabel: 'Respuesta breve',
    answer: 'Usa Rescue Claw cuando un compañero necesite volver a conectar con el terreno. Búscala en el contexto de equipaje descrito por la actualización de THE KILN, apunta al amigo, activa el aviso actual del juego y mantén una posición de recuperación estable. La fuente confirma un estado de ragdoll más corto después de completar el agarre, pero no publica un alcance exacto, un aterrizaje garantizado ni una condición de logro.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas frecuentes sobre Rescue Claw',
    heroImage: {
      alt: 'Ilustración editorial de un escalador de PEAK usando una garra para ayudar a un compañero a alcanzar un saliente',
      caption: 'Ilustración editorial: Rescue Claw es una decisión de recuperación del equipo, no un aterrizaje garantizado.',
    },
    sections: [
      {
        title: 'Qué aporta Rescue Claw a un equipo cooperativo',
        paragraphs: [
          'Una herramienta de rescate tiene una función distinta de una herramienta de ruta. Cuando un compañero cae por debajo del siguiente agarre seguro, queda atrapado en un borde malo o deja al Scout en una posición expuesta, el equipo necesita convertir un movimiento fallido en otra oportunidad de agarrar el terreno. Rescue Claw forma parte de esa conversación: quien la lleva decide el momento, el compañero comunica su siguiente agarre y el resto protege la ruta.',
          'El texto oficial del parche es más limitado que muchos resúmenes de la comunidad. El Patch 2.04.a dice que usar Rescue Claw sobre un amigo hará que permanezca menos tiempo en ragdoll, lo que le facilita agarrarse a algo cuando la garra termina. Esto confirma una interacción cooperativa dirigida a un amigo y una ayuda de recuperación posterior; no garantiza que todos los rescates tengan éxito.',
        ],
        bullets: [
          ['Reconoce el rescate', 'Usa la herramienta cuando la decisión inmediata sea recuperar a un compañero, no simplemente subir más.'],
          ['Llama al agarre', 'Pide al compañero que nombre la superficie o el saliente que intenta alcanzar antes del intento.'],
          ['Protege al operador', 'Mantén a quien usa la garra en una zona donde no necesite otro rescate de inmediato.'],
        ],
      },
      {
        title: 'Cómo conseguir Rescue Claw en PEAK',
        paragraphs: [
          'El contexto de obtención que confirma la fuente oficial es el luggage spawner de THE KILN. En Patch 2.04.a, THE KILN IS BACK, los desarrolladores escribieron: “Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.” La conclusión práctica es revisar las oportunidades de equipaje de la ruta actual, especialmente el spawner mencionado en la nota.',
          'La frase no identifica una coordenada exclusiva de Rescue Claw, un temporizador de renovación, un porcentaje de aparición ni una aparición garantizada. Si no está en el equipaje que encuentras, registra la ruta y la versión en vez de tomar una partida como prueba de una regla permanente. El juego actual y las notas oficiales recientes tienen prioridad sobre una lista antigua.',
        ],
        bullets: [
          ['Busca el contexto de equipaje nombrado', 'Revisa el luggage spawner relacionado con la ruta y la actualización actuales.'],
          ['Mantén expectativas realistas', 'El parche cambia el contexto del equipaje, pero no promete que cada búsqueda produzca Rescue Claw.'],
          ['Comprueba la versión actual', 'Si una lista vieja contradice el juego, usa la partida y las notas oficiales actuales.'],
        ],
      },
      {
        title: 'Cómo apuntar y usar Rescue Claw sobre un compañero',
        paragraphs: [
          'Trata el uso como una entrega coordinada. El operador debe colocarse donde la ruta siga siendo recuperable, mirar al compañero y apuntar al amigo previsto antes de activar el aviso actual. El compañero debe indicar el agarre o saliente que busca, mientras el resto evita crear una segunda emergencia.',
          'El comportamiento clave de 2.04.a aparece así en el anuncio oficial: “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” La traducción de esta guía es: “Al usar Rescue Claw sobre un amigo, permanecerá menos tiempo en ragdoll, por lo que le resultará más fácil agarrarse a algo cuando la garra termine.” Es una traducción para lectores, no un texto oficial localizado. Fuente del original oficial: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '.',
          'Usa la herramienta cuando un hueco, una caída corta o un Scout en problemas convierta la situación en una decisión de recuperación y no en una escalada normal. El intento todavía necesita un receptor, una superficie visible y una posición segura para quien opera la herramienta. Son prácticas de equipo, no garantías publicadas de alcance o éxito.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Captura oficial de Steam de compañeros de PEAK coordinando una escalada en una ruta empinada',
          caption: 'Captura oficial de Steam: la distancia y las llamadas claras de ruta dan espacio al intento de rescate.',
        },
        bullets: [
          ['Antes de activar', 'Nombra al compañero, la superficie de recuperación y quién se encargará del intento.'],
          ['Durante el tirón', 'Mantén al equipo lo bastante quieto para comunicarse y no conviertas una emergencia en varias.'],
          ['Al terminar', 'Deja que el compañero vuelva a conectar con el terreno antes de reanudar la ruta.'],
        ],
      },
      {
        title: 'Qué alcance tiene Rescue Claw',
        paragraphs: [
          'Las fuentes oficiales de PEAK utilizadas aquí no publican un alcance preciso para Rescue Claw. Esta guía no repetirá una medición de la comunidad como dato confirmado ni convertirá una estimación visual en una promesa. La respuesta directa a “¿cuál es el alcance de Rescue Claw?” es comprobar el apuntado actual dentro del juego; aquí no hay una cifra oficial.',
          'Para observarlo en una partida, prueba desde una posición estable con el compañero y una superficie recuperable a la vista. Acércate si el aviso actual no acepta el objetivo y evita experimentar en el borde de un intento real. Vincula tus notas a la versión del juego, porque un parche posterior puede cambiar el comportamiento. Es un método prudente, no una medición publicada.',
          'El alcance tampoco sustituye la planificación de la ruta. Una mayor distancia no vuelve seguro un aterrizaje peligroso, y una distancia corta puede seguir siendo útil si el compañero está justo debajo de un saliente. Lee primero la ruta y después decide si Rescue Claw merece tus opciones de recuperación restantes.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Captura oficial de Steam de una ruta de PEAK donde el equipo debe leer la siguiente posición segura',
          caption: 'Captura oficial de Steam: revisa la ruta y el espacio de recuperación antes de depender de un objeto.',
        },
      },
      {
        title: 'Afecta Rescue Claw a algún logro',
        paragraphs: [
          'El anuncio oficial 2.04.a no afirma que usar Rescue Claw desbloquee un logro, una insignia o una recompensa especial. Habla de la interacción con un amigo y del estado de ragdoll más corto, pero no define una condición de logro. Por eso esta página no asegura que tirar de un compañero cuente para un desbloqueo concreto.',
          'Si estás probando un objetivo supuesto, anota la acción exacta, el modo, el estado del compañero, el contexto de la ruta y la versión actual; después revisa el resultado de la plataforma. Toma los informes de la comunidad como pistas hasta que el juego actual o un registro oficial de Steam los confirme. Para distinguir logros de plataforma y progreso del juego, consulta la ' + articleLink('achievements', 'guía de logros de PEAK') + '.',
          'Un desbloqueo fallido no demuestra que la herramienta esté rota. La condición puede ser ajena, depender de la versión o no estar documentada en la nota del parche. Mantén separadas la recomendación de rescate y la hipótesis sobre logros para no convertir una técnica cooperativa útil en una promesa falsa.',
        ],
      },
      {
        title: 'Rescue Claw frente a las herramientas de cuerda',
        paragraphs: [
          'Rescue Claw es una herramienta de respuesta: sirve para decidir qué hacer cuando un compañero necesita una oportunidad de recuperación. Una herramienta de cuerda es una elección de preparación de ruta: sirve para decidir cómo se acercará el equipo al próximo obstáculo. No gastes una herramienta de rescate solo porque una ruta de cuerda parece incómoda, ni supongas que una cuerda sustituye el plan de recuperación de un compañero. Son funciones de planificación, no estadísticas ocultas.',
          'Compara las fichas actuales de la base de datos de la página de inicio: la ' + articleLink('home#database', 'ficha de Rescue Claw') + ', la ' + articleLink('home#database', 'entrada de Anti-Rope Cannon') + ' y la ' + articleLink('home#database', 'entrada de Rope Shooter') + '. Las fichas mantienen juntos los nombres y sus funciones generales de equipo o ruta; los efectos exactos deben comprobarse en el juego.',
          'Antes de salir, decide quién lleva la recuperación, quién comunica la ruta y qué hará el equipo si falla el siguiente movimiento. Después ' + mapLink('consulta el mapa de PEAK de hoy') + ' para que la carga empiece con el contexto de la ruta actual. Una ruta con huecos incómodos puede pedir una preparación distinta de otra donde el riesgo inmediato sea separar a un compañero.',
        ],
        bullets: [
          ['Herramienta de ruta', 'Prepárate para el terreno que esperas cruzar.'],
          ['Herramienta de recuperación', 'Conserva un plan claro para el compañero que pierda la línea prevista.'],
          ['Comprobación de versión', 'Vuelve a leer el aviso actual del objeto y el contexto oficial después de un parche.'],
        ],
      },
      {
        title: 'Lista rápida para usar Rescue Claw en cooperativo',
        paragraphs: [
          'Haz esta llamada breve antes del intento: identifica al objetivo, nombra el lugar de aterrizaje, confirma la posición del operador, activa cuando el aviso acepte al amigo y espera a que el compañero vuelva a agarrarse antes de mover al grupo. Si algo no está claro, pausa y reconstruye la posición.',
          'Esta lista es orientación basada en la experiencia, no una secuencia oficial. Evita que el equipo trate la garra como un botón de pánico y deja visibles las partes no verificadas. El parche oficial aporta el detalle de la interacción; el equipo aporta el momento, la comunicación y el criterio.',
        ],
        bullets: [
          ['1. Objetivo', 'Llama al amigo que necesita el intento de recuperación.'],
          ['2. Aterrizaje', 'Acordad la superficie que el compañero intentará agarrar al terminar.'],
          ['3. Posición', 'Mantén al operador en una parte estable y recuperable de la ruta.'],
          ['4. Confirmación', 'Usa el aviso actual del juego y deja que el compañero se reconecte antes de continuar.'],
        ],
      },
      {
        title: 'Siguientes pasos después de aprender Rescue Claw',
        paragraphs: [
          'Rescue Claw funciona mejor como una parte del plan de ruta, no como permiso para hacer un salto malo. Antes de la próxima partida, lee ' + articleLink('peak-game-tips', 'los consejos de supervivencia cooperativa') + ', repasa ' + articleLink('how-to-play-peak', 'la guía para principiantes') + ' y ' + mapLink('consulta el mapa de PEAK de hoy') + ' para conocer el contexto actual. Después vuelve al juego y verifica el aviso, el objetivo y el aterrizaje en la versión que realmente estés jugando.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'Preguntas frecuentes sobre Rescue Claw',
      items: [
        ['¿Qué alcance tiene Rescue Claw en PEAK?', 'Las fuentes oficiales usadas aquí no publican un alcance exacto. Prueba el apuntado actual desde una posición estable dentro del juego y no trates una medición de la comunidad como oficial.'],
        ['¿Puede Rescue Claw agarrar a los compañeros?', 'Sí. La nota oficial 2.04.a describe el uso de Rescue Claw sobre un amigo y dice que, después de terminar la garra, le resulta más fácil agarrarse a algo. No promete un agarre garantizado ni define todas las condiciones de apuntado.'],
        ['¿Afecta Rescue Claw a algún logro?', 'El anuncio oficial 2.04.a no confirma ningún efecto sobre logros. Describe la interacción con el compañero, no una condición de logro; comprueba el juego actual y el registro de Steam antes de afirmarlo.'],
      ],
    },
    source: {
      eyebrow: 'Fuente oficial y límites',
      title: 'Qué confirma el Patch 2.04.a',
      body: 'La fuente principal de esta guía es la publicación oficial de Steam THE KILN IS BACK (Patch 2.04.a). Documenta el cambio del equipaje y dice: “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” La frase traducida en esta página es una traducción para lectores, no una versión oficial en español. Fuente del texto original: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '. No publica un alcance preciso, coordenadas, frecuencia de renovación, tasa de aparición ni condición de logro; esas afirmaciones quedan abiertas de forma intencionada.',
      links: [
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch],
        ['Página oficial de PEAK en Steam', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', 'Consulta el mapa de PEAK de hoy'],
      ['peak-game-tips', 'Prepárate para rescates cooperativos'],
      ['how-to-play-peak', 'Repasa las bases de la escalada'],
      ['achievements', 'Consulta el contexto de logros'],
    ],
    relatedLabel: 'Guías relacionadas de PEAK',
  },

  ja: {
    meta: {
      title: 'PEAK Rescue Claw攻略：射程、仲間の救助、協力プレイの使い方',
      description: 'PEAKでRescue Clawを入手する状況、仲間への狙い方、公式に数値がない射程、実績への影響をPatch 2.04.aの情報をもとに解説します。',
      schema: 'PEAK Rescue Clawの情報源を確認できる攻略。Patch 2.04.aのTHE KILNの荷物、仲間への照準、未公開の射程、実績の不確実性、協力救助の考え方を扱います。',
    },
    primaryKeyword: 'PEAK Rescue Claw 攻略',
    eyebrow: '協力救助ガイド - 公式2.04.aの情報',
    h1: 'PEAK Rescue Claw攻略：射程、仲間の救助、協力プレイの使い方',
    intro: 'Rescue Clawは、仲間が落下したり、危険な場所で動けなくなったり、Scoutが危険な位置に取り残されたりしたときに、地形へ戻る機会を作るためのPEAKの協力用リカバリーツールです。公式のPatch 2.04.aは、仲間に使ったときの重要な挙動を説明しています。このページでは確認できる事実とプレイ中の判断を分けて整理します。登攀の流れから知りたい場合は' + articleLink('how-to-play-peak', '初心者向け登攀ガイド') + '、出発前の準備は' + articleLink('peak-game-tips', '協力プレイのヒント') + 'から確認してください。',
    answerLabel: 'まず答え',
    answer: '仲間が地形へ戻る必要があるときにRescue Clawを使います。公式のTHE KILNアップデートが示す荷物の配置背景を確認し、仲間を狙い、現在のゲーム内表示に従って起動します。操作する人は安定した回復位置を確保してください。公式情報は、クロー完了後に仲間のラグドール状態が短くなり、何かにつかまりやすくなることを示していますが、正確な射程、着地の保証、実績条件は公開していません。',
    tocLabel: 'このページの内容',
    tocFaq: 'Rescue Claw FAQ',
    heroImage: {
      alt: 'PEAKの登山者がクローのラインで仲間を岩棚へ助けようとする編集イラスト',
      caption: '編集イラスト：Rescue Clawはチームで行う回復判断であり、着地を保証する道具ではありません。',
    },
    sections: [
      {
        title: 'Rescue Clawが協力チームにできること',
        paragraphs: [
          '救助用の道具とルート用の道具は役割が違います。仲間が次の安全なホールドより下へ落ちた、危険な縁に引っかかった、またはScoutが無理な位置に出てしまったとき、チームは失敗した移動をもう一度地形につかまる機会へ変える必要があります。Rescue Clawはその回復判断に使います。持っている人がタイミングを選び、仲間が次のホールドを伝え、他のメンバーがルートを守ります。',
          '公式パッチの説明は、コミュニティの要約より限定的です。Patch 2.04.aは、友だちにRescue Clawを使うとラグドール状態の時間が短くなり、クローが完了した後に何かへつかまりやすくなると説明しています。これは友だちを対象にした協力インタラクションと、完了後の回復しやすさを示しますが、すべての救助が成功するとは書いていません。',
        ],
        bullets: [
          ['救助だと判断する', '次の目的が高度を上げることではなく仲間の回復なら、道具の使用を考えます。'],
          ['ホールドを伝える', '試す前に、仲間がつかみたい面や岩棚を言葉にしてもらいます。'],
          ['操作する人を守る', 'クローを使う人がすぐに二度目の救助を必要としない場所に立ちます。'],
        ],
      },
      {
        title: 'PEAKでRescue Clawを入手するには',
        paragraphs: [
          '公式情報から確認できる入手の背景は、THE KILNのluggage spawnerです。Patch 2.04.a「THE KILN IS BACK」で、開発者は次のように書いています。「Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.」実際のプレイでは、現在のルートにある荷物の機会を確認し、とくに告知で名前が出たspawnerを見ます。',
          'この文はRescue Claw専用の座標、更新タイマー、出現率、確定出現を示していません。見つけた荷物に道具がなければ、ルートとバージョンを記録してください。一度のプレイを恒久的な出現ルールの証拠にしないようにします。現在のゲームと公式の最新告知は古いリストより優先されます。',
        ],
        bullets: [
          ['名前の出た荷物を確認する', '現在のルートとアップデートの背景に合うluggage spawnerを調べます。'],
          ['期待を限定する', 'パッチは荷物の状況を変えますが、毎回Rescue Clawが出るとは約束していません。'],
          ['現在のバージョンを見る', '古いアイテムリストとゲームが違うときは、ゲーム内表示と公式情報を基準にします。'],
        ],
      },
      {
        title: '仲間にRescue Clawを狙って使う方法',
        paragraphs: [
          '使用時は、チームで行う受け渡しとして考えます。操作する人はルートを立て直せる場所に立ち、仲間の方を向き、現在の表示を起動する前に対象を狙います。仲間はつかみたいホールドや岩棚を伝え、他のメンバーは別の事故を起こさないように動きを抑えます。',
          '2.04.aで覚えておきたい公式文は次のとおりです。「Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.」このページでは「仲間にRescue Clawを使うとラグドール状態が短くなり、クローが完了した後に何かへつかまりやすくなる」と訳しています。これは読者向けの訳で、公式の日本語テキストではありません。公式原文の出典：Patch 2.04.a THE KILN IS BACK、Steam News：' + sourceLinks.patch + '。',
          'すき間、短い落下、困っているScoutが通常の登攀ではなく回復の判断になったときに使います。救助には受け手、見える回復面、操作する人の安全な位置が必要です。これはチームの実践であり、公式が公開した射程や成功保証ではありません。',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: '急なルートでPEAKの仲間同士が登攀を連携するSteam公式スクリーンショット',
          caption: 'Steam公式スクリーンショット：距離を保ち、ルートを明確に伝えると救助の余地が生まれます。',
        },
        bullets: [
          ['起動する前', '対象の仲間、回復面、担当する人を決めます。'],
          ['引き戻し中', '話せる程度にチームの動きを止め、事故を増やさないようにします。'],
          ['完了した後', '仲間が地形につかまり直すまで、チームは先へ進みません。'],
        ],
      },
      {
        title: 'Rescue Clawの射程はどれくらい？',
        paragraphs: [
          'このページで使っている公式PEAK情報は、Rescue Clawの正確な射程を公開していません。コミュニティの計測を確定データとして繰り返したり、見た目の距離を保証のように書いたりはしません。「Rescue Clawの射程は？」への直接の答えは、現在の照準挙動をゲーム内で確認することです。ここに公式の数値はありません。',
          '自分で確認するなら、仲間と回復できる面が見える安定した場所から試します。表示が対象を受け付けなければ近づき、実際の救助の端で検証しないでください。後のパッチで挙動が変わる可能性があるため、メモにはバージョンを添えます。これは慎重な確認方法で、公開された計測値ではありません。',
          '射程はルート計画の代わりにもなりません。長く届いても危険な着地点が安全になるわけではなく、短い距離でも仲間が岩棚のすぐ下にいれば役立つことがあります。まずルートを読み、残りの回復手段を使う価値があるか判断します。',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: '次に安全な位置を読む必要があるPEAKの登攀ルートを示すSteam公式スクリーンショット',
          caption: 'Steam公式スクリーンショット：道具に頼る前にルートと回復できる空間を確認します。',
        },
      },
      {
        title: 'Rescue Clawは実績に影響する？',
        paragraphs: [
          '公式の2.04.a告知は、Rescue Clawを使うと実績、バッジ、特別な報酬が解除されるとは述べていません。友だちへのインタラクションと短いラグドール状態を説明していますが、実績の条件は定義していません。そのため、仲間を引き寄せることが特定の解除に数えられるとは断定しません。',
          '疑わしい目標を検証するなら、正確な行動、モード、仲間の状態、ルートの状況、現在のバージョンを記録し、プラットフォーム側の結果を確認します。ゲーム内またはSteamの公式記録が確認するまでは、コミュニティ報告は手がかりとして扱います。プラットフォーム実績とゲーム内進行の違いは' + articleLink('achievements', 'PEAK実績ガイド') + 'を参照してください。',
          '解除に失敗しても、道具が壊れている証拠にはなりません。条件が別のもの、バージョン依存、またはパッチノートに記載されていないだけかもしれません。救助の助言と実績の仮説を分け、有用な協力テクニックを誤った約束に変えないようにします。',
        ],
      },
      {
        title: 'Rescue Clawとロープ用ツールの使い分け',
        paragraphs: [
          'Rescue Clawは対応用の道具です。仲間が回復する機会を必要としたときにどうするか、という計画に入ります。ロープ用ツールはルート準備の選択で、次の障害へどう近づくかを決めます。ロープの道が扱いにくく見えるだけで救助用の手段を使ったり、ロープが仲間の回復計画を代用すると考えたりしないでください。これは役割の区別であり、隠れた数値の推測ではありません。',
          'ホームのデータベースで現在のアイテムカードを比較できます：' + articleLink('home#database', 'Rescue Clawのカード') + '、' + articleLink('home#database', 'Anti-Rope Cannonの項目') + '、' + articleLink('home#database', 'Rope Shooterの項目') + '。カードは名前と大まかなチーム・ルート上の役割をまとめていますが、細かな効果はゲーム内で確認してください。',
          '出発前に、回復手段を持つ人、ルートを伝える人、次の移動に失敗した場合の対応を決めます。そのうえで' + mapLink('今日のPEAKマップを確認') + 'し、現在のルートを起点に持ち物を考えます。すき間の多いルートと、仲間が分断されることが主な危険のルートでは準備が変わるかもしれません。',
        ],
        bullets: [
          ['ルート用ツール', 'これから越える地形に合わせて準備します。'],
          ['回復用ツール', '予定したラインを外れた仲間に対する対応を明確に残します。'],
          ['バージョン確認', 'アップデート後は現在のアイテム表示と公式の背景を読み直します。'],
        ],
      },
      {
        title: 'Rescue Claw協力プレイの簡単な確認リスト',
        paragraphs: [
          '試す前に短く確認します：対象を決め、着地点を伝え、操作する人の位置を確認し、現在の表示が仲間を受け付けてから起動し、仲間が再び地形につかまるまでチームを動かしません。どこかが曖昧なら、止まって位置を作り直します。',
          'このリストは経験にもとづく助言で、公式の手順ではありません。クローをパニック時のボタンとして扱わず、未確認の部分を見えるようにするためのものです。公式パッチが示すのはインタラクションの事実であり、タイミング、連絡、判断はチームが担います。',
        ],
        bullets: [
          ['1. 対象', '回復を試す仲間を呼びます。'],
          ['2. 着地点', '完了後に仲間がつかもうとする面を決めます。'],
          ['3. 位置', '操作する人を安定した、まだ回復できるルート上に置きます。'],
          ['4. 確認', '現在のゲーム内表示を使い、仲間が戻るまで先へ進みません。'],
        ],
      },
      {
        title: 'Rescue Clawを覚えた後の次の一手',
        paragraphs: [
          'Rescue Clawは無理なジャンプを許す道具ではなく、ルート計画の一部として使うと役立ちます。次の挑戦の前に' + articleLink('peak-game-tips', '協力プレイのヒント') + 'を読み、' + articleLink('how-to-play-peak', '初心者向け登攀ガイド') + 'を復習し、' + mapLink('今日のPEAKマップを確認') + 'して現在のルートを把握します。ゲームに戻ったら、実際に遊んでいるバージョンで表示、対象、着地点を確かめてください。',
        ],
      },
    ],
    faq: {
      eyebrow: 'クイック回答',
      title: 'Rescue Claw FAQ',
      items: [
        ['PEAKのRescue Clawの射程は？', 'ここで使っている公式情報は正確な射程を公開していません。ゲーム内で安定した場所から現在の照準挙動を確認し、コミュニティの計測を公式情報として扱わないでください。'],
        ['Rescue Clawで仲間をつかめる？', 'はい。公式2.04.aは友だちにRescue Clawを使う場面を明記し、クロー完了後に友だちが何かへつかまりやすくなると説明しています。確実なキャッチやすべての照準条件までは保証していません。'],
        ['Rescue Clawは実績に影響する？', '公式2.04.a告知は実績への影響を確認していません。仲間とのインタラクションは説明していますが、実績条件は説明していないため、現在のゲームとSteamの記録を確認してください。'],
      ],
    },
    source: {
      eyebrow: '公式の出典と限界',
      title: 'Patch 2.04.aで確認できること',
      body: 'このページの主な出典はSteam公式記事「THE KILN IS BACK」（Patch 2.04.a）です。荷物の変更を記録し、「Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.」と説明しています。本ページの日本語は読者向けの翻訳であり、公式の日本語テキストではありません。公式原文の出典：Patch 2.04.a THE KILN IS BACK、Steam News：' + sourceLinks.patch + '。正確な射程、座標、更新頻度、出現率、実績条件は公開されていないため、ここでは断定していません。',
      links: [
        ['Patch 2.04.a：THE KILN IS BACK', sourceLinks.patch],
        ['PEAK Steam公式ページ', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', '今日のPEAKマップを確認'],
      ['peak-game-tips', '協力救助の準備をする'],
      ['how-to-play-peak', '登攀の基本を復習する'],
      ['achievements', '実績の背景を確認する'],
    ],
    relatedLabel: '関連するPEAKガイド',
  },

  fr: {
    meta: {
      title: 'Guide Rescue Claw PEAK : portée, rappels et sauvetages en coop',
      description: 'Apprenez où trouver Rescue Claw dans PEAK, comment viser un coéquipier, ce que l’on sait de sa portée et si l’outil touche aux succès selon le patch officiel 2.04.a.',
      schema: 'Guide PEAK fondé sur les sources pour Rescue Claw : contexte des bagages de THE KILN en 2.04.a, cible alliée, portée non publiée, succès et récupération en coopération.',
    },
    primaryKeyword: 'Rescue Claw PEAK',
    eyebrow: 'Guide de sauvetage coopératif - contexte officiel 2.04.a',
    h1: 'Guide Rescue Claw PEAK : portée, rappels et sauvetages en coop',
    intro: 'Rescue Claw est l’outil de récupération coopérative de PEAK lorsqu’un coéquipier tombe, reste coincé dans une mauvaise position ou laisse le Scout exposé. La mise à jour officielle 2.04.a décrit son comportement essentiel sur un coéquipier ; ce guide sépare ce fait vérifiable des conseils de terrain. Pour comprendre la boucle d’escalade, commencez par ' + articleLink('how-to-play-peak', 'le guide débutant') + ' et consultez ' + articleLink('peak-game-tips', 'les conseils de survie en équipe') + ' avant de compter sur un sauvetage.',
    answerLabel: 'Réponse courte',
    answer: 'Utilisez Rescue Claw lorsqu’un coéquipier doit retrouver un contact avec le terrain. Cherchez-la dans le contexte de bagages décrit par la mise à jour de THE KILN, visez l’ami, activez l’invite actuelle du jeu et gardez une position de récupération stable. La source confirme une durée de ragdoll plus courte après la fin de la griffe, mais ne publie ni portée exacte, ni atterrissage garanti, ni condition de succès.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ Rescue Claw',
    heroImage: {
      alt: 'Illustration éditoriale d’un grimpeur de PEAK utilisant une griffe pour aider un coéquipier à atteindre une corniche',
      caption: 'Illustration éditoriale : Rescue Claw est une décision de récupération d’équipe, pas une garantie d’atterrissage.',
    },
    sections: [
      {
        title: 'Ce que Rescue Claw apporte à une équipe coopérative',
        paragraphs: [
          'Un outil de sauvetage n’a pas le même rôle qu’un outil de route. Lorsqu’un coéquipier tombe sous la prochaine prise sûre, reste pris sur un mauvais bord ou laisse le Scout dans une position exposée, l’équipe doit transformer un mouvement raté en nouvelle chance d’accrocher le terrain. Rescue Claw entre dans cette décision de récupération : le porteur choisit le moment, le coéquipier annonce sa prochaine prise et le reste du groupe protège la route.',
          'Le texte officiel du patch est plus limité que beaucoup de résumés communautaires. Le Patch 2.04.a indique qu’utiliser Rescue Claw sur un ami le laissera moins longtemps en ragdoll, ce qui l’aidera à s’accrocher à quelque chose une fois la griffe terminée. Cela confirme une interaction coopérative ciblant un ami et un avantage de récupération après la fin ; cela ne garantit pas la réussite de chaque sauvetage.',
        ],
        bullets: [
          ['Reconnaître le sauvetage', 'Utilisez l’outil lorsque la décision porte sur la récupération d’un coéquipier, pas seulement sur la progression.'],
          ['Annoncer la prise', 'Demandez au coéquipier de nommer la surface ou la corniche visée avant l’essai.'],
          ['Protéger le porteur', 'Gardez la personne qui utilise la griffe sur un terrain où un second sauvetage n’est pas nécessaire immédiatement.'],
        ],
      },
      {
        title: 'Comment obtenir Rescue Claw dans PEAK',
        paragraphs: [
          'Le contexte d’acquisition confirmé par la source officielle est le luggage spawner de THE KILN. Dans Patch 2.04.a, THE KILN IS BACK, les développeurs écrivent : « Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage. » En pratique, inspectez les possibilités de bagages de la route actuelle, en particulier le spawner cité dans la note.',
          'Cette phrase ne donne ni coordonnée propre à Rescue Claw, ni minuteur de renouvellement, ni pourcentage d’apparition, ni apparition garantie. Si l’outil n’est pas dans les bagages trouvés, notez la route et la version au lieu de traiter une partie comme une règle permanente. Le jeu actuel et les publications officielles récentes passent avant une ancienne liste.',
        ],
        bullets: [
          ['Chercher le contexte de bagages cité', 'Vérifiez le luggage spawner lié à la route et à la mise à jour actuelles.'],
          ['Garder des attentes mesurées', 'Le patch modifie le contexte des bagages, mais ne promet pas que chaque recherche donnera Rescue Claw.'],
          ['Vérifier la version actuelle', 'Quand une ancienne liste contredit le jeu, suivez la partie et les notes officielles actuelles.'],
        ],
      },
      {
        title: 'Comment viser et utiliser Rescue Claw sur un coéquipier',
        paragraphs: [
          'Considérez l’utilisation comme un relais coordonné. Le porteur doit se placer là où la route reste récupérable, faire face au coéquipier et viser l’ami choisi avant d’activer l’invite actuelle. Le coéquipier annonce la prise ou la corniche recherchée, tandis que les autres évitent de créer une seconde urgence.',
          'Le comportement essentiel de 2.04.a est formulé ainsi dans l’annonce officielle : « Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes. » Cette page le traduit ainsi : « Utiliser Rescue Claw sur un ami réduit sa durée de ragdoll, ce qui lui permet plus facilement de s’accrocher à quelque chose une fois la griffe terminée. » Il s’agit d’une traduction destinée aux lecteurs, pas d’un texte officiel en français. Source du texte original : Patch 2.04.a THE KILN IS BACK, Steam News : ' + sourceLinks.patch + '.',
          'Utilisez l’outil lorsqu’un écart, une petite chute ou un Scout en difficulté crée une décision de récupération plutôt qu’une escalade normale. Un sauvetage demande toujours un receveur, une surface de récupération visible et une position sûre pour l’opérateur. Ce sont des pratiques d’équipe, pas des garanties officielles de portée ou de réussite.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Capture officielle Steam de coéquipiers PEAK coordonnant une escalade sur une route raide',
          caption: 'Capture officielle Steam : l’espace et des appels de route clairs donnent une chance à l’essai de sauvetage.',
        },
        bullets: [
          ['Avant l’activation', 'Nommez le coéquipier, la surface visée et la personne responsable de l’essai.'],
          ['Pendant le rappel', 'Gardez l’équipe assez immobile pour communiquer et ne transformez pas une urgence en plusieurs.'],
          ['Après la fin', 'Laissez le coéquipier retrouver le terrain avant de reprendre la route.'],
        ],
      },
      {
        title: 'Quelle est la portée de Rescue Claw',
        paragraphs: [
          'Les sources officielles de PEAK utilisées ici ne publient pas de portée précise pour Rescue Claw. Ce guide ne reprend pas une mesure communautaire comme donnée confirmée et ne transforme pas une estimation visuelle en promesse. La réponse directe à « quelle est la portée de Rescue Claw ? » est de vérifier le comportement actuel du ciblage dans le jeu ; aucun nombre officiel n’est disponible ici.',
          'Pour l’observer en partie, testez depuis une position stable avec le coéquipier et une surface récupérable dans le champ de vision. Avancez si l’invite actuelle n’accepte pas la cible et évitez de tester au bord d’une vraie tentative. Reliez vos notes à la version du jeu, car une mise à jour ultérieure peut modifier le comportement. C’est une méthode prudente, pas une mesure publiée.',
          'La portée ne remplace pas non plus la préparation de route. Une longue portée ne rend pas un atterrissage dangereux sûr, et une courte portée peut rester utile si le coéquipier se trouve juste sous une corniche. Lisez d’abord la route, puis décidez si Rescue Claw mérite vos options de récupération restantes.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Capture officielle Steam montrant une route PEAK où l’équipe doit lire la prochaine position sûre',
          caption: 'Capture officielle Steam : examinez la route et l’espace de récupération avant de compter sur un objet.',
        },
      },
      {
        title: 'Rescue Claw a-t-elle un effet sur un succès',
        paragraphs: [
          'L’annonce officielle 2.04.a ne dit pas que l’utilisation de Rescue Claw débloque un succès, un badge ou une récompense spéciale. Elle décrit l’interaction avec un ami et la durée de ragdoll réduite, mais ne définit aucune condition de succès. Cette page ne prétend donc pas qu’un rappel de coéquipier compte pour un déblocage précis.',
          'Si vous testez un objectif supposé, notez l’action exacte, le mode, l’état du coéquipier, le contexte de route et la version actuelle, puis vérifiez le résultat de la plateforme. Traitez un rapport communautaire comme une piste jusqu’à confirmation par le jeu actuel ou un relevé Steam officiel. Pour distinguer les succès de plateforme de la progression en jeu, consultez le ' + articleLink('achievements', 'guide des succès PEAK') + '.',
          'Un déblocage raté ne prouve pas que l’outil est défectueux. La condition peut être sans rapport, dépendre de la version ou être simplement absente de la note de patch. Séparez les conseils de sauvetage et l’hypothèse de succès afin de ne pas transformer une technique coopérative utile en fausse promesse.',
        ],
      },
      {
        title: 'Rescue Claw et les outils de corde dans un équipement',
        paragraphs: [
          'Rescue Claw est un outil de réponse : il sert à décider quoi faire lorsqu’un coéquipier a besoin d’une chance de récupération. Un outil de corde est une préparation de route : il sert à décider comment l’équipe abordera le prochain obstacle. Ne dépensez pas un outil de secours simplement parce qu’une route de corde semble inconfortable, et ne supposez pas qu’une corde remplace un plan de récupération pour un coéquipier. Ce sont des rôles de planification, pas des statistiques cachées.',
          'Comparez les fiches actuelles de la base de données de l’accueil : la ' + articleLink('home#database', 'fiche Rescue Claw') + ', l’' + articleLink('home#database', 'entrée Anti-Rope Cannon') + ' et l’' + articleLink('home#database', 'entrée Rope Shooter') + '. Les fiches rassemblent les noms et les rôles généraux de route ou d’équipe ; les effets précis doivent toujours être vérifiés en jeu.',
          'Avant de partir, choisissez qui porte la récupération, qui annonce la route et ce que fera l’équipe si le prochain mouvement échoue. Puis ' + mapLink('consultez la carte PEAK du jour') + ' pour commencer avec le contexte de la route actuelle. Une route pleine d’écarts demande peut-être une préparation différente d’une route où le risque immédiat est la séparation d’un coéquipier.',
        ],
        bullets: [
          ['Outil de route', 'Préparez-vous pour le terrain que vous prévoyez de traverser.'],
          ['Outil de récupération', 'Gardez un plan clair pour le coéquipier qui perd la ligne prévue.'],
          ['Vérification de version', 'Relisez l’invite actuelle de l’objet et le contexte officiel après un patch.'],
        ],
      },
      {
        title: 'Petite checklist coopérative pour Rescue Claw',
        paragraphs: [
          'Faites cet appel rapide avant l’essai : identifiez la cible, nommez l’atterrissage, confirmez la position du porteur, activez lorsque l’invite accepte l’ami, puis attendez que le coéquipier retrouve une prise avant de déplacer le groupe. Si une étape n’est pas claire, arrêtez-vous et reconstruisez la position.',
          'Cette checklist est un conseil fondé sur l’expérience, pas une séquence officielle. Elle évite de traiter la griffe comme un bouton de panique et rend visibles les éléments non vérifiés. Le patch officiel fournit le détail de l’interaction ; l’équipe fournit le timing, la communication et le jugement.',
        ],
        bullets: [
          ['1. Cible', 'Appelez l’ami qui a besoin de la tentative de récupération.'],
          ['2. Atterrissage', 'Mettez-vous d’accord sur la surface que le coéquipier tentera d’agripper après la fin.'],
          ['3. Position', 'Gardez le porteur sur une partie stable et récupérable de la route.'],
          ['4. Confirmation', 'Suivez l’invite actuelle du jeu et laissez le coéquipier se reconnecter avant de repartir.'],
        ],
      },
      {
        title: 'Après avoir appris à utiliser Rescue Claw',
        paragraphs: [
          'Rescue Claw est plus utile comme élément d’un plan de route que comme permission de tenter un mauvais saut. Avant la prochaine partie, lisez ' + articleLink('peak-game-tips', 'les conseils de survie en équipe') + ', relisez ' + articleLink('how-to-play-peak', 'le guide débutant') + ' et ' + mapLink('consultez la carte PEAK du jour') + ' pour connaître le contexte actuel. Revenez ensuite au jeu et vérifiez l’invite, la cible et l’atterrissage dans la version à laquelle vous jouez réellement.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ Rescue Claw',
      items: [
        ['Quelle est la portée de Rescue Claw dans PEAK ?', 'Les sources officielles utilisées ici ne publient pas de portée exacte. Testez le ciblage actuel depuis une position stable dans le jeu et ne considérez pas une mesure communautaire comme officielle.'],
        ['Rescue Claw peut-elle attraper des coéquipiers ?', 'Oui. La note officielle 2.04.a décrit l’utilisation de Rescue Claw sur un ami et indique qu’il lui est plus facile de s’accrocher à quelque chose après la fin de la griffe. Elle ne garantit pas la prise et ne définit pas toutes les conditions de ciblage.'],
        ['Rescue Claw affecte-t-elle un succès ?', 'L’annonce officielle 2.04.a ne confirme aucun effet sur les succès. Elle décrit l’interaction avec un coéquipier, pas une condition de déblocage ; vérifiez le jeu actuel et le relevé Steam avant de l’affirmer.'],
      ],
    },
    source: {
      eyebrow: 'Source officielle et limites',
      title: 'Ce que confirme le Patch 2.04.a',
      body: 'La source principale de ce guide est le billet Steam officiel THE KILN IS BACK (Patch 2.04.a). Il documente le changement des bagages et dit : « Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes. » La phrase traduite ici est destinée aux lecteurs et ne constitue pas une version officielle en français. Source du texte original : Patch 2.04.a THE KILN IS BACK, Steam News : ' + sourceLinks.patch + '. Le billet ne publie ni portée précise, ni coordonnées, ni fréquence de renouvellement, ni taux d’apparition, ni condition de succès ; ces points restent volontairement ouverts.',
      links: [
        ['Patch 2.04.a : THE KILN IS BACK', sourceLinks.patch],
        ['Page Steam officielle de PEAK', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', 'Consultez la carte PEAK du jour'],
      ['peak-game-tips', 'Préparez les sauvetages coop'],
      ['how-to-play-peak', 'Revoir les bases de l’escalade'],
      ['achievements', 'Voir le contexte des succès'],
    ],
    relatedLabel: 'Guides PEAK associés',
  },

  de: {
    meta: {
      title: 'PEAK Rescue Claw Guide: Reichweite, Teamrettung und Koop-Einsatz',
      description: 'Erfahre, wie du Rescue Claw in PEAK findest, auf Teammitglieder zielst, die nicht veröffentlichte Reichweite einordnest und den Einfluss auf Erfolge prüfst.',
      schema: 'Quellenbasierter PEAK-Guide zu Rescue Claw mit dem offiziellen 2.04.a-Gepäckkontext, Teamziel, nicht veröffentlichter Reichweite, Erfolgsfragen und Koop-Bergung.',
    },
    primaryKeyword: 'Rescue Claw PEAK',
    eyebrow: 'Koop-Rettungsguide - offizieller Kontext zu 2.04.a',
    h1: 'PEAK Rescue Claw Guide: Reichweite, Teamrettung und Koop-Einsatz',
    intro: 'Rescue Claw ist in PEAK das Koop-Bergungswerkzeug für den Moment, in dem ein Teammitglied stürzt, an einer ungünstigen Stelle festhängt oder der Scout in eine gefährdete Position gerät. Das offizielle Update 2.04.a beschreibt das wichtigste Verhalten beim Einsatz auf einen Freund; dieser Guide trennt diese bestätigte Information von praktischen Entscheidungen. Für den allgemeinen Kletterablauf lies zuerst den ' + articleLink('how-to-play-peak', 'Einsteiger-Guide') + ' und bereite dich mit ' + articleLink('peak-game-tips', 'Koop-Überlebenstipps') + ' vor.',
    answerLabel: 'Kurzantwort',
    answer: 'Nutze Rescue Claw, wenn ein Teammitglied wieder Kontakt zum Gelände bekommen muss. Suche sie im Gepäckkontext des offiziellen THE-KILN-Updates, ziele auf den Freund, aktiviere die aktuelle Spielaufforderung und halte eine stabile Bergungsposition bereit. Die Quelle bestätigt eine kürzere Ragdoll-Zeit nach Abschluss der Klaue, nennt aber weder eine genaue Reichweite noch eine garantierte Landung oder eine Erfolgsbedingung.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Rescue Claw FAQ',
    heroImage: {
      alt: 'Redaktionelle Illustration eines PEAK-Kletterers, der mit einer Klaue einem Teammitglied eine Felskante erreichen hilft',
      caption: 'Redaktionelle Illustration: Rescue Claw ist eine Entscheidung zur Teambergung, keine Landegarantie.',
    },
    sections: [
      {
        title: 'Was Rescue Claw für ein Koop-Team leistet',
        paragraphs: [
          'Ein Rettungswerkzeug hat eine andere Aufgabe als ein Routenwerkzeug. Wenn ein Teammitglied unter den nächsten sicheren Griff fällt, an einer schlechten Kante hängen bleibt oder den Scout in eine offene Position bringt, braucht das Team eine Möglichkeit, aus einer misslungenen Bewegung eine neue Chance auf Geländekontakt zu machen. Rescue Claw gehört in diese Bergungsentscheidung: Der Träger wählt den Zeitpunkt, das Teammitglied nennt den nächsten Griff und der Rest schützt die Route.',
          'Die offizielle Patch-Sprache ist enger als viele Zusammenfassungen aus der Community. Patch 2.04.a sagt, dass die Nutzung von Rescue Claw auf einen Freund ihn kürzer ragdollen lässt, sodass er sich nach Abschluss der Klaue leichter an etwas festhalten kann. Das bestätigt eine auf einen Freund gerichtete Koop-Interaktion und einen Bergungsvorteil danach; es garantiert nicht, dass jede Rettung gelingt.',
        ],
        bullets: [
          ['Rettung erkennen', 'Nutze das Werkzeug, wenn es um die Bergung eines Teammitglieds geht, nicht nur um zusätzlichen Höhengewinn.'],
          ['Griff ansagen', 'Lass das Teammitglied vor dem Versuch die anvisierte Fläche oder Kante nennen.'],
          ['Träger schützen', 'Halte den Bediener auf Gelände, das nicht sofort eine zweite Rettung erfordert.'],
        ],
      },
      {
        title: 'So bekommst du Rescue Claw in PEAK',
        paragraphs: [
          'Der offiziell bestätigte Fundkontext ist der luggage spawner in THE KILN. In Patch 2.04.a, THE KILN IS BACK, schreiben die Entwickler: „Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.“ Praktisch bedeutet das: Prüfe die Gepäckmöglichkeiten der aktuellen Route, besonders den in der Notiz genannten Spawner.',
          'Der Satz nennt weder eine Rescue-Claw-spezifische Koordinate noch einen Erneuerungstimer, eine Fundwahrscheinlichkeit oder ein garantiertes Auftauchen. Wenn das Werkzeug nicht im gefundenen Gepäck liegt, notiere Route und Version, statt einen Lauf als dauerhafte Spawn-Regel zu behandeln. Das aktuelle Spiel und offizielle Update-Posts stehen über einer alten Liste.',
        ],
        bullets: [
          ['Den genannten Gepäckkontext prüfen', 'Kontrolliere den luggage spawner, der zur aktuellen Route und zum Update-Kontext passt.'],
          ['Erwartungen begrenzen', 'Der Patch ändert den Gepäckkontext, verspricht aber nicht, dass jede Suche Rescue Claw ergibt.'],
          ['Aktuellen Build prüfen', 'Wenn eine alte Itemliste dem Spiel widerspricht, zählen die aktuelle Partie und offizielle Hinweise.'],
        ],
      },
      {
        title: 'So zielst du mit Rescue Claw auf ein Teammitglied',
        paragraphs: [
          'Behandle den Einsatz wie eine abgestimmte Übergabe. Der Bediener steht dort, wo die Route noch wiederherstellbar ist, schaut zum Teammitglied und zielt auf den ausgewählten Freund, bevor er die aktuelle Aufforderung aktiviert. Das Teammitglied sagt den geplanten Griff oder die Kante an, während die anderen keine zweite Notlage erzeugen.',
          'Das entscheidende Verhalten aus 2.04.a steht im offiziellen Beitrag so: „Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.“ Dieser Guide übersetzt es so: „Wenn du Rescue Claw auf einen Freund anwendest, bleibt er kürzer im Ragdoll-Zustand und kann sich nach Abschluss der Klaue leichter an etwas festhalten.“ Das ist eine Leserübersetzung, kein offizieller deutscher Text. Quelle des offiziellen Originals: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '.',
          'Nutze das Werkzeug, wenn eine Lücke, ein kurzer Sturz oder ein Scout in Schwierigkeiten eine Bergungsentscheidung erzeugt und keine normale Kletterbewegung mehr ist. Eine Rettung braucht weiterhin einen Empfänger, eine sichtbare Fläche zur Erholung und einen sicheren Stand für den Bediener. Das sind Teampraktiken, keine veröffentlichte Reichweiten- oder Erfolgsgarantie.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Offizieller Steam-Screenshot von PEAK-Teammitgliedern, die einen steilen Kletterweg koordinieren',
          caption: 'Offizieller Steam-Screenshot: Abstand und klare Routenansagen geben dem Rettungsversuch Raum.',
        },
        bullets: [
          ['Vor dem Aktivieren', 'Benenne das Teammitglied, die Zielfläche und die verantwortliche Person.'],
          ['Während des Zugs', 'Halte das Team kommunikationsfähig und mache aus einer Notlage nicht mehrere.'],
          ['Nach dem Abschluss', 'Lass das Teammitglied wieder Kontakt zum Gelände herstellen, bevor ihr weitergeht.'],
        ],
      },
      {
        title: 'Wie weit reicht Rescue Claw',
        paragraphs: [
          'Die offiziellen PEAK-Quellen für diesen Guide veröffentlichen keine genaue Reichweite von Rescue Claw. Wir wiederholen keine Community-Messung als bestätigte Daten und machen aus einer visuellen Schätzung kein Versprechen. Die direkte Antwort auf „Wie groß ist die Reichweite von Rescue Claw?“ lautet: Prüfe das aktuelle Zielverhalten im Spiel; hier gibt es keine offizielle Zahl.',
          'Für eine Beobachtung im Spiel testest du von einem stabilen Standpunkt aus, während Teammitglied und erreichbare Fläche sichtbar sind. Geh näher heran, wenn die aktuelle Aufforderung das Ziel nicht akzeptiert, und teste nicht am Rand eines echten Rettungsversuchs. Verknüpfe Notizen mit dem Spielstand, da ein späteres Update das Verhalten ändern kann. Das ist eine vorsichtige Methode, keine veröffentlichte Messung.',
          'Reichweite ersetzt außerdem keine Routenplanung. Eine größere Distanz macht eine gefährliche Landung nicht sicher, und eine kurze Distanz kann wertvoll sein, wenn ein Teammitglied direkt unter einer Kante hängt. Lies zuerst die Route und entscheide dann, ob Rescue Claw deine verbleibenden Bergungsoptionen wert ist.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Offizieller Steam-Screenshot einer PEAK-Route, auf der das Team die nächste sichere Position lesen muss',
          caption: 'Offizieller Steam-Screenshot: Prüfe Route und Bergungsraum, bevor du dich auf ein Item verlässt.',
        },
      },
      {
        title: 'Beeinflusst Rescue Claw einen Erfolg',
        paragraphs: [
          'Die offizielle Ankündigung 2.04.a sagt nicht, dass die Nutzung von Rescue Claw einen Erfolg, ein Abzeichen oder eine besondere Belohnung freischaltet. Sie beschreibt die Freund-Interaktion und die kürzere Ragdoll-Zeit, definiert aber keine Erfolgsbedingung. Deshalb behauptet diese Seite nicht, dass das Heranziehen eines Teammitglieds für einen bestimmten Unlock zählt.',
          'Wenn du ein vermutetes Ziel testest, notiere die genaue Aktion, den Modus, den Zustand des Teammitglieds, den Routen-Kontext und die aktuelle Version und prüfe anschließend das Plattform-Ergebnis. Behandle Community-Berichte als Hinweis, bis das aktuelle Spiel oder ein offizieller Steam-Eintrag sie bestätigt. Den Unterschied zwischen Plattform-Erfolgen und In-Game-Fortschritt erklärt der ' + articleLink('achievements', 'PEAK-Erfolge-Guide') + '.',
          'Ein fehlender Unlock beweist nicht, dass das Werkzeug kaputt ist. Die Bedingung kann unabhängig, versionsabhängig oder schlicht nicht in den Patchnotes dokumentiert sein. Halte Rettungstipps und Erfolgsvermutungen getrennt, damit eine nützliche Koop-Technik kein falsches Versprechen wird.',
        ],
      },
      {
        title: 'Rescue Claw und Seilwerkzeuge im Loadout',
        paragraphs: [
          'Rescue Claw ist ein Reaktionswerkzeug: Es gehört in den Plan für den Fall, dass ein Teammitglied eine Bergungschance braucht. Ein Seilwerkzeug ist eine Routenvorbereitung: Es gehört in den Plan, wie das Team das nächste Hindernis angeht. Verbrauche kein Rettungswerkzeug nur weil eine Seilroute umständlich aussieht, und nimm nicht an, dass ein Seil den Bergungsplan für ein Teammitglied ersetzt. Das sind Planungsrollen, keine Aussage über versteckte Itemwerte.',
          'Vergleiche die aktuellen Itemkarten in der Datenbank auf der Startseite: die ' + articleLink('home#database', 'Rescue-Claw-Karte') + ', den ' + articleLink('home#database', 'Anti-Rope-Cannon-Eintrag') + ' und den ' + articleLink('home#database', 'Rope-Shooter-Eintrag') + '. Die Karten führen Namen und grobe Team- oder Routenrollen zusammen; genaue Effekte solltest du weiterhin im Spiel prüfen.',
          'Lege vor dem Start fest, wer die Bergung trägt, wer die Route ansagt und was das Team bei einem Fehlschlag des nächsten Schritts tut. Dann ' + mapLink('prüfe die heutige PEAK-Karte') + ', damit das Loadout vom aktuellen Routen-Kontext ausgeht. Eine Route mit schwierigen Lücken kann andere Vorbereitung verlangen als eine Route, bei der die Trennung eines Teammitglieds das unmittelbare Risiko ist.',
        ],
        bullets: [
          ['Routenwerkzeug', 'Bereite dich auf das erwartete Gelände vor.'],
          ['Bergungswerkzeug', 'Halte einen klaren Plan für ein Teammitglied bereit, das die geplante Linie verliert.'],
          ['Versionscheck', 'Lies nach einem Patch die aktuelle Item-Aufforderung und den offiziellen Kontext erneut.'],
        ],
      },
      {
        title: 'Kurze Rescue-Claw-Koop-Checkliste',
        paragraphs: [
          'Rufe vor dem Versuch kurz ab: Ziel bestimmen, Landepunkt nennen, Position des Bedieners bestätigen, erst bei akzeptiertem Freund-Ziel aktivieren und warten, bis das Teammitglied wieder greift, bevor sich die Gruppe bewegt. Wenn etwas unklar ist, halte an und stelle die Position neu her.',
          'Diese Checkliste ist erfahrungsbasierte Hilfe, keine offizielle Reihenfolge. Sie verhindert, dass das Team die Klaue als Panikknopf behandelt, und macht die ungeprüften Teile sichtbar. Der offizielle Patch liefert das Interaktionsdetail; Timing, Kommunikation und Urteil kommen vom Team.',
        ],
        bullets: [
          ['1. Ziel', 'Rufe den Freund auf, der die Bergung braucht.'],
          ['2. Landung', 'Vereinbart die Fläche, an der sich das Teammitglied nach Abschluss festhalten will.'],
          ['3. Position', 'Halte den Bediener auf einem stabilen, weiterhin bergbaren Teil der Route.'],
          ['4. Bestätigen', 'Nutze die aktuelle Spielaufforderung und lass das Teammitglied vor dem Weitergehen wieder Kontakt herstellen.'],
        ],
      },
      {
        title: 'Nächste Schritte nach Rescue Claw',
        paragraphs: [
          'Rescue Claw funktioniert am besten als Teil eines Routenplans, nicht als Erlaubnis für einen schlechten Sprung. Lies vor dem nächsten Lauf ' + articleLink('peak-game-tips', 'die Koop-Überlebenstipps') + ', wiederhole den ' + articleLink('how-to-play-peak', 'Einsteiger-Guide') + ' und ' + mapLink('prüfe die heutige PEAK-Karte') + ' für den aktuellen Routen-Kontext. Kehre dann ins Spiel zurück und prüfe Aufforderung, Ziel und Landung in der Version, die du tatsächlich spielst.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Schnelle Antworten',
      title: 'Rescue Claw FAQ',
      items: [
        ['Wie weit reicht Rescue Claw in PEAK?', 'Die hier verwendeten offiziellen Quellen nennen keine genaue Reichweite. Prüfe das aktuelle Zielverhalten aus einer stabilen Position im Spiel und behandle eine Community-Messung nicht als offizielle Angabe.'],
        ['Kann Rescue Claw Teammitglieder greifen?', 'Ja. Die offizielle 2.04.a-Notiz beschreibt die Nutzung von Rescue Claw auf einen Freund und sagt, dass er sich nach Abschluss der Klaue leichter an etwas festhalten kann. Sie garantiert keinen Fang und definiert nicht jede Zielbedingung.'],
        ['Beeinflusst Rescue Claw einen Erfolg?', 'Die offizielle Ankündigung 2.04.a bestätigt keinen Erfolgseffekt. Sie beschreibt die Teammitglied-Interaktion, aber keine Erfolgsbedingung; prüfe das aktuelle Spiel und den Steam-Eintrag, bevor du das behauptest.'],
      ],
    },
    source: {
      eyebrow: 'Offizielle Quelle und Grenzen',
      title: 'Was Patch 2.04.a bestätigt',
      body: 'Die Hauptquelle dieses Guides ist der offizielle Steam-Post THE KILN IS BACK (Patch 2.04.a). Er dokumentiert die Gepäckänderung und sagt: „Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.“ Die deutsche Fassung auf dieser Seite ist eine Leserübersetzung und kein offizieller deutscher Text. Originalquelle: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '. Der Post nennt keine genaue Reichweite, Koordinaten, Erneuerungsrate, Fundrate oder Erfolgsbedingung; diese Aussagen bleiben bewusst offen.',
      links: [
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch],
        ['Offizielle PEAK-Seite auf Steam', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', 'Heutige PEAK-Karte prüfen'],
      ['peak-game-tips', 'Koop-Rettungen vorbereiten'],
      ['how-to-play-peak', 'Klettergrundlagen wiederholen'],
      ['achievements', 'Erfolgskontext prüfen'],
    ],
    relatedLabel: 'Verwandte PEAK-Guides',
  },

  pt: {
    meta: {
      title: 'Guia da Rescue Claw em PEAK: alcance, puxões e resgates em cooperação',
      description: 'Aprenda a encontrar Rescue Claw em PEAK, mirar nos companheiros, entender o alcance não publicado e verificar se a ferramenta afeta conquistas no patch oficial 2.04.a.',
      schema: 'Guia de PEAK baseado em fontes sobre Rescue Claw, com o contexto oficial de bagagens de THE KILN em 2.04.a, alvo em companheiros, alcance não publicado, conquistas e recuperação em equipe.',
    },
    primaryKeyword: 'Rescue Claw PEAK',
    eyebrow: 'Guia de resgate cooperativo - contexto oficial 2.04.a',
    h1: 'Guia da Rescue Claw em PEAK: alcance, puxões e resgates em cooperação',
    intro: 'Rescue Claw é a ferramenta de recuperação cooperativa de PEAK para quando um companheiro cai, fica preso em uma posição ruim ou deixa o Scout exposto. A atualização oficial 2.04.a descreve o comportamento principal ao usá-la em um amigo; este guia separa esse fato confirmado das decisões práticas de uma partida. Para entender o ciclo da escalada, comece pelo ' + articleLink('how-to-play-peak', 'guia para iniciantes') + ' e consulte ' + articleLink('peak-game-tips', 'as dicas de sobrevivência em cooperação') + ' antes de depender do resgate.',
    answerLabel: 'Resposta curta',
    answer: 'Use Rescue Claw quando um companheiro precisar voltar a ter contato com o terreno. Procure-a no contexto de bagagens descrito pela atualização de THE KILN, mire no amigo, ative o comando atual do jogo e mantenha uma posição estável para a recuperação. A fonte confirma um tempo menor de ragdoll depois que a garra termina, mas não publica alcance exato, pouso garantido nem condição de conquista.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ da Rescue Claw',
    heroImage: {
      alt: 'Ilustração editorial de um escalador de PEAK usando uma garra para ajudar um companheiro a alcançar uma borda',
      caption: 'Ilustração editorial: Rescue Claw é uma decisão de recuperação da equipe, não uma garantia de pouso.',
    },
    sections: [
      {
        title: 'O que Rescue Claw faz por uma equipe cooperativa',
        paragraphs: [
          'Uma ferramenta de resgate tem uma função diferente de uma ferramenta de rota. Quando um companheiro cai abaixo da próxima pegada segura, fica preso em uma borda ruim ou deixa o Scout em uma posição exposta, a equipe precisa transformar um movimento que deu errado em outra chance de agarrar o terreno. Rescue Claw entra nesse plano de recuperação: quem carrega escolhe o momento, o companheiro comunica a próxima pegada e o restante protege a rota.',
          'A linguagem oficial do patch é mais limitada do que muitos resumos da comunidade. O Patch 2.04.a diz que usar Rescue Claw em um amigo fará com que ele fique menos tempo em ragdoll, facilitando que se agarre a alguma coisa quando a garra terminar. Isso confirma uma interação cooperativa direcionada a um amigo e uma ajuda de recuperação depois da conclusão; não garante que todo resgate dará certo.',
        ],
        bullets: [
          ['Reconheça o resgate', 'Use a ferramenta quando a decisão for recuperar um companheiro, não apenas alcançar mais altura.'],
          ['Avise a pegada', 'Peça ao companheiro que diga qual superfície ou borda ele pretende alcançar antes da tentativa.'],
          ['Proteja quem opera', 'Mantenha a pessoa que usa a garra em um trecho que não exija um segundo resgate imediato.'],
        ],
      },
      {
        title: 'Como conseguir Rescue Claw em PEAK',
        paragraphs: [
          'O contexto de obtenção confirmado pela fonte oficial é o luggage spawner de THE KILN. No Patch 2.04.a, THE KILN IS BACK, os desenvolvedores escreveram: “Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.” Na prática, examine as oportunidades de bagagem que a rota atual oferece, principalmente o spawner citado na nota.',
          'A frase não informa coordenada exclusiva da Rescue Claw, tempo de renovação, porcentagem de aparecimento ou surgimento garantido. Se a ferramenta não estiver na bagagem encontrada, registre a rota e a versão em vez de tratar uma partida como regra permanente de aparecimento. O jogo atual e as publicações oficiais recentes valem mais do que uma lista antiga.',
        ],
        bullets: [
          ['Procure o contexto de bagagem citado', 'Confira o luggage spawner relacionado à rota e ao contexto da atualização atual.'],
          ['Mantenha as expectativas limitadas', 'O patch muda o contexto das bagagens, mas não promete Rescue Claw em toda busca.'],
          ['Confira a versão atual', 'Quando uma lista antiga divergir do jogo, siga a partida e as notas oficiais atuais.'],
        ],
      },
      {
        title: 'Como mirar e usar Rescue Claw em um companheiro',
        paragraphs: [
          'Trate o uso como uma passagem coordenada. Quem opera deve ficar onde a rota ainda possa ser recuperada, olhar para o companheiro e mirar no amigo escolhido antes de ativar o comando atual. O companheiro deve indicar a pegada ou borda que busca, enquanto os demais evitam criar uma segunda emergência.',
          'O comportamento principal de 2.04.a aparece assim no anúncio oficial: “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” Nesta página, a tradução é: “Usar Rescue Claw em um amigo o deixa menos tempo em ragdoll, facilitando que ele se agarre a alguma coisa quando a garra terminar.” É uma tradução para leitores, não um texto oficial em português. Fonte do texto original: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '.',
          'Use a ferramenta quando uma abertura, uma queda curta ou um Scout em apuros criar uma decisão de recuperação em vez de uma escalada normal. O resgate ainda precisa de um receptor, uma superfície visível e uma posição segura para quem opera. São práticas de equipe, não garantias oficiais de alcance ou sucesso.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Captura oficial da Steam de companheiros de PEAK coordenando uma escalada em uma rota íngreme',
          caption: 'Captura oficial da Steam: espaço e chamadas claras de rota dão margem para a tentativa de resgate.',
        },
        bullets: [
          ['Antes de ativar', 'Diga quem é o companheiro, qual superfície será usada e quem cuidará da tentativa.'],
          ['Durante o puxão', 'Mantenha a equipe estável o suficiente para conversar e não transforme uma emergência em várias.'],
          ['Depois de concluir', 'Espere o companheiro voltar a ter contato com o terreno antes de seguir.'],
        ],
      },
      {
        title: 'Qual é o alcance da Rescue Claw',
        paragraphs: [
          'As fontes oficiais de PEAK usadas aqui não publicam um alcance preciso para Rescue Claw. Este guia não repete medição da comunidade como dado confirmado nem transforma uma estimativa visual em promessa. A resposta direta para “qual é o alcance da Rescue Claw?” é verificar o comportamento atual de mira no jogo; não há um número oficial disponível aqui.',
          'Para observar em uma partida, teste de uma posição estável com o companheiro e uma superfície recuperável à vista. Aproxime-se se o comando atual não aceitar o alvo e evite testar na borda de uma tentativa real. Relacione as anotações à versão do jogo, pois uma atualização futura pode mudar o comportamento. É um método cauteloso, não uma medição publicada.',
          'Alcance também não substitui planejamento de rota. Um alcance maior não torna um pouso perigoso seguro, e um alcance curto pode ser útil quando o companheiro está logo abaixo de uma borda. Leia a rota primeiro e depois decida se Rescue Claw vale as opções de recuperação restantes.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Captura oficial da Steam mostrando uma rota de PEAK em que a equipe precisa ler a próxima posição segura',
          caption: 'Captura oficial da Steam: observe a rota e o espaço de recuperação antes de depender de um item.',
        },
      },
      {
        title: 'Rescue Claw afeta alguma conquista',
        paragraphs: [
          'O anúncio oficial 2.04.a não afirma que usar Rescue Claw desbloqueia uma conquista, um emblema ou uma recompensa especial. Ele fala da interação com um amigo e do tempo menor de ragdoll, mas não define uma condição de conquista. Por isso, esta página não diz que puxar um companheiro conta para um desbloqueio específico.',
          'Se estiver testando um objetivo suspeito, registre a ação exata, o modo, o estado do companheiro, o contexto da rota e a versão atual; depois confira o resultado na plataforma. Trate relatos da comunidade como pistas até que o jogo atual ou um registro oficial da Steam confirme. Para diferenciar conquistas da plataforma e progresso dentro do jogo, consulte o ' + articleLink('achievements', 'guia de conquistas de PEAK') + '.',
          'Uma falha no desbloqueio não prova que a ferramenta esteja quebrada. A condição pode não ter relação, depender da versão ou simplesmente não estar documentada na nota do patch. Mantenha a dica de resgate separada da hipótese de conquista para não transformar uma técnica cooperativa útil em promessa falsa.',
        ],
      },
      {
        title: 'Rescue Claw e ferramentas de corda no equipamento',
        paragraphs: [
          'Rescue Claw é uma ferramenta de resposta: faz parte do plano para quando um companheiro precisar de uma chance de recuperação. Uma ferramenta de corda é uma escolha de preparação da rota: faz parte do plano de como a equipe chegará ao próximo obstáculo. Não gaste uma ferramenta de resgate só porque uma rota de corda parece ruim, e não presuma que uma corda substitui o plano de recuperação de um companheiro. São funções de planejamento, não uma afirmação sobre estatísticas ocultas.',
          'Compare os cards atuais no banco de itens da página inicial: o ' + articleLink('home#database', 'card da Rescue Claw') + ', a ' + articleLink('home#database', 'entrada da Anti-Rope Cannon') + ' e a ' + articleLink('home#database', 'entrada da Rope Shooter') + '. Os cards reúnem os nomes e os papéis gerais de equipe ou rota; os efeitos exatos ainda devem ser conferidos no jogo.',
          'Antes de sair, escolha quem leva a recuperação, quem chama a rota e o que a equipe fará se o próximo movimento falhar. Depois ' + mapLink('confira o mapa de PEAK de hoje') + ' para começar o equipamento pelo contexto da rota atual. Uma rota com vãos difíceis pode exigir preparação diferente de uma em que o risco imediato é separar um companheiro.',
        ],
        bullets: [
          ['Ferramenta de rota', 'Prepare-se para o terreno que espera atravessar.'],
          ['Ferramenta de recuperação', 'Mantenha um plano claro para o companheiro que perder a linha prevista.'],
          ['Verificação de versão', 'Leia novamente o comando atual do item e o contexto oficial depois de um patch.'],
        ],
      },
      {
        title: 'Checklist rápido de Rescue Claw em cooperação',
        paragraphs: [
          'Faça uma chamada curta antes da tentativa: identifique o alvo, diga onde será o pouso, confirme a posição de quem opera, ative quando o comando aceitar o amigo e espere o companheiro voltar a se agarrar antes de mover o grupo. Se alguma etapa não estiver clara, pare e refaça a posição.',
          'Esta lista é uma orientação baseada em experiência, não uma sequência oficial. Ela evita que a equipe trate a garra como botão de pânico e deixa visíveis as partes não verificadas. O patch oficial fornece o detalhe da interação; a equipe fornece tempo, comunicação e julgamento.',
        ],
        bullets: [
          ['1. Alvo', 'Chame o amigo que precisa da tentativa de recuperação.'],
          ['2. Pouso', 'Combine a superfície que o companheiro tentará agarrar após a conclusão.'],
          ['3. Posição', 'Mantenha quem opera em uma parte estável e recuperável da rota.'],
          ['4. Confirme', 'Use o comando atual do jogo e deixe o companheiro se reconectar antes de seguir.'],
        ],
      },
      {
        title: 'Próximos passos depois de aprender Rescue Claw',
        paragraphs: [
          'Rescue Claw funciona melhor como parte do plano da rota, não como permissão para tentar um salto ruim. Antes da próxima partida, leia ' + articleLink('peak-game-tips', 'as dicas de sobrevivência em cooperação') + ', revise o ' + articleLink('how-to-play-peak', 'guia para iniciantes') + ' e ' + mapLink('confira o mapa de PEAK de hoje') + ' para entender o contexto da rota. Depois volte ao jogo e confirme comando, alvo e pouso na versão que você realmente está jogando.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'FAQ da Rescue Claw',
      items: [
        ['Qual é o alcance da Rescue Claw em PEAK?', 'As fontes oficiais usadas aqui não publicam alcance exato. Teste o comportamento atual de mira a partir de uma posição estável no jogo e não trate uma medição da comunidade como oficial.'],
        ['Rescue Claw consegue agarrar companheiros?', 'Sim. A nota oficial 2.04.a descreve usar Rescue Claw em um amigo e diz que, depois de a garra terminar, fica mais fácil ele se agarrar a alguma coisa. Ela não promete uma pegada garantida nem define todas as condições de mira.'],
        ['Rescue Claw afeta uma conquista?', 'O anúncio oficial 2.04.a não confirma efeito sobre conquistas. Ele descreve a interação com o companheiro, não uma condição de conquista; confira o jogo atual e o registro da Steam antes de afirmar isso.'],
      ],
    },
    source: {
      eyebrow: 'Fonte oficial e limites',
      title: 'O que o Patch 2.04.a confirma',
      body: 'A fonte principal deste guia é a publicação oficial da Steam THE KILN IS BACK (Patch 2.04.a). Ela documenta a mudança nas bagagens e diz: “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” A tradução em português nesta página é para leitores e não é um texto oficial localizado. Fonte do original: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '. A publicação não informa alcance preciso, coordenadas, frequência de renovação, taxa de aparecimento ou condição de conquista; essas afirmações ficam deliberadamente em aberto.',
      links: [
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch],
        ['Página oficial de PEAK na Steam', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', 'Confira o mapa de PEAK de hoje'],
      ['peak-game-tips', 'Prepare resgates em cooperação'],
      ['how-to-play-peak', 'Revise as bases da escalada'],
      ['achievements', 'Veja o contexto das conquistas'],
    ],
    relatedLabel: 'Guias relacionados de PEAK',
  },

  ko: {
    meta: {
      title: 'PEAK Rescue Claw 가이드: 사거리, 동료 구조와 협동 사용법',
      description: 'PEAK에서 Rescue Claw를 구하는 상황, 동료를 조준해 당기는 방법, 공개되지 않은 사거리와 도전 과제 관련 여부를 공식 2.04.a 패치 기준으로 정리합니다.',
      schema: '공식 출처를 바탕으로 한 PEAK Rescue Claw 가이드입니다. 2.04.a의 THE KILN 짐 생성 맥락, 동료 조준, 공개되지 않은 사거리, 도전 과제 불확실성, 협동 회복 판단을 다룹니다.',
    },
    primaryKeyword: 'PEAK Rescue Claw 가이드',
    eyebrow: '협동 구조 가이드 - 공식 2.04.a 맥락',
    h1: 'PEAK Rescue Claw 가이드: 사거리, 동료 구조와 협동 사용법',
    intro: 'Rescue Claw는 동료가 추락하거나 불리한 위치에 걸렸을 때, 또는 Scout가 위험한 곳에 놓였을 때 지형으로 돌아갈 기회를 만드는 PEAK의 협동 회복 도구입니다. 공식 2.04.a 업데이트는 동료에게 사용할 때의 핵심 작동을 설명합니다. 이 가이드는 확인된 출처와 실제 플레이에서의 판단을 구분합니다. 등반 흐름부터 배우려면 ' + articleLink('how-to-play-peak', '초보자 등반 가이드') + '를 보고, 출발 전 준비는 ' + articleLink('peak-game-tips', '협동 생존 팁') + '에서 확인하세요.',
    answerLabel: '짧은 답변',
    answer: '동료가 지형을 다시 잡아야 할 때 Rescue Claw를 사용하세요. 공식 THE KILN 업데이트가 설명한 짐 맥락에서 도구를 찾고, 동료를 조준한 뒤 현재 게임 프롬프트에 따라 작동시키며, 조작자는 안정적인 회복 위치를 확보해야 합니다. 공식 출처는 클로가 끝난 뒤 동료의 래그돌 시간이 짧아진다는 점을 확인하지만, 정확한 사거리나 보장된 착지, 도전 과제 조건은 공개하지 않습니다.',
    tocLabel: '이 페이지의 내용',
    tocFaq: 'Rescue Claw FAQ',
    heroImage: {
      alt: 'PEAK 등반자가 갈고리 줄로 동료를 바위 선반까지 돕는 편집 일러스트',
      caption: '편집 일러스트: Rescue Claw는 팀 회복을 위한 판단이며 안전한 착지를 보장하지 않습니다.',
    },
    sections: [
      {
        title: 'Rescue Claw가 협동 팀에 해 주는 일',
        paragraphs: [
          '구조 도구와 경로 도구의 역할은 다릅니다. 동료가 다음 안전한 손잡이 아래로 떨어지거나, 위험한 가장자리에 걸리거나, Scout가 노출된 위치에 남았을 때 팀은 실패한 이동을 다시 지형을 잡을 기회로 바꿔야 합니다. Rescue Claw는 그 회복 판단에 들어갑니다. 소지자가 타이밍을 정하고, 동료가 다음 손잡이를 알리며, 나머지 팀원이 경로를 지킵니다.',
          '공식 패치의 표현은 커뮤니티 요약보다 제한적입니다. Patch 2.04.a는 친구에게 Rescue Claw를 사용하면 래그돌 상태가 더 짧아져 클로가 끝난 뒤 무언가를 잡기 쉬워진다고 설명합니다. 이는 친구를 대상으로 하는 협동 상호작용과 완료 후 회복상의 이점을 확인하지만, 모든 구조가 성공한다고 보장하지는 않습니다.',
        ],
        bullets: [
          ['구조 상황 판단', '다음 목표가 더 높이 오르는 일이 아니라 동료를 회복시키는 일일 때 도구를 고려하세요.'],
          ['손잡이 알리기', '시도 전에 동료가 잡으려는 표면이나 선반을 말하게 하세요.'],
          ['조작자 보호', 'Rescue Claw를 쓰는 사람이 곧바로 두 번째 구조를 필요로 하지 않는 지형에 서게 하세요.'],
        ],
      },
      {
        title: 'PEAK에서 Rescue Claw 구하는 방법',
        paragraphs: [
          '공식 출처에서 확인되는 획득 맥락은 THE KILN의 luggage spawner입니다. Patch 2.04.a THE KILN IS BACK에서 개발자는 다음과 같이 적었습니다. “Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.” 실제로는 현재 경로에 있는 짐 획득 기회를 확인하고, 특히 공지에서 언급한 spawner를 살펴보면 됩니다.',
          '이 문장은 Rescue Claw 전용 좌표, 갱신 시간, 등장 확률 또는 확정 등장 규칙을 말하지 않습니다. 찾은 짐에 도구가 없었다면 경로와 버전을 기록하고, 한 번의 플레이를 영구적인 생성 규칙의 증거로 삼지 마세요. 현재 게임과 최신 공식 공지가 오래된 목록보다 우선합니다.',
        ],
        bullets: [
          ['언급된 짐 맥락 확인', '현재 경로와 업데이트 맥락에 맞는 luggage spawner를 확인하세요.'],
          ['기대 범위 정하기', '패치는 짐의 맥락을 바꾸지만, 검색할 때마다 Rescue Claw가 나온다고 약속하지 않습니다.'],
          ['현재 버전 확인', '오래된 아이템 목록과 게임이 다르면 현재 게임과 공식 공지를 기준으로 삼으세요.'],
        ],
      },
      {
        title: '동료를 조준해 Rescue Claw 사용하는 방법',
        paragraphs: [
          '사용을 팀이 맞춰야 하는 인계 과정으로 생각하세요. 조작자는 경로를 회복할 여지가 있는 곳에 서서 동료를 바라보고, 현재 프롬프트를 작동시키기 전에 대상 친구를 조준해야 합니다. 동료는 잡으려는 손잡이나 선반을 알리고, 나머지 팀원은 또 다른 위기를 만들지 않도록 움직임을 조절하세요.',
          '2.04.a에서 기억할 공식 문장은 다음과 같습니다. “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” 이 페이지에서는 “친구에게 Rescue Claw를 사용하면 래그돌 상태가 짧아져 클로가 끝난 뒤 무언가를 잡기 쉬워진다”라고 옮겼습니다. 독자를 위한 번역이며 공식 한국어 문장이 아닙니다. 공식 원문 출처: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '.',
          '틈, 짧은 추락, 곤란에 빠진 Scout 때문에 평범한 등반이 아니라 회복 판단이 필요해졌을 때 도구를 사용하세요. 구조에는 받는 사람, 보이는 회복 표면, 조작자의 안전한 위치가 여전히 필요합니다. 이는 팀 운영 방식이지, 공식적으로 공개된 사거리나 성공 보장이 아닙니다.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: '가파른 경로에서 PEAK 동료들이 함께 등반을 조율하는 Steam 공식 스크린샷',
          caption: 'Steam 공식 스크린샷: 거리를 유지하고 경로를 분명히 알리면 구조 시도에 여유가 생깁니다.',
        },
        bullets: [
          ['작동 전', '대상 동료, 회복 표면, 시도 담당자를 정하세요.'],
          ['당기는 동안', '대화할 수 있을 만큼 팀을 안정시키고 한 번의 위기를 여러 위기로 만들지 마세요.'],
          ['완료 후', '동료가 지형을 다시 잡을 때까지 팀을 이동시키지 마세요.'],
        ],
      },
      {
        title: 'Rescue Claw 사거리는 얼마나 되나',
        paragraphs: [
          '이 페이지에서 사용한 공식 PEAK 출처는 Rescue Claw의 정확한 사거리를 공개하지 않습니다. 커뮤니티 측정치를 확인된 데이터처럼 반복하지 않으며, 눈대중 거리를 보장처럼 쓰지도 않습니다. “Rescue Claw 사거리가 얼마인가?”에 대한 직접적인 답은 게임 안에서 현재 조준 동작을 확인하라는 것입니다. 여기에는 공식 수치가 없습니다.',
          '직접 확인하려면 동료와 회복 가능한 표면이 시야에 들어오는 안정적인 위치에서 시험하세요. 현재 프롬프트가 대상을 받지 않으면 더 가까이 가고, 실제 구조 시도의 끝에서 시험하지 마세요. 이후 패치가 동작을 바꿀 수 있으므로 기록에는 게임 버전을 함께 남기세요. 이는 신중한 확인 방법이지 공개된 측정값이 아닙니다.',
          '사거리는 경로 계획을 대신하지도 않습니다. 멀리 닿는다고 위험한 착지가 안전해지는 것은 아니며, 동료가 선반 바로 아래에 있다면 짧은 거리도 유용할 수 있습니다. 먼저 경로를 읽고 남은 회복 수단을 Rescue Claw에 사용할 가치가 있는지 판단하세요.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: '다음 안전한 위치를 읽어야 하는 PEAK 등반 경로를 보여 주는 Steam 공식 스크린샷',
          caption: 'Steam 공식 스크린샷: 아이템에 의존하기 전에 경로와 회복 공간을 확인하세요.',
        },
      },
      {
        title: 'Rescue Claw가 도전 과제에 영향을 주나',
        paragraphs: [
          '공식 2.04.a 공지는 Rescue Claw 사용이 도전 과제, 배지 또는 특별 보상을 해금한다고 말하지 않습니다. 친구와의 상호작용과 짧아진 래그돌 시간을 설명하지만 도전 과제 조건은 정의하지 않습니다. 따라서 이 페이지는 동료를 당기는 행동이 특정 해금에 포함된다고 주장하지 않습니다.',
          '의심되는 목표를 시험한다면 정확한 행동, 모드, 동료 상태, 경로 맥락과 현재 버전을 기록한 뒤 플랫폼 결과를 확인하세요. 현재 게임이나 공식 Steam 기록이 확인하기 전까지 커뮤니티 제보는 단서로만 취급하세요. 플랫폼 도전 과제와 게임 내 진행도의 차이는 ' + articleLink('achievements', 'PEAK 도전 과제 가이드') + '에서 확인할 수 있습니다.',
          '해금에 실패했다고 도구가 고장 났다는 뜻은 아닙니다. 조건이 도구와 무관하거나 버전에 따라 달라지거나, 패치 노트에 문서화되지 않았을 수 있습니다. 구조 조언과 도전 과제 가설을 분리해 유용한 협동 기술이 잘못된 약속이 되지 않게 하세요.',
        ],
      },
      {
        title: 'Rescue Claw와 로프 도구를 함께 쓰는 법',
        paragraphs: [
          'Rescue Claw는 대응 도구입니다. 동료에게 회복 기회가 필요할 때 어떻게 할지를 정하는 계획에 들어갑니다. 로프 도구는 경로 준비 선택입니다. 다음 장애물에 어떻게 접근할지를 정하는 계획에 들어갑니다. 로프 경로가 불편해 보인다는 이유만으로 구조 도구를 쓰지 말고, 로프가 동료 회복 계획을 대신한다고 생각하지도 마세요. 이는 역할을 구분하는 설명이지 숨겨진 아이템 수치에 대한 주장이 아닙니다.',
          '홈페이지 데이터베이스에서 현재 아이템 카드를 비교하세요. ' + articleLink('home#database', 'Rescue Claw 카드') + ', ' + articleLink('home#database', 'Anti-Rope Cannon 항목') + ', ' + articleLink('home#database', 'Rope Shooter 항목') + '을 함께 볼 수 있습니다. 카드는 이름과 대략적인 팀 또는 경로 역할을 정리하며, 정확한 효과는 게임 안에서 확인해야 합니다.',
          '출발 전에 누가 회복 도구를 들지, 누가 경로를 알릴지, 다음 이동이 실패하면 팀이 어떻게 할지 정하세요. 그런 다음 ' + mapLink('오늘의 PEAK 맵 확인') + '으로 현재 경로를 기준으로 장비를 시작하세요. 틈이 많은 경로와 동료 분리가 당장 위험한 경로는 준비가 달라질 수 있습니다.',
        ],
        bullets: [
          ['경로 도구', '예상하는 지형을 건너기 위한 준비를 하세요.'],
          ['회복 도구', '예정한 선을 벗어난 동료를 위한 분명한 대응을 남겨 두세요.'],
          ['버전 확인', '패치 후 현재 아이템 프롬프트와 공식 업데이트 맥락을 다시 읽으세요.'],
        ],
      },
      {
        title: 'Rescue Claw 협동 사용 체크리스트',
        paragraphs: [
          '시도 전에 짧게 확인하세요. 대상 지정, 착지 지점 알리기, 조작자 위치 확인, 현재 프롬프트가 친구를 받아들인 뒤 작동, 그리고 동료가 다시 지형을 잡을 때까지 팀 이동 금지 순서입니다. 하나라도 분명하지 않으면 멈추고 위치를 다시 만드세요.',
          '이 목록은 경험에 기반한 조언이며 공식 순서가 아닙니다. 클로를 당황했을 때 누르는 버튼으로 취급하지 않도록 하고, 확인되지 않은 부분을 드러내는 데 목적이 있습니다. 공식 패치는 상호작용을 설명하고, 타이밍과 소통과 판단은 팀이 맡습니다.',
        ],
        bullets: [
          ['1. 대상', '회복 시도가 필요한 친구를 부르세요.'],
          ['2. 착지', '완료 후 동료가 잡으려 할 표면을 합의하세요.'],
          ['3. 위치', '조작자를 안정적이고 다시 회복할 수 있는 경로에 세우세요.'],
          ['4. 확인', '현재 게임 프롬프트를 사용하고 동료가 다시 연결될 때까지 이동하지 마세요.'],
        ],
      },
      {
        title: 'Rescue Claw를 배운 다음 단계',
        paragraphs: [
          'Rescue Claw는 나쁜 점프를 허용하는 도구가 아니라 경로 계획의 한 부분으로 쓸 때 가장 유용합니다. 다음 시도 전에 ' + articleLink('peak-game-tips', '협동 생존 팁') + '을 읽고, ' + articleLink('how-to-play-peak', '초보자 등반 가이드') + '를 복습한 뒤, ' + mapLink('오늘의 PEAK 맵 확인') + '으로 현재 경로 맥락을 확인하세요. 게임으로 돌아가 실제 플레이 버전의 프롬프트, 대상, 착지를 다시 확인하세요.',
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'Rescue Claw FAQ',
      items: [
        ['PEAK에서 Rescue Claw 사거리는 얼마인가?', '여기서 사용한 공식 출처는 정확한 사거리를 공개하지 않습니다. 게임 안에서 안정적인 위치에서 현재 조준 동작을 시험하고 커뮤니티 측정을 공식 정보로 취급하지 마세요.'],
        ['Rescue Claw로 동료를 잡을 수 있나?', '가능합니다. 공식 2.04.a는 친구에게 Rescue Claw를 사용하는 상황을 명시하고, 클로가 끝난 뒤 친구가 무언가를 잡기 쉬워진다고 설명합니다. 확정적인 잡기나 모든 조준 조건까지 보장하지는 않습니다.'],
        ['Rescue Claw가 도전 과제에 영향을 주나?', '공식 2.04.a 공지는 도전 과제 효과를 확인하지 않았습니다. 동료 상호작용은 설명하지만 도전 과제 조건은 설명하지 않으므로, 현재 게임과 Steam 기록을 확인한 뒤 판단하세요.'],
      ],
    },
    source: {
      eyebrow: '공식 출처와 한계',
      title: 'Patch 2.04.a에서 확인되는 내용',
      body: '이 가이드의 주요 출처는 Steam 공식 글 THE KILN IS BACK(Patch 2.04.a)입니다. 글은 짐 변경을 기록하며 “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.”라고 설명합니다. 이 페이지의 한국어는 독자를 위한 번역이며 공식 한국어 텍스트가 아닙니다. 공식 원문 출처: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '. 정확한 사거리, 좌표, 갱신 주기, 등장률, 도전 과제 조건은 공개하지 않았으므로 이 가이드에서도 단정하지 않습니다.',
      links: [
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch],
        ['PEAK Steam 공식 페이지', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', '오늘의 PEAK 맵 확인'],
      ['peak-game-tips', '협동 구조 준비하기'],
      ['how-to-play-peak', '등반 기본 복습하기'],
      ['achievements', '도전 과제 맥락 확인'],
    ],
    relatedLabel: '관련 PEAK 가이드',
  },

  it: {
    meta: {
      title: 'Guida Rescue Claw PEAK: portata, recupero dei compagni e cooperativa',
      description: 'Scopri come trovare Rescue Claw in PEAK, mirare ai compagni, interpretare la portata non pubblicata e verificare il rapporto con gli obiettivi della patch ufficiale 2.04.a.',
      schema: 'Guida di PEAK basata sulle fonti per Rescue Claw: contesto dei bagagli di THE KILN in 2.04.a, bersagli alleati, portata non pubblicata, obiettivi e recupero cooperativo.',
    },
    primaryKeyword: 'Rescue Claw PEAK',
    eyebrow: 'Guida al soccorso cooperativo - contesto ufficiale 2.04.a',
    h1: 'Guida Rescue Claw PEAK: portata, recupero dei compagni e cooperativa',
    intro: 'Rescue Claw è lo strumento di recupero cooperativo di PEAK per quando un compagno cade, resta bloccato in una posizione sfavorevole o lo Scout finisce esposto. L’aggiornamento ufficiale 2.04.a descrive il comportamento principale quando la usi su un amico; questa guida separa il fatto verificato dai consigli di gioco. Per capire il ciclo della scalata, parti dalla ' + articleLink('how-to-play-peak', 'guida per principianti') + ' e prepara la squadra con i ' + articleLink('peak-game-tips', 'consigli per la sopravvivenza cooperativa') + '.',
    answerLabel: 'Risposta breve',
    answer: 'Usa Rescue Claw quando un compagno deve tornare a contatto con il terreno. Cercala nel contesto dei bagagli descritto dall’aggiornamento di THE KILN, mira all’amico, attiva il comando mostrato dal gioco e mantieni una posizione stabile per il recupero. La fonte conferma un periodo di ragdoll più breve dopo il completamento della tenaglia, ma non pubblica una portata precisa, un atterraggio garantito o una condizione per un obiettivo.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ di Rescue Claw',
    heroImage: {
      alt: 'Illustrazione editoriale di uno scalatore di PEAK che usa una tenaglia per aiutare un compagno a raggiungere una sporgenza',
      caption: 'Illustrazione editoriale: Rescue Claw è una decisione di recupero della squadra, non una garanzia di atterraggio.',
    },
    sections: [
      {
        title: 'Cosa offre Rescue Claw a una squadra cooperativa',
        paragraphs: [
          'Uno strumento di soccorso ha un compito diverso da uno strumento di percorso. Quando un compagno cade sotto la prossima presa sicura, resta bloccato su un bordo sfavorevole o lascia lo Scout in una posizione esposta, la squadra deve trasformare un movimento fallito in un’altra possibilità di aggrapparsi al terreno. Rescue Claw fa parte di questa decisione: chi la porta sceglie il momento, il compagno comunica la prossima presa e gli altri proteggono il percorso.',
          'Il linguaggio della patch ufficiale è più ristretto di molti riassunti della community. La Patch 2.04.a dice che usare Rescue Claw su un amico lo terrà in ragdoll per meno tempo, rendendo più facile afferrare qualcosa quando la tenaglia ha finito. Questo conferma un’interazione cooperativa rivolta a un amico e un vantaggio di recupero dopo il completamento; non garantisce che ogni soccorso riesca.',
        ],
        bullets: [
          ['Riconoscere il soccorso', 'Usa lo strumento quando la decisione riguarda il recupero di un compagno, non solo il guadagno di quota.'],
          ['Chiamare la presa', 'Fai nominare al compagno la superficie o la sporgenza che vuole raggiungere prima del tentativo.'],
          ['Proteggere chi opera', 'Tieni chi usa la tenaglia su un terreno che non richieda subito un secondo soccorso.'],
        ],
      },
      {
        title: 'Come ottenere Rescue Claw in PEAK',
        paragraphs: [
          'Il contesto di ottenimento confermato dalla fonte ufficiale è il luggage spawner di THE KILN. Nella Patch 2.04.a, THE KILN IS BACK, gli sviluppatori hanno scritto: “Added 2 more luggages in the spawner for THE KILN and removed 1 luggage from the statue area at the end of the CALDERA, but made it guaranteed to spawn better luggage.” In pratica, controlla le opportunità di bagagli offerte dal percorso attuale, soprattutto lo spawner citato nella nota.',
          'La frase non indica una coordinata esclusiva di Rescue Claw, un timer di rinnovo, una percentuale di comparsa o una presenza garantita. Se lo strumento non è nel bagaglio trovato, registra percorso e versione invece di trattare una partita come regola permanente di spawn. Il gioco attuale e gli aggiornamenti ufficiali recenti vengono prima di una vecchia lista.',
        ],
        bullets: [
          ['Controllare il contesto dei bagagli citato', 'Esamina il luggage spawner collegato al percorso e all’aggiornamento attuali.'],
          ['Limitare le aspettative', 'La patch cambia il contesto dei bagagli, ma non promette Rescue Claw a ogni ricerca.'],
          ['Verificare la versione attuale', 'Se una lista vecchia contraddice il gioco, segui la partita e le note ufficiali attuali.'],
        ],
      },
      {
        title: 'Come mirare e usare Rescue Claw su un compagno',
        paragraphs: [
          'Considera l’uso come un passaggio coordinato. Chi opera deve stare dove il percorso è ancora recuperabile, rivolgersi al compagno e mirare all’amico scelto prima di attivare il comando attuale. Il compagno deve chiamare la presa o la sporgenza che cerca, mentre gli altri evitano di creare una seconda emergenza.',
          'Il comportamento chiave della 2.04.a è scritto così nell’annuncio ufficiale: “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” Questa pagina lo traduce così: “Usare Rescue Claw su un amico riduce il tempo in ragdoll e gli rende più facile aggrapparsi a qualcosa quando la tenaglia termina.” È una traduzione per i lettori, non un testo ufficiale in italiano. Fonte del testo originale: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '.',
          'Usa lo strumento quando un varco, una caduta breve o uno Scout in difficoltà crea una decisione di recupero invece di una normale decisione di arrampicata. Il tentativo richiede comunque un ricevente, una superficie visibile su cui recuperare e una posizione sicura per chi opera. Sono pratiche di squadra, non garanzie ufficiali di portata o successo.',
        ],
        image: {
          src: '/media/peak-coop-climb.webp',
          alt: 'Schermata ufficiale Steam di compagni di PEAK che coordinano una scalata su un percorso ripido',
          caption: 'Schermata ufficiale Steam: spazio e comunicazioni chiare sul percorso danno margine al soccorso.',
        },
        bullets: [
          ['Prima di attivare', 'Indica il compagno, la superficie di recupero e chi è responsabile del tentativo.'],
          ['Durante il richiamo', 'Tieni la squadra abbastanza ferma da comunicare e non trasformare un’emergenza in molte.'],
          ['Dopo il completamento', 'Lascia che il compagno torni a contatto con il terreno prima di riprendere il percorso.'],
        ],
      },
      {
        title: 'Qual è la portata di Rescue Claw',
        paragraphs: [
          'Le fonti ufficiali di PEAK usate qui non pubblicano una portata precisa per Rescue Claw. Questa guida non ripete una misurazione della community come dato confermato e non trasforma una stima visiva in una promessa. La risposta diretta a “qual è la portata di Rescue Claw?” è verificare nel gioco il comportamento attuale del puntamento; qui non esiste un numero ufficiale.',
          'Per osservarla in partita, prova da una posizione stabile con il compagno e una superficie recuperabile nel campo visivo. Avvicinati se il comando attuale non accetta il bersaglio ed evita di fare test sul bordo di un vero tentativo. Collega le note alla versione del gioco, perché una patch successiva può cambiare il comportamento. È un metodo prudente, non una misurazione pubblicata.',
          'La portata non sostituisce la pianificazione del percorso. Una distanza maggiore non rende sicuro un atterraggio pericoloso, mentre una distanza breve può essere utile se il compagno è appena sotto una sporgenza. Leggi prima il percorso e poi decidi se Rescue Claw vale le opzioni di recupero rimaste.',
        ],
        image: {
          src: '/media/peak-map-route.webp',
          alt: 'Schermata ufficiale Steam di un percorso PEAK in cui la squadra deve leggere la prossima posizione sicura',
          caption: 'Schermata ufficiale Steam: controlla percorso e spazio di recupero prima di affidarti a un oggetto.',
        },
      },
      {
        title: 'Rescue Claw influisce su un obiettivo',
        paragraphs: [
          'L’annuncio ufficiale 2.04.a non afferma che usare Rescue Claw sblocchi un obiettivo, un distintivo o una ricompensa speciale. Descrive l’interazione con un amico e il ragdoll più breve, ma non definisce una condizione per un obiettivo. Per questo la pagina non sostiene che tirare un compagno conti per uno sblocco preciso.',
          'Se stai provando un obiettivo sospetto, registra l’azione esatta, la modalità, lo stato del compagno, il contesto del percorso e la versione attuale, poi controlla il risultato della piattaforma. Considera i report della community degli indizi finché il gioco attuale o un registro Steam ufficiale non li conferma. Per distinguere obiettivi della piattaforma e progressi nel gioco, consulta la ' + articleLink('achievements', 'guida agli obiettivi di PEAK') + '.',
          'Uno sblocco mancato non dimostra che lo strumento sia rotto. La condizione può essere indipendente, dipendere dalla versione o semplicemente non essere documentata nella nota della patch. Tieni separati il consiglio di soccorso e l’ipotesi sull’obiettivo, così una tecnica cooperativa utile non diventa una promessa falsa.',
        ],
      },
      {
        title: 'Rescue Claw e strumenti di corda nel loadout',
        paragraphs: [
          'Rescue Claw è uno strumento di risposta: fa parte del piano per quando un compagno ha bisogno di una possibilità di recupero. Uno strumento di corda è una scelta di preparazione del percorso: serve a decidere come avvicinarsi al prossimo ostacolo. Non consumare uno strumento di soccorso solo perché un percorso con la corda sembra scomodo e non pensare che una corda sostituisca il piano di recupero del compagno. Sono ruoli di pianificazione, non statistiche nascoste.',
          'Confronta le schede attuali nel database della home: la ' + articleLink('home#database', 'scheda Rescue Claw') + ', la ' + articleLink('home#database', 'voce Anti-Rope Cannon') + ' e la ' + articleLink('home#database', 'voce Rope Shooter') + '. Le schede tengono insieme i nomi e i ruoli generali di squadra o percorso; gli effetti precisi vanno comunque verificati nel gioco.',
          'Prima di partire, scegli chi porta il recupero, chi chiama il percorso e cosa farà la squadra se la prossima mossa fallisce. Poi ' + mapLink('controlla la mappa PEAK di oggi') + ' per iniziare dal contesto del percorso attuale. Un percorso con grandi vuoti può richiedere una preparazione diversa da uno in cui il rischio immediato è la separazione di un compagno.',
        ],
        bullets: [
          ['Strumento di percorso', 'Preparati per il terreno che prevedi di attraversare.'],
          ['Strumento di recupero', 'Conserva un piano chiaro per il compagno che perde la linea prevista.'],
          ['Controllo della versione', 'Dopo una patch rileggi il comando attuale dell’oggetto e il contesto ufficiale.'],
        ],
      },
      {
        title: 'Checklist cooperativa rapida per Rescue Claw',
        paragraphs: [
          'Fai questa chiamata prima del tentativo: identifica il bersaglio, indica il punto di arrivo, conferma la posizione di chi opera, attiva quando il comando accetta l’amico e aspetta che il compagno torni ad afferrare il terreno prima di muovere il gruppo. Se qualcosa non è chiaro, fermati e ricrea la posizione.',
          'Questa checklist è un consiglio basato sull’esperienza, non una sequenza ufficiale. Evita che la squadra tratti la tenaglia come un pulsante di panico e rende visibili le parti non verificate. La patch ufficiale fornisce il dettaglio dell’interazione; la squadra fornisce tempi, comunicazione e giudizio.',
        ],
        bullets: [
          ['1. Bersaglio', 'Chiama l’amico che ha bisogno del tentativo di recupero.'],
          ['2. Arrivo', 'Concorda la superficie che il compagno proverà ad afferrare dopo il completamento.'],
          ['3. Posizione', 'Tieni chi opera su una parte stabile e ancora recuperabile del percorso.'],
          ['4. Conferma', 'Usa il comando attuale del gioco e lascia che il compagno si ricolleghi prima di proseguire.'],
        ],
      },
      {
        title: 'Passi successivi dopo aver imparato Rescue Claw',
        paragraphs: [
          'Rescue Claw funziona meglio come parte di un piano di percorso, non come permesso di tentare un salto sbagliato. Prima della prossima partita leggi ' + articleLink('peak-game-tips', 'i consigli per la sopravvivenza cooperativa') + ', ripassa la ' + articleLink('how-to-play-peak', 'guida per principianti') + ' e ' + mapLink('controlla la mappa PEAK di oggi') + ' per il contesto attuale. Poi torna al gioco e verifica comando, bersaglio e arrivo nella versione che stai davvero usando.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ di Rescue Claw',
      items: [
        ['Qual è la portata di Rescue Claw in PEAK?', 'Le fonti ufficiali usate qui non pubblicano una portata esatta. Prova il comportamento attuale del puntamento da una posizione stabile nel gioco e non considerare ufficiale una misurazione della community.'],
        ['Rescue Claw può afferrare i compagni?', 'Sì. La nota ufficiale 2.04.a descrive l’uso di Rescue Claw su un amico e dice che, dopo il completamento della tenaglia, per lui è più facile afferrare qualcosa. Non garantisce la presa né definisce tutte le condizioni di puntamento.'],
        ['Rescue Claw influisce su un obiettivo?', 'L’annuncio ufficiale 2.04.a non conferma alcun effetto sugli obiettivi. Descrive l’interazione con il compagno, non una condizione di sblocco; controlla il gioco attuale e il registro Steam prima di sostenerlo.'],
      ],
    },
    source: {
      eyebrow: 'Fonte ufficiale e limiti',
      title: 'Cosa conferma la Patch 2.04.a',
      body: 'La fonte principale di questa guida è il post ufficiale Steam THE KILN IS BACK (Patch 2.04.a). Documenta la modifica dei bagagli e dice: “Using the Rescue Claw on a friend will ragdoll them for less time, making it easier for them to grab onto something once the claw completes.” La traduzione italiana di questa pagina è destinata ai lettori e non è un testo ufficiale localizzato. Fonte dell’originale: Patch 2.04.a THE KILN IS BACK, Steam News: ' + sourceLinks.patch + '. Il post non pubblica portata precisa, coordinate, frequenza di rinnovo, tasso di comparsa o condizione per un obiettivo; queste affermazioni restano intenzionalmente aperte.',
      links: [
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch],
        ['Pagina ufficiale di PEAK su Steam', sourceLinks.steam],
      ],
    },
    related: [
      ['map-rotation', 'Controlla la mappa PEAK di oggi'],
      ['peak-game-tips', 'Prepara i soccorsi cooperativi'],
      ['how-to-play-peak', 'Ripassa le basi della scalata'],
      ['achievements', 'Controlla il contesto degli obiettivi'],
    ],
    relatedLabel: 'Guide PEAK correlate',
  },
};
