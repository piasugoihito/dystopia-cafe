# Café Lumière

> パールホワイト × ブラッシュピンク × ゴールドを基調とした、没入型カフェウェブサイト。  
> Ethereal Maximalism × Sensory Overload デザイン。

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion** — スクロール演出・3Dホバー・パーティクルアニメーション
- **shadcn/ui** — UI コンポーネント
- **pnpm** — パッケージマネージャー

## Local Setup

```bash
# 1. 依存パッケージをインストール（node_modules は .gitignore 対象のため必須）
pnpm install

# 2. 開発サーバーを起動
pnpm dev
# → http://localhost:3000 でアクセス可能

# 3. TypeScript 型チェック
pnpm exec tsc --noEmit

# 4. プロダクションビルド
pnpm build
```

> **Note:** `node_modules/` は Git 管理外です。クローン後は必ず `pnpm install` を実行してください。  
> `@types/node` と `vite/client` の型定義はインストール後に自動で解決されます。

## Project Structure

```
client/
  src/
    pages/         ← ページコンポーネント (Home.tsx)
    components/    ← セクションコンポーネント群
      Nav.tsx
      HeroSection.tsx        ← 花びらパーティクル + パララックスヒーロー
      ConceptSection.tsx     ← ブランドナラティブ
      MenuSection.tsx        ← 3D ホバーカード
      AtmosphereSection.tsx  ← パララックスギャラリー
      TestimonialsSection.tsx
      AccessSection.tsx
      FooterSection.tsx
    index.css      ← デザイントークン (OKLCH カラー)
```

## Design System

| Token | Value | 用途 |
| :--- | :--- | :--- |
| Pearl White | `oklch(0.98 0.005 60)` | 背景 |
| Blush Pink | `oklch(0.88 0.045 10)` | アクセント |
| Gold | `oklch(0.78 0.09 75)` | 強調・ライン |
| Deep Mauve | `oklch(0.45 0.07 330)` | サブカラー |
| Ink | `oklch(0.18 0.01 60)` | テキスト |

**Fonts:** Cormorant Garamond (display / italic) + Jost (body / light)
