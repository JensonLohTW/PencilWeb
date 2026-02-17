'use client'

import { Link } from '@/i18n/routing'
import type { FeatureIconKey, ProjectsFeatureGridSectionProps } from '@/features/marketing/projects/types'
import { ArrowPathIcon, ChevronRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

const iconMap: Record<FeatureIconKey, typeof CloudArrowUpIcon> = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  server: ServerIcon,
  sync: ArrowPathIcon,
}

export function ProjectsFeatureGridSection({ featureGrid }: ProjectsFeatureGridSectionProps) {

  return (
    <section id="features" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{featureGrid.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
            {featureGrid.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{featureGrid.description}</p>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-7 lg:grid-cols-3">
          {featureGrid.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <StaggerItem
                as="article"
                key={item.name}
                className="glass-card-hover group rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm transition-colors hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900"
              >
                <div className="flex items-center gap-3 text-pencil-950 dark:text-white">
                  <Icon aria-hidden="true" className="size-5 text-cta" />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.description}</p>

                <div className="mt-6">
                  <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-cta">
                    <span>{item.linkLabel}</span>
                    <ChevronRightIcon className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
