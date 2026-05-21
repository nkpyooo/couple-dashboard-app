# couple-dashboard-app

夫婦で日常情報を共有するための、Expo + React Native + TypeScript ベースの iPhone 向けアプリです。

## 1. 前提環境

- **Node.js**: 20 LTS 以上（推奨: 20.19 以上）
- **npm**: 10 以上
- **Expo Go (iOS)**: App Store からインストール
- **Git**: GitHub 運用用

## 2. 初期セットアップ

```bash
npm install
npx expo install --fix
```

> `expo install --fix` は Expo SDK 54 互換の依存関係に揃えるため、初回セットアップで必ず実行してください。

## 3. 開発開始コマンド

```bash
npx expo start
```

補助コマンド:

- `npm run ios`: iOS シミュレーターで起動
- `npm run android`: Android エミュレーターで起動
- `npm run web`: Web 起動
- `npm run typecheck`: TypeScript 型チェック
- `npm run fix:deps`: Expo 互換依存関係を再調整

## 4. iPhone + Expo Go 実機確認

1. `npx expo start` を実行
2. ターミナルの QR コードを iPhone カメラで読み取る
3. Expo Go でプロジェクトを開く
4. ホーム画面に `Couple Dashboard` カードが表示されることを確認

## 5. GitHub 運用方法

1. `main` から作業ブランチを作成
2. 実装後にコミット
3. GitHub で Pull Request を作成
4. PR には以下を記載
   - 変更内容
   - 実行したコマンド
   - 確認結果（Expo Go / 型チェック）

> ルール: **main へ直接 push しない**

## 6. ディレクトリ構成

- `app/`: Expo Router の画面ルーティング（app directory）
- `docs/`: 要件、ロードマップ、UI ガイドライン

## 7. トラブルシューティング

### Q1. `npm install` が失敗する

- 社内ネットワークやプロキシで npm registry が制限されていないか確認
- 別ネットワーク（テザリング等）で再実行
- `npm config get registry` が `https://registry.npmjs.org/` か確認

### Q2. Expo の依存関係警告が出る

```bash
npx expo install --fix
```

を再実行し、SDK 54 推奨バージョンに揃えてください。

### Q3. Expo Go で開けない

- iPhone と開発 PC が同じ Wi-Fi か確認
- `npx expo start --tunnel` で再起動して接続を試す



## 8. 現在のMVP進捗（Phase 2）

- 買い物リスト機能（ローカル保存）
  - 追加
  - チェックON/OFF
  - 削除
- データ保存: `AsyncStorage`（アプリ再起動後も保持）
