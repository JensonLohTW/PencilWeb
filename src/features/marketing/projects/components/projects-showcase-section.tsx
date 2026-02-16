'use client'

import { Link } from '@/i18n/routing'
import type { ProjectsShowcaseSectionProps } from '@/features/marketing/projects/types'
import { motion, useReducedMotion } from 'framer-motion'

export function ProjectsShowcaseSection({ showcase }: ProjectsShowcaseSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="project-showcase" className="border-y border-pencil-200 bg-pencil-50 px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-pencil-950/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mb-14 max-w-3xl"
        >
          <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{showcase.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
            {showcase.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{showcase.description}</p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-3">
          {showcase.items.map((item, index) => (
            <motion.article
              key={item.number}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
              className="group relative rounded-2xl border border-pencil-200 bg-white p-7 shadow-sm transition-colors hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="swiss-mono text-xs text-pencil-500 dark:text-pencil-400">{item.number}</span>
                <span className="swiss-mono rounded-full border border-pencil-200 bg-pencil-50 px-3 py-1 text-[10px] uppercase tracking-wide text-pencil-600 dark:border-white/10 dark:bg-white/5 dark:text-pencil-300">
                  {item.category}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-pencil-950 transition-colors group-hover:text-cta dark:text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.summary}</p>

              <div className="mt-8 border-t border-pencil-200 pt-5 dark:border-white/10">
                <p className="swiss-mono text-[10px] uppercase tracking-[0.18em] text-pencil-500 dark:text-pencil-400">
                  {showcase.metricLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-pencil-900 dark:text-white">{item.metric}</p>
              </div>

              <Link href={item.href} className="absolute inset-0 z-10">
                <span className="sr-only">{showcase.viewLabel}</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
