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
                    className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm font-medium border border-pencil-900/50 dark:border-white/30 bg-transparent px-5 py-2 text-pencil-900 dark:text-white/70 transition-colors hover:border-pencil-900 dark:hover:border-white dark:hover:text-white hover:bg-pencil-900/5 dark:hover:bg-white/10"
                >
                    {t('nav.contact')}
                </Link>
            }
        />
    )
}
