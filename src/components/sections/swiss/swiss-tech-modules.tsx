'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { motion } from 'framer-motion'
import { useState } from 'react'

const modulesZhTw = [
  {
    number: '01',
    title: 'XR（VR/MR/XR）',
    subtitle: 'Extended Reality',
    description: '虛擬實境、混合實境與擴增實境技術整合，提供沉浸式視覺體驗',
    features: ['VR 頭盔整合', 'MR 透視模式', 'AR 空間定位', '跨平台支援'],
  },
  {
    number: '02',
    title: '全向跑步機',
    subtitle: 'Omnidirectional Treadmill',
    description: '移動裝置整合，讓使用者在虛擬世界中自由行走',
    features: ['全向移動追蹤', '步態分析', '安全防護', '多人協同'],
  },
  {
    number: '03',
    title: '觸覺回饋',
    subtitle: 'Haptic Feedback',
    description: 'Haptic 裝置整合，提供觸覺反饋增強沉浸感',
    features: ['觸覺背心', '手套回饋', '力回饋裝置', '溫度模擬'],
  },
  {
    number: '04',
    title: 'AI 與大數據',
    subtitle: 'AI & Big Data',
    description: '人工智慧與資料分析，提供智能化互動體驗',
    features: ['AI NPC 行為', '個人化推薦', '語音識別', '數據分析'],
  },
  {
    number: '05',
    title: '5G/6G',
    subtitle: 'Next-Gen Network',
    description: '低延遲高頻寬網路，確保即時互動體驗',
    features: ['低延遲傳輸', '高頻寬串流', '邊緣運算', '多人同步'],
  },
  {
    number: '06',
    title: '五感互動',
    subtitle: 'Multi-Sensory',
    description: '嗅覺、味覺等感官技術研究，邁向完整沉浸體驗',
    features: ['嗅覺裝置', '環境模擬', '多感官整合', '研究前瞻'],
  },
]

const modulesEn = [
  {
    number: '01',
    title: 'XR (VR/MR/AR)',
    subtitle: 'Extended Reality',
    description:
      'Integration of Virtual Reality, Mixed Reality, and Augmented Reality technologies for immersive visual experiences',
    features: ['VR Headset Integration', 'MR Passthrough Mode', 'AR Spatial Tracking', 'Cross-Platform Support'],
  },
  {
    number: '02',
    title: 'Omnidirectional Treadmill',
    subtitle: 'Movement Platform',
    description: 'Movement device integration allowing users to walk freely in virtual worlds',
    features: ['Omnidirectional Tracking', 'Gait Analysis', 'Safety Protection', 'Multi-User Coordination'],
  },
  {
    number: '03',
    title: 'Haptic Feedback',
    subtitle: 'Touch Sensation',
    description: 'Haptic device integration providing tactile feedback to enhance immersion',
    features: ['Haptic Vest', 'Glove Feedback', 'Force Feedback Devices', 'Temperature Simulation'],
  },
  {
    number: '04',
    title: 'AI & Big Data',
    subtitle: 'Artificial Intelligence',
    description: 'Artificial intelligence and data analysis providing intelligent interactive experiences',
    features: ['AI NPC Behavior', 'Personalized Recommendations', 'Voice Recognition', 'Data Analytics'],
  },
  {
    number: '05',
    title: '5G/6G',
    subtitle: 'Next-Gen Network',
    description: 'Low-latency, high-bandwidth networks ensuring real-time interactive experiences',
    features: ['Low-Latency Transmission', 'High-Bandwidth Streaming', 'Edge Computing', 'Multi-User Sync'],
  },
  {
    number: '06',
    title: 'Multi-Sensory Interaction',
    subtitle: 'Five Senses',
    description:
      'Research on olfactory, gustatory, and other sensory technologies towards complete immersive experiences',
    features: ['Olfactory Devices', 'Environmental Simulation', 'Multi-Sensory Integration', 'Research Frontier'],
  },
]

