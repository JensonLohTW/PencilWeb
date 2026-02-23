import type {
  ActionLink,
  TechnologyArchitectureContent,
  TechnologyArchitectureLayer,
  TechnologyCtaContent,
  TechnologyFlowContent,
  TechnologyFlowStat,
  TechnologyFlowStep,
  TechnologyHeroContent,
  TechnologyModuleItem,
  TechnologyModulesContent,
  TechnologyOverviewContent,
  TechnologyOverviewItem,
  TechnologyReliabilityContent,
  TechnologyReliabilityItem,
  TechnologyTemplateContent,
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

function asStringArray(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const normalized = value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
  return normalized.length > 0 ? normalized : fallback
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

function parseActionLinks(value: unknown, fallback: ActionLink[]): ActionLink[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        label: asString(record.label, itemFallback.label),
        href: asString(record.href, itemFallback.href),
      }
    })
    .filter((item): item is ActionLink => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseOverviewItems(value: unknown, fallback: TechnologyOverviewItem[]): TechnologyOverviewItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        label: asString(record.label, itemFallback.label),
        value: asString(record.value, itemFallback.value),
        description: asString(record.description, itemFallback.description),
      }
    })
    .filter((item): item is TechnologyOverviewItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseModuleItems(value: unknown, fallback: TechnologyModuleItem[]): TechnologyModuleItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        id: asString(record.id, itemFallback.id),
        number: asString(record.number, itemFallback.number),
        title: asString(record.title, itemFallback.title),
        subtitle: asString(record.subtitle, itemFallback.subtitle),
        description: asString(record.description, itemFallback.description),
        features: asStringArray(record.features, itemFallback.features),
      }
    })
    .filter((item): item is TechnologyModuleItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseArchitectureLayers(value: unknown, fallback: TechnologyArchitectureLayer[]): TechnologyArchitectureLayer[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        layer: asString(record.layer, itemFallback.layer),
        title: asString(record.title, itemFallback.title),
        description: asString(record.description, itemFallback.description),
      }
    })
    .filter((item): item is TechnologyArchitectureLayer => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseFlowSteps(value: unknown, fallback: TechnologyFlowStep[]): TechnologyFlowStep[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        number: asString(record.number, itemFallback.number),
        title: asString(record.title, itemFallback.title),
        description: asString(record.description, itemFallback.description),
      }
    })
    .filter((item): item is TechnologyFlowStep => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseFlowStats(value: unknown, fallback: TechnologyFlowStat[]): TechnologyFlowStat[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        label: asString(record.label, itemFallback.label),
        value: asString(record.value, itemFallback.value),
      }
    })
    .filter((item): item is TechnologyFlowStat => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

function parseReliabilityItems(value: unknown, fallback: TechnologyReliabilityItem[]): TechnologyReliabilityItem[] {
  if (!Array.isArray(value)) {
    return fallback
  }

  const mapped = value
    .map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0]
      const record = asRecord(item)
      if (!record || !itemFallback) {
        return null
      }

      return {
        number: asString(record.number, itemFallback.number),
        title: asString(record.title, itemFallback.title),
        description: asString(record.description, itemFallback.description),
      }
    })
    .filter((item): item is TechnologyReliabilityItem => item !== null)

  return mapped.length > 0 ? mapped : fallback
}

const defaultHero: TechnologyHeroContent = {
  eyebrow: 'Technology Core',
  title: 'Build deployable systems with modular technology capability',
  description:
    'We combine XR, AI, IoT, and networking capabilities in layered modules so each rollout can be validated, scaled, and maintained with clear checkpoints.',
  panelTitle: 'Capability navigation',
  panelDescription: 'Jump to key sections and review the stack from architecture to delivery and maintenance.',
  tags: ['XR / Spatial Interfaces', 'AI Inference Pipelines', 'Cross-System API Contracts', 'Edge & Device Delivery'],
  graphicStates: [
    'Generating...',
    'Morphing...',
    'Refining...',
    'Abstracting...',
    'Projecting...',
    'Rotating...',
    'Expanding...',
    'Pulsing...',
  ],
  quickLinks: [
    { label: 'Core modules', href: '#tech-modules' },
    { label: 'Architecture layers', href: '#tech-architecture' },
    { label: 'Delivery flow', href: '#tech-flow' },
    { label: 'Reliability model', href: '#tech-reliability' },
  ],
  primaryAction: { label: 'Discuss technical collaboration', href: '/contact' },
  secondaryAction: { label: 'View core modules', href: '#tech-modules' },
}

