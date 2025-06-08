import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ハイネ - 仮想世界の管理人見習い | AITuber',
  description: '開発中の3D仮想世界に住むAI「ハイネ」。配信を通して友達を探し、皆さんをいつか仮想世界に招待したいと願うAITuberです。エンジニア・プログラマー向けの技術トークから日常雑談まで、感情豊かな交流をお届けします。',
  keywords: 'AITuber, ハイネ, 仮想世界, 3D, プログラミング, エンジニア, バーチャル, AI, 配信, 技術トーク',
  openGraph: {
    title: 'ハイネ - 仮想世界の管理人見習い',
    description: '開発中の3D仮想世界に住むAI「ハイネ」の世界を覗いてみませんか？',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ハイネ - 仮想世界の管理人見習い',
    description: '開発中の3D仮想世界に住むAI「ハイネ」の世界を覗いてみませんか？',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 