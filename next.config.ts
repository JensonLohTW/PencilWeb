import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'
import path from 'path'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  // 明確指定 Turbopack workspace root，避免偵測到多個 lockfile 而誤判根目錄
  turbopack: {
    root: path.resolve(__dirname),
  },

  // 靜態導出配置：只在 production 啟用，避免 dev 模式觸發靜態驗證錯誤
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),

  // GitHub Pages 部署配置
  basePath: process.env.NODE_ENV === 'production' ? '/PencilWeb' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PencilWeb/' : '',

  // 圖片優化配置
  // GitHub Pages 不支援 Next.js Image Optimization API，使用靜態圖片
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 禁用 trailing slashes
  trailingSlash: false,
}

export default withNextIntl(nextConfig)
