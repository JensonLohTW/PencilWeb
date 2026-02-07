import { PlainButtonLink } from '@/components/elements/button'
import { VRIcon } from '@/components/icons/vr-icon'
import { AIIcon } from '@/components/icons/ai-icon'

export function ProjectsGrid() {
    return (
        <section id="projects" className="relative py-24 overflow-hidden border-t border-black/5 dark:border-white/5">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-cta/5 blur-[100px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <p className="text-xs font-mono font-bold text-cta uppercase tracking-widest mb-2 dark:text-cta">Projects</p>
                    <h2 className="text-3xl font-bold tracking-tight text-pencil-900 sm:text-4xl dark:text-white">
                        專案實績 Showcase
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-cta/50 transition-all duration-300 group dark:border-white/5">
                        <div className="mb-6 text-cta dark:text-cta"><VRIcon /></div>
                        <h3 className="text-xl font-bold text-pencil-900 mb-3 group-hover:text-cta dark:text-white dark:group-hover:text-cta">飛行模擬系統</h3>
                        <p className="text-pencil-600 mb-6 text-sm leading-relaxed dark:text-pencil-400">
                            高擬真度飛行模擬器開發，整合六軸動態平台與 VR 視覺，提供軍規級的沉浸式飛行訓練體驗。
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">UNITY</span>
                            <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">VR</span>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-cta/50 transition-all duration-300 group dark:border-white/5">
                        <div className="mb-6 text-cta dark:text-cta"><VRIcon /></div>
                        <h3 className="text-xl font-bold text-pencil-900 mb-3 group-hover:text-cta dark:text-white dark:group-hover:text-cta">飛行教育訓練</h3>
                        <p className="text-pencil-600 mb-6 text-sm leading-relaxed dark:text-pencil-400">
                            結合 LMS 系統與 VR 技術，建立完整的飛行員培訓考核機制，實現訓練數據化與視覺化。
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">LMS</span>
                            <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">DATA</span>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-cta/50 transition-all duration-300 group dark:border-white/5">
                        <div className="mb-6 text-cta dark:text-cta"><AIIcon /></div>
                        <h3 className="text-xl font-bold text-pencil-900 mb-3 group-hover:text-cta dark:text-white dark:group-hover:text-cta">AI 企業查詢</h3>
                        <p className="text-pencil-600 mb-6 text-sm leading-relaxed dark:text-pencil-400">
                            基於 RAG 技術的企業級 AI 知識庫，讓員工用自然語言即可查詢複雜的內部規章與技術文件。
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">LLM</span>
                            <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">RAG</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <PlainButtonLink href="/projects" className="text-pencil-600 hover:text-pencil-900 font-mono text-sm tracking-widest uppercase dark:text-pencil-500 dark:hover:text-white">
            // View All Projects
                    </PlainButtonLink>
                </div>
            </div>
        </section>
    )
}
