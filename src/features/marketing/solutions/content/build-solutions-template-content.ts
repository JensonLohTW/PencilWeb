import type {
  ActionLink,
  FeatureIconKey,
  FeatureItem,
  FaqItem,
  HeroContent,
  LogoItem,
  PricingTier,
  SharedActions,
  SolutionsTemplateContent,
  TestimonialContent,
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

function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback
}

function asStringArray(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value)) {
    return fallback
  }
  const normalized = value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
  return normalized.length > 0 ? normalized : fallback
}

function asFeatureIcon(value: unknown, fallback: FeatureIconKey): FeatureIconKey {
  return value === 'cloud' || value === 'lock' || value === 'queue' || value === 'security' ? value : fallback
}

const defaultActions: SharedActions = {
  getStarted: 'Talk to an advisor',
  learnMore: 'View details',
  buyPlan: 'Book consultation',
}

const defaultContent: SolutionsTemplateContent = {
  hero: {
    title: 'Choose the right solution based on your real scenario',
    description:
      'From immersive training and on-site guidance to operational automation, we design rollout paths around measurable goals so every solution can land in production with confidence.',
    primaryAction: { label: 'Talk to an advisor', href: '/contact' },
    secondaryAction: { label: 'View details', href: '#features' },
    image: {
      src: '/plus-assets/img/component-images/project-app-screenshot.png',
      alt: 'Solutions architecture overview',
      width: 2432,
      height: 1442,
    },
  },
  logoCloud: {
    logos: [
      { name: 'Transistor', alt: 'Transistor', src: '/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg', width: 158, height: 48 },
      { name: 'Reform', alt: 'Reform', src: '/plus-assets/img/logos/158x48/reform-logo-gray-900.svg', width: 158, height: 48 },
      { name: 'Tuple', alt: 'Tuple', src: '/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg', width: 158, height: 48 },
      { name: 'SavvyCal', alt: 'SavvyCal', src: '/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg', width: 158, height: 48 },
      { name: 'Statamic', alt: 'Statamic', src: '/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg', width: 158, height: 48 },
    ],
  },
  socialProof: {
    text: 'We have delivered 15+ projects across defense, manufacturing, healthcare, and education with repeatable delivery quality.',
    linkLabel: 'Read case study',
    linkHref: '/projects',
  },
  features: {
    eyebrow: 'Four Core Solutions',
    title: 'Capabilities mapped to business outcomes',
    description: 'Each solution module is designed to be independently adopted or combined into a phased implementation roadmap.',
    items: [
      {
        name: 'VR/MR Immersive Training',
        description: 'High-fidelity simulation with repeatable operational drills, real-time feedback, and measurable learning outcomes.',
        icon: 'cloud',
      },
      {
        name: 'AR Visualization & Guidance',
        description: 'Overlay 3D and process data on real environments to improve maintenance speed, onboarding, and guidance accuracy.',
        icon: 'lock',
      },
      {
        name: 'Smart Space IoT Integration',
        description: 'Connect sensors, gateways, and control systems to enable real-time monitoring and automated environmental responses.',
        icon: 'queue',
      },
      {
        name: 'AI Agent for Operations',
        description: 'Deploy domain-specific AI assistants for customer service, knowledge retrieval, and workflow automation.',
        icon: 'security',
      },
    ],
  },
  testimonial: {
    quote:
      'Their team translated our requirements into a phased technical roadmap quickly. We saw measurable progress from PoC to production instead of a one-time demo.',
    authorName: 'Operations Director',
    authorRole: 'Aerospace Training Program',
    logo: {
      src: '/plus-assets/img/logos/workcation-logo-white.svg',
      alt: 'Partner logo',
    },
    backgroundImage: {
      src: 'https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?auto=format&fit=crop&w=1216&q=80',
      alt: 'Project delivery workshop',
    },
  },
  pricing: {
    eyebrow: 'Engagement Model',
    title: 'Three implementation paths from validation to scale',
    description:
      'Instead of fixed subscriptions, we provide staged delivery packages aligned to your budget, timeline, and organizational readiness.',
    mostPopularLabel: 'Recommended',
    perMonthLabel: 'typical timeline',
    tiers: [
      {
        name: 'PoC Validation',
        id: 'tier-poc',
        href: '/contact',
        priceMonthly: '4-6 weeks',
        description: 'Rapidly validate feasibility and expected ROI in one selected scenario.',
        features: [
          'Scenario workshop and requirement scoping',
          'Prototype and technical feasibility validation',
          'Initial architecture and rollout recommendation',
          'Decision report for pilot stage',
        ],
        mostPopular: false,
      },
      {
        name: 'Pilot Deployment',
        id: 'tier-pilot',
        href: '/contact',
        priceMonthly: '8-12 weeks',
        description: 'Build and launch a production-capable pilot with measurable KPIs.',
        features: [
          'End-to-end feature implementation for one department/site',
          'Data integration and operational dashboard',
          'User training and go-live support',
          'KPI tracking and iteration cycle',
        ],
        mostPopular: true,
      },
      {
        name: 'Scale Program',
        id: 'tier-scale',
        href: '/contact',
        priceMonthly: '12-20 weeks',
        description: 'Expand validated capabilities across multiple teams and systems.',
        features: [
          'Cross-site rollout and system hardening',
          'Automation playbooks and governance standards',
          'Long-term maintenance and performance optimization',
          'Continuous roadmap planning with quarterly reviews',
        ],
        mostPopular: false,
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        id: 1,
        question: 'Where should we start if this is our first implementation?',
        answer:
          'Start with a narrow scenario that has clear outcomes, such as AR guidance or AI knowledge support, then expand to IoT and XR in phases.',
      },
      {
        id: 2,
        question: 'Can we combine multiple solution modules in one roadmap?',
        answer:
          'Yes. We define a phase-one MVP first and then split technical milestones so each stage can be validated before scaling.',
      },
      {
        id: 3,
        question: 'Do you support existing systems and API integration?',
        answer:
          'Yes. We evaluate your current architecture, then connect data and workflows through stable APIs and middleware strategy.',
      },
      {
        id: 4,
        question: 'How is hardware planning handled for XR or IoT projects?',
        answer:
          'Hardware requirements are included in planning. We provide recommended device specs, compatibility checks, and deployment plans.',
      },
      {
        id: 5,
        question: 'Do you provide maintenance and optimization after go-live?',
        answer:
          'Yes. We offer monitoring, issue response, version upgrades, and optimization services based on your operating model.',
      },
      {
        id: 6,
        question: 'How do you align technical and business teams during execution?',
        answer:
          'We establish shared milestone reviews, requirement documents, and KPI checkpoints to keep technical delivery and business outcomes in sync.',
      },
    ],
  },
  cta: {
    title: 'Found the right path? Let us help you define the rollout plan.',
    description:
      'Share your target scenario and timeline. We will propose a practical architecture, phased milestones, and measurable delivery goals.',
    primaryAction: { label: 'Talk to an advisor', href: '/contact' },
    secondaryAction: { label: 'View details', href: '/solutions#pricing' },
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

function parseHero(value: unknown, fallback: HeroContent, actions: SharedActions): HeroContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  const imageRecord = asRecord(record.image)

  return {
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    primaryAction: parseActionLink(record.primaryAction, { ...fallback.primaryAction, label: actions.getStarted }),
    secondaryAction: parseActionLink(record.secondaryAction, { ...fallback.secondaryAction, label: actions.learnMore }),
    image: {
      src: asString(imageRecord?.src, fallback.image.src),
      alt: asString(imageRecord?.alt, fallback.image.alt),
      width: asNumber(imageRecord?.width, fallback.image.width),
      height: asNumber(imageRecord?.height, fallback.image.height),
    },
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

function parseFeatures(value: unknown, fallback: FeatureItem[]): FeatureItem[] {
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

function parseTestimonial(value: unknown, fallback: TestimonialContent): TestimonialContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  const logoRecord = asRecord(record.logo)
  const backgroundRecord = asRecord(record.backgroundImage)

  return {
    quote: asString(record.quote, fallback.quote),
    authorName: asString(record.authorName, fallback.authorName),
    authorRole: asString(record.authorRole, fallback.authorRole),
    logo: {
      src: asString(logoRecord?.src, fallback.logo.src),
      alt: asString(logoRecord?.alt, fallback.logo.alt),
    },
    backgroundImage: {
      src: asString(backgroundRecord?.src, fallback.backgroundImage.src),
      alt: asString(backgroundRecord?.alt, fallback.backgroundImage.alt),
    },
  }
}

function parseTiers(value: unknown, fallback: PricingTier[]): PricingTier[] {
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
        id: asString(record.id, itemFallback.id),
        href: asString(record.href, itemFallback.href),
        priceMonthly: asString(record.priceMonthly, itemFallback.priceMonthly),
        description: asString(record.description, itemFallback.description),
        features: asStringArray(record.features, itemFallback.features),
        mostPopular: asBoolean(record.mostPopular, itemFallback.mostPopular),
      }
    })
    .filter((item): item is PricingTier => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseFaqItems(value: unknown, fallback: FaqItem[]): FaqItem[] {
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
        id: asNumber(record.id, itemFallback.id),
        question: asString(record.question, itemFallback.question),
        answer: asString(record.answer, itemFallback.answer),
      }
    })
    .filter((item): item is FaqItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseActions(value: unknown, fallback: SharedActions): SharedActions {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    getStarted: asString(record.getStarted, fallback.getStarted),
    learnMore: asString(record.learnMore, fallback.learnMore),
    buyPlan: asString(record.buyPlan, fallback.buyPlan),
  }
}

