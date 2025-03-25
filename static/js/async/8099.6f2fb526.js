"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8099"],{88042:function(e,n,r){r.r(n),r.d(n,{default:()=>c});var s=r(31549),d=r(6603);function h(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"базовый-путь",children:["Базовый путь",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#базовый-путь",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Базовый путь (Base Path) — это префикс пути доступа к статическим ресурсам (таким как JavaScript, CSS, изображения и т.д.) в приложении. В Gez правильная настройка базового пути имеет решающее значение для следующих сценариев:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Развертывание в нескольких средах"}),": поддержка доступа к ресурсам в различных средах, таких как разработка, тестирование и производство."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Развертывание в нескольких регионах"}),": адаптация к требованиям развертывания в различных регионах или странах."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CDN-распределение"}),": реализация глобального распределения и ускорения статических ресурсов."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"механизм-пути-по-умолчанию",children:["Механизм пути по умолчанию",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#механизм-пути-по-умолчанию",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Gez использует механизм автоматической генерации путей на основе имени сервиса. По умолчанию фреймворк считывает поле ",(0,s.jsx)(n.code,{children:"name"})," из файла ",(0,s.jsx)(n.code,{children:"package.json"})," проекта для генерации базового пути статических ресурсов: ",(0,s.jsx)(n.code,{children:"/your-app-name/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "name": "your-app-name"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Такой подход, основанный на соглашениях, имеет следующие преимущества:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Согласованность"}),": обеспечивает использование единого пути доступа для всех статических ресурсов."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Предсказуемость"}),": путь доступа к ресурсам можно определить по полю ",(0,s.jsx)(n.code,{children:"name"})," в ",(0,s.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Удобство поддержки"}),": отсутствие необходимости в дополнительной настройке снижает затраты на обслуживание."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"динамическая-настройка-пути",children:["Динамическая настройка пути",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#динамическая-настройка-пути",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"В реальных проектах часто требуется развернуть один и тот же код в разных средах или регионах. Gez поддерживает динамическую настройку базового пути, что позволяет приложению адаптироваться к различным сценариям развертывания."}),"\n",(0,s.jsxs)(n.h3,{id:"сценарии-использования",children:["Сценарии использования",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#сценарии-использования",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"развертывание-в-подкаталоге",children:["Развертывание в подкаталоге",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#развертывание-в-подкаталоге",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- example.com      -> основной сайт по умолчанию\n- example.com/cn/  -> китайский сайт\n- example.com/en/  -> английский сайт\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"развертывание-на-отдельных-доменах",children:["Развертывание на отдельных доменах",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#развертывание-на-отдельных-доменах",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- example.com    -> основной сайт по умолчанию\n- cn.example.com -> китайский сайт\n- en.example.com -> английский сайт\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"метод-настройки",children:["Метод настройки",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#метод-настройки",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["С помощью параметра ",(0,s.jsx)(n.code,{children:"base"})," метода ",(0,s.jsx)(n.code,{children:"gez.render()"})," вы можете динамически установить базовый путь в зависимости от контекста запроса:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const render = await gez.render({\n    base: '/cn',  // Установка базового пути\n    params: {\n        url: req.url\n    }\n});\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["ru%2Fguide%2Fessentials%2Fbase-path.md"]={toc:[{text:"Механизм пути по умолчанию",id:"механизм-пути-по-умолчанию",depth:2},{text:"Динамическая настройка пути",id:"динамическая-настройка-пути",depth:2},{text:"Сценарии использования",id:"сценарии-использования",depth:3},{text:"Развертывание в подкаталоге",id:"развертывание-в-подкаталоге",depth:4},{text:"Развертывание на отдельных доменах",id:"развертывание-на-отдельных-доменах",depth:4},{text:"Метод настройки",id:"метод-настройки",depth:3}],title:"Базовый путь",headingTitle:"Базовый путь",frontmatter:{titleSuffix:"Руководство по настройке путей статических ресурсов в Gez",description:"Подробное руководство по настройке базового пути в Gez, включая развертывание в нескольких средах, CDN-распределение и настройку путей доступа к ресурсам, чтобы помочь разработчикам реализовать гибкое управление статическими ресурсами.",head:[["meta",{property:"keywords",content:"Gez, базовый путь, Base Path, CDN, статические ресурсы, развертывание в нескольких средах, управление ресурсами"}]]}}}}]);