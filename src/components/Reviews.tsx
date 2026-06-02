import { Reveal } from './Reveal'
import { testimonials } from '../content/testimonials'
import { StarIcon } from './icons'

export function Reviews() {
  return (
    <section className="bg-espresso py-20 text-cream md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
            Bewertungen
          </span>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
            Was unsere Gäste sagen
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-terracotta-light">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
            <span className="ml-2 text-sm text-cream/70">4,9 von 5 · über 320 Bewertungen</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 100}>
              <figure className="flex h-full flex-col rounded-2xl bg-cream/5 p-7 ring-1 ring-cream/10">
                <div className="flex gap-1 text-terracotta-light">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-cream/90">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-cream">{t.author}</span>
                  <span className="text-cream/55"> · {t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
