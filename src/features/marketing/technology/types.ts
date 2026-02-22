export interface ActionLink {
  label: string
  href: string
}

export interface TechnologyHeroContent {
  eyebrow: string
  title: string
  description: string
  panelTitle: string
  panelDescription: string
  tags: string[]
  quickLinks: ActionLink[]
  primaryAction: ActionLink
  secondaryAction: ActionLink
  graphicStates: string[]
}

export interface TechnologyOverviewItem {
  label: string
  value: string
  description: string
}

export interface TechnologyOverviewContent {
  eyebrow: string
  title: string
  description: string
  items: TechnologyOverviewItem[]
}

export interface TechnologyModuleItem {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  features: string[]
}

export interface TechnologyModulesContent {
  eyebrow: string
  title: string
  description: string
  activeItemLabel: string
  items: TechnologyModuleItem[]
}

export interface TechnologyArchitectureLayer {
  layer: string
  title: string
  description: string
}

export interface TechnologyArchitectureContent {
  eyebrow: string
  title: string
  description: string
  layers: TechnologyArchitectureLayer[]
}

export interface TechnologyFlowStep {
  number: string
  title: string
  description: string
}

export interface TechnologyFlowStat {
  label: string
  value: string
}

export interface TechnologyFlowContent {
  eyebrow: string
  title: string
  description: string
  stats: TechnologyFlowStat[]
  steps: TechnologyFlowStep[]
}

export interface TechnologyReliabilityItem {
  number: string
  title: string
  description: string
}

export interface TechnologyReliabilityContent {
  eyebrow: string
  title: string
  description: string
  items: TechnologyReliabilityItem[]
}

export interface TechnologyCtaContent {
  title: string
  description: string
  primaryAction: ActionLink
  secondaryAction: ActionLink
}

export interface TechnologyTemplateContent {
  hero: TechnologyHeroContent
  overview: TechnologyOverviewContent
  modules: TechnologyModulesContent
  architecture: TechnologyArchitectureContent
  flow: TechnologyFlowContent
  reliability: TechnologyReliabilityContent
  cta: TechnologyCtaContent
}

export interface TechnologyHeroSectionProps {
  hero: TechnologyHeroContent
}

export interface TechnologyOverviewSectionProps {
  overview: TechnologyOverviewContent
}

export interface TechnologyModulesSectionProps {
  modules: TechnologyModulesContent
}

export interface TechnologyArchitectureSectionProps {
  architecture: TechnologyArchitectureContent
}

export interface TechnologyFlowSectionProps {
  flow: TechnologyFlowContent
}

export interface TechnologyReliabilitySectionProps {
  reliability: TechnologyReliabilityContent
}

export interface TechnologyCtaSectionProps {
  cta: TechnologyCtaContent
}
