import { peakGameUpdateTranslations } from './article-update-locales.mjs';
import { whatIsPeakTranslations } from './article-beginner-locales.mjs';

const liveMapCopy = {
  en: {
    eyebrow: 'Build-time daily map',
    title: "Today's PEAK map",
    routeLabel: 'Daily biome sequence',
    verified: 'Verified build data',
    pending: 'Data pending',
    pendingValue: 'Pending verification',
    biome: 'Biome',
    recordDate: 'Record date',
    nextReset: 'Next reset',
    source: 'Source',
    verifiedSource: 'Verified source',
    sourcePending: 'Source pending',
    verifiedNote: 'This snapshot is written during the build. Confirm the route in PEAK after a reset or update.',
    pendingNote: 'The source has not supplied enough dated location fields for this build. Confirm the active route in PEAK.',
  },
  zh: {
    eyebrow: '\u6784\u5efa\u65f6\u6bcf\u65e5\u5730\u56fe',
    title: '\u4eca\u65e5\u7684 PEAK \u5730\u56fe',
    routeLabel: '\u6bcf\u65e5\u751f\u7269\u7fa4\u7cfb\u5e8f\u5217',
    verified: '\u5df2\u9a8c\u8bc1\u7684\u6784\u5efa\u6570\u636e',
    pending: '\u6570\u636e\u5f85\u786e\u8ba4',
    pendingValue: '\u5f85\u9a8c\u8bc1',
    biome: '\u751f\u7269\u7fa4\u7cfb',
    recordDate: '\u8bb0\u5f55\u65e5\u671f',
    nextReset: '\u4e0b\u6b21\u91cd\u7f6e',
    source: '\u6765\u6e90',
    verifiedSource: '\u5df2\u9a8c\u8bc1\u7684\u6765\u6e90',
    sourcePending: '\u6765\u6e90\u5f85\u786e\u8ba4',
    verifiedNote: '\u6b64\u5feb\u7167\u5728\u6784\u5efa\u65f6\u5199\u5165\u9875\u9762\u3002\u91cd\u7f6e\u6216\u66f4\u65b0\u540e\uff0c\u8bf7\u5728 PEAK \u4e2d\u786e\u8ba4\u8def\u7ebf\u3002',
    pendingNote: '\u5f53\u524d\u6784\u5efa\u6ca1\u6709\u8db3\u591f\u7684\u65e5\u671f\u548c\u4f4d\u7f6e\u5b57\u6bb5\u3002\u8bf7\u5728 PEAK \u4e2d\u786e\u8ba4\u6d3b\u52a8\u8def\u7ebf\u3002',
  },
  es: {
    eyebrow: 'Mapa diario generado en build',
    title: 'Mapa de PEAK de hoy',
    routeLabel: 'Secuencia diaria de biomas',
    verified: 'Datos verificados del build',
    pending: 'Datos pendientes',
    pendingValue: 'Pendiente de verificaci\u00f3n',
    biome: 'Bioma',
    recordDate: 'Fecha del registro',
    nextReset: 'Pr\u00f3ximo reinicio',
    source: 'Fuente',
    verifiedSource: 'Fuente verificada',
    sourcePending: 'Fuente pendiente',
    verifiedNote: 'Esta instant\u00e1nea se escribe durante el build. Confirma la ruta en PEAK despu\u00e9s de un reinicio o una actualizaci\u00f3n.',
    pendingNote: 'La fuente no ha aportado suficientes datos de ubicaci\u00f3n fechados para este build. Confirma la ruta activa en PEAK.',
  },
  ja: {
    eyebrow: '\u30d3\u30eb\u30c9\u6642\u306e\u30c7\u30a4\u30ea\u30fc\u30de\u30c3\u30d7',
    title: '\u4eca\u65e5\u306e PEAK \u30de\u30c3\u30d7',
    routeLabel: '\u30c7\u30a4\u30ea\u30fc\u30d0\u30a4\u30aa\u30fc\u30e0\u30b7\u30fc\u30b1\u30f3\u30b9',
    verified: '\u691c\u8a3c\u6e08\u307f\u306e\u30d3\u30eb\u30c9\u30c7\u30fc\u30bf',
    pending: '\u30c7\u30fc\u30bf\u78ba\u8a8d\u4e2d',
    pendingValue: '\u78ba\u8a8d\u5f85\u3061',
    biome: '\u30d0\u30a4\u30aa\u30fc\u30e0',
    recordDate: '\u8a18\u9332\u65e5',
    nextReset: '\u6b21\u306e\u30ea\u30bb\u30c3\u30c8',
    source: '\u53c2\u7167\u5143',
    verifiedSource: '\u691c\u8a3c\u6e08\u307f\u306e\u53c2\u7167\u5143',
    sourcePending: '\u53c2\u7167\u5143\u78ba\u8a8d\u4e2d',
    verifiedNote: '\u3053\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u306f\u30d3\u30eb\u30c9\u4e2d\u306b HTML \u3078\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002\u30ea\u30bb\u30c3\u30c8\u3084\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u5f8c\u306f PEAK \u3067\u30eb\u30fc\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
    pendingNote: '\u3053\u306e\u30d3\u30eb\u30c9\u306b\u5fc5\u8981\u306a\u65e5\u4ed8\u4ed8\u304d\u4f4d\u7f6e\u30c7\u30fc\u30bf\u304c\u53c2\u7167\u5143\u306b\u3042\u308a\u307e\u305b\u3093\u3002 PEAK \u3067\u73fe\u5728\u306e\u30eb\u30fc\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
  },
  fr: {
    eyebrow: 'Carte quotidienne generee au build',
    title: 'Carte PEAK du jour',
    routeLabel: 'Sequence quotidienne de biomes',
    verified: 'Donnees du build verifiees',
    pending: 'Donnees en attente',
    pendingValue: 'Verification en attente',
    biome: 'Biome',
    recordDate: 'Date du releve',
    nextReset: 'Prochaine remise a zero',
    source: 'Source',
    verifiedSource: 'Source verifiee',
    sourcePending: 'Source en attente',
    verifiedNote: 'Cet apercu est ecrit pendant le build. Confirmez la route dans PEAK apres une remise a zero ou une mise a jour.',
    pendingNote: 'La source n a pas fourni assez de donnees de localisation datees pour ce build. Confirmez la route active dans PEAK.',
  },
  de: {
    eyebrow: 'Taegliche Karte aus dem Build',
    title: 'Die heutige PEAK-Karte',
    routeLabel: 'Taegliche Biome-Sequenz',
    verified: 'Verifizierte Build-Daten',
    pending: 'Daten ausstehend',
    pendingValue: 'Verifizierung ausstehend',
    biome: 'Biom',
    recordDate: 'Aufzeichnungsdatum',
    nextReset: 'Naechster Reset',
    source: 'Quelle',
    verifiedSource: 'Verifizierte Quelle',
    sourcePending: 'Quelle ausstehend',
    verifiedNote: 'Dieser Snapshot wird beim Build in die HTML-Datei geschrieben. Pruefe die Route in PEAK nach einem Reset oder Update.',
    pendingNote: 'Die Quelle hat fuer diesen Build nicht genug datierte Ortsdaten geliefert. Pruefe die aktive Route in PEAK.',
  },
  pt: {
    eyebrow: 'Mapa diario escrito no build',
    title: 'Mapa de PEAK de hoje',
    routeLabel: 'Sequencia diaria de biomas',
    verified: 'Dados verificados do build',
    pending: 'Dados pendentes',
    pendingValue: 'Aguardando verificacao',
    biome: 'Bioma',
    recordDate: 'Data do registro',
    nextReset: 'Proximo reinicio',
    source: 'Fonte',
    verifiedSource: 'Fonte verificada',
    sourcePending: 'Fonte pendente',
    verifiedNote: 'Este instantaneo e escrito durante o build. Confirme a rota no PEAK depois de um reinicio ou atualizacao.',
    pendingNote: 'A fonte nao forneceu campos de localizacao datados suficientes para este build. Confirme a rota ativa no PEAK.',
  },
  ko: {
    eyebrow: '\ube4c\ub4dc \uc2dc\uc810\uc758 \uc77c\uc77c \ub9f5',
    title: '\uc624\ub298\uc758 PEAK \ub9f5',
    routeLabel: '\uc77c\uc77c \ubc14\uc774\uc634 \uc21c\uc11c',
    verified: '\uac80\uc99d\ub41c \ube4c\ub4dc \ub370\uc774\ud130',
    pending: '\ub370\uc774\ud130 \ud655\uc778 \uc911',
    pendingValue: '\uac80\uc99d \ub300\uae30',
    biome: '\ubc14\uc774\uc634',
    recordDate: '\uae30\ub85d \ub0a0\uc9dc',
    nextReset: '\ub2e4\uc74c \ub9ac\uc14b',
    source: '\ucd9c\ucc98',
    verifiedSource: '\uac80\uc99d\ub41c \ucd9c\ucc98',
    sourcePending: '\ucd9c\ucc98 \ud655\uc778 \uc911',
    verifiedNote: '\uc774 \uc2a4\ub0c5\uc0f7\uc740 \ube4c\ub4dc \uc2dc \ud398\uc774\uc9c0\uc5d0 \uae30\ub85d\ub429\ub2c8\ub2e4. \ub9ac\uc14b\uc774\ub098 \uc5c5\ub370\uc774\ud2b8 \ud6c4 PEAK\uc5d0\uc11c \ub8e8\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.',
    pendingNote: '\uc774 \ube4c\ub4dc\uc5d0 \ud544\uc694\ud55c \ub0a0\uc9dc \ubc0f \uc704\uce58 \uc815\ubcf4\uac00 \ucda9\ubd84\ud788 \ud655\uc778\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. PEAK\uc5d0\uc11c \ud604\uc7ac \ub8e8\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.',
  },
  it: {
    eyebrow: 'Mappa giornaliera scritta nel build',
    title: 'Mappa di PEAK di oggi',
    routeLabel: 'Sequenza giornaliera dei biomi',
    verified: 'Dati del build verificati',
    pending: 'Dati in attesa',
    pendingValue: 'Verifica in attesa',
    biome: 'Bioma',
    recordDate: 'Data del record',
    nextReset: 'Prossimo reset',
    source: 'Fonte',
    verifiedSource: 'Fonte verificata',
    sourcePending: 'Fonte in attesa',
    verifiedNote: 'Questo snapshot viene scritto durante il build. Conferma il percorso in PEAK dopo un reset o un aggiornamento.',
    pendingNote: 'La fonte non ha fornito abbastanza dati di posizione datati per questo build. Conferma il percorso attivo in PEAK.',
  },
};

export const articleLiveMapCopy = liveMapCopy;

