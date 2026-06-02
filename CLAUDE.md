# CLAUDE.md — WienBistro

Project conventions and lessons learnt for this repository. These instructions override default behavior.

## Project

WienBistro is a polished, bilingual (DE default / EN) **demo website / sellable template** for Viennese cafés, brunch spots and bistros. It is used for cold outreach and resold to real local hospitality businesses. Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Deployed on **Vercel** at `wienbistro.mabasian.dev`.

- Docs live in `docs/` (research, product-spec, naming, sales-strategy).
- Entry: `app/layout.tsx` (metadata, fonts, JSON-LD, `<html lang>`), `app/page.tsx` (section composition), `app/globals.css` (Tailwind + theme tokens).
- Components live in `src/components/`, content in `src/content/`, i18n in `src/i18n/`.
- Interactive components carry `'use client'`; `app/layout.tsx`/`app/page.tsx` are Server Components.
- Content is centralized in `src/content/` (bilingual `Localized {de,en}` values) so it re-skins per client quickly.
- Theme tokens (colors/fonts) live in `tailwind.config.js` (CSS-variable-backed) and `app/globals.css`.

## Lessons learnt / standing facts

- **The GitHub repo MUST live in the `mabasian` account** (`mabasian/wienbistro`). `gh` is authenticated as `mabasian`; always create/push there — never under any other account.
- **German copy must be authentic, Wienerisch-flavored Hochdeutsch — never machine-translated.** Use Austrian terms (Melange, Semmel, Topfen, Marille, Mehlspeise, Jause). Modern brunch tone = Du-Form.
- **Bilingual: German is the DEFAULT, English is secondary.** All user-facing text is a `Localized {de,en}` value rendered via the `t()` helper from `src/i18n`. UI microcopy lives in `src/i18n/strings.ts`; content strings in `src/content/*`. Default lang must stay `de`.
- **5 premium themes** are CSS-variable palettes in `app/globals.css` (`[data-theme=…]`). The floating `ThemeSwitcher` is a DEMO tool — clearly marked, easy to remove (delete the file + its import in `app/page.tsx`). Don't ship it in the customer version.
- **Speisekarte as HTML, not PDF.** A real, structured, mobile-friendly menu is a core selling point — never regress to a PDF link.
- **Reservation is UI-only** (no backend). Keep it clearly a frontend form; it can later be wired to Resmio/OpenTable/Formspree.
- **Mobile-first & fast.** Sticky "Tisch reservieren" CTA, large touch targets, optimized images. 70%+ of guests are on mobile.
- **Austrian legal reality:** keep Impressum & Datenschutz placeholders present (legally required in AT).
- **Keep the demo re-skinnable:** name, colors, images, and all content should be swappable from central files without touching component logic.
- **Quality gate before shipping:** run `npm run typecheck`, `npm run lint`, `npm run build` — fix all errors before pushing/deploying.
- **Footer must keep the attribution:** "Website-Demo für Gastronomie in Wien by Mabasian (Reza)".

## Commands

- `npm run dev` — Next dev server
- `npm run build` — production build (`next build`)
- `npm run start` — serve the production build
- `npm run typecheck` — TypeScript check, no emit
- `npm run lint` — `next lint`
