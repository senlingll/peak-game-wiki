const steamNewsUrl = 'https://steamcommunity.com/app/3527290/announcements/';

export const germanAmuletPages = {
  'grossmut-des-pfadfinders': {
    slug: 'grossmut-des-pfadfinders',
    meta: {
      title: "Großmut des Pfadfinders – Scout's Generosity | PEAK",
      description: 'Großmut des Pfadfinders ist ein Amulett in PEAK: Effekt, heutiges Biom und die Prüfung an der blau leuchtenden Statue.',
      schema: 'Deutsche Kurzreferenz zum PEAK-Amulett Großmut des Pfadfinders mit aktuellem Biom-Hinweis und Quellenlink.',
    },
    eyebrow: 'Amulett-Suche · heute prüfen',
    h1: 'Großmut des Pfadfinders',
    intro: 'Das ist ein Amulett, kein Abzeichen. Großmut des Pfadfinders kopiert ein markiertes Objekt und wendet Versteinerung an. Wo es heute erscheint, steht in der täglichen Kartenprüfung; suche dort nach einer Statue mit blauem Leuchten.',
    answerLabel: 'Schnelle Antwort',
    answer: 'Heute: Biom und Statue bitte im Tagesdatensatz prüfen. Wenn kein verlässlicher Fundort vorliegt, bleibt die Angabe „Heute nicht bestätigt“. Der Effekt ist die Kopie eines markierten Objekts mit anschließender Versteinerung.',
    heroImage: { src: '/media/items/scout-effigy.webp', alt: 'Scout-Effigy als Bildkontext für ein PEAK-Amulett', caption: 'Gegenstandsbild als Kontext; den heutigen Fundort im Spiel prüfen.' },
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Amulett-FAQ',
    sections: [
      { id: 'amulet-or-badge', title: 'Amulett oder Abzeichen?', paragraphs: ['Großmut des Pfadfinders ist ein Amulett. Es gehört daher zur Ausrüstung und nicht zu einer Liste freischaltbarer Steam-Abzeichen. Die Begriffe sollten beim Suchen getrennt bleiben.'] },
      { id: 'effect', title: 'Effekt', paragraphs: ['Der beschriebene Effekt kopiert ein markiertes Objekt und wendet Versteinerung an. Zeitwerte, Reichweite und genaue Interaktion werden hier nicht ergänzt, solange die aktuelle Quelle sie nicht eindeutig nennt.'] },
      { id: 'today', title: 'Heutiges Biom finden', paragraphs: ['Öffne zuerst die [[link:map-rotation|heutige PEAK-Karte]]. Wenn das Amulett für das aktuelle Biom nicht bestätigt ist, steht hier „Heute nicht bestätigt“. Suche im passenden Biom nach einer Statue mit blauem Leuchten und vergleiche den Fund anschließend im Spiel.'] },
    ],
    faq: { eyebrow: 'Schnelle Antworten', title: 'Großmut des Pfadfinders FAQ', items: [['Ist Großmut des Pfadfinders ein Abzeichen?', 'Nein. Es ist ein Amulett.'], ['Wo ist es heute?', 'Nutze die [[link:map-rotation|heutige Karte]]; ohne bestätigten Datensatz bleibt der Fundort „Heute nicht bestätigt“.'], ['Was bewirkt es?', 'Es kopiert ein markiertes Objekt und wendet Versteinerung an.']] },
    source: { eyebrow: 'Quelle', title: 'Aktuelle Prüfung', body: 'Patch- und Plattformhinweise werden gegen die offiziellen Steam-Ankündigungen geprüft. Der tägliche Fundort bleibt eine zeitabhängige Angabe und sollte im Spiel bestätigt werden.', links: [['Steam-Ankündigungen', steamNewsUrl]] },
    related: [['map-rotation', 'Heutige Karte öffnen'], ['room-codes', 'Raumcodes und Crossplay prüfen']], relatedLabel: 'Verwandte PEAK-Hilfen',
  },
  'beharrlichkeit-des-pfadfinders': {
    slug: 'beharrlichkeit-des-pfadfinders',
    meta: {
      title: 'Beharrlichkeit des Pfadfinders – Scout\'s Tenacity | PEAK',
      description: 'Beharrlichkeit des Pfadfinders ist ein PEAK-Amulett: Effekt, heutiges Biom und Prüfung an der blau leuchtenden Statue.',
      schema: 'Deutsche Kurzreferenz zum PEAK-Amulett Beharrlichkeit des Pfadfinders mit aktuellem Biom-Hinweis und Quellenlink.',
    },
    eyebrow: 'Amulett-Suche · heute prüfen',
    h1: 'Beharrlichkeit des Pfadfinders',
    intro: 'Das ist ein Amulett, kein Abzeichen. Beharrlichkeit des Pfadfinders heilt und gewährt kurzzeitig Unverwundbarkeit, danach folgt Versteinerung. Suche im bestätigten heutigen Biom nach einer Statue mit blauem Leuchten.',
    answerLabel: 'Schnelle Antwort',
    answer: 'Heute: Biom und Statue bitte im Tagesdatensatz prüfen. Ohne verlässlichen Fundort bleibt die Angabe „Heute nicht bestätigt“. Der Effekt ist Heilung plus kurze Unverwundbarkeit mit anschließender Versteinerung.',
    heroImage: { src: '/media/items/scout-effigy.webp', alt: 'Scout-Effigy als Bildkontext für ein PEAK-Amulett', caption: 'Gegenstandsbild als Kontext; den heutigen Fundort im Spiel prüfen.' },
    tocLabel: 'Auf dieser Seite',
    tocFaq: 'Amulett-FAQ',
    sections: [
      { id: 'amulet-or-badge', title: 'Amulett oder Abzeichen?', paragraphs: ['Beharrlichkeit des Pfadfinders ist ein Amulett. Diese Seite beschreibt den Gegenstand und seinen Effekt, nicht eine Steam-Abzeichenbedingung.'] },
      { id: 'effect', title: 'Effekt', paragraphs: ['Das Amulett heilt und gibt für kurze Zeit Unverwundbarkeit; anschließend tritt Versteinerung ein. Nicht dokumentierte Dauer- oder Zahlenwerte werden nicht ergänzt.'] },
      { id: 'today', title: 'Heutiges Biom finden', paragraphs: ['Öffne zuerst die [[link:map-rotation|heutige PEAK-Karte]]. Ist für heute kein Amulett-Fund bestätigt, bleibt die Angabe offen. Suche im passenden Biom nach einer Statue mit blauem Leuchten und bestätige den Effekt in deiner Spielversion.'] },
    ],
    faq: { eyebrow: 'Schnelle Antworten', title: 'Beharrlichkeit des Pfadfinders FAQ', items: [['Ist Beharrlichkeit des Pfadfinders ein Abzeichen?', 'Nein. Es ist ein Amulett.'], ['Wo ist es heute?', 'Nutze die [[link:map-rotation|heutige Karte]]; ohne bestätigten Datensatz bleibt der Fundort „Heute nicht bestätigt“.'], ['Was bewirkt es?', 'Es heilt, gewährt kurzzeitig Unverwundbarkeit und führt danach zur Versteinerung.']] },
    source: { eyebrow: 'Quelle', title: 'Aktuelle Prüfung', body: 'Patch- und Plattformhinweise werden gegen die offiziellen Steam-Ankündigungen geprüft. Der tägliche Fundort bleibt eine zeitabhängige Angabe und sollte im Spiel bestätigt werden.', links: [['Steam-Ankündigungen', steamNewsUrl]] },
    related: [['map-rotation', 'Heutige Karte öffnen'], ['room-codes', 'Raumcodes und Crossplay prüfen']], relatedLabel: 'Verwandte PEAK-Hilfen',
  },
};

