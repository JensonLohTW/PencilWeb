'use client'

import type { TechnologyReliabilitySectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'
import { TiltArticle } from '@/shared/ui/animations/tilt-article'

export function TechnologyReliabilitySection({ reliability }: TechnologyReliabilitySectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell id="tech-reliability" className="border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] text-pencil-950 dark:text-white">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-500 dark:text-[#888]">{reliability.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-pencil-950 dark:text-white sm:text-5xl lg:text-6xl uppercase">
          {reliability.title}
        </h2>
        <p className="mt-6 font-mono text-sm leading-relaxed text-pencil-600 dark:text-[#888] lg:text-base">
          {reliability.description}
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 border-t border-l border-pencil-700/10 dark:border-white/10 md:grid-cols-3">
        {reliability.items.map((item, index) => (
          <TiltArticle
            key={item.number}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.07 })}
            className="group flex flex-col border-b border-r border-pencil-700/10 dark:border-white/10 p-8 transition-colors duration-300 hover:bg-pencil-50 dark:hover:bg-white/[0.02]"
            intensity={5}
          >
            <p className="font-mono text-lg font-medium tracking-widest text-pencil-300 dark:text-white/40 transition-colors duration-200 group-hover:text-cta dark:group-hover:text-cta">
              {item.number}
            </p>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white uppercase">{item.title}</h3>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-pencil-500 dark:text-[#888] uppercase tracking-wide">
              {item.description}
            </p>
          </TiltArticle>
        ))}
      </div>
    </TechnologySectionShell>
  )
}

