'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { technologyReveal } from './technology-motion'

export function TechnologyFlowGraphic() {
    const reduceMotion = useReducedMotion()

    // Generate some paths to represent a wireframe sphere/polyhedron
    const rings = Array.from({ length: 6 })

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-transparent">
            {/* Background subtle grid lines */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px))] bg-[size:32px_32px]" />

            <motion.div
                {...technologyReveal(!!reduceMotion)}
                className="relative flex h-[500px] w-[500px] lg:h-[800px] lg:w-[800px] items-center justify-center"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
                <motion.div
                    animate={reduceMotion ? {} : { rotateX: 360, rotateY: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-x-0 inset-y-0"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {rings.map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full border border-pencil-900/10 dark:border-white/[0.08]"
                            style={{
                                rotateX: i * 30,
                                rotateY: i * 45,
                                transformStyle: 'preserve-3d',
                            }}
                        />
                    ))}
                    {/* Internal Connectors */}
                    {rings.map((_, i) => (
                        <motion.div
                            key={`inner-${i}`}
                            className="absolute left-[15%] top-[15%] h-[70%] w-[70%] rounded-full border border-pencil-900/5 dark:border-white/[0.04]"
                            style={{
                                rotateX: 90,
                                rotateZ: i * 30,
                                transformStyle: 'preserve-3d',
                            }}
                        />
                    ))}
                    {/* Core Shape */}
                    <div className="absolute left-[35%] top-[35%] h-[30%] w-[30%] rotate-45 border border-pencil-900/20 dark:border-white/[0.15]" />
                    <div className="absolute left-[35%] top-[35%] h-[30%] w-[30%] -rotate-45 border border-pencil-900/20 dark:border-white/[0.15]" />
                </motion.div>
            </motion.div>

            {/* Floating Action Buttons mimicking Forma reference */}
            <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-pencil-900/20 dark:border-white/20 bg-pencil-900/5 dark:bg-white/5 text-pencil-950 dark:text-white shadow-xl backdrop-blur-md transition hover:bg-pencil-900/10 dark:hover:bg-white/20 hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M3 3h18v18H3z M8 3v18 M16 3v18 M3 8h18 M3 16h18" /></svg>
                </button>
                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-cta/50 bg-cta/10 dark:bg-cta/20 text-cta shadow-xl backdrop-blur-md transition hover:bg-cta/20 dark:hover:bg-cta/40 hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
        </div>
    )
}
