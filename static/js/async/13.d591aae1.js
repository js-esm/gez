"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["13"],{30780:function(e,n,a){a.r(n),a.d(n,{default:()=>t});var i=a(31549),r=a(6603);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",h3:"h3",h4:"h4"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"packconfig",children:["PackConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packconfig",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PackConfig"}),", hizmetlerin yapı \xfcr\xfcnlerini standart npm .tgz formatında yazılım paketleri olarak paketlemek i\xe7in kullanılan bir yazılım paketi paketleme yapılandırma aray\xfcz\xfcd\xfcr."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Standartlaştırma"}),": npm standart .tgz paketleme formatını kullanır"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"B\xfct\xfcnl\xfck"}),": Mod\xfcl\xfcn kaynak kodunu, t\xfcr bildirimlerini ve yapılandırma dosyalarını i\xe7eren t\xfcm gerekli dosyaları i\xe7erir"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Uyumluluk"}),": npm ekosistemi ile tam uyumlu, standart paket y\xf6netimi iş akışlarını destekler"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"t\\xfcr-tanımı",children:["T\xfcr Tanımı",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#t\\xfcr-tanımı",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface PackConfig {\n    enable?: boolean;\n    outputs?: string | string[] | boolean;\n    packageJson?: (gez: Gez, pkg: Record<string, any>) => Promise<Record<string, any>>;\n    onBefore?: (gez: Gez, pkg: Record<string, any>) => Promise<void>;\n    onAfter?: (gez: Gez, pkg: Record<string, any>, file: Buffer) => Promise<void>;\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"packconfig-1",children:["PackConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packconfig-1",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"enable",children:["enable",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Paketleme \xf6zelliğinin etkinleştirilip etkinleştirilmeyeceği. Etkinleştirildiğinde yapı \xfcr\xfcnleri standart npm .tgz formatında yazılım paketleri olarak paketlenir."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["T\xfcr: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["Varsayılan değer: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"outputs",children:["outputs",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputs",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\xc7ıktı yazılım paketi dosya yolunu belirtir. Aşağıdaki yapılandırma y\xf6ntemlerini destekler:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string"}),": Tek bir \xe7ıktı yolu, \xf6rneğin 'dist/versions/my-app.tgz'"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string[]"}),": Birden fazla \xe7ıktı yolu, aynı anda birden fazla s\xfcr\xfcm oluşturmak i\xe7in kullanılır"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boolean"}),": true olduğunda varsayılan yol 'dist/client/versions/latest.tgz' kullanılır"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"packagejson",children:["packageJson",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"package.json i\xe7eriğini \xf6zelleştirmek i\xe7in geri \xe7ağırma fonksiyonu. Paketlemeden \xf6nce \xe7ağrılır, package.json i\xe7eriğini \xf6zelleştirmek i\xe7in kullanılır."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Parametreler:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gez: Gez"})," - Gez \xf6rneği"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pkg: any"})," - Orijinal package.json i\xe7eriği"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["D\xf6n\xfcş değeri: ",(0,i.jsx)(n.code,{children:"Promise<any>"})," - Değiştirilmiş package.json i\xe7eriği"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Yaygın kullanımlar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Paket adını ve s\xfcr\xfcm numarasını değiştirme"}),"\n",(0,i.jsx)(n.li,{children:"Bağımlılıkları ekleme veya g\xfcncelleme"}),"\n",(0,i.jsx)(n.li,{children:"\xd6zel alanlar ekleme"}),"\n",(0,i.jsx)(n.li,{children:"Yayınlama bilgilerini yapılandırma"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\xd6rnek:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"packageJson: async (gez, pkg) => {\n  // Paket bilgilerini ayarla\n  pkg.name = 'my-app';\n  pkg.version = '1.0.0';\n  pkg.description = 'Uygulamam';\n\n  // Bağımlılık ekle\n  pkg.dependencies = {\n    'vue': '^3.0.0',\n    'express': '^4.17.1'\n  };\n\n  // Yayın yapılandırması ekle\n  pkg.publishConfig = {\n    registry: 'https://registry.example.com'\n  };\n\n  return pkg;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"onbefore",children:["onBefore",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbefore",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Paketleme \xf6ncesi hazırlık işlemleri i\xe7in geri \xe7ağırma fonksiyonu."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Parametreler:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gez: Gez"})," - Gez \xf6rneği"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pkg: Record<string, any>"})," - package.json i\xe7eriği"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["D\xf6n\xfcş değeri: ",(0,i.jsx)(n.code,{children:"Promise<void>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Yaygın kullanımlar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ek dosyalar ekleme (README, LICENSE vb.)"}),"\n",(0,i.jsx)(n.li,{children:"Test veya yapı doğrulama \xe7alıştırma"}),"\n",(0,i.jsx)(n.li,{children:"Dok\xfcmantasyon veya meta veri oluşturma"}),"\n",(0,i.jsx)(n.li,{children:"Ge\xe7ici dosyaları temizleme"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\xd6rnek:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"onBefore: async (gez, pkg) => {\n  // Dok\xfcmantasyon ekle\n  await fs.writeFile('dist/README.md', '# Uygulamam');\n  await fs.writeFile('dist/LICENSE', 'MIT Lisansı');\n\n  // Testleri \xe7alıştır\n  await runTests();\n\n  // Dok\xfcmantasyon oluştur\n  await generateDocs();\n\n  // Ge\xe7ici dosyaları temizle\n  await cleanupTempFiles();\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"onafter",children:["onAfter",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafter",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Paketleme tamamlandıktan sonraki işlemler i\xe7in geri \xe7ağırma fonksiyonu. .tgz dosyası oluşturulduktan sonra \xe7ağrılır, paketleme \xfcr\xfcnlerini işlemek i\xe7in kullanılır."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Parametreler:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gez: Gez"})," - Gez \xf6rneği"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pkg: Record<string, any>"})," - package.json i\xe7eriği"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"file: Buffer"})," - Paketlenmiş dosya i\xe7eriği"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["D\xf6n\xfcş değeri: ",(0,i.jsx)(n.code,{children:"Promise<void>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Yaygın kullanımlar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"npm deposuna yayınlama (genel veya \xf6zel)"}),"\n",(0,i.jsx)(n.li,{children:"Statik kaynak sunucusuna y\xfckleme"}),"\n",(0,i.jsx)(n.li,{children:"S\xfcr\xfcm y\xf6netimi yapma"}),"\n",(0,i.jsx)(n.li,{children:"CI/CD s\xfcrecini tetikleme"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\xd6rnek:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"onAfter: async (gez, pkg, file) => {\n  // \xd6zel npm deposuna yayınla\n  await publishToRegistry(file, {\n    registry: 'https://registry.example.com'\n  });\n\n  // Statik sunucuya y\xfckle\n  await uploadToServer(file, 'https://assets.example.com/packages');\n\n  // Git etiketi oluştur\n  await createGitTag(pkg.version);\n\n  // Dağıtım s\xfcrecini tetikle\n  await triggerDeploy(pkg.version);\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"kullanım-\\xf6rneği",children:["Kullanım \xd6rneği",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#kullanım-\\xf6rneği",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n  modules: {\n    // Dışa aktarılacak mod\xfclleri yapılandır\n    exports: [\n      'root:src/components/button.vue',\n      'root:src/utils/format.ts',\n      'npm:vue',\n      'npm:vue-router'\n    ]\n  },\n  // Paketleme yapılandırması\n  pack: {\n    // Paketleme \xf6zelliğini etkinleştir\n    enable: true,\n\n    // Birden fazla s\xfcr\xfcm \xe7ıktısı\n    outputs: [\n      'dist/versions/latest.tgz',\n      'dist/versions/1.0.0.tgz'\n    ],\n\n    // package.json'ı \xf6zelleştir\n    packageJson: async (gez, pkg) => {\n      pkg.version = '1.0.0';\n      return pkg;\n    },\n\n    // Paketleme \xf6ncesi hazırlık\n    onBefore: async (gez, pkg) => {\n      // Gerekli dosyaları ekle\n      await fs.writeFile('dist/README.md', '# Uygulamanız\\n\\nMod\xfcl dışa aktarma a\xe7ıklamaları...');\n      // T\xfcr kontrol\xfc \xe7alıştır\n      await runTypeCheck();\n    },\n\n    // Paketleme sonrası işlemler\n    onAfter: async (gez, pkg, file) => {\n      // \xd6zel npm kaynağına yayınla\n      await publishToRegistry(file, {\n        registry: 'https://npm.your-registry.com/'\n      });\n      // Veya statik sunucuya dağıt\n      await uploadToServer(file, 'https://static.example.com/packages');\n    }\n  }\n} satisfies GezOptions;\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}let t=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["tr%2Fapi%2Fcore%2Fpack-config.md"]={toc:[{text:"T\xfcr Tanımı",id:"t\xfcr-tanımı",depth:2},{text:"PackConfig",id:"packconfig-1",depth:3},{text:"enable",id:"enable",depth:4},{text:"outputs",id:"outputs",depth:4},{text:"packageJson",id:"packagejson",depth:4},{text:"onBefore",id:"onbefore",depth:4},{text:"onAfter",id:"onafter",depth:4},{text:"Kullanım \xd6rneği",id:"kullanım-\xf6rneği",depth:2}],title:"PackConfig",headingTitle:"PackConfig",frontmatter:{titleSuffix:"Gez \xc7er\xe7evesi Paketleme Yapılandırma API Referansı",description:"Gez \xe7er\xe7evesinin PackConfig yapılandırma aray\xfcz\xfcn\xfc detaylı olarak a\xe7ıklar, yazılım paketi paketleme kurallarını, \xe7ıktı yapılandırmasını ve yaşam d\xf6ng\xfcs\xfc kancalarını i\xe7erir, geliştiricilerin standartlaştırılmış yapı s\xfcre\xe7lerini uygulamasına yardımcı olur.",head:[["meta",{property:"keywords",content:"Gez, PackConfig, yazılım paketi paketleme, yapı yapılandırması, yaşam d\xf6ng\xfcs\xfc kancaları, paketleme yapılandırması, Web uygulama \xe7er\xe7evesi"}]]}}}}]);