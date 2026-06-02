export type MenuItem = {
  name: string
  description?: string
  price: string
  tags?: string[] // z. B. "vegan", "vegetarisch", "glutenfrei"
}

export type MenuCategory = {
  id: string
  title: string
  blurb: string
  items: MenuItem[]
}

// Realistische Wiener Karte mit EUR-Preisen (Stand 2026). Pro Kunde austauschbar.
export const menu: MenuCategory[] = [
  {
    id: 'fruehstueck',
    title: 'Frühstück & Brunch',
    blurb: 'Ganztägig serviert – weil ein guter Vormittag keine Uhrzeit kennt.',
    items: [
      {
        name: 'Wiener Frühstück',
        description:
          'Knusprige Semmel, Bio-Butter, hausgemachte Marillenmarmelade, weiches Ei und eine Melange.',
        price: '€ 11,50',
      },
      {
        name: 'Eier Benedict',
        description: 'Pochierte Bio-Eier, Sauce Hollandaise, Schinken oder Spinat auf Sauerteig.',
        price: '€ 14,90',
        tags: ['vegetarisch möglich'],
      },
      {
        name: 'Avocado-Brot',
        description: 'Joseph-Sauerteig, zerdrückte Avocado, Topfen-Limette, pochiertes Ei, Chili.',
        price: '€ 13,80',
        tags: ['vegetarisch'],
      },
      {
        name: 'Granola-Bowl',
        description: 'Hausgemachtes Granola, Naturjoghurt, Marille, Apfel und Honig.',
        price: '€ 9,80',
        tags: ['vegetarisch'],
      },
      {
        name: 'French Toast',
        description: 'Brioche, gebrannte Banane, Ahornsirup, geröstete Walnüsse, Obers.',
        price: '€ 12,50',
        tags: ['vegetarisch'],
      },
      {
        name: 'Brunch-Teller für zwei',
        description:
          'Aufstriche, Käse & Schinken vom Greißler, Bio-Eier, Obstsalat, Gebäck und zwei Heißgetränke.',
        price: '€ 36,00',
      },
    ],
  },
  {
    id: 'kaffee',
    title: 'Kaffee & Getränke',
    blurb: 'Wiener Klassiker trifft Specialty Coffee – Bohnen von einer kleinen Wiener Rösterei.',
    items: [
      { name: 'Melange', description: 'Der Wiener Klassiker mit aufgeschäumter Milch.', price: '€ 4,20' },
      { name: 'Großer Brauner', price: '€ 4,40' },
      { name: 'Verlängerter', price: '€ 3,80' },
      { name: 'Flat White', description: 'Doppelter Espresso, samtige Milch.', price: '€ 4,80' },
      { name: 'Cortado', price: '€ 4,20' },
      { name: 'Filterkaffee', description: 'Wechselnder Single Origin, handaufgegossen.', price: '€ 4,60' },
      { name: 'Espresso Tonic', description: 'Espresso, Tonic, Orange – spritzig.', price: '€ 5,20' },
      { name: 'Heiße Schokolade', description: 'Echte Valrhona-Schokolade, Obershaube.', price: '€ 4,90' },
      { name: 'Hausgemachte Limonade', description: 'Holler, Marille oder Minze-Gurke.', price: '€ 4,50', tags: ['vegan'] },
      { name: 'Grüner Veltliner, 1/8', description: 'Vom Weingut aus dem Weinviertel.', price: '€ 4,90' },
    ],
  },
  {
    id: 'mittag',
    title: 'Mittag & Bistro',
    blurb: 'Von 11:30 bis 15:00 – ein wechselnder Tagesteller plus unsere Klassiker.',
    items: [
      {
        name: 'Tagesteller',
        description: 'Wechselt täglich – frag uns einfach oder schau auf Instagram.',
        price: '€ 13,90',
      },
      {
        name: 'Bistro-Bowl',
        description: 'Ofengemüse, Quinoa, Kichererbsen, Topfen-Dip und geröstete Kerne.',
        price: '€ 15,50',
        tags: ['vegetarisch', 'vegan möglich'],
      },
      {
        name: 'Wiener Schnitzel vom Kalb',
        description: 'Mit Erdäpfel-Vogerlsalat und Preiselbeeren.',
        price: '€ 21,90',
      },
      {
        name: 'Rindsgulasch',
        description: 'Zart geschmort, mit Semmelknödel und Sauerrahm.',
        price: '€ 16,80',
      },
      {
        name: 'Kürbiscremesuppe',
        description: 'Geröstete Kerne, Kernöl, hausgemachtes Brot.',
        price: '€ 7,50',
        tags: ['vegetarisch'],
      },
      {
        name: 'Großer Bistro-Salat',
        description: 'Blattsalate, Paradeiser, Avocado, Feta – auf Wunsch mit Hühnerstreifen.',
        price: '€ 13,50',
        tags: ['vegetarisch'],
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Mehlspeisen & Desserts',
    blurb: 'Alles hausgemacht – die Vitrine wechselt mit der Saison.',
    items: [
      { name: 'Apfelstrudel', description: 'Warm, mit Vanilleobers.', price: '€ 5,80', tags: ['vegetarisch'] },
      { name: 'Sachertorte', description: 'Nach Hausrezept, mit Schlagobers.', price: '€ 6,20', tags: ['vegetarisch'] },
      { name: 'Topfen-Cheesecake', description: 'Cremig, mit Marillenspiegel.', price: '€ 5,90', tags: ['vegetarisch'] },
      { name: 'Bananenbrot', description: 'Mit Walnüssen, getoastet mit Butter.', price: '€ 4,80', tags: ['vegetarisch'] },
      { name: 'Tagesschnitte', description: 'Frag nach der Mehlspeise des Tages.', price: '€ 4,90', tags: ['vegetarisch'] },
    ],
  },
]
