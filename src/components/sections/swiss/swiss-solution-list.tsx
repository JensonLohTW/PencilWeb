'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

interface Solution {
    id: string
    number: string
    title: string
    subtitle: string
    description: string
    features: string[]
    useCases: string[]
}

const solutions: Solution[] = [
    {
        id: 'xr-training',
        number: '01',
        title: 'VR/MR 沉浸式訓練',
        subtitle: 'Immersive Training',
        description: '透過虛擬實境與混合實境技術，打造高擬真度的訓練環境',
        features: ['高擬真度場景模擬', '互動式操作訓練', '即時回饋與評估', '可重複練習'],
        useCases: ['飛行訓練', '工業操作', '醫療訓練', '緊急應變'],
    },
    {
        id: 'ar-visualization',
        number: '02',
        title: 'AR 視覺化',
        subtitle: 'Augmented Reality',
        description: '擴增實境將數位資訊疊加到真實環境，讓導覽、維修、展示更直觀',
        features: ['現場資訊即時呈現', '3D 模型視覺化', '互動式操作指引', '多語言支援'],
        useCases: ['展演導覽', '設備維護', '銷售展示', '教育導覽'],
    },
    {
        id: 'smart-space',
        number: '03',
        title: '智慧空間 IoT',
        subtitle: 'Smart Space',
        description: '整合 IoT 感測器、互動裝置與可視化平台，讓空間更智能',
        features: ['IoT 感測器整合', '即時數據監控', '自動化控制', '數據分析與報表'],
        useCases: ['智慧建築', '展覽館', '商業空間', '工廠監控'],
    },
    {
        id: 'ai-for-sme',
        number: '04',
        title: '中小企業 AI 應用',
        subtitle: 'AI for SME',
        description: '為中小企業量身打造的 AI 解決方案，提升營運效率',
        features: ['AI Agent 智能助手', 'AI Chat 客服系統', '知識庫查詢系統', '流程自動化'],
        useCases: ['客服系統', '知識管理', '資料分析', '流程自動化'],
    },
]

export function SwissSolutionList() {
    const [expandedId, setExpandedId] = useState<string | null>(null)

    return (
        <section id="solutions" className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">我們的解決方案</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">四大方案</h2>
                </div>
                <p className="swiss-mono hidden text-pencil-400 md:block">快速選型</p>
            </div>

            {/* Solution List */}
            <div className="space-y-0">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={solution.id}
                        id={solution.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group border-b border-pencil-200"
                    >
                        {/* Main Row */}
                        <div
                            className="flex cursor-pointer items-center gap-8 py-8 transition-colors hover:bg-pencil-50 lg:gap-16"
                            onClick={() => setExpandedId(expandedId === solution.id ? null : solution.id)}
                        >
                            {/* Number */}
                            <span className="swiss-mono w-12 text-pencil-400 transition-colors group-hover:text-cta">
                                {solution.number}
                            </span>

                            {/* Title */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-3xl">
                                    {solution.title}
                                </h3>
                                <p className="swiss-mono mt-1 text-pencil-400">{solution.subtitle}</p>
                            </div>

                            {/* Expand Icon */}
                            <span
                                className={`text-2xl text-pencil-300 transition-all group-hover:text-cta ${expandedId === solution.id ? 'rotate-45' : ''
                                    }`}
                            >
                                +
                            </span>
                        </div>

                        {/* Expanded Content */}
                        <motion.div
                            initial={false}
                            animate={{
                                height: expandedId === solution.id ? 'auto' : 0,
                                opacity: expandedId === solution.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="grid gap-8 pb-8 pl-20 lg:grid-cols-3 lg:pl-28">
                                {/* Description */}
                                <div>
                                    <p className="text-pencil-600">{solution.description}</p>
                                    <Link
                                        href="/contact"
                                        className="mt-4 inline-flex items-center gap-2 border-b border-pencil-950 pb-1 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta"
                                    >
                                        預約 Demo <span>→</span>
                                    </Link>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="swiss-mono mb-3 text-pencil-500">主要功能</h4>
                                    <ul className="space-y-2">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-pencil-700">
                                                <span className="swiss-mono text-pencil-400">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Use Cases */}
                                <div>
                                    <h4 className="swiss-mono mb-3 text-pencil-500">適用場景</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {solution.useCases.map((useCase) => (
                                            <span
                                                key={useCase}
                                                className="swiss-mono border border-pencil-200 px-3 py-1 text-pencil-600"
                                            >
                                                {useCase}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
