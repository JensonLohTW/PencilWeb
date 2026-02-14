'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { SwissCapabilityGrid } from '@/features/marketing/sections/swiss/swiss-capability-grid'
import { SwissCooperationModes } from '@/features/marketing/sections/swiss/swiss-cooperation-modes'
import { SwissCTA } from '@/features/marketing/sections/swiss/swiss-cta'
import { SwissHeroEnhanced } from '@/features/marketing/sections/swiss/swiss-hero-enhanced'
import { SwissProjectList } from '@/features/marketing/sections/swiss/swiss-project-list'
import { SwissProjectShowcase } from '@/features/marketing/sections/swiss/swiss-project-showcase'

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <SwissHeroEnhanced
        variant="projects"
        headline={t('pages.projects.hero.headline')}
        headlineHighlight={t('pages.projects.hero.headlineHighlight')}
        headlineSuffix={t('pages.projects.hero.headlineSuffix')}
        cycleWords={[
          { text: t('pages.projects.hero.cycleWords.0.text'), className: 'text-cta' },
          { text: t('pages.projects.hero.cycleWords.1.text'), className: 'text-pencil-800' },
          { text: t('pages.projects.hero.cycleWords.2.text'), className: 'text-neon-700' },
        ]}
        subheadline={t('pages.projects.hero.subheadline')}
        ctaText={t('pages.projects.hero.ctaText')}
        ctaHref="#projects"
      />

      {/* Showcase */}
      <SwissProjectShowcase />

      {/* Projects */}
      <SwissProjectList />

      {/* Capabilities */}
      <SwissCapabilityGrid />

      {/* Cooperation */}
      <SwissCooperationModes />

      {/* CTA */}
      <SwissCTA
        headline={t('pages.projects.cta.headline')}
        ctaText={t('pages.projects.cta.ctaText')}
        ctaHref="/contact"
        secondaryText={t('pages.projects.cta.secondaryText')}
        secondaryHref="/contact"
      />
    </>
  )
}
