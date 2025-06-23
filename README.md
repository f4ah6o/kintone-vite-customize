# kintone-vite-customize

kintoneカスタマイズ用Viteプロジェクトテンプレート。TypeScriptとJavaScriptの両方をサポートし、並行保守しています。

## ブランチ構成

* **`main`ブランチ**: TypeScript版（推奨）
* **`js`ブランチ**: JavaScript版（レガシー互換）

## 技術スタック

* **pnpm**: パッケージマネージャー
* **vite**: ビルドツールとバンドラー
* **TypeScript**: 型安全な開発（mainブランチのみ）
* **biomejs**: リントとフォーマット

## 追加

* [kintoneカスタマイズの自動テスト（Vitest, Playwright）](https://cybozu.dev/ja/kintone/tips/development/customize/development-know-how/how-to-test/)
* developmentとproductionの分離
   * devではテスト環境に展開、テストする

## 参考

* [kintoneカスタマイズでviteを使う](./resource/kintone-customize-using-vite.md)
