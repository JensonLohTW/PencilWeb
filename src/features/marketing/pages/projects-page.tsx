'use client'

import { ProjectsCtaSection } from '@/features/marketing/projects/components/projects-cta-section'
import { ProjectsFeatureGridSection } from '@/features/marketing/projects/components/projects-feature-grid-section'
import { ProjectsFeatureHighlightSection } from '@/features/marketing/projects/components/projects-feature-highlight-section'
import { ProjectsHeroSection } from '@/features/marketing/projects/components/projects-hero-section'
import { ProjectsListSection } from '@/features/marketing/projects/components/projects-list-section'
import { ProjectsLogoCloudSection } from '@/features/marketing/projects/components/projects-logo-cloud-section'
import { ProjectsNewsletterSection } from '@/features/marketing/projects/components/projects-newsletter-section'
import { ProjectsShowcaseSection } from '@/features/marketing/projects/components/projects-showcase-section'
import { ProjectsTestimonialsSection } from '@/features/marketing/projects/components/projects-testimonials-section'
import { buildProjectsTemplateContent } from '@/features/marketing/projects/content/build-projects-template-content'
import { useLanguage } from '@/shared/providers/language-provider'

export default function ProjectsPage() {
  const { t } = useLanguage()
  const content = buildProjectsTemplateContent(t)

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-pencil-950">
      <ProjectsHeroSection hero={content.hero} />
      <ProjectsLogoCloudSection logoCloud={content.logoCloud} />
      <ProjectsFeatureHighlightSection featureHighlight={content.featureHighlight} />
      <ProjectsFeatureGridSection featureGrid={content.featureGrid} />
      <ProjectsShowcaseSection showcase={content.showcase} />
      <ProjectsListSection projectList={content.projectList} />
      <ProjectsTestimonialsSection testimonials={content.testimonials} />
      <ProjectsNewsletterSection newsletter={content.newsletter} />
      <ProjectsCtaSection cta={content.cta} />
    </div>
  )
}
