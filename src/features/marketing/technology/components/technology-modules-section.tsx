'use client'

import { FadeIn } from '@/components/animations/fade-in'
import type { TechnologyModulesSectionProps } from '@/features/marketing/technology/types'
import { cn } from '@/shared/lib/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useMemo, useState } from 'react'

export function TechnologyModulesSection({ modules }: TechnologyModulesSectionProps) {
  const defaultId = modules.items[0]?.id ?? ''
  const [activeId, setActiveId] = useState(defaultId)

  const activeModule = useMemo(
    () => modules.items.find((item) => item.id === activeId) ?? modules.items[0],
    [activeId, modules.items],
  )

  return (
    <section id="tech-modules" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{modules.eyebrow}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-pencil-950 sm:text-5xl lg:text-balance dark:text-white">
            {modules.title}
          </p>
          <p className="mt-6 text-lg/8 text-pencil-600 dark:text-pencil-400">{modules.description}</p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* Left Side: Module Selection */}
          <FadeIn className="flex flex-col gap-2">
            {modules.items.map((module) => (
              <button
                key={module.id}
                type="button"
                onClick={() => setActiveId(module.id)}
                className={cn(
                  'flex flex-col items-start rounded-xl px-5 py-4 text-left transition-all duration-200',
                  activeId === module.id
                    ? 'bg-accent-50 ring-1 ring-accent-500/20 dark:bg-accent-500/10 dark:ring-accent-500/20'
                    : 'hover:bg-pencil-50 dark:hover:bg-white/5',
                )}
              >
                <span
                  className={cn(
                    'text-xs font-semibold transition-colors duration-200',
                    activeId === module.id
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-pencil-400 dark:text-pencil-500',
                  )}
                >
                  {module.number}
                </span>
                <span
                  className={cn(
                    'mt-1 text-sm font-semibold transition-colors duration-200',
                    activeId === module.id ? 'text-pencil-950 dark:text-white' : 'text-pencil-600 dark:text-pencil-400',
                  )}
                >
                  {module.title}
                </span>
              </button>
            ))}
          </FadeIn>

          {/* Right Side: Active Module Details */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-pencil-200/70 bg-white/70 p-8 lg:p-10 dark:border-white/10 dark:bg-white/5">
            <AnimatePresence mode="wait">
              {activeModule && (
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col"
                >
                  <p className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                    {modules.activeItemLabel}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-pencil-950 xl:text-3xl dark:text-white">
                    {activeModule.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-600/80 dark:text-accent-400/80">
                    {activeModule.subtitle}
                  </p>
                  <p className="mt-4 max-w-2xl text-base/7 text-pencil-600 dark:text-pencil-400">
                    {activeModule.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {activeModule.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg bg-pencil-50 p-3 dark:bg-white/5">
                        <Check className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                        <span className="text-sm text-pencil-700 dark:text-pencil-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
