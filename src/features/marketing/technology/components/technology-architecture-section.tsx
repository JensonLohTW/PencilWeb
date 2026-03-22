'use client'

import type { TechnologyArchitectureSectionProps } from '@/features/marketing/technology/types'
import { cn } from '@/shared/lib/cn'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { ChevronDown } from 'lucide-react'

export function TechnologyArchitectureSection({ architecture }: TechnologyArchitectureSectionProps) {
  const reduceMotion = useReducedMotion()
  const [activeLayerIndex, setActiveLayerIndex] = useState(0)

  return (
    <section id="tech-architecture" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">
            {architecture.eyebrow}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-pencil-950 sm:text-5xl lg:text-balance dark:text-white">
            {architecture.title}
          </p>
          <p className="mt-6 text-lg/8 text-pencil-600 dark:text-pencil-400">
            {architecture.description}
          </p>
        </FadeIn>

        <StaggerContainer
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:mt-24 md:grid-cols-3"
        >
          {architecture.layers.map((layer, index) => (
            <StaggerItem
              key={layer.layer}
              as="article"
              className={cn(
                'group relative overflow-hidden rounded-2xl border transition-all duration-300',
                index === activeLayerIndex
                  ? 'border-accent-500/30 bg-white shadow-xl shadow-accent-500/5 dark:border-accent-500/20 dark:bg-white/10'
                  : 'border-pencil-200/70 bg-white/70 hover:border-accent-500/20 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10',
              )}
            >
              <button
                id={`tech-architecture-trigger-${index}`}
                type="button"
                aria-expanded={index === activeLayerIndex}
                aria-controls={`tech-architecture-panel-${index}`}
                onClick={() => setActiveLayerIndex(index)}
                className="w-full cursor-pointer p-6 text-left outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent-500/70 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-pencil-950 sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600/10 transition-colors duration-300 group-hover:bg-accent-600 dark:bg-accent-500/20 dark:group-hover:bg-accent-500">
                      <div className="h-2 w-2 rounded-full bg-accent-600 transition-colors duration-300 group-hover:bg-white dark:bg-accent-400 dark:group-hover:bg-white" />
                    </div>
                    <p className="text-sm font-semibold text-pencil-500 transition-colors duration-200 group-hover:text-pencil-950 dark:text-pencil-400 dark:group-hover:text-white">
                      {layer.layer}
                    </p>
                  </div>

                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-pencil-400 transition-transform duration-300 dark:text-pencil-500',
                      index === activeLayerIndex && 'rotate-180 text-accent-600 dark:text-accent-400',
                    )}
                  />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-pencil-950 dark:text-white">
                  {layer.title}
                </h3>
              </button>

              <motion.div
                id={`tech-architecture-panel-${index}`}
                role="region"
                aria-labelledby={`tech-architecture-trigger-${index}`}
                initial={false}
                animate={index === activeLayerIndex ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  'overflow-hidden',
                  index === activeLayerIndex ? 'pointer-events-auto' : 'pointer-events-none',
                )}
              >
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <p className="max-w-3xl text-base/7 text-pencil-600 dark:text-pencil-400">
                    {layer.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
