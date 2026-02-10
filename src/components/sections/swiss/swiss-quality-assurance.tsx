'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

const itemsZhTw = [
    {
        number: '01',
        title: '品質測試',
        description: '完整的功能測試、效能測試與壓力測試',
    },
    {
        number: '02',
        title: '裝置相容',
        description: '跨平台、跨裝置相容性驗證',
    },
    {
        number: '03',
        title: '持續維護',
        description: '系統監控、問題排除、版本更新',
    },
]

const itemsEn = [
    {
        number: '01',
        title: 'Quality Testing',
        description: 'Comprehensive functional testing, performance testing, and stress testing',
    },
    {
        number: '02',
        title: 'Device Compatibility',
        description: 'Cross-platform and cross-device compatibility verification',
    },
    {
        number: '03',
        title: 'Continuous Maintenance',
        description: 'System monitoring, troubleshooting, and version updates',
    },
]

export function SwissQualityAssurance() {
    const { language } = useLanguage()
    const items = language === 'zh-TW' ? itemsZhTw : itemsEn

    const eyebrow = language === 'zh-TW' ? '可靠性保證' : 'Reliability'
    const title = language === 'zh-TW' ? '可靠性與交付' : 'Quality Assurance'

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">{eyebrow}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">{title}</h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {items.map((item, index) => (
                    <motion.div
                        key={item.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        {/* Number */}
                        <span className="block text-6xl font-bold text-pencil-200 transition-colors group-hover:text-cta lg:text-7xl">
                            {item.number}
                        </span>

                        {/* Content */}
                        <div className="mt-4 border-t border-pencil-200 pt-4">
                            <h3 className="text-xl font-semibold text-pencil-950">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-pencil-600">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
