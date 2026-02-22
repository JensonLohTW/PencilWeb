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
                    ? "top-4 inset-x-0 mx-auto w-[95%] max-w-7xl rounded-full bg-white/20 dark:bg-[#0A0A0A]/20 backdrop-blur-3xl backdrop-saturate-150 border border-white/40 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] shadow-2xl"
                    : "top-0 inset-x-0 w-full bg-transparent border-transparent"
            )}
        >
            <nav aria-label="Global" className={clsx(
                "mx-auto flex w-full items-center justify-between transition-all duration-500",
                isScrolled ? "px-6 py-3 lg:px-8" : "p-6 lg:px-12 max-w-[90rem]"
            )}>
                <div className="flex lg:flex-1 lg:justify-start">
                    <Logo className="-m-1.5 p-1.5" />
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
                    <DesktopNav />
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
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
        </motion.header>
    )
}
