'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { ButtonLink } from '@/shared/ui/elements/button'

export default function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pencil-50 text-center font-sans dark:bg-black">
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay brightness-100 contrast-150"></div>

      <div className="relative z-10 p-8">
        <h1 className="glitch-text-effect mb-4 text-9xl font-black tracking-tighter text-pencil-900 opacity-50 dark:text-white">
          404
        </h1>

        <div className="mb-8 inline-block rounded-lg border border-red-500/50 bg-red-500/10 px-6 py-2">
          <span className="animate-pulse font-mono text-sm tracking-widest text-red-500">
            {t('pages.notFound.alert')}
          </span>
        </div>

        <p className="mx-auto mb-10 max-w-md text-lg text-pencil-600 dark:text-pencil-400">
          {t('pages.notFound.message')}
        </p>

        <ButtonLink
          href="/"
          size="lg"
          className="border-0 bg-pencil-900 text-white shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:bg-pencil-800 dark:bg-white dark:text-black dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:bg-pencil-200"
        >
          {t('pages.notFound.button')}
        </ButtonLink>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 font-mono text-xs text-pencil-600">
        {t('pages.notFound.errorCode')}
      </div>
      <div className="absolute top-10 right-10 font-mono text-xs text-pencil-600">{t('pages.notFound.status')}</div>
    </div>
  )
}
