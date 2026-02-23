'use client'

import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion'
import { ReactNode, MouseEvent } from 'react'
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

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`])

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (isReducedMotion || !active) return
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = (mouseX / width) - 0.5
        const yPct = (mouseY / height) - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

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
