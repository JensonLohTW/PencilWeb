'use client'

import { TechnologyArchitectureSection } from '@/features/marketing/technology/components/technology-architecture-section'
import { TechnologyCtaSection } from '@/features/marketing/technology/components/technology-cta-section'
import { TechnologyFlowSection } from '@/features/marketing/technology/components/technology-flow-section'
import { TechnologyHeroSection } from '@/features/marketing/technology/components/technology-hero-section'
import { TechnologyModulesSection } from '@/features/marketing/technology/components/technology-modules-section'
import { TechnologyOverviewSection } from '@/features/marketing/technology/components/technology-overview-section'
import { TechnologyReliabilitySection } from '@/features/marketing/technology/components/technology-reliability-section'
import { buildTechnologyTemplateContent } from '@/features/marketing/technology/content/build-technology-template-content'
import { useLanguage } from '@/shared/providers/language-provider'

export default function TechnologyPage() {
  const { t } = useLanguage()
  const content = buildTechnologyTemplateContent(t)

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-pencil-950">
      <TechnologyHeroSection hero={content.hero} />
      <TechnologyOverviewSection overview={content.overview} />
      <TechnologyModulesSection modules={content.modules} />
      <TechnologyArchitectureSection architecture={content.architecture} />
      <TechnologyFlowSection flow={content.flow} />
      <TechnologyReliabilitySection reliability={content.reliability} />
      <TechnologyCtaSection cta={content.cta} />
    </div>
  )
}
