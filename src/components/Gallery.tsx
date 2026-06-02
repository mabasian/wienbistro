'use client'

import { Reveal } from './Reveal'
import { gallery } from '../content/gallery'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'

export function Gallery() {
  const { t } = useLang()
  return (
    <section id="galerie" className="bg-cream py-20 md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t(ui.galleryEyebrow)}</span>
          <h2 className="section-title">{t(ui.galleryTitle)}</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">{t(ui.galleryIntro)}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 4) * 80}
              className={i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}
            >
              <div className="group h-full overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={t(image.alt)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}