'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/components/providers/language-provider'

interface FAQItem {
    question: string
    answer: string
}

export function SwissFAQ() {
    const { t } = useLanguage()
    const [openId, setOpenId] = useState<string | null>(null)

    // Get FAQ items from translations
    const faqData = t('pages.home.faq.items')
    const faqItems = Array.isArray(faqData) ? (faqData as FAQItem[]) : []

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 grid gap-8 lg:grid-cols-2">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">{t('pages.home.faq.eyebrow')}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">
                        {t('pages.home.faq.title')}
                    </h2>
                </div>
                <p className="max-w-md text-pencil-600 lg:ml-auto">{t('pages.home.faq.description')}</p>
            </div>

            {/* FAQ List */}
            <div className="space-y-0">
                {faqItems.map((faq, index) => {
                    const faqId = `faq-${index + 1}`
                    return (
                        <motion.div
                            key={faqId}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-b border-pencil-200"
                        >
                            {/* Question */}
                            <button
                                className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-cta"
                                onClick={() => setOpenId(openId === faqId ? null : faqId)}
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
                                    className={`text-2xl text-pencil-400 transition-all group-hover:text-cta ${openId === faqId ? 'rotate-45' : ''
                                        }`}
                                >
                                    +
                                </span>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {openId === faqId && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p
                                            className="pb-6 pl-18 text-pencil-600 lg:pl-18 lg:pr-16"
                                            style={{ paddingLeft: 'calc(3rem + 1.5rem)' }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
