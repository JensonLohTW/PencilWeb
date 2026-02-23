'use client'

import type { TechnologyModulesSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { technologyReveal } from './technology-motion'
import { TechnologySectionShell } from './technology-section-shell'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'

export function TechnologyModulesSection({ modules }: TechnologyModulesSectionProps) {
  const reduceMotion = useReducedMotion()
  const defaultId = modules.items[0]?.id ?? ''
  const [activeId, setActiveId] = useState(defaultId)

  const activeModule = useMemo(
    () => modules.items.find((item) => item.id === activeId) ?? modules.items[0],
    [activeId, modules.items],
  )

  return (
    <TechnologySectionShell id="tech-modules" className="relative border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] text-pencil-950 dark:text-white overflow-hidden">
      {/* Background Parallax Typography */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5 dark:opacity-[0.02]">
        <ParallaxLayer y={[-100, 100]} className="absolute -right-40 top-40">
          <span className="font-mono text-[20rem] font-bold leading-none tracking-tighter text-pencil-900 dark:text-white">MOD</span>
        </ParallaxLayer>
      </div>

      <motion.div {...technologyReveal(!!reduceMotion)} className="relative z-10 max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-pencil-500 dark:text-[#888]">{modules.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-pencil-950 dark:text-white sm:text-5xl lg:text-6xl uppercase">
          {modules.title}
        </h2>
        <p className="mt-6 font-mono text-sm leading-relaxed text-pencil-600 dark:text-[#888] lg:text-base">
          {modules.description}
        </p>
      </motion.div>

      <div className="relative z-10 mt-16 grid grid-cols-1 border border-pencil-700/10 dark:border-white/10 lg:grid-cols-[300px_1fr]">
        {/* Left Side: Module Selection Menu */}
        <div className="flex flex-col border-b border-pencil-700/10 dark:border-white/10 lg:border-b-0 lg:border-r">
          {modules.items.map((module) => (
            <button
              key={module.id}
              type="button"
              onClick={() => setActiveId(module.id)}
              className={`group flex flex-col items-start border-b border-pencil-700/10 dark:border-white/10 px-6 py-6 text-left transition-colors duration-200 last:border-b-0 ${activeId === module.id ? 'bg-pencil-100 dark:bg-white/[0.04]' : 'hover:bg-pencil-50 dark:hover:bg-white/[0.02]'
                }`}
            >
              <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-200 ${activeId === module.id ? 'text-cta dark:text-cta' : 'text-pencil-400 dark:text-[#555] group-hover:text-pencil-600 dark:group-hover:text-[#888]'
                }`}>
                {module.number}
              </span>
              <span className={`mt-2 font-semibold tracking-wide uppercase transition-colors duration-200 ${activeId === module.id ? 'text-pencil-950 dark:text-white' : 'text-pencil-500 dark:text-white/60 group-hover:text-pencil-900 dark:group-hover:text-white'
                }`}>
                {module.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Active Module Details */}
        <div className="relative min-h-[400px] overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px))] bg-[size:32px_32px]">
          <AnimatePresence mode="wait">
            {activeModule && (
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col p-8 lg:p-12"
              >
                <div className="mb-8 flex items-center justify-between border-b border-pencil-700/10 dark:border-white/10 pb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#cta] text-cta">
                    {modules.activeItemLabel}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-pencil-400 dark:text-[#555]">
                    {activeModule.number}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight text-pencil-950 dark:text-white uppercase xl:text-4xl">
                  {activeModule.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cta/80 dark:text-cta/80">
                  {activeModule.subtitle}
                </p>
                <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-pencil-500 dark:text-[#888]">
                  {activeModule.description}
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {activeModule.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border border-pencil-700/10 dark:border-white/10 bg-pencil-50 dark:bg-white/[0.01] p-4"
                    >
                      <div className="h-1 w-1 bg-cta/60" />
                      <span className="font-mono text-xs uppercase tracking-wider text-pencil-600 dark:text-[#aaa]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </TechnologySectionShell>
  )
}

