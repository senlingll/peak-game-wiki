const articleLink = (slug, label) => `[[link:${slug}|${label}]]`;

const media = (src, alt, caption) => ({
  src,
  width: 1200,
  height: 675,
  alt,
  caption,
});

export const controllerSupportTranslations = {
  zh: {
    primaryKeyword: 'PEAK 手柄支持',
    meta: {
      title: 'PEAK 支持手柄吗？PC 连接、键位与排错指南',
      description: 'PEAK 支持手柄吗？查看 Steam 官方支持信息，了解 PC 连接、Xbox/PS4/PS5 手柄、键鼠对比与常见输入问题。',
      schema: '一份有来源边界的 PEAK 手柄指南，说明 Steam 官方支持字段、PC 设置步骤、键鼠对比、排错方法和限制。',
    },
    eyebrow: '输入方式指南 · 2026 年 10 月 30 日核对',
    h1: 'PEAK 支持手柄吗？',
    intro: '支持。官方 Steam 页面目前显示 Windows PC 版支持完整 Xbox 手柄，并列出 PS4 与 PS5 手柄支持。本指南说明这些字段能证明什么、如何安全测试手柄，以及游戏仍显示键盘提示或收不到输入时该怎么排查。',
    answerLabel: '先看结论',
    answer: '当前 Steam PC 版 PEAK 可以使用兼容手柄游玩。Steam 列出完整 Xbox 手柄支持，也列出 PS4 与 PS5 手柄支持；但商店页没有为每种设备、无线模式或未来版本发布一张永久键位表。连接手柄后，先在安全区域测试移动、抓取、跳跃、物品栏和暂停菜单，再根据当前菜单调整 Steam 或游戏内布局。',
    tocLabel: '本页内容',
    tocFaq: '手柄 FAQ',
    heroImage: media('/media/peak-climb-ridge.webp', 'PEAK 第一人称攀爬场景，画面显示绳索互动提示', 'Steam 官方实机截图，展示互动提示；它说明的是游戏场景，不是手柄键位图。'),
    sections: [
      {
        title: 'PEAK 手柄支持：Steam 官方页面确认了什么',
        paragraphs: [
          '官方 PEAK 商店页是当前支持信息的首要来源。手柄元数据显示完整 Xbox 手柄支持，并列出 PS4 与 PS5 手柄支持；两个 PlayStation 条目也标记了蓝牙支持。这足以回答基础问题：兼容手柄是 Steam PC 版支持的输入方式。',
          '这些字段没有发布统一按键表，也没有保证每个第三方手柄、转接器或自定义布局都完全相同。把“支持”当作起点，进入当前版本后测试移动、镜头、抓取、跳跃、物品选择和暂停菜单。Steam 识别到设备，也不代表游戏内每个动作已经符合你的布局。',
        ],
        table: {
          caption: '官方 Steam 手柄字段的含义',
          headers: ['商店信号', '可以确认', '不能确认'],
          rows: [
            ['完整 Xbox 手柄支持', 'Xbox 风格手柄属于 PC 版支持的输入类别。', '每个第三方型号、转接器或自定义布局都完全相同。'],
            ['PS4 手柄支持', 'PS4 手柄被列为支持设备，元数据也标记蓝牙支持。', '某一根线材、驱动或无线接收器一定可用。'],
            ['PS5 手柄支持', 'PS5 手柄被列为支持设备，元数据也标记蓝牙支持。', '游戏一定显示 PlayStation 图标，或一定开放所有重映射选项。'],
            ['Windows Steam 版本', '商店页面描述的是当前有记录的 PC 版本。', '手柄字段证明主机版本或跨平台联机已经上线。'],
          ],
        },
      },
      {
        title: '如何在 PC 上用手柄玩 PEAK',
        paragraphs: [
          '加载重要远征前，先做一次短输入测试。目标不是背下一张固定键位表，而是确认当前版本能看到设备，并且你依赖的动作触手可及。建议在远征开始处的安全区域开新局测试，这样抓取失误不会立刻消耗队伍的救援资源。',
          '下面的图片展示的是 PEAK 实机环境，不是设置页面。对照其他指南时也要区分这两件事：官方商店确认设备类别，正在运行的游戏才确认你这台设备看到的提示和标签。',
        ],
        bullets: [
          ['1. 连接手柄', '启动 PEAK 前插入或配对手柄，并确认 Windows 与 Steam 都能看到它。'],
          ['2. 开始安全测试', '开新局检查移动、镜头、抓取、跳跃、物品栏和暂停菜单。'],
          ['3. 阅读当前提示', '如果仍显示键盘图标，先测试动作并查看当前控制布局，不要马上认定不支持。'],
          ['4. 一次只改一层', '确有需要时再切换或编辑 Steam 的单游戏布局，然后重复同一个动作测试。'],
          ['5. 保留备用输入', '手柄完整通过短路线测试前，保留键鼠作为退路。'],
        ],
        image: media('/media/peak-coop-climb.webp', '两名 PEAK Scout 一起穿过明亮的岛屿路线', 'Steam 官方实机截图，用于说明安全的联机输入测试；它不是手柄键位图。'),
      },
      {
        title: 'PEAK 手柄和键鼠怎么选',
        paragraphs: [
          '没有一种输入方式对所有人都更好。手柄可能更适合移动、镜头和长时间游玩；键鼠可能让菜单操作或精细镜头修正更快。PEAK 同时考验攀爬耐力和窄平台判断，因此舒适度以及抓取、跳跃、物品操作是否稳定，比照搬其他玩家偏好更重要。',
          '把下表当作决策参考，不要当成性能保证。用同一条短路线分别测试两种输入，并记录哪一个动作最容易失误。保持路线和装备不变，才能比较输入手感，而不是比较不同地图或队伍计划。',
        ],
        table: {
          caption: '短路线练习中的输入方式选择',
          headers: ['任务', '手柄可能更适合的情况', '键鼠可能更适合的情况'],
          rows: [
            ['移动与镜头', '模拟移动和熟悉的镜头握法能减少手部疲劳。', '你习惯键盘移动与快速鼠标转镜头。'],
            ['攀爬与抓取', '抓取键容易触达，拇指无需离开移动摇杆。', '你想沿用已熟悉的键盘或鼠标按键。'],
            ['物品与工具', '快捷栏易于触达，不必把视线从路线移开。', '数字键或滚轮让切换栏位更直接。'],
            ['长时间联机', '手柄握姿舒适，线缆或电量状态稳定。', '桌面布局便于同时处理聊天、截图和排错记录。'],
          ],
        },
        image: media('/media/peak-map-route.webp', 'PEAK Scout 在熔岩危险旁使用绳索，画面可见抓取提示', 'Steam 官方实机截图，展示互动提示；提示样式可能与手柄图标不同。'),
      },
      {
        title: 'PEAK 手柄不能用：先做这些安全检查',
        paragraphs: [
          '手柄问题可能来自设备、Steam、游戏本身或冲突的重映射程序。一次只改一个变量，然后重复同一段短测试。这样可以把连接问题和单个按键缺失区分开，也能在需要反馈时提供有用信息。',
          '单独看到键盘提示，并不能证明 PEAK 不支持手柄。提示可能反映当前布局、上一次使用的设备，或游戏尚未重新读取设备。先在运行中的版本测试动作，再记录手柄型号、有线或蓝牙模式、系统、提示文字和结果。',
        ],
        table: {
          caption: '按症状排查 PEAK 手柄输入',
          headers: ['症状', '先做什么比较', '不要直接假设'],
          rows: [
            ['完全没有输入', '确认 Windows 与 Steam 能看到手柄，再重连并开新测试。', '游戏永远不兼容任何手柄。'],
            ['移动正常但某个提示不对', '分别测试抓取、跳跃、物品栏和暂停菜单。', '一个动作缺失就等于全部支持失败。'],
            ['输入重复触发', '关闭其他重映射或虚拟设备，只保留一个布局测试。', '一次改很多键位就能找到原因。'],
            ['无线输入中断', '用有线连接对比，并检查电量与接收器状态。', '指南能保证所有蓝牙适配器。'],
            ['朋友的结果不同', '比较设备、布局、平台和游戏版本，再决定是否改房间。', '手柄输入会改变房间码或跨平台支持。'],
          ],
        },
        bullets: [
          ['保持可逆', '先重连、关闭一个重映射程序或恢复一个布局，再尝试其他改动。'],
          ['只在相关时验证文件', 'Steam 文件验证适合更广泛的安装问题，不应成为单个陌生按键的第一步。'],
          ['分开输入与网络', `手柄支持不会决定好友能否加入；联机问题请看${articleLink('room-codes', '房间码指南')}。`],
          ['记录证据', '反馈时写明型号、连接方式、版本、动作、提示和结果，不要只说“手柄坏了”。'],
        ],
      },
      {
        title: '手柄结论不代表哪些事情',
        paragraphs: [
          `官方商店字段回答的是设备支持问题，不是 PEAK 周边的所有平台问题。它不能证明主机版本、PC 与主机混合联机、最终跨平台规则或永久键位表。相关问题请查看${articleLink('peak-crossplay-guide', '跨平台状态指南')}和${articleLink('room-codes', '多人游戏与房间码指南')}，不要从手柄图标推断。`,
          '输入支持也会随版本变化。更新后商店页面与已安装版本可能显示不同提示或设置。补丁改变输入行为时，重新查看实时商店页和游戏内控制菜单，把本文当作决策指南，而不是对某个未测试转接器或自定义布局的承诺。',
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答',
      title: 'PEAK 手柄支持 FAQ',
      items: [
        ['PEAK 支持手柄吗？', '支持。官方 Steam 页面目前显示 Windows PC 版支持完整 Xbox 手柄，并列出 PS4 与 PS5 手柄支持。'],
        ['可以在 PC 上用手柄玩 PEAK 吗？', '可以。连接兼容手柄，开一段安全短路线，并在当前版本测试移动、抓取、跳跃、物品栏和暂停菜单。'],
        ['PEAK 支持 PS5 和 Xbox 手柄吗？', 'Steam 列出完整 Xbox 手柄支持和 PS5 手柄支持，也列出 PS4 支持及 PlayStation 条目的蓝牙支持；具体提示和布局仍可能因设备不同而变化。'],
        ['为什么 PEAK 仍然显示键盘提示？', '键盘提示可能来自当前布局或上一次使用的设备。测试动作，查看当前控制设置，并一次只改一个 Steam 或游戏内布局。'],
        ['手柄能和 PEAK 房间码一起用吗？', `可以。手柄输入和加入大厅是两件事；游戏时使用手柄，主机、邀请和 JOIN GAME 步骤请看${articleLink('room-codes', '房间码指南')}。`],
        ['PEAK 用手柄比键鼠好吗？', '没有统一答案。用同一条短路线比较，选择让你的移动、镜头、抓取和物品操作最稳定的设置。'],
        ['支持手柄是否代表 PEAK 已经支持主机跨平台？', `不代表。手柄字段描述的是 Steam PC 列表，不能证明主机版本或 PC 与主机联机已上线；请看带日期的${articleLink('peak-crossplay-guide', '跨平台指南')}。`],
      ],
    },
    source: {
      eyebrow: '来源与限制',
      title: '固定日期核对 Steam 支持元数据',
      body: '本文的手柄类别和蓝牙字段于 2026 年 10 月 30 日在官方 PEAK Steam 页面核对。该页面支持设备层面的结论，但没有发布每个键位、转接器保证、主机版本细节或未来输入改动。设置与排错部分是实战建议，补丁改变提示后请以当前游戏菜单为准。',
      links: [
        ['PEAK 官方 Steam 页面', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Landfall 官方 PEAK FAQ', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', '阅读 PEAK 新手操作指南'],
      ['room-codes', '加入 PEAK 联机大厅'],
      ['peak-crossplay-guide', '查看当前跨平台状态'],
      ['peak-photon-troubleshooting', '排查连接问题'],
    ],
    relatedLabel: '相关 PEAK 输入与联机指南',
  },
  es: {
    primaryKeyword: 'soporte de mando PEAK',
    meta: {
      title: '¿PEAK tiene soporte para mando? Configuración en PC',
      description: '¿PEAK tiene soporte para mando? Consulta la ficha oficial de Steam, conecta un mando en PC, compara controles y soluciona fallos comunes.',
      schema: 'Guía de soporte de mando para PEAK con señales oficiales de Steam, configuración en PC, comparación con teclado y ratón y solución de problemas.',
    },
    eyebrow: 'Guía de controles - comprobada el 30 de octubre de 2026',
    h1: '¿PEAK tiene soporte para mando?',
    intro: 'Sí. La página oficial de Steam muestra compatibilidad completa con mandos Xbox y compatibilidad con mandos PS4 y PS5 para la versión de Windows. Esta guía explica qué confirma ese dato, cómo probar un mando de forma segura y qué revisar si el juego sigue mostrando indicaciones de teclado.',
    answerLabel: 'Respuesta rápida',
    answer: 'Puedes jugar PEAK con un mando en la versión de Steam para PC. Steam indica soporte completo para Xbox y soporte para PS4 y PS5, pero no publica un mapa permanente de botones para cada dispositivo, modo inalámbrico o versión futura. Conecta el mando, prueba movimiento, agarre, salto, objetos y pausa en una zona segura, y cambia solo una capa de configuración cada vez.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas sobre mandos',
    heroImage: media('/media/peak-climb-ridge.webp', 'Escena de escalada en primera persona de PEAK con un aviso de interacción con una cuerda', 'Captura oficial de Steam con una indicación de interacción; muestra el contexto del juego, no un mapa de botones del mando.'),
    sections: [
      {
        title: 'Soporte de mando de PEAK: qué confirma Steam',
        paragraphs: [
          'La ficha oficial de PEAK es la fuente principal para la señal de compatibilidad actual. Sus datos de mandos marcan soporte completo para Xbox y soporte para PS4 y PS5; las entradas de PlayStation también indican compatibilidad Bluetooth. Esto responde a la pregunta básica: un mando compatible es un método admitido en la versión de Steam para PC.',
          'Los datos no publican una tabla universal de botones ni garantizan que todos los mandos, adaptadores o diseños personalizados se comporten igual. Usa el soporte como punto de partida y prueba movimiento, cámara, agarre, salto, objetos y pausa en la versión que tienes instalada.',
        ],
        table: {
          caption: 'Qué significan los campos de mandos de Steam',
          headers: ['Señal de la tienda', 'Qué confirma', 'Qué no confirma'],
          rows: [
            ['Soporte completo para Xbox', 'Los mandos de estilo Xbox pertenecen a la categoría admitida en PC.', 'Que todos los modelos o adaptadores funcionen igual.'],
            ['Soporte para PS4', 'La ficha incluye mandos PS4 y marca Bluetooth en sus datos.', 'Que cada cable, controlador o receptor inalámbrico esté garantizado.'],
            ['Soporte para PS5', 'La ficha incluye mandos PS5 y marca Bluetooth en sus datos.', 'Que siempre aparezcan iconos PlayStation o exista cada opción de reasignación.'],
            ['Versión Steam para Windows', 'La página describe la versión de PC documentada actualmente.', 'Que exista una versión de consola o juego cruzado activo.'],
          ],
        },
      },
      {
        title: 'Cómo jugar PEAK con mando en PC',
        paragraphs: [
          'Haz una prueba corta antes de cargar una expedición importante. El objetivo es confirmar que el juego detecta el dispositivo y que las acciones necesarias resultan cómodas. Empieza una partida nueva cerca del inicio, donde un agarre fallido no cueste inmediatamente un objeto de rescate.',
          'La imagen siguiente muestra contexto de juego, no una pantalla de ajustes. La tienda confirma categorías de dispositivos; el juego en ejecución confirma los avisos y etiquetas de tu equipo.',
        ],
        bullets: [
          ['1. Conecta el mando', 'Conéctalo o emparéjalo antes de abrir PEAK y comprueba que Windows y Steam lo detectan.'],
          ['2. Haz una prueba segura', 'Comprueba movimiento, cámara, agarre, salto, un objeto y el menú de pausa.'],
          ['3. Lee el aviso actual', 'Si aparece un icono de teclado, prueba la acción y revisa el diseño activo antes de concluir que no funciona.'],
          ['4. Cambia una sola capa', 'Ajusta el diseño por juego de Steam solo si hace falta y repite la misma prueba.'],
          ['5. Conserva una alternativa', 'Mantén teclado y ratón hasta superar una prueba corta completa.'],
        ],
        image: media('/media/peak-coop-climb.webp', 'Dos Scouts de PEAK avanzan juntos por una ruta de isla luminosa', 'Captura oficial de Steam para una prueba segura en cooperativo; no es un diagrama de controles.'),
      },
      {
        title: 'Mando frente a teclado y ratón en PEAK',
        paragraphs: [
          'No hay una opción universalmente mejor. El mando puede resultar natural para el movimiento, la cámara y las sesiones largas; teclado y ratón pueden sentirse más rápidos en menús o correcciones precisas de cámara. La comodidad y el acceso fiable a agarrar, saltar y usar objetos importan más que copiar la preferencia de otro jugador.',
          'Usa la tabla como ayuda para decidir, no como promesa de rendimiento. Prueba la misma ruta corta con cada método y mantén iguales el mapa y el equipo.',
        ],
        table: {
          caption: 'Elección de control durante una práctica corta',
          headers: ['Tarea', 'Cuándo puede ayudar el mando', 'Cuándo puede ayudar teclado y ratón'],
          rows: [
            ['Movimiento y cámara', 'El movimiento analógico reduce la fatiga y resulta familiar.', 'Prefieres separar movimiento de teclado y cámara rápida de ratón.'],
            ['Escalada y agarre', 'El botón de agarre queda cerca sin soltar el movimiento.', 'Ya dominas una tecla o botón de ratón concreto.'],
            ['Objetos y herramientas', 'Las ranuras activas son fáciles de alcanzar durante la ruta.', 'Las teclas numéricas o la rueda cambian ranuras directamente.'],
            ['Sesiones cooperativas', 'La postura es cómoda y el cable o batería son estables.', 'Tu escritorio facilita chat, capturas y notas de diagnóstico.'],
          ],
        },
        image: media('/media/peak-map-route.webp', 'Scout de PEAK usa una cuerda junto a lava con un aviso de agarre visible', 'Captura oficial de Steam con un aviso de interacción; el estilo puede diferir del icono del mando.'),
      },
      {
        title: 'El mando de PEAK no funciona: comprobaciones seguras',
        paragraphs: [
          'El problema puede estar en el dispositivo, Steam, el juego o un remapeador en conflicto. Cambia una variable cada vez y repite la misma prueba corta. Así separas una conexión fallida de un solo botón sin asignar y obtienes datos útiles para informar del problema.',
          'Un aviso de teclado no demuestra por sí solo que falte soporte. Puede reflejar el diseño activo o el último dispositivo usado. Anota el modelo, la conexión, el sistema, el aviso visible y el resultado de cada acción.',
        ],
        table: {
          caption: 'Comprobaciones de PEAK según el síntoma',
          headers: ['Síntoma', 'Primera comparación', 'No des por hecho'],
          rows: [
            ['No hay ninguna entrada', 'Confirma que Windows y Steam ven el mando, reconecta y prueba una partida nueva.', 'Que el juego sea incompatible con todos los mandos.'],
            ['El movimiento funciona pero falta un aviso', 'Prueba por separado agarre, salto, objetos y pausa.', 'Que una acción ausente anule todo el soporte.'],
            ['La entrada se duplica', 'Cierra remapeadores o dispositivos virtuales y deja un diseño activo.', 'Que cambiar muchos botones a la vez ayude.'],
            ['La conexión inalámbrica cae', 'Compara con cable y revisa batería y receptor.', 'Que una guía garantice cualquier adaptador Bluetooth.'],
            ['El resultado difiere del de un amigo', 'Compara dispositivo, diseño, plataforma y versión.', 'Que el mando cambie los códigos de sala o el juego cruzado.'],
          ],
        },
        bullets: [
          ['Haz cambios reversibles', 'Reconecta, cierra un remapeador o restaura un diseño antes de probar otra cosa.'],
          ['Verifica archivos solo si procede', 'La verificación de Steam sirve para problemas amplios de instalación, no como primera respuesta a un botón extraño.'],
          ['Separa entrada y red', `El mando no decide si un amigo puede entrar; consulta la ${articleLink('room-codes', 'guía de códigos de sala')}.`],
          ['Registra pruebas', 'Indica modelo, conexión, versión, acción, aviso y resultado en lugar de decir solo “no funciona”.'],
        ],
      },
      {
        title: 'Lo que la respuesta sobre mandos no promete',
        paragraphs: [
          `Los campos de la tienda responden a la compatibilidad del dispositivo, no a todas las preguntas de plataforma. No demuestran una versión de consola, una sesión PC-consola, una política final de juego cruzado ni un mapa de botones permanente. Para eso, consulta la ${articleLink('peak-crossplay-guide', 'guía de juego cruzado')} y la ${articleLink('room-codes', 'guía multijugador y de códigos de sala')}.`,
          'El soporte puede cambiar con una actualización. Vuelve a comprobar la ficha y el menú de controles cuando cambien los avisos, y trata esta página como orientación, no como garantía para un adaptador o diseño no probado.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'Preguntas frecuentes sobre mandos en PEAK',
      items: [
        ['¿PEAK tiene soporte para mando?', 'Sí. Steam muestra soporte completo para Xbox y soporte para mandos PS4 y PS5 en la versión de Windows para PC.'],
        ['¿Se puede jugar PEAK con mando en PC?', 'Sí. Conecta un mando compatible y prueba movimiento, agarre, salto, objetos y pausa en la versión actual.'],
        ['¿PEAK admite mandos PS5 y Xbox?', 'Steam lista soporte completo para Xbox y soporte para PS5, además de PS4 y Bluetooth en las entradas de PlayStation. Los avisos pueden variar por dispositivo.'],
        ['¿Por qué PEAK sigue mostrando avisos de teclado?', 'Puede estar activo otro diseño o ser el último dispositivo usado. Prueba la acción y cambia una sola configuración cada vez.'],
        ['¿Puedo usar mando con los códigos de sala de PEAK?', `Sí. La entrada y la sala son asuntos separados; usa la ${articleLink('room-codes', 'guía de códigos de sala')} para invitar y entrar.`],
        ['¿Es mejor el mando que teclado y ratón?', 'No hay un ganador universal. Compara la misma ruta y elige el método que haga fiables tus acciones.'],
        ['¿El soporte de mando significa que PEAK tiene juego cruzado de consola?', `No. Describe la ficha de PC. Consulta la ${articleLink('peak-crossplay-guide', 'guía de juego cruzado')} para el estado de plataformas.`],
      ],
    },
    source: {
      eyebrow: 'Fuentes y límites',
      title: 'Metadatos de Steam comprobados en una fecha fija',
      body: 'Las categorías de mando y los indicadores Bluetooth se comprobaron en la página oficial de PEAK en Steam el 30 de octubre de 2026. La ficha permite responder sobre el dispositivo, pero no publica cada asignación, adaptador, consola o cambio futuro. Confirma el menú del juego después de cada actualización.',
      links: [
        ['Página oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['FAQ oficial de PEAK de Landfall', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'Leer la guía básica de controles de PEAK'],
      ['room-codes', 'Entrar en una sala cooperativa de PEAK'],
      ['peak-crossplay-guide', 'Comprobar el estado del juego cruzado'],
      ['peak-photon-troubleshooting', 'Solucionar problemas de conexión'],
    ],
    relatedLabel: 'Guías relacionadas de controles y multijugador',
  },
  ja: {
    primaryKeyword: 'PEAK コントローラー対応',
    meta: {
      title: 'PEAKはコントローラー対応？PC接続と設定・対処法',
      description: 'PEAKはコントローラーに対応していますか？Steam公式情報、PCでの接続、キーボード比較、入力トラブルの確認方法を解説します。',
      schema: 'Steam公式の対応情報、PC設定、入力方法の比較、トラブル対処をまとめたPEAKコントローラーガイド。',
    },
    eyebrow: '入力ガイド・2026年10月30日確認',
    h1: 'PEAKはコントローラーに対応していますか？',
    intro: '対応しています。公式SteamページではWindows PC版について、Xboxコントローラーの完全対応とPS4・PS5コントローラーの対応が表示されています。このページでは、公式情報で確認できる範囲、安全な接続テスト、キーボード表示が残る場合の確認方法をまとめます。',
    answerLabel: '結論',
    answer: '現在のSteam PC版PEAKは対応コントローラーで遊べます。SteamにはXbox完全対応、PS4・PS5対応が記載されていますが、すべての機器や無線方式に共通する固定ボタン表までは公開されていません。接続後は安全な場所で移動、つかむ、ジャンプ、アイテム、ポーズを確認し、設定は一度に一つだけ変更してください。',
    tocLabel: 'このページ',
    tocFaq: 'コントローラーFAQ',
    heroImage: media('/media/peak-climb-ridge.webp', 'ロープの操作表示が見えるPEAKの一人称クライミング画面', 'Steam公式ゲームプレイ画像。操作表示の例であり、コントローラーのボタン表ではありません。'),
    sections: [
      {
        title: 'PEAKのコントローラー対応でSteamが確認していること',
        paragraphs: [
          '現在の対応情報を確認する第一の資料は公式Steamページです。コントローラーのメタデータにはXbox完全対応、PS4・PS5対応があり、PlayStationの項目にはBluetooth対応も表示されています。つまり、対応するコントローラーはSteam PC版の入力方法として想定されています。',
          'ただし、すべての機種やアダプターで同じ動作をするという保証や、永久的なボタン表が公開されているわけではありません。実際のビルドで移動、カメラ、つかむ、ジャンプ、アイテム、ポーズを順番に確認しましょう。',
        ],
        table: {
          caption: 'Steamの対応フィールドが示す範囲',
          headers: ['ストアの表示', '確認できること', '確認できないこと'],
          rows: [
            ['Xboxコントローラー完全対応', 'Xbox系コントローラーがPC版の対応入力に含まれる。', 'すべての機種やアダプターが同じ動作をすること。'],
            ['PS4対応', 'PS4コントローラーが対応として掲載され、Bluetooth表示もある。', '特定のケーブルや受信機が必ず動くこと。'],
            ['PS5対応', 'PS5コントローラーが対応として掲載され、Bluetooth表示もある。', '常にPlayStationのボタン表示になること。'],
            ['Windows Steam版', '現在案内されているPC版の情報である。', 'コンソール版やライブのクロスプレイを証明すること。'],
          ],
        },
      },
      {
        title: 'PCでPEAKをコントローラーで遊ぶ手順',
        paragraphs: [
          '大切な遠征を読み込む前に短い入力テストを行います。目的は固定ボタンを暗記することではなく、ゲームが機器を認識し、必要な動作を無理なく行えることを確認することです。開始地点近くの安全な場所で新しいランを使えば、失敗の代償を小さくできます。',
          '下の画像は設定画面ではなくゲームの状況を示すものです。ストアは対応カテゴリーを示し、実際のゲームがあなたの環境で表示するラベルを確定します。',
        ],
        bullets: [
          ['1. 接続する', '起動前に有線またはBluetoothで接続し、WindowsとSteamが認識していることを確認します。'],
          ['2. 安全に試す', '移動、カメラ、つかむ、ジャンプ、アイテム、ポーズを確認します。'],
          ['3. 表示を見る', 'キーボード表示が出ても、まず動作を試し、現在のレイアウトを確認します。'],
          ['4. 一つずつ変更', '必要な場合だけSteamのゲーム別レイアウトを変更し、同じ動作を再確認します。'],
          ['5. 予備を残す', '短いルートを完了するまではキーボードとマウスを使える状態にします。'],
        ],
        image: media('/media/peak-coop-climb.webp', '明るい島のルートを進むPEAKのScout二人', '安全な協力プレイの入力テストを説明するSteam公式画像で、操作表ではありません。'),
      },
      {
        title: 'PEAKでコントローラーとキーボード・マウスを比較する',
        paragraphs: [
          '全員にとっての正解はありません。コントローラーは移動やカメラ、長時間のプレイで自然に感じる場合があり、キーボードとマウスはメニューや細かな視点変更で扱いやすい場合があります。重要なのは、つかむ、ジャンプ、アイテムの操作を安定して行えることです。',
          '下表は判断材料です。同じ短いルートを両方で試し、マップと装備をそろえて操作感だけを比べてください。',
        ],
        table: {
          caption: '短い練習で見る入力方式の違い',
          headers: ['作業', 'コントローラーが合う場合', 'キーボード・マウスが合う場合'],
          rows: [
            ['移動とカメラ', 'アナログ移動と慣れた持ち方で疲れにくい。', 'キーボード移動と素早いマウス視点が好み。'],
            ['登る・つかむ', '移動スティックから指を離さずボタンに届く。', '慣れたキーやマウスボタンを使いたい。'],
            ['アイテム', '視線をルートから外さずスロットを選べる。', '数字キーやホイールで直接切り替えられる。'],
            ['長い協力プレイ', '姿勢が楽で、ケーブルや電池が安定している。', 'チャット、画像、メモを同じ机で扱える。'],
          ],
        },
        image: media('/media/peak-map-route.webp', '溶岩の近くでロープを使い、つかむ表示が見えるPEAKのScout', 'Steam公式画像。表示の見た目はコントローラーのボタン表示と異なることがあります。'),
      },
      {
        title: 'PEAKのコントローラーが動かないときの確認',
        paragraphs: [
          '原因は機器、Steam、ゲーム、または別のリマッパーに分かれます。一度に一つだけ変えて、同じ短いテストを繰り返してください。これで接続不良と一つの割り当ての問題を分けられます。',
          'キーボード表示だけで非対応とは判断できません。最後に使った機器や現在のレイアウトを表示している場合があります。機種、接続方式、OS、表示された操作、結果を記録しましょう。',
        ],
        table: {
          caption: '症状から始める入力チェック',
          headers: ['症状', '最初に比べること', '決めつけないこと'],
          rows: [
            ['入力がない', 'WindowsとSteamの認識を確認し、再接続して新しいテストを行う。', 'すべてのコントローラーが非対応だということ。'],
            ['移動はできるが表示が違う', 'つかむ、ジャンプ、アイテム、ポーズを個別に試す。', '一つの不足で全機能が失敗したということ。'],
            ['二重入力になる', '別のリマッパーや仮想機器を閉じ、一つのレイアウトにする。', '複数の変更を同時にすれば原因が分かること。'],
            ['無線が切れる', '有線と比較し、電池と受信機を確認する。', 'すべてのBluetoothアダプターを保証できること。'],
            ['友人と結果が違う', '機器、レイアウト、プラットフォーム、ビルドを比較する。', 'コントローラーがルームコードやクロスプレイを変えること。'],
          ],
        },
        bullets: [
          ['戻せる変更にする', '再接続、リマッパーを一つ閉じる、レイアウトを戻す順で試します。'],
          ['ファイル検証は必要な場合だけ', 'Steamの検証は広いインストール問題向けで、単一ボタンの最初の対処ではありません。'],
          ['入力と通信を分ける', `入力は友人が参加できるかを決めません。ロビーは${articleLink('room-codes', 'ルームコードガイド')}で確認します。`],
          ['証拠を残す', '機種、接続、バージョン、操作、表示、結果を具体的に書きます。'],
        ],
      },
      {
        title: 'コントローラー対応から分からないこと',
        paragraphs: [
          `ストアのフィールドは機器の対応を示すだけで、コンソール版、PCとコンソールの混在、最終的なクロスプレイ、固定ボタン表を証明しません。プラットフォームは${articleLink('peak-crossplay-guide', 'クロスプレイ状況ガイド')}と${articleLink('room-codes', 'マルチプレイ・ルームコードガイド')}を確認してください。`,
          '入力仕様はアップデートで変わる場合があります。表示や設定が変わったら、最新のストアとゲーム内メニューを確認し、未確認のアダプターやカスタムレイアウトへの保証としてこの記事を使わないでください。',
        ],
      },
    ],
    faq: {
      eyebrow: '簡単な回答',
      title: 'PEAKコントローラーFAQ',
      items: [
        ['PEAKはコントローラーに対応していますか？', 'はい。公式SteamページにはXbox完全対応、PS4・PS5コントローラー対応が表示されています。'],
        ['PCでコントローラーを使ってPEAKを遊べますか？', '遊べます。接続後、安全な短いルートで移動、つかむ、ジャンプ、アイテム、ポーズを確認してください。'],
        ['PEAKはPS5とXboxに対応していますか？', 'SteamにはXbox完全対応とPS5対応、PS4対応が記載されています。PlayStationの項目にはBluetoothも表示されますが、表示は機器で変わります。'],
        ['なぜPEAKにキーボード表示が出ますか？', '現在のレイアウトや最後に使った機器を反映している可能性があります。操作を試し、一つずつ設定を確認してください。'],
        ['ルームコードとコントローラーは一緒に使えますか？', `使えます。入力とロビー参加は別です。参加手順は${articleLink('room-codes', 'ルームコードガイド')}を参照してください。`],
        ['PEAKはコントローラーの方が有利ですか？', '一律の答えはありません。同じルートで比べ、自分の操作が安定する方法を選びます。'],
        ['コントローラー対応はコンソールとのクロスプレイを意味しますか？', `意味しません。Steam PC版の機器情報です。プラットフォームの状態は${articleLink('peak-crossplay-guide', 'クロスプレイガイド')}で確認してください。`],
      ],
    },
    source: {
      eyebrow: '出典と限界',
      title: 'Steamの対応メタデータを固定日に確認',
      body: 'コントローラーのカテゴリーとBluetooth表示は、2026年10月30日に公式PEAK Steamページで確認しました。ページは機器対応を示しますが、全ボタン、アダプター、コンソール、将来の変更を保証しません。アップデート後はゲーム内メニューを確認してください。',
      links: [
        ['PEAK公式Steamページ', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Landfall公式PEAK FAQ', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'PEAK初心者操作ガイドを読む'],
      ['room-codes', 'PEAKの協力ロビーに参加する'],
      ['peak-crossplay-guide', 'クロスプレイ状況を確認する'],
      ['peak-photon-troubleshooting', '接続問題を確認する'],
    ],
    relatedLabel: '関連する入力・マルチプレイガイド',
  },
  fr: {
    primaryKeyword: 'support manette PEAK',
    meta: {
      title: 'PEAK prend-il en charge une manette ? Guide PC',
      description: 'PEAK prend-il en charge une manette ? Consultez Steam, connectez une manette sur PC, comparez les contrôles et corrigez les problèmes courants.',
      schema: 'Guide PEAK sur la prise en charge des manettes, les données Steam, la configuration PC, la comparaison clavier-souris et le dépannage.',
    },
    eyebrow: 'Guide des contrôles - vérifié le 30 octobre 2026',
    h1: 'PEAK prend-il en charge une manette ?',
    intro: 'Oui. La fiche Steam officielle indique une prise en charge complète des manettes Xbox ainsi qu une prise en charge des manettes PS4 et PS5 pour la version Windows. Ce guide explique ce que cette information confirme, comment tester une manette et quoi vérifier si PEAK affiche encore des touches de clavier.',
    answerLabel: 'Réponse courte',
    answer: 'Vous pouvez jouer à PEAK avec une manette sur la version Steam PC. Steam indique une prise en charge complète Xbox et une prise en charge PS4/PS5, mais la fiche ne publie pas une disposition permanente pour chaque appareil ou mode sans fil. Connectez la manette, testez les actions dans une zone sûre, puis ne modifiez qu un réglage à la fois.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ manette',
    heroImage: media('/media/peak-climb-ridge.webp', 'Escalade à la première personne dans PEAK avec une indication d interaction avec une corde', 'Capture officielle Steam montrant le contexte du jeu, pas une carte de touches de manette.'),
    sections: [
      {
        title: 'Prise en charge des manettes PEAK : ce que Steam confirme',
        paragraphs: [
          'La page officielle de PEAK sur Steam est la meilleure source pour le statut actuel. Ses métadonnées indiquent une prise en charge complète Xbox et une prise en charge PS4 et PS5 ; les entrées PlayStation indiquent aussi le Bluetooth. Une manette compatible est donc une méthode prévue pour la version PC Steam.',
          'Ces données ne publient pas une table universelle des boutons et ne garantissent pas chaque modèle, adaptateur ou profil personnalisé. Testez dans le jeu le déplacement, la caméra, la prise, le saut, les objets et le menu pause.',
        ],
        table: {
          caption: 'Interprétation des champs manette de Steam',
          headers: ['Signal de la boutique', 'Ce que cela confirme', 'Ce que cela ne confirme pas'],
          rows: [
            ['Prise en charge Xbox complète', 'Les manettes de type Xbox font partie des entrées PC prises en charge.', 'Chaque modèle ou adaptateur fonctionnera de la même manière.'],
            ['Prise en charge PS4', 'La manette PS4 est listée et le Bluetooth est indiqué.', 'Chaque câble, pilote ou récepteur est garanti.'],
            ['Prise en charge PS5', 'La manette PS5 est listée et le Bluetooth est indiqué.', 'Les glyphes PlayStation ou toutes les options de remappage seront toujours visibles.'],
            ['Version Steam Windows', 'La page décrit la version PC actuellement documentée.', 'Une version console ou un cross-play actif.'],
          ],
        },
      },
      {
        title: 'Comment jouer à PEAK avec une manette sur PC',
        paragraphs: [
          'Faites un test court avant de charger une expédition importante. Le but est de vérifier la détection de l appareil et le confort des actions utiles. Utilisez une nouvelle partie près du début, où une prise manquée ne coûte pas immédiatement une ressource de secours.',
          'L image ci-dessous montre une scène de jeu et non l écran des réglages. La boutique confirme les catégories d appareils ; le jeu en cours confirme les libellés et indications de votre configuration.',
        ],
        bullets: [
          ['1. Connecter', 'Branchez ou associez la manette avant de lancer PEAK et vérifiez sa détection par Windows et Steam.'],
          ['2. Tester en sécurité', 'Testez déplacement, caméra, prise, saut, un objet et le menu pause.'],
          ['3. Lire l indication', 'Une touche de clavier ne suffit pas à conclure à une incompatibilité ; testez l action et le profil actif.'],
          ['4. Changer une couche', 'Modifiez le profil Steam par jeu seulement si nécessaire, puis répétez le même test.'],
          ['5. Garder une solution de secours', 'Gardez clavier et souris disponibles jusqu à la fin du test.'],
        ],
        image: media('/media/peak-coop-climb.webp', 'Deux Scouts de PEAK avancent ensemble sur une route insulaire lumineuse', 'Capture officielle Steam pour illustrer un test en coopération ; ce n est pas un schéma de touches.'),
      },
      {
        title: 'Manette ou clavier-souris dans PEAK ?',
        paragraphs: [
          'Il n y a pas de meilleur choix universel. Une manette peut être confortable pour le déplacement, la caméra et les longues sessions ; le clavier-souris peut être plus rapide dans les menus ou pour les corrections précises. La priorité est la fiabilité de la prise, du saut et des objets.',
          'Utilisez ce tableau pour décider, sans en faire une promesse de performance. Comparez la même courte route avec le même équipement.',
        ],
        table: {
          caption: 'Choisir une entrée pendant une courte séance',
          headers: ['Tâche', 'La manette peut aider si', 'Clavier-souris peut aider si'],
          rows: [
            ['Déplacement et caméra', 'Le mouvement analogique et la prise en main réduisent la fatigue.', 'Vous préférez séparer mouvement clavier et caméra souris.'],
            ['Escalade et prise', 'Le bouton de prise est facile à atteindre sans lâcher le déplacement.', 'Vous connaissez déjà une touche ou un bouton de souris.'],
            ['Objets et outils', 'Les emplacements actifs sont accessibles sans quitter la route des yeux.', 'Les touches numériques ou la molette changent rapidement d emplacement.'],
            ['Longues sessions coop', 'La posture et l autonomie ou le câble sont stables.', 'Le bureau facilite chat, captures et notes de dépannage.'],
          ],
        },
        image: media('/media/peak-map-route.webp', 'Scout de PEAK utilisant une corde près de la lave avec une indication de prise', 'Capture officielle Steam ; l indication peut différer du symbole de la manette.'),
      },
      {
        title: 'Manette PEAK non reconnue : vérifications sûres',
        paragraphs: [
          'Le problème peut venir de l appareil, de Steam, du jeu ou d un remappeur. Changez une variable à la fois et répétez le même test. Notez le modèle, le mode filaire ou Bluetooth, le système, l indication affichée et le résultat.',
          'Une indication de clavier ne prouve pas l absence de support. Elle peut refléter le profil actif ou le dernier appareil utilisé. Testez l action dans la version en cours avant de changer plusieurs paramètres.',
        ],
        table: {
          caption: 'Vérifications PEAK par symptôme',
          headers: ['Symptôme', 'Première comparaison', 'Ne pas supposer'],
          rows: [
            ['Aucune entrée', 'Vérifiez Windows et Steam, reconnectez, puis testez une nouvelle partie.', 'Que toutes les manettes sont incompatibles.'],
            ['Mouvement mais indication absente', 'Testez prise, saut, objets et pause séparément.', 'Qu une action manquante annule tout le support.'],
            ['Double entrée', 'Fermez les remappeurs et appareils virtuels concurrents.', 'Que plusieurs changements simultanés aideront.'],
            ['Coupures sans fil', 'Comparez avec un câble et vérifiez batterie et récepteur.', 'Qu un guide garantit tous les adaptateurs Bluetooth.'],
            ['Résultat différent d un ami', 'Comparez appareil, profil, plateforme et version.', 'Que la manette change les codes de salle ou le cross-play.'],
          ],
        },
        bullets: [
          ['Rester réversible', 'Reconnectez, fermez un remappeur ou restaurez un profil avant un autre changement.'],
          ['Vérifier les fichiers seulement si nécessaire', 'La vérification Steam concerne les problèmes d installation larges, pas le premier diagnostic d un bouton.'],
          ['Séparer entrée et réseau', `La manette ne décide pas si un ami rejoint ; consultez le ${articleLink('room-codes', 'guide des codes de salle')}.`],
          ['Documenter', 'Indiquez modèle, connexion, version, action, indication et résultat.'],
        ],
      },
      {
        title: 'Ce que la réponse sur la manette ne promet pas',
        paragraphs: [
          `Les champs Steam répondent à la compatibilité de l appareil. Ils ne prouvent pas une version console, une partie PC-console, une règle définitive de cross-play ou une carte de boutons permanente. Pour ces sujets, consultez le ${articleLink('peak-crossplay-guide', 'guide du cross-play')} et le ${articleLink('room-codes', 'guide multijoueur et codes de salle')}.`,
          'Le comportement peut changer après une mise à jour. Vérifiez la fiche et le menu des contrôles lorsque les indications changent, et ne présentez pas cet article comme une garantie pour un adaptateur non testé.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ sur les manettes PEAK',
      items: [
        ['PEAK prend-il en charge une manette ?', 'Oui. Steam indique une prise en charge complète Xbox et une prise en charge PS4 et PS5 sur la version Windows PC.'],
        ['Peut-on jouer à PEAK avec une manette sur PC ?', 'Oui. Connectez une manette compatible et testez déplacement, prise, saut, objets et pause dans la version actuelle.'],
        ['PEAK accepte-t-il les manettes PS5 et Xbox ?', 'Steam liste le support Xbox complet et le support PS5, ainsi que PS4 et Bluetooth dans les entrées PlayStation. Les indications peuvent varier.'],
        ['Pourquoi PEAK affiche-t-il encore des touches de clavier ?', 'Le profil actif ou le dernier appareil peuvent en être la cause. Testez l action et ne changez qu un réglage à la fois.'],
        ['Puis-je utiliser une manette avec les codes de salle PEAK ?', `Oui. Les entrées et le lobby sont séparés ; utilisez le ${articleLink('room-codes', 'guide des codes de salle')} pour rejoindre une partie.`],
        ['La manette est-elle meilleure que le clavier-souris ?', 'Il n y a pas de réponse universelle. Comparez la même route et choisissez la méthode la plus fiable pour vous.'],
        ['Le support manette signifie-t-il que le cross-play console est actif ?', `Non. La fiche décrit le PC Steam. Consultez le ${articleLink('peak-crossplay-guide', 'guide du cross-play')} pour le statut des plateformes.`],
      ],
    },
    source: {
      eyebrow: 'Sources et limites',
      title: 'Métadonnées Steam vérifiées à une date fixe',
      body: 'Les catégories de manettes et les indicateurs Bluetooth ont été vérifiés sur la page officielle PEAK de Steam le 30 octobre 2026. La fiche répond à la question de l appareil, mais ne publie pas chaque touche, adaptateur, console ou changement futur. Vérifiez le menu du jeu après une mise à jour.',
      links: [
        ['Page officielle PEAK sur Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['FAQ officielle PEAK de Landfall', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'Lire le guide débutant des contrôles PEAK'],
      ['room-codes', 'Rejoindre un lobby coopératif PEAK'],
      ['peak-crossplay-guide', 'Vérifier le statut du cross-play'],
      ['peak-photon-troubleshooting', 'Dépanner les problèmes de connexion'],
    ],
    relatedLabel: 'Guides PEAK associés sur les contrôles et le multijoueur',
  },
  de: {
    primaryKeyword: 'PEAK Controller Support',
    meta: {
      title: 'Unterstützt PEAK Controller? PC-Setup und Fehlerbehebung',
      description: 'Unterstützt PEAK Controller? Prüfe die offizielle Steam-Angabe, verbinde einen Controller am PC und löse typische Eingabeprobleme.',
      schema: 'PEAK-Leitfaden zu Controller-Unterstützung, offiziellen Steam-Daten, PC-Einrichtung, Eingabevergleich und Fehlerbehebung.',
    },
    eyebrow: 'Eingabe-Leitfaden - geprüft am 30. Oktober 2026',
    h1: 'Unterstützt PEAK Controller?',
    intro: 'Ja. Die offizielle Steam-Seite führt vollständige Xbox-Controller-Unterstützung sowie Unterstützung für PS4- und PS5-Controller für die Windows-PC-Version auf. Dieser Leitfaden erklärt die Aussage, einen sicheren Test und die ersten Schritte, wenn PEAK weiterhin Tastatur-Symbole zeigt.',
    answerLabel: 'Kurzantwort',
    answer: 'PEAK kann auf der aktuellen Steam-PC-Version mit einem kompatiblen Controller gespielt werden. Steam nennt vollständige Xbox-Unterstützung sowie PS4- und PS5-Unterstützung. Eine feste Tastenbelegung für jedes Gerät und jeden Funkmodus wird dort aber nicht versprochen. Teste zuerst Bewegung, Greifen, Springen, Gegenstände und Pause in einem sicheren Bereich.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Controller-FAQ',
    heroImage: media('/media/peak-climb-ridge.webp', 'PEAK-Kletterszene aus der Ego-Perspektive mit einem Seil-Interaktionshinweis', 'Offizieller Steam-Screenshot für den Spielkontext, keine Controller-Tastenkarte.'),
    sections: [
      {
        title: 'PEAK-Controller-Unterstützung: Was Steam bestätigt',
        paragraphs: [
          'Die offizielle PEAK-Store-Seite ist die wichtigste Quelle für den aktuellen Hinweis. Die Controller-Metadaten nennen vollständige Xbox-Unterstützung sowie PS4- und PS5-Unterstützung; bei den PlayStation-Einträgen ist außerdem Bluetooth angegeben. Damit ist ein kompatibler Controller für die Steam-PC-Version als Eingabemethode vorgesehen.',
          'Die Daten veröffentlichen keine allgemeine Tastenkarte und garantieren nicht jedes Modell, jeden Adapter oder jedes eigene Profil. Teste die Aktionen in deiner installierten Version und trenne Geräteerkennung von einer einzelnen fehlenden Belegung.',
        ],
        table: {
          caption: 'Bedeutung der Steam-Controllerfelder',
          headers: ['Store-Signal', 'Was es bestätigt', 'Was es nicht bestätigt'],
          rows: [
            ['Vollständige Xbox-Unterstützung', 'Xbox-Controller gehören zur unterstützten PC-Eingabe.', 'Dass jedes Modell oder jeder Adapter gleich funktioniert.'],
            ['PS4-Unterstützung', 'PS4-Controller sind aufgeführt; Bluetooth ist angegeben.', 'Dass jedes Kabel, jeder Treiber oder Empfänger garantiert funktioniert.'],
            ['PS5-Unterstützung', 'PS5-Controller sind aufgeführt; Bluetooth ist angegeben.', 'Dass immer PlayStation-Symbole oder jede Remapping-Option erscheinen.'],
            ['Windows-Steam-Version', 'Die Seite beschreibt die dokumentierte PC-Version.', 'Eine Konsolenversion oder aktives Crossplay.'],
          ],
        },
      },
      {
        title: 'PEAK am PC mit Controller spielen',
        paragraphs: [
          'Führe vor einem wichtigen Lauf einen kurzen Eingabetest durch. Starte einen neuen Lauf nahe dem Anfang, damit ein fehlgeschlagener Griff nicht sofort eine Rettungsressource kostet. Prüfe nicht nur Bewegung, sondern auch Kamera, Greifen, Springen, Gegenstände und das Pausenmenü.',
          'Das folgende Bild zeigt Spielsituation statt Einstellungsfenster. Der Store bestätigt Gerätekategorien; das laufende Spiel zeigt die Beschriftungen und Hinweise deiner Umgebung.',
        ],
        bullets: [
          ['1. Verbinden', 'Controller vor dem Start anschließen oder koppeln und die Erkennung durch Windows und Steam prüfen.'],
          ['2. Sicher testen', 'Bewegung, Kamera, Greifen, Springen, einen Gegenstand und Pause prüfen.'],
          ['3. Hinweis lesen', 'Ein Tastatur-Symbol allein beweist keine fehlende Unterstützung; aktive Belegung testen.'],
          ['4. Eine Ebene ändern', 'Nur bei Bedarf das Steam-Profil pro Spiel ändern und denselben Test wiederholen.'],
          ['5. Fallback behalten', 'Tastatur und Maus verfügbar lassen, bis ein kurzer Lauf funktioniert.'],
        ],
        image: media('/media/peak-coop-climb.webp', 'Zwei PEAK-Scouts bewegen sich gemeinsam durch eine helle Inselroute', 'Offizieller Steam-Screenshot für den sicheren Koop-Eingabetest, kein Tasten-Diagramm.'),
      },
      {
        title: 'Controller oder Tastatur und Maus in PEAK',
        paragraphs: [
          'Es gibt keinen allgemeinen Gewinner. Ein Controller kann sich bei Bewegung, Kamera und langen Sitzungen natürlicher anfühlen; Tastatur und Maus können Menüs oder präzise Kamerakorrekturen erleichtern. Entscheidend ist, dass Greifen, Springen und Gegenstände zuverlässig erreichbar sind.',
          'Nutze die Tabelle als Entscheidungshilfe, nicht als Leistungsversprechen. Vergleiche dieselbe kurze Route mit gleichem Gebiet und gleicher Ausrüstung.',
        ],
        table: {
          caption: 'Eingabewahl bei einem kurzen Übungslauf',
          headers: ['Aufgabe', 'Controller kann helfen, wenn', 'Tastatur und Maus kann helfen, wenn'],
          rows: [
            ['Bewegung und Kamera', 'Analogbewegung und Griff die Hand entlasten.', 'du Tastaturbewegung und schnelle Maus-Kamera bevorzugst.'],
            ['Klettern und Greifen', 'der Griffknopf ohne Verlassen der Bewegung erreichbar ist.', 'du eine bekannte Taste oder Maustaste nutzen willst.'],
            ['Gegenstände', 'aktive Slots ohne Blickwechsel erreichbar sind.', 'Zahlentasten oder Mausrad schneller sind.'],
            ['Lange Koop-Sitzung', 'Haltung, Kabel oder Akkustand stabil sind.', 'der Schreibtisch Chat, Screenshots und Notizen erleichtert.'],
          ],
        },
        image: media('/media/peak-map-route.webp', 'PEAK-Scout nutzt ein Seil neben Lava mit sichtbarem Greifhinweis', 'Offizieller Steam-Screenshot; das Hinweis-Symbol kann vom Controller-Glyph abweichen.'),
      },
      {
        title: 'PEAK-Controller funktioniert nicht: sichere erste Checks',
        paragraphs: [
          'Die Ursache kann beim Gerät, bei Steam, beim Spiel oder bei einem konkurrierenden Remapper liegen. Ändere jeweils nur eine Variable und wiederhole denselben kurzen Test. Notiere Modell, Verbindung, System, Hinweis und Ergebnis.',
          'Ein Tastatur-Hinweis bedeutet nicht automatisch fehlenden Controller-Support. Er kann die aktive Belegung oder das zuletzt genutzte Gerät widerspiegeln. Prüfe die Aktion in der laufenden Version, bevor du mehrere Einstellungen änderst.',
        ],
        table: {
          caption: 'PEAK-Checks nach Symptom',
          headers: ['Symptom', 'Erster Vergleich', 'Nicht annehmen'],
          rows: [
            ['Keine Eingabe', 'Erkennung durch Windows und Steam prüfen, neu verbinden, neuen Test starten.', 'Dass kein Controller kompatibel ist.'],
            ['Bewegung funktioniert, Hinweis fehlt', 'Greifen, Springen, Gegenstände und Pause einzeln testen.', 'Dass eine Aktion den gesamten Support widerlegt.'],
            ['Doppeleingabe', 'Andere Remapper oder virtuelle Geräte schließen, ein Profil testen.', 'Dass mehrere Änderungen gleichzeitig helfen.'],
            ['Funkabbrüche', 'Mit Kabel vergleichen sowie Akku und Empfänger prüfen.', 'Dass jeder Bluetooth-Adapter garantiert ist.'],
            ['Andere Ergebnisse bei Freunden', 'Gerät, Profil, Plattform und Version vergleichen.', 'Dass der Controller Raumcodes oder Crossplay ändert.'],
          ],
        },
        bullets: [
          ['Reversibel bleiben', 'Neu verbinden, einen Remapper schließen oder ein Profil zurücksetzen, bevor du weiter änderst.'],
          ['Dateien nur bei passendem Problem prüfen', 'Steam-Dateiprüfung ist für breite Installationsprobleme gedacht, nicht als erster Schritt bei einer unbekannten Taste.'],
          ['Eingabe und Netzwerk trennen', `Der Controller entscheidet nicht über den Beitritt eines Freundes; nutze den ${articleLink('room-codes', 'Raumcode-Leitfaden')}.`],
          ['Belege notieren', 'Modell, Verbindung, Version, Aktion, Hinweis und Ergebnis angeben.'],
        ],
      },
      {
        title: 'Was die Controller-Antwort nicht verspricht',
        paragraphs: [
          `Die Steam-Felder beantworten die Gerätefrage. Sie beweisen keine Konsolenversion, keine PC-Konsolen-Sitzung, keine endgültige Crossplay-Regel und keine dauerhafte Tastenkarte. Für diese Themen nutze den ${articleLink('peak-crossplay-guide', 'Crossplay-Status')} und den ${articleLink('room-codes', 'Multiplayer- und Raumcode-Leitfaden')}.`,
          'Eingaben können sich nach einem Update ändern. Prüfe Store und Spielmenü erneut, wenn Hinweise wechseln, und verstehe diesen Artikel als Orientierung statt als Garantie für einen nicht getesteten Adapter.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Kurze Antworten',
      title: 'PEAK-Controller-FAQ',
      items: [
        ['Unterstützt PEAK Controller?', 'Ja. Steam zeigt vollständige Xbox-Unterstützung sowie PS4- und PS5-Unterstützung für die Windows-PC-Version.'],
        ['Kann man PEAK am PC mit Controller spielen?', 'Ja. Verbinde einen kompatiblen Controller und teste Bewegung, Greifen, Springen, Gegenstände und Pause.'],
        ['Unterstützt PEAK PS5- und Xbox-Controller?', 'Steam nennt vollständige Xbox-Unterstützung und PS5-Unterstützung sowie PS4 und Bluetooth in den PlayStation-Einträgen. Hinweise können variieren.'],
        ['Warum zeigt PEAK weiterhin Tastatur-Symbole?', 'Aktives Profil oder zuletzt verwendetes Gerät können die Ursache sein. Teste die Aktion und ändere nur eine Einstellung.'],
        ['Funktioniert ein Controller mit PEAK-Raumcodes?', `Ja. Eingabe und Lobby sind getrennt; die Schritte stehen im ${articleLink('room-codes', 'Raumcode-Leitfaden')}.`],
        ['Ist ein Controller besser als Tastatur und Maus?', 'Es gibt keinen allgemeinen Sieger. Vergleiche dieselbe Route und nimm die zuverlässigere Methode.'],
        ['Bedeutet Controller-Support Konsolen-Crossplay?', `Nein. Die Angabe bezieht sich auf Steam-PC. Den Plattformstatus erklärt der ${articleLink('peak-crossplay-guide', 'Crossplay-Leitfaden')}.`],
      ],
    },
    source: {
      eyebrow: 'Quellen und Grenzen',
      title: 'Steam-Metadaten an einem festen Datum geprüft',
      body: 'Controller-Kategorien und Bluetooth-Hinweise wurden am 30. Oktober 2026 auf der offiziellen PEAK-Steamseite geprüft. Die Seite beantwortet die Gerätefrage, veröffentlicht aber nicht jede Taste, jeden Adapter, jede Konsole oder künftige Änderungen. Nach Updates das Spielmenü prüfen.',
      links: [
        ['Offizielle PEAK-Steamseite', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Offizielle PEAK-FAQ von Landfall', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'PEAK-Anfängerleitfaden zu den Kontrollen'],
      ['room-codes', 'PEAK-Koop-Lobby beitreten'],
      ['peak-crossplay-guide', 'Aktuellen Crossplay-Status prüfen'],
      ['peak-photon-troubleshooting', 'Verbindungsprobleme prüfen'],
    ],
    relatedLabel: 'Verwandte PEAK-Leitfäden zu Eingabe und Multiplayer',
  },
  pt: {
    primaryKeyword: 'suporte de controle no PEAK',
    meta: {
      title: 'PEAK tem suporte a controle? Configuração no PC',
      description: 'PEAK tem suporte a controle? Veja a ficha oficial da Steam, conecte um controle no PC, compare entradas e corrija problemas comuns.',
      schema: 'Guia de controle do PEAK com dados oficiais da Steam, configuração no PC, comparação com teclado e mouse e solução de problemas.',
    },
    eyebrow: 'Guia de entrada - verificado em 30 de outubro de 2026',
    h1: 'PEAK tem suporte a controle?',
    intro: 'Sim. A página oficial da Steam mostra suporte completo a controles Xbox e suporte a controles PS4 e PS5 na versão para Windows. Este guia explica o que essa informação confirma, como testar um controle com segurança e o que verificar quando o jogo ainda mostra comandos de teclado.',
    answerLabel: 'Resposta curta',
    answer: 'Você pode jogar PEAK com um controle na versão Steam para PC. A Steam lista suporte completo para Xbox e suporte para PS4 e PS5, mas não publica um mapa fixo para todos os aparelhos e modos sem fio. Conecte o controle, teste movimento, agarrar, pular, itens e pausa em uma área segura, e altere uma configuração por vez.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ de controle',
    heroImage: media('/media/peak-climb-ridge.webp', 'Cena de escalada em primeira pessoa de PEAK com aviso de interação de corda', 'Captura oficial da Steam para mostrar o contexto do jogo, não um mapa de botões.'),
    sections: [
      {
        title: 'Suporte a controle no PEAK: o que a Steam confirma',
        paragraphs: [
          'A página oficial do PEAK na Steam é a melhor fonte para o sinal de suporte atual. Os metadados indicam suporte completo para Xbox e suporte para PS4 e PS5; as entradas PlayStation também indicam Bluetooth. Portanto, um controle compatível é uma forma prevista de jogar a versão Steam para PC.',
          'Esses dados não publicam uma tabela universal e não garantem cada modelo, adaptador ou perfil personalizado. Teste as ações na sua versão: movimento, câmera, agarrar, pular, itens e pausa.',
        ],
        table: {
          caption: 'Como ler os campos de controle da Steam',
          headers: ['Sinal da loja', 'O que confirma', 'O que não confirma'],
          rows: [
            ['Suporte completo a Xbox', 'Controles no padrão Xbox pertencem às entradas suportadas no PC.', 'Que todos os modelos e adaptadores funcionem igual.'],
            ['Suporte a PS4', 'O controle PS4 é listado e o Bluetooth aparece no metadado.', 'Que todo cabo, driver ou receptor sem fio seja garantido.'],
            ['Suporte a PS5', 'O controle PS5 é listado e o Bluetooth aparece no metadado.', 'Que sempre apareçam ícones PlayStation ou todo remapeamento.'],
            ['Versão Steam para Windows', 'A página descreve a versão de PC documentada.', 'Que exista versão de console ou crossplay ativo.'],
          ],
        },
      },
      {
        title: 'Como jogar PEAK com controle no PC',
        paragraphs: [
          'Faça um teste curto antes de carregar uma expedição importante. Comece uma partida nova perto do início, onde uma falha ao agarrar não consuma imediatamente um recurso de resgate. Confirme as ações essenciais em vez de decorar uma lista fixa.',
          'A imagem abaixo mostra o contexto do jogo, não a tela de configuração. A loja confirma categorias de aparelhos; o jogo em execução mostra os rótulos da sua configuração.',
        ],
        bullets: [
          ['1. Conecte', 'Conecte ou pareie o controle antes de abrir PEAK e confira a detecção pelo Windows e pela Steam.'],
          ['2. Teste com segurança', 'Verifique movimento, câmera, agarrar, pular, um item e o menu de pausa.'],
          ['3. Leia o aviso', 'Um ícone de teclado não prova incompatibilidade; teste a ação e o perfil ativo.'],
          ['4. Mude uma camada', 'Altere o layout por jogo da Steam apenas se necessário e repita o mesmo teste.'],
          ['5. Mantenha alternativa', 'Deixe teclado e mouse disponíveis até completar um teste curto.'],
        ],
        image: media('/media/peak-coop-climb.webp', 'Dois Scouts de PEAK avançam juntos por uma rota de ilha clara', 'Captura oficial da Steam para o teste seguro em cooperação; não é um diagrama de controles.'),
      },
      {
        title: 'Controle ou teclado e mouse no PEAK',
        paragraphs: [
          'Não existe um vencedor universal. O controle pode ser confortável para movimento, câmera e sessões longas; teclado e mouse podem agilizar menus ou correções precisas. O ponto principal é acessar agarrar, pular e itens com consistência.',
          'Use a tabela para decidir, sem tratá-la como promessa de desempenho. Compare a mesma rota curta com a mesma área e os mesmos itens.',
        ],
        table: {
          caption: 'Escolha de entrada em um treino curto',
          headers: ['Tarefa', 'O controle pode ajudar quando', 'Teclado e mouse podem ajudar quando'],
          rows: [
            ['Movimento e câmera', 'O analógico reduz cansaço e é familiar.', 'Você prefere separar movimento no teclado e câmera no mouse.'],
            ['Escalada e agarrar', 'O botão fica acessível sem soltar o movimento.', 'Você já domina uma tecla ou botão de mouse.'],
            ['Itens e ferramentas', 'Os espaços ativos são fáceis de alcançar durante a rota.', 'Teclas numéricas ou roda trocam espaços rapidamente.'],
            ['Sessões longas', 'A postura e o cabo ou bateria são estáveis.', 'A mesa facilita chat, capturas e anotações.'],
          ],
        },
        image: media('/media/peak-map-route.webp', 'Scout de PEAK usa uma corda perto da lava com aviso de agarrar', 'Captura oficial da Steam; o aviso pode diferir do ícone do controle.'),
      },
      {
        title: 'Controle do PEAK não funciona: verificações seguras',
        paragraphs: [
          'A causa pode estar no aparelho, na Steam, no jogo ou em outro remapeador. Mude uma variável por vez e repita o mesmo teste. Registre modelo, conexão, sistema, aviso visível e resultado.',
          'Um aviso de teclado não prova que o suporte está ausente. Ele pode refletir o layout ativo ou o último aparelho usado. Teste a ação na versão atual antes de alterar várias opções.',
        ],
        table: {
          caption: 'Verificações do PEAK por sintoma',
          headers: ['Sintoma', 'Primeira comparação', 'Não presuma'],
          rows: [
            ['Nenhuma entrada', 'Confirme Windows e Steam, reconecte e teste uma partida nova.', 'Que todo controle seja incompatível.'],
            ['Movimento funciona, aviso não', 'Teste agarrar, pular, itens e pausa separadamente.', 'Que uma ação falha anule todo o suporte.'],
            ['Entrada duplicada', 'Feche remapeadores ou dispositivos virtuais concorrentes.', 'Que várias mudanças simultâneas ajudem.'],
            ['Queda sem fio', 'Compare com cabo e verifique bateria e receptor.', 'Que todo adaptador Bluetooth seja garantido.'],
            ['Resultado diferente do amigo', 'Compare aparelho, layout, plataforma e versão.', 'Que o controle mude códigos de sala ou crossplay.'],
          ],
        },
        bullets: [
          ['Faça mudanças reversíveis', 'Reconecte, feche um remapeador ou restaure um layout antes de outra mudança.'],
          ['Verifique arquivos quando fizer sentido', 'A verificação da Steam atende problemas amplos de instalação, não o primeiro diagnóstico de um botão.'],
          ['Separe entrada e rede', `O controle não decide se um amigo entra; use o ${articleLink('room-codes', 'guia de códigos de sala')}.`],
          ['Registre evidências', 'Informe modelo, conexão, versão, ação, aviso e resultado.'],
        ],
      },
      {
        title: 'O que a resposta sobre controle não promete',
        paragraphs: [
          `Os campos da Steam respondem à compatibilidade do aparelho. Eles não provam console, sessão PC-console, regra final de crossplay ou mapa permanente de botões. Para esses assuntos, veja o ${articleLink('peak-crossplay-guide', 'guia de crossplay')} e o ${articleLink('room-codes', 'guia de multiplayer e códigos de sala')}.`,
          'O comportamento pode mudar após uma atualização. Confira a loja e o menu do jogo quando os avisos mudarem, e não use este texto como garantia para adaptadores não testados.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'FAQ de controle do PEAK',
      items: [
        ['PEAK tem suporte a controle?', 'Sim. A Steam mostra suporte completo para Xbox e suporte para controles PS4 e PS5 na versão para Windows.'],
        ['Dá para jogar PEAK com controle no PC?', 'Sim. Conecte um controle compatível e teste movimento, agarrar, pular, itens e pausa.'],
        ['PEAK aceita controles PS5 e Xbox?', 'A Steam lista suporte completo para Xbox e suporte para PS5, além de PS4 e Bluetooth nas entradas PlayStation. Os avisos podem variar.'],
        ['Por que PEAK ainda mostra comandos de teclado?', 'O layout ativo ou o último aparelho usado pode ser a causa. Teste a ação e mude uma configuração por vez.'],
        ['Posso usar controle com códigos de sala do PEAK?', `Sim. Entrada e lobby são separados; use o ${articleLink('room-codes', 'guia de códigos de sala')} para entrar.`],
        ['Controle é melhor que teclado e mouse?', 'Não há uma resposta universal. Compare a mesma rota e escolha a opção mais confiável.'],
        ['Suporte a controle significa crossplay com console?', `Não. A ficha descreve o PC Steam. Consulte o ${articleLink('peak-crossplay-guide', 'guia de crossplay')} para o estado das plataformas.`],
      ],
    },
    source: {
      eyebrow: 'Fontes e limites',
      title: 'Metadados da Steam conferidos em uma data fixa',
      body: 'As categorias de controle e os indicadores Bluetooth foram conferidos na página oficial do PEAK na Steam em 30 de outubro de 2026. A ficha responde sobre o aparelho, mas não publica cada botão, adaptador, console ou mudança futura. Confira o menu do jogo após atualizações.',
      links: [
        ['Página oficial do PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['FAQ oficial do PEAK da Landfall', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'Ler o guia básico de controles do PEAK'],
      ['room-codes', 'Entrar em um lobby cooperativo do PEAK'],
      ['peak-crossplay-guide', 'Verificar o estado do crossplay'],
      ['peak-photon-troubleshooting', 'Solucionar problemas de conexão'],
    ],
    relatedLabel: 'Guias relacionados de entrada e multiplayer do PEAK',
  },
  ko: {
    primaryKeyword: 'PEAK 컨트롤러 지원',
    meta: {
      title: 'PEAK는 컨트롤러를 지원하나요? PC 설정과 해결법',
      description: 'PEAK 컨트롤러 지원 여부를 확인하세요. 공식 Steam 정보, PC 연결 방법, 키보드 비교와 입력 문제 해결을 정리했습니다.',
      schema: '공식 Steam 지원 정보와 PC 설정, 입력 방식 비교, 문제 해결을 정리한 PEAK 컨트롤러 가이드입니다.',
    },
    eyebrow: '입력 가이드 · 2026년 10월 30일 확인',
    h1: 'PEAK는 컨트롤러를 지원하나요?',
    intro: '지원합니다. 공식 Steam 페이지에는 Windows PC 버전의 Xbox 컨트롤러 완전 지원과 PS4·PS5 컨트롤러 지원이 표시됩니다. 이 글은 공식 정보의 범위, 안전한 테스트 방법, 키보드 안내가 계속 보일 때 확인할 항목을 설명합니다.',
    answerLabel: '짧은 답',
    answer: '현재 Steam PC 버전 PEAK는 호환 컨트롤러로 플레이할 수 있습니다. Steam은 Xbox 완전 지원과 PS4·PS5 지원을 표시하지만 모든 기기, 무선 방식, 향후 버전에 공통인 고정 버튼표를 약속하지는 않습니다. 안전한 구역에서 이동, 잡기, 점프, 아이템, 일시정지를 확인하고 한 번에 하나만 설정을 바꾸세요.',
    tocLabel: '이 페이지에서',
    tocFaq: '컨트롤러 FAQ',
    heroImage: media('/media/peak-climb-ridge.webp', '로프 상호작용 안내가 보이는 PEAK 1인칭 등반 장면', 'Steam 공식 게임플레이 이미지이며 컨트롤러 버튼표가 아닌 게임 상황을 보여줍니다.'),
    sections: [
      {
        title: 'PEAK 컨트롤러 지원: Steam이 확인하는 내용',
        paragraphs: [
          '현재 지원 여부는 공식 PEAK Steam 페이지에서 확인하는 것이 가장 안전합니다. 컨트롤러 메타데이터에는 Xbox 완전 지원과 PS4·PS5 지원이 있으며 PlayStation 항목에는 Bluetooth도 표시됩니다. 따라서 호환 컨트롤러는 Steam PC 버전에서 사용할 수 있는 입력 방식입니다.',
          '하지만 모든 모델, 어댑터, 사용자 지정 레이아웃이 동일하게 작동한다는 뜻은 아닙니다. 실제 버전에서 이동, 카메라, 잡기, 점프, 아이템, 일시정지를 차례로 테스트하세요.',
        ],
        table: {
          caption: 'Steam 컨트롤러 필드의 의미',
          headers: ['스토어 신호', '확인되는 내용', '확인되지 않는 내용'],
          rows: [
            ['Xbox 컨트롤러 완전 지원', 'Xbox 계열 컨트롤러가 PC 지원 입력에 포함됩니다.', '모든 모델과 어댑터가 같은 방식으로 작동한다는 뜻은 아닙니다.'],
            ['PS4 지원', 'PS4 컨트롤러가 지원 목록에 있고 Bluetooth가 표시됩니다.', '특정 케이블, 드라이버, 수신기가 보장된다는 뜻은 아닙니다.'],
            ['PS5 지원', 'PS5 컨트롤러가 지원 목록에 있고 Bluetooth가 표시됩니다.', '항상 PlayStation 아이콘이나 모든 재매핑 옵션이 나온다는 뜻은 아닙니다.'],
            ['Windows Steam 버전', '현재 문서화된 PC 버전 정보입니다.', '콘솔 버전이나 활성 크로스플레이를 증명하지 않습니다.'],
          ],
        },
      },
      {
        title: 'PC에서 컨트롤러로 PEAK 플레이하기',
        paragraphs: [
          '중요한 원정을 불러오기 전에 짧게 입력을 확인하세요. 시작 지점 근처에서 새 런을 열면 잡기 실패가 즉시 구조 아이템을 소모하지 않습니다. 고정 버튼표를 외우기보다 필요한 행동이 실제로 편하게 되는지 확인하는 것이 목적입니다.',
          '아래 이미지는 설정 화면이 아니라 게임 상황을 보여줍니다. 스토어는 기기 범주를 알려 주고, 실행 중인 게임이 현재 환경의 안내와 라벨을 보여 줍니다.',
        ],
        bullets: [
          ['1. 연결', '실행 전에 유선 또는 무선으로 연결하고 Windows와 Steam이 인식하는지 확인합니다.'],
          ['2. 안전하게 테스트', '이동, 카메라, 잡기, 점프, 아이템 하나, 일시정지를 확인합니다.'],
          ['3. 안내 확인', '키보드 아이콘만으로 미지원이라고 판단하지 말고 현재 레이아웃에서 행동을 테스트합니다.'],
          ['4. 한 단계만 변경', '필요할 때만 Steam 게임별 레이아웃을 바꾸고 같은 행동을 다시 확인합니다.'],
          ['5. 대체 입력 유지', '짧은 테스트를 끝낼 때까지 키보드와 마우스를 준비합니다.'],
        ],
        image: media('/media/peak-coop-climb.webp', '밝은 섬 루트를 함께 이동하는 PEAK Scout 두 명', '안전한 협동 입력 테스트를 설명하는 Steam 공식 이미지이며 버튼 도표는 아닙니다.'),
      },
      {
        title: 'PEAK에서 컨트롤러와 키보드·마우스 비교',
        paragraphs: [
          '모두에게 같은 정답은 없습니다. 컨트롤러는 이동, 카메라, 장시간 플레이에 편할 수 있고 키보드·마우스는 메뉴나 정밀한 시점 조절이 빠를 수 있습니다. 잡기, 점프, 아이템을 안정적으로 사용할 수 있는지가 더 중요합니다.',
          '아래 표는 선택을 돕는 자료입니다. 같은 짧은 경로와 장비로 두 방식을 비교하세요.',
        ],
        table: {
          caption: '짧은 연습에서 입력 방식 선택하기',
          headers: ['작업', '컨트롤러가 편할 수 있는 경우', '키보드·마우스가 편할 수 있는 경우'],
          rows: [
            ['이동과 카메라', '아날로그 이동과 익숙한 그립이 손의 피로를 줄입니다.', '키보드 이동과 빠른 마우스 카메라를 선호합니다.'],
            ['등반과 잡기', '이동을 놓지 않고 잡기 버튼에 닿을 수 있습니다.', '익숙한 키나 마우스 버튼을 쓰고 싶습니다.'],
            ['아이템과 도구', '시선을 루트에서 떼지 않고 슬롯을 선택합니다.', '숫자키나 휠로 슬롯을 빠르게 바꿉니다.'],
            ['긴 협동 세션', '자세와 케이블 또는 배터리가 안정적입니다.', '책상에서 채팅, 캡처, 기록을 처리합니다.'],
          ],
        },
        image: media('/media/peak-map-route.webp', '용암 옆에서 로프를 사용하며 잡기 안내가 보이는 PEAK Scout', 'Steam 공식 이미지이며 안내 모양은 컨트롤러 아이콘과 다를 수 있습니다.'),
      },
      {
        title: 'PEAK 컨트롤러가 작동하지 않을 때의 안전한 확인',
        paragraphs: [
          '원인은 기기, Steam, 게임 또는 다른 리매퍼일 수 있습니다. 한 번에 하나만 바꾸고 같은 짧은 테스트를 반복하세요. 모델, 연결 방식, 운영체제, 화면 안내, 결과를 기록하면 문제를 분리하기 쉽습니다.',
          '키보드 안내 하나만으로 미지원이라고 할 수 없습니다. 활성 레이아웃이나 마지막으로 사용한 기기를 반영할 수 있으므로 여러 설정을 동시에 바꾸기 전에 실제 행동을 확인하세요.',
        ],
        table: {
          caption: '증상별 PEAK 컨트롤러 점검',
          headers: ['증상', '첫 비교', '가정하지 말 것'],
          rows: [
            ['입력이 전혀 없음', 'Windows와 Steam 인식을 확인하고 재연결한 뒤 새 게임을 테스트합니다.', '모든 컨트롤러가 호환되지 않는다는 것.'],
            ['이동은 되지만 안내가 다름', '잡기, 점프, 아이템, 일시정지를 각각 테스트합니다.', '한 동작 실패가 전체 지원 실패라는 것.'],
            ['입력이 두 번 실행됨', '다른 리매퍼나 가상 장치를 닫고 하나의 레이아웃만 사용합니다.', '여러 설정을 동시에 바꾸면 해결된다는 것.'],
            ['무선이 끊김', '유선과 비교하고 배터리와 수신기를 확인합니다.', '모든 Bluetooth 어댑터가 보장된다는 것.'],
            ['친구와 결과가 다름', '기기, 레이아웃, 플랫폼, 버전을 비교합니다.', '컨트롤러가 방 코드나 크로스플레이를 바꾼다는 것.'],
          ],
        },
        bullets: [
          ['되돌릴 수 있게 변경', '재연결, 리매퍼 하나 종료, 레이아웃 복원 순으로 시도합니다.'],
          ['필요할 때만 파일 검증', 'Steam 검증은 넓은 설치 문제에 적합하며 단일 버튼 문제의 첫 단계는 아닙니다.'],
          ['입력과 네트워크 분리', `컨트롤러는 친구의 참가 여부를 결정하지 않습니다. 로비는 ${articleLink('room-codes', '방 코드 가이드')}를 확인하세요.`],
          ['증거 기록', '모델, 연결, 버전, 동작, 안내, 결과를 구체적으로 적습니다.'],
        ],
      },
      {
        title: '컨트롤러 지원 답변이 약속하지 않는 것',
        paragraphs: [
          `Steam 필드는 기기 호환성에 답할 뿐 콘솔 버전, PC-콘솔 세션, 최종 크로스플레이 규칙, 영구 버튼표를 증명하지 않습니다. 플랫폼 질문은 ${articleLink('peak-crossplay-guide', '크로스플레이 상태 가이드')}와 ${articleLink('room-codes', '멀티플레이 및 방 코드 가이드')}를 확인하세요.`,
          '업데이트 후 입력 동작이 바뀔 수 있으므로 안내가 달라지면 스토어와 게임 내 메뉴를 다시 확인하세요. 테스트하지 않은 어댑터에 대한 보증으로 이 글을 사용하지 마세요.',
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK 컨트롤러 지원 FAQ',
      items: [
        ['PEAK는 컨트롤러를 지원하나요?', '네. 공식 Steam 페이지는 Windows PC 버전에서 Xbox 완전 지원과 PS4·PS5 지원을 표시합니다.'],
        ['PC에서 컨트롤러로 PEAK를 할 수 있나요?', '네. 호환 컨트롤러를 연결하고 이동, 잡기, 점프, 아이템, 일시정지를 확인하세요.'],
        ['PEAK는 PS5와 Xbox 컨트롤러를 지원하나요?', 'Steam은 Xbox 완전 지원과 PS5 지원, PlayStation 항목의 PS4 및 Bluetooth를 표시합니다. 안내는 기기에 따라 달라질 수 있습니다.'],
        ['왜 PEAK에 키보드 안내가 계속 나오나요?', '활성 레이아웃이나 마지막 기기 때문일 수 있습니다. 동작을 테스트하고 설정은 한 번에 하나만 바꾸세요.'],
        ['PEAK 방 코드와 컨트롤러를 함께 쓸 수 있나요?', `네. 입력과 로비는 별개입니다. 참가 절차는 ${articleLink('room-codes', '방 코드 가이드')}를 확인하세요.`],
        ['PEAK는 컨트롤러가 키보드보다 좋은가요?', '일반적인 정답은 없습니다. 같은 경로를 비교해 안정적인 방식을 선택하세요.'],
        ['컨트롤러 지원은 콘솔 크로스플레이를 뜻하나요?', `아닙니다. Steam PC 기기 정보입니다. 플랫폼 상태는 ${articleLink('peak-crossplay-guide', '크로스플레이 가이드')}를 확인하세요.`],
      ],
    },
    source: {
      eyebrow: '출처와 한계',
      title: 'Steam 메타데이터를 특정 날짜에 확인',
      body: '컨트롤러 범주와 Bluetooth 표시는 2026년 10월 30일 공식 PEAK Steam 페이지에서 확인했습니다. 페이지는 기기 지원을 보여 주지만 모든 버튼, 어댑터, 콘솔, 미래 변경을 보장하지 않습니다. 업데이트 후에는 게임 메뉴를 확인하세요.',
      links: [
        ['PEAK 공식 Steam 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Landfall 공식 PEAK FAQ', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'PEAK 초보자 조작 가이드 읽기'],
      ['room-codes', 'PEAK 협동 로비 참가하기'],
      ['peak-crossplay-guide', '현재 크로스플레이 상태 확인하기'],
      ['peak-photon-troubleshooting', '연결 문제 확인하기'],
    ],
    relatedLabel: '관련 PEAK 입력 및 멀티플레이 가이드',
  },
  it: {
    primaryKeyword: 'supporto controller PEAK',
    meta: {
      title: 'PEAK supporta il controller? Configurazione su PC',
      description: 'PEAK supporta il controller? Controlla la pagina Steam ufficiale, collega un controller su PC, confronta i comandi e risolvi i problemi comuni.',
      schema: 'Guida ai controller di PEAK con dati Steam ufficiali, configurazione PC, confronto degli input e risoluzione dei problemi.',
    },
    eyebrow: 'Guida ai comandi - verificata il 30 ottobre 2026',
    h1: 'PEAK supporta il controller?',
    intro: 'Sì. La pagina Steam ufficiale indica il supporto completo ai controller Xbox e il supporto ai controller PS4 e PS5 per la versione Windows. Questa guida spiega cosa conferma il dato, come testare il controller in sicurezza e cosa controllare se PEAK mostra ancora i comandi della tastiera.',
    answerLabel: 'Risposta breve',
    answer: 'Puoi giocare a PEAK con un controller nella versione Steam per PC. Steam indica il supporto completo Xbox e il supporto PS4/PS5, ma non pubblica una mappa fissa per ogni dispositivo o modalità wireless. Collega il controller, prova movimento, presa, salto, oggetti e pausa in una zona sicura e modifica una sola impostazione alla volta.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ controller',
    heroImage: media('/media/peak-climb-ridge.webp', 'Scalata in prima persona in PEAK con un avviso di interazione della corda', 'Immagine ufficiale Steam per il contesto di gioco, non una mappa dei pulsanti del controller.'),
    sections: [
      {
        title: 'Supporto controller di PEAK: cosa conferma Steam',
        paragraphs: [
          'La pagina ufficiale di PEAK su Steam è la fonte principale per il dato attuale. I metadati indicano supporto completo Xbox e supporto PS4 e PS5; per le voci PlayStation è indicato anche il Bluetooth. Un controller compatibile è quindi un metodo previsto nella versione PC Steam.',
          'I dati non pubblicano una tabella universale e non garantiscono ogni modello, adattatore o profilo personalizzato. Prova le azioni nella versione installata: movimento, telecamera, presa, salto, oggetti e pausa.',
        ],
        table: {
          caption: 'Come leggere i campi controller di Steam',
          headers: ['Segnale dello store', 'Cosa conferma', 'Cosa non conferma'],
          rows: [
            ['Supporto Xbox completo', 'I controller in stile Xbox sono tra gli input PC supportati.', 'Che ogni modello o adattatore funzioni allo stesso modo.'],
            ['Supporto PS4', 'Il controller PS4 è elencato e il Bluetooth è indicato.', 'Che ogni cavo, driver o ricevitore sia garantito.'],
            ['Supporto PS5', 'Il controller PS5 è elencato e il Bluetooth è indicato.', 'Che appaiano sempre icone PlayStation o ogni opzione di rimappatura.'],
            ['Versione Steam Windows', 'La pagina descrive la versione PC documentata.', 'Una versione console o il crossplay attivo.'],
          ],
        },
      },
      {
        title: 'Come giocare a PEAK con un controller su PC',
        paragraphs: [
          'Fai un test breve prima di caricare una spedizione importante. Inizia una nuova partita vicino all inizio, dove una presa fallita non consuma subito una risorsa di soccorso. L obiettivo è verificare le azioni necessarie, non memorizzare una tabella fissa.',
          'L immagine seguente mostra il contesto del gioco, non le impostazioni. Lo store conferma le categorie dei dispositivi; il gioco in esecuzione mostra le etichette della tua configurazione.',
        ],
        bullets: [
          ['1. Collega', 'Collega o associa il controller prima di aprire PEAK e verifica che Windows e Steam lo vedano.'],
          ['2. Prova in sicurezza', 'Controlla movimento, telecamera, presa, salto, un oggetto e il menu pausa.'],
          ['3. Leggi l avviso', 'Un icona della tastiera non prova l incompatibilità: prova l azione e il profilo attivo.'],
          ['4. Cambia un livello', 'Modifica il layout Steam per gioco solo se serve, poi ripeti lo stesso test.'],
          ['5. Tieni un alternativa', 'Mantieni tastiera e mouse disponibili fino alla fine del test breve.'],
        ],
        image: media('/media/peak-coop-climb.webp', 'Due Scout di PEAK avanzano insieme su un percorso insulare luminoso', 'Immagine ufficiale Steam per il test cooperativo sicuro, non un diagramma dei comandi.'),
      },
      {
        title: 'Controller o tastiera e mouse in PEAK',
        paragraphs: [
          'Non esiste un vincitore universale. Il controller può essere comodo per movimento, telecamera e sessioni lunghe; tastiera e mouse possono rendere più veloci menu o correzioni precise. La priorità è usare presa, salto e oggetti in modo affidabile.',
          'Usa la tabella per decidere senza considerarla una promessa di prestazioni. Confronta lo stesso percorso breve con la stessa area e la stessa attrezzatura.',
        ],
        table: {
          caption: 'Scelta dell input durante una breve prova',
          headers: ['Attività', 'Il controller può aiutare se', 'Tastiera e mouse possono aiutare se'],
          rows: [
            ['Movimento e telecamera', 'Il movimento analogico riduce la fatica.', 'Preferisci movimento da tastiera e telecamera rapida del mouse.'],
            ['Scalata e presa', 'Il tasto di presa è raggiungibile senza lasciare il movimento.', 'Conosci già un tasto o un pulsante del mouse.'],
            ['Oggetti e strumenti', 'Gli slot attivi sono raggiungibili senza distogliere lo sguardo.', 'Tasti numerici o rotella cambiano slot rapidamente.'],
            ['Sessioni cooperative', 'Posizione, cavo o batteria sono stabili.', 'La scrivania facilita chat, screenshot e note.'],
          ],
        },
        image: media('/media/peak-map-route.webp', 'Scout di PEAK usa una corda vicino alla lava con un avviso di presa', 'Immagine ufficiale Steam; l avviso può differire dal simbolo del controller.'),
      },
      {
        title: 'Il controller di PEAK non funziona: controlli sicuri',
        paragraphs: [
          'La causa può essere il dispositivo, Steam, il gioco o un altro remapper. Cambia una variabile alla volta e ripeti lo stesso test. Segna modello, connessione, sistema, avviso visibile e risultato.',
          'Un avviso della tastiera non dimostra l assenza di supporto. Può riflettere il layout attivo o l ultimo dispositivo usato. Prova l azione nella versione corrente prima di modificare molte opzioni.',
        ],
        table: {
          caption: 'Controlli PEAK per sintomo',
          headers: ['Sintomo', 'Primo confronto', 'Non presumere'],
          rows: [
            ['Nessun input', 'Controlla Windows e Steam, ricollega e prova una partita nuova.', 'Che tutti i controller siano incompatibili.'],
            ['Movimento sì, avviso no', 'Prova presa, salto, oggetti e pausa separatamente.', 'Che un azione mancante annulli tutto il supporto.'],
            ['Doppio input', 'Chiudi remapper o dispositivi virtuali concorrenti.', 'Che modifiche simultanee aiutino.'],
            ['Cadute wireless', 'Confronta con il cavo e controlla batteria e ricevitore.', 'Che ogni adattatore Bluetooth sia garantito.'],
            ['Risultato diverso da un amico', 'Confronta dispositivo, layout, piattaforma e versione.', 'Che il controller cambi codici stanza o crossplay.'],
          ],
        },
        bullets: [
          ['Rendi le modifiche reversibili', 'Ricollega, chiudi un remapper o ripristina un layout prima di provare altro.'],
          ['Verifica i file solo se serve', 'La verifica Steam riguarda problemi ampi di installazione, non il primo controllo di un tasto.'],
          ['Separa input e rete', `Il controller non decide se un amico entra; usa la ${articleLink('room-codes', 'guida ai codici stanza')}.`],
          ['Raccogli prove', 'Indica modello, connessione, versione, azione, avviso e risultato.'],
        ],
      },
      {
        title: 'Cosa non promette la risposta sul controller',
        paragraphs: [
          `I campi Steam rispondono alla compatibilità del dispositivo. Non provano una versione console, una sessione PC-console, una regola definitiva di crossplay o una mappa permanente. Per questi temi usa la ${articleLink('peak-crossplay-guide', 'guida al crossplay')} e la ${articleLink('room-codes', 'guida multiplayer e codici stanza')}.`,
          'Il comportamento può cambiare dopo un aggiornamento. Controlla store e menu del gioco quando cambiano gli avvisi e non presentare questo articolo come garanzia per un adattatore non testato.',
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ controller di PEAK',
      items: [
        ['PEAK supporta il controller?', 'Sì. Steam mostra supporto Xbox completo e supporto PS4 e PS5 per la versione Windows PC.'],
        ['Si può giocare a PEAK con un controller su PC?', 'Sì. Collega un controller compatibile e prova movimento, presa, salto, oggetti e pausa.'],
        ['PEAK supporta controller PS5 e Xbox?', 'Steam elenca Xbox completo e PS5, oltre a PS4 e Bluetooth nelle voci PlayStation. Gli avvisi possono cambiare.'],
        ['Perché PEAK mostra ancora i comandi della tastiera?', 'Il layout attivo o l ultimo dispositivo possono essere la causa. Prova l azione e cambia una cosa alla volta.'],
        ['Posso usare il controller con i codici stanza di PEAK?', `Sì. Input e lobby sono separati; usa la ${articleLink('room-codes', 'guida ai codici stanza')} per entrare.`],
        ['Il controller è migliore di tastiera e mouse?', 'Non esiste una risposta universale. Confronta lo stesso percorso e scegli il metodo più affidabile.'],
        ['Il supporto controller significa crossplay con console?', `No. La scheda descrive il PC Steam. Consulta la ${articleLink('peak-crossplay-guide', 'guida al crossplay')} per lo stato delle piattaforme.`],
      ],
    },
    source: {
      eyebrow: 'Fonti e limiti',
      title: 'Metadati Steam verificati in una data fissa',
      body: 'Le categorie dei controller e gli indicatori Bluetooth sono stati verificati sulla pagina ufficiale PEAK di Steam il 30 ottobre 2026. La scheda risponde sulla compatibilità del dispositivo, ma non pubblica ogni tasto, adattatore, console o cambiamento futuro. Controlla il menu del gioco dopo gli aggiornamenti.',
      links: [
        ['Pagina ufficiale PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['FAQ ufficiale PEAK di Landfall', 'https://landfall.se/peak-faq'],
      ],
    },
    related: [
      ['how-to-play-peak', 'Leggi la guida ai controlli per principianti'],
      ['room-codes', 'Entra in una lobby cooperativa PEAK'],
      ['peak-crossplay-guide', 'Controlla lo stato del crossplay'],
      ['peak-photon-troubleshooting', 'Risolvi i problemi di connessione'],
    ],
    relatedLabel: 'Guide PEAK correlate su input e multiplayer',
  },
};
