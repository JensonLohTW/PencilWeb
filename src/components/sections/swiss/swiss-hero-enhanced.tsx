'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypewriterText } from '@/components/ui/typewriter-text'
import { clsx } from 'clsx'

interface CycleWord {
    text: string
    className?: string
}

interface SwissHeroEnhancedProps {
    eyebrow?: string
    headline: string
    headlineHighlight?: string
    headlineSuffix?: string
    cycleWords?: CycleWord[]
    subheadline: string
    ctaText?: string
    ctaHref?: string
    centered?: boolean
}

export function SwissHeroEnhanced({
    eyebrow,
    headline,
    headlineHighlight, // The part of the headline to cycle/highlight
    headlineSuffix = '', // Optional suffix after the highlight
    cycleWords = [],
    subheadline,
    ctaText,
    ctaHref = '#',
    centered = false,
}: SwissHeroEnhancedProps) {
    return (
        <section className={clsx(
            "relative flex min-h-[85vh] flex-col justify-center px-6 pb-12 pt-32 lg:px-16",
            centered ? "items-center text-center" : "items-start"
        )}>
            {/* Background Elements (Subtle) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pencil-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cta/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
            </div>

            <div className={clsx("flex flex-col max-w-5xl", centered && "items-center")}>
                {/* Eyebrow */}
                {eyebrow && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        className="swiss-mono mb-6 text-pencil-500 bg-pencil-100/50 px-3 py-1 w-fit rounded-full backdrop-blur-sm border border-pencil-200 dark:text-pencil-300 dark:bg-white/10 dark:border-white/10"
                    >
                        {eyebrow}
                    </motion.p>
                )}

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="swiss-heading text-pencil-950 mb-8 dark:text-white"
                >
                    <TypewriterText
                        text={headline}
                        highlightText={headlineHighlight}
                        highlightClassName="text-cta"
                        cycleWords={cycleWords}
                        speed={0.06}
                        startDelay={0.2}
                        cursorClassName="bg-cta w-[0.2em]"
                    />
                    {headlineSuffix}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    className={clsx(
                        "max-w-xl text-lg leading-relaxed text-pencil-600 font-sans dark:text-pencil-300",
                        centered && "mx-auto"
                    )}
                >
                    {subheadline}
                </motion.p>


                {/* CTA */}
                {ctaText && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="mt-10"
                    >
                        <Link
                            href={ctaHref}
                            className="group relative inline-flex items-center gap-3 overflow-hidden bg-pencil-950 px-8 py-4 text-white transition-all hover:bg-cta dark:bg-white dark:text-pencil-950 dark:hover:bg-cta dark:hover:text-white"
                        >
                            <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
                                {ctaText}
                            </span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </Link>
                    </motion.div>
                )}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-12 left-6 lg:left-16 flex items-center gap-4"
            >
                <div className="h-px w-12 bg-pencil-300 dark:bg-white/30" />
                <span className="swiss-mono text-[10px] text-pencil-400 dark:text-white/50">SCROLL</span>
            </motion.div>
        </section>
    )
}
