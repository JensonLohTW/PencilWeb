'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import { transitions, variants, viewportConfig } from '@/config/animations'
import { cn } from '@/shared/lib/cn'

interface FadeInProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    variant?: keyof typeof variants
    viewport?: {
        once?: boolean
        amount?: number | 'some' | 'all'
        margin?: string
    }
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = transitions.duration.normal,
    variant = 'fadeInUp',
    viewport = viewportConfig,
}: FadeInProps) {
    const shouldReduceMotion = useReducedMotion()

    const selectedVariant = variants[variant]

    const animationVariants = {
        hidden: selectedVariant.initial,
        visible: {
            ...selectedVariant.animate,
            transition: {
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: transitions.ease.smooth,
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={animationVariants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
