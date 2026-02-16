import type {
  ActionLink,
  FeatureGridItem,
  FeatureIconKey,
  FeatureItem,
  LogoItem,
  ProjectListItem,
  ProjectsTemplateContent,
  ShowcaseItem,
  TestimonialItem,
  SectionImage,
  ProjectsSharedActions,
  HeroAnnouncement,
} from '../types'

type TranslateFn = <T = string>(key: string) => T
type JsonRecord = Record<string, unknown>

function asRecord(value: unknown): JsonRecord | null {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return null
  }
  return value as JsonRecord
}

function asString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : fallback
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function asStringArray(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const normalized = value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
  return normalized.length > 0 ? normalized : fallback
}

function asFeatureIcon(value: unknown, fallback: FeatureIconKey): FeatureIconKey {
  return value === 'cloud' || value === 'lock' || value === 'server' || value === 'sync' ? value : fallback
}

const defaultActions: ProjectsSharedActions = {
  getStarted: 'Get started',
  learnMore: 'Learn more',
  contactSales: 'Contact sales',
}

const defaultContent: ProjectsTemplateContent = {
  hero: {
    announcement: {
      label: 'Featured work',
      linkLabel: 'See project details',
      href: '#project-showcase',
    },
    title: 'Project outcomes that prove delivery capability',
    description:
      'From flight simulation and enterprise data integration to AI agent deployment, we deliver scoped milestones with measurable business outcomes.',
    primaryAction: { label: 'Get started', href: '/contact' },
    secondaryAction: { label: 'Learn more', href: '#project-list' },
    image: {
      src: '/plus-assets/img/component-images/mobile-app-screenshot.png',
      alt: 'Project portfolio dashboard preview',
      width: 316,
      height: 684,
    },
  },
  logoCloud: {
    logos: [
      {
        name: 'Transistor',
        alt: 'Transistor',
        src: '/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
        width: 158,
        height: 48,
      },
      {
        name: 'Reform',
        alt: 'Reform',
        src: '/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
        width: 158,
        height: 48,
      },
      {
        name: 'Tuple',
        alt: 'Tuple',
        src: '/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
        width: 158,
        height: 48,
      },
      {
        name: 'SavvyCal',
        alt: 'SavvyCal',
        src: '/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
        width: 158,
        height: 48,
      },
      {
        name: 'Statamic',
        alt: 'Statamic',
        src: '/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
        width: 158,
        height: 48,
      },
    ],
  },
  featureHighlight: {
    title: 'Execution discipline from PoC to production.',
    description:
      'We run phased delivery with clear checkpoints, so project progress can be reviewed by both technical and business teams.',
    image: {
      src: '/plus-assets/img/component-images/dark-project-app-screenshot.png',
      alt: 'Project delivery operating dashboard',
      width: 2432,
      height: 1442,
    },
    items: [
      {
        name: 'Clear implementation milestones.',
        description: 'Each project has explicit phase goals, acceptance criteria, and decision checkpoints.',
        icon: 'cloud',
      },
      {
        name: 'System integration readiness.',
        description: 'API contracts and cross-system dependencies are validated before expansion.',
        icon: 'lock',
      },
      {
        name: 'Delivery quality governance.',
        description: 'KPI tracking and risk review cadence keep launch quality predictable.',
        icon: 'server',
      },
    ],
  },
  featureGrid: {
    eyebrow: 'Delivery capabilities',
    title: 'Core capabilities used across projects',
    description:
      'Project types differ by industry, but our execution model remains consistent across XR, data, and AI integration scenarios.',
    items: [
      {
        name: 'Scenario assessment',
        description: 'Clarify scope, constraints, and deployment conditions before implementation starts.',
        href: '/contact',
        icon: 'cloud',
        linkLabel: 'Learn more',
      },
      {
        name: 'Cross-system integration',
        description: 'Stabilize data flow and service interfaces between existing systems and new modules.',
        href: '/contact',
        icon: 'lock',
        linkLabel: 'Learn more',
      },
      {
        name: 'Operational optimization',
        description: 'Continuously tune performance, governance, and service quality after launch.',
        href: '/contact',
        icon: 'sync',
        linkLabel: 'Learn more',
      },
    ],
  },
  showcase: {
    eyebrow: 'Featured cases',
    title: 'Representative outcomes from real deployments',
    description: 'Three cases to quickly understand how requirements are converted into trackable delivery outcomes.',
    metricLabel: 'Key outcome',
    viewLabel: 'View case',
    items: [
      {
        number: '01',
        title: 'Flight simulation training system',
        category: 'XR / Training',
        summary: 'Built high-fidelity training scenes and mission scripts for repeatable operational drills.',
        metric: 'Improved training process consistency',
        href: '/contact',
      },
      {
        number: '02',
        title: 'Industry data integration platform',
        category: 'Data / Integration',
        summary: 'Connected internal and external data sources with trackable sync and push nodes.',
        metric: 'Faster cross-system data synchronization',
        href: '/contact',
      },
      {
        number: '03',
        title: 'Enterprise AI agent deployment',
        category: 'AI / Agent',
        summary: 'Implemented retrieval and task-agent workflow to reduce repetitive support operations.',
        metric: 'Faster response time with higher consistency',
        href: '/contact',
      },
    ],
  },
  projectList: {
    eyebrow: 'Project catalog',
    title: 'Delivery cases',
    allFilterLabel: 'All',
    filters: ['XR', 'Data', 'AI'],
    countLabel: 'Projects',
    outcomeLabel: 'Outcome',
    timelineLabel: 'Timeline',
    items: [
      {
        id: 'flight-simulator',
        number: '01',
        title: 'Flight simulator system',
        category: 'XR',
        tags: ['VR', 'Simulator', 'Training'],
        summary: 'Established immersive simulation flow and operation checkpoints for pilot training.',
        outcome: 'Standardized training process',
        timeline: '10-14 weeks',
        image: '/plus-assets/img/component-images/project-app-screenshot.png',
      },
      {
        id: 'flight-training',
        number: '02',
        title: 'Flight education training',
        category: 'XR',
        tags: ['Curriculum', 'VR', 'Task Scripts'],
        summary: 'Combined interactive lessons with mission scripts to improve training completion quality.',
        outcome: 'Higher course completion rate',
        timeline: '8-12 weeks',
        image: '/plus-assets/img/component-images/mobile-app-screenshot.png',
      },
      {
        id: 'data-integration',
        number: '03',
        title: 'Data integration planning',
        category: 'Data',
        tags: ['API', 'Data Flow', 'Governance'],
        summary: 'Integrated multi-source data pipelines and built stable contracts for downstream systems.',
        outcome: 'Improved integration efficiency',
        timeline: '6-10 weeks',
        image: '/plus-assets/img/component-images/project-app-screenshot.png',
      },
      {
        id: 'ai-agent',
        number: '04',
        title: 'Enterprise AI agent system',
        category: 'AI',
        tags: ['AI Agent', 'Knowledge Base', 'Automation'],
        summary: 'Built enterprise retrieval and action workflows for support and internal operations.',
        outcome: 'Reduced response and handling time',
        timeline: '6-12 weeks',
        image: '/plus-assets/img/component-images/mobile-app-screenshot.png',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Trusted by teams shipping complex projects',
    featured: {
      quote:
        'Their team translated requirements into phased milestones quickly, and we saw measurable progress from PoC to production deployment.',
      author: {
        name: 'Operations Director',
        handle: 'aerospace-ops',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=512&h=512&q=80',
        logoUrl: '/plus-assets/img/logos/savvycal-logo-gray-900.svg',
      },
    },
    items: [
      {
        quote: 'Delivery cadence was transparent and predictable from kickoff to launch.',
        author: {
          name: 'Program Manager',
          handle: 'program-manager',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        quote: 'The integration plan balanced technical constraints and operational priorities effectively.',
        author: {
          name: 'Data Platform Lead',
          handle: 'data-platform',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        quote: 'Their team helped us align KPI tracking with actual user adoption metrics.',
        author: {
          name: 'Innovation Manager',
          handle: 'innovation-manager',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        quote: 'Post-launch optimization support made the rollout stable across departments.',
        author: {
          name: 'Operations Analyst',
          handle: 'ops-analyst',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        quote: 'We appreciated the practical milestone reviews and clear risk management process.',
        author: {
          name: 'PMO Coordinator',
          handle: 'pmo-coordinator',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        quote: 'The AI agent deployment reduced repetitive support effort in less than one quarter.',
        author: {
          name: 'Customer Success Lead',
          handle: 'cs-lead',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  },
  newsletter: {
    title: 'Get project updates and implementation insights',
    description: 'Receive selected case studies, delivery playbooks, and integration updates from our team.',
    emailPlaceholder: 'Enter your email',
    submitLabel: 'Subscribe',
  },
  cta: {
    title: 'Looking for a delivery partner with proven outcomes?',
    description:
      'Share your target scenario and timeline. We will propose a practical architecture, milestones, and implementation roadmap.',
    primaryAction: { label: 'Contact sales', href: '/contact' },
    secondaryAction: { label: 'Learn more', href: '/solutions' },
  },
  actions: defaultActions,
}

function parseActionLink(value: unknown, fallback: ActionLink): ActionLink {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    label: asString(record.label, fallback.label),
    href: asString(record.href, fallback.href),
  }
}

function parseImage(value: unknown, fallback: SectionImage): SectionImage {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    src: asString(record.src, fallback.src),
    alt: asString(record.alt, fallback.alt),
    width: asNumber(record.width, fallback.width),
    height: asNumber(record.height, fallback.height),
  }
}

function parseAnnouncement(value: unknown, fallback: HeroAnnouncement): HeroAnnouncement {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    label: asString(record.label, fallback.label),
    linkLabel: asString(record.linkLabel, fallback.linkLabel),
    href: asString(record.href, fallback.href),
  }
}

function parseLogos(value: unknown, fallback: LogoItem[]): LogoItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const record = asRecord(item)
      const itemFallback = fallback[index] ?? fallback[0]
      if (!record || !itemFallback) {
        return null
      }

      return {
        name: asString(record.name, itemFallback.name),
        alt: asString(record.alt, itemFallback.alt),
        src: asString(record.src, itemFallback.src),
        width: asNumber(record.width, itemFallback.width),
        height: asNumber(record.height, itemFallback.height),
      }
    })
    .filter((item): item is LogoItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseFeatureItems(value: unknown, fallback: FeatureItem[]): FeatureItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const record = asRecord(item)
      const itemFallback = fallback[index] ?? fallback[0]
      if (!record || !itemFallback) {
        return null
      }

      return {
        name: asString(record.name, itemFallback.name),
        description: asString(record.description, itemFallback.description),
        icon: asFeatureIcon(record.icon, itemFallback.icon),
      }
    })
    .filter((item): item is FeatureItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseFeatureGridItems(value: unknown, fallback: FeatureGridItem[]): FeatureGridItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const record = asRecord(item)
      const itemFallback = fallback[index] ?? fallback[0]
      if (!record || !itemFallback) {
        return null
      }

      return {
        name: asString(record.name, itemFallback.name),
        description: asString(record.description, itemFallback.description),
        href: asString(record.href, itemFallback.href),
        icon: asFeatureIcon(record.icon, itemFallback.icon),
        linkLabel: asString(record.linkLabel, itemFallback.linkLabel),
      }
    })
    .filter((item): item is FeatureGridItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseShowcaseItems(value: unknown, fallback: ShowcaseItem[]): ShowcaseItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const record = asRecord(item)
      const itemFallback = fallback[index] ?? fallback[0]
      if (!record || !itemFallback) {
        return null
      }

      return {
        number: asString(record.number, itemFallback.number),
        title: asString(record.title, itemFallback.title),
        category: asString(record.category, itemFallback.category),
        summary: asString(record.summary, itemFallback.summary),
        metric: asString(record.metric, itemFallback.metric),
        href: asString(record.href, itemFallback.href),
      }
    })
    .filter((item): item is ShowcaseItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseProjectListItems(value: unknown, fallback: ProjectListItem[]): ProjectListItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const record = asRecord(item)
      const itemFallback = fallback[index] ?? fallback[0]
      if (!record || !itemFallback) {
        return null
      }

      return {
        id: asString(record.id, itemFallback.id),
        number: asString(record.number, itemFallback.number),
        title: asString(record.title, itemFallback.title),
        category: asString(record.category, itemFallback.category),
        tags: asStringArray(record.tags, itemFallback.tags),
        summary: asString(record.summary, itemFallback.summary),
        outcome: asString(record.outcome, itemFallback.outcome),
        timeline: asString(record.timeline, itemFallback.timeline),
        image: asString(record.image, itemFallback.image),
      }
    })
    .filter((item): item is ProjectListItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseTestimonial(value: unknown, fallback: TestimonialItem): TestimonialItem {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  const authorRecord = asRecord(record.author)

  return {
    quote: asString(record.quote, fallback.quote),
    author: {
      name: asString(authorRecord?.name, fallback.author.name),
      handle: asString(authorRecord?.handle, fallback.author.handle),
      imageUrl: asString(authorRecord?.imageUrl, fallback.author.imageUrl),
      logoUrl: asString(authorRecord?.logoUrl, fallback.author.logoUrl ?? ''),
    },
  }
}

function parseTestimonialItems(value: unknown, fallback: TestimonialItem[]): TestimonialItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      return parseTestimonial(item, itemFallback)
    })
    .filter((item): item is TestimonialItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseActions(value: unknown, fallback: ProjectsSharedActions): ProjectsSharedActions {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    getStarted: asString(record.getStarted, fallback.getStarted),
    learnMore: asString(record.learnMore, fallback.learnMore),
    contactSales: asString(record.contactSales, fallback.contactSales),
  }
}

