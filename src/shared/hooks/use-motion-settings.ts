'use client'

import { useMotionContext } from '@/shared/providers/motion-provider'

export function useMotionSettings() {
  const { preference, setPreference, settings } = useMotionContext()

  return {
    preference,
    setPreference,
    ...settings,
  }
}
