export type GalleryImage = {
  src: string
  alt: string
}

// Demo-Bilder via Unsplash (Foodfotografie). Pro Kunde durch echte Fotos ersetzen.
const base = 'https://images.unsplash.com'
const params = 'auto=format&fit=crop&w=800&h=800&q=70'

export const gallery: GalleryImage[] = [
  { src: `${base}/photo-1495474472287-4d71bcdd2085?${params}`, alt: 'Frisch gebrühter Cappuccino mit Latte Art' },
  { src: `${base}/photo-1525351484163-7529414344d8?${params}`, alt: 'Reichhaltiger Frühstücksteller mit Ei und Gebäck' },
  { src: `${base}/photo-1554118811-1e0d58224f24?${params}`, alt: 'Gemütliches Café-Interieur mit Holztischen' },
  { src: `${base}/photo-1481391319762-47dff72954d9?${params}`, alt: 'Avocado-Brot mit pochiertem Ei' },
  { src: `${base}/photo-1551024601-bec78aea704b?${params}`, alt: 'Hausgemachte Mehlspeisen und Kuchen' },
  { src: `${base}/photo-1509042239860-f550ce710b93?${params}`, alt: 'Specialty Coffee in der Tasse von oben' },
  { src: `${base}/photo-1567620905732-2d1ec7ab7445?${params}`, alt: 'French Toast mit Banane und Sirup' },
  { src: `${base}/photo-1414235077428-338989a2e8c0?${params}`, alt: 'Bistro-Atmosphäre am Mittag' },
]
