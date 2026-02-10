'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

interface ProjectItem {
  id: string
  number: string
  title: string
  category: string
  tags: string[]
  color: string
  summary: string
  outcome: string
  timeline: string
}

const projectsZhTw: ProjectItem[] = [
  {
    id: 'flight-simulator',
    number: '01',
    title: '飛行模擬系統',
    category: 'XR',
    tags: ['VR', '模擬器', '飛行'],
    color: '#C4682F',
    summary: '建立高擬真模擬場景與儀表流程，縮短新手訓練上手時間。',
    outcome: '訓練流程標準化',
    timeline: '10-14 週',
  },
  {
    id: 'flight-training',
    number: '02',
    title: '飛行教育訓練',
    category: 'XR',
    tags: ['教育訓練', 'VR', '課程'],
    color: '#0F172A',
    summary: '以互動課程模組搭配任務腳本，提升訓練沉浸度與完成率。',
    outcome: '課程完成率提升',
    timeline: '8-12 週',
  },
  {
    id: 'data-integration',
    number: '03',
    title: '專案資料介接流程規劃',
    category: 'Data',
    tags: ['資料介接', 'API', '流程'],
    color: '#334155',
    summary: '整合跨系統資料流，建立可追蹤、可擴充的資料管線。',
    outcome: '資料整合效率提升',
    timeline: '6-10 週',
  },
  {
    id: 'data-push',
    number: '04',
    title: '產業數據主動推播規劃',
    category: 'Data',
    tags: ['推播', '數據', '通知'],
    color: '#475569',
    summary: '設計分層通知策略與事件規則，提升關鍵資訊觸達率。',
    outcome: '通知觸達率提升',
    timeline: '4-8 週',
  },
  {
    id: 'ai-agent',
    number: '05',
    title: 'AI Agent 查詢系統',
    category: 'AI',
    tags: ['AI', 'Chat', 'Agent'],
    color: '#C4682F',
    summary: '建立企業知識檢索與任務代理流程，加速內外部問答與作業。',
    outcome: '回應時間縮短',
    timeline: '6-12 週',
  },
]

const projectsEn: ProjectItem[] = [
  {
    id: 'flight-simulator',
    number: '01',
    title: 'Flight Simulator System',
    category: 'XR',
    tags: ['VR', 'Simulator', 'Flight'],
    color: '#C4682F',
    summary: 'Built high-fidelity simulation scenes and instrument workflows to reduce ramp-up time.',
    outcome: 'Standardized training flow',
    timeline: '10-14 weeks',
  },
  {
    id: 'flight-training',
    number: '02',
    title: 'Flight Education Training',
    category: 'XR',
    tags: ['Training', 'VR', 'Course'],
    color: '#0F172A',
    summary: 'Combined interactive curriculum and mission scripts to improve completion quality.',
    outcome: 'Higher course completion',
    timeline: '8-12 weeks',
  },
  {
    id: 'data-integration',
    number: '03',
    title: 'Data Integration Planning',
    category: 'Data',
    tags: ['Integration', 'API', 'Workflow'],
    color: '#334155',
    summary: 'Integrated cross-system data flows into a traceable and scalable data pipeline.',
    outcome: 'Faster data integration',
    timeline: '6-10 weeks',
  },
  {
    id: 'data-push',
    number: '04',
    title: 'Industry Data Push Planning',
    category: 'Data',
    tags: ['Push', 'Data', 'Notification'],
    color: '#475569',
    summary: 'Designed layered notification rules and event triggers for better information delivery.',
    outcome: 'Improved delivery rate',
    timeline: '4-8 weeks',
  },
  {
    id: 'ai-agent',
    number: '05',
    title: 'AI Agent Query System',
    category: 'AI',
    tags: ['AI', 'Chat', 'Agent'],
    color: '#C4682F',
    summary: 'Built enterprise retrieval and task-agent workflow to accelerate support and operations.',
    outcome: 'Reduced response time',
    timeline: '6-12 weeks',
  },
]

