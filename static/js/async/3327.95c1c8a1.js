"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3327"],{97902:function(n,e,r){r.r(e),r.d(e,{default:()=>c});var s=r(31549),i=r(6603);function l(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",ul:"ul",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"渲染上下文",children:["渲染上下文",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#渲染上下文",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"RenderContext 是 Gez 框架中的一個核心類別，主要負責服務端渲染（SSR）過程中的資源管理和 HTML 生成。它具有以下核心特點："}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"基於 ESM 的模組系統"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"採用現代的 ECMAScript Modules 標準"}),"\n",(0,s.jsx)(e.li,{children:"支援原生的模組導入導出"}),"\n",(0,s.jsx)(e.li,{children:"實現了更好的程式碼分割和按需加載"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"智慧依賴收集"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"基於實際渲染路徑動態收集依賴"}),"\n",(0,s.jsx)(e.li,{children:"避免不必要的資源加載"}),"\n",(0,s.jsx)(e.li,{children:"支援非同步元件和動態導入"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"精確的資源注入"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"嚴格控制資源加載順序"}),"\n",(0,s.jsx)(e.li,{children:"優化首屏加載效能"}),"\n",(0,s.jsx)(e.li,{children:"確保客戶端激活（Hydration）的可靠性"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"靈活的配置機制"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"支援動態基礎路徑配置"}),"\n",(0,s.jsx)(e.li,{children:"提供多種導入映射模式"}),"\n",(0,s.jsx)(e.li,{children:"適應不同的部署場景"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"使用方式",children:["使用方式",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用方式",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["在 Gez 框架中，開發者通常不需要直接建立 RenderContext 實例，而是透過 ",(0,s.jsx)(e.code,{children:"gez.render()"})," 方法來取得實例："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"async server(gez) {\n    const server = http.createServer((req, res) => {\n        // 靜態檔案處理\n        gez.middleware(req, res, async () => {\n            // 透過 gez.render() 取得 RenderContext 實例\n            const rc = await gez.render({\n                params: {\n                    url: req.url\n                }\n            });\n            // 回應 HTML 內容\n            res.end(rc.html);\n        });\n    });\n}\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"主要功能",children:["主要功能",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#主要功能",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"依賴收集",children:["依賴收集",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#依賴收集",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"RenderContext 實現了一套智慧的依賴收集機制，它基於實際渲染的元件來動態收集依賴，而不是簡單地預加載所有可能用到的資源："}),"\n",(0,s.jsxs)(e.h4,{id:"按需收集",children:["按需收集",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#按需收集",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"在元件實際渲染過程中自動追蹤和記錄模組依賴"}),"\n",(0,s.jsx)(e.li,{children:"只收集當前頁面渲染時真正使用到的 CSS、JavaScript 等資源"}),"\n",(0,s.jsxs)(e.li,{children:["透過 ",(0,s.jsx)(e.code,{children:"importMetaSet"})," 精確記錄每個元件的模組依賴關係"]}),"\n",(0,s.jsx)(e.li,{children:"支援非同步元件和動態導入的依賴收集"}),"\n"]}),"\n",(0,s.jsxs)(e.h4,{id:"自動化處理",children:["自動化處理",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自動化處理",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"開發者無需手動管理依賴收集過程"}),"\n",(0,s.jsx)(e.li,{children:"框架自動在元件渲染時收集依賴資訊"}),"\n",(0,s.jsxs)(e.li,{children:["透過 ",(0,s.jsx)(e.code,{children:"commit()"})," 方法統一處理所有收集到的資源"]}),"\n",(0,s.jsx)(e.li,{children:"自動處理循環依賴和重複依賴的問題"}),"\n"]}),"\n",(0,s.jsxs)(e.h4,{id:"效能優化",children:["效能優化",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#效能優化",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"避免加載未使用的模組，顯著減少首屏加載時間"}),"\n",(0,s.jsx)(e.li,{children:"精確控制資源加載順序，優化頁面渲染效能"}),"\n",(0,s.jsx)(e.li,{children:"自動生成最優的導入映射（Import Map）"}),"\n",(0,s.jsx)(e.li,{children:"支援資源預加載和按需加載策略"}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"資源注入",children:["資源注入",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#資源注入",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"RenderContext 提供了多種方法來注入不同類型的資源，每個方法都經過精心設計以優化資源加載效能："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"preload()"}),"：預加載 CSS 和 JS 資源，支援優先級配置"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"css()"}),"：注入首屏樣式表，支援關鍵 CSS 提取"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"importmap()"}),"：注入模組導入映射，支援動態路徑解析"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"moduleEntry()"}),"：注入客戶端入口模組，支援多入口配置"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"modulePreload()"}),"：預加載模組依賴，支援按需加載策略"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"資源注入順序",children:["資源注入順序",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#資源注入順序",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"RenderContext 嚴格控制資源注入順序，這種順序設計是基於瀏覽器的工作原理和效能優化考慮："}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"head 部分："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"preload()"}),"：預加載 CSS 和 JS 資源，讓瀏覽器盡早發現並開始加載這些資源"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"css()"}),"：注入首屏樣式表，確保頁面樣式在內容渲染時就位"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"body 部分："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"importmap()"}),"：注入模組導入映射，定義 ESM 模組的路徑解析規則"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"moduleEntry()"}),"：注入客戶端入口模組，必須在 importmap 之後執行"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"modulePreload()"}),"：預加載模組依賴，必須在 importmap 之後執行"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"完整渲染流程",children:["完整渲染流程",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#完整渲染流程",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"一個典型的 RenderContext 使用流程如下："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"export default async (rc: RenderContext) => {\n    // 1. 渲染頁面內容並收集依賴\n    const app = createApp();\n    const html = await renderToString(app, {\n       importMetaSet: rc.importMetaSet\n    });\n\n    // 2. 提交依賴收集\n    await rc.commit();\n    \n    // 3. 生成完整 HTML\n    rc.html = `\n        <!DOCTYPE html>\n        <html>\n        <head>\n            ${rc.preload()}\n            ${rc.css()}\n        </head>\n        <body>\n            ${html}\n            ${rc.importmap()}\n            ${rc.moduleEntry()}\n            ${rc.modulePreload()}\n        </body>\n        </html>\n    `;\n};\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"進階特性",children:["進階特性",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#進階特性",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"基礎路徑配置",children:["基礎路徑配置",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#基礎路徑配置",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"RenderContext 提供了一個靈活的動態基礎路徑配置機制，支援在執行時動態設定靜態資源的基礎路徑："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    base: '/gez',  // 設定基礎路徑\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:"這種機制特別適用於以下場景："}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"多語言站點部署"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"主域名.com      → 預設語言\n主域名.com/cn/  → 中文站點\n主域名.com/en/  → 英文站點\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"微前端應用"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"支援子應用在不同路徑下靈活部署"}),"\n",(0,s.jsx)(e.li,{children:"便於整合到不同的主應用中"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"導入映射模式",children:["導入映射模式",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#導入映射模式",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"RenderContext 提供了兩種導入映射（Import Map）模式："}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Inline 模式"}),"（預設）"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"將導入映射直接內嵌到 HTML 中"}),"\n",(0,s.jsx)(e.li,{children:"適合小型應用，減少額外的網路請求"}),"\n",(0,s.jsx)(e.li,{children:"頁面加載時立即可用"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"JS 模式"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"透過外部 JavaScript 檔案加載導入映射"}),"\n",(0,s.jsx)(e.li,{children:"適合大型應用，可以利用瀏覽器快取機制"}),"\n",(0,s.jsx)(e.li,{children:"支援動態更新映射內容"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"可以透過配置選擇合適的模式："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    importmapMode: 'js',  // 'inline' | 'js'\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"入口函數配置",children:["入口函數配置",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#入口函數配置",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["RenderContext 支援透過 ",(0,s.jsx)(e.code,{children:"entryName"})," 配置來指定服務端渲染的入口函數："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    entryName: 'mobile',  // 指定使用行動端入口函數\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:"這種機制特別適用於以下場景："}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"多模板渲染"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"// 行動端入口函數\nexport const mobile = async (rc: RenderContext) => {\n    // 行動端特定的渲染邏輯\n};\n\n// 桌面端入口函數\nexport const desktop = async (rc: RenderContext) => {\n    // 桌面端特定的渲染邏輯\n};\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"A/B 測試"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"支援同一頁面使用不同的渲染邏輯"}),"\n",(0,s.jsx)(e.li,{children:"便於進行使用者體驗實驗"}),"\n",(0,s.jsx)(e.li,{children:"靈活切換不同的渲染策略"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"特殊渲染需求"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"支援某些頁面使用自訂的渲染流程"}),"\n",(0,s.jsx)(e.li,{children:"適應不同場景的效能優化需求"}),"\n",(0,s.jsx)(e.li,{children:"實現更精細的渲染控制"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"最佳實踐",children:["最佳實踐",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#最佳實踐",children:"#"})]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"取得 RenderContext 實例"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["始終透過 ",(0,s.jsx)(e.code,{children:"gez.render()"})," 方法取得實例"]}),"\n",(0,s.jsx)(e.li,{children:"根據需要傳入適當的參數"}),"\n",(0,s.jsx)(e.li,{children:"避免手動建立實例"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"依賴收集"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["確保所有模組都正確呼叫 ",(0,s.jsx)(e.code,{children:"importMetaSet.add(import.meta)"})]}),"\n",(0,s.jsxs)(e.li,{children:["在渲染完成後立即呼叫 ",(0,s.jsx)(e.code,{children:"commit()"})," 方法"]}),"\n",(0,s.jsx)(e.li,{children:"合理使用非同步元件和動態導入優化首屏加載"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"資源注入"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"嚴格遵循資源注入順序"}),"\n",(0,s.jsx)(e.li,{children:"不要在 body 中注入 CSS"}),"\n",(0,s.jsx)(e.li,{children:"確保 importmap 在 moduleEntry 之前"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"效能優化"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"使用 preload 預加載關鍵資源"}),"\n",(0,s.jsx)(e.li,{children:"合理使用 modulePreload 優化模組加載"}),"\n",(0,s.jsx)(e.li,{children:"避免不必要的資源加載"}),"\n",(0,s.jsx)(e.li,{children:"利用瀏覽器快取機制優化加載效能"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\n"})})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh-TW%2Fguide%2Fessentials%2Frender-context.md"]={toc:[{text:"使用方式",id:"使用方式",depth:2},{text:"主要功能",id:"主要功能",depth:2},{text:"依賴收集",id:"依賴收集",depth:3},{text:"按需收集",id:"按需收集",depth:4},{text:"自動化處理",id:"自動化處理",depth:4},{text:"效能優化",id:"效能優化",depth:4},{text:"資源注入",id:"資源注入",depth:3},{text:"資源注入順序",id:"資源注入順序",depth:3},{text:"完整渲染流程",id:"完整渲染流程",depth:2},{text:"進階特性",id:"進階特性",depth:2},{text:"基礎路徑配置",id:"基礎路徑配置",depth:3},{text:"導入映射模式",id:"導入映射模式",depth:3},{text:"入口函數配置",id:"入口函數配置",depth:3},{text:"最佳實踐",id:"最佳實踐",depth:2}],title:"渲染上下文",headingTitle:"渲染上下文",frontmatter:{titleSuffix:"Gez 框架服務端渲染核心機制",description:"詳細介紹 Gez 框架的渲染上下文（RenderContext）機制，包括資源管理、HTML 生成和 ESM 模組系統，幫助開發者理解和使用服務端渲染功能。",head:[["meta",{property:"keywords",content:"Gez, 渲染上下文, RenderContext, SSR, 服務端渲染, ESM, 資源管理"}]]}}}}]);