/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー：ホワイトベース（少しグレーがかった）
        'main': {
          'bg': '#fafafa',          // メインの背景色
          'surface': '#ffffff',      // カード等の表面
          'border': '#e5e7eb',      // ボーダー
          'text': '#111827',        // メインテキスト
        },
        
        // アクセントカラー（3色限定の原則）
        'accent': {
          'primary': '#8b5cf6',     // 紫 - ハイネのアイデンティティ
          'secondary': '#f97316',   // オレンジ - 開発中・工事現場感
          'action': '#3b82f6',      // ブルー - エンジニア・技術感
        },
        
        // グレースケール（ホワイトベース用）
        'neutral': {
          'lightest': '#ffffff',
          'lighter': '#f9fafb',
          'light': '#f3f4f6',
          'medium': '#d1d5db',
          'dark': '#6b7280',
          'darker': '#374151',
          'darkest': '#111827',
        },
        
        // 機能的カラー
        'status': {
          'development': '#f59e0b',  // 開発中ステータス
          'recruiting': '#10b981',   // 友達募集中
          'beta': '#8b5cf6',         // β版
          'error': '#ef4444',        // エラー・バグ
        },
        
        // エンジニア向けカラー
        'engineer': {
          'terminal': '#1f2937',     // ターミナル風
          'code': '#059669',         // コード風
          'comment': '#6b7280',      // コメント風
          'string': '#3b82f6',       // 文字列風
        },
        
        // 2ch・ネット文化カラー
        'chan': {
          'board': '#f3f4f6',        // 板風背景
          'name': '#10b981',         // 名前欄
          'trip': '#8b5cf6',         // トリップ
          'sage': '#ef4444',         // sage
        }
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'white-gradient': 'linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f9fafb 100%)',
        'accent-gradient': 'linear-gradient(135deg, #8b5cf6, #f97316, #3b82f6)',
        'dev-gradient': 'linear-gradient(135deg, #f97316 0%, #f59e0b 50%, #eab308 100%)',
        'engineer-gradient': 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
      },
      
      fontFamily: {
        'main': ['Inter', 'Hiragino Sans', 'ヒラギノ角ゴシック', 'Yu Gothic Medium', 'Meiryo', 'sans-serif'],
        'code': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      
      animation: {
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite alternate',
        'glow-warm': 'glow-warm 3s ease-in-out infinite alternate',
        'code-typing': 'code-typing 4s steps(40) infinite',
        'dev-progress': 'dev-progress 8s linear infinite',
        'particle-float': 'particle-float 12s linear infinite',
      },
      
      keyframes: {
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          'from': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
          'to': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' },
        },
        'glow-warm': {
          'from': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
          'to': { boxShadow: '0 0 35px rgba(249, 115, 22, 0.6)' },
        },
        'code-typing': {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        'dev-progress': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
      },
      
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'accent': '0 4px 16px rgba(139, 92, 246, 0.15)',
        'dev': '0 4px 16px rgba(249, 115, 22, 0.15)',
        'engineer': '0 4px 16px rgba(59, 130, 246, 0.15)',
        'inner-soft': 'inset 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
} 