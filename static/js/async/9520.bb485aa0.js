"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9520"],{66617:function(e,i,n){n.r(i),n.d(i,{default:()=>s});var r=n(31549),l=n(6603);function a(e){let i=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",ul:"ul",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.h1,{id:"contesto-di-rendering",children:["Contesto di Rendering",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#contesto-di-rendering",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"RenderContext \xe8 una classe centrale nel framework Gez, responsabile principalmente della gestione delle risorse e della generazione di HTML durante il processo di rendering lato server (SSR). Presenta le seguenti caratteristiche principali:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Sistema di moduli basato su ESM"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Utilizza lo standard moderno ECMAScript Modules"}),"\n",(0,r.jsx)(i.li,{children:"Supporta l'importazione e l'esportazione nativa dei moduli"}),"\n",(0,r.jsx)(i.li,{children:"Implementa una migliore suddivisione del codice e caricamento su richiesta"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Raccolta intelligente delle dipendenze"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Raccoglie dinamicamente le dipendenze in base al percorso di rendering effettivo"}),"\n",(0,r.jsx)(i.li,{children:"Evita il caricamento di risorse non necessarie"}),"\n",(0,r.jsx)(i.li,{children:"Supporta componenti asincroni e importazione dinamica"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Iniezione precisa delle risorse"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Controlla rigorosamente l'ordine di caricamento delle risorse"}),"\n",(0,r.jsx)(i.li,{children:"Ottimizza le prestazioni di caricamento della prima schermata"}),"\n",(0,r.jsx)(i.li,{children:"Garantisce l'affidabilit\xe0 dell'attivazione lato client (Hydration)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Meccanismo di configurazione flessibile"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Supporta la configurazione dinamica del percorso di base"}),"\n",(0,r.jsx)(i.li,{children:"Fornisce diverse modalit\xe0 di mappatura delle importazioni"}),"\n",(0,r.jsx)(i.li,{children:"Si adatta a diversi scenari di distribuzione"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"modalit\\xe0-di-utilizzo",children:["Modalit\xe0 di utilizzo",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#modalit\\xe0-di-utilizzo",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["Nel framework Gez, gli sviluppatori generalmente non devono creare direttamente un'istanza di RenderContext, ma possono ottenerla tramite il metodo ",(0,r.jsx)(i.code,{children:"gez.render()"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"async server(gez) {\n    const server = http.createServer((req, res) => {\n        // Gestione dei file statici\n        gez.middleware(req, res, async () => {\n            // Ottieni un'istanza di RenderContext tramite gez.render()\n            const rc = await gez.render({\n                params: {\n                    url: req.url\n                }\n            });\n            // Rispondi con il contenuto HTML\n            res.end(rc.html);\n        });\n    });\n}\n"})}),"\n",(0,r.jsxs)(i.h2,{id:"funzionalit\\xe0-principali",children:["Funzionalit\xe0 principali",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#funzionalit\\xe0-principali",children:"#"})]}),"\n",(0,r.jsxs)(i.h3,{id:"raccolta-delle-dipendenze",children:["Raccolta delle dipendenze",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#raccolta-delle-dipendenze",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"RenderContext implementa un meccanismo intelligente di raccolta delle dipendenze, che raccoglie dinamicamente le dipendenze in base ai componenti effettivamente renderizzati, anzich\xe9 pre-caricare semplicemente tutte le risorse potenzialmente utilizzate:"}),"\n",(0,r.jsxs)(i.h4,{id:"raccolta-su-richiesta",children:["Raccolta su richiesta",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#raccolta-su-richiesta",children:"#"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Traccia e registra automaticamente le dipendenze dei moduli durante il rendering effettivo dei componenti"}),"\n",(0,r.jsx)(i.li,{children:"Raccoglie solo le risorse CSS, JavaScript, ecc., effettivamente utilizzate per il rendering della pagina corrente"}),"\n",(0,r.jsxs)(i.li,{children:["Registra con precisione le relazioni di dipendenza dei moduli di ciascun componente tramite ",(0,r.jsx)(i.code,{children:"importMetaSet"})]}),"\n",(0,r.jsx)(i.li,{children:"Supporta la raccolta delle dipendenze per componenti asincroni e importazione dinamica"}),"\n"]}),"\n",(0,r.jsxs)(i.h4,{id:"gestione-automatica",children:["Gestione automatica",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#gestione-automatica",children:"#"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Gli sviluppatori non devono gestire manualmente il processo di raccolta delle dipendenze"}),"\n",(0,r.jsx)(i.li,{children:"Il framework raccoglie automaticamente le informazioni sulle dipendenze durante il rendering dei componenti"}),"\n",(0,r.jsxs)(i.li,{children:["Gestisce tutte le risorse raccolte tramite il metodo ",(0,r.jsx)(i.code,{children:"commit()"})]}),"\n",(0,r.jsx)(i.li,{children:"Gestisce automaticamente i problemi di dipendenze circolari e duplicate"}),"\n"]}),"\n",(0,r.jsxs)(i.h4,{id:"ottimizzazione-delle-prestazioni",children:["Ottimizzazione delle prestazioni",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#ottimizzazione-delle-prestazioni",children:"#"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Evita il caricamento di moduli non utilizzati, riducendo significativamente il tempo di caricamento della prima schermata"}),"\n",(0,r.jsx)(i.li,{children:"Controlla con precisione l'ordine di caricamento delle risorse, ottimizzando le prestazioni di rendering della pagina"}),"\n",(0,r.jsx)(i.li,{children:"Genera automaticamente una mappatura delle importazioni (Import Map) ottimale"}),"\n",(0,r.jsx)(i.li,{children:"Supporta strategie di pre-caricamento e caricamento su richiesta delle risorse"}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"iniezione-delle-risorse",children:["Iniezione delle risorse",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#iniezione-delle-risorse",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"RenderContext fornisce diversi metodi per iniettare diversi tipi di risorse, ciascuno progettato con cura per ottimizzare le prestazioni di caricamento delle risorse:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"preload()"}),": Pre-carica risorse CSS e JS, supporta la configurazione della priorit\xe0"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"css()"}),": Inietta i fogli di stile per la prima schermata, supporta l'estrazione del CSS critico"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"importmap()"}),": Inietta la mappatura delle importazioni dei moduli, supporta la risoluzione dinamica dei percorsi"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"moduleEntry()"}),": Inietta il modulo di ingresso lato client, supporta la configurazione di pi\xf9 ingressi"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"modulePreload()"}),": Pre-carica le dipendenze dei moduli, supporta strategie di caricamento su richiesta"]}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"ordine-di-iniezione-delle-risorse",children:["Ordine di iniezione delle risorse",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#ordine-di-iniezione-delle-risorse",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"RenderContext controlla rigorosamente l'ordine di iniezione delle risorse, un ordine progettato in base al funzionamento del browser e alle considerazioni di ottimizzazione delle prestazioni:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Parte head:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"preload()"}),": Pre-carica risorse CSS e JS, consentendo al browser di individuarle e iniziare a caricarle il prima possibile"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"css()"}),": Inietta i fogli di stile per la prima schermata, garantendo che gli stili della pagina siano pronti al momento del rendering del contenuto"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Parte body:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"importmap()"}),": Inietta la mappatura delle importazioni dei moduli, definendo le regole di risoluzione dei percorsi per i moduli ESM"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"moduleEntry()"}),": Inietta il modulo di ingresso lato client, deve essere eseguito dopo importmap"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"modulePreload()"}),": Pre-carica le dipendenze dei moduli, deve essere eseguito dopo importmap"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"flusso-di-rendering-completo",children:["Flusso di rendering completo",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#flusso-di-rendering-completo",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Un tipico flusso di utilizzo di RenderContext \xe8 il seguente:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"export default async (rc: RenderContext) => {\n    // 1. Renderizza il contenuto della pagina e raccoglie le dipendenze\n    const app = createApp();\n    const html = await renderToString(app, {\n       importMetaSet: rc.importMetaSet\n    });\n\n    // 2. Conferma la raccolta delle dipendenze\n    await rc.commit();\n    \n    // 3. Genera l'HTML completo\n    rc.html = `\n        <!DOCTYPE html>\n        <html>\n        <head>\n            ${rc.preload()}\n            ${rc.css()}\n        </head>\n        <body>\n            ${html}\n            ${rc.importmap()}\n            ${rc.moduleEntry()}\n            ${rc.modulePreload()}\n        </body>\n        </html>\n    `;\n};\n"})}),"\n",(0,r.jsxs)(i.h2,{id:"funzionalit\\xe0-avanzate",children:["Funzionalit\xe0 avanzate",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#funzionalit\\xe0-avanzate",children:"#"})]}),"\n",(0,r.jsxs)(i.h3,{id:"configurazione-del-percorso-di-base",children:["Configurazione del percorso di base",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#configurazione-del-percorso-di-base",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"RenderContext fornisce un meccanismo flessibile per la configurazione dinamica del percorso di base, supportando l'impostazione dinamica del percorso di base delle risorse statiche in fase di esecuzione:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    base: '/gez',  // Imposta il percorso di base\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,r.jsx)(i.p,{children:"Questo meccanismo \xe8 particolarmente utile nei seguenti scenari:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Distribuzione di siti multilingua"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"dominio.com      → Lingua predefinita\ndominio.com/cn/  → Sito in cinese\ndominio.com/en/  → Sito in inglese\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Applicazioni micro-frontend"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Supporta la distribuzione flessibile delle sotto-applicazioni in percorsi diversi"}),"\n",(0,r.jsx)(i.li,{children:"Facilita l'integrazione in diverse applicazioni principali"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"modalit\\xe0-di-mappatura-delle-importazioni",children:["Modalit\xe0 di mappatura delle importazioni",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#modalit\\xe0-di-mappatura-delle-importazioni",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"RenderContext fornisce due modalit\xe0 di mappatura delle importazioni (Import Map):"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Modalit\xe0 Inline"})," (predefinita)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Inserisce la mappatura delle importazioni direttamente nell'HTML"}),"\n",(0,r.jsx)(i.li,{children:"Adatta per applicazioni di piccole dimensioni, riducendo le richieste di rete aggiuntive"}),"\n",(0,r.jsx)(i.li,{children:"Disponibile immediatamente al caricamento della pagina"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Modalit\xe0 JS"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Carica la mappatura delle importazioni tramite un file JavaScript esterno"}),"\n",(0,r.jsx)(i.li,{children:"Adatta per applicazioni di grandi dimensioni, sfruttando il meccanismo di cache del browser"}),"\n",(0,r.jsx)(i.li,{children:"Supporta l'aggiornamento dinamico del contenuto della mappatura"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"\xc8 possibile scegliere la modalit\xe0 appropriata tramite configurazione:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    importmapMode: 'js',  // 'inline' | 'js'\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,r.jsxs)(i.h3,{id:"configurazione-della-funzione-di-ingresso",children:["Configurazione della funzione di ingresso",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#configurazione-della-funzione-di-ingresso",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["RenderContext supporta la configurazione tramite ",(0,r.jsx)(i.code,{children:"entryName"})," per specificare la funzione di ingresso per il rendering lato server:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    entryName: 'mobile',  // Specifica l'uso della funzione di ingresso per dispositivi mobili\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,r.jsx)(i.p,{children:"Questo meccanismo \xe8 particolarmente utile nei seguenti scenari:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Rendering di pi\xf9 template"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"// Funzione di ingresso per dispositivi mobili\nexport const mobile = async (rc: RenderContext) => {\n    // Logica di rendering specifica per dispositivi mobili\n};\n\n// Funzione di ingresso per desktop\nexport const desktop = async (rc: RenderContext) => {\n    // Logica di rendering specifica per desktop\n};\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Test A/B"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Supporta l'uso di diverse logiche di rendering per la stessa pagina"}),"\n",(0,r.jsx)(i.li,{children:"Facilita gli esperimenti sull'esperienza utente"}),"\n",(0,r.jsx)(i.li,{children:"Consente di passare flessibilmente tra diverse strategie di rendering"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Requisiti di rendering speciali"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Supporta l'uso di flussi di rendering personalizzati per alcune pagine"}),"\n",(0,r.jsx)(i.li,{children:"Si adatta alle esigenze di ottimizzazione delle prestazioni in diversi scenari"}),"\n",(0,r.jsx)(i.li,{children:"Implementa un controllo pi\xf9 preciso del rendering"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"best-practice",children:["Best practice",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#best-practice",children:"#"})]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Ottenere un'istanza di RenderContext"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Ottenere sempre l'istanza tramite il metodo ",(0,r.jsx)(i.code,{children:"gez.render()"})]}),"\n",(0,r.jsx)(i.li,{children:"Passare i parametri appropriati secondo necessit\xe0"}),"\n",(0,r.jsx)(i.li,{children:"Evitare di creare manualmente l'istanza"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Raccolta delle dipendenze"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Assicurarsi che tutti i moduli chiamino correttamente ",(0,r.jsx)(i.code,{children:"importMetaSet.add(import.meta)"})]}),"\n",(0,r.jsxs)(i.li,{children:["Chiamare immediatamente il metodo ",(0,r.jsx)(i.code,{children:"commit()"})," dopo il rendering"]}),"\n",(0,r.jsx)(i.li,{children:"Utilizzare in modo appropriato componenti asincroni e importazione dinamica per ottimizzare il caricamento della prima schermata"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Iniezione delle risorse"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Seguire rigorosamente l'ordine di iniezione delle risorse"}),"\n",(0,r.jsx)(i.li,{children:"Non iniettare CSS nel body"}),"\n",(0,r.jsx)(i.li,{children:"Assicurarsi che importmap preceda moduleEntry"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Ottimizzazione delle prestazioni"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Utilizzare preload per pre-caricare le risorse critiche"}),"\n",(0,r.jsx)(i.li,{children:"Utilizzare in modo appropriato modulePreload per ottimizzare il caricamento dei moduli"}),"\n",(0,r.jsx)(i.li,{children:"Evitare il caricamento di risorse non necessarie"}),"\n",(0,r.jsx)(i.li,{children:"Sfruttare il meccanismo di cache del browser per ottimizzare le prestazioni di caricamento"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,l.ah)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let s=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["it%2Fguide%2Fessentials%2Frender-context.md"]={toc:[{text:"Modalit\xe0 di utilizzo",id:"modalit\xe0-di-utilizzo",depth:2},{text:"Funzionalit\xe0 principali",id:"funzionalit\xe0-principali",depth:2},{text:"Raccolta delle dipendenze",id:"raccolta-delle-dipendenze",depth:3},{text:"Raccolta su richiesta",id:"raccolta-su-richiesta",depth:4},{text:"Gestione automatica",id:"gestione-automatica",depth:4},{text:"Ottimizzazione delle prestazioni",id:"ottimizzazione-delle-prestazioni",depth:4},{text:"Iniezione delle risorse",id:"iniezione-delle-risorse",depth:3},{text:"Ordine di iniezione delle risorse",id:"ordine-di-iniezione-delle-risorse",depth:3},{text:"Flusso di rendering completo",id:"flusso-di-rendering-completo",depth:2},{text:"Funzionalit\xe0 avanzate",id:"funzionalit\xe0-avanzate",depth:2},{text:"Configurazione del percorso di base",id:"configurazione-del-percorso-di-base",depth:3},{text:"Modalit\xe0 di mappatura delle importazioni",id:"modalit\xe0-di-mappatura-delle-importazioni",depth:3},{text:"Configurazione della funzione di ingresso",id:"configurazione-della-funzione-di-ingresso",depth:3},{text:"Best practice",id:"best-practice",depth:2}],title:"Contesto di Rendering",headingTitle:"Contesto di Rendering",frontmatter:{titleSuffix:"Meccanismo di rendering lato server del framework Gez",description:"Descrizione dettagliata del meccanismo del contesto di rendering (RenderContext) del framework Gez, inclusa la gestione delle risorse, la generazione di HTML e il sistema di moduli ESM, per aiutare gli sviluppatori a comprendere e utilizzare le funzionalit\xe0 di rendering lato server.",head:[["meta",{property:"keywords",content:"Gez, contesto di rendering, RenderContext, SSR, rendering lato server, ESM, gestione delle risorse"}]]}}}}]);