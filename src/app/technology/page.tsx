'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissTechModules } from '@/components/sections/swiss/swiss-tech-modules'
import { SwissSystemFlow } from '@/components/sections/swiss/swiss-system-flow'
import { SwissQualityAssurance } from '@/components/sections/swiss/swiss-quality-assurance'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export default function TechnologyPage() {
    const { t } = useLanguage()

    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                eyebrow={t('pages.technology.hero.eyebrow')}
                headline={t('pages.technology.hero.headline')}
                headlineHighlight={t('pages.technology.hero.headlineHighlight')}
                cycleWords={[
                    { text: t('pages.technology.hero.cycleWords.0.text'), className: 'text-cta font-serif italic' },
                    { text: t('pages.technology.hero.cycleWords.1.text'), className: 'text-cyan-600 font-mono' },
                    { text: t('pages.technology.hero.cycleWords.2.text'), className: 'text-purple-600' },
                ]}
                subheadline={t('pages.technology.hero.subheadline')}
                ctaText={t('pages.technology.hero.ctaText')}
                ctaHref="#tech-modules"
            />

            {/* Tech Modules */}
            <SwissTechModules />

            {/* System Integration Flow */}
            <SwissSystemFlow />

            {/* Quality Assurance */}
            <SwissQualityAssurance />

            {/* CTA */}
            <SwissCTA
                headline={t('pages.technology.cta.headline')}
                ctaText={t('pages.technology.cta.ctaText')}
                ctaHref="/contact"
                secondaryText={t('pages.technology.cta.secondaryText')}
                secondaryHref="/solutions"
            />
        </>
    )
}
