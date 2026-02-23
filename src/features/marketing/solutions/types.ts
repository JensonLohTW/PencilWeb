export type FeatureIconKey = 'cloud' | 'lock' | 'queue' | 'security'

export interface ActionLink {
  label: string
  href: string
}

export interface HeroImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface HeroContent {
  title: string
  description: string
  primaryAction: ActionLink
  secondaryAction: ActionLink
  image: HeroImage
}

export interface LogoItem {
  name: string
  alt: string
  src: string
  width: number
  height: number
}

export interface LogoCloudContent {
  logos: LogoItem[]
}

export interface SocialProofContent {
  text: string
  linkLabel: string
  linkHref: string
}

export interface FeatureItem {
  name: string
  description: string
  icon: FeatureIconKey
}

export interface FeaturesContent {
  eyebrow: string
  title: string
  description: string
  items: FeatureItem[]
}

export interface TestimonialLogo {
  src: string
  alt: string
}

export interface TestimonialBackgroundImage {
  src: string
  alt: string
}

export interface TestimonialContent {
  quote: string
  authorName: string
  authorRole: string
  logo: TestimonialLogo
  backgroundImage: TestimonialBackgroundImage
}

export interface PricingTier {
  name: string
  id: string
  href: string
  priceMonthly: string
  description: string
  features: string[]
  mostPopular: boolean
}

export interface PricingContent {
  eyebrow: string
  title: string
  description: string
  mostPopularLabel: string
  perMonthLabel: string
  tiers: PricingTier[]
}

export interface FaqItem {
  id: number
  question: string
  answer: string
}

export interface FaqContent {
  title: string
  items: FaqItem[]
}

export interface CtaContent {
  title: string
  description: string
  primaryAction: ActionLink
  secondaryAction: ActionLink
}

export interface SharedActions {
  getStarted: string
  learnMore: string
  buyPlan: string
}

export interface SolutionsTemplateContent {
  hero: HeroContent
  logoCloud: LogoCloudContent
  socialProof: SocialProofContent
  features: FeaturesContent
  testimonial: TestimonialContent
  pricing: PricingContent
  faq: FaqContent
  cta: CtaContent
  actions: SharedActions
}

export interface SolutionsHeroSectionProps {
  hero: HeroContent
}

export interface SolutionsLogoCloudSectionProps {
  logoCloud: LogoCloudContent
}

export interface SolutionsSocialProofSectionProps {
  socialProof: SocialProofContent
}

export interface SolutionsFeatureSectionProps {
  features: FeaturesContent
}

export interface SolutionsTestimonialSectionProps {
  testimonial: TestimonialContent
}

export interface SolutionsPricingSectionProps {
  pricing: PricingContent
  buyPlanLabel: string
}

export interface SolutionsFaqSectionProps {
  faq: FaqContent
}

export interface SolutionsCtaSectionProps {
  cta: CtaContent
}
