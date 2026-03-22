'use client'

import type { TechnologyFlowSectionProps } from '@/features/marketing/technology/types'
import { useState } from 'react'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { cn } from '@/shared/lib/cn'

export function TechnologyFlowSection({ flow }: TechnologyFlowSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="tech-flow" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">
            {flow.eyebrow}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-pencil-950 sm:text-5xl lg:text-balance dark:text-white">
            {flow.title}
          </p>
          <p className="mt-6 text-lg/8 text-pencil-600 dark:text-pencil-400">
            {flow.description}
          </p>
        </FadeIn>

        {/* Stats */}
        <StaggerContainer
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3 lg:max-w-none"
        >
          {flow.stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-pencil-200/70 bg-white/70 p-6 text-center dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm font-semibold text-pencil-500 dark:text-pencil-400">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pencil-950 dark:text-white">
                {stat.value}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-3xl">
          <StaggerContainer
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {flow.steps.map((step, index) => (
              <StaggerItem
                key={step.number}
                className={cn(
                  'group flex items-start gap-6 rounded-2xl border p-6 transition-all duration-300 cursor-pointer',
                  activeIndex === index
                    ? 'border-accent-500/30 bg-white shadow-lg shadow-accent-500/5 dark:border-accent-500/20 dark:bg-white/10'
                    : 'border-pencil-200/70 bg-white/70 hover:border-accent-500/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10',
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <div
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold transition-colors duration-200',
                    activeIndex === index
                      ? 'bg-accent-600 text-white dark:bg-accent-500'
                      : 'bg-accent-600/10 text-accent-600 group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/20 dark:text-accent-400 dark:group-hover:bg-accent-500 dark:group-hover:text-white',
                  )}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    className={cn(
                      'text-base font-semibold transition-colors duration-200',
                      activeIndex === index
                        ? 'text-pencil-950 dark:text-white'
                        : 'text-pencil-700 dark:text-pencil-300 group-hover:text-pencil-950 dark:group-hover:text-white',
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm/6 text-pencil-600 dark:text-pencil-400">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
