'use client'

import { motion } from 'framer-motion'
import { cn } from '@/shared/lib/cn'
import { useMemo } from 'react'

interface PixelProps {
    className?: string
    color?: string
}

export function PixelMarker({ className, color = "bg-pencil-950 dark:bg-white" }: PixelProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            {/* Central Pixel */}
            <div className={cn("h-1 w-1", color)} />

            {/* Arms */}
            <div className={cn("absolute -top-1 h-1 w-1 opacity-60", color)} />
            <div className={cn("absolute -bottom-1 h-1 w-1 opacity-60", color)} />
            <div className={cn("absolute -left-1 h-1 w-1 opacity-60", color)} />
            <div className={cn("absolute -right-1 h-1 w-1 opacity-60", color)} />
        </div>
    )
}

export function PixelCorner({ className }: { className?: string }) {
    return (
        <div className={cn("absolute flex gap-0.5", className)}>
            <div className="h-1 w-1 bg-current opacity-40" />
            <div className="h-1 w-1 bg-current opacity-70" />
            <div className="h-1 w-1 bg-current" />
        </div>
    )
}

export function PixelCluster({ count = 20, areaWidth = 300, areaHeight = 300, className }: { count?: number; areaWidth?: number; areaHeight?: number; className?: string }) {
    const pixels = useMemo(() => {
        const random = (seed: number) => {
            const value = Math.sin(seed * 12.9898) * 43758.5453
            return value - Math.floor(value)
        }

        return Array.from({ length: count }).map((_, i) => {
            const xSeed = i + 1
            const ySeed = i + 101
            const delaySeed = i + 201
            const durationSeed = i + 301
            const targetYSeed = i + 401
            const repeatDelaySeed = i + 501

            return {
                id: i,
                x: random(xSeed) * areaWidth,
                y: random(ySeed) * areaHeight,
                delay: random(delaySeed) * 5,
                duration: 3 + random(durationSeed) * 4,
                targetY: -20 - random(targetYSeed) * 30,
                repeatDelay: random(repeatDelaySeed) * 2,
            }
        })
    }, [count, areaWidth, areaHeight])

    return (
        <div className={cn("relative", className)} style={{ width: areaWidth, height: areaHeight }}>
            {pixels.map((pixel) => (
                <motion.div
                    key={pixel.id}
                    className="absolute h-1 w-1 bg-current"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0.2, 0.8, 0],
                        scale: [0, 1, 1, 0.5, 0],
                        y: [pixel.y, pixel.y + pixel.targetY]
                    }}
                    transition={{
                        duration: pixel.duration,
                        delay: pixel.delay,
                        repeat: Infinity,
                        repeatDelay: pixel.repeatDelay
                    }}
                    style={{
                        left: pixel.x,
                        top: pixel.y
                    }}
                />
            ))}
        </div>
    )
}
