const articleLink = (slug, label) => `[[link:${slug}|${label}]]`;

const sourceLinks = {
  effigy: 'https://peak.wiki.gg/wiki/Scout_Effigy',
  scout: 'https://peak.wiki.gg/wiki/Scout',
  statue: 'https://peak.wiki.gg/wiki/Ancient_Statue',
  bones: 'https://peak.wiki.gg/wiki/Book_of_Bones',
  checkpoint: 'https://peak.wiki.gg/wiki/Checkpoint_Flag',
  steam: 'https://store.steampowered.com/app/3527290/PEAK/',
  faq: 'https://landfall.se/peak-faq',
};

const media = (alt, caption) => ({ alt, caption });

export const reviveGuideTranslations = {
  zh: {
    meta: {
      title: 'PEAK 怎么复活？倒地、Scout Effigy 与联机复活指南',
      description: '了解 PEAK 怎么复活队友：先区分倒地与死亡，再检查恢复提示、Scout Effigy、联机条件、最后复活点和最终关卡限制。',
      schema: '一份有来源边界的 PEAK 复活指南，解释倒地恢复、Scout Effigy、联机条件、复活点问题和最终关卡限制。',
    },
    primaryKeyword: 'PEAK 怎么复活',
    eyebrow: '合作恢复指南 - 先确认角色状态',
    h1: 'PEAK 怎么复活？倒地、Scout Effigy 与联机复活指南',
    intro: `搜索 PEAK 怎么复活时，第一步不是立刻寻找固定祭坛，而是确认 Scout 处于倒地、昏迷还是已经死亡。倒地队友要先看当前恢复提示；死亡角色则可能需要 ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} 或本局允许的其他复活路线。`,
    answerLabel: '简短答案',
    answer: `在 PEAK 中复活队友，先判断他是仍在路线上的倒地或昏迷状态，还是已经进入死亡状态。前者使用当前游戏接受的治疗或恢复交互，后者检查联机条件、目标位置和 Scout Effigy 等复活选项。没有提示时不要猜一个永久复活点，要同时核对状态、模式、物品、位置和版本。`,
    tocLabel: '本页内容',
    tocFaq: '复活常见问题',
    heroImage: media('编辑插图对比 PEAK 中倒地 Scout 的恢复与使用 Scout Effigy 复活死亡 Scout', '编辑插图：倒地恢复与死亡复活是两种不同的 PEAK 决策。'),
    sections: [
      {
        title: '先确认：Scout 是倒地还是已经死亡？',
        paragraphs: [
          '很多复活失败都源于状态判断错误。倒地或昏迷的 Scout 仍然是当前路线上的恢复问题：队伍要看提示、保护操作员，并判断当前位置是否足够安全。死亡的 Scout 则是另一种状态，队伍需要本局可用的复活物品、目标或重生路线。',
          '玩家搜索中的“复活队友”并不总是同一个动作。“救起倒地玩家”通常指角色还在场景中的恢复过程；“复活死亡角色”则更接近 resurrection。以可见状态和当前提示为准，比照搬旧按键或旧攻略更可靠。',
        ],
        table: {
          caption: 'PEAK 复活判断表：先把动作对应到可见状态',
          headers: ['状态', '可见线索', '第一步', '需要 Scout Effigy 吗？'],
          rows: [
            ['倒地或昏迷', 'Scout 仍在路线中，游戏或物品系统提供恢复交互。', '保护接近路线，使用当前接受的治疗/恢复动作，并让一名队友完成操作。', '通常不是第一步；先处理昏迷状态。'],
            ['角色死亡', '角色不再处于普通倒地交互，当前对局出现复活或重生路线。', '确认联机状态、目标和可用来源，再使用当前被接受的选项。', '在物品与目标条件满足时可以需要。'],
            ['没有提示或状态不明', '队伍看不到有效交互、目标或可使用物品。', '停止移动，重新核对状态、物品、位置和版本。', '不要把它当成固定复活点的证据。'],
          ],
        },
      },
      {
        title: '如何在 PEAK 中救起倒地队友',
        paragraphs: [
          '面对昏迷玩家，先处理站位和路线，再处理按键。社区维护的 Scout 资料把治疗物品与恢复昏迷 Scout 联系起来，但具体物品、时机和提示可能随版本变化。让操作员站在稳定表面上，避免全队挤到同一条边缘，并以游戏当前显示为最终依据。',
          '操作员应明确说出自己正在执行恢复，倒地玩家则说明附近是否有可接触的路线。如果前方仍然危险，先清理下一处落脚点。成功恢复后也不要立即冲刺：先离开造成问题的区域，重新分配体力和下一次暂停位置。',
          `不要把 ${articleLink('rescue-claw', 'Rescue Claw 救援爪指南')} 当作万能复活说明。它可以帮助队友重新接触地形，但不等于治疗、复活或死亡后的重生动作。`,
        ],
        image: media('Steam 官方截图中，PEAK 队友在陡峭路线旁协调攀登与恢复', 'Steam 官方截图：给操作员稳定站位，并给倒地队友留下清晰的恢复路线。'),
        bullets: [
          ['1. 稳住位置', '选择不会让操作员也掉下去的表面。'],
          ['2. 读取提示', '使用当前游戏显示的恢复交互，不要依赖旧按键。'],
          ['3. 指定一名操作员', '让其他队友观察危险和撤退路线。'],
          ['4. 离开危险区', 'Scout 恢复后先暂停，再决定是否继续攀登。'],
        ],
      },
      {
        title: '如何使用 Scout Effigy 复活死亡的 Scout',
        paragraphs: [
          `Scout Effigy 是“PEAK 怎么复活死亡角色”这类搜索的一个明确答案。本站物品条目记录它可以在目标位置复活死亡的 Scout，并注明它不会在单人模式中生成。因此它是联机复活选项，不是所有倒地动画都能使用的单人复活按钮。`,
          '使用前先确认队伍描述的是同一个状态。如果 Scout 只是昏迷，优先遵循当前恢复提示；如果 Scout 已经死亡，再确认本局是联机、物品确实可用，以及当前游戏接受的目标位置。操作员还需要留出完成动作的安全空间。',
          `要查看维护中的物品说明，可以打开 ${articleLink('items#item-scout-effigy-107', 'Scout Effigy 物品条目')}。它是参考资料，不代表每局都会出现相同生成位置，也不保证旧社区坐标在新补丁后仍然有效。`,
        ],
        bullets: [
          ['联机检查', 'Scout Effigy 不应被当作单人模式的固定资源。'],
          ['状态检查', '死亡复活与倒地恢复要分开处理。'],
          ['目标检查', '瞄准当前游戏接受的目标位置，并保护操作员。'],
          ['版本检查', '行为或提示改变时，记录版本并重新核对来源。'],
        ],
      },
      {
        title: 'Scout Effigy 不是唯一的复活相关选项',
        paragraphs: [
          '社区维护的 Scout 资料和相关物品页会把死亡后的复活、检查点式重生和其他目标分开描述。Ancient Statue、Book of Bones、Checkpoint Flag 与 Scout Effigy 可能出现在同一组讨论中，但名称相近不代表目标、成本、模式和触发条件相同。',
          '这一区分可以避免把每个“复活点”都说成永久祭坛。如果来源没有同时说明你的模式、关卡和版本，就把它当作术语线索，而不是保证。实际目标仍以当前对局接受的提示为准。',
        ],
        table: {
          caption: '查看 PEAK 复活资料时需要分开的术语',
          headers: ['术语', '可能指什么', '如何使用证据'],
          rows: [
            ['治疗或恢复', '在进入死亡状态前，让昏迷 Scout 回到路线。', '跟随当前交互和本局接受的物品。'],
            ['复活', '通过 Scout Effigy 或其他目标把死亡 Scout 带回对局。', '确认模式、目标和当前可用性，不要复制旧坐标。'],
            ['重生或检查点', '通过检查点式对象或状态重新进入路线。', '不要据此断言原地尸体一定可以被救起。'],
          ],
        },
      },
      {
        title: 'PEAK 的最后复活点在哪里？',
        paragraphs: [
          '“最后复活点”听起来像一个固定坐标，但本站没有核实一个适用于所有路线的永久复活祭坛。物品或提示提供的目标位置，不自动等同于每局都相同的最后检查点。不要把一张社区截图推断成所有生物群系和补丁都适用的规则。',
          '更稳妥的现场检查是三步：确认角色是倒地还是死亡，读取当前对局接受的目标，再记下关卡和版本。如果队友问在哪里复活，回答当前对局的有效目标，而不是猜一个坐标。',
          `地图页面可以帮助你理解路线背景，但不能单独证明通用复活点。可以先查看${articleLink('map-rotation', '今天的 PEAK 地图')}，然后回到游戏中核对真实交互。`,
        ],
      },
      {
        title: '为什么复活选项可能不生效',
        paragraphs: [
          '复活失败时一次只检查一个变量。先问角色是倒地、昏迷、死亡，还是已经超出交互范围；然后检查操作员使用的物品或提示、目标位置是否有效，以及队伍是否误开了无法生成所需物品的单人模式。',
          `不要在移动中的危险边缘反复尝试。停在稳定表面，用“倒地”或“死亡”说清状态，让一名队友查看提示。如果行为在补丁后改变，应对照${articleLink('peak-game-update', 'PEAK 更新日志')}和官方 Steam 信息，而不是发布一个未经核实的新按键或地点。`,
        ],
        bullets: [
          ['状态', '先说清是倒地还是死亡。'],
          ['模式', '依赖 Scout Effigy 时确认是联机。'],
          ['位置', '移动到稳定且被接受的目标位置。'],
          ['提示', '以当前交互文字和标记为准。'],
          ['补丁', '旧行为失效时记录当前版本。'],
        ],
      },
      {
        title: '最终关卡还能复活吗？',
        paragraphs: [
          '最终关卡的稳妥答案是有条件的：只有当当前游戏显示有效恢复交互、物品目标或被接受的状态时，才能声称这次复活可行。本指南不承诺一个通用的末关卡复活点、无限尝试次数或没有提示时的固定绕过方法。',
          '如果队友在终点附近倒地，先保护下一处落脚点；如果 Scout 已死亡，再检查 Scout Effigy 和当前目标。最终关卡没有显示动作时，保住剩余队员，并记录版本、路线和状态，等待可靠来源或后续官方说明。',
        ],
        image: media('Steam 官方截图中的 PEAK 最终攀登路线，队伍需要先保护下一处安全落脚点', 'Steam 官方截图：末段恢复依赖有效提示和安全落脚点，不应依赖猜测的检查点。'),
      },
      {
        title: 'Scout 回来后要做什么',
        paragraphs: [
          '成功复活只是重新获得选择的时刻，不是立刻冲刺的指令。让回来的 Scout 重新控制角色，确定下一次暂停位置，并说清谁负责下一次恢复。如果队伍缺少体力、食物或安全地形，停下来或撤退可能比继续向上更合理。',
          `可以把本页与${articleLink('peak-game-tips', 'PEAK 合作生存技巧')}、${articleLink('how-to-play-peak', '新手攀登指南')}和${articleLink('room-codes', '联机房间代码指南')}一起使用。复活只解决一个状态，路线判断和沟通才决定下一次失误是否会重复。`,
        ],
        bullets: [
          ['重新站位', '离开导致恢复问题的边缘或危险。'],
          ['重新分工', '明确侦察、恢复和下一处集合点。'],
          ['重新核对', '再次检查路线和物品提示，再消耗有限资源。'],
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'PEAK 怎么复活？常见问题',
      items: [
        ['PEAK 怎么复活队友？', '先判断队友是昏迷还是死亡。昏迷时使用当前游戏接受的治疗或恢复交互；死亡时确认联机状态、目标和当前可用的复活或重生路线，包括满足条件时的 Scout Effigy。'],
        ['PEAK 怎么救起倒地玩家？', '让一名队友站到稳定位置，使用当前恢复提示完成操作，再离开危险区。Rescue Claw 可以帮助队友重新接触地形，但不是所有复活动作的替代品。'],
        ['PEAK 怎么复活死亡的 Scout？', 'Scout Effigy 被记录为联机复活选项，可以在目标位置复活死亡 Scout，且不会在单人模式生成。其他资料中的检查点术语仍需结合当前目标和提示确认。'],
        ['PEAK 最终关卡还能复活吗？', '只有当前游戏显示有效恢复或复活交互时才能确认。本站没有确认一个通用的最终关卡绕过方法或永久最后复活点。'],
        ['PEAK 最后复活点在哪里？', '不要假设所有路线都有同一个固定位置。以当前提示或物品接受的目标为准，并在位置不明时记录关卡和版本。'],
      ],
    },
    source: {
      eyebrow: '来源与边界',
      title: '这份复活指南能够确认什么',
      body: `本站物品库记录 Scout Effigy 是用于在目标位置复活死亡 Scout 的消耗型神秘物品，并注明它不会在单人模式生成。相关术语可通过 ${articleLink('items#item-scout-effigy-107', 'Scout Effigy 物品条目')}和外部社区资料核对；社区页面用于解释观察到的机制，不等于当前游戏的永久规则。官方 Steam 页面和 Landfall 官方问答页用于确认游戏与更新背景。倒地提示、精确时机、最终关卡行为和固定复活点都应在当前版本中重新检查。`,
      links: [
        ['PEAK Wiki：Scout Effigy 参考', sourceLinks.effigy],
        ['PEAK Wiki：Scout 状态参考', sourceLinks.scout],
        ['PEAK Wiki：Ancient Statue 参考', sourceLinks.statue],
        ['PEAK Wiki：Book of Bones 参考', sourceLinks.bones],
        ['PEAK Wiki：Checkpoint Flag 参考', sourceLinks.checkpoint],
        ['PEAK 官方 Steam 页面', sourceLinks.steam],
        ['Landfall 官方问答', sourceLinks.faq],
      ],
    },
    related: [['items', '打开 Scout Effigy 物品条目'], ['rescue-claw', '对比 Rescue Claw 恢复工具'], ['peak-game-tips', '准备合作恢复'], ['how-to-play-peak', '复习攀登基础'], ['room-codes', '帮助队友加入房间']],
    relatedLabel: '相关 PEAK 指南',
  },
  es: {
    meta: {
      title: 'Cómo revivir en PEAK: Scout derribado, Effigy y cooperativo',
      description: 'Aprende cómo revivir en PEAK: distingue entre un Scout inconsciente y uno muerto, revisa Scout Effigy, las condiciones cooperativas y los problemas sin aviso.',
      schema: 'Guía de PEAK con fuentes sobre recuperación de Scouts inconscientes, Scout Effigy, resurrección cooperativa, puntos de reanimación y límites del nivel final.',
    },
    primaryKeyword: 'cómo revivir en PEAK',
    eyebrow: 'Guía de recuperación cooperativa - comprueba el estado primero',
    h1: 'Cómo revivir en PEAK: Scout derribado, Effigy y cooperativo',
    intro: `Si buscas cómo revivir en PEAK, primero comprueba si el Scout está inconsciente o muerto. Un compañero inconsciente necesita la interacción de recuperación actual; un Scout muerto puede requerir ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} u otra ruta que permita la partida.`,
    answerLabel: 'Respuesta breve',
    answer: 'Para revivir a un compañero en PEAK, separa el estado derribado del estado muerto. Usa la acción de curación o recuperación que muestre el juego para un Scout inconsciente; para un Scout muerto, comprueba el modo cooperativo, el objetivo y las opciones actuales de resurrección. Si no aparece ningún aviso, no inventes un altar permanente: verifica estado, objeto, ubicación y versión.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas sobre revivir',
    heroImage: media('Ilustración editorial que compara la recuperación de un Scout derribado con la resurrección mediante Scout Effigy en PEAK', 'Ilustración editorial: recuperarse estando derribado y resucitar después de morir son decisiones distintas.'),
    sections: [
      { title: 'Primero: ¿el Scout está derribado o muerto?', paragraphs: ['Muchos intentos fallidos de revivir empiezan con una identificación equivocada. Un Scout derribado o inconsciente sigue presente en la ruta: el equipo debe leer el aviso, proteger a quien ayuda y decidir si el terreno permite continuar. Un Scout muerto necesita una opción de resurrección o reaparición que la partida acepte.', 'Las búsquedas mezclan “revivir a alguien” y “resucitar a un Scout”. Usa el estado visible y el aviso actual como referencia, no una tecla o una ubicación copiada de una guía antigua.'], table: { caption: 'Tabla de decisión para revivir en PEAK', headers: ['Estado', 'Señal visible', 'Primera acción', '¿Scout Effigy?'], rows: [['Derribado o inconsciente', 'El Scout sigue en la ruta y existe una interacción de recuperación.', 'Asegura el acercamiento y deja que un ayudante complete la acción válida.', 'Normalmente no es el primer paso.'], ['Scout muerto', 'La interacción normal de derribo ya no está disponible y aparece una ruta de resurrección.', 'Confirma cooperativo, objetivo y opción disponible.', 'Sí, cuando se cumplen las condiciones.'], ['Sin aviso o estado dudoso', 'No aparece objetivo, interacción u objeto válido.', 'Detén el movimiento y comprueba estado, objeto, ubicación y versión.', 'No demuestra que exista un punto fijo.']] } },
      { title: 'Cómo revivir a un compañero derribado en PEAK', paragraphs: ['Para un jugador inconsciente, empieza por una posición estable y por el aviso actual, no por una tecla recordada. Las referencias comunitarias relacionan los objetos de curación con la recuperación, pero el objeto y el momento exactos pueden cambiar.', 'El ayudante debe avisar que toma el intento y el jugador derribado debe comunicar qué superficie puede alcanzar. Después de recuperarlo, salid del peligro y acordad la siguiente pausa antes de volver a escalar.', `No confundas ${articleLink('rescue-claw', 'la guía de Rescue Claw')} con una resurrección. Rescue Claw ayuda a reconectar con el terreno; no sustituye todas las acciones de curación o resurrección.`], image: media('Captura oficial de Steam de compañeros de PEAK coordinando una escalada empinada', 'Captura oficial de Steam: deja al ayudante una posición estable y una ruta clara.'), bullets: [['1. Estabiliza', 'Elige una superficie que no derribe también al ayudante.'], ['2. Lee el aviso', 'Usa la interacción que muestra la versión actual.'], ['3. Un solo ayudante', 'Los demás vigilan el peligro y la retirada.'], ['4. Sal del peligro', 'Haz una pausa después de recuperar al Scout.']] },
      { title: 'Cómo usar Scout Effigy para resucitar a un Scout muerto', paragraphs: ['Scout Effigy es una respuesta concreta para cómo resucitar en PEAK. La entrada de objetos del sitio lo describe como una opción para resucitar a un Scout muerto en una ubicación objetivo y señala que no aparece en solitario. Por eso es una herramienta cooperativa, no un botón universal para un estado derribado.', 'Antes de usarla, confirma que el Scout está muerto, que la partida es cooperativa, que el objeto está disponible y que el objetivo es aceptado. La persona que realiza la acción debe conservar espacio suficiente para completarla sin caer.', `Consulta la ${articleLink('items#item-scout-effigy-107', 'entrada de Scout Effigy')} para el texto mantenido del objeto. La entrada no garantiza el mismo lugar de aparición después de cada actualización.`], bullets: [['Modo', 'No planifiques encontrar Scout Effigy en una partida en solitario.'], ['Estado', 'Separa muerte y estado inconsciente.'], ['Objetivo', 'Usa la ubicación que acepte la partida actual.'], ['Versión', 'Comprueba el aviso si el comportamiento cambia.']] },
      { title: 'Scout Effigy no es la única opción relacionada con revivir', paragraphs: ['Las referencias del Scout y de objetos relacionados separan resurrección, reaparición y puntos de control. Ancient Statue, Book of Bones, Checkpoint Flag y Scout Effigy pueden aparecer en la misma conversación, pero no prueban las mismas condiciones.', 'No conviertas cada mención de “revive point” en un altar permanente. Si una fuente no coincide en modo, nivel y versión, úsala como pista terminológica y confirma la interacción dentro de la partida.'], table: { caption: 'Términos que conviene separar', headers: ['Término', 'Qué puede describir', 'Cómo usar la evidencia'], rows: [['Curación o recuperación', 'Devuelve a un Scout inconsciente antes de la muerte.', 'Sigue la acción y el objeto aceptados por la sesión.'], ['Resurrección', 'Devuelve a un Scout muerto mediante un objeto u objetivo.', 'Confirma modo, objetivo y disponibilidad.'], ['Reaparición o punto de control', 'Permite volver a la ruta desde un estado de checkpoint.', 'No demuestra que el cuerpo original pueda revivirse allí.']] } },
      { title: '¿Dónde está el último punto de reanimación de PEAK?', paragraphs: ['El término “último punto de reanimación” sugiere una coordenada fija, pero esta guía no confirma un altar universal para todas las rutas. Un objetivo de un objeto no equivale automáticamente a un checkpoint permanente.', 'Comprueba tres cosas: estado del jugador, objetivo aceptado y nivel o versión. Si no está claro, protege al equipo y registra la observación en vez de publicar una coordenada como regla.', `La ${articleLink('map-rotation', 'mappa de PEAK de hoy')} ayuda con el contexto de la ruta, pero la interacción real debe verificarse dentro del juego.`] },
      { title: 'Por qué la opción de revivir puede no funcionar', paragraphs: ['Comprueba una variable cada vez: estado derribado o muerto, distancia de interacción, objeto correcto, objetivo válido y modo cooperativo. Un intento repetido en una cornisa peligrosa puede crear un segundo problema.', `Si cambió después de un parche, compara la acción con el ${articleLink('peak-game-update', 'registro de actualizaciones de PEAK')} y la fuente oficial de Steam antes de confiar en una tecla o ubicación antigua.`], bullets: [['Estado', 'Di “derribado” o “muerto” antes de actuar.'], ['Modo', 'Confirma cooperativo cuando dependas de Scout Effigy.'], ['Ubicación', 'Busca una superficie estable y válida.'], ['Aviso', 'Usa el texto que muestra la versión actual.'], ['Parche', 'Anota la versión si el comportamiento cambió.']] },
      { title: '¿Se puede revivir en el nivel final de PEAK?', paragraphs: ['La respuesta segura es condicional: solo cuando la partida muestra una interacción, un objetivo de objeto o un estado de recuperación válido. No hay aquí una promesa de punto final universal, intentos ilimitados ni atajo si falta el aviso.', 'Cerca de la meta, asegura primero el siguiente aterrizaje. Si el Scout murió, revisa Scout Effigy y el objetivo actual; si no aparece la acción, conserva a los jugadores restantes y registra la versión y la ruta.'], image: media('Captura oficial de Steam del ascenso final de PEAK con un punto de aterrizaje que el equipo debe proteger', 'Captura oficial de Steam: la recuperación final depende de un aviso válido y de un aterrizaje seguro.') },
      { title: 'Qué hacer después de que el Scout vuelva', paragraphs: ['Una recuperación exitosa devuelve opciones, pero no ordena correr. Deja que el Scout recupere el control, acuerda la siguiente pausa y asigna quién lleva la recuperación. Si faltan resistencia, comida o terreno seguro, retroceder puede ser la mejor decisión.', `Combina esta página con ${articleLink('peak-game-tips', 'los consejos cooperativos')}, ${articleLink('how-to-play-peak', 'la guía para principiantes')} y ${articleLink('room-codes', 'la guía de códigos de sala')}.`], bullets: [['Reposiciona', 'Aléjate del borde o peligro original.'], ['Reparte', 'Define explorador, ayudante y próxima pausa.'], ['Comprueba', 'Revisa ruta y objetos antes de gastar otra opción.']] },
    ],
    faq: { eyebrow: 'Respuestas rápidas', title: 'Preguntas frecuentes: cómo revivir en PEAK', items: [['¿Cómo revivo a alguien en PEAK?', 'Distingue entre inconsciente y muerto. Usa la recuperación actual para el primer caso y comprueba cooperativo, objetivo y Scout Effigy para el segundo.'], ['¿Cómo revivo a jugadores derribados en PEAK?', 'Coloca a un ayudante en una superficie estable, sigue la interacción actual, completa la acción y salid del peligro. Rescue Claw no sustituye toda resurrección.'], ['¿Cómo resucito a un Scout muerto en PEAK?', 'Scout Effigy está documentado como una opción cooperativa para resucitar a un Scout muerto en un objetivo. Confirma siempre el aviso y el modo.'], ['¿Se puede revivir en el nivel final?', 'Solo si la partida presenta una interacción válida. Esta guía no confirma un punto final permanente.'], ['¿Dónde está el último punto de reanimación?', 'No asumas un único punto para todas las rutas; usa el objetivo que acepte la partida actual.']] },
    source: { eyebrow: 'Fuentes y límites', title: 'Qué puede confirmar esta guía', body: `La base de objetos del sitio registra Scout Effigy como un objeto consumible que resucita a un Scout muerto en una ubicación objetivo y no aparece en solitario. Usa la ${articleLink('items#item-scout-effigy-107', 'entrada de Scout Effigy')} y las referencias externas para términos; las páginas comunitarias no sustituyen al juego actual.`, links: [['Referencia de Scout Effigy', sourceLinks.effigy], ['Referencia del estado Scout', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK en Steam', sourceLinks.steam], ['Preguntas frecuentes oficiales de Landfall', sourceLinks.faq]] },
    related: [['items', 'Abrir Scout Effigy'], ['rescue-claw', 'Comparar Rescue Claw'], ['peak-game-tips', 'Preparar rescates cooperativos'], ['how-to-play-peak', 'Repasar la escalada'], ['room-codes', 'Ayudar a un compañero a entrar']], relatedLabel: 'Guías relacionadas de PEAK',
  },
  ja: {
    meta: { title: 'PEAKで蘇生する方法：ダウン状態・Scout Effigy・協力プレイ', description: 'PEAKで蘇生する方法を解説。意識不明のScoutと死亡したScoutを分け、回復表示、Scout Effigy、協力条件、最後の蘇生地点を確認します。', schema: 'PEAKのダウン回復、Scout Effigy、協力プレイの蘇生条件、最後の蘇生地点、最終レベルの制限を整理したガイド。' },
    primaryKeyword: 'PEAK で蘇生する方法', eyebrow: '協力回復ガイド - まず状態を確認', h1: 'PEAKで蘇生する方法：ダウン状態・Scout Effigy・協力プレイ',
    intro: `PEAKで蘇生する方法を探すときは、固定された祭壇を探す前にScoutが意識不明なのか死亡したのかを確認します。前者は現在の回復表示、後者は${articleLink('items#item-scout-effigy-107', 'Scout Effigy')}など、現在のランが受け付ける蘇生方法を確認します。`, answerLabel: '短い答え', answer: 'PEAKでは、倒れているScoutには現在表示される回復操作を使い、死亡したScoutには協力状態、対象地点、利用できる蘇生手段を確認します。表示が出ない場合は、固定の復活地点を推測せず、状態・モード・アイテム・場所・バージョンを確認してください。', tocLabel: 'このページの内容', tocFaq: '蘇生に関するよくある質問', heroImage: media('PEAKでダウンしたScoutの回復とScout Effigyによる死亡後の蘇生を比較する編集イラスト', '編集イラスト：ダウン回復と死亡後の蘇生は別の判断です。'),
    sections: [
      { title: 'まずScoutはダウン状態か死亡状態か', paragraphs: ['蘇生に失敗する原因の多くは状態の取り違えです。意識不明のScoutがまだルート上にいるなら、表示を読み、操作する人を守り、安全な足場を選びます。死亡したScoutの場合は、現在のランが受け付ける蘇生アイテムや対象が必要です。', '「仲間を蘇生する」と「死亡したScoutを蘇生する」は同じ操作とは限りません。古いキー設定や場所より、画面に出る状態と現在の表示を優先します。'], table: { caption: 'PEAKの蘇生判断表', headers: ['状態', '見える手がかり', '最初の行動', 'Scout Effigy?'], rows: [['ダウン・意識不明', 'Scoutがルート上に残り、回復操作が表示される。', '接近経路を安定させ、一人が有効な回復操作を行う。', '通常は最初の手段ではない。'], ['死亡', '通常のダウン操作がなく、蘇生やリスポーンの経路が出る。', '協力モード、対象、利用可能な手段を確認する。', '条件が合えば使用する。'], ['表示なし・不明', '対象や操作、利用できるアイテムが見えない。', '動きを止め、状態・アイテム・場所・バージョンを確認する。', '固定地点の証拠にはならない。']] } },
      { title: 'PEAKでダウンした仲間を回復する方法', paragraphs: ['意識不明のプレイヤーには、覚えているキーよりも安定した場所と現在の表示を優先します。コミュニティのScout資料は回復アイテムを説明しますが、使えるアイテムやタイミングはバージョンで変わる可能性があります。', '操作担当を一人に決め、ダウンしたプレイヤーは次に触れられる場所を伝えます。回復できた後も、原因となった危険から離れ、次の休憩地点を決めてから進みます。', `${articleLink('rescue-claw', 'Rescue Clawガイド')}は地形へ戻るための道具であり、すべての蘇生操作の代わりではありません。`], image: media('急なルートでPEAKの仲間が協力して登るSteam公式スクリーンショット', 'Steam公式スクリーンショット：操作担当の足場と、ダウンした仲間へ向かう経路を残します。'), bullets: [['1. 安定させる', '操作担当も落ちない足場を選ぶ。'], ['2. 表示を見る', '現在のゲーム内表示を使う。'], ['3. 一人が操作する', 'ほかのメンバーは危険と退路を見る。'], ['4. 危険から離れる', '回復後に短く止まり、次の判断を共有する。']] },
      { title: 'Scout Effigyで死亡したScoutを蘇生する方法', paragraphs: ['Scout Effigyは、死亡したScoutを対象地点で蘇生する協力プレイの選択肢として、このサイトのアイテム項目に記録されています。また、ソロでは出現しないと記されています。したがって、ダウン状態にいつでも使うボタンではありません。', '使う前に死亡状態、協力モード、アイテムの有無、現在のゲームが受け付ける対象を確認します。操作中に落ちない余地も必要です。', `${articleLink('items#item-scout-effigy-107', 'Scout Effigyの項目')}は維持された説明を確認する場所です。古いコミュニティの座標が更新後も同じとは限りません。`], bullets: [['モード', 'ソロでの固定入手を前提にしない。'], ['状態', '死亡と意識不明を分ける。'], ['対象', '現在のゲームが受け付ける地点を使う。'], ['バージョン', '表示が変わったら再確認する。']] },
      { title: 'Scout Effigy以外の蘇生関連の選択肢', paragraphs: ['Scoutの資料や関連アイテムは、対象地点での蘇生、チェックポイントからのリスポーン、別の回復手段を分けて説明します。Ancient Statue、Book of Bones、Checkpoint Flag、Scout Effigyは同じ条件を意味するわけではありません。', '「最後の蘇生地点」という言葉を、すべてのルートに存在する祭壇だと解釈しないでください。モード、レベル、バージョンが一致しない情報は用語の手がかりとして使い、ゲーム内の表示で確認します。'], table: { caption: 'PEAKで分けて考える蘇生用語', headers: ['用語', '説明の対象', '証拠の使い方'], rows: [['回復', '死亡前の意識不明Scoutをルートへ戻すこと。', '現在の操作とアイテムを確認する。'], ['蘇生', 'アイテムや対象地点で死亡したScoutを戻すこと。', 'モード、対象、利用可能性を確認する。'], ['リスポーン・チェックポイント', 'チェックポイント状態からルートへ戻ること。', '元の場所で蘇生できる証拠とは限らない。']] } },
      { title: 'PEAKの最後の蘇生地点はどこか', paragraphs: ['「最後の蘇生地点」は固定座標のように聞こえますが、全ルートに共通する永久の祭壇はこのガイドでは確認していません。アイテムが示す対象地点と、毎回同じチェックポイントは自動的に同じではありません。', '状態、現在の対象、レベルとバージョンの三つを確認してください。場所が不明なら残ったチームを守り、推測した座標を断定しないことが安全です。', `${articleLink('map-rotation', '今日のPEAKマップ')}はルートの背景に役立ちますが、実際の蘇生操作はゲーム内で確認します。`] },
      { title: '蘇生できないときに確認すること', paragraphs: ['状態、距離、アイテム、対象地点、協力モードを一つずつ確認します。危険な縁で同じ操作を繰り返すと、二人目のダウンを生む可能性があります。', `パッチ後に挙動が変わった場合は、${articleLink('peak-game-update', 'PEAK更新ログ')}と公式Steam情報を確認し、古いキーや座標をそのまま使わないでください。`], bullets: [['状態', 'ダウンか死亡かを声に出す。'], ['モード', 'Scout Effigyなら協力プレイか確認する。'], ['場所', '安定した対象地点へ移動する。'], ['表示', '現在のインタラクションを優先する。'], ['更新', '変化したバージョンを記録する。']] },
      { title: 'PEAKの最終レベルで蘇生できるか', paragraphs: ['最終レベルでは、現在のゲームに有効な回復表示、アイテム対象、状態がある場合だけ蘇生できると考えるのが安全です。永久の最終蘇生地点や、表示がない場合の万能な回避方法は、このガイドでは断定しません。', 'ゴール付近で仲間が倒れたら、まず次の足場を守ります。死亡した場合はScout Effigyと対象を確認し、表示がなければ残りのプレイヤーを守ってバージョンとルートを記録します。'], image: media('最終登攀で次の安全な足場を守るPEAKのSteam公式スクリーンショット', 'Steam公式スクリーンショット：終盤の回復には有効な表示と安全な足場が必要です。') },
      { title: 'Scoutが戻った後にすること', paragraphs: ['蘇生成功は再び選べる状態になったという意味で、すぐ走る合図ではありません。戻ったScoutが操作を取り戻す時間を作り、次の休憩場所と回復担当を決めます。体力や食料、安全な地形が足りないなら撤退も選択肢です。', `${articleLink('peak-game-tips', '協力プレイのヒント')}、${articleLink('how-to-play-peak', '初心者向け登攀ガイド')}、${articleLink('room-codes', 'ルームコードガイド')}と組み合わせて、同じ失敗を繰り返さない計画を立てます。`], bullets: [['再配置', '危険な縁から離れる。'], ['再分担', '偵察、回復、次の集合点を決める。'], ['再確認', '別の資源を使う前にルートと表示を見る。']] },
    ],
    faq: { eyebrow: '短い回答', title: 'PEAKで蘇生する方法：よくある質問', items: [['PEAKで仲間を蘇生するには？', '意識不明か死亡かを確認し、前者には現在の回復操作、後者には協力モード・対象・Scout Effigyなどの蘇生手段を確認します。'], ['ダウンしたプレイヤーをどう回復する？', '安定した足場に一人の操作担当を置き、現在の表示に従って回復し、危険から離れます。Rescue Clawはすべての蘇生の代わりではありません。'], ['死亡したScoutをどう蘇生する？', 'Scout Effigyは対象地点で死亡したScoutを蘇生する協力プレイの選択肢として記録されています。モードと表示を確認してください。'], ['最終レベルで蘇生できる？', '現在のゲームが有効な操作を表示する場合だけ確認できます。固定の最終地点は断定していません。'], ['最後の蘇生地点はどこ？', '全ルート共通の一点を仮定せず、現在のアイテムや表示が受け付ける対象を使います。']] },
    source: { eyebrow: '出典と限界', title: 'この蘇生ガイドで確認できること', body: `このサイトのアイテムデータベースは、Scout Effigyを対象地点で死亡したScoutを蘇生する消耗品として記録し、ソロでは出現しないと説明しています。${articleLink('items#item-scout-effigy-107', 'Scout Effigyの項目')}と外部資料は用語の確認に使えますが、現在のゲームの代わりではありません。`, links: [['Scout Effigy参考', sourceLinks.effigy], ['Scout状態参考', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK公式Steam', sourceLinks.steam], ['Landfall公式のよくある質問', sourceLinks.faq]] },
    related: [['items', 'Scout Effigyの項目を開く'], ['rescue-claw', 'Rescue Clawと比較'], ['peak-game-tips', '協力回復を準備'], ['how-to-play-peak', '登攀の基本を確認'], ['room-codes', '仲間をルームへ招待']], relatedLabel: '関連PEAKガイド',
  },
  de: {
    meta: { title: 'PEAK wiederbeleben: Scout am Boden, Effigy und Koop', description: 'So kannst du in PEAK wiederbeleben: Unbewusstlosigkeit und Tod unterscheiden, Scout Effigy prüfen, Koop-Bedingungen verstehen und fehlende Hinweise beheben.', schema: 'Quellenbewusster PEAK-Leitfaden zu bewusstlosen Scouts, Scout Effigy, Koop-Wiederbelebung, letzten Wiederbelebungspunkten und dem letzten Level.' },
    primaryKeyword: 'PEAK wiederbeleben', eyebrow: 'Koop-Wiederherstellung - zuerst den Zustand prüfen', h1: 'PEAK wiederbeleben: Scout am Boden, Effigy und Koop', intro: `Wenn du in PEAK wiederbeleben willst, prüfe zuerst, ob der Scout bewusstlos oder tot ist. Für einen bewusstlosen Scout zählt der aktuelle Heilungs-Hinweis; für einen toten Scout kann ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} oder eine andere von der Runde akzeptierte Option nötig sein.`, answerLabel: 'Kurzantwort', answer: 'Trenne in PEAK einen bewusstlosen Scout von einem toten Scout. Nutze bei Bewusstlosigkeit die aktuelle Heilungs- oder Wiederherstellungsaktion. Bei einem toten Scout prüfst du Koop-Modus, Zielort und verfügbare Wiederbelebung. Wenn kein Hinweis erscheint, vermute keinen festen Altar, sondern prüfe Zustand, Modus, Gegenstand, Ort und Version.', tocLabel: 'Auf dieser Seite', tocFaq: 'Häufige Fragen zur Wiederbelebung', heroImage: media('Redaktionelle Illustration zum Vergleich eines bewusstlosen und eines toten Scouts in PEAK', 'Redaktionelle Illustration: Bewusstlosigkeit und Tod führen zu unterschiedlichen Entscheidungen.'),
    sections: [
      { title: 'Zuerst: Ist der Scout bewusstlos oder tot?', paragraphs: ['Viele fehlgeschlagene Versuche beginnen mit der falschen Zustandsannahme. Ein bewusstloser Scout liegt noch in der Route: Das Team liest den Hinweis, schützt die helfende Person und sucht einen stabilen Stand. Ein toter Scout braucht dagegen eine Wiederbelebungs- oder Respawn-Option, die die aktuelle Runde zulässt.', 'Die Begriffe in Spielersuchen sind nicht immer sauber. Behandle sichtbaren Zustand und aktuellen Hinweis als verlässlicher als eine alte Taste oder eine kopierte Koordinate.'], table: { caption: 'PEAK-Entscheidungstabelle für Wiederbelebung', headers: ['Zustand', 'Sichtbares Zeichen', 'Erster Schritt', 'Scout Effigy?'], rows: [['Bewusstlos', 'Der Scout ist noch auf der Route und eine Wiederherstellung wird angezeigt.', 'Annäherung sichern und eine Person die gültige Aktion ausführen lassen.', 'Meist nicht der erste Schritt.'], ['Tot', 'Die normale Interaktion fehlt und eine Wiederbelebungsroute erscheint.', 'Koop, Ziel und verfügbare Option prüfen.', 'Ja, wenn die Bedingungen stimmen.'], ['Kein Hinweis', 'Kein gültiges Ziel, Objekt oder Interaktionssymbol.', 'Bewegung stoppen und Zustand, Objekt, Ort und Version prüfen.', 'Kein Beweis für einen festen Punkt.']] } },
      { title: 'Einen bewusstlosen Teamkameraden in PEAK wiederbeleben', paragraphs: ['Bei einem bewusstlosen Spieler zählen sichere Position und aktueller Hinweis mehr als eine gemerkte Tastenkombination. Community-Referenzen nennen Heilungsobjekte, aber Objekt und Timing können sich mit der Version ändern.', 'Eine Person übernimmt den Versuch, der Scout nennt die nächste erreichbare Fläche, und die übrigen Spieler beobachten Gefahr und Rückweg. Nach der Wiederherstellung verlässt das Team den Gefahrenbereich, bevor es weiterklettert.', `Verwechsle ${articleLink('rescue-claw', 'den Rescue-Claw-Leitfaden')} nicht mit einer vollständigen Wiederbelebung. Das Werkzeug hilft beim Kontakt mit dem Gelände, ersetzt aber nicht jede Heilungs- oder Wiederbelebungsaktion.`], image: media('Offizieller Steam-Screenshot von PEAK-Teamkameraden an einer steilen Kletterroute', 'Offizieller Steam-Screenshot: Der Helfer braucht einen stabilen Stand und eine klare Route.'), bullets: [['1. Stabilisieren', 'Einen Stand wählen, der den Helfer nicht ebenfalls zu Fall bringt.'], ['2. Hinweis lesen', 'Die aktuelle Interaktion verwenden.'], ['3. Eine Person', 'Andere Spieler beobachten Gefahr und Rückweg.'], ['4. Weg vom Risiko', 'Nach der Rückkehr des Scouts kurz anhalten.']] },
      { title: 'Einen toten Scout mit Scout Effigy wiederbeleben', paragraphs: ['Scout Effigy ist eine konkrete Antwort auf die Suche nach der Wiederbelebung eines toten Scouts. Der gepflegte Item-Eintrag beschreibt die Wiederbelebung an einem Zielort und weist darauf hin, dass das Objekt nicht im Solomodus spawnt. Es ist daher eine Koop-Option und kein universeller Knopf für jeden Zustand.', 'Vor der Nutzung prüfst du Tod, Koop-Modus, Verfügbarkeit und den Zielort, den die aktuelle Runde akzeptiert. Der Bediener braucht außerdem genug sicheren Raum für den Abschluss der Aktion.', `Die ${articleLink('items#item-scout-effigy-107', 'Scout-Effigy-Seite')} enthält die gepflegte Beschreibung. Ein alter Community-Ort bleibt nach einem Patch nicht automatisch gültig.`], bullets: [['Modus', 'Nicht von einer Solo-Spawning-Regel ausgehen.'], ['Zustand', 'Tod und Bewusstlosigkeit trennen.'], ['Ziel', 'Nur einen aktuell akzeptierten Zielort verwenden.'], ['Version', 'Bei anderem Hinweis die Version erneut prüfen.']] },
      { title: 'Scout Effigy ist nicht die einzige Option', paragraphs: ['Scout- und Item-Referenzen unterscheiden Wiederbelebung an einem Ziel, Respawn über einen Checkpoint und andere Zustände. Ancient Statue, Book of Bones, Checkpoint Flag und Scout Effigy sind keine Synonyme und haben nicht automatisch dieselben Bedingungen.', 'Ein erwähnter „letzter Wiederbelebungspunkt“ ist kein Beweis für einen permanenten Altar. Stimmen Modus, Level und Version einer Quelle nicht überein, nutze sie als Begriffshilfe und prüfe die aktuelle Interaktion im Spiel.'], table: { caption: 'Begriffe für PEAK-Wiederbelebung getrennt halten', headers: ['Begriff', 'Mögliche Bedeutung', 'Umgang mit dem Beleg'], rows: [['Heilung oder Erholung', 'Einen bewusstlosen Scout vor dem Tod zurückholen.', 'Aktuelle Aktion und akzeptiertes Objekt nutzen.'], ['Wiederbelebung', 'Einen toten Scout über Objekt oder Ziel zurückbringen.', 'Modus, Ziel und Verfügbarkeit bestätigen.'], ['Respawn oder Checkpoint', 'Über einen Checkpoint-Zustand wieder in die Route gelangen.', 'Nicht als Beweis für eine Wiederbelebung am ursprünglichen Ort behandeln.']] } },
      { title: 'Wo ist der letzte Wiederbelebungspunkt in PEAK?', paragraphs: ['Der Ausdruck klingt nach einer festen Koordinate, aber dieser Leitfaden bestätigt keinen universellen dauerhaften Altar. Ein Ziel eines Gegenstands ist nicht automatisch derselbe Checkpoint in jeder Route.', 'Prüfe Zustand, akzeptiertes Ziel sowie Level und Version. Wenn der Ort unklar ist, schützt du das Team besser, als eine geratenen Koordinate als Regel zu veröffentlichen.', `Die ${articleLink('map-rotation', 'heutige PEAK-Karte')} liefert Routen-Kontext; die tatsächliche Interaktion muss im Spiel geprüft werden.`] },
      { title: 'Warum die Wiederbelebung nicht funktioniert', paragraphs: ['Prüfe Zustand, Reichweite, richtigen Gegenstand, gültiges Ziel und Koop-Modus einzeln. Wiederholte Versuche an einer gefährlichen Kante können einen zweiten Ausfall verursachen.', `Nach einem Patch vergleichst du das Verhalten mit dem ${articleLink('peak-game-update', 'PEAK-Update-Log')} und den offiziellen Steam-Informationen, statt eine alte Taste oder Koordinate zu übernehmen.`], bullets: [['Zustand', 'Bewusstlos oder tot klar benennen.'], ['Modus', 'Bei Scout Effigy Koop bestätigen.'], ['Ort', 'Eine stabile akzeptierte Position wählen.'], ['Hinweis', 'Die aktuelle Interaktion verwenden.'], ['Patch', 'Geänderte Version dokumentieren.']] },
      { title: 'Kann man im letzten PEAK-Level wiederbeleben?', paragraphs: ['Die sichere Antwort ist bedingt: Nur wenn das Spiel eine gültige Wiederherstellungsaktion, ein Item-Ziel oder einen akzeptierten Zustand zeigt. Ein universeller Endpunkt, unbegrenzte Versuche oder ein sicherer Trick ohne Hinweis werden hier nicht behauptet.', 'In der Nähe des Ziels schützt du zuerst die nächste Landung. Ist der Scout tot, prüfst du Scout Effigy und Ziel; fehlt die Aktion, schützt du die übrigen Spieler und notierst Route und Version.'], image: media('Offizieller Steam-Screenshot vom letzten Aufstieg in PEAK mit einem zu sichernden Landeplatz', 'Offizieller Steam-Screenshot: Im Endabschnitt zählen gültiger Hinweis und sicherer Stand.') },
      { title: 'Was nach der Rückkehr des Scouts wichtig ist', paragraphs: ['Eine erfolgreiche Wiederbelebung ist ein neuer Entscheidungspunkt, kein Startsignal zum Sprint. Der Scout braucht einen Moment, das Team legt die nächste Pause fest und verteilt die Wiederherstellungsrolle neu. Bei wenig Ausdauer, Nahrung oder sicherem Gelände kann Rückzug richtig sein.', `Nutze dazu ${articleLink('peak-game-tips', 'Koop-Tipps')}, den ${articleLink('how-to-play-peak', 'Kletter-Leitfaden für Einsteiger')} und den ${articleLink('room-codes', 'Raumcode-Leitfaden')}.`], bullets: [['Neu positionieren', 'Von der ursprünglichen Kante weggehen.'], ['Neu verteilen', 'Späher, Helfer und nächste Pause festlegen.'], ['Neu prüfen', 'Route und Hinweise vor weiterem Ressourcenverbrauch ansehen.']] },
    ],
    faq: { eyebrow: 'Schnelle Antworten', title: 'Häufige Fragen zum Wiederbeleben in PEAK', items: [['Wie belebe ich jemanden in PEAK wieder?', 'Bewusstlosigkeit und Tod trennen. Nutze die aktuelle Heilungsaktion für den ersten Fall und prüfe Koop, Ziel und Scout Effigy für den zweiten.'], ['Wie belebe ich niedergeschlagene Spieler wieder?', 'Eine Person stellt sich stabil auf, folgt der aktuellen Interaktion und verlässt danach den Gefahrenbereich. Rescue Claw ersetzt nicht jede Wiederbelebung.'], ['Wie belebe ich einen toten Scout wieder?', 'Scout Effigy ist als Koop-Option für einen toten Scout am Zielort dokumentiert. Prüfe trotzdem den aktuellen Hinweis.'], ['Kann man im letzten Level wiederbeleben?', 'Nur bei einer gültigen Interaktion der aktuellen Version. Ein permanenter Endpunkt ist nicht bestätigt.'], ['Wo ist der letzte Wiederbelebungspunkt?', 'Nimm keinen universellen Punkt an; verwende das Ziel, das die aktuelle Runde akzeptiert.']] },
    source: { eyebrow: 'Quellen und Grenzen', title: 'Was dieser Leitfaden bestätigen kann', body: `Die Item-Datenbank beschreibt Scout Effigy als Verbrauchsgegenstand, der einen toten Scout an einem Zielort wiederbelebt und nicht im Solomodus spawnt. Die ${articleLink('items#item-scout-effigy-107', 'Scout-Effigy-Seite')} und externe Referenzen erklären Begriffe, ersetzen aber nicht die aktuelle Spielsitzung.`, links: [['Scout Effigy Referenz', sourceLinks.effigy], ['Scout-Zustand', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK auf Steam', sourceLinks.steam], ['Landfall-Fragen und Antworten', sourceLinks.faq]] },
    related: [['items', 'Scout Effigy öffnen'], ['rescue-claw', 'Rescue Claw vergleichen'], ['peak-game-tips', 'Koop-Rettung vorbereiten'], ['how-to-play-peak', 'Klettergrundlagen prüfen'], ['room-codes', 'Teammitglied einladen']], relatedLabel: 'Verwandte PEAK-Guides',
  },
  fr: {
    meta: { title: 'Réanimer dans PEAK : Scout à terre, Effigy et coopération', description: 'Découvrez comment réanimer dans PEAK : distinguez un Scout inconscient d’un Scout mort, vérifiez Scout Effigy, le mode coopératif et les problèmes de prompt.', schema: 'Ressource PEAK fondée sur des sources concernant la récupération d’un Scout inconscient, Scout Effigy, la réanimation en coopération, les points de reprise et le dernier niveau.' },
    primaryKeyword: 'réanimer dans PEAK', eyebrow: 'Récupération en coopération - vérifiez l’état d’abord', h1: 'Réanimer dans PEAK : Scout à terre, Effigy et coopération', intro: `Pour savoir comment réanimer dans PEAK, vérifiez d’abord si le Scout est inconscient ou mort. Un Scout inconscient dépend de l’action de récupération affichée ; un Scout mort peut demander ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} ou une autre option acceptée par la partie.`, answerLabel: 'Réponse courte', answer: 'Séparez l’état à terre de l’état mort. Pour un Scout inconscient, utilisez l’action de soin ou de récupération actuelle. Pour un Scout mort, vérifiez la coopération, la cible et l’option de réanimation disponible. Si aucun prompt ne s’affiche, ne supposez pas un autel fixe : contrôlez l’état, le mode, l’objet, le lieu et la version.', tocLabel: 'Sur cette page', tocFaq: 'Questions fréquentes sur la réanimation', heroImage: media('Illustration éditoriale comparant un Scout à terre et un Scout mort réanimé par Scout Effigy dans PEAK', 'Illustration éditoriale : la récupération à terre et la réanimation après la mort sont deux décisions différentes.'),
    sections: [
      { title: 'D’abord : le Scout est-il à terre ou mort ?', paragraphs: ['Beaucoup d’échecs viennent d’une mauvaise lecture de l’état. Un Scout inconscient est encore présent sur la route : l’équipe lit le prompt, protège la personne qui aide et choisit une surface stable. Un Scout mort nécessite une option de réanimation ou de réapparition acceptée par la partie.', 'Les recherches mélangent parfois « réanimer un ami » et « ressusciter un Scout ». L’état visible et le prompt actuel valent mieux qu’une ancienne touche ou qu’une coordonnée copiée.'], table: { caption: 'Tableau de décision pour réanimer dans PEAK', headers: ['État', 'Indice visible', 'Première action', 'Scout Effigy ?'], rows: [['À terre ou inconscient', 'Le Scout reste sur la route et une récupération est proposée.', 'Sécuriser l’approche et laisser une personne effectuer l’action valide.', 'Généralement pas la première étape.'], ['Scout mort', 'L’interaction normale disparaît et une voie de réanimation apparaît.', 'Confirmer la coopération, la cible et l’option disponible.', 'Oui si les conditions sont réunies.'], ['Aucun prompt', 'Aucune cible, interaction ou objet valide n’apparaît.', 'Arrêter le mouvement et vérifier état, objet, lieu et version.', 'Cela ne prouve pas un point fixe.']] } },
      { title: 'Comment réanimer un coéquipier à terre dans PEAK', paragraphs: ['Pour un joueur inconscient, commencez par une position stable et par le prompt actuel, pas par un souvenir de touche. Les références communautaires associent des objets de soin à la récupération, mais l’objet et le timing peuvent changer avec la version.', 'Une seule personne prend l’essai, le joueur à terre indique la prochaine surface atteignable et les autres surveillent le danger. Après la récupération, quittez la zone dangereuse et fixez la prochaine pause.', `Ne confondez pas ${articleLink('rescue-claw', 'la page Rescue Claw')} avec une réanimation universelle. L’outil aide à reprendre contact avec le terrain, mais ne remplace pas toutes les actions de soin ou de résurrection.`], image: media('Capture officielle Steam de coéquipiers PEAK coordonnant une ascension escarpée', 'Capture officielle Steam : laissez à l’opérateur une position stable et une route claire.'), bullets: [['1. Stabiliser', 'Choisir une surface qui ne fera pas tomber l’aide.'], ['2. Lire le prompt', 'Utiliser l’interaction de la version actuelle.'], ['3. Un opérateur', 'Les autres surveillent le danger et la retraite.'], ['4. S’éloigner', 'Faire une pause après le retour du Scout.']] },
      { title: 'Comment utiliser Scout Effigy sur un Scout mort', paragraphs: ['Scout Effigy répond directement aux recherches sur la résurrection dans PEAK. La fiche d’objet le décrit comme une option pour ressusciter un Scout mort à une cible et indique qu’il n’apparaît pas en solo. C’est donc une option coopérative, pas un bouton universel pour un Scout à terre.', 'Avant l’action, confirmez la mort, le mode coopératif, la disponibilité de l’objet et la cible acceptée par la partie. L’opérateur doit garder assez d’espace pour terminer l’action en sécurité.', `La ${articleLink('items#item-scout-effigy-107', 'fiche Scout Effigy')} contient la description suivie. Une ancienne position communautaire ne reste pas automatiquement correcte après un patch.`], bullets: [['Mode', 'Ne pas compter sur un spawn en solo.'], ['État', 'Séparer mort et inconscience.'], ['Cible', 'Utiliser le lieu accepté actuellement.'], ['Version', 'Recontrôler le prompt si le comportement change.']] },
      { title: 'Scout Effigy n’est pas la seule option liée à la réanimation', paragraphs: ['Les références du Scout et des objets distinguent la résurrection à une cible, la réapparition depuis un checkpoint et les autres récupérations. Ancient Statue, Book of Bones, Checkpoint Flag et Scout Effigy ne prouvent pas les mêmes conditions.', 'Ne transformez pas chaque mention de « dernier point de réanimation » en autel permanent. Si le mode, le niveau ou la version ne correspondent pas, gardez la source comme aide de vocabulaire et vérifiez l’interaction dans le jeu.'], table: { caption: 'Termes de réanimation à distinguer dans PEAK', headers: ['Terme', 'Ce qu’il peut décrire', 'Usage de la preuve'], rows: [['Soin ou récupération', 'Ramener un Scout inconscient avant la mort.', 'Suivre l’action et l’objet acceptés par la session.'], ['Résurrection', 'Ramener un Scout mort via un objet ou une cible.', 'Confirmer mode, cible et disponibilité.'], ['Réapparition ou checkpoint', 'Revenir sur la route depuis un état de checkpoint.', 'Ne prouve pas que le corps original peut être réanimé sur place.']] } },
      { title: 'Où se trouve le dernier point de réanimation de PEAK ?', paragraphs: ['L’expression semble indiquer une coordonnée fixe, mais ce guide ne confirme pas un autel universel pour toutes les routes. Une cible donnée par un objet n’est pas automatiquement un checkpoint permanent.', 'Vérifiez l’état du joueur, la cible acceptée, puis le niveau et la version. Si le lieu reste incertain, protégez l’équipe au lieu de publier une coordonnée devinée.', `La ${articleLink('map-rotation', 'carte PEAK du jour')} donne le contexte de route ; l’action réelle doit être confirmée en jeu.`] },
      { title: 'Pourquoi l’option de réanimation ne fonctionne pas', paragraphs: ['Vérifiez séparément l’état, la portée, le bon objet, la cible et le mode coopératif. Répéter l’action sur une corniche dangereuse peut créer une seconde chute.', `Après un patch, comparez le comportement avec le ${articleLink('peak-game-update', 'journal des mises à jour PEAK')} et les informations officielles Steam avant de suivre une ancienne touche ou position.`], bullets: [['État', 'Dire à terre ou mort.'], ['Mode', 'Confirmer la coopération pour Scout Effigy.'], ['Lieu', 'Choisir une cible stable et valide.'], ['Prompt', 'Suivre l’interaction actuelle.'], ['Patch', 'Noter la version qui a changé.']] },
      { title: 'Peut-on réanimer dans le dernier niveau de PEAK ?', paragraphs: ['La réponse prudente est conditionnelle : seulement si le jeu affiche une récupération, une cible d’objet ou un état valide. Ce guide ne promet pas un point final universel, des essais illimités ou un contournement sans prompt.', 'Près de l’arrivée, sécurisez d’abord le prochain appui. Si le Scout est mort, vérifiez Scout Effigy et la cible ; si l’action n’apparaît pas, protégez les survivants et notez route et version.'], image: media('Capture officielle Steam de l’ascension finale de PEAK avec un appui sûr à protéger', 'Capture officielle Steam : la récupération finale dépend d’un prompt valide et d’une surface sûre.') },
      { title: 'Que faire après le retour du Scout', paragraphs: ['Une réanimation réussie redonne des choix, mais ne commande pas de repartir en courant. Laissez le Scout reprendre le contrôle, fixez la prochaine pause et répartissez la responsabilité de récupération. Avec peu d’endurance, de nourriture ou de terrain sûr, reculer peut être préférable.', `Associez cette page aux ${articleLink('peak-game-tips', 'conseils coopératifs')}, au ${articleLink('how-to-play-peak', 'guide débutant')} et au ${articleLink('room-codes', 'guide des codes de salle')}.`], bullets: [['Repositionner', 'S’éloigner du bord initial.'], ['Répartir', 'Définir éclaireur, aide et prochaine pause.'], ['Recontrôler', 'Lire route et prompts avant de dépenser une autre ressource.']] },
    ],
    faq: { eyebrow: 'Réponses rapides', title: 'Questions fréquentes sur la réanimation dans PEAK', items: [['Comment réanimer quelqu’un dans PEAK ?', 'Distinguez inconscient et mort. Utilisez la récupération actuelle dans le premier cas, puis vérifiez coopération, cible et Scout Effigy dans le second.'], ['Comment réanimer les joueurs à terre ?', 'Placez un opérateur sur une surface stable, suivez l’interaction actuelle et quittez le danger. Rescue Claw ne remplace pas toutes les résurrections.'], ['Comment ressusciter un Scout mort ?', 'Scout Effigy est documenté comme une option coopérative pour ressusciter un Scout mort à une cible. Vérifiez toutefois le prompt actuel.'], ['Peut-on réanimer dans le niveau final ?', 'Seulement si la partie affiche une interaction valide. Aucun point final permanent n’est confirmé ici.'], ['Où est le dernier point de réanimation ?', 'N’assumez pas un point unique ; utilisez la cible acceptée par la partie actuelle.']] },
    source: { eyebrow: 'Sources et limites', title: 'Ce que les sources permettent de confirmer', body: `La base d’objets décrit Scout Effigy comme un consommable qui ressuscite un Scout mort à une cible et ne se génère pas en solo. La ${articleLink('items#item-scout-effigy-107', 'fiche Scout Effigy')} et les références externes expliquent les termes, mais ne remplacent pas la partie actuelle.`, links: [['Référence Scout Effigy', sourceLinks.effigy], ['État du Scout', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK sur Steam', sourceLinks.steam], ['Questions fréquentes officielles de Landfall', sourceLinks.faq]] },
    related: [['items', 'Ouvrir Scout Effigy'], ['rescue-claw', 'Comparer Rescue Claw'], ['peak-game-tips', 'Préparer les secours coopératifs'], ['how-to-play-peak', 'Revoir l’escalade'], ['room-codes', 'Inviter un coéquipier']], relatedLabel: 'Articles PEAK associés',
  },
  pt: {
    meta: { title: 'Como reviver no PEAK: Scout caído, Effigy e cooperação', description: 'Veja como reviver no PEAK: diferencie um Scout inconsciente de um morto, confira Scout Effigy, as condições de cooperação e os problemas sem aviso.', schema: 'Guia baseado em fontes sobre recuperação de Scouts inconscientes, Scout Effigy, ressurreição cooperativa, pontos de reviver e limites do nível final.' },
    primaryKeyword: 'como reviver no PEAK', eyebrow: 'Guia de recuperação cooperativa - confira o estado primeiro', h1: 'Como reviver no PEAK: Scout caído, Effigy e cooperação', intro: `Para saber como reviver no PEAK, primeiro confira se o Scout está inconsciente ou morto. Um Scout inconsciente depende do aviso de recuperação atual; um morto pode exigir ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} ou outra opção aceita pela partida.`, answerLabel: 'Resposta curta', answer: 'Separe o estado caído do estado morto. Para um Scout inconsciente, use a ação de cura ou recuperação mostrada pelo jogo. Para um morto, confira o modo cooperativo, o alvo e a opção de ressurreição disponível. Se nenhum aviso aparecer, não invente um altar fixo: verifique estado, modo, item, local e versão.', tocLabel: 'Nesta página', tocFaq: 'Perguntas frequentes sobre como reviver', heroImage: media('Ilustração editorial comparando um Scout caído e um Scout morto revivido com Scout Effigy em PEAK', 'Ilustração editorial: recuperar um Scout caído e ressuscitar um Scout morto são decisões diferentes.'),
    sections: [
      { title: 'Primeiro: o Scout está caído ou morto?', paragraphs: ['Muitas tentativas falham por causa de uma leitura errada do estado. Um Scout caído ou inconsciente ainda está na rota: o time deve ler o aviso, proteger quem ajuda e escolher uma superfície estável. Um Scout morto precisa de uma opção de ressurreição ou reaparecimento aceita pela partida.', 'As buscas misturam “reviver um amigo” e “ressuscitar um Scout”. O estado visível e o aviso atual são mais confiáveis que uma tecla ou coordenada antiga.'], table: { caption: 'Tabela de decisão para reviver no PEAK', headers: ['Estado', 'Sinal visível', 'Primeira ação', 'Scout Effigy?'], rows: [['Caído ou inconsciente', 'O Scout continua na rota e existe uma interação de recuperação.', 'Proteja a aproximação e deixe uma pessoa completar a ação válida.', 'Geralmente não é o primeiro passo.'], ['Scout morto', 'A interação normal desapareceu e surge uma rota de ressurreição.', 'Confirme cooperação, alvo e opção disponível.', 'Sim, quando as condições existem.'], ['Sem aviso ou estado incerto', 'Nenhum alvo, item ou interação válida aparece.', 'Pare e confira estado, item, local e versão.', 'Não prova um ponto fixo.']] } },
      { title: 'Como reviver um companheiro caído no PEAK', paragraphs: ['Para um jogador inconsciente, comece por uma posição estável e pelo aviso atual, não por uma tecla lembrada. Referências comunitárias ligam itens de cura à recuperação, mas o item e o momento podem mudar com a versão.', 'Um jogador assume a tentativa, o Scout caído informa a próxima superfície e os demais observam o perigo e a retirada. Depois da recuperação, saiam da área perigosa antes de continuar.', `Não confunda ${articleLink('rescue-claw', 'o guia da Rescue Claw')} com uma ressurreição universal. A ferramenta ajuda a voltar ao terreno, mas não substitui toda ação de cura ou reviver.`], image: media('Captura oficial da Steam de companheiros do PEAK coordenando uma subida íngreme', 'Captura oficial da Steam: deixe o operador em uma posição estável e mantenha uma rota clara.'), bullets: [['1. Estabilize', 'Escolha uma superfície que não derrube o operador.'], ['2. Leia o aviso', 'Use a interação atual.'], ['3. Um operador', 'Os demais observam o perigo e a retirada.'], ['4. Saia do risco', 'Faça uma pausa quando o Scout voltar.']] },
      { title: 'Como usar Scout Effigy para reviver um Scout morto', paragraphs: ['Scout Effigy é uma resposta específica para a busca sobre ressuscitar no PEAK. A entrada de itens descreve o uso para reviver um Scout morto em um alvo e informa que o item não surge no modo solo. Portanto, é uma opção cooperativa, não um botão universal para qualquer queda.', 'Antes de usar, confirme que o Scout morreu, que a partida é cooperativa, que o item está disponível e que o alvo é aceito. O operador também precisa de espaço seguro para terminar a ação.', `Consulte a ${articleLink('items#item-scout-effigy-107', 'entrada de Scout Effigy')} para a descrição mantida. Uma localização antiga da comunidade não fica automaticamente correta após uma atualização.`], bullets: [['Modo', 'Não planeje encontrar o item no solo.'], ['Estado', 'Separe morte e inconsciência.'], ['Alvo', 'Use a localização aceita pela partida atual.'], ['Versão', 'Verifique novamente se o aviso mudou.']] },
      { title: 'Scout Effigy não é a única opção relacionada a reviver', paragraphs: ['As referências do Scout e dos itens separam ressurreição em um alvo, reaparecimento por checkpoint e outras recuperações. Ancient Statue, Book of Bones, Checkpoint Flag e Scout Effigy não têm automaticamente as mesmas condições.', 'Não transforme cada menção a “último ponto de reviver” em um altar permanente. Se modo, fase ou versão forem diferentes, use a fonte como pista de termos e confirme a interação no jogo.'], table: { caption: 'Termos de reviver que devem ficar separados', headers: ['Termo', 'O que pode descrever', 'Como usar a evidência'], rows: [['Cura ou recuperação', 'Retornar um Scout inconsciente antes da morte.', 'Siga a ação e o item aceitos pela sessão.'], ['Ressurreição', 'Retornar um Scout morto por item ou alvo.', 'Confirme modo, alvo e disponibilidade.'], ['Reaparecimento ou checkpoint', 'Voltar à rota a partir de um estado de checkpoint.', 'Não prova que o corpo original pode ser revivido no mesmo lugar.']] } },
      { title: 'Onde fica o último ponto de reviver no PEAK?', paragraphs: ['O termo parece indicar uma coordenada fixa, mas este guia não confirma um altar universal para todas as rotas. Um alvo de item não é automaticamente o mesmo checkpoint em toda partida.', 'Confira estado, alvo aceito, fase e versão. Se o local continuar incerto, proteja o time em vez de publicar uma coordenada adivinhada.', `A ${articleLink('map-rotation', 'mapa de PEAK de hoje')} ajuda com o contexto da rota; a ação real deve ser conferida no jogo.`] },
      { title: 'Por que a opção de reviver pode não funcionar', paragraphs: ['Confira separadamente o estado, a distância, o item, o alvo e o modo cooperativo. Repetir a ação em uma borda perigosa pode derrubar outra pessoa.', `Depois de um patch, compare o comportamento com o ${articleLink('peak-game-update', 'registro de atualizações do PEAK')} e as informações oficiais da Steam antes de usar uma tecla ou local antigo.`], bullets: [['Estado', 'Diga caído ou morto.'], ['Modo', 'Confirme cooperação para Scout Effigy.'], ['Local', 'Escolha um alvo estável e válido.'], ['Aviso', 'Siga a interação atual.'], ['Patch', 'Registre a versão alterada.']] },
      { title: 'É possível reviver no nível final do PEAK?', paragraphs: ['A resposta segura é condicional: somente quando o jogo mostra uma interação de recuperação, um alvo de item ou um estado válido. Não há aqui uma promessa de ponto final universal, tentativas ilimitadas ou atalho sem aviso.', 'Perto da chegada, proteja primeiro o próximo apoio. Se o Scout morreu, confira Scout Effigy e o alvo; se a ação não aparecer, proteja os sobreviventes e registre rota e versão.'], image: media('Captura oficial da Steam da subida final do PEAK com um apoio seguro a proteger', 'Captura oficial da Steam: a recuperação no fim depende de aviso válido e apoio seguro.') },
      { title: 'O que fazer depois que o Scout voltar', paragraphs: ['Uma recuperação bem-sucedida devolve opções, mas não manda correr. Deixe o Scout retomar o controle, combine a próxima pausa e defina quem cuida da recuperação. Com pouca resistência, comida ou terreno seguro, recuar pode ser melhor.', `Use esta página com ${articleLink('peak-game-tips', 'dicas cooperativas')}, o ${articleLink('how-to-play-peak', 'guia para iniciantes')} e o ${articleLink('room-codes', 'guia de códigos de sala')}.`], bullets: [['Reposicione', 'Afaste-se da borda original.'], ['Redistribua', 'Defina batedor, operador e próxima pausa.'], ['Revise', 'Confira rota e avisos antes de gastar outra opção.']] },
    ],
    faq: { eyebrow: 'Respostas rápidas', title: 'Perguntas frequentes: como reviver no PEAK', items: [['Como reviver alguém no PEAK?', 'Separe inconsciente e morto. Use a recuperação atual no primeiro caso e confira cooperação, alvo e Scout Effigy no segundo.'], ['Como reviver jogadores caídos no PEAK?', 'Coloque um operador em uma superfície estável, siga a interação atual e saia do perigo. Rescue Claw não substitui toda ressurreição.'], ['Como ressuscitar um Scout morto?', 'Scout Effigy é documentado como opção cooperativa para reviver um Scout morto em um alvo. Confirme o aviso atual.'], ['Dá para reviver no nível final?', 'Somente se a partida apresentar uma interação válida. Um ponto final permanente não foi confirmado.'], ['Onde fica o último ponto de reviver?', 'Não suponha um único ponto; use o alvo aceito pela partida atual.']] },
    source: { eyebrow: 'Fontes e limites', title: 'O que este guia pode confirmar', body: `O banco de itens descreve Scout Effigy como consumível que revive um Scout morto em um alvo e não aparece no solo. A ${articleLink('items#item-scout-effigy-107', 'entrada de Scout Effigy')} e as referências externas explicam termos, mas não substituem a sessão atual.`, links: [['Referência Scout Effigy', sourceLinks.effigy], ['Estado do Scout', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK na Steam', sourceLinks.steam], ['Perguntas frequentes oficiais da Landfall', sourceLinks.faq]] },
    related: [['items', 'Abrir Scout Effigy'], ['rescue-claw', 'Comparar Rescue Claw'], ['peak-game-tips', 'Preparar resgates cooperativos'], ['how-to-play-peak', 'Rever a escalada'], ['room-codes', 'Convidar um companheiro']], relatedLabel: 'Guias relacionados de PEAK',
  },
  ko: {
    meta: { title: 'PEAK 부활 방법: 쓰러진 Scout Effigy와 협동 플레이', description: 'PEAK 부활 방법을 정리합니다. 의식불명과 사망을 구분하고 Scout Effigy, 협동 조건, 마지막 부활 지점과 프롬프트 문제를 확인하세요.', schema: 'PEAK의 쓰러짐 회복, Scout Effigy, 협동 부활 조건, 마지막 부활 지점과 최종 레벨 제한을 설명하는 출처 기반 가이드.' },
    primaryKeyword: 'PEAK 부활 방법', eyebrow: '협동 회복 가이드 - 먼저 상태 확인', h1: 'PEAK 부활 방법: 쓰러진 Scout Effigy와 협동 플레이', intro: `PEAK 부활 방법을 찾는다면 먼저 Scout가 의식불명인지 사망했는지 확인하세요. 의식불명 상태는 현재 회복 안내를 따르고, 사망한 Scout는 ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} 또는 현재 런이 허용하는 부활 경로를 확인해야 합니다.`, answerLabel: '짧은 답변', answer: 'PEAK에서는 쓰러진 상태와 사망 상태를 나누어야 합니다. 의식불명 Scout는 현재 게임이 표시하는 치료나 회복 상호작용을 사용하고, 사망한 Scout는 협동 모드, 대상 위치와 부활 수단을 확인합니다. 안내가 없으면 고정된 부활 지점을 추측하지 말고 상태, 모드, 아이템, 위치와 버전을 점검하세요.', tocLabel: '이 페이지의 내용', tocFaq: '부활 관련 자주 묻는 질문', heroImage: media('PEAK에서 쓰러진 Scout 회복과 Scout Effigy로 사망한 Scout를 부활시키는 장면을 비교한 편집 일러스트', '편집 일러스트: 쓰러짐 회복과 사망 후 부활은 서로 다른 판단입니다.'),
    sections: [
      { title: '먼저 Scout가 쓰러졌는지 사망했는지 확인하세요', paragraphs: ['부활 실패의 많은 원인은 상태를 잘못 판단하는 것입니다. 의식불명 Scout가 경로에 남아 있다면 안내를 읽고, 작업자를 보호하고, 안정된 발판을 선택해야 합니다. 사망한 Scout는 현재 게임이 허용하는 부활이나 리스폰 방법이 필요합니다.', '“친구를 부활시키기”와 “죽은 Scout를 되살리기”는 같은 행동이 아닐 수 있습니다. 예전 키나 좌표보다 보이는 상태와 현재 안내를 우선하세요.'], table: { caption: 'PEAK 부활 판단표', headers: ['상태', '보이는 단서', '첫 행동', 'Scout Effigy?'], rows: [['쓰러짐 또는 의식불명', 'Scout가 경로에 남아 있고 회복 상호작용이 표시됨.', '접근 경로를 안정시키고 한 명이 유효한 행동을 수행함.', '보통 첫 단계가 아님.'], ['Scout 사망', '일반 쓰러짐 상호작용이 사라지고 부활 경로가 나타남.', '협동 여부, 대상과 사용 가능한 방법을 확인함.', '조건이 맞으면 사용.'], ['안내 없음 또는 불명확', '유효한 대상, 아이템 또는 상호작용이 보이지 않음.', '움직임을 멈추고 상태, 아이템, 위치와 버전을 확인함.', '고정 지점의 증거가 아님.']] } },
      { title: 'PEAK에서 쓰러진 동료를 회복하는 방법', paragraphs: ['의식불명 플레이어에게는 기억한 키보다 안정된 위치와 현재 안내가 중요합니다. 커뮤니티 자료는 회복 아이템을 설명하지만 아이템과 타이밍은 버전에 따라 달라질 수 있습니다.', '한 명이 작업을 맡고 쓰러진 플레이어는 다음에 잡을 수 있는 지점을 알려 주세요. 회복 후에는 바로 달리지 말고 위험 구역을 벗어나 다음 휴식 지점을 정합니다.', `${articleLink('rescue-claw', 'Rescue Claw 가이드')}는 지형에 다시 닿게 돕는 도구이며 모든 부활 행동의 대체품은 아닙니다.`], image: media('가파른 경로에서 협력하는 PEAK 동료들의 공식 Steam 스크린샷', '공식 Steam 스크린샷: 작업자에게 안정된 발판과 명확한 회복 경로를 남겨 주세요.'), bullets: [['1. 안정화', '작업자도 떨어지지 않을 발판을 고릅니다.'], ['2. 안내 확인', '현재 게임의 상호작용을 사용합니다.'], ['3. 한 명만 작업', '다른 플레이어는 위험과 후퇴 경로를 봅니다.'], ['4. 위험에서 이동', 'Scout가 돌아오면 잠시 멈춥니다.']] },
      { title: 'Scout Effigy로 사망한 Scout를 부활시키는 방법', paragraphs: ['Scout Effigy는 PEAK에서 죽은 Scout를 되살리는 검색에 대한 구체적인 답입니다. 사이트 아이템 항목은 대상 위치에서 사망한 Scout를 부활시키는 도구로 설명하며 솔로에서는 생성되지 않는다고 기록합니다. 따라서 모든 쓰러짐에 쓰는 만능 버튼이 아닙니다.', '사용하기 전에 사망 상태, 협동 모드, 아이템 보유 여부와 현재 게임이 받는 대상을 확인하세요. 작업자가 행동을 끝낼 안전한 공간도 필요합니다.', `${articleLink('items#item-scout-effigy-107', 'Scout Effigy 아이템 항목')}에서 유지되는 설명을 확인할 수 있습니다. 업데이트 후 예전 커뮤니티 위치가 그대로 유효하다고 가정하지 마세요.`], bullets: [['모드', '솔로에서 고정 생성된다고 계획하지 않기.'], ['상태', '사망과 의식불명을 구분하기.'], ['대상', '현재 게임이 허용하는 위치 사용.'], ['버전', '안내가 달라지면 다시 확인하기.']] },
      { title: 'Scout Effigy만이 부활 관련 선택지는 아닙니다', paragraphs: ['Scout와 아이템 자료는 대상 위치에서의 부활, 체크포인트 리스폰과 다른 회복 상태를 구분합니다. Ancient Statue, Book of Bones, Checkpoint Flag와 Scout Effigy는 이름이 함께 언급되어도 같은 조건을 뜻하지 않습니다.', '“마지막 부활 지점”이라는 표현을 모든 경로의 영구 제단으로 바꾸어 말하지 마세요. 모드, 레벨과 버전이 같지 않다면 용어를 파악하는 단서로만 사용하고 게임 안에서 확인하세요.'], table: { caption: 'PEAK 부활 관련 용어를 구분하는 표', headers: ['용어', '설명할 수 있는 것', '증거 사용법'], rows: [['치료 또는 회복', '죽기 전에 의식불명 Scout를 경로로 돌려놓는 것.', '현재 세션이 받는 행동과 아이템을 따름.'], ['부활', '아이템이나 대상 위치를 통해 죽은 Scout를 되돌리는 것.', '모드, 대상과 사용 가능 여부를 확인함.'], ['리스폰 또는 체크포인트', '체크포인트 상태에서 경로로 다시 들어오는 것.', '원래 시체 자리에서 부활된다는 증거로 쓰지 않음.']] } },
      { title: 'PEAK 마지막 부활 지점은 어디인가요?', paragraphs: ['이 표현은 고정 좌표처럼 들리지만 모든 경로에 적용되는 영구 제단은 이 가이드에서 확인하지 않았습니다. 아이템이 제공하는 대상 위치가 매번 같은 체크포인트라는 뜻은 아닙니다.', '플레이어 상태, 현재 허용되는 대상, 레벨과 버전을 확인하세요. 위치가 불명확하면 추측한 좌표를 확정하지 말고 남은 팀을 보호하세요.', `${articleLink('map-rotation', '오늘의 PEAK 맵')}는 경로 배경을 알려 주지만 실제 부활 상호작용은 게임에서 확인해야 합니다.`] },
      { title: '부활 옵션이 작동하지 않는 이유', paragraphs: ['상태, 거리, 아이템, 대상과 협동 모드를 한 번에 하나씩 확인하세요. 위험한 가장자리에서 같은 행동을 반복하면 두 번째 쓰러짐이 생길 수 있습니다.', `패치 후 행동이 달라졌다면 ${articleLink('peak-game-update', 'PEAK 업데이트 로그')}와 공식 Steam 정보를 비교하고 오래된 키나 위치를 그대로 사용하지 마세요.`], bullets: [['상태', '쓰러짐인지 사망인지 말하기.'], ['모드', 'Scout Effigy라면 협동 확인.'], ['위치', '안정적이고 유효한 대상 선택.'], ['안내', '현재 상호작용을 따르기.'], ['패치', '변경된 버전 기록.']] },
      { title: 'PEAK 최종 레벨에서 부활할 수 있나요?', paragraphs: ['안전한 답은 조건부입니다. 현재 게임이 유효한 회복 행동, 아이템 대상 또는 허용된 상태를 보여 줄 때만 가능합니다. 영구적인 마지막 부활 지점이나 안내가 없을 때의 만능 우회 방법은 주장하지 않습니다.', '정상 근처에서 동료가 쓰러지면 먼저 다음 발판을 보호하세요. Scout가 죽었다면 Scout Effigy와 대상을 확인하고, 행동이 없다면 생존자를 지키면서 경로와 버전을 기록합니다.'], image: media('마지막 등반 구간에서 다음 안전한 발판을 지키는 PEAK 공식 Steam 스크린샷', '공식 Steam 스크린샷: 마지막 구간의 회복에는 유효한 안내와 안전한 발판이 필요합니다.') },
      { title: 'Scout가 돌아온 뒤 할 일', paragraphs: ['성공적인 부활은 선택지를 되찾는 순간이지 곧바로 달리라는 신호가 아닙니다. Scout가 조작을 회복할 시간을 주고 다음 휴식 위치와 회복 담당을 정하세요. 체력, 음식 또는 안전한 지형이 부족하면 후퇴가 더 나을 수 있습니다.', `${articleLink('peak-game-tips', '협동 생존 팁')}, ${articleLink('how-to-play-peak', '초보 등반 가이드')}, ${articleLink('room-codes', '방 코드 가이드')}와 함께 사용해 같은 실수를 줄이세요.`], bullets: [['재배치', '처음 위험했던 가장자리에서 이동.'], ['재분배', '정찰, 회복과 다음 집결지를 정함.'], ['재확인', '다른 자원을 쓰기 전 경로와 안내를 확인.']] },
    ],
    faq: { eyebrow: '빠른 답변', title: 'PEAK 부활 관련 자주 묻는 질문', items: [['PEAK에서 누군가를 어떻게 부활시키나요?', '의식불명인지 사망인지 구분하세요. 전자는 현재 회복 행동을 사용하고 후자는 협동, 대상과 Scout Effigy 같은 부활 방법을 확인합니다.'], ['쓰러진 플레이어를 어떻게 회복하나요?', '한 명을 안정된 발판에 세우고 현재 상호작용을 수행한 뒤 위험에서 이동합니다. Rescue Claw는 모든 부활의 대체품이 아닙니다.'], ['죽은 Scout를 어떻게 되살리나요?', 'Scout Effigy는 대상 위치에서 죽은 Scout를 되살리는 협동 선택지로 기록되어 있습니다. 현재 안내를 확인하세요.'], ['최종 레벨에서 부활할 수 있나요?', '현재 세션에 유효한 행동이 표시될 때만 확인할 수 있습니다. 고정된 마지막 지점은 확인되지 않았습니다.'], ['마지막 부활 지점은 어디인가요?', '모든 경로에 같은 지점이 있다고 가정하지 말고 현재 게임이 허용하는 대상을 사용하세요.']] },
    source: { eyebrow: '출처와 한계', title: '이 가이드가 확인할 수 있는 내용', body: `사이트 아이템 데이터베이스는 Scout Effigy를 대상 위치에서 죽은 Scout를 부활시키는 소모품으로 기록하고 솔로에서는 생성되지 않는다고 설명합니다. ${articleLink('items#item-scout-effigy-107', 'Scout Effigy 항목')}과 외부 자료는 용어를 설명하지만 현재 세션을 대신하지 않습니다.`, links: [['Scout Effigy 참고', sourceLinks.effigy], ['Scout 상태 참고', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK 공식 Steam', sourceLinks.steam], ['Landfall 공식 자주 묻는 질문', sourceLinks.faq]] },
    related: [['items', 'Scout Effigy 열기'], ['rescue-claw', 'Rescue Claw 비교'], ['peak-game-tips', '협동 구조 준비'], ['how-to-play-peak', '등반 기본 복습'], ['room-codes', '동료 초대']], relatedLabel: '관련 PEAK 가이드',
  },
  it: {
    meta: { title: 'Come rianimare in PEAK: Scout a terra, Effigy e cooperativa', description: 'Scopri come rianimare in PEAK: distingui uno Scout incosciente da uno morto, controlla Scout Effigy, la modalità cooperativa e i problemi senza prompt.', schema: 'Guida basata sulle fonti alla guarigione dello Scout incosciente, Scout Effigy, rianimazione cooperativa, ultimo punto di rianimazione e limiti del livello finale.' },
    primaryKeyword: 'come rianimare in PEAK', eyebrow: 'Guida al recupero cooperativo - controlla prima lo stato', h1: 'Come rianimare in PEAK: Scout a terra, Effigy e cooperativa', intro: `Se cerchi come rianimare in PEAK, controlla prima se lo Scout è incosciente o morto. Uno Scout incosciente dipende dal prompt di recupero attuale; uno Scout morto può richiedere ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} o un altra opzione accettata dalla partita.`, answerLabel: 'Risposta breve', answer: 'In PEAK devi separare lo stato a terra dallo stato morto. Per uno Scout incosciente usa l’azione di cura o recupero mostrata dal gioco; per uno Scout morto controlla cooperativa, bersaglio e opzione di rianimazione disponibile. Se non appare alcun prompt, non inventare un altare fisso: verifica stato, modalità, oggetto, luogo e versione.', tocLabel: 'In questa pagina', tocFaq: 'Domande frequenti sulla rianimazione', heroImage: media('Illustrazione editoriale che confronta il recupero di uno Scout a terra e la rianimazione con Scout Effigy in PEAK', 'Illustrazione editoriale: recuperare uno Scout a terra e rianimare uno Scout morto sono decisioni diverse.'),
    sections: [
      { title: 'Prima: lo Scout è a terra o è morto?', paragraphs: ['Molti tentativi falliscono perché lo stato viene letto male. Uno Scout incosciente è ancora sulla rotta: la squadra deve leggere il prompt, proteggere chi aiuta e trovare una superficie stabile. Uno Scout morto richiede una rianimazione o un respawn accettato dalla partita.', 'Le ricerche confondono “rianimare un amico” e “resuscitare uno Scout”. Lo stato visibile e il prompt attuale sono più affidabili di un vecchio tasto o di una coordinata copiata.'], table: { caption: 'Tabella decisionale per rianimare in PEAK', headers: ['Stato', 'Indizio visibile', 'Prima azione', 'Scout Effigy?'], rows: [['A terra o incosciente', 'Lo Scout resta sulla rotta e compare un interazione di recupero.', 'Metti in sicurezza l avvicinamento e fai completare l azione a una persona.', 'Di solito non è il primo passo.'], ['Scout morto', 'L interazione normale sparisce e compare una rotta di rianimazione.', 'Conferma cooperativa, bersaglio e opzione disponibile.', 'Sì, se le condizioni sono presenti.'], ['Nessun prompt', 'Non compare un bersaglio, oggetto o interazione valida.', 'Ferma il movimento e controlla stato, oggetto, luogo e versione.', 'Non prova un punto fisso.']] } },
      { title: 'Come rianimare un compagno a terra in PEAK', paragraphs: ['Per un giocatore incosciente, parti da una posizione stabile e dal prompt attuale, non da un tasto ricordato. Le fonti della community collegano gli oggetti di cura al recupero, ma oggetto e tempismo possono cambiare con la versione.', 'Una persona esegue il tentativo, lo Scout a terra indica la prossima superficie e gli altri guardano pericolo e ritirata. Dopo il recupero, allontanati dal rischio prima di proseguire.', `Non confondere ${articleLink('rescue-claw', 'la guida Rescue Claw')} con una rianimazione universale. Lo strumento aiuta a tornare a contatto con il terreno, ma non sostituisce ogni azione di cura o resurrezione.`], image: media('Screenshot ufficiale Steam di compagni di PEAK che coordinano una scalata ripida', 'Screenshot ufficiale Steam: lascia all operatore una posizione stabile e una rotta chiara.'), bullets: [['1. Stabilizza', 'Scegli una superficie che non faccia cadere l operatore.'], ['2. Leggi il prompt', 'Usa l interazione della versione attuale.'], ['3. Un operatore', 'Gli altri controllano pericolo e ritirata.'], ['4. Allontanati', 'Fai una pausa quando lo Scout torna.']] },
      { title: 'Come usare Scout Effigy per rianimare uno Scout morto', paragraphs: ['Scout Effigy è una risposta precisa alla ricerca sulla resurrezione in PEAK. La scheda degli oggetti lo descrive come un modo per rianimare uno Scout morto in un bersaglio e indica che non appare in solo. È quindi un opzione cooperativa, non un pulsante universale per ogni caduta.', 'Prima dell uso controlla morte, modalità cooperativa, disponibilità dell oggetto e bersaglio accettato. L operatore deve avere spazio sicuro per completare l azione.', `La ${articleLink('items#item-scout-effigy-107', 'scheda Scout Effigy')} contiene la descrizione mantenuta. Una posizione della community non resta automaticamente corretta dopo una patch.`], bullets: [['Modalità', 'Non pianificare di trovarlo in solo.'], ['Stato', 'Separa morte e incoscienza.'], ['Bersaglio', 'Usa il luogo accettato dalla partita attuale.'], ['Versione', 'Ricontrolla se il prompt cambia.']] },
      { title: 'Scout Effigy non è l unica opzione legata alla rianimazione', paragraphs: ['Le fonti dello Scout e degli oggetti distinguono resurrezione a un bersaglio, respawn da checkpoint e altri recuperi. Ancient Statue, Book of Bones, Checkpoint Flag e Scout Effigy possono essere citati insieme, ma non hanno automaticamente le stesse condizioni.', 'Non trasformare ogni riferimento all ultimo punto di rianimazione in un altare permanente. Se modalità, livello o versione non coincidono, usa la fonte per il vocabolario e verifica l interazione nel gioco.'], table: { caption: 'Termini da separare quando leggi una guida alla rianimazione', headers: ['Termine', 'Cosa può descrivere', 'Come usare la prova'], rows: [['Cura o recupero', 'Riporta uno Scout incosciente sulla rotta prima della morte.', 'Segui l azione e l oggetto accettati dalla sessione.'], ['Resurrezione', 'Riporta uno Scout morto tramite oggetto o bersaglio.', 'Conferma modalità, bersaglio e disponibilità.'], ['Respawn o checkpoint', 'Rientro nella rotta da uno stato di checkpoint.', 'Non dimostra che il corpo originale possa essere rianimato sul posto.']] } },
      { title: 'Dove si trova l ultimo punto di rianimazione di PEAK?', paragraphs: ['L espressione sembra indicare una coordinata fissa, ma questa guida non conferma un altare universale per tutte le rotte. Il bersaglio di un oggetto non è automaticamente lo stesso checkpoint in ogni partita.', 'Controlla stato, bersaglio accettato, livello e versione. Se il luogo non è chiaro, proteggi la squadra invece di pubblicare una coordinata indovinata.', `La ${articleLink('map-rotation', 'mappa di PEAK di oggi')} dà contesto alla rotta; l azione reale va verificata in gioco.`] },
      { title: 'Perché l opzione di rianimazione non funziona', paragraphs: ['Controlla separatamente stato, distanza, oggetto, bersaglio e modalità cooperativa. Ripetere l azione su un bordo pericoloso può causare una seconda caduta.', `Dopo una patch confronta il comportamento con il ${articleLink('peak-game-update', 'registro degli aggiornamenti di PEAK')} e le informazioni Steam ufficiali prima di usare un vecchio tasto o luogo.`], bullets: [['Stato', 'Dì a terra o morto.'], ['Modalità', 'Conferma cooperativa per Scout Effigy.'], ['Luogo', 'Scegli un bersaglio stabile e valido.'], ['Prompt', 'Segui l interazione attuale.'], ['Patch', 'Registra la versione cambiata.']] },
      { title: 'Si può rianimare nel livello finale di PEAK?', paragraphs: ['La risposta prudente è condizionata: solo quando il gioco mostra un recupero valido, un bersaglio dell oggetto o uno stato accettato. Questa pagina non promette un punto finale universale, tentativi infiniti o un trucco senza prompt.', 'Vicino alla vetta proteggi prima il prossimo appoggio. Se lo Scout è morto controlla Scout Effigy e il bersaglio; se l azione non appare, proteggi i superstiti e annota rotta e versione.'], image: media('Screenshot ufficiale Steam dell ascesa finale di PEAK con un appoggio sicuro da proteggere', 'Screenshot ufficiale Steam: il recupero finale richiede un prompt valido e un appoggio sicuro.') },
      { title: 'Cosa fare dopo il ritorno dello Scout', paragraphs: ['Una rianimazione riuscita restituisce opzioni, ma non ordina di correre. Lascia che lo Scout riprenda il controllo, concorda la prossima pausa e assegna chi si occupa del recupero. Con poca resistenza, cibo o terreno sicuro, ritirarsi può essere la scelta migliore.', `Usa questa pagina insieme ai ${articleLink('peak-game-tips', 'consigli cooperativi')}, alla ${articleLink('how-to-play-peak', 'guida per principianti')} e alla ${articleLink('room-codes', 'guida ai codici della stanza')}.`], bullets: [['Riposiziona', 'Allontanati dal bordo iniziale.'], ['Ridividi', 'Definisci esploratore, operatore e pausa.'], ['Ricontrolla', 'Guarda rotta e prompt prima di spendere un altra risorsa.']] },
    ],
    faq: { eyebrow: 'Risposte rapide', title: 'Domande frequenti: come rianimare in PEAK', items: [['Come rianimare qualcuno in PEAK?', 'Distingui incoscienza e morte. Usa il recupero attuale nel primo caso e controlla cooperativa, bersaglio e Scout Effigy nel secondo.'], ['Come rianimare i giocatori a terra?', 'Metti un operatore su una superficie stabile, segui l interazione attuale e allontanati dal pericolo. Rescue Claw non sostituisce ogni resurrezione.'], ['Come resuscitare uno Scout morto?', 'Scout Effigy è documentato come opzione cooperativa per rianimare uno Scout morto a un bersaglio. Controlla il prompt attuale.'], ['Si può rianimare nel livello finale?', 'Solo se la partita mostra un interazione valida. Non è confermato un punto finale permanente.'], ['Dov è l ultimo punto di rianimazione?', 'Non supporre un unico punto; usa il bersaglio accettato dalla partita attuale.']] },
    source: { eyebrow: 'Fonti e limiti', title: 'Cosa può confermare questa guida', body: `Il database degli oggetti descrive Scout Effigy come consumabile che rianima uno Scout morto a un bersaglio e non appare in solo. La ${articleLink('items#item-scout-effigy-107', 'scheda Scout Effigy')} e le fonti esterne spiegano i termini, ma non sostituiscono la sessione attuale.`, links: [['Riferimento Scout Effigy', sourceLinks.effigy], ['Stato Scout', sourceLinks.scout], ['Ancient Statue', sourceLinks.statue], ['Book of Bones', sourceLinks.bones], ['Checkpoint Flag', sourceLinks.checkpoint], ['PEAK su Steam', sourceLinks.steam], ['Domande frequenti ufficiali di Landfall', sourceLinks.faq]] },
    related: [['items', 'Apri Scout Effigy'], ['rescue-claw', 'Confronta Rescue Claw'], ['peak-game-tips', 'Prepara i soccorsi cooperativi'], ['how-to-play-peak', 'Ripassa la scalata'], ['room-codes', 'Invita un compagno']], relatedLabel: 'Articoli PEAK correlati',
  },
};

const reviveRecoveryDistinction = {
  zh: {
    title: 'PEAK 中复活与检查点重生有什么区别？',
    paragraphs: [
      `本站维护的物品条目记录了两种不同效果：${articleLink('items#item-scout-effigy-107', 'Scout Effigy')}可在目标位置复活已死亡的 Scout，且不会在单人模式中生成。Checkpoint Flag 会为放置它的 Scout 创建一次性重生检查点，并记录当时的状态。`,
      '这些说明不能证明每条路线都有相同的“最后复活点”，也不表示旗帜能在队友尸体旁复活另一名 Scout。区分死亡复活、检查点重生和昏迷恢复，并以当前对局显示的目标与提示为准。',
    ],
    table: {
      caption: 'PEAK 物品条目记录的复活与检查点效果',
      headers: ['名称', '站内维护的描述', '判断边界'],
      rows: [
        ['Scout Effigy', '在目标位置复活已死亡的 Scout；物品条目说明单人模式不会生成。', '确认联机状态和本局接受的目标。'],
        ['Checkpoint Flag', '为放置它的 Scout 创建一次性重生检查点并保存当时状态。', '不能据此推断它能复活另一名 Scout 或每局都有固定最后点。'],
        ['倒地恢复', '社区维护的 Scout 资料把治疗物品与昏迷恢复联系起来。', '按当前游戏提示操作；这和死亡复活不是同一状态。'],
      ],
    },
  },
  es: {
    title: 'Diferencia entre resurrección y respawn en un checkpoint de PEAK',
    paragraphs: [
      `El catálogo de objetos del sitio registra dos efectos distintos: ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} puede resucitar a un Scout muerto en un objetivo y no aparece en partidas en solitario. Checkpoint Flag crea un punto de respawn de un solo uso para el Scout que la colocó y guarda su estado en ese momento.`,
      'Estas descripciones no demuestran que todas las rutas tengan el mismo último punto ni que la bandera resucite a otro Scout junto a su cuerpo. Separa resurrección, respawn y recuperación de un Scout inconsciente; sigue el objetivo y el aviso de la partida actual.',
    ],
    table: {
      caption: 'Efectos de resurrección y checkpoint registrados para PEAK',
      headers: ['Nombre', 'Descripción mantenida en el sitio', 'Límite'],
      rows: [
        ['Scout Effigy', 'Resucita a un Scout muerto en un objetivo; el catálogo indica que no aparece en solitario.', 'Comprueba la cooperación y el objetivo aceptado.'],
        ['Checkpoint Flag', 'Crea un respawn de un solo uso para quien la colocó y guarda su estado.', 'No prueba que resucite a otro Scout ni que exista un último punto universal.'],
        ['Recuperación en el suelo', 'La referencia comunitaria de Scout relaciona objetos curativos con recuperar a un Scout inconsciente.', 'Sigue el aviso actual; no es lo mismo que resucitar a un Scout muerto.'],
      ],
    },
  },
  ja: {
    title: 'PEAKの蘇生とチェックポイントでのリスポーンの違い',
    paragraphs: [
      `サイトで管理しているアイテム情報には、異なる2つの効果が記載されています。${articleLink('items#item-scout-effigy-107', 'Scout Effigy')}は死亡したScoutを指定地点で蘇生するアイテムで、ソロでは出現しません。Checkpoint Flagは設置したScout用の1回限りのリスポーン地点を作り、設置時の状態を保存します。`,
      'この説明だけでは、すべてのルートに共通する最後の蘇生地点があることも、旗が別のScoutを遺体の場所で蘇生することも確認できません。死亡後の蘇生、チェックポイントでのリスポーン、気絶からの回復を分け、現在のゲームが示す対象と表示を確認してください。',
    ],
    table: {
      caption: 'PEAKのアイテム情報に記録された蘇生とチェックポイントの効果',
      headers: ['名称', 'サイトの記録', '確認範囲'],
      rows: [
        ['Scout Effigy', '死亡したScoutを指定地点で蘇生。ソロでは出現しないと記載。', '協力プレイか、ゲームが受け付ける対象か確認する。'],
        ['Checkpoint Flag', '設置したScout用の1回限りのリスポーン地点を作り、設置時の状態を保存。', '別のScoutの蘇生や、全ルート共通の最終地点を示すものではない。'],
        ['気絶からの回復', 'コミュニティ管理のScout資料は、治療アイテムと気絶回復を関連付けている。', '現在の表示に従う。死亡後の蘇生とは別の状態。'],
      ],
    },
  },
  de: {
    title: 'Wiederbelebung und Checkpoint-Respawn in PEAK: der Unterschied',
    paragraphs: [
      `Der gepflegte Item-Katalog dokumentiert zwei unterschiedliche Effekte: ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} kann einen toten Scout an einem Ziel wiederbeleben und erscheint laut Eintrag nicht im Solo-Modus. Checkpoint Flag setzt für den Scout, der sie platziert, einen einmaligen Respawn-Checkpoint und speichert dessen Zustand zu diesem Zeitpunkt.`,
      'Daraus folgt weder ein einheitlicher letzter Wiederbelebungspunkt für alle Routen noch, dass die Flagge einen anderen Scout an dessen Körper wiederbelebt. Unterscheide Wiederbelebung, Checkpoint-Respawn und Hilfe für einen bewusstlosen Scout; maßgeblich sind Ziel und Hinweis der aktuellen Runde.',
    ],
    table: {
      caption: 'Im PEAK-Item-Katalog dokumentierte Wiederbelebungs- und Checkpoint-Effekte',
      headers: ['Begriff', 'Gepflegte Beschreibung', 'Grenze'],
      rows: [
        ['Scout Effigy', 'Belebt einen toten Scout an einem Ziel wieder; laut Eintrag kein Solo-Spawn.', 'Koop-Modus und akzeptiertes Ziel prüfen.'],
        ['Checkpoint Flag', 'Einmaliger Respawn-Checkpoint für den Scout, der sie platziert hat; der Zustand wird gespeichert.', 'Belegt weder die Wiederbelebung eines anderen Scouts noch einen universellen letzten Punkt.'],
        ['Hilfe bei Bewusstlosigkeit', 'Die Community-Referenz zu Scout verbindet Heilgegenstände mit der Erholung eines bewusstlosen Scouts.', 'Dem aktuellen Hinweis folgen; anderer Zustand als ein toter Scout.'],
      ],
    },
  },
  fr: {
    title: 'Résurrection et respawn au checkpoint dans PEAK : quelle différence ?',
    paragraphs: [
      `Le catalogue d’objets tenu par le site décrit deux effets différents : ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} peut ressusciter un Scout mort à une cible et n’apparaît pas en solo. Checkpoint Flag crée un checkpoint de respawn à usage unique pour le Scout qui l’a posée et conserve son état au moment de la pose.`,
      'Ces descriptions ne prouvent ni l’existence d’un dernier point commun à toutes les routes ni la résurrection d’un autre Scout près de son corps par le drapeau. Distinguez résurrection, respawn au checkpoint et récupération d’un Scout inconscient ; suivez la cible et l’indication de la partie actuelle.',
    ],
    table: {
      caption: 'Effets de résurrection et de checkpoint consignés pour PEAK',
      headers: ['Nom', 'Description tenue sur le site', 'Limite'],
      rows: [
        ['Scout Effigy', 'Ressuscite un Scout mort à une cible ; l’entrée indique qu’il n’apparaît pas en solo.', 'Vérifiez la coopération et la cible acceptée.'],
        ['Checkpoint Flag', 'Crée un respawn à usage unique pour le Scout qui l’a posée et conserve son état.', 'Ne prouve pas qu’il ressuscite un autre Scout ni qu’un dernier point universel existe.'],
        ['Récupération à terre', 'La référence communautaire sur Scout associe les objets de soin à la récupération d’un Scout inconscient.', 'Suivez l’indication actuelle ; ce n’est pas la résurrection d’un Scout mort.'],
      ],
    },
  },
  pt: {
    title: 'Ressurreição e respawn no checkpoint em PEAK: qual é a diferença?',
    paragraphs: [
      `O catálogo de itens mantido pelo site registra dois efeitos diferentes: ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} pode ressuscitar um Scout morto em um alvo e não aparece no modo solo. Checkpoint Flag cria um checkpoint de respawn de uso único para o Scout que a colocou e guarda o estado dele naquele momento.`,
      'Essas descrições não comprovam um último ponto igual em todas as rotas nem que a bandeira ressuscite outro Scout junto ao corpo. Separe ressurreição, respawn no checkpoint e recuperação de um Scout inconsciente; siga o alvo e o aviso da partida atual.',
    ],
    table: {
      caption: 'Efeitos de ressurreição e checkpoint registrados para PEAK',
      headers: ['Nome', 'Descrição mantida no site', 'Limite'],
      rows: [
        ['Scout Effigy', 'Ressuscita um Scout morto em um alvo; o catálogo informa que não aparece no solo.', 'Confira a cooperação e o alvo aceito.'],
        ['Checkpoint Flag', 'Cria um respawn de uso único para o Scout que a colocou e guarda o estado dele.', 'Não comprova que ressuscita outro Scout nem um último ponto universal.'],
        ['Recuperação no chão', 'A referência comunitária de Scout relaciona itens de cura à recuperação de um Scout inconsciente.', 'Siga o aviso atual; é diferente de ressuscitar um Scout morto.'],
      ],
    },
  },
  ko: {
    title: 'PEAK 부활과 체크포인트 리스폰의 차이',
    paragraphs: [
      `사이트에서 관리하는 아이템 목록에는 서로 다른 두 효과가 기록되어 있습니다. ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')}는 사망한 Scout을 지정한 위치에서 부활시키며 솔로에서는 생성되지 않는다고 설명합니다. Checkpoint Flag는 이를 설치한 Scout을 위한 1회성 리스폰 체크포인트를 만들고 설치 당시의 상태를 저장합니다.`,
      '이 설명만으로 모든 경로에 공통된 마지막 부활 지점이 있다고 볼 수 없으며, 깃발이 다른 Scout을 시체 위치에서 되살린다는 뜻도 아닙니다. 사망 후 부활, 체크포인트 리스폰, 의식불명 회복을 구분하고 현재 게임의 대상과 안내를 확인하세요.',
    ],
    table: {
      caption: 'PEAK 아이템 목록에 기록된 부활 및 체크포인트 효과',
      headers: ['이름', '사이트에 기록된 설명', '한계'],
      rows: [
        ['Scout Effigy', '사망한 Scout을 지정 위치에서 부활시킴. 솔로에서는 생성되지 않는다고 기록됨.', '협동 여부와 게임이 허용하는 대상을 확인하세요.'],
        ['Checkpoint Flag', '설치한 Scout을 위한 1회성 리스폰 지점을 만들고 당시 상태를 저장함.', '다른 Scout 부활이나 모든 경로의 고정 지점을 입증하지 않습니다.'],
        ['쓰러진 Scout 회복', '커뮤니티 관리 Scout 자료는 치료 아이템을 의식불명 회복과 연결합니다.', '현재 안내를 따르세요. 사망 후 부활과는 다른 상태입니다.'],
      ],
    },
  },
  it: {
    title: 'Resurrezione e respawn al checkpoint in PEAK: le differenze',
    paragraphs: [
      `Il catalogo degli oggetti mantenuto dal sito registra due effetti diversi: ${articleLink('items#item-scout-effigy-107', 'Scout Effigy')} può rianimare uno Scout morto a un bersaglio e non appare in solo. Checkpoint Flag crea un checkpoint di respawn monouso per lo Scout che lo ha piazzato e ne conserva lo stato in quel momento.`,
      'Queste descrizioni non provano che tutte le rotte abbiano lo stesso ultimo punto né che la bandiera rianimi un altro Scout accanto al suo corpo. Distingui rianimazione, respawn al checkpoint e recupero di uno Scout incosciente; segui il bersaglio e l’indicazione della partita attuale.',
    ],
    table: {
      caption: 'Effetti di rianimazione e checkpoint registrati per PEAK',
      headers: ['Nome', 'Descrizione mantenuta dal sito', 'Limite'],
      rows: [
        ['Scout Effigy', 'Rianima uno Scout morto a un bersaglio; la scheda dice che non appare in solo.', 'Controlla cooperativa e bersaglio accettato.'],
        ['Checkpoint Flag', 'Crea un respawn monouso per lo Scout che l’ha piazzato e ne conserva lo stato.', 'Non prova la rianimazione di un altro Scout né un ultimo punto universale.'],
        ['Recupero a terra', 'La voce comunitaria su Scout collega gli oggetti curativi al recupero di uno Scout incosciente.', 'Segui l’indicazione attuale; è diverso dal rianimare uno Scout morto.'],
      ],
    },
  },
};

for (const [locale, translation] of Object.entries(reviveGuideTranslations)) {
  translation.primaryKeyword = null;
  translation.sections[3] = reviveRecoveryDistinction[locale];
  translation.source.links = translation.source.links.filter(([, url]) => url !== sourceLinks.statue && url !== sourceLinks.bones);
}
