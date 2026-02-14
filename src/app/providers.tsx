'use client'

import type { PropsWithChildren } from 'react'
import { LanguageProvider } from '@/shared/providers/language-provider'
import { ThemeProvider } from '@/shared/providers/theme-provider'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
