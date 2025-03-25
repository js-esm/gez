"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9629"],{70304:function(e,n,t){t.r(n),t.d(n,{default:()=>c});var r=t(31549),s=t(6603);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"html",children:["HTML",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"本教程将帮助你从零开始搭建一个基于 Gez 的 HTML SSR 应用。我们将通过一个完整的示例来展示如何使用 Gez 框架创建服务端渲染应用。"}),"\n",(0,r.jsxs)(n.h2,{id:"项目结构",children:["项目结构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#项目结构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"首先，让我们了解项目的基本结构："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── package.json         # 项目配置文件，定义依赖和脚本命令\n├── tsconfig.json        # TypeScript 配置文件，设置编译选项\n└── src                  # 源代码目录\n    ├── app.ts           # 主应用组件，定义页面结构和交互逻辑\n    ├── create-app.ts    # 应用实例创建工厂，负责初始化应用\n    ├── entry.client.ts  # 客户端入口文件，处理浏览器端渲染\n    ├── entry.node.ts    # Node.js 服务器入口文件，负责开发环境配置和服务器启动\n    └── entry.server.ts  # 服务端入口文件，处理 SSR 渲染逻辑\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"项目配置",children:["项目配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#项目配置",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"packagejson",children:["package.json",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建 ",(0,r.jsx)(n.code,{children:"package.json"})," 文件，配置项目依赖和脚本："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "ssr-demo-html",\n  "version": "1.0.0",\n  "type": "module",\n  "private": true,\n  "scripts": {\n    "dev": "gez dev",\n    "build": "npm run build:dts && npm run build:ssr",\n    "build:ssr": "gez build",\n    "preview": "gez preview",\n    "start": "NODE_ENV=production node dist/index.js",\n    "build:dts": "tsc --declaration --emitDeclarationOnly --outDir dist/src"\n  },\n  "dependencies": {\n    "@gez/core": "*"\n  },\n  "devDependencies": {\n    "@gez/rspack": "*",\n    "@types/node": "22.8.6",\n    "typescript": "^5.7.3"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["创建完 ",(0,r.jsx)(n.code,{children:"package.json"})," 文件后，需要安装项目依赖。你可以使用以下任一命令来安装："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install\n# 或\nyarn install\n# 或\nnpm install\n"})}),"\n",(0,r.jsx)(n.p,{children:"这将安装所有必需的依赖包，包括 TypeScript 和 SSR 相关的依赖。"}),"\n",(0,r.jsxs)(n.h3,{id:"tsconfigjson",children:["tsconfig.json",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 文件，配置 TypeScript 编译选项："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n    "compilerOptions": {\n        "module": "ESNext",\n        "moduleResolution": "node",\n        "isolatedModules": true,\n        "resolveJsonModule": true,\n        \n        "target": "ESNext",\n        "lib": ["ESNext", "DOM"],\n        \n        "strict": true,\n        "skipLibCheck": true,\n        "types": ["@types/node"],\n        \n        "experimentalDecorators": true,\n        "allowSyntheticDefaultImports": true,\n        \n        "baseUrl": ".",\n        "paths": {\n            "ssr-demo-html/src/*": ["./src/*"],\n            "ssr-demo-html/*": ["./*"]\n        }\n    },\n    "include": ["src"],\n    "exclude": ["dist", "node_modules"]\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"源码结构",children:["源码结构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#源码结构",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"appts",children:["app.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建主应用组件 ",(0,r.jsx)(n.code,{children:"src/app.ts"}),"，实现页面结构和交互逻辑："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/app.ts"',children:"/**\n * @file 示例组件\n * @description 展示一个带有自动更新时间的页面标题，用于演示 Gez 框架的基本功能\n */\n\nexport default class App {\n    /**\n     * 当前时间，使用 ISO 格式\n     * @type {string}\n     */\n    public time = '';\n\n    /**\n     * 创建应用实例\n     * @param {SsrContext} [ssrContext] - 服务端上下文，包含导入元数据集合\n     */\n    public constructor(public ssrContext?: SsrContext) {\n        // 构造函数中不需要额外初始化\n    }\n\n    /**\n     * 渲染页面内容\n     * @returns {string} 返回页面 HTML 结构\n     */\n    public render(): string {\n        // 确保在服务端环境下正确收集导入元数据\n        if (this.ssrContext) {\n            this.ssrContext.importMetaSet.add(import.meta);\n        }\n\n        return `\n        <div id=\"app\">\n            <h1><a href=\"https://www.jsesm.com/guide/frameworks/html.html\" target=\"_blank\">Gez 快速开始</a></h1>\n            <time datetime=\"${this.time}\">${this.time}</time>\n        </div>\n        `;\n    }\n\n    /**\n     * 客户端初始化\n     * @throws {Error} 当找不到时间显示元素时抛出错误\n     */\n    public onClient(): void {\n        // 获取时间显示元素\n        const time = document.querySelector('#app time');\n        if (!time) {\n            throw new Error('找不到时间显示元素');\n        }\n\n        // 设置定时器，每秒更新一次时间\n        setInterval(() => {\n            this.time = new Date().toISOString();\n            time.setAttribute('datetime', this.time);\n            time.textContent = this.time;\n        }, 1000);\n    }\n\n    /**\n     * 服务端初始化\n     */\n    public onServer(): void {\n        this.time = new Date().toISOString();\n    }\n}\n\n/**\n * 服务端上下文接口\n * @interface\n */\nexport interface SsrContext {\n    /**\n     * 导入元数据集合\n     * @type {Set<ImportMeta>}\n     */\n    importMetaSet: Set<ImportMeta>;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"create-appts",children:["create-app.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-appts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建 ",(0,r.jsx)(n.code,{children:"src/create-app.ts"})," 文件，负责创建应用实例："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/create-app.ts"',children:"/**\n * @file 应用实例创建\n * @description 负责创建和配置应用实例\n */\n\nimport App from './app';\n\nexport function createApp() {\n    const app = new App();\n    return {\n        app\n    };\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"entryclientts",children:["entry.client.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryclientts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建客户端入口文件 ",(0,r.jsx)(n.code,{children:"src/entry.client.ts"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.client.ts"',children:"/**\n * @file 客户端入口文件\n * @description 负责客户端交互逻辑和动态更新\n */\n\nimport { createApp } from './create-app';\n\n// 创建应用实例并初始化\nconst { app } = createApp();\napp.onClient();\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"entrynodets",children:["entry.node.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entrynodets",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建 ",(0,r.jsx)(n.code,{children:"entry.node.ts"})," 文件，配置开发环境和服务器启动："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"/**\n * @file Node.js 服务器入口文件\n * @description 负责开发环境配置和服务器启动，提供 SSR 运行时环境\n */\n\nimport http from 'node:http';\nimport type { GezOptions } from '@gez/core';\n\nexport default {\n    /**\n     * 配置开发环境的应用创建器\n     * @description 创建并配置 Rspack 应用实例，用于开发环境的构建和热更新\n     * @param gez Gez 框架实例，提供核心功能和配置接口\n     * @returns 返回配置好的 Rspack 应用实例，支持 HMR 和实时预览\n     */\n    async devApp(gez) {\n        return import('@gez/rspack').then((m) =>\n            m.createRspackHtmlApp(gez, {\n                config(context) {\n                    // 在此处自定义 Rspack 编译配置\n                }\n            })\n        );\n    },\n\n    /**\n     * 配置并启动 HTTP 服务器\n     * @description 创建 HTTP 服务器实例，集成 Gez 中间件，处理 SSR 请求\n     * @param gez Gez 框架实例，提供中间件和渲染功能\n     */\n    async server(gez) {\n        const server = http.createServer((req, res) => {\n            // 使用 Gez 中间件处理请求\n            gez.middleware(req, res, async () => {\n                // 执行服务端渲染\n                const rc = await gez.render({\n                    params: { url: req.url }\n                });\n                res.end(rc.html);\n            });\n        });\n\n        server.listen(3000, () => {\n            console.log('服务启动: http://localhost:3000');\n        });\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsx)(n.p,{children:"这个文件是开发环境配置和服务器启动的入口文件，主要包含两个核心功能："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"devApp"})," 函数：负责创建和配置开发环境的 Rspack 应用实例，支持热更新和实时预览功能。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"server"})," 函数：负责创建和配置 HTTP 服务器，集成 Gez 中间件处理 SSR 请求。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"entryserverts",children:["entry.server.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryserverts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建服务端渲染入口文件 ",(0,r.jsx)(n.code,{children:"src/entry.server.ts"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"/**\n * @file 服务端渲染入口文件\n * @description 负责服务端渲染流程、HTML 生成和资源注入\n */\n\nimport type { RenderContext } from '@gez/core';\nimport type App from './app';\nimport type { SsrContext } from './app';\nimport { createApp } from './create-app';\n\n// 封装页面内容生成逻辑\nconst renderToString = (app: App, ssrContext: SsrContext): string => {\n    // 将服务端渲染上下文注入到应用实例中\n    app.ssrContext = ssrContext;\n    // 初始化服务端\n    app.onServer();\n\n    // 生成页面内容\n    return app.render();\n};\n\nexport default async (rc: RenderContext) => {\n    // 创建应用实例，返回包含 app 实例的对象\n    const { app } = createApp();\n    // 使用 renderToString 生成页面内容\n    const html = renderToString(app, {\n        importMetaSet: rc.importMetaSet\n    });\n\n    // 提交依赖收集，确保所有必要资源都被加载\n    await rc.commit();\n\n    // 生成完整的 HTML 结构\n    rc.html = `<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    ${rc.preload()}\n    <title>Gez 快速开始</title>\n    ${rc.css()}\n</head>\n<body>\n    ${html}\n    ${rc.importmap()}\n    ${rc.moduleEntry()}\n    ${rc.modulePreload()}\n</body>\n</html>\n`;\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"运行项目",children:["运行项目",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#运行项目",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"完成上述文件配置后，你可以使用以下命令来运行项目："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"开发模式："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"构建项目："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"生产环境运行："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["现在，你已经成功创建了一个基于 Gez 的 HTML SSR 应用！访问 ",(0,r.jsx)(n.a,{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000"})," 即可看到效果。"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguide%2Fframeworks%2Fhtml.md"]={toc:[{text:"项目结构",id:"项目结构",depth:2},{text:"项目配置",id:"项目配置",depth:2},{text:"package.json",id:"packagejson",depth:3},{text:"tsconfig.json",id:"tsconfigjson",depth:3},{text:"源码结构",id:"源码结构",depth:2},{text:"app.ts",id:"appts",depth:3},{text:"create-app.ts",id:"create-appts",depth:3},{text:"entry.client.ts",id:"entryclientts",depth:3},{text:"entry.node.ts",id:"entrynodets",depth:3},{text:"entry.server.ts",id:"entryserverts",depth:3},{text:"运行项目",id:"运行项目",depth:2}],title:"HTML",headingTitle:"HTML",frontmatter:{titleSuffix:"Gez 框架 HTML SSR 应用示例",description:"从零开始搭建基于 Gez 的 HTML SSR 应用，通过实例展示框架的基本用法，包括项目初始化、HTML 配置和入口文件设置。",head:[["meta",{property:"keywords",content:"Gez, HTML, SSR应用, TypeScript配置, 项目初始化, 服务端渲染, 客户端交互"}]]}}}}]);