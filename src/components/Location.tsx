import { Reveal } from './Reveal'
import { site } from '../content/site'
import { PinIcon } from './icons'

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery,
)}`

export function Location() {
  return (
    <section id="standort" className="bg-cream-dark py-20 md:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Standort</span>
          <h2 className="section-title">So findest du uns</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            Mitten in {site.district} – gut erreichbar mit den Öffis und zu Fuß vom
            Spittelberg in wenigen Minuten.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Karten-Card (Platzhalter, verlinkt auf Google Maps) */}
          <Reveal className="lg:col-span-3">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-72 overflow-hidden rounded-2xl shadow-sm sm:h-96 lg:h-full"
              aria-label="Auf Google Maps öffnen"
            >
              {/* Stilisierte Karten-Optik */}
              <div className="absolute inset-0 bg-[#E7E2D8]" />
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    'linear-gradient(#d6cdbd 1px, transparent 1px), linear-gradient(90deg, #d6cdbd 1px, transparent 1px)',
                  backgroundSize: '44px 44px',
                }}
              />
              <div className="absolute left-1/4 top-0 h-full w-6 -rotate-12 bg-[#cdb5a0]/60" />
              <div className="absolute left-0 top-1/2 h-7 w-full bg-terracotta/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <PinIcon className="h-7 w-7" />
                </span>
                <span className="mt-3 rounded-full bg-cream/90 px-4 py-1.5 text-sm font-semibold text-espresso shadow">
                  {site.address.street}, {site.address.zip} {site.address.city}
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-wide text-espresso/60">
                  Auf Google Maps öffnen →
                </span>
              </div>
            </a>
          </Reveal>

          {/* Info-Karten */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl bg-cream p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-espresso">Adresse</h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/75">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}, {site.address.countryHint}
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-espresso">Öffentliche Anreise</h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/75">{site.transit}</p>
              </div>
              <div className="rounded-2xl bg-espresso p-6 text-cream shadow-sm">
                <h3 className="font-serif text-lg font-semibold">Gut zu wissen</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  Barrierefrei zugänglich · WLAN für Gäste · hundefreundlich · Kinderstühle vorhanden.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
