'use client'

import Link from 'next/link'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

interface NavbarLinkProps {
    children: ReactNode
    href: string
    index?: string
    className?: string
}

export function SwissNavbarLink({
    children,
    href,
    index,
    className,
    ...props
}: NavbarLinkProps & Omit<ComponentProps<'a'>, 'href'>) {
    return (
        <Link
            href={href}
            className={clsx(
                'group relative flex items-baseline gap-3 py-2 transition-colors',
                'text-pencil-600 hover:text-pencil-950',
                className
            )}
            {...props}
        >
            {index && (
                <span className="swiss-mono text-[10px] text-pencil-400 transition-colors group-hover:text-cta">
                    {index}
                </span>
            )}
            <span className="relative text-sm font-medium tracking-tight">
                {children}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-pencil-950 transition-all duration-300 group-hover:w-full" />
            </span>
        </Link>
    )
}

export function SwissNavbarLogo({ href, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
    return (
        <Link href={href} {...props} className="group flex items-center gap-4">
            {/* Bold geometric logo mark */}
            <div className="relative flex h-10 w-10 items-center justify-center border-2 border-pencil-950 transition-all duration-300 group-hover:bg-pencil-950">
                <span className="text-base font-black tracking-tighter text-pencil-950 transition-colors group-hover:text-white">
                    P
                </span>
                {/* Corner accent */}
                <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-cta" />
            </div>
            {/* Brand name with bold typography */}
            <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-pencil-950">
                    Pencil
                </span>
                <span className="swiss-mono text-[9px] text-pencil-400">
                    空間動態科技
                </span>
            </div>
        </Link>
    )
}

export function SwissNavbar({
    links,
    logo,
    actions,
    className,
    ...props
}: {
    links: ReactNode
    logo: ReactNode
    actions: ReactNode
} & ComponentProps<'header'>) {
    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50',
                'border-b-2 border-pencil-950 bg-white/98 backdrop-blur-sm',
                className
            )}
            {...props}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
                {/* Logo Block - Asymmetric emphasis */}
                <div className="flex items-center shrink-0">
                    {logo}
                </div>

                {/* Desktop Navigation - Right aligned with numbered links */}
                <div className="hidden items-center gap-8 lg:flex">
                    {links}
                </div>

                {/* Actions Block */}
                <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden items-center gap-4 sm:flex">
                        {actions}
                    </div>

                    {/* Mobile Menu Button - Bold geometric */}
                    <button
                        command="show-modal"
                        commandfor="swiss-mobile-menu"
                        aria-label="Toggle menu"
                        className="group relative flex h-10 w-10 items-center justify-center border-2 border-pencil-950 transition-colors hover:bg-pencil-950 lg:hidden"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className="block h-0.5 w-5 bg-pencil-950 transition-colors group-hover:bg-white" />
                            <span className="block h-0.5 w-5 bg-pencil-950 transition-colors group-hover:bg-white" />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Swiss Style Mobile Menu - Full screen overlay */}
            <ElDialog className="lg:hidden">
                <dialog
                    id="swiss-mobile-menu"
                    className="backdrop:bg-pencil-950/90 bg-transparent w-full h-full m-0 max-w-none max-h-none"
                >
                    <ElDialogPanel className="fixed inset-0 bg-white flex flex-col outline-none">
                        {/* Header */}
                        <div className="flex h-20 items-center justify-between border-b-2 border-pencil-950 px-6">
                            <span className="swiss-mono text-pencil-500">NAVIGATION</span>
                            <button
                                command="close"
                                commandfor="swiss-mobile-menu"
                                aria-label="Close menu"
                                className="group flex h-10 w-10 items-center justify-center border-2 border-pencil-950 transition-colors hover:bg-pencil-950"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5 text-pencil-950 group-hover:text-white">
                                    <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links - Large numbered list */}
                        <div className="flex-1 overflow-auto px-6 py-12">
                            <div className="flex flex-col gap-0 [&>a]:py-6 [&>a]:border-b [&>a]:border-pencil-200 [&>a]:flex [&>a]:items-baseline [&>a]:gap-4">
                                {links}
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="border-t-2 border-pencil-950 px-6 py-6">
                            <div className="flex flex-col gap-4">
                                {actions}
                            </div>
                        </div>

                        {/* Swiss Grid Accent */}
                        <div className="absolute bottom-6 right-6">
                            <div className="grid grid-cols-3 gap-1">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={clsx(
                                            'h-2 w-2',
                                            i % 3 === 0 ? 'bg-cta' : 'bg-pencil-200'
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                    </ElDialogPanel>
                </dialog>
            </ElDialog>
        </header>
    )
}
