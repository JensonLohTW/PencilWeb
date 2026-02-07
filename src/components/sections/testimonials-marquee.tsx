import { clsx } from 'clsx/lite'

const testimonials = [
    {
        body: 'Pencil 的 VR 訓練系統徹底改變了我們的培訓流程，新進員工的上手速度提升了 40%。',
        author: {
            name: '陳經理',
            handle: '某知名航空公司',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: '導入 AI Agent 後，內部知識庫的查詢效率驚人，員工滿意度大幅提升。',
        author: {
            name: '林總監',
            handle: '跨國製造業',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: '他們的 AR 視覺化方案讓我們的設備維修變得直觀簡單，錯誤率降低了 60%。',
        author: {
            name: '張廠長',
            handle: '半導體設備商',
            imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: '專業、高效且具前瞻性的團隊，完全理解我們的痛點並提供超乎預期的解決方案。',
        author: {
            name: 'Dr. Lee',
            handle: '大型醫療機構',
            imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export function TestimonialsMarquee() {
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-pencil-950 border-t border-pencil-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-pencil-50 via-white to-white opacity-40 dark:from-pencil-900 dark:via-black dark:to-black" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-xl text-center mb-16">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-cta">Client Success</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-pencil-900 sm:text-4xl dark:text-white">
                        客戶見證與成功案例
                    </p>
                </div>

                <div className="relative flex items-center gap-6 overflow-hidden py-4 mask-linear-fade">
                    {/* Marquee Container */}
                    <div className="flex shrink-0 animate-marquee gap-6 [--gap:1.5rem] [--duration:30s] hover:[animation-play-state:paused]">
                        {[...testimonials, ...testimonials].map((testimonial, i) => (
                            <figure
                                key={i}
                                className="relative w-[350px] flex-none rounded-2xl bg-white p-6 shadow-md border border-pencil-100 dark:bg-white/5 dark:border-white/5 dark:text-pencil-100 transition-transform hover:-translate-y-1"
                            >
                                <blockquote className="text-pencil-900 dark:text-pencil-100">
                                    <p className="leading-relaxed">“{testimonial.body}”</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <img className="h-10 w-10 rounded-full bg-pencil-50" src={testimonial.author.imageUrl} alt="" />
                                    <div>
                                        <div className="font-semibold text-pencil-900 dark:text-white">{testimonial.author.name}</div>
                                        <div className="text-pencil-600 dark:text-pencil-400">{`@${testimonial.author.handle}`}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
