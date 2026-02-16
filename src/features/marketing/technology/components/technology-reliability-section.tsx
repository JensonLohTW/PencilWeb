'use client'

import type { TechnologyReliabilitySectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'

export function TechnologyReliabilitySection({ reliability }: TechnologyReliabilitySectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell id="tech-reliability" className="border-b border-pencil-200 bg-pencil-50 dark:border-white/10 dark:bg-pencil-950/50">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{reliability.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
          {reliability.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{reliability.description}</p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reliability.items.map((item, index) => (
          <motion.article
            key={item.number}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.07 })}
            className="group rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900"
          >
            <p className="swiss-mono text-sm text-pencil-500 transition-colors duration-200 group-hover:text-cta dark:text-pencil-400">
              {item.number}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </TechnologySectionShell>
  )
}
