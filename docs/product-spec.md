# Produkt-Spezifikation: WienBistro

> Ein verkaufsfertiges, premium Website-Template für moderne Wiener Cafés, Brunch-Lokale & Bistros.
> Basierend auf `vienna-restaurant-research.md`.

---

## 1. Demo-Konzept

**WienBistro** ist die fiktive, aber glaubwürdige Marke eines modernen **Brunch-Cafés & Tagesbistros** im 7. Bezirk (Neubau) – dem Grätzl, das in Wien am stärksten für Specialty Coffee, Brunch und junge Gastronomie steht.

Das Lokal vereint **Wiener Kaffeehaus-Tradition mit moderner Brunch-Kultur**: vormittags Frühstück & Brunch, mittags ein wechselnder Bistro-Tagesteller, ganztägig Specialty Coffee und hausgemachte Mehlspeisen. Haltung: regional, saisonal, herzlich, unaufgeregt.

> Markenclaim: **„Wiener Frühstückskultur, neu aufgebrüht."**

Das Konzept ist bewusst **generisch genug**, um es bei der Akquise in Minuten auf ein echtes Lokal umzufärben (Name, Fotos, Adresse, Karte tauschen), und **spezifisch genug**, um echt zu wirken.

---

## 2. Zielkunde (für den Verkauf)

**Wer kauft das Template?**
- Inhaber:innen kleiner, moderner Wiener Cafés / Brunch-Lokale / Bistros (1–3 Standorte).
- Neueröffnungen, die schnell eine professionelle Online-Präsenz brauchen.
- Bestehende Lokale mit veralteter, PDF-lastiger oder nicht mobiloptimierter Seite.

**Pain Points:** keine Zeit/kein Know-how für Web, teure Agenturen (€ 3.000–8.000+), schlechte Mobile-Darstellung, keine echte Reservierungs-/Menüführung, schwache Google-Sichtbarkeit.

**Gast (Endnutzer der Website):** 20–45 Jahre, mobil, sucht spontan „Frühstück/Brunch in der Nähe", will schnell sehen: Karte, Öffnungszeiten, reservieren.

---

## 3. Positionierung

> „Die Website, die dein Wiener Café eigentlich haben sollte – premium, mobil schnell, in echtem Wiener Deutsch, in einer Woche live."

Abgrenzung:
- **vs. teure Agentur:** günstiger, schneller, gastro-spezialisiert.
- **vs. Baukasten (Wix etc.):** professionelles Design, echte Performance & SEO, keine Bastelei.
- **vs. Status quo (PDF/Facebook):** echtes Web-Erlebnis, Reservierungs-CTA, HTML-Menü.

---

## 4. Design-Direction

