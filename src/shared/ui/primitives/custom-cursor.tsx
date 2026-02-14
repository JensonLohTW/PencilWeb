'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CustomCursor() {
    const cursorSize = 20
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouseX = useSpring(mouseX, smoothOptions)
    const smoothMouseY = useSpring(mouseY, smoothOptions)

    useEffect(() => {
        const manageMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            mouseX.set(clientX - cursorSize / 2)
            mouseY.set(clientY - cursorSize / 2)
        }

        window.addEventListener('mousemove', manageMouseMove)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
        }
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-white mix-blend-difference hidden sm:block"
            style={{
                left: smoothMouseX,
                top: smoothMouseY,
            }}
        />
    )
}
