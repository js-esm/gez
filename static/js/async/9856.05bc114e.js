"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9856"],{22882:function(e,s,n){n.r(s),n.d(s,{default:()=>l});var r=n(31549),i=n(6603);function d(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",div:"div",pre:"pre",ol:"ol"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"требования-к-окружению",children:["Требования к окружению",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#требования-к-окружению",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"В этом документе описаны требования к окружению, необходимые для использования данного фреймворка, включая окружение Node.js и совместимость с браузерами."}),"\n",(0,r.jsxs)(s.h2,{id:"окружение-nodejs",children:["Окружение Node.js",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#окружение-nodejs",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Фреймворк требует версию Node.js >= 22.6, в основном для поддержки импорта типов TypeScript (через флаг ",(0,r.jsx)(s.code,{children:"--experimental-strip-types"}),"), без необходимости дополнительных шагов компиляции."]}),"\n",(0,r.jsxs)(s.h2,{id:"совместимость-с-браузерами",children:["Совместимость с браузерами",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#совместимость-с-браузерами",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Фреймворк по умолчанию использует режим совместимости для сборки, чтобы поддерживать более широкий спектр браузеров. Однако следует отметить, что для полной поддержки совместимости с браузерами необходимо вручную добавить зависимость ",(0,r.jsx)(s.a,{href:"https://github.com/guybedford/es-module-shims",target:"_blank",rel:"noopener noreferrer",children:"es-module-shims"}),"."]}),"\n",(0,r.jsxs)(s.h3,{id:"режим-совместимости-по-умолчанию",children:["Режим совместимости (по умолчанию)",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#режим-совместимости-по-умолчанию",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\uD83C\uDF10 Chrome: >= 87"}),"\n",(0,r.jsx)(s.li,{children:"\uD83D\uDD37 Edge: >= 88"}),"\n",(0,r.jsx)(s.li,{children:"\uD83E\uDD8A Firefox: >= 78"}),"\n",(0,r.jsx)(s.li,{children:"\uD83E\uDDED Safari: >= 14"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Согласно статистике ",(0,r.jsx)(s.a,{href:"https://caniuse.com/?search=dynamic%20import",target:"_blank",rel:"noopener noreferrer",children:"Can I Use"}),", охват браузеров в режиме совместимости составляет 96.81%."]}),"\n",(0,r.jsxs)(s.h3,{id:"режим-нативной-поддержки",children:["Режим нативной поддержки",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#режим-нативной-поддержки",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\uD83C\uDF10 Chrome: >= 89"}),"\n",(0,r.jsx)(s.li,{children:"\uD83D\uDD37 Edge: >= 89"}),"\n",(0,r.jsx)(s.li,{children:"\uD83E\uDD8A Firefox: >= 108"}),"\n",(0,r.jsx)(s.li,{children:"\uD83E\uDDED Safari: >= 16.4"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Режим нативной поддержки имеет следующие преимущества:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Нулевые накладные расходы на выполнение, без необходимости дополнительного загрузчика модулей"}),"\n",(0,r.jsx)(s.li,{children:"Нативный парсинг браузером, более высокая скорость выполнения"}),"\n",(0,r.jsx)(s.li,{children:"Лучшие возможности разделения кода и загрузки по требованию"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Согласно статистике ",(0,r.jsx)(s.a,{href:"https://caniuse.com/?search=importmap",target:"_blank",rel:"noopener noreferrer",children:"Can I Use"}),", охват браузеров в режиме нативной поддержки составляет 93.5%."]}),"\n",(0,r.jsxs)(s.h3,{id:"включение-поддержки-совместимости",children:["Включение поддержки совместимости",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#включение-поддержки-совместимости",children:"#"})]}),"\n",(0,r.jsxs)(s.div,{className:"rspress-directive warning",children:[(0,r.jsx)(s.div,{className:"rspress-directive-title",children:"Важное замечание"}),(0,r.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(s.p,{children:["Хотя фреймворк по умолчанию использует режим совместимости для сборки, для полной поддержки старых версий браузеров необходимо добавить зависимость ",(0,r.jsx)(s.a,{href:"https://github.com/guybedford/es-module-shims",target:"_blank",rel:"noopener noreferrer",children:"es-module-shims"})," в ваш проект."]}),"\n"]})]}),"\n",(0,r.jsx)(s.p,{children:"Добавьте следующий скрипт в HTML-файл:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'\x3c!-- Для среды разработки --\x3e\n<script async src="https://ga.jspm.io/npm:es-module-shims@2.0.10/dist/es-module-shims.js"><\/script>\n\n\x3c!-- Для производственной среды --\x3e\n<script async src="/path/to/es-module-shims.js"><\/script>\n'})}),"\n",(0,r.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,r.jsx)(s.div,{className:"rspress-directive-title",children:"Рекомендации"}),(0,r.jsxs)(s.div,{className:"rspress-directive-content",children:["\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Для производственной среды рекомендуется:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Разместить es-module-shims на собственном сервере"}),"\n",(0,r.jsx)(s.li,{children:"Обеспечить стабильность и скорость загрузки ресурсов"}),"\n",(0,r.jsx)(s.li,{children:"Избежать потенциальных рисков безопасности"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Соображения производительности:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Режим совместимости может привести к небольшим накладным расходам на производительность"}),"\n",(0,r.jsx)(s.li,{children:"Можно решить, включать ли его, исходя из распределения браузеров среди целевой аудитории"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let l=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["ru%2Fguide%2Fstart%2Fenvironment.md"]={toc:[{text:"Окружение Node.js",id:"окружение-nodejs",depth:2},{text:"Совместимость с браузерами",id:"совместимость-с-браузерами",depth:2},{text:"Режим совместимости (по умолчанию)",id:"режим-совместимости-по-умолчанию",depth:3},{text:"Режим нативной поддержки",id:"режим-нативной-поддержки",depth:3},{text:"Включение поддержки совместимости",id:"включение-поддержки-совместимости",depth:3}],title:"Требования к окружению",headingTitle:"Требования к окружению",frontmatter:{titleSuffix:"Руководство по совместимости фреймворка Gez",description:"Подробное описание требований к окружению для фреймворка Gez, включая требования к версии Node.js и совместимость с браузерами, чтобы помочь разработчикам правильно настроить среду разработки.",head:[["meta",{property:"keywords",content:"Gez, Node.js, совместимость с браузерами, TypeScript, es-module-shims, настройка окружения"}]]}}}}]);