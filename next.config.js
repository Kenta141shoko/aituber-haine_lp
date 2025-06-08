/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelでの動的デプロイ用設定
  experimental: {
    appDir: true,
  },
  images: {
    domains: [], // 必要に応じて外部画像ドメインを追加
    unoptimized: false // Vercelの画像最適化を利用
  },
  // 必要に応じてリダイレクトやリライトを設定
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  }
}

module.exports = nextConfig 