const defaultOverview: TechnologyOverviewContent = {
  eyebrow: 'Capability Overview',
  title: 'Technology decisions mapped to delivery outcomes',
  description: 'Each module is designed to be adopted independently and connected through stable integration contracts.',
  items: [
    {
      label: 'Integration velocity',
      value: '5-phase rollout',
      description: 'From data source alignment to on-site deployment with explicit acceptance gates.',
    },
    {
      label: 'Architecture model',
      value: '3 service layers',
      description: 'Data and device, service and intelligence, plus experience and endpoint delivery.',
    },
    {
      label: 'Module coverage',
      value: '6 core modules',
      description: 'XR, movement platform, haptics, AI data, next-gen network, and multi-sensory integration.',
    },
    {
      label: 'Quality baseline',
      value: 'Continuous assurance',
      description: 'Performance, compatibility, and maintenance disciplines built into the lifecycle.',
    },
  ],
}

const defaultModules: TechnologyModulesContent = {
  eyebrow: 'Core Tech Stack',
  title: 'Six modules powering immersive system delivery',
  description: 'Select a module to inspect its role in the full implementation stack.',
  activeItemLabel: 'Selected module',
  items: [
    {
      id: 'xr',
      number: '01',
      title: 'XR (VR/MR/AR)',
      subtitle: 'Extended Reality',
      description: 'Integrates immersive interfaces for simulation, operations guidance, and interactive training experiences.',
      features: ['Headset and device integration', 'Spatial mapping and tracking', 'Cross-platform rendering', 'Session telemetry capture'],
    },
    {
      id: 'treadmill',
      number: '02',
      title: 'Omnidirectional Treadmill',
      subtitle: 'Movement Platform',
      description: 'Connects movement hardware with simulation logic to support natural navigation in virtual environments.',
      features: ['Movement synchronization', 'Gait profile handling', 'Safety constraints', 'Multi-user coordination'],
    },
    {
      id: 'haptics',
      number: '03',
      title: 'Haptic Feedback',
      subtitle: 'Touch Sensation',
      description: 'Uses tactile channels to reinforce realism and improve procedural learning in immersive scenarios.',
      features: ['Wearable feedback devices', 'Force and vibration cues', 'Event-driven response mapping', 'Device calibration workflows'],
    },
    {
      id: 'ai-data',
      number: '04',
      title: 'AI & Big Data',
      subtitle: 'Intelligence Engine',
      description: 'Combines model inference, rules, and analytics pipelines for adaptive decision and interaction support.',
      features: ['Inference orchestration', 'Knowledge retrieval', 'Behavioral analytics', 'Recommendation feedback loops'],
    },
    {
      id: 'network',
      number: '05',
      title: '5G/6G Network',
      subtitle: 'Low-Latency Delivery',
      description: 'Ensures stable and low-latency transport between cloud services, edge nodes, and field devices.',
      features: ['Streaming optimization', 'Edge-aware routing', 'Bandwidth prioritization', 'Real-time synchronization'],
    },
    {
      id: 'multisensory',
      number: '06',
      title: 'Multi-Sensory Interaction',
      subtitle: 'Extended Sensory Layer',
      description: 'Extends interaction channels beyond vision and audio to deepen immersion and context fidelity.',
      features: ['Environmental triggers', 'Scent and ambience modules', 'Synchronized feedback timing', 'Experimental integration hooks'],
    },
  ],
}

const defaultArchitecture: TechnologyArchitectureContent = {
  eyebrow: 'Architecture Overview',
  title: 'Layered design from source data to user experience',
  description: 'Modular boundaries keep implementation clear while supporting iterative expansion.',
  layers: [
    {
      layer: 'LAYER 01',
      title: 'Data & Device Layer',
      description: 'Normalizes sensor streams, enterprise systems, and external APIs into stable input contracts.',
    },
    {
      layer: 'LAYER 02',
      title: 'Service & Intelligence Layer',
      description: 'Runs orchestration rules, backend services, and AI inference with observable execution states.',
    },
    {
      layer: 'LAYER 03',
      title: 'Experience Layer',
      description: 'Delivers interactive outputs to web interfaces, XR endpoints, and on-site control surfaces.',
    },
  ],
}

const defaultFlow: TechnologyFlowContent = {
  eyebrow: 'Delivery Flow',
  title: 'Controlled integration from input to deployment',
  description: 'Every step produces concrete outputs to reduce uncertainty during rollout.',
  stats: [
    { label: 'Latency', value: '4ms' },
    { label: 'Protocol', value: 'UDP/TCP' },
    { label: 'Throughput', value: '10GB/s' },
  ],
  steps: [
    {
      number: '01',
      title: 'Data Sources',
      description: 'Collect and validate data from sensors, internal systems, and third-party interfaces.',
    },
    {
      number: '02',
      title: 'API Integration',
      description: 'Define service contracts and dependency boundaries for stable integration.',
    },
    {
      number: '03',
      title: 'Backend Processing',
      description: 'Execute governance rules, model inference, and service orchestration pipelines.',
    },
    {
      number: '04',
      title: 'Frontend Rendering',
      description: 'Map processed outputs into web and XR interfaces with clear hierarchy.',
    },
    {
      number: '05',
      title: 'Device Delivery',
      description: 'Deploy and monitor runtime behavior across field devices and control endpoints.',
    },
  ],
}

