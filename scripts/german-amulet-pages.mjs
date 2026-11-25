const steamNewsUrl = 'https://steamcommunity.com/app/3527290/announcements/';
const steamStoreUrl = 'https://store.steampowered.com/app/3527290/PEAK/';

export const germanAmuletPages = {
  'grossmut-des-pfadfinders': {
    slug: 'grossmut-des-pfadfinders',
    meta: {
      title: 'PEAK Großmut des Pfadfinders: Effekt, Fundort & Versteinerung',
      description: 'Großmut des Pfadfinders in PEAK: Amulett-Effekt (Objekt kopieren + Versteinerung), Unterschied zu Abzeichen, blau leuchtende Statue und heutige Route.',
      schema: 'Deutsche Referenz zum PEAK-Amulett Großmut des Pfadfinders: Effekt, Versteinerung, Amulett-Statue und heutige Biom-Rotation.',
    },
    eyebrow: 'PEAK Amulett-Guide · heutige Route inklusive',
    h1: 'Großmut des Pfadfinders (PEAK Amulett): Effekt & Fundort',
    intro: 'Großmut des Pfadfinders ist ein seltenes Amulett in PEAK – kein Steam-Abzeichen. Es kopiert ein markiertes Objekt und belegt dich im Gegenzug mit Versteinerung. Unten findest du den schnellen Steckbrief, Koop-Tipps und die datierte heutige Biom-Rotation zur Orientierung an der blau leuchtenden Statue.',
    answerLabel: 'Schnelle Antwort',
    answer: 'Großmut des Pfadfinders ist ein Amulett (kein Abzeichen): Es klont ein markiertes Objekt und wendet danach Versteinerung an. Ob und in welchem Biom die blau leuchtende Statue heute bestätigt ist, hängt von der täglichen Kartenrotation ab – prüfe zuerst die heutige Route unten und bestätige den Fundort im Spiel.',
    heroImage: { src: '/media/items/scout-effigy.webp', alt: 'PEAK Pfadfinder-Relikt als Bildkontext für das Amulett Großmut des Pfadfinders', caption: 'Bildkontext aus dem PEAK-Itemkatalog; prüfe die aktive Amulett-Statue direkt im heutigen Lauf.' },
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Großmut des Pfadfinders FAQ',
    sections: [
      {
        id: 'steckbrief',
        title: 'Steckbrief: Effekt, Versteinerung & Einordnung',
        paragraphs: [
          'Viele Spieler suchen nach „Großmut des Pfadfinders“ im Zusammenhang mit Abzeichen oder Errungenschaften. Tatsächlich handelt es sich um ein Amulett aus der Spielwelt, nicht um ein Steam-Abzeichen. Eine klare Trennung spart Zeit beim Nachschlagen.',
          'Der dokumentierte Kerneffekt ist klar zweigeteilt: Du markierst ein Zielobjekt zum Kopieren und zahlst dafür mit Versteinerung. Exakte Prozentwerte oder Reichweiten können sich zwischen Updates ändern und werden hier erst ergänzt, wenn eine aktuelle offizielle Quelle sie festschreibt.',
        ],
        table: {
          caption: 'Kurzübersicht: Großmut des Pfadfinders in PEAK',
          headers: ['Merkmal', 'Bestätigter Stand', 'Hinweis für den Lauf'],
          rows: [
            ['Kategorie', 'Amulett (Ausrüstung / Fundstück)', 'Kein freischaltbares Steam-Abzeichen.'],
            ['Haupteffekt', 'Kopiert ein markiertes Objekt', 'Besonders stark für knappe Kletter- oder Heil-Items im Koop.'],
            ['Nebenwirkung', 'Wendet Versteinerung an', 'Vor dem Auslösen Team-Sicherung und Position absprechen.'],
            ['Fund-Mechanik', 'Statue mit blauem Leuchten', 'Tagesabhängig über die tägliche Kartenrotation; im Spiel prüfen.'],
          ],
        },
      },
      {
        id: 'heutige-karte',
        title: 'Heutige PEAK-Route für die Amulett-Suche',
        kind: 'today-map',
        paragraphs: [
          'Da die Biome täglich um 17:00 UTC rotieren, lohnt sich vor der Suche nach der blau leuchtenden Statue zuerst ein Blick auf die heutige Biom-Reihenfolge. Liegt kein verlässlicher Tagesbeleg für das einzelne Amulett vor, bleibt der exakte Statuen-Standort ehrlich als „Heute nicht bestätigt“ markiert.',
        ],
        afterTable: 'Alle Biom-Details, die lokale Reset-Zeit und die Versionshistorie findest du zusätzlich auf der [[link:map-rotation|heutigen PEAK-Karte]].',
      },
      {
        id: 'koop-tipps',
        title: 'Wann sich das Kopieren im Koop wirklich lohnt',
        paragraphs: [
          'Weil jede Nutzung Versteinerung auslöst, solltest du Großmut des Pfadfinders nicht reflexartig auf gewöhnlichen Kleinkram anwenden. Entscheide im Team zuerst, welches einzelne Objekt euren nächsten Engpass löst – etwa ein wichtiges Kletterwerkzeug oder ein starkes Verbrauchsitem aus dem [[link:items|PEAK-Itemkatalog]].',
        ],
        bullets: [
          ['Sicheren Standplatz wählen:', 'Aktiviere das Amulett nicht an exponierten Kanten, solange die Versteinerung dich einschränkt.'],
          ['Zielobjekt absprechen:', 'Vergleiche wichtige Heil- und Klettergegenstände vorher im [[link:item-compare|PEAK-Itemvergleich]].'],
          ['Zweites Amulett kennen:', 'Wenn dein Team statt Objekt-Kopie eher Notfall-Heilung sucht, sieh dir auch [[link:beharrlichkeit-des-pfadfinders|Beharrlichkeit des Pfadfinders]] an.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Häufige Fragen',
      title: 'Großmut des Pfadfinders FAQ',
      items: [
        ['Ist Großmut des Pfadfinders ein Abzeichen in PEAK?', 'Nein. Es ist ein Amulett, das du im Lauf an einer blau leuchtenden Statue findest – kein Steam-Abzeichen und keine Errungenschaft.'],
        ['Was bewirkt Großmut des Pfadfinders in PEAK?', 'Das Amulett kopiert ein markiertes Objekt und wendet danach Versteinerung an. Genauere Zahlenwerte solltest du nach Patches in deiner aktuellen Spielversion prüfen.'],
        ['Wo finde ich Großmut des Pfadfinders heute?', 'Prüfe zuerst die heutige Biom-Reihenfolge oben oder auf der [[link:map-rotation|heutigen PEAK-Karte]]. Suche im passenden Biom nach einer blau leuchtenden Statue; unbestätigte Tages-Fundorte werden bewusst nicht geraten.'],
        ['Was ist der Unterschied zu Beharrlichkeit des Pfadfinders?', 'Großmut des Pfadfinders kopiert ein markiertes Objekt, während [[link:beharrlichkeit-des-pfadfinders|Beharrlichkeit des Pfadfinders]] heilt und kurzzeitig Unverwundbarkeit gewährt. Beide lösen danach Versteinerung aus.'],
      ],
    },
    source: {
      eyebrow: 'Quellen & Grenzen',
      title: 'Offizielle Prüfung & Spielstand',
      body: 'Patch- und Plattformangaben werden mit den offiziellen Steam-Ankündigungen abgeglichen. Die tägliche Route stammt aus der Community-Rotation und ersetzt bei unbestätigten Amulett-Positionen nicht die Prüfung im laufenden Spiel.',
      links: [['Steam-Ankündigungen', steamNewsUrl], ['PEAK auf Steam', steamStoreUrl]],
    },
    related: [
      ['beharrlichkeit-des-pfadfinders', 'Beharrlichkeit des Pfadfinders (PEAK Amulett)'],
      ['map-rotation', 'Heutige PEAK-Karte & Reset-Zeit'],
      ['items', 'Alle 134 PEAK-Items ansehen'],
      ['item-compare', 'PEAK-Items direkt vergleichen'],
    ],
    relatedLabel: 'Verwandte PEAK-Guides',
  },
  'beharrlichkeit-des-pfadfinders': {
    slug: 'beharrlichkeit-des-pfadfinders',
    meta: {
      title: 'PEAK Beharrlichkeit des Pfadfinders: Effekt, Heilung & Fundort',
      description: 'Beharrlichkeit des Pfadfinders in PEAK erklärt: Heilung & kurze Unverwundbarkeit mit Versteinerung, blau leuchtende Amulett-Statue und heutige Biom-Rotation.',
      schema: 'Deutsche Referenz zum PEAK-Amulett Beharrlichkeit des Pfadfinders: Heilung, Unverwundbarkeit, Versteinerung und heutige Biom-Rotation.',
    },
    eyebrow: 'PEAK Amulett-Guide · heutige Route inklusive',
    h1: 'Beharrlichkeit des Pfadfinders (PEAK Amulett): Effekt & Fundort',
    intro: 'Beharrlichkeit des Pfadfinders ist ein defensives Amulett in PEAK – kein Steam-Abzeichen. Es heilt und gewährt kurzzeitig Unverwundbarkeit, fordert danach jedoch Versteinerung. Unten stehen der kompakte Überblick, Team-Hinweise und die heutige Biom-Rotation für die Suche nach der blau leuchtenden Statue.',
    answerLabel: 'Schnelle Antwort',
    answer: 'Beharrlichkeit des Pfadfinders ist ein Amulett (kein Abzeichen): Es heilt, verleiht kurzzeitig Unverwundbarkeit und löst anschließend Versteinerung aus. Prüfe die heutige Biom-Route unten und halte im Spiel Ausschau nach einer blau leuchtenden Amulett-Statue; unbestätigte Tages-Standorte bleiben offen.',
    heroImage: { src: '/media/items/scout-effigy.webp', alt: 'PEAK Pfadfinder-Relikt als Bildkontext für das Amulett Beharrlichkeit des Pfadfinders', caption: 'Bildkontext aus dem PEAK-Itemkatalog; prüfe die aktive Amulett-Statue direkt im heutigen Lauf.' },
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Beharrlichkeit des Pfadfinders FAQ',
    sections: [
      {
        id: 'steckbrief',
        title: 'Steckbrief: Heilung, Unverwundbarkeit & Versteinerung',
        paragraphs: [
          'Ähnlich wie Großmut des Pfadfinders wird „Beharrlichkeit des Pfadfinders“ häufig mit Abzeichen verwechselt. Es handelt sich jedoch um ein Amulett für akute Gefahrensituationen im Aufstieg, nicht um eine Steam-Errungenschaft.',
          'Der Effekt kombiniert Heilung mit einer kurzen Phase der Unverwundbarkeit und zieht danach Versteinerung nach sich. Unbelegte Dauer- oder Maximalwerte werden nicht erfunden, da sie sich mit Patches ändern können.',
        ],
        table: {
          caption: 'Kurzübersicht: Beharrlichkeit des Pfadfinders in PEAK',
          headers: ['Merkmal', 'Bestätigter Stand', 'Hinweis für den Lauf'],
          rows: [
            ['Kategorie', 'Amulett (defensives Fundstück)', 'Kein Steam-Abzeichen und keine Erfolgsbedingung.'],
            ['Haupteffekt', 'Heilung + kurze Unverwundbarkeit', 'Ideal als Notfall-Rettung bei kritischen Passagen.'],
            ['Nebenwirkung', 'Anschließende Versteinerung', 'Timing so wählen, dass du nach der Schutzphase sicher stehst.'],
            ['Fund-Mechanik', 'Statue mit blauem Leuchten', 'Tagesabhängig über die tägliche Kartenrotation; im Spiel prüfen.'],
          ],
        },
      },
      {
        id: 'heutige-karte',
        title: 'Heutige PEAK-Route für die Statuen-Prüfung',
        kind: 'today-map',
        paragraphs: [
          'Vor der Suche nach der blau leuchtenden Statue lohnt sich der Blick auf die aktuelle tägliche Biom-Reihenfolge (Reset täglich um 17:00 UTC). Ohne bestätigten Einzelbeleg für die Statue bleibt der genaue Fundort bewusst als „Heute nicht bestätigt“ markiert.',
        ],
        afterTable: 'Den vollständigen Reset-Countdown in Ortszeit und die letzten Rotationen findest du auf der [[link:map-rotation|heutigen PEAK-Karte]].',
      },
      {
        id: 'einsatz-tipps',
        title: 'Beharrlichkeit im Koop sicher einsetzen',
        paragraphs: [
          'Der stärkste Moment für Beharrlichkeit des Pfadfinders ist ein drohender Absturz oder akuter Statuseffekt-Notfall, bei dem reguläre Heilung zu langsam wäre. Plane schon vor der Aktivierung ein, wo du stehst, sobald die Unverwundbarkeit endet und die Versteinerung einsetzt.',
        ],
        bullets: [
          ['Nicht im leeren Sprung auslösen:', 'Nutze das Zeitfenster der Unverwundbarkeit, um auf eine sichere Plattform zu kommen.'],
          ['Mit regulären Heil-Items abstimmen:', 'Im [[link:item-compare|PEAK-Itemvergleich]] siehst du, welche Nahrung und Medizin du vorab ohne Versteinerung nutzen kannst.'],
          ['Schwester-Amulett vergleichen:', 'Für das Klonen seltener Ausrüstung sieh dir [[link:grossmut-des-pfadfinders|Großmut des Pfadfinders]] an.'],
        ],
      },
    ],
    faq: {
      eyebrow: 'Häufige Fragen',
      title: 'Beharrlichkeit des Pfadfinders FAQ',
      items: [
        ['Ist Beharrlichkeit des Pfadfinders ein Abzeichen?', 'Nein. Es ist ein Amulett aus dem laufenden Spiel und gehört nicht zur Liste der Steam-Abzeichen.'],
        ['Was macht Beharrlichkeit des Pfadfinders in PEAK?', 'Es heilt, gewährt kurzzeitig Unverwundbarkeit und wendet anschließend Versteinerung an. Exakte Werte solltest du in deiner aktuellen Spielversion prüfen.'],
        ['Wo finde ich Beharrlichkeit des Pfadfinders heute?', 'Prüfe die heutige Biom-Reihenfolge oben oder auf der [[link:map-rotation|heutigen PEAK-Karte]] und suche im passenden Biom nach einer blau leuchtenden Statue.'],
        ['Beharrlichkeit oder Großmut des Pfadfinders – welches passt besser?', 'Beharrlichkeit des Pfadfinders hilft beim Überleben durch Heilung und Unverwundbarkeit; [[link:grossmut-des-pfadfinders|Großmut des Pfadfinders]] kopiert ein markiertes Objekt.'],
      ],
    },
    source: {
      eyebrow: 'Quellen & Grenzen',
      title: 'Offizielle Prüfung & Spielstand',
      body: 'Patch- und Plattformangaben werden mit den offiziellen Steam-Ankündigungen abgeglichen. Die tägliche Route stammt aus der Community-Rotation und ersetzt bei unbestätigten Amulett-Positionen nicht die Prüfung im laufenden Spiel.',
      links: [['Steam-Ankündigungen', steamNewsUrl], ['PEAK auf Steam', steamStoreUrl]],
    },
    related: [
      ['grossmut-des-pfadfinders', 'Großmut des Pfadfinders (PEAK Amulett)'],
      ['map-rotation', 'Heutige PEAK-Karte & Reset-Zeit'],
      ['items', 'Alle 134 PEAK-Items ansehen'],
      ['item-compare', 'PEAK-Items direkt vergleichen'],
    ],
    relatedLabel: 'Verwandte PEAK-Guides',
  },
};
