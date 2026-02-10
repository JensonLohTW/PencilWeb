'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissSolutionList } from '@/components/sections/swiss/swiss-solution-list'
import { SwissProcessTimeline } from '@/components/sections/swiss/swiss-process-timeline'
import { SwissFAQ } from '@/components/sections/swiss/swiss-faq'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export default function SolutionsPage() {
    const { t } = useLanguage()

    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                eyebrow={t('pages.solutions.hero.eyebrow')}
                headline={t('pages.solutions.hero.headline')}
                headlineHighlight={t('pages.solutions.hero.headlineHighlight')}
                cycleWords={[
                    { text: t('pages.solutions.hero.cycleWords.0.text'), className: 'text-cta' },
                    { text: t('pages.solutions.hero.cycleWords.1.text'), className: 'text-cyan-600' },
                    { text: t('pages.solutions.hero.cycleWords.2.text'), className: 'text-purple-600' },
                    { text: t('pages.solutions.hero.cycleWords.3.text'), className: 'text-emerald-600' },
                ]}
                subheadline={t('pages.solutions.hero.subheadline')}
                ctaText={t('pages.solutions.hero.ctaText')}
                ctaHref="#solutions"
            />

            {/* Solutions */}
            <SwissSolutionList />

            {/* Process */}
            <SwissProcessTimeline />

            {/* FAQs */}
            <SwissFAQ />

            {/* CTA */}
            <SwissCTA
                headline={t('pages.solutions.cta.headline')}
                ctaText={t('pages.solutions.cta.ctaText')}
                ctaHref="/contact"
                secondaryText={t('pages.solutions.cta.secondaryText')}
                secondaryHref="/contact"
            />
        </>
    )
}
