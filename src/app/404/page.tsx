import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Lost in the Metaverse | 空間動態科技',
  description: '頁面不僅存在於真實世界，也迷失在虛擬空間中。',
}

export default function NotFoundPage() {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pencil-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10 text-center">
        <h1 className="text-[150px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-neon-400 to-accent-400 opacity-20 select-none blur-sm">
          404
        </h1>
        <div className="relative -mt-20">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-glow mb-6">
            Lost in the Metaverse
          </h2>
          <p className="max-w-md mx-auto text-lg text-pencil-300 mb-10">
            您尋找的網頁似乎迷失在虛擬與現實的邊界之中。<br />
            請嘗試返回首頁，重新定位您的座標。
          </p>
          <ButtonLink href="/" size="lg" className="glow-neon">
            返回首頁
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
}
