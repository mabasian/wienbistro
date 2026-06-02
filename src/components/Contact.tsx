'use client'

import { Reveal } from './Reveal'
import { site } from '../content/site'
import { useLang } from '../i18n'
import { ui } from '../i18n/strings'
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon, FacebookIcon } from './icons'

export function Contact() {
  const { t } = useLang()
  return (
    <section id="kontakt" className="bg-cream py-20 md:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t(ui.contactEyebrow)}</span>
          <h2 className="section-title">{t(ui.contactTitle)}</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">{t(ui.contactIntro)}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          <ContactCard
            icon={<PhoneIcon className="h-6 w-6" />}
            title={t(ui.contactPhone)}
            value={site.contact.phone}
            href={site.contact.phoneHref}
          />
          <ContactCard
            icon={<MailIcon className="h-6 w-6" />}
            title={t(ui.contactEmail)}
            value={site.contact.email}
            href={`mailto:${site.contact.email}`}
          />
          <ContactCard
            icon={<PinIcon className="h-6 w-6" />}
            title={t(ui.contactAddress)}
            value={`${site.address.street}, ${site.address.zip} ${site.address.city}`}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-cream transition-colors hover:bg-terracotta"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-cream transition-colors hover:bg-terracotta"
          >
            <FacebookIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex flex-col items-center rounded-2xl bg-cream-dark p-7 text-center shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/15 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream">
        {icon}
      </span>
      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-espresso/55">
        {title}
      </span>
      <span className="mt-1 text-sm font-medium text-espresso">{value}</span>
    </a>
  )
}