import { Reveal } from './Reveal'
import { openingHours, kitchenNote } from '../content/hours'
import { ClockIcon } from './icons'

function getStatus() {
  const now = new Date()
  const day = now.getDay()
  const today = openingHours.find((d) => d.weekday === day)
  if (!today) return { open: false, today: null as typeof today | null }

  const minutes = now.getHours() * 60 + now.getMinutes()
  const [oh, om] = today.open.split(':').map(Number)
  const [ch, cm] = today.close.split(':').map(Number)
  const open = minutes >= oh * 60 + om && minutes < ch * 60 + cm
  return { open, today }
}

export function Hours() {
  const { open, today } = getStatus()
  const todayWeekday = new Date().getDay()

  return (
    <section id="oeffnungszeiten" className="bg-cream py-20 md:py-28">
      <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div>
            <span className="eyebrow">Öffnungszeiten</span>
            <h2 className="section-title">Wann wir für dich da sind</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-espresso/75">
              Frühstück gibt es bei uns den ganzen Tag. {kitchenNote}.
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
              {open
                ? `Jetzt geöffnet${today ? ` · bis ${today.close} Uhr` : ''}`
                : 'Gerade geschlossen'}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-cream-dark p-6 shadow-sm sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-terracotta">
              <ClockIcon className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Wochenübersicht</span>
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
                      {day.label}
                      {isToday && (
                        <span className="rounded-full bg-terracotta/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-terracotta">
                          Heute
                        </span>
                      )}
                    </span>
                    <span className="text-right">
                      {day.open}–{day.close} Uhr
                      {day.note && (
                        <span className="block text-xs font-normal text-espresso/50">{day.note}</span>
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
