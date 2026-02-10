'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

// Cooperation modes data structure
const modesZhTw = [
    { number: '01', title: '顧問規劃', description: '需求分析、可行性評估、技術規劃' },
    { number: '02', title: 'PoC 驗證', description: '快速原型、概念驗證、效果評估' },
    { number: '03', title: '專案開發', description: '完整開發、系統整合、部署上線' },
    { number: '04', title: '維運優化', description: '持續維運、效能優化、版本更新' },
]

const modesEn = [
    { number: '01', title: 'Consulting', description: 'Requirements analysis, feasibility assessment, technical planning' },
    { number: '02', title: 'PoC Validation', description: 'Rapid prototyping, concept validation, effectiveness evaluation' },
    { number: '03', title: 'Project Development', description: 'Full development, system integration, deployment' },
    { number: '04', title: 'Operations & Optimization', description: 'Continuous operations, performance optimization, version updates' },
]

export function SwissCooperationModes() {
    const { language } = useLanguage()
    const modes = language === 'zh-TW' ? modesZhTw : modesEn

    const title = language === 'zh-TW' ? '我們的合作方式' : 'Our Cooperation Modes'
    const eyebrow = language === 'zh-TW' ? '合作模式' : 'Cooperation'

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">{eyebrow}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">{title}</h2>
            </div>

            {/* Modes Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {modes.map((mode, index) => (
                    <motion.div
                        key={mode.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        {/* Number */}
                        <span className="block text-6xl font-bold text-pencil-200 transition-colors group-hover:text-cta lg:text-7xl">
                            {mode.number}
                        </span>

                        {/* Content */}
                        <div className="mt-4 border-t border-pencil-200 pt-4">
                            <h3 className="text-xl font-semibold text-pencil-950">{mode.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-pencil-600">{mode.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
