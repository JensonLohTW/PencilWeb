'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

export function CTA() {
    const t = useTranslations('pages.home.cta')

    return (
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8 text-pencil-950 dark:text-white">
            {/* 動態背景網格 */}
            <motion.svg
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full stroke-gray-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="1d4240dd-898f-445f-932d-e28720334e8c"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#1d4240dd-898f-445f-932d-e28720334e8c)" width="100%" height="100%" strokeWidth={0} />
            </motion.svg>

            {/* 動態漂浮光源 */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
                className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5]"
                />
            </motion.div>

            {/* 靜態環境粒子 (避免 SSR Hydration Mismatch) */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                {[
                    { width: 120, left: '10%', top: '20%', y: -40, x: 20, duration: 7, delay: 0 },
                    { width: 80, left: '80%', top: '15%', y: -30, x: -20, duration: 6, delay: 1 },
                    { width: 150, left: '25%', top: '70%', y: -50, x: 30, duration: 8, delay: 2 },
                    { width: 90, left: '70%', top: '80%', y: -20, x: -10, duration: 5, delay: 0.5 },
                    { width: 110, left: '50%', top: '40%', y: -40, x: 25, duration: 9, delay: 1.5 },
                ].map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-pencil-600/10 dark:bg-white/5 blur-xl"
                        style={{
                            width: p.width,
                            height: p.width,
                            left: p.left,
                            top: p.top,
                        }}
                        animate={{
                            y: [0, p.y, 0],
                            x: [0, p.x, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            <StaggerContainer
                viewport={{ once: true, amount: 0.5 }}
                className="mx-auto max-w-2xl text-center relative z-10"
            >
                <StaggerItem>
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
                        {t('headline')}
                    </h2>
                </StaggerItem>
                <StaggerItem>
                    <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-pencil-600 dark:text-gray-300">
                        {t('subheadline')}
                    </p>
                </StaggerItem>
                <StaggerItem className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden rounded-md bg-cta px-6 py-3 text-sm font-semibold text-white shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus-visible:outline-white"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {t('ctaText')}
                        </span>
                        <div className="absolute inset-y-0 -left-[100%] w-full bg-gradient-to-r from-transparent via-white/30 dark:via-gray-900/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[200%] transition-all duration-700 ease-in-out pointer-events-none" />
                    </Link>
                    <Link
                        href="/solutions"
                        className="text-sm/6 font-semibold text-pencil-950 hover:text-pencil-600 dark:text-white dark:hover:text-gray-300 transition-colors group">
                        {t('secondaryText')} <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </StaggerItem>
            </StaggerContainer>
        </div>
    )
}
