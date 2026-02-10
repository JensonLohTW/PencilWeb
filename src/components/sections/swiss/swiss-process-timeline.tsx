'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

interface ProcessStep {
    number: string
    title: string
    description: string
}

export function SwissProcessTimeline() {
    const { t } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const height = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"])

    // Get process steps from translations
    const stepsData = t('pages.solutions.process.steps')
    const steps = Array.isArray(stepsData) ? (stepsData as ProcessStep[]) : []

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-white px-6 py-32 lg:px-16 dark:bg-black">
            {/* Background Gradients */}
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_40%)]" />

            {/* Section Header */}
            <div className="mx-auto mb-24 max-w-[1800px] text-center">
                <span className="swiss-mono mb-6 block text-sm tracking-widest text-pencil-500 dark:text-pencil-400">
                    {t('pages.solutions.process.eyebrow')}
                </span>
                <h2 className="font-serif text-5xl font-medium tracking-tight text-pencil-950 lg:text-7xl dark:text-white">
                    {t('pages.solutions.process.title')}
                </h2>
            </div>

            {/* The Golden Thread Timeline */}
            <div className="relative mx-auto max-w-5xl">
                {/* Central Line Background */}
                <div className="absolute left-4 top-0 h-full w-px bg-pencil-200 md:left-1/2 md:-translate-x-1/2 dark:bg-white/10" />

                {/* Drawing Line */}
                <motion.div
                    style={{ height }}
                    className="absolute left-4 top-0 w-px bg-gradient-to-b from-pencil-950 via-cta to-pencil-950 md:left-1/2 md:-translate-x-1/2 dark:from-white dark:via-cta dark:to-white"
                />

                <div className="space-y-24">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0

                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={cn(
                                    "relative flex flex-col gap-8 md:flex-row md:items-center",
                                    isEven ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Content Side */}
                                <div className={cn(
                                    "flex-1 pl-12 md:pl-0",
                                    isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right"
                                )}>
                                    <span className="swiss-mono mb-4 block text-xs font-bold text-cta md:hidden">
                                        STEP {step.number}
                                    </span>
                                    <h3 className="mb-4 font-serif text-3xl font-medium text-pencil-950 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-pencil-600 dark:text-pencil-400">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center Marker */}
                                <div className="absolute left-4 flex size-4 -translate-x-1/2 items-center justify-center md:static md:left-auto md:translate-x-0">
                                    <div className="relative size-4">
                                        <div className="absolute inset-0 rounded-full bg-pencil-50 ring-4 ring-white dark:bg-black dark:ring-black" />
                                        <div className="absolute inset-0 m-auto size-2 rounded-full bg-pencil-950 dark:bg-white" />

                                        {/* Number Floating (Desktop) */}
                                        <div className={cn(
                                            "swiss-mono absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-xs font-bold text-pencil-300 md:block dark:text-pencil-600",
                                            isEven ? "right-full mr-8" : "left-full ml-8"
                                        )}>
                                            0{step.number}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden flex-1 md:block" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* End Mark */}
            <div className="mx-auto mt-24 flex justify-center">
                <div className="h-24 w-px bg-gradient-to-b from-pencil-200 to-transparent dark:from-white/10" />
            </div>
        </section>
    )
}
