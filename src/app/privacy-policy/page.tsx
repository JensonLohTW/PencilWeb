import { Container } from '@/components/elements/container'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-pencil-50 min-h-screen pt-32 pb-24 font-sans relative dark:bg-black">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-500 via-accent-500 to-neon-500" />

      <Container className="max-w-3xl">
        <div className="mb-16 border-b border-black/10 pb-8 dark:border-white/10">
          <h1 className="text-4xl font-bold text-pencil-900 mb-4 text-glow dark:text-white">Privacy Policy</h1>
          <div className="flex items-center gap-4 text-sm font-mono text-pencil-500">
            <span>LAST_UPDATED: 2024-02-07</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-pencil-900 prose-a:text-neon-600 prose-strong:text-pencil-900 dark:prose-invert dark:prose-headings:text-white dark:prose-a:text-neon-400 dark:prose-strong:text-pencil-100">
          <p className="lead text-xl text-pencil-600 dark:text-pencil-300">
            Your privacy is critically important to us. Included below are our policies for handling your data.
          </p>

          <h3 className="text-accent-600 font-mono text-sm uppercase tracking-wider mt-12 mb-4 border-l-2 border-accent-600 pl-4 dark:text-accent-400 dark:border-accent-400">01. Data Collection</h3>
          <p className="text-pencil-800 dark:text-pencil-200">
            我們僅收集必要的資訊以提供更好的服務。這可能包含您的姓名、電子郵件地址以及您在填寫需求表單時提供的專案資訊。
          </p>

          <h3 className="text-accent-600 font-mono text-sm uppercase tracking-wider mt-12 mb-4 border-l-2 border-accent-600 pl-4 dark:text-accent-400 dark:border-accent-400">02. Data Usage</h3>
          <p className="text-pencil-800 dark:text-pencil-200">
            收集的資料僅用於專案聯繫、需求評估與服務提供。我們絕不會將您的個人資訊出售給第三方。
          </p>

          <h3 className="text-accent-600 font-mono text-sm uppercase tracking-wider mt-12 mb-4 border-l-2 border-accent-600 pl-4 dark:text-accent-400 dark:border-accent-400">03. Security</h3>
          <p className="text-pencil-800 dark:text-pencil-200">
            我們採取業界標準的安全措施來保護您的數據免受未經授權的訪問、更改或披露。所有的傳輸均經過加密處理。
          </p>

          <hr className="border-black/10 my-12 dark:border-white/10" />

          <p className="text-pencil-500 text-sm font-mono">
            If you have any questions, please contact us at <a href="mailto:contact@pencil.com.tw">contact@pencil.com.tw</a>.
          </p>
        </div>
      </Container>
    </div>
  )
}
