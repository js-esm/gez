"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9920"],{53209:function(e,n,r){r.r(n),r.d(n,{default:()=>o});var s=r(31549),t=r(6603);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"normes-standards",children:["Normes standards",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normes-standards",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Gez est un framework SSR moderne qui adopte une structure de projet standardis\xe9e et un m\xe9canisme de r\xe9solution de chemins pour garantir la coh\xe9rence et la maintenabilit\xe9 du projet dans les environnements de d\xe9veloppement et de production."}),"\n",(0,s.jsxs)(n.h2,{id:"normes-de-structure-de-projet",children:["Normes de structure de projet",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normes-de-structure-de-projet",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"structure-de-r\\xe9pertoire-standard",children:["Structure de r\xe9pertoire standard",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-de-r\\xe9pertoire-standard",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"root\n│─ dist                  # R\xe9pertoire de sortie de compilation\n│  ├─ package.json       # Configuration du package apr\xe8s compilation\n│  ├─ server             # Sortie de compilation c\xf4t\xe9 serveur\n│  │  └─ manifest.json   # Sortie du manifeste de compilation, utilis\xe9 pour g\xe9n\xe9rer l'importmap\n│  ├─ node               # Sortie de compilation du programme serveur Node\n│  ├─ client             # Sortie de compilation c\xf4t\xe9 client\n│  │  ├─ versions        # R\xe9pertoire de stockage des versions\n│  │  │  └─ latest.tgz   # Archive du r\xe9pertoire dist, fournissant une distribution du package\n│  │  └─ manifest.json   # Sortie du manifeste de compilation, utilis\xe9 pour g\xe9n\xe9rer l'importmap\n│  └─ src                # Fichiers g\xe9n\xe9r\xe9s par tsc\n├─ src\n│  ├─ entry.server.ts    # Point d'entr\xe9e de l'application serveur\n│  ├─ entry.client.ts    # Point d'entr\xe9e de l'application client\n│  └─ entry.node.ts      # Point d'entr\xe9e du programme serveur Node\n├─ tsconfig.json         # Configuration TypeScript\n└─ package.json          # Configuration du package\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Connaissances suppl\xe9mentaires"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gez.name"})," provient du champ ",(0,s.jsx)(n.code,{children:"name"})," dans ",(0,s.jsx)(n.code,{children:"package.json"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dist/package.json"})," provient du ",(0,s.jsx)(n.code,{children:"package.json"})," \xe0 la racine"]}),"\n",(0,s.jsxs)(n.li,{children:["Le r\xe9pertoire ",(0,s.jsx)(n.code,{children:"dist"})," est archiv\xe9 uniquement lorsque ",(0,s.jsx)(n.code,{children:"packs.enable"})," est d\xe9fini sur ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"normes-des-fichiers-dentr\\xe9e",children:["Normes des fichiers d'entr\xe9e",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normes-des-fichiers-dentr\\xe9e",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"entryclientts",children:["entry.client.ts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryclientts",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Le fichier d'entr\xe9e client est responsable de :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Initialisation de l'application"})," : Configuration des param\xe8tres de base de l'application client"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gestion des routes"})," : Gestion des routes et de la navigation c\xf4t\xe9 client"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gestion d'\xe9tat"})," : Stockage et mise \xe0 jour de l'\xe9tat c\xf4t\xe9 client"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gestion des interactions"})," : Gestion des \xe9v\xe9nements utilisateurs et des interactions de l'interface"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"entryserverts",children:["entry.server.ts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryserverts",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Le fichier d'entr\xe9e serveur est responsable de :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Rendu c\xf4t\xe9 serveur (SSR)"})," : Ex\xe9cution du processus de rendu SSR"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"G\xe9n\xe9ration HTML"})," : Construction de la structure initiale de la page"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pr\xe9-r\xe9cup\xe9ration des donn\xe9es"})," : Gestion de la r\xe9cup\xe9ration des donn\xe9es c\xf4t\xe9 serveur"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Injection d'\xe9tat"})," : Transfert de l'\xe9tat serveur au client"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimisation SEO"})," : Assurance de l'optimisation pour les moteurs de recherche"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"entrynodets",children:["entry.node.ts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entrynodets",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Le fichier d'entr\xe9e du serveur Node.js est responsable de :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configuration du serveur"})," : D\xe9finition des param\xe8tres du serveur HTTP"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gestion des routes"})," : Gestion des r\xe8gles de routage c\xf4t\xe9 serveur"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Int\xe9gration des middlewares"})," : Configuration des middlewares du serveur"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gestion de l'environnement"})," : Gestion des variables d'environnement et des configurations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gestion des requ\xeates/r\xe9ponses"})," : Traitement des requ\xeates et r\xe9ponses HTTP"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"normes-des-fichiers-de-configuration",children:["Normes des fichiers de configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normes-des-fichiers-de-configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"packagejson",children:["package.json",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "name": "your-app-name",\n    "type": "module",\n    "scripts": {\n        "dev": "gez dev",\n        "build": "npm run build:dts && npm run build:ssr",\n        "build:ssr": "gez build",\n        "build:dts": "tsc --declaration --emitDeclarationOnly --outDir dist/src",\n        "preview": "gez preview",\n        "start": "NODE_ENV=production node dist/index.js"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"tsconfigjson",children:["tsconfig.json",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n    "compilerOptions": {\n        "isolatedModules": true,\n        "allowJs": false,\n        "experimentalDecorators": true,\n        "resolveJsonModule": true,\n        "types": [\n            "@types/node"\n        ],\n        "target": "ESNext",\n        "module": "ESNext",\n        "importHelpers": false,\n        "declaration": true,\n        "sourceMap": true,\n        "strict": true,\n        "noImplicitAny": false,\n        "noImplicitReturns": false,\n        "noFallthroughCasesInSwitch": true,\n        "noUnusedLocals": false,\n        "noUnusedParameters": false,\n        "moduleResolution": "node",\n        "esModuleInterop": true,\n        "skipLibCheck": true,\n        "allowSyntheticDefaultImports": true,\n        "forceConsistentCasingInFileNames": true,\n        "noEmit": true\n    },\n    "include": [\n        "src",\n        "**.ts"\n    ],\n    "exclude": [\n        "dist"\n    ]\n}\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}let o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["fr%2Fguide%2Fessentials%2Fstd.md"]={toc:[{text:"Normes de structure de projet",id:"normes-de-structure-de-projet",depth:2},{text:"Structure de r\xe9pertoire standard",id:"structure-de-r\xe9pertoire-standard",depth:3},{text:"Normes des fichiers d'entr\xe9e",id:"normes-des-fichiers-dentr\xe9e",depth:2},{text:"entry.client.ts",id:"entryclientts",depth:3},{text:"entry.server.ts",id:"entryserverts",depth:3},{text:"entry.node.ts",id:"entrynodets",depth:3},{text:"Normes des fichiers de configuration",id:"normes-des-fichiers-de-configuration",depth:2},{text:"package.json",id:"packagejson",depth:3},{text:"tsconfig.json",id:"tsconfigjson",depth:3}],title:"Normes standards",headingTitle:"Normes standards",frontmatter:{titleSuffix:"Guide de structure et de normes du projet Gez",description:"D\xe9taille la structure standard du projet Gez, les normes des fichiers d'entr\xe9e et de configuration, aidant les d\xe9veloppeurs \xe0 construire des applications SSR normalis\xe9es et maintenables.",head:[["meta",{property:"keywords",content:"Gez, structure de projet, fichier d'entr\xe9e, normes de configuration, framework SSR, TypeScript, normes de projet, standards de d\xe9veloppement"}]]}}}}]);