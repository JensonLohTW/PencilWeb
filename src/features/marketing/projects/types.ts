export type FeatureIconKey = 'cloud' | 'lock' | 'server' | 'sync'

export interface ActionLink {
  label: string
  href: string
}

export interface SectionImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface HeroAnnouncement {
  label: string
  linkLabel: string
  href: string
}

export interface ProjectsHeroContent {
  announcement: HeroAnnouncement
  title: string
  description: string
  primaryAction: ActionLink
  secondaryAction: ActionLink
  image: SectionImage
}

export interface LogoItem {
  name: string
  alt: string
  src: string
  width: number
  height: number
}

export interface ProjectsLogoCloudContent {
  logos: LogoItem[]
}

export interface FeatureItem {
  name: string
  description: string
  icon: FeatureIconKey
}

export interface ProjectsFeatureHighlightContent {
  title: string
  description: string
  image: SectionImage
  items: FeatureItem[]
}

export interface FeatureGridItem extends FeatureItem {
  href: string
  linkLabel: string
}

export interface ProjectsFeatureGridContent {
  eyebrow: string
  title: string
  description: string
  items: FeatureGridItem[]
}

export interface ShowcaseItem {
  number: string
  title: string
  category: string
  summary: string
  metric: string
  href: string
}

export interface ProjectsShowcaseContent {
  eyebrow: string
  title: string
  description: string
  metricLabel: string
  viewLabel: string
  items: ShowcaseItem[]
}

export interface ProjectListItem {
  id: string
  number: string
  title: string
  category: string
  tags: string[]
  summary: string
  outcome: string
  timeline: string
  image: string
}

export interface ProjectsListContent {
  eyebrow: string
  title: string
  allFilterLabel: string
  filters: string[]
  countLabel: string
  outcomeLabel: string
  timelineLabel: string
  items: ProjectListItem[]
}

export interface TestimonialAuthor {
  name: string
  handle: string
  imageUrl: string
  logoUrl?: string
}

export interface TestimonialItem {
  quote: string
  author: TestimonialAuthor
}

export interface ProjectsTestimonialsContent {
  eyebrow: string
  title: string
  featured: TestimonialItem
  items: TestimonialItem[]
}

export interface ProjectsNewsletterContent {
  title: string
  description: string
  emailPlaceholder: string
  submitLabel: string
}

export interface ProjectsCtaContent {
  title: string
  description: string
  primaryAction: ActionLink
  secondaryAction: ActionLink
}

export interface ProjectsSharedActions {
  getStarted: string
  learnMore: string
  contactSales: string
}

export interface ProjectsTemplateContent {
  hero: ProjectsHeroContent
  logoCloud: ProjectsLogoCloudContent
  featureHighlight: ProjectsFeatureHighlightContent
  featureGrid: ProjectsFeatureGridContent
  showcase: ProjectsShowcaseContent
  projectList: ProjectsListContent
  testimonials: ProjectsTestimonialsContent
  newsletter: ProjectsNewsletterContent
  cta: ProjectsCtaContent
  actions: ProjectsSharedActions
}

export interface ProjectsHeroSectionProps {
  hero: ProjectsHeroContent
}

export interface ProjectsLogoCloudSectionProps {
  logoCloud: ProjectsLogoCloudContent
}

export interface ProjectsFeatureHighlightSectionProps {
  featureHighlight: ProjectsFeatureHighlightContent
}

export interface ProjectsFeatureGridSectionProps {
  featureGrid: ProjectsFeatureGridContent
}

export interface ProjectsShowcaseSectionProps {
  showcase: ProjectsShowcaseContent
}

export interface ProjectsListSectionProps {
  projectList: ProjectsListContent
}

export interface ProjectsTestimonialsSectionProps {
  testimonials: ProjectsTestimonialsContent
}

export interface ProjectsNewsletterSectionProps {
  newsletter: ProjectsNewsletterContent
}

export interface ProjectsCtaSectionProps {
  cta: ProjectsCtaContent
}
