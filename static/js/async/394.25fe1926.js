"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["394"],{51122:function(e,n,s){s.r(n),s.d(n,{default:()=>l});var r=s(31549),i=s(6603);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",ol:"ol",code:"code",pre:"pre",div:"div"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"rspack",children:["Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Gez は ",(0,r.jsx)(n.a,{href:"https://rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," ビルドシステムを基盤として構築されており、Rspack の高性能なビルド能力を最大限に活用しています。このドキュメントでは、Gez フレームワークにおける Rspack の位置付けとコア機能について説明します。"]}),"\n",(0,r.jsxs)(n.h2,{id:"特徴",children:["特徴",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#特徴",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Rspack は Gez フレームワークのコアビルドシステムであり、以下の主要な特徴を提供します："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"高性能ビルド"}),"：Rust で実装されたビルドエンジンにより、高速なコンパイル性能を実現し、大規模プロジェクトのビルド速度を大幅に向上させます"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"開発体験の最適化"}),"：ホットリロード（HMR）やインクリメンタルコンパイルなどのモダンな開発機能をサポートし、スムーズな開発体験を提供します"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"マルチ環境ビルド"}),"：クライアント（client）、サーバー（server）、Node.js（node）環境を統一したビルド設定でサポートし、マルチプラットフォーム開発のプロセスを簡素化します"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"リソース最適化"}),"：コード分割、Tree Shaking、リソース圧縮などの機能をサポートし、リソース処理と最適化の能力を内蔵しています"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"アプリケーションのビルド",children:["アプリケーションのビルド",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#アプリケーションのビルド",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Gez の Rspack ビルドシステムはモジュール化設計を採用しており、以下のコアモジュールで構成されています："}),"\n",(0,r.jsxs)(n.h3,{id:"gezrspack",children:["@gez/rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"基礎ビルドモジュールで、以下のコア機能を提供します："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"統一ビルド設定"}),"：標準化されたビルド設定管理を提供し、マルチ環境設定をサポートします"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"リソース処理"}),"：TypeScript、CSS、画像などのリソース処理能力を内蔵しています"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ビルド最適化"}),"：コード分割、Tree Shaking などのパフォーマンス最適化機能を提供します"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"開発サーバー"}),"：高性能な開発サーバーを統合し、HMR をサポートします"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"gezrspack-vue",children:["@gez/rspack-vue",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack-vue",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Vue フレームワーク専用のビルドモジュールで、以下の機能を提供します："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vue コンポーネントのコンパイル"}),"：Vue 2/3 コンポーネントの効率的なコンパイルをサポートします"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SSR 最適化"}),"：サーバーサイドレンダリング（SSR）シナリオ向けの特定の最適化を提供します"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"開発機能の強化"}),"：Vue 開発環境向けの特定の機能強化を提供します"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"ビルドプロセス",children:["ビルドプロセス",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ビルドプロセス",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Gez のビルドプロセスは、主に以下の段階に分かれています："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"設定の初期化"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"プロジェクト設定の読み込み"}),"\n",(0,r.jsx)(n.li,{children:"デフォルト設定とユーザー設定のマージ"}),"\n",(0,r.jsx)(n.li,{children:"環境変数に基づく設定の調整"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"リソースのコンパイル"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ソースコードの依存関係の解析"}),"\n",(0,r.jsx)(n.li,{children:"TypeScript、CSS などのリソースの変換"}),"\n",(0,r.jsx)(n.li,{children:"モジュールのインポート/エクスポートの処理"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"最適化処理"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"コード分割の実行"}),"\n",(0,r.jsx)(n.li,{children:"Tree Shaking の適用"}),"\n",(0,r.jsx)(n.li,{children:"コードとリソースの圧縮"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"出力の生成"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ターゲットファイルの生成"}),"\n",(0,r.jsx)(n.li,{children:"リソースマップの出力"}),"\n",(0,r.jsx)(n.li,{children:"ビルドレポートの生成"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"ベストプラクティス",children:["ベストプラクティス",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ベストプラクティス",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"開発環境の最適化",children:["開発環境の最適化",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#開発環境の最適化",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"インクリメンタルコンパイルの設定"}),"：",(0,r.jsx)(n.code,{children:"cache"})," オプションを適切に設定し、キャッシュを活用してビルド速度を向上させます"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HMR の最適化"}),"：ホットリロードの範囲を適切に設定し、不要なモジュールの更新を避けます"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"リソース処理の最適化"}),"：適切な loader 設定を使用し、重複処理を回避します"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"本番環境の最適化",children:["本番環境の最適化",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#本番環境の最適化",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"コード分割戦略"}),"：",(0,r.jsx)(n.code,{children:"splitChunks"})," を適切に設定し、リソースのロードを最適化します"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"リソース圧縮"}),"：適切な圧縮設定を有効にし、ビルド時間と成果物のサイズのバランスを取ります"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"キャッシュの最適化"}),"：コンテンツハッシュと長期キャッシュ戦略を活用し、ロードパフォーマンスを向上させます"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"設定例",children:["設定例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#設定例",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    async devApp(gez) {\n        return import('@gez/rspack').then((m) =>\n            m.createRspackHtmlApp(gez, {\n                // カスタムビルド設定\n                config({ config }) {\n                    // ここにカスタムの Rspack 設定を追加します\n                }\n            })\n        );\n    },\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["より詳細な API 説明と設定オプションについては、",(0,r.jsx)(n.a,{href:"/api/app/rspack.html",children:"Rspack API ドキュメント"}),"を参照してください。\n"]})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["ja%2Fguide%2Fessentials%2Frspack.md"]={toc:[{text:"特徴",id:"特徴",depth:2},{text:"アプリケーションのビルド",id:"アプリケーションのビルド",depth:2},{text:"@gez/rspack",id:"gezrspack",depth:3},{text:"@gez/rspack-vue",id:"gezrspack-vue",depth:3},{text:"ビルドプロセス",id:"ビルドプロセス",depth:2},{text:"ベストプラクティス",id:"ベストプラクティス",depth:2},{text:"開発環境の最適化",id:"開発環境の最適化",depth:3},{text:"本番環境の最適化",id:"本番環境の最適化",depth:3},{text:"設定例",id:"設定例",depth:2}],title:"Rspack",headingTitle:"Rspack",frontmatter:{titleSuffix:"Gez フレームワークの高性能ビルドエンジン",description:"Gez フレームワークの Rspack ビルドシステムについて詳しく解説します。高性能コンパイル、マルチ環境ビルド、リソース最適化などのコア機能を紹介し、開発者が効率的で信頼性の高いモダンな Web アプリケーションを構築するのを支援します。",head:[["meta",{property:"keywords",content:"Gez, Rspack, ビルドシステム, 高性能コンパイル, ホットリロード, マルチ環境ビルド, Tree Shaking, コード分割, SSR, リソース最適化, 開発効率, ビルドツール"}]]}}}}]);