const modulesJa = [
  {
    number: '01',
    title: 'XR (VR/MR/AR)',
    subtitle: 'Extended Reality',
    description: '仮想現実、複合現実、拡張現実技術を統合し、没入型の視覚体験を提供',
    features: ['VRヘッドセット統合', 'MRパススルーモード', 'AR空間トラッキング', 'クロスプラットフォーム'],
  },
  {
    number: '02',
    title: '全方向トレッドミル',
    subtitle: 'Omnidirectional Treadmill',
    description: '移動デバイスを統合し、仮想空間内での自由な歩行を実現',
    features: ['全方向トラッキング', '歩行分析', '安全保護', '複数人連携'],
  },
  {
    number: '03',
    title: 'ハプティクス',
    subtitle: 'Haptic Feedback',
    description: 'ハプティクスデバイスを統合し、触覚フィードバックで没入感を強化',
    features: ['ハプティクスベスト', 'グローブフィードバック', '力覚提示装置', '温度シミュレーション'],
  },
  {
    number: '04',
    title: 'AI & ビッグデータ',
    subtitle: 'Artificial Intelligence',
    description: '人工知能とデータ分析により、インテリジェントなインタラクティブ体験を提供',
    features: ['AI NPCの自律行動', 'パーソナライズ推奨', '音声認識', 'データ分析'],
  },
  {
    number: '05',
    title: '5G/6G',
    subtitle: 'Next-Gen Network',
    description: '低遅延・広帯域ネットワークで、リアルタイムなインタラクションを保証',
    features: ['低遅延伝送', '広帯域ストリーミング', 'エッジコンピューティング', '多人数同期'],
  },
  {
    number: '06',
    title: '五感インタラクション',
    subtitle: 'Multi-Sensory',
    description: '嗅覚、味覚などの感覚技術を研究し、完全な没入体験へ',
    features: ['嗅覚デバイス', '環境シミュレーション', '多感覚統合', '先端研究'],
  },
]

export function SwissTechModules() {
  const { language } = useLanguage()
  const modules = language === 'zh-TW' ? modulesZhTw : language === 'ja' ? modulesJa : modulesEn
  const [activeNumber, setActiveNumber] = useState<string>(modules[0]?.number ?? '01')
  const activeModule = modules.find((module) => module.number === activeNumber) ?? modules[0]

  const eyebrow = language === 'zh-TW' ? '核心技術堆疊' : language === 'ja' ? 'コア技術スタック' : 'Core Tech Stack'
  const title = language === 'zh-TW' ? '六大技術模組' : language === 'ja' ? '6つの技術モジュール' : 'Six Tech Modules'
  const subtitle = language === 'zh-TW' ? '技術堆疊' : language === 'ja' ? '技術スタック' : 'Tech Stack'

  return (
    <section id="tech-modules" className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6 dark:border-white/10">
        <div>
          <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">{eyebrow}</p>
          <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">{title}</h2>
        </div>
        <p className="swiss-mono hidden text-pencil-400 md:block dark:text-pencil-500">{subtitle}</p>
      </div>

      {activeModule && (
        <motion.div
          key={activeModule.number}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8 border border-pencil-200 bg-white p-6 dark:border-white/10 dark:bg-black"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="swiss-mono text-xs text-pencil-400 dark:text-pencil-500">MODULE {activeModule.number}</p>
              <h3 className="mt-1 text-2xl font-semibold text-pencil-950 dark:text-white">{activeModule.title}</h3>
              <p className="mt-1 text-sm text-pencil-500 dark:text-pencil-400">{activeModule.subtitle}</p>
            </div>
            <p className="max-w-2xl text-sm text-pencil-600 dark:text-pencil-300">{activeModule.description}</p>
          </div>
        </motion.div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-px bg-pencil-200 md:grid-cols-2 lg:grid-cols-3 dark:bg-white/10">
        {modules.map((module, index) => (
          <motion.div
            key={module.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-pencil-50 p-8 transition-colors hover:bg-white dark:bg-pencil-900 dark:hover:bg-pencil-800"
          >
            <button type="button" onClick={() => setActiveNumber(module.number)} className="w-full text-left">
              {/* Number */}
              <span
                className={`swiss-mono text-4xl font-bold transition-colors lg:text-5xl dark:text-white/20 ${activeNumber === module.number ? 'text-cta' : 'text-pencil-200 group-hover:text-cta'}`}
              >
                {module.number}
              </span>

              {/* Header */}
              <div className="mt-4 border-t border-pencil-200 pt-4 dark:border-white/10">
                <h3 className="text-xl font-semibold text-pencil-950 dark:text-white">{module.title}</h3>
                <p className="swiss-mono mt-1 text-pencil-400 dark:text-pencil-500">{module.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-pencil-700 dark:text-pencil-400">
                    <span className="swiss-mono text-pencil-400 dark:text-pencil-500">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
