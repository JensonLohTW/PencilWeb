'use client'

import { Link } from '@/i18n/routing'

import { Header } from '@/features/marketing/home/components/header/header'
import { useLanguage } from '@/shared/providers/language-provider'

export function NavBar() {
  const { t } = useLanguage()

  return (
    <Header
      utilities={null}
      actions={
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full border border-pencil-900/50 bg-transparent px-5 py-2 text-sm font-medium whitespace-nowrap text-pencil-900 transition-colors hover:border-pencil-900 hover:bg-pencil-900/5 dark:border-white/30 dark:text-white/70 dark:hover:border-white dark:hover:bg-white/10 dark:hover:text-white"
        >
          {t('nav.contact')}
        </Link>
      }
    />
  )
}
