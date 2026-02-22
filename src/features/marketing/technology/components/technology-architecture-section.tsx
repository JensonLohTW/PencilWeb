'use client'

import type { TechnologyArchitectureSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'

export function TechnologyArchitectureSection({ architecture }: TechnologyArchitectureSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <TechnologySectionShell id="tech-architecture" className="relative overflow-hidden border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] text-pencil-950 dark:text-white">
      {/* Background Parallax Wireframes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <ParallaxLayer y={[-40, 40]} className="absolute -left-20 top-20 text-pencil-900 dark:text-white">
          <svg width="400" height="400" viewBox="0 0 100 100" className="fill-current">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </ParallaxLayer>
        <ParallaxLayer y={[60, -60]} className="absolute -right-40 bottom-10 text-pencil-900 dark:text-white">
          <svg width="600" height="600" viewBox="0 0 100 100" className="fill-current">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </ParallaxLayer>
      </div>

      <motion.div {...technologyReveal(!!reduceMotion)} className="relative z-10 max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-500 dark:text-[#888]">{architecture.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-pencil-950 dark:text-white sm:text-5xl lg:text-6xl uppercase">
          {architecture.title}
        </h2>
        <p className="mt-6 font-mono text-sm leading-relaxed text-pencil-600 dark:text-[#888] lg:text-base">
          {architecture.description}
        </p>
      </motion.div>

      <div className="relative z-10 mt-16 flex flex-col border-t border-pencil-700/10 dark:border-white/10">
        {architecture.layers.map((layer, index) => (
          <motion.article
            key={layer.layer}
            {...technologyReveal(!!reduceMotion, { delay: index * 0.06 })}
            className="group relative flex flex-col border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] p-8 transition-colors duration-300 hover:bg-pencil-50 dark:hover:bg-white/[0.02] lg:flex-row lg:items-center lg:p-12"
          >
            {/* Left structural node */}
            <div className="mb-6 flex shrink-0 items-center gap-6 lg:mb-0 lg:w-64">
              <div className="flex h-12 w-12 items-center justify-center border border-pencil-700/20 dark:border-white/20 bg-white dark:bg-[#0A0A0A] transition-colors duration-300 group-hover:border-cta group-hover:bg-cta/10">
                <div className="h-1.5 w-1.5 bg-pencil-300 dark:bg-white/50 group-hover:bg-cta dark:group-hover:bg-cta" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-400 dark:text-[#666] transition-colors duration-200 group-hover:text-pencil-900 dark:group-hover:text-white">
                {layer.layer}
              </p>
            </div>

            {/* Vertical connector line (desktop) */}
            <div className="absolute top-0 bottom-0 left-14 hidden w-px bg-pencil-700/10 dark:bg-white/10 lg:block lg:group-last:bottom-1/2" />

            <div className="lg:pl-16">
              <h3 className="text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white uppercase">{layer.title}</h3>
              <p className="mt-4 max-w-3xl font-mono text-[11px] leading-relaxed text-pencil-500 dark:text-[#888] uppercase tracking-wide">
                {layer.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </TechnologySectionShell>
  )
}

