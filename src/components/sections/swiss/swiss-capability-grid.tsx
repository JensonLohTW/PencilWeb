'use client'

import { motion } from 'framer-motion'

interface CapabilityGroup {
    category: string
    items: string[]
}

const capabilities: CapabilityGroup[] = [
    { category: 'XR', items: ['內容開發', '互動設計', '裝置整合'] },
    { category: 'AI', items: ['Agent 開發', 'Chat 系統', '查詢系統'] },
    { category: '資料', items: ['介接規劃', '推播系統', 'API 開發'] },
    { category: 'IoT', items: ['感測整合', '控制系統', '可視化'] },
]

export function SwissCapabilityGrid() {
    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">我們的能力</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">能力矩陣</h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-px bg-pencil-200 sm:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((group, index) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-pencil-50 p-8"
                    >
                        {/* Category Header */}
                        <div className="mb-6 border-b-2 border-pencil-950 pb-4">
                            <h3 className="text-2xl font-bold text-pencil-950">{group.category}</h3>
                        </div>

                        {/* Items */}
                        <ul className="space-y-3">
                            {group.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-pencil-700">
                                    <span className="swiss-mono text-pencil-400">{String(idx + 1).padStart(2, '0')}</span>
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
