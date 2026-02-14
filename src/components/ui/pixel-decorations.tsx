'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

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
    const [pixels, setPixels] = useState<{ id: number; x: number; y: number; delay: number; duration: number }[]>([])

    useEffect(() => {
        // Generate random pixels on client-side only to avoid hydration mismatch
        const newPixels = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * areaWidth,
            y: Math.random() * areaHeight,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4
        }))
        setPixels(newPixels)
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
                        y: [pixel.y, pixel.y - 20 - Math.random() * 30]
                    }}
                    transition={{
                        duration: pixel.duration,
                        delay: pixel.delay,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2
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
