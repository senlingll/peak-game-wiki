const articleLink = (slug, label) => `[[link:${slug}|${label}]]`;
const media = (src, alt, caption) => ({ src, alt, caption, width: 1200, height: 675 });

const sourceLinks = {
  steam: 'https://store.steampowered.com/app/3527290/PEAK/',
  patch204: 'https://store.steampowered.com/news/app/3527290/view/716788653799506284',
  faq: 'https://landfall.se/peak-faq',
  discord: 'https://discord.gg/peakgame',
};

export const roomCodesTranslations = {
  zh: {
    meta: {
      title: 'PEAK 联机与房间码指南：合作、跨平台与加入方法',
      description: '了解 PEAK 房间码如何使用、好友如何通过 Steam 或 JOIN GAME 加入、最多几人联机，以及当前跨平台计划和大厅隐私设置。',
      schema: '一份基于官方来源的 PEAK 联机与房间码指南，说明合作邀请、JOIN GAME、人数、跨平台计划、匹配方式和大厅隐私。',
    },
    primaryKeyword: 'PEAK 房间码',
    eyebrow: '联机指南 - 合作与加入码',
    h1: 'PEAK 联机与房间码指南：合作、跨平台与加入方法',
    intro: 'PEAK 支持 Steam 好友邀请，也支持用房间码加入大厅。本指南说明房间码在哪里复制、好友在哪里输入、四人上限如何计算，以及如何区分当前 Steam/PC 状态和未来主机跨平台计划。',
    answerLabel: '简短答案',
    answer: 'PEAK 有房间码。房主进入大厅后打开暂停菜单即可复制房间码，加入方在主菜单选择 JOIN GAME 并输入。Steam 邀请仍然有效，官方商店页支持房主加最多三名其他 Scout，共四人；当前可玩的版本是 Steam/PC，Landfall 将主机支持和跨平台描述为进行中的工作。游戏没有随机匹配，也支持离线单人游玩。',
    tocLabel: '本页内容',
    tocFaq: '联机 FAQ',
    heroImage: media('/media/peak-coop-climb.webp', 'PEAK 队友在陡峭岛屿路线中协作攀爬', 'Steam 官方截图：联机成功只是开始，队伍还需要共同理解路线并安全推进。'),
    sections: [
      {
        title: 'PEAK 房间码怎么用',
        paragraphs: [
          'Patch 2.04.a 为 PEAK 加入了房间码。官方公告说明，玩家进入大厅后可以在暂停菜单看到房间码，并复制后发给好友；设置中还提供隐藏房间码的选项，适合直播或公开展示画面时使用。',
          '这个流程分为两个角色。房主打开暂停菜单、复制房间码，再通过私下的聊天方式发送；加入方回到主菜单，选择 JOIN GAME 并输入收到的代码。准备只让指定队友进入时，不要把房间码公开发到无关频道。',
          '官方公告把房间码定位为未来主机上线后实现跨平台联机的准备机制。它的作用是直接指向一个已经存在的大厅，不是公开队列，也不会自动替你寻找陌生队友。Steam 邀请方式仍然可以继续使用。',
        ],
        bullets: [
          ['房主', '在大厅暂停菜单复制房间码，并发给指定玩家。'],
          ['加入方', '在主菜单选择 JOIN GAME，输入收到的房间码。'],
          ['隐私', '直播或公开展示时，可以使用游戏内选项隐藏房间码。'],
        ],
      },
      {
        title: '如何加入 PEAK 联机游戏',
        paragraphs: [
          'Steam 商店页将 PEAK 的多人模式描述为好友联机：玩家可以通过 Steam 邀请最多三名其他 Scout，也可以独自攀爬。2.04.a 加入房间码后，并没有取消原有的邀请方式，因此应根据队伍正在使用的沟通方式选择入口。',
          '如果好友发送的是 Steam 邀请，就通过 Steam 接受邀请并按照当前游戏提示操作；如果收到的是房间码，就从主菜单进入 JOIN GAME。菜单文字可能随更新调整，实际运行版本中的界面应当优先于旧截图或旧攻略。',
          '已有房间码时，加入过程不需要另找公开大厅。进入后，队伍仍要确定谁负责主持、下一段路线怎么走，并查看' + articleLink('map-rotation#today-map', '今天的 PEAK 地图路线') + '。如果基础攀爬流程还不熟，可以先读' + articleLink('how-to-play-peak', 'PEAK 新手玩法') + '。',
        ],
        image: media('/media/peak-climb-ridge.webp', 'PEAK 玩家沿狭窄山脊协作前进', '路线示意：加入大厅只是第一步，队伍仍要先约定下一段攀爬计划。'),
        bullets: [
          ['先确定房主', '在发邀请或房间码前，先说清楚大家要加入哪一个大厅。'],
          ['跟随当前界面', '房间码和邀请入口可能调整，以正在运行的版本为准。'],
          ['加入后看路线', '离开营地前确认当前路线和队伍的第一个目标。'],
        ],
      },
      {
        title: 'PEAK 最多几个人联机？',
        paragraphs: [
          '官方 Steam 描述写明，多人模式可以邀请最多三名其他 Scout。按实际队伍计算，就是一名房主加三名其他玩家，共四人。人数少于四人也可以开始，不必等到大厅满员。',
          'Landfall 官方 FAQ 确认 PEAK 支持离线单人游玩。单人局不是未完成的多人大厅，而是游戏明确支持的玩法；人数上限和平台能否互联是两个不同问题。',
          '组队前先确定房主和沟通方式，再决定使用 Steam 邀请还是房间码。所有人进入后，把注意力放在下一处安全停留点，而不是把队伍人数本身当成策略。',
        ],
        bullets: [
          ['最多四人', '一名房主加最多三名其他 Scout。'],
          ['小队也可以', '不需要凑齐四人才能开始攀爬。'],
          ['支持单人', '官方 FAQ 说明单人模式可以离线游玩。'],
        ],
      },
      {
        title: 'PEAK 跨平台：当前状态与未来计划',
        paragraphs: [
          '这里要区分“现在能玩什么”和“官方准备支持什么”。本页当前能确认的可玩版本是 Steam/PC；Landfall 官方 FAQ 表示团队正在把 PEAK 带到主机，并说明 PEAK 将支持跨平台，更多消息会在今年晚些时候公布。',
          'Patch 2.04.a 解释了房间码的未来用途：等主机版本上线后，玩家可以用它进行跨平台联机。这句话说明了设计方向，并不等于现在已经能把 PC 和主机混在同一个已确认开放的大厅里。',
          '因此，当前 PC 组队可以使用 Steam 好友或房间码；如果要安排混合平台游戏，应在承诺之前重新查看官方版本和平台公告。不要把 PEAK 永久写成“不支持跨平台”，也不要把计划中的功能宣传成已经全面上线。',
        ],
        image: media('/media/peak-map-route.webp', 'PEAK 路线画面中，队伍准备判断下一段变化地形', '路线示意：平台状态与当天地图是两项独立检查，组队前都应确认。'),
        bullets: [
          ['当前局', '按 Steam/PC 作为本页当前可确认的可玩平台理解。'],
          ['官方计划', '主机支持和跨平台被官方描述为进行中的工作。'],
          ['不要提前承诺', '安排跨平台联机前重新查看官方公告。'],
        ],
      },
      {
        title: '随机匹配、Steam 好友与找队友',
        paragraphs: [
          '房间码不等于随机匹配。Landfall FAQ 明确写明 PEAK 没有 matchmaking，采用 Steam-friends only 的联机方式。房间码指向一个已经由玩家主持的大厅，不会建立公开排队，也不会替你随机分配队友。',
          '如果已经知道一起玩的对象，就使用 Steam 好友和房主的邀请或房间码。如果需要找队友，官方 FAQ 指向开发商的 Discord 社区。Discord 是认识其他玩家的渠道，不代表游戏里存在随时可用的公共匹配功能。',
          '队伍组好后，先约定一名房主、入口方式和沟通频道。需要统一物品名称时，可以查看' + articleLink('items', 'PEAK 物品图鉴') + '；如果本局还要完成平台进度，再参考' + articleLink('achievements', '成就指南') + '。',
        ],
        bullets: [
          ['已有队伍', '使用 Steam 好友和房主的邀请或房间码。'],
          ['需要队友', '把官方 Discord 当作社区找人渠道，不要当作随机匹配。'],
          ['开局前', '说清房主、入口方式、路线和沟通频道。'],
        ],
      },
      {
        title: '如何防止陌生人加入 PEAK 大厅',
        paragraphs: [
          'Landfall FAQ 专门回答了“没有邀请却有随机玩家加入大厅”的情况。官方给出的处理方式是把 Lobby Mode 设为 Invite Only，把 Steam 资料设为 Private，然后在修改设置后重新创建大厅。',
          '如果陌生人已经在大厅里，房主可以将其踢出。FAQ 还说明，被踢出的玩家不能重新加入该房主的游戏。这是大厅隐私措施，不是匹配系统设置，所以应在分享房间码前完成。',
          '想进行私人攀爬时，先检查大厅模式和 Steam 隐私设置，只把房间码发给目标队友。如果房间码已经出现在直播或公开帖子里，就隐藏房间码并重新开房，不要假定旧代码仍然私密。',
        ],
        image: media('/media/peak-coop-climb.webp', 'PEAK 队友在共同路线的安全位置集合后准备继续攀爬', 'Steam 官方截图：可控的大厅环境能让队伍在出发前更容易沟通。'),
        bullets: [
          ['设为 Invite Only', '按官方 FAQ 的步骤修改 Lobby Mode。'],
          ['检查 Steam 隐私', '将 Steam 资料设为 Private。'],
          ['重新开房', '设置修改后重新创建大厅。'],
          ['处理陌生人', '房主可以踢人，被踢者不能重新加入该房主的游戏。'],
        ],
      },
      {
        title: '官方联机问题排查',
        paragraphs: [
          '邀请或房间码加入失败时，应以 Landfall 当前 FAQ 的排查清单为准。官方列出了 Steam 例行维护、验证游戏文件、防火墙或杀毒软件排除、VPN 相关检查、cFosSpeed，以及模组或安装问题等方向。',
          '这些步骤不是说所有失败都由同一个原因造成。按照 FAQ 中与你的情况相关的条目逐项检查，再重新尝试 Steam 邀请或 JOIN GAME。如果仍然无法判断原因，可以把具体平台、入口方式和界面错误带到官方 PEAK Discord 或 Steam 社区，而不是自行发明一个 PEAK 专属修复方案。',
          '反馈问题时，说明房主用的是 Steam 邀请还是房间码、加入方是否能打开 JOIN GAME、大厅是否为 Invite Only，以及游戏显示了什么信息。这样能把大厅隐私问题、连接问题和平台状态问题分开。',
        ],
        bullets: [
          ['先看官方 FAQ', '使用其中当前的连接和 Photon 排查部分。'],
          ['记录入口方式', '注明是 Steam 邀请，还是通过 JOIN GAME 输入代码。'],
          ['保留界面信息', '提问时写清平台、大厅设置和原始提示。'],
        ],
      },
      {
        title: 'PEAK 联机准备清单',
        paragraphs: [
          '房主开局前，先决定谁负责主持，以及队伍使用 Steam 邀请还是房间码。如果使用代码，就从暂停菜单复制并私下发送；如果不想让陌生人进入，就先设为 Invite Only，并按官方 Steam 隐私步骤重新开房。',
          '所有人进入后，查看' + articleLink('map-rotation#today-map', '今天的 PEAK 地图') + '，再为第一段攀爬制定一个简短计划。需要统一路线装备名称时，使用' + articleLink('items', '物品图鉴') + '；如果本局有 Steam 成就目标，再查看' + articleLink('achievements', '成就指南') + '。',
          '把“进入大厅”和“开始攀爬”分开处理。成功输入房间码只说明玩家进入了大厅，并不说明路线安全、平台计划已经更新，或队伍已经决定谁侦察、谁携带恢复资源、什么时候停止冒险。',
        ],
        bullets: [
          ['1. 确定房主', '说清一个大厅和一个沟通频道。'],
          ['2. 选择入口', '使用 Steam 邀请，或私下分享房间码。'],
          ['3. 保护大厅', '需要时使用 Invite Only 和官方 Steam 隐私步骤。'],
          ['4. 规划攀爬', '查看每日路线、统一物品名称，并约定第一个安全目标。'],
        ],
      },
      {
        title: '下一步：让 PEAK 联机更顺利',
        paragraphs: [
          '当队伍已经能稳定加入后，下一步就是路线协作。阅读' + articleLink('how-to-play-peak', 'PEAK 新手玩法') + '了解攀爬循环，出发前查看' + articleLink('map-rotation#today-map', '今天的地图') + '，需要统一装备称呼时使用' + articleLink('items', '物品图鉴') + '；如果要追踪平台进度，再继续阅读' + articleLink('achievements', '成就指南') + '。',
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'PEAK 联机与房间码 FAQ',
      items: [
        ['PEAK 有房间码吗？', '有。Patch 2.04.a 加入了房间码。房主在大厅暂停菜单复制，加入方在主菜单通过 JOIN GAME 输入。'],
        ['PEAK 房间码怎么用？', '房主把大厅代码发给指定玩家，加入方从 JOIN GAME 输入。房间码用于进入已有大厅，不是随机匹配队列。'],
        ['PEAK 支持跨平台吗？', '当前可确认的可玩版本是 Steam/PC。Landfall 表示主机支持正在推进，并说明 PEAK 将支持跨平台；因此目前应把跨平台理解为计划中的功能，而不是已经开放的混合平台联机。'],
        ['PEAK 最多几个人联机？', '官方商店页支持一名房主加最多三名其他 Scout，共四人。PEAK 也支持离线单人游玩。'],
        ['PEAK 有随机匹配吗？', '没有。Landfall FAQ 将 PEAK 描述为 Steam-friends only，且没有 matchmaking。可以使用 Steam 好友、房间码或官方 Discord 找队友。'],
        ['怎么防止陌生人加入 PEAK 房间？', '把 Lobby Mode 设为 Invite Only，把 Steam 资料设为 Private，然后重新创建大厅。房主可以踢人，官方 FAQ 说明被踢者不能重新加入该房主的游戏。'],
      ],
    },
    source: {
      eyebrow: '官方来源与状态边界',
      title: '本联机指南可以确认什么',
      body: '房间码行为、JOIN GAME 入口、未来跨平台用途和 Steam 邀请继续有效等事实来自 Patch 2.04.a 官方公告。人数及线上/离线玩法来自 PEAK 官方 Steam 商店页。Landfall FAQ 提供当前匹配方式、平台计划、Discord、大厅隐私和连接排查说明。平台支持和界面文字可能变化，安排跨平台游戏前请重新核对官方页面。',
      links: [
        ['PEAK Steam 官方页面', sourceLinks.steam],
        ['Patch 2.04.a：THE KILN IS BACK', sourceLinks.patch204],
        ['Landfall 官方 PEAK FAQ', sourceLinks.faq],
        ['PEAK 官方 Discord', sourceLinks.discord],
      ],
    },
    related: [
      ['items', '浏览 PEAK 物品图鉴'],
      ['how-to-play-peak', '复习 PEAK 玩法'],
      ['map-rotation', '查看今天的 PEAK 地图'],
      ['achievements', '规划成就目标'],
    ],
    relatedLabel: '相关 PEAK 指南',
  },

  es: {
    meta: {
      title: 'Guía de multijugador y códigos de sala de PEAK',
      description: 'Aprende a usar los códigos de sala de PEAK, entrar mediante Steam o JOIN GAME, jugar con hasta cuatro personas y entender el estado actual del crossplay.',
      schema: 'Guía de PEAK basada en fuentes oficiales sobre códigos de sala, invitaciones cooperativas, jugadores, crossplay, matchmaking y privacidad del lobby.',
    },
    primaryKeyword: 'códigos de sala de PEAK',
    eyebrow: 'Guía de multijugador - cooperativo y códigos de entrada',
    h1: 'Guía de PEAK: multijugador, códigos de sala y juego cooperativo',
    intro: 'PEAK permite invitar a amigos por Steam y entrar a un lobby mediante un código de sala. Aquí explicamos dónde copiarlo, dónde introducirlo, cómo funciona el límite de cuatro jugadores y qué significa el plan oficial de crossplay sin confundirlo con una función ya disponible.',
    answerLabel: 'Respuesta breve',
    answer: 'PEAK sí tiene códigos de sala. El anfitrión abre el menú de pausa dentro del lobby y copia el código; la persona que se une lo introduce en JOIN GAME desde el menú principal. Las invitaciones de Steam siguen funcionando, el límite es de cuatro jugadores y también existe el modo individual sin conexión. La versión jugable documentada aquí es Steam/PC, mientras Landfall prepara el soporte para consolas y el juego cruzado. No hay matchmaking aleatorio.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas sobre multijugador',
    heroImage: media('/media/peak-coop-climb.webp', 'Compañeros de PEAK coordinan una escalada cooperativa en una ruta empinada', 'Captura oficial de Steam: entrar al lobby es solo el comienzo de una ruta compartida.'),
    sections: [
      {
        title: 'Cómo funcionan los códigos de sala de PEAK',
        paragraphs: [
          'Patch 2.04.a añadió los códigos de sala a PEAK. El anuncio oficial explica que dentro de un lobby aparece un código en el menú de pausa, desde donde se puede copiar y enviar a los amigos. También existe una opción para ocultarlo cuando se transmite o se muestra el lobby en público.',
          'El flujo tiene dos lados. El anfitrión abre la pausa, copia el código y lo comparte por un canal privado; la otra persona vuelve al menú principal, elige JOIN GAME e introduce el código recibido. Si la partida es para un grupo concreto, no publiques el código en un canal abierto.',
          'El anuncio presenta los códigos como preparación para el juego cruzado cuando salgan las versiones de consola. Sirven para entrar directamente en un lobby existente; no son una cola pública ni un sistema que busque desconocidos automáticamente. Las invitaciones de Steam siguen disponibles.',
        ],
        bullets: [
          ['Anfitrión', 'Copia el código desde el menú de pausa y envíalo a los jugadores previstos.'],
          ['Jugador que entra', 'Selecciona JOIN GAME en el menú principal e introduce el código.'],
          ['Privacidad', 'Oculta el código desde el juego si el lobby aparece en una transmisión.'],
        ],
      },
      {
        title: 'Cómo unirse a una partida cooperativa de PEAK',
        paragraphs: [
          'La descripción oficial de Steam presenta el multijugador de PEAK como una experiencia entre amigos: puedes invitar hasta a otros tres scouts por Steam o jugar en solitario. La actualización 2.04.a añadió los códigos sin retirar la invitación existente, así que usa el acceso que tu grupo haya acordado.',
          'Si recibes una invitación de Steam, acéptala allí y sigue el aviso actual del juego. Si recibes un código, abre JOIN GAME en el menú principal. Los nombres y la disposición de los menús pueden cambiar; la pantalla de tu versión es la referencia final, no una captura antigua.',
          'El código evita buscar un lobby público, pero no decide el plan de la escalada. Tras entrar, confirma quién es el anfitrión y consulta el ' + articleLink('map-rotation#today-map', 'mapa diario de PEAK') + '. Para el ciclo básico, revisa' + articleLink('how-to-play-peak', ' cómo jugar a PEAK') + '.',
        ],
        image: media('/media/peak-climb-ridge.webp', 'Jugadores de PEAK avanzan juntos por una cresta estrecha', 'Contexto de ruta: entrar en el lobby es solo el primer paso de la coordinación.'),
        bullets: [
          ['Elige un anfitrión', 'Aclara qué lobby se va a usar antes de enviar invitaciones o códigos.'],
          ['Sigue las etiquetas actuales', 'Usa la interfaz de la versión instalada para confirmar el flujo.'],
          ['Planifica después de entrar', 'Acordad la ruta y el primer objetivo antes de salir del campamento.'],
        ],
      },
      {
        title: '¿Cuántas personas pueden jugar a PEAK juntas?',
        paragraphs: [
          'La página oficial de Steam dice que se puede invitar a hasta otros tres scouts. En términos de grupo, es un anfitrión más tres jugadores, cuatro personas en total. Los grupos pequeños también pueden iniciar una escalada sin esperar a llenar todos los lugares.',
          'La FAQ oficial de Landfall confirma que el modo individual está disponible sin conexión. Una partida en solitario no es un lobby incompleto, sino una forma de juego admitida. El límite de jugadores y la compatibilidad entre plataformas son preguntas distintas.',
          'Antes de invitar, decide quién aloja y qué canal usaréis. Después de que todos entren, concentraos en el siguiente descanso seguro y no en llenar el grupo por llenar.',
        ],
        bullets: [
          ['Máximo de cuatro', 'Un anfitrión y hasta tres scouts adicionales.'],
          ['No hace falta llenar la sala', 'Puedes jugar con menos personas.'],
          ['También hay modo individual', 'La FAQ oficial indica que se puede jugar offline en solitario.'],
        ],
      },
      {
        title: 'Crossplay en PEAK: estado actual y plan oficial',
        paragraphs: [
          'Hay que separar la plataforma disponible hoy del objetivo anunciado. La versión jugable documentada en esta guía es la de Steam/PC. La FAQ de Landfall dice que el equipo está trabajando para llevar PEAK a consolas y que el juego será multiplataforma, con más noticias previstas para este año.',
          'Patch 2.04.a explica que los códigos de sala preparan esa futura conexión entre plataformas cuando salgan los ports de consola. Es una finalidad anunciada, no una confirmación de que una sesión mixta de PC y consola ya esté abierta.',
          'Para una partida actual, organiza el grupo con amigos de Steam o con el código de sala. Si vas a prometer crossplay, vuelve a comprobar los anuncios oficiales antes de organizarla. No lo describas como imposible para siempre ni como una función ya activa.',
        ],
        image: media('/media/peak-map-route.webp', 'Vista de una ruta de PEAK mientras el grupo se prepara para el siguiente tramo', 'Contexto de ruta: el estado de la plataforma y el mapa activo son comprobaciones separadas.'),
        bullets: [
          ['Sesión actual', 'Considera Steam/PC como la plataforma jugable documentada aquí.'],
          ['Plan oficial', 'Las consolas y el crossplay están descritos como trabajo en curso.'],
          ['No prometas de más', 'Comprueba los anuncios actuales antes de preparar una sala mixta.'],
        ],
      },
      {
        title: 'Matchmaking, amigos de Steam y cómo encontrar equipo',
        paragraphs: [
          'Un código de sala no es matchmaking. La FAQ de Landfall dice que PEAK no tiene matchmaking y que funciona con amigos de Steam. El código identifica una sala que alguien ya está alojando; no crea una cola pública ni selecciona compañeros al azar.',
          'Si ya conoces a los jugadores, usa sus perfiles de Steam y la invitación o el código del anfitrión. Si buscas compañeros, la FAQ oficial remite al Discord del desarrollador. Ese Discord sirve como punto de encuentro de la comunidad, no como una función automática dentro del juego.',
          'Cuando el grupo esté formado, fijad un anfitrión, un método de entrada y un canal de comunicación. El ' + articleLink('items', 'catálogo de objetos de PEAK') + ' ayuda a usar nombres coherentes, y la ' + articleLink('achievements', 'guía de logros') + ' sirve si la partida también tiene un objetivo de progreso.',
        ],
        bullets: [
          ['Grupo conocido', 'Usa amigos de Steam y la invitación o el código del anfitrión.'],
          ['Faltan compañeros', 'Usa el Discord oficial como comunidad para encontrarlos.'],
          ['Antes de empezar', 'Acordad anfitrión, entrada, ruta y comunicación.'],
        ],
      },
      {
        title: 'Cómo impedir que entren desconocidos en tu lobby',
        paragraphs: [
          'La FAQ de Landfall incluye una respuesta específica para el caso de que un jugador aleatorio entre sin invitación. Sus pasos son poner Lobby Mode en Invite Only, hacer privado el perfil de Steam y crear el lobby de nuevo después de cambiar esos ajustes.',
          'El anfitrión puede expulsar a quien ya esté dentro. La misma FAQ indica que una persona expulsada no puede volver a unirse a la partida de ese anfitrión. Es una medida de privacidad del lobby, no un ajuste de matchmaking.',
          'Si la sala es privada, revisa los ajustes antes de compartir el código y envíalo solo al grupo. Si apareció en una transmisión o publicación pública, ocúltalo y crea un lobby nuevo en lugar de suponer que el código antiguo sigue siendo privado.',
        ],
        image: media('/media/peak-coop-climb.webp', 'Compañeros de PEAK se reúnen en una zona segura antes de continuar la escalada', 'Captura oficial de Steam: un lobby controlado facilita la coordinación antes de salir.'),
        bullets: [
          ['Activa Invite Only', 'Cambia Lobby Mode siguiendo la FAQ oficial.'],
          ['Revisa Steam', 'Pon el perfil de Steam en Private.'],
          ['Vuelve a crear la sala', 'Reabre el lobby después de cambiar los ajustes.'],
          ['Expulsa al intruso', 'El anfitrión puede expulsarlo y no podrá volver a esa partida.'],
        ],
      },
      {
        title: 'Solución de problemas según la FAQ oficial',
        paragraphs: [
          'Si falla una invitación o un código, usa la lista actual de la FAQ de Landfall. Incluye comprobar el mantenimiento de Steam, verificar los archivos del juego, revisar las exclusiones del firewall o antivirus, comprobar cuestiones relacionadas con VPN y cFosSpeed, y descartar problemas de mods o instalación.',
          'No significa que todos los fallos tengan la misma causa. Sigue el punto que corresponda y vuelve a probar la invitación de Steam o JOIN GAME. Si no se aclara, lleva a Discord o a la comunidad de Steam el sistema, el método de entrada y el mensaje visible, en vez de inventar una solución específica de PEAK.',
          'Al pedir ayuda, indica si se usó una invitación o un código, si el jugador llegó a JOIN GAME, si el lobby era Invite Only y qué texto apareció. Esa información separa un problema de privacidad de uno de conexión o de plataforma.',
        ],
        bullets: [
          ['Empieza por la FAQ', 'Usa su sección actual sobre conexión y Photon.'],
          ['Anota el método', 'Indica si fue una invitación de Steam o un código en JOIN GAME.'],
          ['Conserva el mensaje', 'Incluye plataforma, ajustes del lobby y texto exacto.'],
        ],
      },
      {
        title: 'Checklist para jugar PEAK en cooperativo',
        paragraphs: [
          'Antes de iniciar, elegid un anfitrión y decidid si entraréis por invitación de Steam o por código. Si usáis código, copiadlo desde el menú de pausa y compartidlo en privado. Si queréis cerrar la sala, activad Invite Only y revisad la privacidad de Steam antes de volver a alojarla.',
          'Cuando todos estén dentro, consulta el ' + articleLink('map-rotation#today-map', 'mapa de PEAK de hoy') + ' y prepara un plan corto para el primer tramo. Usa el ' + articleLink('items', 'catálogo de objetos') + ' para los nombres del equipo, y la ' + articleLink('achievements', 'guía de logros') + ' si el grupo persigue un logro de Steam.',
          'Mantén separado el proceso de entrar y el de escalar. Introducir correctamente un código solo demuestra que el jugador llegó al lobby; no demuestra que la ruta sea segura ni que el equipo haya decidido quién explora, quién guarda la recuperación o cuándo dejar de avanzar.',
        ],
        bullets: [
          ['1. Elegid anfitrión', 'Definid una sala y un canal de comunicación.'],
          ['2. Elegid la entrada', 'Usad una invitación de Steam o compartid el código en privado.'],
          ['3. Proteged la sala', 'Usad Invite Only y la privacidad de Steam cuando haga falta.'],
          ['4. Preparad la ruta', 'Consultad el mapa diario, nombrad el equipo y acordad el primer objetivo seguro.'],
        ],
      },
      {
        title: 'Siguiente paso para una mejor partida cooperativa',
        paragraphs: [
          'Cuando el grupo ya pueda entrar sin problemas, centraos en la ruta. Lee' + articleLink('how-to-play-peak', ' cómo jugar a PEAK') + ', consulta el ' + articleLink('map-rotation#today-map', 'mapa de hoy') + ', usa el ' + articleLink('items', 'catálogo de objetos') + ' para hablar del equipo y continúa con la ' + articleLink('achievements', 'guía de logros') + ' si buscas progreso en Steam.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'Preguntas sobre multijugador y códigos de sala de PEAK',
      items: [
        ['¿PEAK tiene códigos de sala?', 'Sí. Patch 2.04.a añadió los códigos. El anfitrión lo copia desde el menú de pausa del lobby y la otra persona lo introduce en JOIN GAME.'],
        ['¿Cómo funcionan los códigos de sala de PEAK?', 'El anfitrión comparte el código del lobby y los jugadores lo introducen en JOIN GAME. El código lleva a una sala existente; no es una cola de matchmaking aleatorio.'],
        ['¿PEAK tiene crossplay?', 'La versión jugable documentada actualmente es Steam/PC. Landfall está trabajando en consolas y dice que PEAK será multiplataforma, así que el crossplay debe tratarse como una función planificada, no como una sesión mixta ya activa.'],
        ['¿Cuántas personas pueden jugar juntas?', 'La descripción oficial permite un anfitrión y hasta otros tres scouts, cuatro jugadores en total. También existe el modo individual offline.'],
        ['¿PEAK tiene matchmaking?', 'No. La FAQ de Landfall lo describe como Steam-friends only y sin matchmaking. Puedes usar amigos de Steam, códigos de sala o el Discord oficial.'],
        ['¿Cómo evito que entren desconocidos en mi lobby?', 'Pon Lobby Mode en Invite Only, configura el perfil de Steam como Private y crea la sala otra vez. El anfitrión puede expulsar a un jugador, que no podrá volver a esa partida.'],
      ],
    },
    source: {
      eyebrow: 'Fuentes oficiales y límites de estado',
      title: 'Qué confirma esta guía de multijugador',
      body: 'El comportamiento de los códigos, la entrada JOIN GAME, su finalidad futura para el crossplay y la continuidad de las invitaciones de Steam proceden del anuncio oficial Patch 2.04.a. La cifra de jugadores y los modos online/offline proceden de la página oficial de Steam. La FAQ de Landfall aporta el estado del matchmaking, el plan de plataformas, Discord, la privacidad del lobby y la solución de problemas. Comprueba las páginas oficiales antes de organizar una partida entre plataformas.',
      links: [
        ['Página oficial de PEAK en Steam', sourceLinks.steam],
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch204],
        ['FAQ oficial de PEAK de Landfall', sourceLinks.faq],
        ['Discord oficial de PEAK', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'Ver el catálogo de objetos de PEAK'],
      ['how-to-play-peak', 'Repasar cómo jugar a PEAK'],
      ['map-rotation', 'Consultar el mapa de hoy'],
      ['achievements', 'Planificar logros'],
    ],
    relatedLabel: 'Guías relacionadas de PEAK',
  },

  ja: {
    meta: {
      title: 'PEAK マルチプレイ・ルームコードガイド：協力プレイと参加方法',
      description: 'PEAKのルームコードを使う方法、Steam招待やJOIN GAMEで参加する手順、最大人数、現在のクロスプレイ計画を確認できます。',
      schema: '公式情報をもとに、PEAKのルームコード、協力プレイ、人数、クロスプレイ計画、マッチメイキング、ロビー設定を整理したガイドです。',
    },
    primaryKeyword: 'PEAK ルームコード',
    eyebrow: 'マルチプレイガイド - 協力プレイと参加コード',
    h1: 'PEAK マルチプレイ・ルームコードガイド：協力プレイと参加方法',
    intro: 'PEAKではSteamのフレンド招待に加えて、ルームコードでロビーに参加できます。コードをコピーする場所、入力する場所、4人までの人数制限、現在のSteam/PC対応と将来のクロスプレイ計画を、混同しないように説明します。',
    answerLabel: '短い答え',
    answer: 'PEAKにはルームコードがあります。ホストはロビーのポーズメニューからコードをコピーし、参加する側はメインメニューのJOIN GAMEで入力します。Steam招待も引き続き使え、ホストと最大3人のスカウトで合計4人まで遊べます。現在確認できるプレイ環境はSteam/PCで、コンソール対応とクロスプレイは開発中です。ランダムマッチングはなく、オフラインのソロプレイにも対応しています。',
    tocLabel: 'このページ',
    tocFaq: 'マルチプレイ FAQ',
    heroImage: media('/media/peak-coop-climb.webp', '急な島のルートを協力して登るPEAKの仲間たち', 'Steam公式スクリーンショット: ロビーに入った後も、ルートを共有して進む必要があります。'),
    sections: [
      {
        title: 'PEAKのルームコードの使い方',
        paragraphs: [
          'Patch 2.04.aでPEAKにルームコードが追加されました。公式告知によると、ロビー内のポーズメニューにコードが表示され、コピーしてフレンドへ送れます。配信などでコードを画面に出したくない場合は、コードを隠す設定も利用できます。',
          '手順はホストと参加者に分かれます。ホストはポーズメニューを開いてコードをコピーし、個別の連絡手段で共有します。参加者はメインメニューのJOIN GAMEを開き、受け取ったコードを入力します。特定のメンバーだけで遊ぶ場合、コードを公開チャンネルに貼らないでください。',
          '公式告知では、ルームコードは将来コンソール版が出た後のクロスプレイに備えた仕組みとして説明されています。公開キューで知らない人を探す機能ではなく、すでに作られたロビーへ直接入るためのコードです。Steamの招待方法も残っています。',
        ],
        bullets: [
          ['ホスト', 'ロビーのポーズメニューからコードをコピーし、参加者へ送ります。'],
          ['参加者', 'メインメニューでJOIN GAMEを選び、コードを入力します。'],
          ['公開時の配慮', '配信や共有画面では、ゲーム内設定でコードを隠せます。'],
        ],
      },
      {
        title: 'PEAKの協力プレイに参加する方法',
        paragraphs: [
          'Steam公式ページでは、PEAKのマルチプレイをフレンド向けとして案内しています。Steam経由で最大3人のスカウトを招待することも、ひとりで遊ぶこともできます。2.04.aでコードが追加されても、従来の招待方法は使えます。',
          'Steam招待を受け取った場合はSteam側で承認し、現在のゲーム表示に従ってください。コードを受け取った場合は、メインメニューからJOIN GAMEを開きます。メニューの配置は更新で変わる可能性があるため、古い画像より実際の画面を優先します。',
          'コードで参加した後は、ホストと次の行動を確認してください。出発前に' + articleLink('map-rotation#today-map', '今日のPEAKマップ') + 'を確認し、基本ループが不安なら' + articleLink('how-to-play-peak', 'PEAKの遊び方') + 'も参照できます。',
        ],
        image: media('/media/peak-climb-ridge.webp', '狭い尾根を一緒に進むPEAKのプレイヤーたち', 'ルートの例: ロビーへの参加は、協力して登るための最初の手順です。'),
        bullets: [
          ['ホストを決める', '招待やコードを送る前に、どのロビーへ入るか確認します。'],
          ['表示を確認する', '参加入口は現在のバージョンの画面で確認します。'],
          ['参加後に計画する', 'キャンプを出る前にルートと最初の目標を決めます。'],
        ],
      },
      {
        title: 'PEAKは何人で遊べますか？',
        paragraphs: [
          'Steam公式ページには、他のスカウトを最大3人招待できるとあります。ホスト1人と他のプレイヤー3人で、協力プレイは合計4人です。4人そろっていなくても、少人数で開始できます。',
          'Landfallの公式FAQは、シングルプレイをオフラインで遊べると説明しています。ソロは未完成のロビーではなく、正式に用意された遊び方です。人数制限と、異なるプラットフォームを接続できるかは別の話として確認してください。',
          '招待する前にホストと連絡手段を決め、Steam招待かルームコードかを選びます。全員が入ったら、人数を増やすことより次の安全な休憩地点に意識を向けましょう。',
        ],
        bullets: [
          ['最大4人', 'ホスト1人と、最大3人のスカウトです。'],
          ['少人数でも可能', '満員になるまで待つ必要はありません。'],
          ['ソロ対応', '公式FAQはオフラインのシングルプレイを案内しています。'],
        ],
      },
      {
        title: 'PEAKのクロスプレイ：現在の状態と計画',
        paragraphs: [
          '現在遊べる環境と、公式が目指している状態は分けて考えます。このページで確認できるプレイ環境はSteam/PCです。Landfallの公式FAQは、コンソール版の開発を進めており、PEAKはクロスプラットフォームになると説明しています。',
          'Patch 2.04.aは、コンソール版が出た後にクロスプレイを行うための仕組みとしてルームコードを説明しています。これは将来の用途を示すもので、今すぐPCとコンソールを混在させたプレイが利用できるという告知ではありません。',
          '現在のPCプレイではSteamのフレンド招待またはルームコードを使い、混成プラットフォームの予定を立てる前には公式の最新告知を確認してください。「永続的に非対応」や「すでに対応済み」と断定しないことが大切です。',
        ],
        image: media('/media/peak-map-route.webp', '変化する地形の次の区間を確認するPEAKのルート画面', 'ルートの例: プラットフォームの対応状況と当日のマップは別々に確認します。'),
        bullets: [
          ['現在のプレイ', 'このガイドでは、現在確認できる環境をSteam/PCとして扱います。'],
          ['公式の計画', 'コンソール版とクロスプレイは開発中の計画です。'],
          ['先走らない', '混成プレイを組む前に公式告知を再確認します。'],
        ],
      },
      {
        title: 'マッチング、Steamフレンド、仲間の探し方',
        paragraphs: [
          'ルームコードはマッチメイキングではありません。LandfallのFAQは、PEAKにマッチメイキングはなく、Steamのフレンド向けだと説明しています。コードは誰かが作ったロビーを指定するもので、公開キューや自動の仲間探しではありません。',
          '一緒に遊ぶ相手が決まっているなら、Steamフレンドとホストの招待またはコードを使います。仲間を探す場合は、公式FAQが開発元のDiscordを案内しています。Discordはコミュニティで相手を探す場所であり、ゲーム内の自動マッチング機能ではありません。',
          'メンバーが集まったら、ホスト、参加方法、連絡手段を決めます。装備名をそろえるには' + articleLink('items', 'PEAKアイテム図鑑') + 'を、実績目的がある場合は' + articleLink('achievements', '実績ガイド') + 'を確認できます。',
        ],
        bullets: [
          ['知り合いと遊ぶ', 'Steamフレンドとホストの招待またはルームコードを使います。'],
          ['仲間を探す', '公式Discordをコミュニティの連絡先として利用します。'],
          ['開始前に確認', 'ホスト、参加方法、ルート、連絡手段を決めます。'],
        ],
      },
      {
        title: '知らない人がロビーに入るのを防ぐ方法',
        paragraphs: [
          'LandfallのFAQには、招待していないランダムプレイヤーがロビーに入った場合の項目があります。公式の手順は、Lobby ModeをInvite Onlyにし、SteamプロフィールをPrivateに変更してから、設定変更後にロビーを作り直すことです。',
          'すでに入っているプレイヤーはホストがキックできます。FAQによると、キックされたプレイヤーはそのホストのゲームに再参加できません。これはロビーの公開範囲を制御する手順であり、マッチメイキングの設定ではありません。',
          '身内で遊ぶ場合は、コードを共有する前に設定を確認してください。配信や公開投稿にコードが出た場合は、コードを隠して新しいロビーを作り、古いコードが再び非公開になると考えないようにします。',
        ],
        image: media('/media/peak-coop-climb.webp', '安全な場所に集まり次の登り方を相談するPEAKの仲間たち', 'Steam公式スクリーンショット: 予測できるロビー環境は、出発前の連携を助けます。'),
        bullets: [
          ['Invite Onlyにする', '公式FAQに沿ってLobby Modeを変更します。'],
          ['Steamの公開範囲を確認', 'プロフィールをPrivateにします。'],
          ['ロビーを作り直す', '設定を変えた後に新しいロビーを作ります。'],
          ['侵入者を外す', 'ホストはキックでき、キックされた人は再参加できません。'],
        ],
      },
      {
        title: '公式FAQに沿った接続トラブルの確認',
        paragraphs: [
          '招待やルームコードで参加できない場合は、Landfallの公式FAQにある現在の確認項目を使います。Steamのメンテナンス、ゲームファイルの整合性確認、ファイアウォールやウイルス対策ソフトの除外、VPNやcFosSpeed、MODやインストール状態などが挙げられています。',
          'すべての失敗に同じ原因があるという意味ではありません。状況に合う項目を確認してから、Steam招待またはJOIN GAMEをもう一度試してください。原因が分からない場合は、使用環境、参加方法、画面の表示を公式DiscordやSteamコミュニティで共有し、独自の対処法を公式情報のように書かないようにします。',
          '相談時は、Steam招待かコードか、JOIN GAMEまで進めたか、Lobby ModeがInvite Onlyか、どの表示が出たかを記録すると、ロビー設定と接続・プラットフォームの問題を分けやすくなります。',
        ],
        bullets: [
          ['公式FAQから始める', '接続とPhotonに関する現在の項目を確認します。'],
          ['参加方法を記録する', 'Steam招待かJOIN GAMEのコード入力かを書きます。'],
          ['表示を残す', 'プラットフォーム、ロビー設定、画面の文言を共有します。'],
        ],
      },
      {
        title: 'PEAK協力プレイの準備チェックリスト',
        paragraphs: [
          'ホストが開始する前に、誰がホストか、Steam招待とルームコードのどちらを使うかを決めます。コードを使うならポーズメニューからコピーして個別に共有します。公開範囲を抑える場合はInvite OnlyとSteamのプライバシー設定を確認してから作り直します。',
          '全員が入ったら、' + articleLink('map-rotation#today-map', '今日のPEAKマップ') + 'を確認し、最初の区間について短い計画を立てます。装備名は' + articleLink('items', 'アイテム図鑑') + 'でそろえ、Steam実績を狙う場合は' + articleLink('achievements', '実績ガイド') + 'を見ておきます。',
          'ロビーへ入ることと、登り始めることは別に考えます。コード入力に成功しても、ルートの安全性や、誰が偵察・回復を担当するか、どこで引き返すかまでは決まりません。',
        ],
        bullets: [
          ['1. ホストを決める', 'ロビーと連絡手段を一つにそろえます。'],
          ['2. 参加方法を決める', 'Steam招待か、個別共有したルームコードを使います。'],
          ['3. ロビーを守る', '必要ならInvite OnlyとSteamの設定を使います。'],
          ['4. ルートを計画する', '日替わりマップ、装備名、最初の安全な目標を確認します。'],
        ],
      },
      {
        title: '次に読む：協力プレイを安定させる',
        paragraphs: [
          '参加が安定したら、次はルートの連携です。' + articleLink('how-to-play-peak', 'PEAKの遊び方') + 'で基本ループを確認し、出発前に' + articleLink('map-rotation#today-map', '今日のマップ') + 'を見て、装備名は' + articleLink('items', 'アイテム図鑑') + 'で共有しましょう。実績を目標にする場合は' + articleLink('achievements', '実績ガイド') + 'も続けて確認できます。',
        ],
      },
    ],
    faq: {
      eyebrow: 'すぐ分かる答え',
      title: 'PEAKマルチプレイ・ルームコード FAQ',
      items: [
        ['PEAKにルームコードはありますか？', 'あります。Patch 2.04.aで追加され、ホストはロビーのポーズメニューからコピーし、参加者はメインメニューのJOIN GAMEで入力します。'],
        ['PEAKのルームコードはどう使いますか？', 'ホストがロビーのコードを共有し、参加者がJOIN GAMEで入力します。ランダムマッチングの待機列ではありません。'],
        ['PEAKはクロスプレイに対応していますか？', '現在確認できるプレイ環境はSteam/PCです。Landfallはコンソール対応を進め、PEAKはクロスプラットフォームになると説明しているため、クロスプレイは計画中の機能として扱います。'],
        ['PEAKは何人で遊べますか？', '公式説明ではホストと最大3人のスカウト、合計4人です。オフラインのソロプレイにも対応しています。'],
        ['PEAKにマッチメイキングはありますか？', 'ありません。公式FAQはSteamのフレンド向けで、マッチメイキングなしと説明しています。Steamフレンド、ルームコード、公式Discordを使って仲間を集めます。'],
        ['知らない人がロビーに入るのを防ぐには？', 'Lobby ModeをInvite Onlyにし、SteamプロフィールをPrivateにしてからロビーを作り直します。ホストはプレイヤーをキックでき、キックされた人は再参加できません。'],
      ],
    },
    source: {
      eyebrow: '公式情報と現在の範囲',
      title: 'このマルチプレイガイドで確認できること',
      body: 'ルームコードの動作、JOIN GAMEの入口、将来のクロスプレイ用途、Steam招待の継続はPatch 2.04.aの公式告知に基づきます。人数とオンライン・オフラインのプレイ形態は公式Steamページ、マッチメイキング、プラットフォーム計画、Discord、ロビーの公開設定、接続確認はLandfallのFAQに基づきます。混成プラットフォームで遊ぶ前には公式ページを再確認してください。',
      links: [
        ['PEAK Steam公式ページ', sourceLinks.steam],
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch204],
        ['Landfall公式PEAK FAQ', sourceLinks.faq],
        ['PEAK公式Discord', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'PEAKアイテム図鑑を見る'],
      ['how-to-play-peak', 'PEAKの遊び方を確認'],
      ['map-rotation', '今日のPEAKマップを見る'],
      ['achievements', '実績の目標を立てる'],
    ],
    relatedLabel: '関連するPEAKガイド',
  },

  fr: {
    meta: {
      title: 'Guide multijoueur et codes de salle PEAK : coop et accès',
      description: 'Découvrez les codes de salle de PEAK, l’accès par Steam ou JOIN GAME, le nombre de joueurs et l’état actuel du crossplay.',
      schema: 'Guide PEAK fondé sur les sources officielles pour les codes de salle, les invitations coopératives, les joueurs, le crossplay, le matchmaking et la confidentialité du salon.',
    },
    primaryKeyword: 'codes de salle PEAK',
    eyebrow: 'Guide multijoueur - coop et codes de connexion',
    h1: 'Guide PEAK : multijoueur, codes de salle et coopération',
    intro: 'PEAK permet d’inviter des amis via Steam et de rejoindre un salon avec un code de salle. Ce guide indique où copier le code, où le saisir, comment fonctionne la limite de quatre joueurs et comment distinguer l’état actuel sur Steam/PC du projet officiel de crossplay.',
    answerLabel: 'Réponse courte',
    answer: 'PEAK possède bien des codes de salle. L’hôte ouvre le menu pause dans le salon et copie le code ; le joueur entrant le saisit dans JOIN GAME depuis le menu principal. Les invitations Steam restent disponibles, avec un hôte et jusqu’à trois autres scouts, soit quatre joueurs. La version jouable documentée ici est Steam/PC ; Landfall prépare les consoles et le jeu multiplateforme. Il n’y a pas de matchmaking aléatoire et le mode solo hors ligne existe.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ multijoueur',
    heroImage: media('/media/peak-coop-climb.webp', 'Des équipiers de PEAK coordonnent une ascension coopérative sur une route escarpée', 'Capture d’écran officielle Steam : rejoindre le salon n’est que le début d’une route partagée.'),
    sections: [
      {
        title: 'Comment fonctionnent les codes de salle de PEAK',
        paragraphs: [
          'Le Patch 2.04.a a ajouté les codes de salle à PEAK. L’annonce officielle indique qu’un code apparaît dans le menu pause d’un salon et peut être copié puis envoyé aux amis. Une option permet aussi de le masquer lors d’un stream ou d’un affichage public.',
          'Le parcours comporte deux rôles. L’hôte ouvre la pause, copie le code et le partage par un moyen privé ; le joueur entrant revient au menu principal, choisit JOIN GAME et saisit le code reçu. Si le salon est réservé à un groupe précis, ne publiez pas le code dans un canal ouvert.',
          'L’annonce présente les codes comme une préparation au crossplay lorsque les versions console seront disponibles. Ils désignent un salon déjà hébergé ; ils ne forment pas une file publique et ne recherchent pas automatiquement des inconnus. Les invitations Steam continuent de fonctionner.',
        ],
        bullets: [
          ['Hôte', 'Copiez le code depuis le menu pause et envoyez-le aux joueurs prévus.'],
          ['Joueur entrant', 'Choisissez JOIN GAME dans le menu principal et saisissez le code.'],
          ['Confidentialité', 'Masquez le code dans le jeu si le salon est visible en direct.'],
        ],
      },
      {
        title: 'Comment rejoindre une partie coopérative de PEAK',
        paragraphs: [
          'La description officielle Steam présente le multijoueur de PEAK comme un jeu entre amis : vous pouvez inviter jusqu’à trois autres scouts via Steam ou jouer seul. L’ajout des codes en 2.04.a n’a pas supprimé le parcours d’invitation existant ; utilisez donc celui que votre groupe a choisi.',
          'Si vous recevez une invitation Steam, acceptez-la dans Steam et suivez l’indication actuelle du jeu. Si vous recevez un code, ouvrez JOIN GAME depuis le menu principal. Les libellés peuvent évoluer ; l’interface de votre version actuelle passe avant une ancienne capture.',
          'Une fois dans le salon, confirmez l’hôte et la prochaine décision de route. Consultez la' + articleLink('map-rotation#today-map', ' carte quotidienne de PEAK') + 'avant de partir et relisez' + articleLink('how-to-play-peak', ' le guide pour jouer à PEAK') + 'si la boucle de base n’est pas encore claire.',
        ],
        image: media('/media/peak-climb-ridge.webp', 'Des joueurs de PEAK avancent ensemble sur une crête étroite', 'Contexte de route : entrer dans le salon est la première étape de la coordination.'),
        bullets: [
          ['Choisissez un hôte', 'Définissez le salon avant d’envoyer une invitation ou un code.'],
          ['Suivez les libellés actuels', 'Vérifiez le parcours dans la version en cours.'],
          ['Planifiez après l’entrée', 'Accordez-vous sur la route et le premier objectif avant le départ.'],
        ],
      },
      {
        title: 'Combien de joueurs peuvent jouer à PEAK ?',
        paragraphs: [
          'La page Steam officielle indique qu’il est possible d’inviter jusqu’à trois autres scouts. Cela correspond à un hôte et trois autres joueurs, soit quatre personnes au total. Un groupe plus petit peut commencer sans attendre de remplir le salon.',
          'La FAQ officielle de Landfall confirme que le mode solo est disponible hors ligne. Une partie solo est donc un mode prévu, pas un salon multijoueur incomplet. La limite de joueurs et la compatibilité entre plateformes sont deux sujets distincts.',
          'Avant d’inviter, définissez l’hôte et le canal de communication, puis choisissez l’invitation Steam ou le code de salle. Une fois réunis, concentrez-vous sur le prochain repos sûr plutôt que sur la taille du groupe.',
        ],
        bullets: [
          ['Maximum de quatre', 'Un hôte et jusqu’à trois autres scouts.'],
          ['Les petits groupes fonctionnent', 'Il n’est pas nécessaire d’être quatre pour partir.'],
          ['Le solo est disponible', 'La FAQ officielle indique que le solo peut se jouer hors ligne.'],
        ],
      },
      {
        title: 'Crossplay dans PEAK : état actuel et projet officiel',
        paragraphs: [
          'Il faut séparer la plateforme jouable aujourd’hui de l’objectif annoncé. La version documentée ici est celle de Steam/PC. La FAQ officielle de Landfall indique que l’équipe travaille sur les consoles et que PEAK sera multiplateforme, avec davantage d’informations prévues plus tard cette année.',
          'Le Patch 2.04.a explique que les codes préparent cette future connexion entre plateformes lorsque les ports console seront disponibles. Cela décrit leur objectif, mais ne confirme pas qu’une partie PC-console mixte est déjà ouverte.',
          'Pour une partie actuelle, utilisez les amis Steam ou le code de salle. Avant d’organiser une session entre plateformes, vérifiez les annonces officielles récentes. Ne présentez pas le crossplay comme impossible pour toujours, ni comme déjà actif.',
        ],
        image: media('/media/peak-map-route.webp', 'Vue d’une route de PEAK où l’équipe prépare le prochain passage', 'Contexte de route : l’état des plateformes et la carte active sont deux vérifications séparées.'),
        bullets: [
          ['Partie actuelle', 'Considérez Steam/PC comme la plateforme jouable documentée ici.'],
          ['Projet officiel', 'Les consoles et le crossplay sont présentés comme un travail en cours.'],
          ['Évitez les promesses', 'Vérifiez les annonces avant de prévoir un salon mixte.'],
        ],
      },
      {
        title: 'Matchmaking, amis Steam et recherche d’équipiers',
        paragraphs: [
          'Un code de salle n’est pas un matchmaking. La FAQ de Landfall indique que PEAK n’a pas de matchmaking et fonctionne avec les amis Steam. Le code désigne un salon déjà hébergé ; il ne crée pas une file publique et ne choisit pas des coéquipiers au hasard.',
          'Si vous connaissez déjà les joueurs, utilisez les amis Steam et l’invitation ou le code de l’hôte. Pour trouver des équipiers, la FAQ officielle renvoie vers le Discord du développeur. Ce Discord est un point de rencontre communautaire, pas une fonction de matchmaking intégrée.',
          'Quand le groupe est prêt, définissez l’hôte, la méthode d’entrée et le canal de communication. Le' + articleLink('items', 'catalogue des objets de PEAK') + 'aide à garder les noms cohérents, et le' + articleLink('achievements', 'guide des succès') + 'est utile si la partie vise aussi une progression de plateforme.',
        ],
        bullets: [
          ['Groupe connu', 'Utilisez les amis Steam et l’invitation ou le code de l’hôte.'],
          ['Besoin d’équipiers', 'Utilisez le Discord officiel comme point de rencontre.'],
          ['Avant le départ', 'Accordez-vous sur l’hôte, l’entrée, la route et la communication.'],
        ],
      },
      {
        title: 'Empêcher des inconnus de rejoindre votre salon',
        paragraphs: [
          'La FAQ de Landfall donne une réponse précise lorsqu’un joueur aléatoire rejoint un salon sans invitation. Les étapes officielles sont de régler Lobby Mode sur Invite Only, de mettre le profil Steam en Private, puis de recréer le salon après ces changements.',
          'L’hôte peut expulser un joueur déjà présent. La FAQ précise qu’un joueur expulsé ne peut pas rejoindre à nouveau la partie de cet hôte. Il s’agit d’une mesure de confidentialité du salon, pas d’un réglage de matchmaking.',
          'Pour un groupe privé, vérifiez les réglages avant de partager le code et envoyez-le uniquement aux personnes prévues. Si le code a été montré en stream ou dans un post public, masquez-le et créez un nouveau salon au lieu de supposer qu’il est redevenu privé.',
        ],
        image: media('/media/peak-coop-climb.webp', 'Des équipiers de PEAK se regroupent sur une zone sûre avant de poursuivre l’ascension', 'Capture officielle Steam : un salon contrôlé facilite la coordination avant le départ.'),
        bullets: [
          ['Activez Invite Only', 'Modifiez Lobby Mode selon la FAQ officielle.'],
          ['Vérifiez Steam', 'Passez le profil Steam en Private.'],
          ['Recréez le salon', 'Ouvrez un nouveau salon après les changements.'],
          ['Expulsez l’intrus', 'L’hôte peut le retirer, et il ne pourra pas rejoindre cette partie.'],
        ],
      },
      {
        title: 'Dépannage officiel de la connexion',
        paragraphs: [
          'Si une invitation ou un code échoue, utilisez la liste actuelle de la FAQ de Landfall. Elle mentionne notamment la maintenance Steam, la vérification des fichiers du jeu, les exclusions du pare-feu ou de l’antivirus, les contrôles liés au VPN et à cFosSpeed, ainsi que les problèmes de mods ou d’installation.',
          'Cela ne signifie pas que toutes les erreurs ont la même cause. Suivez le point pertinent, puis réessayez l’invitation Steam ou JOIN GAME. Si le problème reste incompris, indiquez la plateforme, la méthode d’entrée et le message visible sur le Discord officiel ou la communauté Steam, sans inventer de correctif propre à PEAK.',
          'Pour obtenir une réponse exploitable, précisez si vous avez utilisé une invitation ou un code, si le joueur a atteint JOIN GAME, si le salon était en Invite Only et quel texte est apparu. Ces détails séparent un problème de salon d’un problème de connexion ou de plateforme.',
        ],
        bullets: [
          ['Commencez par la FAQ', 'Utilisez sa section actuelle sur la connexion et Photon.'],
          ['Notez la méthode', 'Indiquez invitation Steam ou saisie du code dans JOIN GAME.'],
          ['Gardez le message', 'Ajoutez la plateforme, les réglages et le texte exact.'],
        ],
      },
      {
        title: 'Checklist pour jouer à PEAK en coopération',
        paragraphs: [
          'Avant le lancement, choisissez l’hôte et décidez si le groupe utilisera une invitation Steam ou un code. Avec un code, copiez-le dans le menu pause et partagez-le en privé. Pour fermer le salon, activez Invite Only et vérifiez la confidentialité Steam avant de recréer le salon.',
          'Quand tout le monde est présent, consultez la' + articleLink('map-rotation#today-map', ' carte PEAK du jour') + 'et préparez un plan court pour le premier passage. Utilisez le' + articleLink('items', 'catalogue des objets') + 'pour les noms d’équipement, puis le' + articleLink('achievements', 'guide des succès') + 'si la partie vise un succès Steam.',
          'Séparez l’entrée dans le salon et l’ascension. Une saisie de code réussie prouve seulement que le joueur a rejoint le salon ; elle ne prouve ni que la route est sûre ni que l’équipe a choisi qui éclaire, qui garde la récupération et quand s’arrêter.',
        ],
        bullets: [
          ['1. Choisissez l’hôte', 'Définissez un salon et un canal de communication.'],
          ['2. Choisissez l’entrée', 'Utilisez une invitation Steam ou partagez le code en privé.'],
          ['3. Protégez le salon', 'Utilisez Invite Only et les réglages Steam si nécessaire.'],
          ['4. Préparez la route', 'Consultez la carte du jour, nommez l’équipement et fixez le premier objectif sûr.'],
        ],
      },
      {
        title: 'Étape suivante pour une meilleure partie coop',
        paragraphs: [
          'Une fois l’accès stabilisé, passez à la coordination de route. Lisez' + articleLink('how-to-play-peak', ' le guide pour jouer à PEAK') + ', consultez la' + articleLink('map-rotation#today-map', ' carte du jour') + ', utilisez le' + articleLink('items', 'catalogue des objets') + 'pour parler du matériel et continuez avec le' + articleLink('achievements', 'guide des succès') + 'si vous suivez une progression Steam.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ multijoueur et codes de salle PEAK',
      items: [
        ['PEAK a-t-il des codes de salle ?', 'Oui. Le Patch 2.04.a les a ajoutés. L’hôte copie le code dans le menu pause du salon et le joueur entrant le saisit avec JOIN GAME.'],
        ['Comment utiliser les codes de salle de PEAK ?', 'L’hôte partage le code du salon et les joueurs le saisissent dans JOIN GAME. Le code mène à un salon existant ; ce n’est pas une file de matchmaking aléatoire.'],
        ['PEAK propose-t-il le crossplay ?', 'La version jouable documentée actuellement est Steam/PC. Landfall travaille sur les consoles et indique que PEAK sera multiplateforme ; le crossplay doit donc être présenté comme prévu, pas comme déjà actif.'],
        ['Combien de personnes peuvent jouer ensemble ?', 'La description officielle permet un hôte et jusqu’à trois autres scouts, soit quatre joueurs. Le solo hors ligne est aussi disponible.'],
        ['PEAK a-t-il un matchmaking ?', 'Non. La FAQ de Landfall indique que le jeu est réservé aux amis Steam et sans matchmaking. Utilisez les amis Steam, les codes de salle ou le Discord officiel.'],
        ['Comment empêcher des inconnus de rejoindre mon salon ?', 'Réglez Lobby Mode sur Invite Only, passez le profil Steam en Private et recréez le salon. L’hôte peut expulser un joueur, qui ne pourra pas rejoindre cette partie.'],
      ],
    },
    source: {
      eyebrow: 'Sources officielles et limites de statut',
      title: 'Ce que ce guide multijoueur peut confirmer',
      body: 'Le fonctionnement des codes, l’entrée JOIN GAME, leur objectif futur pour le crossplay et la continuité des invitations Steam viennent de l’annonce officielle Patch 2.04.a. Le nombre de joueurs et les modes en ligne/hors ligne viennent de la page Steam officielle. La FAQ de Landfall fournit les informations sur le matchmaking, le projet de plateformes, Discord, la confidentialité du salon et le dépannage. Vérifiez les pages officielles avant d’organiser une partie entre plateformes.',
      links: [
        ['Page Steam officielle de PEAK', sourceLinks.steam],
        ['Patch 2.04.a : THE KILN IS BACK', sourceLinks.patch204],
        ['FAQ officielle PEAK de Landfall', sourceLinks.faq],
        ['Discord officiel de PEAK', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'Parcourir le catalogue des objets PEAK'],
      ['how-to-play-peak', 'Revoir comment jouer à PEAK'],
      ['map-rotation', 'Voir la carte PEAK du jour'],
      ['achievements', 'Préparer les objectifs de succès'],
    ],
    relatedLabel: 'Guides PEAK associés',
  },

  de: {
    meta: {
      title: 'PEAK-Multiplayer- und Raumcode-Guide: Koop und Beitritt',
      description: 'Erfahre, wie PEAK-Raumcodes funktionieren, wie du per Steam oder JOIN GAME beitrittst, wie viele Spieler möglich sind und wie der Crossplay-Plan aussieht.',
      schema: 'Quellenbasierter PEAK-Guide zu Raumcodes, Koop-Einladungen, Spielerzahl, Crossplay-Plan, Matchmaking und Lobby-Privatsphäre.',
    },
    primaryKeyword: 'PEAK Raumcode',
    eyebrow: 'Multiplayer-Guide - Koop und Beitrittscodes',
    h1: 'PEAK-Guide: Multiplayer, Raumcodes und Koop-Beitritt',
    intro: 'PEAK unterstützt Steam-Freundeseinladungen und den Beitritt über einen Raumcode. Dieser Guide zeigt, wo du den Code kopierst, wo du ihn eingibst, wie das Limit von vier Spielern funktioniert und wie du den aktuellen Steam/PC-Stand vom geplanten Crossplay unterscheidest.',
    answerLabel: 'Kurzantwort',
    answer: 'PEAK hat Raumcodes. Der Host öffnet im Lobby-Menü die Pause, kopiert den Code und teilt ihn; der beitretende Spieler gibt ihn im Hauptmenü über JOIN GAME ein. Steam-Einladungen funktionieren weiterhin. Ein Host kann bis zu drei weitere Scouts einladen, also insgesamt vier Spieler. Der aktuell dokumentierte spielbare Stand ist Steam/PC; Landfall arbeitet an Konsolen und Crossplay. Zufälliges Matchmaking gibt es nicht, Solo offline schon.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Multiplayer-FAQ',
    heroImage: media('/media/peak-coop-climb.webp', 'PEAK-Spieler koordinieren eine Koop-Kletterroute an einer steilen Inselwand', 'Offizieller Steam-Screenshot: Der Lobby-Beitritt ist nur der Anfang einer gemeinsamen Route.'),
    sections: [
      {
        title: 'So funktionieren PEAK-Raumcodes',
        paragraphs: [
          'Patch 2.04.a hat Raumcodes zu PEAK hinzugefügt. Die offizielle Ankündigung sagt, dass in einer Lobby ein Raumcode im Pausenmenü sichtbar ist, den man kopieren und an Freunde senden kann. Für Streams gibt es außerdem eine Einstellung, mit der der Code ausgeblendet wird.',
          'Der Ablauf hat zwei Seiten. Der Host öffnet das Pausenmenü, kopiert den Code und teilt ihn privat. Der beitretende Spieler geht ins Hauptmenü, wählt JOIN GAME und gibt den erhaltenen Code ein. Wenn die Lobby nur für bestimmte Personen gedacht ist, veröffentliche den Code nicht in einem offenen Kanal.',
          'Laut offizieller Ankündigung bereiten Raumcodes das Crossplay vor, sobald die Konsolen-Versionen erscheinen. Der Code verweist auf eine bereits gehostete Lobby; er ist keine öffentliche Warteschlange und sucht nicht automatisch fremde Mitspieler. Steam-Einladungen bleiben möglich.',
        ],
        bullets: [
          ['Host', 'Kopiere den Code im Pausenmenü der Lobby und sende ihn an die vorgesehenen Spieler.'],
          ['Beitretender Spieler', 'Wähle JOIN GAME im Hauptmenü und gib den Code ein.'],
          ['Privatsphäre', 'Blende den Code bei Streams oder öffentlicher Lobby-Ansicht aus.'],
        ],
      },
      {
        title: 'So trittst du einem PEAK-Koop-Spiel bei',
        paragraphs: [
          'Die offizielle Steam-Beschreibung stellt PEAK als Multiplayer für Freunde dar: Du kannst bis zu drei weitere Scouts über Steam einladen oder allein spielen. Die Raumcodes aus 2.04.a ersetzen die bisherige Einladung nicht. Nutze den Weg, den deine Gruppe abgesprochen hat.',
          'Bei einer Steam-Einladung nimmst du sie in Steam an und folgst dem aktuellen Hinweis im Spiel. Bei einem Code öffnest du JOIN GAME im Hauptmenü. Menütexte können sich ändern; die Anzeige deiner laufenden Version ist wichtiger als ein alter Screenshot.',
          'Nach dem Beitritt sollte die Gruppe den Host und die nächste Route klären. Prüfe die' + articleLink('map-rotation#today-map', 'heutige PEAK-Karte') + 'und lies' + articleLink('how-to-play-peak', ' den Guide zum PEAK-Spielen') + ', wenn der grundlegende Ablauf noch neu ist.',
        ],
        image: media('/media/peak-climb-ridge.webp', 'PEAK-Spieler bewegen sich gemeinsam über einen schmalen Grat', 'Routen-Kontext: Der Beitritt zur Lobby ist der erste Schritt der Zusammenarbeit.'),
        bullets: [
          ['Host festlegen', 'Kläre die Ziel-Lobby, bevor Einladungen oder Codes verschickt werden.'],
          ['Aktuelle Bezeichnungen nutzen', 'Prüfe den Ablauf in der installierten Version.'],
          ['Nach dem Beitritt planen', 'Legt Route und erstes Ziel vor dem Aufbruch fest.'],
        ],
      },
      {
        title: 'Wie viele Spieler können PEAK zusammen spielen?',
        paragraphs: [
          'Die offizielle Steam-Seite sagt, dass bis zu drei weitere Scouts eingeladen werden können. Das entspricht einem Host plus drei weiteren Spielern, also vier Personen insgesamt. Eine kleinere Gruppe kann ebenfalls starten, ohne auf eine volle Lobby zu warten.',
          'Die offizielle Landfall-FAQ bestätigt, dass der Einzelspielermodus offline verfügbar ist. Solo ist daher kein unfertiger Multiplayer-Raum, sondern eine unterstützte Spielweise. Die Spielerzahl und die Plattform-Kompatibilität sind getrennte Fragen.',
          'Lege vor den Einladungen den Host und den Kommunikationsweg fest und entscheide dich für Steam-Einladung oder Raumcode. Sobald alle da sind, zählt der nächste sichere Halt mehr als eine möglichst große Gruppe.',
        ],
        bullets: [
          ['Maximal vier', 'Ein Host und bis zu drei weitere Scouts.'],
          ['Kleinere Gruppen sind möglich', 'Du musst die Lobby nicht vollständig füllen.'],
          ['Solo wird unterstützt', 'Die offizielle FAQ nennt Offline-Einzelspieler.'],
        ],
      },
      {
        title: 'PEAK-Crossplay: aktueller Stand und offizieller Plan',
        paragraphs: [
          'Trenne die heute spielbare Plattform vom angekündigten Ziel. Für diesen Guide ist Steam/PC der dokumentierte spielbare Stand. Landfalls offizielle FAQ sagt, dass das Team PEAK auf Konsolen bringt und PEAK plattformübergreifend werden soll; weitere Nachrichten seien später im Jahr zu erwarten.',
          'Patch 2.04.a erklärt, dass Raumcodes diese spätere Verbindung zwischen Plattformen vorbereiten, sobald die Konsolen-Ports verfügbar sind. Das beschreibt den Zweck, bestätigt aber keine bereits geöffnete gemischte PC-Konsolen-Runde.',
          'Für eine aktuelle PC-Runde nutzt du Steam-Freunde oder einen Raumcode. Vor einer plattformübergreifenden Planung solltest du die offiziellen Ankündigungen erneut prüfen. Schreibe weder „für immer kein Crossplay“ noch „Crossplay ist bereits live“.',
        ],
        image: media('/media/peak-map-route.webp', 'PEAK-Routenansicht, in der das Team den nächsten Abschnitt der wechselnden Karte prüft', 'Routen-Kontext: Plattformstatus und Tageskarte sind zwei getrennte Prüfungen.'),
        bullets: [
          ['Aktuelle Runde', 'Behandle Steam/PC als den hier dokumentierten spielbaren Stand.'],
          ['Offizieller Plan', 'Konsolen und Crossplay werden als laufende Arbeit beschrieben.'],
          ['Nicht zu viel versprechen', 'Prüfe offizielle Meldungen vor einer gemischten Lobby.'],
        ],
      },
      {
        title: 'Matchmaking, Steam-Freunde und Mitspieler finden',
        paragraphs: [
          'Ein Raumcode ist kein Matchmaking. Landfalls FAQ sagt, dass PEAK kein Matchmaking hat und Steam-Freunde voraussetzt. Der Code bestimmt eine Lobby, die bereits jemand hostet; er erzeugt keine öffentliche Warteschlange und wählt keine zufälligen Mitspieler.',
          'Wenn du deine Mitspieler kennst, nutze Steam-Freunde und die Einladung oder den Code des Hosts. Für die Suche nach Mitspielern verweist die offizielle FAQ auf den Discord des Entwicklers. Discord ist ein Treffpunkt der Community, aber keine automatische Matchmaking-Funktion im Spiel.',
          'Wenn die Gruppe steht, legt Host, Zugang und Kommunikationskanal fest. Der' + articleLink('items', 'PEAK-Itemkatalog') + 'hilft bei einheitlichen Namen; bei einem Plattformziel kannst du zusätzlich den' + articleLink('achievements', 'Erfolge-Guide') + 'öffnen.',
        ],
        bullets: [
          ['Bekannte Gruppe', 'Nutze Steam-Freunde und die Einladung oder den Code des Hosts.'],
          ['Mitspieler gesucht', 'Nutze den offiziellen Discord als Community-Kontakt.'],
          ['Vor dem Start', 'Kläre Host, Zugang, Route und Kommunikation.'],
        ],
      },
      {
        title: 'So verhinderst du fremde Spieler in deiner Lobby',
        paragraphs: [
          'Landfalls FAQ enthält eine eigene Antwort auf den Fall, dass ein zufälliger Spieler ohne Einladung beitritt. Die offiziellen Schritte sind: Lobby Mode auf Invite Only stellen, das Steam-Profil auf Private setzen und die Lobby nach den Änderungen neu erstellen.',
          'Der Host kann einen bereits anwesenden Spieler kicken. Die FAQ sagt außerdem, dass ein gekickter Spieler dem Spiel dieses Hosts nicht erneut beitreten kann. Das ist eine Lobby-Privatsphäre-Einstellung und kein Matchmaking-Schalter.',
          'Für eine private Runde prüfst du die Einstellungen vor dem Teilen des Codes und gibst ihn nur an die Gruppe. Wenn der Code in einem Stream oder öffentlichen Beitrag zu sehen war, blende ihn aus und eröffne eine neue Lobby.',
        ],
        image: media('/media/peak-coop-climb.webp', 'PEAK-Koop-Spieler sammeln sich auf einem sicheren Abschnitt vor dem nächsten Aufstieg', 'Offizieller Steam-Screenshot: Eine kontrollierte Lobby erleichtert die Absprache vor dem Start.'),
        bullets: [
          ['Invite Only aktivieren', 'Ändere Lobby Mode gemäß der offiziellen FAQ.'],
          ['Steam prüfen', 'Setze das Steam-Profil auf Private.'],
          ['Neu hosten', 'Erstelle die Lobby nach der Änderung neu.'],
          ['Eindringling entfernen', 'Der Host kann kicken; der Spieler kann dieser Lobby nicht wieder beitreten.'],
        ],
      },
      {
        title: 'Offizielle Hilfe bei Verbindungsproblemen',
        paragraphs: [
          'Wenn eine Einladung oder ein Raumcode fehlschlägt, verwende die aktuelle Checkliste in Landfalls FAQ. Dort werden Steam-Wartung, die Prüfung der Spieldateien, Ausnahmen für Firewall oder Virenschutz, VPN- und cFosSpeed-Prüfungen sowie Mods oder Installationsprobleme genannt.',
          'Das bedeutet nicht, dass jeder Fehler dieselbe Ursache hat. Arbeite den passenden Punkt ab und probiere Steam-Einladung oder JOIN GAME erneut. Wenn die Ursache unklar bleibt, nenne Plattform, Zugangsmethode und sichtbare Meldung im offiziellen Discord oder in der Steam-Community, statt einen PEAK-spezifischen Fix zu erfinden.',
          'Für eine brauchbare Meldung hilft: Steam-Einladung oder Code, ob JOIN GAME erreicht wurde, ob die Lobby Invite Only war und welche Meldung erschien. So lassen sich Lobby-, Verbindungs- und Plattformfragen besser trennen.',
        ],
        bullets: [
          ['Mit der FAQ beginnen', 'Nutze den aktuellen Abschnitt zu Verbindung und Photon.'],
          ['Zugang notieren', 'Schreibe Steam-Einladung oder Code in JOIN GAME dazu.'],
          ['Anzeige behalten', 'Führe Plattform, Lobby-Einstellungen und genauen Text an.'],
        ],
      },
      {
        title: 'PEAK-Koop-Checkliste',
        paragraphs: [
          'Vor dem Start entscheidet ihr, wer hostet und ob die Gruppe über Steam-Einladung oder Raumcode eintritt. Bei einem Code kopierst du ihn aus dem Pausenmenü und teilst ihn privat. Soll die Lobby geschlossen bleiben, stellst du Invite Only ein und prüfst die Steam-Privatsphäre, bevor du neu hostest.',
          'Wenn alle beigetreten sind, prüft die' + articleLink('map-rotation#today-map', 'heutige PEAK-Karte') + 'und plant den ersten Abschnitt kurz. Nutzt den' + articleLink('items', 'Itemkatalog') + 'für gemeinsame Ausrüstungsnamen und den' + articleLink('achievements', 'Erfolge-Guide') + ', wenn ein Steam-Erfolg zum Ziel gehört.',
          'Halte Lobby-Beitritt und Aufstieg auseinander. Ein erfolgreicher Code beweist nur, dass jemand die Lobby erreicht hat. Er beweist nicht, dass die Route sicher ist oder dass das Team Scout, Erholung und Rückzug geklärt hat.',
        ],
        bullets: [
          ['1. Host bestimmen', 'Legt eine Lobby und einen Kommunikationskanal fest.'],
          ['2. Zugang wählen', 'Nutzt Steam-Einladung oder teilt den Raumcode privat.'],
          ['3. Lobby schützen', 'Verwendet bei Bedarf Invite Only und die Steam-Einstellungen.'],
          ['4. Route planen', 'Prüft Tageskarte, Ausrüstung und das erste sichere Ziel.'],
        ],
      },
      {
        title: 'Nächster Schritt für bessere Koop-Runden',
        paragraphs: [
          'Wenn der Zugang zuverlässig klappt, geht es an die Routenabsprache. Lies' + articleLink('how-to-play-peak', ' den Guide zum PEAK-Spielen') + ', prüfe die' + articleLink('map-rotation#today-map', 'Tageskarte') + ', nutze den' + articleLink('items', 'Itemkatalog') + 'für gemeinsame Begriffe und öffne den' + articleLink('achievements', 'Erfolge-Guide') + ', wenn Steam-Fortschritt wichtig ist.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Schnelle Antworten',
      title: 'PEAK-Multiplayer- und Raumcode-FAQ',
      items: [
        ['Hat PEAK Raumcodes?', 'Ja. Patch 2.04.a hat sie hinzugefügt. Der Host kopiert den Code im Pausenmenü der Lobby, der beitretende Spieler gibt ihn über JOIN GAME ein.'],
        ['Wie funktionieren PEAK-Raumcodes?', 'Der Host teilt den Lobby-Code und die Spieler geben ihn in JOIN GAME ein. Der Code führt in eine bestehende Lobby und ist keine zufällige Matchmaking-Warteschlange.'],
        ['Unterstützt PEAK Crossplay?', 'Der aktuell dokumentierte spielbare Stand ist Steam/PC. Landfall arbeitet an Konsolen und sagt, dass PEAK plattformübergreifend werden soll; Crossplay ist daher als geplant, nicht als bereits live zu beschreiben.'],
        ['Wie viele Spieler können zusammen spielen?', 'Die offizielle Beschreibung unterstützt einen Host plus bis zu drei weitere Scouts, also vier Spieler. Offline-Solo ist ebenfalls möglich.'],
        ['Hat PEAK Matchmaking?', 'Nein. Landfalls FAQ beschreibt PEAK als Steam-Freunde-Spiel ohne Matchmaking. Nutze Steam-Freunde, Raumcodes oder den offiziellen Discord.'],
        ['Wie verhindere ich fremde Spieler in meiner Lobby?', 'Setze Lobby Mode auf Invite Only, das Steam-Profil auf Private und erstelle die Lobby neu. Der Host kann kicken; der Spieler kann dieser Lobby nicht erneut beitreten.'],
      ],
    },
    source: {
      eyebrow: 'Offizielle Quellen und Statusgrenzen',
      title: 'Was dieser Multiplayer-Guide bestätigt',
      body: 'Das Verhalten der Raumcodes, JOIN GAME, der zukünftige Crossplay-Zweck und die fortbestehenden Steam-Einladungen stammen aus der offiziellen Ankündigung Patch 2.04.a. Spielerzahl und Online-/Offline-Modi stammen von der offiziellen Steam-Seite. Landfalls FAQ liefert Matchmaking-, Plattform-, Discord-, Lobby- und Verbindungshinweise. Prüfe die offiziellen Seiten vor einer plattformübergreifenden Runde erneut.',
      links: [
        ['Offizielle PEAK-Steamseite', sourceLinks.steam],
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch204],
        ['Offizielle PEAK-FAQ von Landfall', sourceLinks.faq],
        ['Offizieller PEAK-Discord', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'PEAK-Itemkatalog öffnen'],
      ['how-to-play-peak', 'PEAK-Spielablauf wiederholen'],
      ['map-rotation', 'Heutige PEAK-Karte prüfen'],
      ['achievements', 'Erfolge planen'],
    ],
    relatedLabel: 'Verwandte PEAK-Guides',
  },

  pt: {
    meta: {
      title: 'Guia de multiplayer e códigos de sala de PEAK',
      description: 'Veja como usar códigos de sala em PEAK, entrar por Steam ou JOIN GAME, jogar com até quatro pessoas e entender o estado atual do crossplay.',
      schema: 'Guia de PEAK baseado em fontes oficiais sobre códigos de sala, convites cooperativos, número de jogadores, crossplay, matchmaking e privacidade do lobby.',
    },
    primaryKeyword: 'códigos de sala de PEAK',
    eyebrow: 'Guia de multiplayer - cooperação e códigos de entrada',
    h1: 'Guia de PEAK: multiplayer, códigos de sala e jogo cooperativo',
    intro: 'PEAK permite convidar amigos pela Steam e entrar em um lobby usando um código de sala. Este guia mostra onde copiar o código, onde inseri-lo, como funciona o limite de quatro jogadores e como separar o estado atual no Steam/PC do plano oficial de crossplay.',
    answerLabel: 'Resposta curta',
    answer: 'PEAK tem códigos de sala. O anfitrião abre o menu de pausa no lobby e copia o código; quem vai entrar usa JOIN GAME no menu principal para digitá-lo. Os convites da Steam continuam funcionando, com um anfitrião e até três outros scouts, quatro jogadores no total. A versão jogável documentada aqui é Steam/PC; a Landfall está preparando consoles e crossplay. Não há matchmaking aleatório, e o modo solo offline existe.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ de multiplayer',
    heroImage: media('/media/peak-coop-climb.webp', 'Jogadores de PEAK coordenam uma escalada cooperativa em uma rota íngreme', 'Captura oficial da Steam: entrar no lobby é apenas o começo de uma rota compartilhada.'),
    sections: [
      {
        title: 'Como funcionam os códigos de sala de PEAK',
        paragraphs: [
          'O Patch 2.04.a adicionou códigos de sala ao PEAK. O anúncio oficial explica que um código aparece no menu de pausa dentro do lobby e pode ser copiado e enviado aos amigos. Também há uma opção para esconder o código durante uma transmissão ou exibição pública.',
          'O fluxo tem duas partes. O anfitrião abre a pausa, copia o código e o envia por um canal privado; a pessoa que vai entrar abre o menu principal, escolhe JOIN GAME e digita o código recebido. Se o lobby for apenas para um grupo específico, não publique o código em um canal aberto.',
          'O anúncio apresenta o código como preparação para o crossplay quando as versões de console forem lançadas. Ele aponta para um lobby já criado; não é uma fila pública e não encontra jogadores desconhecidos automaticamente. Os convites pela Steam continuam disponíveis.',
        ],
        bullets: [
          ['Anfitrião', 'Copie o código no menu de pausa do lobby e envie aos jogadores escolhidos.'],
          ['Quem entra', 'Escolha JOIN GAME no menu principal e digite o código.'],
          ['Privacidade', 'Oculte o código no jogo se o lobby estiver aparecendo em uma live.'],
        ],
      },
      {
        title: 'Como entrar em uma partida cooperativa de PEAK',
        paragraphs: [
          'A descrição oficial da Steam apresenta o multiplayer de PEAK como uma experiência entre amigos: você pode convidar até três outros scouts pela Steam ou jogar sozinho. O código de sala da 2.04.a foi adicionado sem remover o convite tradicional, então use o método combinado pelo grupo.',
          'Se você recebeu um convite da Steam, aceite-o por lá e siga o aviso atual do jogo. Se recebeu um código, abra JOIN GAME no menu principal. Os textos podem mudar após atualizações; a interface da versão em execução é a referência final, não uma captura antiga.',
          'Depois de entrar, confirme quem é o anfitrião e qual será a próxima rota. Consulte o' + articleLink('map-rotation#today-map', ' mapa diário de PEAK') + 'e veja' + articleLink('how-to-play-peak', ' como jogar PEAK') + 'se o ciclo básico ainda não estiver claro.',
        ],
        image: media('/media/peak-climb-ridge.webp', 'Jogadores de PEAK avançam juntos por uma crista estreita', 'Contexto de rota: entrar no lobby é o primeiro passo da coordenação.'),
        bullets: [
          ['Escolha um anfitrião', 'Defina qual lobby será usado antes de enviar convites ou códigos.'],
          ['Use os rótulos atuais', 'Confirme o fluxo na interface da versão instalada.'],
          ['Planeje depois de entrar', 'Combinem rota e primeiro objetivo antes de sair do acampamento.'],
        ],
      },
      {
        title: 'Quantas pessoas podem jogar PEAK juntas?',
        paragraphs: [
          'A página oficial da Steam informa que é possível convidar até três outros scouts. Isso significa um anfitrião mais três jogadores, quatro pessoas no total. Um grupo menor também pode iniciar a escalada sem esperar a sala ficar cheia.',
          'A FAQ oficial da Landfall confirma que o modo solo está disponível offline. Jogar sozinho é uma forma prevista de jogar, não um lobby cooperativo incompleto. O limite de jogadores e a compatibilidade entre plataformas são perguntas diferentes.',
          'Antes de convidar, definam o anfitrião e o canal de comunicação, depois escolham convite da Steam ou código de sala. Quando todos estiverem no lobby, priorizem o próximo ponto seguro em vez de buscar o maior grupo possível.',
        ],
        bullets: [
          ['Máximo de quatro', 'Um anfitrião e até três outros scouts.'],
          ['Grupos menores funcionam', 'Não é preciso preencher todos os lugares.'],
          ['Solo é suportado', 'A FAQ oficial diz que o modo individual pode ser jogado offline.'],
        ],
      },
      {
        title: 'Crossplay em PEAK: estado atual e plano oficial',
        paragraphs: [
          'Separe a plataforma jogável hoje do objetivo anunciado. O estado documentado neste guia é Steam/PC. A FAQ oficial da Landfall informa que a equipe está trabalhando para levar PEAK aos consoles e que o jogo será multiplataforma, com mais notícias previstas para este ano.',
          'O Patch 2.04.a explica que os códigos de sala preparam essa futura conexão quando os ports de console estiverem disponíveis. Isso descreve a finalidade do recurso, mas não confirma uma sessão mista de PC e console já liberada.',
          'Para uma partida atual, organize o grupo com amigos da Steam ou pelo código de sala. Antes de prometer uma sessão entre plataformas, confira novamente os anúncios oficiais. Não escreva que o crossplay é impossível para sempre nem que já está ativo.',
        ],
        image: media('/media/peak-map-route.webp', 'Vista de uma rota de PEAK enquanto a equipe se prepara para o próximo trecho', 'Contexto de rota: o estado da plataforma e o mapa ativo são verificações separadas.'),
        bullets: [
          ['Partida atual', 'Considere Steam/PC como a plataforma jogável documentada aqui.'],
          ['Plano oficial', 'Consoles e crossplay são descritos como trabalho em andamento.'],
          ['Evite prometer demais', 'Confira os anúncios antes de organizar uma sala mista.'],
        ],
      },
      {
        title: 'Matchmaking, amigos da Steam e como encontrar equipe',
        paragraphs: [
          'Um código de sala não é matchmaking. A FAQ da Landfall afirma que PEAK não tem matchmaking e funciona com amigos da Steam. O código identifica um lobby já hospedado; não cria uma fila pública nem escolhe companheiros aleatórios.',
          'Se você já conhece o grupo, use os amigos da Steam e o convite ou código do anfitrião. Para encontrar companheiros, a FAQ oficial indica o Discord do desenvolvedor. O Discord é um ponto de encontro da comunidade, não uma função automática de matchmaking dentro do jogo.',
          'Quando a equipe estiver formada, definam anfitrião, método de entrada e canal de comunicação. O' + articleLink('items', 'catálogo de itens de PEAK') + 'ajuda a manter os nomes consistentes; se houver um objetivo de plataforma, consulte também o' + articleLink('achievements', 'guia de conquistas') + '.',
        ],
        bullets: [
          ['Grupo conhecido', 'Use amigos da Steam e o convite ou código do anfitrião.'],
          ['Faltam companheiros', 'Use o Discord oficial como ponto de encontro da comunidade.'],
          ['Antes de começar', 'Combinem anfitrião, entrada, rota e comunicação.'],
        ],
      },
      {
        title: 'Como impedir desconhecidos de entrar no seu lobby',
        paragraphs: [
          'A FAQ da Landfall traz uma resposta específica para quando um jogador aleatório entra sem convite. Os passos oficiais são configurar Lobby Mode como Invite Only, deixar o perfil da Steam como Private e criar o lobby novamente depois de alterar essas opções.',
          'O anfitrião pode expulsar alguém que já esteja dentro. A FAQ também informa que uma pessoa expulsa não pode voltar à partida daquele anfitrião. Isso controla a privacidade do lobby, não o matchmaking.',
          'Para uma partida privada, confira as opções antes de compartilhar o código e envie-o apenas ao grupo. Se ele apareceu em uma live ou publicação aberta, oculte-o e crie um lobby novo em vez de considerar o código antigo privado novamente.',
        ],
        image: media('/media/peak-coop-climb.webp', 'Jogadores de PEAK se reúnem em um trecho seguro antes de continuar a escalada', 'Captura oficial da Steam: um lobby controlado facilita a comunicação antes da partida.'),
        bullets: [
          ['Ative Invite Only', 'Altere Lobby Mode de acordo com a FAQ oficial.'],
          ['Revise a Steam', 'Deixe o perfil da Steam como Private.'],
          ['Crie novamente', 'Abra o lobby outra vez depois da mudança.'],
          ['Remova o intruso', 'O anfitrião pode expulsá-lo, e ele não poderá voltar àquela partida.'],
        ],
      },
      {
        title: 'Solução oficial para problemas de conexão',
        paragraphs: [
          'Quando um convite ou código falhar, use a lista atual da FAQ da Landfall. Ela menciona manutenção da Steam, verificação dos arquivos do jogo, exceções no firewall ou antivírus, verificações ligadas a VPN e cFosSpeed, além de problemas com mods ou instalação.',
          'Isso não significa que todos os erros tenham a mesma causa. Siga o item relevante e tente novamente o convite da Steam ou JOIN GAME. Se o problema continuar sem explicação, leve à comunidade oficial a plataforma, o método de entrada e a mensagem visível, sem inventar uma correção específica de PEAK.',
          'Ao pedir ajuda, diga se foi usado convite ou código, se o jogador chegou ao JOIN GAME, se o lobby estava em Invite Only e qual mensagem apareceu. Esses dados ajudam a separar privacidade do lobby, conexão e plataforma.',
        ],
        bullets: [
          ['Comece pela FAQ', 'Use a seção atual sobre conexão e Photon.'],
          ['Registre o método', 'Informe convite da Steam ou código digitado em JOIN GAME.'],
          ['Guarde a mensagem', 'Inclua plataforma, configurações do lobby e o texto exato.'],
        ],
      },
      {
        title: 'Checklist para jogar PEAK em cooperação',
        paragraphs: [
          'Antes de começar, escolham o anfitrião e decidam entre convite da Steam e código de sala. Se usarem código, copiem-no do menu de pausa e compartilhem em privado. Se quiserem fechar o lobby, ativem Invite Only e revisem a privacidade da Steam antes de hospedar novamente.',
          'Quando todos entrarem, consultem o' + articleLink('map-rotation#today-map', ' mapa de PEAK de hoje') + 'e façam um plano curto para o primeiro trecho. Usem o' + articleLink('items', 'catálogo de itens') + 'para os nomes do equipamento e o' + articleLink('achievements', 'guia de conquistas') + 'se a equipe também buscar uma conquista da Steam.',
          'Mantenha separados o processo de entrar e o de escalar. Digitar o código corretamente só prova que o jogador chegou ao lobby; não prova que a rota é segura ou que a equipe definiu quem explora, quem guarda recuperação e quando recuar.',
        ],
        bullets: [
          ['1. Defina o anfitrião', 'Escolham um lobby e um canal de comunicação.'],
          ['2. Defina a entrada', 'Use um convite da Steam ou compartilhe o código em privado.'],
          ['3. Proteja o lobby', 'Use Invite Only e as opções da Steam quando necessário.'],
          ['4. Planeje a rota', 'Confira o mapa diário, nomeie o equipamento e escolha o primeiro objetivo seguro.'],
        ],
      },
      {
        title: 'Próximo passo para uma cooperação melhor',
        paragraphs: [
          'Depois que a entrada estiver funcionando bem, concentre-se na rota. Leia' + articleLink('how-to-play-peak', ' como jogar PEAK') + ', confira o' + articleLink('map-rotation#today-map', ' mapa de hoje') + ', use o' + articleLink('items', 'catálogo de itens') + 'para falar do equipamento e continue com o' + articleLink('achievements', 'guia de conquistas') + 'se o progresso da Steam fizer parte do objetivo.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'FAQ de multiplayer e códigos de sala de PEAK',
      items: [
        ['PEAK tem códigos de sala?', 'Sim. O Patch 2.04.a adicionou os códigos. O anfitrião copia no menu de pausa do lobby e o jogador entra pelo JOIN GAME.'],
        ['Como funcionam os códigos de sala de PEAK?', 'O anfitrião compartilha o código e os jogadores o digitam no JOIN GAME. O código leva a um lobby existente; não é uma fila de matchmaking aleatório.'],
        ['PEAK tem crossplay?', 'A versão jogável documentada atualmente é Steam/PC. A Landfall está trabalhando nos consoles e diz que PEAK será multiplataforma; portanto, o crossplay deve ser tratado como planejado, não como já ativo.'],
        ['Quantas pessoas podem jogar juntas?', 'A descrição oficial permite um anfitrião e até três outros scouts, quatro jogadores no total. O modo solo offline também está disponível.'],
        ['PEAK tem matchmaking?', 'Não. A FAQ da Landfall descreve o jogo como Steam-friends only e sem matchmaking. Use amigos da Steam, códigos de sala ou o Discord oficial.'],
        ['Como impedir desconhecidos de entrar no lobby?', 'Coloque Lobby Mode em Invite Only, deixe o perfil da Steam como Private e crie o lobby novamente. O anfitrião pode expulsar um jogador, que não poderá voltar àquela partida.'],
      ],
    },
    source: {
      eyebrow: 'Fontes oficiais e limites de status',
      title: 'O que este guia de multiplayer confirma',
      body: 'O funcionamento dos códigos, a entrada JOIN GAME, a finalidade futura para crossplay e a continuidade dos convites da Steam vêm do anúncio oficial Patch 2.04.a. O número de jogadores e os modos online/offline vêm da página oficial do PEAK na Steam. A FAQ da Landfall fornece as informações sobre matchmaking, plano de plataformas, Discord, privacidade do lobby e conexão. Confira as páginas oficiais antes de organizar uma partida entre plataformas.',
      links: [
        ['Página oficial de PEAK na Steam', sourceLinks.steam],
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch204],
        ['FAQ oficial de PEAK da Landfall', sourceLinks.faq],
        ['Discord oficial de PEAK', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'Abrir o catálogo de itens de PEAK'],
      ['how-to-play-peak', 'Rever como jogar PEAK'],
      ['map-rotation', 'Ver o mapa de PEAK de hoje'],
      ['achievements', 'Planejar conquistas'],
    ],
    relatedLabel: 'Guias relacionados de PEAK',
  },

  ko: {
    meta: {
      title: 'PEAK 멀티플레이 및 방 코드 가이드: 협동 플레이와 참가 방법',
      description: 'PEAK 방 코드를 복사하고 JOIN GAME으로 참가하는 방법, Steam 초대, 최대 인원과 현재 크로스플레이 계획을 확인하세요.',
      schema: '공식 출처를 바탕으로 PEAK 방 코드, 협동 초대, 플레이어 수, 크로스플레이 계획, 매치메이킹과 로비 공개 설정을 정리한 가이드입니다.',
    },
    primaryKeyword: 'PEAK 방 코드',
    eyebrow: '멀티플레이 가이드 - 협동 플레이와 참가 코드',
    h1: 'PEAK 멀티플레이 및 방 코드 가이드: 협동 플레이와 참가 방법',
    intro: 'PEAK은 Steam 친구 초대와 방 코드를 통한 로비 참가를 모두 지원합니다. 방 코드를 어디서 복사하고 어디에 입력하는지, 4인 제한이 어떻게 적용되는지, 현재 Steam/PC 상태와 앞으로의 크로스플레이 계획을 구분해 설명합니다.',
    answerLabel: '짧은 답변',
    answer: 'PEAK에는 방 코드가 있습니다. 호스트는 로비에서 일시 정지 메뉴를 열어 코드를 복사하고, 참가자는 메인 메뉴의 JOIN GAME에서 입력합니다. Steam 초대도 계속 사용할 수 있으며 호스트와 다른 스카우트 최대 3명, 총 4명까지 함께할 수 있습니다. 현재 확인되는 플레이 버전은 Steam/PC이고, Landfall은 콘솔과 크로스플레이를 준비 중입니다. 무작위 매치메이킹은 없으며 오프라인 싱글 플레이는 가능합니다.',
    tocLabel: '이 페이지의 내용',
    tocFaq: '멀티플레이 FAQ',
    heroImage: media('/media/peak-coop-climb.webp', '가파른 섬 루트에서 협동 등반을 준비하는 PEAK 팀원들', '공식 Steam 스크린샷: 로비에 들어간 뒤에도 팀은 같은 루트를 공유해야 합니다.'),
    sections: [
      {
        title: 'PEAK 방 코드는 어떻게 작동하나요?',
        paragraphs: [
          'Patch 2.04.a에서 PEAK에 방 코드가 추가되었습니다. 공식 공지에 따르면 로비의 일시 정지 메뉴에서 방 코드를 확인하고 복사해 친구에게 보낼 수 있습니다. 방송 화면에 코드가 보이지 않게 하는 숨김 설정도 있습니다.',
          '호스트와 참가자의 과정은 다릅니다. 호스트는 일시 정지 메뉴를 열고 코드를 복사한 뒤 비공개 방식으로 공유합니다. 참가자는 메인 메뉴에서 JOIN GAME을 선택하고 받은 코드를 입력합니다. 특정 팀만 들어오는 방이라면 공개 채널에 코드를 올리지 마세요.',
          '공식 공지는 방 코드가 앞으로 콘솔 버전이 출시된 뒤 크로스플레이를 준비하기 위한 기능이라고 설명합니다. 방 코드는 이미 만들어진 로비에 직접 들어가기 위한 수단이며, 공개 대기열이나 자동 무작위 팀 찾기 기능은 아닙니다. Steam 초대도 계속 사용할 수 있습니다.',
        ],
        bullets: [
          ['호스트', '로비 일시 정지 메뉴에서 코드를 복사해 참가자에게 보냅니다.'],
          ['참가자', '메인 메뉴에서 JOIN GAME을 선택하고 코드를 입력합니다.'],
          ['공개 주의', '방송이나 공개 화면에서는 게임 내 설정으로 코드를 숨깁니다.'],
        ],
      },
      {
        title: 'PEAK 협동 게임에 참가하는 방법',
        paragraphs: [
          '공식 Steam 설명은 PEAK 멀티플레이를 친구 중심으로 소개합니다. Steam을 통해 다른 스카우트 최대 3명을 초대할 수 있고 혼자 플레이할 수도 있습니다. 2.04.a의 방 코드 추가는 기존 초대 방식을 없애지 않았으므로 팀이 정한 참가 방법을 사용하면 됩니다.',
          'Steam 초대를 받았다면 Steam에서 수락하고 현재 게임 안내를 따르세요. 방 코드를 받았다면 메인 메뉴에서 JOIN GAME을 엽니다. 업데이트 후 메뉴 이름이나 배치가 달라질 수 있으므로 오래된 스크린샷보다 현재 게임 화면을 우선해야 합니다.',
          '로비에 들어간 뒤에는 호스트와 다음 루트를 확인하세요. 출발 전에' + articleLink('map-rotation#today-map', '오늘의 PEAK 맵') + '을 확인하고 기본 흐름이 낯설다면' + articleLink('how-to-play-peak', 'PEAK 플레이 방법') + '을 함께 읽어 보세요.',
        ],
        image: media('/media/peak-climb-ridge.webp', '좁은 능선을 함께 이동하는 PEAK 플레이어들', '루트 예시: 로비 참가 후에야 실제 협동 계획을 세울 수 있습니다.'),
        bullets: [
          ['호스트 정하기', '초대나 코드를 보내기 전에 어느 로비에 들어갈지 정합니다.'],
          ['현재 표시 따르기', '설치된 버전의 화면에서 참가 흐름을 확인합니다.'],
          ['참가 후 계획하기', '캠프를 떠나기 전에 루트와 첫 목표를 정합니다.'],
        ],
      },
      {
        title: 'PEAK은 몇 명까지 함께 플레이할 수 있나요?',
        paragraphs: [
          '공식 Steam 페이지는 다른 스카우트 최대 3명을 초대할 수 있다고 안내합니다. 호스트 1명과 다른 플레이어 3명, 총 4명으로 이해하면 됩니다. 인원이 적어도 바로 등반을 시작할 수 있으며 방을 채울 필요는 없습니다.',
          'Landfall 공식 FAQ는 싱글 플레이를 오프라인으로 할 수 있다고 확인합니다. 혼자 하는 플레이는 비어 있는 멀티플레이 방이 아니라 공식적으로 지원되는 방식입니다. 인원수와 플랫폼 간 연결 여부는 별개의 질문입니다.',
          '초대 전에 호스트와 연락 수단을 정하고 Steam 초대와 방 코드 중 하나를 선택하세요. 모두 들어온 뒤에는 인원수보다 다음 안전한 휴식 지점을 정하는 일이 더 중요합니다.',
        ],
        bullets: [
          ['최대 4명', '호스트 1명과 다른 스카우트 최대 3명입니다.'],
          ['소규모도 가능', '인원이 다 차기를 기다릴 필요가 없습니다.'],
          ['싱글 플레이 지원', '공식 FAQ는 오프라인 싱글 플레이를 안내합니다.'],
        ],
      },
      {
        title: 'PEAK 크로스플레이: 현재 상태와 공식 계획',
        paragraphs: [
          '현재 플레이할 수 있는 플랫폼과 앞으로의 목표를 나누어 봐야 합니다. 이 가이드에서 확인되는 플레이 버전은 Steam/PC입니다. Landfall 공식 FAQ는 PEAK의 콘솔 출시를 준비하고 있으며 PEAK이 크로스플랫폼 게임이 될 것이라고 설명합니다.',
          'Patch 2.04.a는 콘솔 포트가 출시된 뒤 플랫폼 간 플레이를 준비하기 위해 방 코드를 추가했다고 설명합니다. 이는 기능의 목적을 보여 주는 내용이지, 지금 당장 PC와 콘솔이 섞인 세션이 열려 있다는 뜻은 아닙니다.',
          '현재 PC 세션은 Steam 친구 초대나 방 코드로 준비하고, 플랫폼을 섞은 플레이를 약속하기 전에는 공식 공지를 다시 확인하세요. “영원히 지원하지 않는다”거나 “이미 지원된다”고 단정하면 안 됩니다.',
        ],
        image: media('/media/peak-map-route.webp', '다음 지형 구간을 확인하는 PEAK 루트 화면', '루트 예시: 플랫폼 상태와 오늘의 맵은 따로 확인해야 합니다.'),
        bullets: [
          ['현재 세션', '이 가이드에서는 현재 확인되는 플레이 환경을 Steam/PC로 봅니다.'],
          ['공식 계획', '콘솔과 크로스플레이는 진행 중인 계획으로 설명됩니다.'],
          ['과장하지 않기', '크로스플레이 세션을 잡기 전 공식 공지를 다시 확인합니다.'],
        ],
      },
      {
        title: '매치메이킹, Steam 친구와 팀원 찾기',
        paragraphs: [
          '방 코드는 매치메이킹이 아닙니다. Landfall FAQ는 PEAK에 매치메이킹이 없고 Steam 친구 중심으로 플레이한다고 설명합니다. 방 코드는 누군가가 만든 로비를 지정할 뿐, 공개 대기열을 만들거나 무작위 팀원을 고르지 않습니다.',
          '함께할 사람을 알고 있다면 Steam 친구와 호스트의 초대 또는 코드를 사용하세요. 팀원을 찾고 싶다면 공식 FAQ가 개발사의 Discord를 안내합니다. Discord는 커뮤니티에서 사람을 찾는 장소이지 게임 안의 자동 매칭 기능은 아닙니다.',
          '팀이 모이면 호스트, 참가 방법과 연락 수단을 정하세요. 장비 이름을 맞출 때는' + articleLink('items', 'PEAK 아이템 도감') + '을 보고, 플랫폼 도전 과제가 목표라면' + articleLink('achievements', '도전 과제 가이드') + '도 확인할 수 있습니다.',
        ],
        bullets: [
          ['아는 팀과 플레이', 'Steam 친구와 호스트의 초대 또는 방 코드를 사용합니다.'],
          ['팀원이 필요할 때', '공식 Discord를 커뮤니티 연락처로 사용합니다.'],
          ['시작 전 확인', '호스트, 참가 방법, 루트와 소통 수단을 정합니다.'],
        ],
      },
      {
        title: '모르는 사람이 로비에 들어오는 것을 막는 방법',
        paragraphs: [
          'Landfall FAQ에는 초대하지 않은 무작위 플레이어가 로비에 들어오는 상황에 대한 항목이 있습니다. 공식 절차는 Lobby Mode를 Invite Only로 설정하고 Steam 프로필을 Private으로 바꾼 다음, 설정을 바꾼 뒤 로비를 다시 만드는 것입니다.',
          '이미 들어온 플레이어는 호스트가 추방할 수 있습니다. FAQ는 추방된 플레이어가 해당 호스트의 게임에 다시 참가할 수 없다고도 설명합니다. 이것은 로비 공개 범위를 조절하는 방법이며 매치메이킹 설정은 아닙니다.',
          '비공개 게임을 하려면 코드를 공유하기 전에 설정을 확인하고 대상 팀원에게만 보내세요. 방송이나 공개 게시물에 코드가 노출되었다면 코드를 숨기고 새 로비를 만들어야 합니다.',
        ],
        image: media('/media/peak-coop-climb.webp', '안전한 지점에 모여 다음 등반을 준비하는 PEAK 팀원들', '공식 Steam 스크린샷: 통제된 로비는 출발 전 협동을 쉽게 만듭니다.'),
        bullets: [
          ['Invite Only 설정', '공식 FAQ에 따라 Lobby Mode를 변경합니다.'],
          ['Steam 확인', 'Steam 프로필을 Private으로 설정합니다.'],
          ['로비 다시 만들기', '설정 변경 후 새 로비를 만듭니다.'],
          ['침입자 추방', '호스트가 추방할 수 있으며 해당 게임에 다시 들어올 수 없습니다.'],
        ],
      },
      {
        title: '공식 FAQ에 따른 연결 문제 확인',
        paragraphs: [
          '초대나 방 코드 참가가 실패하면 Landfall 공식 FAQ의 현재 점검 목록을 사용하세요. Steam 점검 여부, 게임 파일 검증, 방화벽이나 백신 예외, VPN 및 cFosSpeed 관련 확인, 모드나 설치 문제 등이 포함되어 있습니다.',
          '모든 오류가 같은 원인이라는 뜻은 아닙니다. 상황에 맞는 항목을 확인한 뒤 Steam 초대나 JOIN GAME을 다시 시도하세요. 그래도 원인을 모르겠다면 플랫폼, 참가 방법과 화면에 나온 메시지를 공식 Discord나 Steam 커뮤니티에 전달하고, PEAK 전용 해결책을 임의로 만들지 마세요.',
          '도움을 요청할 때 초대인지 코드인지, JOIN GAME까지 갔는지, 로비가 Invite Only였는지, 어떤 문구가 나왔는지를 적으면 로비 설정 문제와 연결·플랫폼 문제를 구분하기 쉽습니다.',
        ],
        bullets: [
          ['공식 FAQ부터 확인', '연결과 Photon 관련 최신 항목을 사용합니다.'],
          ['참가 방법 기록', 'Steam 초대인지 JOIN GAME 코드 입력인지 적습니다.'],
          ['화면 문구 보존', '플랫폼, 로비 설정과 정확한 메시지를 함께 남깁니다.'],
        ],
      },
      {
        title: 'PEAK 협동 플레이 준비 체크리스트',
        paragraphs: [
          '시작 전에 호스트를 정하고 Steam 초대와 방 코드 중 어떤 방식을 쓸지 결정하세요. 코드를 쓴다면 일시 정지 메뉴에서 복사해 비공개로 공유합니다. 로비를 닫아 두려면 Invite Only와 Steam 공개 설정을 확인한 뒤 다시 호스팅하세요.',
          '모두 들어오면' + articleLink('map-rotation#today-map', '오늘의 PEAK 맵') + '을 확인하고 첫 구간에 대한 짧은 계획을 세우세요. 장비 이름은' + articleLink('items', '아이템 도감') + '으로 맞추고 Steam 도전 과제가 목표라면' + articleLink('achievements', '도전 과제 가이드') + '를 참고하세요.',
          '로비 참가와 등반 시작은 별개입니다. 코드를 제대로 입력했다는 것은 로비에 들어왔다는 뜻일 뿐, 루트가 안전하거나 누가 정찰·회복을 맡을지 정했다는 뜻은 아닙니다.',
        ],
        bullets: [
          ['1. 호스트 정하기', '하나의 로비와 연락 수단을 정합니다.'],
          ['2. 참가 방식 정하기', 'Steam 초대 또는 비공개로 공유한 방 코드를 사용합니다.'],
          ['3. 로비 보호하기', '필요하면 Invite Only와 Steam 설정을 사용합니다.'],
          ['4. 루트 계획하기', '일일 맵, 장비 이름과 첫 안전 목표를 확인합니다.'],
        ],
      },
      {
        title: '다음 단계: 더 안정적인 협동 플레이',
        paragraphs: [
          '참가가 안정되면 다음은 루트 협동입니다. ' + articleLink('how-to-play-peak', 'PEAK 플레이 방법') + '에서 기본 흐름을 확인하고, 출발 전에' + articleLink('map-rotation#today-map', '오늘의 맵') + '을 보며, 장비 용어는' + articleLink('items', '아이템 도감') + '으로 맞추세요. Steam 진행 목표가 있다면' + articleLink('achievements', '도전 과제 가이드') + '도 이어서 확인할 수 있습니다.',
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK 멀티플레이와 방 코드 FAQ',
      items: [
        ['PEAK에 방 코드가 있나요?', '있습니다. Patch 2.04.a에서 추가되었으며 호스트는 로비 일시 정지 메뉴에서 복사하고 참가자는 메인 메뉴의 JOIN GAME에서 입력합니다.'],
        ['PEAK 방 코드는 어떻게 사용하나요?', '호스트가 로비 코드를 공유하고 참가자가 JOIN GAME에서 입력합니다. 방 코드는 기존 로비에 들어가는 수단이며 무작위 매치메이킹 대기열이 아닙니다.'],
        ['PEAK은 크로스플레이를 지원하나요?', '현재 확인되는 플레이 버전은 Steam/PC입니다. Landfall은 콘솔과 크로스플레이를 준비 중이라고 설명하므로, 크로스플레이는 이미 적용된 기능이 아니라 계획 중인 기능으로 다뤄야 합니다.'],
        ['PEAK은 몇 명까지 함께 플레이할 수 있나요?', '공식 설명에 따르면 호스트 1명과 다른 스카우트 최대 3명, 총 4명입니다. 오프라인 싱글 플레이도 가능합니다.'],
        ['PEAK에 매치메이킹이 있나요?', '없습니다. Landfall FAQ는 Steam 친구 중심이며 매치메이킹이 없다고 설명합니다. Steam 친구, 방 코드 또는 공식 Discord를 사용하세요.'],
        ['모르는 사람이 PEAK 로비에 들어오지 못하게 하려면?', 'Lobby Mode를 Invite Only로 설정하고 Steam 프로필을 Private으로 바꾼 뒤 로비를 다시 만드세요. 호스트가 플레이어를 추방할 수 있으며 해당 게임에 다시 참가할 수 없습니다.'],
      ],
    },
    source: {
      eyebrow: '공식 출처와 상태 범위',
      title: '이 멀티플레이 가이드에서 확인되는 내용',
      body: '방 코드 작동 방식, JOIN GAME 참가 경로, 앞으로의 크로스플레이 목적과 Steam 초대의 지속 여부는 공식 Patch 2.04.a 공지에서 가져왔습니다. 인원수와 온라인·오프라인 모드는 공식 Steam 페이지를 기준으로 했습니다. 매치메이킹, 플랫폼 계획, Discord, 로비 공개 설정과 연결 점검은 Landfall FAQ를 따릅니다. 플랫폼 간 게임을 준비하기 전 공식 페이지를 다시 확인하세요.',
      links: [
        ['PEAK 공식 Steam 페이지', sourceLinks.steam],
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch204],
        ['Landfall 공식 PEAK FAQ', sourceLinks.faq],
        ['PEAK 공식 Discord', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'PEAK 아이템 도감 보기'],
      ['how-to-play-peak', 'PEAK 플레이 방법 복습'],
      ['map-rotation', '오늘의 PEAK 맵 확인'],
      ['achievements', '도전 과제 목표 계획'],
    ],
    relatedLabel: '관련 PEAK 가이드',
  },

  it: {
    meta: {
      title: 'Guida multiplayer e codici stanza di PEAK',
      description: 'Scopri come usare i codici stanza di PEAK, entrare tramite Steam o JOIN GAME, giocare in quattro e capire lo stato attuale del crossplay.',
      schema: 'Guida di PEAK basata su fonti ufficiali per codici stanza, inviti cooperativi, numero di giocatori, crossplay, matchmaking e privacy della lobby.',
    },
    primaryKeyword: 'codici stanza PEAK',
    eyebrow: 'Guida multiplayer - cooperativa e codici di accesso',
    h1: 'Guida PEAK: multiplayer, codici stanza e gioco cooperativo',
    intro: 'PEAK permette di invitare gli amici tramite Steam e di entrare in una lobby con un codice stanza. Qui spieghiamo dove copiarlo, dove inserirlo, come funziona il limite di quattro giocatori e come distinguere lo stato attuale su Steam/PC dal piano ufficiale per il crossplay.',
    answerLabel: 'Risposta breve',
    answer: 'PEAK ha i codici stanza. L’host apre il menu di pausa nella lobby e copia il codice; chi entra lo inserisce in JOIN GAME dal menu principale. Gli inviti Steam continuano a funzionare: un host può avere fino a tre altri scout, quattro giocatori in totale. La versione giocabile documentata qui è Steam/PC, mentre Landfall sta preparando console e crossplay. Non esiste matchmaking casuale, ma è disponibile il gioco in solitaria offline.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ multiplayer',
    heroImage: media('/media/peak-coop-climb.webp', 'Giocatori di PEAK coordinano una scalata cooperativa su un percorso ripido', 'Schermata ufficiale Steam: entrare nella lobby è solo l’inizio di un percorso condiviso.'),
    sections: [
      {
        title: 'Come funzionano i codici stanza di PEAK',
        paragraphs: [
          'Il Patch 2.04.a ha aggiunto i codici stanza a PEAK. L’annuncio ufficiale spiega che nella lobby il codice appare nel menu di pausa e può essere copiato e inviato agli amici. È disponibile anche un’opzione per nasconderlo durante una diretta o quando la lobby è mostrata pubblicamente.',
          'Il flusso ha due ruoli. L’host apre la pausa, copia il codice e lo condivide in privato; il giocatore che entra apre il menu principale, sceglie JOIN GAME e inserisce il codice ricevuto. Se la lobby è riservata, non pubblicare il codice in un canale aperto.',
          'L’annuncio presenta il codice come preparazione al crossplay quando saranno disponibili le versioni console. Il codice porta a una lobby già ospitata; non è una coda pubblica e non cerca automaticamente giocatori sconosciuti. Gli inviti Steam restano utilizzabili.',
        ],
        bullets: [
          ['Host', 'Copia il codice dal menu di pausa e invialo ai giocatori previsti.'],
          ['Giocatore che entra', 'Scegli JOIN GAME nel menu principale e inserisci il codice.'],
          ['Privacy', 'Nascondi il codice nel gioco se la lobby è visibile in streaming.'],
        ],
      },
      {
        title: 'Come entrare in una partita cooperativa di PEAK',
        paragraphs: [
          'La descrizione ufficiale su Steam presenta il multiplayer di PEAK come gioco tra amici: puoi invitare fino a tre altri scout tramite Steam oppure giocare da solo. Il codice aggiunto nella 2.04.a non sostituisce l’invito tradizionale, quindi usa il metodo concordato dal gruppo.',
          'Se ricevi un invito Steam, accettalo in Steam e segui l’avviso attuale del gioco. Se ricevi un codice, apri JOIN GAME dal menu principale. Le etichette possono cambiare dopo un aggiornamento; la schermata della versione in uso vale più di una vecchia immagine.',
          'Dopo l’ingresso, chiarisci chi è l’host e quale percorso seguire. Prima di partire controlla la' + articleLink('map-rotation#today-map', ' mappa quotidiana di PEAK') + 'e, se il ciclo base non è chiaro, leggi' + articleLink('how-to-play-peak', ' come giocare a PEAK') + '.',
        ],
        image: media('/media/peak-climb-ridge.webp', 'Giocatori di PEAK avanzano insieme lungo una cresta stretta', 'Contesto del percorso: entrare nella lobby è il primo passo della coordinazione.'),
        bullets: [
          ['Scegli un host', 'Decidi la lobby prima di inviare inviti o codici.'],
          ['Usa le etichette attuali', 'Controlla il flusso nella versione installata.'],
          ['Pianifica dopo l’ingresso', 'Stabilite percorso e primo obiettivo prima di lasciare il campo.'],
        ],
      },
      {
        title: 'Quante persone possono giocare insieme a PEAK?',
        paragraphs: [
          'La pagina ufficiale Steam dice che puoi invitare fino a tre altri scout. Si tratta quindi di un host più tre giocatori, quattro persone in totale. Un gruppo più piccolo può iniziare senza aspettare di riempire la lobby.',
          'La FAQ ufficiale Landfall conferma che il gioco in solitaria è disponibile offline. Il solo è una modalità prevista, non una lobby cooperativa incompleta. Il numero massimo e la compatibilità tra piattaforme sono questioni diverse.',
          'Prima degli inviti, stabilisci host e canale di comunicazione, poi scegli invito Steam o codice stanza. Quando tutti sono entrati, il prossimo punto sicuro conta più della dimensione del gruppo.',
        ],
        bullets: [
          ['Massimo quattro', 'Un host e fino a tre altri scout.'],
          ['I gruppi piccoli vanno bene', 'Non devi riempire tutti i posti.'],
          ['Il solo è supportato', 'La FAQ ufficiale indica il gioco offline in solitaria.'],
        ],
      },
      {
        title: 'Crossplay in PEAK: stato attuale e piano ufficiale',
        paragraphs: [
          'Separa la piattaforma giocabile oggi dall’obiettivo annunciato. In questa guida lo stato documentato è Steam/PC. La FAQ ufficiale Landfall dice che il team sta lavorando alle console e che PEAK sarà multipiattaforma, con altre notizie previste più avanti nell’anno.',
          'Il Patch 2.04.a spiega che i codici stanza preparano questo collegamento futuro quando i port console saranno disponibili. È una spiegazione dello scopo, non la conferma che una partita mista PC-console sia già aperta.',
          'Per una partita attuale usa amici Steam o il codice stanza. Prima di organizzare una sessione tra piattaforme, ricontrolla gli annunci ufficiali. Non descrivere il crossplay come impossibile per sempre né come già attivo.',
        ],
        image: media('/media/peak-map-route.webp', 'Vista di un percorso di PEAK mentre la squadra prepara il tratto successivo', 'Contesto del percorso: stato della piattaforma e mappa attiva sono controlli separati.'),
        bullets: [
          ['Partita attuale', 'Considera Steam/PC come la piattaforma giocabile documentata qui.'],
          ['Piano ufficiale', 'Console e crossplay sono descritti come lavori in corso.'],
          ['Niente promesse anticipate', 'Controlla gli annunci prima di organizzare una lobby mista.'],
        ],
      },
      {
        title: 'Matchmaking, amici Steam e ricerca di compagni',
        paragraphs: [
          'Un codice stanza non è matchmaking. La FAQ Landfall dice che PEAK non ha matchmaking e funziona con gli amici Steam. Il codice identifica una lobby già ospitata; non crea una coda pubblica e non sceglie compagni casuali.',
          'Se conosci già il gruppo, usa gli amici Steam e l’invito o il codice dell’host. Per trovare compagni, la FAQ ufficiale indica il Discord dello sviluppatore. È un punto d’incontro della community, non una funzione automatica di matchmaking nel gioco.',
          'Quando il gruppo è pronto, concorda host, accesso e canale di comunicazione. Il' + articleLink('items', 'catalogo degli oggetti di PEAK') + 'aiuta a usare nomi coerenti; se c’è un obiettivo di piattaforma, consulta anche la' + articleLink('achievements', 'guida agli obiettivi') + '.',
        ],
        bullets: [
          ['Gruppo già noto', 'Usa amici Steam e invito o codice dell’host.'],
          ['Cerchi compagni', 'Usa il Discord ufficiale come punto d’incontro.'],
          ['Prima di partire', 'Concorda host, accesso, percorso e comunicazione.'],
        ],
      },
      {
        title: 'Come impedire a sconosciuti di entrare nella lobby',
        paragraphs: [
          'La FAQ Landfall contiene una risposta specifica per il caso in cui un giocatore casuale entri senza invito. I passaggi ufficiali sono impostare Lobby Mode su Invite Only, rendere il profilo Steam Private e ricreare la lobby dopo la modifica.',
          'L’host può espellere chi è già dentro. La FAQ precisa che un giocatore espulso non può rientrare nella partita di quell’host. È una misura di privacy della lobby, non un’impostazione del matchmaking.',
          'Per una partita privata, controlla le impostazioni prima di condividere il codice e invialo solo al gruppo. Se è comparso in streaming o in un post pubblico, nascondilo e crea una nuova lobby invece di considerare privato il codice precedente.',
        ],
        image: media('/media/peak-coop-climb.webp', 'Giocatori di PEAK si riuniscono in un tratto sicuro prima di proseguire', 'Schermata ufficiale Steam: una lobby controllata rende più semplice coordinarsi prima della partenza.'),
        bullets: [
          ['Attiva Invite Only', 'Modifica Lobby Mode seguendo la FAQ ufficiale.'],
          ['Controlla Steam', 'Imposta il profilo Steam su Private.'],
          ['Ricrea la lobby', 'Apri una nuova lobby dopo la modifica.'],
          ['Rimuovi l’intruso', 'L’host può espellerlo e non potrà rientrare in quella partita.'],
        ],
      },
      {
        title: 'Risoluzione ufficiale dei problemi di connessione',
        paragraphs: [
          'Se un invito o un codice non funziona, usa la lista aggiornata nella FAQ Landfall. Include manutenzione Steam, verifica dei file di gioco, eccezioni per firewall o antivirus, controlli relativi a VPN e cFosSpeed e problemi legati a mod o installazione.',
          'Non significa che ogni errore abbia la stessa causa. Segui il punto pertinente e riprova l’invito Steam o JOIN GAME. Se il problema resta poco chiaro, indica piattaforma, metodo d’ingresso e messaggio visibile sul Discord ufficiale o nella community Steam, senza inventare una soluzione specifica di PEAK.',
          'Quando chiedi aiuto, indica se hai usato invito o codice, se hai raggiunto JOIN GAME, se la lobby era Invite Only e quale messaggio è comparso. Questi dettagli aiutano a distinguere privacy, connessione e piattaforma.',
        ],
        bullets: [
          ['Inizia dalla FAQ', 'Usa la sezione attuale su connessione e Photon.'],
          ['Segna il metodo', 'Indica invito Steam o codice inserito in JOIN GAME.'],
          ['Conserva il messaggio', 'Aggiungi piattaforma, impostazioni della lobby e testo esatto.'],
        ],
      },
      {
        title: 'Checklist per giocare a PEAK in cooperativa',
        paragraphs: [
          'Prima di iniziare, scegli l’host e decidi se usare un invito Steam o un codice stanza. Con il codice, copialo dal menu di pausa e condividilo in privato. Se vuoi chiudere la lobby, attiva Invite Only e controlla la privacy Steam prima di ospitare di nuovo.',
          'Quando tutti sono entrati, controlla la' + articleLink('map-rotation#today-map', ' mappa di PEAK di oggi') + 'e prepara un piano breve per il primo tratto. Usa il' + articleLink('items', 'catalogo oggetti') + 'per i nomi dell’equipaggiamento e la' + articleLink('achievements', 'guida agli obiettivi') + 'se il gruppo punta a un obiettivo Steam.',
          'Tieni separati l’ingresso nella lobby e l’inizio della scalata. Inserire correttamente il codice prova solo che il giocatore è entrato; non prova che il percorso sia sicuro o che la squadra abbia deciso chi esplora, chi conserva il recupero e quando fermarsi.',
        ],
        bullets: [
          ['1. Scegli l’host', 'Definisci una lobby e un canale di comunicazione.'],
          ['2. Scegli l’accesso', 'Usa un invito Steam o condividi il codice in privato.'],
          ['3. Proteggi la lobby', 'Usa Invite Only e le impostazioni Steam quando serve.'],
          ['4. Pianifica il percorso', 'Controlla la mappa del giorno, nomina l’equipaggiamento e fissa il primo obiettivo sicuro.'],
        ],
      },
      {
        title: 'Passo successivo per una cooperativa più stabile',
        paragraphs: [
          'Quando l’accesso funziona, passa alla coordinazione del percorso. Leggi' + articleLink('how-to-play-peak', ' come giocare a PEAK') + ', controlla la' + articleLink('map-rotation#today-map', ' mappa di oggi') + ', usa il' + articleLink('items', 'catalogo degli oggetti') + 'per parlare dell’equipaggiamento e continua con la' + articleLink('achievements', 'guida agli obiettivi') + 'se il progresso Steam fa parte del piano.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ multiplayer e codici stanza di PEAK',
      items: [
        ['PEAK ha i codici stanza?', 'Sì. Il Patch 2.04.a li ha aggiunti. L’host copia il codice nel menu di pausa della lobby e chi entra lo inserisce tramite JOIN GAME.'],
        ['Come funzionano i codici stanza di PEAK?', 'L’host condivide il codice e i giocatori lo inseriscono in JOIN GAME. Il codice porta a una lobby esistente, non a una coda di matchmaking casuale.'],
        ['PEAK supporta il crossplay?', 'La versione giocabile documentata ora è Steam/PC. Landfall sta lavorando alle console e dice che PEAK sarà multipiattaforma: il crossplay va quindi descritto come previsto, non come già attivo.'],
        ['Quante persone possono giocare insieme?', 'La descrizione ufficiale supporta un host più fino a tre altri scout, quattro giocatori in totale. È disponibile anche il solo offline.'],
        ['PEAK ha il matchmaking?', 'No. La FAQ Landfall descrive PEAK come gioco per amici Steam e senza matchmaking. Usa amici Steam, codici stanza o il Discord ufficiale.'],
        ['Come impedisco agli sconosciuti di entrare nella lobby?', 'Imposta Lobby Mode su Invite Only, il profilo Steam su Private e ricrea la lobby. L’host può espellere un giocatore, che non potrà rientrare in quella partita.'],
      ],
    },
    source: {
      eyebrow: 'Fonti ufficiali e limiti di stato',
      title: 'Cosa conferma questa guida multiplayer',
      body: 'Il funzionamento dei codici, l’ingresso JOIN GAME, lo scopo futuro per il crossplay e la continuità degli inviti Steam provengono dall’annuncio ufficiale Patch 2.04.a. Numero di giocatori e modalità online/offline provengono dalla pagina ufficiale Steam. La FAQ Landfall fornisce le informazioni su matchmaking, piano delle piattaforme, Discord, privacy della lobby e connessione. Controlla le pagine ufficiali prima di organizzare una partita tra piattaforme.',
      links: [
        ['Pagina ufficiale Steam di PEAK', sourceLinks.steam],
        ['Patch 2.04.a: THE KILN IS BACK', sourceLinks.patch204],
        ['FAQ ufficiale PEAK di Landfall', sourceLinks.faq],
        ['Discord ufficiale di PEAK', sourceLinks.discord],
      ],
    },
    related: [
      ['items', 'Apri il catalogo oggetti di PEAK'],
      ['how-to-play-peak', 'Ripassa come giocare a PEAK'],
      ['map-rotation', 'Vedi la mappa di PEAK di oggi'],
      ['achievements', 'Pianifica gli obiettivi'],
    ],
    relatedLabel: 'Guide PEAK correlate',
  },
};
