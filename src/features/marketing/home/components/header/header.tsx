'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { ReactNode, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { clsx } from 'clsx/lite'
import { DesktopNav } from './desktop-nav'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'

interface HeaderProps {
    utilities?: ReactNode
    actions?: ReactNode
}

export function Header({ utilities, actions }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <motion.header
            className={clsx(
                "fixed z-50 transition-all duration-500",
                isScrolled
                    ? "top-4 inset-x-0 mx-auto w-[95%] max-w-7xl rounded-full glass-displacement border border-white/20 dark:border-white/10"
                    : "top-0 inset-x-0 w-full bg-transparent border-transparent"
            )}
        >
            <nav aria-label="Global" className={clsx(
                "mx-auto flex w-full items-center justify-between transition-all duration-500",
                isScrolled ? "px-6 py-3 lg:px-8" : "p-6 lg:px-12 max-w-[90rem]"
            )}>
                <div className="flex lg:flex-1 lg:justify-start">
                    <Logo compact={isScrolled} className="-m-1.5 p-1.5" />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 dark:text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                    <DesktopNav compact={isScrolled} />
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center whitespace-nowrap">
                    {utilities}
                    {actions || (
                        <a href="#" className="text-sm/6 font-semibold text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    )}
                </div>
            </nav>

            <MobileNav
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                utilities={utilities}
                actions={actions}
            />

            {/* Glass Displacement Filter SVG
                對齊 demo 架構：SVG 需有實際尺寸（100% 覆蓋容器）並絕對定位，
                backdrop-filter: url(#id) 才能正確對應 filter primitive 空間。
                pointer-events: none 防止遮擋點擊。 */}
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="glass-displacement-filter" colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
                        <feImage preserveAspectRatio="none" x="0" y="0" width="100%" height="100%" result="map" href="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201200%2060%22%20preserveAspectRatio%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22grad-r%22%20x1%3D%22100%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%220%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23000%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22red%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22grad-b%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23000%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22blue%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221200%22%20height%3D%2260%22%20fill%3D%22black%22%2F%3E%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221200%22%20height%3D%2260%22%20rx%3D%2230%22%20fill%3D%22url(%23grad-r)%22%2F%3E%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221200%22%20height%3D%2260%22%20rx%3D%2230%22%20fill%3D%22url(%23grad-b)%22%20style%3D%22mix-blend-mode%3Adifference%22%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%221196%22%20height%3D%2256%22%20rx%3D%2228%22%20fill%3D%22hsl(0%200%25%2050%25%2F0.93)%22%20style%3D%22filter%3Ablur(8px)%22%2F%3E%0A%3C%2Fsvg%3E" />
                        <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" result="dispRed" scale="-120" />
                        <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />

                        <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" result="dispGreen" scale="-130" />
                        <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />

                        <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" result="dispBlue" scale="-140" />
                        <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />

                        <feBlend in="red" in2="green" mode="screen" result="rg" />
                        <feBlend in="rg" in2="blue" mode="screen" result="output" />
                        <feGaussianBlur in="output" stdDeviation="0.5" />
                    </filter>
                </defs>
            </svg>
        </motion.header>
    )
}
