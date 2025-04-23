# Management System

フルスタックの管理システムプロジェクト。Django（バックエンド）、React（フロントエンド）、MySQL（データベース）を使用しています。

## 技術スタック

- **バックエンド**: Django 5.2
- **フロントエンド**: React 19.1
- **データベース**: MySQL 8.0
- **コンテナ化**: Docker & Docker Compose

## 開発環境のセットアップ

### 前提条件

- Docker と Docker Compose がインストールされていること

### 起動方法

1. リポジトリをクローンする
```bash
git clone <your-repo-url>
cd management_system
```

2. コンテナを起動する
```bash
docker-compose up
```

3. ブラウザでアクセスする
   - フロントエンド: http://localhost:4000
   - バックエンド API: http://localhost:8000
   - 管理画面: http://localhost:8000/admin

## 機能

- ユーザー管理
- データ分析ダッシュボード
- リソース管理

## 貢献方法

1. このリポジトリをフォークする
2. 機能ブランチを作成する (`git checkout -b feature/amazing-feature`)
3. 変更をコミットする (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュする (`git push origin feature/amazing-feature`)
5. プルリクエストを作成する

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。 