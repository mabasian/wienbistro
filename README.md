# WienBistro

Premium, deutschsprachige **Demo-Website / Vorlage** für Wiener Cafés, Brunch-Lokale und Bistros.
Gebaut für Kaltakquise und als verkaufsfertiges Template für echte Gastronomiebetriebe in Wien.

🔗 **Live-Demo:** https://wienbistro.mabasian.dev
📦 **Repository:** https://github.com/mabasian/wienbistro

> „Wiener Frühstückskultur, neu aufgebrüht." – ein fiktives, aber glaubwürdiges Brunch-Café im 7. Bezirk (Neubau).

---

## ✨ Features

- **Single-Page-Design** mit Sticky-Navigation und sanften Scroll-Animationen
- Vollständig auf **Deutsch** (authentisches, Wienerisch gefärbtes Hochdeutsch – keine Maschinenübersetzung)
- **Mobile-First**, schnell, responsive, mit persistenter „Tisch reservieren"-Leiste
- **HTML-Speisekarte** mit Kategorie-Tabs (statt PDF) – realistische Gerichte & EUR-Preise
- **Reservierungsformular** (UI-only, ohne Backend – leicht an Resmio/OpenTable/Formspree anbindbar)
- **Öffnungszeiten** mit Live-Logik „jetzt geöffnet/geschlossen"
- Standort-Card mit Google-Maps-Link, Galerie, Bewertungen, Events/Saison-Specials, Kontakt
- **SEO:** Schema.org (`CafeOrCoffeeShop`), Open-Graph-Tags, sprechende Meta-Daten, `lang="de"`
- Impressum-/Datenschutz-Platzhalter (in Österreich gesetzlich verpflichtend)

## 🧱 Tech-Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (Build & Dev-Server)
- [Tailwind CSS](https://tailwindcss.com/)
- Keine Backend-Abhängigkeiten – statisches Deployment (Vercel)

## 📁 Projektstruktur

```
wienbistro/
├── docs/                       # Recherche & Verkaufsunterlagen
│   ├── vienna-restaurant-research.md
│   ├── product-spec.md
│   ├── naming.md
│   └── sales-strategy.md
├── public/                     # Favicon & statische Assets
├── src/
│   ├── components/             # UI-Komponenten (Hero, FullMenu, Reservation …)
│   ├── content/                # Zentrale Inhalte (Menü, Öffnungszeiten, Texte …)
│   ├── App.tsx                 # Seitenkomposition
│   ├── main.tsx
│   └── index.css               # Tailwind + Design-Tokens
├── index.html                  # Meta-Tags + Schema.org
├── tailwind.config.js          # Farb-/Schrift-Tokens (Re-Skin pro Kunde)
└── vercel.json
```

## 🚀 Lokal starten

Voraussetzung: Node.js ≥ 18.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server (http://localhost:5173)
```

Weitere Befehle:

```bash
npm run build      # Produktions-Build (tsc -b && vite build) -> dist/
npm run typecheck  # TypeScript-Prüfung ohne Emit
npm run lint       # ESLint
npm run preview    # gebauten Build lokal ansehen
```

## ☁️ Deployment (Vercel)

Das Projekt ist ein statisches Vite-Build und auf [Vercel](https://vercel.com) deployt.

**Per Git-Integration (empfohlen):**
1. Repository in Vercel importieren (Framework wird automatisch als *Vite* erkannt).
2. Build Command `npm run build`, Output Directory `dist` (siehe `vercel.json`).
3. Production-Domain `wienbistro.mabasian.dev` unter *Settings → Domains* hinzufügen.

**Per CLI:**
```bash
npm i -g vercel
vercel link
vercel --prod
vercel domains add wienbistro.mabasian.dev
```

**DNS für `wienbistro.mabasian.dev`:** beim DNS-Anbieter von `mabasian.dev` einen Eintrag setzen:

| Typ   | Name        | Wert                   |
|-------|-------------|------------------------|
| CNAME | `wienbistro`| `cname.vercel-dns.com` |

Anschließend in Vercel unter *Settings → Domains* verifizieren.

## 🎨 Anpassen pro Kunde (Re-Skin)

- **Inhalte:** `src/content/*` (Menü, Öffnungszeiten, Stammdaten, Testimonials, Events, Galerie)
- **Branding:** Farben & Schriften in `tailwind.config.js` und `index.html` (Google Fonts)
- **Texte:** direkt in den Komponenten unter `src/components/`
- **Bilder:** Hero/About/Galerie-URLs durch echte Fotos ersetzen
- **SEO:** Meta-Tags & Schema.org in `index.html`
- **Reservierung:** `src/components/Reservation.tsx` an ein Buchungs-Tool anbinden

## 💼 Verkauf

Strategie, Preise und Outreach-Vorlagen siehe [`docs/sales-strategy.md`](docs/sales-strategy.md).
Produkt-Konzept & Positionierung siehe [`docs/product-spec.md`](docs/product-spec.md).

## 📌 Finale Hinweise

- Empfohlene Subdomain: **wienbistro.mabasian.dev**
- Demo-Inhalte (Adresse, Telefon, Impressum) sind Platzhalter und vor Live-Gang zu ersetzen.
- Das Reservierungsformular ist bewusst Frontend-only.

---

Website-Demo für Gastronomie in Wien **by Mabasian (Reza)**.
