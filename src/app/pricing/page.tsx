import { ButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { LogoGrid } from '@/components/sections/logo-grid'

// Helper for Pricing Plans
const plans = (period: string) => [
  {
    name: 'Consultation',
    price: 'Free',
    description: '初步需求訪談與評估',
    href: '/contact',
    features: ['需求分析', '可行性評估', '技術建議', '方案報價'],
    featured: false,
    cta: '預約諮詢',
  },
  {
    name: 'POC / MVP',
    price: 'Custom',
    description: '概念驗證與最小可行性產品',
    href: '/contact',
    features: ['快速原型開發', '核心功能驗證', '使用者測試', '部署規劃'],
    featured: true,
    cta: '啟動 POC',
  },
  {
    name: 'Enterprise',
    price: 'Talk to Sales',
    description: '完整系統開發與導入',
    href: '/contact',
    features: ['全功能開發', '系統整合', '私有化部署', 'SLA 支援', '教育訓練'],
    featured: false,
    cta: '聯絡業務',
  },
]

export default function Page() {
  return (
    <div className="overflow-hidden bg-pencil-50 min-h-screen dark:bg-black">
      <div className="relative pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-pencil-900 mb-6 text-glow-strong dark:text-white">
            Solution Tiers
          </h1>
          <p className="text-pencil-600 text-lg dark:text-pencil-300">
            從諮詢、驗證到規模化部署，我們提供彈性且專業的合作模式。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans('Project').map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${plan.featured
                ? 'bg-white border-neon-500/50 shadow-[0_0_30px_rgba(34,197,94,0.1)] scale-105 z-10 dark:bg-white/5'
                : 'bg-white border-black/10 hover:border-black/20 dark:bg-black/40 dark:border-white/10 dark:hover:border-white/20'
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-bold text-pencil-900 mb-2 dark:text-white">{plan.name}</h3>
              <div className="text-3xl font-bold text-pencil-900 mb-4 font-mono dark:text-white">{plan.price}</div>
              <p className="text-pencil-600 text-sm mb-8 dark:text-pencil-400">{plan.description}</p>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-pencil-600 dark:text-pencil-300">
                    <span className={`mr-3 size-1.5 rounded-full ${plan.featured ? 'bg-neon-500' : 'bg-pencil-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={plan.href}
                className={`w-full justify-center ${plan.featured
                  ? 'bg-neon-600 hover:bg-neon-500 text-white border-0'
                  : 'bg-black/5 hover:bg-black/10 text-pencil-900 border-0 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
                  }`}
              >
                {plan.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>

      {/* Logos */}
      <div className="border-t border-black/10 py-16 bg-white dark:bg-black/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-pencil-600 font-mono text-xs uppercase tracking-widest mb-8 dark:text-pencil-500">Trusted Partners</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['HTC VIVE', 'Unity', 'NVIDIA', 'Microsoft', 'Autodesk'].map(logo => (
              <span key={logo} className="text-xl font-bold text-pencil-900 dark:text-white">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
