"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1400"],{88480:function(e,n,s){s.r(n),s.d(n,{default:()=>l});var r=s(31549),i=s(6603);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",ul:"ul",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"contexte-de-rendu",children:["Contexte de rendu",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#contexte-de-rendu",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RenderContext est une classe centrale du framework Gez, principalement responsable de la gestion des ressources et de la g\xe9n\xe9ration de HTML pendant le processus de rendu c\xf4t\xe9 serveur (SSR). Il poss\xe8de les caract\xe9ristiques principales suivantes :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syst\xe8me de modules bas\xe9 sur ESM"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Utilise la norme moderne ECMAScript Modules"}),"\n",(0,r.jsx)(n.li,{children:"Prend en charge l'importation et l'exportation natives de modules"}),"\n",(0,r.jsx)(n.li,{children:"Permet une meilleure division du code et un chargement \xe0 la demande"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Collecte intelligente des d\xe9pendances"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Collecte dynamiquement les d\xe9pendances en fonction du chemin de rendu r\xe9el"}),"\n",(0,r.jsx)(n.li,{children:"\xc9vite le chargement inutile de ressources"}),"\n",(0,r.jsx)(n.li,{children:"Prend en charge les composants asynchrones et l'importation dynamique"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Injection pr\xe9cise des ressources"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contr\xf4le strict de l'ordre de chargement des ressources"}),"\n",(0,r.jsx)(n.li,{children:"Optimise les performances de chargement de la premi\xe8re page"}),"\n",(0,r.jsx)(n.li,{children:"Assure la fiabilit\xe9 de l'activation c\xf4t\xe9 client (Hydration)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"M\xe9canisme de configuration flexible"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prend en charge la configuration dynamique du chemin de base"}),"\n",(0,r.jsx)(n.li,{children:"Fournit plusieurs modes de mappage d'importation"}),"\n",(0,r.jsx)(n.li,{children:"S'adapte \xe0 diff\xe9rents sc\xe9narios de d\xe9ploiement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"mode-dutilisation",children:["Mode d'utilisation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mode-dutilisation",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le framework Gez, les d\xe9veloppeurs n'ont g\xe9n\xe9ralement pas besoin de cr\xe9er directement une instance de RenderContext, mais peuvent obtenir une instance via la m\xe9thode ",(0,r.jsx)(n.code,{children:"gez.render()"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"async server(gez) {\n    const server = http.createServer((req, res) => {\n        // Traitement des fichiers statiques\n        gez.middleware(req, res, async () => {\n            // Obtention d'une instance de RenderContext via gez.render()\n            const rc = await gez.render({\n                params: {\n                    url: req.url\n                }\n            });\n            // R\xe9ponse avec le contenu HTML\n            res.end(rc.html);\n        });\n    });\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"fonctionnalit\\xe9s-principales",children:["Fonctionnalit\xe9s principales",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fonctionnalit\\xe9s-principales",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"collecte-des-d\\xe9pendances",children:["Collecte des d\xe9pendances",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#collecte-des-d\\xe9pendances",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RenderContext impl\xe9mente un m\xe9canisme intelligent de collecte des d\xe9pendances, bas\xe9 sur les composants r\xe9ellement rendus pour collecter dynamiquement les d\xe9pendances, plut\xf4t que de pr\xe9charger simplement toutes les ressources potentielles :"}),"\n",(0,r.jsxs)(n.h4,{id:"collecte-\\xe0-la-demande",children:["Collecte \xe0 la demande",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#collecte-\\xe0-la-demande",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Suit et enregistre automatiquement les d\xe9pendances des modules pendant le rendu des composants"}),"\n",(0,r.jsx)(n.li,{children:"Ne collecte que les ressources CSS, JavaScript, etc., r\xe9ellement utilis\xe9es lors du rendu de la page actuelle"}),"\n",(0,r.jsxs)(n.li,{children:["Enregistre avec pr\xe9cision les relations de d\xe9pendance des modules de chaque composant via ",(0,r.jsx)(n.code,{children:"importMetaSet"})]}),"\n",(0,r.jsx)(n.li,{children:"Prend en charge la collecte des d\xe9pendances pour les composants asynchrones et l'importation dynamique"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"traitement-automatis\\xe9",children:["Traitement automatis\xe9",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#traitement-automatis\\xe9",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les d\xe9veloppeurs n'ont pas besoin de g\xe9rer manuellement le processus de collecte des d\xe9pendances"}),"\n",(0,r.jsx)(n.li,{children:"Le framework collecte automatiquement les informations de d\xe9pendance lors du rendu des composants"}),"\n",(0,r.jsxs)(n.li,{children:["Traite toutes les ressources collect\xe9es via la m\xe9thode ",(0,r.jsx)(n.code,{children:"commit()"})]}),"\n",(0,r.jsx)(n.li,{children:"G\xe8re automatiquement les probl\xe8mes de d\xe9pendances circulaires et redondantes"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"optimisation-des-performances",children:["Optimisation des performances",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optimisation-des-performances",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xc9vite le chargement de modules inutilis\xe9s, r\xe9duisant significativement le temps de chargement de la premi\xe8re page"}),"\n",(0,r.jsx)(n.li,{children:"Contr\xf4le pr\xe9cis de l'ordre de chargement des ressources, optimisant les performances de rendu de la page"}),"\n",(0,r.jsx)(n.li,{children:"G\xe9n\xe8re automatiquement un mappage d'importation (Import Map) optimal"}),"\n",(0,r.jsx)(n.li,{children:"Prend en charge les strat\xe9gies de pr\xe9chargement et de chargement \xe0 la demande des ressources"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"injection-des-ressources",children:["Injection des ressources",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#injection-des-ressources",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RenderContext fournit plusieurs m\xe9thodes pour injecter diff\xe9rents types de ressources, chaque m\xe9thode \xe9tant con\xe7ue pour optimiser les performances de chargement des ressources :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"preload()"})," : Pr\xe9chage des ressources CSS et JS, avec prise en charge de la configuration des priorit\xe9s"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"css()"})," : Injection des feuilles de style pour la premi\xe8re page, avec prise en charge de l'extraction des CSS critiques"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"importmap()"})," : Injection du mappage d'importation des modules, avec prise en charge de la r\xe9solution dynamique des chemins"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"moduleEntry()"})," : Injection du module d'entr\xe9e c\xf4t\xe9 client, avec prise en charge de la configuration multi-entr\xe9es"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modulePreload()"})," : Pr\xe9chargement des d\xe9pendances des modules, avec prise en charge des strat\xe9gies de chargement \xe0 la demande"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"ordre-dinjection-des-ressources",children:["Ordre d'injection des ressources",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ordre-dinjection-des-ressources",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RenderContext contr\xf4le strictement l'ordre d'injection des ressources, cet ordre \xe9tant con\xe7u en fonction du fonctionnement des navigateurs et des consid\xe9rations d'optimisation des performances :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Partie head :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"preload()"})," : Pr\xe9chage des ressources CSS et JS, permettant au navigateur de d\xe9couvrir et de commencer \xe0 charger ces ressources d\xe8s que possible"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"css()"})," : Injection des feuilles de style pour la premi\xe8re page, assurant que les styles de la page sont en place lors du rendu du contenu"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Partie body :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"importmap()"})," : Injection du mappage d'importation des modules, d\xe9finissant les r\xe8gles de r\xe9solution des chemins pour les modules ESM"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"moduleEntry()"})," : Injection du module d'entr\xe9e c\xf4t\xe9 client, doit \xeatre ex\xe9cut\xe9 apr\xe8s importmap"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modulePreload()"})," : Pr\xe9chargement des d\xe9pendances des modules, doit \xeatre ex\xe9cut\xe9 apr\xe8s importmap"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"processus-de-rendu-complet",children:["Processus de rendu complet",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processus-de-rendu-complet",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Un processus typique d'utilisation de RenderContext est le suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"export default async (rc: RenderContext) => {\n    // 1. Rendu du contenu de la page et collecte des d\xe9pendances\n    const app = createApp();\n    const html = await renderToString(app, {\n       importMetaSet: rc.importMetaSet\n    });\n\n    // 2. Soumission de la collecte des d\xe9pendances\n    await rc.commit();\n    \n    // 3. G\xe9n\xe9ration du HTML complet\n    rc.html = `\n        <!DOCTYPE html>\n        <html>\n        <head>\n            ${rc.preload()}\n            ${rc.css()}\n        </head>\n        <body>\n            ${html}\n            ${rc.importmap()}\n            ${rc.moduleEntry()}\n            ${rc.modulePreload()}\n        </body>\n        </html>\n    `;\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"fonctionnalit\\xe9s-avanc\\xe9es",children:["Fonctionnalit\xe9s avanc\xe9es",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fonctionnalit\\xe9s-avanc\\xe9es",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"configuration-du-chemin-de-base",children:["Configuration du chemin de base",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-du-chemin-de-base",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RenderContext fournit un m\xe9canisme flexible de configuration dynamique du chemin de base, permettant de d\xe9finir dynamiquement le chemin de base des ressources statiques lors de l'ex\xe9cution :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    base: '/gez',  // D\xe9finition du chemin de base\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ce m\xe9canisme est particuli\xe8rement utile dans les sc\xe9narios suivants :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"D\xe9ploiement de sites multilingues"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"domaine.com      → Langue par d\xe9faut\ndomaine.com/cn/  → Site en chinois\ndomaine.com/en/  → Site en anglais\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Applications micro-frontend"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prend en charge le d\xe9ploiement flexible des sous-applications \xe0 diff\xe9rents chemins"}),"\n",(0,r.jsx)(n.li,{children:"Facilite l'int\xe9gration dans diff\xe9rentes applications principales"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"modes-de-mappage-dimportation",children:["Modes de mappage d'importation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modes-de-mappage-dimportation",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RenderContext propose deux modes de mappage d'importation (Import Map) :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mode Inline"})," (par d\xe9faut)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Int\xe8gre directement le mappage d'importation dans le HTML"}),"\n",(0,r.jsx)(n.li,{children:"Convient aux petites applications, r\xe9duisant les requ\xeates r\xe9seau suppl\xe9mentaires"}),"\n",(0,r.jsx)(n.li,{children:"Disponible imm\xe9diatement lors du chargement de la page"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Mode JS"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Charge le mappage d'importation via un fichier JavaScript externe"}),"\n",(0,r.jsx)(n.li,{children:"Convient aux grandes applications, permettant d'utiliser le m\xe9canisme de cache du navigateur"}),"\n",(0,r.jsx)(n.li,{children:"Prend en charge la mise \xe0 jour dynamique du contenu du mappage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Il est possible de choisir le mode appropri\xe9 via la configuration :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    importmapMode: 'js',  // 'inline' | 'js'\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"configuration-de-la-fonction-dentr\\xe9e",children:["Configuration de la fonction d'entr\xe9e",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-de-la-fonction-dentr\\xe9e",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["RenderContext prend en charge la configuration de la fonction d'entr\xe9e pour le rendu c\xf4t\xe9 serveur via ",(0,r.jsx)(n.code,{children:"entryName"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"const rc = await gez.render({\n    entryName: 'mobile',  // Sp\xe9cification de la fonction d'entr\xe9e pour mobile\n    params: {\n        url: req.url\n    }\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ce m\xe9canisme est particuli\xe8rement utile dans les sc\xe9narios suivants :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Rendu multi-mod\xe8les"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"// Fonction d'entr\xe9e pour mobile\nexport const mobile = async (rc: RenderContext) => {\n    // Logique de rendu sp\xe9cifique au mobile\n};\n\n// Fonction d'entr\xe9e pour desktop\nexport const desktop = async (rc: RenderContext) => {\n    // Logique de rendu sp\xe9cifique au desktop\n};\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tests A/B"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prend en charge l'utilisation de diff\xe9rentes logiques de rendu pour la m\xeame page"}),"\n",(0,r.jsx)(n.li,{children:"Facilite les exp\xe9riences utilisateur"}),"\n",(0,r.jsx)(n.li,{children:"Permet de basculer facilement entre diff\xe9rentes strat\xe9gies de rendu"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Besoins de rendu sp\xe9cifiques"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prend en charge l'utilisation de flux de rendu personnalis\xe9s pour certaines pages"}),"\n",(0,r.jsx)(n.li,{children:"S'adapte aux besoins d'optimisation des performances pour diff\xe9rents sc\xe9narios"}),"\n",(0,r.jsx)(n.li,{children:"Permet un contr\xf4le plus fin du rendu"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"bonnes-pratiques",children:["Bonnes pratiques",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bonnes-pratiques",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Obtention d'une instance de RenderContext"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Toujours obtenir une instance via la m\xe9thode ",(0,r.jsx)(n.code,{children:"gez.render()"})]}),"\n",(0,r.jsx)(n.li,{children:"Passer les param\xe8tres appropri\xe9s selon les besoins"}),"\n",(0,r.jsx)(n.li,{children:"\xc9viter de cr\xe9er manuellement des instances"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Collecte des d\xe9pendances"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["S'assurer que tous les modules appellent correctement ",(0,r.jsx)(n.code,{children:"importMetaSet.add(import.meta)"})]}),"\n",(0,r.jsxs)(n.li,{children:["Appeler imm\xe9diatement la m\xe9thode ",(0,r.jsx)(n.code,{children:"commit()"})," apr\xe8s le rendu"]}),"\n",(0,r.jsx)(n.li,{children:"Utiliser judicieusement les composants asynchrones et l'importation dynamique pour optimiser le chargement de la premi\xe8re page"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Injection des ressources"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Suivre strictement l'ordre d'injection des ressources"}),"\n",(0,r.jsx)(n.li,{children:"Ne pas injecter de CSS dans le body"}),"\n",(0,r.jsx)(n.li,{children:"S'assurer que importmap est ex\xe9cut\xe9 avant moduleEntry"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Optimisation des performances"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Utiliser preload pour pr\xe9charger les ressources critiques"}),"\n",(0,r.jsx)(n.li,{children:"Utiliser judicieusement modulePreload pour optimiser le chargement des modules"}),"\n",(0,r.jsx)(n.li,{children:"\xc9viter le chargement inutile de ressources"}),"\n",(0,r.jsx)(n.li,{children:"Tirer parti du m\xe9canisme de cache du navigateur pour optimiser les performances de chargement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["fr%2Fguide%2Fessentials%2Frender-context.md"]={toc:[{text:"Mode d'utilisation",id:"mode-dutilisation",depth:2},{text:"Fonctionnalit\xe9s principales",id:"fonctionnalit\xe9s-principales",depth:2},{text:"Collecte des d\xe9pendances",id:"collecte-des-d\xe9pendances",depth:3},{text:"Collecte \xe0 la demande",id:"collecte-\xe0-la-demande",depth:4},{text:"Traitement automatis\xe9",id:"traitement-automatis\xe9",depth:4},{text:"Optimisation des performances",id:"optimisation-des-performances",depth:4},{text:"Injection des ressources",id:"injection-des-ressources",depth:3},{text:"Ordre d'injection des ressources",id:"ordre-dinjection-des-ressources",depth:3},{text:"Processus de rendu complet",id:"processus-de-rendu-complet",depth:2},{text:"Fonctionnalit\xe9s avanc\xe9es",id:"fonctionnalit\xe9s-avanc\xe9es",depth:2},{text:"Configuration du chemin de base",id:"configuration-du-chemin-de-base",depth:3},{text:"Modes de mappage d'importation",id:"modes-de-mappage-dimportation",depth:3},{text:"Configuration de la fonction d'entr\xe9e",id:"configuration-de-la-fonction-dentr\xe9e",depth:3},{text:"Bonnes pratiques",id:"bonnes-pratiques",depth:2}],title:"Contexte de rendu",headingTitle:"Contexte de rendu",frontmatter:{titleSuffix:"M\xe9canisme de rendu c\xf4t\xe9 serveur du framework Gez",description:"D\xe9tails sur le m\xe9canisme de contexte de rendu (RenderContext) du framework Gez, incluant la gestion des ressources, la g\xe9n\xe9ration de HTML et le syst\xe8me de modules ESM, pour aider les d\xe9veloppeurs \xe0 comprendre et utiliser la fonctionnalit\xe9 de rendu c\xf4t\xe9 serveur.",head:[["meta",{property:"keywords",content:"Gez, contexte de rendu, RenderContext, SSR, rendu c\xf4t\xe9 serveur, ESM, gestion des ressources"}]]}}}}]);