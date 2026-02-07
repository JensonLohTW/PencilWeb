import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

export function LogoGrid({
    children,
    className,
    ...props
}: {
    children?: ReactNode
} & ComponentProps<'div'>) {
    return (
        <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)} {...props}>
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {children}
            </div>
        </div>
    )
}
