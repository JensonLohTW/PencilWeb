'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { useLanguage } from '@/shared/providers/language-provider'

interface ProjectItem {
    number: string
    title: string
    category: string
}

export function SwissHomeProjects() {
    const { t } = useLanguage()

    // Get projects from translations
    const projectsData = t('pages.home.projects.items')
    const projects = Array.isArray(projectsData) ? (projectsData as ProjectItem[]) : []

    // Map number to href
    const getProjectHref = (number: string) => {
        const map: Record<string, string> = {
            '01': '/projects#flight-simulator',
            '02': '/projects#flight-training',
            '03': '/projects#data-integration',
            '04': '/projects#ai-agent',
        }
        return map[number] || '/projects'
    }

    return (
        <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6 dark:border-white/10">
                <div>
                    <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">{t('pages.home.projects.eyebrow')}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">
                        {t('pages.home.projects.title')}
                    </h2>
                </div>
                <Link href="/projects" className="swiss-mono hidden text-pencil-400 transition-colors hover:text-cta md:block dark:text-pencil-500">
                    {t('pages.home.projects.viewAll')} →
                </Link>
            </div>

            {/* Project List */}
            <div className="space-y-0">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group cursor-pointer border-b border-pencil-200 py-6 transition-colors hover:bg-pencil-50 dark:border-white/10 dark:hover:bg-white/5"
                    >
                        <Link href={getProjectHref(project.number)} className="flex items-center gap-6 lg:gap-12">
                            {/* Number */}
                            <span className="swiss-mono text-4xl font-bold text-pencil-200 transition-colors group-hover:text-cta lg:text-5xl dark:text-white/20">
                                {project.number}
                            </span>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-2xl dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="swiss-mono mt-1 text-sm text-pencil-400 dark:text-pencil-500">{project.category}</p>
                            </div>

                            {/* Arrow */}
                            <span className="text-2xl text-pencil-300 transition-all group-hover:translate-x-2 group-hover:text-cta dark:text-pencil-600">→</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
