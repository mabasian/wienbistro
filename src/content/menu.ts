import { l, type Localized } from '../i18n'

export type MenuItem = {
  name: Localized
  description?: Localized
  price: string
  tags?: Localized[] // z. B. "vegan", "vegetarisch", "glutenfrei"
}

export type MenuCategory = {
  id: string
  title: Localized
  blurb: Localized
  items: MenuItem[]
}

const veg = l('vegetarisch', 'vegetarian')
const vegan = l('vegan', 'vegan')
const vegMaybe = l('vegetarisch möglich', 'vegetarian option')
const veganMaybe = l('vegan möglich', 'vegan option')

// Realistische Wiener Karte mit EUR-Preisen (Stand 2026). Pro Kunde austauschbar.
export const menu: MenuCategory[] = [
  {
    id: 'fruehstueck',
    title: l('Frühstück & Brunch', 'Breakfast & Brunch'),
    blurb: l(
      'Ganztägig serviert – weil ein guter Vormittag keine Uhrzeit kennt.',
      'Served all day – because a good morning knows no clock.',
    ),
    items: [
      {
        name: l('Wiener Frühstück', 'Viennese Breakfast'),
        description: l(
          'Knusprige Semmel, Bio-Butter, hausgemachte Marillenmarmelade, weiches Ei und eine Melange.',
          'Crusty roll, organic butter, homemade apricot jam, a soft-boiled egg and a Melange coffee.',
        ),
        price: '€ 11,50',
      },
      {
        name: l('Eier Benedict', 'Eggs Benedict'),
        description: l(
          'Pochierte Bio-Eier, Sauce Hollandaise, Schinken oder Spinat auf Sauerteig.',
          'Poached organic eggs, hollandaise, ham or spinach on sourdough.',
        ),
        price: '€ 14,90',
        tags: [vegMaybe],
      },
      {
        name: l('Avocado-Brot', 'Avocado Toast'),
        description: l(
          'Joseph-Sauerteig, zerdrückte Avocado, Topfen-Limette, pochiertes Ei, Chili.',
          'Sourdough, smashed avocado, lime quark, poached egg, chilli.',
        ),
        price: '€ 13,80',
        tags: [veg],
      },
      {
        name: l('Granola-Bowl', 'Granola Bowl'),
        description: l(
          'Hausgemachtes Granola, Naturjoghurt, Marille, Apfel und Honig.',
          'Homemade granola, natural yoghurt, apricot, apple and honey.',
        ),
        price: '€ 9,80',
        tags: [veg],
      },
      {
        name: l('French Toast', 'French Toast'),
        description: l(
          'Brioche, gebrannte Banane, Ahornsirup, geröstete Walnüsse, Obers.',
          'Brioche, caramelised banana, maple syrup, roasted walnuts, whipped cream.',
        ),
        price: '€ 12,50',
        tags: [veg],
      },
      {
        name: l('Brunch-Teller für zwei', 'Brunch Platter for Two'),
        description: l(
          'Aufstriche, Käse & Schinken vom Greißler, Bio-Eier, Obstsalat, Gebäck und zwei Heißgetränke.',
          'Spreads, cheese & ham from the local deli, organic eggs, fruit salad, pastries and two hot drinks.',
        ),
        price: '€ 36,00',
      },
    ],
  },
  {
    id: 'kaffee',
    title: l('Kaffee & Getränke', 'Coffee & Drinks'),
    blurb: l(
      'Wiener Klassiker trifft Specialty Coffee – Bohnen von einer kleinen Wiener Rösterei.',
      'Viennese classics meet specialty coffee – beans from a small Viennese roastery.',
    ),
    items: [
      {
        name: l('Melange', 'Melange'),
        description: l('Der Wiener Klassiker mit aufgeschäumter Milch.', 'The Viennese classic with foamed milk.'),
        price: '€ 4,20',
      },
      { name: l('Großer Brauner', 'Großer Brauner'), price: '€ 4,40' },
      { name: l('Verlängerter', 'Verlängerter (Long Black)'), price: '€ 3,80' },
      {
        name: l('Flat White', 'Flat White'),
        description: l('Doppelter Espresso, samtige Milch.', 'Double espresso, velvety milk.'),
        price: '€ 4,80',
      },
      { name: l('Cortado', 'Cortado'), price: '€ 4,20' },
      {
        name: l('Filterkaffee', 'Filter Coffee'),
        description: l('Wechselnder Single Origin, handaufgegossen.', 'Rotating single origin, hand-poured.'),
        price: '€ 4,60',
      },
      {
        name: l('Espresso Tonic', 'Espresso Tonic'),
        description: l('Espresso, Tonic, Orange – spritzig.', 'Espresso, tonic, orange – refreshing.'),
        price: '€ 5,20',
      },
      {
        name: l('Heiße Schokolade', 'Hot Chocolate'),
        description: l('Echte Valrhona-Schokolade, Obershaube.', 'Real Valrhona chocolate, whipped cream.'),
        price: '€ 4,90',
      },
      {
        name: l('Hausgemachte Limonade', 'Homemade Lemonade'),
        description: l('Holler, Marille oder Minze-Gurke.', 'Elderflower, apricot or mint-cucumber.'),
        price: '€ 4,50',
        tags: [vegan],
      },
      {
        name: l('Grüner Veltliner, 1/8', 'Grüner Veltliner, 0.125l'),
        description: l('Vom Weingut aus dem Weinviertel.', 'From a winery in the Weinviertel region.'),
        price: '€ 4,90',
      },
    ],
  },
  {
    id: 'mittag',
    title: l('Mittag & Bistro', 'Lunch & Bistro'),
    blurb: l(
      'Von 11:30 bis 15:00 – ein wechselnder Tagesteller plus unsere Klassiker.',
      'From 11:30 to 15:00 – a rotating daily plate plus our classics.',
    ),
    items: [
      {
        name: l('Tagesteller', 'Daily Plate'),
        description: l(
          'Wechselt täglich – frag uns einfach oder schau auf Instagram.',
          'Changes daily – just ask us or check Instagram.',
        ),
        price: '€ 13,90',
      },
      {
        name: l('Bistro-Bowl', 'Bistro Bowl'),
        description: l(
          'Ofengemüse, Quinoa, Kichererbsen, Topfen-Dip und geröstete Kerne.',
          'Roasted vegetables, quinoa, chickpeas, quark dip and toasted seeds.',
        ),
        price: '€ 15,50',
        tags: [veg, veganMaybe],
      },
      {
        name: l('Wiener Schnitzel vom Kalb', 'Wiener Schnitzel (Veal)'),
        description: l(
          'Mit Erdäpfel-Vogerlsalat und Preiselbeeren.',
          'With potato-lamb’s-lettuce salad and lingonberries.',
        ),
        price: '€ 21,90',
      },
      {
        name: l('Rindsgulasch', 'Beef Goulash'),
        description: l('Zart geschmort, mit Semmelknödel und Sauerrahm.', 'Slow-braised, with a bread dumpling and sour cream.'),
        price: '€ 16,80',
      },
      {
        name: l('Kürbiscremesuppe', 'Cream of Pumpkin Soup'),
        description: l('Geröstete Kerne, Kernöl, hausgemachtes Brot.', 'Roasted seeds, pumpkin-seed oil, homemade bread.'),
        price: '€ 7,50',
        tags: [veg],
      },
      {
        name: l('Großer Bistro-Salat', 'Large Bistro Salad'),
        description: l(
          'Blattsalate, Paradeiser, Avocado, Feta – auf Wunsch mit Hühnerstreifen.',
          'Leaf salads, tomatoes, avocado, feta – add chicken strips on request.',
        ),
        price: '€ 13,50',
        tags: [veg],
      },
    ],
  },
  {
    id: 'desserts',
    title: l('Mehlspeisen & Desserts', 'Pastries & Desserts'),
    blurb: l(
      'Alles hausgemacht – die Vitrine wechselt mit der Saison.',
      'All homemade – the display case changes with the season.',
    ),
    items: [
      {
        name: l('Apfelstrudel', 'Apple Strudel'),
        description: l('Warm, mit Vanilleobers.', 'Warm, with vanilla cream.'),
        price: '€ 5,80',
        tags: [veg],
      },
      {
        name: l('Sachertorte', 'Sachertorte'),
        description: l('Nach Hausrezept, mit Schlagobers.', 'Our house recipe, with whipped cream.'),
        price: '€ 6,20',
        tags: [veg],
      },
      {
        name: l('Topfen-Cheesecake', 'Quark Cheesecake'),
        description: l('Cremig, mit Marillenspiegel.', 'Creamy, with apricot glaze.'),
        price: '€ 5,90',
        tags: [veg],
      },
      {
        name: l('Bananenbrot', 'Banana Bread'),
        description: l('Mit Walnüssen, getoastet mit Butter.', 'With walnuts, toasted with butter.'),
        price: '€ 4,80',
        tags: [veg],
      },
      {
        name: l('Tagesschnitte', 'Cake of the Day'),
        description: l('Frag nach der Mehlspeise des Tages.', 'Ask for today’s pastry.'),
        price: '€ 4,90',
        tags: [veg],
      },
    ],
  },
]
