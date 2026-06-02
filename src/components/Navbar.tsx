'use client'

import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { useLang, type Localized } from '../i18n'
import { ui } from '../i18n/strings'
import { MenuIcon, CloseIcon } from './icons'

const links: { href: string; label: Localized }[] = [
  { href: '#ueber-uns', label: ui.navAbout },
  { href: '#speisekarte', label: ui.navMenu },
  { href: '#oeffnungszeiten', label: ui.navHours },
  { href: '#galerie', label: ui.navGallery },
  { href: '#standort', label: ui.navLocation },
  { href: '#kontakt', label: ui.navContact },
]

function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`inline-flex items-center rounded-full border border-espresso/20 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Sprache / Language"
    >
      {(['de', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code ? 'bg-espresso text-cream' : 'text-espresso/70 hover:text-espresso'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body-Scroll sperren, wenn das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between md:h-20">
        <a
          href="#hero"
          className="font-serif text-xl font-bold tracking-tight text-espresso md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-espresso/80 transition-colors hover:text-terracotta"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle className="hidden sm:inline-flex" />
          <a href="#reservierung" className="btn-primary hidden sm:inline-flex">
            {t(ui.ctaReserve)}
          </a>
          <button
            type="button"
            aria-label={open ? t(ui.closeMenuAria) : t(ui.openMenuAria)}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5 lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobiles Menü */}
      {open && (
        <div className="border-t border-espresso/10 bg-cream/98 backdrop-blur lg:hidden">
          <ul className="container-content flex flex-col py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-espresso/90 transition-colors hover:text-terracotta"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 pt-3">
              <LangToggle />
              <a href="#reservierung" onClick={() => setOpen(false)} className="btn-primary flex-1">
                {t(ui.ctaReserve)}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}