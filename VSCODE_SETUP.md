# VSCode Tailwind CSS エラー解決ガイド

## 問題の説明
VSCodeで `@tailwind` や `@apply` ディレクティブが「Unknown at rule」エラーとして表示される問題を解決します。

## 解決方法

### 1. 必要な拡張機能をインストール
以下の拡張機能がインストールされていることを確認してください：

- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **PostCSS Language Support** (`csstools.postcss`)

### 2. プロジェクト設定ファイル
以下のファイルが自動的に作成されます：

#### `.vscode/settings.json`
- CSS検証の無効化
- Tailwind CSS IntelliSenseの設定
- ファイル関連付けの設定

#### `.vscode/css_custom_data.json`
- Tailwind CSSアットルールの定義
- エディタでの認識を改善

#### `.vscode/extensions.json`
- 推奨拡張機能のリスト

#### `.postcssrc.json`
- PostCSS Language Support用の設定

#### `.stylelintrc.json`
- Stylelintでのエラーを防ぐ設定

## 効果
これらの設定により：

✅ `@tailwind` エラーが解消されます
✅ `@apply` エラーが解消されます
✅ Tailwind CSSのオートコンプリートが機能します
✅ プロジェクトの動作に影響はありません

## 注意事項
- エディタを再起動する必要がある場合があります
- 設定変更後、リンターエラーが消えるまで少し時間がかかる場合があります
- これらの設定はVSCode専用です（他のエディタでは別の対応が必要）

## トラブルシューティング
エラーが残る場合、以下を順番に試してください：

### 🔄 基本的な再読み込み
1. **VSCodeを完全に再起動**
2. `Ctrl+Shift+P` → **"Developer: Reload Window"** を実行
3. `Ctrl+Shift+P` → **"TypeScript: Restart TS Server"** を実行

### 🔧 拡張機能の確認
4. **Tailwind CSS IntelliSense** 拡張機能を確認：
   - 無効化 → 有効化
   - アンインストール → 再インストール
5. **PostCSS Language Support** (`csstools.postcss`) をインストール

### 📁 ワークスペース設定
6. **`.code-workspace`ファイルでプロジェクトを開き直す**：
   - `ファイル` → `ワークスペースを開く`
   - `aituber-lp.code-workspace` を選択

### 🔍 手動確認
7. **設定の手動確認**：
   - `Ctrl+,` → 設定を開く
   - `css.validate` で検索 → **OFF**に設定
   - `css.lint.unknownAtRules` で検索 → **ignore**に設定

### 🆘 最終手段
8. **キャッシュクリア**：
   ```bash
   npm run build
   rm -rf .next
   npm install
   ```

## プロジェクトの動作確認
開発サーバーを起動して正常動作を確認：

```bash
npm run dev
```

ブラウザで http://localhost:3000 にアクセスして、スタイルが正常に適用されていることを確認してください。 