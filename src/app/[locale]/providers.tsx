'use client'

import { MotionProvider } from '@/shared/providers/motion-provider'
import { ThemeProvider } from '@/shared/providers/theme-provider'
import type { PropsWithChildren } from 'react'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <MotionProvider>{children}</MotionProvider>
    </ThemeProvider>
  )
}