export const articleLocaleTranslations = {
  zh: {
    'peak-biomes-list': {
      meta: {
        title: 'PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868\uff1a\u5168\u90e8\u751f\u7269\u7fa4\u7cfb\u3001\u5730\u56fe\u4e0e\u5730\u5f62\u6307\u5357',
        description: '完整的 PEAK 生物群系列表：查看每个生物群系的地图、地形和规划建议，了解不同路线如何影响装备选择、队伍节奏与安全判断。页面区分已确认信息和需要在当前版本核对的内容；同时说明生物群系与地图、路线的关系。每次重置后查看每日更新的今日地图，并在出发前核对最新来源。适合在出发前快速查阅。',
        schema: '\u8fd9\u4efd PEAK \u751f\u7269\u7fa4\u7cfb\u8d44\u6599\u5305\u542b\u6765\u6e90\u53ef\u6838\u5bf9\u7684\u751f\u7269\u7fa4\u7cfb\u540d\u5355\u3001\u5730\u56fe\u5173\u7cfb\u3001\u5730\u5f62\u5224\u8bfb\u65b9\u6cd5\u3001\u88c5\u5907\u89c4\u5212\u548c\u6bcf\u65e5\u5730\u56fe\u8bb0\u5f55\u3002',
      },
      eyebrow: '\u751f\u7269\u7fa4\u7cfb\u53c2\u8003 - \u6765\u6e90\u53ef\u6838\u5bf9\u7684\u540d\u5355',
      h1: 'PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868',
      intro: '这份 PEAK 生物群系列表列出目前由维护中的地图来源呈现的全部生物群系，说明生物群系名称与路线的关系，并在构建时提供\u300c[[link:map-rotation#today-map|\u4eca\u65e5\u7684 PEAK \u5730\u56fe]]\u300d入口。名单适合用来熟悉术语；真正出发前仍应查看带日期的每日记录。',
      answerLabel: '\u7b80\u77ed\u7b54\u6848',
      answer: '\u5f53\u524d\u53ef\u7531\u6765\u6e90\u6838\u5bf9\u7684 PEAK \u751f\u7269\u7fa4\u7cfb\u5305\u62ec Shore\u3001Tropics\u3001Roots\u3001Alpine\u3001Mesa\u3001Caldera\u3001The Kiln\u3001Gloom \u548c Citadel\u3002\u751f\u7269\u7fa4\u7cfb\u662f\u8def\u7ebf\u4e0a\u7684\u533a\u57df\u6807\u7b7e\uff0c\u4e0d\u7b49\u4e8e\u5b8c\u6574\u5730\u56fe\u3001\u56fa\u5b9a\u5173\u5361\u6570\u6216\u6bcf\u5929\u90fd\u4e00\u6837\u7684\u987a\u5e8f\u3002\u5148\u7528\u4e0b\u8868\u8ba4\u8def\uff0c\u518d\u5728\u6e38\u620f\u4e2d\u786e\u8ba4\u6d3b\u52a8\u8def\u7ebf\u3002',
      tocLabel: '\u672c\u9875\u5185\u5bb9',
      tocFaq: '\u751f\u7269\u7fa4\u7cfb FAQ',
      heroImage: { alt: 'PEAK \u8def\u7ebf\u622a\u56fe\uff0c\u767b\u5c71\u8005\u6b63\u5728\u8270\u96be\u5730\u5f62\u4e2d\u89c4\u5212\u8def\u5f84', caption: 'Steam \u5b98\u65b9\u622a\u56fe - \u5148\u7406\u89e3\u8def\u7ebf\u73af\u5883\uff0c\u518d\u628a\u751f\u7269\u7fa4\u7cfb\u540d\u79f0\u8f6c\u6210\u5b9e\u9645\u8ba1\u5212\u3002' },
      sections: [
        {
          title: '\u5b8c\u6574\u7684 PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868',
          paragraphs: [
            '\u4e0b\u8868\u7684\u540d\u79f0\u6765\u81ea\u6bcf\u65e5\u5730\u56fe\u83b7\u53d6\u5668\u548c\u516c\u5f00\u5730\u56fe\u6765\u6e90\u5f53\u524d\u8bc6\u522b\u7684\u540d\u5355\u3002\u5730\u5f62\u8bf4\u660e\u662f\u89c2\u5bdf\u89d2\u5ea6\uff0c\u5b83\u4eec\u7528\u6765\u63d0\u9192\u4f60\u68c0\u67e5\u4ec0\u4e48\uff0c\u4e0d\u58f0\u79f0\u5305\u542b\u6240\u6709\u5371\u9669\u3001\u7269\u8d44\u8868\u6216\u56fa\u5b9a\u5173\u5361\u5e03\u5c40\u3002',
            '\u5730\u56fe\u3001\u8def\u7ebf\u548c\u751f\u7269\u7fa4\u7cfb\u6709\u5173\u8054\uff0c\u4f46\u4e0d\u80fd\u4e92\u76f8\u66ff\u6362\u3002\u5148\u7528\u751f\u7269\u7fa4\u7cfb\u7406\u89e3\u5927\u81f4\u73af\u5883\uff0c\u518d\u6839\u636e\u5f53\u524d\u5bf9\u5c40\u51b3\u5b9a\u4f55\u65f6\u4fdd\u7559\u4f53\u529b\u548c\u5de5\u5177\u3002',
          ],
          table: {
            caption: 'PEAK \u751f\u7269\u7fa4\u7cfb\u4e0e\u8c28\u614e\u7684\u5730\u5f62\u89c4\u5212\u63d0\u793a',
            headers: ['\u751f\u7269\u7fa4\u7cfb', '\u51fa\u73b0\u4f4d\u7f6e', '\u5730\u5f62\u89c2\u5bdf', '\u89c4\u5212\u65b9\u6cd5'],
            rows: [
              ['Shore', '\u4efb\u4f55\u5305\u542b Shore \u7684\u6765\u6e90\u8def\u7ebf', '\u5148\u68c0\u67e5\u5f00\u9614\u7684\u63a5\u8fd1\u8def\u3001\u8fb9\u7f18\u548c\u9ad8\u5ea6\u53d8\u5316\uff0c\u4e0d\u8981\u9884\u8bbe\u56fa\u5b9a\u7684\u6d77\u5cb8\u5e03\u5c40\u3002', '\u5148\u63a2\u6e05\u7b2c\u4e00\u4e2a\u5fc5\u987b\u505a\u7684\u51b3\u5b9a\uff0c\u8ba9\u961f\u4f0d\u5728\u8def\u7ebf\u6e05\u6670\u524d\u4fdd\u6301\u4e00\u8d77\u3002'],
              ['Tropics', '\u4efb\u4f55\u5305\u542b Tropics \u7684\u6765\u6e90\u8def\u7ebf', '\u53ef\u4ee5\u628a\u5b83\u5f53\u4f5c\u6e29\u6696\u3001\u690d\u88ab\u8302\u5bc6\u7684\u5c9b\u5c7f\u73af\u5883\uff0c\u4f46\u8981\u5728\u5f53\u524d\u5bf9\u5c40\u4e2d\u6838\u5bf9\u89c6\u91ce\u548c\u5371\u9669\u3002', '\u5148\u8bfb\u8def\u7ebf\u3001\u63a7\u5236\u8282\u594f\uff0c\u518d\u51b3\u5b9a\u4f55\u65f6\u4f7f\u7528\u5171\u4eab\u5de5\u5177\u3002'],
              ['Roots', '\u4efb\u4f55\u5305\u542b Roots \u7684\u6765\u6e90\u8def\u7ebf', '\u7559\u610f\u6709\u673a\u7269\u6216\u6811\u6839\u8986\u76d6\u7684\u8def\u7ebf\u7279\u5f81\uff0c\u4f46\u4e0d\u8981\u628a\u540d\u5b57\u5f53\u6210\u5b8c\u6574\u5371\u9669\u624b\u518c\u3002', '\u9884\u7559\u8c03\u6574\u4f4d\u7f6e\u7684\u7a7a\u95f4\uff0c\u5e76\u8bb0\u4e0b\u662f\u54ea\u4e2a\u901a\u9053\u6539\u53d8\u4e86\u961f\u4f0d\u8ba1\u5212\u3002'],
              ['Alpine', '\u4efb\u4f55\u5305\u542b Alpine \u7684\u6765\u6e90\u8def\u7ebf', '\u4ece\u540d\u79f0\u8054\u60f3\u9ad8\u5904\u6216\u5c71\u5730\u73af\u5883\uff0c\u4f46\u4ecd\u8981\u5728\u6e38\u620f\u4e2d\u786e\u8ba4\u66b4\u9732\u6bb5\u548c\u4f11\u606f\u70b9\u3002', '\u4fdd\u62a4\u4f53\u529b\uff0c\u5e76\u63d0\u524d\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u53ef\u9760\u7684\u6682\u505c\u70b9\u3002'],
              ['Mesa', '\u4efb\u4f55\u5305\u542b Mesa \u7684\u6765\u6e90\u8def\u7ebf', '\u53ef\u4ee5\u6309\u9ad8\u539f\u6216\u5ca9\u77f3\u5f62\u6001\u8bfb\u53d6\u8def\u7ebf\uff0c\u4f46\u5fc5\u987b\u5148\u770b\u5f53\u524d\u51e0\u4f55\u5f62\u72b6\u548c\u884c\u8fdb\u65b9\u5411\u3002', '\u6bd4\u8f83\u6700\u77ed\u7684\u53ef\u89c1\u8def\u5f84\u4e0e\u5931\u8bef\u540e\u4ecd\u80fd\u6062\u590d\u7684\u5b89\u5168\u8def\u5f84\u3002'],
              ['Caldera', '\u4efb\u4f55\u5305\u542b Caldera \u7684\u6765\u6e90\u8def\u7ebf', '\u540d\u79f0\u6697\u793a\u706b\u5c71\u76c6\u5730\u73af\u5883\uff1b\u6e29\u5ea6\u3001\u7194\u5ca9\u548c\u5371\u9669\u884c\u4e3a\u5fc5\u987b\u6839\u636e\u5f53\u524d\u7248\u672c\u786e\u8ba4\u3002', '\u5728\u8fdb\u5165\u56de\u5934\u8def\u53d8\u7a84\u524d\u4fdd\u7559\u6062\u590d\u9009\u9879\u3002'],
              ['The Kiln', '\u4efb\u4f55\u5305\u542b The Kiln \u7684\u6765\u6e90\u8def\u7ebf', '\u628a\u5b83\u89c6\u4e3a\u72ec\u7acb\u7684\u540e\u6bb5\u6216\u706b\u5c71\u73af\u5883\uff0c\u4e0d\u8981\u56e0\u540d\u5b57\u5c31\u8ba4\u5b9a\u53ea\u6709\u4e00\u79cd\u5e03\u5c40\u3002', '\u5148\u627e\u4e0b\u4e00\u4e2a\u5b89\u5168\u4f11\u606f\u70b9\uff0c\u4e0d\u8981\u7528\u5c3e\u58f0\u5de5\u5177\u53bb\u505a\u6ca1\u5fc5\u8981\u7684\u8bd5\u63a2\u3002'],
              ['Gloom', '\u4efb\u4f55\u5305\u542b Gloom \u7684\u6765\u6e90\u8def\u7ebf', '\u53ef\u4ee5\u9884\u60f3\u66f4\u6697\u6216\u89c6\u91ce\u66f4\u96be\u8bfb\u53d6\uff0c\u4f46\u5fc5\u987b\u4ee5\u5f53\u524d\u8def\u7ebf\u663e\u793a\u4e3a\u51c6\u3002', '\u7edf\u4e00\u961f\u4f0d\u7684\u89c6\u89c9\u4fe1\u606f\uff0c\u5e76\u4e8b\u5148\u8bf4\u597d\u64a4\u9000\u6761\u4ef6\u3002'],
              ['Citadel', '\u4efb\u4f55\u5305\u542b Citadel \u7684\u6765\u6e90\u8def\u7ebf', '\u53ef\u4ee5\u628a Citadel \u5f53\u4f5c\u7ed3\u6784\u5316\u3001\u5177\u6709\u5de8\u5927\u5efa\u7b51\u611f\u7684\u73af\u5883\uff0c\u4f46\u5b9e\u9645\u901a\u8def\u4ecd\u53d6\u51b3\u4e8e\u5f53\u524d\u5bf9\u5c40\u3002', '\u5728\u91cd\u8981\u51b3\u5b9a\u5904\u653e\u6162\u901f\u5ea6\uff0c\u4e3a\u6700\u540e\u4e00\u6b21\u5fc5\u987b\u505a\u7684\u51b3\u5b9a\u4fdd\u7559\u5de5\u5177\u3002'],
            ],
          },
        },
        {
          title: '\u5982\u4f55\u4f7f\u7528\u751f\u7269\u7fa4\u7cfb\u540d\u79f0\u800c\u4e0d\u8fc7\u5ea6\u63a8\u65ad',
          paragraphs: [
            '\u597d\u7684 PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868\u5e94\u8be5\u5e2e\u4f60\u505a\u51fa\u4e0b\u4e00\u4e2a\u51b3\u5b9a\uff0c\u800c\u4e0d\u662f\u5047\u8bbe\u540d\u79f0\u80fd\u544a\u8bc9\u4f60\u6bcf\u4e2a\u7269\u4f53\u6216\u5371\u9669\u3002\u540c\u65f6\u8bb0\u5f55\u751f\u7269\u7fa4\u7cfb\u3001\u65e5\u671f\u548c\u8def\u7ebf\uff0c\u5e76\u5206\u5f00\u300c\u6e38\u620f\u663e\u793a\u7684\u4e8b\u5b9e\u300d\u4e0e\u300c\u540d\u79f0\u5e26\u6765\u7684\u731c\u60f3\u300d\u3002',
            'Alpine \u53ef\u4ee5\u8ba9\u4f60\u5173\u6ce8\u9ad8\u5ea6\u548c\u4f11\u606f\u70b9\uff0c\u4f46\u4e0d\u80fd\u8bc1\u660e\u67d0\u4e2a\u5177\u4f53\u6500\u722c\u3001\u7269\u54c1\u4f4d\u7f6e\u6216\u654c\u4eba\u884c\u4e3a\u3002Gloom\u3001Caldera \u548c The Kiln \u4e5f\u4e00\u6837\uff1b\u673a\u5236\u95ee\u9898\u5e94\u4ee5\u5f53\u524d\u6e38\u620f\u548c\u5b98\u65b9\u8bf4\u660e\u4e3a\u51c6\u3002',
          ],
          bullets: [
            ['\u786e\u8ba4\u540d\u79f0', '\u6309\u5f53\u524d\u6765\u6e90\u6216\u6e38\u620f\u663e\u793a\u7684\u65b9\u5f0f\u8bb0\u4e0b\u751f\u7269\u7fa4\u7cfb\u548c\u8def\u7ebf\u3002'],
            ['\u68c0\u67e5\u9996\u4e2a\u98ce\u9669', '\u627e\u51fa\u4f1a\u6539\u53d8\u79fb\u52a8\u65b9\u5f0f\u7684\u6500\u722c\u3001\u843d\u5dee\u3001\u89c6\u91ce\u6216\u5371\u9669\u3002'],
            ['\u56f4\u7ed5\u6062\u590d\u89c4\u5212', '\u5728\u72ed\u8def\u524d\u8bbe\u597d\u6682\u505c\u70b9\u548c\u56de\u5934\u89c4\u5219\u3002'],
            ['\u6807\u8bb0\u65e5\u671f', '\u628a\u6784\u5efa\u65e5\u671f\u548c\u6e38\u620f\u7248\u672c\u4e0e\u6bcf\u6761\u5730\u5f62\u6216\u88c5\u5907\u5907\u6ce8\u653e\u5728\u4e00\u8d77\u3002'],
          ],
        },
        {
          title: 'PEAK \u4e2d\u751f\u7269\u7fa4\u7cfb\u4e0e\u5730\u56fe\u5982\u4f55\u5173\u8054',
          paragraphs: [
            '\u5730\u56fe\u3001\u8def\u7ebf\u3001\u751f\u7269\u7fa4\u7cfb\u548c\u5173\u5361\u53ef\u4ee5\u5206\u6210\u51e0\u4e2a\u5c42\u6b21\u6765\u8bfb\u3002\u5730\u56fe\u662f\u53ef\u4ee5\u79fb\u52a8\u7684\u7a7a\u95f4\uff0c\u8def\u7ebf\u662f\u901a\u884c\u6216\u987a\u5e8f\u4e0a\u4e0b\u6587\uff0c\u751f\u7269\u7fa4\u7cfb\u662f\u5e7f\u4e49\u533a\u57df\u6807\u7b7e\uff0c\u5173\u5361\u6216\u5730\u6807\u53ef\u80fd\u53ea\u662f\u5176\u4e2d\u7684\u4e00\u5c0f\u5757\u3002',
            '\u6bcf\u65e5\u6765\u6e90\u63d0\u4f9b\u7684\u662f\u5e26\u65e5\u671f\u7684\u751f\u7269\u7fa4\u7cfb\u5e8f\u5217\uff0c\u4e0d\u662f\u6c38\u4e45\u4e16\u754c\u5730\u56fe\u3002\u4e0b\u8868\u8bf4\u660e\u7684\u662f\u8bc1\u636e\u4e0e\u7528\u6cd5\uff0c\u4e0d\u662f\u865a\u6784\u7684\u4e00\u5bf9\u4e00\u5730\u56fe\u5206\u914d\u3002',
          ],
          table: {
            caption: '\u9605\u8bfb PEAK \u5730\u56fe\u65f6\u9700\u8981\u5206\u5f00\u7684\u8bc1\u636e\u5c42\u6b21',
            headers: ['\u5c42\u6b21', '\u53ef\u4ee5\u8bf4\u660e\u4ec0\u4e48', '\u5355\u72ec\u4e0d\u80fd\u8bc1\u660e\u4ec0\u4e48'],
            rows: [
              ['\u751f\u7269\u7fa4\u7cfb\u6807\u7b7e', '\u6765\u6e90\u6216\u8def\u7ebf\u6761\u76ee\u4e0a\u7684\u5927\u81f4\u533a\u57df\u540d\u79f0\u3002', '\u5f53\u524d\u5bf9\u5c40\u4e2d\u7684\u6bcf\u4e2a\u5371\u9669\u3001\u7269\u54c1\u4f4d\u7f6e\u6216\u51e0\u4f55\u5f62\u72b6\u3002'],
              ['\u5730\u56fe\u6216\u8def\u7ebf\u6761\u76ee', '\u6765\u6e90\u5728\u7279\u5b9a\u65e5\u671f\u62a5\u544a\u7684\u5e8f\u5217\u6216\u89c6\u89c9\u73af\u5883\u3002', '\u9664\u975e\u5b98\u65b9\u8bc1\u5b9e\uff0c\u5426\u5219\u4e0d\u80fd\u5f53\u4f5c\u6c38\u4e45\u6bcf\u65e5\u65f6\u95f4\u8868\u3002'],
              ['\u6e38\u620f\u5bf9\u5c40', '\u961f\u4f0d\u73b0\u5728\u771f\u6b63\u9700\u8981\u901a\u884c\u7684\u6700\u7ec8\u72b6\u6001\u3002', '\u660e\u5929\u6216\u4e0d\u540c\u7248\u672c\u4f1a\u51fa\u73b0\u4ec0\u4e48\u3002'],
              ['\u66f4\u65b0\u8bf4\u660e', '\u5b98\u65b9\u6587\u7ae0\u660e\u786e\u8bf4\u51fa\u7684\u66f4\u6539\u6807\u9898\u548c\u5185\u5bb9\u3002', '\u6587\u7ae0\u6ca1\u6709\u63d0\u5230\u7684\u5b8c\u6574\u6392\u540d\u6216\u673a\u5236\u3002'],
            ],
          },
        },
        {
          title: '\u4eca\u5929\u6d3b\u52a8\u7684\u662f\u54ea\u4e2a\u751f\u7269\u7fa4\u7cfb\uff1f',
          paragraphs: [
            '\u4e0b\u65b9\u7684\u5e26\u65e5\u671f\u5feb\u7167\u628a\u8fd9\u4efd PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868\u4e0e\u6bcf\u65e5\u641c\u7d22\u610f\u56fe\u8fde\u8d77\u6765\u3002\u5b83\u5728\u6784\u5efa\u65f6\u76f4\u63a5\u5199\u5165 HTML\uff1b\u5982\u679c\u5361\u7247\u663e\u793a\u5f85\u786e\u8ba4\uff0c\u5c31\u4e0d\u8981\u628a\u65e7\u793e\u533a\u622a\u56fe\u5f53\u6210\u5f53\u524d\u7ed3\u8bba\u3002',
            '\u6bcf\u65e5\u7ed3\u679c\u4f1a\u8fc7\u671f\uff0c\u4f46\u4e0a\u65b9\u540d\u5355\u4ecd\u53ef\u7528\u3002\u7528\u5f53\u524d\u5e8f\u5217\u51b3\u5b9a\u68c0\u67e5\u4ec0\u4e48\uff0c\u518d\u56de\u5230\u6e38\u620f\u5bf9\u5c40\u786e\u8ba4\u8be6\u7ec6\u5730\u5f62\u3002',
          ],
        },
        {
          title: '\u6839\u636e\u751f\u7269\u7fa4\u7cfb\u73af\u5883\u89c4\u5212\u88c5\u5907\u548c\u961f\u4f0d\u7b56\u7565',
          paragraphs: [
            '\u751f\u7269\u7fa4\u7cfb\u540d\u79f0\u5e94\u8be5\u6539\u53d8\u4f18\u5148\u7ea7\uff0c\u800c\u4e0d\u662f\u5f3a\u5236\u4e00\u4efd\u56fa\u5b9a\u6392\u540d\u3002\u6839\u636e\u4e0b\u4e00\u4e2a\u51b3\u5b9a\u51c6\u5907\u8def\u7ebf\u5de5\u5177\uff0c\u4e3a\u4e0b\u4e00\u6b21\u63a8\u8fdb\u7559\u4e0b\u98df\u7269\u6216\u4f53\u529b\u652f\u6301\uff0c\u5e76\u5728\u5371\u9669\u6bb5\u4e4b\u524d\u5206\u914d\u6062\u590d\u8d23\u4efb\u3002',
            '\u51fa\u53d1\u524d\u5199\u4e0b\u7b2c\u4e00\u4e2a\u98ce\u9669\u3001\u5bf9\u5e94\u8d44\u6e90\u548c\u505c\u6b62\u70b9\u3002\u56de\u6765\u540e\u518d\u52a0\u4e0a\u65e5\u671f\u3001\u751f\u7269\u7fa4\u7cfb\u3001\u8def\u7ebf\u548c\u7ed3\u679c\uff0c\u5c31\u80fd\u8bb0\u5f55\u7ecf\u9a8c\u800c\u4e0d\u628a\u4e00\u6b21\u89c2\u5bdf\u8bf4\u6210\u666e\u904d\u89c4\u5219\u3002',
          ],
          bullets: [
            ['\u5148\u770b\u8def\u7ebf', '\u6309\u5bf9\u5c40\u4e2d\u770b\u5230\u7684\u7b2c\u4e00\u4e2a\u5173\u952e\u70b9\u51c6\u5907\uff0c\u4e0d\u8981\u6309\u60f3\u8c61\u4e2d\u7684\u751f\u7269\u7fa4\u7cfb\u523b\u677f\u51b3\u5b9a\u3002'],
            ['\u5206\u914d\u89d2\u8272', '\u8bf4\u6e05\u8c01\u643a\u5e26\u6062\u590d\u6216\u8def\u7ebf\u5de5\u5177\uff0c\u8ba9\u538b\u529b\u4e0a\u5347\u65f6\u7269\u54c1\u80fd\u88ab\u53ca\u65f6\u4f7f\u7528\u3002'],
            ['\u4fdd\u7559\u4f59\u91cf', '\u5728\u56de\u5934\u8def\u6216\u4e0b\u4e00\u4e2a\u5b89\u5168\u4f11\u606f\u70b9\u660e\u786e\u524d\uff0c\u4e0d\u8981\u7528\u5149\u6240\u6709\u8d44\u6e90\u3002'],
          ],
        },
      ],
      faq: {
        eyebrow: '\u5feb\u901f\u7b54\u7591',
        title: 'PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868 FAQ',
        items: [
          ['PEAK \u6709\u591a\u5c11\u4e2a\u751f\u7269\u7fa4\u7cfb\uff1f', '\u672c\u9875\u5f53\u524d\u8ddf\u8e2a\u4e5d\u4e2a\u6709\u540d\u79f0\u7684\u751f\u7269\u7fa4\u7cfb\uff1aShore\u3001Tropics\u3001Roots\u3001Alpine\u3001Mesa\u3001Caldera\u3001The Kiln\u3001Gloom \u548c Citadel\u3002\u5927\u578b\u66f4\u65b0\u540e\u8bf7\u91cd\u65b0\u67e5\u770b\u6e38\u620f\u548c\u5b98\u65b9\u8bf4\u660e\u3002'],
          ['PEAK \u7684\u751f\u7269\u7fa4\u7cfb\u4f1a\u6bcf\u5929\u53d8\u5417\uff1f', '\u6bcf\u65e5\u8def\u7ebf\u6216\u751f\u7269\u7fa4\u7cfb\u5e8f\u5217\u53ef\u80fd\u968f\u5730\u56fe\u8f6e\u6362\u53d8\u5316\u3002\u8bf7\u4f7f\u7528\u5e26\u65e5\u671f\u7684\u6765\u6e90\u548c\u5f53\u524d\u6e38\u620f\uff0c\u4e0d\u8981\u4ece\u4e00\u6761\u8bb0\u5f55\u63a8\u51fa\u56fa\u5b9a\u65f6\u95f4\u8868\u3002'],
          ['PEAK \u7684\u751f\u7269\u7fa4\u7cfb\u5c31\u662f\u5730\u56fe\u5417\uff1f', '\u4e0d\u662f\u3002\u751f\u7269\u7fa4\u7cfb\u662f\u5927\u81f4\u533a\u57df\u6807\u7b7e\uff0c\u5730\u56fe\u6216\u8def\u7ebf\u662f\u6765\u6e90\u6216\u5bf9\u5c40\u5448\u73b0\u7684\u7a7a\u95f4\u6216\u5e8f\u5217\u3002\u4e00\u6761\u6765\u6e90\u8bb0\u5f55\u53ef\u4ee5\u540c\u65f6\u5305\u542b\u591a\u4e2a\u751f\u7269\u7fa4\u7cfb\u540d\u79f0\u3002'],
          ['\u5728\u54ea\u91cc\u67e5\u770b\u6d3b\u52a8\u751f\u7269\u7fa4\u7cfb\uff1f', '\u5148\u67e5\u770b [[link:map-rotation#today-map|\u5730\u56fe\u8f6e\u6362\u6307\u5357]]\uff0c\u7136\u540e\u5728\u6e38\u620f\u4e2d\u786e\u8ba4\u8def\u7ebf\u3002\u5f53\u65e5\u671f\u6570\u636e\u65e0\u6cd5\u9a8c\u8bc1\u65f6\uff0c\u5361\u7247\u4f1a\u4fdd\u6301\u5f85\u786e\u8ba4\u3002'],
          ['\u5728\u54ea\u91cc\u4e86\u89e3 PEAK \u662f\u4ec0\u4e48\uff1f', '\u9605\u8bfb\u300a[[link:what-is-peak-game|PEAK \u662f\u4ec0\u4e48]]\u300b\u4e86\u89e3\u6838\u5fc3\u73a9\u6cd5\u3001\u5730\u56fe\u3001\u8f6e\u6362\u672f\u8bed\u548c\u65b0\u624b\u6b65\u9aa4\u3002'],
          ['\u6bcf\u4e2a\u751f\u7269\u7fa4\u7cfb\u6700\u597d\u7684\u88c5\u5907\u662f\u4ec0\u4e48\uff1f', '\u5728\u6ca1\u6709\u6838\u5b9e\u7684\u7269\u54c1\u6548\u679c\u548c\u5f53\u524d\u8def\u7ebf\u524d\uff0c\u4e0d\u5e94\u8be5\u7ed9\u51fa\u4e00\u4e2a\u9002\u7528\u4e8e\u6240\u6709\u5730\u5f62\u7684\u7b54\u6848\u3002\u8bf7\u5148\u68c0\u67e5\u98ce\u9669\u3001\u5206\u914d\u6062\u590d\u8d23\u4efb\uff0c\u518d\u6838\u5bf9\u5b98\u65b9\u66f4\u65b0\u3002'],
        ],
      },
      source: {
        eyebrow: '\u6765\u6e90\u4e0e\u9650\u5236',
        title: '\u8fd9\u4efd PEAK \u751f\u7269\u7fa4\u7cfb\u5217\u8868\u5982\u4f55\u7ef4\u62a4',
        body: '\u751f\u7269\u7fa4\u7cfb\u540d\u79f0\u6765\u81ea\u7ef4\u62a4\u4e2d\u7684\u6bcf\u65e5\u5730\u56fe\u6765\u6e90\u548c PEAK \u5b98\u65b9\u66f4\u65b0\u4e0a\u4e0b\u6587\u3002\u5730\u5f62\u4e0e\u7b56\u7565\u662f\u8c28\u614e\u7684\u89c4\u5212\u5efa\u8bae\uff1b\u5177\u4f53\u51e0\u4f55\u5f62\u72b6\u3001\u5371\u9669\u548c\u7269\u54c1\u6548\u679c\u4ecd\u4ee5\u5f53\u524d\u6e38\u620f\u4e3a\u51c6\u3002',
        links: [['Steam \u5b98\u65b9 PEAK \u9875\u9762', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Steam \u5b98\u65b9\u65b0\u95fb', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', '\u67e5\u770b\u4eca\u65e5\u7684 PEAK \u5730\u56fe'], ['what-is-peak-game', '\u4e86\u89e3 PEAK \u662f\u4ec0\u4e48'], ['peak-map-rotation-schedule', '\u67e5\u770b\u5730\u56fe\u8f6e\u6362\u65f6\u95f4']],
      relatedLabel: '\u76f8\u5173 PEAK \u6307\u5357',
    },
  },
  es: {
    'peak-biomes-list': {
      meta: {
        title: 'Lista de biomas de PEAK: todos los biomas y mapas',
        description: 'Lista completa de biomas de PEAK: conoce sus mapas, terreno y consejos. Consulta el bioma activo de hoy en nuestro mapa diario, actualizado tras cada reinicio.',
        schema: 'Guia de biomas de PEAK basada en fuentes, con la lista de nombres, sus relaciones con los mapas, consejos de terreno, equipo y el registro diario.',
      },
      eyebrow: 'Referencia de biomas - lista basada en fuentes',
      h1: 'Lista de biomas de PEAK',
      intro: 'Esta lista de biomas de PEAK nombra todos los biomas que aparecen actualmente en las fuentes de mapas mantenidas, explica como se relacionan con las rutas y ofrece un acceso generado en build al [[link:map-rotation#today-map|mapa de PEAK de hoy]]. La lista sirve para aprender el vocabulario; antes de escalar, revisa el registro diario fechado.',
      answerLabel: 'Respuesta corta',
      answer: 'La lista actual de biomas de PEAK respaldada por fuentes contiene Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom y Citadel. Un bioma es una etiqueta regional dentro del contexto de una ruta: no equivale automaticamente a un mapa completo, a un numero fijo de fases ni a un orden diario permanente. Usa la tabla para orientarte y confirma la ruta activa en el juego.',
      tocLabel: 'En esta pagina',
      tocFaq: 'Preguntas sobre biomas',
      heroImage: { alt: 'Captura de una ruta de PEAK donde un escalador planifica un camino por terreno dificil', caption: 'Captura oficial de Steam: el contexto de la ruta convierte el nombre del bioma en un plan practico.' },
      sections: [
        {
          title: 'Lista completa de biomas de PEAK',
          paragraphs: [
            'Los nombres siguientes forman la lista reconocida por el buscador del mapa diario y la fuente publica de mapas. Las notas de terreno son una forma prudente de observar la partida: indican que conviene revisar, pero no prometen peligros exactos, tablas de botin ni fases fijas.',
            'Mapa, ruta y bioma estan relacionados, pero no son sinonimos. Una fuente puede mostrar una secuencia de biomas sin registrar cada punto de referencia. Usa el bioma como contexto general y lee la partida actual antes de decidir donde gastar resistencia, parar o usar equipo.',
          ],
          table: {
            caption: 'Biomas de PEAK y notas prudentes para leer el terreno',
            headers: ['Bioma', 'Donde aparece', 'Lectura del terreno', 'Enfoque de planificacion'],
            rows: [
              ['Shore', 'Cualquier ruta de la fuente que incluya Shore', 'Revisa primero los accesos abiertos, los bordes y los cambios de altura; no supongas un trazado de costa fijo.', 'Explora el primer compromiso y mantén al equipo junto mientras la forma de la ruta se aclara.'],
              ['Tropics', 'Cualquier ruta de la fuente que incluya Tropics', 'Toma el nombre como contexto insular calido y con vegetacion, pero comprueba la visibilidad, las escaladas y los peligros de la partida.', 'Prioriza leer la ruta y controlar el ritmo antes de gastar recursos compartidos.'],
              ['Roots', 'Cualquier ruta de la fuente que incluya Roots', 'Busca rasgos organicos o cubiertos de raices, pero no conviertas el nombre en una guia completa de peligros.', 'Deja espacio para recolocarte y anota que paso cambio el plan del equipo.'],
              ['Alpine', 'Cualquier ruta de la fuente que incluya Alpine', 'El nombre sugiere un entorno elevado o montanoso; confirma las escaladas expuestas y los descansos seguros en la partida.', 'Protege la resistencia y decide donde tendra lugar la proxima pausa fiable.'],
              ['Mesa', 'Cualquier ruta de la fuente que incluya Mesa', 'Lee la ruta como un contexto de meseta o roca solo despues de comprobar la geometria actual y la direccion de avance.', 'Compara el camino visible mas corto con la opcion segura que permita recuperarse de un error.'],
              ['Caldera', 'Cualquier ruta de la fuente que incluya Caldera', 'El nombre apunta a un contexto volcanico; el calor, la lava y el comportamiento de los peligros deben comprobarse en la version actual.', 'Conserva opciones de recuperacion antes de entrar en una ruta que limite el regreso.'],
              ['The Kiln', 'Cualquier ruta de la fuente que incluya The Kiln', 'Tratalo como un contexto volcanico o de tramo avanzado, no como una prueba de que existe un unico diseño fijo.', 'Confirma el siguiente descanso seguro y no gastes el ultimo recurso del equipo en explorar.'],
              ['Gloom', 'Cualquier ruta de la fuente que incluya Gloom', 'Usa el nombre para anticipar una lectura mas oscura o con menor visibilidad y verifica lo que muestra la ruta actual.', 'Acordad las llamadas visuales y una regla clara para retirarse.'],
              ['Citadel', 'Cualquier ruta de la fuente que incluya Citadel', 'Lee Citadel como un contexto estructurado y monumental; el camino y los obstaculos activos siguen dependiendo de la partida.', 'Reduce el ritmo en las decisiones grandes y reserva herramientas para el compromiso final.'],
            ],
          },
        },
        {
          title: 'Como usar un nombre de bioma sin afirmar demasiado',
          paragraphs: [
            'Una buena lista de biomas de PEAK debe ayudarte con la siguiente decision, no fingir que un nombre revela cada objeto o peligro. Confirma el bioma, la fecha y la ruta cercana; separa lo que mostro el juego de lo que solo sugiere el nombre. Asi las notas de campo se pueden actualizar.',
            'Alpine puede dirigir la atencion hacia la altura y los descansos, pero no demuestra una escalada concreta, la ubicacion de un objeto ni el comportamiento de un enemigo. Lo mismo vale para Gloom, Caldera y The Kiln. Para las mecanicas, la partida actual y las notas oficiales tienen prioridad sobre una captura antigua.',
          ],
          bullets: [
            ['Confirma la etiqueta', 'Registra el bioma y la ruta exactamente como los presenta la fuente o el juego actual.'],
            ['Revisa el primer riesgo', 'Busca la escalada, el hueco, el problema de visibilidad o el peligro que cambie primero el movimiento.'],
            ['Planifica la recuperacion', 'Elige una pausa y una regla de vuelta antes de que una ruta estrecha elimine opciones.'],
            ['Anota la fecha', 'Guarda la fecha del build y la version del juego junto a cada nota de terreno o equipo.'],
          ],
        },
        {
          title: 'Como se relacionan los biomas y los mapas en PEAK',
          paragraphs: [
            'Mapa, ruta, bioma y fase funcionan mejor como capas separadas. El mapa es el espacio navegable; la ruta es el contexto del camino o la secuencia; el bioma es una etiqueta regional amplia; una fase o un punto de referencia puede ser menor que los tres. Esta separacion evita que una lista de biomas de PEAK prometa un orden de mapas permanente.',
            'La fuente diaria expone una secuencia de biomas, no un mapa mundial permanente. Un registro fechado demuestra lo que informo esa fuente en ese dia, no lo que mostrara cada lobby, parche o reinicio futuro. Por eso la tabla describe evidencias y usos, no asignaciones inventadas de uno a uno.',
          ],
          table: {
            caption: 'Capas de evidencia que conviene separar al leer mapas de PEAK',
            headers: ['Capa', 'Lo que puede indicar', 'Lo que no puede demostrar por si sola'],
            rows: [
              ['Etiqueta de bioma', 'El nombre regional amplio asociado a una entrada de la fuente o a una ruta.', 'Cada peligro, posicion de objeto o geometria exacta de la partida actual.'],
              ['Entrada de mapa o ruta', 'La secuencia fechada o el contexto visual comunicado por una fuente.', 'Un calendario diario permanente si el juego o las notas oficiales no lo confirman.'],
              ['Partida en el juego', 'El estado final que el equipo debe recorrer ahora mismo.', 'Lo que mostrara otro lobby o una version diferente manana.'],
              ['Nota de parche', 'El titulo de un cambio oficial y los detalles que la publicacion afirma.', 'Una lista de niveles no oficial o una mecanica que la publicacion no menciona.'],
            ],
          },
        },
        {
          title: 'Que bioma esta activo hoy?',
          paragraphs: [
            'La instantanea fechada de abajo conecta esta lista de biomas de PEAK con la intencion de busqueda diaria. Se escribe en el HTML durante el build. Si la tarjeta esta pendiente, confirma la ruta dentro del juego en vez de tratar una imagen antigua de la comunidad como informacion actual.',
            'El resultado diario caduca, pero la lista de biomas sigue siendo util. Usa la secuencia actual para decidir que observar y vuelve a la partida para comprobar la geometria y los peligros concretos.',
          ],
        },
        {
          title: 'Equipo y estrategia de equipo segun el contexto del bioma',
          paragraphs: [
            'El nombre de un bioma debe cambiar tus prioridades, no imponerte una lista de niveles rigida. Empieza por el recurso de ruta que protege la siguiente decision, reserva comida o apoyo de resistencia para el siguiente avance y asigna la recuperacion antes del tramo peligroso. El valor de un objeto puede cambiar con el balance; esto es un metodo, no una estadistica permanente.',
            'Antes de escalar, escribe el primer riesgo, el recurso que lo apoya y el punto de parada. Despues anade la fecha, el bioma, la ruta y el resultado. Asi creas un registro util sin convertir una observacion en una regla universal.',
          ],
          bullets: [
            ['Primero la ruta', 'Prepara el primer compromiso visible de la partida, no un estereotipo imaginado del bioma.'],
            ['Reparte los roles', 'Indica quien lleva la recuperacion o el recurso de ruta para que pueda usarse bajo presion.'],
            ['Conserva margen', 'No gastes todos los recursos antes de conocer el camino de vuelta o el siguiente descanso seguro.'],
          ],
        },
      ],
      faq: {
        eyebrow: 'Respuestas rapidas',
        title: 'Preguntas frecuentes sobre la lista de biomas de PEAK',
        items: [
          ['Cuantos biomas hay en PEAK?', 'Esta guia sigue nueve biomas con nombre: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom y Citadel. Vuelve a revisar el juego y las actualizaciones oficiales despues de los parches importantes.'],
          ['Los biomas de PEAK cambian cada dia?', 'La ruta o la secuencia de biomas puede cambiar con la rotacion del mapa. Usa la fuente fechada y la partida actual en lugar de deducir un calendario fijo a partir de un solo registro.'],
          ['Los biomas de PEAK son lo mismo que los mapas?', 'No. Un bioma es una etiqueta regional amplia, mientras que un mapa o una ruta es el espacio o la secuencia que presenta la fuente o la partida. Una entrada puede contener varios biomas.'],
          ['Donde puedo consultar el bioma activo?', 'Abre primero la [[link:map-rotation#today-map|guia de rotacion del mapa]] y confirma despues la ruta en el juego. La tarjeta permanece pendiente cuando no se pueden verificar los datos fechados.'],
          ['Donde puedo aprender que es PEAK?', 'Empieza por nuestra guia [[link:what-is-peak-game|que es PEAK]] para conocer el bucle principal, los mapas, el vocabulario de rotacion y los pasos para principiantes.'],
          ['Cual es el mejor equipo para cada bioma?', 'No hay una respuesta universal responsable sin efectos de objetos verificados y una ruta actual. Revisa el primer riesgo, asigna la recuperacion y comprueba los cambios oficiales antes de confiar en una recomendacion antigua.'],
        ],
      },
      source: {
        eyebrow: 'Fuentes y limites',
        title: 'Como se mantiene esta lista de biomas de PEAK',
        body: 'Los nombres de los biomas proceden de la fuente diaria de mapas mantenida y del contexto de las actualizaciones oficiales de PEAK. Las notas de terreno y estrategia se presentan como orientacion prudente. La partida actual sigue siendo la autoridad para la geometria, los peligros, los efectos de objetos y los cambios que una fuente oficial no haya descrito.',
        links: [['Pagina oficial de PEAK en Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Noticias oficiales de Steam', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', 'Consultar el mapa de PEAK de hoy'], ['what-is-peak-game', 'Aprender que es PEAK'], ['peak-map-rotation-schedule', 'Ver el horario de rotacion']],
      relatedLabel: 'Guias relacionadas de PEAK',
    },
  },
  fr: {
    'peak-biomes-list': {
      meta: {
        title: 'Liste des biomes de PEAK : cartes et guide du terrain',
        description: 'Liste complete des biomes de PEAK : cartes, terrain et conseils. Consultez le biome actif du jour sur notre carte quotidienne, mise a jour apres chaque reset.',
        schema: 'Guide des biomes de PEAK fonde sur des sources, avec les noms suivis, leurs liens avec les cartes, la lecture du terrain, le materiel et le releve quotidien.',
      },
      eyebrow: 'Reference des biomes - liste fondee sur des sources',
      h1: 'Liste des biomes de PEAK',
      intro: 'Cette liste des biomes de PEAK recense les biomes actuellement exposes par les sources de cartes suivies, explique leur rapport avec les routes et propose un acces genere au build vers la [[link:map-rotation#today-map|carte PEAK du jour]]. La liste aide a apprendre le vocabulaire; avant une ascension, verifiez toujours le releve date.',
      answerLabel: 'Reponse courte',
      answer: 'La liste des biomes de PEAK actuellement appuyee par les sources comprend Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom et Citadel. Un biome est une etiquette regionale dans le contexte d une route : ce n est pas automatiquement une carte complete, un nombre fixe de stages ou un ordre quotidien permanent. Utilisez le tableau pour vous orienter, puis confirmez la route active dans le jeu.',
      tocLabel: 'Sur cette page',
      tocFaq: 'FAQ des biomes',
      heroImage: { alt: 'Capture d une route de PEAK montrant un grimpeur qui prepare un chemin dans un terrain difficile', caption: 'Capture officielle Steam : le contexte de la route transforme le nom du biome en plan concret.' },
      sections: [
        {
          title: 'La liste complete des biomes de PEAK',
          paragraphs: [
            'Les noms ci-dessous correspondent a la liste reconnue par le collecteur de carte quotidienne et la source publique de cartes. Les notes de terrain sont des angles d observation prudents : elles indiquent quoi verifier sans promettre chaque danger, table de butin ou disposition fixe.',
            'Carte, route et biome sont lies, mais ne sont pas interchangeables. Une source peut exposer une sequence de biomes sans chaque point de repere. Utilisez le biome comme contexte general, puis lisez la session actuelle avant de depenser de l endurance, de faire une pause ou d utiliser un outil.',
          ],
          table: {
            caption: 'Biomes de PEAK et notes prudentes pour lire le terrain',
            headers: ['Biome', 'Ou il apparait', 'Lecture du terrain', 'Approche de planification'],
            rows: [
              ['Shore', 'Toute route source qui comprend Shore', 'Commencez par verifier les approches ouvertes, les bords et les variations d altitude au lieu de supposer un littoral fixe.', 'Explorez le premier engagement et gardez le groupe ensemble pendant que la forme de la route se precise.'],
              ['Tropics', 'Toute route source qui comprend Tropics', 'Prenez le nom comme un contexte insulaire chaud et vegetalise; verifiez la visibilite, les escalades et les dangers de la session.', 'Priorisez la lecture de la route et le rythme avant de depenser un outil partage.'],
              ['Roots', 'Toute route source qui comprend Roots', 'Cherchez des elements organiques ou couverts de racines, sans transformer le nom en guide complet des dangers.', 'Gardez de la place pour vous repositionner et notez le passage qui a change le plan de l equipe.'],
              ['Alpine', 'Toute route source qui comprend Alpine', 'Le nom suggere un contexte eleve ou montagneux; confirmez les ascensions exposees et les repos sur place.', 'Preservez l endurance et decidez ou se trouvera la prochaine pause fiable.'],
              ['Mesa', 'Toute route source qui comprend Mesa', 'Lisez la route comme un contexte de plateau ou de roches seulement apres avoir observe la geometrie actuelle et la direction du trajet.', 'Comparez le chemin visible le plus court avec celui qui reste recuperable apres une erreur.'],
              ['Caldera', 'Toute route source qui comprend Caldera', 'Le nom evoque un bassin volcanique; la chaleur, la lave et les dangers exacts doivent etre verifies dans la version actuelle.', 'Conservez des options de recuperation avant d entrer dans une route qui reduit le retour.'],
              ['The Kiln', 'Toute route source qui comprend The Kiln', 'Traitez-le comme un contexte volcanique ou avance, pas comme la preuve d une seule disposition fixe.', 'Confirmez le prochain repos sur et ne depensez pas le dernier outil du groupe pour explorer.'],
              ['Gloom', 'Toute route source qui comprend Gloom', 'Attendez-vous a une lecture plus sombre ou moins visible, puis verifiez ce que montre reellement la route actuelle.', 'Mettez-vous d accord sur les appels visuels et une regle de retraite claire.'],
              ['Citadel', 'Toute route source qui comprend Citadel', 'Lisez Citadel comme un contexte structure et monumental; le chemin actif et les obstacles viennent toujours de la session.', 'Ralentissez aux grandes decisions et gardez des outils pour le dernier engagement.'],
            ],
          },
        },
        {
          title: 'Utiliser un nom de biome sans trop en deduire',
          paragraphs: [
            'Une bonne liste des biomes de PEAK doit aider a prendre la prochaine decision, pas faire croire qu un nom revele chaque objet ou danger. Confirmez le biome, la date et la route voisine, puis separez ce que le jeu a montre de ce que le nom suggere. Vos notes resteront ainsi faciles a mettre a jour.',
            'Alpine peut attirer l attention vers l altitude et les repos, mais ne prouve ni une escalade precise, ni la position d un objet, ni le comportement d un ennemi. La meme prudence vaut pour Gloom, Caldera et The Kiln. Pour les mecaniques, la session actuelle et les notes officielles priment sur une ancienne capture.',
          ],
          bullets: [
            ['Confirmer l etiquette', 'Notez le biome et la route exactement comme la source ou le jeu les affiche actuellement.'],
            ['Observer le premier risque', 'Cherchez l escalade, le vide, le probleme de visibilite ou le danger qui modifie d abord le mouvement.'],
            ['Prevoir la recuperation', 'Choisissez une pause et une regle de demi-tour avant qu une route etroite ne retire des options.'],
            ['Dater l observation', 'Conservez la date du build et la version du jeu avec chaque note de terrain ou de materiel.'],
          ],
        },
        {
          title: 'Comment les biomes et les cartes se relient dans PEAK',
          paragraphs: [
            'Carte, route, biome et stage fonctionnent mieux comme des couches separees. La carte est l espace navigable; la route est le contexte du chemin ou de la sequence; le biome est une etiquette regionale large; un stage ou un point de repere peut etre plus petit que les trois. Cette distinction evite qu une liste des biomes de PEAK promette un ordre de cartes fixe.',
            'La source quotidienne expose une sequence de biomes, pas une carte permanente du monde. Un releve date prouve ce que cette source a signale ce jour-la, pas ce que chaque lobby, patch ou futur reset utilisera. Le tableau decrit donc les preuves et leur usage, sans inventer d affectations carte-biome individuelles.',
          ],
          table: {
            caption: 'Couches de preuve a distinguer pour lire les cartes de PEAK',
            headers: ['Couche', 'Ce qu elle peut indiquer', 'Ce qu elle ne prouve pas seule'],
            rows: [
              ['Etiquette de biome', 'Le nom regional large associe a une entree de source ou a une route.', 'Chaque danger, position d objet ou geometrie exacte de la session actuelle.'],
              ['Entree de carte ou de route', 'La sequence datee ou le contexte visuel signale par une source.', 'Un calendrier quotidien permanent sans confirmation du jeu ou des notes officielles.'],
              ['Session en jeu', 'L etat final que votre groupe doit parcourir maintenant.', 'Ce qu un autre lobby ou une autre version montrera demain.'],
              ['Note de patch', 'Le titre d un changement officiel et les details affirmes par la publication.', 'Une liste de niveaux non officielle ou une mecanique absente de la publication.'],
            ],
          },
        },
        {
          title: 'Quel biome est actif aujourd hui ?',
          paragraphs: [
            'L instantane date ci-dessous relie cette liste des biomes de PEAK a l intention de recherche quotidienne. Il est ecrit dans le HTML pendant le build. Si la carte reste en attente, confirmez la route dans le jeu au lieu de traiter une ancienne image communautaire comme une information actuelle.',
            'Un resultat quotidien expire, mais la liste reste utile. Utilisez la sequence actuelle pour savoir quoi observer, puis revenez a la session pour verifier la geometrie et les dangers precis.',
          ],
        },
        {
          title: 'Materiel et strategie d equipe selon le contexte du biome',
          paragraphs: [
            'Un nom de biome doit modifier les priorites, pas imposer une tier list rigide. Commencez par l outil de route qui protege la prochaine decision, gardez de la nourriture ou du soutien d endurance pour la poussee suivante et attribuez la recuperation avant le passage risque. La valeur d un objet peut changer avec l equilibrage; ceci est une methode, pas une statistique permanente.',
            'Avant l ascension, ecrivez le premier risque, la ressource qui le protege et le point d arret. Ensuite, ajoutez la date, le biome, la route et le resultat. Vous obtenez une note utile sans transformer une seule observation en regle universelle.',
          ],
          bullets: [
            ['La route d abord', 'Preparez-vous pour le premier engagement visible dans la session, pas pour un stereotype du biome.'],
            ['Partager les roles', 'Dites qui porte la recuperation ou l outil de route afin qu il soit disponible sous pression.'],
            ['Garder une marge', 'Ne depensez pas toutes les ressources avant de connaitre le retour ou le prochain repos sur.'],
          ],
        },
      ],
      faq: {
        eyebrow: 'Reponses rapides',
        title: 'FAQ de la liste des biomes de PEAK',
        items: [
          ['Combien de biomes y a-t-il dans PEAK ?', 'Ce guide suit actuellement neuf biomes nommes : Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom et Citadel. Verifiez le jeu et les mises a jour officielles apres un gros patch.'],
          ['Les biomes de PEAK changent-ils chaque jour ?', 'La route ou la sequence de biomes peut changer avec la rotation des cartes. Utilisez la source datee et le jeu actuel au lieu de deduire un cycle fixe d un seul releve.'],
          ['Les biomes de PEAK sont-ils les memes que les cartes ?', 'Non. Un biome est une etiquette regionale large, tandis qu une carte ou une route est l espace ou la sequence presentee par la source ou la session. Une entree peut contenir plusieurs biomes.'],
          ['Ou consulter le biome actif ?', 'Ouvrez d abord le [[link:map-rotation#today-map|guide de rotation des cartes]], puis confirmez la route en jeu. La carte reste en attente lorsque les donnees datees ne sont pas verifiees.'],
          ['Ou apprendre ce qu est PEAK ?', 'Commencez par notre guide [[link:what-is-peak-game|qu est-ce que PEAK]] pour le fonctionnement, les cartes, le vocabulaire de rotation et la checklist debutant.'],
          ['Quel est le meilleur equipement pour chaque biome ?', 'Il n existe pas de reponse universelle responsable sans effets d objets verifies et route actuelle. Observez le premier risque, attribuez la recuperation et verifiez les changements officiels avant une ancienne recommandation.'],
        ],
      },
      source: {
        eyebrow: 'Sources et limites',
        title: 'Comment cette liste des biomes de PEAK est tenue a jour',
        body: 'Les noms de biomes viennent de la source quotidienne de cartes suivie et du contexte des mises a jour officielles de PEAK. Les notes de terrain et de strategie sont volontairement presentees comme des conseils prudents. La session actuelle reste l autorite pour la geometrie, les dangers, les effets d objets et les changements non decrits par une source officielle.',
        links: [['Page officielle de PEAK sur Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Actualites officielles Steam', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', 'Voir la carte PEAK du jour'], ['what-is-peak-game', 'Comprendre ce qu est PEAK'], ['peak-map-rotation-schedule', 'Voir les horaires de rotation']],
      relatedLabel: 'Guides PEAK associes',
    },
  },
  de: {
    'peak-biomes-list': {
      meta: {
        title: 'PEAK-Biome-Liste: alle Biome, Karten und Gelaende',
        description: 'Komplette PEAK-Biome-Liste mit Karten, Gelaende und Tipps. Das aktive Biom von heute findest du auf unserer taeglich aktualisierten Karte nach jedem Reset.',
        schema: 'Quellenbasierter PEAK-Biome-Guide mit Namensliste, Kartenbeziehungen, Gelaendeeinschaetzung, Ausruestungsplanung und taeglichem Eintrag.',
      },
      eyebrow: 'Biome-Referenz - quellenbasierte Liste',
      h1: 'PEAK-Biome-Liste',
      intro: 'Diese PEAK-Biome-Liste nennt alle Biome, die derzeit in den gepflegten Kartenquellen erscheinen, erklaert ihre Beziehung zu Routen und bietet im Build einen direkten Einstieg zur [[link:map-rotation#today-map|heutigen PEAK-Karte]]. Die Liste hilft beim Lernen der Begriffe; vor dem Aufstieg solltest du den datierten Tageseintrag pruefen.',
      answerLabel: 'Kurzantwort',
      answer: 'Die aktuelle, durch Quellen belegte PEAK-Biome-Liste umfasst Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom und Citadel. Ein Biom ist eine regionale Bezeichnung im Routen-Kontext. Es ist nicht automatisch eine vollstaendige Karte, eine feste Zahl von Abschnitten oder eine Reihenfolge, die jeden Tag gleich bleibt. Nutze die Tabelle zur Orientierung und bestaetige die aktive Route im Spiel.',
      tocLabel: 'Auf dieser Seite',
      tocFaq: 'Biome-FAQ',
      heroImage: { alt: 'PEAK-Routenbild mit einem Kletterer, der einen Weg durch schwieriges Gelaende plant', caption: 'Offizieller Steam-Screenshot: Der Routen-Kontext macht aus einem Biomnamen einen praktischen Plan.' },
      sections: [
        {
          title: 'Die vollstaendige PEAK-Biome-Liste',
          paragraphs: [
            'Die folgenden Namen bilden die Liste, die der taegliche Kartenabruf und die oeffentliche Kartenquelle derzeit erkennen. Die Gelaendehinweise sind vorsichtige Beobachtungshilfen: Sie sagen, was du pruefen solltest, behaupten aber keine exakten Gefahren, Beutetabellen oder festen Abschnittsaufbauten.',
            'Karte, Route und Biom gehoeren zusammen, sind aber nicht austauschbar. Eine Quelle kann eine Biome-Sequenz zeigen, ohne jeden Orientierungspunkt zu erfassen. Nutze das Biom als groben Kontext und lies die aktuelle Session, bevor du Ausdauer verbrauchst, pausierst oder ein Werkzeug einsetzt.',
          ],
          table: {
            caption: 'PEAK-Biome und vorsichtige Hinweise zur Gelaendeplanung',
            headers: ['Biom', 'Wo es erscheint', 'Gelaende-Blick', 'Planungsansatz'],
            rows: [
              ['Shore', 'Jede Quellenroute mit Shore', 'Pruefe offene Zugaenge, Kanten und Hoehenwechsel, statt eine feste Kuestenform anzunehmen.', 'Erkunde die erste wichtige Entscheidung und halte das Team zusammen, bis die Route klarer wird.'],
              ['Tropics', 'Jede Quellenroute mit Tropics', 'Lies den Namen als warmen, bewachsenen Inselkontext und pruefe Sicht, Kletterstellen und Gefahren in der aktuellen Runde.', 'Achte zuerst auf Routenlesen und Tempo, bevor du gemeinsame Ausruestung einsetzt.'],
              ['Roots', 'Jede Quellenroute mit Roots', 'Achte auf organische oder von Wurzeln bedeckte Routenmerkmale, aber behandle den Namen nicht als vollstaendige Gefahrenliste.', 'Lass Raum zum Umstellen und notiere, welcher Durchgang den Teamplan veraendert hat.'],
              ['Alpine', 'Jede Quellenroute mit Alpine', 'Der Name deutet auf Hoehe oder Berggelaende hin; bestaetige ausgesetzte Kletterstellen und sichere Pausen im Spiel.', 'Schone die Ausdauer und entscheide, wo der naechste verlaessliche Halt liegt.'],
              ['Mesa', 'Jede Quellenroute mit Mesa', 'Lies die Route erst nach einem Blick auf aktuelle Geometrie und Laufrichtung als Plateau- oder Felskontext.', 'Vergleiche den kuerzesten sichtbaren Weg mit dem sichersten Weg, der nach einem Fehler noch erholbar ist.'],
              ['Caldera', 'Jede Quellenroute mit Caldera', 'Der Name weist auf ein vulkanisches Becken hin; Hitze, Lava und Gefahrverhalten muessen in der aktuellen Version bestaetigt werden.', 'Halte Erholungsoptionen bereit, bevor ein enger Abschnitt den Rueckweg einschraenkt.'],
              ['The Kiln', 'Jede Quellenroute mit The Kiln', 'Behandle es als eigenen spaeten oder vulkanischen Kontext, nicht als Beweis fuer einen einzigen festen Aufbau.', 'Bestaetige den naechsten sicheren Halt und verbrauche das letzte Teamwerkzeug nicht nur zum Erkunden.'],
              ['Gloom', 'Jede Quellenroute mit Gloom', 'Rechne mit einer dunkleren oder schwerer lesbaren Sicht und pruefe dann, was die aktuelle Route wirklich zeigt.', 'Vereinbart visuelle Ansagen und eine klare Rueckzugsregel.'],
              ['Citadel', 'Jede Quellenroute mit Citadel', 'Lies Citadel als strukturierten, monumentalen Routen-Kontext; Weg und Hindernisse kommen weiterhin aus der aktuellen Session.', 'Werde an grossen Entscheidungen langsamer und spare Werkzeuge fuer den letzten wichtigen Abschnitt.'],
            ],
          },
        },
        {
          title: 'Einen Biomnamen nutzen, ohne zu viel zu behaupten',
          paragraphs: [
            'Eine gute PEAK-Biome-Liste sollte bei der naechsten Entscheidung helfen und nicht so tun, als wuerde ein Name jedes Objekt oder jede Gefahr verraten. Bestaetige Biom, Datum und angrenzende Route und trenne, was das Spiel gezeigt hat, von dem, was der Name nur vermuten laesst. So bleiben Feldnotizen aktualisierbar.',
            'Alpine kann den Blick auf Hoehe und Pausen lenken, beweist aber keine bestimmte Kletterstelle, Objektposition oder Gegnerreaktion. Das gilt ebenso fuer Gloom, Caldera und The Kiln. Bei Mechaniken sind die aktuelle Session und offizielle Hinweise aelteren Screenshots ueberlegen.',
          ],
          bullets: [
            ['Bezeichnung bestaetigen', 'Notiere Biom und Route genau so, wie sie die aktuelle Quelle oder das Spiel anzeigt.'],
            ['Erstes Risiko pruefen', 'Suche die Kletterstelle, Luecke, Sichtfrage oder Gefahr, die die Bewegung zuerst veraendert.'],
            ['Erholung einplanen', 'Lege eine Pause und eine Umkehrregel fest, bevor ein enger Weg Optionen nimmt.'],
            ['Beobachtung datieren', 'Halte Build-Datum und Spielversion neben jeder Gelaende- oder Ausruestungsnotiz fest.'],
          ],
        },
        {
          title: 'Wie Biome und Karten in PEAK zusammenhaengen',
          paragraphs: [
            'Karte, Route, Biom und Abschnitt lassen sich am besten als getrennte Ebenen lesen. Die Karte ist der begehbare Raum; die Route ist der Weg- oder Sequenzkontext; das Biom ist eine breite regionale Bezeichnung; ein Abschnitt oder Orientierungspunkt kann kleiner sein als alle drei. Diese Trennung verhindert, dass eine PEAK-Biome-Liste eine feste Kartenreihenfolge verspricht.',
            'Die Tagesquelle zeigt eine Biome-Sequenz und keine dauerhafte Weltkarte. Ein datierter Eintrag belegt, was diese Quelle an einem bestimmten Tag gemeldet hat, nicht was jede Lobby, jeder Patch oder jeder kuenftige Reset zeigt. Die Tabelle beschreibt daher Belege und Nutzung, keine erfundenen Eins-zu-eins-Zuordnungen.',
          ],
          table: {
            caption: 'Ebenen, die du beim Lesen von PEAK-Karten getrennt halten solltest',
            headers: ['Ebene', 'Was sie zeigen kann', 'Was sie allein nicht beweist'],
            rows: [
              ['Biom-Bezeichnung', 'Der breite regionale Name eines Quelleneintrags oder einer Route.', 'Jede Gefahr, Objektposition oder genaue Geometrie der aktuellen Runde.'],
              ['Karten- oder Routeneintrag', 'Die datierte Sequenz oder den visuellen Kontext einer Quelle.', 'Einen dauerhaften Tagesplan, sofern Spiel oder offizielle Hinweise ihn nicht bestaetigen.'],
              ['Spiel-Session', 'Den endgueltigen Zustand, den das Team jetzt durchqueren muss.', 'Was ein anderes Match oder eine andere Version morgen zeigt.'],
              ['Patch-Hinweis', 'Den Titel einer offiziellen Aenderung und die dort genannten Details.', 'Eine inoffizielle Rangliste oder eine Mechanik, die der Beitrag nicht nennt.'],
            ],
          },
        },
        {
          title: 'Welches Biom ist heute aktiv?',
          paragraphs: [
            'Der datierte Snapshot unten verbindet diese PEAK-Biome-Liste mit der taeglichen Suchfrage. Er wird beim Build direkt in das HTML geschrieben. Wenn die Karte aussteht, bestaetige die Route im Spiel, statt ein altes Community-Bild als aktuell zu behandeln.',
            'Ein Tagesergebnis laeuft ab, die Liste bleibt aber nuetzlich. Nutze die aktuelle Sequenz, um deine Beobachtung zu planen, und kehre dann zur Session zurueck, um Geometrie und Gefahren zu bestaetigen.',
          ],
        },
        {
          title: 'Ausrüstung und Teamstrategie nach Biom-Kontext',
          paragraphs: [
            'Ein Biomname sollte Prioritaeten veraendern, aber keine starre Rangliste erzwingen. Starte mit Routenwerkzeug fuer die naechste Entscheidung, spare Essen oder Ausdauerhilfe fuer den naechsten Vorstoss und verteile die Verantwortung fuer Erholung vor dem riskanten Abschnitt. Der Wert eines Gegenstands kann sich durch Balance-Aenderungen veraendern; dies ist eine Methode, kein dauerhafter Wert.',
            'Schreibe vor dem Aufstieg das erste Risiko, die passende Ressource und den Haltepunkt auf. Ergaenze danach Datum, Biom, Route und Ergebnis. So entsteht eine nuetzliche Aufzeichnung, ohne eine einzelne Beobachtung zur allgemeinen Regel zu machen.',
          ],
          bullets: [
            ['Route zuerst', 'Plane fuer die erste sichtbare Entscheidung der Session, nicht fuer ein ausgedachtes Biom-Stereotyp.'],
            ['Rollen teilen', 'Sagt, wer Erholung oder Routenwerkzeug traegt, damit der Gegenstand unter Druck nutzbar ist.'],
            ['Reserve behalten', 'Verbrauche nicht alle Ressourcen, bevor Rueckweg oder naechster sicherer Halt feststehen.'],
          ],
        },
      ],
      faq: {
        eyebrow: 'Schnelle Antworten',
        title: 'PEAK-Biome-Liste: haeufige Fragen',
        items: [
          ['Wie viele Biome gibt es in PEAK?', 'Dieser Guide verfolgt derzeit neun benannte Biome: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom und Citadel. Pruefe Spiel und offizielle Updates nach grossen Patches erneut.'],
          ['Aendern sich PEAK-Biome jeden Tag?', 'Die Tagesroute oder Biome-Sequenz kann sich mit der Kartenrotation aendern. Nutze die datierte Quelle und das aktuelle Spiel, statt aus einem einzelnen Eintrag einen festen Kalender abzuleiten.'],
          ['Sind PEAK-Biome dasselbe wie Karten?', 'Nein. Ein Biom ist eine breite regionale Bezeichnung, eine Karte oder Route dagegen der Raum oder die Sequenz aus Quelle oder Session. Ein Eintrag kann mehrere Biome enthalten.'],
          ['Wo kann ich das aktive Biom sehen?', 'Oeffne zuerst den [[link:map-rotation#today-map|Kartenrotations-Guide]] und bestaetige die Route anschliessend im Spiel. Bei nicht verifizierten Datensaetzen bleibt die Karte ausstehend.'],
          ['Wo lerne ich, was PEAK ist?', 'Beginne mit unserem Guide [[link:what-is-peak-game|Was ist PEAK?]] zu Spielablauf, Karten, Rotationsbegriffen und einer Checkliste fuer den ersten Lauf.'],
          ['Welche Ausruestung ist fuer jedes Biom am besten?', 'Ohne verifizierte Gegenstandseffekte und eine aktuelle Route gibt es keine verantwortungsvolle Einheitsantwort. Pruefe das erste Risiko, verteile Erholung und lies offizielle Aenderungen, bevor du einem alten Tipp folgst.'],
        ],
      },
      source: {
        eyebrow: 'Quellen und Grenzen',
        title: 'So wird die PEAK-Biome-Liste gepflegt',
        body: 'Die Biomnamen stammen aus der gepflegten Tageskartenquelle und dem Kontext offizieller PEAK-Updates. Gelaende- und Strategiehinweise sind bewusst als vorsichtige Planung formuliert. Fuer genaue Geometrie, Gefahren, Gegenstandseffekte und nicht offiziell beschriebene Aenderungen bleibt die aktuelle Spiel-Session massgeblich.',
        links: [['Offizielle PEAK-Seite auf Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Offizielle Steam-News', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', 'Heutige PEAK-Karte pruefen'], ['what-is-peak-game', 'Was PEAK ist'], ['peak-map-rotation-schedule', 'Rotationszeiten ansehen']],
      relatedLabel: 'Verwandte PEAK-Guides',
    },
    'what-is-peak-game': {
      meta: {
        title: 'Was ist PEAK? Einsteiger-Guide zu Gameplay und Karten',
        description: 'Neu bei PEAK? Erfahre, worum es im Spiel geht, wie das Klettern funktioniert, was die Kartenrotation bedeutet und wie du dich auf deinen ersten Aufstieg vorbereitest.',
        schema: 'Ein Einsteiger-Guide zu PEAK, dem kooperativen Kletterablauf, Routen- und Ausrüstungsentscheidungen, den Begriffen der Kartenrotation und der täglichen Karte.',
      },
      primaryKeyword: 'was ist PEAK',
      eyebrow: 'Einsteiger-Guide - der erste Aufstieg erklärt',
      h1: 'Was ist PEAK?',
      intro: 'Was ist PEAK? PEAK ist ein kooperatives Kletter- und Survival-Spiel auf Steam, in dem Spieler das Gelände lesen, Ressourcen verwalten und einander auf dem Weg zum Gipfel helfen. Dieser Guide erklärt den Spielablauf verständlich und zeigt dir anschließend [[link:map-rotation#today-map|die heute aktive Karte]] sowie die wichtigsten Begriffe für deinen ersten Lauf.',
      answerLabel: 'Kurzantwort',
      answer: 'PEAK ist ein kooperatives Kletterspiel für Windows auf Steam. Laut offizieller Shop-Beschreibung kannst du allein oder in einer Gruppe mit bis zu vier Spielern spielen. Die zentrale Herausforderung besteht nicht nur darin, nach oben zu gelangen: Das Team muss eine wechselnde Route lesen, Kletterhilfen im richtigen Moment einsetzen, Nahrung und Ausdauer verwalten und sich von Fehlern erholen. Karten und Biombezeichnungen liefern Orientierung, doch für die unmittelbar vor dir liegende Route ist die aktuelle Spielrunde maßgeblich.',
      tocLabel: 'Auf dieser Seite',
      tocFaq: 'FAQ für Einsteiger',
      heroImage: {
        alt: 'PEAK-Spieler koordinieren einen Aufstieg mit gemeinsam genutzter Ausrüstung',
        caption: 'Offizieller Steam-Screenshot: In PEAK stehen das Lesen der Route und gemeinsame Entscheidungen im Mittelpunkt.',
      },
      sections: [
        {
          title: 'Was ist PEAK in einem Satz?',
          paragraphs: [
            'PEAK ist ein kooperatives Spiel mit Schwerpunkt auf dem Klettern, bei dem die Route selbst für den Druck sorgt. Die offizielle Steam-Seite nennt sowohl einen Einzelspielermodus als auch kooperativen Mehrspielermodus für Gruppen mit bis zu vier Personen. „Gemeinsam klettern“ fasst das Spiel zwar knapp zusammen, lässt aber den entscheidenden Teil aus: Bei jedem Aufstieg muss die Gruppe abwägen, wie weit sie geht, was sie mitnimmt und wer helfen kann, wenn ein Plan scheitert.',
            'Dies ist ein unabhängiger Guide, deshalb werden offizielle Fakten und praktische Empfehlungen getrennt behandelt. Angaben zu Plattform, Koop-Einstufung und Spielerzahl stammen von Steam. Die folgenden Hinweise sind Methoden für Entscheidungen in einem routenbasierten Spiel; sie behaupten nicht, dass jedes Team dieselbe Ausrüstung oder denselben Weg verwenden muss.',
          ],
          bullets: [
            ['Plattform', 'Der offizielle Shop führt PEAK für Windows auf Steam.'],
            ['Spielmodi', 'Der Shop nennt Einzelspieler, Mehrspieler, Koop und Online-Koop.'],
            ['Gruppengröße', 'Die offizielle Beschreibung unterstützt Gruppen mit bis zu vier Spielern.'],
          ],
        },
        {
          title: 'So funktioniert der Gameplay-Loop von PEAK',
          paragraphs: [
            'Ein typischer Lauf beginnt mit einer Routenentscheidung und nicht mit einem Kampf-Build. Die Gruppe betrachtet die nächste Kletterstelle, Lücke, Gefahr oder unklare Passage und entscheidet dann, wie viel Zeit sie in die Erkundung investiert. Kletterwerkzeuge und Erholungsoptionen sind wertvoll, weil sie Entscheidungen unter Druck absichern. Nahrung und Ausdauerhilfen spielen eine Rolle, weil ein kurz wirkender Weg teuer werden kann, wenn das Team einen Umweg nimmt oder auf einen sichereren Zug wartet.',
            'Die Kommunikation im Team gehört zum Spielablauf, auch wenn das Spiel kein formelles Rollensystem vorgibt. Ein Spieler kann die Route vorauslesen, ein anderer ein nützliches Werkzeug tragen, und alle profitieren davon, wenn der nächste Haltepunkt vorher vereinbart wird. Eine gute Gewohnheit für Einsteiger ist, die nächste wichtige Entscheidung, die dafür vorgesehene Ressource und den Grund für einen Rückzug laut auszusprechen.',
          ],
          table: {
            caption: 'Die Entscheidungen hinter einem Aufstieg in PEAK',
            headers: ['Entscheidung', 'Leitfrage', 'Warum sie wichtig ist'],
            rows: [
              ['Route', 'Was ist die nächste wichtige Etappe?', 'Ein klares Ziel verhindert, dass das Team Ressourcen für jede sichtbare Möglichkeit verbraucht.'],
              ['Ausrüstung', 'Wer kann das Werkzeug im richtigen Moment einsetzen?', 'Gemeinsame Ausrüstung hilft nur, wenn Zuständigkeit und Zeitpunkt geklärt sind.'],
              ['Tempo', 'Wo liegt die nächste sichere Pause?', 'Eine geplante Pause schont die Ausdauer und gibt der Gruppe einen Sammelpunkt.'],
              ['Erholung', 'Welche Regel gilt für den Rückzug?', 'Ein Rückzugsplan verhindert, dass aus einem Fehler eine Rettungsaktion für den ganzen Lauf wird.'],
            ],
          },
        },
        {
          title: 'PEAK-Karten, Biome und das Rotationssystem',
          paragraphs: [
            'Neue Spieler suchen oft nach einer Erklärung, [[link:map-rotation#today-map|wie die Kartenrotation funktioniert]], weil die Begriffe Karte, Route und Biom leicht ineinander übergehen. Eine Karte ist der Raum, den du durchquerst; eine Route beschreibt den Weg oder die Abfolge; ein Biom ist eine übergeordnete regionale Bezeichnung. Durch die tägliche Rotation ist die Antwort zeitabhängig: Eine datierte Abfolge kann bei der Planung helfen, sollte aber niemals die Route ersetzen, die deine aktuelle Spielrunde zeigt.',
            'Um [[link:map-rotation#today-map|die heute aktive Karte]] zu sehen, öffne den Tageseintrag und prüfe Datum, Quelle, Route und Reset-Status. Wenn Daten noch ausstehen, ist das aktuelle Spiel verlässlicher als ein undatierter Screenshot. Die Kartenseite erklärt außerdem, wie sich eine tägliche Antwort von dauerhaft nützlichen Planungshinweisen unterscheidet - eine wichtige Grundlage für ein hilfreiches PEAK-Wiki.',
            'Für einen Überblick über die Begriffe kannst du unsere [[link:peak-biomes-list|Biome-Liste]] lesen. Sie nennt die derzeit durch Quellen belegte Auswahl und trennt klar zwischen einer Biombezeichnung und der Zuordnung zu einer vollständigen Karte.',
          ],
        },
        {
          title: 'So startest du deinen ersten Lauf in PEAK',
          paragraphs: [
            'Du brauchst keine auswendig gelernte Rangliste, um anzufangen. Nutze einen kurzen Ablauf, der sowohl bei einer bekannten als auch bei einer neuen Route funktioniert. Ziel ist es, immer nur eine gemeinsame Entscheidung zu treffen und genug Reserve für die Erholung zu behalten. Sobald die Gruppe einige datierte Beobachtungen gesammelt hat, kann sie ihre Routennotizen verbessern, ohne persönliche Erfahrung mit einer offiziellen Regel zu verwechseln.',
            'Derselbe Ablauf funktioniert allein und im Koop, aber der Abstimmungsbedarf ist unterschiedlich. Allein musst du Routenwahl und Erholung selbst entscheiden. In einer Gruppe solltest du die nächste wichtige Etappe und den Haltepunkt laut nennen, damit gemeinsame Ressourcen nicht aufgrund unterschiedlicher Annahmen verbraucht werden. Ein Sammelpunkt ist eine Methode zur Koordination und keine Garantie dafür, dass das Gelände sicher ist.',
          ],
          bullets: [
            ['1. Spielrunde prüfen', 'Kläre, wer mitspielt, welche Route das Spiel zeigt und ob alle das erste Ziel verstanden haben.'],
            ['2. Vor dem Einsatz erkunden', 'Prüfe die erste bedeutende Kletterstelle oder Gefahr, bevor du den Gegenstand verbrauchst, der sie absichern könnte.'],
            ['3. Hilfsmittel zuweisen', 'Legt fest, wer Routenhilfe, Nahrung oder die Verantwortung für Erholung übernimmt.'],
            ['4. Pause festlegen', 'Bestimmt einen Sammelpunkt und eine klare Bedingung für den Rückzug.'],
            ['5. Eine Notiz festhalten', 'Speichere nach dem Versuch Datum, Route, Version und die Entscheidung, die am wichtigsten war.'],
          ],
        },
        {
          title: 'Welche Rolle Updates für Einsteiger spielen',
          paragraphs: [
            'Wenn du wegen eines neuen Bioms oder Patches nach „Was ist PEAK?“ gesucht hast, beginne auf der Seite mit den [[link:peak-game-update|neuesten Updates]]. Dort werden offizielle Titel und Daten von der Interpretation der Community getrennt. So können Einsteiger erkennen, ob eine Meldung neue Inhalte ankündigt, eine Mechanik verändert oder lediglich einen Fehler behebt.',
            'Wiederhole nach einem Update denselben Einsteiger-Ablauf: Lies den offiziellen Titel, prüfe die aktuelle Karte, teste eine Annahme zur Route und notiere, was sich verändert hat. Diese Methode bleibt länger nützlich als eine Empfehlung, die möglicherweise für eine ältere Version geschrieben wurde.',
          ],
        },
      ],
      faq: {
        eyebrow: 'Schnelle Antworten',
        title: 'Was ist PEAK? Häufige Fragen',
        items: [
          ['Ist PEAK ein Mehrspieler-Spiel?', 'Ja. Der offizielle Steam-Eintrag nennt Mehrspieler, Koop und Online-Koop; laut Beschreibung sind Gruppen mit bis zu vier Spielern möglich. Dieselbe Quelle führt PEAK auch als Einzelspieler-Spiel.'],
          ['Was macht man in PEAK?', 'Du kletterst durch wechselnde Routenumgebungen, liest das Gelände, verwaltest Ausrüstung und Ressourcen und stimmst dich mit der Gruppe ab. Die genauen Gefahren und Gegenstandseffekte hängen von der aktuellen Spielversion und Runde ab.'],
          ['Wie funktioniert die Kartenrotation in PEAK?', 'Eine datierte Route oder Biome-Abfolge kann sich mit der Zeit ändern. Sieh dir [[link:map-rotation#today-map|die tägliche Karte]] mit dem aktuellen Build-Eintrag an und bestätige die aktive Route anschließend in deiner Runde, da eine statische Seite den Spielzustand nicht ersetzen kann.'],
          ['Wie viele Spieler können PEAK gemeinsam spielen?', 'Die offizielle Steam-Beschreibung unterstützt Gruppen mit bis zu vier Spielern. Prüfe den aktuellen Shop-Eintrag und die Patch-Informationen, falls sich Plattform- oder Mehrspielerunterstützung ändern.'],
          ['Ist PEAK ein Survival-Spiel oder ein Kletterspiel?', 'Die treffendste Kurzbeschreibung ist kooperatives Kletter- und Survival-Spiel: Das Klettern ist die zentrale Bewegungsherausforderung, während Ressourcen- und Erholungsentscheidungen für den Überlebensdruck sorgen.'],
          ['Was sollten Einsteiger in PEAK mitnehmen?', 'Beginne mit der kleinsten Auswahl, die die nächste sichtbare Entscheidung absichert: eine passende Routenhilfe, bei Bedarf Nahrung oder Ausdauerunterstützung und einen Erholungsplan. Behandle keine ungeprüfte Rangliste als allgemeingültig.'],
        ],
      },
      source: {
        eyebrow: 'Quellen und Grenzen',
        title: 'Ein Einsteiger-Guide auf Grundlage aktueller Quellen',
        body: 'Angaben zu Plattform, Spielmodi, Koop und Spielerzahl stammen von der offiziellen PEAK-Seite auf Steam. Karten- und Reset-Daten sind Build-Einträge, die für diese Website gepflegt werden. Praktische Kletterhinweise sind als Empfehlungen gekennzeichnet und sollten nach Updates oder bei Abweichungen in der aktuellen Spielrunde erneut geprüft werden.',
        links: [
          ['Offizielle PEAK-Seite auf Steam', 'https://store.steampowered.com/app/3527290/PEAK/'],
          ['Offizielle Steam-News', 'https://store.steampowered.com/news/app/3527290'],
        ],
      },
      related: [
        ['map-rotation', 'Heute aktive Karte prüfen'],
        ['peak-biomes-list', 'Biome-Liste ansehen'],
        ['peak-game-update', 'Neueste Updates lesen'],
        ['peak-map-rotation-schedule', 'Reset-Zeiten ansehen'],
      ],
      relatedLabel: 'Verwandte PEAK-Guides',
    },
  },
  ja: {
    'peak-biomes-list': {
      meta: {
        title: 'PEAKバイオーム一覧：全バイオーム・マップ・地形ガイド',
        description: 'PEAKのバイオーム一覧を完全収録。各バイオームのマップ、地形、準備の考え方をわかりやすく解説し、ルートごとの確認ポイントも整理します。ゲーム内で現在の状況を確かめる方法、マップとバイオームの関係、更新で情報が変わる場合の注意点も紹介。リセットごとに今日のマップを更新します。出発前にも便利です。',
        schema: 'PEAKのバイオーム名、マップとの関係、地形の読み方、装備計画、毎日のマップ記録を出典とともに整理したガイド。',
      },
      eyebrow: 'バイオーム資料 - 出典を確認した一覧',
      h1: 'PEAKバイオーム一覧',
      intro: 'このPEAKバイオーム一覧では、現在管理しているマップ情報に登場するバイオームをまとめ、ルートとの関係を説明します。ビルド時に生成される[[link:map-rotation#today-map|今日のPEAKマップ]]への入口も用意しています。用語を覚えるには一覧を、実際に登る前には日付付きの記録を確認してください。',
      answerLabel: '短い答え',
      answer: '出典で確認できる現在のPEAKバイオーム一覧は、Shore、Tropics、Roots、Alpine、Mesa、Caldera、The Kiln、Gloom、Citadelです。バイオームはルートの地域ラベルであり、完全なマップ、固定されたステージ数、毎日同じ順番を意味するものではありません。表で全体をつかみ、アクティブなルートはゲーム内で確認しましょう。',
      tocLabel: 'このページの内容',
      tocFaq: 'バイオームFAQ',
      heroImage: { alt: '難しい地形で進路を考える登山者を写したPEAKのルート画面', caption: 'Steam公式スクリーンショット - ルートの状況を見れば、バイオーム名を実際の計画に置き換えられます。' },
      sections: [
        {
          title: 'PEAKのバイオーム完全一覧',
          paragraphs: [
            '以下の名称は、デイリーマップ取得処理と公開マップ情報が現在認識している一覧です。地形の説明は観察のための目安であり、正確な危険、戦利品表、固定されたステージ構成を断定するものではありません。',
            'マップ、ルート、バイオームは関係していますが、同じものではありません。情報源によってはバイオームの並びだけが示され、すべての目印までは載っていないことがあります。大まかな環境をバイオームで把握し、スタミナや道具を使う場所は現在のセッションで判断してください。',
          ],
          table: {
            caption: 'PEAKのバイオームと慎重な地形確認メモ',
            headers: ['バイオーム', '登場する場所', '地形の見方', '計画の考え方'],
            rows: [
              ['Shore', 'Shoreを含む情報源上のルート', '固定された海岸線を想定せず、開けた進入口、端、標高差を最初に確認します。', '最初の決断を偵察し、ルートの形が見えるまでチームを離さないようにします。'],
              ['Tropics', 'Tropicsを含む情報源上のルート', '暖かく植物の多い島の環境という名前を手がかりにしつつ、視界、登り、危険は現在のプレイで確認します。', '共有の道具を使う前に、ルートの読み取りとペース配分を優先します。'],
              ['Roots', 'Rootsを含む情報源上のルート', '有機的な要素や根に覆われた場所を探しますが、名前だけで危険の全容を決めないでください。', '位置を変えられる余地を残し、どの通路がチームの計画を変えたか記録します。'],
              ['Alpine', 'Alpineを含む情報源上のルート', '高所や山岳環境を連想できますが、露出した登りと安全な休憩地点はゲーム内で確かめます。', 'スタミナを守り、次に確実に休める場所を先に決めます。'],
              ['Mesa', 'Mesaを含む情報源上のルート', '現在の地形と進行方向を見てから、台地や岩の環境としてルートを読みます。', '見た目に短い道と、失敗しても立て直せる安全な道を比べます。'],
              ['Caldera', 'Calderaを含む情報源上のルート', '火山性の盆地を示す名前ですが、熱、溶岩、危険の挙動は現在のバージョンで確認が必要です。', '戻る道が狭くなる場所へ進む前に、立て直しの選択肢を残します。'],
              ['The Kiln', 'The Kilnを含む情報源上のルート', '後半または火山系の独立した環境として扱い、固定された一つの地形だとは考えません。', '次の安全な休憩地点を確認し、偵察だけでチーム最後の道具を使わないようにします。'],
              ['Gloom', 'Gloomを含む情報源上のルート', '暗さや視認性の低さを想定できますが、実際に表示される現在のルートを確認します。', '視覚的な合図を統一し、撤退条件を明確にします。'],
              ['Citadel', 'Citadelを含む情報源上のルート', '構造的で巨大な印象のある環境として読みますが、実際の道と障害物は現在のセッションで決まります。', '大きな分岐では速度を落とし、最後の決断のために道具を残します。'],
            ],
          },
        },
        {
          title: 'バイオーム名から判断しすぎない読み方',
          paragraphs: [
            '役立つPEAKバイオーム一覧は、次の判断を助けるものであり、名前だけで全アイテムや危険が分かるように見せるものではありません。バイオーム、日付、周辺ルートを確認し、ゲームで見えた事実と名前からの推測を分けて記録しましょう。',
            'Alpineという名前は高さや休憩地点に目を向けるきっかけになりますが、特定の登り、アイテム位置、敵の行動を証明するものではありません。Gloom、Caldera、The Kilnも同様です。仕組みについては、古いスクリーンショットより現在のゲームと公式情報を優先してください。',
          ],
          bullets: [
            ['ラベルを確認する', '現在の情報源やゲームが表示する名前のまま、バイオームとルートを記録します。'],
            ['最初の危険を見る', '移動を最初に変える登り、隙間、視界の問題、危険を探します。'],
            ['立て直しを計画する', '狭い道で選択肢が減る前に、休憩場所と引き返す条件を決めます。'],
            ['観察日にちを付ける', '地形や装備のメモにはビルド日とゲームのバージョンを添えます。'],
          ],
        },
        {
          title: 'PEAKでバイオームとマップはどう関係するか',
          paragraphs: [
            'マップ、ルート、バイオーム、ステージは別の層として考えると分かりやすくなります。マップは移動する空間、ルートは道や順番の文脈、バイオームは広い地域ラベルです。ステージや目印はその一部にすぎない場合もあります。この区別が、固定されたマップ順をPEAKバイオーム一覧が約束してしまうのを防ぎます。',
            '毎日の情報源が示すのは、日付のあるバイオームの並びであって恒久的なワールドマップではありません。記録が証明するのはその日に情報源が報告した内容であり、すべてのロビー、パッチ、将来のリセットの結果ではありません。下の表も、証拠と使い方を整理したもので、想像上の一対一のマップ割り当てではありません。',
          ],
          table: {
            caption: 'PEAKのマップを読むときに分けて考える情報の層',
            headers: ['層', '分かること', 'それだけでは分からないこと'],
            rows: [
              ['バイオームラベル', '情報源の項目やルートに付いた大まかな地域名。', '現在のセッションのすべての危険、アイテム位置、正確な地形。'],
              ['マップまたはルート項目', '情報源が示す日付付きの並びや視覚的な環境。', 'ゲームや公式情報が確認していない恒久的な毎日スケジュール。'],
              ['ゲーム内セッション', 'チームが今まさに進む必要がある最終的な状態。', '別のロビーや別のバージョンで明日表示される内容。'],
              ['パッチノート', '公式の変更タイトルと、投稿に明記された内容。', '投稿に書かれていない仕組みや非公式の完全な評価表。'],
            ],
          },
        },
        {
          title: '今日アクティブなバイオームはどれ？',
          paragraphs: [
            '下の日付付きスナップショットは、PEAKバイオーム一覧を毎日の検索意図につなげます。ビルド時にHTMLへ直接書き込まれます。カードが確認待ちの場合は、古いコミュニティ画像を現在の情報とみなさず、ゲーム内でルートを確認してください。',
            '毎日の結果は古くなりますが、一覧自体は役立ちます。現在の並びを何を見るべきかの目安にし、正確な地形や危険はセッションで確かめましょう。',
          ],
        },
        {
          title: 'バイオームの状況に合わせた装備とチーム戦略',
          paragraphs: [
            'バイオーム名は優先順位を変えるための手がかりであり、固定の最強ランキングを押し付けるものではありません。次の判断を守るルート用の道具、次の前進に備える食料やスタミナ支援、危険区間の前に決める回復担当を考えます。アイテムの価値はバランス調整で変わるため、これは方法であって恒久的な数値ではありません。',
            '登る前に、最初の危険、それを支える資源、止まる場所を書き出します。終わったら日付、バイオーム、ルート、結果を加えます。こうすれば一度の観察を普遍的なルールにせず、役立つ記録を残せます。',
          ],
          bullets: [
            ['まずルートを見る', '想像上のバイオームの定番ではなく、セッションで見える最初の判断に備えます。'],
            ['役割を分ける', '回復やルート用の道具を誰が持つか決め、必要なときに使えるようにします。'],
            ['余裕を残す', '帰り道や次の安全な休憩地点が分かる前に資源を使い切らないでください。'],
          ],
        },
      ],
      faq: {
        eyebrow: 'よくある質問',
        title: 'PEAKバイオーム一覧 FAQ',
        items: [
          ['PEAKにはバイオームがいくつありますか？', 'このガイドでは現在、Shore、Tropics、Roots、Alpine、Mesa、Caldera、The Kiln、Gloom、Citadelの9種類を追跡しています。大きなパッチの後はゲームと公式情報を再確認してください。'],
          ['PEAKのバイオームは毎日変わりますか？', '毎日のルートやバイオームの並びはマップローテーションで変わる可能性があります。一つの記録から固定スケジュールを推測せず、日付付きの情報源と現在のゲームを確認してください。'],
          ['PEAKのバイオームはマップと同じですか？', 'いいえ。バイオームは広い地域ラベルで、マップやルートは情報源やセッションが示す空間または順番です。一つの情報源の項目に複数のバイオームが含まれることもあります。'],
          ['アクティブなバイオームはどこで確認できますか？', 'まず[[link:map-rotation#today-map|マップローテーションガイド]]を開き、その後ゲーム内でルートを確認してください。日付付きデータを確認できない場合、カードは確認待ちのままになります。'],
          ['PEAKがどんなゲームかはどこで分かりますか？', 'コアの流れ、マップ、ローテーション用語、初心者向け手順は、[[link:what-is-peak-game|PEAKとは何か]]のガイドから確認できます。'],
          ['各バイオームに最適な装備は何ですか？', '確認済みのアイテム効果と現在のルートがない状態で、全状況に通用する答えを出すことはできません。最初の危険、回復担当、公式の変更を確認してから古いおすすめを使いましょう。'],
        ],
      },
      source: {
        eyebrow: '出典と注意点',
        title: 'このPEAKバイオーム一覧の更新方法',
        body: 'バイオーム名は管理しているデイリーマップ情報と、PEAK公式アップデートの内容から整理しています。地形と戦略のメモは慎重な計画のヒントとして書いています。正確な地形、危険、アイテム効果、公式に記載されていない変更については、現在のゲーム内セッションを最終的な基準にしてください。',
        links: [['Steam公式PEAKページ', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Steam公式ニュース', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', '今日のPEAKマップを見る'], ['what-is-peak-game', 'PEAKとは何かを読む'], ['peak-map-rotation-schedule', 'ローテーション時刻を見る']],
      relatedLabel: '関連するPEAKガイド',
    },
  },
  pt: {
    'peak-biomes-list': {
      meta: {
        title: 'Lista de biomas de PEAK: mapas e guia de terreno',
        description: 'Lista completa de biomas de PEAK com mapas, terreno e dicas. Veja o bioma ativo de hoje no nosso mapa diario, atualizado a cada reinicio para planejar melhor.',
        schema: 'Guia de biomas de PEAK baseado em fontes, com nomes acompanhados, relacao com mapas, leitura do terreno, equipamento e registro diario.',
      },
      eyebrow: 'Referencia de biomas - lista baseada em fontes',
      h1: 'Lista de biomas de PEAK',
      intro: 'Esta lista de biomas de PEAK apresenta todos os biomas atualmente expostos pelas fontes de mapas mantidas, explica a relacao com as rotas e oferece no build um acesso para o [[link:map-rotation#today-map|mapa de PEAK de hoje]]. Use a lista para aprender os termos e consulte o registro datado antes de uma escalada real.',
      answerLabel: 'Resposta curta',
      answer: 'A lista de biomas de PEAK confirmada pelas fontes inclui Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. Um bioma e um rotulo regional no contexto da rota; ele nao e automaticamente um mapa completo, uma quantidade fixa de fases ou uma ordem diaria permanente. Use a tabela para se orientar e confirme a rota ativa dentro do jogo.',
      tocLabel: 'Nesta pagina',
      tocFaq: 'FAQ de biomas',
      heroImage: { alt: 'Captura de uma rota de PEAK mostrando um escalador planejando um caminho em terreno dificil', caption: 'Captura oficial da Steam: o contexto da rota transforma o nome do bioma em um plano pratico.' },
      sections: [
        {
          title: 'A lista completa de biomas de PEAK',
          paragraphs: [
            'Os nomes abaixo formam a lista reconhecida pelo coletor do mapa diario e pela fonte publica de mapas. As notas de terreno sao lentes de observacao prudentes: indicam o que verificar sem prometer perigos exatos, tabelas de saque ou fases com layout fixo.',
            'Mapa, rota e bioma estao relacionados, mas nao sao a mesma coisa. Uma fonte pode mostrar uma sequencia de biomas sem registrar cada ponto de referencia. Use o bioma como contexto amplo e observe a sessao atual antes de gastar resistencia, parar ou usar um equipamento.',
          ],
          table: {
            caption: 'Biomas de PEAK e notas prudentes para ler o terreno',
            headers: ['Bioma', 'Onde aparece', 'Leitura do terreno', 'Abordagem de planejamento'],
            rows: [
              ['Shore', 'Qualquer rota da fonte que inclua Shore', 'Comece conferindo acessos abertos, bordas e mudancas de altura em vez de supor um litoral fixo.', 'Explore o primeiro compromisso e mantenha a equipe junta enquanto o formato da rota fica claro.'],
              ['Tropics', 'Qualquer rota da fonte que inclua Tropics', 'Use o nome como contexto de ilha quente e com vegetacao; confirme visibilidade, escaladas e perigos na partida atual.', 'Priorize a leitura da rota e o ritmo antes de gastar um recurso compartilhado.'],
              ['Roots', 'Qualquer rota da fonte que inclua Roots', 'Procure elementos organicos ou cobertos por raizes, mas nao transforme o nome em um guia completo de perigos.', 'Deixe espaco para mudar de posicao e anote qual passagem alterou o plano da equipe.'],
              ['Alpine', 'Qualquer rota da fonte que inclua Alpine', 'O nome sugere um contexto elevado ou montanhoso; confirme escaladas expostas e pausas seguras no jogo.', 'Proteja a resistencia e decida onde sera a proxima pausa confiavel.'],
              ['Mesa', 'Qualquer rota da fonte que inclua Mesa', 'Leia a rota como um contexto de planalto ou rocha somente depois de conferir a geometria atual e a direcao do caminho.', 'Compare o caminho visivel mais curto com a opcao segura que ainda permita recuperar um erro.'],
              ['Caldera', 'Qualquer rota da fonte que inclua Caldera', 'O nome indica um contexto de bacia vulcanica; calor, lava e comportamento dos perigos precisam ser conferidos na versao atual.', 'Mantenha opcoes de recuperacao antes de entrar em uma rota que limite a volta.'],
              ['The Kiln', 'Qualquer rota da fonte que inclua The Kiln', 'Trate-o como um contexto vulcanico ou de trecho avancado, nao como prova de um unico layout fixo.', 'Confirme a proxima pausa segura e nao gaste o ultimo recurso da equipe apenas explorando.'],
              ['Gloom', 'Qualquer rota da fonte que inclua Gloom', 'Use o nome para esperar uma leitura mais escura ou com menor visibilidade e confirme o que a rota mostra agora.', 'Combine chamadas visuais e uma regra clara para recuar.'],
              ['Citadel', 'Qualquer rota da fonte que inclua Citadel', 'Leia Citadel como um contexto estruturado e monumental; o caminho ativo e os obstaculos continuam vindo da sessao atual.', 'Diminua o ritmo nas decisoes grandes e guarde ferramentas para o ultimo compromisso.'],
            ],
          },
        },
        {
          title: 'Como usar o nome de um bioma sem afirmar demais',
          paragraphs: [
            'Uma boa lista de biomas de PEAK deve ajudar na proxima decisao, nao fingir que um nome revela cada objeto ou perigo. Confirme bioma, data e rota vizinha, separando o que o jogo mostrou daquilo que o nome apenas sugere. Assim as notas de campo continuam faceis de atualizar.',
            'Alpine pode chamar a atencao para altura e pontos de descanso, mas nao prova uma escalada especifica, a posicao de um item ou o comportamento de um inimigo. O mesmo vale para Gloom, Caldera e The Kiln. Para mecanicas, a sessao atual e as notas oficiais valem mais que uma captura antiga.',
          ],
          bullets: [
            ['Confirme o rotulo', 'Registre o bioma e a rota exatamente como aparecem na fonte ou no jogo atual.'],
            ['Veja o primeiro risco', 'Procure a escalada, o vao, o problema de visibilidade ou o perigo que muda o movimento primeiro.'],
            ['Planeje a recuperacao', 'Escolha uma pausa e uma regra de retorno antes que uma rota estreita remova suas opcoes.'],
            ['Registre a data', 'Mantenha a data do build e a versao do jogo junto de cada nota de terreno ou equipamento.'],
          ],
        },
        {
          title: 'Como biomas e mapas se relacionam em PEAK',
          paragraphs: [
            'Mapa, rota, bioma e fase funcionam melhor como camadas separadas. O mapa e o espaco navegavel; a rota e o contexto do caminho ou da sequencia; o bioma e um rotulo regional amplo; uma fase ou ponto de referencia pode ser menor que os tres. Essa separacao impede que uma lista de biomas de PEAK prometa uma ordem fixa de mapas.',
            'A fonte diaria expoe uma sequencia de biomas, nao um mapa permanente do mundo. Um registro datado mostra o que aquela fonte informou em um dia, nao o que todo lobby, patch ou reinicio futuro mostrara. Por isso a tabela descreve evidencias e uso, sem inventar atribuicoes individuais de mapa e bioma.',
          ],
          table: {
            caption: 'Camadas de evidencia para manter separadas ao ler mapas de PEAK',
            headers: ['Camada', 'O que ela pode mostrar', 'O que ela nao prova sozinha'],
            rows: [
              ['Rotulo de bioma', 'O nome regional amplo ligado a uma entrada da fonte ou a uma rota.', 'Todo perigo, posicao de item ou geometria exata da partida atual.'],
              ['Entrada de mapa ou rota', 'A sequencia datada ou o contexto visual informado por uma fonte.', 'Um calendario diario permanente sem confirmacao do jogo ou das notas oficiais.'],
              ['Sessao no jogo', 'O estado final que a equipe precisa atravessar agora.', 'O que outro lobby ou outra versao mostrara amanha.'],
              ['Nota de patch', 'O titulo de uma mudanca oficial e os detalhes escritos na publicacao.', 'Uma lista de nivel nao oficial ou uma mecanica que a publicacao nao menciona.'],
            ],
          },
        },
        {
          title: 'Qual bioma esta ativo hoje?',
          paragraphs: [
            'O instantaneo datado abaixo conecta esta lista de biomas de PEAK com a busca diaria. Ele e escrito no HTML durante o build. Se o cartao estiver pendente, confirme a rota no jogo em vez de tratar uma imagem antiga da comunidade como informacao atual.',
            'O resultado diario expira, mas a lista continua util. Use a sequencia atual para decidir o que observar e volte a sessao para conferir a geometria e os perigos concretos.',
          ],
        },
        {
          title: 'Equipamento e estrategia de equipe por contexto de bioma',
          paragraphs: [
            'O nome do bioma deve mudar prioridades, nao impor uma lista rigida de melhores itens. Comece pelo recurso de rota que protege a proxima decisao, reserve comida ou apoio de resistencia para o proximo avanco e defina quem cuida da recuperacao antes do trecho perigoso. O valor de um item pode mudar com o balanceamento; isto e um metodo, nao uma estatistica permanente.',
            'Antes de subir, escreva o primeiro risco, o recurso que o apoia e o ponto de parada. Depois adicione data, bioma, rota e resultado. Assim voce cria um registro util sem transformar uma observacao em regra universal.',
          ],
          bullets: [
            ['Rota primeiro', 'Prepare o primeiro compromisso visivel da sessao, nao um estereotipo imaginado do bioma.'],
            ['Divida as funcoes', 'Diga quem carrega recuperacao ou recurso de rota para que o item esteja disponivel sob pressao.'],
            ['Mantenha margem', 'Nao gaste todos os recursos antes de conhecer o caminho de volta ou a proxima pausa segura.'],
          ],
        },
      ],
      faq: {
        eyebrow: 'Respostas rapidas',
        title: 'FAQ da lista de biomas de PEAK',
        items: [
          ['Quantos biomas existem em PEAK?', 'Este guia acompanha nove biomas nomeados: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. Confira o jogo e as atualizacoes oficiais novamente depois de patches grandes.'],
          ['Os biomas de PEAK mudam todos os dias?', 'A rota diaria ou a sequencia de biomas pode mudar com a rotacao do mapa. Use a fonte datada e o jogo atual em vez de deduzir um calendario fixo a partir de um registro.'],
          ['Os biomas de PEAK sao os mesmos que os mapas?', 'Nao. Bioma e um rotulo regional amplo, enquanto mapa ou rota e o espaco ou a sequencia mostrada pela fonte ou pela sessao. Uma entrada pode conter varios biomas.'],
          ['Onde posso consultar o bioma ativo?', 'Abra primeiro o [[link:map-rotation#today-map|guia de rotacao do mapa]] e depois confirme a rota no jogo. O cartao fica pendente quando os dados datados nao podem ser verificados.'],
          ['Onde posso aprender o que e PEAK?', 'Comece pelo nosso guia [[link:what-is-peak-game|o que e PEAK]] para conhecer o ciclo principal, os mapas, o vocabulario de rotacao e os passos para iniciantes.'],
          ['Qual e o melhor equipamento para cada bioma?', 'Nao existe uma resposta universal responsavel sem efeitos de itens verificados e uma rota atual. Veja o primeiro risco, defina a recuperacao e confira as mudancas oficiais antes de seguir uma recomendacao antiga.'],
        ],
      },
      source: {
        eyebrow: 'Fontes e limites',
        title: 'Como esta lista de biomas de PEAK e mantida',
        body: 'Os nomes dos biomas vem da fonte diaria de mapas mantida e do contexto das atualizacoes oficiais de PEAK. As notas de terreno e estrategia sao apresentadas como orientacao prudente. A sessao atual continua sendo a autoridade para geometria, perigos, efeitos de itens e mudancas que uma fonte oficial nao descreveu.',
        links: [['Pagina oficial de PEAK na Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Noticias oficiais da Steam', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', 'Ver o mapa de PEAK de hoje'], ['what-is-peak-game', 'Entender o que e PEAK'], ['peak-map-rotation-schedule', 'Ver os horarios de rotacao']],
      relatedLabel: 'Guias relacionados de PEAK',
    },
  },
  ko: {
    'peak-biomes-list': {
      meta: {
        title: 'PEAK 바이옴 목록: 모든 바이옴, 지도와 지형 가이드',
        description: 'PEAK 바이옴 전체 목록에서 지도, 지형 특징과 준비 방법을 확인하세요. 바이옴과 실제 루트의 관계, 출발 전 점검할 항목, 현재 버전에서 직접 확인해야 하는 정보를 함께 정리했습니다. 매 리셋 후 업데이트되는 오늘의 지도와 최신 출처를 확인하고 출발 계획을 세워 보세요.',
        schema: 'PEAK 바이옴 이름과 지도 관계, 지형 읽기, 장비 계획, 오늘의 지도 기록을 출처와 함께 정리한 가이드입니다.',
      },
      eyebrow: '바이옴 참고 자료 - 출처를 확인한 목록',
      h1: 'PEAK 바이옴 목록',
      intro: '이 PEAK 바이옴 목록은 현재 관리 중인 지도 출처에 등장하는 모든 바이옴을 정리하고, 바이옴 이름이 루트와 어떤 관계인지 설명합니다. 빌드 시 생성되는 [[link:map-rotation#today-map|오늘의 PEAK 지도]]로 가는 입구도 제공합니다. 용어를 익힐 때는 목록을, 실제 등반 전에는 날짜가 표시된 일일 기록을 확인하세요.',
      answerLabel: '짧은 답변',
      answer: '현재 출처로 확인되는 PEAK 바이옴은 Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, Citadel입니다. 바이옴은 루트의 넓은 지역을 나타내는 이름이며, 완성된 지도나 고정된 스테이지 수, 매일 같은 순서를 뜻하지 않습니다. 표에서 전체 구성을 파악한 뒤 활성 루트는 게임 안에서 확인하세요.',
      tocLabel: '이 페이지의 내용',
      tocFaq: '바이옴 FAQ',
      heroImage: { alt: '어려운 지형에서 이동 경로를 계획하는 등반가가 보이는 PEAK 루트 화면', caption: 'Steam 공식 스크린샷 - 루트의 상황을 확인해야 바이옴 이름을 실제 계획으로 바꿀 수 있습니다.' },
      sections: [
        {
          title: 'PEAK 바이옴 전체 목록',
          paragraphs: [
            '아래 이름은 일일 지도 수집기와 공개 지도 출처가 현재 인식하는 목록입니다. 지형 설명은 관찰을 위한 참고이며, 모든 위험 요소나 전리품 표, 고정된 스테이지 배치를 단정하지 않습니다.',
            '지도, 루트, 바이옴은 서로 연결되어 있지만 같은 개념은 아닙니다. 출처에는 바이옴 순서만 있고 모든 랜드마크가 없을 수도 있습니다. 바이옴으로 넓은 환경을 파악하고, 스태미나나 장비를 사용할 위치는 현재 세션을 보고 결정하세요.',
          ],
          table: {
            caption: 'PEAK 바이옴과 신중한 지형 계획 메모',
            headers: ['바이옴', '등장 위치', '지형을 읽는 법', '계획 방법'],
            rows: [
              ['Shore', 'Shore가 포함된 출처의 모든 루트', '고정된 해안 배치를 가정하지 말고 열린 접근로, 가장자리와 높이 변화를 먼저 살핍니다.', '첫 번째 중요한 결정을 정찰하고 루트가 보일 때까지 팀을 함께 움직입니다.'],
              ['Tropics', 'Tropics가 포함된 출처의 모든 루트', '따뜻하고 식물이 많은 섬 환경이라는 이름을 참고하되 시야, 등반 구간과 위험은 현재 세션에서 확인합니다.', '공용 장비를 사용하기 전에 루트를 읽고 속도를 조절합니다.'],
              ['Roots', 'Roots가 포함된 출처의 모든 루트', '유기물이나 뿌리로 덮인 경로를 살피지만 이름만으로 위험 전체를 판단하지 않습니다.', '위치를 바꿀 여유를 남기고 팀 계획을 바꾼 통로를 기록합니다.'],
              ['Alpine', 'Alpine이 포함된 출처의 모든 루트', '높은 곳이나 산악 환경을 예상할 수 있지만 노출된 등반과 안전한 휴식 지점은 게임에서 확인합니다.', '스태미나를 아끼고 다음에 확실히 쉴 곳을 먼저 정합니다.'],
              ['Mesa', 'Mesa가 포함된 출처의 모든 루트', '현재 지형의 형태와 진행 방향을 확인한 뒤 고원이나 암석 환경으로 루트를 읽습니다.', '눈에 보이는 가장 짧은 길과 실수 후에도 회복할 수 있는 안전한 길을 비교합니다.'],
              ['Caldera', 'Caldera가 포함된 출처의 모든 루트', '화산 분지라는 맥락을 암시하지만 열, 용암과 위험의 작동 방식은 현재 버전에서 확인해야 합니다.', '돌아갈 길이 좁아지는 구간에 들어가기 전에 회복 수단을 남겨 둡니다.'],
              ['The Kiln', 'The Kiln이 포함된 출처의 모든 루트', '후반 또는 화산 계열의 별도 환경으로 보고, 하나의 고정 배치라고 단정하지 않습니다.', '다음 안전한 휴식 지점을 확인하고 정찰에 팀의 마지막 장비를 쓰지 않습니다.'],
              ['Gloom', 'Gloom이 포함된 출처의 모든 루트', '어둡거나 시야를 읽기 어려운 상황을 예상하되 현재 루트에 실제로 보이는 내용을 확인합니다.', '시각적 신호를 맞추고 후퇴 조건을 분명히 정합니다.'],
              ['Citadel', 'Citadel이 포함된 출처의 모든 루트', '구조적이고 거대한 환경으로 읽을 수 있지만 활성 경로와 장애물은 현재 세션에 따라 달라집니다.', '큰 결정을 내릴 때 속도를 낮추고 마지막 선택을 위해 장비를 남깁니다.'],
            ],
          },
        },
        {
          title: '바이옴 이름만으로 과하게 단정하지 않는 법',
          paragraphs: [
            '유용한 PEAK 바이옴 목록은 다음 결정을 돕는 자료여야 하며, 이름 하나로 모든 물체나 위험을 알 수 있는 것처럼 말해서는 안 됩니다. 바이옴, 날짜와 주변 루트를 확인하고 게임에서 본 사실과 이름이 암시하는 추측을 나누어 기록하세요. 그러면 현장 메모를 계속 업데이트하기 쉽습니다.',
            'Alpine은 고도와 휴식 지점에 주의를 기울이게 할 수 있지만 특정 등반, 아이템 위치나 적의 행동을 증명하지는 않습니다. Gloom, Caldera와 The Kiln도 같습니다. 메커니즘은 오래된 스크린샷보다 현재 게임과 공식 공지를 우선하세요.',
          ],
          bullets: [
            ['이름 확인', '현재 출처나 게임에 표시된 방식 그대로 바이옴과 루트를 기록합니다.'],
            ['첫 위험 확인', '이동 방식을 가장 먼저 바꾸는 등반, 틈, 시야 문제나 위험을 찾습니다.'],
            ['회복 계획', '좁은 루트에서 선택지가 줄기 전에 휴식 장소와 후퇴 조건을 정합니다.'],
            ['날짜 기록', '모든 지형이나 장비 메모에 빌드 날짜와 게임 버전을 함께 적습니다.'],
          ],
        },
        {
          title: 'PEAK에서 바이옴과 지도는 어떻게 연결되는가',
          paragraphs: [
            '지도, 루트, 바이옴과 스테이지를 서로 다른 층으로 보면 이해하기 쉽습니다. 지도는 이동하는 공간이고, 루트는 경로 또는 순서의 맥락이며, 바이옴은 넓은 지역 이름입니다. 스테이지나 랜드마크는 이보다 작은 단위일 수 있습니다. 이 구분을 지키면 PEAK 바이옴 목록이 고정된 지도 순서를 약속하는 일을 막을 수 있습니다.',
            '일일 출처가 보여 주는 것은 날짜가 있는 바이옴 순서이지 영구적인 월드맵이 아닙니다. 기록은 해당 날짜에 출처가 보고한 내용을 증명할 뿐, 모든 로비나 패치, 미래의 리셋 결과를 증명하지 않습니다. 아래 표도 증거와 사용법을 정리한 것이며 임의로 만든 일대일 지도 배정이 아닙니다.',
          ],
          table: {
            caption: 'PEAK 지도를 읽을 때 분리해서 볼 정보의 층',
            headers: ['층', '알려 줄 수 있는 것', '혼자서는 증명할 수 없는 것'],
            rows: [
              ['바이옴 이름', '출처 항목이나 루트에 붙은 넓은 지역 이름.', '현재 세션의 모든 위험, 아이템 위치와 정확한 지형 형태.'],
              ['지도 또는 루트 항목', '출처가 알린 날짜별 순서나 시각적 환경.', '게임이나 공식 공지가 확인하지 않은 영구적인 일일 일정.'],
              ['게임 세션', '팀이 지금 통과해야 하는 최종 상태.', '다른 로비나 다른 버전에서 내일 보일 내용.'],
              ['패치 공지', '공식 변경의 제목과 게시물에 적힌 세부 내용.', '게시물에 없는 메커니즘이나 비공식 전체 티어표.'],
            ],
          },
        },
        {
          title: '오늘 활성화된 바이옴은 무엇인가?',
          paragraphs: [
            '아래 날짜별 스냅샷은 이 PEAK 바이옴 목록을 매일 바뀌는 검색 의도와 연결합니다. 이 내용은 빌드 시 HTML에 직접 기록됩니다. 카드가 확인 대기 상태라면 오래된 커뮤니티 이미지를 현재 정보로 취급하지 말고 게임에서 루트를 확인하세요.',
            '일일 결과는 시간이 지나면 오래되지만 목록 자체는 계속 유용합니다. 현재 순서를 무엇을 관찰할지 정하는 기준으로 사용하고, 정확한 지형과 위험은 세션에서 확인하세요.',
          ],
        },
        {
          title: '바이옴 상황에 따른 장비와 팀 전략',
          paragraphs: [
            '바이옴 이름은 우선순위를 바꾸는 단서이지 고정된 최강 장비표가 아닙니다. 다음 결정을 보호할 루트 장비를 먼저 정하고, 다음 전진에 필요한 음식이나 스태미나 지원을 남기며, 위험 구간 전에 회복 담당을 정하세요. 아이템의 가치는 밸런스 변경으로 바뀔 수 있으므로 이는 방법이지 영구적인 수치가 아닙니다.',
            '등반 전에 첫 위험, 이를 보조할 자원과 멈출 지점을 적습니다. 그 후 날짜, 바이옴, 루트와 결과를 추가하세요. 이렇게 하면 한 번의 관찰을 보편적인 규칙으로 만들지 않고 유용한 기록을 남길 수 있습니다.',
          ],
          bullets: [
            ['루트 우선', '상상 속 바이옴의 고정관념이 아니라 세션에서 보이는 첫 번째 결정을 기준으로 준비합니다.'],
            ['역할 나누기', '회복 장비나 루트 장비를 누가 들지 정해 압박 속에서도 사용할 수 있게 합니다.'],
            ['여유 남기기', '돌아갈 길이나 다음 안전한 휴식 지점을 알기 전에 자원을 전부 쓰지 않습니다.'],
          ],
        },
      ],
      faq: {
        eyebrow: '빠른 답변',
        title: 'PEAK 바이옴 목록 FAQ',
        items: [
          ['PEAK에는 바이옴이 몇 개 있나요?', '이 가이드는 현재 Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom, Citadel의 9개 바이옴을 추적합니다. 큰 패치 후에는 게임과 공식 업데이트를 다시 확인하세요.'],
          ['PEAK 바이옴은 매일 바뀌나요?', '일일 루트나 바이옴 순서는 지도 로테이션에 따라 바뀔 수 있습니다. 하나의 기록으로 고정 일정을 추측하지 말고 날짜가 있는 출처와 현재 게임을 사용하세요.'],
          ['PEAK 바이옴은 지도와 같은 것인가요?', '아닙니다. 바이옴은 넓은 지역 이름이고 지도나 루트는 출처 또는 세션이 보여 주는 공간이나 순서입니다. 하나의 출처 항목에 여러 바이옴이 들어갈 수 있습니다.'],
          ['활성 바이옴은 어디서 확인할 수 있나요?', '먼저 [[link:map-rotation#today-map|지도 로테이션 가이드]]를 열고 게임에서 루트를 확인하세요. 날짜별 데이터를 검증할 수 없으면 카드는 확인 대기 상태로 남습니다.'],
          ['PEAK가 어떤 게임인지 어디서 배울 수 있나요?', '핵심 플레이 흐름, 지도, 로테이션 용어와 초보자 절차는 [[link:what-is-peak-game|PEAK란 무엇인가]] 가이드에서 확인할 수 있습니다.'],
          ['바이옴마다 가장 좋은 장비는 무엇인가요?', '검증된 아이템 효과와 현재 루트가 없으면 모든 상황에 맞는 답을 제시할 수 없습니다. 첫 위험과 회복 담당, 공식 변경을 확인한 뒤 오래된 추천을 사용하세요.'],
        ],
      },
      source: {
        eyebrow: '출처와 한계',
        title: '이 PEAK 바이옴 목록을 유지하는 방법',
        body: '바이옴 이름은 관리 중인 일일 지도 출처와 PEAK 공식 업데이트 맥락에서 가져옵니다. 지형과 전략 메모는 신중한 계획 참고로 작성했습니다. 정확한 지형, 위험, 아이템 효과와 공식 출처가 설명하지 않은 변경은 현재 게임 세션을 최종 기준으로 삼아야 합니다.',
        links: [['Steam 공식 PEAK 페이지', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Steam 공식 뉴스', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', '오늘의 PEAK 지도 확인'], ['what-is-peak-game', 'PEAK란 무엇인지 읽기'], ['peak-map-rotation-schedule', '로테이션 시간 보기']],
      relatedLabel: '관련 PEAK 가이드',
    },
  },
  it: {
    'peak-biomes-list': {
      meta: {
        title: 'Lista dei biomi di PEAK: mappe e guida al terreno',
        description: 'Lista completa dei biomi di PEAK con mappe, terreno e consigli. Controlla il bioma attivo oggi sulla nostra mappa giornaliera, aggiornata a ogni reset.',
        schema: 'Guida ai biomi di PEAK basata sulle fonti, con nomi, rapporti con le mappe, lettura del terreno, equipaggiamento e registro giornaliero.',
      },
      eyebrow: 'Riferimento biomi - elenco basato sulle fonti',
      h1: 'Lista dei biomi di PEAK',
      intro: 'Questa lista dei biomi di PEAK raccoglie tutti i biomi attualmente mostrati dalle fonti delle mappe mantenute, spiega il loro rapporto con i percorsi e offre in fase di build un accesso alla [[link:map-rotation#today-map|mappa di PEAK di oggi]]. Usa l elenco per imparare i termini e controlla il registro datato prima di una scalata.',
      answerLabel: 'Risposta breve',
      answer: 'La lista dei biomi di PEAK attualmente confermata dalle fonti comprende Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. Un bioma e un etichetta regionale nel contesto del percorso: non equivale automaticamente a una mappa completa, a un numero fisso di fasi o a un ordine quotidiano permanente. Usa la tabella per orientarti e conferma il percorso attivo nel gioco.',
      tocLabel: 'In questa pagina',
      tocFaq: 'FAQ sui biomi',
      heroImage: { alt: 'Schermata di un percorso di PEAK con un arrampicatore che pianifica la strada su un terreno difficile', caption: 'Schermata ufficiale Steam: il contesto del percorso trasforma il nome del bioma in un piano pratico.' },
      sections: [
        {
          title: 'La lista completa dei biomi di PEAK',
          paragraphs: [
            'I nomi seguenti formano l elenco riconosciuto dal raccoglitore della mappa giornaliera e dalla fonte pubblica delle mappe. Le note sul terreno sono indicazioni prudenti: spiegano cosa controllare senza promettere pericoli esatti, tabelle del bottino o layout fissi delle fasi.',
            'Mappa, percorso e bioma sono collegati, ma non sono intercambiabili. Una fonte puo mostrare una sequenza di biomi senza ogni punto di riferimento. Usa il bioma come contesto generale e osserva la sessione attuale prima di spendere resistenza, fermarti o usare uno strumento.',
          ],
          table: {
            caption: 'Biomi di PEAK e note prudenti per leggere il terreno',
            headers: ['Bioma', 'Dove appare', 'Lettura del terreno', 'Approccio alla pianificazione'],
            rows: [
              ['Shore', 'Qualsiasi percorso della fonte che includa Shore', 'Controlla prima gli accessi aperti, i bordi e i cambi di quota invece di dare per fissa la costa.', 'Esplora il primo impegno e tieni unito il gruppo mentre la forma del percorso diventa chiara.'],
              ['Tropics', 'Qualsiasi percorso della fonte che includa Tropics', 'Considera il nome come un contesto insulare caldo e ricco di vegetazione; verifica visibilita, scalate e pericoli nella partita.', 'Dai priorita alla lettura del percorso e al ritmo prima di spendere una risorsa condivisa.'],
              ['Roots', 'Qualsiasi percorso della fonte che includa Roots', 'Cerca elementi organici o coperti di radici, ma non trasformare il nome in una guida completa ai pericoli.', 'Lascia spazio per riposizionarti e annota il passaggio che ha cambiato il piano del gruppo.'],
              ['Alpine', 'Qualsiasi percorso della fonte che includa Alpine', 'Il nome suggerisce un contesto elevato o montuoso; conferma in gioco le scalate esposte e le pause sicure.', 'Proteggi la resistenza e decidi dove sara la prossima pausa affidabile.'],
              ['Mesa', 'Qualsiasi percorso della fonte che includa Mesa', 'Leggi il percorso come un contesto di altopiano o roccia solo dopo aver controllato la geometria attuale e la direzione.', 'Confronta la strada visibile piu breve con quella sicura che permetta di recuperare un errore.'],
              ['Caldera', 'Qualsiasi percorso della fonte che includa Caldera', 'Il nome indica un contesto di bacino vulcanico; calore, lava e comportamento dei pericoli vanno verificati nella versione attuale.', 'Conserva opzioni di recupero prima di entrare in una strada che limita il ritorno.'],
              ['The Kiln', 'Qualsiasi percorso della fonte che includa The Kiln', 'Trattalo come un contesto vulcanico o avanzato, non come la prova di un unico layout fisso.', 'Conferma il prossimo riposo sicuro e non spendere l ultima risorsa del gruppo solo per esplorare.'],
              ['Gloom', 'Qualsiasi percorso della fonte che includa Gloom', 'Aspettati una lettura piu scura o con visibilita ridotta, poi verifica cio che mostra davvero il percorso attuale.', 'Concorda le chiamate visive e una regola chiara per ritirarti.'],
              ['Citadel', 'Qualsiasi percorso della fonte che includa Citadel', 'Leggi Citadel come un contesto strutturato e monumentale; percorso e ostacoli attivi dipendono comunque dalla sessione.', 'Rallenta nelle decisioni importanti e conserva strumenti per l ultimo impegno.'],
            ],
          },
        },
        {
          title: 'Come usare un nome di bioma senza dedurre troppo',
          paragraphs: [
            'Una buona lista dei biomi di PEAK deve aiutare nella prossima decisione, non fingere che un nome riveli ogni oggetto o pericolo. Conferma bioma, data e percorso vicino, separando cio che il gioco ha mostrato da cio che il nome suggerisce soltanto. Cosi le note di campo restano facili da aggiornare.',
            'Alpine puo attirare l attenzione su quota e punti di riposo, ma non dimostra una scalata specifica, la posizione di un oggetto o il comportamento di un nemico. La stessa prudenza vale per Gloom, Caldera e The Kiln. Per le meccaniche, la sessione attuale e le note ufficiali hanno la precedenza su uno screenshot vecchio.',
          ],
          bullets: [
            ['Conferma l etichetta', 'Registra bioma e percorso esattamente come li mostrano la fonte o il gioco attuale.'],
            ['Controlla il primo rischio', 'Cerca la scalata, il varco, il problema di visibilita o il pericolo che cambia prima il movimento.'],
            ['Pianifica il recupero', 'Scegli una pausa e una regola per tornare indietro prima che un percorso stretto tolga opzioni.'],
            ['Data l osservazione', 'Tieni la data del build e la versione del gioco accanto a ogni nota sul terreno o sull equipaggiamento.'],
          ],
        },
        {
          title: 'Come si collegano biomi e mappe in PEAK',
          paragraphs: [
            'Mappa, percorso, bioma e fase funzionano meglio come livelli separati. La mappa e lo spazio navigabile; il percorso e il contesto della strada o della sequenza; il bioma e un etichetta regionale ampia; una fase o un punto di riferimento puo essere piu piccolo dei tre. Questa distinzione impedisce a una lista dei biomi di PEAK di promettere un ordine fisso delle mappe.',
            'La fonte giornaliera espone una sequenza di biomi, non una mappa permanente del mondo. Un record datato dimostra cosa ha segnalato quella fonte in un giorno, non cosa mostrera ogni lobby, patch o reset futuro. La tabella descrive quindi prove e utilizzo, senza inventare assegnazioni individuali tra mappa e bioma.',
          ],
          table: {
            caption: 'Livelli di prova da tenere separati quando si leggono le mappe di PEAK',
            headers: ['Livello', 'Cosa puo indicare', 'Cosa non dimostra da solo'],
            rows: [
              ['Etichetta del bioma', 'Il nome regionale ampio associato a una voce della fonte o a un percorso.', 'Ogni pericolo, posizione dell oggetto o geometria precisa della sessione attuale.'],
              ['Voce della mappa o del percorso', 'La sequenza datata o il contesto visivo riportato da una fonte.', 'Un calendario giornaliero permanente senza conferma del gioco o delle note ufficiali.'],
              ['Sessione di gioco', 'Lo stato finale che il gruppo deve attraversare adesso.', 'Cio che mostrera domani un altra lobby o una versione diversa.'],
              ['Nota della patch', 'Il titolo di una modifica ufficiale e i dettagli dichiarati nella pubblicazione.', 'Una tier list non ufficiale o una meccanica che la pubblicazione non cita.'],
            ],
          },
        },
        {
          title: 'Quale bioma e attivo oggi?',
          paragraphs: [
            'Lo snapshot datato qui sotto collega questa lista dei biomi di PEAK all intento della ricerca quotidiana. Viene scritto nell HTML durante il build. Se la scheda e in attesa, conferma il percorso nel gioco invece di trattare una vecchia immagine della comunita come informazione attuale.',
            'Il risultato giornaliero scade, ma la lista resta utile. Usa la sequenza attuale per decidere cosa osservare e torna alla sessione per controllare geometria e pericoli concreti.',
          ],
        },
        {
          title: 'Equipaggiamento e strategia di squadra per il contesto del bioma',
          paragraphs: [
            'Il nome del bioma dovrebbe cambiare le priorita, non imporre una classifica rigida. Parti dalla risorsa di percorso che protegge la prossima decisione, conserva cibo o supporto alla resistenza per la spinta successiva e assegna il recupero prima del tratto rischioso. Il valore di un oggetto puo cambiare con il bilanciamento; questo e un metodo, non una statistica permanente.',
            'Prima di salire, scrivi il primo rischio, la risorsa che lo sostiene e il punto di arresto. Dopo aggiungi data, bioma, percorso e risultato. Cosi crei un record utile senza trasformare una singola osservazione in una regola universale.',
          ],
          bullets: [
            ['Prima il percorso', 'Preparati per il primo impegno visibile nella sessione, non per uno stereotipo immaginario del bioma.'],
            ['Condividi i ruoli', 'Stabilisci chi porta recupero o risorse di percorso, cosi l oggetto resta disponibile sotto pressione.'],
            ['Conserva margine', 'Non spendere tutte le risorse prima di conoscere la via di ritorno o il prossimo riposo sicuro.'],
          ],
        },
      ],
      faq: {
        eyebrow: 'Risposte rapide',
        title: 'FAQ della lista dei biomi di PEAK',
        items: [
          ['Quanti biomi ci sono in PEAK?', 'Questa guida segue attualmente nove biomi con nome: Shore, Tropics, Roots, Alpine, Mesa, Caldera, The Kiln, Gloom e Citadel. Ricontrolla il gioco e gli aggiornamenti ufficiali dopo le patch importanti.'],
          ['I biomi di PEAK cambiano ogni giorno?', 'Il percorso giornaliero o la sequenza dei biomi puo cambiare con la rotazione della mappa. Usa la fonte datata e il gioco attuale invece di dedurre un calendario fisso da un solo record.'],
          ['I biomi di PEAK sono uguali alle mappe?', 'No. Un bioma e un etichetta regionale ampia, mentre una mappa o un percorso e lo spazio o la sequenza mostrata dalla fonte o dalla sessione. Una voce puo contenere piu biomi.'],
          ['Dove posso controllare il bioma attivo?', 'Apri prima la [[link:map-rotation#today-map|guida alla rotazione delle mappe]], poi conferma il percorso nel gioco. La scheda resta in attesa quando i dati datati non sono verificabili.'],
          ['Dove posso capire che cos e PEAK?', 'Inizia dalla nostra guida [[link:what-is-peak-game|che cos e PEAK]] per il ciclo principale, le mappe, il vocabolario della rotazione e i passaggi per principianti.'],
          ['Qual e il miglior equipaggiamento per ogni bioma?', 'Senza effetti degli oggetti verificati e un percorso attuale non esiste una risposta universale responsabile. Controlla il primo rischio, assegna il recupero e verifica i cambiamenti ufficiali prima di seguire un vecchio consiglio.'],
        ],
      },
      source: {
        eyebrow: 'Fonti e limiti',
        title: 'Come viene mantenuta questa lista dei biomi di PEAK',
        body: 'I nomi dei biomi provengono dalla fonte delle mappe giornaliere mantenuta e dal contesto degli aggiornamenti ufficiali di PEAK. Le note sul terreno e sulla strategia sono formulate come indicazioni prudenti. Per geometria precisa, pericoli, effetti degli oggetti e modifiche non descritte da una fonte ufficiale, la sessione di gioco attuale resta il riferimento finale.',
        links: [['Pagina ufficiale di PEAK su Steam', 'https://store.steampowered.com/app/3527290/PEAK/'], ['Notizie ufficiali di Steam', 'https://store.steampowered.com/news/app/3527290']],
      },
      related: [['map-rotation', 'Controlla la mappa di PEAK di oggi'], ['what-is-peak-game', 'Scopri che cos e PEAK'], ['peak-map-rotation-schedule', 'Vedi gli orari della rotazione']],
      relatedLabel: 'Guide PEAK correlate',
    },
  },
};

for (const [locale, translation] of Object.entries(peakGameUpdateTranslations)) {
  articleLocaleTranslations[locale]['peak-game-update'] = translation;
}

for (const [locale, translation] of Object.entries(whatIsPeakTranslations)) {
  articleLocaleTranslations[locale]['what-is-peak-game'] = translation;
}
