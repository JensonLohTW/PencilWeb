'use client'

import type { TechnologyOverviewSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'
import { TiltArticle } from '@/shared/ui/animations/tilt-article'

export function TechnologyOverviewSection({ overview }: TechnologyOverviewSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell className="border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] text-pencil-950 dark:text-white">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-500 dark:text-[#888]">{overview.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-pencil-950 dark:text-white sm:text-5xl lg:text-6xl uppercase">
          {overview.title}
        </h2>
        <p className="mt-6 font-mono text-sm leading-relaxed text-pencil-600 dark:text-[#888] lg:text-base">
          {overview.description}
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 border-t border-l border-pencil-700/10 dark:border-white/10 md:grid-cols-2 xl:grid-cols-4">
        {overview.items.map((item, index) => (
          <TiltArticle
            key={item.label}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.06 })}
            className="group flex flex-col border-b border-r border-pencil-700/10 dark:border-white/10 p-8 transition-colors duration-300 hover:bg-pencil-50 dark:hover:bg-white/[0.02]"
            intensity={5}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-400 dark:text-[#555] transition-colors duration-200 group-hover:text-cta dark:group-hover:text-cta">
              {item.label}
            </p>
            <p className="mt-4 text-5xl font-medium tracking-tighter text-pencil-950 dark:text-white sm:text-6xl">
              {item.value}
            </p>
            <p className="mt-6 font-mono text-[11px] leading-relaxed text-pencil-500 dark:text-[#888] uppercase tracking-wide">
              {item.description}
            </p>
          </TiltArticle>
        ))}
      </div>
    </TechnologySectionShell>
  )
}

