"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["334"],{61538:function(e,n,s){s.r(n),s.d(n,{default:()=>d});var i=s(31549),a=s(6603);function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"manifestjson",children:["ManifestJson",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjson",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"manifest.json"})," to plik manifestu generowany przez framework Gez podczas procesu budowania, służący do rejestrowania informacji o artefaktach budowania usługi. Dostarcza ujednoliconego interfejsu do zarządzania artefaktami budowania, plikami eksportowymi oraz statystykami rozmiaru zasob\xf3w."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="dist/client/manifest.json"',children:'{\n  "name": "your-app-name",\n  "exports": {\n    "src/entry.client": "src/entry.client.8537e1c3.final.js",\n    "src/title/index": "src/title/index.2d79c0c2.final.js"\n  },\n  "buildFiles": [\n    "src/entry.client.2e0a89bc.final.css",\n    "images/cat.ed79ef6b.final.jpeg",\n    "chunks/830.63b8fd4f.final.css",\n    "images/running-dog.76197e20.final.gif",\n    "chunks/473.42c1ae75.final.js",\n    "images/starry.d914a632.final.jpg",\n    "images/sun.429a7bc5.final.png",\n    "chunks/473.63b8fd4f.final.css",\n    "images/logo.3923d727.final.svg",\n    "chunks/534.63b8fd4f.final.css",\n    "src/title/index.2d79c0c2.final.js",\n    "src/entry.client.8537e1c3.final.js",\n    "chunks/534.e85c5440.final.js",\n    "chunks/830.cdbdf067.final.js"\n  ],\n  "chunks": {\n    "your-app-name@src/views/home.ts": {\n      "js": "chunks/534.e85c5440.final.js",\n      "css": ["chunks/534.63b8fd4f.final.css"],\n      "resources": [\n        "images/cat.ed79ef6b.final.jpeg",\n        "images/logo.3923d727.final.svg",\n        "images/running-dog.76197e20.final.gif",\n        "images/starry.d914a632.final.jpg",\n        "images/sun.429a7bc5.final.png"\n      ],\n      "sizes": {\n        "js": 7976,\n        "css": 5739,\n        "resource": 796974\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"definicje-typ\\xf3w",children:["Definicje typ\xf3w",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#definicje-typ\\xf3w",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"manifestjson-1",children:["ManifestJson",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjson-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ManifestJson {\n  name: string;\n  exports: Record<string, string>;\n  buildFiles: string[];\n  chunks: Record<string, ManifestJsonChunks>;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"name",children:["name",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Nazwa usługi, pochodząca z konfiguracji GezOptions.name."}),"\n",(0,i.jsxs)(n.h4,{id:"exports",children:["exports",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exports",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"Record<string, string>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Mapowanie plik\xf3w eksportowych, gdzie klucz to ścieżka do pliku źr\xf3dłowego, a wartość to ścieżka do pliku po budowaniu."}),"\n",(0,i.jsxs)(n.h4,{id:"buildfiles",children:["buildFiles",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildfiles",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Pełna lista plik\xf3w artefakt\xf3w budowania, zawierająca wszystkie wygenerowane ścieżki plik\xf3w."}),"\n",(0,i.jsxs)(n.h4,{id:"chunks",children:["chunks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunks",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"Record<string, ManifestJsonChunks>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Odpowiedniość między plikami źr\xf3dłowymi a skompilowanymi artefaktami, gdzie klucz to ścieżka do pliku źr\xf3dłowego, a wartość to informacje o kompilacji."}),"\n",(0,i.jsxs)(n.h3,{id:"manifestjsonchunks",children:["ManifestJsonChunks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjsonchunks",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ManifestJsonChunks {\n  js: string;\n  css: string[];\n  resources: string[];\n  sizes: ManifestJsonChunkSizes;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"js",children:["js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#js",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ścieżka do pliku JS skompilowanego z bieżącego pliku źr\xf3dłowego."}),"\n",(0,i.jsxs)(n.h4,{id:"css",children:["css",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lista ścieżek do plik\xf3w CSS powiązanych z bieżącym plikiem źr\xf3dłowym."}),"\n",(0,i.jsxs)(n.h4,{id:"resources",children:["resources",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#resources",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lista ścieżek do innych plik\xf3w zasob\xf3w powiązanych z bieżącym plikiem źr\xf3dłowym."}),"\n",(0,i.jsxs)(n.h4,{id:"sizes",children:["sizes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sizes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"ManifestJsonChunkSizes"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Statystyki rozmiaru artefakt\xf3w budowania."}),"\n",(0,i.jsxs)(n.h3,{id:"manifestjsonchunksizes",children:["ManifestJsonChunkSizes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjsonchunksizes",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ManifestJsonChunkSizes {\n  js: number;\n  css: number;\n  resource: number;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"js-1",children:["js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#js-1",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Rozmiar pliku JS (w bajtach)."}),"\n",(0,i.jsxs)(n.h4,{id:"css-1",children:["css",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css-1",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Rozmiar pliku CSS (w bajtach)."}),"\n",(0,i.jsxs)(n.h4,{id:"resource",children:["resource",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#resource",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Rozmiar pliku zasobu (w bajtach)."})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["pl%2Fapi%2Fcore%2Fmanifest-json.md"]={toc:[{text:"Definicje typ\xf3w",id:"definicje-typ\xf3w",depth:2},{text:"ManifestJson",id:"manifestjson-1",depth:3},{text:"name",id:"name",depth:4},{text:"exports",id:"exports",depth:4},{text:"buildFiles",id:"buildfiles",depth:4},{text:"chunks",id:"chunks",depth:4},{text:"ManifestJsonChunks",id:"manifestjsonchunks",depth:3},{text:"js",id:"js",depth:4},{text:"css",id:"css",depth:4},{text:"resources",id:"resources",depth:4},{text:"sizes",id:"sizes",depth:4},{text:"ManifestJsonChunkSizes",id:"manifestjsonchunksizes",depth:3},{text:"js",id:"js-1",depth:4},{text:"css",id:"css-1",depth:4},{text:"resource",id:"resource",depth:4}],title:"ManifestJson",headingTitle:"ManifestJson",frontmatter:{titleSuffix:"Dokumentacja pliku manifestu frameworku Gez",description:"Szczeg\xf3łowy opis struktury pliku manifestu (manifest.json) frameworku Gez, obejmujący zarządzanie artefaktami budowania, mapowanie plik\xf3w eksportowych oraz statystyki zasob\xf3w, aby pom\xf3c programistom w zrozumieniu i wykorzystaniu systemu budowania.",head:[["meta",{property:"keywords",content:"Gez, ManifestJson, manifest budowania, zarządzanie zasobami, artefakty budowania, mapowanie plik\xf3w, API"}]]}}}}]);