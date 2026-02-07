'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FAQ {
    id: string
    question: string
    answer: string
}

const faqs: FAQ[] = [
    {
        id: 'faq-1',
        question: '如何選擇適合的方案？',
        answer: '我們建議先預約 Demo，讓我們了解您的需求與目標場景後，會提供最適合的方案建議。每個方案都可依據您的需求客製化。',
    },
    {
        id: 'faq-2',
        question: '需要準備哪些硬體設備？',
        answer: '視方案而定。VR/MR 方案需要 VR 頭盔與相關硬體；AR 方案可使用手機或平板；智慧空間需要 IoT 感測器；AI 方案主要是軟體服務。',
    },
    {
        id: 'faq-3',
        question: '導入成本大約是多少？',
        answer: '成本依專案規模與複雜度而定。PoC 驗證階段通常較低，完整專案開發則視需求而定。請預約 Demo，我們會提供詳細報價。',
    },
    {
        id: 'faq-4',
        question: '你們提供維運服務嗎？',
        answer: '是的，我們提供完整的維運服務，包含系統監控、問題排除、版本更新與效能優化。維運方案可依需求選擇。',
    },
]

export function SwissFAQ() {
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 grid gap-8 lg:grid-cols-2">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">常見問題</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">FAQ</h2>
                </div>
                <p className="max-w-md text-pencil-600 lg:ml-auto">
                    如果您有其他問題，歡迎直接聯繫我們，我們很樂意為您解答。
                </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-0">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-pencil-200"
                    >
                        {/* Question */}
                        <button
                            className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-cta"
                            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        >
                            <div className="flex items-center gap-6">
                                <span className="swiss-mono text-pencil-400 transition-colors group-hover:text-cta">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-lg font-medium text-pencil-900 transition-colors group-hover:text-cta">
                                    {faq.question}
                                </span>
                            </div>
                            <span
                                className={`text-2xl text-pencil-400 transition-all group-hover:text-cta ${openId === faq.id ? 'rotate-45' : ''
                                    }`}
                            >
                                +
                            </span>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {openId === faq.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 pl-18 text-pencil-600 lg:pl-18 lg:pr-16" style={{ paddingLeft: 'calc(3rem + 1.5rem)' }}>
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