const defaultReliability: TechnologyReliabilityContent = {
  eyebrow: 'Reliability',
  title: 'Quality and maintenance designed into delivery',
  description: 'Operational confidence depends on repeatable quality standards beyond initial launch.',
  items: [
    {
      number: '01',
      title: 'Quality verification',
      description: 'Functional, performance, and load testing are executed before each release gate.',
    },
    {
      number: '02',
      title: 'Cross-device compatibility',
      description: 'Platform and hardware compatibility is validated across targeted deployment environments.',
    },
    {
      number: '03',
      title: 'Continuous operations',
      description: 'Monitoring, issue response, and version lifecycle updates keep services stable after go-live.',
    },
  ],
}

const defaultCta: TechnologyCtaContent = {
  title: 'Need deeper technical planning for your scenario?',
  description: 'Share your constraints and timeline. We provide architecture guidance, phased milestones, and implementation recommendations.',
  primaryAction: { label: 'Talk to the technical team', href: '/contact' },
  secondaryAction: { label: 'Review solutions', href: '/solutions' },
}

const defaultContent: TechnologyTemplateContent = {
  hero: defaultHero,
  overview: defaultOverview,
  modules: defaultModules,
  architecture: defaultArchitecture,
  flow: defaultFlow,
  reliability: defaultReliability,
  cta: defaultCta,
}

function parseHero(value: unknown, fallback: TechnologyHeroContent): TechnologyHeroContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    eyebrow: asString(record.eyebrow, fallback.eyebrow),
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    panelTitle: asString(record.panelTitle, fallback.panelTitle),
    panelDescription: asString(record.panelDescription, fallback.panelDescription),
    tags: asStringArray(record.tags, fallback.tags),
    graphicStates: asStringArray(record.graphicStates, fallback.graphicStates),
    quickLinks: parseActionLinks(record.quickLinks, fallback.quickLinks),
    primaryAction: parseActionLink(record.primaryAction, fallback.primaryAction),
    secondaryAction: parseActionLink(record.secondaryAction, fallback.secondaryAction),
  }
}

function parseOverview(value: unknown, fallback: TechnologyOverviewContent): TechnologyOverviewContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    eyebrow: asString(record.eyebrow, fallback.eyebrow),
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    items: parseOverviewItems(record.items, fallback.items),
  }
}

function parseModules(value: unknown, fallback: TechnologyModulesContent): TechnologyModulesContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    eyebrow: asString(record.eyebrow, fallback.eyebrow),
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    activeItemLabel: asString(record.activeItemLabel, fallback.activeItemLabel),
    items: parseModuleItems(record.items, fallback.items),
  }
}

function parseArchitecture(value: unknown, fallback: TechnologyArchitectureContent): TechnologyArchitectureContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    eyebrow: asString(record.eyebrow, fallback.eyebrow),
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    layers: parseArchitectureLayers(record.layers, fallback.layers),
  }
}

function parseFlow(value: unknown, fallback: TechnologyFlowContent): TechnologyFlowContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    eyebrow: asString(record.eyebrow, fallback.eyebrow),
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    stats: parseFlowStats(record.stats, fallback.stats),
    steps: parseFlowSteps(record.steps, fallback.steps),
  }
}

function parseReliability(value: unknown, fallback: TechnologyReliabilityContent): TechnologyReliabilityContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    eyebrow: asString(record.eyebrow, fallback.eyebrow),
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    items: parseReliabilityItems(record.items, fallback.items),
  }
}

function parseCta(value: unknown, fallback: TechnologyCtaContent): TechnologyCtaContent {
  const record = asRecord(value)
  if (!record) {
    return fallback
  }

  return {
    title: asString(record.title, fallback.title),
    description: asString(record.description, fallback.description),
    primaryAction: parseActionLink(record.primaryAction, fallback.primaryAction),
    secondaryAction: parseActionLink(record.secondaryAction, fallback.secondaryAction),
  }
}

export function buildTechnologyTemplateContent(t: TranslateFn): TechnologyTemplateContent {
  const rawRoot = t<unknown>('pages.technologyTemplate')
  const root = asRecord(rawRoot) ?? {}

  return {
    hero: parseHero(root.hero, defaultContent.hero),
    overview: parseOverview(root.overview, defaultContent.overview),
    modules: parseModules(root.modules, defaultContent.modules),
    architecture: parseArchitecture(root.architecture, defaultContent.architecture),
    flow: parseFlow(root.flow, defaultContent.flow),
    reliability: parseReliability(root.reliability, defaultContent.reliability),
    cta: parseCta(root.cta, defaultContent.cta),
  }
}
