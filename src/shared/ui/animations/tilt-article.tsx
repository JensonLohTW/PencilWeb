'use client'

import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion'
import { ReactNode, MouseEvent, useRef, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TiltCardProps extends HTMLMotionProps<"article"> {
    children: ReactNode
    className?: string
    intensity?: number
    active?: boolean // If false, disables tilt
}

export function TiltArticle({ children, className, intensity = 5, active = true, ...props }: TiltCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const isReducedMotion = useReducedMotion()
    const rafIdRef = useRef<number | null>(null)

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`])

    const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
        if (isReducedMotion || !active) return
        if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current)
        const clientX = e.clientX
        const clientY = e.clientY
        const target = e.currentTarget
        rafIdRef.current = requestAnimationFrame(() => {
            const rect = target.getBoundingClientRect()
            x.set((clientX - rect.left) / rect.width - 0.5)
            y.set((clientY - rect.top) / rect.height - 0.5)
            rafIdRef.current = null
        })
    }, [isReducedMotion, active, x, y])

    const handleMouseLeave = useCallback(() => {
        if (rafIdRef.current !== null) {
            cancelAnimationFrame(rafIdRef.current)
            rafIdRef.current = null
        }
        x.set(0)
        y.set(0)
    }, [x, y])

    // Combine external styles with tilt styles
    const combinedStyle = active && !isReducedMotion
        ? { ...props.style, rotateX, rotateY, transformStyle: 'preserve-3d' as const, perspective: 1000 }
        : props.style

    return (
        <motion.article
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            {...props}
            style={combinedStyle}
        >
            {children}
        </motion.article>
    )
}
