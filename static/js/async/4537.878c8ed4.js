"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4537"],{20253:function(e,n,r){r.r(n),r.d(n,{default:()=>c});var s=r(31549),i=r(6603);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",h4:"h4"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"moduleconfig",children:["ModuleConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#moduleconfig",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"ModuleConfig ให้ความสามารถในการกำหนดค่าโมดูลของเฟรมเวิร์ก Gez ใช้สำหรับกำหนดกฎการนำเข้าและส่งออกโมดูล การกำหนดค่าชื่อแฝง และการพึ่งพาภายนอก"}),"\n",(0,s.jsxs)(n.h2,{id:"นิยามประเภท",children:["นิยามประเภท",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#นิยามประเภท",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"pathtype",children:["PathType",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pathtype",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"นิยามประเภท"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"enum PathType {\n  npm = 'npm:', \n  root = 'root:'\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"การแจงนับประเภทเส้นทางโมดูล:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm"}),": หมายถึงการพึ่งพาใน node_modules"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": หมายถึงไฟล์ในไดเรกทอรีรากของโปรเจกต์"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"moduleconfig-1",children:["ModuleConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#moduleconfig-1",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"นิยามประเภท"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ModuleConfig {\n  exports?: string[]\n  links?: Record<string, string>\n  imports?: Record<string, string>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"อินเทอร์เฟซการกำหนดค่าโมดูล ใช้สำหรับกำหนดค่าการส่งออก การนำเข้า และการพึ่งพาภายนอกของบริการ"}),"\n",(0,s.jsxs)(n.h4,{id:"exports",children:["exports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exports",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"รายการกำหนดค่าการส่งออก ใช้เพื่อเปิดเผยหน่วยโค้ดเฉพาะ (เช่น คอมโพเนนต์ ฟังก์ชันเครื่องมือ ฯลฯ) ในรูปแบบ ESM"}),"\n",(0,s.jsx)(n.p,{children:"รองรับสองประเภท:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root:*"}),": ส่งออกไฟล์ต้นฉบับ เช่น: ",(0,s.jsx)(n.code,{children:"root:src/components/button.vue"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm:*"}),": ส่งออกการพึ่งพาบุคคลที่สาม เช่น: ",(0,s.jsx)(n.code,{children:"npm:vue"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"แต่ละรายการส่งออกมีคุณสมบัติต่อไปนี้:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": เส้นทางส่งออกต้นฉบับ เช่น: ",(0,s.jsx)(n.code,{children:"npm:vue"})," หรือ ",(0,s.jsx)(n.code,{children:"root:src/components"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": ประเภทเส้นทาง (",(0,s.jsx)(n.code,{children:"npm"})," หรือ ",(0,s.jsx)(n.code,{children:"root"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"importName"}),": ชื่อนำเข้า รูปแบบ: ",(0,s.jsx)(n.code,{children:"${serviceName}/${type}/${path}"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportName"}),": เส้นทางส่งออก เทียบกับไดเรกทอรีรากของบริการ"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportPath"}),": เส้นทางไฟล์จริง"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"externalName"}),": ชื่อการพึ่งพาภายนอก ใช้สำหรับระบุเมื่อบริการอื่นนำเข้าโมดูลนี้"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"links",children:["links",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#links",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"การแมปการกำหนดค่าการพึ่งพาบริการ ใช้สำหรับกำหนดค่าบริการอื่นที่บริการปัจจุบันพึ่งพา (ท้องถิ่นหรือระยะไกล) และเส้นทางท้องถิ่นของบริการนั้น คีย์ของแต่ละรายการกำหนดค่าเป็นชื่อบริการ และค่าเป็นเส้นทางท้องถิ่นของบริการนั้น"}),"\n",(0,s.jsx)(n.p,{children:"วิธีการติดตั้งที่แตกต่างกัน การกำหนดค่าก็แตกต่างกัน:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"การติดตั้งจากซอร์สโค้ด (Workspace, Git): ต้องชี้ไปที่ไดเรกทอรี dist เนื่องจากต้องใช้ไฟล์ที่สร้างแล้ว"}),"\n",(0,s.jsx)(n.li,{children:"การติดตั้งจากแพ็คเกจ (Link, เซิร์ฟเวอร์สแตติก, ตัวแทนส่วนตัว, File): ชี้ไปที่ไดเรกทอรีแพ็คเกจโดยตรง เนื่องจากแพ็คเกจมีไฟล์ที่สร้างแล้วอยู่แล้ว"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"imports",children:["imports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#imports",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"การแมปการพึ่งพาภายนอก กำหนดค่าการพึ่งพาภายนอกที่ต้องการใช้ มักเป็นการใช้การพึ่งพาจากโมดูลระยะไกล"}),"\n",(0,s.jsx)(n.p,{children:"แต่ละรายการพึ่งพามีคุณสมบัติต่อไปนี้:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"match"}),": นิพจน์ทั่วไปสำหรับจับคู่คำสั่งนำเข้า"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"import"}),": เส้นทางโมดูลจริง"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ตัวอย่าง"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n  modules: {\n    // กำหนดค่าการส่งออก\n    exports: [\n      'root:src/components/button.vue',  // ส่งออกไฟล์ต้นฉบับ\n      'root:src/utils/format.ts',\n      'npm:vue',  // ส่งออกการพึ่งพาบุคคลที่สาม\n      'npm:vue-router'\n    ],\n\n    // กำหนดค่าการนำเข้า\n    links: {\n      // การติดตั้งจากซอร์สโค้ด: ต้องชี้ไปที่ไดเรกทอรี dist\n      'ssr-remote': 'root:./node_modules/ssr-remote/dist',\n      // การติดตั้งจากแพ็คเกจ: ชี้ไปที่ไดเรกทอรีแพ็คเกจโดยตรง\n      'other-remote': 'root:./node_modules/other-remote'\n    },\n\n    // กำหนดค่าการพึ่งพาภายนอก\n    imports: {\n      'vue': 'ssr-remote/npm/vue',\n      'vue-router': 'ssr-remote/npm/vue-router'\n    }\n  }\n} satisfies GezOptions;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"parsedmoduleconfig",children:["ParsedModuleConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parsedmoduleconfig",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"นิยามประเภท"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface ParsedModuleConfig {\n  name: string\n  root: string\n  exports: {\n    name: string\n    type: PathType\n    importName: string\n    exportName: string\n    exportPath: string\n    externalName: string\n  }[]\n  links: Array<{\n    /**\n     * ชื่อแพ็คเกจ\n     */\n    name: string\n    /**\n     * ไดเรกทอรีรากของแพ็คเกจ\n     */\n    root: string\n  }>\n  imports: Record<string, { match: RegExp; import?: string }>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"การกำหนดค่าโมดูลที่ถูกแยกวิเคราะห์ แปลงการกำหนดค่าโมดูลดั้งเดิมเป็นรูปแบบมาตรฐานภายใน:"}),"\n",(0,s.jsxs)(n.h4,{id:"name",children:["name",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"ชื่อของบริการปัจจุบัน"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ใช้สำหรับระบุโมดูลและสร้างเส้นทางนำเข้า"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"root",children:["root",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#root",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"เส้นทางไดเรกทอรีรากของบริการปัจจุบัน"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ใช้สำหรับแยกวิเคราะห์เส้นทางสัมพัทธ์และที่เก็บผลลัพธ์การสร้าง"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"exports-1",children:["exports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exports-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"รายการกำหนดค่าการส่งออก"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": เส้นทางส่งออกต้นฉบับ เช่น: 'npm:vue' หรือ 'root:src/components'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": ประเภทเส้นทาง (npm หรือ root)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"importName"}),": ชื่อนำเข้า รูปแบบ: '${serviceName}/${type}/${path}'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportName"}),": เส้นทางส่งออก เทียบกับไดเรกทอรีรากของบริการ"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exportPath"}),": เส้นทางไฟล์จริง"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"externalName"}),": ชื่อการพึ่งพาภายนอก ใช้สำหรับระบุเมื่อบริการอื่นนำเข้าโมดูลนี้"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"links-1",children:["links",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#links-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"รายการกำหนดค่าการนำเข้า"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": ชื่อแพ็คเกจ"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": ไดเรกทอรีรากของแพ็คเกจ"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"imports-1",children:["imports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#imports-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"การแมปการพึ่งพาภายนอก"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"แมปเส้นทางนำเข้าโมดูลไปยังตำแหน่งโมดูลจริง"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"match"}),": นิพจน์ทั่วไปสำหรับจับคู่คำสั่งนำเข้า"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"import"}),": เส้นทางโมดูลจริง"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["th%2Fapi%2Fcore%2Fmodule-config.md"]={toc:[{text:"นิยามประเภท",id:"นิยามประเภท",depth:2},{text:"PathType",id:"pathtype",depth:3},{text:"ModuleConfig",id:"moduleconfig-1",depth:3},{text:"exports",id:"exports",depth:4},{text:"links",id:"links",depth:4},{text:"imports",id:"imports",depth:4},{text:"ParsedModuleConfig",id:"parsedmoduleconfig",depth:3},{text:"name",id:"name",depth:4},{text:"root",id:"root",depth:4},{text:"exports",id:"exports-1",depth:4},{text:"links",id:"links-1",depth:4},{text:"imports",id:"imports-1",depth:4}],title:"ModuleConfig",headingTitle:"ModuleConfig",frontmatter:{titleSuffix:"Gez Framework Module Configuration API Reference",description:"รายละเอียดเกี่ยวกับอินเทอร์เฟซการกำหนดค่า ModuleConfig ของเฟรมเวิร์ก Gez รวมถึงกฎการนำเข้าและส่งออกโมดูล การกำหนดค่าชื่อแฝง และการจัดการการพึ่งพาภายนอก ช่วยให้นักพัฒนามีความเข้าใจลึกซึ้งเกี่ยวกับระบบโมดูลของเฟรมเวิร์ก",head:[["meta",{property:"keywords",content:"Gez, ModuleConfig, การกำหนดค่าโมดูล, การนำเข้าและส่งออกโมดูล, การพึ่งพาภายนอก, การกำหนดค่าชื่อแฝง, การจัดการการพึ่งพา, Web Application Framework"}]]}}}}]);