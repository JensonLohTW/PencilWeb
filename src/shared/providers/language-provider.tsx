'use client'

import { STORAGE_KEYS } from '@/shared/config/storage'
import { translate } from '@/shared/i18n/translate'
import { supportedLanguages, type Language } from '@/shared/i18n/types'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: <T = string>(key: string) => T
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'zh-TW',
  setLanguage: () => {},
  t: <T,>(key: string) => key as unknown as T,
})

function isLanguage(value: string): value is Language {
  return (supportedLanguages as readonly string[]).includes(value)
}

function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.languagePreference)
    return stored && isLanguage(stored) ? stored : null
  } catch {
    return null
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(
    () => getStoredLanguage() ?? 'zh-TW',
  )

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    try {
      localStorage.setItem(STORAGE_KEYS.languagePreference, nextLanguage)
    } catch {
      // localStorage may be blocked by browser privacy settings.
    }
  }, [])

  const t = useCallback(
    <T,>(key: string) => translate(language, key) as T,
    [language],
  )

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
