"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7914"],{87077:function(e,n,r){r.r(n),r.d(n,{default:()=>c});var s=r(31549),i=r(6603);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",h4:"h4"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"moduleconfig",children:["ModuleConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#moduleconfig",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"ModuleConfig 提供了 Gez 框架的模組配置功能，用於定義模組的匯入匯出規則、別名配置和外部依賴等。"}),"\n",(0,s.jsxs)(n.h2,{id:"類型定義",children:["類型定義",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#類型定義",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"pathtype",children:["PathType",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pathtype",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"類型定義"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"enum PathType {\n  npm = 'npm:', \n  root = 'root:'\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"模組路徑類型列舉："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm"}),": 表示 node_modules 中的依賴"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": 表示專案根目錄下的檔案"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"moduleconfig-1",children:["ModuleConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#moduleconfig-1",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"類型定義"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModuleConfig {\n  exports?: string[]\n  links?: Record<string, string>\n  imports?: Record<string, string>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"模組配置介面，用於定義服務的匯出、匯入和外部依賴配置。"}),"\n",(0,s.jsxs)(n.h4,{id:"exports",children:["exports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exports",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"匯出配置列表，將服務中的特定程式碼單元（如元件、工具函數等）以 ESM 格式對外暴露。"}),"\n",(0,s.jsx)(n.p,{children:"支援兩種類型："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root:*"}),": 匯出原始碼檔案，如：",(0,s.jsx)(n.code,{children:"root:src/components/button.vue"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm:*"}),": 匯出第三方依賴，如：",(0,s.jsx)(n.code,{children:"npm:vue"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"每個匯出項包含以下屬性："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": 原始匯出路徑，如：",(0,s.jsx)(n.code,{children:"npm:vue"})," 或 ",(0,s.jsx)(n.code,{children:"root:src/components"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": 路徑類型（",(0,s.jsx)(n.code,{children:"npm"})," 或 ",(0,s.jsx)(n.code,{children:"root"}),"）"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"importName"}),": 匯入名稱，格式：",(0,s.jsx)(n.code,{children:"${serviceName}/${type}/${path}"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportName"}),": 匯出路徑，相對於服務根目錄"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportPath"}),": 實際的檔案路徑"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"externalName"}),": 外部依賴名稱，用於其他服務匯入此模組時的識別"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"links",children:["links",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#links",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"服務依賴配置映射，用於配置當前服務依賴的其他服務（本地或遠端）及其本地路徑。每個配置項的鍵為服務名稱，值為該服務在本地的路徑。"}),"\n",(0,s.jsx)(n.p,{children:"安裝方式不同，配置也不同："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"原始碼安裝（Workspace、Git）：需要指向 dist 目錄，因為需要使用建置後的檔案"}),"\n",(0,s.jsx)(n.li,{children:"軟體包安裝（Link、靜態伺服器、私有鏡像源、File）：直接指向套件目錄，因為套件中已包含建置後的檔案"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"imports",children:["imports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#imports",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"外部依賴映射，配置要使用的外部依賴，通常是使用遠端模組中的依賴。"}),"\n",(0,s.jsx)(n.p,{children:"每個依賴項包含以下屬性："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"match"}),": 用於匹配匯入語句的正則表達式"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"import"}),": 實際的模組路徑"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"範例"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n  modules: {\n    // 匯出配置\n    exports: [\n      'root:src/components/button.vue',  // 匯出原始碼檔案\n      'root:src/utils/format.ts',\n      'npm:vue',  // 匯出第三方依賴\n      'npm:vue-router'\n    ],\n\n    // 匯入配置\n    links: {\n      // 原始碼安裝方式：需要指向 dist 目錄\n      'ssr-remote': 'root:./node_modules/ssr-remote/dist',\n      // 軟體包安裝方式：直接指向套件目錄\n      'other-remote': 'root:./node_modules/other-remote'\n    },\n\n    // 外部依賴配置\n    imports: {\n      'vue': 'ssr-remote/npm/vue',\n      'vue-router': 'ssr-remote/npm/vue-router'\n    }\n  }\n} satisfies GezOptions;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"parsedmoduleconfig",children:["ParsedModuleConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parsedmoduleconfig",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"類型定義"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ParsedModuleConfig {\n  name: string\n  root: string\n  exports: {\n    name: string\n    type: PathType\n    importName: string\n    exportName: string\n    exportPath: string\n    externalName: string\n  }[]\n  links: Array<{\n    /**\n     * 軟體包名稱\n     */\n    name: string\n    /**\n     * 軟體包根目錄\n     */\n    root: string\n  }>\n  imports: Record<string, { match: RegExp; import?: string }>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"解析後的模組配置，將原始的模組配置轉換為標準化的內部格式："}),"\n",(0,s.jsxs)(n.h4,{id:"name",children:["name",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"當前服務的名稱"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"用於識別模組和產生匯入路徑"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"root",children:["root",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#root",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"當前服務的根目錄路徑"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"用於解析相對路徑和建置產物的存放"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"exports-1",children:["exports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exports-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"匯出配置列表"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": 原始匯出路徑，如：'npm:vue' 或 'root:src/components'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": 路徑類型（npm 或 root）"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"importName"}),": 匯入名稱，格式：'${serviceName}/${type}/${path}'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportName"}),": 匯出路徑，相對於服務根目錄"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportPath"}),": 實際的檔案路徑"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"externalName"}),": 外部依賴名稱，用於其他服務匯入此模組時的識別"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"links-1",children:["links",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#links-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"匯入配置列表"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": 軟體包名稱"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": 軟體包根目錄"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"imports-1",children:["imports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#imports-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"外部依賴映射"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"將模組的匯入路徑映射到實際的模組位置"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"match"}),": 用於匹配匯入語句的正則表達式"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"import"}),": 實際的模組路徑"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh-TW%2Fapi%2Fcore%2Fmodule-config.md"]={toc:[{text:"類型定義",id:"類型定義",depth:2},{text:"PathType",id:"pathtype",depth:3},{text:"ModuleConfig",id:"moduleconfig-1",depth:3},{text:"exports",id:"exports",depth:4},{text:"links",id:"links",depth:4},{text:"imports",id:"imports",depth:4},{text:"ParsedModuleConfig",id:"parsedmoduleconfig",depth:3},{text:"name",id:"name",depth:4},{text:"root",id:"root",depth:4},{text:"exports",id:"exports-1",depth:4},{text:"links",id:"links-1",depth:4},{text:"imports",id:"imports-1",depth:4}],title:"ModuleConfig",headingTitle:"ModuleConfig",frontmatter:{titleSuffix:"Gez 框架模組配置 API 參考",description:"詳細介紹 Gez 框架的 ModuleConfig 配置介面，包括模組匯入匯出規則、別名配置和外部依賴管理，幫助開發者深入理解框架的模組化系統。",head:[["meta",{property:"keywords",content:"Gez, ModuleConfig, 模組配置, 模組匯入匯出, 外部依賴, 別名配置, 依賴管理, Web 應用框架"}]]}}}}]);