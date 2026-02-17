'use client'

import { Link } from '@/i18n/routing'


import { LanguageToggle } from '@/shared/ui/elements/language-toggle'
import { MotionToggle } from '@/shared/ui/elements/motion-toggle'
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
                    <MotionToggle />
                    <ThemeToggle />
                </>
            }
            actions={
                <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm/7 font-medium w-full border-2 border-cta bg-cta text-white transition-colors hover:bg-white hover:text-cta lg:w-auto dark:border-white dark:bg-white dark:text-pencil-950 dark:hover:border-cta dark:hover:bg-cta dark:hover:text-white"
                >
                    {t('nav.contact')}
                </Link>
            }
        />
    )
}
