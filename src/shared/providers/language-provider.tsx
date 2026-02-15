'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useCallback } from 'react'
import type { Language } from '@/shared/i18n/types'

export function useLanguage() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()

  const setLanguage = useCallback(
    (nextLanguage: Language) => {
      router.replace(pathname, { locale: nextLanguage })
    },
    [pathname, router]
  )

  const translate = useCallback(
    <T = string>(key: string) => {
      return t.raw(key) as T
    },
    [t]
  )

  return {
    language: locale as Language,
    setLanguage,
    t: translate,
  }
}

// Deprecated: No longer needed with NextIntlClientProvider
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
