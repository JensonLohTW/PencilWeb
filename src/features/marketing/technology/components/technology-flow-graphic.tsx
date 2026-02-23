'use client'

import { motion, useReducedMotion } from 'framer-motion'
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


        </div>
    )
}
