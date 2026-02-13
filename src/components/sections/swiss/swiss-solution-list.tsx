'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Solution {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  features: string[]
  useCases: string[]
  delivery?: {
    timeline: string
    investment: string
    complexity: string
  }
}

interface FilterItem {
  key: string
  label: string
}

export function SwissSolutionList() {
  const { t } = useLanguage()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // Get solutions from translations
  const solutionsData = t('pages.solutions.list.items')
  const solutions = Array.isArray(solutionsData) ? (solutionsData as Solution[]) : []
  const filtersData = t('pages.solutions.list.filters')
  const filters = Array.isArray(filtersData) ? (filtersData as FilterItem[]) : []
  const visibleSolutions =
    activeFilter === 'all' ? solutions : solutions.filter((solution) => solution.id === activeFilter)

  return (
    <section id="solutions" className="relative min-h-screen bg-pencil-50 px-6 py-32 lg:px-16 dark:bg-pencil-950">
      {/* Background Texture/Grid (Subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-[1800px]">
        {/* Section Header: Classical Typography */}
        <div className="mb-24 flex flex-col items-start justify-between gap-8 border-t border-pencil-950/10 pt-8 lg:flex-row lg:items-end dark:border-white/10">
          <div className="max-w-2xl">
            <span className="swiss-mono mb-6 block text-sm tracking-widest text-cta dark:text-pencil-400">
              {t('pages.solutions.list.eyebrow')} — ARCHIVE
            </span>
            <h2 className="font-serif text-6xl font-medium tracking-tight text-cta lg:text-8xl dark:text-white">
              {t('pages.solutions.list.title')}
            </h2>
          </div>
          <div className="swiss-mono hidden max-w-xs text-right text-xs leading-relaxed text-pencil-500 lg:block dark:text-pencil-400">
            {t('pages.solutions.list.subtitle')}
            <br />
            EST. 2024 / CATALOGUE NO. 01
          </div>
        </div>

        {/* The Archive List */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                'swiss-mono border px-4 py-2 text-xs tracking-wider transition-colors',
                activeFilter === filter.key
                  ? 'border-pencil-950 bg-pencil-950 text-white dark:border-white dark:bg-white dark:text-pencil-950'
                  : 'border-pencil-300 text-pencil-600 hover:border-cta hover:text-cta dark:border-white/20 dark:text-pencil-300',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          {visibleSolutions.map((solution, index) => {
            const isExpanded = expandedId === solution.id

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  'group relative border-t border-pencil-950/10 transition-all duration-500 last:border-b dark:border-white/10',
                  isExpanded ? 'bg-white dark:bg-pencil-900' : 'hover:bg-white/50 dark:hover:bg-white/5',
                )}
              >
                {/* Summary Row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : solution.id)}
                  className="flex cursor-pointer flex-col gap-8 py-12 lg:flex-row lg:items-baseline lg:gap-16 lg:py-16"
                >
                  {/* Serif Number */}
                  <span className="font-serif text-4xl text-pencil-300 transition-colors group-hover:text-cta lg:text-5xl dark:text-pencil-600">
                    {solution.number}
                  </span>

                  {/* Title & Subtitle */}
                  <div className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
                    <h3
                      className={cn(
                        'font-serif text-3xl font-medium transition-colors duration-300 lg:text-5xl',
                        isExpanded ? 'text-cta' : 'text-pencil-950 group-hover:text-pencil-800 dark:text-white',
                      )}
                    >
                      {solution.title}
                    </h3>
                    <span className="swiss-mono text-sm text-pencil-400 dark:text-pencil-500">{solution.subtitle}</span>
                  </div>

                  {/* Indicator */}
                  <div className="flex items-center justify-end pr-4">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-full border border-pencil-200 transition-all duration-300 dark:border-white/10',
                        isExpanded ? 'rotate-90 border-cta bg-cta' : 'group-hover:border-cta group-hover:text-cta',
                      )}
                    >
                      {isExpanded ? <Minus className="h-5 w-5 text-white" /> : <Plus className="h-5 w-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content: The Blueprint */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-12 pt-4 pb-16 lg:grid-cols-12 lg:gap-24 lg:pl-[120px]">
                        {/* Description Column */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35 }}
                          className="lg:col-span-5"
                        >
                          <p className="font-serif text-xl leading-relaxed text-pencil-600 dark:text-pencil-300">
                            {solution.description}
                          </p>

                          {solution.delivery && (
                            <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                              <div className="border border-pencil-200 p-3 dark:border-white/10">
                                <p className="swiss-mono text-[11px] text-pencil-400">
                                  {t('pages.solutions.list.deliveryTimeline')}
                                </p>
                                <p className="mt-1 font-medium text-pencil-900 dark:text-white">
                                  {solution.delivery.timeline}
                                </p>
                              </div>
                              <div className="border border-pencil-200 p-3 dark:border-white/10">
                                <p className="swiss-mono text-[11px] text-pencil-400">
                                  {t('pages.solutions.list.deliveryInvestment')}
                                </p>
                                <p className="mt-1 font-medium text-pencil-900 dark:text-white">
                                  {solution.delivery.investment}
                                </p>
                              </div>
                              <div className="border border-pencil-200 p-3 dark:border-white/10">
                                <p className="swiss-mono text-[11px] text-pencil-400">
                                  {t('pages.solutions.list.deliveryComplexity')}
                                </p>
                                <p className="mt-1 font-medium text-pencil-900 dark:text-white">
                                  {solution.delivery.complexity}
                                </p>
                              </div>
                            </div>
                          )}

                          <div className="mt-10">
                            <Link
                              href="/contact"
                              className="group/btn inline-flex items-center gap-4 text-lg font-medium text-pencil-950 transition-colors hover:text-cta dark:text-white"
                            >
                              <span className="border-b border-pencil-950 pb-1 transition-colors group-hover/btn:border-cta dark:border-white">
                                {t('pages.solutions.list.bookDemo')}
                              </span>
                              <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </div>
                        </motion.div>

                        {/* Details Column (Grid Lines) */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.05 }}
                          className="lg:col-span-7"
                        >
                          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
                            {/* Features */}
                            <div className="relative">
                              <div className="swiss-mono mb-6 flex items-center gap-2 text-xs font-bold tracking-widest text-pencil-400 uppercase dark:text-pencil-500">
                                <span className="h-px w-4 bg-cta" />
                                {t('pages.solutions.list.mainFeatures')}
                              </div>
                              <ul className="space-y-4">
                                {solution.features?.map((feature, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-baseline gap-4 text-pencil-600 dark:text-pencil-300"
                                  >
                                    <span className="swiss-mono text-xs text-pencil-300 dark:text-pencil-600">
                                      0{idx + 1}
                                    </span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Use Cases */}
                            <div className="relative">
                              <div className="swiss-mono mb-6 flex items-center gap-2 text-xs font-bold tracking-widest text-pencil-400 uppercase dark:text-pencil-500">
                                <span className="h-px w-4 bg-pencil-300 dark:bg-pencil-600" />
                                {t('pages.solutions.list.useCases')}
                              </div>
                              <ul className="space-y-4">
                                {solution.useCases?.map((useCase, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-baseline gap-4 text-pencil-600 dark:text-pencil-300"
                                  >
                                    <span className="swiss-mono text-xs text-pencil-300 dark:text-pencil-600">
                                      A{idx + 1}
                                    </span>
                                    <span>{useCase}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
