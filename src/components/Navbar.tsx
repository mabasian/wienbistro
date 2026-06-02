import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { MenuIcon, CloseIcon } from './icons'

const links = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#oeffnungszeiten', label: 'Öffnungszeiten' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#standort', label: 'Standort' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Navbar() {
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
        scrolled || open
          ? 'bg-cream/95 shadow-sm backdrop-blur'
          : 'bg-transparent'
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
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#reservierung" className="btn-primary hidden sm:inline-flex">
            Tisch reservieren
          </a>
          <button
            type="button"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
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
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#reservierung"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Tisch reservieren
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
