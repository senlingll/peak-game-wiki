const link = (slug, label) => `[[link:${slug}|${label}]]`;
const media = (alt, caption) => ({ src: '/media/peak-coop-climb.webp', alt, caption, width: 1200, height: 675 });
const routeMedia = (alt, caption) => ({ src: '/media/peak-map-route.webp', alt, caption, width: 1200, height: 675 });

export const photonTroubleshootingTranslations = {
  zh: {
    meta: {
      title: 'PEAK Photon 断连怎么办？ClientTimeout 排查指南',
      description: '遇到 PEAK 与 Photon 断开连接或 ClientTimeout？按 Landfall 官方清单逐项排查，并区分官方建议与玩家经验。',
      schema: 'PEAK Photon 连接故障指南，说明断连提示、ClientTimeout、官方检查顺序、玩家反馈和有效的支持信息。',
    },
    primaryKeyword: 'PEAK 与 Photon 断开连接',
    eyebrow: '连接故障排查 - 一次核对一个原因',
    h1: 'PEAK 与 Photon 断开连接怎么办？ClientTimeout 排查指南',
    intro: `如果 PEAK 显示“与 Photon 断开连接”，它说明合作连接中断了，但无法单独指出原因。关于大厅入口和房间码，请看${link('room-codes', 'PEAK 联机与房间码指南')}。本页只处理错误本身：先核对 Steam 例行维护，再按官方清单检查，并把 VPN、路由器或玩家经验当作条件性线索，而不是保证有效的修复。`,
    answerLabel: '简短答案',
    answer: '先记下完整错误和出现时间。Landfall 当前的 PEAK FAQ 提到 Steam 每周二例行维护，并建议检查防火墙和杀毒软件例外、游戏文件、网络稳定性、后台程序、Mod、路由器、cFosSpeed、Steam 好友与个人资料隐私，以及 VPN。每次只改一项，并让同一队伍重复测试。单凭 Photon 报错不能证明 PEAK 全服故障、运营商屏蔽连接，或某个设置一定能修好。',
    tocLabel: '本页内容',
    tocFaq: 'Photon 故障 FAQ',
    heroImage: media('PEAK 侦察员在岛屿路线中协作攀登的 Steam 官方截图', 'Steam 官方截图展示 PEAK 合作玩法背景，不是 Photon 错误画面，也不代表服务器状态。'),
    sections: [
      {
        title: 'PEAK 中“与 Photon 断开连接”是什么意思？',
        paragraphs: [
          'Landfall 表示 PEAK 使用 Photon 进行服务器中继。游戏显示“与 Photon 断开连接”时，可以确认本次合作会话失去了 Photon 中继连接；但这段文字本身不能诊断原因。它没有说明中断来自 Steam 例行维护、本地网络变化、队友的隐私设置、防火墙、Mod，还是服务端情况。',
          '不同错误文字也可能出现在连接流程的不同阶段。“无法连接到 Photon Network”或“无法连接到 Room”可能出现在建立会话时；“与 Photon 断开连接”描述已经中断的连接；“ClientTimeout”是游戏显示的超时标签。Landfall 的公开 FAQ 没有把每个标签对应到唯一原因，因此应原样记录错误，而不是据此猜测根因。',
          '先比较同一大厅里是所有人同时遇到问题，还是只有一名玩家掉线。如果全队在同一时刻失败，记下共同发生的时间并查看官方维护提示；如果只有一人掉线，先检查该玩家的游戏文件、Mod、网络、防火墙和 Steam 好友关系。这些差异可以缩小下一步检查范围，但仍不是原因证明。',
        ],
        table: {
          caption: '把错误文字当作线索，不要直接当作原因证明',
          headers: ['显示文字或现象', '能确认什么', '不能确认什么', '下一步'],
          rows: [
            ['与 Photon 断开连接', '当前合作会话失去了 Photon 中继连接。', '不能确认全服故障、运营商屏蔽或某个本地设置。', '记录时间，并确认同一大厅是否所有人都受影响。'],
            ['无法连接到 Photon Network 或 Room', '这次网络或房间连接没有完成。', '不能区分 Steam 维护、本地网络、大厅或其他条件。', '检查官方维护提示、连接稳定性和 Steam 好友关系。'],
            ['ClientTimeout', '游戏显示了客户端超时标签。', '公开 FAQ 没有把该标签对应到一个确定原因。', '记录完整文字、发生阶段和时间。'],
            ['只有一名玩家掉线', '本次症状集中在大厅中的一位玩家。', '不能证明该玩家的设备或运营商有问题。', '对照该玩家的 Mod、文件、防火墙、网络和 Steam 资料。'],
            ['多名玩家同时失败', '队伍观察到了共同的失败时段。', '单凭此现象不能证明 PEAK 全服中断。', '比较时间，并在例行维护结束后重新测试。'],
          ],
        },
      },
      {
        title: '先检查这些项目，再改路由器设置',
        paragraphs: [
          '先看 Landfall 当前 FAQ。它提到 Steam 服务器每周二会例行维护。如果报错时间与此重合，可以等维护过去后再试；不要把一次大厅连接失败说成 PEAK 服务器宕机。FAQ 没有承诺每次维护的固定时长。',
          '不在维护时段时，先检查简单条件：确认网络稳定，关闭可能干扰游戏的软件，问题持续时重启电脑。让同一队伍重复测试，并记下是全员报错，还是每次都同一名玩家掉线。这个对比能帮助选择下一项设备或账号设置检查，而不会凭空指定原因。',
          '之后每次只改一个设置，再用相同的加入方式测试，并记下结果。不要同时关闭安全软件、修改路由器、删除 Mod、切换 VPN；否则即使恢复连接，也无法知道哪项变化有关系。临时设置若没有帮助，就恢复原状。',
        ],
        image: routeMedia('PEAK 侦察员在复杂岛屿路线中攀登的 Steam 官方截图', 'Steam 官方路线截图只展示游戏场景；报告错误时仍应提供自己设备显示的准确 Photon 提示。'),
        table: {
          caption: '将 Landfall 已发布的 Photon 检查按低风险到条件性调整排列',
          headers: ['顺序', '检查项', '测试方法', '证据边界'],
          rows: [
            ['1', 'Steam 维护', '检查是否撞上周二例行维护；维护结束后再尝试。', 'Landfall 提到例行维护，但没有提供 PEAK 实时全服状态。'],
            ['2', '网络稳定性', '确认其他联网活动正常；仅在网络不稳定时考虑重启路由器。', '重启后恢复只是一次观察，不等于确认唯一原因。'],
            ['3', 'Steam 好友和资料隐私', '确认大厅成员在 Steam 上互为好友；检查仅好友可见设置是否影响玩家。', 'Landfall 说这可能造成断连，不代表所有错误都由此导致。'],
            ['4', '其他运行程序', '退出可能干扰游戏的软件后，用相同大厅再次测试。', '无障碍或安全软件若有需要，测试后重新打开。'],
            ['5', '游戏文件和 Mod', '在 Steam 校验 PEAK 文件；如使用 Mod，彻底移除并检查残留的 BepInEx 文件。', '保留个人配置备份，不要误删无关文件。'],
            ['6', '防火墙或杀毒软件', '能确认正确游戏条目时，再使用软件提供的 PEAK 允许或例外选项。', '不要把关闭所有防护作为通用解法。'],
            ['7', 'cFosSpeed、路由器 MLO 或 VPN', '仅测试自己确实使用、并能恢复原状的设置；一次只改一项。', 'Landfall 将其描述为玩家报告或条件性检查，不是保证有效的修复。'],
            ['8', 'Landfall 故障指南', '仍然复现时，继续按官方故障页面操作并使用当前支持渠道。', '不要让旧视频或第三方“修复”覆盖开发者当前建议。'],
          ],
        },
      },
      {
        title: 'ClientTimeout 和 ServerTimeout 不能证明什么？',
        paragraphs: [
          '超时标签说明游戏没有在预期时间内完成一次连接步骤。Landfall 的公开 FAQ 列出了可检查项目，却没有发布 PEAK 专用的 ClientTimeout 或 ServerTimeout 根因映射。仅凭标签无法证明玩家路由器损坏、Photon 服务离线，或某个 Windows 设置有误。',
          '请保留完整错误文字，并记录它出现前正在做什么：创建大厅、接受邀请、输入房间码，还是已经和队友攀登。再记录是谁看到错误、其他人是否仍留在大厅，以及重试后是否变化。这样的事实比“服务器坏了”更利于支持人员判断，也不会把猜测写成结论。',
          `如果你正在尝试加入朋友，而不是排查加入后的掉线，请看${link('room-codes', 'PEAK 房间码与联机加入指南')}，了解 Steam 邀请、JOIN GAME、房间码和大厅隐私。那一页处理加入流程；本页处理 Photon 连接症状。`,
        ],
        bullets: [
          ['报错前在做什么', '创建大厅、接受邀请、输入房间码，或已经开始攀登。'],
          ['谁受到影响', '房主、一名加入者，还是同一尝试中的全队。'],
          ['保留准确文字', '照录界面上的错误，不要把 ClientTimeout 改写成已确认的服务器故障。'],
          ['一次调整一个项目', '记录测试的设置；没有帮助时恢复原状。'],
        ],
      },
      {
        title: '玩家反馈的检查：VPN、MLO 与 cFosSpeed',
        paragraphs: [
          'Landfall FAQ 收录了部分玩家反馈：有玩家表示卸载 cFosSpeed 或关闭路由器的 Multi-Link Operation（MLO）后有所改善；官方也建议尝试在开启或关闭 VPN 的状态下运行 PEAK。这些是有条件的排查线索，不是所有玩家都适用的确定修复。',
          '如果电脑安装了 cFosSpeed，先确认它是什么软件，并查看软件或主板厂商的说明，再考虑改动。如果要测试 MLO，记下路由器原设置；测试没有帮助就恢复。如果你本来就在使用 VPN，可以分别做一次开和关的对照；不要为了照搬视频建议而安装不明 VPN，或一直保留未知的网络路线变化。',
          'Landfall 还提到部分网络服务提供商可能阻止连接 Photon 所需的地址，建议向运营商咨询，并指出 VPN 曾帮助部分玩家。这只是报告中的一种可能，不代表你的运营商已经屏蔽。变更网络安全设置或购买服务前，先向运营商或官方支持确认。',
        ],
        table: {
          caption: '把玩家报告与普遍有效的结论分开',
          headers: ['检查项', '来源状态', '实际边界'],
          rows: [
            ['cFosSpeed', 'Landfall 说有玩家报告卸载后有所改善。', '先确认是否安装，不要猜测性地删除驱动或其他软件。'],
            ['路由器 MLO', 'Landfall 说有玩家报告关闭后有效。', '只建议熟悉路由器设置的人做临时对照，并记录原值。'],
            ['VPN 开或关', 'Landfall 建议比较两种状态，也提到部分玩家报告有效。', '只测试自己信任的现有服务；结果不能证明地区封锁。'],
            ['运营商限制', 'Landfall 提到部分运营商可能拦截地址，并建议联系 ISP。', '先向运营商询问，没有确认前不要说已被屏蔽。'],
          ],
        },
      },
      {
        title: '提交 PEAK 支持请求时应提供什么？',
        paragraphs: [
          '如果官方步骤没有改变结果，可以通过 Landfall 当前支持渠道或相关 Steam 讨论发出简短报告。写下客户端显示的游戏版本、日期与大致时间及时区、完整错误文字，以及它出现的阶段。说明是房主、一名加入者还是整队受到影响，并标明使用 Steam 邀请还是房间码加入。',
          '只列出自己真正尝试过的项目，并说明每一项是否改变症状。只有确实适用时才提 Mod、VPN、相关防火墙规则、cFosSpeed 或 MLO。错误截图可以帮助说明情况，但公开前要裁掉账号名、私人聊天、邀请或房间码及其他个人信息。不要附上口令、密码或完整网络标识。',
          '有效报告会分开事实和判断，例如“20:15 UTC 通过 JOIN GAME 后显示 ClientTimeout，另外两人仍留在大厅”比“Photon 坏了”更可操作。官方排查项仍以 Landfall 为准；Steam Community 帖子只能显示玩家报告过类似症状，不能替你的这一局确认原因。',
        ],
        bullets: [
          ['准确症状', '错误全文、出现阶段、日期、时间与时区。'],
          ['大厅情况', '房主或加入者、受影响人数、Steam 邀请或房间码。'],
          ['相关改动', '只列出实际做过的检查和结果。'],
          ['隐私保护', '隐藏房间码、账号详情、私人聊天、密码和令牌。'],
        ],
      },
    ],
    faq: {
      eyebrow: '快速解答',
      title: 'PEAK Photon 故障排查 FAQ',
      items: [
        ['PEAK 显示“与 Photon 断开连接”怎么修复？', '先按 Landfall 当前 FAQ 检查周二 Steam 维护、网络稳定性、Steam 好友与隐私、其他程序、游戏文件、Mod 和安全软件例外，再考虑有条件的路由器或 VPN 对照。一次只改一项，没有哪一步保证必定有效。'],
        ['ClientTimeout 是否表示 PEAK 服务器宕机？', '不能仅凭该标签得出全服故障结论。Landfall 公开 FAQ 没有把 ClientTimeout 对应到唯一原因。记录发生阶段，查看官方维护信息，并比较大厅其他玩家是否也受影响。'],
        ['PEAK 或 Steam 每周二都会停服吗？', 'Landfall 表示 Steam 服务器每周二会例行维护。FAQ 没有给每次维护规定统一时长，也没有说每个 Photon 错误都由维护引起。维护结束后再试并记录结果。'],
        ['PEAK Mod 会导致 Photon 断连吗？', 'Landfall 建议排查断连时彻底移除已安装 Mod，包括 BepInEx 等残留文件。先比较无 Mod 安装的结果，再判断具体错误是否和某个 Mod 有关。'],
        ['PEAK 的 VPN 应该开还是关？', 'Landfall 建议比较开启和关闭 VPN 的情况，也提到部分玩家报告有效。这只是条件测试，不是诊断结论。不要安装不可信 VPN，也不要在不了解影响时修改安全设置。'],
        ['我应该关闭 MLO 或卸载 cFosSpeed 吗？', 'Landfall 收录了部分玩家认为有效的报告，但这些不是通用修复。只有配置确实适用时才测试，记录原设置；没有改善就恢复。'],
        ['PEAK 房间码报错和 Photon 报错是同一个问题吗？', '不一定。房间码或邀请属于加入大厅的流程；Photon 信息描述连接症状。房间码输入位置见联机指南，连接失败时另行记录完整 Photon 文案。'],
      ],
    },
    source: {
      eyebrow: '官方指南与玩家报告',
      title: '本指南能确认哪些 PEAK 连接信息？',
      body: 'Landfall PEAK FAQ 是 Photon 中继背景、Steam 每周二例行维护和官方排查项的一手来源。FAQ 把 cFosSpeed、路由器 MLO、VPN 和运营商限制描述为报告或条件性可能性；本页保留了这种区别。Steam Community 讨论只作为玩家报告链接，不代表官方确认或普遍有效的修复。',
      links: [
        ['Landfall PEAK FAQ 与连接检查', 'https://landfall.se/peak-faq'],
        ['Landfall 故障排查', 'https://landfall.se/troubleshooting'],
        ['PEAK 官方 Steam 页面', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community Photon 玩家报告', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', '查看 PEAK 房间码与联机加入方法'],
      ['peak-game-tips', '阅读 PEAK 合作攀登技巧'],
      ['peak-game-update', '查看 PEAK 更新记录'],
    ],
    relatedLabel: '相关 PEAK 排查与联机指南',
  },
  es: {
    meta: {
      title: 'Error de PEAK: desconectado de Photon - guía ClientTimeout',
      description: '¿Error de PEAK: desconectado de Photon o ClientTimeout? Sigue los controles de Landfall y distingue los pasos oficiales de los informes de jugadores.',
      schema: 'Guía de solución de errores Photon de PEAK con comprobaciones oficiales, ClientTimeout, reportes de jugadores y datos útiles para soporte.',
    },
    primaryKeyword: 'error de PEAK: desconectado de Photon',
    eyebrow: 'Solución de conexión - comprueba una causa cada vez',
    h1: 'Error de PEAK: desconectado de Photon - guía ClientTimeout',
    intro: `Si PEAK muestra “Disconnected from Photon”, confirma que se interrumpió la conexión cooperativa, pero no identifica por sí sola la causa. Para entrar en una sala, consulta la ${link('room-codes', 'guía de códigos y partidas cooperativas de PEAK')}. Esta página se centra en el error: revisa el mantenimiento de Steam, sigue la lista oficial y trata las pruebas con VPN o router como posibilidades condicionadas, no como soluciones garantizadas.`,
    answerLabel: 'Respuesta breve',
    answer: 'Anota primero el error exacto y cuándo aparece. La FAQ actual de PEAK de Landfall indica que Steam realiza mantenimiento rutinario cada martes y propone revisar excepciones del antivirus y cortafuegos, archivos del juego, estabilidad de la conexión, otros programas, mods, router, cFosSpeed, amistad y privacidad en Steam y VPN. Cambia una sola variable y repite la prueba con el mismo grupo. Un error Photon no demuestra que PEAK esté caído para todos, que tu proveedor bloquee la conexión ni que un ajuste concreto vaya a solucionarlo.',
    tocLabel: 'En esta página',
    tocFaq: 'Preguntas sobre Photon',
    heroImage: media('Exploradores de PEAK coordinando una subida cooperativa, captura oficial de Steam', 'Captura oficial de Steam: muestra el contexto cooperativo, no un error Photon ni el estado de la red.'),
    sections: [
      {
        title: 'Qué significa “Disconnected from Photon” en PEAK',
        paragraphs: [
          'Landfall explica que PEAK utiliza Photon como retransmisión de servidor. Si el juego muestra “Disconnected from Photon”, confirma que la sesión cooperativa perdió esa conexión de retransmisión. El mensaje es una pista útil, pero no es un diagnóstico: no indica si la interrupción se debió al mantenimiento de Steam, a la red local, a la privacidad de un miembro, al cortafuegos, a un mod o a un problema del servicio.',
          'Las etiquetas también pueden aparecer en distintas fases. “Failed to connect to Photon Network” o “Failed to connect to Room” puede salir al crear la conexión; “Disconnected from Photon” describe una interrupción; “ClientTimeout” es la etiqueta de tiempo de espera que muestra el juego. La FAQ pública de PEAK no vincula cada texto a una causa única. Conserva las palabras exactas en lugar de adivinar el origen.',
          'Comprueba primero si el fallo afecta a todo el grupo o solo a una persona. Si todos fallan a la vez, anota la hora y consulta el aviso oficial de mantenimiento. Si solo se desconecta una persona, empieza por sus archivos, mods, conexión, cortafuegos y relación de amistad en Steam. El patrón ayuda a elegir la siguiente prueba, pero no demuestra la causa raíz.',
        ],
        table: {
          caption: 'Usa el mensaje visible como pista, no como prueba de una causa',
          headers: ['Mensaje o patrón', 'Qué confirma', 'Qué no confirma', 'Siguiente comprobación'],
          rows: [
            ['Disconnected from Photon', 'La sesión cooperativa perdió su conexión de retransmisión Photon.', 'No confirma una caída global, un bloqueo del proveedor ni un ajuste local concreto.', 'Anota la hora y si afectó a todo el grupo.'],
            ['Failed to connect to Photon Network o Room', 'No se completó el intento de conexión a la red o sala.', 'No distingue entre mantenimiento, red local o condiciones de la sala.', 'Revisa mantenimiento, conexión y amistad en Steam.'],
            ['ClientTimeout', 'El juego mostró una etiqueta de tiempo de espera del cliente.', 'La FAQ pública no asigna esa etiqueta a una causa única.', 'Registra el texto, la fase y la hora.'],
            ['Se desconecta una sola persona', 'El síntoma se limita a un miembro del grupo.', 'No demuestra que su equipo o proveedor tenga la culpa.', 'Compara sus mods, archivos, cortafuegos, red y perfil de Steam.'],
            ['Fallan varios jugadores a la vez', 'El grupo observó el mismo intervalo de error.', 'No demuestra por sí solo una caída global de PEAK.', 'Compara horas y vuelve a probar tras el mantenimiento.'],
          ],
        },
      },
      {
        title: 'Qué revisar antes de cambiar el router',
        paragraphs: [
          'Empieza por la FAQ vigente de Landfall. Indica que los servidores de Steam tienen mantenimiento rutinario cada martes. Si el error coincide, espera a que termine y prueba de nuevo; un solo intento fallido no demuestra que los servidores de PEAK estén caídos. La FAQ no promete una duración fija para cada mantenimiento.',
          'Fuera de esa ventana, revisa primero las condiciones sencillas: que la conexión sea estable, cierra programas que puedan interferir y reinicia el ordenador si el problema continúa. Repite la prueba con el mismo grupo y apunta si fallan todos o siempre se desconecta la misma persona. Esa comparación orienta la siguiente comprobación sin inventar una causa.',
          'Después cambia una sola opción cada vez, repite el mismo método de entrada y anota el resultado. No desactives a la vez el antivirus, cambies el router, borres mods y alteres la VPN: si la conexión vuelve, no sabrás qué cambio influyó. Restaura los ajustes temporales que no hayan servido.',
        ],
        image: routeMedia('Exploradores de PEAK en una ruta de isla exigente, captura oficial de Steam', 'Captura oficial de Steam para mostrar el contexto de juego; al informar del error, añade tu propio mensaje Photon exacto.'),
        table: {
          caption: 'Comprobaciones Photon publicadas por Landfall, de menor riesgo a cambios condicionales',
          headers: ['Orden', 'Comprobación', 'Cómo probarla', 'Límite de la evidencia'],
          rows: [
            ['1', 'Mantenimiento de Steam', 'Comprueba si coincide con el mantenimiento del martes y vuelve a probar después.', 'Landfall documenta el mantenimiento, no un estado global en directo de PEAK.'],
            ['2', 'Estabilidad de la conexión', 'Confirma que otras actividades de red funcionen; reinicia el router solo si es inestable.', 'Una mejora tras reiniciar es una observación, no una causa confirmada.'],
            ['3', 'Amigos y privacidad de Steam', 'Comprueba que todos sean amigos en Steam y revisa los perfiles Solo amigos.', 'Landfall dice que esto puede influir, no que explique todos los errores.'],
            ['4', 'Otros programas abiertos', 'Cierra programas que puedan interferir y repite la misma prueba.', 'Vuelve a abrir las herramientas necesarias para accesibilidad o seguridad.'],
            ['5', 'Archivos y mods', 'Verifica los archivos de PEAK en Steam; retira por completo mods y restos como BepInEx.', 'Conserva una copia de tu configuración y no borres archivos ajenos.'],
            ['6', 'Cortafuegos o antivirus', 'Usa la excepción específica de PEAK si puedes identificar la entrada correcta.', 'No desactives toda la protección como solución general.'],
            ['7', 'cFosSpeed, MLO o VPN', 'Prueba solo opciones presentes y restaurables, una por vez.', 'Landfall las presenta como informes o pruebas condicionales.'],
            ['8', 'Solución oficial de Landfall', 'Si persiste, sigue la página oficial de asistencia y sus canales actuales.', 'No pongas un vídeo antiguo por encima de la indicación vigente.'],
          ],
        },
      },
      {
        title: 'Qué no demuestran ClientTimeout y ServerTimeout',
        paragraphs: [
          'Una etiqueta de tiempo de espera indica que el juego no completó una fase de conexión dentro del tiempo esperado. La FAQ pública de Landfall enumera comprobaciones, pero no publica una relación específica de PEAK que asigne ClientTimeout o ServerTimeout a una causa. El texto por sí solo no demuestra que el router esté averiado, Photon esté fuera de servicio o una opción de Windows sea incorrecta.',
          'Guarda el mensaje literal y apunta qué hacías: abrir una sala, aceptar una invitación, escribir un código o jugar con el grupo. Indica si le ocurrió al anfitrión o a quien entraba, si los demás siguieron en la sala y si un nuevo intento cambió el resultado. Esta información resulta más útil que afirmar que “los servidores están rotos”, porque conserva hechos sin convertir una hipótesis en certeza.',
          `Si lo que falla es entrar en una partida de un amigo, consulta la ${link('room-codes', 'guía de códigos de PEAK y acceso cooperativo')} para Steam, JOIN GAME, códigos y privacidad de sala. Esa guía cubre el proceso de entrada; esta trata los síntomas de conexión Photon.`,
        ],
        bullets: [
          ['Antes del error', 'Crear una sala, aceptar invitación, introducir código o escalar ya con el grupo.'],
          ['A quién afectó', 'Anfitrión, una persona que entraba o todo el grupo.'],
          ['Texto literal', 'Copia el mensaje; no conviertas ClientTimeout en una caída confirmada.'],
          ['Un cambio por prueba', 'Anota el ajuste y restáuralo si no cambia el resultado.'],
        ],
      },
      {
        title: 'Pruebas comunicadas por jugadores: VPN, MLO y cFosSpeed',
        paragraphs: [
          'La FAQ de Landfall recoge algunas experiencias. Dice que otros jugadores han mejorado al desinstalar cFosSpeed o desactivar Multi-Link Operation (MLO) en el router, y sugiere probar PEAK con y sin VPN. Son pistas condicionales, no afirmaciones de que una de ellas sea la causa universal.',
          'Si tienes cFosSpeed, identifica el programa y consulta las instrucciones del proveedor del software o la placa base antes de cambiarlo. Si pruebas MLO, anota la opción original y restáurala si no ayuda. Si ya usas VPN, compara una prueba con ella y otra sin ella; no instales una VPN desconocida ni mantengas un cambio de ruta porque lo diga un vídeo.',
          'Landfall también indica que algunos proveedores podrían bloquear direcciones necesarias para Photon y recomienda consultar al operador; menciona que una VPN ha ayudado a algunos jugadores. Es una posibilidad comunicada, no una conclusión sobre tu proveedor. Antes de comprar un servicio o cambiar la seguridad de red, pregunta al ISP o al soporte oficial.',
        ],
        table: {
          caption: 'Separa los informes de jugadores de las soluciones universales',
          headers: ['Comprobación', 'Estado de la fuente', 'Límite práctico'],
          rows: [
            ['cFosSpeed', 'Landfall dice que algunos jugadores mejoraron al desinstalarlo.', 'Confirma que está instalado; no elimines controladores o programas al azar.'],
            ['MLO del router', 'Landfall dice que otros jugadores mejoraron al desactivarlo.', 'Prueba temporal solo si sabes restaurar el ajuste.'],
            ['VPN activada o no', 'Landfall sugiere ambas pruebas y recoge experiencias positivas.', 'Usa un servicio que ya confíes; no demuestra un bloqueo regional.'],
            ['Restricción del ISP', 'Landfall dice que ciertos proveedores podrían bloquear direcciones.', 'Consulta al operador; no afirmes que existe un bloqueo sin confirmación.'],
          ],
        },
      },
      {
        title: 'Qué incluir en un informe útil para el soporte de PEAK',
        paragraphs: [
          'Si las comprobaciones oficiales no cambian el resultado, envía un informe breve mediante el canal de soporte vigente de Landfall o la discusión adecuada de Steam. Incluye la versión que muestra el cliente, fecha y hora aproximada con zona horaria, texto completo del error y la fase en la que apareció. Indica si afectó al anfitrión, a una persona que entraba o al grupo entero, y si usaste una invitación de Steam o un código.',
          'Enumera solo los pasos que realmente probaste y el resultado de cada uno. Menciona mods, VPN, reglas del cortafuegos, cFosSpeed o MLO solo si se aplican a tu configuración. Una captura puede ayudar, pero antes de publicarla recorta nombres de cuenta, mensajes privados, invitaciones, códigos y otros datos personales. Nunca adjuntes contraseñas ni tokens.',
          'Un informe útil separa el hecho de la interpretación: “ClientTimeout apareció al usar JOIN GAME a las 20:15 UTC; los otros dos jugadores siguieron en la sala” permite investigar más que “Photon está roto”. Landfall sigue siendo la fuente de las acciones oficiales; Steam Community muestra experiencias, pero no confirma la causa de tu sesión.',
        ],
        bullets: [
          ['Síntoma exacto', 'Mensaje, fase, fecha, hora y zona horaria.'],
          ['Contexto de sala', 'Anfitrión o jugador, alcance del fallo e invitación o código.'],
          ['Cambios probados', 'Solo las comprobaciones realizadas y su resultado.'],
          ['Privacidad', 'Oculta códigos, datos de cuenta, chats privados, contraseñas y tokens.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Respuestas rápidas',
      title: 'FAQ de errores Photon en PEAK',
      items: [
        ['¿Cómo arreglo “Disconnected from Photon” en PEAK?', 'Empieza por la FAQ de Landfall: mantenimiento de Steam, estabilidad, amistades y privacidad, programas abiertos, archivos, mods y exclusiones de seguridad; deja los cambios de router o VPN como pruebas condicionales. Cambia una cosa a la vez: no hay un arreglo garantizado.'],
        ['¿ClientTimeout significa que PEAK está caído?', 'La etiqueta no basta para concluir que hay una caída global. La FAQ pública no asigna ClientTimeout a una causa única. Anota la fase, consulta el mantenimiento oficial y comprueba si también afecta a otros miembros.'],
        ['¿Steam o PEAK se desconectan todos los martes?', 'Landfall indica que los servidores de Steam tienen mantenimiento rutinario cada martes. La FAQ no fija una duración única ni dice que todo error Photon provenga de él. Reintenta después y anota el resultado.'],
        ['¿Los mods pueden provocar una desconexión Photon?', 'Landfall recomienda retirar completamente los mods instalados, incluidos restos como BepInEx, al investigar desconexiones. Compara primero con una instalación sin mods y no atribuyas un error a un mod concreto sin probarlo.'],
        ['¿Debo activar o desactivar la VPN para PEAK?', 'Landfall sugiere comparar ambas opciones y recoge que algunos jugadores mejoraron. Es una prueba condicional, no un diagnóstico. No instales una VPN desconocida ni cambies ajustes de seguridad sin entender el efecto.'],
        ['¿Debo desactivar MLO o desinstalar cFosSpeed?', 'Landfall recoge informes de jugadores, no una solución universal. Prueba solo si esa opción forma parte de tu equipo, guarda el estado original y restáurala si no ayuda.'],
        ['¿Un error con el código de PEAK es lo mismo que Photon?', 'No necesariamente. El código o la invitación pertenecen al proceso de acceso a la sala; Photon describe un síntoma de conexión. La guía de códigos explica la entrada y esta página ayuda a registrar el mensaje.'],
      ],
    },
    source: {
      eyebrow: 'Indicaciones oficiales e informes de jugadores',
      title: 'Qué puede confirmar esta guía de conexión de PEAK',
      body: 'La FAQ de PEAK de Landfall es la fuente principal sobre Photon, el mantenimiento rutinario de Steam y las comprobaciones publicadas. Presenta cFosSpeed, MLO, VPN y restricciones del proveedor como informes o posibilidades condicionales; la guía conserva esa distinción. La discusión de Steam Community se enlaza como experiencia de un jugador, no como confirmación oficial ni arreglo universal.',
      links: [
        ['FAQ de PEAK de Landfall y conexión', 'https://landfall.se/peak-faq'],
        ['Asistencia técnica de Landfall', 'https://landfall.se/troubleshooting'],
        ['Página oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community: informe de error Photon', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'Consultar códigos de PEAK y cómo entrar en una partida'],
      ['peak-game-tips', 'Leer consejos cooperativos de PEAK'],
      ['peak-game-update', 'Revisar las actualizaciones de PEAK'],
    ],
    relatedLabel: 'Guías de PEAK sobre conexión y cooperativo',
  },
  ja: {
    meta: {
      title: 'PEAK Photon接続エラーとClientTimeoutの対処法',
      description: 'PEAKでPhoton切断やClientTimeoutが出たときの確認手順。Landfall公式の案内とプレイヤー報告を分けて紹介します。',
      schema: 'PEAKのPhoton接続エラー、ClientTimeout、公式確認項目、プレイヤー報告、サポートに伝える情報を扱うガイド。',
    },
    primaryKeyword: 'PEAK Photon 接続エラー',
    eyebrow: '接続トラブルの確認 - 原因を一つずつ切り分ける',
    h1: 'PEAK Photon接続エラーとClientTimeoutの対処法',
    intro: `PEAKで「Photonから切断されました」と表示されても、協力プレイの接続が途切れたこと以上の原因は分かりません。ロビーへの入り方は${link('room-codes', 'PEAKのルームコード・協力プレイガイド')}を確認してください。このページではエラー自体を扱い、Steamの定期メンテナンスと公式の確認項目を先に見たうえで、VPNやルーター設定などの報告を確実な解決策と混同しないようにします。`,
    answerLabel: '先に結論',
    answer: 'まずエラー全文と発生時刻を記録します。Landfallの現在のPEAK FAQは、Steamの毎週火曜日の定期メンテナンスを案内し、ファイアウォールやウイルス対策ソフト、ゲームファイル、接続状態、他の実行中プログラム、MOD、ルーター、cFosSpeed、Steamのフレンド関係とプロフィール公開範囲、VPNを確認するよう勧めています。一度に一つだけ変更し、同じメンバーで再確認してください。Photonのエラーだけで全体障害、ISPによる遮断、特定設定の効果が確定するわけではありません。',
    tocLabel: '目次',
    tocFaq: 'Photonエラー FAQ',
    heroImage: media('島のルートを協力して登るPEAKプレイヤーのSteam公式スクリーンショット', 'Steam公式スクリーンショットは協力プレイの背景を示すもので、Photonエラー画面や接続状態ではありません。'),
    sections: [
      {
        title: 'PEAKの「Photonから切断」とは',
        paragraphs: [
          'Landfallによると、PEAKはサーバーの中継にPhotonを使っています。「Photonから切断されました」と表示された場合、その協力セッションがPhotonの中継接続を失ったことは分かります。しかし、その文言だけでは原因を診断できません。Steamの定期メンテナンス、ローカルネットワーク、参加者のプライバシー設定、ファイアウォール、MOD、サービス側のどれが関係したかは示されません。',
          'エラー名は接続の異なる段階で表示されることがあります。「Photon Networkに接続できない」「Roomに接続できない」は接続の開始時、「Photonから切断」は接続が途切れたとき、「ClientTimeout」はゲームが表示するタイムアウト名です。公開されているPEAK FAQは、各表示を特定の原因と結び付けていません。原因を推測せず、表示をそのまま記録してください。',
          'まず同じロビーで全員に起きたのか、一人だけが切断されたのかを比べます。グループ全体が同時に失敗したら時刻を記録し、公式メンテナンス情報を確認します。一人だけなら、その人のゲームファイル、MOD、接続、ファイアウォール、Steam上のフレンド関係から調べます。この違いは次の確認項目を選ぶ手掛かりですが、原因の証明ではありません。',
        ],
        table: {
          caption: '表示されたPEAKのエラーは手掛かりとして使い、原因の証明にしない',
          headers: ['表示または状況', '分かること', '断定できないこと', '次の確認'],
          rows: [
            ['Photonから切断', '協力セッションがPhoton中継との接続を失った。', '全体障害、ISPの遮断、特定の設定が原因とは断定できない。', '時刻とロビーの影響範囲を記録する。'],
            ['Photon Network / Roomに接続できない', 'ネットワークまたはルームへの接続が完了しなかった。', 'メンテナンス、ローカル回線、ロビーのどれかは分からない。', '公式メンテナンス、回線、Steamフレンドを確認する。'],
            ['ClientTimeout', 'ゲームがクライアントのタイムアウト名を表示した。', '公開FAQは一つの原因に結び付けていない。', '全文、段階、時刻を残す。'],
            ['一人だけ切断される', 'その試行では一人に症状が限られている。', '本人の端末やISPが悪いとは証明できない。', 'MOD、ファイル、ファイアウォール、回線、プロフィールを比べる。'],
            ['複数人が同時に失敗', 'グループが同じ時間帯の失敗を観測した。', 'PEAK全体の停止とは断定できない。', '時刻を比較し、定期メンテナンス後に再試行する。'],
          ],
        },
      },
      {
        title: 'ルーターを変更する前に確認すること',
        paragraphs: [
          'まずLandfallの現在のFAQを確認します。Steamサーバーは毎週火曜日に定期メンテナンスで停止すると案内されています。発生時刻が重なる場合は終了後に再確認してください。一度の接続失敗だけでPEAKのサーバー停止とは言えず、FAQも毎回の所要時間を固定していません。',
          'メンテナンス時間外なら、簡単な条件から調べます。回線が安定しているか、干渉しそうな他のプログラムがないかを確認し、続く場合はPCを再起動します。同じメンバーで試し、全員に出るのか同じプレイヤーだけ切れるのか記録します。原因を決めつけずに、次に見る端末やアカウント設定を絞れます。',
          'その後は一つの設定だけ変えて同じ参加方法で試し、結果を書きます。セキュリティソフト、ルーター、MOD、VPNを一度に変えると、改善してもどれが関係したか分かりません。変化がなければ一時的な設定を元に戻します。',
        ],
        image: routeMedia('難しい島のルートを進むPEAKのSteam公式スクリーンショット', 'Steam公式のプレイ画面です。報告時は自分のゲームに出た正確なPhotonエラーを別途記録してください。'),
        table: {
          caption: 'Landfallが公開したPhotonの確認項目を低リスクから条件付き変更へ並べる',
          headers: ['順番', '確認項目', '試し方', '根拠の範囲'],
          rows: [
            ['1', 'Steamメンテナンス', '火曜の定期メンテナンスと重なるか確認し、終了後に再試行する。', '公式案内は定期メンテナンスであり、PEAKのリアルタイム状態ではない。'],
            ['2', '接続の安定性', '他のネットワーク利用を確認し、回線が不安定な場合だけルーターを再起動する。', '再起動後に変化しても原因確定ではない。'],
            ['3', 'Steamフレンドと公開範囲', 'ロビー全員がSteamでフレンドか確認し、フレンド限定設定を見る。', 'Landfallは可能性として挙げており、全ての原因ではない。'],
            ['4', '他の実行中プログラム', '干渉しそうなソフトを終了し、同じロビーで試す。', '必要なアクセシビリティ・セキュリティ機能は後で戻す。'],
            ['5', 'ゲームファイルとMOD', 'Steamでファイルを確認する。MODはBepInExの残りも含めて完全に外す。', '個人設定をバックアップし、無関係なファイルを消さない。'],
            ['6', 'ファイアウォールや対策ソフト', '正しいPEAKの項目を特定できる場合に限り、専用の許可設定を使う。', '保護機能全体を無効にしない。'],
            ['7', 'cFosSpeed、MLO、VPN', '該当する設定だけを一つずつ試し、元に戻せる状態にする。', '公式FAQでも報告または条件付きの確認として扱われている。'],
            ['8', 'Landfallのトラブルシューティング', '改善しない場合は公式ページと現在のサポート手順を使う。', '古い動画より開発者の現在の案内を優先する。'],
          ],
        },
      },
      {
        title: 'ClientTimeoutやServerTimeoutから分からないこと',
        paragraphs: [
          'タイムアウト名は、ゲームが接続の一段階を予定時間内に完了できなかったことを示します。Landfallの公開FAQには確認項目がありますが、PEAK専用のClientTimeout / ServerTimeout原因一覧はありません。表示だけでルーター故障、Photon停止、特定のWindows設定を原因と決めることはできません。',
          'エラー全文を残し、直前に何をしていたかも記録します。ロビー作成、招待受諾、コード入力、合流後のプレイのどれだったか、ホストと参加者のどちらが見たか、他の人はロビーに残ったか、再試行で変化したかを書きます。「サーバーが壊れている」とまとめるより、確認可能な事実を伝える方がサポートで役立ちます。',
          `友達のゲームへ入る段階で困っている場合は${link('room-codes', 'PEAKのルームコードと協力プレイガイド')}でSteam招待、JOIN GAME、コード、ロビー公開範囲を確認してください。あちらは参加手順、本ページはPhoton接続の症状を扱います。`,
        ],
        bullets: [
          ['エラー直前の操作', 'ロビー作成、招待、コード入力、またはプレイ中。'],
          ['影響した人', 'ホスト、一人の参加者、同じ試行の全員。'],
          ['表示をそのまま保存', 'ClientTimeoutを確認済みサーバー停止と言い換えない。'],
          ['一度に一つだけ変更', '結果が変わらなければ設定を戻す。'],
        ],
      },
      {
        title: 'プレイヤー報告の確認：VPN、MLO、cFosSpeed',
        paragraphs: [
          'LandfallのFAQはプレイヤーの報告も掲載しています。cFosSpeedをアンインストールしたり、ルーターのMulti-Link Operation（MLO）を無効にしたりして改善した例があり、VPNを使う場合と使わない場合の両方も試すよう案内しています。誰にでも効く修正ではなく、条件に合う場合の手掛かりです。',
          'cFosSpeedがある場合はソフト名を確認し、変更前にソフトやマザーボードの説明を確認します。MLOを試すなら元の設定を控え、改善しなければ戻します。既にVPNを使っている人はオン・オフを比べられますが、動画だけを根拠に未知のVPNを入れたり、変更を恒久化したりしないでください。',
          'Landfallは一部ISPがPhoton接続に必要なアドレスをブロックする場合があるとし、プロバイダーへの相談を勧めています。VPNで解決したプレイヤーもいると記載されていますが、あなたのISPに制限があると判明したわけではありません。ネットワーク保護の変更やサービス購入の前に、ISPか公式サポートへ相談してください。',
        ],
        table: {
          caption: 'プレイヤー報告を誰にでも効く対策と分けて扱う',
          headers: ['確認項目', '情報源の状態', '実施上の注意'],
          rows: [
            ['cFosSpeed', 'Landfallはアンインストールで改善したという報告を紹介。', 'インストール有無を確認し、関係ないドライバーを推測で削除しない。'],
            ['ルーターMLO', 'Landfallは無効化で改善したプレイヤー報告を紹介。', '元に戻せる人が一時的な比較として試す。'],
            ['VPNのオン・オフ', 'Landfallは両方を試すよう案内し、改善例を記載。', '信頼しているサービスに限り、地域制限の証拠とはしない。'],
            ['ISPの制限', 'Landfallは一部の事業者で可能性があると説明。', 'プロバイダーに確認し、確認前に遮断と断定しない。'],
          ],
        },
      },
      {
        title: 'PEAKサポートへ伝えると役立つ情報',
        paragraphs: [
          '公式の確認項目を試しても変化しない場合は、Landfallの現在のサポート窓口や該当するSteamディスカッションへ短く報告します。クライアントに表示されたゲームバージョン、日付とおおよその時刻・タイムゾーン、エラー全文、表示された段階を含めます。ホスト、一人の参加者、全員のどこに起きたか、Steam招待かルームコードかも記録してください。',
          '実際に試した項目と、それぞれの結果だけを列挙します。MOD、VPN、ファイアウォール規則、cFosSpeed、MLOは自分の環境に該当するときだけ書きます。エラーのスクリーンショットは役立ちますが、公開する前にアカウント名、個人チャット、招待やルームコード、個人情報を隠します。パスワードやトークンは添付しないでください。',
          '事実と解釈を分けると読み手が判断しやすくなります。「20:15 UTCにJOIN GAME後ClientTimeoutが出て、他の2人はロビーに残った」は「Photonが壊れた」より調査に役立ちます。公式の対処法はLandfallを参照し、Steam Communityは似た体験の報告として扱います。',
        ],
        bullets: [
          ['症状', 'エラー全文、表示段階、日付、時刻、タイムゾーン。'],
          ['ロビー状況', 'ホストか参加者か、影響人数、招待かコードか。'],
          ['試した変更', '実施した確認項目と結果だけ。'],
          ['プライバシー', 'コード、アカウント情報、個人チャット、パスワード、トークンを隠す。'],
        ],
      },
    ],
    faq: {
      eyebrow: '簡単な回答',
      title: 'PEAK Photonエラー FAQ',
      items: [
        ['PEAKの「Photonから切断されました」はどう直しますか？', 'Landfall FAQに沿ってSteamの定期メンテナンス、回線、フレンドと公開範囲、他のプログラム、ゲームファイル、MOD、セキュリティ例外を確認し、ルーターやVPNは条件付きで試します。一度に一つだけ変更し、保証された解決策があるとは考えないでください。'],
        ['ClientTimeoutはPEAKサーバー停止を意味しますか？', 'そのラベルだけで全体障害とは判断できません。公開FAQは一つの原因に結び付けていません。発生段階を記録し、公式メンテナンス情報と他の参加者の状況を確認します。'],
        ['PEAKやSteamは毎週火曜日に停止しますか？', 'LandfallによるとSteamは毎週火曜日に定期メンテナンスがあります。毎回の長さは決まっておらず、全てのPhotonエラーが原因だとも書かれていません。終了後に再試行してください。'],
        ['PEAKのMODがPhoton切断を起こすことはありますか？', 'Landfallは切断調査時にMODとBepInEx等の残りを完全に外すよう勧めています。特定MODが原因と決める前に、MODなしの環境で比較します。'],
        ['PEAKではVPNをオン・オフどちらにしますか？', 'Landfallは両方の状態を試すよう案内し、改善したプレイヤーもいると記載しています。条件付きの比較であり診断ではありません。未知のVPNを入れず、セキュリティ設定は理解した上で扱います。'],
        ['MLOを切る、またはcFosSpeedを削除すべきですか？', 'Landfallには改善したという報告がありますが、共通の解決法ではありません。環境に該当する場合のみ元の状態を控えて試し、改善しなければ戻します。'],
        ['PEAKのルームコードエラーはPhotonエラーと同じですか？', '必ずしも同じではありません。コードや招待はロビーへの参加手順、Photon表示は接続症状です。コードの使い方はルームコードガイドで確認し、失敗時の文言は別に記録します。'],
      ],
    },
    source: {
      eyebrow: '公式案内とプレイヤー報告',
      title: 'このPEAK接続ガイドが確認できる範囲',
      body: 'LandfallのPEAK FAQはPhoton中継、Steamの火曜メンテナンス、公開された確認項目の主な情報源です。cFosSpeed、MLO、VPN、ISP制限は報告または条件付きの可能性として扱われており、本ガイドも区別を保ちます。Steam Communityの投稿はプレイヤー体験として示し、公式確認や普遍的な修正とはみなしません。',
      links: [
        ['Landfall PEAK FAQと接続確認', 'https://landfall.se/peak-faq'],
        ['Landfallトラブルシューティング', 'https://landfall.se/troubleshooting'],
        ['PEAK公式Steamページ', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community Photonエラー報告', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'PEAKのルームコードと参加方法を見る'],
      ['peak-game-tips', 'PEAKの協力プレイのコツを読む'],
      ['peak-game-update', 'PEAKの更新履歴を確認する'],
    ],
    relatedLabel: 'PEAKの接続・協力プレイガイド',
  },
  fr: {
    meta: {
      title: 'Erreur PEAK : déconnecté de Photon - guide ClientTimeout',
      description: 'Erreur PEAK : déconnecté de Photon ou ClientTimeout ? Suivez les contrôles de Landfall et distinguez les conseils officiels des témoignages.',
      schema: 'Guide de dépannage Photon pour PEAK : déconnexion, ClientTimeout, contrôles officiels, témoignages et informations utiles au support.',
    },
    primaryKeyword: 'erreur PEAK : déconnecté de Photon',
    eyebrow: 'Dépannage de connexion - vérifier une cause à la fois',
    h1: 'Erreur PEAK : déconnecté de Photon - guide ClientTimeout',
    intro: `Si PEAK affiche « Disconnected from Photon », cela confirme une interruption de la connexion coopérative, mais pas sa cause. Pour rejoindre un salon, consultez le ${link('room-codes', 'guide PEAK des codes et du jeu coopératif')}. Cette page traite l’erreur : vérifiez la maintenance Steam et les étapes officielles, puis considérez VPN ou routeur comme des pistes conditionnelles, pas comme des solutions garanties.`,
    answerLabel: 'Réponse courte',
    answer: 'Notez d’abord le message exact et son heure. La FAQ PEAK actuelle de Landfall signale une maintenance Steam chaque mardi et recommande de vérifier les exclusions du pare-feu et de l’antivirus, les fichiers du jeu, la stabilité de la connexion, les autres programmes, les mods, le routeur, cFosSpeed, les amis et la confidentialité Steam, ainsi que le VPN. Ne changez qu’un élément à la fois et retestez avec le même groupe. Une erreur Photon ne prouve pas une panne générale de PEAK, un blocage par votre fournisseur ou l’efficacité certaine d’un réglage.',
    tocLabel: 'Sur cette page',
    tocFaq: 'FAQ Photon',
    heroImage: media('Des scouts de PEAK coordonnent une ascension coopérative, capture officielle Steam', 'Capture officielle Steam montrant le contexte coopératif, pas une erreur Photon ni l’état du réseau.'),
    sections: [
      {
        title: 'Que signifie « Disconnected from Photon » dans PEAK ?',
        paragraphs: [
          'Landfall indique que PEAK utilise Photon comme relais de serveur. Si le jeu affiche « Disconnected from Photon », la session coopérative a perdu cette connexion relais. Le texte est un indice, pas un diagnostic : il ne précise pas si l’interruption vient de la maintenance Steam, du réseau local, de la confidentialité d’un membre, du pare-feu, d’un mod ou du service.',
          'Les messages peuvent aussi apparaître à différentes étapes. « Failed to connect to Photon Network » ou « Failed to connect to Room » peut survenir pendant l’établissement de la connexion ; « Disconnected from Photon » décrit une interruption ; « ClientTimeout » est le libellé de délai affiché par le jeu. La FAQ publique de PEAK ne relie pas chaque texte à une cause unique. Conservez le libellé exact au lieu d’en déduire une cause.',
          'Vérifiez d’abord si tout le salon échoue au même moment ou si une seule personne est déconnectée. Si tout le groupe échoue ensemble, notez l’heure et consultez l’avis officiel de maintenance. Si une personne est seule concernée, commencez par ses fichiers, mods, connexion, pare-feu et relation Steam avec les autres. Le schéma aide à choisir le prochain contrôle sans prouver l’origine.',
        ],
        table: {
          caption: 'Traitez le message visible comme un indice, pas comme la preuve d’une cause',
          headers: ['Message ou situation', 'Ce que cela établit', 'Ce que cela ne prouve pas', 'Prochaine vérification'],
          rows: [
            ['Disconnected from Photon', 'La session coopérative a perdu la connexion au relais Photon.', 'Ni une panne globale, ni un blocage ISP, ni un réglage unique.', 'Notez l’heure et les joueurs touchés.'],
            ['Failed to connect to Photon Network ou Room', 'La tentative réseau ou salon n’a pas abouti.', 'Ne distingue pas maintenance, réseau local ou paramètres du salon.', 'Vérifiez la maintenance, la connexion et les amis Steam.'],
            ['ClientTimeout', 'Le jeu affiche un délai d’attente du client.', 'La FAQ publique n’indique pas une cause unique.', 'Gardez le texte, l’étape et l’heure.'],
            ['Une seule personne est déconnectée', 'Le symptôme touche un membre dans cette tentative.', 'Ne prouve pas que son appareil ou son ISP est en cause.', 'Comparez mods, fichiers, pare-feu, réseau et profil Steam.'],
            ['Plusieurs joueurs échouent ensemble', 'Le groupe a observé le même intervalle d’erreur.', 'Ne confirme pas à lui seul une panne globale de PEAK.', 'Comparez les heures et réessayez après la maintenance.'],
          ],
        },
      },
      {
        title: 'À vérifier avant de modifier le routeur',
        paragraphs: [
          'Commencez par la FAQ actuelle de Landfall. Elle précise que les serveurs Steam sont indisponibles pour maintenance de routine chaque mardi. Si l’erreur coïncide, attendez la fin et réessayez ; un salon qui échoue une fois ne prouve pas une panne PEAK. La FAQ ne fixe pas la durée de chaque maintenance.',
          'En dehors de cette période, vérifiez d’abord les conditions simples : stabilité de la connexion, logiciels susceptibles d’interférer et redémarrage de l’ordinateur si le problème persiste. Reproduisez l’essai avec le même groupe et notez si tout le monde échoue ou si la même personne se déconnecte. Cela oriente le prochain contrôle sans inventer de cause.',
          'Ensuite, ne modifiez qu’un réglage par essai et gardez le même mode d’accès. Ne désactivez pas en même temps antivirus, options du routeur, mods et VPN : si cela fonctionne, vous ne saurez pas quel changement a compté. Rétablissez les réglages temporaires sans effet.',
        ],
        image: routeMedia('Capture officielle Steam de scouts PEAK sur un parcours difficile', 'Capture Steam du contexte de jeu ; pour signaler une erreur, joignez le texte Photon réellement affiché chez vous.'),
        table: {
          caption: 'Contrôles Photon publiés par Landfall, des plus réversibles aux tests conditionnels',
          headers: ['Ordre', 'Contrôle', 'Comment tester', 'Limite des éléments'],
          rows: [
            ['1', 'Maintenance Steam', 'Vérifiez la maintenance du mardi et réessayez après sa fin.', 'Landfall décrit une routine, pas un état PEAK en direct.'],
            ['2', 'Stabilité réseau', 'Vérifiez les autres usages réseau ; redémarrez le routeur uniquement s’il est instable.', 'Une amélioration après redémarrage ne prouve pas la cause.'],
            ['3', 'Amis et confidentialité Steam', 'Vérifiez les amitiés Steam dans le salon et les profils Amis uniquement.', 'Landfall dit que cela peut contribuer, pas que cela explique tout.'],
            ['4', 'Autres programmes', 'Fermez les programmes potentiellement interférents puis répétez l’essai.', 'Rouvrez les outils nécessaires à l’accessibilité ou à la sécurité.'],
            ['5', 'Fichiers et mods', 'Vérifiez les fichiers PEAK dans Steam ; retirez aussi les résidus de mods comme BepInEx.', 'Sauvegardez vos configurations et ne supprimez pas d’autres fichiers.'],
            ['6', 'Pare-feu ou antivirus', 'Utilisez l’exception PEAK propre au logiciel si vous pouvez identifier la bonne entrée.', 'Ne désactivez pas toute la protection.'],
            ['7', 'cFosSpeed, MLO ou VPN', 'Ne testez que les options présentes et réversibles, une à la fois.', 'Landfall les présente comme témoignages ou pistes conditionnelles.'],
            ['8', 'Dépannage Landfall', 'Si le problème persiste, suivez la page officielle et son canal actuel.', 'Préférez les conseils actuels aux anciennes vidéos.'],
          ],
        },
      },
      {
        title: 'Ce que ClientTimeout et ServerTimeout ne prouvent pas',
        paragraphs: [
          'Un délai d’attente indique que le jeu n’a pas achevé une étape de connexion dans le temps prévu. La FAQ publique de Landfall propose des contrôles, mais ne publie pas de correspondance propre à PEAK entre ClientTimeout ou ServerTimeout et une cause. Le libellé seul ne prouve ni une panne du routeur, ni l’indisponibilité de Photon, ni une option Windows fautive.',
          'Gardez le message exact et notez ce que vous faisiez : création du salon, acceptation d’une invitation, saisie d’un code ou partie déjà commencée. Précisez si l’hôte ou un joueur entrant l’a vu, si les autres sont restés dans le salon et si une nouvelle tentative a changé le résultat. Ces observations aident davantage le support qu’une affirmation comme « les serveurs sont cassés ».',
          `Si le problème survient en rejoignant un ami, consultez le ${link('room-codes', 'guide PEAK des codes de salon et de l’accès coopératif')} pour Steam, JOIN GAME et la confidentialité du salon. Il traite l’entrée ; cette page traite les symptômes Photon.`,
        ],
        bullets: [
          ['Juste avant l’erreur', 'Créer le salon, accepter une invitation, entrer un code ou jouer.'],
          ['Personnes touchées', 'Hôte, un joueur entrant ou tout le groupe.'],
          ['Texte exact', 'Ne transformez pas ClientTimeout en panne confirmée.'],
          ['Un changement par test', 'Notez le réglage et rétablissez-le sans amélioration.'],
        ],
      },
      {
        title: 'Pistes rapportées par des joueurs : VPN, MLO et cFosSpeed',
        paragraphs: [
          'La FAQ de Landfall reprend certaines expériences : des joueurs ont indiqué que désinstaller cFosSpeed ou désactiver le Multi-Link Operation (MLO) du routeur les avait aidés ; elle propose aussi de tester PEAK avec ou sans VPN. Ce sont des pistes conditionnelles, pas une affirmation qu’un réglage est la cause universelle.',
          'Si cFosSpeed est installé, identifiez le logiciel et consultez sa documentation ou celle du fabricant de la carte mère. Pour un test MLO, notez l’état initial et restaurez-le sans amélioration. Si vous utilisez déjà un VPN, comparez une session avec et sans ; n’installez pas un VPN inconnu ni ne gardez un changement simplement conseillé dans une vidéo.',
          'Landfall indique aussi que certains fournisseurs peuvent bloquer des adresses nécessaires à Photon et conseille de les contacter ; la FAQ note qu’un VPN a aidé certains joueurs. C’est une possibilité rapportée, pas une conclusion sur votre opérateur. Demandez confirmation au fournisseur ou au support officiel avant de modifier la sécurité réseau ou d’acheter un service.',
        ],
        table: {
          caption: 'Séparez les témoignages de joueurs des solutions universelles',
          headers: ['Contrôle', 'État de la source', 'Limite pratique'],
          rows: [
            ['cFosSpeed', 'Landfall rapporte que sa désinstallation a aidé certains joueurs.', 'Vérifiez qu’il est installé ; ne supprimez pas d’autres pilotes au hasard.'],
            ['MLO du routeur', 'Landfall rapporte que sa désactivation a aidé certains joueurs.', 'Test temporaire pour une personne sachant rétablir le réglage.'],
            ['VPN activé ou non', 'Landfall suggère les deux essais et cite des résultats rapportés.', 'Utilisez un service déjà fiable ; cela ne prouve pas un blocage régional.'],
            ['Restriction de l’ISP', 'Landfall mentionne des blocages possibles par certains fournisseurs.', 'Demandez au fournisseur ; ne présentez pas un blocage comme confirmé.'],
          ],
        },
      },
      {
        title: 'Que transmettre au support PEAK ?',
        paragraphs: [
          'Si les contrôles officiels ne changent rien, envoyez un rapport bref au canal actuel de Landfall ou à la discussion Steam appropriée. Indiquez la version du jeu affichée par le client, la date, l’heure approximative et son fuseau, le texte complet et l’étape où il apparaît. Précisez si l’hôte, un joueur entrant ou tout le groupe est touché, et si vous utilisiez une invitation Steam ou un code.',
          'Listez uniquement les vérifications réellement effectuées et leur résultat. Mentionnez mods, VPN, règle du pare-feu, cFosSpeed ou MLO uniquement si cela concerne votre configuration. Une capture peut aider, mais masquez le nom du compte, les conversations privées, les invitations, les codes de salon et toute donnée personnelle avant de la publier. N’envoyez jamais de mot de passe ou de jeton.',
          'Un rapport utile sépare le fait de l’interprétation : « ClientTimeout après JOIN GAME à 20:15 UTC ; les deux autres joueurs sont restés dans le salon » permet une enquête plus précise que « Photon est cassé ». Landfall reste la source des actions officielles ; les discussions Steam montrent des expériences, pas la cause de votre partie.',
        ],
        bullets: [
          ['Symptôme exact', 'Message, étape, date, heure et fuseau.'],
          ['Contexte du salon', 'Hôte ou participant, portée du problème, invitation ou code.'],
          ['Changements testés', 'Seulement les vérifications réalisées et leur résultat.'],
          ['Confidentialité', 'Masquez codes, compte, conversations, mots de passe et jetons.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Réponses rapides',
      title: 'FAQ des erreurs Photon de PEAK',
      items: [
        ['Comment corriger « Disconnected from Photon » dans PEAK ?', 'Commencez par la FAQ de Landfall : maintenance Steam, stabilité, amis et confidentialité, autres programmes, fichiers, mods et exceptions de sécurité. Gardez routeur ou VPN comme tests conditionnels. Changez un élément à la fois ; aucun correctif n’est garanti.'],
        ['ClientTimeout signifie-t-il que PEAK est en panne ?', 'Ce libellé ne prouve pas une panne générale. La FAQ publique ne l’associe pas à une seule cause. Notez l’étape, consultez la maintenance officielle et comparez avec les autres joueurs.'],
        ['Steam ou PEAK s’arrête-t-il tous les mardis ?', 'Landfall indique une maintenance Steam de routine chaque mardi. La FAQ ne fixe pas une durée unique ni n’attribue toutes les erreurs Photon à cette maintenance. Réessayez après et notez le résultat.'],
        ['Les mods PEAK peuvent-ils provoquer une déconnexion Photon ?', 'Landfall recommande de retirer complètement les mods, y compris les restes BepInEx, pendant le diagnostic. Comparez avec une installation sans mod avant d’accuser un mod précis.'],
        ['Faut-il activer ou désactiver le VPN pour PEAK ?', 'Landfall suggère de comparer les deux états et cite des expériences positives. C’est un test conditionnel, pas un diagnostic. N’installez pas de VPN inconnu et ne modifiez pas la sécurité sans en comprendre l’effet.'],
        ['Dois-je désactiver MLO ou désinstaller cFosSpeed ?', 'Landfall reprend des témoignages, pas une solution universelle. Testez uniquement si cela s’applique et restaurez le réglage sans amélioration.'],
        ['Un problème de code PEAK est-il la même chose qu’une erreur Photon ?', 'Pas nécessairement. Le code concerne l’accès au salon ; Photon désigne un symptôme de connexion. Consultez le guide des codes puis relevez le message Photon exact.'],
      ],
    },
    source: {
      eyebrow: 'Conseils officiels et témoignages',
      title: 'Ce que ce guide de connexion PEAK peut confirmer',
      body: 'La FAQ PEAK de Landfall est la source principale sur Photon, la maintenance Steam du mardi et les contrôles publiés. Elle décrit cFosSpeed, MLO, VPN et restrictions de fournisseur comme témoignages ou possibilités conditionnelles ; le guide conserve cette nuance. Une discussion Steam Community reste un témoignage de joueur, pas une confirmation officielle ni un correctif universel.',
      links: [
        ['FAQ PEAK de Landfall et connexion', 'https://landfall.se/peak-faq'],
        ['Dépannage Landfall', 'https://landfall.se/troubleshooting'],
        ['Page officielle de PEAK sur Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community : témoignage sur Photon', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'Voir les codes PEAK et rejoindre une partie'],
      ['peak-game-tips', 'Lire les conseils coopératifs PEAK'],
      ['peak-game-update', 'Consulter les mises à jour de PEAK'],
    ],
    relatedLabel: 'Guides PEAK de connexion et coopération',
  },
  de: {
    meta: {
      title: 'PEAK von Photon getrennt: ClientTimeout prüfen',
      description: 'Zeigt PEAK Disconnected from Photon oder ClientTimeout? Folge Landfalls aktueller Prüfliste und trenne offizielle Hinweise von Spielerberichten.',
      schema: 'Eine quellenbewusste PEAK-Anleitung zu Photon-Abbrüchen, ClientTimeout, offiziellen Prüfschritten, Spielerberichten und Support-Informationen.',
    },
    primaryKeyword: 'PEAK von Photon getrennt',
    eyebrow: 'Verbindungsprobleme - immer nur eine Ursache prüfen',
    h1: 'PEAK von Photon getrennt: ClientTimeout prüfen',
    intro: `Wenn PEAK „Disconnected from Photon“ anzeigt, bestätigt das eine unterbrochene Koop-Verbindung, aber nicht deren Ursache. Für den Lobby-Beitritt hilft der ${link('room-codes', 'PEAK-Guide zu Raumcodes und Koop')}. Diese Seite behandelt den Fehler selbst: Prüfe die Steam-Wartung und Landfalls aktuelle Hinweise, und werte VPN- oder Routertests als bedingte Möglichkeiten statt als garantierte Lösung.`,
    answerLabel: 'Kurzantwort',
    answer: 'Notiere zuerst die genaue Meldung und den Zeitpunkt. Landfalls aktuelle PEAK-FAQ nennt die regelmäßige Steam-Wartung am Dienstag und empfiehlt Prüfungen an Firewall- und Antivirus-Ausnahmen, Spieldateien, Verbindung, anderen Programmen, Mods, Router, cFosSpeed, Steam-Freundschaften und Profilprivatsphäre sowie VPN. Ändere nur eine Sache und teste mit derselben Gruppe erneut. Ein Photon-Fehler beweist weder einen PEAK-weiten Ausfall noch eine Sperre durch den Internetanbieter oder die Wirkung einer bestimmten Einstellung.',
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Photon-FAQ',
    heroImage: media('PEAK-Scouts koordinieren einen Koop-Aufstieg, offizieller Steam-Screenshot', 'Offizieller Steam-Screenshot zum Koop-Kontext, kein Photon-Fehlerbild und keine Aussage zum Netzwerkstatus.'),
    sections: [
      {
        title: 'Was bedeutet „Disconnected from Photon“ in PEAK?',
        paragraphs: [
          'Landfall zufolge verwendet PEAK Photon als Server-Relay. Zeigt das Spiel „Disconnected from Photon“, hat die Koop-Sitzung diese Relay-Verbindung verloren. Die Meldung ist ein Hinweis, aber keine Diagnose: Sie sagt nicht, ob Steam-Wartung, das lokale Netzwerk, die Privatsphäre eines Mitglieds, eine Firewall, ein Mod oder der Dienst die Unterbrechung verursacht hat.',
          'Die Fehlermeldungen können außerdem in unterschiedlichen Phasen erscheinen. „Failed to connect to Photon Network“ oder „Failed to connect to Room“ kann beim Verbindungsaufbau auftreten; „Disconnected from Photon“ beschreibt einen Abbruch; „ClientTimeout“ ist die vom Spiel angezeigte Timeout-Bezeichnung. Landfalls öffentliche PEAK-FAQ ordnet diese Texte keiner eindeutigen Ursache zu. Halte den Wortlaut fest, statt eine Ursache zu erraten.',
          'Prüfe zuerst, ob die ganze Lobby gleichzeitig scheitert oder nur eine Person getrennt wird. Bei der ganzen Gruppe notierst du die Uhrzeit und prüfst den offiziellen Wartungshinweis. Bei einer einzelnen Person beginnst du mit deren Dateien, Mods, Verbindung, Firewall und Steam-Freundschaften. Das Muster hilft bei der nächsten Prüfung, beweist aber keine Ursache.',
        ],
        table: {
          caption: 'Die sichtbare PEAK-Meldung ist ein Hinweis, kein Ursachennachweis',
          headers: ['Meldung oder Muster', 'Was damit feststeht', 'Was nicht feststeht', 'Nächster Check'],
          rows: [
            ['Disconnected from Photon', 'Die Koop-Sitzung hat die Photon-Relay-Verbindung verloren.', 'Kein globaler Ausfall, ISP-Block oder einzelner Einstellungsfehler ist bewiesen.', 'Uhrzeit und betroffene Lobby-Mitglieder notieren.'],
            ['Failed to connect to Photon Network oder Room', 'Der Netzwerk- oder Raumbeitritt wurde nicht abgeschlossen.', 'Steam-Wartung, lokales Netz und Lobby-Bedingungen bleiben offen.', 'Wartung, Verbindung und Steam-Freundschaften prüfen.'],
            ['ClientTimeout', 'Das Spiel zeigte eine Client-Timeout-Meldung.', 'Die öffentliche FAQ nennt dafür keine einzelne Ursache.', 'Wortlaut, Phase und Zeitpunkt notieren.'],
            ['Nur eine Person wird getrennt', 'Das Symptom betrifft in diesem Versuch ein Mitglied.', 'Das Gerät oder der Anbieter dieser Person ist nicht automatisch schuld.', 'Mods, Dateien, Firewall, Netzwerk und Steam-Profil vergleichen.'],
            ['Mehrere Personen scheitern gleichzeitig', 'Die Gruppe beobachtete dasselbe Fehlerfenster.', 'Ein globaler PEAK-Ausfall ist damit nicht bewiesen.', 'Zeiten vergleichen und nach der Wartung erneut testen.'],
          ],
        },
      },
      {
        title: 'Diese Punkte zuerst prüfen, bevor du den Router änderst',
        paragraphs: [
          'Beginne mit Landfalls aktueller FAQ. Dort steht, dass Steam-Server jeden Dienstag routinemäßig gewartet werden. Fällt der Fehler in dieses Zeitfenster, warte bis danach und teste erneut; ein einzelner fehlgeschlagener Lobby-Beitritt beweist keinen PEAK-Ausfall. Die FAQ nennt keine einheitliche Dauer für jede Wartung.',
          'Außerhalb dieser Zeit prüfst du zuerst einfache Bedingungen: Ist die Verbindung stabil, könnten andere Programme stören, und hilft ein Neustart des Computers? Wiederhole den Versuch mit derselben Gruppe und notiere, ob alle oder immer dieselbe Person betroffen sind. So grenzt du den nächsten Geräte- oder Kontocheck ein, ohne eine Ursache zu erfinden.',
          'Ändere anschließend pro Versuch nur eine Einstellung und nutze denselben Beitrittsweg. Schalte nicht gleichzeitig Schutzsoftware aus, ändere den Router, entferne Mods und wechsle das VPN: Bei einer Verbesserung wäre unklar, welche Änderung zählte. Setze wirkungslose temporäre Einstellungen zurück.',
        ],
        image: routeMedia('PEAK-Scouts auf einer anspruchsvollen Inselroute, offizieller Steam-Screenshot', 'Offizieller Steam-Spielkontext; füge bei einer Fehlermeldung den Photon-Text aus deiner eigenen Sitzung hinzu.'),
        table: {
          caption: 'Landfalls veröffentlichte Photon-Prüfungen von reversiblen zu bedingten Änderungen',
          headers: ['Reihenfolge', 'Prüfung', 'So testest du', 'Grenze der Aussage'],
          rows: [
            ['1', 'Steam-Wartung', 'Prüfe die Dienstagswartung und teste nach deren Ende erneut.', 'Landfall nennt die Routine, keinen PEAK-Live-Status.'],
            ['2', 'Verbindungsstabilität', 'Prüfe andere Netzaktivität; starte den Router nur bei einer instabilen Verbindung neu.', 'Eine Verbesserung nach dem Neustart beweist keine Ursache.'],
            ['3', 'Steam-Freunde und Privatsphäre', 'Prüfe die Freundschaften in der Lobby und Profile mit Sichtbarkeit „Nur Freunde“.', 'Landfall nennt einen möglichen Beitrag, nicht die Erklärung für alle Fälle.'],
            ['4', 'Andere Programme', 'Schließe mögliche Störprogramme und wiederhole denselben Lobbytest.', 'Benötigte Sicherheits- oder Barrierefreiheitstools danach wieder starten.'],
            ['5', 'Spieldateien und Mods', 'Prüfe PEAK-Dateien in Steam; entferne Mods und Reste wie BepInEx vollständig.', 'Eigene Konfiguration sichern und keine fremden Dateien löschen.'],
            ['6', 'Firewall oder Antivirus', 'Nutze eine PEAK-spezifische Ausnahme, wenn der richtige Eintrag feststeht.', 'Nicht den gesamten Schutz deaktivieren.'],
            ['7', 'cFosSpeed, MLO oder VPN', 'Teste nur vorhandene, reversible Einstellungen und jeweils eine.', 'Landfall nennt Berichte oder bedingte Prüfungen.'],
            ['8', 'Landfall-Fehlerhilfe', 'Wenn es weiter auftritt, folge der offiziellen Seite und dem aktuellen Supportweg.', 'Aktuelle Entwicklerhinweise sind alten Videos vorzuziehen.'],
          ],
        },
      },
      {
        title: 'Was ClientTimeout und ServerTimeout nicht beweisen',
        paragraphs: [
          'Ein Timeout bedeutet, dass das Spiel einen Verbindungsschritt nicht innerhalb der erwarteten Zeit abgeschlossen hat. Landfalls öffentliche FAQ nennt Prüfungen, veröffentlicht aber keine PEAK-spezifische Zuordnung von ClientTimeout oder ServerTimeout zu einer Ursache. Die Meldung allein beweist weder einen defekten Router noch einen Photon-Ausfall oder eine falsche Windows-Einstellung.',
          'Notiere den exakten Text und die Situation davor: Lobby erstellen, Einladung annehmen, Code eingeben oder bereits mit der Gruppe spielen. Halte außerdem fest, ob Host oder Mitspieler betroffen war, ob andere in der Lobby blieben und ob ein erneuter Versuch das Ergebnis änderte. Das hilft dem Support mehr als die pauschale Aussage „die Server sind kaputt“, weil es beobachtbare Fakten erhält.',
          `Wenn du einem Freund beitreten willst, nutze den ${link('room-codes', 'PEAK-Guide zu Raumcodes und Koop-Beitritt')} für Steam-Einladungen, JOIN GAME, Codes und Lobby-Privatsphäre. Er erklärt den Beitritt; dieser Artikel behandelt Photon-Verbindungssymptome.`,
        ],
        bullets: [
          ['Vor dem Fehler', 'Lobby erstellt, Einladung angenommen, Code eingegeben oder bereits geklettert.'],
          ['Betroffene', 'Host, ein beitretender Spieler oder die ganze Gruppe.'],
          ['Exakter Wortlaut', 'ClientTimeout nicht als bestätigten Serverausfall umformulieren.'],
          ['Eine Änderung je Versuch', 'Einstellung notieren und ohne Verbesserung zurücksetzen.'],
        ],
      },
      {
        title: 'Von Spielern gemeldete Tests: VPN, MLO und cFosSpeed',
        paragraphs: [
          'Landfalls FAQ enthält auch Spielerberichte. Andere Spieler hätten nach der Deinstallation von cFosSpeed oder dem Abschalten von Multi-Link Operation (MLO) am Router Erfolg gehabt; außerdem empfiehlt Landfall, PEAK mit und ohne VPN zu testen. Das sind bedingte Hinweise und keine Aussage, dass ein Punkt die allgemeine Ursache sei.',
          'Wenn cFosSpeed installiert ist, prüfe erst den Programmnamen und die Anleitung des Herstellers oder Mainboard-Anbieters. Notiere beim MLO-Test den ursprünglichen Routerwert und stelle ihn wieder her, wenn es nicht hilft. Wer bereits ein VPN nutzt, kann eine Sitzung mit und ohne vergleichen; installiere kein unbekanntes VPN und behalte keine Änderung nur wegen eines Videos dauerhaft bei.',
          'Landfall erwähnt auch, dass manche Internetanbieter für Photon nötige Adressen blockieren könnten, und rät zur Nachfrage beim Anbieter; ein VPN habe einigen Spielern geholfen. Das ist eine berichtete Möglichkeit, keine Feststellung über deinen Anbieter. Frage ISP oder offiziellen Support, bevor du Netzwerkschutz änderst oder einen Dienst kaufst.',
        ],
        table: {
          caption: 'Spielerberichte von universellen Lösungen trennen',
          headers: ['Prüfung', 'Quellenstatus', 'Praktische Grenze'],
          rows: [
            ['cFosSpeed', 'Landfall berichtet, dass die Deinstallation manchen Spielern half.', 'Installation prüfen; keine anderen Treiber auf Verdacht entfernen.'],
            ['Router-MLO', 'Landfall berichtet von Verbesserungen nach dem Deaktivieren.', 'Temporär testen und nur, wenn du den Ursprungswert wiederherstellen kannst.'],
            ['VPN an oder aus', 'Landfall empfiehlt beide Tests und nennt positive Berichte.', 'Nur einem bereits vertrauten Dienst; kein Beweis für eine Regionssperre.'],
            ['ISP-Beschränkung', 'Landfall nennt mögliche Sperren bei manchen Anbietern.', 'Beim Anbieter nachfragen und eine Sperre nicht ohne Bestätigung behaupten.'],
          ],
        },
      },
      {
        title: 'Diese Angaben helfen dem PEAK-Support',
        paragraphs: [
          'Wenn die offiziellen Prüfungen nichts ändern, sende einen kurzen Bericht über Landfalls aktuellen Supportweg oder die passende Steam-Diskussion. Nenne die im Client angezeigte Spielversion, Datum und ungefähre Uhrzeit samt Zeitzone, den vollständigen Fehlertext und die Phase. Schreibe, ob Host, ein beitretender Spieler oder die Gruppe betroffen war und ob ihr Steam-Einladung oder Raumcode verwendet habt.',
          'Führe nur tatsächlich getestete Schritte und deren Ergebnis auf. Erwähne Mods, VPN, Firewall-Regel, cFosSpeed oder MLO nur, wenn es zu deinem Setup passt. Ein Screenshot kann helfen, aber schwärze Kontonamen, private Nachrichten, Einladungen, Raumcodes und andere persönliche Daten, bevor du ihn öffentlich teilst. Keine Passwörter oder Tokens anhängen.',
          'Ein guter Bericht trennt Beobachtung und Deutung: „ClientTimeout nach JOIN GAME um 20:15 UTC; zwei andere Spieler blieben in der Lobby“ ist hilfreicher als „Photon ist kaputt“. Landfall ist die Quelle für offizielle Schritte; Steam Community zeigt Spielerberichte, aber bestätigt nicht die Ursache deiner Sitzung.',
        ],
        bullets: [
          ['Genaue Meldung', 'Fehlertext, Phase, Datum, Uhrzeit und Zeitzone.'],
          ['Lobby-Kontext', 'Host oder Mitspieler, Umfang des Fehlers, Einladung oder Code.'],
          ['Getestete Änderungen', 'Nur durchgeführte Prüfungen und deren Ergebnis.'],
          ['Datenschutz', 'Codes, Kontodaten, private Chats, Passwörter und Tokens schützen.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Kurz erklärt',
      title: 'PEAK Photon-Fehler: FAQ',
      items: [
        ['Wie behebe ich „Disconnected from Photon“ in PEAK?', 'Beginne mit Landfalls FAQ: Steam-Wartung, Verbindung, Freundschaften und Privatsphäre, andere Programme, Dateien, Mods und Sicherheitsausnahmen. Router oder VPN sind bedingte Tests. Ändere je Versuch nur eine Sache; eine garantierte Lösung gibt es nicht.'],
        ['Bedeutet ClientTimeout, dass PEAK ausgefallen ist?', 'Nein, die Meldung allein beweist keinen allgemeinen Ausfall. Die öffentliche FAQ ordnet sie keiner einzelnen Ursache zu. Notiere die Phase, prüfe die offizielle Wartung und vergleiche die übrigen Spieler.'],
        ['Sind PEAK oder Steam jeden Dienstag offline?', 'Landfall nennt eine routinemäßige Steam-Wartung jeden Dienstag. Die FAQ gibt keine einheitliche Dauer an und sagt nicht, jeder Photon-Fehler entstehe dadurch. Teste nach der Wartung erneut.'],
        ['Können PEAK-Mods Photon-Abbrüche verursachen?', 'Landfall empfiehlt bei der Fehlersuche, Mods samt BepInEx-Resten vollständig zu entfernen. Vergleiche zuerst eine Installation ohne Mods, bevor du einen einzelnen Mod verantwortlich machst.'],
        ['Soll ich das VPN für PEAK an- oder ausschalten?', 'Landfall schlägt den Vergleich beider Zustände vor und nennt Spielerberichte. Das ist ein bedingter Test, keine Diagnose. Installiere kein unbekanntes VPN und ändere Sicherheitsoptionen nur, wenn du die Auswirkungen kennst.'],
        ['Soll ich MLO deaktivieren oder cFosSpeed deinstallieren?', 'Landfall nennt Spielerberichte, keine allgemeine Lösung. Teste es nur, wenn es auf dein Setup zutrifft, notiere den Ursprungswert und stelle ihn bei ausbleibender Verbesserung wieder her.'],
        ['Ist ein Raumcode-Fehler dasselbe wie ein Photon-Fehler?', 'Nicht unbedingt. Raumcode und Einladung betreffen den Lobby-Beitritt; Photon bezeichnet ein Verbindungssymptom. Der Raumcode-Guide erklärt den Beitritt, hier hältst du die Photon-Meldung fest.'],
      ],
    },
    source: {
      eyebrow: 'Offizielle Hinweise und Spielerberichte',
      title: 'Was dieser PEAK-Verbindungs-Guide belegen kann',
      body: 'Landfalls PEAK-FAQ ist die Hauptquelle für Photon, die Steam-Wartung am Dienstag und veröffentlichte Prüfungen. Sie führt cFosSpeed, MLO, VPN und ISP-Beschränkungen als Berichte oder bedingte Möglichkeiten auf; dieser Artikel hält den Unterschied fest. Eine Steam-Community-Diskussion ist nur als Spielerbericht verlinkt, nicht als offizielle Bestätigung oder allgemeine Lösung.',
      links: [
        ['Landfall PEAK-FAQ und Verbindungshilfe', 'https://landfall.se/peak-faq'],
        ['Landfall-Fehlerhilfe', 'https://landfall.se/troubleshooting'],
        ['Offizielle PEAK-Steamseite', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community: Photon-Spielerbericht', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'PEAK-Raumcodes und Koop-Beitritt ansehen'],
      ['peak-game-tips', 'PEAK-Koop-Tipps lesen'],
      ['peak-game-update', 'PEAK-Updates prüfen'],
    ],
    relatedLabel: 'PEAK-Guides zu Verbindung und Koop',
  },
  pt: {
    meta: {
      title: 'Erro do PEAK: desconectado do Photon - guia ClientTimeout',
      description: 'Erro do PEAK: desconectado do Photon ou ClientTimeout? Siga os controles da Landfall e separe orientações oficiais de relatos de jogadores.',
      schema: 'Guia de conexão Photon para PEAK com ClientTimeout, verificações oficiais, relatos de jogadores e informações para o suporte.',
    },
    primaryKeyword: 'erro do PEAK: desconectado do Photon',
    eyebrow: 'Solução de conexão - verifique uma causa por vez',
    h1: 'Erro do PEAK: desconectado do Photon - guia ClientTimeout',
    intro: `Se PEAK mostrar “Disconnected from Photon”, isso confirma uma interrupção da conexão cooperativa, mas não identifica a causa. Para entrar em uma sala, consulte o ${link('room-codes', 'guia de códigos e partidas cooperativas de PEAK')}. Esta página trata do erro: verifique a manutenção do Steam e a lista oficial, e considere testes de VPN ou roteador como possibilidades condicionais, não como soluções garantidas.`,
    answerLabel: 'Resposta curta',
    answer: 'Anote primeiro a mensagem exata e quando ela aparece. A FAQ atual de PEAK da Landfall informa que o Steam faz manutenção de rotina toda terça-feira e recomenda verificar exceções do antivírus e firewall, arquivos do jogo, estabilidade da conexão, outros programas, mods, roteador, cFosSpeed, amizade e privacidade no Steam, além de VPN. Altere uma coisa por vez e repita o teste com o mesmo grupo. Um erro Photon não prova que PEAK esteja fora do ar para todos, que seu provedor bloqueie a conexão ou que uma configuração vá resolver.',
    tocLabel: 'Nesta página',
    tocFaq: 'FAQ sobre Photon',
    heroImage: media('Exploradores de PEAK coordenam uma escalada cooperativa, captura oficial da Steam', 'Captura oficial da Steam: mostra o contexto cooperativo, não um erro Photon nem o estado da rede.'),
    sections: [
      {
        title: 'O que significa “Disconnected from Photon” em PEAK',
        paragraphs: [
          'A Landfall informa que PEAK usa Photon como retransmissão de servidor. Quando o jogo mostra “Disconnected from Photon”, a sessão cooperativa perdeu essa conexão de retransmissão. A mensagem é uma pista, não um diagnóstico: não diz se a interrupção veio da manutenção do Steam, da rede local, da privacidade de alguém, do firewall, de um mod ou do serviço.',
          'Os rótulos também podem surgir em etapas diferentes. “Failed to connect to Photon Network” ou “Failed to connect to Room” pode aparecer ao iniciar a conexão; “Disconnected from Photon” descreve uma interrupção; “ClientTimeout” é o texto de tempo limite exibido pelo jogo. A FAQ pública de PEAK não associa cada mensagem a uma causa única. Registre o texto exato em vez de adivinhar a origem.',
          'Primeiro compare se o grupo inteiro falha ao mesmo tempo ou se apenas uma pessoa cai. Se todos falharem juntos, registre o horário e consulte o aviso oficial de manutenção. Se apenas uma pessoa se desconectar, comece pelos arquivos, mods, conexão, firewall e relação de amizade no Steam desse jogador. O padrão ajuda a escolher o próximo teste, mas não prova a causa.',
        ],
        table: {
          caption: 'Use a mensagem visível como pista, não como prova da causa',
          headers: ['Mensagem ou padrão', 'O que confirma', 'O que não confirma', 'Próxima verificação'],
          rows: [
            ['Disconnected from Photon', 'A sessão cooperativa perdeu a conexão de retransmissão Photon.', 'Não confirma queda geral, bloqueio do provedor ou configuração específica.', 'Registre o horário e quem foi afetado.'],
            ['Failed to connect to Photon Network ou Room', 'A tentativa de conexão à rede ou sala não terminou.', 'Não diferencia manutenção, rede local ou condição da sala.', 'Verifique manutenção, conexão e amizade no Steam.'],
            ['ClientTimeout', 'O jogo mostrou uma mensagem de tempo limite do cliente.', 'A FAQ pública não aponta uma causa única.', 'Anote o texto, etapa e horário.'],
            ['Só uma pessoa cai', 'O sintoma ficou limitado a alguém nessa tentativa.', 'Não prova que o aparelho ou provedor dessa pessoa seja o problema.', 'Compare mods, arquivos, firewall, rede e perfil Steam.'],
            ['Vários jogadores falham juntos', 'O grupo observou o mesmo período de erro.', 'Não prova sozinho uma queda geral de PEAK.', 'Compare os horários e tente novamente após a manutenção.'],
          ],
        },
      },
      {
        title: 'O que verificar antes de alterar o roteador',
        paragraphs: [
          'Comece pela FAQ atual da Landfall. Ela informa que os servidores do Steam passam por manutenção de rotina toda terça-feira. Se o erro coincidir, espere a manutenção terminar e teste novamente; uma falha isolada não prova que PEAK esteja fora do ar. A FAQ não promete uma duração fixa para cada manutenção.',
          'Fora desse período, verifique primeiro condições simples: estabilidade da internet, programas que possam interferir e reinicialização do computador se o problema continuar. Repita com o mesmo grupo e anote se todos falharam ou se sempre a mesma pessoa caiu. Essa comparação orienta a próxima checagem sem inventar uma causa.',
          'Depois altere somente uma opção por teste e repita o mesmo caminho de entrada. Não desligue a proteção, altere o roteador, remova mods e troque a VPN ao mesmo tempo: se funcionar, não será possível saber qual mudança ajudou. Restaure ajustes temporários que não fizeram diferença.',
        ],
        image: routeMedia('Captura oficial da Steam com exploradores de PEAK em uma rota difícil da ilha', 'Captura oficial da Steam para contexto de jogo; ao relatar o problema, inclua a mensagem Photon exata do seu cliente.'),
        table: {
          caption: 'Verificações Photon publicadas pela Landfall, das mais reversíveis às condicionais',
          headers: ['Ordem', 'Checagem', 'Como testar', 'Limite da evidência'],
          rows: [
            ['1', 'Manutenção do Steam', 'Veja se coincide com a manutenção de terça e teste depois que terminar.', 'A Landfall descreve a rotina, não um status ao vivo de PEAK.'],
            ['2', 'Estabilidade da conexão', 'Confira outros usos da rede; reinicie o roteador apenas se estiver instável.', 'Melhorar após reiniciar é uma observação, não uma causa confirmada.'],
            ['3', 'Amizades e privacidade Steam', 'Confira se todos são amigos no Steam e revise perfis Somente amigos.', 'A Landfall diz que isso pode contribuir, não que explique todos os erros.'],
            ['4', 'Outros programas', 'Feche programas que possam interferir e repita o mesmo teste.', 'Reabra ferramentas necessárias para acessibilidade ou segurança.'],
            ['5', 'Arquivos e mods', 'Verifique arquivos de PEAK no Steam; remova mods e resíduos como BepInEx por completo.', 'Faça backup da configuração e não apague arquivos alheios.'],
            ['6', 'Firewall ou antivírus', 'Use uma exceção específica para PEAK se identificar a entrada correta.', 'Não desligue toda a proteção como correção geral.'],
            ['7', 'cFosSpeed, MLO ou VPN', 'Teste apenas opções presentes e reversíveis, uma por vez.', 'A Landfall apresenta relatos e testes condicionais.'],
            ['8', 'Ajuda da Landfall', 'Se persistir, siga a página oficial e o canal atual de suporte.', 'Prefira as instruções atuais do desenvolvedor a vídeos antigos.'],
          ],
        },
      },
      {
        title: 'O que ClientTimeout e ServerTimeout não provam',
        paragraphs: [
          'Um rótulo de tempo limite indica que o jogo não concluiu uma etapa de conexão no tempo esperado. A FAQ pública da Landfall lista verificações, mas não publica um mapeamento específico de causas de ClientTimeout ou ServerTimeout em PEAK. A mensagem sozinha não prova falha no roteador, indisponibilidade da Photon ou erro em uma configuração do Windows.',
          'Guarde o texto exato e anote o que fazia antes: criar sala, aceitar convite, digitar código ou já jogar com o grupo. Registre se ocorreu com o anfitrião ou com quem entrou, se os outros ficaram na sala e se uma nova tentativa mudou algo. Isso ajuda mais o suporte do que dizer “os servidores estão quebrados”, pois mantém observações sem transformar hipótese em fato.',
          `Se o problema acontece ao entrar na partida de um amigo, consulte o ${link('room-codes', 'guia de códigos e entrada cooperativa de PEAK')} sobre convites Steam, JOIN GAME, códigos e privacidade da sala. Aquele guia trata da entrada; este trata dos sintomas Photon.`,
        ],
        bullets: [
          ['Antes do erro', 'Criar sala, aceitar convite, digitar código ou já estar escalando.'],
          ['Quem foi afetado', 'Anfitrião, um jogador que entrou ou todo o grupo.'],
          ['Texto exato', 'Não reescreva ClientTimeout como queda confirmada do servidor.'],
          ['Uma alteração por teste', 'Anote a configuração e restaure se não ajudar.'],
        ],
      },
      {
        title: 'Testes relatados por jogadores: VPN, MLO e cFosSpeed',
        paragraphs: [
          'A FAQ da Landfall também reúne relatos. Outros jogadores disseram que melhoraram ao desinstalar cFosSpeed ou desativar Multi-Link Operation (MLO) no roteador; a FAQ também sugere testar PEAK com e sem VPN. São pistas condicionais, não uma afirmação de que uma delas seja a causa universal.',
          'Se tiver cFosSpeed, confirme o programa e consulte as instruções do fornecedor ou da placa-mãe antes de alterá-lo. Se testar MLO, anote o valor original e restaure se não ajudar. Quem já usa VPN pode comparar uma sessão ligada e outra desligada; não instale uma VPN desconhecida nem mantenha uma mudança de rota só porque um vídeo recomendou.',
          'A Landfall também diz que alguns provedores podem bloquear endereços necessários ao Photon e recomenda consultar a operadora; relata que VPN ajudou alguns jogadores. Isso é uma possibilidade relatada, não uma conclusão sobre seu provedor. Consulte a operadora ou o suporte oficial antes de mudar a segurança da rede ou comprar um serviço.',
        ],
        table: {
          caption: 'Separe relatos de jogadores de soluções universais',
          headers: ['Checagem', 'Status da fonte', 'Limite prático'],
          rows: [
            ['cFosSpeed', 'A Landfall diz que alguns jogadores relataram melhora ao desinstalar.', 'Confirme se está instalado; não remova outros drivers por tentativa.'],
            ['MLO do roteador', 'A Landfall cita relatos de melhora após desativá-lo.', 'Teste temporário se souber restaurar o ajuste original.'],
            ['VPN ligada ou desligada', 'A Landfall sugere comparar as duas opções e cita relatos positivos.', 'Use apenas um serviço já confiável; não prova bloqueio regional.'],
            ['Restrição do provedor', 'A Landfall menciona possíveis bloqueios por alguns provedores.', 'Pergunte à operadora; não afirme bloqueio sem confirmação.'],
          ],
        },
      },
      {
        title: 'O que incluir em um relato útil ao suporte de PEAK',
        paragraphs: [
          'Se as verificações oficiais não mudarem o resultado, envie um relato breve pelo canal atual da Landfall ou pela discussão Steam adequada. Inclua a versão mostrada no cliente, data, horário aproximado e fuso, mensagem completa e etapa em que apareceu. Diga se afetou o anfitrião, alguém que entrou ou todo o grupo, e se vocês usaram convite Steam ou código.',
          'Liste somente os testes realmente feitos e o resultado de cada um. Mencione mods, VPN, regra de firewall, cFosSpeed ou MLO apenas quando fizerem parte da sua configuração. Uma captura pode ajudar, mas corte nomes de conta, conversas privadas, convites, códigos e outros dados pessoais antes de publicar. Nunca anexe senhas ou tokens.',
          'Um bom relato separa observação e interpretação: “ClientTimeout depois de JOIN GAME às 20:15 UTC; os outros dois jogadores ficaram na sala” é mais útil que “Photon está quebrado”. A Landfall é a fonte dos passos oficiais; discussões da Steam Community mostram experiências, não confirmam a causa da sua sessão.',
        ],
        bullets: [
          ['Sintoma exato', 'Mensagem, etapa, data, horário e fuso.'],
          ['Contexto da sala', 'Anfitrião ou participante, alcance e convite ou código.'],
          ['Alterações testadas', 'Somente checagens feitas e respectivos resultados.'],
          ['Privacidade', 'Oculte códigos, dados da conta, chats, senhas e tokens.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Respostas rápidas',
      title: 'FAQ de erros Photon em PEAK',
      items: [
        ['Como corrigir “Disconnected from Photon” em PEAK?', 'Comece pela FAQ da Landfall: manutenção do Steam, estabilidade, amizades e privacidade, outros programas, arquivos, mods e exceções de segurança. Deixe roteador ou VPN como testes condicionais. Mude uma coisa por vez; não existe correção garantida.'],
        ['ClientTimeout significa que PEAK está fora do ar?', 'A mensagem não prova uma queda geral. A FAQ pública não associa ClientTimeout a uma única causa. Anote a etapa, consulte a manutenção oficial e compare com os outros jogadores.'],
        ['PEAK ou Steam fica fora do ar toda terça-feira?', 'A Landfall informa manutenção rotineira dos servidores Steam toda terça. A FAQ não dá uma duração única nem atribui todo erro Photon à manutenção. Tente de novo depois e registre o resultado.'],
        ['Mods de PEAK podem causar desconexão Photon?', 'A Landfall recomenda remover mods completamente, inclusive resíduos BepInEx, ao investigar desconexões. Compare primeiro com uma instalação sem mods antes de culpar um mod específico.'],
        ['Devo ligar ou desligar a VPN para PEAK?', 'A Landfall sugere comparar os dois estados e cita relatos de melhora. É um teste condicional, não um diagnóstico. Não instale VPN desconhecida nem altere segurança sem entender o efeito.'],
        ['Devo desligar MLO ou remover cFosSpeed?', 'A Landfall reúne relatos, não uma solução universal. Teste apenas se isso existir na sua configuração, anote o estado e restaure se não houver melhora.'],
        ['Erro de código de sala é igual a erro Photon?', 'Não necessariamente. Código ou convite pertencem ao acesso à sala; Photon descreve um sintoma de conexão. Veja o guia de códigos e registre separadamente a mensagem Photon.'],
      ],
    },
    source: {
      eyebrow: 'Orientação oficial e relatos de jogadores',
      title: 'O que este guia de conexão de PEAK pode confirmar',
      body: 'A FAQ de PEAK da Landfall é a fonte principal para contexto do Photon, manutenção Steam de terça e verificações publicadas. Ela apresenta cFosSpeed, MLO, VPN e restrições do provedor como relatos ou possibilidades condicionais; este guia mantém essa diferença. Uma discussão Steam Community é apenas um relato de jogador, não uma confirmação oficial nem uma correção universal.',
      links: [
        ['FAQ de PEAK da Landfall e conexão', 'https://landfall.se/peak-faq'],
        ['Solução de problemas da Landfall', 'https://landfall.se/troubleshooting'],
        ['Página oficial de PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community: relato de erro Photon', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'Ver códigos de PEAK e como entrar em uma partida'],
      ['peak-game-tips', 'Ler dicas cooperativas de PEAK'],
      ['peak-game-update', 'Consultar atualizações de PEAK'],
    ],
    relatedLabel: 'Guias de conexão e cooperativo de PEAK',
  },
  ko: {
    meta: {
      title: 'PEAK Photon 연결 끊김과 ClientTimeout 해결 가이드',
      description: 'PEAK에서 Photon 연결 끊김이나 ClientTimeout이 표시될 때 Landfall 공식 점검 순서와 플레이어 경험을 구분해 확인하세요.',
      schema: 'PEAK Photon 연결 끊김, ClientTimeout, 공식 점검, 플레이어 보고 및 지원 요청 정보를 다루는 출처 기반 가이드.',
    },
    primaryKeyword: 'PEAK Photon 연결 끊김 오류',
    eyebrow: '연결 문제 점검 - 한 번에 한 가지씩 확인',
    h1: 'PEAK Photon 연결 끊김과 ClientTimeout 해결 가이드',
    intro: `PEAK에 “Disconnected from Photon”이 표시되면 협동 연결이 끊겼다는 뜻이지만 원인까지 알려 주지는 않습니다. 로비에 들어가는 방법은 ${link('room-codes', 'PEAK 방 코드 및 협동 플레이 가이드')}를 확인하세요. 이 페이지는 오류 자체를 다룹니다. Steam 정기 점검과 공식 확인 항목부터 살펴보고 VPN이나 공유기 관련 플레이어 보고를 확정된 해결책으로 취급하지 않습니다.`,
    answerLabel: '먼저 답하면',
    answer: '정확한 오류 문구와 발생 시각부터 기록하세요. Landfall의 현재 PEAK FAQ는 매주 화요일 Steam 정기 점검을 알리고 방화벽·백신 예외, 게임 파일, 연결 안정성, 다른 실행 프로그램, 모드, 공유기, cFosSpeed, Steam 친구 및 프로필 공개 범위, VPN을 점검하도록 안내합니다. 한 번에 하나만 바꾸고 같은 파티로 다시 테스트하세요. Photon 오류만으로 PEAK 전체 장애, ISP 차단, 특정 설정의 효과를 증명할 수는 없습니다.',
    tocLabel: '목차',
    tocFaq: 'Photon 문제 FAQ',
    heroImage: media('PEAK 정찰대가 섬 경로를 함께 오르는 Steam 공식 스크린샷', 'Steam 공식 스크린샷은 협동 플레이 맥락을 보여줄 뿐 Photon 오류나 네트워크 상태를 나타내지 않습니다.'),
    sections: [
      {
        title: 'PEAK의 “Disconnected from Photon”은 무엇을 뜻하나요?',
        paragraphs: [
          'Landfall은 PEAK가 서버 릴레이에 Photon을 사용한다고 설명합니다. “Disconnected from Photon”이 표시되면 협동 세션이 Photon 릴레이 연결을 잃었다는 점은 알 수 있습니다. 하지만 이 문구만으로는 원인을 진단할 수 없습니다. Steam 점검, 로컬 네트워크, 파티원의 개인정보 설정, 방화벽, 모드 또는 서비스 상태 중 무엇이 영향을 줬는지는 표시하지 않습니다.',
          '오류 이름은 연결 과정의 서로 다른 시점에 나올 수 있습니다. “Failed to connect to Photon Network”나 “Failed to connect to Room”은 연결을 만들 때 표시될 수 있고, “Disconnected from Photon”은 연결이 끊긴 상황을 나타냅니다. “ClientTimeout”은 게임에 표시되는 시간 초과 문구입니다. 공개된 PEAK FAQ는 각 문구를 하나의 원인과 연결하지 않으므로 그대로 기록하고 추측하지 마세요.',
          '먼저 같은 로비의 모두가 동시에 실패했는지 한 명만 연결이 끊겼는지 비교합니다. 파티 전체가 동시에 실패했다면 시각을 기록하고 공식 점검 안내를 확인하세요. 한 명만 끊긴다면 그 플레이어의 파일, 모드, 연결, 방화벽, Steam 친구 관계부터 확인합니다. 이 패턴은 다음 점검을 고르는 데 도움이 되지만 원인을 증명하지는 않습니다.',
        ],
        table: {
          caption: '화면의 PEAK 오류를 원인 증명이 아닌 단서로 사용하세요',
          headers: ['문구 또는 상황', '확인되는 사실', '확인되지 않는 것', '다음 점검'],
          rows: [
            ['Disconnected from Photon', '협동 세션이 Photon 릴레이 연결을 잃었습니다.', '전체 장애, ISP 차단, 특정 설정이 원인이라고 단정할 수 없습니다.', '발생 시각과 파티에서 영향을 받은 사람을 기록합니다.'],
            ['Failed to connect to Photon Network / Room', '네트워크나 방 연결이 완료되지 않았습니다.', 'Steam 점검, 로컬 네트워크, 로비 조건을 구분하지 못합니다.', '공식 점검, 연결 상태, Steam 친구를 확인합니다.'],
            ['ClientTimeout', '게임이 클라이언트 시간 초과 문구를 표시했습니다.', '공개 FAQ는 하나의 원인을 지정하지 않습니다.', '문구, 단계, 시각을 남깁니다.'],
            ['한 명만 연결 끊김', '이번 시도에서는 한 명에게만 증상이 나타났습니다.', '그 사람의 장치나 ISP가 문제라고 증명하지 않습니다.', '모드, 파일, 방화벽, 네트워크, Steam 프로필을 비교합니다.'],
            ['여러 명이 동시에 실패', '파티에서 같은 시간대의 실패를 확인했습니다.', 'PEAK 전체 장애라는 증거는 아닙니다.', '시각을 비교하고 점검 이후 다시 시도합니다.'],
          ],
        },
      },
      {
        title: '공유기 설정을 바꾸기 전에 확인할 항목',
        paragraphs: [
          '먼저 Landfall의 최신 FAQ를 확인하세요. Steam 서버는 매주 화요일 정기 점검을 위해 오프라인이 된다고 안내합니다. 오류가 이 시간과 겹치면 점검이 끝난 뒤 다시 테스트하세요. 한 번의 로비 실패만으로 PEAK 서버 장애를 주장할 수 없으며 FAQ도 매 점검의 고정 시간을 약속하지 않습니다.',
          '점검 시간이 아니라면 간단한 조건부터 확인합니다. 연결이 안정적인지, 간섭할 수 있는 프로그램이 있는지 보고 문제가 계속될 때 컴퓨터를 재시작하세요. 같은 파티로 반복해 모두 실패하는지 매번 같은 플레이어가 끊기는지 적습니다. 원인을 지어내지 않고 다음 장치나 계정 설정 점검을 고를 수 있습니다.',
          '그다음에는 한 번에 설정 하나만 바꾸고 같은 입장 방법으로 다시 시도하세요. 보안 프로그램, 공유기, 모드, VPN을 한꺼번에 바꾸면 연결이 돌아와도 어떤 변경이 도움이 됐는지 알 수 없습니다. 효과가 없던 임시 설정은 원래대로 복구하세요.',
        ],
        image: routeMedia('어려운 섬 경로를 오르는 PEAK 탐험대의 Steam 공식 스크린샷', 'Steam 공식 플레이 장면입니다. 오류를 보고할 때에는 본인 게임에 표시된 정확한 Photon 문구를 따로 제공하세요.'),
        table: {
          caption: 'Landfall이 공개한 Photon 점검을 저위험부터 조건부 변경 순으로 정리',
          headers: ['순서', '점검', '테스트 방법', '근거의 한계'],
          rows: [
            ['1', 'Steam 점검', '화요일 정기 점검과 겹치는지 확인하고 끝난 뒤 다시 시도합니다.', '공식 안내는 정기 점검이며 PEAK 실시간 상태 정보는 아닙니다.'],
            ['2', '연결 안정성', '다른 네트워크 사용을 확인하고 불안정한 경우에만 공유기를 재시작합니다.', '재시작 후 개선돼도 원인 확정은 아닙니다.'],
            ['3', 'Steam 친구와 공개 범위', '로비 구성원이 Steam 친구인지, 친구 공개 프로필인지 확인합니다.', 'Landfall은 가능한 요인으로 안내하며 모든 오류의 원인으로 말하지 않습니다.'],
            ['4', '다른 프로그램', '간섭 가능성이 있는 프로그램을 닫고 같은 로비를 다시 테스트합니다.', '접근성·보안 도구는 테스트 후 다시 실행하세요.'],
            ['5', '게임 파일과 모드', 'Steam에서 파일을 확인하고 BepInEx 잔여 파일을 포함해 모드를 완전히 제거합니다.', '개인 설정을 백업하고 관련 없는 파일은 삭제하지 않습니다.'],
            ['6', '방화벽 또는 백신', '올바른 PEAK 항목을 식별할 수 있을 때 전용 허용 예외를 설정합니다.', '보호 기능 전체를 끄지 마세요.'],
            ['7', 'cFosSpeed, MLO 또는 VPN', '현재 사용하는 설정 중 되돌릴 수 있는 것만 하나씩 테스트합니다.', 'Landfall은 보고되거나 조건부인 점검으로 소개합니다.'],
            ['8', 'Landfall 문제 해결', '계속되면 공식 문제 해결 페이지와 현재 지원 경로를 따릅니다.', '오래된 영상보다 현재 개발자 안내를 우선합니다.'],
          ],
        },
      },
      {
        title: 'ClientTimeout과 ServerTimeout이 증명하지 않는 것',
        paragraphs: [
          '시간 초과 문구는 게임이 예상된 시간 안에 연결 단계를 마치지 못했다는 뜻입니다. Landfall 공개 FAQ는 점검 항목을 안내하지만 PEAK의 ClientTimeout이나 ServerTimeout을 특정 원인과 연결한 표를 공개하지 않았습니다. 이 문구만으로 공유기 고장, Photon 중단, 특정 Windows 설정 문제를 증명할 수 없습니다.',
          '정확한 문구와 바로 전 행동을 기록하세요. 로비를 만들던 중인지, 초대를 수락했는지, 방 코드를 입력했는지, 이미 파티와 플레이 중이었는지를 남깁니다. 호스트와 참가자 중 누가 봤는지, 다른 플레이어는 로비에 남았는지, 다시 시도했을 때 바뀐 점이 있었는지도 중요합니다. “서버가 고장 났다”는 단정보다 이런 관찰이 지원에 유용합니다.',
          `친구 게임에 들어가는 단계가 문제라면 Steam 초대, JOIN GAME, 방 코드, 로비 공개 범위를 설명하는 ${link('room-codes', 'PEAK 방 코드 및 협동 참가 가이드')}를 보세요. 그 페이지는 참가 절차를 다루고 이 페이지는 Photon 연결 증상을 다룹니다.`,
        ],
        bullets: [
          ['오류 직전 행동', '로비 생성, 초대 수락, 코드 입력, 이미 플레이 중.'],
          ['영향을 받은 사람', '호스트, 참가자 한 명, 같은 시도의 파티 전체.'],
          ['정확한 문구', 'ClientTimeout을 확인되지 않은 서버 장애로 바꾸어 말하지 않습니다.'],
          ['한 번에 변경 하나', '설정을 기록하고 차이가 없으면 되돌립니다.'],
        ],
      },
      {
        title: '플레이어가 보고한 점검: VPN, MLO, cFosSpeed',
        paragraphs: [
          'Landfall FAQ에는 플레이어 경험도 실려 있습니다. cFosSpeed를 삭제하거나 공유기의 Multi-Link Operation(MLO)을 끈 뒤 개선됐다는 보고가 있으며 PEAK를 VPN을 켜거나 끈 상태에서 시도하라고 안내합니다. 이는 조건부 점검이며 모든 사람에게 해당 설정이 원인이라는 뜻은 아닙니다.',
          'cFosSpeed가 설치돼 있다면 프로그램을 확인하고 변경 전에 제조사 또는 메인보드 공급업체 안내를 읽으세요. MLO를 시험할 때는 원래 값을 기록하고 도움이 없으면 복구합니다. 이미 VPN을 쓰는 사람은 켠 상태와 끈 상태를 비교할 수 있지만, 영상 추천만 보고 알 수 없는 VPN을 설치하거나 네트워크 경로 변경을 계속 유지하지 마세요.',
          'Landfall은 일부 인터넷 제공업체가 Photon에 필요한 주소를 막을 수 있다며 업체 문의를 권하고, VPN이 일부 플레이어에게 도움이 됐다고 적습니다. 이는 보고된 가능성이지 현재 ISP에 대한 확인은 아닙니다. 네트워크 보안을 바꾸거나 서비스를 구매하기 전에 ISP 또는 공식 지원에 문의하세요.',
        ],
        table: {
          caption: '플레이어 보고와 보편적인 해결법을 구분합니다',
          headers: ['점검', '출처 상태', '실제 적용 범위'],
          rows: [
            ['cFosSpeed', 'Landfall은 삭제 후 개선됐다는 플레이어 보고를 전합니다.', '설치 여부를 확인하고 관련 없는 드라이버를 추측해 삭제하지 않습니다.'],
            ['공유기 MLO', 'Landfall은 끈 뒤 도움이 됐다는 보고를 전합니다.', '원래 설정을 되돌릴 수 있을 때만 임시 비교를 합니다.'],
            ['VPN 켜기 또는 끄기', 'Landfall은 양쪽을 시험하라고 하고 개선 보고를 언급합니다.', '이미 신뢰하는 서비스만 사용하며 지역 차단 증거로 보지 않습니다.'],
            ['ISP 제한', 'Landfall은 일부 제공업체에서 가능성이 있다고 설명합니다.', '확인 전에는 차단이라 단정하지 말고 업체에 문의합니다.'],
          ],
        },
      },
      {
        title: 'PEAK 지원 문의에 포함하면 좋은 정보',
        paragraphs: [
          '공식 점검으로 바뀌지 않는다면 Landfall의 현재 지원 경로 또는 관련 Steam 토론에 간단히 보고하세요. 클라이언트에 표시된 게임 버전, 날짜와 대략적인 시각 및 시간대, 정확한 오류 문구, 발생 단계를 적습니다. 호스트, 참가자 한 명, 파티 전체 중 누가 영향을 받았는지, Steam 초대와 방 코드 중 어떤 방식이었는지도 기록합니다.',
          '실제로 시험한 항목과 결과만 적으세요. 모드, VPN, 방화벽 규칙, cFosSpeed, MLO는 본인 환경에 해당할 때만 언급합니다. 화면 캡처가 도움이 될 수 있지만 공개하기 전에 계정 이름, 개인 채팅, 초대나 방 코드, 개인정보를 잘라내거나 가리세요. 비밀번호와 토큰을 첨부하지 않습니다.',
          '사실과 해석을 구분한 보고가 더 유용합니다. “20:15 UTC에 JOIN GAME 직후 ClientTimeout이 표시됐고 다른 두 명은 로비에 남았다”는 “Photon이 고장 났다”보다 조사하기 쉽습니다. 공식 절차는 Landfall을 따르고 Steam Community 글은 유사한 플레이 경험이지 세션 원인의 확인이 아닙니다.',
        ],
        bullets: [
          ['정확한 증상', '문구, 발생 단계, 날짜, 시각, 시간대.'],
          ['로비 맥락', '호스트 또는 참가자, 영향 범위, 초대 또는 코드.'],
          ['시험한 변경', '실제로 수행한 점검과 결과만.'],
          ['개인정보', '코드, 계정 정보, 개인 채팅, 비밀번호, 토큰을 숨깁니다.'],
        ],
      },
    ],
    faq: {
      eyebrow: '빠른 답변',
      title: 'PEAK Photon 오류 FAQ',
      items: [
        ['PEAK “Disconnected from Photon”은 어떻게 해결하나요?', 'Landfall FAQ에 따라 Steam 점검, 연결 안정성, 친구와 공개 범위, 다른 프로그램, 파일, 모드, 보안 예외를 먼저 확인하세요. 공유기나 VPN은 조건부로 시험하고 한 번에 하나만 바꿉니다. 확실히 보장된 해결법은 없습니다.'],
        ['ClientTimeout은 PEAK 서버가 다운됐다는 뜻인가요?', '문구만으로 전체 장애를 증명하지 않습니다. 공개 FAQ는 하나의 원인으로 연결하지 않습니다. 발생 단계를 기록하고 공식 점검 정보와 다른 파티원의 상황을 비교하세요.'],
        ['PEAK이나 Steam은 매주 화요일에 중단되나요?', 'Landfall은 매주 화요일 Steam 정기 점검을 안내합니다. 매번의 시간은 고정되어 있지 않고 모든 Photon 오류가 그 때문이라고 하지도 않습니다. 점검 뒤 다시 시도하고 결과를 기록하세요.'],
        ['PEAK 모드가 Photon 연결 끊김을 일으킬 수 있나요?', 'Landfall은 연결 문제를 조사할 때 BepInEx 잔여 파일까지 포함해 모드를 완전히 제거하라고 권합니다. 특정 모드를 원인으로 단정하기 전에 모드 없는 환경과 비교하세요.'],
        ['PEAK에서 VPN을 켜야 하나요, 꺼야 하나요?', 'Landfall은 양쪽 상태를 비교하고 일부 플레이어가 개선됐다고 적습니다. 이는 조건부 시험이지 진단은 아닙니다. 알 수 없는 VPN을 설치하거나 영향이 불분명한 보안 설정을 바꾸지 마세요.'],
        ['MLO를 끄거나 cFosSpeed를 제거해야 하나요?', 'Landfall은 플레이어 보고를 소개할 뿐 보편적인 해결책은 아닙니다. 실제 설정에 해당하고 복원할 수 있을 때만 시험하고 개선되지 않으면 되돌리세요.'],
        ['PEAK 방 코드 오류와 Photon 오류는 같은 문제인가요?', '반드시 같지는 않습니다. 방 코드와 초대는 로비 참가 과정이고 Photon 표시는 연결 증상입니다. 방 코드 가이드에서 입장 방법을 확인하고 Photon 문구는 별도로 기록하세요.'],
      ],
    },
    source: {
      eyebrow: '공식 안내와 플레이어 보고',
      title: '이 PEAK 연결 가이드가 확인하는 범위',
      body: 'Landfall의 PEAK FAQ는 Photon 릴레이 맥락, 화요일 Steam 점검, 공개된 점검 항목의 주요 출처입니다. cFosSpeed, MLO, VPN, ISP 제한은 보고 또는 조건부 가능성으로 설명되며 이 가이드도 그 차이를 유지합니다. Steam Community 토론은 플레이어 보고로만 연결하고 공식 확인이나 보편적인 해결법으로 취급하지 않습니다.',
      links: [
        ['Landfall PEAK FAQ 및 연결 점검', 'https://landfall.se/peak-faq'],
        ['Landfall 문제 해결', 'https://landfall.se/troubleshooting'],
        ['PEAK 공식 Steam 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community Photon 오류 보고', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'PEAK 방 코드와 협동 참가 방법 보기'],
      ['peak-game-tips', 'PEAK 협동 플레이 팁 읽기'],
      ['peak-game-update', 'PEAK 업데이트 확인하기'],
    ],
    relatedLabel: 'PEAK 연결 및 협동 가이드',
  },
  it: {
    meta: {
      title: 'Errore PEAK: disconnesso da Photon - guida ClientTimeout',
      description: 'Errore PEAK: disconnesso da Photon o ClientTimeout? Segui i controlli Landfall e distingui le indicazioni ufficiali dai resoconti dei giocatori.',
      schema: 'Guida PEAK agli errori Photon con ClientTimeout, controlli ufficiali, segnalazioni dei giocatori e informazioni utili al supporto.',
    },
    primaryKeyword: 'errore PEAK: disconnesso da Photon',
    eyebrow: 'Problemi di connessione - verifica una causa alla volta',
    h1: 'Errore PEAK: disconnesso da Photon - guida ClientTimeout',
    intro: `Se PEAK mostra “Disconnected from Photon”, conferma che la connessione cooperativa si è interrotta, ma non ne identifica la causa. Per entrare in una lobby consulta la ${link('room-codes', 'guida PEAK ai codici stanza e alla cooperativa')}. Questa pagina si concentra sull’errore: controlla la manutenzione Steam e la lista ufficiale, trattando VPN e router come prove condizionali, non come soluzioni garantite.`,
    answerLabel: 'Risposta breve',
    answer: 'Per prima cosa annota il messaggio esatto e quando appare. La FAQ PEAK attuale di Landfall segnala la manutenzione regolare di Steam ogni martedì e consiglia di controllare eccezioni di firewall e antivirus, file di gioco, stabilità della connessione, altri programmi, mod, router, cFosSpeed, amicizie e privacy del profilo Steam, oltre alla VPN. Modifica una sola cosa e riprova con lo stesso gruppo. Un errore Photon non dimostra un’interruzione generale di PEAK, un blocco del provider o l’efficacia certa di una specifica impostazione.',
    tocLabel: 'In questa pagina',
    tocFaq: 'FAQ Photon',
    heroImage: media('Esploratori PEAK coordinano una scalata cooperativa, schermata ufficiale Steam', 'Schermata ufficiale Steam: mostra il contesto cooperativo, non un errore Photon né lo stato della rete.'),
    sections: [
      {
        title: 'Che cosa significa “Disconnected from Photon” in PEAK',
        paragraphs: [
          'Landfall spiega che PEAK usa Photon come relay del server. Se il gioco mostra “Disconnected from Photon”, la sessione cooperativa ha perso quella connessione relay. Il messaggio è un indizio, non una diagnosi: non dice se l’interruzione dipenda dalla manutenzione Steam, dalla rete locale, dalla privacy di un membro, dal firewall, da una mod o dal servizio.',
          'Le etichette possono comparire in fasi diverse. “Failed to connect to Photon Network” o “Failed to connect to Room” può apparire mentre si crea la connessione; “Disconnected from Photon” descrive un’interruzione; “ClientTimeout” è la dicitura di timeout mostrata dal gioco. La FAQ pubblica di PEAK non associa ogni testo a una sola causa. Conserva la dicitura esatta invece di indovinarla.',
          'Controlla prima se fallisce l’intero gruppo nello stesso momento o se si disconnette una sola persona. Se succede a tutti, annota l’orario e verifica l’avviso ufficiale sulla manutenzione. Se cade un solo giocatore, inizia dai suoi file, mod, rete, firewall e rapporto di amicizia Steam con la lobby. Il modello orienta il controllo successivo ma non prova la causa.',
        ],
        table: {
          caption: 'Usa il messaggio PEAK visibile come indizio, non come prova della causa',
          headers: ['Messaggio o schema', 'Che cosa conferma', 'Che cosa non conferma', 'Controllo successivo'],
          rows: [
            ['Disconnected from Photon', 'La sessione cooperativa ha perso la connessione relay Photon.', 'Non conferma un guasto generale, un blocco ISP o una singola impostazione.', 'Annota l’ora e chi era coinvolto.'],
            ['Failed to connect to Photon Network o Room', 'Il tentativo di connessione a rete o stanza non è terminato.', 'Non distingue manutenzione, rete locale o condizioni della lobby.', 'Controlla manutenzione, connessione e amicizie Steam.'],
            ['ClientTimeout', 'Il gioco ha mostrato una dicitura di timeout del client.', 'La FAQ pubblica non indica una causa unica.', 'Conserva testo, fase e orario.'],
            ['Si disconnette una persona', 'In quel tentativo il sintomo riguarda un membro.', 'Non prova che il suo dispositivo o provider sia responsabile.', 'Confronta mod, file, firewall, rete e profilo Steam.'],
            ['Più giocatori falliscono insieme', 'Il gruppo ha osservato lo stesso intervallo di errore.', 'Non prova da solo un’interruzione generale di PEAK.', 'Confronta gli orari e riprova dopo la manutenzione.'],
          ],
        },
      },
      {
        title: 'Che cosa controllare prima di cambiare il router',
        paragraphs: [
          'Inizia dalla FAQ attuale di Landfall. Indica che i server Steam sono offline per manutenzione ordinaria ogni martedì. Se l’errore coincide, aspetta che termini e riprova: un singolo ingresso fallito non prova che PEAK sia offline. La FAQ non garantisce una durata fissa per ogni manutenzione.',
          'Fuori da quella finestra verifica prima condizioni semplici: stabilità della rete, programmi che potrebbero interferire e riavvio del computer se il problema continua. Ripeti la prova con lo stesso gruppo e annota se falliscono tutti o se cade sempre la stessa persona. Il confronto aiuta a scegliere il prossimo controllo senza inventare una causa.',
          'Poi modifica un solo elemento per prova e usa lo stesso metodo di ingresso. Non disattivare insieme la protezione, cambiare il router, rimuovere mod e commutare la VPN: se funziona non saprai quale modifica ha contato. Ripristina gli aggiustamenti temporanei che non aiutano.',
        ],
        image: routeMedia('Schermata ufficiale Steam di esploratori PEAK su una difficile rotta dell’isola', 'Schermata ufficiale Steam come contesto di gioco; nel report aggiungi il messaggio Photon mostrato dal tuo client.'),
        table: {
          caption: 'Controlli Photon pubblicati da Landfall, da quelli reversibili alle prove condizionali',
          headers: ['Ordine', 'Controllo', 'Come provarlo', 'Limite delle prove'],
          rows: [
            ['1', 'Manutenzione Steam', 'Controlla la manutenzione del martedì e riprova al termine.', 'Landfall descrive la routine, non lo stato PEAK in tempo reale.'],
            ['2', 'Stabilità della rete', 'Controlla altri usi della rete; riavvia il router solo se è instabile.', 'Un miglioramento dopo il riavvio è un’osservazione, non una causa certa.'],
            ['3', 'Amicizie e privacy Steam', 'Controlla che i membri siano amici su Steam e le impostazioni Solo amici.', 'Landfall lo indica come possibile fattore, non come spiegazione universale.'],
            ['4', 'Altri programmi', 'Chiudi software potenzialmente interferenti e ripeti lo stesso test.', 'Riapri gli strumenti necessari per accessibilità o sicurezza.'],
            ['5', 'File e mod', 'Verifica i file PEAK su Steam; rimuovi mod e residui come BepInEx.', 'Fai un backup delle configurazioni personali e non eliminare file estranei.'],
            ['6', 'Firewall o antivirus', 'Usa un’eccezione PEAK specifica se riconosci la voce corretta.', 'Non disattivare tutta la protezione.'],
            ['7', 'cFosSpeed, MLO o VPN', 'Prova solo impostazioni presenti e ripristinabili, una per volta.', 'Landfall le descrive come report o controlli condizionali.'],
            ['8', 'Supporto Landfall', 'Se persiste, segui la pagina ufficiale e il canale di supporto attuale.', 'Preferisci le indicazioni attuali a vecchi video.'],
          ],
        },
      },
      {
        title: 'Che cosa non dimostrano ClientTimeout e ServerTimeout',
        paragraphs: [
          'Un timeout indica che il gioco non ha completato un passaggio di connessione nel tempo previsto. La FAQ pubblica di Landfall elenca controlli, ma non pubblica una mappa specifica di PEAK che associ ClientTimeout o ServerTimeout a una causa. Il testo da solo non dimostra un router guasto, Photon non disponibile o un’impostazione errata di Windows.',
          'Conserva il messaggio esatto e annota cosa stavi facendo: creazione della lobby, accettazione di un invito, inserimento del codice o partita già avviata. Indica se è capitato all’host o a un partecipante, se gli altri sono rimasti e se un nuovo tentativo ha cambiato il risultato. Sono dettagli più utili di “i server sono rotti” perché mantengono i fatti separati dalle ipotesi.',
          `Se il problema è entrare nella partita di un amico, consulta la ${link('room-codes', 'guida PEAK ai codici stanza e all’accesso cooperativo')} per inviti Steam, JOIN GAME, codici e privacy lobby. Quella pagina spiega l’ingresso; questa tratta i sintomi Photon.`,
        ],
        bullets: [
          ['Prima dell’errore', 'Creazione lobby, invito, codice o partita già in corso.'],
          ['Chi è coinvolto', 'Host, un partecipante o l’intero gruppo.'],
          ['Testo esatto', 'Non trasformare ClientTimeout in una conferma di guasto server.'],
          ['Una modifica per prova', 'Annota l’impostazione e ripristinala se non aiuta.'],
        ],
      },
      {
        title: 'Prove segnalate dai giocatori: VPN, MLO e cFosSpeed',
        paragraphs: [
          'La FAQ di Landfall riporta anche esperienze di giocatori. Alcuni dicono di aver risolto disinstallando cFosSpeed o disattivando Multi-Link Operation (MLO) sul router; la FAQ suggerisce inoltre di provare PEAK con e senza VPN. Sono piste condizionali, non la prova che una di esse sia la causa per tutti.',
          'Se cFosSpeed è installato, identifica il programma e consulta le istruzioni del produttore o della scheda madre prima di intervenire. Per MLO annota l’impostazione originale e ripristinala se non aiuta. Se già usi una VPN, confronta una sessione con e una senza; non installare una VPN sconosciuta né mantenere un cambio di percorso solo perché lo consiglia un video.',
          'Landfall dice anche che alcuni provider possono bloccare indirizzi necessari a Photon e consiglia di chiedere al gestore; riferisce che una VPN ha aiutato alcuni giocatori. È una possibilità segnalata, non una conclusione sul tuo provider. Chiedi conferma all’ISP o al supporto ufficiale prima di cambiare sicurezza o acquistare un servizio.',
        ],
        table: {
          caption: 'Distingui i report dei giocatori dalle soluzioni universali',
          headers: ['Controllo', 'Stato della fonte', 'Limite pratico'],
          rows: [
            ['cFosSpeed', 'Landfall riporta giocatori aiutati dalla disinstallazione.', 'Verifica che sia installato; non rimuovere driver a caso.'],
            ['MLO del router', 'Landfall riporta miglioramenti dopo averlo disattivato.', 'Prova temporanea solo se sai ripristinare il valore.'],
            ['VPN attiva o meno', 'Landfall suggerisce entrambe le prove e cita esperienze positive.', 'Usa solo un servizio già affidabile; non prova un blocco regionale.'],
            ['Restrizione ISP', 'Landfall menziona possibili blocchi di alcuni provider.', 'Chiedi al gestore; non dichiarare il blocco senza conferma.'],
          ],
        },
      },
      {
        title: 'Che cosa includere in una segnalazione utile a PEAK',
        paragraphs: [
          'Se i controlli ufficiali non cambiano il risultato, invia un rapporto breve al canale attuale di Landfall o alla discussione Steam pertinente. Includi la versione mostrata dal client, data e ora approssimativa con fuso, testo completo e fase in cui appare. Specifica se è coinvolto l’host, un partecipante o tutto il gruppo e se avete usato invito Steam o codice stanza.',
          'Elenca solo i passaggi provati e il risultato di ognuno. Cita mod, VPN, regola firewall, cFosSpeed o MLO solo se riguardano il tuo setup. Uno screenshot può aiutare, ma prima di pubblicarlo nascondi nomi account, chat private, inviti, codici stanza e dati personali. Non allegare password o token.',
          'Un buon rapporto separa osservazione e interpretazione: “ClientTimeout dopo JOIN GAME alle 20:15 UTC; gli altri due giocatori sono rimasti in lobby” è più utile di “Photon è rotto”. Landfall resta la fonte per i passi ufficiali; Steam Community mostra esperienze, non conferma la causa della tua sessione.',
        ],
        bullets: [
          ['Sintomo esatto', 'Messaggio, fase, data, ora e fuso.'],
          ['Contesto lobby', 'Host o partecipante, portata, invito o codice.'],
          ['Modifiche provate', 'Solo controlli eseguiti e relativi risultati.'],
          ['Privacy', 'Nascondi codici, account, chat, password e token.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Risposte rapide',
      title: 'FAQ sugli errori Photon di PEAK',
      items: [
        ['Come correggo “Disconnected from Photon” in PEAK?', 'Inizia dalla FAQ Landfall: manutenzione Steam, stabilità, amicizie e privacy, altri programmi, file, mod e eccezioni di sicurezza. Router e VPN restano prove condizionali. Cambia una cosa alla volta: non c’è una correzione garantita.'],
        ['ClientTimeout significa che PEAK è offline?', 'Il testo non dimostra un’interruzione generale. La FAQ pubblica non lo associa a una causa sola. Annota la fase, controlla la manutenzione ufficiale e confronta la situazione degli altri.'],
        ['PEAK o Steam si ferma ogni martedì?', 'Landfall segnala una manutenzione Steam di routine ogni martedì. La FAQ non fissa la durata né attribuisce ogni errore Photon alla manutenzione. Riprova dopo e annota il risultato.'],
        ['Le mod di PEAK possono causare disconnessioni Photon?', 'Landfall consiglia di rimuovere completamente le mod, inclusi i residui BepInEx, durante la diagnosi. Confronta prima una sessione senza mod, senza accusare una mod specifica.'],
        ['Per PEAK devo attivare o disattivare la VPN?', 'Landfall suggerisce di confrontare entrambi gli stati e cita report positivi. È una prova condizionale, non una diagnosi. Non installare VPN sconosciute o modificare la sicurezza senza capirne l’effetto.'],
        ['Devo disattivare MLO o rimuovere cFosSpeed?', 'Landfall raccoglie report di giocatori, non una soluzione universale. Prova solo se è rilevante per il tuo setup, annota l’origine e ripristina se non migliora.'],
        ['Un errore del codice stanza è lo stesso di Photon?', 'Non necessariamente. Invito e codice riguardano l’accesso alla lobby; Photon descrive un sintomo di connessione. Consulta la guida ai codici e registra a parte il testo Photon.'],
      ],
    },
    source: {
      eyebrow: 'Indicazioni ufficiali e report dei giocatori',
      title: 'Che cosa può confermare questa guida PEAK',
      body: 'La FAQ PEAK di Landfall è la fonte principale per Photon, la manutenzione Steam del martedì e i controlli pubblicati. cFosSpeed, MLO, VPN e restrizioni ISP sono descritti come report o possibilità condizionali; la guida mantiene questa distinzione. La discussione Steam Community è collegata solo come esperienza di un giocatore, non come conferma ufficiale o correzione universale.',
      links: [
        ['FAQ PEAK Landfall e controlli di connessione', 'https://landfall.se/peak-faq'],
        ['Risoluzione problemi Landfall', 'https://landfall.se/troubleshooting'],
        ['Pagina ufficiale PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
        ['Steam Community: report errore Photon', 'https://steamcommunity.com/app/3527290/discussions/0/592907722016587684/'],
      ],
    },
    related: [
      ['room-codes', 'Vedi i codici PEAK e come entrare in una partita'],
      ['peak-game-tips', 'Leggi i consigli cooperativi di PEAK'],
      ['peak-game-update', 'Controlla gli aggiornamenti PEAK'],
    ],
    relatedLabel: 'Guide PEAK su connessione e cooperativa',
  },
};

function replaceLocalePhrases(value, replacements) {
  if (typeof value === 'string') {
    return replacements.reduce((text, [source, replacement]) => text.replaceAll(source, replacement), value);
  }
  if (Array.isArray(value)) return value.map((item) => replaceLocalePhrases(item, replacements));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceLocalePhrases(item, replacements)]));
  }
  return value;
}

const localizedPhraseReplacements = {
  zh: [
    ['Landfall 当前的 PEAK FAQ', 'Landfall 当前的 PEAK 官方说明'],
    ['Landfall PEAK FAQ', 'Landfall PEAK 官方说明'],
    ['Landfall 当前 FAQ', 'Landfall 当前官方说明'],
    ['公开 FAQ', '公开说明'],
    ['Steam Community', 'Steam 社区'],
    ['FAQ', '常见问题'],
  ],
  ja: [
    ['Landfallの現在のPEAK FAQ', 'Landfallの現在のPEAK公式案内'],
    ['LandfallのPEAK FAQ', 'LandfallのPEAK公式案内'],
    ['Landfallの公開FAQ', 'Landfallの公開案内'],
    ['LandfallのFAQ', 'Landfallの公式案内'],
    ['Landfall PEAK FAQ', 'Landfall PEAK公式案内'],
    ['公開FAQ', '公開案内'],
    ['公式FAQ', '公式案内'],
    ['Steam Community', 'Steamコミュニティ'],
    ['Multi-Link Operation', 'マルチリンクオペレーション'],
    ['FAQ', 'よくある質問'],
  ],
  de: [
    ['PEAK-Guides', 'PEAK-Hilfen'],
    ['PEAK-Guide', 'PEAK-Anleitung'],
    ['Raumcode-Guide', 'Raumcode-Anleitung'],
    ['Verbindungs-Guide', 'Verbindungshilfe'],
    ['Landfalls aktuelle FAQ', 'Landfalls aktuelle Hilfeseite'],
    ['Landfalls öffentliche FAQ', 'Landfalls öffentliche Hilfeseite'],
    ['öffentliche FAQ', 'öffentliche Hilfeseite'],
    ['Landfalls FAQ', 'Landfalls Hilfeseite'],
    ['Landfall FAQ', 'Landfall-Hilfe'],
    ['FAQ', 'Häufige Fragen'],
    ['Guide', 'Anleitung'],
    ['Status', 'Stand'],
    ['Steam Community', 'Steam-Community'],
  ],
  ko: [
    ['Landfall의 현재 PEAK FAQ', 'Landfall의 현재 PEAK 공식 안내'],
    ['Landfall의 최신 FAQ', 'Landfall의 최신 공식 안내'],
    ['Landfall의 PEAK FAQ', 'Landfall의 PEAK 공식 안내'],
    ['Landfall PEAK FAQ', 'Landfall PEAK 공식 안내'],
    ['Landfall의 FAQ', 'Landfall 공식 안내'],
    ['Landfall FAQ', 'Landfall 공식 안내'],
    ['공개 FAQ', '공개 안내'],
    ['Steam Community', 'Steam 커뮤니티'],
    ['Multi-Link Operation', '멀티 링크 동작'],
    ['FAQ', '자주 묻는 질문'],
  ],
  pt: [
    ['Status da fonte', 'Enquadramento da fonte'],
    ['status ao vivo', 'situação atual'],
    ['Steam Community', 'Comunidade Steam'],
  ],
  es: [['Steam Community', 'Comunidad de Steam']],
  fr: [['Steam Community', 'communauté Steam']],
  it: [['Steam Community', 'community Steam']],
};

for (const [locale, replacements] of Object.entries(localizedPhraseReplacements)) {
  photonTroubleshootingTranslations[locale] = replaceLocalePhrases(photonTroubleshootingTranslations[locale], replacements);
}

photonTroubleshootingTranslations.ko.sections[0].title = 'PEAK의 Photon 연결 끊김은 무엇을 뜻하나요?';
photonTroubleshootingTranslations.ko.sections[3].title = 'VPN과 공유기 MLO, cFosSpeed 관련 플레이어 보고';
photonTroubleshootingTranslations.ko.faq.items[0][0] = 'PEAK에서 Photon 연결이 끊겼을 때 어떻게 해결하나요?';

const supportReportVisuals = {
  zh: {
    alt: 'PEAK 探险者沿岛屿山脊协作攀爬的官方 Steam 截图',
    caption: '官方 Steam 合作玩法截图仅用于说明游戏情境，并非 Photon 错误画面。公开错误截图前请遮住账号、聊天和房间码。',
  },
  es: {
    alt: 'Captura oficial de Steam de exploradores de PEAK subiendo juntos por una cresta de la isla',
    caption: 'Captura oficial de Steam para mostrar el contexto cooperativo, no un error de Photon. Oculta cuentas, chats y códigos antes de compartir una captura propia.',
  },
  ja: {
    alt: '島の尾根を協力して登るPEAKの探検者を写した公式Steamスクリーンショット',
    caption: '協力プレイの状況を示す公式Steam画像で、Photonエラー画面ではありません。自分の画面を共有する際はアカウント名、チャット、ルームコードを隠してください。',
  },
  fr: {
    alt: 'Capture Steam officielle montrant des éclaireurs de PEAK qui gravissent ensemble une crête de l’île',
    caption: 'Capture officielle de Steam illustrant le contexte coopératif, pas une erreur Photon. Masquez comptes, discussions et codes avant de partager votre propre capture.',
  },
  de: {
    alt: 'Offizieller Steam-Screenshot mit PEAK-Scouts, die gemeinsam einen Inselgrat erklimmen',
    caption: 'Offizieller Steam-Screenshot zum Koop-Kontext, keine Photon-Fehlermeldung. Vor dem Teilen eines eigenen Bildes Konten, Chats und Raumcodes unkenntlich machen.',
  },
  pt: {
    alt: 'Captura oficial da Steam com exploradores de PEAK escalando juntos uma crista da ilha',
    caption: 'Captura oficial da Steam para mostrar o contexto cooperativo, não um erro do Photon. Oculte contas, conversas e códigos antes de compartilhar uma captura própria.',
  },
  ko: {
    alt: '섬 능선을 함께 오르는 PEAK 탐험가를 보여 주는 공식 Steam 스크린샷',
    caption: '협동 플레이 맥락을 보여 주는 공식 Steam 이미지이며 Photon 오류 화면은 아닙니다. 직접 찍은 화면을 공유하기 전에 계정, 채팅, 방 코드를 가리세요.',
  },
  it: {
    alt: 'Screenshot ufficiale Steam di esploratori PEAK che scalano insieme una cresta dell’isola',
    caption: 'Screenshot ufficiale Steam per il contesto cooperativo, non un errore Photon. Nascondi account, chat e codici prima di condividere una schermata personale.',
  },
};

for (const [locale, visual] of Object.entries(supportReportVisuals)) {
  photonTroubleshootingTranslations[locale].sections.at(-1).image = {
    src: '/media/peak-climb-ridge.webp',
    ...visual,
    width: 1200,
    height: 675,
  };
}
