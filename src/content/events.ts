export type EventItem = {
  badge: string
  title: string
  description: string
  when: string
}

export const events: EventItem[] = [
  {
    badge: 'Jedes Wochenende',
    title: 'Großer Wochenend-Brunch',
    description:
      'Samstag & Sonntag von 9 bis 16 Uhr: unser ganztägiges Brunch-Angebot mit frischem Gebäck, Bio-Eiern und Mehlspeisen aus der Vitrine. Reservierung empfohlen.',
    when: 'Sa & So · 09:00–16:00',
  },
  {
    badge: 'Saison-Special',
    title: 'Marillen-Wochen',
    description:
      'Solange die Wachauer Marillen reif sind: Marillenknödel, Marillen-French-Toast und hausgemachte Marillenlimonade.',
    when: 'Juli & August',
  },
  {
    badge: 'Jeden ersten Donnerstag',
    title: 'Filterkaffee-Verkostung',
    description:
      'Wir öffnen drei Single Origins und brühen gemeinsam auf. Mit unserer Wiener Partnerrösterei. Begrenzte Plätze.',
    when: '1. Donnerstag · 17:30',
  },
]
