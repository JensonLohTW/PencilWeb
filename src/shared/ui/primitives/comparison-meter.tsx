'use client'

import { cn } from '@/shared/lib/cn'
import { motion } from 'framer-motion'

export type MeterLevel = 1 | 2 | 3
export type MeterType = 'bar' | 'dots' | 'currency'

interface ComparisonMeterProps {
    level: MeterLevel
    type?: MeterType
    label?: string
    className?: string
}

export function ComparisonMeter({ level, type = 'dots', label, className }: ComparisonMeterProps) {
    // Determine color based on level and type
    // For budget/complexity: Lower is usually "better" (green/neutral), Higher is "warning" (orange/red)
    // For timeline: Shorter is better.
    // However, "Investment" being high might just be a fact, not necessarily bad.
    // Let's stick to a neutral swiss style: filled vs empty.

    const maxLevel = 3

    if (type === 'currency') {
        return (
            <div className={cn("flex flex-col gap-1", className)}>
                <div className="flex gap-0.5" aria-label={`Level ${level} of ${maxLevel}`}>
                    {Array.from({ length: maxLevel }).map((_, i) => (
                        <span
                            key={i}
                            className={cn(
                                "font-serif text-lg leading-none transition-colors",
                                i < level
                                    ? "text-pencil-950 dark:text-white"
                                    : "text-pencil-200 dark:text-white/10"
                            )}
                        >
                            $
                        </span>
                    ))}
                </div>
                {label && <span className="text-xs text-pencil-500 dark:text-pencil-400">{label}</span>}
            </div>
        )
    }

    if (type === 'bar') {
        return (
            <div className={cn("flex flex-col gap-2 w-full max-w-[100px]", className)}>
                <div className="flex gap-1 h-1.5">
                    {Array.from({ length: maxLevel }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className={cn(
                                "flex-1 rounded-sm transition-colors",
                                i < level
                                    ? "bg-cta"
                                    : "bg-pencil-200 dark:bg-white/10"
                            )}
                        />
                    ))}
                </div>
                {label && <span className="text-xs text-pencil-500 dark:text-pencil-400">{label}</span>}
            </div>
        )
    }

    // Default: Dots
    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            <div className="flex gap-1.5">
                {Array.from({ length: maxLevel }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={cn(
                            "h-2.5 w-2.5 rounded-full transition-colors",
                            i < level
                                ? "bg-pencil-950 dark:bg-white"
                                : "bg-pencil-100 dark:bg-white/10"
                        )}
                        aria-hidden="true"
                    />
                ))}
            </div>
            {label && <span className="text-xs font-medium text-pencil-600 dark:text-pencil-300">{label}</span>}
        </div>
    )
}
