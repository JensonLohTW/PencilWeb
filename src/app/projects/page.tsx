'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissCapabilityGrid } from '@/components/sections/swiss/swiss-capability-grid'
import { SwissCooperationModes } from '@/components/sections/swiss/swiss-cooperation-modes'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissProjectList } from '@/components/sections/swiss/swiss-project-list'
import { SwissProjectShowcase } from '@/components/sections/swiss/swiss-project-showcase'

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
