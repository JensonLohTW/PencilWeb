import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 靜態導出配置
  output: 'export',

  // GitHub Pages 部署配置
  // GitHub Pages 部署配置
  basePath: process.env.NODE_ENV === 'production' ? '/PencilWeb' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PencilWeb/' : '',

  // 圖片優化配置
  // GitHub Pages 不支援 Next.js Image Optimization API，使用靜態圖片
  images: {
    unoptimized: true,
  },

  // 禁用 trailing slashes
  trailingSlash: false,
}

export default nextConfig
