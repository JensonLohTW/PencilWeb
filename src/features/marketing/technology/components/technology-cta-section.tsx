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
    <TechnologySectionShell className="border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] text-pencil-950 dark:text-white pt-24 pb-32">
      <motion.div
        {...technologyReveal(!!reduceMotion)}
        className="flex flex-col border-l border-cta pl-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:pl-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tighter text-pencil-950 dark:text-white sm:text-5xl lg:text-7xl uppercase">
            {cta.title}
          </h2>
          <p className="mt-6 font-mono text-sm leading-relaxed text-pencil-600 dark:text-[#888] lg:text-base">
            {cta.description}
          </p>
        </div>

        <div className="mt-12 flex shrink-0 flex-wrap gap-4 lg:mt-0">
          {renderAction(
            cta.primaryAction.href,
            cta.primaryAction.label,
            'inline-flex h-12 items-center justify-center border border-pencil-950 bg-pencil-950 dark:border-white dark:bg-white px-8 font-mono text-xs font-semibold uppercase tracking-widest text-white dark:text-black transition-all duration-300 hover:bg-transparent dark:hover:bg-transparent hover:text-pencil-950 dark:hover:text-white',
          )}
          {renderAction(
            cta.secondaryAction.href,
            cta.secondaryAction.label,
            'inline-flex h-12 items-center justify-center border border-pencil-700/20 dark:border-white/20 bg-transparent px-8 font-mono text-xs font-semibold uppercase tracking-widest text-pencil-500 dark:text-[#bbb] transition-all duration-300 hover:border-cta hover:text-cta dark:hover:border-cta dark:hover:text-cta',
          )}
        </div>
      </motion.div>
    </TechnologySectionShell>
  )
}

