'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissQualityAssurance } from '@/components/sections/swiss/swiss-quality-assurance'
import { SwissSystemFlow } from '@/components/sections/swiss/swiss-system-flow'
import { SwissTechArchitecture } from '@/components/sections/swiss/swiss-tech-architecture'
import { SwissTechModules } from '@/components/sections/swiss/swiss-tech-modules'

export default function TechnologyPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <SwissHeroEnhanced
        variant="technology"
        eyebrow={t('pages.technology.hero.eyebrow')}
        headline={t('pages.technology.hero.headline')}
        headlineHighlight={t('pages.technology.hero.headlineHighlight')}
        cycleWords={[
          { text: t('pages.technology.hero.cycleWords.0.text'), className: 'text-cta font-mono tracking-[0.06em]' },
          { text: t('pages.technology.hero.cycleWords.1.text'), className: 'text-pencil-800 font-mono tracking-[0.06em]' },
          { text: t('pages.technology.hero.cycleWords.2.text'), className: 'text-neon-700 font-mono tracking-[0.06em]' },
        ]}
        subheadline={t('pages.technology.hero.subheadline')}
        ctaText={t('pages.technology.hero.ctaText')}
        ctaHref="#tech-modules"
      />

      {/* Tech Modules */}
      <SwissTechModules />

      {/* Architecture */}
      <SwissTechArchitecture />

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
