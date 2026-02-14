'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
    duration?: number
    stagger?: number
    once?: boolean
    as?: React.ElementType
}

export function TextReveal({
    text,
    className,
    delay = 0,
    duration = 0.5,
    stagger = 0.02,
    once = true,
    as: Component = 'h1',
}: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: '-10%' })

    // 將文字拆分為字符，保留空格
    const characters = Array.from(text)

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay * i },
        }),
    }

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
                duration,
            },
        },
    }

    return (
        <Component
            ref={ref}
            className={cn('inline-block', className)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={container}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    variants={child}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </Component>
    )
}
