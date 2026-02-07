'use client'

import { clsx } from 'clsx/lite'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { useState, type MouseEvent } from 'react'
import Link from 'next/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { Container } from '@/components/elements/container'

interface Project {
    id: string
    title: string
    category: string
    year: string
    image: string
    href: string
    tags: string[]
}

const projects: Project[] = [
    {
        id: 'flight-simulator',
        title: 'Flight Simulator',
        category: 'VR Training',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?q=80&w=2000&auto=format&fit=crop', // Sky/Clouds
        href: '/projects/flight-simulator',
        tags: ['Unity', '6-DOF', 'VR Integrated'],
    },
    {
        id: 'flight-training',
        title: 'Pilot LMS',
        category: 'Education',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000&auto=format&fit=crop', // Cockpit/Tech
        href: '/projects/flight-training',
        tags: ['LMS', 'Data Analytics', 'Assessment'],
    },
    {
        id: 'data-integration',
        title: 'Data Pipeline',
        category: 'System Integration',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop', // Abstract Tech
        href: '/projects/data-integration',
        tags: ['API Gateway', 'Real-time', 'Microservices'],
    },
    {
        id: 'ai-agent',
        title: 'Corp AI Agent',
        category: 'Artificial Intelligence',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop', // AI/Brain
        href: '/projects/ai-agent',
        tags: ['RAG', 'LLM', 'Enterprise Search'],
    },
    {
        id: 'smart-space',
        title: 'IoT Dashboard',
        category: 'Smart Space',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop', // IoT/Smart City
        href: '/projects/smart-space',
        tags: ['Digital Twin', 'WebGL', 'Sensors'],
    },
]

function ProjectItem({
    project,
    index,
    setHoveredProject,
}: {
    project: Project
    index: number
    setHoveredProject: (index: number | null) => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative border-t border-black/10 dark:border-white/10 last:border-b transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/5"
        >
            <Link href={project.href} className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 py-12 px-4 md:px-0 relative z-10">

                {/* Index & Year */}
                <div className="flex w-full md:w-auto md:flex-col justify-between md:justify-start gap-2 font-mono text-xs opacity-50 uppercase tracking-widest shrink-0">
                    <span>{`0${index + 1}`}</span>
                    <span>{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="flex-1 text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter transition-transform duration-300 group-hover:translate-x-4 mix-blend-difference text-black dark:text-white">
                    {project.title}
                </h3>

                {/* Category & Tags - Desktop */}
                <div className="hidden md:flex flex-col items-end gap-2 text-right shrink-0">
                    <span className="text-sm font-bold uppercase tracking-widest text-cta">{project.category}</span>
                    <div className="flex gap-2 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-60 group-hover:translate-y-0">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono border border-current px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Arrow Mobile */}
                <div className="md:hidden absolute right-4 top-12 opacity-50">
                    <ArrowNarrowRightIcon className="w-6 h-6 -rotate-45" />
                </div>

            </Link>
        </motion.div>
    )
}

function FloatingImage({ activeIndex, mouseX, mouseY }: { activeIndex: number | null, mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // Using a specific width/height for the floating image
    const width = 400
    const height = 300

    // transform so the image is centered on the mouse
    const xPos = useTransform(x, latest => latest - width / 2)
    const yPos = useTransform(y, latest => latest - height / 2)

    return (
        <motion.div
            style={{ x: xPos, y: yPos, width, height }}
            className="pointer-events-none fixed top-0 left-0 z-50 overflow-hidden rounded-xl hidden lg:block mix-blend-difference" // Interaction experiment: blend mode on image? or just overlay
        >
            <div className="relative w-full h-full bg-black">
                {projects.map((project, index) => {
                    const isActive = index === activeIndex
                    return (
                        <motion.div
                            key={project.id}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{
                                opacity: isActive ? 1 : 0,
                                scale: isActive ? 1 : 1.2
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export function ProjectListSwiss({ className }: { className?: string }) {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    // Mouse position tracking for the floating image
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
    }

    return (
        <section
            className={clsx('relative py-32 bg-pencil-50 dark:bg-pencil-950 min-h-screen', className)}
            onMouseMove={handleMouseMove}
        >
            <Container className="relative z-10">

                {/* Header */}
                <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-4 border-black dark:border-white pb-8">
                    <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-difference text-pencil-950 dark:text-white">
                        Work
                    </h1>
                    <div className="mb-4 flex max-w-sm flex-col gap-4 text-base md:text-lg font-medium opacity-70">
                        <p>
                            Selected projects demonstrating our expertise in XR, AI, and System Integration.
                        </p>
                        <div className="h-2 w-full bg-black dark:bg-white animate-pulse" />
                    </div>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            setHoveredProject={setHoveredProject}
                        />
                    ))}
                </div>

                {/* Floating Reveal Image */}
                <FloatingImage activeIndex={hoveredProject} mouseX={mouseX} mouseY={mouseY} />

            </Container>
        </section>
    )
}
