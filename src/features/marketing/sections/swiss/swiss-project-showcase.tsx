'use client'

import { useLanguage } from '@/shared/providers/language-provider'
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
    <section className="border-t border-pencil-200 bg-pencil-50 px-6 py-32 lg:px-16 dark:border-white/10 dark:bg-black">
      <div className="mb-20 max-w-3xl">
        <p className="swiss-mono mb-6 w-fit border border-pencil-200 bg-white/60 px-3 py-1 text-xs text-pencil-600 backdrop-blur-sm dark:border-white/10 dark:bg-pencil-900/50 dark:text-pencil-400">
          {t('pages.projects.showcase.eyebrow')}
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-6xl dark:text-white">
          {t('pages.projects.showcase.title')}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-pencil-600 dark:text-pencil-400 max-w-2xl">
          {t('pages.projects.showcase.description')}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {items.map((item, index) => (
          <motion.article
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col border border-pencil-200 bg-white p-8 transition-colors hover:border-cta hover:shadow-xl hover:shadow-cta/5 dark:border-white/10 dark:bg-pencil-900 dark:hover:border-cta dark:hover:shadow-none"
          >
            <div className="mb-6 flex items-start justify-between">
              <span className="swiss-mono text-xs font-medium text-pencil-400 dark:text-pencil-500">{item.number}</span>
              <span className="swiss-mono rounded-full border border-pencil-100 bg-pencil-50 px-3 py-1 text-[10px] uppercase tracking-wide text-pencil-500 dark:border-white/10 dark:bg-white/5 dark:text-pencil-400">
                {item.category}
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-bold leading-tight text-pencil-950 transition-colors group-hover:text-cta dark:text-white">
              {item.title}
            </h3>

            <p className="mb-8 flex-1 text-base leading-relaxed text-pencil-600 dark:text-pencil-300">
              {item.summary}
            </p>

            <div className="mt-auto border-t border-pencil-100 pt-6 dark:border-white/5">
              <p className="swiss-mono mb-1 text-[10px] uppercase tracking-wider text-pencil-400">
                {t('pages.projects.showcase.metricLabel')}
              </p>
              <p className="text-3xl font-bold text-pencil-900 dark:text-white">{item.metric}</p>
            </div>

            <Link href={item.href} className="absolute inset-0 z-10">
              <span className="sr-only">{t('pages.projects.showcase.view')}</span>
            </Link>

            <div className="absolute bottom-8 right-8 translate-x-4 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <span className="text-2xl text-cta">→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
