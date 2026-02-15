'use client'

import { Link } from '@/i18n/routing'

import { primaryNavigationLinks } from '@/shared/config/navigation'
import { LanguageToggle } from '@/shared/ui/elements/language-toggle'
import { ThemeToggle } from '@/shared/ui/elements/theme-toggle'
import { useLanguage } from '@/shared/providers/language-provider'
import {
    SwissNavbar,
    SwissNavbarLink,
    SwissNavbarLogo,
} from '@/features/marketing/sections/swiss/swiss-navbar'

export function NavBar() {
    const { t } = useLanguage()

    return (
        <SwissNavbar
            id="navbar"
            links={
                <>
                    {primaryNavigationLinks.map((item) => (
                        <SwissNavbarLink
                            key={item.href}
                            href={item.href}
                            index={item.index}
                            className={item.className}
                        >
                            {t(item.labelKey)}
                        </SwissNavbarLink>
                    ))}
                </>
            }
            logo={<SwissNavbarLogo href="/" />}
            utilities={
                <>
                    <LanguageToggle />
                    <ThemeToggle />
                </>
            }
            actions={
                <>
                    {/* Contact Link Removed */}
                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm/7 font-medium w-full border-2 border-cta bg-cta text-white transition-colors hover:bg-white hover:text-cta lg:w-auto dark:border-white dark:bg-white dark:text-pencil-950 dark:hover:border-cta dark:hover:bg-cta dark:hover:text-white"
                    >
                        {t('nav.contact')}
                    </Link>
                </>
            }
        />
    )
}
