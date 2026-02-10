'use client'

import { Document } from '@/components/elements/document'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface DocumentSectionProps {
    category?: string
    title: string
    lastUpdated?: string
    status?: string
    children: React.ReactNode
    className?: string
}

export function DocumentCentered({
    category = 'Legal',
    title,
    lastUpdated,
    status,
    children,
    className,
}: DocumentSectionProps) {
    return (
        <section className={cn("relative min-h-screen bg-pencil-50 px-6 pt-32 pb-24 dark:bg-pencil-950", className)}>
            <div className="mx-auto max-w-3xl">
                <header className="mb-16 border-b border-pencil-950/10 pb-8 dark:border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="swiss-mono mb-6 text-pencil-500 dark:text-pencil-400">
                            {category}
                        </p>
                        <h1 className="swiss-heading mb-6 text-pencil-950 dark:text-white">
                            {title}
                        </h1>
                        {(lastUpdated || status) && (
                            <div className="flex items-center gap-6 text-sm font-medium text-pencil-500 dark:text-pencil-400">
                                {lastUpdated && <span>Last Updated: {lastUpdated}</span>}
                                {status && (
                                    <span className="flex items-center gap-2">
                                        Status: <span className="text-cta">{status}</span>
                                    </span>
                                )}
                            </div>
                        )}
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Document>
                        {children}
                    </Document>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="fixed top-0 left-0 h-1 w-full bg-gradient-to-r from-pencil-950 via-cta to-pencil-950 dark:from-white dark:via-cta dark:to-white" />
        </section>
    )
}

export function DocumentLeftAligned({
    category = 'Legal',
    title,
    lastUpdated,
    status,
    children,
    className,
}: DocumentSectionProps) {
    return (
        <section className={cn("relative min-h-screen bg-pencil-50 px-6 pt-32 pb-24 lg:px-16 dark:bg-pencil-950", className)}>
            <div className="grid gap-12 lg:grid-cols-12">
                {/* Sidebar / Header */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="swiss-mono mb-6 text-pencil-500 dark:text-pencil-400">
                            {category}
                        </p>
                        <h1 className="swiss-heading mb-6 text-4xl text-pencil-950 dark:text-white">
                            {title}
                        </h1>
                        {(lastUpdated || status) && (
                            <div className="flex flex-col gap-2 text-sm font-medium text-pencil-500 dark:text-pencil-400">
                                {lastUpdated && <span>Last Updated: {lastUpdated}</span>}
                                {status && (
                                    <span className="flex items-center gap-2">
                                        Status: <span className="text-cta">{status}</span>
                                    </span>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 lg:col-start-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Document>
                            {children}
                        </Document>
                    </motion.div>
                </div>
            </div>
            {/* Decorative elements */}
            <div className="fixed top-0 left-0 h-1 w-full bg-gradient-to-r from-pencil-950 via-cta to-pencil-950 dark:from-white dark:via-cta dark:to-white" />
        </section>
    )
}
