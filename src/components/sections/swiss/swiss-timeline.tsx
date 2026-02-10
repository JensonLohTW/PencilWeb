'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

const timelineZhTw = [
    {
        number: '01',
        year: '2023 Q1',
        title: 'System Initialization',
        description: '公司成立，專注於 XR 軟硬體整合技術研發',
    },
    {
        number: '02',
        year: '2023 Q3',
        title: 'First Deployment',
        description: '完成首套軍規級飛行模擬訓練系統交付',
    },
    {
        number: '03',
        year: '2024 Q1',
        title: 'AI Integration',
        description: '導入 LLM 技術，開發企業級 AI Agent 解決方案',
    },
    {
        number: '04',
        year: '2024 Q4',
        title: 'Smart Space',
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

export function SwissTimeline() {
    const { language } = useLanguage()
    const timeline = language === 'zh-TW' ? timelineZhTw : timelineEn

    const eyebrow = language === 'zh-TW' ? '發展歷程' : 'Our Journey'
    const title = language === 'zh-TW' ? '里程碑' : 'Mission Logs'

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">{eyebrow}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">{title}</h2>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-pencil-200 lg:left-16 lg:block" />

                {/* Items */}
                <div className="space-y-0">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative border-b border-pencil-200 py-8 pl-0 lg:pl-32"
                        >
                            {/* Number Circle (Desktop) */}
                            <div className="absolute left-12 top-8 z-10 hidden size-8 items-center justify-center border border-pencil-200 bg-pencil-50 transition-colors group-hover:border-cta group-hover:bg-cta lg:flex">
                                <span className="swiss-mono text-xs text-pencil-600 group-hover:text-white">
                                    {item.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16">
                                {/* Year */}
                                <span className="swiss-mono w-24 shrink-0 text-pencil-400">{item.year}</span>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-pencil-950 transition-colors group-hover:text-cta lg:text-3xl">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-pencil-600 lg:ml-auto lg:max-w-md lg:text-right">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
