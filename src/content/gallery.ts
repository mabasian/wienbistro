import { l, type Localized } from '../i18n'

export type GalleryImage = {
  src: string
  alt: Localized
}

// Demo-Bilder via Unsplash (Foodfotografie). Pro Kunde durch echte Fotos ersetzen.
const base = 'https://images.unsplash.com'
const params = 'auto=format&fit=crop&w=800&h=800&q=70'

export const gallery: GalleryImage[] = [
  { src: `${base}/photo-1495474472287-4d71bcdd2085?${params}`, alt: l('Frisch gebrühter Cappuccino mit Latte Art', 'Freshly brewed cappuccino with latte art') },
  { src: `${base}/photo-1525351484163-7529414344d8?${params}`, alt: l('Reichhaltiger Frühstücksteller mit Ei und Gebäck', 'Hearty breakfast plate with egg and pastries') },
  { src: `${base}/photo-1554118811-1e0d58224f24?${params}`, alt: l('Gemütliches Café-Interieur mit Holztischen', 'Cosy café interior with wooden tables') },
  { src: `${base}/photo-1481391319762-47dff72954d9?${params}`, alt: l('Avocado-Brot mit pochiertem Ei', 'Avocado toast with poached egg') },
  { src: `${base}/photo-1551024601-bec78aea704b?${params}`, alt: l('Hausgemachte Mehlspeisen und Kuchen', 'Homemade pastries and cakes') },
  { src: `${base}/photo-1509042239860-f550ce710b93?${params}`, alt: l('Specialty Coffee in der Tasse von oben', 'Specialty coffee in the cup from above') },
  { src: `${base}/photo-1567620905732-2d1ec7ab7445?${params}`, alt: l('French Toast mit Banane und Sirup', 'French toast with banana and syrup') },
  { src: `${base}/photo-1414235077428-338989a2e8c0?${params}`, alt: l('Bistro-Atmosphäre am Mittag', 'Bistro atmosphere at lunchtime') },
]
