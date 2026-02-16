import { Bars3Icon } from '@heroicons/react/24/outline'
import { ReactNode, useState } from 'react'
import { DesktopNav } from './desktop-nav'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'

interface HeaderProps {
    utilities?: ReactNode
    actions?: ReactNode
}

export function Header({ utilities, actions }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray-900">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Logo className="-m-1.5 p-1.5" />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <DesktopNav />

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
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
        </header>
    )
}
