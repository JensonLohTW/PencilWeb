import Image from 'next/image'

import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { PlanComparisonTable } from '@/components/sections/plan-comparison-table'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import { Link } from '@/components/elements/link'

function plans(option: string) {
  return (
    <>
      <Plan
        name="諮詢與評估"
        price="免費"
        period=""
        subheadline={<p className="text-pencil-300">適用於初步評估 XR/AI 導入可行性的企業</p>}
        features={[
          '需求訪談與場域評估',
          '技術可行性分析',
          '初步解決方案規劃',
          '硬體規格建議',
          '預算架構估算',
        ]}
        cta={
          <SoftButtonLink href="/contact" size="lg" className="border-pencil-700 text-pencil-200 hover:bg-pencil-800 hover:text-white">
            預約諮詢
          </SoftButtonLink>
        }
      />
      <Plan
        name="POC 概念驗證"
        price="專案報價"
        period=""
        subheadline={<p className="text-pencil-300">快速驗證核心功能與效益的小規模導入</p>}
        badge="推薦起點"
        features={[
          '核心功能原型開發 (MVP)',
          '小規模場域部署測試',
          '使用者體驗 (UX) 驗證',
          '效能壓力測試',
          '部署成效評估報告',
          '後續擴充規劃建議',
          '為期 1-3 個月的驗證期',
        ]}
        cta={
          <ButtonLink href="/contact" size="lg" className="glow-neon border-neon-500/50 bg-neon-500/10 text-neon-400 hover:bg-neon-500/20">
            啟動 POC
          </ButtonLink>
        }
      />
      <Plan
        name="企業級解決方案"
        price="客製化"
        period=""
        subheadline={<p className="text-pencil-300">完整導入、長期營運與維護的最終目標</p>}
        features={[
          '完整系統架構設計與開發',
          '私有化部署 (On-Premises)',
          '企業既有系統 (ERP/LMS) 整合',
          'SLA 服務層級協議',
          '專屬技術支援團隊',
          '定期功能迭代與維護',
          '原始碼交付 (選購)',
        ]}
        cta={
          <SoftButtonLink href="/contact" size="lg" className="border-pencil-700 text-pencil-200 hover:bg-pencil-800 hover:text-white">
            聯繫業務
          </SoftButtonLink>
        }
      />
    </>
  )
}

