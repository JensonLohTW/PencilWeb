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
