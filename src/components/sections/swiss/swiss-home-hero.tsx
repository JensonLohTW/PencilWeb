'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypewriterText } from '@/components/ui/typewriter-text'
import { TubesEffect } from '@/components/ui/tubes-effect'

interface SwissHomeHeroProps {
    headline: string
    subheadline: string
    eyebrow: string
}

export function SwissHomeHero({ headline, subheadline, eyebrow }: SwissHomeHeroProps) {
    return (
        <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-12 pt-32 lg:px-16 dark:bg-pencil-950">
            {/* Background Effect */}
            <TubesEffect />

            {/* Main Content */}
            <div className="relative z-10 flex flex-1 flex-col justify-center">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="swiss-mono mb-8 text-pencil-500 dark:text-pencil-400"
                >
                    {eyebrow}
                </motion.p>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-5xl text-pencil-950 dark:text-white"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        fontWeight: 700,
                        lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                    }}
                >
                    {/* Replace static text with TypewriterText */}
                    <TypewriterText
                        text={headline}
                        speed={0.08}
                        startDelay={0.5}
                        prefix="> "
                        highlightText="Pencil"
                        highlightClassName="text-[#C4682F]"
                        cycleWords={[
                            { text: 'Pencil', className: 'text-[#C4682F] font-serif italic' },
                            { text: 'Pencil', className: 'text-[#C4682F] font-mono tracking-widest' },
                            { text: 'Pencil', className: 'text-[#C4682F] font-bold uppercase' },
                            { text: 'Pencil', className: 'text-[#C4682F] font-light tracking-tighter' },
                            { text: 'Pencil', className: 'text-[#C4682F] font-sans underline decoration-wavy' },
                        ]}
                        cycleDelay={2}
                        backspaceSpeed={0.05}
                    />
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    className="mt-8 max-w-xl text-lg text-pencil-600 lg:text-xl dark:text-pencil-300"
                >
                    {subheadline}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    className="mt-12 flex flex-wrap gap-6"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-pencil-950 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-cta dark:bg-white dark:text-pencil-950 dark:hover:bg-white/90"
                    >
                        聯絡業務 <span>→</span>
                    </Link>
                    <Link
                        href="/solutions"
                        className="inline-flex items-center gap-2 border border-pencil-950 px-8 py-4 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta dark:border-white dark:text-white dark:hover:border-white dark:hover:bg-white/10"
                    >
                        探索解決方案
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex items-center gap-4"
            >
                <div className="h-px flex-1 bg-pencil-200 dark:bg-white/20" />
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="swiss-mono text-pencil-400 dark:text-pencil-500"
                >
                    SCROLL
                </motion.div>
                <div className="h-px w-16 bg-pencil-200 dark:bg-white/20" />
            </motion.div>
        </section>
    )
}
