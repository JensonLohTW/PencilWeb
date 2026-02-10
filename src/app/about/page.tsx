'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissStatsGrid } from '@/components/sections/swiss/swiss-stats-grid'
import { SwissTimeline } from '@/components/sections/swiss/swiss-timeline'
import { SwissCompanyInfo } from '@/components/sections/swiss/swiss-company-info'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <SwissHeroEnhanced
        eyebrow={t('pages.about.hero.eyebrow')}
        headline={t('pages.about.hero.headline')}
        headlineHighlight={t('pages.about.hero.headlineHighlight')}
        cycleWords={[
          { text: t('pages.about.hero.cycleWords.0.text'), className: 'text-cta font-mono tracking-widest' },
          { text: t('pages.about.hero.cycleWords.1.text'), className: 'text-purple-600 font-serif italic' },
          { text: t('pages.about.hero.cycleWords.2.text'), className: 'text-emerald-600 font-bold' },
        ]}
        subheadline={t('pages.about.hero.subheadline')}
        ctaText={t('pages.about.hero.ctaText')}
        ctaHref="#stats"
        centered
      />

      {/* Stats */}
      <div id="stats">
        <SwissStatsGrid />
      </div>

      {/* Timeline */}
      <SwissTimeline />

      {/* Company Info */}
      <SwissCompanyInfo />

      {/* CTA */}
      <SwissCTA
        headline={t('pages.about.cta.headline')}
        ctaText={t('pages.about.cta.ctaText')}
        ctaHref="/contact"
        secondaryText={t('pages.about.cta.secondaryText')}
        secondaryHref="/projects"
      />
    </>
  )
}
