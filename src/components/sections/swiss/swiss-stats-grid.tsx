'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'

const statsZhTw = [
  { number: '01', label: '已交付案型', value: '15+' },
  { number: '02', label: '平均啟動週期', value: '2 週' },
  { number: '03', label: '覆蓋技術領域', value: 'XR+AI+IoT' },
  { number: '04', label: '服務地區', value: 'TW / APAC' },
]

const statsEn = [
  { number: '01', label: 'Delivered Cases', value: '15+' },
  { number: '02', label: 'Average Kickoff', value: '2 weeks' },
  { number: '03', label: 'Tech Domains', value: 'XR+AI+IoT' },
  { number: '04', label: 'Service Region', value: 'TW / APAC' },
]

const statsJa = [
  { number: '01', label: '設立', value: '2023' },
  { number: '02', label: 'プロジェクト数', value: '15+' },
  { number: '03', label: 'チームメンバー', value: '12' },
  { number: '04', label: '拠点', value: 'TW' },
]

export function SwissStatsGrid() {
  const { language } = useLanguage()
  const stats = language === 'zh-TW' ? statsZhTw : language === 'ja' ? statsJa : statsEn

  const title = language === 'zh-TW' ? '公司數據' : language === 'ja' ? '会社データ' : 'Key Metrics'
  const eyebrow = language === 'zh-TW' ? '數據概覽' : language === 'ja' ? 'データ概要' : 'Overview'

  return (
    <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
        <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-px bg-pencil-200 lg:grid-cols-4 dark:bg-white/10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-pencil-50 p-8 transition-colors hover:bg-white dark:bg-pencil-900 dark:hover:bg-pencil-800"
          >
            {/* Number */}
            <span className="swiss-mono text-pencil-300 dark:text-pencil-500">{stat.number}</span>

            {/* Value */}
            <div className="mt-4 text-5xl font-bold text-pencil-950 transition-colors group-hover:text-cta lg:text-6xl dark:text-white">
              {stat.value}
            </div>

            {/* Label */}
            <p className="swiss-mono mt-4 text-pencil-500 dark:text-pencil-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
