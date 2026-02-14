'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { clsx } from 'clsx'
import { ComparisonMeter, MeterLevel } from '@/components/ui/comparison-meter'

interface ComparisonItem {
  solution: string
  timeline: string
  budget: string
  complexity: string
  hardware: string
  href: string
}

// Helper to map string values to levels (1-3)
// This logic assumes specific keywords in English or Chinese relative to the levels.
// Ideally this data would come from the JSON source as numbers, but mapping works for now.
function getLevel(value: string): MeterLevel {
  const v = value.toLowerCase()
  // High / Long / Complex -> 3
  if (v.includes('高') || v.includes('high') || v.includes('16+') || v.includes('12-')) return 3
  // Low / Short / Simple -> 1
  if (v.includes('低') || v.includes('low') || v.includes('1-3') || v.includes('4-')) return 1
  // Medium -> 2
  return 2
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    } as const
  },
}

const mobileCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    } as const
  },
}

export function SwissSolutionComparison() {
  const { t } = useLanguage()

  const itemsData = t('pages.solutions.comparison.items')
  const items = Array.isArray(itemsData) ? (itemsData as ComparisonItem[]) : []

  return (
    <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-20">
          <p className="swiss-mono text-sm tracking-widest text-cta dark:text-pencil-400 uppercase">
            {t('pages.solutions.comparison.eyebrow')}
          </p>
          <h2 className="font-serif text-5xl font-medium tracking-tight text-cta lg:text-6xl dark:text-white">
            {t('pages.solutions.comparison.title')}
          </h2>
          <p className="max-w-2xl text-lg text-pencil-600 dark:text-pencil-300">
            {t('pages.solutions.comparison.description')}
          </p>
        </div>

        {/* Desktop Table View */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:block"
        >
          {/* Header */}
          <div className="grid grid-cols-[2fr_1.2fr_1.2fr_1.2fr_1.5fr_140px] border-b border-pencil-950 pb-6 text-sm font-bold tracking-wider text-pencil-950 uppercase dark:border-white dark:text-white">
            <div className="px-6">{t('pages.solutions.comparison.headers.solution')}</div>
            <div className="px-6">{t('pages.solutions.comparison.headers.timeline')}</div>
            <div className="px-6">{t('pages.solutions.comparison.headers.budget')}</div>
            <div className="px-6">{t('pages.solutions.comparison.headers.complexity')}</div>
            <div className="px-6">{t('pages.solutions.comparison.headers.hardware')}</div>
            <div className="px-6 text-right">{t('pages.solutions.comparison.headers.action')}</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-pencil-100 dark:divide-white/5">
            {items.map((item) => (
              <motion.div
                key={item.solution}
                variants={rowVariants}
                className="group relative grid grid-cols-[2fr_1.2fr_1.2fr_1.2fr_1.5fr_140px] py-8 transition-colors hover:bg-pencil-50 dark:hover:bg-white/5"
              >
                {/* Solution Name */}
                <div className="flex flex-col justify-center px-6">
                  <h3 className="font-serif text-2xl font-medium text-pencil-950 transition-colors group-hover:text-cta dark:text-white">
                    {item.solution}
                  </h3>
                </div>

                {/* Timeline */}
                <div className="flex items-center px-6">
                  <ComparisonMeter
                    level={getLevel(item.timeline)}
                    type="bar"
                    label={item.timeline}
                  />
                </div>

                {/* Budget */}
                <div className="flex items-center px-6">
                  <ComparisonMeter
                    level={getLevel(item.budget)}
                    type="currency"
                    label={item.budget}
                  />
                </div>

                {/* Complexity */}
                <div className="flex items-center px-6">
                  <ComparisonMeter
                    level={getLevel(item.complexity)}
                    type="dots"
                    label={item.complexity}
                  />
                </div>

                {/* Hardware */}
                <div className="flex items-center px-6 text-sm text-pencil-600 dark:text-pencil-300">
                  {item.hardware}
                </div>

                {/* Action */}
                <div className="flex items-center justify-end px-6">
                  <Link
                    href={item.href}
                    className="group/btn flex h-10 w-10 items-center justify-center rounded-full border border-pencil-200 text-pencil-400 transition-all hover:border-cta hover:bg-cta hover:text-white dark:border-white/20"
                  >
                    <span className="sr-only">{t('pages.solutions.comparison.view')}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover/btn:-rotate-45">
                      <path d="M3.33337 8.00004H12.6667M12.6667 8.00004L8.00004 3.33337M12.6667 8.00004L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile / Tablet Card View */}
        <div className="grid gap-6 md:grid-cols-2 lg:hidden">
          {items.map((item, index) => (
            <motion.article
              key={item.solution}
              variants={mobileCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              className="flex flex-col border border-pencil-200 bg-pencil-50 p-6 dark:border-white/10 dark:bg-pencil-900/50"
            >
              <h3 className="font-serif text-2xl font-medium text-pencil-950 dark:text-white">
                {item.solution}
              </h3>

              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="swiss-mono mb-2 block text-xs text-pencil-400 uppercase">
                      {t('pages.solutions.comparison.headers.timeline')}
                    </span>
                    <ComparisonMeter
                      level={getLevel(item.timeline)}
                      type="bar"
                      label={item.timeline}
                    />
                  </div>
                  <div>
                    <span className="swiss-mono mb-2 block text-xs text-pencil-400 uppercase">
                      {t('pages.solutions.comparison.headers.budget')}
                    </span>
                    <ComparisonMeter
                      level={getLevel(item.budget)}
                      type="currency"
                      label={item.budget}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="swiss-mono mb-2 block text-xs text-pencil-400 uppercase">
                      {t('pages.solutions.comparison.headers.complexity')}
                    </span>
                    <ComparisonMeter
                      level={getLevel(item.complexity)}
                      type="dots"
                      label={item.complexity}
                    />
                  </div>
                  <div>
                    <span className="swiss-mono mb-2 block text-xs text-pencil-400 uppercase">
                      {t('pages.solutions.comparison.headers.hardware')}
                    </span>
                    <p className="text-sm font-medium text-pencil-700 dark:text-pencil-200">
                      {item.hardware}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-pencil-200 dark:border-white/10">
                <Link
                  href={item.href}
                  className="group flex w-full items-center justify-between text-sm font-medium text-cta hover:text-pencil-950 dark:hover:text-white"
                >
                  <span>{t('pages.solutions.comparison.view')}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
