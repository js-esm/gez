"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6742"],{72913:function(e,n,r){r.r(n),r.d(n,{default:()=>l});var i=r(31549),s=r(6603);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"app",children:["App",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"App"})," ist die Anwendungsabstraktion des Gez-Frameworks und bietet eine einheitliche Schnittstelle zur Verwaltung des Anwendungslebenszyklus, statischer Ressourcen und des serverseitigen Renderings."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"export default {\n  // Entwicklungsumgebungskonfiguration\n  async devApp(gez) {\n    return import('@gez/rspack').then((m) =>\n      m.createRspackHtmlApp(gez, {\n        config(rc) {\n          // Benutzerdefinierte Rspack-Konfiguration\n        }\n      })\n    );\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"typdefinitionen",children:["Typdefinitionen",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#typdefinitionen",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"app-1",children:["App",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface App {\n  middleware: Middleware;\n  render: (options?: RenderContextOptions) => Promise<RenderContext>;\n  build?: () => Promise<boolean>;\n  destroy?: () => Promise<boolean>;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"middleware",children:["middleware",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"Middleware"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Middleware zur Verarbeitung statischer Ressourcen."}),"\n",(0,i.jsx)(n.p,{children:"Entwicklungsumgebung:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verarbeitet Anfragen f\xfcr statische Ressourcen des Quellcodes"}),"\n",(0,i.jsx)(n.li,{children:"Unterst\xfctzt Echtzeit-Kompilierung und Hot Reload"}),"\n",(0,i.jsx)(n.li,{children:"Verwendet No-Cache-Caching-Strategie"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Produktionsumgebung:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verarbeitet gebaute statische Ressourcen"}),"\n",(0,i.jsx)(n.li,{children:"Unterst\xfctzt langfristiges Caching unver\xe4nderlicher Dateien (.final.xxx)"}),"\n",(0,i.jsx)(n.li,{children:"Optimierte Ressourcenlade-Strategie"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"server.use(gez.middleware);\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"render",children:["render",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"(options?: RenderContextOptions) => Promise<RenderContext>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Serverseitige Rendering-Funktion. Bietet unterschiedliche Implementierungen basierend auf der Laufzeitumgebung:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Produktionsumgebung (start): L\xe4dt die gebaute serverseitige Einstiegsdatei (entry.server) und f\xfchrt das Rendering aus"}),"\n",(0,i.jsx)(n.li,{children:"Entwicklungsumgebung (dev): L\xe4dt die serverseitige Einstiegsdatei aus dem Quellcode und f\xfchrt das Rendering aus"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const rc = await gez.render({\n  params: { url: '/page' }\n});\nres.end(rc.html);\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"build",children:["build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"() => Promise<boolean>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Produktions-Build-Funktion. Wird f\xfcr das Packen und Optimieren von Ressourcen verwendet. Gibt bei erfolgreichem Build true zur\xfcck, bei Fehlschlag false."}),"\n",(0,i.jsxs)(n.h4,{id:"destroy",children:["destroy",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#destroy",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Typ"}),": ",(0,i.jsx)(n.code,{children:"() => Promise<boolean>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ressourcenbereinigungsfunktion. Wird zum Herunterfahren des Servers, Trennen von Verbindungen usw. verwendet. Gibt bei erfolgreicher Bereinigung true zur\xfcck, bei Fehlschlag false."})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}let l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["de%2Fapi%2Fcore%2Fapp.md"]={toc:[{text:"Typdefinitionen",id:"typdefinitionen",depth:2},{text:"App",id:"app-1",depth:3},{text:"middleware",id:"middleware",depth:4},{text:"render",id:"render",depth:4},{text:"build",id:"build",depth:4},{text:"destroy",id:"destroy",depth:4}],title:"App",headingTitle:"App",frontmatter:{titleSuffix:"Gez Framework Anwendungsabstraktionsschnittstelle",description:"Detaillierte Beschreibung der App-Schnittstelle des Gez-Frameworks, einschlie\xdflich Anwendungslebenszyklusverwaltung, statischer Ressourcenverarbeitung und serverseitigem Rendering, um Entwicklern zu helfen, die Kernfunktionen der Anwendung zu verstehen und zu nutzen.",head:[["meta",{property:"keywords",content:"Gez, App, Anwendungsabstraktion, Lebenszyklus, statische Ressourcen, serverseitiges Rendering, API"}]]}}}}]);