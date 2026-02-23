export interface NavigationLinkConfig {
  href: string
  index: string
  labelKey: string
  className?: string
}

export interface FooterCategoryConfig {
  index: string
  titleKey: string
  links: Array<{
    href: string
    labelKey: string
  }>
}

export interface FooterNavigationConfig {
  solutions: Array<{ name: string; href: string }>
  support: Array<{ name: string; href: string }>
  company: Array<{ name: string; href: string }>
  legal: Array<{ name: string; href: string }>
  social: Array<{ name: string; href: string; iconName: string }>
}

export const primaryNavigationLinks: NavigationLinkConfig[] = [
  { href: '/solutions', index: '01', labelKey: 'nav.solutions' },
  { href: '/projects', index: '02', labelKey: 'nav.projects' },
  { href: '/technology', index: '03', labelKey: 'nav.technology' },
  { href: '/about', index: '04', labelKey: 'nav.about' },
  { href: '/contact', index: '05', labelKey: 'nav.contact', className: 'sm:hidden' },
]

export const footerCategoryLinks: FooterCategoryConfig[] = [
  {
    index: '01',
    titleKey: 'footer.solutions.title',
    links: [
      { href: '/solutions#xr-training', labelKey: 'footer.solutions.xr' },
      { href: '/solutions#ar-visualization', labelKey: 'footer.solutions.ar' },
      { href: '/solutions#smart-space', labelKey: 'footer.solutions.iot' },
      { href: '/solutions#ai-for-sme', labelKey: 'footer.solutions.ai' },
    ],
  },
  {
    index: '02',
    titleKey: 'footer.projects.title',
    links: [
      { href: '/projects#flight-simulator', labelKey: 'footer.projects.simulator' },
      { href: '/projects#flight-training', labelKey: 'footer.projects.training' },
      { href: '/projects#data-integration', labelKey: 'footer.projects.integration' },
      { href: '/projects#ai-agent', labelKey: 'footer.projects.agent' },
    ],
  },
  {
    index: '03',
    titleKey: 'footer.companyCategory',
    links: [
      { href: '/about', labelKey: 'nav.about' },
      { href: '/technology', labelKey: 'nav.technology' },
      { href: '/contact', labelKey: 'nav.contact' },
    ],
  },
  {
    index: '04',
    titleKey: 'footer.legal',
    links: [
      { href: '/privacy-policy', labelKey: 'footer.links.privacy' },
      { href: '/terms', labelKey: 'footer.links.terms' },
    ],
  },
]

export const footerNavigation: FooterNavigationConfig = {
  solutions: [
    { name: 'nav.solutions', href: '/solutions' },
    { name: 'footer.solutions.xr', href: '/solutions#xr-training' },
    { name: 'footer.solutions.ar', href: '/solutions#ar-visualization' },
    { name: 'footer.solutions.iot', href: '/solutions#smart-space' },
    { name: 'footer.solutions.ai', href: '/solutions#ai-for-sme' },
  ],
  support: [
    { name: 'nav.contact', href: '/contact' },
    { name: 'footer.faq', href: '/#faq' },
  ],
  company: [
    { name: 'nav.about', href: '/about' },
    { name: 'nav.technology', href: '/technology' },
    { name: 'nav.projects', href: '/projects' },
  ],
  legal: [
    { name: 'footer.links.privacy', href: '/privacy-policy' },
    { name: 'footer.links.terms', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', href: '#', iconName: 'facebook' },
    { name: 'Instagram', href: '#', iconName: 'instagram' },
    { name: 'X', href: '#', iconName: 'x' },
    { name: 'GitHub', href: '#', iconName: 'github' },
    { name: 'YouTube', href: 'https://www.youtube.com', iconName: 'youtube' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com', iconName: 'linkedin' },
  ],
}
