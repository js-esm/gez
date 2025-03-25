import*as t from"ssr-vue2-remote/npm/vue";import*as s from"ssr-vue2-remote/src/components/index";import*as e from"ssr-vue2-remote/src/composables/index";var i={223:function(t,s,e){t.exports={}},48:function(t,s,e){t.exports={}},770:function(t,s,e){t.exports={}},742:function(t,s,e){t.exports={}},820:function(t,s,e){e.r(t.exports={})},530:function(t,s,e){e.r(t.exports={})},779:function(t,s,e){e.r(t.exports={})},717:function(t,s,e){e.r(t.exports={})}},o={};function a(t){var s=o[t];if(void 0!==s)return s.exports;var e=o[t]={exports:{}};return i[t](e,e.exports,a),e.exports}a.m=i,a.k=t=>""+t+".css",(()=>{a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})()})(),a.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;if("string"==typeof import.meta.url&&(t=import.meta.url),!t)throw Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t+"../../"})();let r=(0,t.defineComponent)({__name:"button-example",setup:t=>({__sfc:!0,buttonTypes:["primary","secondary","text"],buttonTypeMap:{primary:"主要按钮",secondary:"次要按钮",text:"文本按钮",success:"成功按钮",warning:"警告按钮",danger:"危险按钮"},buttonSizes:["small","medium","large"],buttonSizeMap:{small:"小型",medium:"中型",large:"大型"},UiButton:s.UiButton,UiCard:s.UiCard})});function n(t,s,e,i,o,a,r,n){var c,l="function"==typeof t?t.options:t;if(s&&(l.render=s,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=n?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c){if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,s){return c.call(s),d(t,s)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}}return{exports:t,options:l}}a(223);let c=n(r,function(){var t=this,s=t._self._c,e=t._self._setupProxy;return s(e.UiCard,{staticClass:"component-section",scopedSlots:t._u([{key:"header",fn:function(){return[s("h2",[t._v("Button 按钮")])]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"component-doc"},[s("div",{staticClass:"demo-block"},[s("h3",[t._v("基础用法")]),t._v(" "),s("div",{staticClass:"demo-content"},[s("div",{staticClass:"button-group"},t._l(e.buttonTypes,function(i){return s(e.UiButton,{key:i,attrs:{type:i}},[t._v("\n            "+t._s(e.buttonTypeMap[i])+"\n          ")])}),1)])]),t._v(" "),s("div",{staticClass:"demo-block"},[s("h3",[t._v("尺寸")]),t._v(" "),s("div",{staticClass:"demo-content"},[s("div",{staticClass:"button-group"},t._l(e.buttonSizes,function(i){return s(e.UiButton,{key:i,attrs:{size:i,type:"primary"}},[t._v("\n            "+t._s(e.buttonSizeMap[i])+"\n          ")])}),1)])]),t._v(" "),s("div",{staticClass:"demo-block"},[s("h3",[t._v("状态")]),t._v(" "),s("div",{staticClass:"demo-content"},[s("div",{staticClass:"button-group"},[s(e.UiButton,{attrs:{type:"primary",loading:""}},[t._v("加载中")]),t._v(" "),s(e.UiButton,{attrs:{type:"primary",disabled:""}},[t._v("禁用状态")])],1)])])])])},[],!1,null,"10b10c2c",null).exports,l=(0,t.defineComponent)({__name:"card-example",setup:t=>({__sfc:!0,UiButton:s.UiButton,UiCard:s.UiCard})});a(48);let d=n(l,function(){var t=this,s=t._self._c,e=t._self._setupProxy;return s(e.UiCard,{staticClass:"component-section",scopedSlots:t._u([{key:"header",fn:function(){return[s("h2",[t._v("Card 卡片")])]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"component-doc"},[s("div",{staticClass:"demo-block"},[s("h3",[t._v("基础用法")]),t._v(" "),s("div",{staticClass:"demo-content"},[s(e.UiCard,{staticClass:"demo-card",scopedSlots:t._u([{key:"header",fn:function(){return[s("h3",[t._v("卡片标题")])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"card-footer"},[s(e.UiButton,{attrs:{type:"primary"}},[t._v("确认")]),t._v(" "),s(e.UiButton,{attrs:{type:"secondary"}},[t._v("取消")])],1)]},proxy:!0}])},[t._v(" "),s("p",[t._v("这是一个基础的卡片组件示例。")]),t._v(" "),s("p",[t._v("你可以在这里放置任何内容。")])])],1)]),t._v(" "),s("div",{staticClass:"demo-block"},[s("h3",[t._v("简单卡片")]),t._v(" "),s("div",{staticClass:"demo-content"},[s(e.UiCard,{staticClass:"demo-card"},[s("p",[t._v("这是一个没有标题和页脚的简单卡片。")]),t._v(" "),s("p",[t._v("适用于简单的内容展示。")])])],1)]),t._v(" "),s("div",{staticClass:"demo-block"},[s("h3",[t._v("可悬浮")]),t._v(" "),s("div",{staticClass:"demo-content"},[s(e.UiCard,{staticClass:"demo-card",attrs:{hoverable:""},scopedSlots:t._u([{key:"header",fn:function(){return[s("h3",[t._v("悬浮效果")])]},proxy:!0}])},[t._v(" "),s("p",[t._v("将鼠标悬浮在卡片上会有阴影效果。")]),t._v(" "),s("p",[t._v("适用于可点击的卡片内容。")])])],1)])])])},[],!1,null,"fb3dd094",null).exports,p=(0,t.defineComponent)({__name:"theme-example",setup(t){let{theme:i,updateTheme:o}=(0,e.useTheme)();return{__sfc:!0,theme:i,updateTheme:o,handleColorChange:(t,s)=>{o({[s]:t.target.value})},handleReset:()=>{o(e.defaultTheme)},formatKey:t=>({colorPrimary:"主色",colorPrimaryDark:"主色（深）",colorSecondary:"次色",colorSecondaryDark:"次色（深）",colorSuccess:"成功色",colorSuccessDark:"成功色（深）",colorWarning:"警告色",colorWarningDark:"警告色（深）",colorDanger:"危险色",colorDangerDark:"危险色（深）",colorTextPrimary:"主要文本色",colorTextSecondary:"次要文本色",colorBackground:"背景色",colorBorder:"边框色"})[t]||t,UiButton:s.UiButton,UiCard:s.UiCard}}});a(742);let v=n(p,function(){var t=this,s=t._self._c,e=t._self._setupProxy;return s(e.UiCard,{staticClass:"component-section",scopedSlots:t._u([{key:"header",fn:function(){return[s("h2",[t._v("主题定制")])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"theme-footer"},[s(e.UiButton,{attrs:{type:"primary"},on:{click:e.handleReset}},[t._v("重置主题")])],1)]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"theme-controls"},t._l(e.theme,function(i,o){return s("div",{key:o,staticClass:"color-picker"},[s("label",[t._v(t._s(e.formatKey(o)))]),t._v(" "),s("input",{attrs:{type:"color"},domProps:{value:i},on:{input:function(t){return e.handleColorChange(t,o)}}})])}),0)])},[],!1,null,"6f2f46df",null).exports;a(770);let _=n({},function(){return this._self._c,this._m(0)},[function(){var t=this._self._c;return t("div",{staticClass:"remote-doc"},[t("section",{staticClass:"doc-section intro-section"},[t("h2",{staticClass:"section-title"},[this._v("Remote 服务")]),this._v(" "),t("div",{staticClass:"section-content"},[t("p",{staticClass:"intro-text"},[this._v("Remote 服务是一个独立的微前端服务，可以：")]),this._v(" "),t("ul",{staticClass:"feature-list"},[t("li",[t("span",{staticClass:"bullet"},[this._v("•")]),this._v(" "),t("span",[this._v("将组件、函数导出给其他应用使用")])]),this._v(" "),t("li",[t("span",{staticClass:"bullet"},[this._v("•")]),this._v(" "),t("span",[this._v("支持运行时动态加载，实现代码共享")])]),this._v(" "),t("li",[t("span",{staticClass:"bullet"},[this._v("•")]),this._v(" "),t("span",[this._v("确保所有应用使用相同版本的依赖")])])])])]),this._v(" "),t("section",{staticClass:"doc-section config-section"},[t("h2",{staticClass:"section-title"},[this._v("配置说明")]),this._v(" "),t("div",{staticClass:"section-content"},[t("div",{staticClass:"subsection"},[t("h3",{staticClass:"subsection-title"},[this._v("模块导出")]),this._v(" "),t("p",{staticClass:"subsection-desc"},[this._v("Remote 服务提供两种导出方式：")]),this._v(" "),t("div",{staticClass:"export-methods"},[t("div",{staticClass:"export-method"},[t("div",{staticClass:"method-header"},[t("code",{staticClass:"highlight"},[this._v("npm:package")]),this._v(" "),t("span",{staticClass:"method-name"},[this._v("导出第三方依赖")])]),this._v(" "),t("div",{staticClass:"method-content"},[t("p",[this._v("用于共享核心依赖包（如 Vue），确保所有应用使用相同版本。")]),this._v(" "),t("div",{staticClass:"code-block-wrapper"},[t("div",{staticClass:"code-header",staticStyle:{background:"#2d2d2d",padding:"0.5rem 1rem","border-top-left-radius":"8px","border-top-right-radius":"8px","border-bottom":"1px solid #3d3d3d"}},[t("span",{staticClass:"filename",staticStyle:{color:"#888","font-family":"monospace","font-size":"0.875rem"}},[this._v("entry.node.ts")])]),this._v(" "),t("div",{staticClass:"code-block",staticStyle:{background:"#1e1e1e",padding:"1rem","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px","font-family":"monospace","line-height":"1.5"}},[t("div",{staticStyle:{color:"#abb2bf"}},[t("span",{staticStyle:{color:"#c678dd"}},[this._v("export")]),this._v(" "),t("span",{staticStyle:{color:"#c678dd"}},[this._v("default")]),this._v(" {"),t("br"),this._v("\n                    \xa0\xa0modules: {"),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0exports: ["),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#5c6370"}},[this._v("// 导出 Vue 实例")]),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#98c379"}},[this._v("'npm:vue'")]),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0]"),t("br"),this._v("\n                    \xa0\xa0}"),t("br"),this._v("\n                    }\n                  ")])])]),this._v(" "),t("div",{staticClass:"tips"},[t("div",{staticClass:"tip-item"},[t("span",{staticClass:"tip-icon"},[this._v("\uD83D\uDCE6")]),this._v(" "),t("span",[this._v("需要支持 ESM 格式")])]),this._v(" "),t("div",{staticClass:"tip-item"},[t("span",{staticClass:"tip-icon"},[this._v("\uD83D\uDCDD")]),this._v(" "),t("span",[this._v("需要 TypeScript 类型定义")])])])])]),this._v(" "),t("div",{staticClass:"export-method"},[t("div",{staticClass:"method-header"},[t("code",{staticClass:"highlight"},[this._v("root:path")]),this._v(" "),t("span",{staticClass:"method-name"},[this._v("导出本地模块")])]),this._v(" "),t("div",{staticClass:"method-content"},[t("p",[this._v("用于共享项目内的组件、函数等可复用模块。")]),this._v(" "),t("div",{staticClass:"code-block-wrapper"},[t("div",{staticClass:"code-header",staticStyle:{background:"#2d2d2d",padding:"0.5rem 1rem","border-top-left-radius":"8px","border-top-right-radius":"8px","border-bottom":"1px solid #3d3d3d"}},[t("span",{staticClass:"filename",staticStyle:{color:"#888","font-family":"monospace","font-size":"0.875rem"}},[this._v("entry.node.ts")])]),this._v(" "),t("div",{staticClass:"code-block",staticStyle:{background:"#1e1e1e",padding:"1rem","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px","font-family":"monospace","line-height":"1.5"}},[t("div",{staticStyle:{color:"#abb2bf"}},[t("span",{staticStyle:{color:"#c678dd"}},[this._v("export")]),this._v(" "),t("span",{staticStyle:{color:"#c678dd"}},[this._v("default")]),this._v(" {"),t("br"),this._v("\n                    \xa0\xa0modules: {"),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0exports: ["),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#5c6370"}},[this._v("// UI 组件")]),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#98c379"}},[this._v("'root:src/components/index.ts'")]),this._v(","),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#5c6370"}},[this._v("// 组合式函数")]),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#98c379"}},[this._v("'root:src/composables/index.ts'")]),this._v(","),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#5c6370"}},[this._v("// 示例组件")]),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0\xa0\xa0"),t("span",{staticStyle:{color:"#98c379"}},[this._v("'root:src/examples/index.ts'")]),t("br"),this._v("\n                    \xa0\xa0\xa0\xa0]"),t("br"),this._v("\n                    \xa0\xa0}"),t("br"),this._v("\n                    }\n                  ")])])]),this._v(" "),t("div",{staticClass:"tips"},[t("div",{staticClass:"tip-item"},[t("span",{staticClass:"tip-icon"},[this._v("\uD83D\uDCC1")]),this._v(" "),t("span",[this._v("建议使用 index.ts 统一导出")])]),this._v(" "),t("div",{staticClass:"tip-item"},[t("span",{staticClass:"tip-icon"},[this._v("\uD83D\uDD0D")]),this._v(" "),t("span",[this._v("路径基于项目根目录")])])])])])])])])])])}],!1,null,"1451f488",null).exports;export{c as ButtonShowcase,d as CardShowcase,_ as CodeShowcase,v as ThemeCustomizer};