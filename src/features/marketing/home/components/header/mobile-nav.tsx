import { Link } from '@/i18n/routing'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { headerNavigation } from './header-data'
import { Logo } from './logo'

interface MobileNavProps {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
    utilities?: ReactNode
    actions?: ReactNode
}

export function MobileNav({ mobileMenuOpen, setMobileMenuOpen, utilities, actions }: MobileNavProps) {
    const t = useTranslations()

    return (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm
                bg-black/70 backdrop-blur-2xl backdrop-saturate-150
                sm:border-l sm:border-white/10
                sm:shadow-[-24px_0_48px_-12px_rgba(0,0,0,0.5)]"
            >
                <div className="flex items-center justify-between">
                    <Logo className="-m-1.5 p-1.5" />
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-white/10">
                        <div className="space-y-2 py-6">
                            {headerNavigation.map((item) =>
                                item.type === 'dropdown' ? (
                                    <Disclosure key={item.nameKey} as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-white/5">
                                            {t(item.nameKey)}
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="size-5 flex-none group-data-[open]:rotate-180"
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {item.children?.map((child) => (
                                                <DisclosureButton
                                                    key={child.nameKey}
                                                    as={Link}
                                                    href={child.href || '#'}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-white/5"
                                                >
                                                    {t(child.nameKey)}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>
                                ) : (
                                    <Link
                                        key={item.nameKey}
                                        href={item.href || '#'}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >
                                        {t(item.nameKey)}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="py-6 space-y-4">
                            <div className="flex gap-4 px-3 text-white">{utilities}</div>
                            {actions ? (
                                <div className="px-3">{actions}</div>
                            ) : (
                                <Link
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                >
                                    Log in
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    )
}
