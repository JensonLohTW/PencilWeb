'use client'

import { ButtonLink } from '@/components/elements/button'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { useLanguage } from '@/components/providers/language-provider'
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
                <div className="space-y-8">
                    <h3
                        className="text-pencil-950 dark:text-white"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 700,
                            lineHeight: 1,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {t('footer.cta.title')}
                    </h3>
                    <p className="max-w-md text-pencil-500 dark:text-pencil-400">
                        {t('footer.cta.description')}
                    </p>
                    <ButtonLink
                        href="/contact"
                        className="inline-flex border-2 border-cta bg-cta text-white hover:bg-white hover:text-cta dark:border-white dark:bg-white dark:text-pencil-950 dark:hover:bg-cta dark:hover:border-cta dark:hover:text-white"
                    >
                        {t('nav.contact')} →
                    </ButtonLink>
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
