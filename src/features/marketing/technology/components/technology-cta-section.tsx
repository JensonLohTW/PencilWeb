'use client'

import { Link } from '@/i18n/routing'
import type { TechnologyCtaSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'

function renderAction(href: string, label: string, className: string) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export function TechnologyCtaSection({ cta }: TechnologyCtaSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell className="pt-12 pb-24">
      <motion.div
        {...technologyReveal(!!reduceMotion)}
        className="glass-card-hover overflow-hidden rounded-3xl border border-pencil-200 bg-white p-8 shadow-sm sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-8 dark:border-white/10 dark:bg-pencil-900"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pencil-950 sm:text-4xl dark:text-white">{cta.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-pencil-600 dark:text-pencil-300">{cta.description}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
          {renderAction(
            cta.primaryAction.href,
            cta.primaryAction.label,
            'inline-flex items-center rounded-md bg-cta px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neon-700',
          )}
          {renderAction(
            cta.secondaryAction.href,
            cta.secondaryAction.label,
            'inline-flex items-center rounded-md border border-pencil-300 px-5 py-3 text-sm font-semibold text-pencil-900 transition-colors duration-200 hover:border-cta hover:text-cta dark:border-white/20 dark:text-white dark:hover:text-neon-300',
          )}
        </div>
      </motion.div>
    </TechnologySectionShell>
  )
}
