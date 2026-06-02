# WienBistro

Premium, zweisprachige (Deutsch / Englisch) **Demo-Website / Vorlage** für Wiener Cafés, Brunch-Lokale und Bistros.
Gebaut für Kaltakquise und als verkaufsfertiges Template für echte Gastronomiebetriebe in Wien.

🔗 **Live-Demo:** https://wienbistro.mabasian.dev
📦 **Repository:** https://github.com/mabasian/wienbistro

> „Wiener Frühstückskultur, neu aufgebrüht." – ein fiktives, aber glaubwürdiges Brunch-Café im 7. Bezirk (Neubau).

---

## ✨ Features

- **Next.js App Router** – serverseitig gerendertes HTML (gut für SEO), statisch vorgerendert
- **Zweisprachig (DE / EN)** mit Sprachumschalter – **Deutsch ist Standard**; authentisches, Wienerisch gefärbtes Deutsch (keine Maschinenübersetzung)
- **5 Premium-Themes** mit Live-Umschalter (Demo-Werkzeug): Vienna Cream, Espresso Gold, Imperial Burgundy, Sage Brunch, Midnight Bistro
- **Mobile-First**, schnell, responsive, mit persistenter „Tisch reservieren"-Leiste
- **HTML-Speisekarte** mit Kategorie-Tabs (statt PDF, vollständig im HTML für SEO) – realistische Gerichte & EUR-Preise
- **Reservierungsformular** (UI-only, ohne Backend – leicht an Resmio/OpenTable/Formspree anbindbar)
- **Öffnungszeiten** mit Live-Logik „jetzt geöffnet/geschlossen"
- Standort-Card mit Google-Maps-Link, Galerie, Bewertungen, Events/Saison-Specials, Kontakt
- **SEO:** Next Metadata-API, Schema.org (`CafeOrCoffeeShop`), Open-Graph-Tags, `lang`-Attribut
- Impressum-/Datenschutz-Platzhalter (in Österreich gesetzlich verpflichtend)

## 🧱 Tech-Stack

- [Next.js 14](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (Theme-Tokens via CSS-Variablen)
- Keine Backend-Abhängigkeiten – statisch deploybar (Vercel)

## 📁 Projektstruktur

```
wienbistro/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Metadaten, Fonts, Schema.org, <html lang>
│   ├── page.tsx                # Seitenkomposition
│   ├── providers.tsx           # Client-Provider (Sprache)
│   └── globals.css             # Tailwind + Theme-Tokens (5 Themes)
├── src/
│   ├── components/             # UI-Komponenten (Hero, FullMenu, ThemeSwitcher …)
│   ├── content/                # Zweisprachige Inhalte (Menü, Öffnungszeiten, Themes …)
│   └── i18n/                    # Sprach-Context + UI-Strings (DE/EN)
├── docs/                       # Recherche & Verkaufsunterlagen
│   ├── vienna-restaurant-research.md
│   ├── product-spec.md
│   ├── naming.md
│   └── sales-strategy.md
├── public/                     # Favicon & statische Assets
├── tailwind.config.js          # Farb-/Schrift-Tokens
└── next.config.mjs
```

## 🚀 Lokal starten

Voraussetzung: Node.js ≥ 18.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server (http://localhost:3000)
```

Weitere Befehle:

```bash
npm run build      # Produktions-Build (next build)
npm run start      # Produktions-Build lokal servieren
npm run typecheck  # TypeScript-Prüfung ohne Emit
npm run lint       # next lint
```

## ☁️ Deployment (Vercel)

Das Projekt ist eine Next.js-App und auf [Vercel](https://vercel.com) deployt.

**Per Git-Integration (empfohlen):**
1. Repository in Vercel importieren (Framework wird automatisch als *Next.js* erkannt).
2. Keine Sonderkonfiguration nötig (Build `next build`, Output automatisch).
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

- **Inhalte:** `src/content/*` (Menü, Öffnungszeiten, Stammdaten, Testimonials, Events, Galerie) – alle Texte als `{ de, en }`.
- **UI-Texte:** `src/i18n/strings.ts`
- **Branding:** Farben & Schriften in `app/globals.css` (Theme-Tokens) und `tailwind.config.js`
- **Bilder:** Hero/About/Galerie-URLs durch echte Fotos ersetzen
- **SEO:** Metadaten & Schema.org in `app/layout.tsx`
- **Reservierung:** `src/components/Reservation.tsx` an ein Buchungs-Tool anbinden

### Themes & Sprache

- Die **5 Themes** liegen als CSS-Variablen-Paletten in `app/globals.css` (`[data-theme="…"]`).
- Der **ThemeSwitcher** ist ein Demo-Werkzeug für Präsentationen. Zum Entfernen für die Kunden-Version:
  1. `src/components/ThemeSwitcher.tsx` löschen
  2. Import & `<ThemeSwitcher />` aus `app/page.tsx` entfernen
  3. Gewünschtes Theme fix via `data-theme="…"` am `<html>` in `app/layout.tsx` setzen
- **Standardsprache ist Deutsch.** Englisch ist über den DE/EN-Schalter in der Navigation erreichbar.

## 💼 Verkauf

Strategie, Preise und Outreach-Vorlagen siehe [`docs/sales-strategy.md`](docs/sales-strategy.md).
Produkt-Konzept & Positionierung siehe [`docs/product-spec.md`](docs/product-spec.md).

## 📌 Finale Hinweise

- Empfohlene Subdomain: **wienbistro.mabasian.dev**
- Demo-Inhalte (Adresse, Telefon, Impressum) sind Platzhalter und vor Live-Gang zu ersetzen.
- Das Reservierungsformular ist bewusst Frontend-only.

---

Website-Demo für Gastronomie in Wien **by Mabasian (Reza)**.
