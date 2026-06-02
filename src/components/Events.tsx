'use client'

import { Reveal } from './Reveal'
import { events } from '../content/events'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'

export function Events() {
  const { t } = useLang()
  return (
    <section id="events" className="bg-cream-dark py-20 md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t(ui.eventsEyebrow)}</span>
          <h2 className="section-title">{t(ui.eventsTitle)}</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">{t(ui.eventsIntro)}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={t(event.title)} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl bg-cream p-7 shadow-sm">
                <span className="self-start rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
                  {t(event.badge)}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-espresso">
                  {t(event.title)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/75">
                  {t(event.description)}
                </p>
                <p className="mt-5 border-t border-espresso/10 pt-4 text-sm font-semibold text-espresso/80">
                  {t(event.when)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}