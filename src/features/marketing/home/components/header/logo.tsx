'use client'

import { Link } from '@/i18n/routing'
import { clsx } from 'clsx/lite'
import { useTranslations } from 'next-intl'

export function Logo({
    className,
    compact = false,
    ...props
}: { className?: string; compact?: boolean } & Omit<React.ComponentPropsWithoutRef<'a'>, 'href'>) {
    const t = useTranslations('brand')

    return (
        <Link href="/" className={clsx('group flex min-w-0 items-center gap-4', className)} {...props}>
            <div
                className={clsx(
                    'relative flex items-center justify-center border-2 border-cta transition-all duration-300 group-hover:bg-cta dark:border-white dark:group-hover:bg-white',
                    compact ? 'h-9 w-9' : 'h-10 w-10'
                )}
            >
                <span
                    className={clsx(
                        'font-black tracking-tighter text-cta transition-colors group-hover:text-white dark:text-white dark:group-hover:text-cta',
                        compact ? 'text-sm' : 'text-base'
                    )}
                >
                    P
                </span>
                <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-cta" />
            </div>
            <div className="flex min-w-0 flex-col">
                <span className={clsx('whitespace-nowrap font-bold tracking-tight text-cta dark:text-white', compact ? 'text-lg' : 'text-xl')}>
                    Pencil
                </span>
                {!compact && <span className="swiss-mono whitespace-nowrap text-[9px] text-cta dark:text-pencil-500">{t('tagline')}</span>}
            </div>
        </Link>
    )
}
