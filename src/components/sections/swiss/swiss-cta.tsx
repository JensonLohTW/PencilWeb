'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/components/providers/language-provider'
import { TextReveal } from '@/components/ui/text-reveal'
import { useRef } from 'react'
import { clsx } from 'clsx'

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
    const { t } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
        stiffness: 100,
        damping: 30
    })

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-white px-6 py-32 lg:px-16 dark:bg-pencil-950">
            {/* Background Texture with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] opacity-10 dark:opacity-5"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cta to-transparent blur-3xl" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center"
            >
                {/* Headline */}
                <div className="max-w-2xl">
                    <TextReveal
                        as="h2"
                        text={headline}
                        className="text-4xl font-bold leading-tight text-pencil-950 lg:text-5xl dark:text-white"
                        stagger={0.03}
                    />
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-6">
                    <Link
                        href={ctaHref}
                        className="group relative inline-flex items-center gap-4 overflow-hidden bg-cta px-8 py-4 text-white transition-all hover:bg-pencil-950 dark:hover:bg-white dark:hover:text-pencil-950"
                    >
                        <span className="relative z-10 text-sm font-bold uppercase tracking-widest">{ctaText}</span>
                        <motion.span
                            className="relative z-10 block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            →
                        </motion.span>
                    </Link>

                    {secondaryText && secondaryHref && (
                        <Link
                            href={secondaryHref}
                            className="group relative inline-flex items-center gap-4 overflow-hidden border border-pencil-200 bg-transparent px-8 py-4 text-pencil-950 transition-all hover:border-pencil-950 dark:border-white/20 dark:text-white dark:hover:border-white"
                        >
                            <span className="relative z-10 text-sm font-bold uppercase tracking-widest">{secondaryText}</span>
                            <motion.span
                                className="relative z-10 block transition-transform duration-300 group-hover:translate-x-1"
                            >
                                ↗
                            </motion.span>
                        </Link>
                    )}
                </div>
            </motion.div>

            {/* Bottom Info */}
            <div className="mt-20 flex items-center gap-8 border-t border-pencil-200 pt-8 dark:border-white/10">
                <p className="swiss-mono text-xs uppercase tracking-wider text-pencil-500 dark:text-pencil-400">{t('nav.contact')}</p>
                <div className="h-px flex-1 bg-pencil-200 dark:bg-white/10" />
                <motion.a
                    href="mailto:hello@pencil.com.tw"
                    whileHover={{ scale: 1.05, color: '#FF4D00' }}
                    className="swiss-mono text-lg font-medium text-pencil-950 transition-colors dark:text-white"
                >
                    hello@pencil.com.tw
                </motion.a>
            </div>
        </section>
    )
}
