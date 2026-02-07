export function TechnologyHudGrid() {
    return (
        <section id="technology" className="relative py-24 bg-pencil-900 overflow-hidden dark:bg-black">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-50" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                        <span className="text-neon-500">OASIS</span> 願景
                    </h2>
                    <p className="text-pencil-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        整合 <span className="text-white font-medium">XR 裝置</span>、
                        <span className="text-white font-medium">AI 大數據</span>、
                        <span className="text-white font-medium">5G/6G 網路</span>與
                        <span className="text-white font-medium">五感技術</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {/* Tech Stats / Cards */}
                    {['XR Core', 'Omni-Move', 'Haptics', 'AI Brain', '5G Link', 'Sensory'].map((item, i) => (
                        <div key={i} className="hud-border bg-black/50 p-6 rounded flex flex-col items-center justify-center text-center aspect-square hover:bg-cta/10 transition-colors cursor-default">
                            <span className="text-xs font-mono text-pencil-500 mb-2">SYSTEM_0{i + 1}</span>
                            <span className="font-bold text-white">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
