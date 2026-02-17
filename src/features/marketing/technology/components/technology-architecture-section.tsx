'use client'

import type { TechnologyArchitectureSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'

export function TechnologyArchitectureSection({ architecture }: TechnologyArchitectureSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell id="tech-architecture" className="border-b border-pencil-200 bg-pencil-50 dark:border-white/10 dark:bg-pencil-950/50">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{architecture.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
          {architecture.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{architecture.description}</p>
      </motion.div>

      <div className="mt-12 grid gap-5">
        {architecture.layers.map((layer, index) => (
          <motion.article
            key={layer.layer}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.06 })}
            className="glass-card-hover grid gap-4 rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-cta hover:shadow-lg lg:grid-cols-[11rem_minmax(0,1fr)] dark:border-white/10 dark:bg-pencil-900"
          >
            <p className="swiss-mono text-xs tracking-[0.14em] text-pencil-500 dark:text-pencil-400">{layer.layer}</p>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white">{layer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{layer.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </TechnologySectionShell>
  )
}
