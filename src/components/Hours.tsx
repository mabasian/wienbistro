'use client'

import { Reveal } from './Reveal'
import { openingHours, kitchenNote } from '../content/hours'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'
import { ClockIcon } from './icons'

function getStatus() {
  const now = new Date()
  const day = now.getDay()
  const today = openingHours.find((d) => d.weekday === day) ?? null

  if (!today) return { open: false, today }

  const minutes = now.getHours() * 60 + now.getMinutes()
  const [oh, om] = today.open.split(':').map(Number)
  const [ch, cm] = today.close.split(':').map(Number)
  const open = minutes >= oh * 60 + om && minutes < ch * 60 + cm
  return { open, today }
}

export function Hours() {
  const { t, lang } = useLang()
  const { open, today } = getStatus()
  const todayWeekday = new Date().getDay()

  const statusLabel = open
    ? `${t(ui.hoursOpenNow)}${today ? ` · ${t(ui.hoursUntil)} ${today.close}${lang === 'de' ? ' Uhr' : ''}` : ''}`
    : t(ui.hoursClosed)

  return (
    <section id="oeffnungszeiten" className="bg-cream py-20 md:py-28">
      <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div>
            <span className="eyebrow">{t(ui.hoursEyebrow)}</span>
            <h2 className="section-title">{t(ui.hoursTitle)}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-espresso/75">
              {t(ui.hoursIntroLead)} {t(kitchenNote)}.
            </p>

            <div
              className={`mt-7 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold ${
                open ? 'bg-olive/15 text-olive' : 'bg-espresso/10 text-espresso/70'
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${open ? 'bg-olive' : 'bg-espresso/40'}`}
                aria-hidden
              />
              {statusLabel}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-cream-dark p-6 shadow-sm sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-terracotta">
              <ClockIcon className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">{t(ui.hoursWeekly)}</span>
            </div>
            <ul className="divide-y divide-espresso/10">
              {openingHours.map((day) => {
                const isToday = day.weekday === todayWeekday
                return (
                  <li
                    key={day.weekday}
                    className={`flex items-center justify-between py-3 ${
                      isToday ? 'font-semibold text-espresso' : 'text-espresso/75'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {t(day.label)}
                      {isToday && (
                        <span className="rounded-full bg-terracotta/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-terracotta">
                          {t(ui.hoursToday)}
                        </span>
                      )}
                    </span>
                    <span className="text-right">
                      {day.open}–{day.close}
                      {lang === 'de' ? ' Uhr' : ''}
                      {day.note && (
                        <span className="block text-xs font-normal text-espresso/50">{t(day.note)}</span>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}