'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'
import { SwissFAQ } from '@/components/sections/swiss/swiss-faq'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissProcessTimeline } from '@/components/sections/swiss/swiss-process-timeline'
import { SwissSolutionComparison } from '@/components/sections/swiss/swiss-solution-comparison'
import { SwissSolutionList } from '@/components/sections/swiss/swiss-solution-list'

export default function SolutionsPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <SwissHeroEnhanced
        variant="solutions"
        eyebrow={t('pages.solutions.hero.eyebrow')}
        headline={t('pages.solutions.hero.headline')}
        headlineHighlight={t('pages.solutions.hero.headlineHighlight')}
        cycleWords={[
          { text: t('pages.solutions.hero.cycleWords.0.text'), className: 'text-cta' },
          { text: t('pages.solutions.hero.cycleWords.1.text'), className: 'text-neon-700' },
          { text: t('pages.solutions.hero.cycleWords.2.text'), className: 'text-pencil-800' },
          { text: t('pages.solutions.hero.cycleWords.3.text'), className: 'text-pencil-700' },
        ]}
        subheadline={t('pages.solutions.hero.subheadline')}
        ctaText={t('pages.solutions.hero.ctaText')}
        ctaHref="#solutions"
      />

      {/* Solutions */}
      <SwissSolutionList />

      {/* Comparison */}
      <SwissSolutionComparison />

      {/* Process */}
      <SwissProcessTimeline />

      {/* FAQs */}
      <SwissFAQ namespace="solutions" />

      {/* CTA */}
      <SwissCTA
        headline={t('pages.solutions.cta.headline')}
        ctaText={t('pages.solutions.cta.ctaText')}
        ctaHref="/contact"
        secondaryText={t('pages.solutions.cta.secondaryText')}
        secondaryHref="/projects"
      />
    </>
  )
}
