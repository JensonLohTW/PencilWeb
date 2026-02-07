'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { clsx } from 'clsx/lite'

interface TextRevealProps {
    children: string
    className?: string
    delay?: number
    stagger?: number
}

export function TextReveal({ children, className, delay = 0, stagger = 0.05 }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
    const words = children.split(' ')

    return (
        <span ref={ref} className={clsx('inline-block', className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] -mb-[0.1em] pb-[0.1em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%' }}
                        animate={isInView ? { y: 0 } : { y: '100%' }}
                        transition={{
                            duration: 0.5,
                            ease: [0.33, 1, 0.68, 1], // Custom cubic bezier for "Swiss" feel
                            delay: delay + i * stagger,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}
