'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { technologyReveal } from './technology-motion'

const STATES_COUNT = 8

export function TechnologyHeroGraphic({ labels }: { labels?: string[] }) {
    const reduceMotion = useReducedMotion()
    const [shapeState, setShapeState] = useState(0)

    useEffect(() => {
        if (reduceMotion) return
        const interval = setInterval(() => {
            setShapeState((prev) => (prev + 1) % STATES_COUNT)
        }, 5000)
        return () => clearInterval(interval)
    }, [reduceMotion])

    const states = [
        // State 0: Rounded Square (Default)
        {
            layer1: { rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, y: 0, borderRadius: '2rem', borderStyle: 'dashed' },
            layer2: { rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, y: 0, borderRadius: '2rem', borderStyle: 'dashed', opacity: 0 },
            layer3: { rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, y: 0, borderRadius: '2rem', borderStyle: 'dashed', opacity: 0 },
            dot: { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
        },
        // State 1: Circle with radar ring
        {
            layer1: { rotateX: 0, rotateY: 0, rotateZ: 180, scale: 0.9, y: 0, borderRadius: '50%', borderStyle: 'solid' },
            layer2: { rotateX: 0, rotateY: 0, rotateZ: 90, scale: 1.15, y: 0, borderRadius: '50%', borderStyle: 'dashed', opacity: 0.5 },
            layer3: { rotateX: 0, rotateY: 0, rotateZ: -90, scale: 1.4, y: 0, borderRadius: '50%', borderStyle: 'dashed', opacity: 0.2 },
            dot: { scale: 1.5, opacity: 1 }
        },
        // State 2: 3D Isometric Layers
        {
            layer1: { rotateX: 60, rotateY: 0, rotateZ: 45, scale: 1.1, y: 0, borderRadius: '0.1rem', borderStyle: 'solid' },
            layer2: { rotateX: 60, rotateY: 0, rotateZ: 45, scale: 1.1, y: -40, borderRadius: '0.1rem', borderStyle: 'dashed', opacity: 0.7 },
            layer3: { rotateX: 60, rotateY: 0, rotateZ: 45, scale: 1.1, y: 40, borderRadius: '0.1rem', borderStyle: 'dashed', opacity: 0.3 },
            dot: { scale: 0.8, opacity: 0.5 }
        },
        // State 3: Intersecting geometry
        {
            layer1: { rotateX: 0, rotateY: 0, rotateZ: 45, scale: 1.0, y: 0, borderRadius: '0.5rem', borderStyle: 'solid' },
            layer2: { rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1.1, y: 0, borderRadius: '0.5rem', borderStyle: 'solid', opacity: 0.4 },
            layer3: { rotateX: 45, rotateY: 45, rotateZ: 90, scale: 0.8, y: 0, borderRadius: '50%', borderStyle: 'dashed', opacity: 0.8 },
            dot: { scale: 2, opacity: 0.8 }
        },
        // State 4: Octahedron / Diamond Cube
        {
            layer1: { rotateX: 45, rotateY: 45, rotateZ: 0, scale: 0.9, y: 0, borderRadius: '0', borderStyle: 'solid' },
            layer2: { rotateX: -45, rotateY: -45, rotateZ: 0, scale: 1.1, y: 0, borderRadius: '0', borderStyle: 'dashed', opacity: 0.5 },
            layer3: { rotateX: 45, rotateY: 45, rotateZ: 45, scale: 0.6, y: 0, borderRadius: '0', borderStyle: 'solid', opacity: 0.3 },
            dot: { scale: 0.5, opacity: 1 }
        },
        // State 5: Gyroscope Rings
        {
            layer1: { rotateX: 75, rotateY: 0, rotateZ: 180, scale: 1.2, y: 0, borderRadius: '50%', borderStyle: 'solid' },
            layer2: { rotateX: 0, rotateY: 75, rotateZ: 90, scale: 1.2, y: 0, borderRadius: '50%', borderStyle: 'dashed', opacity: 0.8 },
            layer3: { rotateX: 45, rotateY: 45, rotateZ: 45, scale: 1.2, y: 0, borderRadius: '50%', borderStyle: 'solid', opacity: 0.4 },
            dot: { scale: [1, 1.5, 1], opacity: 1 }
        },
        // State 6: Hypercube Projection
        {
            layer1: { rotateX: 20, rotateY: -20, rotateZ: 10, scale: 1.2, y: 0, borderRadius: '10%', borderStyle: 'dashed' },
            layer2: { rotateX: -20, rotateY: 20, rotateZ: -10, scale: 0.6, y: 0, borderRadius: '10%', borderStyle: 'solid', opacity: 0.6 },
            layer3: { rotateX: 10, rotateY: -10, rotateZ: 20, scale: 0.9, y: 0, borderRadius: '10%', borderStyle: 'dashed', opacity: 0.3 },
            dot: { scale: 1, opacity: 0.2 }
        },
        // State 7: Pulsing Core
        {
            layer1: { rotateX: 0, rotateY: 0, rotateZ: 90, scale: 0.5, y: 0, borderRadius: '2rem', borderStyle: 'solid' },
            layer2: { rotateX: 0, rotateY: 0, rotateZ: 45, scale: 1.5, y: 0, borderRadius: '50%', borderStyle: 'dashed', opacity: 0.2 },
            layer3: { rotateX: 0, rotateY: 0, rotateZ: 135, scale: 2.0, y: 0, borderRadius: '50%', borderStyle: 'dashed', opacity: 0.1 },
            dot: { scale: 3, opacity: 1 }
        }
    ]

    const defaultLabels = [
        'Generating...',
        'Morphing...',
        'Spatial Shift',
        'Interpolating...',
        'Quantum Render',
        'Gyro-Stabilization',
        'Higher Dimensions',
        'Core Resonance'
    ]

    const activeLabels = labels && labels.length === STATES_COUNT ? labels : defaultLabels

    const current = states[reduceMotion ? 0 : shapeState]

    return (
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-[55%] flex flex-col items-center">
            <motion.div
                {...technologyReveal(!!reduceMotion, { delay: 0.1 })}
                className="text-[10px] font-mono uppercase tracking-widest text-pencil-500 mb-2 min-h-4"
            >
                {activeLabels[shapeState]}
            </motion.div>
            <motion.div
                {...technologyReveal(!!reduceMotion, { delay: 0.2 })}
                className="relative flex h-40 w-40 items-center justify-center sm:h-56 sm:w-56 xl:h-72 xl:w-72"
                style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
            >
                {/* Layer 3 */}
                <motion.div
                    animate={current.layer3}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 border border-pencil-400 bg-transparent dark:border-pencil-600"
                    style={{ transformStyle: 'preserve-3d' }}
                />
                {/* Layer 2 */}
                <motion.div
                    animate={current.layer2}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 border border-pencil-400 bg-transparent dark:border-pencil-600"
                    style={{ transformStyle: 'preserve-3d' }}
                />
                {/* Layer 1 */}
                <motion.div
                    animate={current.layer1}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center border border-pencil-500 bg-pencil-50/30 backdrop-blur-[2px] dark:border-pencil-500 dark:bg-pencil-950/30"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Center Dot */}
                    <motion.div
                        animate={current.dot}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-3 w-3 rounded-full bg-pencil-900 shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:bg-pencil-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}
