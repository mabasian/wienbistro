import { useState } from 'react'
import { site } from '../content/site'

const navLinks = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#reservierung', label: 'Reservierung' },
  { href: '#oeffnungszeiten', label: 'Öffnungszeiten' },
  { href: '#standort', label: 'Standort' },
  { href: '#kontakt', label: 'Kontakt' },
]

const year = new Date().getFullYear()

export function Footer() {
  const [legal, setLegal] = useState<null | 'impressum' | 'datenschutz'>(null)

  return (
    <footer className="bg-espresso-dark text-cream/80">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-bold text-cream">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/65">{site.claim}</p>
            <p className="mt-4 text-sm text-cream/65">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/70 transition-colors hover:text-terracotta-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.contact.phoneHref} className="text-cream/70 transition-colors hover:text-terracotta-light">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-cream/70 transition-colors hover:text-terracotta-light">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-4 pt-1">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition-colors hover:text-terracotta-light">
                  Instagram
                </a>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition-colors hover:text-terracotta-light">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button type="button" onClick={() => setLegal('impressum')} className="transition-colors hover:text-cream">
              Impressum
            </button>
            <button type="button" onClick={() => setLegal('datenschutz')} className="transition-colors hover:text-cream">
              Datenschutz
            </button>
            <span>© {year} {site.name}</span>
          </div>
          <p className="text-cream/45">
            Website-Demo für Gastronomie in Wien by Mabasian (Reza)
          </p>
        </div>
      </div>

      {legal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso-dark/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegal(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream p-7 text-espresso shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-2xl font-semibold">
                {legal === 'impressum' ? 'Impressum' : 'Datenschutz'}
              </h2>
              <button
                type="button"
                onClick={() => setLegal(null)}
                aria-label="Schließen"
                className="text-2xl leading-none text-espresso/50 hover:text-espresso"
              >
                ×
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-espresso/75">
              <p className="rounded-lg bg-terracotta/10 p-3 text-terracotta-dark">
                Platzhalter – im Kundenprojekt durch die rechtlich korrekten Angaben ersetzen
                (in Österreich gesetzlich verpflichtend).
              </p>
              {legal === 'impressum' ? (
                <>
                  <p>
                    <strong>{site.name}</strong>
                    <br />
                    Musterbetrieb e.U.
                    <br />
                    {site.address.street}, {site.address.zip} {site.address.city}, Österreich
                  </p>
                  <p>
                    Telefon: {site.contact.phone}
                    <br />
                    E-Mail: {site.contact.email}
                  </p>
                  <p>
                    Firmenbuchnummer: FN 000000a · Firmenbuchgericht: Handelsgericht Wien
                    <br />
                    UID: ATU00000000 · Mitglied der WKO Wien
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Der Schutz deiner persönlichen Daten ist uns ein Anliegen. Diese Website ist
                    eine Demo; das Reservierungsformular speichert oder übermittelt keine Daten.
                  </p>
                  <p>
                    In der Live-Version werden eingegebene Daten ausschließlich zur Bearbeitung
                    deiner Reservierung verwendet und nicht an Dritte weitergegeben. Es gelten die
                    Bestimmungen der DSGVO.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
