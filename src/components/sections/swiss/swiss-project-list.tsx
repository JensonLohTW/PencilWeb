'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
    id: string
    number: string
    title: string
    category: string
    tags: string[]
    color: string
}

const projects: Project[] = [
    {
        id: 'flight-simulator',
        number: '01',
        title: '飛行模擬系統',
        category: 'XR / 模擬器',
        tags: ['VR', '模擬器', '飛行'],
        color: '#C4682F',
    },
    {
        id: 'flight-training',
        number: '02',
        title: '飛行教育訓練',
        category: 'XR / 教育',
        tags: ['教育訓練', 'VR', '課程'],
        color: '#0F172A',
    },
    {
        id: 'data-integration',
        number: '03',
        title: '專案資料介接流程規劃',
        category: '資料 / 整合',
        tags: ['資料介接', 'API', '流程'],
        color: '#334155',
    },
    {
        id: 'data-push',
        number: '04',
        title: '產業數據主動推播規劃',
        category: '資料 / 推播',
        tags: ['推播', '數據', '通知'],
        color: '#475569',
    },
    {
        id: 'ai-agent',
        number: '05',
        title: 'AI Agent 查詢系統',
        category: 'AI / Chat',
        tags: ['AI', 'Chat', 'Agent'],
        color: '#C4682F',
    },
]

export function SwissProjectList() {
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY })
    }

    return (
        <section id="projects" className="relative px-6 py-24 lg:px-16" onMouseMove={handleMouseMove}>
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">已完成專案</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">專案列表</h2>
                </div>
                <p className="swiss-mono hidden text-pencil-400 md:block">共 {projects.length} 個專案</p>
            </div>

            {/* Project List */}
            <div className="space-y-0">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group cursor-pointer border-b border-pencil-200 py-8 transition-colors hover:bg-pencil-50"
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="flex items-center gap-8 lg:gap-16">
                            {/* Number */}
                            <span className="swiss-mono w-12 text-pencil-400 transition-colors group-hover:text-cta">
                                {project.number}
                            </span>

                            {/* Title */}
                            <h3 className="flex-1 text-2xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-3xl">
                                {project.title}
                            </h3>

                            {/* Category */}
                            <span className="hidden text-sm text-pencil-500 md:block">{project.category}</span>

                            {/* Arrow */}
                            <span className="text-2xl text-pencil-300 transition-all group-hover:translate-x-2 group-hover:text-cta">
                                →
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="ml-20 mt-4 flex gap-3 lg:ml-28">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="swiss-mono border border-pencil-200 px-3 py-1 text-pencil-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Hover Image Preview */}
            {hoveredId && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="pointer-events-none fixed z-50 h-64 w-80 overflow-hidden"
                    style={{
                        left: mousePos.x + 20,
                        top: mousePos.y - 128,
                    }}
                >
                    <div
                        className="flex h-full w-full items-center justify-center"
                        style={{
                            backgroundColor: projects.find((p) => p.id === hoveredId)?.color || '#C4682F',
                        }}
                    >
                        <span className="text-xl font-bold text-white/80">
                            {projects.find((p) => p.id === hoveredId)?.number}
                        </span>
                    </div>
                </motion.div>
            )}
        </section>
    )
}
