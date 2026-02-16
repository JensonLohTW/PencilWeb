'use client'

import type { FeatureIconKey, ProjectsFeatureHighlightSectionProps } from '@/features/marketing/projects/types'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { motion, useReducedMotion } from 'framer-motion'

const iconMap: Record<FeatureIconKey, typeof CloudArrowUpIcon> = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  server: ServerIcon,
  sync: ArrowPathIcon,
}

export function ProjectsFeatureHighlightSection({ featureHighlight }: ProjectsFeatureHighlightSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="feature-highlight" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-pencil-800/60 bg-pencil-950 px-6 py-16 sm:px-10 lg:px-14 dark:border-white/10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{featureHighlight.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-pencil-300 sm:text-lg">{featureHighlight.description}</p>

            <dl className="mt-10 space-y-7">
              {featureHighlight.items.map((item, index) => {
                const Icon = iconMap[item.icon]
                return (
                  <motion.div
                    key={item.name}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.08 }}
                    className="relative pl-9"
                  >
                    <dt className="font-semibold text-white">
                      <Icon aria-hidden="true" className="absolute left-0 top-1 size-5 text-cta" />
                      {item.name}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-pencil-300">{item.description}</dd>
                  </motion.div>
                )
              })}
            </dl>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              alt={featureHighlight.image.alt}
              src={featureHighlight.image.src}
              width={featureHighlight.image.width}
              height={featureHighlight.image.height}
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
