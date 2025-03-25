"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1779"],{10156:function(e,n,i){i.r(n),i.d(n,{default:()=>l});var t=i(31549),r=i(6603);function s(e){let n=Object.assign({pre:"pre",code:"code",p:"p",ul:"ul",li:"li",h2:"h2",a:"a",h3:"h3",ol:"ol",strong:"strong",h4:"h4"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"---\ntitleSuffix: Gez Framework - Code-Sharing-Mechanismus zwischen Diensten\ndescription: Detaillierte Erl\xe4uterung des Modul-Linking-Mechanismus im Gez Framework, einschlie\xdflich Code-Sharing zwischen Diensten, Abh\xe4ngigkeitsmanagement und Implementierung der ESM-Spezifikation, um Entwicklern beim Aufbau effizienter Micro-Frontend-Anwendungen zu helfen.\nhead:\n  - - meta\n    - property: keywords\n      content: Gez, Modul-Linking, Module Link, ESM, Code-Sharing, Abh\xe4ngigkeitsmanagement, Micro-Frontend\n---\n\n# Modul-Linking\n\nDas Gez Framework bietet einen umfassenden Modul-Linking-Mechanismus zur Verwaltung des Code-Sharings und der Abh\xe4ngigkeiten zwischen Diensten. Dieser Mechanismus basiert auf der ESM-Spezifikation (ECMAScript Module) und unterst\xfctzt das Exportieren und Importieren von Modulen auf Quellcode-Ebene sowie vollst\xe4ndige Abh\xe4ngigkeitsverwaltung.\n\n### Kernkonzepte\n\n#### Modul-Export\nDer Modul-Export ist der Prozess, bei dem spezifische Code-Einheiten (z.B. Komponenten, Utility-Funktionen) eines Dienstes im ESM-Format nach au\xdfen verf\xfcgbar gemacht werden. Es werden zwei Exporttypen unterst\xfctzt:\n- **Quellcode-Export**: Direktes Exportieren von Quellcode-Dateien aus dem Projekt\n- **Abh\xe4ngigkeits-Export**: Exportieren von verwendeten Drittanbieter-Abh\xe4ngigkeiten\n\n#### Modul-Linking\nDer Modul-Import ist der Prozess, bei dem Code-Einheiten, die von anderen Diensten exportiert wurden, in einem Dienst referenziert werden. Es werden mehrere Installationsmethoden unterst\xfctzt:\n- **Quellcode-Installation**: Geeignet f\xfcr Entwicklungsumgebungen, unterst\xfctzt Echtzeit\xe4nderungen und Hot-Reload\n- **Paket-Installation**: Geeignet f\xfcr Produktionsumgebungen, verwendet direkt die Build-Artefakte\n\n## Modul-Export\n\n### Konfigurationsbeschreibung\n\nKonfigurieren Sie die zu exportierenden Module in `entry.node.ts`:\n\n```ts title=\"src/entry.node.ts\"\nimport type { GezOptions } from '@gez/core';\n\nexport default {\n    modules: {\n        exports: [\n            // Exportieren von Quellcode-Dateien\n            'root:src/components/button.vue',  // Vue-Komponente\n            'root:src/utils/format.ts',        // Utility-Funktion\n            // Exportieren von Drittanbieter-Abh\xe4ngigkeiten\n            'npm:vue',                         // Vue-Framework\n            'npm:vue-router'                   // Vue Router\n        ]\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Die Exportkonfiguration unterst\xfctzt zwei Typen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"root:*"}),": Exportiert Quellcode-Dateien, der Pfad ist relativ zum Projektstammverzeichnis"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"npm:*"}),": Exportiert Drittanbieter-Abh\xe4ngigkeiten, direkt durch Angabe des Paketnamens"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"modul-import",children:["Modul-Import",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modul-import",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"konfigurationsbeschreibung",children:["Konfigurationsbeschreibung",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#konfigurationsbeschreibung",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Konfigurieren Sie die zu importierenden Module in ",(0,t.jsx)(n.code,{children:"entry.node.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    modules: {\n        // Link-Konfiguration\n        links: {\n            // Quellcode-Installation: Verweis auf das Build-Artefakt-Verzeichnis\n            'ssr-remote': 'root:./node_modules/ssr-remote/dist',\n            // Paket-Installation: Verweis auf das Paketverzeichnis\n            'other-remote': 'root:./node_modules/other-remote'\n        },\n        // Import-Mapping-Einstellungen\n        imports: {\n            // Verwenden von Abh\xe4ngigkeiten aus Remote-Modulen\n            'vue': 'ssr-remote/npm/vue',\n            'vue-router': 'ssr-remote/npm/vue-router'\n        }\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Konfigurationsoptionen:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"imports"}),": Konfiguriert den lokalen Pfad f\xfcr Remote-Module"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Quellcode-Installation: Verweis auf das Build-Artefakt-Verzeichnis (dist)"}),"\n",(0,t.jsx)(n.li,{children:"Paket-Installation: Direkter Verweis auf das Paketverzeichnis"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"externals"}),": Konfiguriert externe Abh\xe4ngigkeiten"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Zum Teilen von Abh\xe4ngigkeiten aus Remote-Modulen"}),"\n",(0,t.jsx)(n.li,{children:"Vermeidet das wiederholte Packen gleicher Abh\xe4ngigkeiten"}),"\n",(0,t.jsx)(n.li,{children:"Unterst\xfctzt das Teilen von Abh\xe4ngigkeiten zwischen mehreren Modulen"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"installationsmethoden",children:["Installationsmethoden",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installationsmethoden",children:"#"})]}),"\n",(0,t.jsxs)(n.h4,{id:"quellcode-installation",children:["Quellcode-Installation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quellcode-installation",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Geeignet f\xfcr Entwicklungsumgebungen, unterst\xfctzt Echtzeit\xe4nderungen und Hot-Reload."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Workspace-Methode"}),"\nEmpfohlen f\xfcr die Verwendung in Monorepo-Projekten:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "devDependencies": {\n        "ssr-remote": "workspace:*"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Link-Methode"}),"\nF\xfcr lokale Entwicklungs- und Debugging-Zwecke:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "devDependencies": {\n        "ssr-remote": "link:../ssr-remote"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"paket-installation",children:["Paket-Installation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#paket-installation",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Geeignet f\xfcr Produktionsumgebungen, verwendet direkt die Build-Artefakte."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NPM Registry"}),"\nInstallation \xfcber npm registry:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "dependencies": {\n        "ssr-remote": "^1.0.0"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Statischer Server"}),"\nInstallation \xfcber HTTP/HTTPS-Protokoll:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "dependencies": {\n        "ssr-remote": "https://cdn.example.com/ssr-remote/1.0.0.tgz"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"paket-build",children:["Paket-Build",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#paket-build",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"konfigurationsbeschreibung-1",children:["Konfigurationsbeschreibung",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#konfigurationsbeschreibung-1",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Konfigurieren Sie die Build-Optionen in ",(0,t.jsx)(n.code,{children:"entry.node.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    // Modul-Export-Konfiguration\n    modules: {\n        exports: [\n            'root:src/components/button.vue',\n            'root:src/utils/format.ts',\n            'npm:vue'\n        ]\n    },\n    // Build-Konfiguration\n    pack: {\n        // Build aktivieren\n        enable: true,\n\n        // Ausgabekonfiguration\n        outputs: [\n            'dist/client/versions/latest.tgz',\n            'dist/client/versions/1.0.0.tgz'\n        ],\n\n        // Benutzerdefinierte package.json\n        packageJson: async (gez, pkg) => {\n            pkg.version = '1.0.0';\n            return pkg;\n        },\n\n        // Vor-Build-Verarbeitung\n        onBefore: async (gez, pkg) => {\n            // Generieren von Typdeklarationen\n            // Ausf\xfchren von Testf\xe4llen\n            // Aktualisieren von Dokumentationen usw.\n        },\n\n        // Nach-Build-Verarbeitung\n        onAfter: async (gez, pkg, file) => {\n            // Hochladen auf CDN\n            // Ver\xf6ffentlichen im npm-Repository\n            // Bereitstellung in der Testumgebung usw.\n        }\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"build-artefakte",children:["Build-Artefakte",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-artefakte",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"your-app-name.tgz\n├── package.json        # Paketinformationen\n├── index.js            # Produktionsumgebungseinstieg\n├── server/             # Server-Ressourcen\n│   └── manifest.json   # Server-Ressourcen-Mapping\n├── node/               # Node.js-Laufzeit\n└── client/             # Client-Ressourcen\n    └── manifest.json   # Client-Ressourcen-Mapping\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"ver\\xf6ffentlichungsprozess",children:["Ver\xf6ffentlichungsprozess",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ver\\xf6ffentlichungsprozess",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# 1. Produktionsversion erstellen\ngez build\n\n# 2. Auf npm ver\xf6ffentlichen\nnpm publish dist/versions/your-app-name.tgz\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}let l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["de%2Fguide%2Fessentials%2Fmodule-link.md"]={toc:[{text:"Modul-Import",id:"modul-import",depth:2},{text:"Konfigurationsbeschreibung",id:"konfigurationsbeschreibung",depth:3},{text:"Installationsmethoden",id:"installationsmethoden",depth:3},{text:"Quellcode-Installation",id:"quellcode-installation",depth:4},{text:"Paket-Installation",id:"paket-installation",depth:4},{text:"Paket-Build",id:"paket-build",depth:2},{text:"Konfigurationsbeschreibung",id:"konfigurationsbeschreibung-1",depth:3},{text:"Build-Artefakte",id:"build-artefakte",depth:3},{text:"Ver\xf6ffentlichungsprozess",id:"ver\xf6ffentlichungsprozess",depth:3}],title:"",headingTitle:"",frontmatter:{}}}}]);