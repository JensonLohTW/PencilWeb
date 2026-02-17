'use client'

import {
  MOTION_DEFAULT_PREFERENCE,
  type MotionPreference,
  type MotionSettings,
} from '@/shared/config/motion'
import { STORAGE_KEYS } from '@/shared/config/storage'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface MotionContextValue {
  preference: MotionPreference
  setPreference: (preference: MotionPreference) => void
  settings: MotionSettings
}

const MotionContext = createContext<MotionContextValue>({
  preference: MOTION_DEFAULT_PREFERENCE,
  setPreference: () => {},
  settings: {
    enabled: true,
    reduced: false,
    particles: true,
    cursor: true,
    transitions: true,
  },
})

function getStoredPreference(): MotionPreference | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.motionPreference)
    if (stored === 'system' || stored === 'on' || stored === 'off') {
      return stored
    }
  } catch {
    return null
  }

  return null
}

function getSystemReducedMotion() {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<MotionPreference>(
    () => getStoredPreference() ?? MOTION_DEFAULT_PREFERENCE,
  )
  const [systemReduced, setSystemReduced] = useState<boolean>(getSystemReducedMotion)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => {
      setSystemReduced(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const setPreference = useCallback((nextPreference: MotionPreference) => {
    setPreferenceState(nextPreference)
    try {
      localStorage.setItem(STORAGE_KEYS.motionPreference, nextPreference)
    } catch {
      // localStorage may be unavailable due to browser privacy settings.
    }
  }, [])

  const settings = useMemo<MotionSettings>(() => {
    const reduced =
      preference === 'off' || (preference === 'system' && systemReduced)
    const enabled = !reduced

    return {
      enabled,
      reduced,
      particles: enabled,
      cursor: enabled,
      transitions: enabled,
    }
  }, [preference, systemReduced])

  const value = useMemo(
    () => ({
      preference,
      setPreference,
      settings,
    }),
    [preference, setPreference, settings],
  )

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  )
}

export function useMotionContext() {
  return useContext(MotionContext)
}