export function SwissProjectList() {
  const { language } = useLanguage()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const isZh = language === 'zh-TW'
  const projects = isZh ? projectsZhTw : projectsEn

  const eyebrow = isZh ? '已完成專案' : 'Completed Projects'
  const title = isZh ? '專案列表' : 'Projects'
  const filters = isZh ? ['All', 'XR', 'AI', 'Data'] : ['All', 'XR', 'AI', 'Data']
  const count = isZh ? `共 ${projects.length} 個專案` : `${projects.length} Projects`
  const filteredProjects = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory, projects],
  )

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="projects" className="relative px-6 py-24 lg:px-16" onMouseMove={handleMouseMove}>
      <div className="mb-8 flex items-end justify-between border-b border-pencil-200 pb-6 dark:border-white/10">
        <div>
          <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
          <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">{title}</h2>
        </div>
        <p className="swiss-mono hidden text-pencil-400 md:block dark:text-pencil-500">{count}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              'swiss-mono border px-4 py-2 text-xs tracking-wider transition-colors',
              activeCategory === category
                ? 'border-pencil-950 bg-pencil-950 text-white dark:border-white dark:bg-white dark:text-pencil-950'
                : 'border-pencil-300 text-pencil-600 hover:border-cta hover:text-cta dark:border-white/20 dark:text-pencil-300',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-0">
        {filteredProjects.map((project, index) => {
          const isExpanded = expandedId === project.id

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group border-b border-pencil-200 py-8 transition-colors hover:bg-pencil-50 dark:border-white/10 dark:hover:bg-white/5"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
              >
                <div className="flex items-center gap-8 lg:gap-16">
                  <span className="swiss-mono w-12 text-pencil-400 transition-colors group-hover:text-cta dark:text-pencil-500">
                    {project.number}
                  </span>

                  <h3 className="flex-1 text-2xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-3xl dark:text-white">
                    {project.title}
                  </h3>

                  <span className="hidden text-sm text-pencil-500 md:block dark:text-pencil-400">
                    {project.category}
                  </span>

                  <span
                    className={cn(
                      'text-2xl text-pencil-300 transition-all dark:text-pencil-600',
                      isExpanded && 'rotate-90 text-cta',
                    )}
                  >
                    →
                  </span>
                </div>

                <div className="mt-4 ml-20 flex flex-wrap gap-3 lg:ml-28">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="swiss-mono border border-pencil-200 px-3 py-1 text-pencil-500 dark:border-white/10 dark:text-pencil-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 ml-20 grid gap-4 pr-2 pb-2 lg:ml-28 lg:grid-cols-3">
                      <p className="text-sm leading-relaxed text-pencil-600 lg:col-span-2 dark:text-pencil-300">
                        {project.summary}
                      </p>
                      <div className="grid gap-3 text-sm">
                        <div className="border border-pencil-200 p-3 dark:border-white/10">
                          <p className="swiss-mono text-[11px] text-pencil-400">{isZh ? '交付結果' : 'Outcome'}</p>
                          <p className="mt-1 font-medium text-pencil-900 dark:text-white">{project.outcome}</p>
                        </div>
                        <div className="border border-pencil-200 p-3 dark:border-white/10">
                          <p className="swiss-mono text-[11px] text-pencil-400">{isZh ? '導入時程' : 'Timeline'}</p>
                          <p className="mt-1 font-medium text-pencil-900 dark:text-white">{project.timeline}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>

      {hoveredId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="pointer-events-none fixed z-50 hidden h-64 w-80 overflow-hidden lg:block"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 128,
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              backgroundColor: projects.find((project) => project.id === hoveredId)?.color || '#C4682F',
            }}
          >
            <span className="text-xl font-bold text-white/80">
              {projects.find((project) => project.id === hoveredId)?.number}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  )
}
