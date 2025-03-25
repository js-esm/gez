"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2295"],{77313:function(e,n,i){i.r(n),i.d(n,{default:()=>d});var r=i(31549),t=i(6603);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"client-side-rendering",children:["Client-side rendering",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#client-side-rendering",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Client-side rendering (CSR) is een techniek waarbij de rendering van pagina's in de browser plaatsvindt. In Gez kun je, wanneer je applicatie niet op een Node.js-server kan worden ge\xefmplementeerd, kiezen voor het genereren van een statisch ",(0,r.jsx)(n.code,{children:"index.html"})," bestand tijdens de bouwfase, waardoor pure client-side rendering mogelijk wordt."]}),"\n",(0,r.jsxs)(n.h2,{id:"gebruiksscenarios",children:["Gebruiksscenario's",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#gebruiksscenarios",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"De volgende scenario's zijn geschikt voor client-side rendering:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Statische hostingomgevingen"}),": zoals GitHub Pages, CDN's en andere hostingdiensten die server-side rendering niet ondersteunen"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Eenvoudige applicaties"}),": kleine applicaties waarbij de laadsnelheid van de eerste pagina en SEO niet cruciaal zijn"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ontwikkelomgeving"}),": voor snelle preview en debugging tijdens de ontwikkelingsfase"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"configuratie-uitleg",children:["Configuratie-uitleg",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuratie-uitleg",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"html-sjabloonconfiguratie",children:["HTML-sjabloonconfiguratie",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-sjabloonconfiguratie",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In de client-side rendering-modus moet je een algemeen HTML-sjabloon configureren. Dit sjabloon dient als container voor de applicatie en bevat de nodige resource-referenties en mount-points."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"import type { RenderContext } from '@gez/core';\n\nexport default async (rc: RenderContext) => {\n    // Verzamel afhankelijkheden\n    await rc.commit();\n    \n    // Configureer HTML-sjabloon\n    rc.html = `\n<!DOCTYPE html>\n<html>\n<head>\n    ${rc.preload()}           // Preload resources\n    <title>Gez</title>\n    ${rc.css()}               // Injecteer stijlen\n</head>\n<body>\n    <div id=\"app\"></div>\n    ${rc.importmap()}         // Importmap\n    ${rc.moduleEntry()}       // Ingangsmodule\n    ${rc.modulePreload()}     // Module preload\n</body>\n</html>\n`;\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"statische-html-generatie",children:["Statische HTML-generatie",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#statische-html-generatie",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Om client-side rendering in een productieomgeving te gebruiken, moet je tijdens de bouwfase een statisch HTML-bestand genereren. Gez biedt een ",(0,r.jsx)(n.code,{children:"postBuild"})," hook-functie om deze functionaliteit te realiseren:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    async postBuild(gez) {\n        // Genereer statisch HTML-bestand\n        const rc = await gez.render();\n        // Schrijf HTML-bestand\n        gez.writeSync(\n            gez.resolvePath('dist/client', 'index.html'),\n            rc.html\n        );\n    }\n} satisfies GezOptions;\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["nl%2Fguide%2Fessentials%2Fcsr.md"]={toc:[{text:"Gebruiksscenario's",id:"gebruiksscenarios",depth:2},{text:"Configuratie-uitleg",id:"configuratie-uitleg",depth:2},{text:"HTML-sjabloonconfiguratie",id:"html-sjabloonconfiguratie",depth:3},{text:"Statische HTML-generatie",id:"statische-html-generatie",depth:3}],title:"Client-side rendering",headingTitle:"Client-side rendering",frontmatter:{titleSuffix:"Handleiding voor client-side rendering in het Gez-framework",description:"Gedetailleerde uitleg over het client-side rendering-mechanisme van het Gez-framework, inclusief statische bouw, implementatiestrategie\xebn en best practices, om ontwikkelaars te helpen effici\xebnte front-end rendering te realiseren in een serverloze omgeving.",head:[["meta",{property:"keywords",content:"Gez, client-side rendering, CSR, statische bouw, front-end rendering, serverloze implementatie, prestatieoptimalisatie"}]]}}}}]);