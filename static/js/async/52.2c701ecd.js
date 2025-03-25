"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["52"],{82553:function(n,e,r){r.r(e),r.d(e,{default:()=>i});var h=r(31549),t=r(6603);function c(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},(0,t.ah)(),n.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e.h1,{id:"rendercontext",children:["RenderContext",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rendercontext",children:"#"})]}),"\n",(0,h.jsx)(e.p,{children:"RenderContext l\xe0 lớp cốt l\xf5i trong framework Gez, chịu tr\xe1ch nhiệm quản l\xfd v\xf2ng đời ho\xe0n chỉnh của render ph\xeda m\xe1y chủ (SSR). N\xf3 cung cấp một bộ API ho\xe0n chỉnh để xử l\xfd c\xe1c t\xe1c vụ ch\xednh như render context, quản l\xfd t\xe0i nguy\xean, đồng bộ trạng th\xe1i:"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Điều khiển render"}),": Quản l\xfd quy tr\xecnh render ph\xeda m\xe1y chủ, hỗ trợ c\xe1c t\xecnh huống như render nhiều entry, render c\xf3 điều kiện"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Quản l\xfd t\xe0i nguy\xean"}),": Thu thập v\xe0 ch\xe8n th\xf4ng minh c\xe1c t\xe0i nguy\xean tĩnh như JS, CSS để tối ưu hiệu suất tải"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Đồng bộ trạng th\xe1i"}),": Xử l\xfd tuần tự h\xf3a trạng th\xe1i ph\xeda m\xe1y chủ, đảm bảo client k\xedch hoạt ch\xednh x\xe1c (hydration)"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Điều khiển định tuyến"}),": Hỗ trợ c\xe1c t\xednh năng n\xe2ng cao như chuyển hướng ph\xeda m\xe1y chủ, thiết lập m\xe3 trạng th\xe1i"]}),"\n"]}),"\n",(0,h.jsxs)(e.h2,{id:"định-nghĩa-kiểu",children:["Định nghĩa kiểu",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#định-nghĩa-kiểu",children:"#"})]}),"\n",(0,h.jsxs)(e.h3,{id:"serverrenderhandle",children:["ServerRenderHandle",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#serverrenderhandle",children:"#"})]}),"\n",(0,h.jsx)(e.p,{children:"Định nghĩa kiểu cho h\xe0m xử l\xfd render ph\xeda m\xe1y chủ."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"type ServerRenderHandle = (rc: RenderContext) => Promise<void> | void;\n"})}),"\n",(0,h.jsx)(e.p,{children:"H\xe0m xử l\xfd render ph\xeda m\xe1y chủ l\xe0 một h\xe0m đồng bộ hoặc bất đồng bộ, nhận một thể hiện của RenderContext l\xe0m tham số, d\xf9ng để xử l\xfd logic render ph\xeda m\xe1y chủ."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"// 1. H\xe0m xử l\xfd bất đồng bộ\nexport default async (rc: RenderContext) => {\n  const app = createApp();\n  const html = await renderToString(app);\n  rc.html = html;\n};\n\n// 2. H\xe0m xử l\xfd đồng bộ\nexport const simple = (rc: RenderContext) => {\n  rc.html = '<h1>Hello World</h1>';\n};\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"renderfiles",children:["RenderFiles",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#renderfiles",children:"#"})]}),"\n",(0,h.jsx)(e.p,{children:"Định nghĩa kiểu cho danh s\xe1ch c\xe1c tệp t\xe0i nguy\xean được thu thập trong qu\xe1 tr\xecnh render."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"interface RenderFiles {\n  js: string[];\n  css: string[];\n  modulepreload: string[];\n  resources: string[];\n}\n"})}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"js"}),": Danh s\xe1ch c\xe1c tệp JavaScript"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"css"}),": Danh s\xe1ch c\xe1c tệp stylesheet"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"modulepreload"}),": Danh s\xe1ch c\xe1c module ESM cần preload"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"resources"}),": Danh s\xe1ch c\xe1c tệp t\xe0i nguy\xean kh\xe1c (h\xecnh ảnh, font, v.v.)"]}),"\n"]}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"// V\xed dụ danh s\xe1ch tệp t\xe0i nguy\xean\nrc.files = {\n  js: [\n    '/assets/entry-client.js',\n    '/assets/vendor.js'\n  ],\n  css: [\n    '/assets/main.css',\n    '/assets/vendor.css'\n  ],\n  modulepreload: [\n    '/assets/Home.js',\n    '/assets/About.js'\n  ],\n  resources: [\n    '/assets/logo.png',\n    '/assets/font.woff2'\n  ]\n};\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"importmapmode",children:["ImportmapMode",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#importmapmode",children:"#"})]}),"\n",(0,h.jsx)(e.p,{children:"Định nghĩa chế độ tạo importmap."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"type ImportmapMode = 'inline' | 'js';\n"})}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"inline"}),": Nội dung importmap được nh\xfang trực tiếp v\xe0o HTML, ph\xf9 hợp với c\xe1c t\xecnh huống:","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"Cần giảm số lượng y\xeau cầu HTTP"}),"\n",(0,h.jsx)(e.li,{children:"Nội dung importmap nhỏ"}),"\n",(0,h.jsx)(e.li,{children:"Y\xeau cầu hiệu suất tải trang đầu ti\xean cao"}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"js"}),": Nội dung importmap được tạo th\xe0nh một tệp JS độc lập, ph\xf9 hợp với c\xe1c t\xecnh huống:","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"Nội dung importmap lớn"}),"\n",(0,h.jsx)(e.li,{children:"Cần tận dụng cơ chế cache của tr\xecnh duyệt"}),"\n",(0,h.jsx)(e.li,{children:"Nhiều trang chia sẻ c\xf9ng một importmap"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Lớp render context, chịu tr\xe1ch nhiệm quản l\xfd t\xe0i nguy\xean v\xe0 tạo HTML trong qu\xe1 tr\xecnh render ph\xeda m\xe1y chủ (SSR)."}),"\n",(0,h.jsxs)(e.h2,{id:"t\\xf9y-chọn-thể-hiện",children:["T\xf9y chọn thể hiện",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#t\\xf9y-chọn-thể-hiện",children:"#"})]}),"\n",(0,h.jsx)(e.p,{children:"Định nghĩa c\xe1c t\xf9y chọn cấu h\xecnh cho render context."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"interface RenderContextOptions {\n  base?: string\n  entryName?: string\n  params?: Record<string, any>\n  importmapMode?: ImportmapMode\n}\n"})}),"\n",(0,h.jsxs)(e.h4,{id:"base",children:["base",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"''"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Đường dẫn cơ sở cho c\xe1c t\xe0i nguy\xean tĩnh."}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"Tất cả c\xe1c t\xe0i nguy\xean tĩnh (JS, CSS, h\xecnh ảnh, v.v.) sẽ được tải dựa tr\xean đường dẫn n\xe0y"}),"\n",(0,h.jsx)(e.li,{children:"Hỗ trợ cấu h\xecnh động trong thời gian chạy, kh\xf4ng cần build lại"}),"\n",(0,h.jsx)(e.li,{children:"Thường được sử dụng trong c\xe1c t\xecnh huống như trang web đa ng\xf4n ngữ, ứng dụng micro frontend"}),"\n"]}),"\n",(0,h.jsxs)(e.h4,{id:"entryname",children:["entryName",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#entryname",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"'default'"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"T\xean h\xe0m entry render ph\xeda m\xe1y chủ. D\xf9ng để chỉ định h\xe0m entry được sử dụng khi render ph\xeda m\xe1y chủ, khi một module xuất ra nhiều h\xe0m render."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"export const mobile = async (rc: RenderContext) => {\n  // Logic render cho thiết bị di động\n};\n\nexport const desktop = async (rc: RenderContext) => {\n  // Logic render cho m\xe1y t\xednh để b\xe0n\n};\n"})}),"\n",(0,h.jsxs)(e.h4,{id:"params",children:["params",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"Record<string, any>"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"{}"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"C\xe1c tham số render. C\xf3 thể truyền bất kỳ loại tham số n\xe0o cho h\xe0m render, thường được sử dụng để truyền th\xf4ng tin y\xeau cầu (URL, tham số query, v.v.)."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"const rc = await gez.render({\n  params: {\n    url: req.url,\n    lang: 'zh-CN',\n    theme: 'dark'\n  }\n});\n"})}),"\n",(0,h.jsxs)(e.h4,{id:"importmapmode-1",children:["importmapMode",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#importmapmode-1",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"'inline' | 'js'"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"'inline'"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Chế độ tạo import map:"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{children:"inline"}),": Nội dung importmap được nh\xfang trực tiếp v\xe0o HTML"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{children:"js"}),": Nội dung importmap được tạo th\xe0nh một tệp JS độc lập"]}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.h2,{id:"thuộc-t\\xednh-thể-hiện",children:["Thuộc t\xednh thể hiện",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#thuộc-t\\xednh-thể-hiện",children:"#"})]}),"\n",(0,h.jsxs)(e.h3,{id:"gez",children:["gez",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gez",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"Gez"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Chỉ đọc"}),": ",(0,h.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Tham chiếu đến thể hiện Gez. D\xf9ng để truy cập c\xe1c chức năng v\xe0 th\xf4ng tin cấu h\xecnh cốt l\xf5i của framework."}),"\n",(0,h.jsxs)(e.h3,{id:"redirect",children:["redirect",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"string | null"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"null"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Địa chỉ chuyển hướng. Khi được thiết lập, m\xe1y chủ c\xf3 thể thực hiện chuyển hướng HTTP dựa tr\xean gi\xe1 trị n\xe0y, thường được sử dụng trong c\xe1c t\xecnh huống như x\xe1c thực đăng nhập, kiểm so\xe1t quyền truy cập."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"// V\xed dụ x\xe1c thực đăng nhập\nexport default async (rc: RenderContext) => {\n  if (!isLoggedIn()) {\n    rc.redirect = '/login';\n    rc.status = 302;\n    return;\n  }\n  // Tiếp tục render trang...\n};\n\n// V\xed dụ kiểm so\xe1t quyền truy cập\nexport default async (rc: RenderContext) => {\n  if (!hasPermission()) {\n    rc.redirect = '/403';\n    rc.status = 403;\n    return;\n  }\n  // Tiếp tục render trang...\n};\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"status",children:["status",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#status",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"number | null"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"null"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"M\xe3 trạng th\xe1i HTTP phản hồi. C\xf3 thể thiết lập bất kỳ m\xe3 trạng th\xe1i HTTP hợp lệ n\xe0o, thường được sử dụng trong c\xe1c t\xecnh huống xử l\xfd lỗi, chuyển hướng."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"// V\xed dụ xử l\xfd lỗi 404\nexport default async (rc: RenderContext) => {\n  const page = await findPage(rc.params.url);\n  if (!page) {\n    rc.status = 404;\n    // Render trang 404...\n    return;\n  }\n  // Tiếp tục render trang...\n};\n\n// V\xed dụ chuyển hướng tạm thời\nexport default async (rc: RenderContext) => {\n  if (needMaintenance()) {\n    rc.redirect = '/maintenance';\n    rc.status = 307; // Chuyển hướng tạm thời, giữ nguy\xean phương thức y\xeau cầu\n    return;\n  }\n  // Tiếp tục render trang...\n};\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"html",children:["html",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#html",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"''"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Nội dung HTML. D\xf9ng để thiết lập v\xe0 lấy nội dung HTML cuối c\xf9ng được tạo ra, khi thiết lập sẽ tự động xử l\xfd c\xe1c placeholder đường dẫn cơ sở."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"// C\xe1ch sử dụng cơ bản\nexport default async (rc: RenderContext) => {\n  // Thiết lập nội dung HTML\n  rc.html = `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        ${rc.preload()}\n        ${rc.css()}\n      </head>\n      <body>\n        <div id=\"app\">Hello World</div>\n        ${rc.importmap()}\n        ${rc.moduleEntry()}\n        ${rc.modulePreload()}\n      </body>\n    </html>\n  `;\n};\n\n// Đường dẫn cơ sở động\nconst rc = await gez.render({\n  base: '/app',  // Thiết lập đường dẫn cơ sở\n  params: { url: req.url }\n});\n\n// C\xe1c placeholder trong HTML sẽ được thay thế tự động:\n// [[[___GEZ_DYNAMIC_BASE___]]]/your-app-name/css/style.css\n// Thay thế th\xe0nh:\n// /app/your-app-name/css/style.css\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"base-1",children:["base",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#base-1",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Chỉ đọc"}),": ",(0,h.jsx)(e.code,{children:"true"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"''"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Đường dẫn cơ sở cho c\xe1c t\xe0i nguy\xean tĩnh. Tất cả c\xe1c t\xe0i nguy\xean tĩnh (JS, CSS, h\xecnh ảnh, v.v.) sẽ được tải dựa tr\xean đường dẫn n\xe0y, hỗ trợ cấu h\xecnh động trong thời gian chạy."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"// C\xe1ch sử dụng cơ bản\nconst rc = await gez.render({\n  base: '/gez',  // Thiết lập đường dẫn cơ sở\n  params: { url: req.url }\n});\n\n// V\xed dụ trang web đa ng\xf4n ngữ\nconst rc = await gez.render({\n  base: '/cn',  // Trang web tiếng Trung\n  params: { lang: 'zh-CN' }\n});\n\n// V\xed dụ ứng dụng micro frontend\nconst rc = await gez.render({\n  base: '/app1',  // Ứng dụng con 1\n  params: { appId: 1 }\n});\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"entryname-1",children:["entryName",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#entryname-1",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Chỉ đọc"}),": ",(0,h.jsx)(e.code,{children:"true"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"'default'"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"T\xean h\xe0m entry render ph\xeda m\xe1y chủ. D\xf9ng để chọn h\xe0m render từ entry.server.ts."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"// H\xe0m entry mặc định\nexport default async (rc: RenderContext) => {\n  // Logic render mặc định\n};\n\n// Nhiều h\xe0m entry\nexport const mobile = async (rc: RenderContext) => {\n  // Logic render cho thiết bị di động\n};\n\nexport const desktop = async (rc: RenderContext) => {\n  // Logic render cho m\xe1y t\xednh để b\xe0n\n};\n\n// Chọn h\xe0m entry dựa tr\xean loại thiết bị\nconst rc = await gez.render({\n  entryName: isMobile ? 'mobile' : 'desktop',\n  params: { url: req.url }\n});\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"params-1",children:["params",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"Record<string, any>"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Chỉ đọc"}),": ",(0,h.jsx)(e.code,{children:"true"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"{}"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"C\xe1c tham số render. C\xf3 thể truyền v\xe0 truy cập c\xe1c tham số trong qu\xe1 tr\xecnh render ph\xeda m\xe1y chủ, thường được sử dụng để truyền th\xf4ng tin y\xeau cầu, cấu h\xecnh trang."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"// C\xe1ch sử dụng cơ bản - Truyền URL v\xe0 c\xe0i đặt ng\xf4n ngữ\nconst rc = await gez.render({\n  params: {\n    url: req.url,\n    lang: 'zh-CN'\n  }\n});\n\n// Cấu h\xecnh trang - Thiết lập chủ đề v\xe0 bố cục\nconst rc = await gez.render({\n  params: {\n    theme: 'dark',\n    layout: 'sidebar'\n  }\n});\n\n// Cấu h\xecnh m\xf4i trường - Ch\xe8n địa chỉ API\nconst rc = await gez.render({\n  params: {\n    apiBaseUrl: process.env.API_BASE_URL,\n    version: '1.0.0'\n  }\n});\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"importmetaset",children:["importMetaSet",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaset",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"Set<ImportMeta>"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Tập hợp thu thập phụ thuộc module. Tự động theo d\xf5i v\xe0 ghi lại c\xe1c phụ thuộc module trong qu\xe1 tr\xecnh render component, chỉ thu thập c\xe1c t\xe0i nguy\xean thực sự được sử dụng khi render trang hiện tại."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"// C\xe1ch sử dụng cơ bản\nconst renderToString = (app: any, context: { importMetaSet: Set<ImportMeta> }) => {\n  // Tự động thu thập phụ thuộc module trong qu\xe1 tr\xecnh render\n  // Framework sẽ tự động gọi context.importMetaSet.add(import.meta) khi render component\n  // Nh\xe0 ph\xe1t triển kh\xf4ng cần xử l\xfd thu thập phụ thuộc thủ c\xf4ng\n  return '<div id=\"app\">Hello World</div>';\n};\n\n// V\xed dụ sử dụng\nconst app = createApp();\nconst html = await renderToString(app, {\n  importMetaSet: rc.importMetaSet\n});\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"files",children:["files",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#files",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"RenderFiles"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Danh s\xe1ch c\xe1c tệp t\xe0i nguy\xean:"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"js: Danh s\xe1ch c\xe1c tệp JavaScript"}),"\n",(0,h.jsx)(e.li,{children:"css: Danh s\xe1ch c\xe1c tệp stylesheet"}),"\n",(0,h.jsx)(e.li,{children:"modulepreload: Danh s\xe1ch c\xe1c module ESM cần preload"}),"\n",(0,h.jsx)(e.li,{children:"resources: Danh s\xe1ch c\xe1c tệp t\xe0i nguy\xean kh\xe1c (h\xecnh ảnh, font, v.v.)"}),"\n"]}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"// Thu thập t\xe0i nguy\xean\nawait rc.commit();\n\n// Ch\xe8n t\xe0i nguy\xean\nrc.html = `\n  <!DOCTYPE html>\n  <html>\n  <head>\n    \x3c!-- Preload t\xe0i nguy\xean --\x3e\n    ${rc.preload()}\n    \x3c!-- Ch\xe8n stylesheet --\x3e\n    ${rc.css()}\n  </head>\n  <body>\n    ${html}\n    ${rc.importmap()}\n    ${rc.moduleEntry()}\n    ${rc.modulePreload()}\n  </body>\n  </html>\n`;\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"importmapmode-2",children:["importmapMode",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#importmapmode-2",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Kiểu"}),": ",(0,h.jsx)(e.code,{children:"'inline' | 'js'"})]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Mặc định"}),": ",(0,h.jsx)(e.code,{children:"'inline'"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Chế độ tạo import map:"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{children:"inline"}),": Nội dung importmap được nh\xfang trực tiếp v\xe0o HTML"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.code,{children:"js"}),": Nội dung importmap được tạo th\xe0nh một tệp JS độc lập"]}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.h2,{id:"phương-thức-thể-hiện",children:["Phương thức thể hiện",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#phương-thức-thể-hiện",children:"#"})]}),"\n",(0,h.jsxs)(e.h3,{id:"serialize",children:["serialize()",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#serialize",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Tham số"}),":","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"input: any"})," - Dữ liệu cần tuần tự h\xf3a"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"options?: serialize.SerializeJSOptions"})," - T\xf9y chọn tuần tự h\xf3a"]}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Trả về"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Tuần tự h\xf3a đối tượng JavaScript th\xe0nh chuỗi. D\xf9ng để tuần tự h\xf3a dữ liệu trạng th\xe1i trong qu\xe1 tr\xecnh render ph\xeda m\xe1y chủ, đảm bảo dữ liệu c\xf3 thể được nh\xfang an to\xe0n v\xe0o HTML."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"const state = {\n  user: { id: 1, name: 'Alice' },\n  timestamp: new Date()\n};\n\nrc.html = `\n  <script>\n    window.__INITIAL_STATE__ = ${rc.serialize(state)};\n  <\/script>\n`;\n"})}),"\n",(0,h.jsxs)(e.h3,{id:"state",children:["state()",(0,h.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#state",children:"#"})]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Tham số"}),":","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"varName: string"})," - T\xean biến"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"data: Record<string, any>"})," - Dữ liệu trạng th\xe1i"]}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"Trả về"}),": ",(0,h.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"Tuần tự h\xf3a v\xe0 ch\xe8n dữ liệu trạng th\xe1i v\xe0o HTML. Sử dụng phương ph\xe1p tuần tự h\xf3a an to\xe0n để xử l\xfd dữ liệu, hỗ trợ c\xe1c cấu tr\xfac dữ liệu phức tạp."}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-ts",children:"const userInfo = {\n  id: 1,\n  name: 'John',\n  roles: ['admin']\n};\n\nrc.html = `\n  <\n"})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,h.jsx)(e,{...n,children:(0,h.jsx)(c,{...n})}):c(n)}let i=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["vi%2Fapi%2Fcore%2Frender-context.md"]={toc:[{text:"Định nghĩa kiểu",id:"định-nghĩa-kiểu",depth:2},{text:"ServerRenderHandle",id:"serverrenderhandle",depth:3},{text:"RenderFiles",id:"renderfiles",depth:3},{text:"ImportmapMode",id:"importmapmode",depth:3},{text:"T\xf9y chọn thể hiện",id:"t\xf9y-chọn-thể-hiện",depth:2},{text:"base",id:"base",depth:4},{text:"entryName",id:"entryname",depth:4},{text:"params",id:"params",depth:4},{text:"importmapMode",id:"importmapmode-1",depth:4},{text:"Thuộc t\xednh thể hiện",id:"thuộc-t\xednh-thể-hiện",depth:2},{text:"gez",id:"gez",depth:3},{text:"redirect",id:"redirect",depth:3},{text:"status",id:"status",depth:3},{text:"html",id:"html",depth:3},{text:"base",id:"base-1",depth:3},{text:"entryName",id:"entryname-1",depth:3},{text:"params",id:"params-1",depth:3},{text:"importMetaSet",id:"importmetaset",depth:3},{text:"files",id:"files",depth:3},{text:"importmapMode",id:"importmapmode-2",depth:3},{text:"Phương thức thể hiện",id:"phương-thức-thể-hiện",depth:2},{text:"serialize()",id:"serialize",depth:3},{text:"state()",id:"state",depth:3}],title:"RenderContext",headingTitle:"RenderContext",frontmatter:{titleSuffix:"T\xe0i liệu tham khảo API RenderContext của framework Gez",description:"T\xe0i liệu chi tiết về lớp RenderContext cốt l\xf5i của framework Gez, bao gồm c\xe1c chức năng như điều khiển render, quản l\xfd t\xe0i nguy\xean, đồng bộ trạng th\xe1i v\xe0 điều khiển định tuyến, gi\xfap nh\xe0 ph\xe1t triển thực hiện render ph\xeda m\xe1y chủ hiệu quả.",head:[["meta",{property:"keywords",content:"Gez, RenderContext, SSR, render ph\xeda m\xe1y chủ, render context, đồng bộ trạng th\xe1i, quản l\xfd t\xe0i nguy\xean, framework ứng dụng web"}]]}}}}]);