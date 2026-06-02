'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'de' | 'en'

/** Ein zweisprachiger Wert. Default-Sprache ist immer Deutsch. */
export type Localized = { de: string; en: string }

export const DEFAULT_LANG: Lang = 'de'
const LANG_STORAGE_KEY = 'wienbistro-lang'

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Wählt den passenden Text aus einem Localized-Objekt. */
  t: (value: Localized) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (stored === 'de' || stored === 'en') return stored
  } catch {
    /* localStorage nicht verfügbar */
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    setLangState(getInitialLang())
  }, [])

  // <html lang="…"> synchron halten (a11y & SEO).
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      /* ignorieren */
    }
  }, [])

  const t = useCallback((value: Localized) => value[lang], [lang])

  const ctx = useMemo<LangContextValue>(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

/** Kürzel für Inline-Literale: l('Deutsch', 'German'). */
export function l(de: string, en: string): Localized {
  return { de, en }
}