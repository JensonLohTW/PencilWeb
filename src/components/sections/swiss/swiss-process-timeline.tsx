'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'
import { PixelMarker } from '@/components/ui/pixel-decorations'

interface ProcessStep {
    number: string
    title: string
    description: string
}

function ProcessNode({ index, isEven, number }: { index: number; isEven: boolean, number: string }) {
    const nodeRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: nodeRef,
        offset: ["center end", "center center"]
    })

    const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.5, 1.2]), {
        stiffness: 100,
        damping: 30
    })

    const activeColor = useTransform(scrollYProgress, [0.9, 1], ["rgba(255, 255, 255, 0)", "rgba(255, 77, 0, 1)"]) // orange cta color

    return (
        <div ref={nodeRef} className="absolute left-6 flex -translate-x-1/2 items-center justify-center md:static md:left-auto md:translate-x-0">
            <motion.div style={{ scale }} className="relative flex size-12 items-center justify-center bg-white dark:bg-black">
                {/* Background Circle for cleaner cut-out look */}
                <div className="absolute inset-0 rounded-full bg-white dark:bg-black" />

                {/* Actual Marker */}
                <div className="relative z-10 flex size-3 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-pencil-200 dark:bg-pencil-800" />
                    <motion.div
                        style={{ backgroundColor: activeColor }}
                        className="absolute inset-0 rounded-full opacity-0"
                    />
                    <PixelMarker className="relative z-20 scale-75 text-pencil-950 dark:text-white" />
                </div>

                {/* Pulse Effect */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 0.4]) }}
                    animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-cta z-0"
                />

                {/* Desktop Number Label (Sticky/Floating near marker) */}
                <div className={cn(
                    "swiss-mono absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-sm font-bold text-pencil-300 md:block dark:text-pencil-700",
                    isEven ? "right-full mr-6" : "left-full ml-6"
                )}>
                    {number}
                </div>
            </motion.div>
        </div>
    )
}

function ProcessStepItem({ step, index, isEven }: { step: ProcessStep, index: number, isEven: boolean }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={cn(
                "relative flex flex-col gap-8 md:flex-row md:items-center",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Content Side */}
            <div className={cn(
                "flex-1 pl-16 md:pl-0 transition-opacity duration-500",
                isEven ? "md:pl-20 text-left" : "md:pr-20 md:text-right",
                isInView ? "opacity-100" : "opacity-40 blur-[1px]" // Focus effect
            )}>
                <span className="swiss-mono mb-3 block text-sm font-bold text-cta md:hidden">
                    STEP {step.number}
                </span>
                <h3 className="mb-4 font-serif text-3xl font-medium leading-tight text-pencil-950 dark:text-white lg:text-4xl">
                    {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-pencil-600 dark:text-pencil-400">
                    {step.description}
                </p>
            </div>

            {/* Center Marker Area */}
            <ProcessNode index={index} isEven={isEven} number={step.number} />

            {/* Empty Side for Balance */}
            <div className="hidden flex-1 md:block" />
        </motion.div>
    )
}

export function SwissProcessTimeline() {
    const { t } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Entire section scroll
    })

    // Timeline drawing progress: starts a bit later and ends earlier to stay within bounds
    const height = useSpring(useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]), {
        stiffness: 100,
        damping: 30
    })

    // Get process steps from translations
    const stepsData = t('pages.solutions.process.steps')
    const steps = Array.isArray(stepsData) ? (stepsData as ProcessStep[]) : []

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-white px-6 py-32 lg:px-16 dark:bg-black">
            {/* Background Gradients */}
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_40%)]" />

            {/* Section Header */}
            <div className="mx-auto mb-32 max-w-4xl text-center">
                <span className="swiss-mono mb-6 block text-sm tracking-widest text-cta dark:text-pencil-400">
                    {t('pages.solutions.process.eyebrow')}
                </span>
                <h2 className="font-serif text-5xl font-medium tracking-tight text-pencil-950 lg:text-7xl dark:text-white">
                    {t('pages.solutions.process.title')}
                </h2>
                <div className="mx-auto mt-8 h-px w-24 bg-cta/50" />
            </div>

            {/* The Golden Thread Timeline */}
            <div className="relative mx-auto max-w-6xl">
                {/* Central Line Background */}
                <div className="absolute left-6 top-0 h-full w-px bg-pencil-100 md:left-1/2 md:-translate-x-1/2 dark:bg-white/5" />

                {/* Drawing Line (Golden Thread) */}
                <motion.div
                    style={{ height }}
                    className="absolute left-6 top-0 w-px bg-cta md:left-1/2 md:-translate-x-1/2"
                />

                <div className="space-y-32 pb-32">
                    {steps.map((step, index) => (
                        <ProcessStepItem
                            key={step.number}
                            step={step}
                            index={index}
                            isEven={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>

            {/* End Mark */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-24 left-6 -translate-x-1/2 md:left-1/2"
            >
                <div className="size-2 rounded-full bg-cta" />
            </motion.div>
        </section>
    )
}
