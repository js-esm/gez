"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7531"],{41118:function(e,n,r){r.r(n),r.d(n,{default:()=>c});var s=r(31549),i=r(6603),t=r(41519);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"gezrspack-vue",children:["@gez/rspack-vue",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack-vue",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Das Rspack Vue-Paket bietet eine API zum Erstellen und Konfigurieren von Rspack-Anwendungen basierend auf dem Vue-Framework und unterst\xfctzt die Entwicklung, den Build und das Server-Side Rendering von Vue-Komponenten."}),"\n",(0,s.jsxs)(n.h2,{id:"installation",children:["Installation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Installieren Sie ",(0,s.jsx)(n.code,{children:"@gez/rspack-vue"})," als Entwicklungsabh\xe4ngigkeit mit einem Paketmanager:"]}),"\n",(0,s.jsx)(t.PackageManagerTabs,{command:"install @gez/rspack-vue -D"}),"\n",(0,s.jsxs)(n.h2,{id:"typenexporte",children:["Typenexporte",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#typenexporte",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"buildtarget",children:["BuildTarget",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildtarget",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BuildTarget = 'node' | 'client' | 'server'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Der BuildTarget-Typ definiert die Zielumgebung f\xfcr den Build der Anwendung und wird verwendet, um spezifische Optimierungen und Funktionen im Build-Prozess zu konfigurieren:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node"}),": Code, der in einer Node.js-Umgebung ausgef\xfchrt wird"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": Code, der in einer Browser-Umgebung ausgef\xfchrt wird"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"server"}),": Code, der in einer Server-Umgebung ausgef\xfchrt wird"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"rspackappconfigcontext",children:["RspackAppConfigContext",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackappconfigcontext",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface RspackAppConfigContext {\n  gez: Gez\n  buildTarget: BuildTarget\n  config: RspackOptions\n  options: RspackAppOptions\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Das RspackAppConfigContext-Interface bietet Kontextinformationen, die in Konfigurations-Hook-Funktionen zug\xe4nglich sind:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gez"}),": Gez Framework-Instanz"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buildTarget"}),": Aktuelles Build-Ziel (client/server/node)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"}),": Rspack-Konfigurationsobjekt"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": Anwendungskonfigurationsoptionen"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"rspackappoptions",children:["RspackAppOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackappoptions",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface RspackAppOptions {\n  css?: 'css' | 'js' | false\n  loaders?: {\n    styleLoader?: string\n  }\n  styleLoader?: Record<string, any>\n  cssLoader?: Record<string, any>\n  target?: {\n    web?: string[]\n    node?: string[]\n  }\n  definePlugin?: Record<string, any>\n  config?: (context: RspackAppConfigContext) => void | Promise<void>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Das RspackAppOptions-Interface:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"css"}),": CSS-Ausgabemethode, entweder 'css' (separate Datei) oder 'js' (in JS geb\xfcndelt), standardm\xe4\xdfig automatisch basierend auf der Umgebung ausgew\xe4hlt: Produktionsumgebung verwendet 'css' zur Optimierung von Caching und parallelem Laden, Entwicklungsumgebung verwendet 'js' zur Unterst\xfctzung von Hot Module Replacement (HMR)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loaders"}),": Benutzerdefinierte Loader-Konfiguration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"styleLoader"}),": style-loader-Konfigurationsoptionen"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cssLoader"}),": css-loader-Konfigurationsoptionen"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"target"}),": Build-Ziel-Kompatibilit\xe4tskonfiguration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"definePlugin"}),": Globale Konstantendefinition"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"}),": Konfigurations-Hook-Funktion"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"rspackhtmlappoptions",children:["RspackHtmlAppOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackhtmlappoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Erbt von ",(0,s.jsx)(n.code,{children:"RspackAppOptions"})," und wird zur Konfiguration spezifischer Optionen f\xfcr HTML-Anwendungen verwendet."]}),"\n",(0,s.jsxs)(n.h2,{id:"funktionsexporte",children:["Funktionsexporte",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#funktionsexporte",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"createrspackapp",children:["createRspackApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createrspackapp",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function createRspackApp(gez: Gez, options?: RspackAppOptions): Promise<App>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Erstellt eine Standard-Rspack-Anwendungsinstanz."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameter:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gez"}),": Gez Framework-Instanz"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": Rspack-Anwendungskonfigurationsoptionen"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"R\xfcckgabewert:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gibt ein Promise zur\xfcck, das in die erstellte Anwendungsinstanz aufgel\xf6st wird"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"createrspackhtmlapp",children:["createRspackHtmlApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createrspackhtmlapp",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function createRspackHtmlApp(gez: Gez, options?: RspackHtmlAppOptions): Promise<App>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Erstellt eine HTML-Rspack-Anwendungsinstanz."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameter:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gez"}),": Gez Framework-Instanz"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": HTML-Anwendungskonfigurationsoptionen"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"R\xfcckgabewert:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gibt ein Promise zur\xfcck, das in die erstellte HTML-Anwendungsinstanz aufgel\xf6st wird"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"konstantenexporte",children:["Konstantenexporte",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#konstantenexporte",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"rspack_loader",children:["RSPACK_LOADER",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack_loader",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const RSPACK_LOADER: Record<string, string> = {\n  builtinSwcLoader: 'builtin:swc-loader',\n  lightningcssLoader: 'builtin:lightningcss-loader',\n  styleLoader: 'style-loader',\n  cssLoader: 'css-loader',\n  lessLoader: 'less-loader',\n  styleResourcesLoader: 'style-resources-loader',\n  workerRspackLoader: 'worker-rspack-loader'\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ein Mapping-Objekt f\xfcr die integrierten Loader-Identifikatoren von Rspack, das h\xe4ufig verwendete Loader-Namen als Konstanten bereitstellt:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"builtinSwcLoader"}),": Integrierter SWC-Loader von Rspack, verarbeitet TypeScript/JavaScript-Dateien"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lightningcssLoader"}),": Integrierter lightningcss-Loader von Rspack, ein Hochleistungs-Compiler f\xfcr CSS-Dateien"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"styleLoader"}),": Loader zum Einf\xfcgen von CSS in das DOM"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cssLoader"}),": Loader zum Parsen von CSS-Dateien und Verarbeiten von CSS-Modulen"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lessLoader"}),": Loader zum Kompilieren von Less-Dateien in CSS"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"styleResourcesLoader"}),": Loader zum automatischen Importieren globaler Stilressourcen (z.B. Variablen, Mixins)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"workerRspackLoader"}),": Loader zum Verarbeiten von Web Worker-Dateien"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Diese Konstanten k\xf6nnen in der Konfiguration verwendet werden, um auf integrierte Loader zu verweisen, anstatt Zeichenketten manuell einzugeben:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import { RSPACK_LOADER } from '@gez/rspack';\n\nexport default {\n  async devApp(gez) {\n    return import('@gez/rspack').then((m) =>\n      m.createRspackHtmlApp(gez, {\n        loaders: {\n          // Verwendung von Konstanten zur Referenzierung von Loadern\n          styleLoader: RSPACK_LOADER.styleLoader,\n          cssLoader: RSPACK_LOADER.cssLoader,\n          lightningcssLoader: RSPACK_LOADER.lightningcssLoader\n        }\n      })\n    );\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Hinweise:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Diese Loader sind bereits in Rspack integriert und m\xfcssen nicht zus\xe4tzlich installiert werden"}),"\n",(0,s.jsx)(n.li,{children:"Bei benutzerdefinierten Loader-Konfigurationen k\xf6nnen diese Konstanten verwendet werden, um die Standard-Loader-Implementierung zu ersetzen"}),"\n",(0,s.jsxs)(n.li,{children:["Einige Loader (z.B. ",(0,s.jsx)(n.code,{children:"builtinSwcLoader"}),") haben spezifische Konfigurationsoptionen, bitte konsultieren Sie die entsprechende Dokumentation"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"modulexporte",children:["Modulexporte",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modulexporte",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"rspack",children:["rspack",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Re-Exportiert alle Inhalte des ",(0,s.jsx)(n.code,{children:"@rspack/core"}),"-Pakets und bietet vollst\xe4ndige Rspack-Kernfunktionalit\xe4t."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["de%2Fapi%2Fapp%2Frspack-vue.mdx"]={toc:[{text:"Installation",id:"installation",depth:2},{text:"Typenexporte",id:"typenexporte",depth:2},{text:"BuildTarget",id:"buildtarget",depth:3},{text:"RspackAppConfigContext",id:"rspackappconfigcontext",depth:3},{text:"RspackAppOptions",id:"rspackappoptions",depth:3},{text:"RspackHtmlAppOptions",id:"rspackhtmlappoptions",depth:3},{text:"Funktionsexporte",id:"funktionsexporte",depth:2},{text:"createRspackApp",id:"createrspackapp",depth:3},{text:"createRspackHtmlApp",id:"createrspackhtmlapp",depth:3},{text:"Konstantenexporte",id:"konstantenexporte",depth:2},{text:"RSPACK_LOADER",id:"rspack_loader",depth:3},{text:"Modulexporte",id:"modulexporte",depth:2},{text:"rspack",id:"rspack",depth:3}],title:"@gez/rspack-vue",headingTitle:"@gez/rspack-vue",frontmatter:{titleSuffix:"Gez Framework Vue Build-Tool",description:"Spezialisiertes Build-Tool des Gez Frameworks f\xfcr Vue, bietet umfassende Unterst\xfctzung f\xfcr den Aufbau von Vue 2/3-Anwendungen, einschlie\xdflich Komponentenentwicklung, SSR-Rendering und Leistungsoptimierung.",head:[["meta",{property:"keywords",content:"Gez, Rspack, Vue, Vue2, Vue3, SSR, Build-Tool, Komponentenentwicklung, Server-Side Rendering, Leistungsoptimierung"}]]}}}}]);