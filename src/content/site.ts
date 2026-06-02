// Zentrale Stammdaten – pro Kunde hier anpassen.
export const site = {
  name: 'WienBistro',
  claim: 'Wiener Frühstückskultur, neu aufgebrüht.',
  district: 'Neubau, 7. Bezirk',
  intro:
    'Ganztägiges Frühstück, hausgemachte Mehlspeisen und Specialty Coffee – mitten im Grätzl. Bei uns wird der Vormittag zur schönsten Mahlzeit des Tages.',
  address: {
    street: 'Lindengasse 24',
    zip: '1070',
    city: 'Wien',
    countryHint: 'Österreich',
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
  transit: 'U3 Neubaugasse · Bim 49 Westbahnstraße/Kaiserstraße · Bus 13A',
  mapsQuery: 'Lindengasse 24, 1070 Wien',
} as const
