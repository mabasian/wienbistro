'use client'

import { Reveal } from './Reveal'
import { menu } from '../content/menu'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'

const images: Record<string, string> = {
  fruehstueck:
    'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=70',
  kaffee:
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=70',
  mittag:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=70',
  desserts:
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=70',
}

export function MenuPreview() {
  const { t } = useLang()
  return (
    <section id="speisekarte" className="bg-cream-dark py-20 md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t(ui.previewEyebrow)}</span>
          <h2 className="section-title">{t(ui.previewTitle)}</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">{t(ui.previewIntro)}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((category, i) => (
            <Reveal key={category.id} delay={i * 90}>
              <a
                href="#karte"
                className="group block h-full overflow-hidden rounded-2xl bg-cream shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={images[category.id]}
                    alt={t(category.title)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-espresso">
                    {t(category.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/70">
                    {t(category.blurb)}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-terracotta">
                    {t(ui.previewView)}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}