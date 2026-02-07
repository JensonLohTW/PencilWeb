import { Logo, LogoGrid } from '@/components/elements/logo-grid'

export function TrustClients() {
    return (
        <section id="clients" className="relative py-12 sm:py-24 bg-white dark:bg-pencil-950 border-t border-pencil-100 dark:border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm font-medium text-pencil-500 uppercase tracking-widest">Trusted by Industry Leaders</p>
                </div>
                <div className="relative flex overflow-hidden mask-linear-fade">
                    <div className="flex shrink-0 animate-marquee gap-16 [--gap:4rem] [--duration:20s] items-center">
                        {/* Original set */}
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">AEROSPACE</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">DEFENSE</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">MEDICAL</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">EDU_TECH</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">SMART_MFG</span>
                        </Logo>

                        {/* Duplicate set for seamless loop */}
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">AEROSPACE</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">DEFENSE</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">MEDICAL</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">EDU_TECH</span>
                        </Logo>
                        <Logo className="h-8 w-auto text-pencil-900 dark:text-white opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-xl font-bold font-mono">SMART_MFG</span>
                        </Logo>
                    </div>
                </div>
            </div>
        </section>
    )
}
