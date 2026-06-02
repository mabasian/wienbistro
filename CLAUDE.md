# CLAUDE.md — WienBistro

Project conventions and lessons learnt for this repository. These instructions override default behavior.

## Project

WienBistro is a polished, German-language **demo website / sellable template** for Viennese cafés, brunch spots and bistros. It is used for cold outreach and resold to real local hospitality businesses. Stack: **React 18 + TypeScript + Vite + Tailwind CSS**. Deployed on **Vercel** at `wienbistro.mabasian.dev`.

- Docs live in `docs/` (research, product-spec, naming, sales-strategy).
- Content is centralized in `src/content/` so it can be re-skinned per client quickly.
- Theme tokens (colors/fonts) live in `tailwind.config.js` and `src/index.css`.

## Lessons learnt / standing facts

- **The GitHub repo MUST live in the `mabasian` account** (`mabasian/wienbistro`). `gh` is authenticated as `mabasian`; always create/push there — never under any other account.
- **German copy must be authentic, Wienerisch-flavored Hochdeutsch — never machine-translated.** Use Austrian terms (Melange, Semmel, Topfen, Marille, Mehlspeise, Jause). Modern brunch tone = Du-Form.
- **Speisekarte as HTML, not PDF.** A real, structured, mobile-friendly menu is a core selling point — never regress to a PDF link.
- **Reservation is UI-only** (no backend). Keep it clearly a frontend form; it can later be wired to Resmio/OpenTable/Formspree.
- **Mobile-first & fast.** Sticky "Tisch reservieren" CTA, large touch targets, optimized images. 70%+ of guests are on mobile.
- **Austrian legal reality:** keep Impressum & Datenschutz placeholders present (legally required in AT).
- **Keep the demo re-skinnable:** name, colors, images, and all content should be swappable from central files without touching component logic.
- **Quality gate before shipping:** run `npm run typecheck`, `npm run lint`, `npm run build` — fix all errors before pushing/deploying.
- **Footer must keep the attribution:** "Website-Demo für Gastronomie in Wien by Mabasian (Reza)".

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (`tsc -b && vite build`)
- `npm run typecheck` — TypeScript check, no emit
- `npm run lint` — ESLint
- `npm run preview` — preview built site
