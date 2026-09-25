const media = (src, width, height, alt, caption) => ({ src, width, height, alt, caption });

const priceRows = {
  zh: [
    ['美国（USD）', 'USD 7.99', 'USD 4.95'], ['中国（CNY）', 'CNY 33.00', 'CNY 20.46'], ['西班牙（EUR）', 'EUR 7.49', 'EUR 4.64'],
    ['日本（JPY）', 'JPY 880', 'JPY 545'], ['韩国（KRW）', 'KRW 8,400', 'KRW 5,210'], ['德国（EUR）', 'EUR 7.49', 'EUR 4.64'],
    ['法国（EUR）', 'EUR 7.49', 'EUR 4.64'], ['巴西（BRL）', 'BRL 23.99', 'BRL 14.87'], ['意大利（EUR）', 'EUR 7.49', 'EUR 4.64'],
  ],
  es: [
    ['Estados Unidos (USD)', 'USD 7.99', 'USD 4.95'], ['China (CNY)', 'CNY 33.00', 'CNY 20.46'], ['España (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Japón (JPY)', 'JPY 880', 'JPY 545'], ['Corea del Sur (KRW)', 'KRW 8,400', 'KRW 5,210'], ['Alemania (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Francia (EUR)', 'EUR 7.49', 'EUR 4.64'], ['Brasil (BRL)', 'BRL 23.99', 'BRL 14.87'], ['Italia (EUR)', 'EUR 7.49', 'EUR 4.64'],
  ],
  ja: [
    ['米国（USD）', 'USD 7.99', 'USD 4.95'], ['中国（CNY）', 'CNY 33.00', 'CNY 20.46'], ['スペイン（EUR）', 'EUR 7.49', 'EUR 4.64'],
    ['日本（JPY）', 'JPY 880', 'JPY 545'], ['韓国（KRW）', 'KRW 8,400', 'KRW 5,210'], ['ドイツ（EUR）', 'EUR 7.49', 'EUR 4.64'],
    ['フランス（EUR）', 'EUR 7.49', 'EUR 4.64'], ['ブラジル（BRL）', 'BRL 23.99', 'BRL 14.87'], ['イタリア（EUR）', 'EUR 7.49', 'EUR 4.64'],
  ],
  ko: [
    ['미국 (USD)', 'USD 7.99', 'USD 4.95'], ['중국 (CNY)', 'CNY 33.00', 'CNY 20.46'], ['스페인 (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['일본 (JPY)', 'JPY 880', 'JPY 545'], ['대한민국 (KRW)', 'KRW 8,400', 'KRW 5,210'], ['독일 (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['프랑스 (EUR)', 'EUR 7.49', 'EUR 4.64'], ['브라질 (BRL)', 'BRL 23.99', 'BRL 14.87'], ['이탈리아 (EUR)', 'EUR 7.49', 'EUR 4.64'],
  ],
  de: [
    ['USA (USD)', 'USD 7.99', 'USD 4.95'], ['China (CNY)', 'CNY 33.00', 'CNY 20.46'], ['Spanien (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Japan (JPY)', 'JPY 880', 'JPY 545'], ['Südkorea (KRW)', 'KRW 8.400', 'KRW 5.210'], ['Deutschland (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Frankreich (EUR)', 'EUR 7.49', 'EUR 4.64'], ['Brasilien (BRL)', 'BRL 23.99', 'BRL 14.87'], ['Italien (EUR)', 'EUR 7.49', 'EUR 4.64'],
  ],
  fr: [
    ['États-Unis (USD)', 'USD 7.99', 'USD 4.95'], ['Chine (CNY)', 'CNY 33.00', 'CNY 20.46'], ['Espagne (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Japon (JPY)', 'JPY 880', 'JPY 545'], ['Corée du Sud (KRW)', 'KRW 8 400', 'KRW 5 210'], ['Allemagne (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['France (EUR)', 'EUR 7.49', 'EUR 4.64'], ['Brésil (BRL)', 'BRL 23.99', 'BRL 14.87'], ['Italie (EUR)', 'EUR 7.49', 'EUR 4.64'],
  ],
  pt: [
    ['Estados Unidos (USD)', 'USD 7.99', 'USD 4.95'], ['China (CNY)', 'CNY 33.00', 'CNY 20.46'], ['Espanha (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Japão (JPY)', 'JPY 880', 'JPY 545'], ['Coreia do Sul (KRW)', 'KRW 8.400', 'KRW 5.210'], ['Alemanha (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['França (EUR)', 'EUR 7.49', 'EUR 4.64'], ['Brasil (BRL)', 'BRL 23,99', 'BRL 14,87'], ['Itália (EUR)', 'EUR 7.49', 'EUR 4.64'],
  ],
  it: [
    ['Stati Uniti (USD)', 'USD 7.99', 'USD 4.95'], ['Cina (CNY)', 'CNY 33.00', 'CNY 20.46'], ['Spagna (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Giappone (JPY)', 'JPY 880', 'JPY 545'], ['Corea del Sud (KRW)', 'KRW 8.400', 'KRW 5.210'], ['Germania (EUR)', 'EUR 7.49', 'EUR 4.64'],
    ['Francia (EUR)', 'EUR 7.49', 'EUR 4.64'], ['Brasile (BRL)', 'BRL 23.99', 'BRL 14.87'], ['Italia (EUR)', 'EUR 7.49', 'EUR 4.64'],
  ],
};

export const peakGamePriceTranslations = {
  zh: {
    meta: {
      title: 'PEAK 价格：Steam 九个地区价格对比',
      description: '对比 2026 年 9 月 25 日查询的九个 Steam 地区 PEAK 标价与促销价；购买前请以你所在地区的实时结账价格为准。',
      schema: '按日期记录九个 Steam 地区 PEAK 标价和促销价，并说明价格快照限制及核对实时结账金额的方法。',
    },
    primaryKeyword: '',
    eyebrow: 'Steam 价格日期快照',
    h1: 'PEAK 价格：Steam 各地区多少钱？',
    intro: 'PEAK 的 Steam 价格会因商店地区而异。2026 年 9 月 25 日查询的官方数据中，美国标价为 USD 7.99，促销价为 USD 4.95；下表其余八个地区当时也显示 38% 折扣。这只是有日期的记录，不能证明促销现在仍在进行。先比较地区价格，再打开官方商店并以自己的结账页面为准。',
    answerLabel: '简短回答',
    answer: '截至 2026 年 9 月 25 日，PEAK 在美国的 Steam 标价为 USD 7.99，中国为 CNY 33.00；当时官方数据还显示临时促销价分别为 USD 4.95 和 CNY 20.46，九个已检查地区都显示 38% 折扣。价格、促销、显示货币和结账金额都可能变化。请把下表当作带日期的比较记录，购买前以自己账号所在地区的商店页和购物车为准。',
    tocLabel: '本页内容',
    tocFaq: '价格常见问题',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'PEAK 官方商店主视觉：探险者走向最后的山峰', 'PEAK 官方商店美术图，用来识别游戏；这不是价格或促销截图。'),
    sections: [
      {
        id: 'price-by-region', title: 'PEAK Steam 各地区价格',
        paragraphs: [
          '下表记录 2026 年 9 月 25 日 Steam 官方应用详情地区数据返回的标价和促销价。每行使用该市场对应的货币；本次查询时九个商店都比标价低 38%。Steam 的响应没有提供促销结束时间，因此页面不能确认优惠持续了多久，也不应把历史快照当成当前报价。',
          '地区对比适合在预算规划或与异地朋友讨论价格时参考，但不代表其他人结账时会看到完全相同的金额。账号商店地区、当地税费、付款方式和当时有效的优惠都会影响显示结果。若实时商店页与此处不同，请信任与你的 Steam 账号关联的商店页。',
        ],
        table: { caption: '2026 年 9 月 25 日查询的 Steam PEAK 价格', headers: ['Steam 地区', '标价', '查询时促销价'], rows: priceRows.zh },
        afterTable: '这些金额对应查询时所用的地区代码，不是未来价格预测或历史最低价图表。请让 Steam 账号地区符合你的实际居住地，并遵守 Steam 的现行规则；不要为了复现表格中的金额擅自更改地区。',
      },
      {
        id: 'list-price-and-sale', title: '标价与临时促销价有什么区别？',
        paragraphs: [
          '标价是在没有折扣时商店显示的参考金额；促销价则是商店确实显示优惠时的临时金额。本次 9 月 25 日快照中，各地区促销价均比标价低 38%，但官方响应没有促销结束日期。页面保留当日记录，不推断折扣现在仍然有效。',
          '搜索“PEAK 多少钱”可能把常规标价和促销金额混在一起。先看清表格列名，再刷新自己地区的 Steam 商品页，并在付款前检查购物车。旧帖子里的折扣数字或搜索摘要都不能证明今天仍有优惠。',
        ],
        bullets: [['标价', '查询时官方地区商店返回的常规价格。'], ['促销价', '2026 年 9 月 25 日观察到的优惠金额；未取得结束时间。'], ['结账金额', '你当前 Steam 购物车中的实际金额，可能受当地费用影响。']],
      },
      {
        id: 'what-the-price-covers', title: '购买 PEAK 得到什么？',
        paragraphs: [
          'PEAK 是通过 Steam 销售的合作攀登与生存游戏。玩家需要规划路线、穿越变化的地形、管理有限资源，并帮助队友从失误中恢复。下方游戏截图用于展示玩法背景，并不包含商店功能、价格或某个特定版本的证明。',
          '本指南比较的是 PEAK 的标准 Steam 商品页，不推断它包含可选内容、捆绑包、原声带或未来版本。购买前请查看实时商品页的购买区域，尤其是商店显示多个套装时。游戏内容与平台支持也属于不同问题，不应从地区价格表推导。',
          '如果你想先了解合作攀登循环和地图，可阅读[[link:what-is-peak-game|PEAK 新手介绍]]。该指南帮助判断游戏是否适合你的队伍；你要购买的具体商品仍应以官方商店为准。',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK 探险者结伴攀向山顶的游戏画面', 'Steam 官方游戏截图：展示合作攀登玩法，不是价格页面。'),
      },
      {
        id: 'check-live-steam-price', title: '如何查询当前 PEAK Steam 价格',
        paragraphs: [
          '要知道自己的账号现在购买 PEAK 要多少钱，应直接查看对应地区的官方商品页，不要依赖搜索摘要或过期对比表。查看页面上的货币和折扣，再在付款前确认购物车金额。单独切换页面语言，并不能证明商店地区已经改变。',
          '核对过程很短，却能避免大多数价格过期问题。如果朋友报出的金额不同，先比较双方商品页显示的国家和货币；不同地区或日期下的两种价格都可能正确。不要仅为复现本指南的某一行去更改账号国家。',
        ],
        bullets: [['1. 打开官方商品页', '使用来源中的 PEAK 商品链接，并确认登录账号的商店地区。'], ['2. 查看货币和优惠', '区分标价与当前折扣，并记下查询日期。'], ['3. 检查购物车', '付款前确认实时总额和可能适用的当地费用。'], ['4. 单独核对平台', '本页只比较 Steam 价格；平台和多人游戏信息请看[[link:room-codes|平台与房间码指南]]。']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAK 探险者在熔岩危险地形旁使用绳索', 'Steam 官方游戏截图：帮助识别游戏内容，与商店价格核验分开。'),
      },
      {
        id: 'price-history-and-buying-decision', title: '这份价格表能预测下一次打折吗？',
        paragraphs: [
          '不能。单个日期的价格记录无法证明促销周期、历史最低价或下一次折扣。要确认正在进行的优惠，应查看 Steam 商品页和官方公告。本页没有加入历史价格曲线，因为本次研究没有找到完整且可核实的 PEAK 第一方历史价格序列。',
          '是否购买取决于你的预算和队伍安排。可以按自己的预算等待，但不要把 9 月快照当作未来一定会再打折的承诺。若要了解平台兼容性或多人游玩问题，请单独查看[[link:room-codes|平台和房间码指南]]，不要从价格表推断平台支持。',
          '事实与建议需要分开：表内金额来自某一天的 Steam 官方地区数据；这个价格对你是否划算，则取决于个人偏好和同玩人数。准备购买时请重新打开实时商品页。',
        ],
      },
    ],
    faq: {
      eyebrow: '快速回答', title: 'PEAK 价格常见问题',
      items: [
        ['PEAK 在美国多少钱？', 'Steam 官方数据在 2026 年 9 月 25 日显示美国标价 USD 7.99、促销价 USD 4.95。这是有日期的记录；购买前请检查实时商品页和购物车。'],
        ['PEAK 在 Steam 上要多少钱？', '金额取决于商店地区以及当时是否有促销。表格记录了 2026 年 9 月 25 日查询的九个地区价格；今天的实际报价请看你账号对应的商品页。'],
        ['PEAK 的促销价是永久的吗？', '不是。USD 4.95 以及其他折扣价只在一次快照中观察到，Steam 响应没有提供结束时间，因此本页不声称优惠仍在进行。'],
        ['为什么 PEAK 在不同国家售价不同？', 'Steam 商店会按地区显示货币并采用地区定价。本表记录官方数据返回的结果，不解释或预测发行方的定价决定。'],
        ['本页包含 PlayStation 或 Xbox 价格吗？', '不包含，本页只比较 Steam 商店。平台和多人游戏概况见[[link:room-codes|PEAK 平台指南]]，具体可用性请再看对应官方商店。'],
        ['这里列出了 PEAK 的历史最低价吗？', '没有。本次研究未找到完整的第一方历史价格序列，因此本页不会把任何金额称为历史最低价。'],
      ],
    },
    source: {
      eyebrow: '来源与限制', title: 'Steam 官方数据与查询日期',
      body: '地区标价和促销价来自 Steam 官方应用详情地区响应，查询日期为 2026 年 9 月 25 日，覆盖表中九个地区代码。下方提供 PEAK 官方商品页。响应记录了查询时观察到的折扣，但没有提供结束时间；购买时请用实时页面和购物车确认。本指南是独立玩家资料站，不销售游戏。',
      links: [['PEAK Steam 官方商品页', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Steam 官方应用详情数据（美国商店）', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']],
    },
    related: [['what-is-peak-game', '了解 PEAK 是什么'], ['room-codes', '查看平台与多人游戏'], ['peak-game-update', '查看 PEAK 官方更新']],
    relatedLabel: '更多 PEAK 指南',
  },
  es: {
    meta: {
      title: 'Precio de PEAK: Steam por región',
      description: 'Compara los precios y descuentos de PEAK en nueve tiendas de Steam, consultados el 25 de septiembre de 2026. Confirma el importe actual antes de comprar.',
      schema: 'Comparación fechada de los precios normal y promocional de PEAK en nueve regiones de Steam, con límites claros y pasos para comprobar el importe actual.',
    },
    primaryKeyword: '',
    eyebrow: 'Consulta fechada de Steam',
    h1: 'Precio de PEAK: Steam por región',
    intro: 'El precio de PEAK depende de la región de la tienda de Steam. En los datos oficiales consultados el 25 de septiembre de 2026, la tienda de EE. UU. mostraba un precio normal de USD 7.99 y una oferta temporal de USD 4.95; los otros ocho mercados también tenían un descuento del 38% en esa consulta. Son cifras fechadas, no una garantía de que la oferta siga activa. Compara la tabla y comprueba el importe de tu propia cuenta en Steam.',
    answerLabel: 'Respuesta breve',
    answer: 'En la consulta del 25 de septiembre de 2026, PEAK figuraba a USD 7.99 en EE. UU. y CNY 33.00 en China antes de descuentos. Los datos oficiales de Steam también mostraban precios promocionales temporales de USD 4.95 y CNY 20.46; los nueve mercados comprobados tenían un 38% de descuento en ese momento. El precio, la oferta, la moneda y el total de compra pueden cambiar. Usa la tabla como referencia fechada y toma como definitivo el importe de la tienda regional y el carrito de tu cuenta.',
    tocLabel: 'En esta página', tocFaq: 'Preguntas sobre el precio',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'Arte oficial de PEAK con exploradores ante la cima final', 'Arte de la tienda oficial de PEAK: identifica el juego, pero no muestra un precio ni un descuento.'),
    sections: [
      {
        id: 'price-by-region', title: 'Precio de PEAK en Steam por región',
        paragraphs: [
          'La tabla recoge los precios normal y promocional devueltos por los datos regionales oficiales de Steam el 25 de septiembre de 2026. Cada fila conserva la moneda del mercado consultado. En esa única comprobación, las nueve tiendas mostraban un descuento del 38%. La respuesta de Steam no incluía la fecha de fin de la oferta, así que no podemos confirmar cuánto duró ni si sigue activa.',
          'La comparación regional ayuda a preparar un presupuesto o hablar del coste con amistades de otros países, pero no determina lo que otra cuenta pagará al finalizar. El país de la tienda, los impuestos locales, el medio de pago y la promoción vigente pueden cambiar el total mostrado. Si la tienda actual no coincide con esta tabla, fíate de la página asociada a tu cuenta.',
        ],
        table: { caption: 'Precios oficiales de PEAK en Steam consultados el 25 de septiembre de 2026', headers: ['Mercado de Steam', 'Precio normal', 'Oferta en la consulta'], rows: priceRows.es },
        afterTable: 'Las cifras corresponden a los códigos regionales consultados ese día; no son una previsión ni un historial de mínimos. Mantén la región de la cuenta de Steam de acuerdo con tu residencia real y las reglas vigentes de la plataforma.',
      },
      {
        id: 'list-price-and-sale', title: 'Precio normal y descuento temporal de Steam',
        paragraphs: [
          'El precio normal es la referencia que muestra la tienda cuando no hay rebaja. El precio promocional es temporal y solo se aplica mientras Steam presente una oferta activa. En la consulta del 25 de septiembre, la diferencia era del 38% en las nueve regiones. La respuesta oficial no proporcionó una fecha final para esa promoción.',
          'Una búsqueda como «cuánto cuesta PEAK» puede mezclar ambos importes. Usa la columna de precio normal para entender la referencia registrada y trata la oferta como una observación fechada. Antes de pagar, actualiza la ficha regional y revisa el carrito; un descuento de una publicación antigua no demuestra el precio de hoy.',
        ],
        bullets: [['Precio normal', 'Importe habitual devuelto para la tienda regional en la consulta.'], ['Precio promocional', 'Oferta observada el 25 de septiembre de 2026; no se encontró su fecha de fin.'], ['Total del carrito', 'Importe actual de tu compra, con los cargos locales que correspondan.']],
      },
      {
        id: 'what-the-price-covers', title: 'Qué compras al pagar PEAK',
        paragraphs: [
          'PEAK es un juego de escalada cooperativa y supervivencia que se vende en Steam. El grupo planifica rutas, asciende por terrenos cambiantes, administra recursos y ayuda a otros exploradores cuando algo sale mal. La captura siguiente aporta contexto de juego; no documenta precios, funciones de la tienda ni una edición concreta.',
          'Esta guía compara la ficha estándar de PEAK en Steam. No afirma que incluya contenido opcional, un paquete, una banda sonora o una edición futura si la ficha actual no lo indica. Antes de comprar, revisa la sección de compra de la tienda, sobre todo si aparecen varios paquetes. El contenido y la disponibilidad por plataforma son cuestiones distintas del precio regional.',
          'Para entender el ciclo cooperativo, los mapas y el contexto de juego, consulta nuestra [[link:what-is-peak-game|guía sobre qué es PEAK]]. Esa explicación ayuda a valorar si encaja con tu grupo; la tienda oficial sigue siendo la referencia del artículo que vas a comprar.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Exploradores de PEAK escalando juntos hacia una cima', 'Captura oficial de Steam: muestra la escalada cooperativa, no una pantalla de precios.'),
      },
      {
        id: 'check-live-steam-price', title: 'Cómo comprobar el precio actual de PEAK en Steam',
        paragraphs: [
          'Para saber cuánto pagarías tú, abre la ficha regional oficial en vez de confiar en un fragmento de búsqueda o en una tabla antigua. Comprueba la moneda y la etiqueta del descuento, y vuelve a mirar el carrito justo antes de pagar. Cambiar solo el idioma de la página no demuestra que haya cambiado la región de la tienda.',
          'La verificación lleva poco tiempo y evita confusiones habituales. Si un amigo cita otra cantidad, compara el país y la moneda que aparecen en ambas tiendas. Los dos importes pueden ser correctos si corresponden a regiones o fechas distintas. No cambies el país de la cuenta solo para reproducir una fila de esta guía.',
        ],
        bullets: [['1. Abre la ficha oficial', 'Usa el enlace a PEAK de Fuentes y confirma la región de la tienda de tu cuenta.'], ['2. Revisa moneda y oferta', 'Distingue el precio normal de cualquier rebaja visible y anota la fecha.'], ['3. Comprueba el carrito', 'Confirma el total actual y los posibles cargos antes de terminar la compra.'], ['4. Verifica la plataforma', 'Esta página compara precios de Steam; consulta la [[link:room-codes|guía de plataformas y multijugador]] por separado.']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Explorador de PEAK usa una cuerda junto a un peligro de lava', 'Captura oficial de Steam: muestra el juego y se mantiene separada de la verificación del precio.'),
      },
      {
        id: 'price-history-and-buying-decision', title: '¿Puede esta guía predecir la próxima rebaja?',
        paragraphs: [
          'No. Una observación fechada no permite establecer un calendario de ofertas, el mínimo histórico ni la próxima rebaja. La ficha de Steam y los anuncios oficiales son las fuentes adecuadas para comprobar una promoción activa. Esta página no incluye un gráfico de historial porque la investigación no encontró una serie completa y verificable de precios de PEAK de primera mano.',
          'Decidir si comprar depende de tu presupuesto y de cuántas personas jugarán contigo. Puedes esperar si eso encaja con tus planes, pero no interpretes la consulta de septiembre como una promesa de que volverá la oferta. Para dudas de plataforma y multijugador, usa la [[link:room-codes|guía de plataformas y salas de PEAK]] en vez de deducir compatibilidad a partir de una tabla de precios.',
          'Los importes son datos oficiales de una fecha; que te parezcan una buena compra es una valoración personal basada en tus preferencias y tu grupo. Vuelve a abrir la ficha en vivo cuando vayas a comprar.',
        ],
      },
    ],
    faq: { eyebrow: 'Respuestas rápidas', title: 'Preguntas frecuentes sobre el precio de PEAK', items: [
      ['¿Cuánto cuesta PEAK en Estados Unidos?', 'El 25 de septiembre de 2026, los datos oficiales mostraban USD 7.99 de precio normal y USD 4.95 en oferta para EE. UU. Es una consulta fechada; confirma la ficha y el carrito actuales antes de comprar.'],
      ['¿Cuánto cuesta PEAK en Steam?', 'Depende de la región de la tienda y de si hay una oferta vigente. La tabla conserva nueve precios oficiales consultados el 25 de septiembre de 2026; la ficha regional de tu cuenta indica el importe de hoy.'],
      ['¿El precio de oferta de PEAK es permanente?', 'No. USD 4.95 y los demás importes rebajados se observaron en una única consulta. Steam no devolvió una fecha de fin, así que la página no afirma que la oferta continúe.'],
      ['¿Por qué PEAK tiene precios distintos por país?', 'Las tiendas de Steam pueden mostrar monedas y precios regionales distintos. La tabla refleja los datos oficiales consultados, pero no explica ni predice las decisiones de precio del editor.'],
      ['¿La guía incluye el precio de PEAK en PlayStation o Xbox?', 'No; compara únicamente tiendas de Steam. Consulta la [[link:room-codes|guía de plataformas de PEAK]] y verifica la disponibilidad actual con la tienda oficial correspondiente.'],
      ['¿Esta página confirma el mínimo histórico de PEAK?', 'No. La investigación no encontró una serie histórica completa de primera mano, así que no se etiqueta ningún importe como mínimo histórico.'],
    ] },
    source: { eyebrow: 'Fuentes y límites', title: 'Datos oficiales de Steam con fecha de consulta', body: 'Los precios regionales se leyeron en la respuesta oficial de detalles de la aplicación de Steam para los nueve códigos de país indicados, el 25 de septiembre de 2026. Abajo está la ficha pública de PEAK. La respuesta registró el descuento observado, pero no su fecha de fin; comprueba la página y el carrito actuales antes de comprar. Esta guía independiente no vende el juego.', links: [['Ficha oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Datos oficiales de la aplicación (tienda de EE. UU.)', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'Qué es PEAK'], ['room-codes', 'Plataformas y multijugador'], ['peak-game-update', 'Actualizaciones oficiales de PEAK']], relatedLabel: 'Más guías de PEAK',
  },
  ja: {
    meta: {
      title: 'PEAKの価格：Steamの地域別価格',
      description: '2026年9月25日に確認したSteam 9地域のPEAK通常価格とセール価格を比較。購入前に現在の決済金額を確認してください。',
      schema: 'Steamの9地域で確認したPEAKの通常価格とセール価格を日付付きで比較し、価格確認の手順とデータの限界を説明します。',
    },
    primaryKeyword: '',
    eyebrow: 'Steam価格の確認記録',
    h1: 'PEAKの価格：Steamの地域別比較',
    intro: 'PEAKのSteam価格はストア地域によって異なります。2026年9月25日に確認した公式データでは、米国の通常価格はUSD 7.99、確認時のセール価格はUSD 4.95でした。ほかの8地域でも、その時点では38%割引が表示されていました。これは日付のある記録であり、セールが現在も続いている保証ではありません。表を参考にしたうえで、購入時は自分のアカウントのSteamストアと決済画面を確認してください。',
    answerLabel: '要点',
    answer: '2026年9月25日の確認時、PEAKの通常価格は米国でUSD 7.99、中国でCNY 33.00でした。Steamの公式データは一時的なセール価格としてそれぞれUSD 4.95、CNY 20.46を示し、確認した9地域すべてで38%割引でした。価格、セール、表示通貨、決済合計は変わることがあります。この表は日付付きの比較として使い、購入時の金額は自分の地域のSteamストアとカートで確認してください。',
    tocLabel: 'このページの内容', tocFaq: '価格に関するFAQ',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'PEAK公式ストアアート：探検隊が最後の山頂を目指す場面', 'PEAK公式ストアのアートです。ゲームの識別用で、価格や割引の画面ではありません。'),
    sections: [
      {
        id: 'price-by-region', title: 'PEAKのSteam地域別価格',
        paragraphs: [
          '表は2026年9月25日にSteam公式のアプリ詳細データから返された通常価格とセール価格です。各行にはその市場の通貨を記載しています。確認した1回の応答では9地域すべてに38%の割引がありましたが、セール終了日は含まれていませんでした。表に価格があることだけで割引の継続を判断しないでください。',
          '地域比較は予算を考えたり、別の国にいる友人と価格を話したりする際に役立ちます。ただし、別アカウントの決済金額を保証するものではありません。アカウントのストア地域、現地の税、支払い方法、現在のキャンペーンで表示額が変わる場合があります。現在のページが表と異なるなら、自分のアカウントに紐づくストアを優先してください。',
        ],
        table: { caption: '2026年9月25日確認のSteam版PEAK価格', headers: ['Steam地域', '通常価格', '確認時のセール価格'], rows: priceRows.ja },
        afterTable: '金額は確認日に使った地域コードの結果であり、将来価格や最安値の履歴ではありません。Steamアカウントの地域は実際の居住地と現在の規則に合わせてください。',
      },
      {
        id: 'list-price-and-sale', title: '通常価格と期間限定セールの違い',
        paragraphs: [
          '通常価格は割引がないときの基準額です。セール価格はSteamがキャンペーンを表示している期間だけ適用されます。9月25日の応答では、確認した9地域で通常価格より38%低い金額が返されましたが、終了日時は含まれていません。',
          '「PEAKはいくら？」という検索では通常価格とセール価格が混ざることがあります。表の列を見分け、セール額は確認日の記録として扱ってください。支払いの前に地域のストアページを更新し、カートの金額を確認します。過去の投稿や検索結果の短い表示は現在価格の証拠になりません。',
        ],
        bullets: [['通常価格', '確認時に地域ストアから返された通常の金額です。'], ['セール価格', '2026年9月25日に観察した割引額です。終了日は取得できませんでした。'], ['決済金額', '現地で適用される費用を含め、現在のカートに表示される金額です。']],
      },
      {
        id: 'what-the-price-covers', title: 'PEAKを購入すると遊べる内容',
        paragraphs: [
          'PEAKはSteamで販売されている協力型の登山・サバイバルゲームです。仲間とルートを考え、変化する地形を登り、限られた資源を管理し、失敗した仲間を助けます。下のゲーム画像は製品の雰囲気を示すもので、価格や特定エディションを証明するものではありません。',
          'このガイドは標準のPEAK Steam商品ページを比較します。オプションコンテンツ、バンドル、サウンドトラック、将来のエディションが含まれるとは、現在の販売ページに記載がない限り主張しません。複数のパッケージが表示される場合は、購入欄を確認してください。ゲーム内容や対応プラットフォームは価格とは別に確認する項目です。',
          '協力プレイの流れやマップを先に知りたい場合は、[[link:what-is-peak-game|PEAKの紹介ガイド]]をご覧ください。自分のグループに合うかを考える助けになりますが、購入対象の確認先は公式ストアです。',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAKの探検者たちが協力して山頂へ登るゲーム画面', 'Steam公式ゲームスクリーンショット：協力登山の様子であり、価格画面ではありません。'),
      },
      {
        id: 'check-live-steam-price', title: '現在のPEAK Steam価格を確認する方法',
        paragraphs: [
          '自分のアカウントでPEAKがいくらになるか知るには、検索結果や古い比較表ではなく、地域に対応する公式商品ページを開きます。通貨と割引表示を見て、支払い直前にカートの金額も確認してください。ページの言語を切り替えただけでは、ストア地域が変わったことにはなりません。',
          '確認は短時間で済み、古い価格との混同を避けられます。友人と金額が違う場合は、まず双方のストアに表示された国と通貨を比べてください。地域や日付が違えば、どちらの金額もその条件では正しい可能性があります。表と同じ価格を見るためだけにアカウントの国を変更しないでください。',
        ],
        bullets: [['1. 公式商品ページを開く', '出典のPEAKリンクを使い、ログイン中のアカウント地域を確かめます。'], ['2. 通貨と割引を確認する', '通常価格と割引額を区別し、確認日も記録します。'], ['3. カートを確認する', '購入を確定する前に現在の合計額と現地費用を見ます。'], ['4. 対応機種は別に調べる', '本ページはSteam価格のみです。[[link:room-codes|プラットフォームとマルチプレイのガイド]]も確認してください。']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAKの探検者が溶岩の危険地帯でロープを使う様子', 'Steam公式ゲームスクリーンショット：ゲーム内容を示し、ストア価格とは分けています。'),
      },
      {
        id: 'price-history-and-buying-decision', title: '次のPEAKセールを予測できますか？',
        paragraphs: [
          'できません。日付のある価格観測ひとつでは、セール周期、過去最安値、次の割引を判断できません。開催中のキャンペーンはSteamの商品ページや公式告知で確認してください。今回の調査では完全で検証可能な第一者の価格履歴が見つからなかったため、価格推移グラフは掲載していません。',
          '購入するかどうかは予算や一緒に遊ぶ人数によって決めてください。自分の計画に合うなら待つ選択もできますが、9月の記録を次のセールの約束として扱わないでください。対応機種やマルチプレイの疑問は、価格表から推測せず[[link:room-codes|プラットフォームと部屋コードのガイド]]で別途確認します。',
          '表の金額はある日の公式データです。その金額が自分にとって妥当かどうかは、好みや遊ぶ仲間を踏まえた個人の判断になります。購入する段階で最新の販売ページを開き直してください。',
        ],
      },
    ],
    faq: { eyebrow: '簡単な回答', title: 'PEAKの価格に関するFAQ', items: [
      ['米国でPEAKはいくらですか？', '2026年9月25日のSteam公式データでは、米国の通常価格がUSD 7.99、セール価格がUSD 4.95でした。日付のある記録なので、購入前に現在の商品ページとカートを確認してください。'],
      ['PEAKはSteamでいくらですか？', 'ストア地域と有効なキャンペーンの有無によって異なります。表は2026年9月25日に確認した9地域の価格で、今日の金額は自分のアカウントの地域ストアで確認します。'],
      ['PEAKのセール価格は永久ですか？', 'いいえ。USD 4.95などの割引額は1回の確認で観察した値です。Steamの応答に終了日はなかったため、セール継続を保証しません。'],
      ['国によってPEAKの価格が違うのはなぜですか？', 'Steamの地域ストアでは通貨や地域価格が異なる場合があります。この表は公式データの結果を記録しており、販売元の価格決定を説明・予測するものではありません。'],
      ['PlayStationやXboxの価格も載っていますか？', 'いいえ。Steamストアのみを比較しています。プラットフォーム情報は[[link:room-codes|PEAK対応機種ガイド]]を読み、各公式ストアで最新情報を確認してください。'],
      ['PEAKの過去最安値は確認済みですか？', '確認していません。完全な第一者の価格履歴を取得できなかったため、どの金額も過去最安値とは呼んでいません。'],
    ] },
    source: { eyebrow: '出典と制限', title: '確認日を明示したSteam公式データ', body: '地域別の通常価格とセール価格は、2026年9月25日にSteam公式のアプリ詳細データを9つの国コードで確認したものです。PEAKの公開商品ページを下記に掲載しています。応答には割引額がありましたが終了日はありませんでした。購入時は現在のページとカートを確認してください。本ページはゲームを販売しない独立したファンガイドです。', links: [['PEAK Steam公式ページ', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Steam公式アプリ詳細データ（米国ストア）', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'PEAKとは'], ['room-codes', '対応機種とマルチプレイ'], ['peak-game-update', 'PEAK公式アップデート']], relatedLabel: '関連するPEAKガイド',
  },
  ko: {
    meta: {
      title: 'PEAK 가격: Steam 지역별 비교',
      description: '2026년 9월 25일 확인한 Steam 9개 지역의 PEAK 정가와 할인 가격을 비교하고, 구매 전 현재 결제 금액을 확인하세요.',
      schema: 'Steam 9개 지역에서 확인한 PEAK 정가와 할인 가격을 날짜와 함께 비교하고 실시간 금액 확인 방법과 자료의 한계를 설명합니다.',
    },
    primaryKeyword: '',
    eyebrow: '날짜가 표시된 Steam 가격 기록',
    h1: 'PEAK 가격: Steam 지역별 비교',
    intro: 'PEAK의 Steam 가격은 상점 지역에 따라 다릅니다. 2026년 9월 25일 확인한 공식 데이터에서 미국 정가는 USD 7.99, 확인 당시 할인가는 USD 4.95였습니다. 다른 8개 시장도 당시에는 38% 할인으로 표시되었습니다. 이는 날짜가 있는 기록이며 할인이 지금도 적용된다는 보장은 아닙니다. 표를 비교한 뒤 본인 계정의 Steam 상점과 결제 화면에서 금액을 확인하세요.',
    answerLabel: '짧은 답변',
    answer: '2026년 9월 25일 확인 당시 PEAK 정가는 미국에서 USD 7.99, 중국에서 CNY 33.00이었습니다. Steam 공식 데이터는 임시 할인 가격으로 각각 USD 4.95와 CNY 20.46도 표시했으며, 확인한 9개 시장 모두 당시 38% 할인이 적용되었습니다. 가격, 할인, 표시 통화, 결제 합계는 바뀔 수 있습니다. 아래 표는 날짜가 있는 비교 자료로 보고, 실제 구매 시에는 본인 Steam 계정의 지역 상점과 장바구니를 기준으로 삼으세요.',
    tocLabel: '이 페이지의 내용', tocFaq: '가격 FAQ',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'PEAK 공식 상점 아트: 탐험대가 마지막 정상으로 향하는 장면', 'PEAK 공식 상점 아트입니다. 게임 식별용 이미지이며 가격이나 할인 화면은 아닙니다.'),
    sections: [
      {
        id: 'price-by-region', title: 'Steam 지역별 PEAK 가격',
        paragraphs: [
          '표에는 2026년 9월 25일 Steam 공식 앱 상세 지역 데이터에서 반환된 정가와 할인가를 기록했습니다. 각 행은 해당 시장의 통화를 사용합니다. 확인한 한 번의 조회에서는 9개 상점 모두 38% 할인으로 표시되었지만, 응답에 할인 종료일은 없었습니다. 표에 할인 가격이 있다는 이유만으로 현재도 할인이 이어진다고 보면 안 됩니다.',
          '지역별 비교는 예산을 세우거나 다른 나라 친구와 가격을 이야기할 때 참고가 됩니다. 다만 다른 계정의 결제 금액을 보장하지는 않습니다. 계정의 상점 국가, 현지 세금, 결제 수단, 현재 프로모션에 따라 최종 표시가 달라질 수 있습니다. 실시간 페이지가 표와 다르면 본인 계정에 연결된 상점을 우선하세요.',
        ],
        table: { caption: '2026년 9월 25일 확인한 Steam PEAK 가격', headers: ['Steam 시장', '정가', '확인 당시 할인가'], rows: priceRows.ko },
        afterTable: '금액은 조회 당일 사용한 지역 코드의 결과이며 미래 가격 예측이나 역대 최저가 차트가 아닙니다. Steam 계정 지역은 실제 거주지와 현재 규정에 맞게 유지하세요.',
      },
      {
        id: 'list-price-and-sale', title: '정가와 한시적 Steam 할인 가격',
        paragraphs: [
          '정가는 할인이 없을 때 상점이 표시하는 기준 금액입니다. 할인가는 Steam에서 프로모션이 실제로 표시되는 동안 적용되는 임시 금액입니다. 9월 25일 확인에서는 9개 지역 모두 정가보다 38% 낮았지만, 공식 응답은 할인 종료일을 제공하지 않았습니다.',
          '“PEAK는 얼마인가요?”라는 검색은 정가와 할인가를 혼동할 수 있습니다. 표의 열을 구분해 읽고 할인가는 확인일의 기록으로만 보세요. 결제 전 본인 지역 상점을 새로고침하고 장바구니 금액을 확인해야 합니다. 오래된 게시물이나 검색 결과 문구는 오늘의 가격을 증명하지 않습니다.',
        ],
        bullets: [['정가', '조회 당시 지역 상점이 반환한 일반 가격입니다.'], ['할인가', '2026년 9월 25일 관찰한 할인 금액이며 종료일은 확인되지 않았습니다.'], ['결제 금액', '현지에서 적용될 수 있는 비용을 포함한 현재 장바구니의 금액입니다.']],
      },
      {
        id: 'what-the-price-covers', title: 'PEAK를 구매하면 무엇을 플레이하나요?',
        paragraphs: [
          'PEAK는 Steam에서 판매되는 협동 등반 및 생존 게임입니다. 플레이어는 경로를 계획하고 바뀌는 지형을 오르며, 한정된 자원을 관리하고 실수한 동료를 돕습니다. 아래 게임 이미지는 제품의 플레이 맥락을 보여줄 뿐 가격, 상점 기능 또는 특정 에디션을 증명하지 않습니다.',
          '이 안내는 PEAK의 기본 Steam 상품을 비교합니다. 현재 상점 페이지에서 확인되지 않는 추가 콘텐츠, 번들, 사운드트랙 또는 미래 에디션이 포함된다고 주장하지 않습니다. 여러 패키지가 보이면 구매 섹션을 확인하세요. 게임 콘텐츠와 플랫폼 이용 가능 여부는 지역 가격과 별개의 질문입니다.',
          '협동 플레이와 맵 흐름을 먼저 알고 싶다면 [[link:what-is-peak-game|PEAK 소개 가이드]]를 읽어 보세요. 게임이 팀에 맞는지 판단하는 데 도움이 되며, 실제 구매 상품은 공식 상점에서 확인할 수 있습니다.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK 탐험가들이 함께 산 정상을 향해 오르는 게임 장면', 'Steam 공식 게임 스크린샷: 협동 등반을 보여주며 가격 화면은 아닙니다.'),
      },
      {
        id: 'check-live-steam-price', title: '현재 PEAK Steam 가격을 확인하는 방법',
        paragraphs: [
          '본인 계정에서 PEAK를 얼마에 살 수 있는지 확인하려면 검색 요약이나 오래된 표보다 해당 지역의 공식 상품 페이지를 여세요. 통화와 할인 표시를 읽고 결제 직전에 장바구니 금액도 확인합니다. 페이지 언어만 바꿨다고 상점 지역이 바뀐 것은 아닙니다.',
          '확인에는 오래 걸리지 않으며 오래된 가격과의 혼동을 줄일 수 있습니다. 친구가 다른 금액을 말하면 두 상점에 표시된 국가와 통화를 먼저 비교하세요. 지역이나 날짜가 다르면 두 금액 모두 해당 조건에서는 맞을 수 있습니다. 표의 금액을 재현하려고 계정 국가를 바꾸지 마세요.',
        ],
        bullets: [['1. 공식 상품 페이지 열기', '출처의 PEAK 링크로 이동한 뒤 로그인한 계정의 상점 지역을 확인합니다.'], ['2. 통화와 할인 보기', '정가와 표시된 할인을 구분하고 조회 날짜를 기록합니다.'], ['3. 장바구니 확인', '구매를 확정하기 전 현재 합계와 현지 비용을 확인합니다.'], ['4. 플랫폼은 별도로 확인', '이 페이지는 Steam 가격만 다룹니다. [[link:room-codes|플랫폼 및 멀티플레이어 가이드]]를 함께 확인하세요.']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAK 탐험가가 용암 위험 지형 옆에서 로프를 사용하는 모습', 'Steam 공식 게임 스크린샷: 게임 맥락 이미지로 가격 확인 화면과 구분됩니다.'),
      },
      {
        id: 'price-history-and-buying-decision', title: '이 표로 다음 PEAK 할인을 예측할 수 있나요?',
        paragraphs: [
          '아니요. 날짜가 표시된 한 번의 관측으로 할인 일정, 역대 최저가 또는 다음 할인을 알 수 없습니다. 진행 중인 혜택은 Steam 상품 페이지와 공식 공지에서 확인하세요. 이번 조사에서는 완전하고 검증 가능한 PEAK의 공식 가격 이력을 찾지 못했으므로 가격 그래프를 제공하지 않습니다.',
          '구매 여부는 예산과 함께 플레이할 사람 수를 고려해 결정하세요. 개인 예산에 따라 기다릴 수 있지만 9월의 기록을 다음 할인 약속으로 받아들이면 안 됩니다. 플랫폼이나 멀티플레이어 질문은 가격표에서 추론하지 말고 [[link:room-codes|플랫폼 및 방 코드 안내]]에서 따로 확인하세요.',
          '표의 금액은 특정 날짜의 공식 데이터입니다. 그 금액이 본인에게 가치가 있는지는 선호와 함께할 팀에 달린 판단입니다. 구매를 준비할 때 최신 상점 페이지를 다시 여세요.',
        ],
      },
    ],
    faq: { eyebrow: '빠른 답변', title: 'PEAK 가격 FAQ', items: [
      ['미국에서 PEAK는 얼마인가요?', '2026년 9월 25일 Steam 공식 데이터에서 미국 정가는 USD 7.99, 할인가는 USD 4.95였습니다. 날짜가 있는 기록이므로 구매 전에 현재 상품 페이지와 장바구니를 확인하세요.'],
      ['PEAK는 Steam에서 얼마인가요?', '상점 지역과 현재 할인 여부에 따라 다릅니다. 표에는 2026년 9월 25일 확인한 9개 지역 가격이 있으며, 오늘의 금액은 본인 계정 지역의 상품 페이지에서 확인해야 합니다.'],
      ['PEAK 할인 가격은 계속 유지되나요?', '아닙니다. USD 4.95와 다른 할인 금액은 한 번의 조회에서 관찰했습니다. Steam 응답에 종료일이 없어 현재도 할인 중이라고 말할 수 없습니다.'],
      ['국가마다 PEAK 가격이 다른 이유는 무엇인가요?', 'Steam 지역 상점은 지역별 통화와 가격을 표시할 수 있습니다. 표는 공식 응답을 기록할 뿐 게시사의 가격 결정을 설명하거나 예측하지 않습니다.'],
      ['이 안내에 PlayStation이나 Xbox 가격도 있나요?', '아니요. Steam 상점만 비교합니다. 플랫폼 정보는 [[link:room-codes|PEAK 플랫폼 가이드]]에서 확인하고, 최신 이용 가능 여부는 해당 공식 상점에서 확인하세요.'],
      ['PEAK의 역대 최저가가 검증되었나요?', '아닙니다. 조사에서 완전한 공식 가격 이력을 찾지 못해 어떤 금액도 역대 최저가라고 부르지 않습니다.'],
    ] },
    source: { eyebrow: '출처와 한계', title: '확인 날짜가 명시된 Steam 공식 데이터', body: '지역별 정가와 할인가는 2026년 9월 25일 표에 기재된 9개 국가 코드를 사용해 Steam 공식 앱 상세 응답에서 확인했습니다. 아래에 PEAK 공개 상품 페이지를 연결합니다. 응답에는 할인 금액은 있었지만 종료일은 없었습니다. 구매 전 현재 페이지와 장바구니를 확인하세요. 이 페이지는 게임을 판매하지 않는 독립 팬 안내입니다.', links: [['PEAK 공식 Steam 상품 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Steam 공식 앱 상세 데이터 (미국 상점)', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'PEAK 소개'], ['room-codes', '플랫폼 및 멀티플레이어'], ['peak-game-update', 'PEAK 공식 업데이트']], relatedLabel: '관련 PEAK 가이드',
  },
  de: {
    meta: {
      title: 'PEAK Preis: Steam nach Region',
      description: 'Vergleiche die am 25.09.2026 geprüften PEAK-Listen- und Aktionspreise in neun Steam-Regionen. Prüfe vor dem Kauf den aktuellen Warenkorb.',
      schema: 'Ein datierter Vergleich der PEAK-Listen- und Aktionspreise in neun Steam-Regionen mit Hinweisen zu Grenzen und zur Prüfung des aktuellen Preises.',
    },
    primaryKeyword: '',
    eyebrow: 'Datierter Steam-Preisstand',
    h1: 'PEAK Preis: Steam-Preise nach Region',
    intro: 'Der PEAK-Preis hängt von der Region des Steam-Shops ab. In den offiziellen Preisdaten vom 25.09.2026 kostete die US-Version regulär USD 7.99 und im damaligen Angebot USD 4.95. Auch die acht weiteren geprüften Märkte zeigten zu diesem Zeitpunkt 38 Prozent Rabatt. Das sind datierte Werte und keine Zusage, dass das Angebot noch gilt. Vergleiche die Tabelle und prüfe vor dem Kauf den Preis in deinem eigenen Steam-Warenkorb.',
    answerLabel: 'Kurzantwort',
    answer: 'Bei der Prüfung am 25.09.2026 lag der PEAK-Listenpreis in den USA bei USD 7.99 und in China bei CNY 33.00. Die offiziellen Steam-Daten meldeten vorübergehende Angebotspreise von USD 4.95 und CNY 20.46; alle neun geprüften Märkte hatten zu diesem Zeitpunkt 38 Prozent Rabatt. Preise, Angebote, Währung und Endbetrag können sich ändern. Nutze die Tabelle als datierten Vergleich und richte dich beim Kauf nach dem regionalen Steam-Shop und Warenkorb deines Kontos.',
    tocLabel: 'Inhalt', tocFaq: 'Preis-FAQ',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'Offizielle PEAK-Shopgrafik mit Scouts auf dem Weg zum letzten Gipfel', 'Offizielle PEAK-Shopgrafik zur Wiedererkennung des Spiels, keine Preis- oder Rabattabbildung.'),
    sections: [
      {
        id: 'price-by-region', title: 'PEAK-Preis bei Steam nach Region',
        paragraphs: [
          'Die Tabelle enthält Listen- und Angebotspreise, die Steam am 25.09.2026 über seine offiziellen regionalen App-Details zurückgab. Jede Zeile verwendet die Währung des jeweiligen Marktes. Bei dieser einmaligen Prüfung lagen alle neun Angebote 38 Prozent unter dem Listenpreis. Eine Laufzeit der Aktion war in der Antwort nicht enthalten; aus der Tabelle lässt sich daher nicht ableiten, ob ein Rabatt noch gilt.',
          'Der Vergleich ist nützlich, wenn du ein Budget planst oder mit Freunden in anderen Ländern über den Preis sprichst. Er garantiert nicht den Endbetrag eines anderen Kontos. Shop-Region, lokale Steuern, Zahlungsmethode und ein aktuelles Angebot können die Anzeige verändern. Weicht der Live-Shop von der Tabelle ab, ist die Seite für dein eigenes Konto maßgeblich.',
        ],
        table: { caption: 'Offizielle PEAK-Steam-Preise, geprüft am 25.09.2026', headers: ['Steam-Markt', 'Listenpreis', 'Angebotspreis bei Prüfung'], rows: priceRows.de },
        afterTable: 'Die Beträge gehören zu den an diesem Tag abgefragten Ländercodes. Sie sind weder eine Prognose noch ein Diagramm historischer Tiefpreise. Lass die Region deines Steam-Kontos mit deinem tatsächlichen Wohnsitz und den aktuellen Regeln übereinstimmen.',
      },
      {
        id: 'list-price-and-sale', title: 'Listenpreis und zeitlich begrenzter Steam-Rabatt',
        paragraphs: [
          'Der Listenpreis ist der Referenzbetrag, wenn kein Rabatt angezeigt wird. Der Angebotspreis gilt nur, solange Steam eine Aktion ausweist. Beim Abruf am 25. September waren es in den neun Märkten 38 Prozent unter dem Listenpreis. Die offizielle Antwort enthielt allerdings kein Enddatum für die Aktion.',
          'Suchanfragen wie „Was kostet PEAK?“ vermischen oft Listen- und Angebotspreis. Lies deshalb die Spalten getrennt und betrachte den Rabatt ausschließlich als datierte Beobachtung. Aktualisiere vor dem Bezahlen die regionale Produktseite und prüfe den Warenkorb. Ein älterer Beitrag oder Suchausschnitt belegt keinen heutigen Preis.',
        ],
        bullets: [['Listenpreis', 'Der reguläre Betrag, den der regionale Shop beim Abruf zurückgab.'], ['Angebotspreis', 'Der am 25.09.2026 beobachtete Rabatt; ein Enddatum wurde nicht geliefert.'], ['Warenkorb', 'Der aktuelle Gesamtbetrag deines Kaufs mit gegebenenfalls anfallenden lokalen Abgaben.']],
      },
      {
        id: 'what-the-price-covers', title: 'Was du mit PEAK kaufst',
        paragraphs: [
          'PEAK ist ein kooperatives Kletter- und Survival-Spiel auf Steam. Die Gruppe plant eine Route, steigt durch wechselndes Gelände, verwaltet begrenzte Ressourcen und hilft anderen Scouts nach Fehlern. Das folgende Spielbild zeigt den Produktkontext, nicht den Preis, Shop-Funktionen oder eine bestimmte Edition.',
          'Dieser Vergleich bezieht sich nur auf das Standardangebot von PEAK auf Steam. Optionale Inhalte, Bundles, Soundtrack oder zukünftige Editionen werden nicht als enthalten dargestellt, sofern die aktuelle Produktseite das nicht sagt. Prüfe den Kaufbereich, wenn mehrere Pakete angezeigt werden. Spielinhalt und Plattformverfügbarkeit sind andere Fragen als der regionale Preis.',
          'Einen Überblick über den Koop-Spielablauf und die Karten findest du in unserem [[link:what-is-peak-game|Einsteigerleitfaden zu PEAK]]. Er hilft dir einzuschätzen, ob das Spiel zu deiner Gruppe passt; für den konkreten Kauf bleibt der offizielle Store entscheidend.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'PEAK-Scouts klettern gemeinsam in Richtung eines Gipfels', 'Offizieller Steam-Gameplay-Screenshot zur Koop-Kletterpartie, keine Preisansicht.'),
      },
      {
        id: 'check-live-steam-price', title: 'So prüfst du den aktuellen PEAK-Preis bei Steam',
        paragraphs: [
          'Um den Betrag für dein Konto zu erfahren, öffne die offizielle regionale Produktseite statt dich auf einen Suchtreffer oder eine alte Preistabelle zu verlassen. Prüfe Währung und Rabattkennzeichnung und kontrolliere den Warenkorb direkt vor der Zahlung. Eine andere Seitensprache allein bedeutet nicht, dass die Shop-Region gewechselt hat.',
          'Die Prüfung dauert nur kurz und verhindert viele Missverständnisse durch veraltete Preise. Wenn ein Freund einen anderen Betrag nennt, vergleiche zuerst Land und Währung beider Shops. Bei unterschiedlichen Regionen oder Daten können beide Angaben stimmen. Ändere dein Kontoland nicht nur, um einen Betrag aus dieser Tabelle nachzustellen.',
        ],
        bullets: [['1. Offizielle Produktseite öffnen', 'Nutze den PEAK-Link unter Quellen und prüfe die Shop-Region des angemeldeten Kontos.'], ['2. Währung und Rabatt lesen', 'Unterscheide Listenpreis und sichtbares Angebot und notiere das Datum.'], ['3. Warenkorb prüfen', 'Bestätige vor dem Kauf den aktuellen Gesamtbetrag und mögliche lokale Kosten.'], ['4. Plattform separat prüfen', 'Diese Seite vergleicht Steam-Preise. Für Plattformen und Mehrspieler siehe den [[link:room-codes|PEAK-Plattform- und Lobbyleitfaden]].']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'PEAK-Scout benutzt neben einer Lava-Gefahrenstelle ein Seil', 'Offizieller Steam-Gameplay-Screenshot: zeigt das Spiel und nicht den Shoppreis.'),
      },
      {
        id: 'price-history-and-buying-decision', title: 'Kann dieser Vergleich den nächsten PEAK-Rabatt vorhersagen?',
        paragraphs: [
          'Nein. Eine datierte Beobachtung belegt weder einen Angebotsrhythmus noch den niedrigsten historischen Preis oder den nächsten Rabatt. Aktive Aktionen prüfst du auf der Steam-Produktseite und in offiziellen Mitteilungen. Auf ein Preisverlaufsdiagramm verzichten wir, weil die Recherche keine vollständige, verifizierbare Preisreihe aus erster Hand ergab.',
          'Ob du kaufst, hängt von deinem Budget und der Zahl deiner Mitspieler ab. Du kannst nach eigenem Ermessen warten, solltest den Septemberwert aber nicht als Versprechen eines neuen Angebots verstehen. Fragen zu Plattformen und Koop-Funktionen beantwortet der separate [[link:room-codes|Leitfaden zu Plattformen und Lobbys]], nicht diese Preistabelle.',
          'Die Beträge oben sind offizielle Daten eines bestimmten Tages. Ob sich dieser Preis für dich lohnt, ist eine persönliche Einschätzung deiner Vorlieben und deiner Gruppe. Öffne den aktuellen Shop erneut, wenn du tatsächlich kaufen möchtest.',
        ],
      },
    ],
    faq: { eyebrow: 'Kurz erklärt', title: 'Häufige Fragen zum PEAK-Preis', items: [
      ['Was kostet PEAK in den USA?', 'Am 25.09.2026 meldete Steam für die USA USD 7.99 Listenpreis und USD 4.95 Angebotspreis. Prüfe vor dem Kauf die aktuelle Produktseite und den Warenkorb.'],
      ['Was kostet PEAK bei Steam?', 'Das hängt von der Shop-Region und einem aktiven Angebot ab. Die Tabelle enthält neun am 25.09.2026 geprüfte Preise; den heutigen Betrag zeigt die regionale Produktseite deines Kontos.'],
      ['Ist der PEAK-Angebotspreis dauerhaft?', 'Nein. USD 4.95 und die anderen reduzierten Beträge wurden bei einer einzelnen Abfrage beobachtet. Steam lieferte kein Enddatum, daher wird keine Fortsetzung behauptet.'],
      ['Warum kostet PEAK je nach Land unterschiedlich viel?', 'Regionale Steam-Shops können verschiedene Währungen und Preise anzeigen. Der Vergleich dokumentiert die offiziellen Daten, erklärt oder prognostiziert aber keine Preisentscheidungen des Publishers.'],
      ['Enthält die Seite Preise für PlayStation oder Xbox?', 'Nein. Verglichen werden ausschließlich Steam-Shops. Lies den [[link:room-codes|PEAK-Plattformleitfaden]] und prüfe die aktuelle Verfügbarkeit im jeweiligen offiziellen Store.'],
      ['Ist hier der historische Tiefstpreis von PEAK bestätigt?', 'Nein. Eine vollständige offizielle Preisreihe lag bei der Recherche nicht vor, daher wird kein Betrag als historischer Tiefstpreis bezeichnet.'],
    ] },
    source: { eyebrow: 'Quellen und Grenzen', title: 'Offizielle Steam-Daten mit Prüfdatum', body: 'Listen- und Angebotspreise stammen aus der offiziellen Steam-App-Details-Antwort für die neun aufgeführten Ländercodes vom 25.09.2026. Die öffentliche PEAK-Produktseite ist unten verlinkt. Der Rabatt war in der Antwort sichtbar, ein Enddatum jedoch nicht. Prüfe für einen Kauf die aktuelle Seite und den Warenkorb. Diese unabhängige Fanreferenz verkauft das Spiel nicht.', links: [['Offizielle PEAK-Seite bei Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Offizielle App-Details (US-Shop)', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'Was ist PEAK?'], ['room-codes', 'Plattformen und Mehrspieler'], ['peak-game-update', 'Offizielle PEAK-Updates']], relatedLabel: 'Weitere PEAK-Leitfäden',
  },
  fr: {
    meta: {
      title: 'Prix de PEAK : tarifs Steam par région',
      description: 'Comparez les tarifs normal et promotionnel de PEAK dans neuf régions Steam, relevés le 25 septembre 2026. Vérifiez le montant actuel avant l’achat.',
      schema: 'Comparaison datée des tarifs normal et promotionnel de PEAK dans neuf régions Steam, avec les limites des données et les étapes de vérification du prix actuel.',
    },
    primaryKeyword: '',
    eyebrow: 'Relevé Steam daté',
    h1: 'Prix de PEAK : comparaison Steam par région',
    intro: 'Le prix de PEAK dépend de la région de la boutique Steam. Dans les données officielles consultées le 25 septembre 2026, le tarif normal américain était de USD 7.99 et le prix promotionnel observé de USD 4.95. Les huit autres marchés vérifiés affichaient eux aussi une remise de 38 % ce jour-là. Ces montants sont datés et ne garantissent pas que la promotion soit encore active. Comparez le tableau, puis vérifiez le prix réel dans votre boutique et votre panier Steam.',
    answerLabel: 'Réponse courte',
    answer: 'Au relevé du 25 septembre 2026, PEAK était affiché à USD 7.99 aux États-Unis et CNY 33.00 en Chine avant réduction. Les données officielles Steam signalaient des tarifs promotionnels temporaires de USD 4.95 et CNY 20.46 ; les neuf marchés vérifiés bénéficiaient alors d’une remise de 38 %. Les prix, offres, devises et totaux peuvent évoluer. Utilisez le tableau comme comparaison datée et fiez-vous à la boutique régionale et au panier de votre compte au moment de l’achat.',
    tocLabel: 'Dans cette page', tocFaq: 'FAQ sur les prix',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'Visuel officiel PEAK montrant des scouts en route vers le dernier sommet', 'Visuel de la boutique officielle PEAK pour identifier le jeu ; il ne montre aucun prix ni aucune promotion.'),
    sections: [
      {
        id: 'price-by-region', title: 'Prix de PEAK sur Steam selon la région',
        paragraphs: [
          'Le tableau reprend les tarifs normal et promotionnel renvoyés par les données régionales officielles de Steam le 25 septembre 2026. Chaque ligne conserve la devise du marché. Lors de cette consultation unique, les neuf boutiques affichaient une réduction de 38 %. La réponse ne précisait pas la date de fin de l’offre : ce relevé ne permet donc pas de savoir combien de temps elle a duré ni si elle est encore active.',
          'Cette comparaison aide à préparer un budget ou à discuter du prix avec des amis installés ailleurs. Elle ne garantit pas le montant du panier d’un autre compte. La région du compte, les taxes locales, le moyen de paiement et l’offre du moment peuvent modifier le total affiché. Si la boutique actuelle diffère du tableau, retenez la page associée à votre compte.',
        ],
        table: { caption: 'Prix officiels PEAK sur Steam relevés le 25 septembre 2026', headers: ['Marché Steam', 'Tarif normal', 'Promotion relevée'], rows: priceRows.fr },
        afterTable: 'Les montants correspondent aux codes régionaux interrogés ce jour-là. Ils ne prédisent pas les prochains tarifs et ne constituent pas un historique des prix les plus bas. Gardez la région Steam de votre compte conforme à votre résidence réelle et aux règles en vigueur.',
      },
      {
        id: 'list-price-and-sale', title: 'Tarif normal et remise temporaire Steam',
        paragraphs: [
          'Le tarif normal sert de référence lorsqu’aucune remise n’est affichée. Le prix promotionnel ne s’applique que pendant une offre active sur Steam. Le 25 septembre, les neuf marchés vérifiés affichaient un montant inférieur de 38 % au tarif normal. La réponse officielle ne donnait pas de date de fin.',
          'Une recherche sur le prix de PEAK peut mélanger ces deux montants. Lisez les colonnes séparément et considérez la remise comme une observation datée. Avant de payer, actualisez la page de votre région et vérifiez le panier. Une ancienne publication ou un extrait de recherche ne prouve pas le prix du jour.',
        ],
        bullets: [['Tarif normal', 'Montant habituel renvoyé par la boutique régionale lors de la vérification.'], ['Prix promotionnel', 'Remise observée le 25 septembre 2026 ; sa date de fin n’a pas été renvoyée.'], ['Montant du panier', 'Total actuel de votre achat, avec les frais locaux éventuellement applicables.']],
      },
      {
        id: 'what-the-price-covers', title: 'Que comprend l’achat de PEAK ?',
        paragraphs: [
          'PEAK est un jeu de survie et d’escalade en coopération vendu sur Steam. Le groupe prépare un itinéraire, franchit des terrains changeants, gère des ressources limitées et aide les autres scouts après une erreur. L’image de jeu ci-dessous illustre ce contexte ; elle ne montre ni le prix ni une édition particulière.',
          'Ce guide compare uniquement la fiche standard de PEAK sur Steam. Il ne prétend pas qu’un contenu facultatif, un lot, une bande-son ou une future édition sont inclus si la fiche actuelle ne le précise pas. Vérifiez la section d’achat lorsqu’il existe plusieurs packs. Le contenu du jeu et sa disponibilité sur une plateforme sont distincts du tarif régional.',
          'Pour découvrir la boucle coopérative et les cartes avant l’achat, consultez notre [[link:what-is-peak-game|guide pour comprendre PEAK]]. Il peut aider votre groupe à décider si le jeu lui convient ; la boutique officielle reste la référence pour le produit vendu.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Scouts de PEAK qui grimpent ensemble en direction du sommet', 'Capture de gameplay Steam officielle : elle montre l’escalade coopérative, pas un prix.'),
      },
      {
        id: 'check-live-steam-price', title: 'Vérifier le prix actuel de PEAK sur Steam',
        paragraphs: [
          'Pour connaître le montant associé à votre compte, ouvrez la fiche régionale officielle au lieu de vous fier à un extrait de recherche ou à un ancien comparatif. Vérifiez la devise et l’étiquette de remise, puis contrôlez le panier juste avant le paiement. Changer uniquement la langue de la page ne prouve pas que la région de la boutique a changé.',
          'La vérification prend peu de temps et évite la plupart des confusions liées aux anciens prix. Si un ami annonce un autre montant, comparez d’abord le pays et la devise de chaque boutique. Les deux prix peuvent être exacts à des dates ou dans des régions différentes. Ne changez pas le pays du compte pour reproduire une ligne de ce guide.',
        ],
        bullets: [['1. Ouvrir la fiche officielle', 'Utilisez le lien PEAK des sources et vérifiez la région de la boutique connectée.'], ['2. Lire la devise et l’offre', 'Distinguez le tarif normal de la remise affichée et notez la date.'], ['3. Contrôler le panier', 'Confirmez le total actuel et les éventuels frais locaux avant de payer.'], ['4. Vérifier la plateforme à part', 'Cette page compare les prix Steam ; consultez le [[link:room-codes|guide des plateformes et du multijoueur]] séparément.']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Un scout de PEAK utilise une corde près d’un danger de lave', 'Capture de gameplay Steam officielle pour illustrer le jeu, séparée du contrôle du tarif.'),
      },
      {
        id: 'price-history-and-buying-decision', title: 'Cette page peut-elle prévoir la prochaine promotion ?',
        paragraphs: [
          'Non. Un relevé à une seule date ne permet pas de connaître le calendrier des remises, le prix le plus bas passé ou la prochaine promotion. Consultez la fiche Steam et les annonces officielles pour une offre en cours. Nous n’ajoutons pas de graphique historique, car cette recherche n’a pas trouvé de série complète et vérifiable de prix PEAK provenant d’une source de première main.',
          'Acheter ou attendre dépend de votre budget et du nombre de personnes qui joueront avec vous. Vous pouvez patienter si cela correspond à vos priorités, mais ne prenez pas le relevé de septembre pour une promesse de nouvelle remise. Pour les questions de compatibilité ou de multijoueur, lisez le [[link:room-codes|guide des plateformes PEAK]] au lieu de tirer une conclusion d’un tableau de prix.',
          'Les montants présentés sont des données officielles relevées un jour précis. Leur intérêt pour vous dépend de vos préférences et de votre groupe. Ouvrez de nouveau la fiche en direct au moment de l’achat.',
        ],
      },
    ],
    faq: { eyebrow: 'Réponses rapides', title: 'FAQ sur le prix de PEAK', items: [
      ['Combien coûte PEAK aux États-Unis ?', 'Le 25 septembre 2026, Steam indiquait USD 7.99 au tarif normal et USD 4.95 en promotion aux États-Unis. Vérifiez la fiche et le panier actuels avant l’achat.'],
      ['Combien coûte PEAK sur Steam ?', 'Le montant dépend de la région de la boutique et d’une éventuelle offre active. Le tableau conserve neuf tarifs relevés le 25 septembre 2026 ; la fiche régionale de votre compte indique le prix du jour.'],
      ['Le prix promotionnel de PEAK est-il permanent ?', 'Non. USD 4.95 et les autres montants réduits ont été observés lors d’un seul relevé. Steam n’a pas fourni de date de fin, donc cette page ne prétend pas que l’offre continue.'],
      ['Pourquoi PEAK n’a-t-il pas le même prix dans chaque pays ?', 'Les boutiques Steam peuvent afficher des devises et des prix régionaux différents. Le tableau consigne les données officielles sans expliquer ni prédire les décisions tarifaires de l’éditeur.'],
      ['Cette comparaison couvre-t-elle PlayStation ou Xbox ?', 'Non, elle porte uniquement sur Steam. Consultez le [[link:room-codes|guide des plateformes PEAK]] et vérifiez la disponibilité actuelle auprès de la boutique officielle concernée.'],
      ['Le plus bas prix historique de PEAK est-il vérifié ?', 'Non. La recherche n’a pas trouvé de série complète de première main ; aucun montant n’est donc qualifié de plus bas historique.'],
    ] },
    source: { eyebrow: 'Sources et limites', title: 'Données Steam officielles avec date de relevé', body: 'Les tarifs normal et promotionnel proviennent de la réponse officielle Steam app-details pour les neuf codes pays indiqués, consultée le 25 septembre 2026. La fiche publique de PEAK est liée ci-dessous. La réponse enregistrait la remise, mais pas sa date de fin. Pour acheter, vérifiez la page et le panier actuels. Ce guide indépendant ne vend pas le jeu.', links: [['Fiche officielle de PEAK sur Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Données officielles app-details (boutique US)', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'Qu’est-ce que PEAK ?'], ['room-codes', 'Plateformes et multijoueur'], ['peak-game-update', 'Actualités officielles de PEAK']], relatedLabel: 'Autres guides PEAK',
  },
  pt: {
    meta: {
      title: 'Preço de PEAK: Steam por região',
      description: 'Compare os preços normal e promocional de PEAK em nove regiões Steam, consultados em 25 de setembro de 2026. Confira o valor atual antes de comprar.',
      schema: 'Comparação datada dos preços normal e promocional de PEAK em nove regiões Steam, com limites claros e instruções para conferir o valor atual.',
    },
    primaryKeyword: '',
    eyebrow: 'Registro de preço Steam com data',
    h1: 'Preço de PEAK: comparação Steam por região',
    intro: 'O preço de PEAK depende da região da loja Steam. Nos dados oficiais consultados em 25 de setembro de 2026, a loja dos EUA mostrava o preço normal de USD 7.99 e uma promoção temporária por USD 4.95. Os outros oito mercados verificados também tinham 38% de desconto naquele momento. São valores datados, não uma garantia de que a promoção continue. Compare a tabela e confira o preço da sua própria conta Steam antes de comprar.',
    answerLabel: 'Resposta curta',
    answer: 'Na consulta de 25 de setembro de 2026, PEAK estava listado por USD 7.99 nos EUA e CNY 33.00 na China antes dos descontos. Os dados oficiais da Steam também mostravam preços promocionais temporários de USD 4.95 e CNY 20.46; os nove mercados verificados estavam com 38% de desconto naquele momento. Preços, promoções, moedas e valores finais podem mudar. Use a tabela como uma comparação datada e considere definitivo o preço da loja regional e do carrinho da sua conta.',
    tocLabel: 'Nesta página', tocFaq: 'Perguntas sobre preço',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'Arte oficial de PEAK mostrando exploradores a caminho do último cume', 'Arte da loja oficial de PEAK para identificar o jogo; não mostra preço nem promoção.'),
    sections: [
      {
        id: 'price-by-region', title: 'Preço de PEAK na Steam por região',
        paragraphs: [
          'A tabela registra os preços normal e promocional retornados pelos dados regionais oficiais da Steam em 25 de setembro de 2026. Cada linha mantém a moeda daquele mercado. Naquela consulta, as nove lojas mostravam um desconto de 38%. A resposta não trazia a data final da oferta, então não é possível confirmar quanto tempo ela durou ou se ainda está ativa.',
          'A comparação ajuda a planejar um orçamento ou conversar sobre o preço com amigos de outros países, mas não garante o valor do carrinho de outra conta. A região da loja, impostos locais, forma de pagamento e promoção vigente podem alterar o total. Se a página atual diferir da tabela, confie na loja vinculada à sua própria conta.',
        ],
        table: { caption: 'Preços oficiais de PEAK na Steam consultados em 25 de setembro de 2026', headers: ['Mercado Steam', 'Preço normal', 'Promoção na consulta'], rows: priceRows.pt },
        afterTable: 'Os valores correspondem aos códigos regionais consultados naquela data; não são uma previsão nem um gráfico histórico de preços mínimos. Mantenha a região da conta Steam compatível com sua residência real e com as regras atuais da plataforma.',
      },
      {
        id: 'list-price-and-sale', title: 'Preço normal e promoção temporária da Steam',
        paragraphs: [
          'O preço normal é a referência exibida quando não há desconto. O promocional é temporário e só vale enquanto a Steam mostra uma oferta ativa. Em 25 de setembro, o valor observado nos nove mercados era 38% menor que o preço normal. A resposta oficial não informou quando a promoção terminava.',
          'Buscas como “quanto custa PEAK?” podem misturar os dois valores. Leia as colunas separadamente e trate o desconto somente como um registro datado. Antes de pagar, atualize a página regional e confira o carrinho. Uma publicação antiga ou um trecho de busca não comprova o preço de hoje.',
        ],
        bullets: [['Preço normal', 'Valor regular retornado pela loja regional na consulta.'], ['Preço promocional', 'Desconto observado em 25 de setembro de 2026; a data final não foi informada.'], ['Total do carrinho', 'Valor atual da compra, incluindo cobranças locais que possam ser aplicadas.']],
      },
      {
        id: 'what-the-price-covers', title: 'O que você compra ao pagar por PEAK',
        paragraphs: [
          'PEAK é um jogo cooperativo de escalada e sobrevivência vendido pela Steam. O grupo planeja rotas, atravessa terrenos variáveis, administra recursos limitados e ajuda outros exploradores quando algo dá errado. A imagem abaixo mostra o contexto do jogo; ela não documenta preço, recursos da loja ou uma edição específica.',
          'Este guia compara apenas a página padrão de PEAK na Steam. Não afirma que conteúdo opcional, pacote, trilha sonora ou edição futura estejam incluídos sem confirmação da página atual. Verifique a área de compra se aparecer mais de um pacote. Conteúdo do jogo e disponibilidade em plataformas são questões separadas do preço regional.',
          'Para entender o ciclo cooperativo e os mapas, leia nosso [[link:what-is-peak-game|guia sobre o que é PEAK]]. Ele ajuda a decidir se o jogo combina com seu grupo, enquanto a loja oficial continua sendo a referência sobre o item comprado.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Exploradores de PEAK escalando juntos rumo ao cume', 'Captura oficial de gameplay da Steam: mostra a escalada cooperativa, não uma tela de preços.'),
      },
      {
        id: 'check-live-steam-price', title: 'Como conferir o preço atual de PEAK na Steam',
        paragraphs: [
          'Para saber quanto sua conta pagaria, abra a página regional oficial em vez de confiar em um resultado de busca ou comparação antiga. Confira a moeda e o desconto e veja novamente o carrinho antes de pagar. Mudar somente o idioma da página não comprova que a região da loja foi alterada.',
          'A verificação leva pouco tempo e evita confusão com preços desatualizados. Se um amigo citar outro valor, compare primeiro o país e a moeda mostrados em cada loja. Os dois preços podem estar certos em regiões ou datas diferentes. Não mude o país da conta apenas para repetir um valor desta tabela.',
        ],
        bullets: [['1. Abra a página oficial', 'Use o link de PEAK nas fontes e confirme a região da loja da conta conectada.'], ['2. Confira a moeda e a oferta', 'Separe o preço normal do desconto visível e anote a data.'], ['3. Veja o carrinho', 'Confirme o total atual e possíveis cobranças locais antes de concluir.'], ['4. Verifique a plataforma à parte', 'Esta página compara preços Steam; consulte o [[link:room-codes|guia de plataformas e multijogador]] separadamente.']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Explorador de PEAK usa uma corda perto de um perigo de lava', 'Captura oficial de gameplay da Steam para mostrar o jogo, separada da consulta de preços.'),
      },
      {
        id: 'price-history-and-buying-decision', title: 'Este guia prevê a próxima promoção de PEAK?',
        paragraphs: [
          'Não. Uma observação com data não estabelece calendário de promoções, menor preço histórico nem próximo desconto. Consulte a página do produto e os anúncios oficiais da Steam para saber se há uma oferta ativa. Não incluímos um gráfico de histórico porque a pesquisa não encontrou uma série completa e verificável de preços de PEAK em fonte primária.',
          'Comprar ou esperar depende do seu orçamento e de quantas pessoas vão jogar com você. Espere se isso fizer sentido para seus planos, mas não trate a consulta de setembro como promessa de uma nova promoção. Para dúvidas de plataforma ou multijogador, consulte o [[link:room-codes|guia de plataformas de PEAK]] em vez de inferir suporte pela tabela de preços.',
          'Os valores são dados oficiais de um dia específico. Se o preço vale a pena para você é uma decisão pessoal baseada nas preferências do grupo. Abra novamente a página atual quando estiver pronto para comprar.',
        ],
      },
    ],
    faq: { eyebrow: 'Respostas rápidas', title: 'FAQ sobre o preço de PEAK', items: [
      ['Quanto custa PEAK nos EUA?', 'Em 25 de setembro de 2026, os dados oficiais mostravam USD 7.99 como preço normal e USD 4.95 em promoção nos EUA. Confira a página e o carrinho atuais antes de comprar.'],
      ['Quanto custa PEAK na Steam?', 'Depende da região da loja e de uma promoção ativa. A tabela registra nove preços consultados em 25 de setembro de 2026; a página regional da sua conta mostra o valor de hoje.'],
      ['O preço promocional de PEAK é permanente?', 'Não. USD 4.95 e os demais valores com desconto foram observados em uma consulta. A resposta da Steam não trouxe data final, então não afirmamos que a oferta continua.'],
      ['Por que PEAK custa valores diferentes em cada país?', 'As lojas regionais da Steam podem mostrar moedas e preços diferentes. A tabela registra os dados oficiais consultados, sem explicar ou prever as decisões de preço da publicadora.'],
      ['Este guia inclui preços de PlayStation ou Xbox?', 'Não; ele compara somente lojas Steam. Leia o [[link:room-codes|guia de plataformas de PEAK]] e confirme a disponibilidade atual na loja oficial correspondente.'],
      ['O menor preço histórico de PEAK está confirmado?', 'Não. A pesquisa não encontrou uma série histórica primária completa, por isso nenhum valor é chamado de mínimo histórico.'],
    ] },
    source: { eyebrow: 'Fontes e limites', title: 'Dados oficiais da Steam com data de consulta', body: 'Os preços normal e promocional vieram da resposta oficial de detalhes do aplicativo Steam para os nove códigos de país listados, consultada em 25 de setembro de 2026. A página pública de PEAK está abaixo. A resposta registrou o desconto observado, mas não sua data final. Confira a página e o carrinho atuais antes de comprar. Este guia independente não vende o jogo.', links: [['Página oficial de PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Dados oficiais do app (loja dos EUA)', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'O que é PEAK'], ['room-codes', 'Plataformas e multijogador'], ['peak-game-update', 'Atualizações oficiais de PEAK']], relatedLabel: 'Mais guias de PEAK',
  },
  it: {
    meta: {
      title: 'Prezzo di PEAK: Steam per regione',
      description: 'Confronta i prezzi standard e scontati di PEAK in nove regioni Steam, rilevati il 25 settembre 2026. Controlla il totale attuale prima di acquistare.',
      schema: 'Confronto datato dei prezzi standard e promozionali di PEAK in nove regioni Steam, con limiti chiari e passaggi per verificare il prezzo attuale.',
    },
    primaryKeyword: '',
    eyebrow: 'Rilevazione Steam con data',
    h1: 'Prezzo di PEAK: confronto Steam per regione',
    intro: 'Il prezzo di PEAK dipende dalla regione del negozio Steam. Nei dati ufficiali consultati il 25 settembre 2026, il prezzo standard negli Stati Uniti era USD 7.99 e il prezzo in offerta era USD 4.95. Anche gli altri otto mercati verificati mostravano in quel momento uno sconto del 38%. Sono importi datati, non la garanzia che l’offerta sia ancora attiva. Confronta la tabella e controlla il prezzo del tuo account Steam prima di acquistare.',
    answerLabel: 'Risposta breve',
    answer: 'Alla verifica del 25 settembre 2026, PEAK era in vendita a USD 7.99 negli Stati Uniti e CNY 33.00 in Cina prima degli sconti. I dati ufficiali di Steam mostravano anche prezzi promozionali temporanei di USD 4.95 e CNY 20.46; tutti i nove mercati controllati avevano uno sconto del 38% in quel momento. Prezzi, offerte, valuta e totale possono cambiare. Usa la tabella come confronto datato e considera definitivo il negozio regionale e il carrello del tuo account al momento dell’acquisto.',
    tocLabel: 'In questa pagina', tocFaq: 'FAQ sui prezzi',
    heroImage: media('/media/peak-final-ascent.webp', 1200, 675, 'Grafica ufficiale PEAK con gli esploratori diretti verso la vetta finale', 'Grafica del negozio ufficiale PEAK per riconoscere il gioco; non mostra prezzi o sconti.'),
    sections: [
      {
        id: 'price-by-region', title: 'Prezzo di PEAK su Steam per regione',
        paragraphs: [
          'La tabella registra i prezzi standard e promozionali restituiti dai dati regionali ufficiali di Steam il 25 settembre 2026. Ogni riga usa la valuta di quel mercato. In quell’unica verifica, tutti e nove i negozi indicavano uno sconto del 38%. La risposta di Steam non riportava la data di fine dell’offerta, quindi non possiamo confermare quanto sia durata o se sia ancora attiva.',
          'Il confronto regionale è utile per preparare un budget o parlare del prezzo con amici in altri Paesi, ma non garantisce l’importo finale di un altro account. Regione del negozio, imposte locali, metodo di pagamento e promozione corrente possono modificare il totale. Se il negozio in tempo reale mostra un importo diverso, fa fede la pagina associata al tuo account.',
        ],
        table: { caption: 'Prezzi ufficiali Steam di PEAK verificati il 25 settembre 2026', headers: ['Mercato Steam', 'Prezzo standard', 'Offerta alla verifica'], rows: priceRows.it },
        afterTable: 'Gli importi corrispondono ai codici regionali interrogati quel giorno; non sono una previsione né uno storico dei minimi. Mantieni la regione dell’account Steam coerente con la residenza effettiva e con le regole attuali.',
      },
      {
        id: 'list-price-and-sale', title: 'Prezzo standard e sconto temporaneo Steam',
        paragraphs: [
          'Il prezzo standard è il riferimento mostrato quando non c’è uno sconto. Il prezzo promozionale è temporaneo e vale quando Steam presenta un’offerta attiva. Il 25 settembre, nei nove mercati verificati il valore era inferiore del 38% rispetto al prezzo standard. La risposta ufficiale non specificava quando sarebbe terminata la promozione.',
          'Una ricerca come “quanto costa PEAK?” può confondere i due importi. Leggi separatamente le colonne e considera lo sconto soltanto come un dato datato. Prima di pagare, aggiorna la pagina regionale e controlla il carrello. Un vecchio post o un estratto dei risultati di ricerca non dimostra il prezzo di oggi.',
        ],
        bullets: [['Prezzo standard', 'Importo regolare restituito dal negozio regionale al momento della verifica.'], ['Prezzo promozionale', 'Sconto osservato il 25 settembre 2026; la data di fine non è stata restituita.'], ['Totale del carrello', 'Importo attuale dell’acquisto, incluse eventuali spese locali applicabili.']],
      },
      {
        id: 'what-the-price-covers', title: 'Che cosa acquisti comprando PEAK',
        paragraphs: [
          'PEAK è un gioco cooperativo di arrampicata e sopravvivenza venduto su Steam. Il gruppo pianifica il percorso, supera terreni variabili, gestisce risorse limitate e aiuta gli altri esploratori dopo un errore. L’immagine di gioco qui sotto mostra il contesto del prodotto, non il prezzo, le funzioni del negozio o una specifica edizione.',
          'Questa guida confronta solo la pagina standard di PEAK su Steam. Non afferma che siano inclusi contenuti opzionali, un bundle, la colonna sonora o un’edizione futura se la pagina attuale non lo specifica. Controlla la sezione di acquisto se compaiono più pacchetti. Contenuti e disponibilità sulle piattaforme sono domande diverse dal prezzo regionale.',
          'Per conoscere il ciclo cooperativo e le mappe prima dell’acquisto, leggi la nostra [[link:what-is-peak-game|guida per capire PEAK]]. Aiuta a valutare se il gioco è adatto al gruppo; per l’articolo che compri resta valido il negozio ufficiale.',
        ],
        image: media('/media/peak-coop-climb.webp', 1200, 675, 'Esploratori di PEAK che scalano insieme verso una vetta', 'Schermata di gioco ufficiale Steam: mostra l’arrampicata cooperativa, non il prezzo.'),
      },
      {
        id: 'check-live-steam-price', title: 'Come controllare il prezzo attuale di PEAK su Steam',
        paragraphs: [
          'Per sapere quanto pagherebbe il tuo account, apri la pagina regionale ufficiale invece di fidarti di un risultato di ricerca o di un vecchio confronto. Controlla valuta e sconto, poi verifica di nuovo il carrello subito prima del pagamento. Cambiare solo la lingua della pagina non dimostra che sia cambiata la regione del negozio.',
          'La verifica richiede poco tempo e riduce la confusione causata dai prezzi non aggiornati. Se un amico indica un importo diverso, confronta prima Paese e valuta dei due negozi. Entrambi possono essere corretti in date o regioni diverse. Non cambiare il Paese dell’account solo per ottenere il prezzo di una riga della tabella.',
        ],
        bullets: [['1. Apri la pagina ufficiale', 'Usa il collegamento PEAK nelle fonti e verifica la regione dello store del tuo account.'], ['2. Leggi valuta e offerta', 'Distingui il prezzo standard dallo sconto mostrato e annota la data.'], ['3. Controlla il carrello', 'Conferma totale attuale ed eventuali costi locali prima dell’acquisto.'], ['4. Verifica la piattaforma a parte', 'Questa pagina confronta Steam; per piattaforme e multiplayer leggi la [[link:room-codes|guida PEAK alle piattaforme]].']],
        image: media('/media/peak-map-route.webp', 1200, 675, 'Un esploratore di PEAK usa una corda vicino a un pericolo di lava', 'Schermata di gioco ufficiale Steam per contestualizzare il prodotto, distinta dal controllo del prezzo.'),
      },
      {
        id: 'price-history-and-buying-decision', title: 'Questa pagina può prevedere il prossimo sconto di PEAK?',
        paragraphs: [
          'No. Una sola osservazione datata non stabilisce il calendario degli sconti, il prezzo storico più basso o la prossima promozione. Per verificare un’offerta attiva, consulta la pagina Steam e gli annunci ufficiali. Non pubblichiamo un grafico storico perché la ricerca non ha trovato una serie completa e verificabile dei prezzi PEAK da una fonte primaria.',
          'Decidere se acquistare dipende dal budget e dal numero di persone che giocheranno con te. Puoi aspettare se si adatta ai tuoi piani, ma non considerare i dati di settembre una promessa di un nuovo sconto. Per dubbi su piattaforme o multiplayer, usa la [[link:room-codes|guida PEAK a piattaforme e stanze]] invece di dedurre il supporto da una tabella dei prezzi.',
          'Gli importi sono dati ufficiali di un giorno specifico. Valutare se siano convenienti è una scelta personale basata sulle preferenze e sul gruppo. Riapri la pagina aggiornata quando sarai pronto ad acquistare.',
        ],
      },
    ],
    faq: { eyebrow: 'Risposte rapide', title: 'FAQ sul prezzo di PEAK', items: [
      ['Quanto costa PEAK negli Stati Uniti?', 'Il 25 settembre 2026 i dati ufficiali mostravano USD 7.99 come prezzo standard e USD 4.95 in offerta negli Stati Uniti. Prima di acquistare controlla pagina e carrello attuali.'],
      ['Quanto costa PEAK su Steam?', 'Dipende dalla regione del negozio e dall’eventuale offerta attiva. La tabella conserva nove prezzi verificati il 25 settembre 2026; la pagina regionale del tuo account mostra l’importo odierno.'],
      ['Il prezzo scontato di PEAK è permanente?', 'No. USD 4.95 e gli altri importi ridotti sono stati osservati in una sola verifica. Steam non ha restituito la data di fine, quindi non affermiamo che l’offerta sia ancora attiva.'],
      ['Perché PEAK costa importi diversi nei vari Paesi?', 'I negozi regionali Steam possono mostrare valute e prezzi regionali diversi. La tabella registra dati ufficiali senza spiegare o prevedere le decisioni sui prezzi dell’editore.'],
      ['La guida include i prezzi PlayStation o Xbox?', 'No, confronta solo i negozi Steam. Consulta la [[link:room-codes|guida PEAK alle piattaforme]] e verifica la disponibilità attuale sul relativo negozio ufficiale.'],
      ['È verificato il prezzo minimo storico di PEAK?', 'No. La ricerca non ha trovato una serie storica primaria completa, quindi nessun importo viene chiamato minimo storico.'],
    ] },
    source: { eyebrow: 'Fonti e limiti', title: 'Dati ufficiali Steam con data di verifica', body: 'I prezzi standard e promozionali provengono dalla risposta ufficiale Steam app-details per i nove codici Paese elencati, consultata il 25 settembre 2026. Qui sotto trovi la pagina pubblica di PEAK. La risposta registrava lo sconto osservato ma non la sua data finale; per acquistare controlla pagina e carrello attuali. Questa guida indipendente non vende il gioco.', links: [['Pagina ufficiale PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Dati ufficiali app-details (negozio USA)', 'https://store.steampowered.com/api/appdetails?appids=3527290&cc=us&l=en']] },
    related: [['what-is-peak-game', 'Che cos’è PEAK'], ['room-codes', 'Piattaforme e multiplayer'], ['peak-game-update', 'Aggiornamenti ufficiali di PEAK']], relatedLabel: 'Altre risorse PEAK',
  },
};
