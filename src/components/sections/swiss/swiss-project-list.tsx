'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/components/providers/language-provider'

const projectsZhTw = [
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

const projectsEn = [
    {
        id: 'flight-simulator',
        number: '01',
        title: 'Flight Simulator System',
        category: 'XR / Simulator',
        tags: ['VR', 'Simulator', 'Flight'],
        color: '#C4682F',
    },
    {
        id: 'flight-training',
        number: '02',
        title: 'Flight Education Training',
        category: 'XR / Education',
        tags: ['Training', 'VR', 'Course'],
        color: '#0F172A',
    },
    {
        id: 'data-integration',
        number: '03',
        title: 'Data Integration Planning',
        category: 'Data / Integration',
        tags: ['Integration', 'API', 'Workflow'],
        color: '#334155',
    },
    {
        id: 'data-push',
        number: '04',
        title: 'Industry Data Push Planning',
        category: 'Data / Push',
        tags: ['Push', 'Data', 'Notification'],
        color: '#475569',
    },
    {
        id: 'ai-agent',
        number: '05',
        title: 'AI Agent Query System',
        category: 'AI / Chat',
        tags: ['AI', 'Chat', 'Agent'],
        color: '#C4682F',
    },
]

const projectsJa = [
    {
        id: 'flight-simulator',
        number: '01',
        title: 'フライトシミュレーター',
        category: 'XR / シミュレーター',
        tags: ['VR', 'シミュレーター', '飛行'],
        color: '#C4682F',
    },
    {
        id: 'flight-training',
        number: '02',
        title: '飛行教育トレーニング',
        category: 'XR / 教育',
        tags: ['教育', 'VR', 'コース'],
        color: '#0F172A',
    },
    {
        id: 'data-integration',
        number: '03',
        title: 'データ連携計画',
        category: 'データ / 統合',
        tags: ['連携', 'API', 'フロー'],
        color: '#334155',
    },
    {
        id: 'data-push',
        number: '04',
        title: 'データプッシュ計画',
        category: 'データ / プッシュ',
        tags: ['プッシュ', 'データ', '通知'],
        color: '#475569',
    },
    {
        id: 'ai-agent',
        number: '05',
        title: 'AI エージェントシステム',
        category: 'AI / チャット',
        tags: ['AI', 'チャット', 'エージェント'],
        color: '#C4682F',
    },
]

export function SwissProjectList() {
    const { language } = useLanguage()
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const projects = language === 'zh-TW' ? projectsZhTw : language === 'ja' ? projectsJa : projectsEn
    const eyebrow = language === 'zh-TW' ? '已完成專案' : language === 'ja' ? '完了したプロジェクト' : 'Completed Projects'
    const title = language === 'zh-TW' ? '專案列表' : language === 'ja' ? 'プロジェクト一覧' : 'Projects'
    const count =
        language === 'zh-TW'
            ? `共 ${projects.length} 個專案`
            : language === 'ja'
                ? `全 ${projects.length} プロジェクト`
                : `${projects.length} Projects`

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY })
    }

    return (
        <section id="projects" className="relative px-6 py-24 lg:px-16" onMouseMove={handleMouseMove}>
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6 dark:border-white/10">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
                </div>
                <p className="swiss-mono hidden text-pencil-400 md:block dark:text-pencil-500">{count}</p>
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
                        className="group cursor-pointer border-b border-pencil-200 py-8 transition-colors hover:bg-pencil-50 dark:border-white/10 dark:hover:bg-white/5"
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="flex items-center gap-8 lg:gap-16">
                            {/* Number */}
                            <span className="swiss-mono w-12 text-pencil-400 transition-colors group-hover:text-cta dark:text-pencil-500">
                                {project.number}
                            </span>

                            {/* Title */}
                            <h3 className="flex-1 text-2xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-3xl dark:text-white">
                                {project.title}
                            </h3>

                            {/* Category */}
                            <span className="hidden text-sm text-pencil-500 md:block dark:text-pencil-400">{project.category}</span>

                            {/* Arrow */}
                            <span className="text-2xl text-pencil-300 transition-all group-hover:translate-x-2 group-hover:text-cta dark:text-pencil-600">
                                →
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="ml-20 mt-4 flex gap-3 lg:ml-28">
                            {project.tags.map((tag) => (
                                <span key={tag} className="swiss-mono border border-pencil-200 px-3 py-1 text-pencil-500 dark:border-white/10 dark:text-pencil-400">
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
