'use client'

import { Link } from '@/i18n/routing'
import type { FeatureIconKey, ProjectsFeatureGridSectionProps } from '@/features/marketing/projects/types'
import { ArrowPathIcon, ChevronRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion, useReducedMotion } from 'framer-motion'

const iconMap: Record<FeatureIconKey, typeof CloudArrowUpIcon> = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  server: ServerIcon,
  sync: ArrowPathIcon,
}

export function ProjectsFeatureGridSection({ featureGrid }: ProjectsFeatureGridSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="features" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-3xl"
        >
          <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{featureGrid.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
            {featureGrid.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pencil-600 dark:text-pencil-300">{featureGrid.description}</p>
        </motion.div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {featureGrid.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.article
                key={item.name}
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
                className="group rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm transition-colors hover:border-cta hover:shadow-lg dark:border-white/10 dark:bg-pencil-900"
              >
                <div className="flex items-center gap-3 text-pencil-950 dark:text-white">
                  <Icon aria-hidden="true" className="size-5 text-cta" />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.description}</p>

                <div className="mt-6">
                  <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-cta">
                    <span>{item.linkLabel}</span>
                    <ChevronRightIcon className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
