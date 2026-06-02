import { l } from '../i18n'

// Zentrale Stammdaten – pro Kunde hier anpassen.
export const site = {
  name: 'WienBistro',
  claim: l('Wiener Frühstückskultur, neu aufgebrüht.', 'Viennese breakfast culture, freshly brewed.'),
  district: l('Neubau, 7. Bezirk', 'Neubau, 7th District'),
  intro: l(
    'Ganztägiges Frühstück, hausgemachte Mehlspeisen und Specialty Coffee – mitten im Grätzl. Bei uns wird der Vormittag zur schönsten Mahlzeit des Tages.',
    'All-day breakfast, homemade pastries and specialty coffee – right in the neighbourhood. With us, the morning becomes the best meal of the day.',
  ),
  address: {
    street: 'Lindengasse 24',
    zip: '1070',
    city: 'Wien',
    countryHint: l('Österreich', 'Austria'),
  },
  contact: {
    phone: '+43 1 234 56 78',
    phoneHref: 'tel:+4312345678',
    email: 'hallo@wienbistro.at',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
  transit: l(
    'U3 Neubaugasse · Bim 49 Westbahnstraße/Kaiserstraße · Bus 13A',
    'U3 Neubaugasse · Tram 49 Westbahnstraße/Kaiserstraße · Bus 13A',
  ),
  mapsQuery: 'Lindengasse 24, 1070 Wien',
} as const
