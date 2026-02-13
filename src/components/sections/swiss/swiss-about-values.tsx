'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'

interface ValueItem {
  title: string
  description: string
}

export function SwissAboutValues() {
  const { t } = useLanguage()
  const itemsData = t('pages.about.values.items')
  const items = Array.isArray(itemsData) ? (itemsData as ValueItem[]) : []

  return (
    <section className="border-t border-pencil-200 bg-pencil-50 px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-black">
      <div className="mb-12 max-w-3xl">
        <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">{t('pages.about.values.eyebrow')}</p>
        <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">
          {t('pages.about.values.title')}
        </h2>
        <p className="mt-4 text-pencil-600 dark:text-pencil-400">{t('pages.about.values.description')}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="border border-pencil-200 bg-white p-6 transition-colors hover:border-cta dark:border-white/10 dark:bg-pencil-900"
          >
            <p className="swiss-mono text-xs text-pencil-400 dark:text-pencil-500">0{index + 1}</p>
            <h3 className="mt-3 text-xl font-semibold text-pencil-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
