'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ShowcaseItem {
  number: string
  title: string
  category: string
  summary: string
  metric: string
  href: string
}

export function SwissProjectShowcase() {
  const { t } = useLanguage()
  const itemsData = t('pages.projects.showcase.items')
  const items = Array.isArray(itemsData) ? (itemsData as ShowcaseItem[]) : []

  return (
    <section className="border-t border-pencil-200 bg-pencil-50 px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-black">
      <div className="mb-12 max-w-3xl">
        <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{t('pages.projects.showcase.eyebrow')}</p>
        <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">
          {t('pages.projects.showcase.title')}
        </h2>
        <p className="mt-4 text-pencil-600 dark:text-pencil-400">{t('pages.projects.showcase.description')}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group border border-pencil-200 bg-white p-6 transition-colors hover:border-cta dark:border-white/10 dark:bg-pencil-900"
          >
            <p className="swiss-mono text-xs text-pencil-400 dark:text-pencil-500">{item.number}</p>
            <p className="swiss-mono mt-3 text-[11px] text-pencil-500 dark:text-pencil-400">{item.category}</p>
            <h3 className="mt-2 text-2xl font-semibold text-pencil-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 min-h-20 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.summary}</p>

            <div className="mt-5 border-t border-pencil-200 pt-4 dark:border-white/10">
              <p className="swiss-mono text-[11px] text-pencil-400">{t('pages.projects.showcase.metricLabel')}</p>
              <p className="mt-1 text-sm font-medium text-pencil-900 dark:text-white">{item.metric}</p>
            </div>

            <Link href={item.href} className="mt-6 inline-flex text-sm font-medium text-cta">
              {t('pages.projects.showcase.view')} →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
