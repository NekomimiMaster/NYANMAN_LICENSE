# NYANMAN LICENSE — 利用規約サイト

3Dモデル「NYANMAN」の利用規約ページ（VN3ライセンス Ver.1.10 準拠・5言語対応）。
ビルド不要の静的サイトで、`index.html` をブラウザで開くだけで動作します。GitHub Pages でそのまま公開できます。

## 機能

- **5言語対応**: 日本語（正文）／ English ／ 한국어 ／ 简体中文 ／ 繁體中文。ヘッダーの国旗ボタンで切替（localStorage に保存・`?lang=en` でも指定可）
- **規約内検索**: 検索語を含むブロックだけを表示し、一致箇所を黄色マーカーで強調。ひらがな⇄カタカナ・全角半角・大文字小文字を吸収
- **利用条件早見表**: A〜X の可否をピクトグラム＋ステータスバッジで一覧表示。各項目から規約本文へリンク
- **Q&A**: アコーディオン形式・16問。各回答に根拠条文へのリンク付き
- **ライト／ダークテーマ**: 自動（OS設定）＋手動切替（`?theme=dark` でも指定可）
- **レスポンシブ**: モバイル〜デスクトップ対応・印刷スタイル付き

## ファイル構成

```
NYANMAN_LICENSE/
├── index.html          … ページの骨組み＋SVGスプライト（ピクトグラム・国旗）
├── css/style.css       … デザイン一式（冒頭の :root / [data-theme="dark"] が配色トークン）
├── js/
│   ├── app.js          … 描画・言語切替・検索・テーマ（コンテンツは持たない）
│   └── i18n/
│       ├── ja.js       … ★規約の正文データ（これが原本）
│       ├── en.js       … 英語（参考訳）
│       ├── ko.js       … 韓国語（参考訳）
│       ├── zh-cn.js    … 简体中文（参考訳）
│       └── zh-tw.js    … 繁體中文（参考訳）
├── assets/             … ロゴ（透過トリム済み）・favicon
└── README.md
```

## 規約内容の更新方法

1. **`js/i18n/ja.js` を編集**する（日本語が正文。全構造のマスター）
2. 同じ箇所を `en.js` / `ko.js` / `zh-cn.js` / `zh-tw.js` でも翻訳して更新する
   - **キー・配列の並び・`id`・`status` は5ファイルで完全一致**させること（文章だけ翻訳する）
3. バージョンを上げる場合は、各言語ファイルの次の4箇所を更新:
   - `hero.badges` の「規約バージョン」「制定日」
   - `conds.sections` 内 `cond-version` の本文
   - `info.history` に行を追加（改定履歴）
   - `footer.lines` の Ver 表記

可否ステータスの値: `ok`(許可) / `ng`(不許可) / `cond`(条件付き許可) / `ask`(個別に問い合わせ) / `opt`(任意) / `note`(特記事項)

`id`（`item-A` や `qa-3` など）はページ内リンクのアンカーとして全言語共通なので**変更しない**こと。

## 言語を追加する方法

1. `js/i18n/ja.js` をコピーして新言語ファイルを作り、文章を翻訳する
   （`meta.label`=ボタン表示名、`meta.flag`=国旗スプライトID、`meta.htmlLang`、`ui.langNotice`=参考訳バナー文も設定）
2. `index.html` に2つ追加:
   - `<defs>` 内に国旗の `<symbol id="flag-xx" viewBox="0 0 24 16">…</symbol>`
   - 末尾に `<script src="js/i18n/xx.js"></script>`（app.js より前）
3. `js/app.js` 冒頭の `LANG_ORDER` に言語コードを追加

## ローカルでの確認

`index.html` をダブルクリックしてブラウザで開くだけです（サーバー不要）。
確認用URLパラメータ: `?lang=en` `?theme=dark` など。

## GitHub リポジトリと公開

- リポジトリ: https://github.com/NekomimiMaster/NYANMAN_LICENSE
- 公開URL: https://nekomimimaster.github.io/NYANMAN_LICENSE/ （GitHub Pages / main ブランチのルートから配信）
- GitHub Pages は Free プランでは **public リポジトリのみ**利用できます

更新の流れ: ファイルを編集 → commit → `main` へ push（または PR を作成してマージ）→ 数十秒〜数分で自動反映。

## デザイン調整

- 配色は `css/style.css` 冒頭の CSS 変数（`:root`=ライト / `[data-theme="dark"]`=ダーク）を両方編集
- ピクトグラムは `index.html` の `<symbol id="pic-*">`（24×24・stroke ベース）を編集・追加
- フォント: 見出し=Oswald / 本文=Noto Sans JP・KR・SC・TC（Google Fonts。言語ごとに優先フォントを切替）
