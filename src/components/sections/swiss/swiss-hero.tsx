'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SwissHeroProps {
    eyebrow?: string
    headline: string
    subheadline: string
    ctaText?: string
    ctaHref?: string
}

export function SwissHero({ eyebrow = '專案與能力', headline, subheadline, ctaText = '了解更多', ctaHref = '#projects' }: SwissHeroProps) {
    return (
        <section className="relative flex min-h-[90vh] flex-col justify-between px-6 pb-12 pt-32 lg:px-16">
            {/* Main Content */}
            <div className="flex flex-1 flex-col justify-center">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="swiss-mono mb-8 text-pencil-500"
                >
                    {eyebrow}
                </motion.p>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="swiss-heading max-w-5xl text-pencil-950"
                >
                    {headline}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    className="mt-8 max-w-xl text-lg leading-relaxed text-pencil-600"
                >
                    {subheadline}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12"
                >
                    <Link
                        href={ctaHref}
                        className="group inline-flex items-center gap-3 border-b-2 border-pencil-950 pb-2 text-sm font-medium uppercase tracking-widest text-pencil-950 transition-colors hover:border-cta hover:text-cta"
                    >
                        {ctaText}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
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
                <div className="h-px flex-1 bg-pencil-200" />
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="swiss-mono text-pencil-400"
                >
                    向下滾動
                </motion.div>
                <div className="h-px w-16 bg-pencil-200" />
            </motion.div>
        </section>
    )
}
