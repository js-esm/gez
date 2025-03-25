"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["573"],{88346:function(e,n,i){i.r(n),i.d(n,{default:()=>d});var r=i(31549),s=i(6603);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",h3:"h3",h4:"h4"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"packconfig",children:["PackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PackConfig"})," ist eine Schnittstelle zur Konfiguration der Paketverpackung, die verwendet wird, um die Build-Artefakte eines Dienstes in ein standardm\xe4\xdfiges npm .tgz-Format zu verpacken."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Standardisierung"}),": Verwendung des standardm\xe4\xdfigen npm .tgz-Verpackungsformats"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vollst\xe4ndigkeit"}),": Enth\xe4lt alle notwendigen Dateien wie Modulquellcode, Typdeklarationen und Konfigurationsdateien"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kompatibilit\xe4t"}),": Vollst\xe4ndige Kompatibilit\xe4t mit dem npm-\xd6kosystem und Unterst\xfctzung des standardm\xe4\xdfigen Paketmanagement-Workflows"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"typdefinition",children:["Typdefinition",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#typdefinition",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface PackConfig {\n    enable?: boolean;\n    outputs?: string | string[] | boolean;\n    packageJson?: (gez: Gez, pkg: Record<string, any>) => Promise<Record<string, any>>;\n    onBefore?: (gez: Gez, pkg: Record<string, any>) => Promise<void>;\n    onAfter?: (gez: Gez, pkg: Record<string, any>, file: Buffer) => Promise<void>;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"packconfig-1",children:["PackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packconfig-1",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"enable",children:["enable",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Aktiviert die Verpackungsfunktion. Wenn aktiviert, werden die Build-Artefakte in ein standardm\xe4\xdfiges npm .tgz-Format verpackt."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Typ: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:["Standardwert: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"outputs",children:["outputs",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputs",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Gibt den Ausgabepfad der Paketdatei an. Unterst\xfctzt folgende Konfigurationsm\xf6glichkeiten:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string"}),": Einzelner Ausgabepfad, z.B. 'dist/versions/my-app.tgz'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string[]"}),": Mehrere Ausgabepfade, um gleichzeitig mehrere Versionen zu generieren"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"boolean"}),": Bei true wird der Standardpfad 'dist/client/versions/latest.tgz' verwendet"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"packagejson",children:["packageJson",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Eine Callback-Funktion zur Anpassung des package.json-Inhalts. Wird vor der Verpackung aufgerufen, um den Inhalt von package.json anzupassen."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Parameter:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gez: Gez"})," - Gez-Instanz"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pkg: any"})," - Originaler package.json-Inhalt"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["R\xfcckgabewert: ",(0,r.jsx)(n.code,{children:"Promise<any>"})," - Angepasster package.json-Inhalt"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"H\xe4ufige Anwendungsf\xe4lle:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xc4ndern des Paketnamens und der Versionsnummer"}),"\n",(0,r.jsx)(n.li,{children:"Hinzuf\xfcgen oder Aktualisieren von Abh\xe4ngigkeiten"}),"\n",(0,r.jsx)(n.li,{children:"Hinzuf\xfcgen benutzerdefinierter Felder"}),"\n",(0,r.jsx)(n.li,{children:"Konfigurieren von Ver\xf6ffentlichungsinformationen"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"packageJson: async (gez, pkg) => {\n  // Paketinformationen setzen\n  pkg.name = 'my-app';\n  pkg.version = '1.0.0';\n  pkg.description = 'Meine Anwendung';\n\n  // Abh\xe4ngigkeiten hinzuf\xfcgen\n  pkg.dependencies = {\n    'vue': '^3.0.0',\n    'express': '^4.17.1'\n  };\n\n  // Ver\xf6ffentlichungskonfiguration hinzuf\xfcgen\n  pkg.publishConfig = {\n    registry: 'https://registry.example.com'\n  };\n\n  return pkg;\n}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"onbefore",children:["onBefore",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbefore",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Eine Callback-Funktion f\xfcr Vorbereitungen vor der Verpackung."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Parameter:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gez: Gez"})," - Gez-Instanz"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pkg: Record<string, any>"})," - package.json-Inhalt"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["R\xfcckgabewert: ",(0,r.jsx)(n.code,{children:"Promise<void>"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"H\xe4ufige Anwendungsf\xe4lle:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Hinzuf\xfcgen zus\xe4tzlicher Dateien (README, LICENSE usw.)"}),"\n",(0,r.jsx)(n.li,{children:"Ausf\xfchren von Tests oder Build-Validierungen"}),"\n",(0,r.jsx)(n.li,{children:"Generieren von Dokumentation oder Metadaten"}),"\n",(0,r.jsx)(n.li,{children:"Bereinigen tempor\xe4rer Dateien"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"onBefore: async (gez, pkg) => {\n  // Dokumentation hinzuf\xfcgen\n  await fs.writeFile('dist/README.md', '# My App');\n  await fs.writeFile('dist/LICENSE', 'MIT License');\n\n  // Tests ausf\xfchren\n  await runTests();\n\n  // Dokumentation generieren\n  await generateDocs();\n\n  // Tempor\xe4re Dateien bereinigen\n  await cleanupTempFiles();\n}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"onafter",children:["onAfter",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafter",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Eine Callback-Funktion f\xfcr die Nachbearbeitung nach der Verpackung. Wird nach der Generierung der .tgz-Datei aufgerufen, um die verpackten Artefakte zu verarbeiten."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Parameter:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gez: Gez"})," - Gez-Instanz"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pkg: Record<string, any>"})," - package.json-Inhalt"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"file: Buffer"})," - Inhalt der verpackten Datei"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["R\xfcckgabewert: ",(0,r.jsx)(n.code,{children:"Promise<void>"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"H\xe4ufige Anwendungsf\xe4lle:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ver\xf6ffentlichen im npm-Repository (\xf6ffentlich oder privat)"}),"\n",(0,r.jsx)(n.li,{children:"Hochladen auf einen statischen Ressourcenserver"}),"\n",(0,r.jsx)(n.li,{children:"Versionsverwaltung durchf\xfchren"}),"\n",(0,r.jsx)(n.li,{children:"CI/CD-Prozess ausl\xf6sen"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"onAfter: async (gez, pkg, file) => {\n  // Im privaten npm-Repository ver\xf6ffentlichen\n  await publishToRegistry(file, {\n    registry: 'https://registry.example.com'\n  });\n\n  // Auf statischen Ressourcenserver hochladen\n  await uploadToServer(file, 'https://assets.example.com/packages');\n\n  // Versions-Tag erstellen\n  await createGitTag(pkg.version);\n\n  // Bereitstellungsprozess ausl\xf6sen\n  await triggerDeploy(pkg.version);\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"verwendungsbeispiel",children:["Verwendungsbeispiel",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verwendungsbeispiel",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n  modules: {\n    // Konfigurieren der zu exportierenden Module\n    exports: [\n      'root:src/components/button.vue',\n      'root:src/utils/format.ts',\n      'npm:vue',\n      'npm:vue-router'\n    ]\n  },\n  // Verpackungskonfiguration\n  pack: {\n    // Verpackungsfunktion aktivieren\n    enable: true,\n\n    // Mehrere Versionen gleichzeitig ausgeben\n    outputs: [\n      'dist/versions/latest.tgz',\n      'dist/versions/1.0.0.tgz'\n    ],\n\n    // package.json anpassen\n    packageJson: async (gez, pkg) => {\n      pkg.version = '1.0.0';\n      return pkg;\n    },\n\n    // Vorbereitungen vor der Verpackung\n    onBefore: async (gez, pkg) => {\n      // Notwendige Dateien hinzuf\xfcgen\n      await fs.writeFile('dist/README.md', '# Your App\\n\\nModul-Export-Beschreibung...');\n      // Typ\xfcberpr\xfcfung durchf\xfchren\n      await runTypeCheck();\n    },\n\n    // Nachbearbeitung nach der Verpackung\n    onAfter: async (gez, pkg, file) => {\n      // Im privaten npm-Repository ver\xf6ffentlichen\n      await publishToRegistry(file, {\n        registry: 'https://npm.your-registry.com/'\n      });\n      // Oder auf statischen Server bereitstellen\n      await uploadToServer(file, 'https://static.example.com/packages');\n    }\n  }\n} satisfies GezOptions;\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["de%2Fapi%2Fcore%2Fpack-config.md"]={toc:[{text:"Typdefinition",id:"typdefinition",depth:2},{text:"PackConfig",id:"packconfig-1",depth:3},{text:"enable",id:"enable",depth:4},{text:"outputs",id:"outputs",depth:4},{text:"packageJson",id:"packagejson",depth:4},{text:"onBefore",id:"onbefore",depth:4},{text:"onAfter",id:"onafter",depth:4},{text:"Verwendungsbeispiel",id:"verwendungsbeispiel",depth:2}],title:"PackConfig",headingTitle:"PackConfig",frontmatter:{titleSuffix:"Gez Framework Pack-Konfigurations-API-Referenz",description:"Detaillierte Beschreibung der PackConfig-Konfigurationsschnittstelle des Gez-Frameworks, einschlie\xdflich Paketverpackungsregeln, Ausgabekonfiguration und Lifecycle-Hooks, um Entwicklern bei der Implementierung standardisierter Build-Prozesse zu helfen.",head:[["meta",{property:"keywords",content:"Gez, PackConfig, Paketverpackung, Build-Konfiguration, Lifecycle-Hooks, Verpackungskonfiguration, Web-Anwendungsframework"}]]}}}}]);