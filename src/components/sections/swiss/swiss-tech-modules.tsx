'use client'

import { motion } from 'framer-motion'

interface TechModule {
    number: string
    title: string
    subtitle: string
    description: string
    features: string[]
}

const modules: TechModule[] = [
    {
        number: '01',
        title: 'XR（VR/MR/XR）',
        subtitle: 'Extended Reality',
        description: '虛擬實境、混合實境與擴增實境技術整合，提供沉浸式視覺體驗',
        features: ['VR 頭盔整合', 'MR 透視模式', 'AR 空間定位', '跨平台支援'],
    },
    {
        number: '02',
        title: '全向跑步機',
        subtitle: 'Omnidirectional Treadmill',
        description: '移動裝置整合，讓使用者在虛擬世界中自由行走',
        features: ['全向移動追蹤', '步態分析', '安全防護', '多人協同'],
    },
    {
        number: '03',
        title: '觸覺回饋',
        subtitle: 'Haptic Feedback',
        description: 'Haptic 裝置整合，提供觸覺反饋增強沉浸感',
        features: ['觸覺背心', '手套回饋', '力回饋裝置', '溫度模擬'],
    },
    {
        number: '04',
        title: 'AI 與大數據',
        subtitle: 'AI & Big Data',
        description: '人工智慧與資料分析，提供智能化互動體驗',
        features: ['AI NPC 行為', '個人化推薦', '語音識別', '數據分析'],
    },
    {
        number: '05',
        title: '5G/6G',
        subtitle: 'Next-Gen Network',
        description: '低延遲高頻寬網路，確保即時互動體驗',
        features: ['低延遲傳輸', '高頻寬串流', '邊緣運算', '多人同步'],
    },
    {
        number: '06',
        title: '五感互動',
        subtitle: 'Multi-Sensory',
        description: '嗅覺、味覺等感官技術研究，邁向完整沉浸體驗',
        features: ['嗅覺裝置', '環境模擬', '多感官整合', '研究前瞻'],
    },
]

export function SwissTechModules() {
    return (
        <section id="tech-modules" className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">核心技術堆疊</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">六大技術模組</h2>
                </div>
                <p className="swiss-mono hidden text-pencil-400 md:block">Tech Stack</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-px bg-pencil-200 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((module, index) => (
                    <motion.div
                        key={module.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-pencil-50 p-8 transition-colors hover:bg-white"
                    >
                        {/* Number */}
                        <span className="swiss-mono text-4xl font-bold text-pencil-200 transition-colors group-hover:text-cta lg:text-5xl">
                            {module.number}
                        </span>

                        {/* Header */}
                        <div className="mt-4 border-t border-pencil-200 pt-4">
                            <h3 className="text-xl font-semibold text-pencil-950">{module.title}</h3>
                            <p className="swiss-mono mt-1 text-pencil-400">{module.subtitle}</p>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-relaxed text-pencil-600">{module.description}</p>

                        {/* Features */}
                        <ul className="mt-6 space-y-2">
                            {module.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-pencil-700">
                                    <span className="swiss-mono text-pencil-400">{String(idx + 1).padStart(2, '0')}</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
