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

const extraOfficialSummaries = {
  en: {
    patch301: 'Follow-up hotfix after the Crossplay launch addressing stability and multiplayer connection fixes.',
    patch26b: 'Fixed late-join bugs in Gloom and Citadel, including a Medieval History badge unlock issue after reviving mid-run.',
    patch26a: 'Replaced the daily map pool with properly randomized islands and fixed campfire saves and host achievement tracking.',
    patch25a: 'Fixed reconnecting players spawning dead, Citadel campfire saves blocking Medieval History, and cross-region loading hangs.',
    patch24c: 'Amulets can no longer be cooked; fixed Bookworm badge progress resets, disappearing scrolls, and long-run lag.',
    hotfix24b: 'Fixed Render Scales below Native and Steam Avatar alignment in the pause menu.',
    patch204a: 'Re-added Caldera and The Kiln to rotation, added room codes for upcoming crossplay, and updated Rescue Claw and bounce mushrooms.',
    patch203a: 'Added a new batch of Gloom and Citadel maps to the daily map rotation.',
    patch202a: 'Reduced Jester Achievement Clown Luggages from 3 to 2, reverted rope grab stamina nerf, and adjusted Frog and Glider behavior.',
    patch201a: 'Added a global Frog grab cooldown, adjusted Infinite Stamina regeneration, and restored Portable Stove duration to 60 seconds.',
    crossplaySoon: 'Official pre-launch announcement confirming crossplay across Steam, PS5, Xbox Series X|S, and Nintendo Switch 2.',
    merchSale: 'Official community announcement for the PEAK merchandise sale; no gameplay or map rotation changes.',
  },
  zh: {
    patch301: '跨平台联机上线后的首个热修复，聚焦多人联机稳定性与常规问题修复。',
    patch26b: '修复中途加入对局的异常，以及在 Gloom 或 Citadel 复活后无法解锁 Medieval History 徽章的问题。',
    patch26a: '用正确随机化的岛屿替换每日地图池，并修复营火存档与房主成就进度记录问题。',
    patch25a: '修复重连后错误死亡、Citadel 营火读档影响 Medieval History 徽章及跨区卡 Loading 问题。',
    patch24c: '护符不再可烹饪；修复 Bookworm 徽章进度重置、卷轴消失及长局卡顿问题。',
    hotfix24b: '修复低于 Native 时 Render Scales 显示异常以及暂停菜单 Steam 头像错位问题。',
    patch204a: 'Caldera 与 The Kiln 回归轮换，新增大厅房间码，并调整 Rescue Claw 与弹跳蘑菇机制。',
    patch203a: '向每日轮换新增一批包含 Gloom 与 Citadel 的地图组合。',
    patch202a: 'Jester 成就所需 Clown Luggage 从 3 降至 2，回滚绳索抓取体力改动，并调整青蛙与滑翔伞机制。',
    patch201a: '为青蛙抓取增加全局冷却，调整无限体力机制，并将 Portable Stove 持续时间恢复为 60 秒。',
    crossplaySoon: '官方预热公告，确认即将推出 Steam、PS5、Xbox Series X|S 与 Switch 2 跨平台联机。',
    merchSale: '官方周边促销公告，不包含地图轮换或玩法平衡改动。',
  },
};

export function checkedUpdateSummary(locale, title) {
  const copy = officialUpdateFacts[locale] ?? officialUpdateFacts.en;
  const extra = extraOfficialSummaries[locale] ?? extraOfficialSummaries.en;
  const normalized = String(title ?? '').trim();
  if (/patch\s*(?:notes\s*)?3\.1\.0/i.test(normalized)) return copy.patch;
  if (/^patch notes 3\.0\.1$/i.test(normalized)) return extra.patch301;
  if (normalized === 'CROSSPLAY HAS ARRIVED TO PEAK') return copy.crossplay;
  if (/^patch notes 2\.6\.b$/i.test(normalized)) return extra.patch26b;
  if (/^patch notes 2\.6\.a$/i.test(normalized)) return extra.patch26a;
  if (/^patch 2\.5\.a$/i.test(normalized)) return extra.patch25a;
  if (/^patch 2\.4\.c/i.test(normalized)) return extra.patch24c;
  if (/^hotfix 2\.4\.b$/i.test(normalized)) return extra.hotfix24b;
  if (/^patch 2\.04\.a/i.test(normalized)) return extra.patch204a;
  if (/^patch notes 2\.03\.a$/i.test(normalized)) return extra.patch203a;
  if (/^patch 2\.02\.a$/i.test(normalized)) return extra.patch202a;
  if (/^patch 2\.01\.a/i.test(normalized)) return extra.patch201a;
  if (/crossplay is coming to peak/i.test(normalized)) return extra.crossplaySoon;
  if (/^peak merch sale$/i.test(normalized)) return extra.merchSale;
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
