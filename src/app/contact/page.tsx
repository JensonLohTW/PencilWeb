'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { ContactForm } from '@/components/sections/contact-form'
import { SwissFAQ } from '@/components/sections/swiss/swiss-faq'

export default function ContactPage() {
    const { t } = useLanguage()

    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                eyebrow={t('pages.contact.hero.eyebrow')}
                headline={t('pages.contact.hero.headline')}
                subheadline={t('pages.contact.hero.subheadline')}
                centered
            />

            {/* Contact Form */}
            <ContactForm />

            {/* FAQs */}
            <SwissFAQ />
        </>
    )
}
