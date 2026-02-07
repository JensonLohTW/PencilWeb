'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
    number: string
    title: string
    category: string
    href: string
}

const projects: Project[] = [
    { number: '01', title: '飛行模擬系統', category: 'XR Training', href: '/projects#flight-simulator' },
    { number: '02', title: '飛行教育訓練', category: 'Education', href: '/projects#flight-training' },
    { number: '03', title: '資料介接規劃', category: 'Data Integration', href: '/projects#data-integration' },
    { number: '04', title: 'AI Agent 系統', category: 'AI Solution', href: '/projects#ai-agent' },
]

export function SwissHomeProjects() {
    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">精選專案</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">Projects</h2>
                </div>
                <Link
                    href="/projects"
                    className="hidden items-center gap-2 border-b border-pencil-950 pb-1 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta md:inline-flex"
                >
                    查看全部 <span>→</span>
                </Link>
            </div>

            {/* Project List */}
            <div className="space-y-0">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={project.href}
                            className="group flex items-center gap-8 border-b border-pencil-200 py-6 transition-colors hover:bg-pencil-50 lg:gap-16"
                        >
                            {/* Number */}
                            <span className="swiss-mono w-12 text-pencil-400 transition-colors group-hover:text-cta">
                                {project.number}
                            </span>

                            {/* Title */}
                            <h3 className="flex-1 text-xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-2xl">
                                {project.title}
                            </h3>

                            {/* Category */}
                            <span className="swiss-mono hidden text-pencil-400 md:block">{project.category}</span>

                            {/* Arrow */}
                            <span className="text-pencil-300 transition-colors group-hover:text-cta">→</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
