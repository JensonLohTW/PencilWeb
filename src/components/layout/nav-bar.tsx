'use client'

import Link from 'next/link'
import { ButtonLink } from '@/components/elements/button'
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
                    <Link
                        href="/contact"
                        className="hidden text-sm font-medium text-pencil-600 transition-colors hover:text-pencil-950 lg:block dark:text-pencil-400 dark:hover:text-white"
                    >
                        {t('nav.contact')}
                    </Link>
                    <ButtonLink
                        href="/contact"
                        className="w-full justify-center border-2 border-pencil-950 bg-pencil-950 text-white hover:bg-cta hover:border-cta lg:w-auto dark:border-white dark:bg-white dark:text-pencil-950 dark:hover:bg-cta dark:hover:border-cta"
                    >
                        {t('nav.demo')}
                    </ButtonLink>
                </>
            }
        />
    )
}
