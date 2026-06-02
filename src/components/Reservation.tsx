import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'
import { site } from '../content/site'
import { PhoneIcon } from './icons'

const guestOptions = ['1 Person', '2 Personen', '3 Personen', '4 Personen', '5 Personen', '6+ Personen']
const timeOptions = ['08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:00']

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo: keine Backend-Anbindung. Hier später Resmio/OpenTable/Formspree einbinden.
    setSubmitted(true)
  }

  return (
    <section id="reservierung" className="bg-terracotta py-20 text-cream md:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
              Reservierung
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
              Sichere dir deinen Tisch
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/85">
              Besonders am Wochenende zum Brunch wird es bei uns gern voll. Reserviere am besten
              vorab – wir freuen uns auf dich. Für größere Gruppen ab 7 Personen oder kurzfristige
              Anfragen ruf uns einfach an.
            </p>
            <a
              href={site.contact.phoneHref}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-cream/15 px-5 py-3 text-sm font-semibold transition-colors hover:bg-cream/25"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.contact.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-cream p-6 text-espresso shadow-xl sm:p-8">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-olive/15 text-3xl">
                  ✓
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">Danke für deine Anfrage!</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/70">
                  Dies ist eine Demo-Reservierung ohne tatsächliche Buchung. In der Live-Version
                  bestätigen wir deinen Tisch per E-Mail innerhalb weniger Stunden.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-terracotta hover:text-terracotta-dark"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Datum" htmlFor="res-date">
                    <input id="res-date" name="date" type="date" required className="form-input" />
                  </Field>
                  <Field label="Uhrzeit" htmlFor="res-time">
                    <select id="res-time" name="time" required defaultValue="" className="form-input">
                      <option value="" disabled>
                        Bitte wählen
                      </option>
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>
                          {t} Uhr
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Personen" htmlFor="res-guests">
                  <select id="res-guests" name="guests" required defaultValue="" className="form-input">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" htmlFor="res-name">
                    <input
                      id="res-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Vor- und Nachname"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Telefon" htmlFor="res-phone">
                    <input
                      id="res-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+43 …"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="E-Mail" htmlFor="res-email">
                  <input
                    id="res-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="du@beispiel.at"
                    className="form-input"
                  />
                </Field>

                <Field label="Anmerkung (optional)" htmlFor="res-note">
                  <textarea
                    id="res-note"
                    name="note"
                    rows={2}
                    placeholder="Kinderstuhl, Allergien, besonderer Anlass …"
                    className="form-input resize-none"
                  />
                </Field>

                <button type="submit" className="btn-primary w-full">
                  Reservierung anfragen
                </button>
                <p className="text-center text-xs text-espresso/50">
                  Demo-Formular – es werden keine Daten gespeichert oder gesendet.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-espresso/60">
        {label}
      </span>
      {children}
    </label>
  )
}
