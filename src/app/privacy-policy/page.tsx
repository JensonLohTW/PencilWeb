import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隱私權政策 | 空間動態科技 (Spatial Dynamics)',
  description: '空間動態科技的隱私權政策說明。',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <Container className="max-w-4xl">
        <div className="mx-auto text-center mb-16">
          <Heading className="text-glow">隱私權政策</Heading>
          <p className="mt-4 text-pencil-300">生效日期：2024 年 3 月 1 日</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-pencil-300 prose-headings:text-white prose-headings:font-bold prose-a:text-neon-400 prose-strong:text-white">
          <p className="lead">
            空間動態科技股份有限公司（以下簡稱「我們」或「本公司」）非常重視您的隱私權。本政策旨在說明我們如何收集、使用、披露及保護您的個人資訊。
          </p>

          <h3>1. 資訊收集</h3>
          <p>
            我們可能會收集以下類型的資訊：
          </p>
          <ul>
            <li><strong>個人識別資訊：</strong> 當您填寫聯絡表單、訂閱電子報或申請服務時，我們可能會收集您的姓名、職稱、電子郵件地址、電話號碼等。</li>
            <li><strong>使用數據：</strong> 我們會自動收集您訪問本網站的相關資訊，如 IP 地址、瀏覽器類型、訪問頁面及停留時間等，以優化使用者體驗。</li>
            <li><strong>Cookies：</strong> 本網站使用 Cookies 來追蹤活動並儲存特定資訊，您可以透過瀏覽器設定拒絕 Cookies，但這可能會影響部分功能的使用。</li>
          </ul>

          <h3>2. 資訊使用</h3>
          <p>
            我們收集的資訊將用於：
          </p>
          <ul>
            <li>提供、維護及優化我們的服務。</li>
            <li>回覆您的詢問與需求。</li>
            <li>發送重要的服務通知或技術更新。</li>
            <li>進行數據分析，以改善網站效能與內容規劃。</li>
          </ul>

          <h3>3. 資訊分享與披露</h3>
          <p>
            除非符合以下情況，否則我們不會將您的個人資訊分享給第三方：
          </p>
          <ul>
            <li><strong>經您同意：</strong> 在獲得您的明確同意後。</li>
            <li><strong>法律要求：</strong> 依據法律法規或政府機關的強制性要求。</li>
            <li><strong>服務供應商：</strong> 提供網站託管、數據分析等服務的合作夥伴（需簽署保密協議）。</li>
          </ul>

          <h3>4. 資料安全</h3>
          <p>
            我們採取符合業界標準的安全措施（如 SSL 加密、存取控制）來保護您的資訊，防止未經授權的存取、修改或洩漏。然而，網際網路傳輸無法保證 100% 安全，我們將盡力降低風險。
          </p>

          <h3>5. 第三方連結</h3>
          <p>
            本網站可能包含通往第三方網站的連結。我們對這些網站的內容或隱私權政策不負責任，建議您在提供資訊前閱讀其隱私權聲明。
          </p>

          <h3>6. 政策更新</h3>
          <p>
            我們保留隨時修改本隱私權政策的權利。更新後的政策將公佈於本頁面，並更新上方的「生效日期」。繼續使用本網站即代表您同意受修訂後的政策約束。
          </p>

          <h3>7. 聯絡我們</h3>
          <p>
            若您對本隱私權政策有任何疑問，請透過以下方式與我們聯繫：
          </p>
          <ul>
            <li>Email: contact@pencil-tech.com</li>
            <li>電話: (07) 123-4567</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
