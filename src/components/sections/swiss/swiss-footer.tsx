"use client"

import Link from 'next/link'
import { useState, type ComponentProps, type ReactNode } from 'react'
import { HackerText } from '@/components/ui/hacker-text'

interface FooterCategoryProps {
    title: ReactNode
    index?: string
    children: ReactNode
}

export function SwissFooterCategory({
    title,
    index,
    children,
    ...props
}: FooterCategoryProps & ComponentProps<'div'>) {
    return (
        <div {...props}>
            <h3 className="mb-6 flex items-baseline gap-3 border-b-2 border-pencil-950 pb-4 dark:border-white">
                {index && (
                    <span className="swiss-mono text-[10px] text-cta">{index}</span>
                )}
                <span className="text-sm font-bold uppercase tracking-wider text-pencil-950 dark:text-white">
                    {title}
                </span>
            </h3>
            <ul role="list" className="flex flex-col gap-3">
                {children}
            </ul>
        </div>
    )
}

export function SwissFooterLink({
    href,
    ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <li>
            <Link
                href={href}
                className="group flex items-center gap-2 text-sm text-pencil-500 transition-colors hover:text-pencil-950 dark:text-pencil-400 dark:hover:text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                <span className="h-px w-0 bg-cta transition-all duration-300 group-hover:w-4" />
                <span>
                    {typeof props.children === 'string' ? (
                        <HackerText
                            text={props.children}
                            trigger={isHovered}
                            speed={50}
                            className="swiss-mono"
                        />
                    ) : (
                        props.children
                    )}
                </span>
            </Link>
        </li>
    )
}

export function SwissSocialLink({
    href,
    name,
    children,
    ...props
}: { href: string; name: string } & Omit<ComponentProps<'a'>, 'href'>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="group flex h-12 w-12 items-center justify-center border-2 border-pencil-300 text-pencil-500 transition-all hover:border-pencil-950 hover:bg-pencil-950 hover:text-white dark:border-pencil-600 dark:hover:border-white dark:hover:bg-white dark:hover:text-pencil-950"
            {...props}
        >
            {children}
        </a>
    )
}

export function SwissFooter({
    cta,
    links,
    socialLinks,
    fineprint,
    ...props
}: {
    cta: ReactNode
    links: ReactNode
    socialLinks: ReactNode
    fineprint: ReactNode
} & ComponentProps<'footer'>) {
    return (
        <footer
            className="border-t-2 border-pencil-950 bg-pencil-50 text-pencil-950 dark:border-white dark:bg-pencil-950 dark:text-white"
            {...props}
        >
            {/* CTA Section - Bold headline */}
            <div className="border-b-2 border-pencil-950 dark:border-white">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-3 lg:items-end">
                        {/* Large CTA */}
                        <div className="lg:col-span-2">
                            {cta}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 lg:justify-end">
                            {socialLinks}
                        </div>
                    </div>
                </div>
            </div>

            {/* Links Grid */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16">
                <nav className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {links}
                </nav>
            </div>

            {/* Bottom Bar - Clean Swiss style */}
            <div className="border-t-2 border-pencil-950 dark:border-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div className="flex flex-col items-start justify-between gap-6 py-8 lg:flex-row lg:items-center">
                        {/* Fineprint */}
                        <div className="flex flex-col gap-2 text-sm text-pencil-500 lg:flex-row lg:gap-8 dark:text-pencil-400">
                            {fineprint}
                        </div>

                        {/* Brand Mark */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-8 w-8 items-center justify-center border-2 border-pencil-950 dark:border-white">
                                <span className="text-xs font-black text-pencil-950 dark:text-white">P</span>
                            </div>
                            <span className="swiss-mono text-pencil-400 dark:text-pencil-500">
                                SYSTEM.ONLINE
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Grid Pattern */}
            <div className="h-2 w-full bg-pencil-950 dark:bg-white">
                <div className="mx-auto flex h-full max-w-7xl">
                    <div className="w-1/4 bg-cta" />
                    <div className="w-1/4 bg-pencil-950 dark:bg-white" />
                    <div className="w-1/4 bg-cta" />
                    <div className="w-1/4 bg-pencil-950 dark:bg-white" />
                </div>
            </div>
        </footer>
    )
}
