'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, type LucideIcon } from 'lucide-react'

interface ContactInteractiveItemProps {
  icon: LucideIcon
  label: string
  value: string
  href: string
  copyValue?: string
  forceDark?: boolean
}

export function ContactInteractiveItem({
  icon: Icon,
  label,
  value,
  href,
  copyValue,
  forceDark,
}: ContactInteractiveItemProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue || value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className={`group flex items-center justify-between gap-4 rounded-xl border border-transparent p-2 transition-colors duration-300 ${forceDark ? 'hover:bg-white/10' : 'hover:bg-pencil-50 dark:hover:bg-pencil-800/50'}`}>
      <a
        href={href}
        className="flex min-w-0 flex-1 items-center gap-3 transition-opacity hover:opacity-80"
      >
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${forceDark ? 'bg-white/10 text-white' : 'bg-pencil-100 text-pencil-600 dark:bg-pencil-800 dark:text-pencil-300'}`}>
          <Icon className="size-5" />
        </div>
        <div className="flex flex-col truncate">
          <span className={`text-xs font-medium ${forceDark ? 'text-gray-400' : 'text-pencil-500 dark:text-pencil-400'}`}>
            {label}
          </span>
          <span className={`truncate text-sm font-semibold transition-colors duration-300 ${forceDark ? 'text-white' : 'text-pencil-900 dark:text-pencil-100'}`}>
            {value}
          </span>
        </div>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors focus:outline-none ${forceDark ? 'text-gray-400 hover:bg-white/10 hover:text-white' : 'text-pencil-500 hover:bg-pencil-200 hover:text-pencil-900 dark:text-pencil-400 dark:hover:bg-pencil-700 dark:hover:text-pencil-100'}`}
        title="複製到剪貼簿"
        aria-label="複製到剪貼簿"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              className="absolute text-emerald-500"
            >
              <Check className="size-5" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              className="absolute"
            >
              <Copy className="size-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
