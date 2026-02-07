'use client'

import { clsx } from 'clsx/lite'
// import { motion } from 'framer-motion' // Optimizing: generic CSS animations preferred for lighter weight

export function TechnologyHudGrid() {
    return (
        <section id="technology" className="relative py-24 bg-white overflow-hidden dark:bg-black">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-50 dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

            {/* Radial Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                    {/* Left Pillars */}
                    <div className="flex flex-col gap-8 w-full max-w-xs lg:items-end lg:text-right">
                        <TechCard
                            title="XR DEVICE"
                            subtitle="沉浸式硬件整合"
                            code="SYS_01"
                            icon={<path d="M2 12h20M2 12l4-4m-4 4l4 4" />}
                            align="right"
                        />
                        <TechCard
                            title="AI DATA"
                            subtitle="大數據運算核心"
                            code="SYS_02"
                            icon={<path d="M12 2v20M2 12h20" />} // simplistic
                            align="right"
                        />
                    </div>

                    {/* Center Core OASIS */}
                    <div className="relative group shrink-0">
                        <div className="absolute inset-0 bg-neon-500/20 blur-[60px] rounded-full animate-pulse-glow" />
                        <div className="relative w-64 h-64 rounded-full border border-neon-500/30 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(196,104,47,0.3)] border-t-neon-500/80 border-b-neon-500/80 dark:bg-black/40">
                            <div className="absolute inset-2 rounded-full border border-dashed border-neon-500/20 animate-slow-spin" />
                            <span className="text-4xl font-bold text-pencil-950 tracking-widest text-glow-strong dark:text-white">OASIS</span>
                            <span className="text-xs font-mono text-neon-400 mt-2 tracking-[0.2em] animate-pulse">VISION_CORE</span>
                        </div>

                        {/* Connecting Lines (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-500/50 to-transparent -z-10" />
                        <div className="hidden lg:block absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-500/50 to-transparent -z-10" />
                    </div>

                    {/* Right Pillars */}
                    <div className="flex flex-col gap-8 w-full max-w-xs lg:items-start lg:text-left">
                        <TechCard
                            title="5G / 6G"
                            subtitle="超高速低延遲網絡"
                            code="SYS_03"
                            align="left"
                            icon={<path d="M8.288 15.038a5.25 5.25 0 017.424 0" />}
                        />
                        <TechCard
                            title="SENSES"
                            subtitle="五感模擬技術"
                            code="SYS_04"
                            align="left"
                            icon={<path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5" />}
                        />
                    </div>

                </div>

                <div className="text-center mt-16 max-w-2xl mx-auto">
                    <p className="text-pencil-600 dark:text-pencil-300">
                        整合 <span className="text-neon-400 font-medium">虛擬與現實</span> 的最終疆界，打造全感知沉浸生態系。
                    </p>
                </div>
            </div>
        </section>
    )
}

function TechCard({ title, subtitle, code, icon, align = 'left' }: { title: string, subtitle: string, code: string, icon?: React.ReactNode, align?: 'left' | 'right' }) {
    return (
        <div className={clsx(
            "group relative p-6 rounded-xl border border-pencil-200 bg-white/40 backdrop-blur-sm transition-all hover:border-neon-500/50 hover:bg-neon-900/10 dark:border-pencil-800 dark:bg-black/40",
            align === 'right' ? "lg:pr-8" : "lg:pl-8"
        )}>
            <div className={clsx(
                "absolute top-0 bottom-0 w-1 bg-neon-500/20 group-hover:bg-neon-500 transition-colors",
                align === 'right' ? "right-0 lg:left-auto lg:right-0 left-0" : "left-0"
            )} />

            <div className="text-xs font-mono text-pencil-500 mb-1">{code}</div>
            <h3 className="text-xl font-bold text-pencil-950 group-hover:text-neon-400 transition-colors dark:text-white">{title}</h3>
            <p className="text-sm text-pencil-600 mt-1 dark:text-pencil-400">{subtitle}</p>
        </div>
    )
}
