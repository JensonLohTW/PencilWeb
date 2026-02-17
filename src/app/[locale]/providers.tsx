'use client'

import type { PropsWithChildren } from 'react'
import { MotionProvider } from '@/shared/providers/motion-provider'
import { ThemeProvider } from '@/shared/providers/theme-provider'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <MotionProvider>{children}</MotionProvider>
    </ThemeProvider>
  )
}
