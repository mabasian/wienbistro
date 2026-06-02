export type DayHours = {
  // 0 = Sonntag ... 6 = Samstag (entspricht Date.getDay())
  weekday: number
  label: string
  open: string
  close: string
  note?: string
}

export const openingHours: DayHours[] = [
  { weekday: 1, label: 'Montag', open: '08:00', close: '18:00' },
  { weekday: 2, label: 'Dienstag', open: '08:00', close: '18:00' },
  { weekday: 3, label: 'Mittwoch', open: '08:00', close: '18:00' },
  { weekday: 4, label: 'Donnerstag', open: '08:00', close: '18:00' },
  { weekday: 5, label: 'Freitag', open: '08:00', close: '18:00' },
  { weekday: 6, label: 'Samstag', open: '09:00', close: '16:00', note: 'Wochenend-Brunch' },
  { weekday: 0, label: 'Sonntag', open: '09:00', close: '16:00', note: 'Wochenend-Brunch' },
]

export const kitchenNote = 'Mittagsküche von 11:30 bis 15:00 Uhr · Frühstück ganztägig'
