'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Solution {
    number: string
    title: string
    subtitle: string
    description: string
    href: string
}

const solutions: Solution[] = [
    {
        number: '01',
        title: 'VR/MR 沉浸式訓練',
        subtitle: 'Immersive Training',
        description: '高擬真度虛擬環境，打造安全、可重複的訓練體驗',
        href: '/solutions#xr-training',
    },
    {
        number: '02',
        title: 'AR 視覺化',
        subtitle: 'Augmented Reality',
        description: '擴增實境將數位資訊疊加到真實環境',
        href: '/solutions#ar-visualization',
    },
    {
        number: '03',
        title: '智慧空間 IoT',
        subtitle: 'Smart Space',
        description: '整合 IoT 感測器與可視化平台',
        href: '/solutions#smart-space',
    },
    {
        number: '04',
        title: '中小企業 AI',
        subtitle: 'AI for SME',
        description: 'AI Agent 與 Chat 系統，提升營運效率',
        href: '/solutions#ai-for-sme',
    },
]

export function SwissHomeSolutions() {
    return (
        <section id="solutions" className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">我們的解決方案</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">Solutions</h2>
                </div>
                <Link
                    href="/solutions"
                    className="hidden items-center gap-2 border-b border-pencil-950 pb-1 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta md:inline-flex"
                >
                    查看全部 <span>→</span>
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-px bg-pencil-200 md:grid-cols-2 lg:grid-cols-4">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={solution.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={solution.href}
                            className="group flex h-full flex-col bg-pencil-50 p-8 transition-colors hover:bg-white"
                        >
                            {/* Number */}
                            <span className="swiss-mono text-4xl font-bold text-pencil-200 transition-colors group-hover:text-cta lg:text-5xl">
                                {solution.number}
                            </span>

                            {/* Content */}
                            <div className="mt-auto pt-8">
                                <h3 className="text-xl font-semibold text-pencil-950">{solution.title}</h3>
                                <p className="swiss-mono mt-1 text-pencil-400">{solution.subtitle}</p>
                                <p className="mt-4 text-sm leading-relaxed text-pencil-600">{solution.description}</p>
                            </div>

                            {/* Arrow */}
                            <span className="mt-6 text-pencil-300 transition-colors group-hover:text-cta">→</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
