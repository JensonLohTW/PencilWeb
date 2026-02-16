'use client'

import { Link } from '@/i18n/routing'
import type { TechnologyHeroSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'

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

export function TechnologyHeroSection({ hero }: TechnologyHeroSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden border-b border-pencil-200 px-6 pb-24 pt-24 lg:px-16 lg:pt-32 dark:border-white/10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(12,10,9,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(12,10,9,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 dark:bg-[linear-gradient(rgba(248,250,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.06)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-neon-100/40 via-neon-50/20 to-transparent dark:from-neon-950/25 dark:via-neon-900/10" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <motion.div {...technologyReveal(!!reduceMotion)}>
          <p className="swiss-mono inline-flex rounded-full border border-pencil-300 bg-white/80 px-3 py-1 text-xs text-cta backdrop-blur-sm dark:border-white/15 dark:bg-pencil-900/80">
            {hero.eyebrow}
          </p>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-pencil-950 sm:text-6xl lg:text-7xl dark:text-white">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pencil-600 sm:text-xl dark:text-pencil-300">
            {hero.description}
          </p>

          <ul className="mt-9 flex flex-wrap gap-3">
            {hero.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-pencil-300 bg-white/70 px-4 py-2 text-xs font-medium text-pencil-700 backdrop-blur-sm dark:border-white/15 dark:bg-pencil-900/60 dark:text-pencil-200"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {renderAction(
              hero.primaryAction.href,
              hero.primaryAction.label,
              'inline-flex items-center gap-2 rounded-md bg-cta px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neon-700',
            )}
            {renderAction(
              hero.secondaryAction.href,
              hero.secondaryAction.label,
              'inline-flex items-center gap-2 text-sm font-semibold text-pencil-900 transition-colors duration-200 hover:text-cta dark:text-white dark:hover:text-neon-300',
            )}
          </div>
        </motion.div>

        <motion.aside
          {...technologyReveal(!!reduceMotion, { delay: 0.08, y: 20, duration: 0.5 })}
          className="rounded-3xl border border-pencil-200 bg-white/90 p-7 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-pencil-900/85"
        >
          <p className="swiss-mono text-xs text-cta">{hero.panelTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{hero.panelDescription}</p>

          <ul className="mt-6 space-y-3 border-t border-pencil-200 pt-5 dark:border-white/10">
            {hero.quickLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                {renderAction(
                  link.href,
                  link.label,
                  'group inline-flex w-full items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-pencil-700 transition-all duration-200 hover:border-pencil-200 hover:bg-pencil-50 hover:text-cta dark:text-pencil-200 dark:hover:border-white/10 dark:hover:bg-white/5',
                )}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
