'use client'

import { Link } from '@/i18n/routing'
import type { ProjectsCtaSectionProps } from '@/features/marketing/projects/types'
import { motion, useReducedMotion } from 'framer-motion'

export function ProjectsCtaSection({ cta }: ProjectsCtaSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-6 pb-24 pt-10 lg:px-16">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.45 }}
        className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-pencil-200 bg-white px-6 py-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between dark:border-white/10 dark:bg-pencil-900"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pencil-950 sm:text-4xl dark:text-white">{cta.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-pencil-600 dark:text-pencil-300">{cta.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={cta.primaryAction.href}
            className="inline-flex items-center rounded-md bg-cta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neon-700"
          >
            {cta.primaryAction.label}
          </Link>
          <Link
            href={cta.secondaryAction.href}
            className="inline-flex items-center rounded-md border border-pencil-300 px-5 py-3 text-sm font-semibold text-pencil-900 transition-colors hover:border-cta hover:text-cta dark:border-white/20 dark:text-white"
          >
            {cta.secondaryAction.label}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
