# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

### 開発用
- `pnpm check` - Biomeによるリントとフォーマット（自動修正付き）
- `pnpm build` - Viteによるkintoneカスタマイズバンドルのビルド

### パッケージ管理
- パッケージマネージャーは `pnpm` を使用（バージョン10.8.1）
- 依存関係のインストールは `pnpm install`

## アーキテクチャ

これは **kintoneカスタマイズプロジェクト** で、Viteをビルドツールとして使用してkintoneアプリケーション用のJavaScriptバンドルを作成します。

### 主要コンポーネント
- **エントリーポイント**: `src/customize-index.js`（現在は空、メインのカスタマイズコードをここに記述）
- **ビルドツール**: IIFE（即時実行関数）形式で出力するよう設定されたVite
- **出力先**: kintoneデプロイ用に `dist/bundle.js` にビルド
- **コード品質**: リントとフォーマットにBiomeを使用

### ビルド設定
- Viteは `src/customize-index.js` をエントリーポイントとしてビルド
- kintone互換性のためIIFE形式で `dist/bundle.js` に出力
- kintoneのJavaScript環境に最適化された設定

### コードスタイル
- タブインデント使用（biome.jsonc で設定）
- 文字列はダブルクォート
- Biomeがフォーマット、import整理、リントを処理

### 技術スタック
- **pnpm**: パッケージマネージャー
- **Vite**: ビルドツールとバンドラー
- **Biome**: リントとフォーマット
- **対象プラットフォーム**: kintone（サイボウズのビジネスアプリケーションプラットフォーム）

このプロジェクトは `resource/kintone-customize-using-vite.md` に記載されているパターンに従って、モダンなツールを使用したkintoneカスタマイズ開発を行います。