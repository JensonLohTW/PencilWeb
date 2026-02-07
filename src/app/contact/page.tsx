import { ButtonLink } from '@/components/elements/button'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '聯絡我們｜預約 XR/AI Demo｜空間動態科技 Pencil',
    description:
        '想導入 VR/AR/MR、智慧空間或 AI Agent/Chat？留下需求，我們提供方案建議與 Demo。',
}

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <HeroSimpleCentered
                id="hero"
                headline="聯絡我們"
                subheadline={
                    <p className="text-pencil-600 dark:text-pencil-300">
                        無論是預約 Demo、詢問報價或討論合作，我們都期待與您交流。
                    </p>
                }
            />

            {/* Contact Form Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-pencil-900 dark:text-pencil-100">填寫需求表單</h2>
                            <p className="mt-2 text-pencil-600 dark:text-pencil-400">
                                填寫以下資訊，我們會在 2 個工作天內與您聯繫。
                            </p>

                            <form className="mt-8 space-y-6">
                                {/* Contact Info */}
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                            姓名 *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-neon-500 focus:outline-none focus:ring-1 focus:ring-neon-500 dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                                            placeholder="您的姓名"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                            公司名稱 *
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            required
                                            className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-neon-500 focus:outline-none focus:ring-1 focus:ring-neon-500 dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                                            placeholder="公司名稱"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-neon-500 focus:outline-none focus:ring-1 focus:ring-neon-500 dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                            電話
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-neon-500 focus:outline-none focus:ring-1 focus:ring-neon-500 dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                                            placeholder="聯絡電話"
                                        />
                                    </div>
                                </div>

                                {/* Solution Type */}
                                <div>
                                    <label className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                        想了解的方案類型 *
                                    </label>
                                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {['VR/MR 訓練', 'AR 視覺化', '智慧空間', 'AI 導入', '其他'].map((type) => (
                                            <label
                                                key={type}
                                                className="flex cursor-pointer items-center gap-2 rounded-lg border border-pencil-200 bg-white px-4 py-3 transition-all hover:border-neon-500/50 dark:border-pencil-700 dark:bg-pencil-900"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="solutionType"
                                                    value={type}
                                                    className="size-4 rounded border-pencil-300 bg-pencil-50 text-neon-600 focus:ring-neon-500 dark:border-pencil-600 dark:bg-pencil-800 dark:text-neon-500"
                                                />
                                                <span className="text-sm text-pencil-700 dark:text-pencil-200">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Target Scene */}
                                <div>
                                    <label className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                        目標場景
                                    </label>
                                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {['教育訓練', '展演', '商業', '工業', '生活應用', '其他'].map((scene) => (
                                            <label
                                                key={scene}
                                                className="flex cursor-pointer items-center gap-2 rounded-lg border border-pencil-200 bg-white px-4 py-3 transition-all hover:border-neon-500/50 dark:border-pencil-700 dark:bg-pencil-900"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="targetScene"
                                                    value={scene}
                                                    className="size-4 rounded border-pencil-300 bg-pencil-50 text-neon-600 focus:ring-neon-500 dark:border-pencil-600 dark:bg-pencil-800 dark:text-neon-500"
                                                />
                                                <span className="text-sm text-pencil-700 dark:text-pencil-200">{scene}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                        預計時程
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 focus:border-neon-500 focus:outline-none focus:ring-1 focus:ring-neon-500 dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100"
                                    >
                                        <option value="">請選擇</option>
                                        <option value="1-3">1-3 個月</option>
                                        <option value="3-6">3-6 個月</option>
                                        <option value="6+">6 個月以上</option>
                                        <option value="undefined">尚未確定</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                                        補充說明
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-neon-500 focus:outline-none focus:ring-1 focus:ring-neon-500 dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                                        placeholder="請描述您的需求或問題..."
                                    />
                                </div>

                                <ButtonLink href="#" size="lg" className="w-full justify-center">
                                    送出表單
                                </ButtonLink>
                            </form>
                        </div>

                        {/* Info */}
                        <div>
                            <div className="rounded-2xl border border-pencil-200 bg-white p-8 dark:border-pencil-800 dark:bg-pencil-900/50">
                                <h3 className="text-xl font-bold text-pencil-900 dark:text-pencil-100">送出後您會得到</h3>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        '2 個工作天內專人回覆',
                                        '初步需求確認與方案建議',
                                        '預約線上或現場 Demo',
                                        '詳細報價與時程規劃',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-pencil-600 dark:text-pencil-300">
                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neon-500/20 text-xs font-bold text-neon-600 dark:text-neon-400">
                                                {index + 1}
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 rounded-2xl border border-pencil-200 bg-white p-8 dark:border-pencil-800 dark:bg-pencil-900/50">
                                <h3 className="text-xl font-bold text-pencil-900 dark:text-pencil-100">聯絡資訊</h3>
                                <div className="mt-6 space-y-4 text-pencil-600 dark:text-pencil-300">
                                    <p>
                                        <span className="text-pencil-500">地點：</span>高雄市
                                    </p>
                                    <p>
                                        <span className="text-pencil-500">Email：</span>
                                        <a href="mailto:contact@pencil.space" className="text-neon-600 hover:underline dark:text-neon-400">
                                            contact@pencil.space
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQsTwoColumnAccordion id="faqs" headline="聯絡前常見問題">
                <Faq
                    id="faq-1"
                    question="Demo 可以線上進行嗎？"
                    answer="是的，我們提供線上 Demo 服務。如需體驗 VR/AR 裝置，也可以安排現場 Demo。"
                />
                <Faq
                    id="faq-2"
                    question="報價需要多久時間？"
                    answer="簡單需求可在需求確認後 3-5 個工作天內提供報價；複雜專案需進一步訪談後提供詳細報價。"
                />
                <Faq
                    id="faq-3"
                    question="可以先做 PoC 再決定是否進行完整專案嗎？"
                    answer="當然可以。我們建議較複雜的專案先進行 PoC 驗證，確認可行性與效果後再進行完整開發。"
                />
                <Faq
                    id="faq-4"
                    question="合作流程是什麼？"
                    answer="一般流程為：需求訪談 → 方案建議 → PoC 驗證（視需求）→ 報價簽約 → 開發整合 → 部署驗收 → 維運支援。"
                />
            </FAQsTwoColumnAccordion>
        </>
    )
}