export function buildSolutionsTemplateContent(t: TranslateFn): SolutionsTemplateContent {
  const rawRoot = t<unknown>('pages.solutionsTemplate')
  const root = asRecord(rawRoot) ?? {}

  const actions = parseActions(root.actions, defaultContent.actions)

  return {
    hero: parseHero(root.hero, defaultContent.hero, actions),
    logoCloud: {
      logos: parseLogos(asRecord(root.logoCloud)?.logos, defaultContent.logoCloud.logos),
    },
    socialProof: {
      text: asString(asRecord(root.socialProof)?.text, defaultContent.socialProof.text),
      linkLabel: asString(asRecord(root.socialProof)?.linkLabel, defaultContent.socialProof.linkLabel),
      linkHref: asString(asRecord(root.socialProof)?.linkHref, defaultContent.socialProof.linkHref),
    },
    features: {
      eyebrow: asString(asRecord(root.features)?.eyebrow, defaultContent.features.eyebrow),
      title: asString(asRecord(root.features)?.title, defaultContent.features.title),
      description: asString(asRecord(root.features)?.description, defaultContent.features.description),
      items: parseFeatures(asRecord(root.features)?.items, defaultContent.features.items),
    },
    testimonial: parseTestimonial(root.testimonial, defaultContent.testimonial),
    pricing: {
      eyebrow: asString(asRecord(root.pricing)?.eyebrow, defaultContent.pricing.eyebrow),
      title: asString(asRecord(root.pricing)?.title, defaultContent.pricing.title),
      description: asString(asRecord(root.pricing)?.description, defaultContent.pricing.description),
      mostPopularLabel: asString(asRecord(root.pricing)?.mostPopularLabel, defaultContent.pricing.mostPopularLabel),
      perMonthLabel: asString(asRecord(root.pricing)?.perMonthLabel, defaultContent.pricing.perMonthLabel),
      tiers: parseTiers(asRecord(root.pricing)?.tiers, defaultContent.pricing.tiers),
    },
    faq: {
      title: asString(asRecord(root.faq)?.title, defaultContent.faq.title),
      items: parseFaqItems(asRecord(root.faq)?.items, defaultContent.faq.items),
    },
    cta: {
      title: asString(asRecord(root.cta)?.title, defaultContent.cta.title),
      description: asString(asRecord(root.cta)?.description, defaultContent.cta.description),
      primaryAction: parseActionLink(asRecord(root.cta)?.primaryAction, { ...defaultContent.cta.primaryAction, label: actions.getStarted }),
      secondaryAction: parseActionLink(asRecord(root.cta)?.secondaryAction, { ...defaultContent.cta.secondaryAction, label: actions.learnMore }),
    },
    actions,
  }
}
