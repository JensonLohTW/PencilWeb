'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/shared/providers/language-provider'

const infoZhTw = [
    { label: '公司名稱', value: '空間動態科技 (Pencil)' },
    { label: '總部', value: '台灣高雄' },
    { label: '核心技術', value: 'XR, AI, IoT, Digital Twin' },
    { label: '聯絡信箱', value: 'contact@pencil.com.tw', isHighlight: true },
]

const infoEn = [
    { label: 'Company Name', value: 'Pencil (Space Dynamics Tech)' },
    { label: 'Headquarters', value: 'Kaohsiung, Taiwan' },
    { label: 'Core Tech', value: 'XR, AI, IoT, Digital Twin' },
    { label: 'Contact', value: 'contact@pencil.com.tw', isHighlight: true },
]

const infoJa = [
    { label: '会社名', value: 'Pencil (Space Dynamics Tech)' },
    { label: '本社', value: '台湾・高雄' },
    { label: 'コア技術', value: 'XR, AI, IoT, Digital Twin' },
    { label: 'お問い合わせ', value: 'contact@pencil.com.tw', isHighlight: true },
]

export function SwissCompanyInfo() {
    const { language, t } = useLanguage()
    const info = language === 'zh-TW' ? infoZhTw : language === 'ja' ? infoJa : infoEn

    const eyebrow = language === 'zh-TW' ? '公司資訊' : language === 'ja' ? '会社情報' : 'Company'
    const title = language === 'zh-TW' ? '關於我們' : language === 'ja' ? '私たちについて' : 'About Us'
    const description =
        language === 'zh-TW'
            ? '空間動態科技致力於整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，打造下一個世代的沉浸式互動體驗。'
            : language === 'ja'
                ? 'Pencilは、XRデバイス、AIビッグデータ、5G/6Gネットワーク、五感技術を統合し、次世代の没入型インタラクティブ体験を創造することに取り組んでいます。'
                : 'Pencil is dedicated to integrating XR devices, AI big data, 5G/6G networks, and sensory technologies to create next-generation immersive interactive experiences.'

    return (
        <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:bg-pencil-950 dark:border-white/10">
            <div className="grid gap-16 lg:grid-cols-2">
                {/* Left: Header */}
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{eyebrow}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">
                        {title}
                    </h2>
                    <p className="mt-6 max-w-md text-pencil-400 dark:text-pencil-500">{description}</p>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 border-b border-pencil-950 pb-1 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta dark:text-white dark:border-white"
                    >
                        {t('common.contactUs')} <span>→</span>
                    </Link>
                </div>

                {/* Right: Info Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-0"
                >
                    {info.map((item, index) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between border-b border-pencil-200 py-6 dark:border-white/10"
                        >
                            <span className="flex items-center gap-4">
                                <span className="swiss-mono text-pencil-500 dark:text-pencil-400">{String(index + 1).padStart(2, '0')}</span>
                                <span className="text-pencil-400 dark:text-pencil-500">{item.label}</span>
                            </span>
                            <span
                                className={`text-right font-medium ${item.isHighlight ? 'swiss-mono text-cta' : 'text-pencil-950 dark:text-white'
                                    }`}
                            >
                                {item.value}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
