'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { getPath } from '@/shared/lib/paths'

const slides = [
    {
        id: 'taipei',
        title: '台北市',
        src: getPath('/images/solutions/smart_space_iot_dashboard.png'),
        alt: 'Smart Space IoT Dashboard in Taipei',
    },
    {
        id: 'new-taipei',
        title: '新北市',
        src: getPath('/images/solutions/ar_project_management_dashboard.png'),
        alt: 'AR Project Management Dashboard in New Taipei',
    },
    {
        id: 'kaohsiung',
        title: '高雄市',
        src: getPath('/images/solutions/vr_training_management_dashboard.png'),
        alt: 'VR Training Management Dashboard in Kaohsiung',
    },
]

export function SolutionsImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextSlide = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }, [])

    const goToSlide = useCallback((index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }, [currentIndex])

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(timer)
    }, [nextSlide, currentIndex])

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    }

    return (
        <div className="relative w-full max-w-[76rem] mx-auto overflow-hidden rounded-xl bg-pencil-900/5 p-2 ring-1 ring-pencil-900/10 ring-inset dark:bg-white/5 dark:ring-white/10 lg:rounded-2xl lg:p-4 group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-pencil-900/10 dark:bg-pencil-900 dark:ring-white/10">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].alt}
                            fill
                            className="object-cover object-top"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                        {/* Overlay with Title */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 sm:p-8">
                            <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                {slides[currentIndex].title}
                            </h3>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                        onClick={prevSlide}
                        className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/40"
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="size-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/40"
                        aria-label="Next image"
                    >
                        <ChevronRightIcon className="size-6" />
                    </button>
                </div>
            </div>

            {/* Dots Pagination */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 lg:bottom-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-8 bg-cta'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
