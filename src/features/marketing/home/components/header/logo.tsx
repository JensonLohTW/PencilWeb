'use client'

import { Link } from '@/i18n/routing'

export function Logo({
    className,
    ...props
}: { className?: string } & Omit<React.ComponentPropsWithoutRef<'a'>, 'href'>) {
    return (
        <Link href="/" className="group flex items-center gap-4" {...props}>
            <div className="relative flex h-10 w-10 items-center justify-center border-2 border-cta transition-all duration-300 group-hover:bg-cta dark:border-white dark:group-hover:bg-white">
                <span className="text-base font-black tracking-tighter text-cta transition-colors group-hover:text-white dark:text-white dark:group-hover:text-cta">
                    P
                </span>
                <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-cta" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-cta dark:text-white">Pencil</span>
                <span className="swiss-mono text-[9px] text-cta dark:text-pencil-500">空間動態科技</span>
            </div>
        </Link>
    )
}
