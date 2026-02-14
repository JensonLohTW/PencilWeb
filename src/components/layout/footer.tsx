'use client'

import { ButtonLink } from '@/components/elements/button'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'
import {
    SwissFooter,
    SwissFooterCategory,
    SwissFooterLink,
    SwissSocialLink,
} from '@/components/sections/swiss/swiss-footer'

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
                    <SwissFooterCategory title={t('footer.solutions.title')} index="01">
                        <SwissFooterLink href="/solutions#xr-training">
                            {t('footer.solutions.xr')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/solutions#ar-visualization">
                            {t('footer.solutions.ar')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/solutions#smart-space">
                            {t('footer.solutions.iot')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/solutions#ai-for-sme">
                            {t('footer.solutions.ai')}
                        </SwissFooterLink>
                    </SwissFooterCategory>
                    <SwissFooterCategory title={t('footer.projects.title')} index="02">
                        <SwissFooterLink href="/projects#flight-simulator">
                            {t('footer.projects.simulator')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/projects#flight-training">
                            {t('footer.projects.training')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/projects#data-integration">
                            {t('footer.projects.integration')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/projects#ai-agent">
                            {t('footer.projects.agent')}
                        </SwissFooterLink>
                    </SwissFooterCategory>
                    <SwissFooterCategory title={t('footer.companyCategory')} index="03">
                        <SwissFooterLink href="/about">
                            {t('nav.about')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/technology">
                            {t('nav.technology')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/contact">
                            {t('nav.contact')}
                        </SwissFooterLink>
                    </SwissFooterCategory>
                    <SwissFooterCategory title={t('footer.legal')} index="04">
                        <SwissFooterLink href="/privacy-policy">
                            {t('footer.links.privacy')}
                        </SwissFooterLink>
                        <SwissFooterLink href="/terms">
                            {t('footer.links.terms')}
                        </SwissFooterLink>
                    </SwissFooterCategory>
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
