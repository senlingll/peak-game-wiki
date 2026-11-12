// Summaries checked against the official Steam announcements available on 2026-11-12.
export const officialUpdateFacts = {
  en: {
    patch: 'Patch 3.1.0 lengthens room codes, changes controller sprint and climbing to hold input, and adds anti-harassment changes.',
    crossplay: 'Crossplay is live for Steam, PS5, Xbox Series X|S and Nintendo Switch 2 via room codes. Progress does not transfer between platforms. The update adds 208 maps.',
  },
  zh: {
    patch: 'Patch 3.1.0 加长房间码，手柄冲刺和攀爬改为按住操作，并加入防骚扰改动。',
    crossplay: 'Steam、PS5、Xbox Series X|S 与 Nintendo Switch 2 已支持通过房间码跨平台联机；进度不能跨平台转移。本次更新新增 208 张地图。',
  },
  es: {
    patch: 'El Patch 3.1.0 alarga los códigos de sala, cambia sprint y escalada con mando a mantener pulsado y añade medidas contra el acoso.',
    crossplay: 'El juego cruzado ya está disponible entre Steam, PS5, Xbox Series X|S y Nintendo Switch 2 mediante códigos de sala. El progreso no se transfiere entre plataformas. La actualización añade 208 mapas.',
  },
  ja: {
    patch: 'Patch 3.1.0 でルームコードが長くなり、コントローラーのダッシュと登攀が長押しになり、嫌がらせ対策が追加されました。',
    crossplay: 'Steam、PS5、Xbox Series X|S、Nintendo Switch 2 間でルームコードによるクロスプレイが利用可能です。進行状況はプラットフォーム間で引き継げません。208 種類のマップが追加されました。',
  },
  ko: {
    patch: 'Patch 3.1.0에서 방 코드가 길어지고 컨트롤러 달리기·등반이 누르고 유지하는 방식으로 바뀌었으며 괴롭힘 방지 변경이 추가되었습니다.',
    crossplay: 'Steam, PS5, Xbox Series X|S, Nintendo Switch 2에서 방 코드로 크로스플레이를 이용할 수 있습니다. 진행 상황은 플랫폼 간에 이전되지 않습니다. 이번 업데이트로 맵 208개가 추가되었습니다.',
  },
  de: {
    patch: 'Patch 3.1.0 verlängert Raumcodes, stellt Sprinten und Klettern mit dem Controller auf Gedrückthalten um und ergänzt Maßnahmen gegen Belästigung.',
    crossplay: 'Crossplay zwischen Steam, PS5, Xbox Series X|S und Nintendo Switch 2 ist über Raumcodes verfügbar. Fortschritt wird nicht zwischen Plattformen übertragen. Das Update fügt 208 Karten hinzu.',
  },
  fr: {
    patch: 'Le Patch 3.1.0 allonge les codes de salle, passe le sprint et l’escalade à la manette en maintien et ajoute des mesures anti-harcèlement.',
    crossplay: 'Le crossplay est disponible entre Steam, PS5, Xbox Series X|S et Nintendo Switch 2 via les codes de salle. La progression ne se transfère pas entre plateformes. La mise à jour ajoute 208 cartes.',
  },
  pt: {
    patch: 'O Patch 3.1.0 alonga os códigos de sala, muda corrida e escalada no controle para manter pressionado e adiciona medidas contra assédio.',
    crossplay: 'O crossplay está disponível entre Steam, PS5, Xbox Series X|S e Nintendo Switch 2 por códigos de sala. O progresso não é transferido entre plataformas. A atualização adiciona 208 mapas.',
  },
  it: {
    patch: 'La Patch 3.1.0 allunga i codici stanza, cambia corsa e arrampicata col controller in input tenuto premuto e aggiunge misure anti-molestie.',
    crossplay: 'Il crossplay è disponibile tra Steam, PS5, Xbox Series X|S e Nintendo Switch 2 tramite codici stanza. I progressi non si trasferiscono tra piattaforme. L’aggiornamento aggiunge 208 mappe.',
  },
};

export function checkedUpdateSummary(locale, title) {
  const copy = officialUpdateFacts[locale] ?? officialUpdateFacts.en;
  if (title === 'Patch Notes 3.1.0' || title === 'Patch Notes 3.0.1') return copy.patch;
  if (title === 'CROSSPLAY HAS ARRIVED TO PEAK') return copy.crossplay;
  return null;
}

export function officialEntries(data, buildDate = '9999-12-31') {
  return (Array.isArray(data?.entries) ? data.entries : [])
    .filter((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry?.date) && entry.date <= buildDate && entry?.title)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function latestOfficialPatch(data, buildDate) {
  return officialEntries(data, buildDate).find((entry) => /(?:patch|hotfix).*\d/i.test(entry.title));
}
