'use client'

import { Link } from '@/i18n/routing'


import { LanguageToggle } from '@/shared/ui/elements/language-toggle'
import { ThemeToggle } from '@/shared/ui/elements/theme-toggle'
import { useLanguage } from '@/shared/providers/language-provider'
import { Header } from '@/features/marketing/home/components/header/header'

export function NavBar() {
    const { t } = useLanguage()

    return (
        <Header
            utilities={
                <>
                    <LanguageToggle />
                    <ThemeToggle />
                </>
            }
            actions={
                <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-pencil-900/50 bg-transparent px-5 py-2 text-sm font-medium text-pencil-900 transition-colors hover:border-pencil-900 hover:bg-pencil-900/5 dark:border-white/30 dark:text-white/70 dark:hover:border-white dark:hover:bg-white/10 dark:hover:text-white"
                >
                    {t('nav.contact')}
                </Link>
            }
        />
    )
}
