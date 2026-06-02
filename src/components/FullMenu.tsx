'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'
import { menu } from '../content/menu'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'

export function FullMenu() {
  const { t } = useLang()
  const [active, setActive] = useState(menu[0].id)

  return (
    <section id="karte" className="bg-espresso py-20 text-cream md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
            {t(ui.menuEyebrow)}
          </span>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
            {t(ui.menuTitle)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70">{t(ui.menuIntro)}</p>
        </Reveal>

        {/* Kategorie-Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {menu.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === category.id
                  ? 'bg-terracotta text-cream'
                  : 'bg-cream/10 text-cream/80 hover:bg-cream/20'
              }`}
            >
              {t(category.title)}
            </button>
          ))}
        </div>

        {/* Alle Kategorien sind im DOM (gut für SEO) – inaktive werden ausgeblendet. */}
        <div className="mx-auto mt-12 max-w-3xl">
          {menu.map((category) => (
              <div
                key={category.id}
                id={`karte-${category.id}`}
                className={`scroll-mt-28 ${category.id === active ? '' : 'hidden'}`}
              >
                <p className="mb-8 text-center text-sm italic text-cream/60">{t(category.blurb)}</p>
                <ul className="divide-y divide-cream/10">
                  {category.items.map((item) => (
                    <li key={t(item.name)} className="flex gap-4 py-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="font-serif text-lg font-semibold text-cream">
                            {t(item.name)}
                          </h3>
                          {item.tags?.map((tag) => (
                            <span
                              key={t(tag)}
                              className="rounded-full bg-olive/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-cream/80"
                            >
                              {t(tag)}
                            </span>
                          ))}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-sm leading-relaxed text-cream/65">
                            {t(item.description)}
                          </p>
                        )}
                      </div>
                      <div className="whitespace-nowrap pt-0.5 font-serif text-lg font-semibold text-terracotta-light">
                        {item.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#reservierung" className="btn-primary">
            {t(ui.ctaReserve)}
          </a>
        </div>
      </div>
    </section>
  )
}