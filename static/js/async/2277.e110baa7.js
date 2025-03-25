"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2277"],{44342:function(e,n,r){r.r(n),r.d(n,{default:()=>c});var t=r(31549),s=r(6603);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"vue2",children:["Vue2",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue2",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Ce tutoriel vous guidera dans la cr\xe9ation d'une application Vue2 SSR bas\xe9e sur Gez \xe0 partir de z\xe9ro. Nous allons utiliser un exemple complet pour illustrer comment utiliser le framework Gez pour cr\xe9er une application avec rendu c\xf4t\xe9 serveur (SSR)."}),"\n",(0,t.jsxs)(n.h2,{id:"structure-du-projet",children:["Structure du projet",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-du-projet",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Commen\xe7ons par comprendre la structure de base du projet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n├── package.json         # Fichier de configuration du projet, d\xe9finissant les d\xe9pendances et les scripts\n├── tsconfig.json        # Fichier de configuration TypeScript, d\xe9finissant les options de compilation\n└── src                  # R\xe9pertoire du code source\n    ├── app.vue          # Composant principal de l'application, d\xe9finissant la structure et la logique de la page\n    ├── create-app.ts    # Factory de cr\xe9ation d'instance Vue, responsable de l'initialisation de l'application\n    ├── entry.client.ts  # Fichier d'entr\xe9e c\xf4t\xe9 client, g\xe9rant le rendu c\xf4t\xe9 navigateur\n    ├── entry.node.ts    # Fichier d'entr\xe9e Node.js, responsable de la configuration de l'environnement de d\xe9veloppement et du d\xe9marrage du serveur\n    └── entry.server.ts  # Fichier d'entr\xe9e c\xf4t\xe9 serveur, g\xe9rant la logique de rendu SSR\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"configuration-du-projet",children:["Configuration du projet",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-du-projet",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"packagejson",children:["package.json",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le fichier ",(0,t.jsx)(n.code,{children:"package.json"})," pour configurer les d\xe9pendances et les scripts du projet :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "ssr-demo-vue2",\n  "version": "1.0.0",\n  "type": "module",\n  "private": true,\n  "scripts": {\n    "dev": "gez dev",\n    "build": "npm run build:dts && npm run build:ssr",\n    "build:ssr": "gez build",\n    "preview": "gez preview",\n    "start": "NODE_ENV=production node dist/index.js",\n    "build:dts": "vue-tsc --declaration --emitDeclarationOnly --outDir dist/src"\n  },\n  "dependencies": {\n    "@gez/core": "*"\n  },\n  "devDependencies": {\n    "@gez/rspack-vue": "*",\n    "@types/node": "22.8.6",\n    "typescript": "^5.7.3",\n    "vue": "^2.7.16",\n    "vue-server-renderer": "^2.7.16",\n    "vue-tsc": "^2.1.6"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s avoir cr\xe9\xe9 le fichier ",(0,t.jsx)(n.code,{children:"package.json"}),", vous devez installer les d\xe9pendances du projet. Vous pouvez utiliser l'une des commandes suivantes pour l'installation :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install\n# ou\nyarn install\n# ou\nnpm install\n"})}),"\n",(0,t.jsx)(n.p,{children:"Cela installera tous les paquets n\xe9cessaires, y compris Vue2, TypeScript et les d\xe9pendances li\xe9es au SSR."}),"\n",(0,t.jsxs)(n.h3,{id:"tsconfigjson",children:["tsconfig.json",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le fichier ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," pour configurer les options de compilation TypeScript :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n    "compilerOptions": {\n        "module": "ESNext",\n        "moduleResolution": "node",\n        "isolatedModules": true,\n        "resolveJsonModule": true,\n        \n        "target": "ESNext",\n        "lib": ["ESNext", "DOM"],\n        \n        "strict": true,\n        "skipLibCheck": true,\n        "types": ["@types/node"],\n        \n        "experimentalDecorators": true,\n        "allowSyntheticDefaultImports": true,\n        \n        "baseUrl": ".",\n        "paths": {\n            "ssr-demo-vue2/src/*": ["./src/*"],\n            "ssr-demo-vue2/*": ["./*"]\n        }\n    },\n    "include": ["src"],\n    "exclude": ["dist", "node_modules"]\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"structure-du-code-source",children:["Structure du code source",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-du-code-source",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"appvue",children:["app.vue",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appvue",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le composant principal de l'application ",(0,t.jsx)(n.code,{children:"src/app.vue"}),", en utilisant la syntaxe ",(0,t.jsx)(n.code,{children:"<script setup>"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",meta:'title="src/app.vue"',children:'<template>\n    <div id="app">\n        <h1><a href="https://www.jsesm.com/guide/frameworks/vue2.html" target="_blank">D\xe9marrage rapide avec Gez</a></h1>\n        <time :datetime="time">{{ time }}</time>\n    </div>\n</template>\n\n<script setup lang="ts">\n/**\n * @file Composant d\'exemple\n * @description Affiche un titre de page avec une horloge mise \xe0 jour automatiquement, pour d\xe9montrer les fonctionnalit\xe9s de base de Gez\n */\n\nimport { onMounted, onUnmounted, ref } from \'vue\';\n\n// Heure actuelle, mise \xe0 jour toutes les secondes\nconst time = ref(new Date().toISOString());\nlet timer: NodeJS.Timeout;\n\nonMounted(() => {\n    timer = setInterval(() => {\n        time.value = new Date().toISOString();\n    }, 1000);\n});\n\nonUnmounted(() => {\n    clearInterval(timer);\n});\n<\/script>\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"create-appts",children:["create-app.ts",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-appts",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le fichier ",(0,t.jsx)(n.code,{children:"src/create-app.ts"}),", responsable de la cr\xe9ation de l'instance Vue :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/create-app.ts"',children:"/**\n * @file Cr\xe9ation d'instance Vue\n * @description Responsable de la cr\xe9ation et de la configuration de l'instance Vue\n */\n\nimport Vue from 'vue';\nimport App from './app.vue';\n\nexport function createApp() {\n    const app = new Vue({\n        render: (h) => h(App)\n    });\n    return {\n        app\n    };\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"entryclientts",children:["entry.client.ts",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryclientts",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le fichier d'entr\xe9e c\xf4t\xe9 client ",(0,t.jsx)(n.code,{children:"src/entry.client.ts"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.client.ts"',children:"/**\n * @file Fichier d'entr\xe9e c\xf4t\xe9 client\n * @description Responsable de la logique d'interaction c\xf4t\xe9 client et des mises \xe0 jour dynamiques\n */\n\nimport { createApp } from './create-app';\n\n// Cr\xe9er l'instance Vue\nconst { app } = createApp();\n\n// Monter l'instance Vue\napp.$mount('#app');\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"entrynodets",children:["entry.node.ts",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entrynodets",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le fichier ",(0,t.jsx)(n.code,{children:"entry.node.ts"}),", responsable de la configuration de l'environnement de d\xe9veloppement et du d\xe9marrage du serveur :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"/**\n * @file Fichier d'entr\xe9e Node.js\n * @description Responsable de la configuration de l'environnement de d\xe9veloppement et du d\xe9marrage du serveur, fournissant l'environnement d'ex\xe9cution SSR\n */\n\nimport http from 'node:http';\nimport type { GezOptions } from '@gez/core';\n\nexport default {\n    /**\n     * Configurer le cr\xe9ateur d'application pour l'environnement de d\xe9veloppement\n     * @description Cr\xe9e et configure l'instance Rspack, utilis\xe9e pour la construction et la mise \xe0 jour en temps r\xe9el en environnement de d\xe9veloppement\n     * @param gez Instance du framework Gez, fournissant les fonctionnalit\xe9s de base et les interfaces de configuration\n     * @returns Retourne l'instance Rspack configur\xe9e, supportant HMR et la pr\xe9visualisation en temps r\xe9el\n     */\n    async devApp(gez) {\n        return import('@gez/rspack-vue').then((m) =>\n            m.createRspackVue2App(gez, {\n                config(context) {\n                    // Personnaliser la configuration de compilation Rspack ici\n                }\n            })\n        );\n    },\n\n    /**\n     * Configurer et d\xe9marrer le serveur HTTP\n     * @description Cr\xe9e une instance de serveur HTTP, int\xe8gre le middleware Gez, et g\xe8re les requ\xeates SSR\n     * @param gez Instance du framework Gez, fournissant le middleware et les fonctionnalit\xe9s de rendu\n     */\n    async server(gez) {\n        const server = http.createServer((req, res) => {\n            // Utiliser le middleware Gez pour g\xe9rer les requ\xeates\n            gez.middleware(req, res, async () => {\n                // Ex\xe9cuter le rendu c\xf4t\xe9 serveur\n                const rc = await gez.render({\n                    params: { url: req.url }\n                });\n                res.end(rc.html);\n            });\n        });\n\n        server.listen(3000, () => {\n            console.log('Serveur d\xe9marr\xe9 : http://localhost:3000');\n        });\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ce fichier est le point d'entr\xe9e pour la configuration de l'environnement de d\xe9veloppement et le d\xe9marrage du serveur. Il contient deux fonctionnalit\xe9s principales :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["La fonction ",(0,t.jsx)(n.code,{children:"devApp"})," : responsable de la cr\xe9ation et de la configuration de l'instance Rspack pour l'environnement de d\xe9veloppement, supportant la mise \xe0 jour en temps r\xe9el et la pr\xe9visualisation. Ici, ",(0,t.jsx)(n.code,{children:"createRspackVue2App"})," est utilis\xe9 pour cr\xe9er une instance Rspack sp\xe9cifique \xe0 Vue2."]}),"\n",(0,t.jsxs)(n.li,{children:["La fonction ",(0,t.jsx)(n.code,{children:"server"})," : responsable de la cr\xe9ation et de la configuration du serveur HTTP, int\xe9grant le middleware Gez pour g\xe9rer les requ\xeates SSR."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"entryserverts",children:["entry.server.ts",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryserverts",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez le fichier d'entr\xe9e pour le rendu c\xf4t\xe9 serveur ",(0,t.jsx)(n.code,{children:"src/entry.server.ts"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"/**\n * @file Fichier d'entr\xe9e pour le rendu c\xf4t\xe9 serveur\n * @description Responsable du processus de rendu SSR, de la g\xe9n\xe9ration du HTML et de l'injection des ressources\n */\n\nimport type { RenderContext } from '@gez/core';\nimport { createRenderer } from 'vue-server-renderer';\nimport { createApp } from './create-app';\n\n// Cr\xe9er le renderer\nconst renderer = createRenderer();\n\nexport default async (rc: RenderContext) => {\n    // Cr\xe9er l'instance Vue\n    const { app } = createApp();\n\n    // Utiliser renderToString de Vue pour g\xe9n\xe9rer le contenu de la page\n    const html = await renderer.renderToString(app, {\n        importMetaSet: rc.importMetaSet\n    });\n\n    // Soumettre la collecte des d\xe9pendances, s'assurer que toutes les ressources n\xe9cessaires sont charg\xe9es\n    await rc.commit();\n\n    // G\xe9n\xe9rer la structure HTML compl\xe8te\n    rc.html = `<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    ${rc.preload()}\n    <title>D\xe9marrage rapide avec Gez</title>\n    ${rc.css()}\n</head>\n<body>\n    ${html}\n    ${rc.importmap()}\n    ${rc.moduleEntry()}\n    ${rc.modulePreload()}\n</body>\n</html>\n`;\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"ex\\xe9cution-du-projet",children:["Ex\xe9cution du projet",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ex\\xe9cution-du-projet",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s avoir configur\xe9 les fichiers ci-dessus, vous pouvez utiliser les commandes suivantes pour ex\xe9cuter le projet :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Mode d\xe9veloppement :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Construction du projet :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Ex\xe9cution en production :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["F\xe9licitations, vous avez r\xe9ussi \xe0 cr\xe9er une application Vue2 SSR bas\xe9e sur Gez ! Visitez ",(0,t.jsx)(n.a,{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000"})," pour voir le r\xe9sultat."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["fr%2Fguide%2Fframeworks%2Fvue2.md"]={toc:[{text:"Structure du projet",id:"structure-du-projet",depth:2},{text:"Configuration du projet",id:"configuration-du-projet",depth:2},{text:"package.json",id:"packagejson",depth:3},{text:"tsconfig.json",id:"tsconfigjson",depth:3},{text:"Structure du code source",id:"structure-du-code-source",depth:2},{text:"app.vue",id:"appvue",depth:3},{text:"create-app.ts",id:"create-appts",depth:3},{text:"entry.client.ts",id:"entryclientts",depth:3},{text:"entry.node.ts",id:"entrynodets",depth:3},{text:"entry.server.ts",id:"entryserverts",depth:3},{text:"Ex\xe9cution du projet",id:"ex\xe9cution-du-projet",depth:2}],title:"Vue2",headingTitle:"Vue2",frontmatter:{titleSuffix:"Exemple d'application Vue2 SSR avec le framework Gez",description:"Cr\xe9ez une application Vue2 SSR bas\xe9e sur Gez \xe0 partir de z\xe9ro. Ce guide vous montre les bases du framework \xe0 travers un exemple complet, incluant l'initialisation du projet, la configuration de Vue2 et la mise en place des fichiers d'entr\xe9e.",head:[["meta",{property:"keywords",content:"Gez, Vue2, Application SSR, Configuration TypeScript, Initialisation de projet, Rendu c\xf4t\xe9 serveur, Interaction c\xf4t\xe9 client"}]]}}}}]);