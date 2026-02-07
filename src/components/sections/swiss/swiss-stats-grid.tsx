'use client'

import { motion } from 'framer-motion'

interface Stat {
    number: string
    label: string
    value: string
}

const stats: Stat[] = [
    { number: '01', label: 'Founded', value: '2023' },
    { number: '02', label: 'Projects', value: '15+' },
    { number: '03', label: 'Team', value: '12' },
    { number: '04', label: 'Location', value: 'TW' },
]

export function SwissStatsGrid() {
    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">公司數據</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">Key Metrics</h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-px bg-pencil-200 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-pencil-50 p-8 transition-colors hover:bg-white"
                    >
                        {/* Number */}
                        <span className="swiss-mono text-pencil-300">{stat.number}</span>

                        {/* Value */}
                        <div className="mt-4 text-5xl font-bold text-pencil-950 transition-colors group-hover:text-cta lg:text-6xl">
                            {stat.value}
                        </div>

                        {/* Label */}
                        <p className="swiss-mono mt-4 text-pencil-500">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
