'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion'

interface AnimatedValueProps {
    value: string
}

export function AnimatedValue({ value }: AnimatedValueProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    // Match the first sequence of digits and capture the surrounding non-digits
    // If no digits are found, we'll just render the string as is
    const match = typeof value === 'string' ? value.match(/^(\D*)(\d+)(\D*)$/) : null

    const count = useMotionValue(0)
    const displayValue = useTransform(count, (latest) => Math.floor(latest))

    useEffect(() => {
        if (isInView && match) {
            const target = parseInt(match[2], 10)
            const controls = animate(count, target, {
                duration: 2,
                ease: 'easeOut'
            })

            return controls.stop
        }
    }, [isInView, count, match])

    if (!match) {
        return <span ref={ref}>{value}</span>
    }

    const [, prefix, , suffix] = match

    return (
        <span ref={ref} className="inline-flex items-center">
            {prefix && <span>{prefix}</span>}
            <motion.span>{displayValue}</motion.span>
            {suffix && <span>{suffix}</span>}
        </span>
    )
}
