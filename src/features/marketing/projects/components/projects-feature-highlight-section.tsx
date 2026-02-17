'use client'

import Image from 'next/image'
import type { FeatureIconKey, ProjectsFeatureHighlightSectionProps } from '@/features/marketing/projects/types'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

const iconMap: Record<FeatureIconKey, typeof CloudArrowUpIcon> = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  server: ServerIcon,
  sync: ArrowPathIcon,
}

export function ProjectsFeatureHighlightSection({ featureHighlight }: ProjectsFeatureHighlightSectionProps) {

  return (
    <section id="feature-highlight" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-pencil-800/60 bg-pencil-950 px-6 py-16 sm:px-10 lg:px-14 dark:border-white/10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{featureHighlight.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-pencil-300 sm:text-lg">{featureHighlight.description}</p>

            <StaggerContainer as="dl" className="mt-10 space-y-7">
              {featureHighlight.items.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <StaggerItem
                    key={item.name}
                    className="relative pl-9"
                  >
                    <dt className="font-semibold text-white">
                      <Icon aria-hidden="true" className="absolute left-0 top-1 size-5 text-cta" />
                      {item.name}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-pencil-300">{item.description}</dd>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </FadeIn>

          <FadeIn
            variant="slideInRight"
            delay={0.1}
            className="relative"
          >
            <Image
              alt={featureHighlight.image.alt}
              src={featureHighlight.image.src}
              width={featureHighlight.image.width}
              height={featureHighlight.image.height}
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/30"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
