'use client'

import Link from 'next/link'

import { LanguageToggle } from '@/components/elements/language-toggle'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { useLanguage } from '@/components/providers/language-provider'
import {
    SwissNavbar,
    SwissNavbarLink,
    SwissNavbarLogo,
} from '@/components/sections/swiss/swiss-navbar'

export function NavBar() {
    const { t } = useLanguage()

    return (
        <SwissNavbar
            id="navbar"
            links={
                <>
                    <SwissNavbarLink href="/solutions" index="01">
                        {t('nav.solutions')}
                    </SwissNavbarLink>
                    <SwissNavbarLink href="/projects" index="02">
                        {t('nav.projects')}
                    </SwissNavbarLink>
                    <SwissNavbarLink href="/technology" index="03">
                        {t('nav.technology')}
                    </SwissNavbarLink>
                    <SwissNavbarLink href="/about" index="04">
                        {t('nav.about')}
                    </SwissNavbarLink>
                    <SwissNavbarLink href="/contact" index="05" className="sm:hidden">
                        {t('nav.contact')}
                    </SwissNavbarLink>
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
