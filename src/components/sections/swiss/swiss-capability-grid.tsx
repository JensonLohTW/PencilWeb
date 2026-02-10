'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

const capabilitiesZhTw = [
    { category: 'XR', items: ['內容開發', '互動設計', '裝置整合'] },
    { category: 'AI', items: ['Agent 開發', 'Chat 系統', '查詢系統'] },
    { category: '資料', items: ['介接規劃', '推播系統', 'API 開發'] },
    { category: 'IoT', items: ['感測整合', '控制系統', '可視化'] },
]

const capabilitiesEn = [
    { category: 'XR', items: ['Content Development', 'Interaction Design', 'Device Integration'] },
    { category: 'AI', items: ['Agent Development', 'Chat Systems', 'Query Systems'] },
    { category: 'Data', items: ['Integration Planning', 'Push Systems', 'API Development'] },
    { category: 'IoT', items: ['Sensor Integration', 'Control Systems', 'Visualization'] },
]

const capabilitiesJa = [
    { category: 'XR', items: ['コンテンツ開発', 'インタラクション設計', 'デバイス統合'] },
    { category: 'AI', items: ['エージェント開発', 'チャットシステム', '検索システム'] },
    { category: 'データ', items: ['統合計画', 'プッシュシステム', 'API開発'] },
    { category: 'IoT', items: ['センサー統合', '制御システム', '可視化'] },
]

export function SwissCapabilityGrid() {
    const { language } = useLanguage()
    const capabilities = language === 'zh-TW' ? capabilitiesZhTw : language === 'ja' ? capabilitiesJa : capabilitiesEn

    const title = language === 'zh-TW' ? '能力矩陣' : language === 'ja' ? '能力マトリックス' : 'Capability Matrix'
    const eyebrow = language === 'zh-TW' ? '我們的能力' : language === 'ja' ? '当社の能力' : 'Our Capabilities'

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-px bg-pencil-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-white/10">
                {capabilities.map((group, index) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-pencil-50 p-8 dark:bg-pencil-900"
                    >
                        {/* Category Header */}
                        <div className="mb-6 border-b-2 border-pencil-950 pb-4 dark:border-white">
                            <h3 className="text-2xl font-bold text-pencil-950 dark:text-white">{group.category}</h3>
                        </div>

                        {/* Items */}
                        <ul className="space-y-3">
                            {group.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-pencil-700 dark:text-pencil-300">
                                    <span className="swiss-mono text-pencil-400 dark:text-pencil-500">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
