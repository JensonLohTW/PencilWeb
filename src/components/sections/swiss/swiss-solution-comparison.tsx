'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ComparisonItem {
  solution: string
  timeline: string
  budget: string
  complexity: string
  hardware: string
  href: string
}

export function SwissSolutionComparison() {
  const { t } = useLanguage()

  const itemsData = t('pages.solutions.comparison.items')
  const items = Array.isArray(itemsData) ? (itemsData as ComparisonItem[]) : []

  return (
    <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-black">
      <div className="mb-12 flex flex-col gap-4">
        <p className="swiss-mono text-pencil-500 dark:text-pencil-400">{t('pages.solutions.comparison.eyebrow')}</p>
        <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">
          {t('pages.solutions.comparison.title')}
        </h2>
        <p className="max-w-2xl text-pencil-600 dark:text-pencil-400">{t('pages.solutions.comparison.description')}</p>
      </div>

      <div className="hidden overflow-hidden rounded-sm border border-pencil-200 lg:block dark:border-white/10">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr_120px] bg-pencil-50 text-sm font-medium text-pencil-600 dark:bg-pencil-900 dark:text-pencil-300">
          <div className="p-4">{t('pages.solutions.comparison.headers.solution')}</div>
          <div className="p-4">{t('pages.solutions.comparison.headers.timeline')}</div>
          <div className="p-4">{t('pages.solutions.comparison.headers.budget')}</div>
          <div className="p-4">{t('pages.solutions.comparison.headers.complexity')}</div>
          <div className="p-4">{t('pages.solutions.comparison.headers.hardware')}</div>
          <div className="p-4">{t('pages.solutions.comparison.headers.action')}</div>
        </div>

        {items.map((item, index) => (
          <motion.div
            key={item.solution}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr_120px] border-t border-pencil-200 text-sm text-pencil-700 transition-colors hover:bg-pencil-50 dark:border-white/10 dark:text-pencil-300 dark:hover:bg-white/5"
          >
            <div className="p-4 font-medium text-pencil-950 dark:text-white">{item.solution}</div>
            <div className="p-4">{item.timeline}</div>
            <div className="p-4">{item.budget}</div>
            <div className="p-4">{item.complexity}</div>
            <div className="p-4">{item.hardware}</div>
            <div className="p-4">
              <Link href={item.href} className="swiss-mono text-cta hover:opacity-80">
                {t('pages.solutions.comparison.view')}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 lg:hidden">
        {items.map((item, index) => (
          <motion.article
            key={item.solution}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="border border-pencil-200 bg-pencil-50 p-5 dark:border-white/10 dark:bg-pencil-900"
          >
            <h3 className="text-lg font-semibold text-pencil-950 dark:text-white">{item.solution}</h3>
            <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              <dt className="text-pencil-500 dark:text-pencil-400">
                {t('pages.solutions.comparison.headers.timeline')}
              </dt>
              <dd className="text-pencil-700 dark:text-pencil-200">{item.timeline}</dd>
              <dt className="text-pencil-500 dark:text-pencil-400">{t('pages.solutions.comparison.headers.budget')}</dt>
              <dd className="text-pencil-700 dark:text-pencil-200">{item.budget}</dd>
              <dt className="text-pencil-500 dark:text-pencil-400">
                {t('pages.solutions.comparison.headers.complexity')}
              </dt>
              <dd className="text-pencil-700 dark:text-pencil-200">{item.complexity}</dd>
              <dt className="text-pencil-500 dark:text-pencil-400">
                {t('pages.solutions.comparison.headers.hardware')}
              </dt>
              <dd className="text-pencil-700 dark:text-pencil-200">{item.hardware}</dd>
            </dl>
            <Link href={item.href} className="mt-4 inline-flex text-sm font-medium text-cta">
              {t('pages.solutions.comparison.view')} →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
