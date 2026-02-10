'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissHomeHero } from '@/components/sections/swiss/swiss-home-hero'
import { SwissHomeSolutions } from '@/components/sections/swiss/swiss-home-solutions'
import { SwissTrustClients } from '@/components/sections/swiss/swiss-trust-clients'
import { SwissHomeProjects } from '@/components/sections/swiss/swiss-home-projects'
import { SwissHomeTech } from '@/components/sections/swiss/swiss-home-tech'
import { SwissFAQ } from '@/components/sections/swiss/swiss-faq'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export default function Page() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <SwissHomeHero
        headline={t('pages.home.hero.headline')}
        subheadline={t('pages.home.hero.subheadline')}
        eyebrow={t('pages.home.hero.eyebrow')}
      />

      {/* Solutions */}
      <SwissHomeSolutions />

      {/* Trust Clients */}
      <SwissTrustClients />

      {/* Projects */}
      <SwissHomeProjects />

      {/* Tech Stack */}
      <SwissHomeTech />

      {/* FAQ */}
      <SwissFAQ />

      {/* CTA */}
      <SwissCTA
        headline={t('pages.home.cta.headline')}
        ctaText={t('pages.home.cta.ctaText')}
        ctaHref="/contact"
        secondaryText={t('pages.home.cta.secondaryText')}
        secondaryHref="/solutions"
      />
    </>
  )
}
