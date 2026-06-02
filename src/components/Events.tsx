import { Reveal } from './Reveal'
import { events } from '../content/events'

export function Events() {
  return (
    <section id="events" className="bg-cream-dark py-20 md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Events & Specials</span>
          <h2 className="section-title">Immer einen Besuch wert</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            Ob Wochenend-Brunch, saisonale Spezialitäten oder unsere Kaffee-Verkostung – bei uns
            ist immer etwas los.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl bg-cream p-7 shadow-sm">
                <span className="self-start rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
                  {event.badge}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-espresso">
                  {event.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/75">
                  {event.description}
                </p>
                <p className="mt-5 border-t border-espresso/10 pt-4 text-sm font-semibold text-espresso/80">
                  {event.when}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
