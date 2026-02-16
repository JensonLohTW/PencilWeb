'use client'

import { ModernFooter } from '@/features/marketing/sections/footer/modern-footer'
import { footerNavigation } from '@/shared/config/navigation'

export function Footer() {
    return <ModernFooter navigation={footerNavigation} />
}
