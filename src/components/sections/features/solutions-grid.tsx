'use client'

import { clsx } from 'clsx/lite'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import Link from 'next/link'

import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { Container } from '@/components/elements/container'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { TextReveal } from '@/components/ui/text-reveal'

interface SolutionCardProps {
    icon: ReactNode
    title: string
    description: string
    href: string
    index: number
    className?: string
}

function ParallaxImage({ className }: { className?: string }) {
    // Mock image placeholder - in real usage would be Next.js Image
    return (
        <div className={clsx('relative h-full w-full overflow-hidden bg-pencil-200 grayscale dark:bg-pencil-800', className)}>
            <motion.div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        </div>
    )
}

function SolutionItem({ title, description, href, index }: SolutionCardProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className={clsx(
                'relative flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-0 py-24 border-t border-black/10 dark:border-white/10 dark:text-white',
                index % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
            )}
        >
            {/* Text Section (5 columns) */}
            <div className={clsx('relative z-10 flex flex-col justify-center md:col-span-5', index % 2 === 1 && 'md:col-start-8 md:items-end')}>

                <div className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] opacity-60 mix-blend-difference text-current">
                    <span>0{index + 1}</span>
                    <span className="h-px w-12 bg-current" />
                    <span>Solution</span>
                </div>

                <h3 className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl mix-blend-difference mb-8">
                    <Link href={href} className="hover:text-transparent hover:text-stroke-1 hover:text-stroke-black dark:hover:text-stroke-white transition-all duration-300">
                        {title.split('').map((char, i) => (
                            <span key={i} className="inline-block hover:-translate-y-2 transition-transform duration-300" style={{ transitionDelay: `${i * 20}ms` }}>{char}</span>
                        ))}
                    </Link>
                </h3>

                <div className="max-w-md text-lg leading-relaxed opacity-80 md:text-xl font-light">
                    <TextReveal>{description}</TextReveal>
                </div>

                <div className="mt-12">
                    <MagneticButton>
                        <Link href={href} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-pencil-950 text-white rounded-full overflow-hidden dark:bg-white dark:text-black">
                            <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Explore</span>
                            <ArrowNarrowRightIcon className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-pencil-700 dark:bg-pencil-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.33,1,0.68,1]" />
                        </Link>
                    </MagneticButton>
                </div>
            </div>

            {/* Image Section (7 columns) - Parallax */}
            <div className={clsx('relative h-[60vh] md:h-[80vh] md:col-span-7', index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1 md:row-start-1')}>
                <motion.div style={{ y }} className="h-full w-full">
                    <div className="relative h-full w-full overflow-hidden">
                        {/* Image Placeholder - Overlaying Text slightly */}
                        <div className={clsx("absolute inset-0 z-0", index % 2 === 0 ? "-left-12" : "-right-12")}>
                            <ParallaxImage className="h-full w-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    )
}

export function SolutionsGrid({
    className,
}: {
    className?: string
}) {
    return (
        <section className={clsx('relative py-32 sm:py-48 overflow-hidden bg-pencil-50 dark:bg-pencil-950', className)}>
            <Container className="relative z-10">

                {/* Brutalist Header */}
                <div className="mb-32 border-b-2 border-black dark:border-white pb-12">
                    <h2 className="text-[12vw] font-black leading-[0.8] tracking-tighter text-black dark:text-white uppercase mix-blend-exclusion">
                        Our<br />Solutions
                    </h2>
                    <div className="mt-8 flex justify-end">
                        <p className="max-w-xl text-right text-xl font-mono uppercase tracking-widest opacity-60">
                            Swiss Precision x <br /> Brutalist Impact
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-0">
                    <SolutionItem
                        index={0}
                        icon={null} // Icon less important in this style
                        title="沉浸訓練"
                        description="VR/MR 模擬真實場景，零風險環境反覆練習。"
                        href="/solutions#xr-training"
                    />
                    <SolutionItem
                        index={1}
                        icon={null}
                        title="AR視覺化"
                        description="數位資訊疊加真實世界，直觀呈現設備數據。"
                        href="/solutions#ar-visualization"
                    />
                    <SolutionItem
                        index={2}
                        icon={null}
                        title="空間智慧"
                        description="IoT 感測器與互動裝置，賦予空間感知能力。"
                        href="/solutions#smart-space"
                    />
                    <SolutionItem
                        index={3}
                        icon={null}
                        title="企業AI"
                        description="私有化 AI Agent，從客服到文檔分析的最強大腦。"
                        href="/solutions#ai-for-sme"
                    />
                </div>

            </Container>
        </section>
    )
}

export { SolutionItem as SolutionCard } // Export alias for compatibility
