// Summaries checked against the full official Steam announcements on 2026-11-03.
export const officialUpdateFacts = {
  en: {
    patch: 'Fixes room codes used to join games in other regions.',
    crossplay: 'Crossplay is live for Steam, PS5, Xbox Series X|S and Nintendo Switch 2 via room codes. Progress does not transfer between platforms. The update adds 208 maps.',
  },
  zh: {
    patch: '修复使用房间码加入其他地区游戏的问题。',
    crossplay: 'Steam、PS5、Xbox Series X|S 与 Nintendo Switch 2 已支持通过房间码跨平台联机；进度不能跨平台转移。本次更新新增 208 张地图。',
  },
  es: {
    patch: 'Corrige los códigos de sala para unirse a partidas de otras regiones.',
    crossplay: 'El juego cruzado ya está disponible entre Steam, PS5, Xbox Series X|S y Nintendo Switch 2 mediante códigos de sala. El progreso no se transfiere entre plataformas. La actualización añade 208 mapas.',
  },
  ja: {
    patch: '他の地域のゲームに参加する際のルームコードの問題を修正。',
    crossplay: 'Steam、PS5、Xbox Series X|S、Nintendo Switch 2 間でルームコードによるクロスプレイが利用可能です。進行状況はプラットフォーム間で引き継げません。208 種類のマップが追加されました。',
  },
  ko: {
    patch: '다른 지역의 게임에 참가할 때 사용하는 방 코드 문제를 수정했습니다.',
    crossplay: 'Steam, PS5, Xbox Series X|S, Nintendo Switch 2에서 방 코드로 크로스플레이를 이용할 수 있습니다. 진행 상황은 플랫폼 간에 이전되지 않습니다. 이번 업데이트로 맵 208개가 추가되었습니다.',
  },
  de: {
    patch: 'Behebt Raumcodes beim Beitritt zu Spielen in anderen Regionen.',
    crossplay: 'Crossplay zwischen Steam, PS5, Xbox Series X|S und Nintendo Switch 2 ist über Raumcodes verfügbar. Fortschritt wird nicht zwischen Plattformen übertragen. Das Update fügt 208 Karten hinzu.',
  },
  fr: {
    patch: 'Corrige les codes de salle pour rejoindre des parties dans d’autres régions.',
    crossplay: 'Le crossplay est disponible entre Steam, PS5, Xbox Series X|S et Nintendo Switch 2 via les codes de salle. La progression ne se transfère pas entre plateformes. La mise à jour ajoute 208 cartes.',
  },
  pt: {
    patch: 'Corrige os códigos de sala para entrar em partidas de outras regiões.',
    crossplay: 'O crossplay está disponível entre Steam, PS5, Xbox Series X|S e Nintendo Switch 2 por códigos de sala. O progresso não é transferido entre plataformas. A atualização adiciona 208 mapas.',
  },
  it: {
    patch: 'Corregge i codici stanza per unirsi a partite in altre regioni.',
    crossplay: 'Il crossplay è disponibile tra Steam, PS5, Xbox Series X|S e Nintendo Switch 2 tramite codici stanza. I progressi non si trasferiscono tra piattaforme. L’aggiornamento aggiunge 208 mappe.',
  },
};

export function checkedUpdateSummary(locale, title) {
  const copy = officialUpdateFacts[locale] ?? officialUpdateFacts.en;
  if (title === 'Patch Notes 3.0.1') return copy.patch;
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
