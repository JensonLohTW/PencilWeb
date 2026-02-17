'use client'

import type { TechnologyModulesSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'

export function TechnologyModulesSection({ modules }: TechnologyModulesSectionProps) {
  const reduceMotion = useReducedMotion()
  const defaultId = modules.items[0]?.id ?? ''
  const [activeId, setActiveId] = useState(defaultId)

  const activeModule = useMemo(
    () => modules.items.find((item) => item.id === activeId) ?? modules.items[0],
    [activeId, modules.items],
  )

  return (
    <TechnologySectionShell id="tech-modules" className="border-b border-pencil-200 dark:border-white/10">
      <motion.div {...technologyReveal(!!reduceMotion)} className="max-w-3xl">
        <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{modules.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">{modules.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{modules.description}</p>
      </motion.div>

      {activeModule ? (
        <motion.article
          key={activeModule.id}
          {...technologyReveal(!!reduceMotion, { delay: 0.06, y: 14, duration: 0.35 })}
          className="glass-card-hover mt-10 rounded-3xl border border-pencil-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-pencil-900"
        >
          <p className="swiss-mono text-[10px] text-pencil-500 dark:text-pencil-400">{modules.activeItemLabel}</p>
          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="swiss-mono text-sm text-cta">{activeModule.number}</span>
            <h3 className="text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white">{activeModule.title}</h3>
            <p className="text-sm text-pencil-500 dark:text-pencil-400">{activeModule.subtitle}</p>
          </div>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{activeModule.description}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {activeModule.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-pencil-200 bg-pencil-50 px-4 py-3 text-sm text-pencil-700 dark:border-white/10 dark:bg-white/5 dark:text-pencil-200"
              >
                {feature}
              </li>
            ))}
          </ul>
        </motion.article>
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.items.map((module, index) => (
          <motion.button
            key={module.id}
            type="button"
            onClick={() => setActiveId(module.id)}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.05 })}
            className={
              activeId === module.id
                ? 'group rounded-2xl border border-cta bg-neon-50 p-6 text-left shadow-md transition-all duration-200 dark:bg-neon-950/20'
                : 'glass-card-hover group rounded-2xl border border-pencil-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900'
            }
          >
            <p className="swiss-mono text-[10px] text-pencil-500 dark:text-pencil-400">{module.number}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-pencil-950 transition-colors duration-200 group-hover:text-cta dark:text-white">
              {module.title}
            </h3>
            <p className="mt-2 text-sm text-pencil-500 dark:text-pencil-400">{module.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{module.description}</p>
          </motion.button>
        ))}
      </div>
    </TechnologySectionShell>
  )
}
