(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eba91a9c"],{"0b22":function(e,o,d){},"2fd0":function(e,o,d){"use strict";d("0b22")},"81a1":function(e,o,d){"use strict";d.r(o);var c=function(){var e=this,o=e._self._c;return o("Card",{attrs:{"dis-hover":!0},scopedSlots:e._u([{key:"title",fn:function(){return[o("Avatar",{staticStyle:{color:"rgb(82, 196, 26)",background:"rgb(246, 255, 237)"},attrs:{size:"small",icon:"md-send"}}),o("span",{staticClass:"ivu-pl-8"},[e._v("更新日志")])]},proxy:!0}])},[o("article",{staticClass:"update-doc"},[o("Timeline",e._l(e.versionLog,(function(d,c){return o("TimelineItem",{key:"item-".concat(c),attrs:{color:d.color},scopedSlots:e._u([{key:"dot",fn:function(){return[o("Icon",{attrs:{type:d.icon}})]},proxy:!0}],null,!0)},[o("span",[e._v(e._s(d.title))]),o("p",[o("code",[e._v(e._s(d.date))])]),o("ul",e._l(d.list,(function(d,c){return o("li",{key:"li-".concat(c),domProps:{innerHTML:e._s(d)}})})),0)])})),1)],1)])},t=[],i=[{title:"iView Admin 4.0项目启动",icon:"md-time",date:"2021-12-04",list:["使用<code>iview admin 2.5.0</code>版本初始化"]},{title:"4.0.0",icon:"md-time",date:"2021-12-11",list:["升级<code>@vue/cli</code>，解决<code>eslint</code>报错","升级<code>package.json</code>基础依赖","升级<code>View UI 4.7.0</code>版本 & 配置<code>less-loader</code>","解决左侧菜单背景色异常，并调整背景色及Logo样式，Logo、ico图标替换"]},{title:"iView Admin 4.0项目终止",icon:"md-time",date:"2021-12-12",list:["不支持IE浏览器","不支持移动端响应式","常用icon需自行引入"]},{title:"iView Admin 4.0项目重启",icon:"md-time",date:"2023-02-20",list:["时隔14个月，iView Admin 4.0项目重启"]},{title:"4.0.1",icon:"md-time",date:"2023-02-28",list:["升级<code>eslint</code>版本，解决<code>eslint</code>失效问题，添加<code>eslint</code>规则，格式化代码","调整<code>layout</code>目录结构、布局方式，重写<code>GlobalHeader、GlobalContent、GlobalFooter</code>","重写<code>GlobalBreadCrumb、UserMenu</code>，新增<code>Icons</code>组件，同时支持iView内置图标与外部图标","优化<code>TagsNav</code>，添加<code>styles</code>目录，组件与样式分离，css前缀统一为<code>ivu-admin</code>","优化<code>SideMenu</code>，新增<code>Setting、SettingItem</code>组件","调整<code>vuex</code>目录结构，增加<code>setting module</code>，<code>libs</code>调整为<code>utils</code>，<code>view</code>调整为<code>views</code>","增加<code>ThemeBlock</code>组件、优化，增加<code>GlobalLogo</code>组件","配置新增<code>固定侧栏区域</code>，<code>固定顶栏区域</code>，<code>置顶顶栏区域</code>，<code>固定多页签栏</code>，<code>顶部主题切换</code>","重写<code>Login</code>组件，layout相关组件移动至components；侧边栏折叠按钮禁用鼠标选择","优化页面滚动条样式，解决浏览器滚动条不撑满屏幕问题","移除i18n国际化、header-bar、sider-trigger、error-store、back-top等组件","......"]},{title:"4.0.2",icon:"md-time",date:"2023-03-13",list:["新增<code>Register</code>组件，<code>NowTime</code>组件，主题色切换功能","组件<code>GlobalLogo</code>新增type属性，同时支持图片Logo和文字Logo","重写<code>SideMenu、CollapseMenu</code>组件，新增<code>SideMenuTree</code>组件，移除<code>SideMenuItem</code>组件，菜单路由跳转a链接实现","layout及其基础组件涉及ViewUI组件的class使用less变量抽取","修复Logo居中时，菜单折叠展开闪烁问题","修复Login页面overflow闪烁问题","修复colorWeak、greyMode下内容高度overflow问题，logo区域border bottom超出1px导致","配置新增<code>开启色弱模式</code>，<code>开启灰色模式</code>，<code>侧栏排他展开</code>，<code>重载页面按钮</code>，<code>开启全局水印</code>，<code>开启全局页脚</code>","......"]},{title:"4.0.3",icon:"md-time",date:"2023-03-17",list:["新增<code>HeaderSearch</code>组件，搜索路由菜单进行跳转","组件<code>SettingItem</code>action属性支持radio；修复包裹浮层元素错位问题","新增彩色日志打印功能。主题色替换功能存在性能问题，暂缓","全局替换插槽使用方式，v-slot改为#","build打包方式配置gzip压缩，提高首屏加载速度","配置新增<code>侧边菜单搜索</code>，<code>日志快捷访问</code>，<code>全屏切换按钮</code>，<code>显示消息中心</code>，<code>下滑隐藏顶栏</code>","......"]},{title:"4.0.4",icon:"md-time",date:"2023-03-29",list:["新增<code>HeadMenu</code>组件，调整Menu相关组件命名，导航模式增加<code>混合菜单导航</code>","新增<code>个人中心</code>、<code>账户设置</code>页面，<code>下滑隐藏顶栏</code>增加过渡动画","新增<code>TabsNav</code>组件，重写<code>TagsNav</code>逻辑，右键菜单优化","优化<code>Menu</code>渲染逻辑，传入处理好的MenuList渲染视图，不做过多的逻辑判断","路由地址path精简，js拼接处理；动态标题从路由守卫改为<code>VueMeta</code>插件实现","组件<code>GlobalLayout</code>重命名为<code>BasicLayout</code>","组件<code>GlobalContent</code>的逻辑从<code>GlobalLayout</code>中分离，<code>BreadCrumb</code>、<code>TagsNav</code>如此","修复<code>HeadMenu</code>组件在dark、primary模式下，无法显示选中MenuItem的问题","修复导航模式切换时，菜单未自动选中的问题","配置新增<code>禁用路由动画</code>，<code>路由切换动画</code>，<code>开启动态标题</code>，<code>页签显示风格</code>，<code>显示页签图标</code>","移除tree-table-vue， v-org-tree 依赖，并移除相关组件实现","......"]},{title:"4.0.5",color:"green",icon:"md-time",date:"2023-04-05",list:["组件<code>GlobalLayout</code>相关的基础组件、配置项<code>config/index.js</code>变量，规范命名","移除<code>tagsNav</code>组件，多页签实现使用<code>TabsNav</code>组件","组件<code>GlobalHeader</code>中功能全部使用组件化方式实现","个人中心新增<code>头像裁剪</code>功能","优化路由菜单仅有一个子菜单时，path路径层级存在两层的问题","修复header不固定、tabsNav固定时，tabsNav与顶部距离问题","修复了路由菜单title是function时，浏览器标题显示错误的问题","配置新增<code>页签显示边框</code>","移除cropperjs依赖，并移除cropper组件实现，引入<code>vue-cropper</code>","......"]}],a=i.reverse(),n={name:"UpdateLog",data:function(){return{versionLog:a}}},l=n,s=(d("2fd0"),d("2877")),r=Object(s["a"])(l,c,t,!1,null,null,null);o["default"]=r.exports}}]);