'use client'

/* =========================================================================
 *  DEMO-/PRÄSENTATIONS-WERKZEUG – NICHT TEIL DER KUNDEN-VERSION.
 *  Floating-Button zum Live-Wechsel zwischen den 5 Premium-Themes.
 *
 *  ▸ ENTFERNEN für die Auslieferung:
 *      1. Diese Datei löschen (src/components/ThemeSwitcher.tsx)
 *      2. Import & <ThemeSwitcher /> aus app/page.tsx entfernen
 *      (Die Themes selbst bleiben in app/globals.css; das gewünschte Theme
 *       wird dann fix über data-theme am <html> in app/layout.tsx gesetzt.)
 * ========================================================================= */
import { useEffect, useState } from 'react'
import { themes, DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeId } from '../content/themes'

function applyTheme(id: ThemeId) {
  document.documentElement.setAttribute('data-theme', id)
}

function getInitialTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null
    if (stored && themes.some((t) => t.id === stored)) return stored
  } catch {
    /* localStorage nicht verfügbar – Default verwenden */
  }
  return DEFAULT_THEME
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<ThemeId>(DEFAULT_THEME)

  // Initiales Theme anwenden (vor erster Interaktion).
  useEffect(() => {
    const initial = getInitialTheme()
    setActive(initial)
    applyTheme(initial)
  }, [])

  const choose = (id: ThemeId) => {
    setActive(id)
    applyTheme(id)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id)
    } catch {
      /* ignorieren */
    }
  }

  return (
    <div className="fixed bottom-5 left-5 z-[70] print:hidden">
      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Theme-Auswahl (Demo)"
          className="mb-3 w-72 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl ring-1 ring-black/5"
        >
          <div className="flex items-center justify-between gap-2 border-b border-black/5 bg-neutral-50 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-neutral-800">Theme-Vorschau</p>
              <p className="text-[11px] uppercase tracking-wide text-neutral-400">
                Demo-Werkzeug · nicht in der Live-Version
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="text-xl leading-none text-neutral-400 transition-colors hover:text-neutral-700"
            >
              ×
            </button>
          </div>

          <ul className="max-h-[60vh] overflow-y-auto p-2">
            {themes.map((theme) => {
              const isActive = theme.id === active
              return (
                <li key={theme.id}>
                  <button
                    type="button"
                    onClick={() => choose(theme.id)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      isActive ? 'bg-neutral-100 ring-1 ring-black/10' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <span className="flex shrink-0 overflow-hidden rounded-full border border-black/10 shadow-sm">
                      {theme.swatches.map((color) => (
                        <span
                          key={color}
                          className="h-7 w-3.5"
                          style={{ backgroundColor: color }}
                          aria-hidden
                        />
                      ))}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-neutral-800">
                        {theme.name}
                      </span>
                      <span className="block truncate text-xs text-neutral-500">{theme.mood}</span>
                    </span>
                    {isActive && (
                      <span className="shrink-0 text-base text-neutral-700" aria-hidden>
                        ✓
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {/* Floating-Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Theme-Auswahl schließen' : 'Theme-Auswahl öffnen (Demo)'}
        aria-expanded={open}
        className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-800 shadow-xl ring-1 ring-black/5 backdrop-blur transition-transform hover:scale-[1.03] active:scale-95"
      >
        <PaletteIcon className="h-5 w-5 text-neutral-700" />
        <span className="hidden sm:inline">Theme</span>
        <span className="rounded-full bg-neutral-800 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
          Demo
        </span>
      </button>
    </div>
  )
}

function PaletteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.5 1.8-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <circle cx="16.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  )
}