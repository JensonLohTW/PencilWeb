'use client'

import { type ReactNode, type MouseEvent as ReactMouseEvent, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx/lite'

/**
 * Mobile Menu Component Props
 * 行動版選單組件屬性
 */
interface SwissMobileMenuProps {
    /** 控制選單是否開啟 */
    isOpen: boolean
    /** 關閉選單的回調函數 */
    onClose: () => void
    /** 導航連結 */
    links: ReactNode
    /** 工具列 (語言/主題切換) */
    utilities: ReactNode
    /** 操作按鈕 (聯絡/設定) */
    actions: ReactNode
}

/**
 * Mobile Menu Component
 * 行動版選單組件 - Extract from SwissNavbar
 */
export function SwissMobileMenu({
    isOpen,
    onClose,
    links,
    utilities,
    actions,
}: SwissMobileMenuProps) {
    // 處理點擊連結後關閉選單
    const closeOnAnchorClick = (event: ReactMouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement
        if (target.closest('a')) {
            onClose()
        }
    }

    // 監聽 ESC 鍵關閉選單 & 鎖定 Body 捲動
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEsc)
            // 鎖定 Body 捲動
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[60] bg-pencil-950/20 backdrop-blur-sm lg:hidden"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: '0%' }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl outline-none dark:bg-pencil-950"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex h-20 items-center justify-between border-b-2 border-pencil-950 px-6 dark:border-white">
                            <span className="swiss-mono text-pencil-500 dark:text-pencil-400">NAVIGATION</span>
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={onClose}
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

                        {/* Links */}
                        <div
                            className="flex-1 overflow-y-auto px-6 py-8"
                            style={{ maxHeight: 'calc(100vh - 180px)' }}
                            onClickCapture={closeOnAnchorClick}
                        >
                            <div className="flex flex-col gap-0 [&>a]:py-5 [&>a]:border-b [&>a]:border-pencil-200 [&>a]:flex [&>a]:items-baseline [&>a]:gap-4 dark:[&>a]:border-white/10">
                                {links}
                            </div>
                        </div>

                        {/* Footer / Utilities */}
                        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-pencil-950 bg-white px-6 py-6 dark:border-white dark:bg-pencil-950">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">{utilities}</div>
                                    <span className="swiss-mono text-xs text-pencil-400">SETTINGS</span>
                                </div>
                                <div className="flex flex-col gap-3" onClickCapture={closeOnAnchorClick}>
                                    {actions}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Pattern */}
                        <div className="pointer-events-none absolute bottom-6 right-6 opacity-10">
                            <div className="grid grid-cols-3 gap-1">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={clsx(
                                            'h-1.5 w-1.5',
                                            i % 3 === 0 ? 'bg-cta' : 'bg-pencil-950 dark:bg-white',
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
