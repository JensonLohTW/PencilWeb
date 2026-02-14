'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FlowStep {
  number: string
  title: string
  description: string
}

export function SwissSystemFlow() {
  const { t } = useLanguage()
  const stepsData = t('pages.technology.flow.steps')
  const steps = Array.isArray(stepsData) ? (stepsData as FlowStep[]) : []
  const [activeIndex, setActiveIndex] = useState(0)
  const progressWidth = steps.length > 1 ? `${(activeIndex / (steps.length - 1)) * 100}%` : '0%'

  return (
    <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-pencil-950">
      {/* Section Header */}
      <div className="mb-16">
        <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">{t('pages.technology.flow.eyebrow')}</p>
        <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">
          {t('pages.technology.flow.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-pencil-600 dark:text-pencil-400">{t('pages.technology.flow.description')}</p>
      </div>

      {/* Flow */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-8 right-0 left-0 hidden h-px bg-pencil-200 lg:block dark:bg-white/20" />
        <motion.div
          className="absolute top-8 left-0 hidden h-px bg-cta lg:block"
          animate={{ width: progressWidth }}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Number */}
              <div
                className={`relative z-10 mb-6 flex size-16 items-center justify-center border-2 bg-white transition-colors dark:bg-pencil-950 ${activeIndex >= index ? 'border-cta' : 'border-pencil-200 dark:border-white/30'}`}
              >
                <span
                  className={`swiss-mono text-lg dark:text-white ${activeIndex >= index ? 'text-cta' : 'text-pencil-950'}`}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-pencil-950 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{step.description}</p>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 right-0 hidden translate-x-1/2 -translate-y-1/2 text-pencil-300 lg:block dark:text-white/30">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
