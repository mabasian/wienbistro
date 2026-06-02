import { l, type Localized } from '../i18n'

export type DayHours = {
  // 0 = Sonntag ... 6 = Samstag (entspricht Date.getDay())
  weekday: number
  label: Localized
  open: string
  close: string
  note?: Localized
}

const brunch = l('Wochenend-Brunch', 'Weekend brunch')

export const openingHours: DayHours[] = [
  { weekday: 1, label: l('Montag', 'Monday'), open: '08:00', close: '18:00' },
  { weekday: 2, label: l('Dienstag', 'Tuesday'), open: '08:00', close: '18:00' },
  { weekday: 3, label: l('Mittwoch', 'Wednesday'), open: '08:00', close: '18:00' },
  { weekday: 4, label: l('Donnerstag', 'Thursday'), open: '08:00', close: '18:00' },
  { weekday: 5, label: l('Freitag', 'Friday'), open: '08:00', close: '18:00' },
  { weekday: 6, label: l('Samstag', 'Saturday'), open: '09:00', close: '16:00', note: brunch },
  { weekday: 0, label: l('Sonntag', 'Sunday'), open: '09:00', close: '16:00', note: brunch },
]

export const kitchenNote = l(
  'Mittagsküche von 11:30 bis 15:00 Uhr · Frühstück ganztägig',
  'Lunch kitchen 11:30–15:00 · breakfast all day',
)
