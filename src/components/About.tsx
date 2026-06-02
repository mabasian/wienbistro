import { Reveal } from './Reveal'

const aboutImage =
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=70'

const facts = [
  { value: 'Täglich', label: 'frisch & hausgemacht' },
  { value: 'Bio', label: 'Eier & Milch aus der Region' },
  { value: 'Specialty', label: 'Kaffee von einer Wiener Rösterei' },
]

export function About() {
  return (
    <section id="ueber-uns" className="bg-cream py-20 md:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Barista bei der Zubereitung von Kaffee im WienBistro"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-terracotta px-7 py-5 text-cream shadow-xl sm:block">
              <p className="font-serif text-2xl font-semibold">seit 2019</p>
              <p className="text-sm text-cream/85">im Herzen von Neubau</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="eyebrow">Über uns</span>
            <h2 className="section-title">
              Ein Grätzl-Café, das den Vormittag feiert
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso/80">
              <p>
                Das WienBistro ist aus einer einfachen Idee entstanden: ein Ort, an dem man
                ungezwungen frühstücken, in Ruhe einen guten Kaffee trinken und mittags ehrlich
                essen kann – alles unter einem Dach, alles hausgemacht.
              </p>
              <p>
                Wir verbinden Wiener Kaffeehaus-Tradition mit moderner Brunch-Kultur. Unsere Semmeln
                kommen vom Bäcker ums Eck, die Eier sind bio, der Kaffee stammt von einer kleinen
                Wiener Rösterei. Was bei uns auf den Tisch kommt, machen wir mit Sorgfalt – ohne
                Eile, aber mit Herz.
              </p>
              <p>
                Egal ob früher Espresso, ausgedehnter Wochenend-Brunch oder schnelles Mittagessen:
                Bei uns bist du willkommen, so wie du bist.
              </p>
            </div>

            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-espresso/10 pt-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-serif text-xl font-semibold text-terracotta sm:text-2xl">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-espresso/70 sm:text-sm">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
