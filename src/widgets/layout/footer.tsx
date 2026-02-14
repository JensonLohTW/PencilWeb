'use client'

import { ButtonLink } from '@/shared/ui/elements/button'
import { footerCategoryLinks } from '@/shared/config/navigation'
import { LinkedInIcon } from '@/shared/ui/icons/social/linkedin-icon'
import { YouTubeIcon } from '@/shared/ui/icons/social/youtube-icon'
import { useLanguage } from '@/shared/providers/language-provider'
import { motion } from 'framer-motion'
import {
    SwissFooter,
    SwissFooterCategory,
    SwissFooterLink,
    SwissSocialLink,
} from '@/features/marketing/sections/swiss/swiss-footer'

export function Footer() {
    const { t } = useLanguage()

    return (
        <SwissFooter
            id="footer"
            cta={
                <div className="relative space-y-10">
                    <h3 className="font-serif text-6xl font-medium leading-[0.9] tracking-tight text-pencil-950 lg:text-8xl dark:text-white">
                        {t('footer.cta.title')}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            className="ml-2 inline-block h-[0.7em] w-[0.15em] bg-cta align-middle"
                        />
                    </h3>
                    <p className="swiss-mono max-w-xl text-lg text-pencil-600 dark:text-pencil-300">
                        {t('footer.cta.description')}
                    </p>
                    <div className="pt-2">
                        <ButtonLink
                            href="/contact"
                            className="group inline-flex items-center gap-3 border-2 border-pencil-950 bg-pencil-950 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-transparent hover:text-pencil-950 dark:border-white dark:bg-white dark:text-pencil-950 dark:hover:bg-transparent dark:hover:text-white"
                        >
                            <span>{t('nav.contact')}</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </ButtonLink>
                    </div>
                </div>
            }
            links={
                <>
                    {footerCategoryLinks.map((category) => (
                        <SwissFooterCategory
                            key={category.index}
                            title={t(category.titleKey)}
                            index={category.index}
                        >
                            {category.links.map((link) => (
                                <SwissFooterLink key={link.href} href={link.href}>
                                    {t(link.labelKey)}
                                </SwissFooterLink>
                            ))}
                        </SwissFooterCategory>
                    ))}
                </>
            }
            fineprint={
                <>
                    <p>{t('footer.location')}</p>
                    <p>{t('footer.rights')}</p>
                </>
            }
            socialLinks={
                <>
                    <SwissSocialLink href="https://www.linkedin.com" name="LinkedIn">
                        <LinkedInIcon />
                    </SwissSocialLink>
                    <SwissSocialLink href="https://www.youtube.com" name="YouTube">
                        <YouTubeIcon />
                    </SwissSocialLink>
                </>
            }
        />
    )
}
