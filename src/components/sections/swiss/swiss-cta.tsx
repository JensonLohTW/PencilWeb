'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SwissCTAProps {
    headline: string
    ctaText: string
    ctaHref: string
    secondaryText?: string
    secondaryHref?: string
}

export function SwissCTA({
    headline,
    ctaText,
    ctaHref,
    secondaryText,
    secondaryHref,
}: SwissCTAProps) {
    return (
        <section className="bg-white px-6 py-24 lg:px-16 dark:bg-pencil-950">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
            >
                {/* Headline */}
                <h2 className="max-w-2xl text-3xl font-bold leading-tight text-pencil-950 lg:text-4xl dark:text-white">
                    {headline}
                </h2>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={ctaHref}
                        className="inline-flex items-center gap-2 border-2 border-cta bg-cta px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-cta"
                    >
                        {ctaText}
                        <span>→</span>
                    </Link>
                    {secondaryText && secondaryHref && (
                        <Link
                            href={secondaryHref}
                            className="inline-flex items-center gap-2 border-2 border-pencil-950/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-pencil-950 transition-all hover:border-pencil-950 hover:bg-pencil-950 hover:text-white dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-pencil-950"
                        >
                            {secondaryText}
                        </Link>
                    )}
                </div>
            </motion.div>

            {/* Bottom Info */}
            <div className="mt-16 flex items-center gap-8 border-t border-pencil-200 pt-8 dark:border-white/10">
                <p className="swiss-mono text-pencil-500 dark:text-white/50">聯繫我們</p>
                <div className="h-px flex-1 bg-pencil-200 dark:bg-white/10" />
                <p className="swiss-mono text-pencil-500 dark:text-white/50">hello@pencil.com.tw</p>
            </div>
        </section>
    )
}
