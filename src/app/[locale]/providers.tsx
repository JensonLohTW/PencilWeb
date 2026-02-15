'use client'

import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@/shared/providers/theme-provider'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
