'use client'

import { Reveal } from './Reveal'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'

const aboutImage =
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=70'

export function About() {
  const { t } = useLang()
  const facts = [
    { value: t(ui.factDaily), label: t(ui.factDailyLabel) },
    { value: t(ui.factOrganic), label: t(ui.factOrganicLabel) },
    { value: t(ui.factSpecialty), label: t(ui.factSpecialtyLabel) },
  ]

  return (
    <section id="ueber-uns" className="bg-cream py-20 md:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt={t({ de: 'Barista bei der Zubereitung von Kaffee im WienBistro', en: 'Barista preparing coffee at WienBistro' })}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-terracotta px-7 py-5 text-cream shadow-xl sm:block">
              <p className="font-serif text-2xl font-semibold">{t(ui.aboutBadgeSince)}</p>
              <p className="text-sm text-cream/85">{t(ui.aboutBadgeHeart)}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="eyebrow">{t(ui.aboutEyebrow)}</span>
            <h2 className="section-title">{t(ui.aboutTitle)}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso/80">
              <p>{t(ui.aboutP1)}</p>
              <p>{t(ui.aboutP2)}</p>
              <p>{t(ui.aboutP3)}</p>
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