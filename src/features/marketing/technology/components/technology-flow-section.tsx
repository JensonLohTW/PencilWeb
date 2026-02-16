'use client'

import type { TechnologyFlowSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'

export function TechnologyFlowSection({ flow }: TechnologyFlowSectionProps) {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  const progressWidth = useMemo(() => {
    if (flow.steps.length <= 1) {
      return '0%'
    }

    return `${(activeIndex / (flow.steps.length - 1)) * 100}%`
  }, [activeIndex, flow.steps.length])

  return (
    <TechnologySectionShell id="tech-flow" className="border-b border-pencil-200 dark:border-white/10">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{flow.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">{flow.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{flow.description}</p>
      </motion.div>

      <div className="relative mt-12">
        <div className="absolute top-8 right-0 left-0 hidden h-px bg-pencil-200 lg:block dark:bg-white/20" />
        <div
          className="absolute top-8 left-0 hidden h-px bg-cta transition-[width] duration-300 ease-out lg:block"
          style={{ width: progressWidth }}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {flow.steps.map((step, index) => (
            <motion.button
              key={step.number}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              {...technologyReveal(!!reduceMotion, { delay: index * 0.05 })}
              className="group rounded-2xl border border-pencil-200 bg-white p-5 text-left shadow-sm transition-all duration-200 hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900"
            >
              <div
                className={
                  activeIndex >= index
                    ? 'swiss-mono inline-flex size-11 items-center justify-center rounded-full border border-cta bg-neon-50 text-xs text-cta dark:bg-neon-950/20'
                    : 'swiss-mono inline-flex size-11 items-center justify-center rounded-full border border-pencil-300 text-xs text-pencil-600 dark:border-white/20 dark:text-pencil-300'
                }
              >
                {step.number}
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-pencil-950 group-hover:text-cta dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{step.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </TechnologySectionShell>
  )
}
