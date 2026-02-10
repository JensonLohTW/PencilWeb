'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

const stepsZhTw = [
    { number: '01', title: '資料來源' },
    { number: '02', title: 'API 整合' },
    { number: '03', title: '後端處理' },
    { number: '04', title: '前端呈現' },
    { number: '05', title: '裝置輸出' },
]

const stepsEn = [
    { number: '01', title: 'Data Source' },
    { number: '02', title: 'API Integration' },
    { number: '03', title: 'Backend Processing' },
    { number: '04', title: 'Frontend Rendering' },
    { number: '05', title: 'Device Output' },
]

export function SwissSystemFlow() {
    const { language } = useLanguage()
    const steps = language === 'zh-TW' ? stepsZhTw : stepsEn

    const eyebrow = language === 'zh-TW' ? '從硬體到平台' : 'Hardware to Platform'
    const title = language === 'zh-TW' ? '系統整合流程' : 'System Integration Flow'

    return (
        <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:bg-pencil-950 dark:border-white/10">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">{eyebrow}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
            </div>

            {/* Flow */}
            <div className="relative">
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-8 hidden h-px bg-pencil-200 lg:block dark:bg-white/20" />

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
                        >
                            {/* Number */}
                            <div className="relative z-10 mb-6 flex size-16 items-center justify-center border-2 border-pencil-200 bg-white transition-colors group-hover:border-cta dark:bg-pencil-950 dark:border-white/30">
                                <span className="swiss-mono text-lg text-pencil-950 group-hover:text-cta dark:text-white">
                                    {step.number}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-pencil-950 dark:text-white">{step.title}</h3>

                            {/* Connector */}
                            {index < steps.length - 1 && (
                                <div className="absolute right-0 top-8 hidden -translate-y-1/2 translate-x-1/2 text-pencil-300 lg:block dark:text-white/30">
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
