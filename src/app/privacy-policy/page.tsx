'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { Container } from '@/components/elements/container'

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-pencil-50 min-h-screen pt-32 pb-24 font-sans relative dark:bg-black">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-500 via-accent-500 to-neon-500" />

      <Container className="max-w-3xl">
        <div className="mb-16 border-b border-black/10 pb-8 dark:border-white/10">
          <h1 className="text-4xl font-bold text-pencil-900 mb-4 text-glow dark:text-white">
            {t('pages.privacy.title')}
          </h1>
          <div className="flex items-center gap-4 text-sm font-mono text-pencil-500">
            <span>{t('pages.privacy.lastUpdated')}: 2024-02-07</span>
            <span>{t('pages.privacy.status')}: {t('pages.privacy.statusActive')}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-pencil-900 prose-a:text-neon-600 prose-strong:text-pencil-900 dark:prose-invert dark:prose-headings:text-white dark:prose-a:text-neon-400 dark:prose-strong:text-pencil-100">
          <p className="lead text-xl text-pencil-600 dark:text-pencil-300">
            {t('pages.privacy.lead')}
          </p>

          <h3 className="text-accent-600 font-mono text-sm uppercase tracking-wider mt-12 mb-4 border-l-2 border-accent-600 pl-4 dark:text-accent-400 dark:border-accent-400">
            01. {t('pages.privacy.sections.dataCollection.title')}
          </h3>
          <p className="text-pencil-800 dark:text-pencil-200">
            {t('pages.privacy.sections.dataCollection.content')}
          </p>

          <h3 className="text-accent-600 font-mono text-sm uppercase tracking-wider mt-12 mb-4 border-l-2 border-accent-600 pl-4 dark:text-accent-400 dark:border-accent-400">
            02. {t('pages.privacy.sections.dataUsage.title')}
          </h3>
          <p className="text-pencil-800 dark:text-pencil-200">
            {t('pages.privacy.sections.dataUsage.content')}
          </p>

          <h3 className="text-accent-600 font-mono text-sm uppercase tracking-wider mt-12 mb-4 border-l-2 border-accent-600 pl-4 dark:text-accent-400 dark:border-accent-400">
            03. {t('pages.privacy.sections.security.title')}
          </h3>
          <p className="text-pencil-800 dark:text-pencil-200">
            {t('pages.privacy.sections.security.content')}
          </p>

          <hr className="border-black/10 my-12 dark:border-white/10" />

          <p className="text-pencil-500 text-sm font-mono">
            {t('pages.privacy.contact')} <a href="mailto:contact@pencil.com.tw">contact@pencil.com.tw</a>.
          </p>
        </div>
      </Container>
    </div>
  )
}
