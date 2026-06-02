'use client'

import { LanguageProvider } from '../src/i18n'

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
