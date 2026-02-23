'use client'

import type { TechnologyArchitectureSectionProps } from '@/features/marketing/technology/types'
import { cn } from '@/shared/lib/cn'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'

export function TechnologyArchitectureSection({ architecture }: TechnologyArchitectureSectionProps) {
  const reduceMotion = useReducedMotion()
  const [activeLayerIndex, setActiveLayerIndex] = useState(0)

  const layoutTransition = reduceMotion
    ? { duration: 0 }
    : {
        type: 'spring' as const,
        stiffness: 220,
        damping: 24,
        mass: 0.7,
      }

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

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-4 border-t border-pencil-700/10 pt-6 dark:border-white/10 md:grid-cols-12 md:gap-5 md:pt-8">
        {architecture.layers.map((layer, index) => (
          <motion.article
            key={layer.layer}
            layout
            {...technologyReveal(!!reduceMotion, { delay: index * 0.06 })}
            transition={layoutTransition}
            className={cn(
              'group relative overflow-hidden border border-pencil-700/10 bg-white/95 dark:border-white/10 dark:bg-[#0A0A0A]/95',
              'transition-colors duration-300 hover:bg-pencil-50 dark:hover:bg-white/[0.02]',
              'md:col-span-6 lg:col-span-4',
              index === activeLayerIndex && 'md:col-span-12 lg:col-span-8'
            )}
          >
            <button
              id={`tech-architecture-trigger-${index}`}
              type="button"
              aria-expanded={index === activeLayerIndex}
              aria-controls={`tech-architecture-panel-${index}`}
              onClick={() => setActiveLayerIndex(index)}
              className="w-full cursor-pointer p-6 text-left outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cta/70 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0A0A0A] sm:p-7 lg:p-8"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-pencil-700/20 bg-white transition-colors duration-300 group-hover:border-cta group-hover:bg-cta/10 dark:border-white/20 dark:bg-[#0A0A0A]">
                    <div className="h-1.5 w-1.5 bg-pencil-300 transition-colors duration-300 group-hover:bg-cta dark:bg-white/50 dark:group-hover:bg-cta" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-400 transition-colors duration-200 group-hover:text-pencil-900 dark:text-[#666] dark:group-hover:text-white">
                    {layer.layer}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center border border-pencil-700/15 font-mono text-xs text-pencil-500 transition-transform duration-300 dark:border-white/15 dark:text-[#888]',
                    index === activeLayerIndex && 'rotate-45 text-cta dark:text-cta'
                  )}
                >
                  +
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white uppercase">{layer.title}</h3>
              <p
                className={cn(
                  'mt-4 font-mono text-[11px] uppercase tracking-wide text-pencil-500 transition-opacity duration-300 dark:text-[#888]',
                  index === activeLayerIndex ? 'opacity-40' : 'opacity-100'
                )}
              >
                {layer.description}
              </p>
            </button>

            <motion.div
              id={`tech-architecture-panel-${index}`}
              role="region"
              aria-labelledby={`tech-architecture-trigger-${index}`}
              initial={false}
              animate={index === activeLayerIndex ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'overflow-hidden border-t border-pencil-700/10 dark:border-white/10',
                index === activeLayerIndex ? 'pointer-events-auto' : 'pointer-events-none'
              )}
            >
              <div className="px-6 pb-7 pt-5 sm:px-7 lg:px-8">
                <p className="max-w-3xl font-mono text-xs leading-relaxed text-pencil-600 dark:text-[#999]">{layer.description}</p>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </TechnologySectionShell>
  )
}
