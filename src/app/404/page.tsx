import { ButtonLink } from '@/components/elements/button'

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pencil-50 text-center font-sans dark:bg-black">
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="relative z-10 p-8">
        <h1 className="glitch-text-effect text-9xl font-black text-pencil-900 opacity-50 mb-4 tracking-tighter dark:text-white">
          404
        </h1>

        <div className="bg-red-500/10 border border-red-500/50 rounded-lg px-6 py-2 inline-block mb-8">
          <span className="text-red-500 font-mono tracking-widest text-sm animate-pulse">
            ⚠ SYSTEM FAULT: PAGE_NOT_FOUND
          </span>
        </div>

        <p className="max-w-md mx-auto text-pencil-600 text-lg mb-10 dark:text-pencil-400">
          The coordinates you are trying to access do not exist in this sector of the metaverse.
        </p>

        <ButtonLink href="/" size="lg" className="bg-pencil-900 text-white hover:bg-pencil-800 border-0 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white dark:text-black dark:hover:bg-pencil-200 dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          return_to_base()
        </ButtonLink>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 font-mono text-xs text-pencil-600">
        ERR_CODE: 0x404_MISSING
      </div>
      <div className="absolute top-10 right-10 font-mono text-xs text-pencil-600">
        SYS_STATUS: CRITICAL
      </div>
    </div>
  )
}