- **Stimmung:** warm, editorial, premium-handgemacht. „Slow morning in Vienna".
- **Farbpalette:** Espresso-Braun `#2E2018`, Creme `#FAF4EC`, Terrakotta/gebranntes Orange `#C8612F` als Akzent, warmes Beige, Olivgrün-Sekundärakzent.
- **Typografie:** Display-Serif für Headlines (elegant, traditionsbewusst) + klare humanistische Sans für Fließtext. (Im Build: System-/Google-Font-Stack, z. B. „Fraunces"/„Playfair"-Anmutung via Serif + „Inter"-Sans.)
- **Layout:** Vollbild-Hero, großzügiger Weißraum, Magazin-Hierarchie, abgerundete Karten, dezente Fade-in-Animationen beim Scrollen.
- **Bilder:** warme Foodfotografie, Interieur, Kaffee-Close-ups (in Demo via Platzhalter/Unsplash-Stil).
- **Mobile-First**, Sticky-Header mit dauerhaftem „Tisch reservieren".

---

## 5. Seitenstruktur (One-Pager + Anker-Navigation)

Single-Page-Architektur mit Sticky-Nav und Sprungankern (ideal für Gastro, beste Conversion):

1. **Hero** – Claim, Positionierung, CTAs „Tisch reservieren" + „Speisekarte ansehen".
2. **Über uns / Konzept** – Geschichte & Haltung (regional, hausgemacht).
3. **Menü-Vorschau** – 4 Kategorien als Teaser (Frühstück/Brunch, Kaffee & Getränke, Mittag/Bistro, Desserts).
4. **Vollständige Speisekarte** – alle Kategorien mit Gerichten & EUR-Preisen, mit Tabs/Kategorien.
5. **Reservierung** – Formular-UI (Datum, Uhrzeit, Personen, Name, Kontakt) – nur Frontend.
6. **Öffnungszeiten** – strukturiert, mit „heute geöffnet"-Hinweis.
7. **Standort** – Adresse, Karten-Card, Öffi-Anbindung.
8. **Galerie** – Bilderraster.
9. **Bewertungen / Testimonials** – Gästestimmen.
10. **Events / Saison-Specials** – z. B. Wochenend-Brunch, saisonale Aktionen.
11. **Kontakt** – Adresse, Telefon, Mail, Social.
12. **Footer** – Impressum/Datenschutz-Platzhalter, Demo-Hinweis.

---

## 6. Content-Strategie

- Durchgehend **authentisches, Wienerisch gefärbtes Hochdeutsch**, Du-Form (modernes Brunch-Lokal).
- Österreichische Begriffe (Melange, Semmel, Topfen, Marille, Mehlspeise, Jause).
- Konkrete, sinnliche Beschreibungen statt Floskeln.
- Realistische Gerichte & Preise (Wien 2026, siehe Research §3).
- Jeder Abschnitt hat eine klare Funktion und führt Richtung Reservierung.

---

## 7. Conversion-Ziele

**Primär:** Tischreservierung (CTA überall sichtbar, Sticky-Header, eigener Abschnitt).
**Sekundär:** Speisekarte ansehen, anrufen (Tap-to-Call), Route/Standort, Instagram folgen.
**Mikro-Conversions:** Galerie ansehen, Öffnungszeiten checken, Events ansehen.

Conversion-Hebel: oberhalb der Falz klare CTAs, Vertrauen durch Testimonials & echte Fotos, Reibung minimieren (Telefon/Adresse als Direkt-Links).

---

## 8. Technischer Stack

- **Next.js 14 (App Router) + TypeScript** – serverseitig gerendertes, statisch vorgerendertes HTML für beste SEO.
- **React 18** (Client-Komponenten für Interaktion: Tabs, Formular, Sprach-/Theme-Wechsel).
- **Tailwind CSS** mit **CSS-Variablen-Theme-Tokens** (5 Themes ohne Komponenten-Duplikate).
- **Zweisprachigkeit (DE/EN)** über einen leichten i18n-Context (`Localized {de,en}`), Standard = Deutsch.
- Komponentenbasiert, klare Ordnerstruktur (`app/`, `src/components`, `src/content`, `src/i18n`), responsive.
- Keine Backend-Abhängigkeit (Formulare = UI-only, später anbindbar an Resmio/OpenTable/Formspree).
- Deployment **Vercel** (Auto-Detection Next.js), Domain via Subdomain.
- Zentrale Inhalts-/Theme-Dateien für einfache Anpassung pro Kunde.

---

## 9. SEO-Strategie

- Aussagekräftige `<title>` & Meta-Description (Ort + Leistung).
- **Schema.org `CafeOrCoffeeShop`/`Restaurant`** (JSON-LD): Adresse, Geo, Öffnungszeiten, Preisspanne, Menü.
- Semantische Überschriften, sprechende Sektionen, Grätzl-Bezug im Text.
- Open-Graph/Twitter-Cards für Social-Sharing.
- `lang="de"`, Canonical, schnelle Ladezeit, Mobile-First.
- Hinweis-Doku für Kunden: Google-Unternehmensprofil + konsistente NAP-Daten.

---

## 10. Anpassungs-Optionen (Customization)

Pro Kunde in Minuten/Stunden anpassbar:
- **Branding:** Name, Logo, Farben (Tailwind-Theme-Tokens), Schriften.
- **Inhalte:** zentrale Daten-Dateien (`content`) für Menü, Öffnungszeiten, Texte, Testimonials, Events.
- **Bilder:** Hero, Galerie, Über-uns.
- **Adresse/Kontakt/Social**, Reservierungs-Anbindung.
- Optionale Module ein-/ausblendbar (Events, Jobs, Galerie).

---

## 11. Preis-Vorschlag (Verkauf)

| Paket | Inhalt | Preis (einmalig) |
|---|---|---|
| **Starter** | Template eingerichtet, Inhalte des Kunden eingepflegt, auf Subdomain | **€ 490** |
| **Professional** | + eigene Domain, Texte/Foto-Feinschliff, Reservierungs-Tool angebunden, Google-Profil-Setup, SEO-Basis | **€ 890** |
| **Premium** | + individuelles Branding, professionelle Foto-Kuration, mehrsprachig (DE/EN), Mehrseiten-Variante | **€ 1.490** |
| **Care (optional)** | Hosting, Updates, kleine Änderungen | **€ 25–39 / Monat** |

(Bewusst deutlich unter Agenturpreisen € 3.000–8.000, klarer No-Brainer.)

---

## 12. Kaltakquise-Angle

> „Ich habe mir eure Online-Präsenz angeschaut – mir ist aufgefallen, dass die Speisekarte nur als PDF da ist und am Handy schwer lesbar. Ich habe als Demo gezeigt, wie eine moderne Wiener Café-Website aussehen könnte: [Link]. Wenn ihr wollt, mache ich euch in einer Woche genau so etwas mit euren Inhalten."

Aufhänger: **konkreter sichtbarer Mangel** (PDF-Menü, Mobile, keine Reservierung) + **fertige Demo zum Anfassen** → siehe `sales-strategy.md`.
