'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { motion } from 'framer-motion'

interface LayerItem {
  layer: string
  title: string
  description: string
}

export function SwissTechArchitecture() {
  const { t } = useLanguage()
  const layersData = t('pages.technology.architecture.layers')
  const layers = Array.isArray(layersData) ? (layersData as LayerItem[]) : []

  return (
    <section className="border-t border-pencil-200 bg-pencil-50 px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-pencil-950">
      <div className="mb-12 max-w-3xl">
        <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">
          {t('pages.technology.architecture.eyebrow')}
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">
          {t('pages.technology.architecture.title')}
        </h2>
        <p className="mt-4 text-pencil-600 dark:text-pencil-400">{t('pages.technology.architecture.description')}</p>
      </div>

      <div className="grid gap-4">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.layer}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="grid gap-4 border border-pencil-200 bg-white p-6 lg:grid-cols-[180px_1fr] dark:border-white/10 dark:bg-black"
          >
            <p className="swiss-mono text-xs tracking-[0.2em] text-pencil-400 dark:text-pencil-500">{layer.layer}</p>
            <div>
              <h3 className="text-xl font-semibold text-pencil-950 dark:text-white">{layer.title}</h3>
              <p className="mt-2 text-pencil-600 dark:text-pencil-300">{layer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
