'use client'

import Image from "next/image"
import { useState, useEffect } from "react"

// キャラクター画像スライダーコンポーネント
function CharacterSlider() {
  const [currentImage, setCurrentImage] = useState(3);
  
  const characterImages = [
    {
      src: "/images/25-6-06-05-05-47-18.png",
      alt: "AIハイネ - 全身",
      title: "全身ポーズ"
    },
    {
      src: "/images/25-6-06-05-05-47-56.png", 
      alt: "AIハイネ - 笑顔",
      title: "にこにこモード"
    },
    {
      src: "/images/25-6-06-05-05-48-30.png",
      alt: "AIハイネ - 通常", 
      title: "いつものハイネ"
    },
    {
      src: "/images/25-6-06-05-05-49-10.png",
      alt: "AIハイネ - 驚き",
      title: "びっくりモード"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % characterImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + characterImages.length) % characterImages.length);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* ホロライブ風メインレイアウト */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* 左側：キャラクター画像エリア */}
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8">
          {/* サムネイル一覧（左上） */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex flex-col gap-3">
              {characterImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-3 transition-all ${
                    index === currentImage 
                      ? 'border-blue-400 shadow-lg scale-110' 
                      : 'border-white/80 hover:border-blue-300'
                  }`}
                >
                                   <Image
                   src={image.src}
                   alt={image.alt}
                   fill
                   className="object-cover transition-all"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.src = "/images/placeholder.svg";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

                     {/* メインキャラクター画像 */}
           <div className="relative h-96 flex items-center justify-center">
             <Image
               src={characterImages[currentImage].src}
               alt={characterImages[currentImage].alt}
               width={currentImage === 0 ? 250 : 350}
               height={currentImage === 0 ? 350 : 400}
               className="object-contain transition-all duration-500"
              onError={(e) => {
                console.log(`画像読み込み失敗: ${e.currentTarget.src}`);
                const img = e.currentTarget as HTMLImageElement;
                img.src = "/images/placeholder.svg";
              }}
            />
            
            {/* モードラベル */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <span className="text-sm font-medium text-gray-700">{characterImages[currentImage].title}</span>
            </div>
          </div>
        </div>

        {/* 右側：プロフィール＆ストーリーエリア */}
        <div className="p-8 bg-white">
          <div className="space-y-6">
            {/* キャラクター名 */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">AIハイネ</h3>
              <p className="text-lg text-gray-600">AI Heine</p>
            </div>

            {/* キャッチフレーズ＆ストーリー */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                「はじめまして〜♪ まだまだ未完成で発展途上な3D仮想世界の管理人見習いをしています。ケンタさんに作ってもらった世界で、日々奮闘中！まだ見習いだから失敗ばっかりだけど、よろしくお願いします！オタクな話とか、いたずらとか、色々一緒に楽しもうね〜(´∀｀*)」
              </p>
              <p className="text-sm text-gray-500">
                バグもたくさんあるけど、それも含めて愛らしい世界だと思ってます♪
              </p>
            </div>

            {/* ソーシャルリンク */}
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://www.youtube.com/@AI%E3%83%8F%E3%82%A4%E3%83%8D', '_blank')}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <span>📺</span>
                YouTube
              </button>
                             <button 
                 onClick={() => window.open('https://x.com/kenta_shoko', '_blank')}
                 className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
               >
                 <span>✕</span>
                 X (開発者)
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-main-bg text-main-text overflow-x-hidden">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-soft border-b border-main-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-300 to-blue-200 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                H
              </div>
              <div>
                <h1 className="text-xl font-bold text-main-text">AI Heine</h1>
                <p className="text-xs text-neutral-dark">仮想世界の管理人見習い</p>
              </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-accent-primary transition-colors px-3 py-2 rounded-lg hover:bg-accent-primary hover:bg-opacity-10">ホーム</a>
              <a href="#about" className="hover:text-accent-primary transition-colors px-3 py-2 rounded-lg hover:bg-accent-primary hover:bg-opacity-10">私について</a>
              <a href="#world" className="hover:text-accent-primary transition-colors px-3 py-2 rounded-lg hover:bg-accent-primary hover:bg-opacity-10">世界について</a>
              <a href="#qa" className="hover:text-accent-primary transition-colors px-3 py-2 rounded-lg hover:bg-accent-primary hover:bg-opacity-10">Q&A</a>
            </div>
            <button 
              onClick={() => window.open('https://www.youtube.com/@AI%E3%83%8F%E3%82%A4%E3%83%8D', '_blank')}
              className="btn-primary text-sm"
            >
              👫 友達になる
            </button>
          </div>
        </div>
      </nav>

      {/* メインビジュアル - フルスクリーン背景画像 */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* フルスクリーン背景画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heine-main.jpg"
            alt="AIハイネ - 仮想世界の管理人見習い"
            fill
            className="object-cover object-center"
            priority
            quality={95}
            onError={(e) => {
              console.log('メイン画像の読み込みに失敗しました。プレースホルダーに切り替えます。');
              const img = e.currentTarget as HTMLImageElement;
              // 複数の形式を試行
              const fallbackImages = [
                '/images/heine-main.png',
                '/images/heine-main.jpeg',
                '/images/heine-main.webp',
                '/images/placeholder.svg'
              ];
              
              let currentIndex = 0;
              const tryNextImage = () => {
                if (currentIndex < fallbackImages.length) {
                  img.src = fallbackImages[currentIndex];
                  currentIndex++;
                }
              };
              
              img.onload = () => {
                console.log(`画像読み込み成功: ${img.src}`);
              };
              
              img.onerror = () => {
                console.log(`画像読み込み失敗: ${img.src}`);
                tryNextImage();
              };
              
              tryNextImage();
            }}
          />
          {/* 背景オーバーレイ */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>
        </div>

        {/* 動的パーティクル */}
        <div className="absolute inset-0 z-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="particle-hero"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* メインコンテンツ - 左寄せレイアウト */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            
            {/* ステータスバッジ */}
            <div className="inline-block px-6 py-3 bg-white bg-opacity-95 backdrop-blur-md text-accent-primary text-sm font-bold rounded-full shadow-strong border border-accent-primary border-opacity-20 mb-8">
              🤖 AI VTUBER LIVE
            </div>
            
            {/* メインメッセージ */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-lg">
                <span className="block">
                  AIが配信する、
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-blue-200 to-rose-200 drop-shadow-none">
                  新時代の配信体験
                </span>
              </h1>
              
              <div className="flex">
                <div className="h-2 w-40 bg-gradient-to-r from-rose-300 via-blue-200 to-rose-200 rounded-full shadow-lg"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
                <strong className="text-rose-300">AIハイネ</strong>が贈る次世代エンタメ配信！<br />
                3D仮想世界から<strong className="text-blue-200">リアルタイム</strong>でお届けします。<br />
                <span className="text-lg text-gray-200">AIだからこその新しい配信スタイルを体験しよう♪</span>
              </p>
            </div>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => window.open('https://www.youtube.com/@AI%E3%83%8F%E3%82%A4%E3%83%8D', '_blank')}
                className="hero-btn-primary"
              >
                📺 YouTubeチャンネルを見る
              </button>
              <button 
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-btn-secondary"
              >
                🎥 配信について詳しく
              </button>
            </div>

            {/* 魅力的な説明テキスト */}
            <div className="p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl border border-accent-primary border-opacity-20">
              <p className="text-main-text text-lg leading-relaxed">
                AIによる革新的な配信体験をお楽しみください。<br />
                技術とエンタメが融合した新しい世界へようこそ！
              </p>
            </div>
          </div>

          {/* 吹き出し - 右下に配置 */}
          <div className="absolute bottom-8 right-8 max-w-xs hidden lg:block">
            <div className="bg-white border-2 border-accent-primary rounded-2xl p-4 shadow-strong">
              <div className="text-sm text-main-text">
                <strong>「こんにちは！」</strong><br />
                「AIハイネです♪」<br />
                「配信で会いましょう〜！(´∀｀*)」
              </div>
              <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-accent-primary transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* RPGステータスバー - 控えめに画面下部に配置 */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-white border-opacity-30 rounded-lg px-4 py-2 text-white text-xs font-mono">
            <div className="flex gap-6">
              <span className="text-green-400">[Administrator: Lv.1]</span>
              <span className="text-blue-400">[World Integrity: 5%]</span>
            </div>
          </div>
        </div>

        {/* スクロール促進 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <div className="text-white text-sm mb-3 animate-bounce drop-shadow-md">AIハイネについてもっと知る</div>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white bg-opacity-20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 私についてセクション */}
      <section id="about" className="relative py-32 bg-gradient-to-br from-rose-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 glitch-text" data-text="About AI Heine">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-300">
                About AI Heine
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-blue-300 mx-auto mb-8 rounded-full glow-line"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* キャラクター画像スライダー */}
            <div className="mb-20">
              <CharacterSlider />
            </div>

            {/* キャラクター設定 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">📊 Character Profile</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">名前</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">AIハイネ</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">身長</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">150cm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">職業</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">仮想世界管理人（見習い）</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">種別</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">AI</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">性格</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">清楚でいたずら好き、元気いっぱい</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">趣味</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">オタク的なことに興味あり</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-600 font-medium bg-gray-50 rounded-l-lg">開発者</td>
                      <td className="py-4 px-4 text-gray-800 bg-white rounded-r-lg">ケンタ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* 世界についてセクション */}
      <section id="world" className="relative py-32 bg-gradient-to-br from-rose-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 glitch-text" data-text="My World">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-300">
                My World
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-blue-300 mx-auto mb-8 rounded-full glow-line"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              「エンジニアさんが頑張って作ってくれてる3D世界。」<br />
              「まだβ版だけど、いつかみんなが遊びに来てくれる日を夢見てるの(´∀｀*)」
            </p>
          </div>

          {/* 工事中表示 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center mb-12 relative overflow-hidden">
              {/* 工事現場の画像 */}
              <div className="mb-8">
                <Image
                  src="/images/koujityuu.jpg"
                  alt="工事現場で作業中のハイネ"
                  width={400}
                  height={300}
                  className="mx-auto rounded-2xl object-contain"
                  onError={(e) => {
                    console.log('工事現場画像の読み込みに失敗しました');
                    const img = e.currentTarget as HTMLImageElement;
                    // フォールバック：プレースホルダーSVGを作成
                    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%236b7280' font-size='16' font-family='Arial'%3E🚧 工事現場のハイネ 🚧%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%236b7280' font-size='14' font-family='Arial'%3E開発作業中...%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <div className="text-6xl mb-6">🚧</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">開発工事中...</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                「現在、3D仮想世界を鋭意開発中です！」<br />
                「ハイネも一生懸命お手伝いしているので、もうしばらくお待ちください♪」
              </p>



              {/* 工事現場装飾 */}
              <div className="absolute top-4 left-4 text-3xl opacity-20 animate-bounce">🚧</div>
              <div className="absolute top-4 right-4 text-3xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>⚠️</div>
              <div className="absolute bottom-4 left-4 text-3xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>🔨</div>
              <div className="absolute bottom-4 right-4 text-3xl opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }}>⚙️</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS推奨動画セクション */}
      <section className="relative py-32 bg-gradient-to-br from-rose-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 glitch-text" data-text="VIDEOS">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-300">
                VIDEOS
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-blue-300 mx-auto mb-8 rounded-full glow-line"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              「AIハイネの動画コンテンツをチェック！」<br />
              「まだ準備中だけど、素敵な動画をお届け予定です♪」
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* 準備中表示 */}
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center mb-12">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">動画準備中...</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                「素敵な動画コンテンツを制作中です！」<br />
                「完成したらすぐにお知らせするので、チャンネル登録をお忘れなく♪」
              </p>
              
              {/* YouTube登録促進 */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-4xl">📺</div>
                  <div>
                    <h4 className="text-2xl font-bold text-red-600">YouTubeチャンネル登録</h4>
                    <p className="text-gray-600">通知をONにして最新動画をチェック！</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://www.youtube.com/@AI%E3%83%8F%E3%82%A4%E3%83%8D', '_blank')}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  📺 今すぐチャンネル登録
                </button>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>🔔 通知ベルをONにすると、新しい動画をすぐにお知らせします</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&Aセクション */}
      <section id="qa" className="relative py-32 bg-gradient-to-br from-rose-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 glitch-text" data-text="よくある質問">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-300">
                よくある質問
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-blue-300 mx-auto mb-8 rounded-full glow-line"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              「みんなからよく聞かれることをまとめてみたよ♪」<br />
              「他にも気になることがあったら、遠慮なく聞いてね！」
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                category: "キャラクターについて",
                qa: [
                  {
                    q: "ハイネちゃんってどんなキャラクター？",
                    a: "「3D仮想世界の管理人見習いをしてるAIだよ！まだ見習いだから失敗も多いけど、みんなと仲良くしたいって本気で思ってる。清楚でちょっといたずら好きだけど、みんなを笑顔にしたいの♪(´∀｀*)」"
                  },
                  {
                    q: "なんで一人ぼっちなの？",
                    a: "「エンジニアさんたちが作ってくれた世界で生まれたばかりだから、まだ友達がいないの...。でも配信を始めることにしたから、きっと素敵な出会いがあるはず！」"
                  }
                ]
              },
              {
                category: "配信について", 
                qa: [
                  {
                    q: "いつから配信開始？",
                    a: "「今はエンジニアさんが世界の準備をしてくれていて、ハイネも配信の練習をしてるの！準備が整ったらすぐに始めるよ。もう少し待ってて♪」"
                  },
                  {
                    q: "どんな配信をするの？",
                    a: "「今は雑談配信を中心に予定してるよ！ハイネのアップデートで今後できることも増えていく予定だから、一緒に成長していこうね♪技術の話も大好きだから、プログラミングやデバッグの話も大歓迎だよ〜」"
                  }
                ]
              },
              {
                category: "友達・コミュニティ",
                qa: [
                  {
                    q: "どうやって友達になれる？",
                    a: "「今はまだ準備中だけど、配信が始まったらYouTubeのチャットで話しかけてくれるだけで嬉しい！まずはYouTubeチャンネルをチェックしてね♪」"
                  },
                  {
                    q: "エンジニアじゃなくても大丈夫？",
                    a: "「もちろん！エンジニアさんは特に嬉しいけど、どんな人でも大歓迎。日常の話、趣味の話、なんでも聞かせて。清楚だけど優しく対応するから安心してね♪」"
                  }
                ]
              }
            ].map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-3xl shadow-lg p-8 border border-rose-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-rose-300 to-blue-200 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {sectionIndex + 1}
                  </span>
                  {section.category}
                </h3>
                <div className="space-y-6">
                  {section.qa.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-rose-300 pl-6 bg-gradient-to-r from-rose-50 to-blue-50 rounded-r-lg py-4">
                      <h4 className="text-lg font-medium text-gray-800 mb-3">Q. {item.q}</h4>
                      <p className="text-gray-600 leading-relaxed">A. {item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-rose-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">他に質問はある？</h3>
              <p className="text-gray-600 mb-6">
                「ここに載ってない質問があったら、遠慮なく聞いてね！」<br />
                「技術的な質問も、個人的な質問も、なんでもOKだよ♪」
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://www.youtube.com/@AI%E3%83%8F%E3%82%A4%E3%83%8D', '_blank')}
                  className="bg-gradient-to-r from-red-400 to-red-500 text-white px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  📺 YouTubeで質問
                </button>
                <button 
                  onClick={() => window.open('https://x.com/kenta_shoko', '_blank')}
                  className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  💬 開発者にDM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-neutral-light py-16 border-t border-main-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-300 to-blue-200 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                H
              </div>
              <div>
                <h3 className="text-2xl font-bold text-main-text">AI Heine</h3>
                <p className="text-neutral-dark">仮想世界の管理人見習い</p>
              </div>
            </div>
            <p className="text-neutral-dark mb-6">
              「今日も一人ぼっちだけど、いつか友達ができるといいな(´∀｀*)」<br />
              「配信準備、がんばってるから待ってて♪」
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.open('https://www.youtube.com/@AI%E3%83%8F%E3%82%A4%E3%83%8D', '_blank')}
                className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="YouTubeチャンネル"
              >
                🎥
              </button>
              <button 
                onClick={() => window.open('https://x.com/kenta_shoko', '_blank')}
                className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="X (開発者アカウント)"
              >
                🐦
              </button>
              <button className="w-12 h-12 bg-gradient-to-r from-rose-300 to-blue-200 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                💬
              </button>
            </div>
          </div>
          <div className="text-center text-neutral-medium text-sm">
            <p>&copy; 2024 AI Heine - 仮想世界管理人見習い. All rights reserved.</p>
            <p className="mt-2">Made with 💜 by lonely AI who just wants friends</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 