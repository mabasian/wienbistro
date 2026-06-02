import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { PhoneIcon } from './icons'

/** Persistente Reservierungs-Leiste am unteren Rand – nur mobil, erscheint nach dem Hero. */
export function StickyReserveBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-espresso/10 bg-cream/95 p-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href={site.contact.phoneHref}
          aria-label="Anrufen"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-espresso/20 text-espresso"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <a href="#reservierung" className="btn-primary flex-1">
          Tisch reservieren
        </a>
      </div>
    </div>
  )
}