export default function Page() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PricingHeroMultiTier
        id="pricing"
        headline={<span className="text-glow">專為企業打造的<br />XR × AI 解決方案</span>}
        subheadline={
          <p className="text-pencil-300 text-lg">
            從需求諮詢、概念驗證 (POC) 到全面導入，我們提供彈性且專業的合作模式，<br className="hidden sm:inline" />確保每一分預算都能轉化為實際的運營效益。
          </p>
        }
        options={['專案開發']}
        plans={{ 專案開發: plans('專案開發') }}
        footer={
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold text-pencil-400 mb-6">深受以下合作夥伴信賴</p>
            <LogoGrid>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                {/* 這裡可以放合作夥伴 Logo，暫時用文字示意，或保留原 SVG 結構但更換內容 */}
                <span className="text-xl font-bold text-pencil-200">HTC VIVE</span>
                <span className="text-xl font-bold text-pencil-200">Unity</span>
                <span className="text-xl font-bold text-pencil-200">NVIDIA</span>
                <span className="text-xl font-bold text-pencil-200">Microsoft</span>
                <span className="text-xl font-bold text-pencil-200">Autodesk</span>
              </div>
            </LogoGrid>
          </div>
        }
      />

      {/* Plan Comparison Table */}
      <PlanComparisonTable
        id="comparison"
        plans={['諮詢階段', 'POC 驗證', '正式導入']}
        features={[
          {
            title: '專案範疇',
            features: [
              {
                name: '功能完整度',
                value: { 諮詢階段: '規劃為主', 'POC 驗證': '核心功能 (MVP)', '正式導入': '完整功能' },
              },
              { name: '硬體整合', value: { 諮詢階段: '規格建議', 'POC 驗證': '單機/小規模', '正式導入': '全面部署' } },
              { name: '客製化程度', value: { 諮詢階段: '低', 'POC 驗證': '中', '正式導入': '高' } },
              {
                name: '資料介接',
                value: { 諮詢階段: '無', 'POC 驗證': '模擬數據/部分介接', '正式導入': '即時雙向串接' },
              },
            ],
          },
          {
            title: '交付項目',
            features: [
              { name: '需求規格書 (SRS)', value: { 諮詢階段: true, 'POC 驗證': true, '正式導入': true } },
              {
                name: '系統架構圖',
                value: { 諮詢階段: '草案', 'POC 驗證': '驗證版', '正式導入': '完整版' },
              },
              {
                name: '執行檔/安裝包',
                value: { 諮詢階段: false, 'POC 驗證': true, '正式導入': true },
              },
              {
                name: '原始碼',
                value: { 諮詢階段: false, 'POC 驗證': '不包含', '正式導入': '可選購' },
              },
              {
                name: '操作手冊/教育訓練',
                value: { 諮詢階段: false, 'POC 驗證': '簡易版', '正式導入': '完整培訓' },
              },
            ],
          },
          {
            title: '維護與支援',
            features: [
              { name: '保固期', value: { 諮詢階段: '-', 'POC 驗證': '驗證期間', '正式導入': '1 年 (可延長)' } },
              {
                name: '技術支援回應',
                value: { 諮詢階段: '一般', 'POC 驗證': '優先', '正式導入': 'SLA 保證' },
              },
              {
                name: '定期巡檢',
                value: { 諮詢階段: false, 'POC 驗證': false, '正式導入': '有 (季/半年)' },
              },
            ],
          },
        ]}
      />

      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p className="text-lg sm:text-2xl leading-relaxed">
            &quot;Pencil 的團隊展現了極高的專業度。他們不只是開發軟體，而是真正理解我們的飛行訓練痛點，並提出可落地的 XR 解決方案。導入模擬系統後，我們的學員培訓效率提升了 40%。&quot;
          </p>
        }
        img={
          <div className="h-full w-full bg-gradient-to-br from-pencil-800 to-pencil-900 flex items-center justify-center">
            {/* Placeholder for Client Photo */}
            <span className="text-pencil-500 text-6xl">User Photo</span>
          </div>
        }
        name="張教官"
        byline="資深飛行教官 / 航空訓練中心"
      />

      {/* FAQs */}
      <FAQsAccordion id="faqs" headline="常見問題">
        <Faq
          id="faq-1"
          question="什麼是 POC (概念驗證)，為什麼需要它？"
          answer="POC (Proof of Concept) 是在全面投入資源前，先以小規模、低成本的方式驗證技術可行性與預期效益。對於 XR 與 AI 等新技術導入，POC 能有效降低投資風險，確保最終產品符合需求。"
        />
        <Faq
          id="faq-2"
          question="既有的硬體設備 (VR 頭盔、電腦) 可以沿用嗎？"
          answer="我們會優先評估您現有的設備規格。若規格符合軟體運行需求 (如 GPU 算力、感測器精度)，我們會盡量沿用以節省預算；若規格不足，我們會提供最適合的升級建議。"
        />
        <Faq
          id="faq-3"
          question="專案開發通常需要多久？"
          answer="POC 專案通常約 1-3 個月；完整企業級系統開發則視規模而定，通常約 3-6 個月以上。我們採用敏捷開發模式，每個階段都會有可展示的成果，讓您隨時掌握進度。"
        />
        <Faq
          id="faq-4"
          question="系統上線後，你們提供什麼樣的支援？"
          answer="所有正式導入的專案均包含一年的標準保固，涵蓋 Bug 修復與系統穩定性維護。您也可以選購進階維護合約 (MA)，包含功能優化、定期巡檢與 SLA 等級的技術支援。"
        />
      </FAQsAccordion>

      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="call-to-action"
        headline={<span className="text-glow">還有其他問題嗎？</span>}
        subheadline={
          <p className="text-pencil-300">
            每個企業的需求都是獨一無二的。歡迎與我們的技術顧問聊聊，讓我們為您規劃最適合的導入路徑。
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg" className="glow-neon border-neon-500/50 bg-neon-500/10 text-neon-400 hover:bg-neon-500/20">
              聯絡我們
            </ButtonLink>

            <PlainButtonLink href="/contact" size="lg" className="text-pencil-300 hover:text-white">
              填寫需求表單 <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </div>
  )
}
