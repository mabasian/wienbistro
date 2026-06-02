import { l, type Localized } from '../i18n'

export type EventItem = {
  badge: Localized
  title: Localized
  description: Localized
  when: Localized
}

export const events: EventItem[] = [
  {
    badge: l('Jedes Wochenende', 'Every weekend'),
    title: l('Großer Wochenend-Brunch', 'Grand Weekend Brunch'),
    description: l(
      'Samstag & Sonntag von 9 bis 16 Uhr: unser ganztägiges Brunch-Angebot mit frischem Gebäck, Bio-Eiern und Mehlspeisen aus der Vitrine. Reservierung empfohlen.',
      'Saturday & Sunday, 9 am to 4 pm: our all-day brunch with fresh pastries, organic eggs and treats from the display case. Reservation recommended.',
    ),
    when: l('Sa & So · 09:00–16:00', 'Sat & Sun · 09:00–16:00'),
  },
  {
    badge: l('Saison-Special', 'Seasonal special'),
    title: l('Marillen-Wochen', 'Apricot Weeks'),
    description: l(
      'Solange die Wachauer Marillen reif sind: Marillenknödel, Marillen-French-Toast und hausgemachte Marillenlimonade.',
      'While the Wachau apricots are ripe: apricot dumplings, apricot French toast and homemade apricot lemonade.',
    ),
    when: l('Juli & August', 'July & August'),
  },
  {
    badge: l('Jeden ersten Donnerstag', 'First Thursday of the month'),
    title: l('Filterkaffee-Verkostung', 'Filter Coffee Tasting'),
    description: l(
      'Wir öffnen drei Single Origins und brühen gemeinsam auf. Mit unserer Wiener Partnerrösterei. Begrenzte Plätze.',
      'We open three single origins and brew together with our Viennese partner roastery. Limited seats.',
    ),
    when: l('1. Donnerstag · 17:30', '1st Thursday · 17:30'),
  },
]
