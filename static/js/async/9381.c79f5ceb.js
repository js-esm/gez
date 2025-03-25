"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9381"],{56110:function(n,e,s){s.r(e),s.d(e,{default:()=>l});var i=s(31549),r=s(6603);function c(n){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",h3:"h3",h4:"h4"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"packconfig",children:["PackConfig",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#packconfig",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"PackConfig"})," सॉफ़्टवेयर पैकेज पैकेजिंग कॉन्फ़िगरेशन इंटरफ़ेस है, जिसका उपयोग सेवा के बिल्ड आउटपुट को मानक npm .tgz प्रारूप में पैकेज करने के लिए किया जाता है।"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"मानकीकरण"}),": npm मानक .tgz पैकेजिंग प्रारूप का उपयोग करता है"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"पूर्णता"}),": मॉड्यूल के स्रोत कोड, टाइप डिक्लेरेशन और कॉन्फ़िगरेशन फ़ाइलों सहित सभी आवश्यक फ़ाइलें शामिल हैं"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"संगतता"}),": npm इकोसिस्टम के साथ पूरी तरह से संगत, मानक पैकेज प्रबंधन वर्कफ़्लो का समर्थन करता है"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"प्रकार-परिभाषा",children:["प्रकार परिभाषा",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#प्रकार-परिभाषा",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"interface PackConfig {\n    enable?: boolean;\n    outputs?: string | string[] | boolean;\n    packageJson?: (gez: Gez, pkg: Record<string, any>) => Promise<Record<string, any>>;\n    onBefore?: (gez: Gez, pkg: Record<string, any>) => Promise<void>;\n    onAfter?: (gez: Gez, pkg: Record<string, any>, file: Buffer) => Promise<void>;\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"packconfig-1",children:["PackConfig",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#packconfig-1",children:"#"})]}),"\n",(0,i.jsxs)(e.h4,{id:"enable",children:["enable",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"पैकेजिंग सुविधा को सक्षम करें या नहीं। सक्षम करने पर बिल्ड आउटपुट को मानक npm .tgz प्रारूप में पैकेज किया जाएगा।"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["प्रकार: ",(0,i.jsx)(e.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(e.li,{children:["डिफ़ॉल्ट मान: ",(0,i.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(e.h4,{id:"outputs",children:["outputs",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#outputs",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"आउटपुट पैकेज फ़ाइल पथ निर्दिष्ट करें। निम्नलिखित कॉन्फ़िगरेशन विधियों का समर्थन करता है:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"string"}),": एकल आउटपुट पथ, जैसे 'dist/versions/my-app.tgz'"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"string[]"}),": एकाधिक आउटपुट पथ, एक साथ कई संस्करण उत्पन्न करने के लिए"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"boolean"}),": true होने पर डिफ़ॉल्ट पथ 'dist/client/versions/latest.tgz' का उपयोग करता है"]}),"\n"]}),"\n",(0,i.jsxs)(e.h4,{id:"packagejson",children:["packageJson",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"package.json सामग्री को अनुकूलित करने के लिए कॉलबैक फ़ंक्शन। पैकेजिंग से पहले कॉल किया जाता है, package.json की सामग्री को अनुकूलित करने के लिए उपयोग किया जाता है।"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["पैरामीटर:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"gez: Gez"})," - Gez उदाहरण"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"pkg: any"})," - मूल package.json सामग्री"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["रिटर्न मान: ",(0,i.jsx)(e.code,{children:"Promise<any>"})," - संशोधित package.json सामग्री"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"सामान्य उपयोग:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"पैकेज नाम और संस्करण संख्या संशोधित करना"}),"\n",(0,i.jsx)(e.li,{children:"निर्भरताएँ जोड़ना या अद्यतन करना"}),"\n",(0,i.jsx)(e.li,{children:"कस्टम फ़ील्ड जोड़ना"}),"\n",(0,i.jsx)(e.li,{children:"प्रकाशन संबंधी जानकारी कॉन्फ़िगर करना"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"उदाहरण:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"packageJson: async (gez, pkg) => {\n  // पैकेज जानकारी सेट करें\n  pkg.name = 'my-app';\n  pkg.version = '1.0.0';\n  pkg.description = 'मेरा एप्लिकेशन';\n\n  // निर्भरताएँ जोड़ें\n  pkg.dependencies = {\n    'vue': '^3.0.0',\n    'express': '^4.17.1'\n  };\n\n  // प्रकाशन कॉन्फ़िगरेशन जोड़ें\n  pkg.publishConfig = {\n    registry: 'https://registry.example.com'\n  };\n\n  return pkg;\n}\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"onbefore",children:["onBefore",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#onbefore",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"पैकेजिंग से पहले की तैयारी के लिए कॉलबैक फ़ंक्शन।"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["पैरामीटर:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"gez: Gez"})," - Gez उदाहरण"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"pkg: Record<string, any>"})," - package.json सामग्री"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["रिटर्न मान: ",(0,i.jsx)(e.code,{children:"Promise<void>"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"सामान्य उपयोग:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"अतिरिक्त फ़ाइलें जोड़ना (README, LICENSE आदि)"}),"\n",(0,i.jsx)(e.li,{children:"परीक्षण या बिल्ड सत्यापन निष्पादित करना"}),"\n",(0,i.jsx)(e.li,{children:"दस्तावेज़ या मेटाडेटा उत्पन्न करना"}),"\n",(0,i.jsx)(e.li,{children:"अस्थायी फ़ाइलों को साफ़ करना"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"उदाहरण:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"onBefore: async (gez, pkg) => {\n  // दस्तावेज़ जोड़ें\n  await fs.writeFile('dist/README.md', '# My App');\n  await fs.writeFile('dist/LICENSE', 'MIT License');\n\n  // परीक्षण निष्पादित करें\n  await runTests();\n\n  // दस्तावेज़ उत्पन्न करें\n  await generateDocs();\n\n  // अस्थायी फ़ाइलों को साफ़ करें\n  await cleanupTempFiles();\n}\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"onafter",children:["onAfter",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#onafter",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"पैकेजिंग पूर्ण होने के बाद के प्रसंस्करण के लिए कॉलबैक फ़ंक्शन। .tgz फ़ाइल उत्पन्न होने के बाद कॉल किया जाता है, पैकेज आउटपुट को संसाधित करने के लिए उपयोग किया जाता है।"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["पैरामीटर:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"gez: Gez"})," - Gez उदाहरण"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"pkg: Record<string, any>"})," - package.json सामग्री"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"file: Buffer"})," - पैकेज की गई फ़ाइल सामग्री"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["रिटर्न मान: ",(0,i.jsx)(e.code,{children:"Promise<void>"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"सामान्य उपयोग:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"npm रिपॉजिटरी (सार्वजनिक या निजी) पर प्रकाशित करना"}),"\n",(0,i.jsx)(e.li,{children:"स्थिर संसाधन सर्वर पर अपलोड करना"}),"\n",(0,i.jsx)(e.li,{children:"संस्करण प्रबंधन निष्पादित करना"}),"\n",(0,i.jsx)(e.li,{children:"CI/CD प्रक्रिया ट्रिगर करना"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"उदाहरण:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"onAfter: async (gez, pkg, file) => {\n  // npm निजी रिपॉजिटरी पर प्रकाशित करें\n  await publishToRegistry(file, {\n    registry: 'https://registry.example.com'\n  });\n\n  // स्थिर संसाधन सर्वर पर अपलोड करें\n  await uploadToServer(file, 'https://assets.example.com/packages');\n\n  // संस्करण टैग बनाएँ\n  await createGitTag(pkg.version);\n\n  // तैनाती प्रक्रिया ट्रिगर करें\n  await triggerDeploy(pkg.version);\n}\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"उपयोग-उदाहरण",children:["उपयोग उदाहरण",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#उपयोग-उदाहरण",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n  modules: {\n    // निर्यात करने के लिए आवश्यक मॉड्यूल कॉन्फ़िगर करें\n    exports: [\n      'root:src/components/button.vue',\n      'root:src/utils/format.ts',\n      'npm:vue',\n      'npm:vue-router'\n    ]\n  },\n  // पैकेजिंग कॉन्फ़िगरेशन\n  pack: {\n    // पैकेजिंग सुविधा सक्षम करें\n    enable: true,\n\n    // एक साथ कई संस्करण आउटपुट करें\n    outputs: [\n      'dist/versions/latest.tgz',\n      'dist/versions/1.0.0.tgz'\n    ],\n\n    // package.json को अनुकूलित करें\n    packageJson: async (gez, pkg) => {\n      pkg.version = '1.0.0';\n      return pkg;\n    },\n\n    // पैकेजिंग से पहले तैयारी\n    onBefore: async (gez, pkg) => {\n      // आवश्यक फ़ाइलें जोड़ें\n      await fs.writeFile('dist/README.md', '# Your App\\n\\nमॉड्यूल निर्यात स्पष्टीकरण...');\n      // टाइप जाँच निष्पादित करें\n      await runTypeCheck();\n    },\n\n    // पैकेजिंग के बाद प्रसंस्करण\n    onAfter: async (gez, pkg, file) => {\n      // निजी npm मिरर पर प्रकाशित करें\n      await publishToRegistry(file, {\n        registry: 'https://npm.your-registry.com/'\n      });\n      // या स्थिर सर्वर पर तैनात करें\n      await uploadToServer(file, 'https://static.example.com/packages');\n    }\n  }\n} satisfies GezOptions;\n"})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}let l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["hi%2Fapi%2Fcore%2Fpack-config.md"]={toc:[{text:"प्रकार परिभाषा",id:"प्रकार-परिभाषा",depth:2},{text:"PackConfig",id:"packconfig-1",depth:3},{text:"enable",id:"enable",depth:4},{text:"outputs",id:"outputs",depth:4},{text:"packageJson",id:"packagejson",depth:4},{text:"onBefore",id:"onbefore",depth:4},{text:"onAfter",id:"onafter",depth:4},{text:"उपयोग उदाहरण",id:"उपयोग-उदाहरण",depth:2}],title:"PackConfig",headingTitle:"PackConfig",frontmatter:{titleSuffix:"Gez फ्रेमवर्क पैकेजिंग कॉन्फ़िगरेशन API संदर्भ",description:"Gez फ्रेमवर्क के PackConfig कॉन्फ़िगरेशन इंटरफ़ेस का विस्तृत विवरण, जिसमें सॉफ़्टवेयर पैकेज पैकेजिंग नियम, आउटपुट कॉन्फ़िगरेशन और लाइफ़साइकल हुक शामिल हैं, जो डेवलपर्स को मानकीकृत बिल्ड प्रक्रिया को लागू करने में मदद करता है।",head:[["meta",{property:"keywords",content:"Gez, PackConfig, सॉफ़्टवेयर पैकेज पैकेजिंग, बिल्ड कॉन्फ़िगरेशन, लाइफ़साइकल हुक, पैकेजिंग कॉन्फ़िगरेशन, वेब एप्लिकेशन फ्रेमवर्क"}]]}}}}]);