export function buildProjectsTemplateContent(t: TranslateFn): ProjectsTemplateContent {
  const rawRoot = t<unknown>('pages.projectsTemplate')
  const root = asRecord(rawRoot) ?? {}

  const actions = parseActions(root.actions, defaultContent.actions)

  return {
    hero: {
      announcement: parseAnnouncement(asRecord(root.hero)?.announcement, defaultContent.hero.announcement),
      title: asString(asRecord(root.hero)?.title, defaultContent.hero.title),
      description: asString(asRecord(root.hero)?.description, defaultContent.hero.description),
      primaryAction: parseActionLink(asRecord(root.hero)?.primaryAction, {
        ...defaultContent.hero.primaryAction,
        label: actions.getStarted,
      }),
      secondaryAction: parseActionLink(asRecord(root.hero)?.secondaryAction, {
        ...defaultContent.hero.secondaryAction,
        label: actions.learnMore,
      }),
      image: parseImage(asRecord(root.hero)?.image, defaultContent.hero.image),
    },
    logoCloud: {
      logos: parseLogos(asRecord(root.logoCloud)?.logos, defaultContent.logoCloud.logos),
    },
    featureHighlight: {
      title: asString(asRecord(root.featureHighlight)?.title, defaultContent.featureHighlight.title),
      description: asString(asRecord(root.featureHighlight)?.description, defaultContent.featureHighlight.description),
      image: parseImage(asRecord(root.featureHighlight)?.image, defaultContent.featureHighlight.image),
      items: parseFeatureItems(asRecord(root.featureHighlight)?.items, defaultContent.featureHighlight.items),
    },
    featureGrid: {
      eyebrow: asString(asRecord(root.featureGrid)?.eyebrow, defaultContent.featureGrid.eyebrow),
      title: asString(asRecord(root.featureGrid)?.title, defaultContent.featureGrid.title),
      description: asString(asRecord(root.featureGrid)?.description, defaultContent.featureGrid.description),
      items: parseFeatureGridItems(asRecord(root.featureGrid)?.items, defaultContent.featureGrid.items),
    },
    showcase: {
      eyebrow: asString(asRecord(root.showcase)?.eyebrow, defaultContent.showcase.eyebrow),
      title: asString(asRecord(root.showcase)?.title, defaultContent.showcase.title),
      description: asString(asRecord(root.showcase)?.description, defaultContent.showcase.description),
      metricLabel: asString(asRecord(root.showcase)?.metricLabel, defaultContent.showcase.metricLabel),
      viewLabel: asString(asRecord(root.showcase)?.viewLabel, defaultContent.showcase.viewLabel),
      items: parseShowcaseItems(asRecord(root.showcase)?.items, defaultContent.showcase.items),
    },
    projectList: {
      eyebrow: asString(asRecord(root.projectList)?.eyebrow, defaultContent.projectList.eyebrow),
      title: asString(asRecord(root.projectList)?.title, defaultContent.projectList.title),
      allFilterLabel: asString(asRecord(root.projectList)?.allFilterLabel, defaultContent.projectList.allFilterLabel),
      filters: asStringArray(asRecord(root.projectList)?.filters, defaultContent.projectList.filters),
      countLabel: asString(asRecord(root.projectList)?.countLabel, defaultContent.projectList.countLabel),
      outcomeLabel: asString(asRecord(root.projectList)?.outcomeLabel, defaultContent.projectList.outcomeLabel),
      timelineLabel: asString(asRecord(root.projectList)?.timelineLabel, defaultContent.projectList.timelineLabel),
      items: parseProjectListItems(asRecord(root.projectList)?.items, defaultContent.projectList.items),
    },
    testimonials: {
      eyebrow: asString(asRecord(root.testimonials)?.eyebrow, defaultContent.testimonials.eyebrow),
      title: asString(asRecord(root.testimonials)?.title, defaultContent.testimonials.title),
      featured: parseTestimonial(asRecord(root.testimonials)?.featured, defaultContent.testimonials.featured),
      items: parseTestimonialItems(asRecord(root.testimonials)?.items, defaultContent.testimonials.items),
    },
    newsletter: {
      title: asString(asRecord(root.newsletter)?.title, defaultContent.newsletter.title),
      description: asString(asRecord(root.newsletter)?.description, defaultContent.newsletter.description),
      emailPlaceholder: asString(asRecord(root.newsletter)?.emailPlaceholder, defaultContent.newsletter.emailPlaceholder),
      submitLabel: asString(asRecord(root.newsletter)?.submitLabel, defaultContent.newsletter.submitLabel),
    },
    cta: {
      title: asString(asRecord(root.cta)?.title, defaultContent.cta.title),
      description: asString(asRecord(root.cta)?.description, defaultContent.cta.description),
      primaryAction: parseActionLink(asRecord(root.cta)?.primaryAction, {
        ...defaultContent.cta.primaryAction,
        label: actions.contactSales,
      }),
      secondaryAction: parseActionLink(asRecord(root.cta)?.secondaryAction, {
        ...defaultContent.cta.secondaryAction,
        label: actions.learnMore,
      }),
    },
    actions,
  }
}
