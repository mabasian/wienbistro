// Theme-Metadaten NUR für die Switcher-UI (Demo/Präsentation).
// Die tatsächlichen Farbwerte leben als CSS-Variablen in src/index.css ([data-theme="…"]).
export type ThemeId =
  | 'vienna-cream'
  | 'espresso-gold'
  | 'imperial-burgundy'
  | 'sage-brunch'
  | 'midnight-bistro'

export type ThemeMeta = {
  id: ThemeId
  name: string
  mood: string
  // Vorschau-Farbtupfer (bg, primär-dunkel, akzent) – nur zur Anzeige im Switcher.
  swatches: [string, string, string]
}

export const themes: ThemeMeta[] = [
  {
    id: 'vienna-cream',
    name: 'Vienna Cream',
    mood: 'Warm, klassisch-wienerisch',
    swatches: ['#FAF4EC', '#2E2018', '#C8612F'],
  },
  {
    id: 'espresso-gold',
    name: 'Espresso Gold',
    mood: 'Tiefes Braun, goldener Luxus',
    swatches: ['#F7F1E6', '#261C15', '#BE9646'],
  },
  {
    id: 'imperial-burgundy',
    name: 'Imperial Burgundy',
    mood: 'Weinrot, elegant & imperial',
    swatches: ['#F8F2EE', '#3A1A21', '#962A3A'],
  },
  {
    id: 'sage-brunch',
    name: 'Sage Brunch',
    mood: 'Salbeigrün, frisch & modern',
    swatches: ['#F4F6EF', '#262E28', '#C48260'],
  },
  {
    id: 'midnight-bistro',
    name: 'Midnight Bistro',
    mood: 'Mitternachtsblau, abendlich-edel',
    swatches: ['#F4F5F8', '#1A202E', '#C99246'],
  },
]

export const DEFAULT_THEME: ThemeId = 'vienna-cream'
export const THEME_STORAGE_KEY = 'wienbistro-demo-theme'
