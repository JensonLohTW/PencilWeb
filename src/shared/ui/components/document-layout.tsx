'use client'

import { FadeIn } from '@/components/animations/fade-in'
import { cn } from '@/shared/lib/cn'

interface DocumentLayoutProps {
    title: string
    lastUpdated?: string
    status?: string
    category?: string
    children: React.ReactNode
    className?: string
}

export function DocumentLayout({
    title,
    lastUpdated,
    status,
    category,
    children,
    className,
}: DocumentLayoutProps) {
    return (
        <div className={cn("relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-pencil-950", className)}>
            <div className="mx-auto max-w-3xl text-base leading-7 text-pencil-700 dark:text-pencil-300">
                <FadeIn>
                    <p className="text-base font-semibold leading-7 text-accent-600 dark:text-accent-400">{category}</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-pencil-950 sm:text-6xl dark:text-white">
                        {title}
                    </h1>
                    <div className="mt-4 flex items-center gap-x-4 text-xs">
                        {lastUpdated && <span>最後更新：{lastUpdated}</span>}
                        {status && (
                            <span className="rounded-full bg-accent-50 px-2 py-1 font-medium text-accent-700 ring-1 ring-inset ring-accent-600/10 dark:bg-accent-500/10 dark:text-accent-400">
                                {status}
                            </span>
                        )}
                    </div>
                </FadeIn>

                <div className="mt-16 prose prose-lg prose-pencil dark:prose-invert max-w-none">
                    {children}
                </div>
            </div>
        </div>
    )
}
