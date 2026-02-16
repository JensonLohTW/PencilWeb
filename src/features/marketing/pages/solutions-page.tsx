'use client'

import { SolutionsCtaSection } from '@/features/marketing/solutions/components/solutions-cta-section'
import { SolutionsFaqSection } from '@/features/marketing/solutions/components/solutions-faq-section'
import { SolutionsFeatureSection } from '@/features/marketing/solutions/components/solutions-feature-section'
import { SolutionsHeroSection } from '@/features/marketing/solutions/components/solutions-hero-section'
import { SolutionsLogoCloudSection } from '@/features/marketing/solutions/components/solutions-logo-cloud-section'
import { SolutionsPricingSection } from '@/features/marketing/solutions/components/solutions-pricing-section'
import { SolutionsSocialProofSection } from '@/features/marketing/solutions/components/solutions-social-proof-section'
import { SolutionsTestimonialSection } from '@/features/marketing/solutions/components/solutions-testimonial-section'
import { buildSolutionsTemplateContent } from '@/features/marketing/solutions/content/build-solutions-template-content'
import { useLanguage } from '@/shared/providers/language-provider'

export default function SolutionsPage() {
  const { t } = useLanguage()
  const content = buildSolutionsTemplateContent(t)

  return (
    <div className="overflow-hidden bg-white pb-24 dark:bg-pencil-950">
      <SolutionsHeroSection hero={content.hero} />
      <SolutionsLogoCloudSection logoCloud={content.logoCloud} />
      <SolutionsSocialProofSection socialProof={content.socialProof} />
      <SolutionsFeatureSection features={content.features} />
      <SolutionsTestimonialSection testimonial={content.testimonial} />
      <SolutionsPricingSection pricing={content.pricing} buyPlanLabel={content.actions.buyPlan} />
      <SolutionsFaqSection faq={content.faq} />
      <SolutionsCtaSection cta={content.cta} />
    </div>
  )
}
