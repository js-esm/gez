"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1346"],{96516:function(e,n,s){s.r(n),s.d(n,{default:()=>d});var r=s(31549),i=s(6603),a=s(41519);function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"gezrspack-vue",children:["@gez/rspack-vue",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack-vue",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Het Rspack Vue-pakket biedt een set API's voor het maken en configureren van Rspack-toepassingen op basis van het Vue-framework, met ondersteuning voor Vue-componentontwikkeling, bouwen en server-side rendering."}),"\n",(0,r.jsxs)(n.h2,{id:"installatie",children:["Installatie",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installatie",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Installeer ",(0,r.jsx)(n.code,{children:"@gez/rspack-vue"})," als ontwikkelingsafhankelijkheid met behulp van een pakketbeheerder:"]}),"\n",(0,r.jsx)(a.PackageManagerTabs,{command:"install @gez/rspack-vue -D"}),"\n",(0,r.jsxs)(n.h2,{id:"type-exporten",children:["Type-exporten",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-exporten",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"buildtarget",children:["BuildTarget",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildtarget",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BuildTarget = 'node' | 'client' | 'server'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Het type bouwdoelomgeving definieert de doelomgeving van de toepassing, gebruikt voor het configureren van specifieke optimalisaties en functies tijdens het bouwproces:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"node"}),": Bouwt code die wordt uitgevoerd in een Node.js-omgeving"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client"}),": Bouwt code die wordt uitgevoerd in een browseromgeving"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"server"}),": Bouwt code die wordt uitgevoerd in een serveromgeving"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"rspackappconfigcontext",children:["RspackAppConfigContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackappconfigcontext",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface RspackAppConfigContext {\n  gez: Gez\n  buildTarget: BuildTarget\n  config: RspackOptions\n  options: RspackAppOptions\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"De Rspack-toepassingsconfiguratiecontextinterface biedt contextinformatie die toegankelijk is in configuratiehookfuncties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gez"}),": Gez-frameworkinstantie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"buildTarget"}),": Huidig bouwdoel (client/server/node)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"}),": Rspack-configuratieobject"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"}),": Toepassingsconfiguratieopties"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"rspackappoptions",children:["RspackAppOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackappoptions",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface RspackAppOptions {\n  css?: 'css' | 'js' | false\n  loaders?: {\n    styleLoader?: string\n  }\n  styleLoader?: Record<string, any>\n  cssLoader?: Record<string, any>\n  target?: {\n    web?: string[]\n    node?: string[]\n  }\n  definePlugin?: Record<string, any>\n  config?: (context: RspackAppConfigContext) => void | Promise<void>\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"De Rspack-toepassingsconfiguratieoptiesinterface:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"css"}),": CSS-uitvoermethode, optioneel 'css' (afzonderlijk bestand) of 'js' (ingebouwd in JS), standaard automatisch geselecteerd op basis van de omgeving: productieomgeving gebruikt 'css' voor cache- en parallelle laadoptimalisatie, ontwikkelomgeving gebruikt 'js' voor ondersteuning van hot module replacement (HMR)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loaders"}),": Aangepaste loader-configuratie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styleLoader"}),": style-loader-configuratieopties"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cssLoader"}),": css-loader-configuratieopties"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"target"}),": Bouwdoelcompatibiliteitsconfiguratie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"definePlugin"}),": Globale constante definities"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"}),": Configuratiehookfunctie"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"rspackhtmlappoptions",children:["RspackHtmlAppOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackhtmlappoptions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erft over van ",(0,r.jsx)(n.code,{children:"RspackAppOptions"}),", gebruikt voor het configureren van specifieke opties voor HTML-toepassingen."]}),"\n",(0,r.jsxs)(n.h2,{id:"functie-exporten",children:["Functie-exporten",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#functie-exporten",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"createrspackapp",children:["createRspackApp",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createrspackapp",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function createRspackApp(gez: Gez, options?: RspackAppOptions): Promise<App>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Maakt een standaard Rspack-toepassingsinstantie."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gez"}),": Gez-frameworkinstantie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"}),": Rspack-toepassingsconfiguratieopties"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Retourwaarde:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Retourneert een Promise die wordt opgelost naar de gemaakte toepassingsinstantie"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"createrspackhtmlapp",children:["createRspackHtmlApp",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createrspackhtmlapp",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function createRspackHtmlApp(gez: Gez, options?: RspackHtmlAppOptions): Promise<App>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Maakt een HTML-type Rspack-toepassingsinstantie."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gez"}),": Gez-frameworkinstantie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"}),": HTML-toepassingsconfiguratieopties"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Retourwaarde:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Retourneert een Promise die wordt opgelost naar de gemaakte HTML-toepassingsinstantie"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"constante-exporten",children:["Constante-exporten",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#constante-exporten",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"rspack_loader",children:["RSPACK_LOADER",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack_loader",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const RSPACK_LOADER: Record<string, string> = {\n  builtinSwcLoader: 'builtin:swc-loader',\n  lightningcssLoader: 'builtin:lightningcss-loader',\n  styleLoader: 'style-loader',\n  cssLoader: 'css-loader',\n  lessLoader: 'less-loader',\n  styleResourcesLoader: 'style-resources-loader',\n  workerRspackLoader: 'worker-rspack-loader'\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"De Rspack ingebouwde loader-identificatietoewijzingsobject, biedt veelgebruikte loader-naamconstanten:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"builtinSwcLoader"}),": Rspack ingebouwde SWC-loader, gebruikt voor het verwerken van TypeScript/JavaScript-bestanden"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lightningcssLoader"}),": Rspack ingebouwde lightningcss-loader, gebruikt voor het verwerken van CSS-bestanden met een hoogwaardige compiler"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styleLoader"}),": Loader voor het injecteren van CSS in de DOM"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cssLoader"}),": Loader voor het parseren van CSS-bestanden en het verwerken van CSS-modularisatie"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lessLoader"}),": Loader voor het compileren van Less-bestanden naar CSS"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styleResourcesLoader"}),": Loader voor het automatisch importeren van globale stijlresources (zoals variabelen, mixins)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"workerRspackLoader"}),": Loader voor het verwerken van Web Worker-bestanden"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Het gebruik van deze constanten maakt het mogelijk om in configuraties naar ingebouwde loaders te verwijzen, waardoor handmatige invoer van strings wordt vermeden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import { RSPACK_LOADER } from '@gez/rspack';\n\nexport default {\n  async devApp(gez) {\n    return import('@gez/rspack').then((m) =>\n      m.createRspackHtmlApp(gez, {\n        loaders: {\n          // Gebruik constanten om naar loaders te verwijzen\n          styleLoader: RSPACK_LOADER.styleLoader,\n          cssLoader: RSPACK_LOADER.cssLoader,\n          lightningcssLoader: RSPACK_LOADER.lightningcssLoader\n        }\n      })\n    );\n  }\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Belangrijke opmerkingen:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Deze loaders zijn al ingebouwd in Rspack en hoeven niet apart te worden ge\xefnstalleerd"}),"\n",(0,r.jsx)(n.li,{children:"Bij het configureren van aangepaste loaders kunnen deze constanten worden gebruikt om de standaard loader-implementatie te vervangen"}),"\n",(0,r.jsxs)(n.li,{children:["Sommige loaders (zoals ",(0,r.jsx)(n.code,{children:"builtinSwcLoader"}),") hebben specifieke configuratieopties, raadpleeg de bijbehorende configuratiedocumentatie"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"module-exporten",children:["Module-exporten",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#module-exporten",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"rspack",children:["rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Hernoemt en exporteert alle inhoud van het ",(0,r.jsx)(n.code,{children:"@rspack/core"}),"-pakket, biedt volledige Rspack-kernfunctionaliteit."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}let d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["nl%2Fapi%2Fapp%2Frspack-vue.mdx"]={toc:[{text:"Installatie",id:"installatie",depth:2},{text:"Type-exporten",id:"type-exporten",depth:2},{text:"BuildTarget",id:"buildtarget",depth:3},{text:"RspackAppConfigContext",id:"rspackappconfigcontext",depth:3},{text:"RspackAppOptions",id:"rspackappoptions",depth:3},{text:"RspackHtmlAppOptions",id:"rspackhtmlappoptions",depth:3},{text:"Functie-exporten",id:"functie-exporten",depth:2},{text:"createRspackApp",id:"createrspackapp",depth:3},{text:"createRspackHtmlApp",id:"createrspackhtmlapp",depth:3},{text:"Constante-exporten",id:"constante-exporten",depth:2},{text:"RSPACK_LOADER",id:"rspack_loader",depth:3},{text:"Module-exporten",id:"module-exporten",depth:2},{text:"rspack",id:"rspack",depth:3}],title:"@gez/rspack-vue",headingTitle:"@gez/rspack-vue",frontmatter:{titleSuffix:"Gez Framework Vue Bouwhulpmiddel",description:"Het Vue-specifieke bouwhulpmiddel van het Gez-framework biedt volledige ondersteuning voor het bouwen van Vue 2/3-toepassingen, inclusief componentontwikkeling, SSR-rendering en prestatieoptimalisatie.",head:[["meta",{property:"keywords",content:"Gez, Rspack, Vue, Vue2, Vue3, SSR, bouwhulpmiddel, componentontwikkeling, server-side rendering, prestatieoptimalisatie"}]]}}}}]);