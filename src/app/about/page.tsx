'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissAboutValues } from '@/components/sections/swiss/swiss-about-values'
import { SwissCompanyInfo } from '@/components/sections/swiss/swiss-company-info'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissStatsGrid } from '@/components/sections/swiss/swiss-stats-grid'
import { SwissTeamPartners } from '@/components/sections/swiss/swiss-team-partners'
import { SwissTimeline } from '@/components/sections/swiss/swiss-timeline'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <SwissHeroEnhanced
        variant="about"
        eyebrow={t('pages.about.hero.eyebrow')}
        headline={t('pages.about.hero.headline')}
        headlineHighlight={t('pages.about.hero.headlineHighlight')}
        cycleWords={[
          { text: t('pages.about.hero.cycleWords.0.text'), className: 'text-cta' },
          { text: t('pages.about.hero.cycleWords.1.text'), className: 'text-pencil-800' },
          { text: t('pages.about.hero.cycleWords.2.text'), className: 'text-neon-700' },
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

      {/* Values */}
      <SwissAboutValues />

      {/* Timeline */}
      <SwissTimeline />

      {/* Company Info */}
      <SwissCompanyInfo />

      {/* Team & Partners */}
      <SwissTeamPartners />

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
