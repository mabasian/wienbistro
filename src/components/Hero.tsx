'use client'

import { site } from '../content/site'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'

const heroImage =
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1920&q=70'

export function Hero() {
  const { t } = useLang()
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={t({ de: 'Gemütliches Wiener Café mit Frühstück und Kaffee', en: 'Cosy Viennese café with breakfast and coffee' })}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--grad-hero)' }} />
      </div>

      <div className="container-content relative pt-24 pb-16">
        <div className="max-w-2xl text-cream">
          <p className="mb-4 inline-block animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-light">
            Café · Brunch · Bistro · {t(site.district)}
          </p>
          <h1 className="animate-fade-up font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            {t(site.claim)}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-cream/85 sm:text-lg">
            {t(site.intro)}
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#reservierung" className="btn-primary">
              {t(ui.ctaReserve)}
            </a>
            <a
              href="#speisekarte"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-colors duration-200 hover:bg-cream hover:text-espresso"
            >
              {t(ui.ctaViewMenu)}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-Hinweis */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-cream/60 md:block">
        <span className="text-xs uppercase tracking-[0.2em]">{t(ui.heroDiscover)}</span>
      </div>
    </section>
  )
}