import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['zh-TW', 'en', 'zh-CN', 'ja', 'ko', 'fr', 'th'],
  defaultLocale: 'zh-TW',
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
