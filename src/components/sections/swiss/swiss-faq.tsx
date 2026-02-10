'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface SwissFAQProps {
  namespace?: 'home' | 'solutions'
}

export function SwissFAQ({ namespace = 'home' }: SwissFAQProps) {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState<string | null>(null)
  const basePath = `pages.${namespace}.faq`

  // Get FAQ items from translations
  const faqData = t(`${basePath}.items`)
  const faqItems = Array.isArray(faqData) ? (faqData as FAQItem[]) : []

  return (
    <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{t(`${basePath}.eyebrow`)}</p>
          <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">
            {t(`${basePath}.title`)}
          </h2>
        </div>
        <p className="max-w-md text-pencil-600 lg:ml-auto dark:text-pencil-400">{t(`${basePath}.description`)}</p>
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
              className="border-b border-pencil-200 dark:border-white/10"
            >
              {/* Question */}
              <button
                className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-cta dark:text-white"
                onClick={() => setOpenId(openId === faqId ? null : faqId)}
              >
                <div className="flex items-center gap-6">
                  <span className="swiss-mono text-pencil-400 transition-colors group-hover:text-cta dark:text-pencil-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium text-pencil-900 transition-colors group-hover:text-cta dark:text-white">
                    {faq.question}
                  </span>
                </div>
                <span
                  className={`text-2xl text-pencil-400 transition-all group-hover:text-cta dark:text-pencil-500 ${
                    openId === faqId ? 'rotate-45' : ''
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
                      className="pb-6 pl-18 text-pencil-600 lg:pr-16 lg:pl-18 dark:text-pencil-400"
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
