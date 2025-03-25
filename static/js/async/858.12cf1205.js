"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["858"],{25565:function(e,n,r){r.r(n),r.d(n,{default:()=>t});var s=r(31549),a=r(6603);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",ul:"ul",li:"li",strong:"strong"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"normas-est\\xe1ndar",children:["Normas Est\xe1ndar",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normas-est\\xe1ndar",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Gez es un framework SSR moderno que adopta una estructura de proyecto estandarizada y un mecanismo de resoluci\xf3n de rutas para garantizar la consistencia y mantenibilidad del proyecto en entornos de desarrollo y producci\xf3n."}),"\n",(0,s.jsxs)(n.h2,{id:"normas-de-estructura-del-proyecto",children:["Normas de Estructura del Proyecto",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normas-de-estructura-del-proyecto",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"estructura-de-directorios-est\\xe1ndar",children:["Estructura de Directorios Est\xe1ndar",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#estructura-de-directorios-est\\xe1ndar",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"root\n│─ dist                  # Directorio de salida de compilaci\xf3n\n│  ├─ package.json       # Configuraci\xf3n del paquete despu\xe9s de la compilaci\xf3n\n│  ├─ server             # Salida de compilaci\xf3n del servidor\n│  │  └─ manifest.json   # Salida del manifiesto de compilaci\xf3n, utilizado para generar importmap\n│  ├─ node               # Salida de compilaci\xf3n del programa del servidor Node\n│  ├─ client             # Salida de compilaci\xf3n del cliente\n│  │  ├─ versions        # Directorio de almacenamiento de versiones\n│  │  │  └─ latest.tgz   # Archivo comprimido del directorio dist, para distribuci\xf3n del paquete\n│  │  └─ manifest.json   # Salida del manifiesto de compilaci\xf3n, utilizado para generar importmap\n│  └─ src                # Archivos generados por tsc\n├─ src\n│  ├─ entry.server.ts    # Punto de entrada de la aplicaci\xf3n del servidor\n│  ├─ entry.client.ts    # Punto de entrada de la aplicaci\xf3n del cliente\n│  └─ entry.node.ts      # Punto de entrada de la aplicaci\xf3n del servidor Node\n├─ tsconfig.json         # Configuraci\xf3n de TypeScript\n└─ package.json          # Configuraci\xf3n del paquete\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Conocimiento Adicional"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gez.name"})," proviene del campo ",(0,s.jsx)(n.code,{children:"name"})," en ",(0,s.jsx)(n.code,{children:"package.json"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dist/package.json"})," proviene del ",(0,s.jsx)(n.code,{children:"package.json"})," en el directorio ra\xedz"]}),"\n",(0,s.jsxs)(n.li,{children:["El directorio ",(0,s.jsx)(n.code,{children:"dist"})," se archiva solo cuando ",(0,s.jsx)(n.code,{children:"packs.enable"})," est\xe1 configurado como ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"normas-de-archivos-de-entrada",children:["Normas de Archivos de Entrada",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normas-de-archivos-de-entrada",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"entryclientts",children:["entry.client.ts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryclientts",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"El archivo de entrada del cliente es responsable de:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inicializar la aplicaci\xf3n"}),": Configurar los ajustes b\xe1sicos de la aplicaci\xf3n del cliente"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gesti\xf3n de rutas"}),": Manejar las rutas y navegaci\xf3n del cliente"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gesti\xf3n de estado"}),": Implementar el almacenamiento y actualizaci\xf3n del estado del cliente"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Manejo de interacciones"}),": Gestionar eventos del usuario e interacciones de la interfaz"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"entryserverts",children:["entry.server.ts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryserverts",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"El archivo de entrada del servidor es responsable de:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Renderizado del servidor"}),": Ejecutar el proceso de renderizado SSR"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Generaci\xf3n de HTML"}),": Construir la estructura inicial de la p\xe1gina"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Precarga de datos"}),": Manejar la obtenci\xf3n de datos en el servidor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inyecci\xf3n de estado"}),": Transferir el estado del servidor al cliente"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimizaci\xf3n SEO"}),": Asegurar la optimizaci\xf3n del motor de b\xfasqueda de la p\xe1gina"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"entrynodets",children:["entry.node.ts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entrynodets",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"El archivo de entrada del servidor Node.js es responsable de:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configuraci\xf3n del servidor"}),": Establecer los par\xe1metros del servidor HTTP"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Manejo de rutas"}),": Gestionar las reglas de rutas del servidor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Integraci\xf3n de middleware"}),": Configurar middleware del servidor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gesti\xf3n del entorno"}),": Manejar variables de entorno y configuraciones"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Respuesta a solicitudes"}),": Manejar solicitudes y respuestas HTTP"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"normas-de-archivos-de-configuraci\\xf3n",children:["Normas de Archivos de Configuraci\xf3n",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#normas-de-archivos-de-configuraci\\xf3n",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"packagejson",children:["package.json",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "name": "your-app-name",\n    "type": "module",\n    "scripts": {\n        "dev": "gez dev",\n        "build": "npm run build:dts && npm run build:ssr",\n        "build:ssr": "gez build",\n        "build:dts": "tsc --declaration --emitDeclarationOnly --outDir dist/src",\n        "preview": "gez preview",\n        "start": "NODE_ENV=production node dist/index.js"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"tsconfigjson",children:["tsconfig.json",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n    "compilerOptions": {\n        "isolatedModules": true,\n        "allowJs": false,\n        "experimentalDecorators": true,\n        "resolveJsonModule": true,\n        "types": [\n            "@types/node"\n        ],\n        "target": "ESNext",\n        "module": "ESNext",\n        "importHelpers": false,\n        "declaration": true,\n        "sourceMap": true,\n        "strict": true,\n        "noImplicitAny": false,\n        "noImplicitReturns": false,\n        "noFallthroughCasesInSwitch": true,\n        "noUnusedLocals": false,\n        "noUnusedParameters": false,\n        "moduleResolution": "node",\n        "esModuleInterop": true,\n        "skipLibCheck": true,\n        "allowSyntheticDefaultImports": true,\n        "forceConsistentCasingInFileNames": true,\n        "noEmit": true\n    },\n    "include": [\n        "src",\n        "**.ts"\n    ],\n    "exclude": [\n        "dist"\n    ]\n}\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}let t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["es%2Fguide%2Fessentials%2Fstd.md"]={toc:[{text:"Normas de Estructura del Proyecto",id:"normas-de-estructura-del-proyecto",depth:2},{text:"Estructura de Directorios Est\xe1ndar",id:"estructura-de-directorios-est\xe1ndar",depth:3},{text:"Normas de Archivos de Entrada",id:"normas-de-archivos-de-entrada",depth:2},{text:"entry.client.ts",id:"entryclientts",depth:3},{text:"entry.server.ts",id:"entryserverts",depth:3},{text:"entry.node.ts",id:"entrynodets",depth:3},{text:"Normas de Archivos de Configuraci\xf3n",id:"normas-de-archivos-de-configuraci\xf3n",depth:2},{text:"package.json",id:"packagejson",depth:3},{text:"tsconfig.json",id:"tsconfigjson",depth:3}],title:"Normas Est\xe1ndar",headingTitle:"Normas Est\xe1ndar",frontmatter:{titleSuffix:"Gu\xeda de Estructura y Normas del Proyecto del Framework Gez",description:"Descripci\xf3n detallada de la estructura est\xe1ndar del proyecto, normas de archivos de entrada y configuraci\xf3n del framework Gez, para ayudar a los desarrolladores a construir aplicaciones SSR normalizadas y mantenibles.",head:[["meta",{property:"keywords",content:"Gez, Estructura del Proyecto, Archivos de Entrada, Normas de Configuraci\xf3n, Framework SSR, TypeScript, Normas del Proyecto, Est\xe1ndares de Desarrollo"}]]}}}}]);