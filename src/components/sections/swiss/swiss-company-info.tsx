'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface InfoItem {
    label: string
    value: string
    isHighlight?: boolean
}

const info: InfoItem[] = [
    { label: 'Company Name', value: '空間動態科技 (Pencil)' },
    { label: 'Headquarters', value: 'Kaohsiung, Taiwan' },
    { label: 'Core Tech', value: 'XR, AI, IoT, Digital Twin' },
    { label: 'Contact', value: 'contact@pencil.com.tw', isHighlight: true },
]

export function SwissCompanyInfo() {
    return (
        <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:bg-pencil-950 dark:border-white/10">
            <div className="grid gap-16 lg:grid-cols-2">
                {/* Left: Header */}
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">公司資訊</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">Company Info</h2>
                    <p className="mt-6 max-w-md text-pencil-400">
                        空間動態科技致力於整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，打造下一個世代的沉浸式互動體驗。
                    </p>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 border-b border-pencil-950 pb-1 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta dark:text-white dark:border-white"
                    >
                        聯繫我們 <span>→</span>
                    </Link>
                </div>

                {/* Right: Info Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-0"
                >
                    {info.map((item, index) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between border-b border-pencil-200 py-6 dark:border-white/10"
                        >
                            <span className="flex items-center gap-4">
                                <span className="swiss-mono text-pencil-500">{String(index + 1).padStart(2, '0')}</span>
                                <span className="text-pencil-400">{item.label}</span>
                            </span>
                            <span
                                className={`text-right font-medium ${item.isHighlight ? 'swiss-mono text-cta' : 'text-pencil-950 dark:text-white'
                                    }`}
                            >
                                {item.value}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
