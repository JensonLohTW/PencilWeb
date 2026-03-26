'use client'

import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import type { TechnologyReliabilitySectionProps } from '@/features/marketing/technology/types'
import { TiltArticle } from '@/shared/ui/animations/tilt-article'

export function TechnologyReliabilitySection({ reliability }: TechnologyReliabilitySectionProps) {
  return (
    <section id="tech-reliability" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{reliability.eyebrow}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-pencil-950 sm:text-5xl lg:text-balance dark:text-white">
            {reliability.title}
          </p>
          <p className="mt-6 text-lg/8 text-pencil-600 dark:text-pencil-400">{reliability.description}</p>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <StaggerContainer
            viewport={{ once: true, amount: 0.2 }}
            className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          >
            {reliability.items.map((item) => (
              <StaggerItem key={item.number}>
                <TiltArticle
                  className="group relative flex flex-col rounded-2xl border border-pencil-200/70 bg-white/70 p-8 transition-all duration-300 hover:border-accent-500/30 hover:bg-white hover:shadow-xl hover:shadow-accent-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  intensity={5}
                >
                  <p className="text-3xl font-semibold text-accent-600 dark:text-accent-400">{item.number}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-pencil-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base/7 text-pencil-600 dark:text-pencil-400">{item.description}</p>
                </TiltArticle>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
