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

const modesJa = [
    { number: '01', title: 'コンサルティング', description: '要件分析、実現可能性評価、技術計画' },
    { number: '02', title: 'PoC 実証', description: 'プロトタイプ作成、概念実証、効果測定' },
    { number: '03', title: 'プロジェクト開発', description: 'システム開発、統合、デプロイ' },
    { number: '04', title: '運用・最適化', description: '継続的な運用、パフォーマンス最適化、更新' },
]

export function SwissCooperationModes() {
    const { language } = useLanguage()
    const modes = language === 'zh-TW' ? modesZhTw : language === 'ja' ? modesJa : modesEn

    const title = language === 'zh-TW' ? '我們的合作方式' : language === 'ja' ? '協力モデル' : 'Our Cooperation Modes'
    const eyebrow = language === 'zh-TW' ? '合作模式' : language === 'ja' ? '協力' : 'Cooperation'

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
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
                        <span className="block text-6xl font-bold text-pencil-200 transition-colors group-hover:text-cta lg:text-7xl dark:text-white/20">
                            {mode.number}
                        </span>

                        {/* Content */}
                        <div className="mt-4 border-t border-pencil-200 pt-4 dark:border-white/10">
                            <h3 className="text-xl font-semibold text-pencil-950 dark:text-white">{mode.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{mode.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
