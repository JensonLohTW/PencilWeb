import Link from 'next/link'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

export function NavbarLink({
  children,
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
        'text-pencil-600 hover:text-pencil-900 hover:bg-pencil-100/50',
        'dark:text-pencil-400 dark:hover:text-white dark:hover:bg-white/5',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export function NavbarLogo({ className, href, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link href={href} {...props} className={clsx('inline-flex items-center gap-2.5 group', className)}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-pencil-900 shadow-lg shadow-pencil-900/20 group-hover:scale-105 transition-transform duration-300 dark:bg-white dark:shadow-white/10">
        <span className="text-lg font-bold text-white dark:text-pencil-950">P</span>
      </div>
      <span className="text-lg font-bold tracking-tight text-pencil-900 dark:text-white">Pencil</span>
    </Link>
  )
}

export function NavbarWithLinksActionsAndCenteredLogo({
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
    <header className={clsx('fixed top-6 left-6 right-6 z-50 flex justify-center pointer-events-none', className)} {...props}>
      <nav className="glass-nav pointer-events-auto w-full max-w-7xl rounded-full px-5 py-3 transition-all duration-300">
        <div className="relative flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex items-center shrink-0">
            {logo}
          </div>

          {/* Desktop Links (Absolute Center) */}
          {/* Note: Using absolute positioning to ensure links are perfectly centered regardless of Logo/Action widths */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links}
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:flex items-center gap-2">
              {actions}
            </div>

            {/* Mobile Menu Button */}
            <button
              command="show-modal"
              commandfor="mobile-menu"
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center justify-center rounded-full p-2.5 text-pencil-600 hover:bg-pencil-100 hover:text-pencil-900 transition-colors dark:text-pencil-400 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dialog */}
        <ElDialog className="lg:hidden">
          <dialog id="mobile-menu" className="backdrop:bg-pencil-950/20 backdrop:backdrop-blur-sm bg-transparent w-full h-full m-0 max-w-none max-h-none dark:backdrop:bg-black/60">
            <ElDialogPanel className="fixed inset-x-4 top-24 bottom-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-pencil-200 shadow-2xl p-6 flex flex-col gap-8 outline-none dark:bg-pencil-950/95 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-pencil-900 dark:text-white">Menu</div>
                <button
                  command="close"
                  commandfor="mobile-menu"
                  aria-label="Close menu"
                  className="rounded-full p-2 bg-pencil-100 text-pencil-600 hover:text-pencil-900 hover:bg-pencil-200 transition-colors dark:bg-white/10 dark:text-pencil-300 dark:hover:text-white dark:hover:bg-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto">
                {/* Mobile Links */}
                <div className="flex flex-col gap-2 [&>a]:text-lg [&>a]:font-semibold [&>a]:px-4 [&>a]:py-3 [&>a]:rounded-xl [&>a]:text-pencil-600 [&>a:hover]:bg-pencil-50 [&>a:hover]:text-pencil-900 dark:[&>a]:text-pencil-300 dark:[&>a:hover]:bg-white/5 dark:[&>a:hover]:text-white transition-colors">
                  {links}
                </div>

                <div className="h-px bg-pencil-200 dark:bg-white/10 w-full" />

                <div className="flex flex-col gap-3">
                  {actions}
                </div>
              </div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>
      </nav>
    </header>
  )
}
