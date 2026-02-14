'use client'

import Link from 'next/link'
import { clsx } from 'clsx/lite'
import {
  useState,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface NavbarLinkProps {
  children: ReactNode
  href: string
  index?: string
  className?: string
  onNavigate?: () => void
}

export function SwissNavbarLink({
  children,
  href,
  index,
  className,
  onNavigate,
  onClick,
  ...props
}: NavbarLinkProps & Omit<ComponentProps<'a'>, 'href'>) {
  const router = useRouter()

  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0

    if (isModifiedClick || props.target === '_blank') return

    if (href.startsWith('/')) {
      event.preventDefault()
      router.push(href)
      onNavigate?.()
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        'group relative flex items-baseline gap-3 py-2 transition-colors',
        'text-pencil-600 hover:text-pencil-950',
        'dark:text-pencil-400 dark:hover:text-white',
        className,
      )}
      {...props}
    >
      {index && (
        <span className="swiss-mono text-[10px] text-pencil-400 transition-colors group-hover:text-cta dark:text-pencil-500">
          {index}
        </span>
      )}
      <span className="relative text-sm font-medium tracking-tight">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-pencil-950 transition-all duration-300 group-hover:w-full dark:bg-white" />
      </span>
    </Link>
  )
}

export function SwissNavbarLogo({
  href,
  onNavigate,
  onClick,
  ...props
}: { href: string; onNavigate?: () => void } & Omit<ComponentProps<'a'>, 'href'>) {
  const router = useRouter()

  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0

    if (isModifiedClick || props.target === '_blank') return

    if (href.startsWith('/')) {
      event.preventDefault()
      router.push(href)
      onNavigate?.()
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props} className="group flex items-center gap-4">
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

export function SwissNavbar({
  links,
  logo,
  utilities,
  actions,
  className,
  ...props
}: {
  links: ReactNode
  logo: ReactNode
  utilities: ReactNode
  actions: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof motion.header>, 'children'>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeOnAnchorClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.closest('a')) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50',
        'border-b-2 border-pencil-950 bg-white/98 backdrop-blur-sm',
        'dark:border-white dark:bg-pencil-950/98',
        className,
      )}
      {...props}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex shrink-0 items-center">{logo}</div>

        <div className="hidden items-center gap-8 lg:flex">{links}</div>

        <div className="flex shrink-0 items-center gap-6">
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-2">{utilities}</div>
            <div className="h-6 w-px bg-pencil-200 dark:bg-white/20" />
            <div className="flex items-center gap-4">{actions}</div>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle menu"
            className="group relative flex h-10 w-10 items-center justify-center border-2 border-pencil-950 transition-colors hover:bg-pencil-950 lg:hidden dark:border-white dark:hover:bg-white"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-pencil-950 transition-colors group-hover:bg-white dark:bg-white dark:group-hover:bg-pencil-950" />
              <span className="block h-0.5 w-5 bg-pencil-950 transition-colors group-hover:bg-white dark:bg-white dark:group-hover:bg-pencil-950" />
            </div>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-[60] bg-pencil-950/90 lg:hidden">
          <div className="fixed inset-0 flex flex-col bg-white outline-none dark:bg-pencil-950">
            <div className="flex h-20 items-center justify-between border-b-2 border-pencil-950 px-6 dark:border-white">
              <span className="swiss-mono text-pencil-500 dark:text-pencil-400">NAVIGATION</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex h-10 w-10 items-center justify-center border-2 border-pencil-950 transition-colors hover:bg-pencil-950 dark:border-white dark:hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="size-5 text-pencil-950 group-hover:text-white dark:text-white dark:group-hover:text-pencil-950"
                >
                  <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-auto px-6 py-12" onClickCapture={closeOnAnchorClick}>
              <div className="flex flex-col gap-0 [&>a]:py-6 [&>a]:border-b [&>a]:border-pencil-200 [&>a]:flex [&>a]:items-baseline [&>a]:gap-4 dark:[&>a]:border-white/10">
                {links}
              </div>
            </div>

            <div className="border-t-2 border-pencil-950 px-6 py-8 dark:border-white">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">{utilities}</div>
                  <span className="swiss-mono text-xs text-pencil-400">SETTINGS</span>
                </div>
                <div className="flex flex-col gap-3" onClickCapture={closeOnAnchorClick}>
                  {actions}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-6 right-6 opacity-20">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={clsx('h-2 w-2', i % 3 === 0 ? 'bg-cta' : 'bg-pencil-950 dark:bg-white')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </motion.header>
  )
}
