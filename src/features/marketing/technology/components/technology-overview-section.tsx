'use client'

import type { TechnologyOverviewSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'

export function TechnologyOverviewSection({ overview }: TechnologyOverviewSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell className="border-b border-pencil-200 dark:border-white/10">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{overview.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">{overview.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{overview.description}</p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {overview.items.map((item, index) => (
          <motion.article
            key={item.label}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.06 })}
            className="glass-card-hover rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900"
          >
            <p className="swiss-mono text-[10px] text-pencil-500 dark:text-pencil-400">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white">{item.value}</p>
            <p className="mt-4 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </TechnologySectionShell>
  )
}
