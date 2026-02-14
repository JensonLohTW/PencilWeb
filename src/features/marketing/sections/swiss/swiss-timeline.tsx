'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { motion } from 'framer-motion'

const timelineZhTw = [
  {
    number: '01',
    year: '2023 Q1',
    title: '系統起始',
    description: '公司成立，專注於 XR 軟硬體整合技術研發',
  },
  {
    number: '02',
    year: '2023 Q3',
    title: '首個落地案',
    description: '完成首套軍規級飛行模擬訓練系統交付',
  },
  {
    number: '03',
    year: '2024 Q1',
    title: 'AI 整合',
    description: '導入 LLM 技術，開發企業級 AI Agent 解決方案',
  },
  {
    number: '04',
    year: '2024 Q4',
    title: '智慧空間',
    description: '啟動 IoT 智慧空間整合計畫，實現虛實融合願景',
  },
]

const timelineEn = [
  {
    number: '01',
    year: '2023 Q1',
    title: 'System Initialization',
    description: 'Company founded, focusing on XR hardware & software integration technology R&D',
  },
  {
    number: '02',
    year: '2023 Q3',
    title: 'First Deployment',
    description: 'Delivered first military-grade flight simulation training system',
  },
  {
    number: '03',
    year: '2024 Q1',
    title: 'AI Integration',
    description: 'Integrated LLM technology, developed enterprise-level AI Agent solutions',
  },
  {
    number: '04',
    year: '2024 Q4',
    title: 'Smart Space',
    description: 'Initiated IoT smart space integration project, realizing cyber-physical fusion vision',
  },
]

const timelineJa = [
  {
    number: '01',
    year: '2023 Q1',
    title: 'システム初期化',
    description: '会社設立、XRハードウェア＆ソフトウェア統合技術の研究開発に注力',
  },
  {
    number: '02',
    year: '2023 Q3',
    title: '初デプロイ',
    description: '初の軍事用フライトシミュレーション訓練システムの納入完了',
  },
  {
    number: '03',
    year: '2024 Q1',
    title: 'AI 統合',
    description: 'LLM技術の導入、企業向けAIエージェントソリューションの開発',
  },
  {
    number: '04',
    year: '2024 Q4',
    title: 'スマート空間',
    description: 'IoTスマート空間統合プロジェクトの開始、仮想と現実の融合ビジョンの実現',
  },
]

export function SwissTimeline() {
  const { language } = useLanguage()
  const timeline = language === 'zh-TW' ? timelineZhTw : language === 'ja' ? timelineJa : timelineEn

  const eyebrow = language === 'zh-TW' ? '發展歷程' : language === 'ja' ? '沿革' : 'Our Journey'
  const title = language === 'zh-TW' ? '里程碑' : language === 'ja' ? 'マイルストーン' : 'Mission Logs'

  return (
    <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
        <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-pencil-200 lg:left-16 lg:block dark:bg-white/10" />

        {/* Items */}
        <div className="space-y-0">
          {timeline.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-pencil-200 py-8 pl-0 lg:pl-32 dark:border-white/10"
            >
              {/* Number Circle (Desktop) */}
              <div className="absolute top-8 left-12 z-10 hidden size-8 items-center justify-center border border-pencil-200 bg-pencil-50 transition-colors group-hover:border-cta group-hover:bg-cta lg:flex dark:border-white/20 dark:bg-pencil-900">
                <span className="swiss-mono text-xs text-pencil-600 group-hover:text-white dark:text-pencil-400">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16">
                {/* Year */}
                <span className="swiss-mono w-24 shrink-0 text-pencil-400 dark:text-pencil-500">{item.year}</span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-pencil-950 transition-colors group-hover:text-cta lg:text-3xl dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-pencil-600 lg:ml-auto lg:max-w-md lg:text-right dark:text-pencil-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
