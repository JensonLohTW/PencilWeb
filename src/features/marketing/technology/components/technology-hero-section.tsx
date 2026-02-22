'use client'

import { Link } from '@/i18n/routing'
import type { TechnologyHeroSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { technologyReveal } from './technology-motion'
import { TechnologyHeroGraphic } from './technology-hero-graphic'

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
  const columns = Array.from({ length: 10 })

  return (
    <section className="relative isolate flex min-h-[calc(100vh-4rem)] flex-col border-b border-pencil-200 bg-pencil-50 overflow-hidden dark:border-white/10 dark:bg-pencil-950">
      {/* Top Bar */}
      <div className="grid grid-cols-2 border-b border-pencil-700/10 text-[10px] uppercase tracking-widest text-pencil-500 sm:grid-cols-4 dark:border-white/10 dark:text-pencil-400 font-mono">
        <div className="border-r border-pencil-700/10 px-6 py-4 dark:border-white/10">
          <span className="font-semibold text-pencil-900 dark:text-pencil-100">{hero.eyebrow}</span> v1.0.4
        </div>
        <div className="border-r border-pencil-700/10 px-6 py-4 hidden sm:block dark:border-white/10">
          System Status: <span className="text-emerald-500">● Online</span>
        </div>
        <div className="border-r border-pencil-700/10 px-6 py-4 hidden sm:block dark:border-white/10">
          User: Guest
        </div>
        <div className="px-6 py-4 text-right">
          <a href={hero.primaryAction.href} className="hover:text-cta transition-colors">
            Menu +
          </a>
        </div>
      </div>

      {/* Main Grid Area */}
      <div className="relative flex flex-1 flex-col">
        {/* Background Grid Elements */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10">
          {columns.map((_, i) => (
            <div
              key={i}
              className="border-r border-pencil-700/10 last:border-r-0 dark:border-white/10"
            />
          ))}
        </div>

        {/* Horizontal Bisecting Line */}
        <div className="pointer-events-none absolute top-1/2 w-full border-t border-pencil-700/10 dark:border-white/10" />

        {/* Central Generator Block */}
        <TechnologyHeroGraphic labels={hero.graphicStates} />

        {/* Bottom Content Area */}
        <div className="relative z-10 mt-auto flex flex-col justify-end p-6 sm:p-10 lg:p-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            {/* Left Typography */}
            <motion.div {...technologyReveal(!!reduceMotion, { delay: 0.3 })} className="max-w-3xl">
              <div className="mb-4 text-[10px] font-mono uppercase tracking-widest text-pencil-500 leading-relaxed dark:text-pencil-400 space-y-1">
                <p>RENDER_TARGET: NULL</p>
                <p>LATENCY: 12ms</p>
                <p>SEED: 3938210</p>
              </div>

              <KineticHeading
                as="h1"
                text={hero.title}
                className="text-5xl font-medium tracking-tight text-pencil-950 sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.9] dark:text-white"
              />
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-pencil-700 sm:text-base dark:text-pencil-300">
                {hero.description}
              </p>
            </motion.div>

            {/* Right Action Panel */}
            <motion.div
              {...technologyReveal(!!reduceMotion, { delay: 0.4 })}
              className="flex shrink-0 flex-col gap-4 font-mono text-[10px] uppercase tracking-widest sm:flex-row md:flex-col"
            >
              <ul className="flex flex-col gap-2 mb-4 sm:mb-0 md:mb-4">
                {hero.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-pencil-700/10 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm dark:bg-pencil-900/50 dark:border-white/10 text-pencil-600 dark:text-pencil-300 w-fit"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {renderAction(
                hero.primaryAction.href,
                hero.primaryAction.label,
                'flex items-center justify-center gap-2 border border-pencil-900 bg-pencil-900 px-8 py-5 text-pencil-50 transition-all hover:bg-cta hover:border-cta hover:text-white dark:border-white dark:bg-white dark:text-pencil-950 dark:hover:bg-cta dark:hover:border-cta dark:hover:text-white w-full sm:w-auto text-xs',
              )}
              {renderAction(
                hero.secondaryAction.href,
                hero.secondaryAction.label,
                'flex items-center justify-center gap-2 border border-pencil-300 bg-transparent px-8 py-5 text-pencil-900 transition-all hover:border-pencil-900 dark:border-pencil-700 dark:text-white dark:hover:border-white w-full sm:w-auto text-xs',
              )}
            </motion.div>
          </div>

          {/* Bottom Slider / Progress Bar (Decorative) */}
          <motion.div
            {...technologyReveal(!!reduceMotion, { delay: 0.5 })}
            className="mt-16 flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-pencil-500 dark:text-pencil-400"
          >
            <span>COMPLEXITY</span>
            <div className="relative flex-1 h-[1px] bg-pencil-700/20 dark:bg-white/20">
              <div className="absolute left-1/4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 bg-pencil-900 dark:bg-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
