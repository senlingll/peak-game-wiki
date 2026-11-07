export const peakSystemRequirementsTranslations = {
  zh: {
    meta: {
      title: 'PEAK 配置要求：PC 最低配置与推荐配置',
      description: '查看 PEAK 官方 Windows 配置要求：最低与推荐 CPU、显卡、内存、DirectX 和存储空间，并按步骤核对自己的电脑。',
      schema: '根据 Steam 官方资料整理 PEAK Windows PC 最低与推荐配置，并说明核对处理器、显卡、内存、DirectX 和存储空间的方法及资料限制。',
    },
    primaryKeyword: 'PEAK 配置要求',
    eyebrow: 'Steam 官方 Windows PC 配置 - 2026 年 11 月 7 日核对',
    h1: 'PEAK 配置要求：PC 最低配置与推荐配置',
    intro: 'PEAK 配置要求面向 64 位 Windows 电脑。Steam 列出的最低配置为 Intel Core i5 2.5 GHz 或同级处理器、8 GB 内存，以及 GTX 1060 或 RX 6600 XT；推荐配置为 Intel Core i5 3.0 GHz 或 Ryzen 5、16 GB 内存，以及 RTX 2060 或 RX 7600 XT。两档都要求 DirectX 12 和 16 GB 可用存储空间。以下信息在 2026 年 11 月 7 日从官方页面核对，不是帧率测试。',
    answerLabel: '简要结论',
    answer: '最低档请核对 64 位 Windows 10、i5 2.5 GHz 或同级处理器、8 GB 内存和 GTX 1060 或 RX 6600 XT。推荐档列出 Windows 11、i5 3.0 GHz 或 Ryzen 5、16 GB 内存和 RTX 2060 或 RX 7600 XT。两档都要求 DirectX 12 与 16 GB 可用空间。',
    tocLabel: '本页内容',
    tocFaq: '配置要求常见问题',
    heroImage: {
      alt: 'PEAK 官方 Final Ascent 美术图，登山队正向山顶攀登',
      caption: 'PEAK 官方美术图用于说明游戏主题，不代表任何硬件基准测试或画质设置。',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'PEAK 配置要求一览',
        paragraphs: [
          '下表按 PEAK 官方 Steam 商品页列出最低和推荐 PC 配置。“最低”和“推荐”是商店页面使用的等级名称。页面没有为这些配置指定目标帧率、分辨率、画质预设，也没有承诺所有接近这些部件的电脑表现相同。',
          '请逐项核对。更快的处理器不能替代低于要求的显卡，增加内存也不能替代操作系统或 DirectX 条件。如果型号名称不同，请记录完整型号并查阅可信硬件资料；不要仅凭品牌系列名称判断两者等效。',
        ],
        table: {
          caption: 'Steam 官方 PEAK Windows PC 配置，核对日期：2026 年 11 月 7 日',
          headers: ['等级', '操作系统', '处理器', '内存', '显卡', 'DirectX', '可用存储空间'],
          rows: [
            ['最低', '64 位 Windows 10', 'Intel Core i5 2.5 GHz 或同级处理器', '8 GB RAM', 'GTX 1060 或 RX 6600 XT', '版本 12', '16 GB'],
            ['推荐', '64 位 Windows 11', 'Intel Core i5 3.0 GHz 或 AMD Ryzen 5 或同级处理器', '16 GB RAM', 'RTX 2060 或 RX 7600 XT', '版本 12', '16 GB'],
          ],
        },
        afterTable: '资料来自 PEAK 官方 Steam 商品页。商店配置可能更新，安装前请重新核对。',
      },
      {
        id: 'minimum-requirements',
        title: 'PEAK 最低配置代表什么',
        paragraphs: [
          '最低配置是购买或启动游戏前应先比较的官方基准。它列出 64 位 Windows 10、8 GB 内存、DirectX 12，以及两款示例显卡。处理器字段写的是 Intel Core i5 2.5 GHz 或同级 CPU；“同级”并未附带逐个型号的清单，因此还要核实具体代数和型号。',
          '达到最低配置不等于保证某个帧率。Steam 页面没有把最低配置与分辨率或画质等级绑定。电脑散热、驱动、电源模式、后台程序和其他硬件也会影响实际体验。如果你的电脑处于临界范围，应核对完整型号，并为 Windows 和其他应用留出空间。',
        ],
        bullets: [
          ['逐项检查', '分别比较 Windows、处理器、内存、显卡、DirectX 和可用存储。'],
          ['记录完整型号', '仅知道 Core i5 或 GTX 系列，无法确认具体配置是否匹配。'],
          ['把它当作基准', '最低配置没有承诺目标帧率，也不保证表现完全一致。'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'PEAK 推荐配置与最低配置有什么区别',
        paragraphs: [
          '推荐档把内存从 8 GB 提高到 16 GB，并列出更高一级的处理器和显卡：Intel Core i5 3.0 GHz 或 AMD Ryzen 5，以及 RTX 2060 或 RX 7600 XT。操作系统栏从 Windows 10 改为 Windows 11。两档都列出 DirectX 12 和 16 GB 可用存储。',
          '比较两台电脑或考虑升级时，可以把推荐栏作为更高的参照，但 Steam 没有说明该等级对应什么帧率、分辨率或画质预设。商店也没有列出所有笔记本显卡、处理器代数或驱动版本的等效关系。',
        ],
        image: {
          alt: 'PEAK 探险者在雾气笼罩的游戏场景中接近 Citadel',
          caption: 'Steam 官方游戏画面用于展示 PEAK 场景；它不是最低与推荐硬件的对比测试。',
        },
      },
      {
        id: 'check-your-pc',
        title: '如何核对自己的电脑是否符合 PEAK 配置',
        paragraphs: [
          '先确认真正运行游戏的设备，特别是同时有集成显卡和独立显卡的笔记本。Windows 设置可以查看处理器和已安装内存；任务管理器或显卡控制面板可以查看 GPU。先记下完整型号，再与 Steam 的两档配置逐项比较。',
          '这是一份核对清单，不是自动兼容性扫描器。它不会读取电脑、运行基准测试，也不会替未列出的部件判定等效。如果标签不熟悉，请通过厂商产品页查找准确型号，不要只凭显存容量或产品系列名称推断。',
        ],
        bullets: [
          ['1. 查找处理器和内存', '打开“设置 > 系统 > 关于”，记录处理器型号、已安装 RAM，以及 Windows 显示的系统类型。'],
          ['2. 确认正在使用的显卡', '打开任务管理器的“性能”页或显卡控制面板。如有两块 GPU，记录两者并确认游戏启动时使用哪一块。'],
          ['3. 检查 DirectX 和空间', '运行 dxdiag 查看 DirectX 信息，再确认安装目标磁盘至少有 16 GB 可用空间。'],
          ['4. 逐项比较', '把每个部件与最低或推荐档核对；无法确认的等效关系应标为未知，而不是默认通过。'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: '我的电脑或笔记本能运行 PEAK 吗？',
        paragraphs: [
          '先核对显卡型号，再查看处理器、RAM、Windows、DirectX 和可用空间。笔记本产品名往往隐藏了配置差异：外观或处理器标签相近的两台设备，可能使用不同 GPU 和功耗限制。请查具体配置表，不要只看笔记本系列名称。',
          '官方要求没有单独的笔记本配置表，也没有把集成显卡列为可支持的等级。Steam 同样没有测试特定 Surface 型号或所有低功耗显卡。因此低于示例型号的笔记本属于未确认情况，不能据此断言一定无法运行或一定流畅。',
        ],
        image: {
          alt: 'PEAK 探险者穿过关卡中的危险路段',
          caption: 'Steam 官方游戏画面；没有展示笔记本、画质设置或帧率结果。',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'PEAK 需要多少存储空间和哪个 DirectX 版本',
        paragraphs: [
          'Steam 为两档配置都列出 16 GB 可用空间和 DirectX 12。存储字段表示所需的可用空间，不是精确下载文件大小，也没有说明临时更新文件或其他已安装文件最终会占多少空间。如果系统盘还负责更新，建议额外留有余量。',
          '搜索“PEAK 下载大小”或“PEAK Steam 占用”可能指下载数据，也可能指安装磁盘空间。官方要求表能确认的是后者：16 GB 可用空间。该配置字段没有提供稳定的下载体积，所以本页不会把它写成下载文件大小。',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'PEAK 支持 Windows、Mac 或 Linux 吗？',
        paragraphs: [
          '2026 年 11 月 7 日核对的 Steam 官方应用资料显示支持 Windows，没有列出 macOS 或 Linux 支持。因此上面的 Windows 配置是本次核实到的 PC 目标。商店平台信息可能变化，决定安装平台时请查看当前商品页。',
          'Steam Deck 兼容性与这张 Windows 配置表是两个问题。PC 配置不能证明掌机已验证、可玩或不支持。请查 Steam 当前的 Deck 兼容性标签和近期官方说明，不要从手柄或操作系统字段猜测。',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: '官方配置表没有说明哪些事情',
        paragraphs: [
          '商店配置适合做初筛，但不是基准测试报告。它没有写出预期 FPS、分辨率、画质预设、最低显存、支持的驱动版本，也没有提供完整的 CPU 与显卡等效型号名单。由于核对的官方来源没有公布帧率，本页不添加任何 FPS 预测。',
          '如果电脑达到最低配置却出现卡顿，记录准确的 CPU、GPU、驱动版本、电源模式和刚刚改变的设置，再一次只调整一个变量。还可以查看[[link:peak-game-update|PEAK 官方更新记录]]是否提到了相关修复。补丁后出现症状，并不能单独证明硬件已不受支持。',
          '购买硬件前，请重新确认 Steam 当前要求，并查找针对准确型号和目标设置的独立基准测试。本 wiki 只转述发行方列出的基准；它不认证未列出的配置，也不能替代测试或售后政策。',
        ],
        bullets: [
          ['官方事实', 'Steam 页面列出的最低和推荐部件、DirectX、平台标记及存储空间。'],
          ['本页无法确认', '目标帧率、精确等效硬件清单、笔记本基准或 Steam Deck 验证结果。'],
          ['下一步', '核对具体型号，并在购买或安装前复查官方商品页。'],
        ],
      },
    ],
    faq: {
      eyebrow: '快速解答',
      title: 'PEAK 配置要求常见问题',
      items: [
        ['PEAK 最低配置是什么？', 'Steam 列出 64 位 Windows 10、Intel Core i5 2.5 GHz 或同级处理器、8 GB RAM、GTX 1060 或 RX 6600 XT、DirectX 12，以及 16 GB 可用空间。'],
        ['PEAK 推荐电脑配置是什么？', '推荐档为 64 位 Windows 11、Intel Core i5 3.0 GHz 或 AMD Ryzen 5 或同级处理器、16 GB RAM、RTX 2060 或 RX 7600 XT、DirectX 12，以及 16 GB 可用空间。'],
        ['我的电脑或笔记本能运行 PEAK 吗？', '把 CPU 和 GPU 的完整型号、内存、Windows 版本、DirectX 与存储空间逐项对照官方表格。Steam 没有单独的笔记本清单，也没有通用帧率保证。'],
        ['PEAK 需要多大空间？', '官方要求列出 16 GB 可用存储空间。这不等于经过核实的下载文件大小。'],
        ['PEAK 能在 Mac 或 Linux 上玩吗？', '2026 年 11 月 7 日核对的 Steam 官方资料列出 Windows 支持，没有列出 macOS 或 Linux。平台支持可能变化，请查看实时商品页。'],
        ['PEAK 已通过 Steam Deck 验证吗？', '本次配置核对没有确认 Steam Deck 评级。请查看官方商品页当前显示的 Steam Deck 兼容性标记。'],
        ['达到最低配置就一定流畅吗？', '不能保证。商品页没有说明最低档对应的帧率、分辨率或画质预设，实际结果还会受整机配置和软件状态影响。'],
      ],
    },
    source: {
      eyebrow: '来源与限制',
      title: '2026 年 11 月 7 日核对的 Steam 官方配置',
      body: '最低与推荐配置、平台支持标记和存储空间来自 2026 年 11 月 7 日查询的 Steam 官方 PEAK 应用资料。Steam 是本页复述这些字段的一手商店来源。配置和平台信息可能变化，当前公开商品页是最新状态的核对入口。游戏画面只用于说明主题，不作为性能证据。',
      links: [
        ['PEAK 官方 Steam 商品页', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['本指南核对的 Steam 应用资料', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['PEAK 官方更新动态', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', '了解 PEAK 是什么'],
      ['peak-controller-support', '查看 PEAK 手柄支持'],
      ['peak-game-update', '查看 PEAK 官方更新'],
      ['peak-game-price', '比较 PEAK 各地区 Steam 价格'],
    ],
    relatedLabel: '相关 PEAK 指南',
  },
  es: {
    meta: {
      title: 'Requisitos del sistema de PEAK: mínimos y recomendados para PC',
      description: 'Consulta los requisitos del sistema de PEAK para Windows: procesador, tarjeta gráfica, RAM, DirectX y espacio mínimo y recomendado, con pasos para comprobar tu PC.',
      schema: 'Guía basada en la fuente oficial sobre los requisitos mínimos y recomendados de PEAK para Windows y cómo comparar el procesador, la gráfica, la memoria, DirectX y el almacenamiento.',
    },
    primaryKeyword: 'requisitos del sistema de PEAK',
    eyebrow: 'Especificaciones oficiales para Windows · comprobadas el 7 de noviembre de 2026',
    h1: 'Requisitos del sistema de PEAK: mínimos y recomendados para PC',
    intro: 'Los requisitos del sistema de PEAK corresponden a PC con Windows de 64 bits. Steam indica como mínimo un Intel Core i5 a 2,5 GHz o equivalente, 8 GB de RAM y una GTX 1060 o RX 6600 XT. La configuración recomendada incluye un i5 a 3,0 GHz o Ryzen 5, 16 GB de RAM y una RTX 2060 o RX 7600 XT. Ambas requieren DirectX 12 y 16 GB de espacio disponible. Estos datos se comprobaron en la tienda oficial el 7 de noviembre de 2026; no son una prueba de FPS.',
    answerLabel: 'Respuesta rápida',
    answer: 'Para el mínimo, compara tu PC con Windows 10 de 64 bits, un i5 a 2,5 GHz o equivalente, 8 GB de RAM y una GTX 1060 o RX 6600 XT. La recomendación de Steam sube a Windows 11, i5 a 3,0 GHz o Ryzen 5, 16 GB de RAM y RTX 2060 o RX 7600 XT. Ambas filas indican DirectX 12 y 16 GB libres.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas frecuentes sobre requisitos',
    heroImage: {
      alt: 'Ilustración oficial de PEAK Final Ascent con exploradores que suben hacia la cima',
      caption: 'Arte oficial de PEAK como contexto del juego; no muestra una prueba de rendimiento ni ajustes gráficos.',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'Requisitos del sistema de PEAK de un vistazo',
        paragraphs: [
          'La tabla transcribe los campos mínimos y recomendados de PC publicados en la página oficial de PEAK en Steam. “Mínimo” y “recomendado” son las etiquetas de la tienda. La ficha no asocia estas filas con una tasa de fotogramas, resolución o ajuste gráfico concreto, ni garantiza que dos equipos similares rindan igual.',
          'Compara cada fila por separado. Un procesador más rápido no compensa una tarjeta gráfica por debajo del ejemplo, y más memoria no sustituye al sistema operativo o a DirectX. Si el nombre de una pieza no coincide, anota el modelo completo y consulta una referencia de hardware fiable; no deduzcas equivalencia solo por la marca.',
        ],
        table: {
          caption: 'Requisitos oficiales de PEAK para Windows, comprobados el 7 de noviembre de 2026',
          headers: ['Nivel', 'Sistema operativo', 'Procesador', 'Memoria', 'Gráfica', 'DirectX', 'Espacio disponible'],
          rows: [
            ['Mínimo', 'Windows 10 de 64 bits', 'Intel Core i5 a 2,5 GHz o equivalente', '8 GB RAM', 'GTX 1060 o RX 6600 XT', 'Versión 12', '16 GB'],
            ['Recomendado', 'Windows 11 de 64 bits', 'Intel Core i5 a 3,0 GHz o AMD Ryzen 5 o equivalente', '16 GB RAM', 'RTX 2060 o RX 7600 XT', 'Versión 12', '16 GB'],
          ],
        },
        afterTable: 'La fuente es la página oficial de PEAK en Steam. Vuelve a consultarla antes de instalar, ya que los requisitos pueden cambiar.',
      },
      {
        id: 'minimum-requirements',
        title: 'Qué significan los requisitos mínimos de PEAK',
        paragraphs: [
          'La fila mínima es el punto de partida publicado por la tienda para comparar antes de comprar o iniciar el juego. Incluye Windows 10 de 64 bits, 8 GB de memoria, DirectX 12 y dos ejemplos de tarjetas gráficas. El procesador figura como Intel Core i5 a 2,5 GHz o una CPU equivalente; Steam no ofrece una lista modelo por modelo, así que la generación exacta sigue siendo relevante.',
          'Cumplir el mínimo no promete una tasa de fotogramas concreta. Steam no vincula esta fila con una resolución o calidad gráfica. La refrigeración, los controladores, el modo de energía, las aplicaciones en segundo plano y el resto del equipo también pueden influir. Si estás cerca del límite, confirma los modelos completos y deja espacio para Windows y otros programas.',
        ],
        bullets: [
          ['Comprueba la fila completa', 'Compara por separado Windows, CPU, RAM, gráfica, DirectX y almacenamiento libre.'],
          ['Anota el modelo exacto', '“Core i5” o “GTX” por sí solos no identifican una configuración concreta.'],
          ['Tómalo como referencia', 'La fila mínima no fija FPS ni garantiza el mismo resultado en todos los equipos.'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'Requisitos recomendados de PEAK frente al mínimo',
        paragraphs: [
          'La fila recomendada sube la memoria de 8 GB a 16 GB e indica una CPU y una gráfica de nivel superior: Intel Core i5 a 3,0 GHz o AMD Ryzen 5, además de RTX 2060 o RX 7600 XT. El sistema operativo pasa de Windows 10 a Windows 11. Ambas filas mantienen DirectX 12 y 16 GB disponibles.',
          'Usa la fila recomendada para comparar dos PC o valorar una mejora, con la misma cautela: Steam no indica los FPS, la resolución ni el ajuste gráfico previstos para ese nivel. Tampoco publica equivalencias verificadas para cada GPU de portátil, generación de CPU o controlador.',
        ],
        image: {
          alt: 'Un explorador de PEAK se acerca a Citadel en un entorno de juego con niebla',
          caption: 'Captura oficial de Steam para mostrar PEAK; no compara el hardware mínimo con el recomendado.',
        },
      },
      {
        id: 'check-your-pc',
        title: 'Cómo comprobar si tu PC cumple los requisitos de PEAK',
        paragraphs: [
          'Comprueba el equipo que ejecutará el juego, sobre todo si tu portátil tiene gráfica integrada y dedicada. Configuración de Windows muestra el procesador y la memoria instalada; el Administrador de tareas o el panel de la gráfica ayuda a identificar la GPU activa. Anota los modelos completos antes de compararlos con Steam.',
          'Esta lista sirve para comparar, no es un detector automático de compatibilidad. No consulta el ordenador, no ejecuta una prueba y no decide si una pieza no mencionada es equivalente. Si un nombre no te resulta familiar, busca el modelo exacto en la página del fabricante en vez de inferirlo por la memoria de vídeo o la familia comercial.',
        ],
        bullets: [
          ['1. Busca CPU y memoria', 'Abre Configuración > Sistema > Acerca de. Anota el procesador, la RAM instalada y si Windows indica un sistema de 64 bits.'],
          ['2. Identifica la gráfica activa', 'Abre Rendimiento en el Administrador de tareas o el panel de la GPU. Si aparecen dos, anota ambas y comprueba cuál usan los juegos.'],
          ['3. Revisa DirectX y el espacio', 'Ejecuta dxdiag y confirma DirectX; después comprueba que la unidad de instalación tenga 16 GB disponibles.'],
          ['4. Compara cada campo', 'Contrasta todos los componentes con la fila mínima o recomendada. Si no puedes validar una equivalencia, déjala como desconocida.'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: '¿Mi PC o portátil puede ejecutar PEAK?',
        paragraphs: [
          'Empieza por el modelo de la gráfica y luego compara CPU, RAM, Windows, DirectX y almacenamiento. El nombre de un portátil puede ocultar diferencias importantes: dos dispositivos parecidos pueden tener GPU y límites de potencia distintos. Consulta la ficha de la configuración exacta, no solo el nombre de la familia.',
          'Los requisitos oficiales no incluyen una tabla para portátiles ni indican que una gráfica integrada sea suficiente. Tampoco prueban un modelo concreto de Surface ni todas las GPU de bajo consumo. Si tu portátil queda por debajo de los ejemplos, el resultado no está verificado; no se puede afirmar que vaya a fallar o funcionar bien.',
        ],
        image: {
          alt: 'Exploradores de PEAK cruzan una ruta peligrosa dentro de un nivel',
          caption: 'Captura oficial de Steam; no representa un portátil, una configuración ni un resultado de FPS.',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'Espacio de PEAK y requisito de DirectX',
        paragraphs: [
          'Steam indica 16 GB disponibles y DirectX 12 en las dos filas. El campo de almacenamiento es el espacio libre requerido, no el tamaño exacto del archivo descargado; tampoco describe los archivos temporales de una actualización. Deja margen si el mismo disco contiene Windows y otros programas.',
          '“Tamaño de descarga de PEAK” puede referirse a los datos descargados o al espacio de instalación. El dato oficial comprobado aquí responde a lo segundo: 16 GB disponibles. La tabla no publica un tamaño estable de descarga, así que este artículo no presenta esa cifra como peso del archivo.',
        ],
      },
      {
        id: 'supported-platforms',
        title: '¿PEAK funciona en Windows, Mac o Linux?',
        paragraphs: [
          'Los datos oficiales de Steam consultados el 7 de noviembre de 2026 mostraban soporte para Windows, pero no para macOS ni Linux. Por eso la tabla de Windows es el objetivo de PC que se pudo verificar en esa fecha. Consulta la ficha actual antes de decidir dónde instalar, ya que la disponibilidad puede cambiar.',
          'La compatibilidad con Steam Deck es una cuestión distinta de los requisitos de Windows. La tabla de PC no demuestra que el dispositivo esté verificado, que sea jugable o que no sea compatible. Comprueba la etiqueta actual de Steam Deck y las notas oficiales recientes en lugar de inferirlo a partir del mando o del sistema operativo.',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: 'Qué no explican las especificaciones oficiales',
        paragraphs: [
          'Los requisitos sirven para una primera criba, pero no son un informe de rendimiento. No indican FPS, resolución, ajustes gráficos, memoria de vídeo mínima, controladores admitidos ni una lista detallada de CPU y GPU equivalentes. Esta página no añade una estimación de FPS porque la fuente oficial consultada no la ofrece.',
          'Si el PC cumple el mínimo pero PEAK se entrecorta, apunta los modelos exactos de CPU y GPU, los controladores, el modo de energía y el ajuste que cambiaste. Prueba una modificación cada vez y consulta las [[link:peak-game-update|actualizaciones oficiales de PEAK]]. Un problema tras un parche no demuestra por sí solo que el hardware haya dejado de ser compatible.',
          'Antes de comprar componentes, vuelve a comprobar los requisitos de Steam y busca pruebas independientes para los modelos y ajustes exactos. Esta wiki reproduce la referencia del editor; no certifica una configuración no listada ni sustituye una prueba o una política de devolución.',
        ],
        bullets: [
          ['Dato oficial', 'Componentes mínimos y recomendados, DirectX, plataformas y espacio publicados por Steam.'],
          ['No verificado aquí', 'FPS objetivo, equivalencias exactas, pruebas de portátiles o clasificación de Steam Deck.'],
          ['Siguiente paso', 'Compara modelos concretos y revisa la ficha oficial cerca de la compra o instalación.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'Preguntas frecuentes sobre los requisitos de PEAK',
      items: [
        ['¿Cuáles son los requisitos mínimos de PEAK?', 'Steam indica Windows 10 de 64 bits, Intel Core i5 a 2,5 GHz o equivalente, 8 GB de RAM, GTX 1060 o RX 6600 XT, DirectX 12 y 16 GB de espacio disponible.'],
        ['¿Cuáles son los requisitos recomendados para PC?', 'La fila recomendada incluye Windows 11 de 64 bits, Intel Core i5 a 3,0 GHz o AMD Ryzen 5 o equivalente, 16 GB de RAM, RTX 2060 o RX 7600 XT, DirectX 12 y 16 GB disponibles.'],
        ['¿Mi PC o portátil puede ejecutar PEAK?', 'Compara los modelos exactos de CPU y GPU, la RAM, Windows, DirectX y el espacio con la tabla oficial. Steam no ofrece una lista separada para portátiles ni una garantía universal de FPS.'],
        ['¿Cuánto espacio necesita PEAK?', 'Los requisitos oficiales indican 16 GB disponibles. No es lo mismo que un tamaño de descarga verificado.'],
        ['¿Se puede jugar a PEAK en Mac o Linux?', 'Los datos oficiales de Steam comprobados el 7 de noviembre de 2026 indicaban Windows, pero no macOS ni Linux. Revisa la página actual porque el soporte puede cambiar.'],
        ['¿PEAK está verificado para Steam Deck?', 'Esta comprobación no confirmó una clasificación para Steam Deck. Consulta la etiqueta actual en la ficha oficial.'],
        ['¿Cumplir los requisitos mínimos garantiza que funcione con fluidez?', 'No. La ficha no especifica FPS, resolución ni calidad gráfica para el mínimo, y el resultado varía según el equipo y el software.'],
      ],
    },
    source: {
      eyebrow: 'Fuentes y límites',
      title: 'Requisitos oficiales de Steam comprobados el 7 de noviembre de 2026',
      body: 'Las especificaciones mínimas y recomendadas, las plataformas y el almacenamiento proceden de los datos oficiales de Steam para PEAK consultados el 7 de noviembre de 2026. Steam es la fuente de primera mano para estos campos. Los requisitos y la disponibilidad pueden cambiar; la ficha pública actual es la referencia vigente. Las imágenes de juego solo aportan contexto y no son pruebas de rendimiento.',
      links: [
        ['Página oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Datos de Steam consultados para esta guía', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['Novedades oficiales de PEAK', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'Qué es PEAK'],
      ['peak-controller-support', 'Consultar el soporte de mandos'],
      ['peak-game-update', 'Revisar las actualizaciones oficiales'],
      ['peak-game-price', 'Comparar precios de PEAK por región'],
    ],
    relatedLabel: 'Guías relacionadas de PEAK',
  },
  ja: {
    meta: {
      title: 'PEAKの動作環境：PCの最低・推奨スペック',
      description: 'PEAKの公式Windows動作環境を確認。最低・推奨CPU、GPU、メモリ、DirectX、空き容量と、PCの仕様を調べる手順を紹介します。',
      schema: 'Steam公式情報に基づき、PEAKのWindows PC最低・推奨動作環境と、CPU、GPU、メモリ、DirectX、空き容量の確認方法を説明します。',
    },
    primaryKeyword: 'PEAKの動作環境',
    eyebrow: 'Windows PCの公式仕様 · 2026年11月7日確認',
    h1: 'PEAKの動作環境：PCの最低・推奨スペック',
    intro: 'PEAKの動作環境は64ビット版Windows PC向けです。Steamの最低要件はIntel Core i5 2.5 GHzまたは同等のCPU、メモリ8 GB、GTX 1060またはRX 6600 XTです。推奨要件はi5 3.0 GHzまたはRyzen 5、メモリ16 GB、RTX 2060またはRX 7600 XTです。どちらもDirectX 12と16 GBの空き容量が必要です。2026年11月7日に公式ストアで確認した仕様で、FPS測定値ではありません。',
    answerLabel: '要点',
    answer: '最低要件は64ビット版Windows 10、i5 2.5 GHzまたは同等CPU、メモリ8 GB、GTX 1060またはRX 6600 XTです。推奨要件はWindows 11、i5 3.0 GHzまたはRyzen 5、メモリ16 GB、RTX 2060またはRX 7600 XTです。DirectX 12と空き容量16 GBは両方に記載されています。',
    tocLabel: '目次',
    tocFaq: '動作環境に関するよくある質問',
    heroImage: {
      alt: '山頂を目指す隊員を描いたPEAK Final Ascentの公式アート',
      caption: 'ゲームの紹介に使うPEAK公式アートです。ベンチマークや画質設定を示す画像ではありません。',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'PEAKの動作環境一覧',
        paragraphs: [
          '次の表はPEAK公式Steamページに掲載された最低・推奨PC要件です。「最低」と「推奨」はストア側の区分です。各要件に対応するフレームレート、解像度、画質プリセットは公表されておらず、近い構成のPCが同じように動く保証もありません。',
          '項目ごとに確認してください。CPUが速くてもGPUの不足は補えず、メモリを増やしてもOSやDirectXの条件は代替できません。別の型番なら完全なモデル名を控え、信頼できるハードウェア資料で比較します。ブランドや製品シリーズだけで同等と判断しないでください。',
        ],
        table: {
          caption: 'Steam掲載のPEAK公式Windows PC要件（2026年11月7日確認）',
          headers: ['区分', 'OS', 'プロセッサ', 'メモリ', 'グラフィック', 'DirectX', '空き容量'],
          rows: [
            ['最低', '64ビット版Windows 10', 'Intel Core i5 2.5 GHzまたは同等品', '8 GB RAM', 'GTX 1060またはRX 6600 XT', 'バージョン12', '16 GB'],
            ['推奨', '64ビット版Windows 11', 'Intel Core i5 3.0 GHzまたはAMD Ryzen 5など', '16 GB RAM', 'RTX 2060またはRX 7600 XT', 'バージョン12', '16 GB'],
          ],
        },
        afterTable: '出典はPEAK公式Steamページです。要件は変わる可能性があるため、インストール前に再確認してください。',
      },
      {
        id: 'minimum-requirements',
        title: 'PEAKの最低スペックが示す内容',
        paragraphs: [
          '最低欄は購入や起動前に比べるための公式な基準です。64ビット版Windows 10、メモリ8 GB、DirectX 12、GPUの例が記載されています。CPUはIntel Core i5 2.5 GHzまたは同等品ですが、Steamは型番ごとの一覧を掲載していません。世代も確認しましょう。',
          '最低要件を満たすことは、特定のFPSを保証しません。Steamの表には解像度や画質設定が結び付けられていません。冷却、ドライバー、電源設定、バックグラウンドアプリなどでも実際の動作は変わります。境界に近い構成なら正確な型番を確認し、Windowsや他のアプリ用の空きも残してください。',
        ],
        bullets: [
          ['一行ずつ比較', 'OS、CPU、メモリ、GPU、DirectX、空き容量を別々に確認します。'],
          ['型番を控える', 'Core i5やGTXだけでは具体的な構成を特定できません。'],
          ['基準として読む', '最低欄にはFPS目標や同じ結果を保証する説明はありません。'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: '最低スペックと推奨スペックの違い',
        paragraphs: [
          '推奨欄ではメモリが8 GBから16 GBになり、CPUはIntel Core i5 3.0 GHzまたはAMD Ryzen 5、GPUはRTX 2060またはRX 7600 XTです。OSはWindows 10からWindows 11に変わります。DirectX 12と空き容量16 GBは両方に記載されています。',
          'PC同士の比較やアップグレードの検討には推奨欄を目安にできます。ただしSteamは、この区分が想定するFPS、解像度、画質を示していません。ノートPC用GPU、CPU世代、ドライバーごとの同等性一覧もありません。',
        ],
        image: {
          alt: '霧のあるPEAKのゲーム内でCitadelへ向かう隊員',
          caption: 'PEAKを紹介するSteam公式ゲーム画面です。最低・推奨構成の比較テストではありません。',
        },
      },
      {
        id: 'check-your-pc',
        title: 'PCがPEAKの動作環境を満たすか調べる方法',
        paragraphs: [
          '実際にゲームを動かすPCを確認します。内蔵GPUと独立GPUを搭載したノートPCでは特に注意が必要です。Windowsの設定でCPUとメモリを、タスクマネージャーやGPUのコントロールパネルでグラフィックを確認し、Steamの表と比べる前に完全な型番を控えます。',
          'これは手動の比較手順であり、自動判定ツールではありません。PCを読み取ったりベンチマークを動かしたり、未掲載の部品が同等か判断したりはしません。製品名が不明なときはメーカーの仕様ページで正確な型番を確認し、VRAM容量やシリーズ名だけから結論を出さないでください。',
        ],
        bullets: [
          ['1. CPUとメモリを確認', '「設定 > システム > バージョン情報」を開き、CPU、搭載RAM、Windowsのシステム種類を記録します。'],
          ['2. 使用中のGPUを特定', 'タスクマネージャーのパフォーマンス画面やGPU設定を確認します。GPUが2つある場合は両方とゲームで使う方を控えます。'],
          ['3. DirectXと空き容量を確認', 'dxdiagでDirectXを確認し、インストール先ドライブに16 GB以上の空きがあるか調べます。'],
          ['4. 全項目を比較', '最低または推奨欄と照らし合わせます。同等性が分からない部品は合格とせず、未確認のままにします。'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: '自分のPCやノートPCでPEAKを動かせる？',
        paragraphs: [
          'まずGPUの型番を確認し、CPU、RAM、Windows、DirectX、空き容量を比較します。ノートPCは製品名が似ていてもGPUや消費電力の上限が違うことがあります。シリーズ名だけではなく、手元の構成に対応する仕様表を見てください。',
          '公式要件にはノートPC専用の一覧も、内蔵GPUが対象になるという記載もありません。特定のSurfaceやすべての低消費電力GPUをテストした資料もありません。表の例より下の構成は確認できていない状態であり、必ず失敗するとも快適に動くとも断定できません。',
        ],
        image: {
          alt: 'PEAKのステージで危険な足場を渡る隊員たち',
          caption: 'Steam公式ゲーム画面です。ノートPC、設定、FPSの測定結果は示していません。',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'PEAKの容量とDirectX要件',
        paragraphs: [
          'Steamは両方の区分に空き容量16 GBとDirectX 12を記載しています。容量は必要な空きディスク領域で、ダウンロードファイルの正確なサイズではありません。一時アップデートや他のファイルの容量も示していません。システム更新にも使うドライブでは余裕を残しましょう。',
          '「PEAKのダウンロードサイズ」は通信量を尋ねる場合と、インストール先の容量を尋ねる場合があります。ここで確認できる公式項目は後者の16 GBです。要件表に固定のダウンロード容量はないため、ファイルサイズとしては案内しません。',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'PEAKはWindows、Mac、Linuxに対応している？',
        paragraphs: [
          '2026年11月7日に確認したSteam公式アプリ情報ではWindowsが対応し、macOSとLinuxは掲載されていません。この時点で確認できたPC向け仕様は上記のWindows要件です。プラットフォームの提供状況は変わることがあるため、インストール先を決める際は最新のストア情報を確認してください。',
          'Steam Deckの互換性はWindows向け要件とは別の情報です。PC仕様の表から、Deckで検証済み、プレイ可能、または非対応とは判断できません。コントローラー欄やOS欄から推測せず、Steamの現在のDeckラベルと公式告知を確認してください。',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: '公式スペックだけでは分からないこと',
        paragraphs: [
          'ストアの要件は購入前の絞り込みに使えますが、ベンチマーク結果ではありません。FPS、解像度、画質設定、最低VRAM、対応ドライバー、CPUやGPUの詳細な同等品一覧は公開されていません。確認した公式資料にFPSの記載がないため、ここでは予測値を加えていません。',
          '最低要件を満たすPCでカクつく場合は、CPU、GPU、ドライバー、電源モード、変更した設定を記録し、一度に一つだけ試します。[[link:peak-game-update|PEAK公式アップデート]]に関連する修正がないかも確認してください。パッチの後に症状が出ても、ハードウェアが非対応になった証拠とは限りません。',
          '部品を購入する前にSteamの最新要件を確認し、使う部品と設定が一致する第三者ベンチマークも調べましょう。このwikiはメーカー掲載の基準を伝えるもので、未掲載構成の動作を認定したり、試用や返品条件を代替したりはしません。',
        ],
        bullets: [
          ['公式情報', 'Steamの最低・推奨部品、DirectX、対応プラットフォーム、空き容量。'],
          ['ここでは未確認', '目標FPS、厳密な同等品一覧、ノートPCのベンチマーク、Steam Deckの評価。'],
          ['次にすること', '正確な型番を比較し、購入やインストールの前に公式ページを再確認します。'],
        ],
      },
    ],
    faq: {
      eyebrow: '簡単な回答',
      title: 'PEAKの動作環境に関するよくある質問',
      items: [
        ['PEAKの最低動作環境は？', 'Steamには64ビット版Windows 10、Intel Core i5 2.5 GHzまたは同等CPU、メモリ8 GB、GTX 1060またはRX 6600 XT、DirectX 12、空き容量16 GBと記載されています。'],
        ['PEAKの推奨PCスペックは？', '推奨欄は64ビット版Windows 11、Intel Core i5 3.0 GHzまたはAMD Ryzen 5など、メモリ16 GB、RTX 2060またはRX 7600 XT、DirectX 12、空き容量16 GBです。'],
        ['自分のPCやノートPCでPEAKを遊べる？', 'CPUとGPUの完全な型番、RAM、Windows、DirectX、空き容量を公式表と比較してください。SteamはノートPC用一覧やFPSの一律保証を公開していません。'],
        ['PEAKにはどれくらいの空き容量が必要？', '公式要件は空き容量16 GBです。確認済みのダウンロードファイルサイズとは異なります。'],
        ['PEAKはMacやLinuxで遊べる？', '2026年11月7日に確認したSteam公式情報ではWindowsが掲載され、macOSとLinuxは掲載されていません。現在のページで再確認してください。'],
        ['PEAKはSteam Deckで認証済み？', '今回の要件確認ではSteam Deckの評価を確認していません。公式ストアに現在表示されるDeck互換性ラベルを参照してください。'],
        ['最低要件を満たせば快適に動く？', '保証はありません。最低欄はFPS、解像度、画質設定を指定しておらず、PC全体の構成やソフトウェアでも結果が変わります。'],
      ],
    },
    source: {
      eyebrow: '出典と注意点',
      title: '2026年11月7日に確認したSteam公式要件',
      body: '最低・推奨スペック、対応プラットフォーム、空き容量は2026年11月7日に取得したSteam公式PEAKアプリ情報から確認しました。これらの項目はSteamの一手情報です。要件や提供プラットフォームは変更されることがあるため、現行の公開ストアページを最新情報の確認先としてください。ゲーム画像は内容の説明用であり、性能を示す証拠ではありません。',
      links: [
        ['PEAK公式Steamページ', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['このガイドで確認したSteamアプリ情報', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['PEAK公式アップデート', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'PEAKとは'],
      ['peak-controller-support', 'PEAKのコントローラー対応を確認'],
      ['peak-game-update', 'PEAK公式アップデートを確認'],
      ['peak-game-price', 'PEAKの地域別Steam価格を比較'],
    ],
    relatedLabel: '関連するPEAKガイド',
  },
  ko: {
    meta: {
      title: 'PEAK 시스템 요구 사양: PC 최소 및 권장 사양',
      description: 'Steam 공식 PEAK Windows 사양을 확인하세요. 최소·권장 CPU, 그래픽, RAM, DirectX, 저장 공간과 PC 사양 확인 방법을 정리했습니다.',
      schema: 'Steam 공식 자료를 바탕으로 PEAK Windows PC 최소·권장 사양과 CPU, 그래픽, 메모리, DirectX, 저장 공간 확인 방법을 설명합니다.',
    },
    primaryKeyword: 'PEAK 시스템 요구 사양',
    eyebrow: 'Windows PC 공식 사양 · 2026년 11월 7일 확인',
    h1: 'PEAK 시스템 요구 사양: PC 최소 및 권장 사양',
    intro: 'PEAK 시스템 요구 사양은 64비트 Windows PC 기준입니다. Steam 최소 사양은 Intel Core i5 2.5 GHz 또는 동급 프로세서, 메모리 8 GB, GTX 1060 또는 RX 6600 XT입니다. 권장 사양은 i5 3.0 GHz 또는 Ryzen 5, 메모리 16 GB, RTX 2060 또는 RX 7600 XT입니다. 두 항목 모두 DirectX 12와 사용 가능한 저장 공간 16 GB를 요구합니다. 2026년 11월 7일 공식 상점에서 확인한 값이며 FPS 측정 결과는 아닙니다.',
    answerLabel: '빠른 답변',
    answer: '최소 사양은 64비트 Windows 10, i5 2.5 GHz 또는 동급 프로세서, 메모리 8 GB, GTX 1060 또는 RX 6600 XT입니다. 권장 사양은 Windows 11, i5 3.0 GHz 또는 Ryzen 5, 메모리 16 GB, RTX 2060 또는 RX 7600 XT입니다. 두 사양 모두 DirectX 12와 여유 공간 16 GB가 필요합니다.',
    tocLabel: '목차',
    tocFaq: '사양 관련 자주 묻는 질문',
    heroImage: {
      alt: '정상으로 오르는 탐험대가 담긴 PEAK Final Ascent 공식 아트',
      caption: '게임 맥락을 보여 주는 PEAK 공식 아트이며 하드웨어 벤치마크나 그래픽 설정을 나타내지 않습니다.',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'PEAK 시스템 요구 사양 한눈에 보기',
        paragraphs: [
          '아래 표는 PEAK 공식 Steam 페이지에 표시된 PC 최소 및 권장 항목을 옮긴 것입니다. “최소”와 “권장”은 상점에서 사용하는 구분입니다. 각 사양이 보장하는 프레임, 해상도, 그래픽 프리셋은 공개되지 않았으며 비슷한 부품을 가진 모든 PC가 같은 결과를 낸다는 보장도 없습니다.',
          '각 항목을 따로 비교하세요. 더 빠른 CPU가 기준보다 낮은 그래픽 카드를 보완하지는 않으며, 메모리 추가가 운영체제나 DirectX 조건을 대신하지도 않습니다. 모델명이 다르면 전체 모델명을 적고 신뢰할 수 있는 하드웨어 자료를 확인하세요. 브랜드나 제품군만으로 동급이라고 판단하지 마세요.',
        ],
        table: {
          caption: '2026년 11월 7일 확인한 Steam 공식 PEAK Windows PC 사양',
          headers: ['구분', '운영체제', '프로세서', '메모리', '그래픽', 'DirectX', '사용 가능 공간'],
          rows: [
            ['최소', '64비트 Windows 10', 'Intel Core i5 2.5 GHz 또는 동급', 'RAM 8 GB', 'GTX 1060 또는 RX 6600 XT', '버전 12', '16 GB'],
            ['권장', '64비트 Windows 11', 'Intel Core i5 3.0 GHz 또는 AMD Ryzen 5 등', 'RAM 16 GB', 'RTX 2060 또는 RX 7600 XT', '버전 12', '16 GB'],
          ],
        },
        afterTable: '출처는 PEAK 공식 Steam 페이지입니다. 설치 전에 현재 요구 사항을 다시 확인하세요.',
      },
      {
        id: 'minimum-requirements',
        title: 'PEAK 최소 사양이 의미하는 것',
        paragraphs: [
          '최소 항목은 구매하거나 게임을 실행하기 전에 비교할 공식 기준입니다. 64비트 Windows 10, 메모리 8 GB, DirectX 12와 그래픽 카드 예시가 적혀 있습니다. 프로세서는 Intel Core i5 2.5 GHz 또는 동급으로 표시되지만 Steam은 모델별 동급 목록을 제공하지 않습니다. 세대와 정확한 모델도 확인해야 합니다.',
          '최소 사양을 충족해도 특정 FPS가 보장되지는 않습니다. Steam은 이 항목에 해상도나 품질 설정을 연결하지 않았습니다. 냉각, 드라이버, 전원 모드, 백그라운드 앱과 나머지 부품도 실제 플레이에 영향을 줄 수 있습니다. 경계에 가까운 PC라면 전체 모델을 확인하고 Windows와 다른 앱을 위한 공간도 남겨 두세요.',
        ],
        bullets: [
          ['전체 항목 확인', '운영체제, 프로세서, 메모리, 그래픽, DirectX, 여유 공간을 각각 비교합니다.'],
          ['정확한 모델 기록', 'Core i5나 GTX만으로는 구체적인 구성을 확인할 수 없습니다.'],
          ['기준선으로 해석', '최소 사양은 FPS 목표나 동일한 성능을 보장하지 않습니다.'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'PEAK 권장 사양과 최소 사양 비교',
        paragraphs: [
          '권장 항목은 메모리를 8 GB에서 16 GB로 높이고 Intel Core i5 3.0 GHz 또는 AMD Ryzen 5, RTX 2060 또는 RX 7600 XT를 제시합니다. 운영체제도 Windows 10에서 Windows 11로 바뀝니다. DirectX 12와 사용 가능 공간 16 GB는 두 항목에 모두 적혀 있습니다.',
          'PC 두 대를 비교하거나 업그레이드를 고민할 때 권장 항목을 더 높은 기준으로 활용할 수 있습니다. 다만 Steam은 이 등급의 목표 FPS, 해상도, 그래픽 설정을 밝히지 않습니다. 모든 노트북 GPU, CPU 세대, 드라이버의 동급 여부도 공개하지 않았습니다.',
        ],
        image: {
          alt: '안개 낀 PEAK 게임 장면에서 Citadel로 향하는 탐험가',
          caption: 'PEAK를 보여 주는 Steam 공식 게임 화면이며 두 하드웨어 등급의 성능 비교가 아닙니다.',
        },
      },
      {
        id: 'check-your-pc',
        title: '내 PC가 PEAK 사양을 충족하는지 확인하는 방법',
        paragraphs: [
          '실제로 게임을 실행할 PC를 확인하세요. 내장 그래픽과 외장 그래픽이 함께 있는 노트북은 특히 주의해야 합니다. Windows 설정에서 CPU와 설치된 메모리를 볼 수 있고, 작업 관리자나 그래픽 제어판에서 GPU를 확인할 수 있습니다. Steam과 비교하기 전에 전체 모델명을 기록하세요.',
          '이 절차는 직접 사양을 비교하는 방법이지 자동 호환성 검사기가 아닙니다. PC를 스캔하거나 벤치마크를 돌리지 않으며 목록에 없는 부품이 동급인지 판정하지도 않습니다. 모델명이 낯설다면 제조사 제품 페이지에서 정확한 모델을 확인하고 VRAM이나 제품군 이름만으로 결론 내리지 마세요.',
        ],
        bullets: [
          ['1. CPU와 메모리 확인', '설정 > 시스템 > 정보에서 프로세서, 설치된 RAM, 64비트 Windows 여부를 확인합니다.'],
          ['2. 실제 GPU 확인', '작업 관리자 성능 탭이나 GPU 제어판을 엽니다. GPU가 두 개면 둘 다 기록하고 게임에서 사용하는 카드를 확인합니다.'],
          ['3. DirectX와 공간 확인', 'dxdiag로 DirectX를 확인한 뒤 설치 드라이브에 16 GB 이상 남았는지 확인합니다.'],
          ['4. 각 항목 비교', '최소 또는 권장 행과 모든 부품을 대조합니다. 동급인지 모르는 부품은 통과로 간주하지 말고 미확인으로 둡니다.'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: '내 PC나 노트북에서 PEAK를 실행할 수 있나요?',
        paragraphs: [
          '먼저 그래픽 카드 모델을 확인한 다음 프로세서, 메모리, 운영체제, DirectX와 여유 공간을 비교하세요. 노트북은 제품명이 비슷해도 그래픽 카드와 전력 제한이 다를 수 있습니다. 제품군 이름만 보지 말고 가지고 있는 정확한 구성의 사양표를 확인하세요.',
          '공식 요구 사항에는 별도의 노트북 표가 없고 내장 그래픽 지원도 명시되지 않았습니다. 특정 Surface 모델이나 모든 저전력 GPU를 시험한 자료도 없습니다. 예시보다 낮은 구성은 확인되지 않은 상태이므로 실행 실패나 원활한 플레이를 단정할 수 없습니다.',
        ],
        image: {
          alt: 'PEAK 레벨의 위험한 길을 건너는 탐험가들',
          caption: 'Steam 공식 게임 화면으로, 노트북이나 그래픽 설정 또는 FPS 측정 결과를 나타내지 않습니다.',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'PEAK 저장 공간과 DirectX 요구 사항',
        paragraphs: [
          'Steam은 두 등급 모두 DirectX 12와 사용 가능한 공간 16 GB를 요구합니다. 저장 공간은 확보해야 할 디스크 여유이며 정확한 다운로드 파일 크기가 아닙니다. 임시 업데이트 파일이나 다른 설치 파일이 최종적으로 사용하는 용량도 설명하지 않습니다. 시스템 드라이브라면 추가 여유를 남겨 두세요.',
          '“PEAK 다운로드 크기”는 내려받는 데이터나 설치 공간을 뜻할 수 있습니다. 여기서 공식적으로 확인된 값은 후자인 16 GB의 여유 공간입니다. 요구 사항 표에는 고정된 다운로드 크기가 없으므로 이 숫자를 파일 용량이라고 안내하지 않습니다.',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'PEAK는 어떤 운영체제에서 실행되나요?',
        paragraphs: [
          '2026년 11월 7일 확인한 Steam 공식 앱 정보에는 Windows 지원이 표시되어 있었고 macOS와 Linux는 기재되지 않았습니다. 따라서 이때 확인된 PC 대상은 위 Windows 사양입니다. 플랫폼 제공 여부는 바뀔 수 있으니 설치 장소를 정할 때 현재 상점 페이지를 확인하세요.',
          'Steam Deck 호환성은 Windows 사양 표와 별개의 정보입니다. PC 요구 사항만으로 Deck 인증, 실행 가능 여부, 미지원 여부를 증명할 수 없습니다. 컨트롤러나 운영체제 항목을 보고 추측하지 말고 Steam의 현재 Deck 호환성 표시와 공식 공지를 확인하세요.',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: '공식 사양표만으로 알 수 없는 점',
        paragraphs: [
          '상점 사양은 1차 확인 자료이지 벤치마크 보고서가 아닙니다. 예상 FPS, 해상도, 그래픽 프리셋, 최소 VRAM, 지원 드라이버, 동급으로 인정되는 CPU와 GPU 목록은 표시되지 않습니다. 확인한 공식 자료에 FPS가 없으므로 이 페이지도 예측값을 추가하지 않습니다.',
          '최소 사양을 충족하는 PC에서 끊김이 생기면 정확한 CPU와 GPU, 드라이버, 전원 모드, 바꾼 설정을 기록하고 한 번에 하나씩 확인하세요. [[link:peak-game-update|PEAK 공식 업데이트]]에 관련 수정이 있는지도 살펴보세요. 패치 후 증상이 생겼다는 사실만으로 하드웨어가 지원되지 않게 된 것은 아닙니다.',
          '부품을 사기 전에 Steam의 현재 요구 사항을 확인하고 정확한 모델과 설정에 대한 독립 벤치마크를 찾아보세요. 이 wiki는 개발사가 게시한 기준을 옮기며 목록에 없는 구성의 작동을 인증하거나 테스트와 반품 정책을 대신하지 않습니다.',
        ],
        bullets: [
          ['공식 정보', 'Steam에 게시된 최소·권장 부품, DirectX, 플랫폼 및 여유 공간.'],
          ['이 페이지에서 확인하지 않은 것', '목표 FPS, 정확한 동급 부품 목록, 노트북 벤치마크, Steam Deck 등급.'],
          ['다음 단계', '정확한 모델을 비교하고 구매나 설치 전에 공식 페이지를 다시 확인합니다.'],
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK 시스템 요구 사양 관련 자주 묻는 질문',
      items: [
        ['PEAK 최소 사양은 무엇인가요?', 'Steam은 64비트 Windows 10, Intel Core i5 2.5 GHz 또는 동급 프로세서, 메모리 8 GB, GTX 1060 또는 RX 6600 XT, DirectX 12, 사용 가능 공간 16 GB를 안내합니다.'],
        ['PEAK 권장 PC 사양은 무엇인가요?', '권장 사양은 64비트 Windows 11, Intel Core i5 3.0 GHz 또는 AMD Ryzen 5 등, 메모리 16 GB, RTX 2060 또는 RX 7600 XT, DirectX 12, 사용 가능 공간 16 GB입니다.'],
        ['내 PC나 노트북에서 PEAK를 실행할 수 있나요?', '프로세서와 그래픽 카드의 전체 모델명, 메모리, 운영체제, DirectX, 여유 공간을 공식 표와 비교하세요. Steam은 별도 노트북 목록이나 FPS 보장을 제공하지 않습니다.'],
        ['PEAK에 필요한 저장 공간은 얼마인가요?', '공식 요구 사항은 사용 가능한 공간 16 GB입니다. 확인된 다운로드 파일 크기와는 다릅니다.'],
        ['PEAK는 Mac이나 Linux에서 플레이할 수 있나요?', '2026년 11월 7일 확인한 Steam 자료에는 Windows가 표시되고 macOS와 Linux는 기재되지 않았습니다. 현재 페이지에서 다시 확인하세요.'],
        ['PEAK는 Steam Deck 인증을 받았나요?', '이번 사양 확인에서는 Steam Deck 등급을 확인하지 못했습니다. 공식 상점에 현재 표시된 Deck 호환성 정보를 확인하세요.'],
        ['최소 사양이면 원활하게 실행되나요?', '보장되지 않습니다. 상점은 최소 사양의 FPS, 해상도, 그래픽 설정을 지정하지 않으며 PC 전체 구성과 소프트웨어 상태에 따라 결과가 달라질 수 있습니다.'],
      ],
    },
    source: {
      eyebrow: '출처와 제한 사항',
      title: '2026년 11월 7일 확인한 Steam 공식 사양',
      body: '최소·권장 사양, 플랫폼 표시와 저장 공간은 2026년 11월 7일 확인한 Steam 공식 PEAK 앱 정보에서 가져왔습니다. 이 항목의 1차 출처는 Steam입니다. 요구 사항과 플랫폼은 바뀔 수 있으므로 현재 공개된 상품 페이지에서 최신 상태를 확인하세요. 게임 이미지는 주제 설명용이며 성능 증거가 아닙니다.',
      links: [
        ['PEAK 공식 Steam 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['이 가이드에서 확인한 Steam 앱 정보', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['PEAK 공식 업데이트 소식', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'PEAK 소개'],
      ['peak-controller-support', 'PEAK 컨트롤러 지원 확인'],
      ['peak-game-update', 'PEAK 공식 업데이트 확인'],
      ['peak-game-price', 'PEAK Steam 지역별 가격 비교'],
    ],
    relatedLabel: '관련 PEAK 가이드',
  },
  de: {
    meta: {
      title: 'PEAK Systemanforderungen: Minimum und Empfehlung für PC',
      description: 'Die offiziellen PEAK-Anforderungen für Windows: minimale und empfohlene CPU, Grafikkarte, RAM, DirectX und Speicherplatz sowie eine PC-Prüfliste.',
      schema: 'Ein quellengestützter Überblick über die minimalen und empfohlenen Windows-PC-Anforderungen von PEAK und den Vergleich von CPU, GPU, Arbeitsspeicher, DirectX und Speicherplatz.',
    },
    primaryKeyword: 'PEAK Systemanforderungen',
    eyebrow: 'Offizielle Windows-PC-Angaben · geprüft am 7.11.2026',
    h1: 'PEAK Systemanforderungen: Minimum und Empfehlung für PC',
    intro: 'Die PEAK Systemanforderungen gelten für 64-Bit-Windows-PCs. Steam nennt als Minimum einen Intel Core i5 mit 2,5 GHz oder eine gleichwertige CPU, 8 GB RAM und eine GTX 1060 oder RX 6600 XT. Empfohlen werden ein i5 mit 3,0 GHz oder Ryzen 5, 16 GB RAM und eine RTX 2060 oder RX 7600 XT. Beide Stufen verlangen DirectX 12 und 16 GB verfügbaren Speicher. Die Angaben wurden am 7.11.2026 im offiziellen Store geprüft und sind kein FPS-Benchmark.',
    answerLabel: 'Kurzantwort',
    answer: 'Für das Minimum vergleiche deinen PC mit 64-Bit-Windows 10, einem i5 mit 2,5 GHz oder gleichwertig, 8 GB RAM und GTX 1060 oder RX 6600 XT. Empfohlen sind Windows 11, i5 mit 3,0 GHz oder Ryzen 5, 16 GB RAM sowie RTX 2060 oder RX 7600 XT. Beide Angaben nennen DirectX 12 und 16 GB freien Speicher.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Häufige Fragen zu den Systemanforderungen',
    heroImage: {
      alt: 'Offizielle PEAK-Final-Ascent-Grafik mit Kundschaftern auf dem Weg zum Gipfel',
      caption: 'Offizielle PEAK-Grafik zur Einordnung des Spiels; sie zeigt weder einen Hardwaretest noch Grafikeinstellungen.',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'PEAK Systemanforderungen auf einen Blick',
        paragraphs: [
          'Die Tabelle übernimmt die minimalen und empfohlenen PC-Angaben von der offiziellen PEAK-Seite bei Steam. „Minimum“ und „Empfohlen“ sind die dortigen Bezeichnungen. Steam verknüpft die Zeilen nicht mit einer Zielbildrate, Auflösung oder Qualitätsstufe und garantiert nicht, dass ähnlich ausgestattete PCs gleich laufen.',
          'Prüfe jede Zeile einzeln. Eine schnellere CPU gleicht eine zu schwache Grafikkarte nicht aus; zusätzlicher Arbeitsspeicher ersetzt auch keine Betriebssystem- oder DirectX-Anforderung. Notiere bei abweichenden Namen das genaue Modell und nutze eine verlässliche Hardwarequelle. Ein Marken- oder Serienname allein belegt keine Gleichwertigkeit.',
        ],
        table: {
          caption: 'Offizielle PEAK-Anforderungen für Windows-PCs, geprüft am 7.11.2026',
          headers: ['Stufe', 'Betriebssystem', 'Prozessor', 'Arbeitsspeicher', 'Grafik', 'DirectX', 'Freier Speicher'],
          rows: [
            ['Minimum', '64-Bit-Windows 10', 'Intel Core i5 mit 2,5 GHz oder gleichwertig', '8 GB RAM', 'GTX 1060 oder RX 6600 XT', 'Version 12', '16 GB'],
            ['Empfohlen', '64-Bit-Windows 11', 'Intel Core i5 mit 3,0 GHz oder AMD Ryzen 5 oder gleichwertig', '16 GB RAM', 'RTX 2060 oder RX 7600 XT', 'Version 12', '16 GB'],
          ],
        },
        afterTable: 'Quelle ist die offizielle PEAK-Seite bei Steam. Prüfe sie vor der Installation erneut, da sich Anforderungen ändern können.',
      },
      {
        id: 'minimum-requirements',
        title: 'Was die minimalen PEAK-Anforderungen bedeuten',
        paragraphs: [
          'Die Minimum-Zeile ist die veröffentlichte Grundlage für einen Vergleich vor Kauf oder Start. Sie nennt 64-Bit-Windows 10, 8 GB Arbeitsspeicher, DirectX 12 und zwei Beispielgrafikkarten. Für die CPU steht dort Intel Core i5 mit 2,5 GHz oder gleichwertig. Eine Modell-für-Modell-Liste fehlt, deshalb ist auch die genaue Generation wichtig.',
          'Das Erreichen des Minimums garantiert keine bestimmte Bildrate. Steam ordnet dieser Zeile weder Auflösung noch Qualitätsstufe zu. Kühlung, Treiber, Energiemodus, Hintergrundprogramme und andere Hardware beeinflussen eine Sitzung ebenfalls. Liegt dein PC nahe an der Grenze, prüfe die vollständigen Modellnamen und plane Platz für Windows und weitere Anwendungen ein.',
        ],
        bullets: [
          ['Die ganze Zeile prüfen', 'Vergleiche Windows, CPU, RAM, Grafik, DirectX und freien Speicher getrennt.'],
          ['Exakte Modelle notieren', '„Core i5“ oder „GTX“ allein beschreibt keine konkrete Ausstattung.'],
          ['Als Ausgangspunkt verstehen', 'Das Minimum nennt weder ein FPS-Ziel noch eine Leistungsgarantie.'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'Empfohlene Anforderungen im Vergleich zum Minimum',
        paragraphs: [
          'Die empfohlene Zeile erhöht den Arbeitsspeicher von 8 auf 16 GB und nennt eine stärkere CPU und Grafik: Intel Core i5 mit 3,0 GHz oder AMD Ryzen 5 sowie RTX 2060 oder RX 7600 XT. Beim Betriebssystem wechselt der Eintrag von Windows 10 zu Windows 11. DirectX 12 und 16 GB verfügbarer Speicher stehen in beiden Zeilen.',
          'Nutze die Empfehlung beim Vergleich zweier PCs oder als höheren Maßstab für ein Upgrade. Steam nennt jedoch keine Bildrate, Auflösung oder Grafikeinstellung, die diese Stufe liefern soll. Eine geprüfte Gleichwertigkeitsliste für jede Laptop-GPU, CPU-Generation oder Treiberversion gibt es ebenfalls nicht.',
        ],
        image: {
          alt: 'Ein PEAK-Kundschafter nähert sich Citadel in einer nebligen Spielumgebung',
          caption: 'Offizieller Steam-Gameplay-Screenshot zur Darstellung von PEAK; kein Vergleich zwischen Minimum- und Empfehlungs-Hardware.',
        },
      },
      {
        id: 'check-your-pc',
        title: 'So prüfst du, ob dein PC die PEAK-Anforderungen erfüllt',
        paragraphs: [
          'Prüfe den PC, auf dem das Spiel tatsächlich laufen soll, besonders bei Laptops mit integrierter und eigener Grafikeinheit. In den Windows-Einstellungen findest du Prozessor und installierten Arbeitsspeicher; Task-Manager oder Grafiksoftware helfen bei der GPU. Notiere vollständige Modellnamen, bevor du sie mit Steam vergleichst.',
          'Diese Anleitung ist eine manuelle Checkliste und kein automatischer Kompatibilitätstest. Sie liest deinen PC nicht aus, führt keinen Benchmark aus und entscheidet nicht über nicht genannte gleichwertige Teile. Suche bei unklaren Bezeichnungen nach dem genauen Modell auf der Herstellerseite, statt von VRAM oder Produktfamiliennamen auf Gleichwertigkeit zu schließen.',
        ],
        bullets: [
          ['1. Prozessor und Speicher finden', 'Öffne Einstellungen > System > Info. Notiere CPU-Modell, installierten RAM und den angezeigten Systemtyp.'],
          ['2. Aktive Grafikkarte bestimmen', 'Öffne Leistung im Task-Manager oder die GPU-Systemsteuerung. Bei zwei GPUs notierst du beide und prüfst, welche Spiele verwenden.'],
          ['3. DirectX und Speicher prüfen', 'Starte dxdiag und kontrolliere DirectX. Prüfe danach, ob auf dem Installationslaufwerk mindestens 16 GB frei sind.'],
          ['4. Alle Felder vergleichen', 'Vergleiche jede Komponente mit Minimum oder Empfehlung. Unklare Gleichwertigkeit bleibt ungeprüft und gilt nicht automatisch als erfüllt.'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: 'Kann mein PC oder Laptop PEAK ausführen?',
        paragraphs: [
          'Beginne mit dem Grafikkartenmodell und prüfe danach CPU, RAM, Windows, DirectX und freien Speicher. Bei Laptops kann derselbe Produktname unterschiedliche GPUs und Leistungsgrenzen verbergen. Vergleiche das genaue Gerätemodell mit dem Datenblatt deiner Konfiguration, nicht nur mit dem Namen der Produktfamilie.',
          'Die offiziellen Anforderungen enthalten keine eigene Laptop-Liste und nennen integrierte Grafik nicht als unterstützte Stufe. Auch ein bestimmtes Surface-Modell oder jede sparsame GPU wurde damit nicht bestätigt. Liegt dein Laptop unter den Beispielen, ist das Ergebnis offen; ein sicherer Fehlschlag oder flüssiger Betrieb lässt sich daraus nicht ableiten.',
        ],
        image: {
          alt: 'PEAK-Kundschafter überqueren einen gefährlichen Abschnitt eines Levels',
          caption: 'Offizieller Steam-Gameplay-Screenshot; er zeigt weder Laptop-Hardware noch Einstellungen oder FPS.',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'PEAK-Speicherplatz und DirectX-Anforderung',
        paragraphs: [
          'Steam nennt in beiden Stufen 16 GB verfügbaren Speicher und DirectX 12. Der Speicherwert ist der benötigte freie Platz, nicht die exakte Größe der Download-Datei. Er beschreibt auch nicht den zusätzlichen Platz für temporäre Updates oder weitere installierte Dateien. Lass auf dem Systemlaufwerk etwas Reserve.',
          'Die Suche nach „PEAK Downloadgröße“ kann die heruntergeladenen Daten oder den Speicher nach der Installation meinen. Der offizielle Eintrag beantwortet hier Letzteres: 16 GB frei. Da die Tabelle keine feste Downloadgröße aufführt, wird daraus keine Dateigrößenangabe gemacht.',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'Läuft PEAK auf Windows, Mac oder Linux?',
        paragraphs: [
          'Die am 7.11.2026 geprüften offiziellen Steam-App-Daten führten Windows als unterstützte Plattform, macOS und Linux jedoch nicht. Die Windows-Anforderungen oben sind daher das verifizierte PC-Ziel dieses Stands. Die Plattformverfügbarkeit kann sich ändern; prüfe vor der Installation die aktuelle Produktseite.',
          'Steam-Deck-Kompatibilität ist eine andere Frage als die Windows-PC-Anforderungen. Die PC-Tabelle beweist weder eine Deck-Verifizierung noch Spielbarkeit oder fehlende Unterstützung. Prüfe die aktuelle Steam-Deck-Kennzeichnung und jüngste offizielle Hinweise, statt sie aus Controller- oder Betriebssystemfeldern abzuleiten.',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: 'Was die offiziellen Daten nicht aussagen',
        paragraphs: [
          'Die Store-Angaben eignen sich für eine erste Prüfung, sind aber kein Benchmarkbericht. Sie nennen weder FPS noch Auflösung, Qualitätsstufe, Mindest-VRAM oder unterstützte Treiber. Eine genaue Liste gleichwertiger CPUs und Grafikkarten fehlt ebenfalls. Da die geprüfte Quelle keine FPS ausweist, enthält dieser Artikel keine Schätzung.',
          'Ruckelt PEAK trotz erfülltem Minimum, notiere CPU und GPU, Treiber, Energiemodus und die zuletzt geänderte Einstellung. Ändere immer nur eine Sache und prüfe die [[link:peak-game-update|offiziellen PEAK-Updates]] auf passende Korrekturen. Ein Problem nach einem Patch beweist nicht, dass die Hardware nicht mehr unterstützt wird.',
          'Prüfe vor einem Kauf die aktuellen Steam-Anforderungen und unabhängige Benchmarks genau der Modelle und Einstellungen, die du verwenden willst. Dieses Wiki gibt die Herstellerangaben wieder, zertifiziert keine nicht genannten Konfigurationen und ersetzt weder einen Test noch Rückgabebedingungen.',
        ],
        bullets: [
          ['Offizielle Fakten', 'Von Steam gelistete Teile, DirectX, Plattformen und Speicherwerte.'],
          ['Hier nicht bestätigt', 'Ziel-FPS, exakte Hardwareäquivalente, Laptop-Benchmarks oder Steam-Deck-Einstufung.'],
          ['Nächster Schritt', 'Genaue Modelle vergleichen und die Produktseite kurz vor Kauf oder Installation erneut prüfen.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Kurze Antworten',
      title: 'Häufige Fragen zu den PEAK-Systemanforderungen',
      items: [
        ['Was sind die minimalen Systemanforderungen für PEAK?', 'Steam nennt 64-Bit-Windows 10, Intel Core i5 mit 2,5 GHz oder gleichwertig, 8 GB RAM, GTX 1060 oder RX 6600 XT, DirectX 12 und 16 GB verfügbaren Speicher.'],
        ['Welche PC-Anforderungen empfiehlt PEAK?', 'Empfohlen werden 64-Bit-Windows 11, Intel Core i5 mit 3,0 GHz oder AMD Ryzen 5 oder gleichwertig, 16 GB RAM, RTX 2060 oder RX 7600 XT, DirectX 12 und 16 GB frei.'],
        ['Kann mein PC oder Laptop PEAK ausführen?', 'Vergleiche genaue CPU- und GPU-Modelle, RAM, Windows, DirectX und freien Speicher mit der offiziellen Tabelle. Steam veröffentlicht keine separate Laptop-Liste oder allgemeine FPS-Garantie.'],
        ['Wie viel Speicher braucht PEAK?', 'Die offiziellen Anforderungen nennen 16 GB verfügbaren Speicher. Das ist nicht gleichbedeutend mit einer bestätigten Download-Dateigröße.'],
        ['Kann man PEAK auf Mac oder Linux spielen?', 'Die am 7.11.2026 geprüften Steam-Daten führten Windows auf, aber nicht macOS oder Linux. Prüfe die aktuelle Produktseite, da sich Unterstützung ändern kann.'],
        ['Ist PEAK für Steam Deck verifiziert?', 'Diese Prüfung hat keine Steam-Deck-Einstufung bestätigt. Maßgeblich ist die aktuelle Deck-Kompatibilitätsanzeige auf der offiziellen Seite.'],
        ['Läuft PEAK mit erfülltem Minimum flüssig?', 'Das ist nicht garantiert. Steam nennt für das Minimum keine FPS, Auflösung oder Grafikeinstellung; Ergebnisse hängen vom gesamten PC und Softwarezustand ab.'],
      ],
    },
    source: {
      eyebrow: 'Quellen und Grenzen',
      title: 'Offizielle Steam-Anforderungen, geprüft am 7.11.2026',
      body: 'Die minimalen und empfohlenen Spezifikationen, Plattformkennzeichnungen und Speicherangaben stammen aus den offiziellen Steam-App-Daten für PEAK, geprüft am 7.11.2026. Steam ist die Primärquelle für diese Felder. Anforderungen und Verfügbarkeit können sich ändern; maßgeblich ist die aktuelle öffentliche Produktseite. Die Spielbilder dienen nur der Einordnung und sind kein Leistungsnachweis.',
      links: [
        ['Offizielle PEAK-Seite bei Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Für diesen Leitfaden geprüfte Steam-App-Daten', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['Offizielle PEAK-Updates', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'Was ist PEAK?'],
      ['peak-controller-support', 'PEAK-Controller-Unterstützung prüfen'],
      ['peak-game-update', 'Offizielle PEAK-Updates ansehen'],
      ['peak-game-price', 'PEAK-Preise bei Steam nach Region vergleichen'],
    ],
    relatedLabel: 'Weitere PEAK-Leitfäden',
  },
  fr: {
    meta: {
      title: 'Configuration requise de PEAK : minimum et recommandé sur PC',
      description: 'Consultez la configuration officielle de PEAK sous Windows : CPU, carte graphique, RAM, DirectX et stockage minimum et recommandé, avec une méthode de vérification.',
      schema: 'Guide fondé sur la source officielle des configurations Windows minimales et recommandées de PEAK et de la comparaison du processeur, du GPU, de la mémoire, de DirectX et du stockage.',
    },
    primaryKeyword: 'configuration requise de PEAK',
    eyebrow: 'Spécifications Windows officielles · vérifiées le 7 novembre 2026',
    h1: 'Configuration requise de PEAK : minimum et recommandé sur PC',
    intro: 'La configuration requise de PEAK concerne les PC Windows 64 bits. Steam indique au minimum un Intel Core i5 à 2,5 GHz ou équivalent, 8 Go de RAM et une GTX 1060 ou RX 6600 XT. La configuration recommandée comprend un i5 à 3,0 GHz ou Ryzen 5, 16 Go de RAM et une RTX 2060 ou RX 7600 XT. Les deux niveaux demandent DirectX 12 et 16 Go d’espace disponible. Ces données ont été vérifiées sur la boutique officielle le 7 novembre 2026 ; elles ne constituent pas un benchmark FPS.',
    answerLabel: 'Réponse rapide',
    answer: 'Pour le minimum, comparez votre PC sous Windows 10 64 bits, un i5 à 2,5 GHz ou équivalent, 8 Go de RAM et une GTX 1060 ou RX 6600 XT. Steam recommande Windows 11, un i5 à 3,0 GHz ou Ryzen 5, 16 Go de RAM et une RTX 2060 ou RX 7600 XT. Les deux lignes indiquent DirectX 12 et 16 Go libres.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ de configuration',
    heroImage: {
      alt: 'Illustration officielle de PEAK Final Ascent montrant des éclaireurs en route vers le sommet',
      caption: 'Illustration officielle de PEAK pour situer le jeu ; elle ne montre ni benchmark matériel ni réglage graphique.',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'Configuration requise de PEAK en un coup d’œil',
        paragraphs: [
          'Le tableau reprend les exigences PC minimales et recommandées de la page officielle de PEAK sur Steam. « Minimum » et « recommandé » sont les catégories de la boutique. Steam ne leur associe ni fréquence d’images, ni résolution, ni préréglage graphique, et ne garantit pas des résultats identiques entre des PC proches.',
          'Vérifiez chaque ligne séparément. Un processeur plus rapide ne compense pas une carte graphique sous le niveau indiqué, et davantage de mémoire ne remplace pas la condition de système ou de DirectX. Si le modèle diffère, notez sa référence complète et consultez une source matérielle fiable au lieu de déduire l’équivalence du nom de marque.',
        ],
        table: {
          caption: 'Configuration Windows officielle de PEAK, vérifiée le 7 novembre 2026',
          headers: ['Niveau', 'Système', 'Processeur', 'Mémoire', 'Graphique', 'DirectX', 'Espace libre'],
          rows: [
            ['Minimum', 'Windows 10 64 bits', 'Intel Core i5 à 2,5 GHz ou équivalent', '8 Go RAM', 'GTX 1060 ou RX 6600 XT', 'Version 12', '16 Go'],
            ['Recommandé', 'Windows 11 64 bits', 'Intel Core i5 à 3,0 GHz ou AMD Ryzen 5 ou équivalent', '16 Go RAM', 'RTX 2060 ou RX 7600 XT', 'Version 12', '16 Go'],
          ],
        },
        afterTable: 'La source est la page officielle de PEAK sur Steam. Consultez-la de nouveau avant l’installation, car les exigences peuvent évoluer.',
      },
      {
        id: 'minimum-requirements',
        title: 'Ce que signifient les exigences minimales de PEAK',
        paragraphs: [
          'La ligne minimum est la référence publiée pour comparer un PC avant l’achat ou le lancement. Elle mentionne Windows 10 64 bits, 8 Go de mémoire, DirectX 12 et deux exemples de cartes graphiques. Le processeur est indiqué comme Intel Core i5 à 2,5 GHz ou équivalent ; Steam ne fournit pas de liste modèle par modèle, donc la génération exacte reste importante.',
          'Respecter le minimum ne garantit pas une fréquence d’images particulière. Steam ne précise ni résolution ni qualité graphique pour cette ligne. Le refroidissement, les pilotes, le mode d’alimentation, les applications en arrière-plan et le reste du matériel peuvent aussi influer sur une partie. Si votre configuration est proche du seuil, vérifiez les références complètes et gardez de la marge pour Windows et les autres logiciels.',
        ],
        bullets: [
          ['Comparer toute la ligne', 'Vérifiez Windows, CPU, RAM, graphique, DirectX et stockage libre séparément.'],
          ['Noter la référence exacte', '« Core i5 » ou « GTX » ne suffit pas à identifier une configuration.'],
          ['Y voir un seuil de comparaison', 'Le minimum ne définit ni objectif FPS ni garantie de résultat.'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'Configuration recommandée de PEAK face au minimum',
        paragraphs: [
          'La ligne recommandée passe de 8 à 16 Go de mémoire et indique un CPU et une carte graphique plus récents : Intel Core i5 à 3,0 GHz ou AMD Ryzen 5, ainsi que RTX 2060 ou RX 7600 XT. Le système passe de Windows 10 à Windows 11. DirectX 12 et 16 Go disponibles sont indiqués pour les deux niveaux.',
          'Utilisez la recommandation comme repère supérieur pour comparer deux PC ou envisager une mise à niveau. Steam n’indique toutefois pas les FPS, la résolution ou les réglages attendus pour ce niveau. La boutique ne publie pas non plus de liste d’équivalences vérifiées pour chaque GPU de portable, génération de processeur ou pilote.',
        ],
        image: {
          alt: 'Un éclaireur de PEAK s’approche de Citadel dans un décor de jeu brumeux',
          caption: 'Capture officielle de Steam qui montre PEAK ; elle ne compare pas les performances des deux configurations.',
        },
      },
      {
        id: 'check-your-pc',
        title: 'Comment vérifier si votre PC respecte la configuration de PEAK',
        paragraphs: [
          'Vérifiez l’ordinateur qui exécutera réellement le jeu, surtout s’il s’agit d’un portable doté d’un GPU intégré et d’un GPU dédié. Les paramètres Windows affichent le processeur et la mémoire installée ; le Gestionnaire des tâches ou le panneau graphique aide à identifier le GPU actif. Notez les références complètes avant de les comparer à Steam.',
          'Cette procédure est une liste de comparaison, pas un outil de compatibilité automatique. Elle ne lit pas votre PC, ne lance pas de benchmark et ne décide pas si un composant non cité est équivalent. En cas de doute, recherchez le modèle exact sur le site du fabricant au lieu de vous fier à la VRAM ou au nom d’une famille de produits.',
        ],
        bullets: [
          ['1. Trouver le processeur et la mémoire', 'Ouvrez Paramètres > Système > Informations système. Notez le modèle du CPU, la RAM installée et le type de système.'],
          ['2. Identifier le GPU actif', 'Ouvrez l’onglet Performances du Gestionnaire des tâches ou le panneau du GPU. Si deux cartes apparaissent, notez-les toutes les deux et vérifiez celle qu’utilisent les jeux.'],
          ['3. Vérifier DirectX et l’espace', 'Lancez dxdiag pour consulter DirectX, puis assurez-vous que le disque d’installation dispose de 16 Go libres.'],
          ['4. Comparer chaque champ', 'Confrontez toutes les pièces à la ligne minimum ou recommandée. Une équivalence incertaine reste à vérifier et ne vaut pas validation.'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: 'Mon PC ou portable peut-il faire tourner PEAK ?',
        paragraphs: [
          'Commencez par le modèle de GPU, puis vérifiez CPU, RAM, Windows, DirectX et espace libre. Le nom d’un portable peut cacher des cartes graphiques et des limites de puissance différentes. Comparez la fiche correspondant à la configuration exacte, pas seulement le nom de la gamme.',
          'La configuration officielle ne donne pas de liste propre aux portables et ne présente pas le GPU intégré comme niveau pris en charge. Elle ne teste pas non plus un Surface particulier ou toutes les cartes à faible consommation. Si votre portable est sous les exemples, le résultat reste inconnu : on ne peut conclure ni à un échec certain ni à un fonctionnement fluide.',
        ],
        image: {
          alt: 'Des éclaireurs de PEAK traversent un passage dangereux dans un niveau',
          caption: 'Capture officielle de Steam ; aucun portable, réglage ou résultat FPS n’est représenté.',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'Espace nécessaire pour PEAK et version de DirectX',
        paragraphs: [
          'Steam indique 16 Go disponibles et DirectX 12 pour les deux niveaux. Le stockage est l’espace libre requis, pas la taille exacte du fichier téléchargé. La fiche ne décrit pas non plus l’espace temporaire des mises à jour ou d’autres fichiers installés. Gardez une marge si le disque sert aussi à Windows.',
          '« Taille du téléchargement de PEAK » peut désigner les données à télécharger ou l’espace d’installation. La donnée officielle vérifiée ici concerne le second cas : 16 Go libres. Le tableau ne fournit pas de taille de téléchargement fixe ; cet article n’en déduit donc pas un poids de fichier.',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'PEAK fonctionne-t-il sur Windows, Mac ou Linux ?',
        paragraphs: [
          'Les données officielles Steam vérifiées le 7 novembre 2026 indiquaient Windows, mais pas macOS ni Linux. Les exigences Windows ci-dessus sont donc la cible PC vérifiée à cette date. La disponibilité des plateformes peut changer ; consultez la fiche actuelle avant de choisir où installer le jeu.',
          'La compatibilité Steam Deck est différente des exigences Windows. Le tableau PC ne prouve ni une validation pour Deck, ni que le jeu y est jouable ou non pris en charge. Consultez la mention Deck actuelle de Steam et les annonces récentes au lieu de la déduire des champs de manette ou de système.',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: 'Ce que les spécifications officielles ne disent pas',
        paragraphs: [
          'Les exigences du store servent au premier tri, mais ne constituent pas un rapport de benchmark. Elles ne donnent pas les FPS prévus, la résolution, les réglages, la VRAM minimale, les pilotes compatibles ou la liste détaillée des CPU et GPU équivalents. Comme la source officielle consultée ne précise pas les FPS, cet article n’en ajoute pas.',
          'Si PEAK saccade alors que le minimum est respecté, notez les modèles exacts, les pilotes, le mode d’alimentation et le dernier réglage modifié, puis testez une seule chose à la fois. Consultez aussi les [[link:peak-game-update|mises à jour officielles de PEAK]] pour vérifier les correctifs pertinents. Un symptôme après un patch ne prouve pas que le matériel n’est plus pris en charge.',
          'Avant d’acheter du matériel, revérifiez les exigences Steam et recherchez des benchmarks indépendants des modèles et réglages exacts. Cette wiki reprend le seuil publié par l’éditeur ; elle ne certifie pas les configurations absentes de la liste et ne remplace ni un essai ni une politique de retour.',
        ],
        bullets: [
          ['Fait officiel', 'Composants, DirectX, plateformes et stockage indiqués par Steam.'],
          ['Non établi ici', 'FPS cible, équivalences exactes, benchmarks de portables ou validation Steam Deck.'],
          ['Étape suivante', 'Comparer les modèles précis et relire la fiche officielle avant achat ou installation.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ sur la configuration requise de PEAK',
      items: [
        ['Quelle est la configuration minimale de PEAK ?', 'Steam indique Windows 10 64 bits, Intel Core i5 à 2,5 GHz ou équivalent, 8 Go de RAM, GTX 1060 ou RX 6600 XT, DirectX 12 et 16 Go d’espace disponible.'],
        ['Quelle configuration PC est recommandée pour PEAK ?', 'La ligne recommandée comprend Windows 11 64 bits, Intel Core i5 à 3,0 GHz ou AMD Ryzen 5 ou équivalent, 16 Go de RAM, RTX 2060 ou RX 7600 XT, DirectX 12 et 16 Go libres.'],
        ['Mon PC ou portable peut-il faire tourner PEAK ?', 'Comparez les références exactes du CPU et du GPU, la RAM, Windows, DirectX et l’espace libre au tableau officiel. Steam ne publie pas de liste spéciale pour portable ni de garantie FPS universelle.'],
        ['Combien d’espace PEAK demande-t-il ?', 'Les exigences officielles indiquent 16 Go d’espace disponible. Ce n’est pas une taille de téléchargement vérifiée.'],
        ['Peut-on jouer à PEAK sur Mac ou Linux ?', 'Les données Steam vérifiées le 7 novembre 2026 indiquaient Windows, mais pas macOS ni Linux. Consultez la page actuelle, car cela peut changer.'],
        ['PEAK est-il vérifié pour Steam Deck ?', 'Cette vérification n’a pas établi de classement Steam Deck. Consultez l’indicateur actuel sur la fiche officielle.'],
        ['Le minimum garantit-il un jeu fluide ?', 'Non. Steam ne précise ni FPS, ni résolution, ni réglage graphique pour le minimum ; le résultat dépend du PC complet et de son état logiciel.'],
      ],
    },
    source: {
      eyebrow: 'Sources et limites',
      title: 'Exigences Steam officielles vérifiées le 7 novembre 2026',
      body: 'Les spécifications minimales et recommandées, les plateformes et le stockage viennent des données officielles Steam de PEAK consultées le 7 novembre 2026. Steam est la source de première main pour ces champs. Les exigences et la disponibilité peuvent changer ; la fiche publique actuelle reste la référence. Les images du jeu illustrent le sujet et ne prouvent pas les performances.',
      links: [
        ['Page officielle de PEAK sur Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Données Steam consultées pour ce guide', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['Actualités officielles de PEAK', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'Découvrir PEAK'],
      ['peak-controller-support', 'Vérifier la prise en charge des manettes'],
      ['peak-game-update', 'Consulter les mises à jour officielles'],
      ['peak-game-price', 'Comparer le prix de PEAK selon la région'],
    ],
    relatedLabel: 'Guides PEAK associés',
  },
  pt: {
    meta: {
      title: 'Requisitos de sistema de PEAK: mínimos e recomendados para PC',
      description: 'Veja os requisitos oficiais de PEAK para Windows: CPU, placa de vídeo, RAM, DirectX e espaço mínimo e recomendado, além de como conferir seu PC.',
      schema: 'Guia baseado na fonte oficial dos requisitos mínimos e recomendados de PEAK para Windows e de como comparar processador, placa de vídeo, memória, DirectX e armazenamento.',
    },
    primaryKeyword: 'requisitos de sistema de PEAK',
    eyebrow: 'Especificações oficiais para Windows · conferidas em 7 de novembro de 2026',
    h1: 'Requisitos de sistema de PEAK: mínimos e recomendados para PC',
    intro: 'Os requisitos de sistema de PEAK são para PCs Windows de 64 bits. A Steam informa como mínimo um Intel Core i5 de 2,5 GHz ou equivalente, 8 GB de RAM e uma GTX 1060 ou RX 6600 XT. A configuração recomendada lista i5 de 3,0 GHz ou Ryzen 5, 16 GB de RAM e RTX 2060 ou RX 7600 XT. Ambas pedem DirectX 12 e 16 GB de espaço disponível. Os dados foram conferidos na loja oficial em 7 de novembro de 2026 e não são um teste de FPS.',
    answerLabel: 'Resposta rápida',
    answer: 'Para o mínimo, compare seu PC com Windows 10 de 64 bits, i5 de 2,5 GHz ou equivalente, 8 GB de RAM e GTX 1060 ou RX 6600 XT. A recomendação da Steam sobe para Windows 11, i5 de 3,0 GHz ou Ryzen 5, 16 GB de RAM e RTX 2060 ou RX 7600 XT. As duas linhas pedem DirectX 12 e 16 GB livres.',
    tocLabel: 'Nesta página',
    tocFaq: 'Perguntas frequentes sobre requisitos',
    heroImage: {
      alt: 'Arte oficial de PEAK Final Ascent com exploradores subindo em direção ao cume',
      caption: 'Arte oficial de PEAK para contextualizar o jogo; não mostra benchmark de hardware nem configuração gráfica.',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'Requisitos de sistema de PEAK em resumo',
        paragraphs: [
          'A tabela transcreve os requisitos mínimos e recomendados para PC publicados na página oficial de PEAK na Steam. “Mínimo” e “recomendado” são as categorias da loja. A página não associa as linhas a FPS, resolução ou predefinição gráfica e não garante o mesmo resultado em computadores parecidos.',
          'Compare cada item separadamente. Um processador mais rápido não compensa uma placa de vídeo abaixo do exemplo, e mais memória não substitui o sistema operacional ou o DirectX. Se o modelo for diferente, anote o nome completo e consulte uma fonte confiável de hardware em vez de presumir equivalência pela marca.',
        ],
        table: {
          caption: 'Requisitos oficiais de PEAK para Windows, conferidos em 7 de novembro de 2026',
          headers: ['Nível', 'Sistema operacional', 'Processador', 'Memória', 'Placa de vídeo', 'DirectX', 'Espaço disponível'],
          rows: [
            ['Mínimo', 'Windows 10 de 64 bits', 'Intel Core i5 de 2,5 GHz ou equivalente', '8 GB RAM', 'GTX 1060 ou RX 6600 XT', 'Versão 12', '16 GB'],
            ['Recomendado', 'Windows 11 de 64 bits', 'Intel Core i5 de 3,0 GHz ou AMD Ryzen 5 ou equivalente', '16 GB RAM', 'RTX 2060 ou RX 7600 XT', 'Versão 12', '16 GB'],
          ],
        },
        afterTable: 'A fonte é a página oficial de PEAK na Steam. Confira novamente antes de instalar, pois os requisitos podem mudar.',
      },
      {
        id: 'minimum-requirements',
        title: 'O que os requisitos mínimos de PEAK significam',
        paragraphs: [
          'A linha mínima é a referência publicada para comparar antes de comprar ou iniciar o jogo. Ela indica Windows 10 de 64 bits, 8 GB de memória, DirectX 12 e dois exemplos de placa de vídeo. O processador é Intel Core i5 de 2,5 GHz ou equivalente; a Steam não fornece uma lista por modelo, então a geração exata também importa.',
          'Atender ao mínimo não garante uma taxa de quadros específica. A Steam não relaciona essa linha a resolução ou qualidade gráfica. Refrigeração, drivers, modo de energia, programas em segundo plano e outras peças também podem alterar a experiência. Se o PC estiver no limite, confirme os modelos completos e deixe espaço para o Windows e outros aplicativos.',
        ],
        bullets: [
          ['Confira a linha toda', 'Compare Windows, CPU, RAM, placa de vídeo, DirectX e espaço livre separadamente.'],
          ['Anote o modelo exato', '“Core i5” ou “GTX” não identifica uma configuração completa.'],
          ['Use como referência', 'O mínimo não define FPS nem garante resultados iguais em todos os PCs.'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'Requisitos recomendados de PEAK versus os mínimos',
        paragraphs: [
          'A linha recomendada passa de 8 GB para 16 GB de memória e lista CPU e placa de vídeo de nível superior: Intel Core i5 de 3,0 GHz ou AMD Ryzen 5, além de RTX 2060 ou RX 7600 XT. O sistema operacional muda de Windows 10 para Windows 11. DirectX 12 e 16 GB disponíveis aparecem nas duas linhas.',
          'Use a recomendação como uma referência mais alta ao comparar dois PCs ou pensar em um upgrade. A Steam não informa FPS, resolução ou preset esperado para esse nível. Também não publica equivalência verificada para cada GPU de notebook, geração de processador ou driver.',
        ],
        image: {
          alt: 'Explorador de PEAK se aproxima de Citadel em um cenário nebuloso do jogo',
          caption: 'Captura oficial de gameplay da Steam para mostrar PEAK; não compara o desempenho do hardware mínimo e recomendado.',
        },
      },
      {
        id: 'check-your-pc',
        title: 'Como conferir se seu PC atende aos requisitos de PEAK',
        paragraphs: [
          'Confira o computador que realmente vai executar o jogo, especialmente se o notebook tem gráficos integrados e dedicados. As configurações do Windows mostram processador e memória instalada; o Gerenciador de Tarefas ou o painel da placa ajuda a identificar a GPU ativa. Anote os modelos completos antes de comparar com a Steam.',
          'Este é um roteiro de comparação, não um verificador automático de compatibilidade. Ele não consulta seu PC, roda benchmark nem decide se uma peça não listada é equivalente. Se o nome não estiver claro, procure o modelo exato no site do fabricante em vez de deduzir pela VRAM ou pela família do produto.',
        ],
        bullets: [
          ['1. Encontre processador e memória', 'Abra Configurações > Sistema > Sobre. Anote o modelo de CPU, a RAM instalada e o tipo de sistema indicado pelo Windows.'],
          ['2. Identifique a GPU ativa', 'Abra Desempenho no Gerenciador de Tarefas ou o painel da GPU. Se houver duas, anote ambas e confira qual é usada pelos jogos.'],
          ['3. Confira DirectX e espaço', 'Execute dxdiag para ver DirectX e confirme pelo menos 16 GB livres no disco de instalação.'],
          ['4. Compare todos os campos', 'Compare cada peça com a linha mínima ou recomendada. Se a equivalência não estiver clara, marque como não verificada.'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: 'Meu PC ou notebook roda PEAK?',
        paragraphs: [
          'Comece pelo modelo da placa de vídeo e depois confira CPU, RAM, Windows, DirectX e espaço disponível. O nome do notebook pode esconder diferenças importantes: modelos parecidos podem usar GPUs e limites de energia diferentes. Consulte a ficha técnica da configuração exata, não apenas a família do produto.',
          'Os requisitos oficiais não incluem uma tabela específica de notebook nem afirmam que gráficos integrados sejam compatíveis. Também não testam um modelo específico de Surface ou todas as GPUs de baixo consumo. Se o notebook ficar abaixo dos exemplos, o resultado é desconhecido; não dá para afirmar falha certa ou jogo fluido.',
        ],
        image: {
          alt: 'Exploradores de PEAK atravessam um trecho perigoso dentro de uma fase',
          caption: 'Captura oficial de gameplay da Steam; não representa notebook, ajustes ou resultado de FPS.',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'Espaço para PEAK e requisito de DirectX',
        paragraphs: [
          'A Steam lista 16 GB disponíveis e DirectX 12 nas duas categorias. O campo de armazenamento indica espaço livre necessário, não o tamanho exato do download. Ele também não descreve arquivos temporários de atualização ou outros arquivos instalados. Mantenha uma margem se o disco também guarda o Windows.',
          '“Tamanho do download de PEAK” pode significar os dados baixados ou o espaço depois da instalação. O dado oficial verificado aqui responde ao segundo caso: 16 GB livres. A tabela não informa um tamanho fixo de download, então este guia não converte esse valor em tamanho de arquivo.',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'PEAK roda em Windows, Mac ou Linux?',
        paragraphs: [
          'Os dados oficiais da Steam consultados em 7 de novembro de 2026 listavam suporte a Windows, mas não a macOS ou Linux. Portanto, os requisitos de Windows acima eram o alvo de PC verificado naquela data. A disponibilidade pode mudar; consulte a página atual antes de escolher onde instalar.',
          'A compatibilidade com Steam Deck é uma questão diferente dos requisitos do PC Windows. A tabela não prova que o portátil está verificado, que é jogável ou que não tem suporte. Consulte a indicação atual da Steam e os comunicados recentes em vez de inferir pela categoria de controle ou sistema operacional.',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: 'O que as especificações oficiais não informam',
        paragraphs: [
          'Os requisitos ajudam na triagem, mas não são um relatório de benchmark. Eles não informam FPS esperado, resolução, preset gráfico, VRAM mínima, drivers aceitos nem uma lista detalhada de CPUs e GPUs equivalentes. Como a fonte oficial consultada não divulga FPS, este artigo não acrescenta estimativas.',
          'Se PEAK engasgar mesmo atendendo ao mínimo, registre CPU e GPU exatas, driver, modo de energia e a configuração alterada. Teste uma mudança por vez e consulte as [[link:peak-game-update|atualizações oficiais de PEAK]] para procurar correções relacionadas. Um problema depois de um patch não prova que o hardware deixou de ser compatível.',
          'Antes de comprar hardware, confira os requisitos atuais da Steam e procure benchmarks independentes dos modelos e ajustes exatos que pretende usar. Esta wiki reproduz a referência do editor; não certifica uma configuração não listada nem substitui um teste ou política de devolução.',
        ],
        bullets: [
          ['Fato oficial', 'Peças mínimas e recomendadas, DirectX, plataformas e espaço publicados pela Steam.'],
          ['Não confirmado aqui', 'FPS alvo, equivalências exatas, benchmarks de notebook ou avaliação do Steam Deck.'],
          ['Próximo passo', 'Compare modelos exatos e revise a página oficial perto da compra ou instalação.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'Perguntas frequentes sobre os requisitos de PEAK',
      items: [
        ['Quais são os requisitos mínimos de PEAK?', 'A Steam lista Windows 10 de 64 bits, Intel Core i5 de 2,5 GHz ou equivalente, 8 GB de RAM, GTX 1060 ou RX 6600 XT, DirectX 12 e 16 GB de espaço disponível.'],
        ['Quais requisitos de PC são recomendados?', 'A linha recomendada inclui Windows 11 de 64 bits, Intel Core i5 de 3,0 GHz ou AMD Ryzen 5 ou equivalente, 16 GB de RAM, RTX 2060 ou RX 7600 XT, DirectX 12 e 16 GB livres.'],
        ['Meu PC ou notebook roda PEAK?', 'Compare os modelos exatos de CPU e GPU, RAM, Windows, DirectX e espaço com a tabela oficial. A Steam não publica uma lista específica para notebooks nem uma garantia geral de FPS.'],
        ['Quanto espaço PEAK precisa?', 'Os requisitos oficiais indicam 16 GB disponíveis. Isso não equivale a um tamanho de download verificado.'],
        ['Dá para jogar PEAK no Mac ou Linux?', 'Os dados Steam conferidos em 7 de novembro de 2026 listavam Windows, mas não macOS ou Linux. Verifique a página atual porque o suporte pode mudar.'],
        ['PEAK é verificado para Steam Deck?', 'Esta consulta não confirmou uma classificação do Deck. Confira a indicação atual de compatibilidade na página oficial.'],
        ['Atender ao mínimo garante desempenho fluido?', 'Não. A loja não informa FPS, resolução nem qualidade gráfica para o mínimo; o resultado depende do PC completo e do estado do software.'],
      ],
    },
    source: {
      eyebrow: 'Fontes e limites',
      title: 'Requisitos oficiais da Steam conferidos em 7 de novembro de 2026',
      body: 'As especificações mínimas e recomendadas, plataformas e armazenamento vieram dos dados oficiais do aplicativo PEAK na Steam, consultados em 7 de novembro de 2026. A Steam é a fonte primária desses campos. Requisitos e disponibilidade podem mudar; a página pública atual é a referência mais recente. As imagens do jogo servem apenas de contexto e não comprovam desempenho.',
      links: [
        ['Página oficial de PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Dados da Steam conferidos para este guia', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['Atualizações oficiais de PEAK', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'O que é PEAK'],
      ['peak-controller-support', 'Conferir suporte a controles'],
      ['peak-game-update', 'Ver atualizações oficiais de PEAK'],
      ['peak-game-price', 'Comparar o preço de PEAK por região'],
    ],
    relatedLabel: 'Guias relacionados de PEAK',
  },
  it: {
    meta: {
      title: 'Requisiti di sistema di PEAK: minimi e consigliati per PC',
      description: 'Consulta i requisiti ufficiali di PEAK per Windows: CPU, scheda grafica, RAM, DirectX e spazio minimi e consigliati, con i passaggi per controllare il PC.',
      schema: 'Guida basata sulla fonte ufficiale ai requisiti Windows minimi e consigliati di PEAK e al confronto di CPU, GPU, memoria, DirectX e spazio di archiviazione.',
    },
    primaryKeyword: 'requisiti di sistema di PEAK',
    eyebrow: 'Specifiche ufficiali Windows · verificate il 7 novembre 2026',
    h1: 'Requisiti di sistema di PEAK: minimi e consigliati per PC',
    intro: 'I requisiti di sistema di PEAK si riferiscono a PC Windows a 64 bit. Steam indica come minimo un Intel Core i5 a 2,5 GHz o equivalente, 8 GB di RAM e una GTX 1060 o RX 6600 XT. La configurazione consigliata comprende un i5 a 3,0 GHz o Ryzen 5, 16 GB di RAM e una RTX 2060 o RX 7600 XT. Entrambe richiedono DirectX 12 e 16 GB di spazio disponibile. I dati sono stati verificati sullo store ufficiale il 7 novembre 2026 e non sono un benchmark FPS.',
    answerLabel: 'Risposta rapida',
    answer: 'Per il minimo, confronta il tuo PC con Windows 10 a 64 bit, i5 a 2,5 GHz o equivalente, 8 GB di RAM e GTX 1060 o RX 6600 XT. Steam consiglia Windows 11, i5 a 3,0 GHz o Ryzen 5, 16 GB di RAM e RTX 2060 o RX 7600 XT. Entrambe le righe indicano DirectX 12 e 16 GB liberi.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ sui requisiti',
    heroImage: {
      alt: 'Illustrazione ufficiale di PEAK Final Ascent con gli esploratori diretti verso la vetta',
      caption: 'Illustrazione ufficiale di PEAK come contesto del gioco; non mostra un benchmark hardware né le impostazioni grafiche.',
    },
    sections: [
      {
        id: 'official-specifications',
        title: 'Requisiti di sistema di PEAK in breve',
        paragraphs: [
          'La tabella trascrive i requisiti PC minimi e consigliati pubblicati sulla pagina ufficiale di PEAK su Steam. “Minimo” e “consigliato” sono le categorie dello store. La pagina non associa a queste righe FPS, risoluzione o preset grafici e non garantisce lo stesso risultato su PC simili.',
          'Confronta ogni voce separatamente. Una CPU più veloce non compensa una scheda grafica sotto il livello indicato e più RAM non sostituisce i requisiti di sistema operativo o DirectX. Se il modello è diverso, annota il nome completo e consulta una fonte hardware affidabile invece di dedurre l’equivalenza dalla marca.',
        ],
        table: {
          caption: 'Requisiti ufficiali Windows di PEAK, verificati il 7 novembre 2026',
          headers: ['Livello', 'Sistema operativo', 'Processore', 'Memoria', 'Grafica', 'DirectX', 'Spazio disponibile'],
          rows: [
            ['Minimo', 'Windows 10 a 64 bit', 'Intel Core i5 a 2,5 GHz o equivalente', '8 GB RAM', 'GTX 1060 o RX 6600 XT', 'Versione 12', '16 GB'],
            ['Consigliato', 'Windows 11 a 64 bit', 'Intel Core i5 a 3,0 GHz o AMD Ryzen 5 o equivalente', '16 GB RAM', 'RTX 2060 o RX 7600 XT', 'Versione 12', '16 GB'],
          ],
        },
        afterTable: 'La fonte è la pagina ufficiale di PEAK su Steam. Ricontrollala prima dell’installazione: i requisiti possono cambiare.',
      },
      {
        id: 'minimum-requirements',
        title: 'Cosa indicano i requisiti minimi di PEAK',
        paragraphs: [
          'La riga minima è il riferimento pubblicato con cui confrontare un PC prima di acquistare o avviare il gioco. Indica Windows 10 a 64 bit, 8 GB di memoria, DirectX 12 e due esempi di schede grafiche. Il processore è un Intel Core i5 a 2,5 GHz o equivalente; Steam non offre un elenco modello per modello, quindi conta anche la generazione esatta.',
          'Soddisfare il minimo non garantisce una frequenza dei fotogrammi specifica. Steam non collega la riga a risoluzione o qualità grafica. Raffreddamento, driver, profilo energetico, app in background e altri componenti possono incidere sulla sessione. Se il PC è vicino alla soglia, verifica i modelli completi e lascia spazio per Windows e gli altri programmi.',
        ],
        bullets: [
          ['Controlla tutta la riga', 'Confronta separatamente Windows, CPU, RAM, grafica, DirectX e spazio libero.'],
          ['Annota il modello esatto', '“Core i5” o “GTX” da soli non identificano la configurazione.'],
          ['Usalo come riferimento', 'Il minimo non definisce un obiettivo FPS né garantisce lo stesso risultato per tutti.'],
        ],
      },
      {
        id: 'recommended-requirements',
        title: 'Requisiti consigliati di PEAK rispetto ai minimi',
        paragraphs: [
          'La riga consigliata aumenta la memoria da 8 a 16 GB e indica CPU e grafica di livello superiore: Intel Core i5 a 3,0 GHz o AMD Ryzen 5, più RTX 2060 o RX 7600 XT. Il sistema operativo passa da Windows 10 a Windows 11. DirectX 12 e 16 GB disponibili compaiono in entrambe le righe.',
          'Usa la raccomandazione come riferimento più alto per confrontare due PC o valutare un aggiornamento. Steam però non indica FPS, risoluzione o preset previsti per questo livello. Non pubblica neanche equivalenze verificate per ogni GPU da portatile, generazione di CPU o driver.',
        ],
        image: {
          alt: 'Un esploratore di PEAK si avvicina a Citadel in un ambiente di gioco avvolto dalla nebbia',
          caption: 'Schermata di gioco ufficiale Steam per mostrare PEAK; non confronta le prestazioni dei due livelli hardware.',
        },
      },
      {
        id: 'check-your-pc',
        title: 'Come controllare se il tuo PC soddisfa i requisiti di PEAK',
        paragraphs: [
          'Controlla il computer che eseguirà davvero il gioco, soprattutto se usi un portatile con grafica integrata e dedicata. Le impostazioni di Windows mostrano processore e memoria installata; Gestione attività o il pannello della scheda aiutano a identificare la GPU attiva. Annota i modelli completi prima del confronto con Steam.',
          'Questa è una lista di controllo manuale, non uno scanner automatico di compatibilità. Non legge il PC, non esegue benchmark e non decide se un componente non elencato sia equivalente. Se un nome non è chiaro, cerca il modello preciso sul sito del produttore invece di basarti sulla VRAM o sulla famiglia commerciale.',
        ],
        bullets: [
          ['1. Trova processore e memoria', 'Apri Impostazioni > Sistema > Informazioni. Annota il modello CPU, la RAM installata e il tipo di sistema Windows.'],
          ['2. Identifica la GPU attiva', 'Apri Prestazioni in Gestione attività o il pannello GPU. Se ne compaiono due, annotale entrambe e verifica quale usano i giochi.'],
          ['3. Controlla DirectX e spazio', 'Avvia dxdiag per consultare DirectX e verifica almeno 16 GB liberi nell’unità di installazione.'],
          ['4. Confronta ogni voce', 'Confronta tutti i componenti con la riga minima o consigliata. Se l’equivalenza non è certa, lasciala non verificata.'],
        ],
      },
      {
        id: 'laptop-compatibility',
        title: 'Il mio PC o portatile può eseguire PEAK?',
        paragraphs: [
          'Inizia dal modello della GPU, poi controlla CPU, RAM, Windows, DirectX e spazio libero. Il nome di un portatile può nascondere differenze sostanziali: dispositivi simili possono usare GPU e limiti di potenza diversi. Consulta la scheda della configurazione esatta, non solo il nome della famiglia.',
          'I requisiti ufficiali non hanno una tabella specifica per portatili e non indicano che la grafica integrata sia sufficiente. Non testano neanche un particolare Surface o tutte le GPU a basso consumo. Se il portatile è sotto gli esempi, il risultato resta sconosciuto: non si può affermare né che fallirà né che sarà fluido.',
        ],
        image: {
          alt: 'Esploratori di PEAK attraversano un passaggio pericoloso in un livello',
          caption: 'Schermata di gioco ufficiale Steam; non rappresenta un portatile, impostazioni o un risultato FPS.',
        },
      },
      {
        id: 'storage-and-directx',
        title: 'Spazio richiesto da PEAK e requisito DirectX',
        paragraphs: [
          'Steam indica 16 GB disponibili e DirectX 12 per entrambe le categorie. Lo spazio è il requisito libero sul disco, non la dimensione esatta del file scaricato. Non descrive neppure i file temporanei degli aggiornamenti o degli altri programmi installati. Lascia un margine se l’unità ospita anche Windows.',
          '“Dimensione download PEAK” può indicare i dati da scaricare o lo spazio dopo l’installazione. Il dato ufficiale verificato qui risponde al secondo caso: 16 GB liberi. La tabella non fornisce una dimensione fissa del download, quindi l’articolo non la presenta come peso del file.',
        ],
      },
      {
        id: 'supported-platforms',
        title: 'PEAK funziona su Windows, Mac o Linux?',
        paragraphs: [
          'I dati ufficiali Steam controllati il 7 novembre 2026 indicavano Windows ma non macOS o Linux. I requisiti Windows sopra erano quindi il target PC verificato a quella data. La disponibilità può cambiare: consulta la pagina del prodotto aggiornata prima di scegliere dove installare il gioco.',
          'La compatibilità Steam Deck è diversa dai requisiti PC Windows. La tabella non dimostra che il Deck sia verificato, giocabile o non supportato. Controlla la classificazione attuale Steam Deck e le comunicazioni ufficiali recenti, senza dedurla dai campi controller o sistema operativo.',
        ],
      },
      {
        id: 'what-requirements-do-not-tell-you',
        title: 'Cosa non dicono le specifiche ufficiali',
        paragraphs: [
          'I requisiti dello store aiutano a fare una prima selezione, ma non sono un rapporto benchmark. Non indicano FPS previsti, risoluzione, preset grafici, VRAM minima, driver supportati o l’elenco dettagliato di CPU e GPU equivalenti. La fonte ufficiale controllata non pubblica FPS, quindi la guida non aggiunge stime.',
          'Se PEAK scatta pur rispettando il minimo, annota i modelli esatti, i driver, il profilo energetico e l’impostazione modificata; prova una sola variazione alla volta. Controlla anche gli [[link:peak-game-update|aggiornamenti ufficiali di PEAK]] per eventuali correzioni. Un sintomo comparso dopo una patch non dimostra che l’hardware non sia più supportato.',
          'Prima di acquistare componenti, ricontrolla i requisiti Steam attuali e cerca benchmark indipendenti dei modelli e delle impostazioni precise. Questa wiki riporta il riferimento del produttore; non certifica configurazioni non elencate e non sostituisce un test o le condizioni di reso.',
        ],
        bullets: [
          ['Fatto ufficiale', 'Componenti, DirectX, piattaforme e spazio indicati da Steam.'],
          ['Non verificato qui', 'FPS obiettivo, equivalenze esatte, benchmark di portatili o valutazione Steam Deck.'],
          ['Prossimo passo', 'Confronta i modelli precisi e ricontrolla la pagina ufficiale prima dell’acquisto o dell’installazione.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ sui requisiti di PEAK',
      items: [
        ['Quali sono i requisiti minimi di PEAK?', 'Steam indica Windows 10 a 64 bit, Intel Core i5 a 2,5 GHz o equivalente, 8 GB di RAM, GTX 1060 o RX 6600 XT, DirectX 12 e 16 GB di spazio disponibile.'],
        ['Quali requisiti PC sono consigliati?', 'La riga consigliata include Windows 11 a 64 bit, Intel Core i5 a 3,0 GHz o AMD Ryzen 5 o equivalente, 16 GB di RAM, RTX 2060 o RX 7600 XT, DirectX 12 e 16 GB liberi.'],
        ['Il mio PC o portatile può eseguire PEAK?', 'Confronta i modelli esatti di CPU e GPU, RAM, Windows, DirectX e spazio con la tabella ufficiale. Steam non pubblica un elenco separato per portatili né una garanzia FPS generale.'],
        ['Quanto spazio richiede PEAK?', 'I requisiti ufficiali indicano 16 GB disponibili. Non corrispondono a una dimensione del download verificata.'],
        ['PEAK si può giocare su Mac o Linux?', 'I dati Steam controllati il 7 novembre 2026 indicavano Windows ma non macOS o Linux. Verifica la pagina aggiornata perché il supporto può cambiare.'],
        ['PEAK è verificato per Steam Deck?', 'Questa verifica non ha stabilito una classificazione Deck. Consulta l’indicazione di compatibilità attuale sulla pagina ufficiale.'],
        ['Il minimo garantisce prestazioni fluide?', 'No. Lo store non indica FPS, risoluzione o qualità grafica per il minimo; il risultato dipende dall’intero PC e dal software.'],
      ],
    },
    source: {
      eyebrow: 'Fonti e limiti',
      title: 'Requisiti ufficiali Steam verificati il 7 novembre 2026',
      body: 'Specifiche minime e consigliate, piattaforme e spazio provengono dai dati ufficiali Steam di PEAK consultati il 7 novembre 2026. Steam è la fonte primaria per questi campi. Requisiti e disponibilità possono cambiare; la pagina pubblica aggiornata è il riferimento corrente. Le immagini di gioco servono solo da contesto e non provano le prestazioni.',
      links: [
        ['Pagina ufficiale di PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Dati Steam consultati per questa guida', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en'],
        ['Aggiornamenti ufficiali di PEAK', 'https://store.steampowered.com/news/app/3527290'],
      ],
    },
    related: [
      ['what-is-peak-game', 'Scopri che cos’è PEAK'],
      ['peak-controller-support', 'Controllare il supporto controller'],
      ['peak-game-update', 'Leggere gli aggiornamenti ufficiali'],
      ['peak-game-price', 'Confrontare il prezzo di PEAK per regione'],
    ],
    relatedLabel: 'Guide PEAK correlate',
  },
};
