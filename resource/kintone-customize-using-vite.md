Viteを用いたkintoneのカスタマイズ開発における基本的な手順と必要な設定について、以下に包括的に説明します。

#### Viteをバンドルツールとして使うメリット
従来のwebpackなどのバンドルツールと比較して、Viteをkintoneのカスタマイズに用いる主なメリットは、**開発用サーバーの起動速度が高速**であることです。これは、コードの依存関係を事前にバンドルすることにより実現されます。さらに、**ブラウザーへのソースコードの提供がオンデマンド**で行われ、現在の画面で必要なコードのみが処理される仕組みになっています。また、コードを編集した際には、アプリケーションのサイズに関わらず、**ブラウザーへ即座に反映**されることも大きな利点です。Viteは、VueやReactといった主要なフレームワークでも利用されており、設定がシンプルであるという特徴があります。

#### kintoneカスタマイズにViteを利用する基本的な手順

1.  **kintoneアプリの作成と設定**: まず、カスタマイズを適用するkintoneアプリを作成します。チュートリアルでは、kintoneアプリストアから「物品購入申請」アプリを追加し、フォームタブで特定のフィールド（申請番号、日付、購入の目的、備考）を追加・変更しています。
2.  **カスタムプロジェクトの作成**: 以下のコマンドを実行して、JSのカスタムプロジェクトを作成します。
    ```bash
    mkdir vite-kintone-sample
    cd vite-kintone-sample
    npm init -y
    ```
3.  **カスタムコードの作成**: カスタマイズに必要なJavaScriptファイルを`src`ディレクトリ内に作成します。チュートリアルでは、以下の2つのファイルを作成しています:
    *   `src/vite-kintone.js`: メインの処理を記述するファイルで、レコード追加・編集画面での申請番号の編集不可設定、購入目的と備考の文字数制限、保存成功後の申請番号の自動採番処理などが記述されています。
    *   `src/common.js`: 複数のファイルで共通利用する関数（自動採番関数 `autoNum`、文字数制限関数 `charLimit`) を記述したファイルです。
4.  **Viteのインストール**: 以下のコマンドを実行して、Viteをプロジェクトにインストールします。
    ```bash
    npm install -D vite
    ```
5.  **Viteの設定**: プロジェクトのルートディレクトリに`vite.config.js`ファイルを作成し、以下の内容を記述します。この設定ファイルでは、ビルドのエントリーポイント（`src/vite-kintone.js`）、出力形式（`iife`：即時実行関数）、出力先ディレクトリ（`dist`）、生成されるファイル名（`bundle.js`）などを指定します。
    ```javascript
    export default {
      build: {
        rollupOptions: {
          input: 'src/vite-kintone.js', // 「vite-kintone.js」 を起点にビルドする
          output: {
            format: 'iife', // 即時実行関数
            dir: 'dist', // 「dist」ディレクトリの下にビルド後のファイルを生成する
            entryFileNames: 'bundle.js' // 「bundle.js」というファイルが生成される
          }
        }
      },
    };
    ```
    また、`package.json`の`scripts`にビルドコマンドを追加します。
    ```json
    "scripts": {
      "build": "vite build"
    },
    ```
6.  **Viteによるビルド**: 以下のコマンドを実行して、カスタマイズファイルをビルドします。
    ```bash
    npm run build
    ```
    ビルドが成功すると、`dist`フォルダーの下に`bundle.js`というファイルが生成されます。
7.  **カスタムファイルの自動アップロード設定**: `kintone-customize-uploader`を利用することで、ビルドしたファイルをkintoneアプリへ自動でアップロードできます。
    *   まず、以下のコマンドで`kintone-customize-uploader`をインストールします。
        ```bash
        npm install -D @kintone/customize-uploader
        ```
    *   次に、以下のコマンドを実行して設定ファイル`customize-manifest.json`を生成します。プロンプトが表示されたら、カスタマイズを適用するkintoneアプリのアプリIDを入力し、適用範囲を選択します.
        ```bash
        npx kintone-customize-uploader init --dest-dir .
        ```
    *   生成された`customize-manifest.json`ファイルを編集し、Viteでビルドした`dist/bundle.js`をアップロードするように設定します。
        ```json
        {
          "desktop": {
            "js": [
              "dist/bundle.js"
            ],
            "css": []
          }
        }
        ```
    *   `package.json`の`scripts`にアップロードコマンドを追加します。
        ```json
        "scripts": {
          "build": "vite build",
          "upload": "kintone-customize-uploader customize-manifest.json"
        },
        ```
8.  **カスタムファイルのアップロード**: 以下のコマンドを実行して、kintoneへカスタマイズファイルをアップロードします。プロンプトに従い、kintoneのベースURL、ログイン名、パスワードを入力します。
    ```bash
    npm run upload
    ```
9.  **動作確認**: kintoneアプリにアクセスし、カスタマイズが正しく動作するか確認します。チュートリアルでは、文字数制限や申請番号の自動採番機能が期待通りに動作するかを確認しています。

以上の手順により、Viteを用いてkintoneのカスタマイズ開発を行うことができます。Viteの導入により、より高速で効率的な開発ワークフローが期待できます。