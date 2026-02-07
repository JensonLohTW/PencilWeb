import { clsx } from 'clsx/lite'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: '你們的解決方案適用於哪些產業？',
        answer:
            '我們專注於高風險、高價值或需要複雜操作的場域，主要服務產業包括航太軍工、半導體製造、醫療培訓、能源產業以及大型展演空間。我們的 XR 與 AI 技術可針對不同產業痛點進行客製化。',
    },
    {
        question: '導入 VR 訓練需要準備什麼硬體？',
        answer:
            '我們可以為您規劃完整的硬體配置，包括 VR 頭顯（如 Quest 3, Vive XR Elite）與運算主機。如果您的場域有限，我們也提供一體機（Standalone）的輕量化解決方案。',
    },
    {
        question: 'AI Agent 如何確保企業數據安全？',
        answer:
            '我們採用私有化部署（On-Premises）或私有雲架構，確保您的企業敏感數據（如技術文件、規章制度）不會流出外部。我們的 RAG 架構在檢索生成過程中嚴格遵守權限控管。',
    },
    {
        question: '專案開發週期通常需要多久？',
        answer:
            '視專案規模而定。標準化的 VR 培訓模組通常需 2-3 個月；高度客製化的數位孿生或大型 AI 系統可能需要 4-6 個月。我們會在初期規劃階段提供詳細的時程表。',
    },
]

export function FaqSimple() {
    return (
        <div className="bg-pencil-50 py-24 sm:py-32 dark:bg-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-pencil-900/10 dark:divide-white/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-pencil-900 dark:text-white text-center mb-10">常見問題 FAQ</h2>
                    <dl className="space-y-6 divide-y divide-pencil-900/10 dark:divide-white/10">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group pt-6">
                                <summary className="flex w-full cursor-pointer items-start justify-between text-left text-pencil-900 dark:text-white">
                                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <ChevronDownIcon className="h-6 w-6 transform transition duration-300 group-open:-rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <div className="mt-2 pr-12 pb-4">
                                    <p className="text-base leading-7 text-pencil-600 dark:text-pencil-400 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2 duration-300">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
