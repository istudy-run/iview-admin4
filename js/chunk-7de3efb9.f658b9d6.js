(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de3efb9"],{"0f10":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("Card",[t("h3",{staticStyle:{padding:"10px 0"}},[e._v(" drag-drawer组件是对iview的drawer组件的封装，在支持drawer所有api的基础上，支持可拖动和footer底部插槽 ")]),t("div",{staticStyle:{padding:"10px 0"}},[t("b",[e._v(" 方向 "),t("i-switch",{scopedSlots:e._u([{key:"open",fn:function(){return[t("span",[e._v("开")])]},proxy:!0},{key:"close",fn:function(){return[t("span",[e._v("关")])]},proxy:!0}]),model:{value:e.placement,callback:function(t){e.placement=t},expression:"placement"}})],1),t("b",[e._v(" 是否可拖动 "),t("i-switch",{model:{value:e.draggable,callback:function(t){e.draggable=t},expression:"draggable"}})],1),t("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){e.showContainerBDrawer=!e.showContainerBDrawer}}},[e._v(e._s(e.showContainerBDrawer?"关闭":"打开")+"容器内抽屉")]),t("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){e.showWindowBDrawer=!0}}},[e._v("打开全屏抽屉")])],1),t("div",{staticClass:"drag-drawer-inner-box"},[t("drag-drawer",{attrs:{width:e.width2,"min-width":"30px",inner:!0,transfer:!1,placement:e.placementComputed,draggable:e.draggable,scrollable:!0},on:{"update:width":function(t){e.width2=t},"on-resize":e.handleResize},model:{value:e.showContainerBDrawer,callback:function(t){e.showContainerBDrawer=t},expression:"showContainerBDrawer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"md-aperture",size:18}}),t("b",[e._v("这是标题")])],1),e._l(200,(function(r){return t("p",{key:r},[e._v(e._s(r))])})),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("p",[e._v("123123")]),t("p",[e._v("21312")])])],2)],1),t("drag-drawer",{attrs:{width:e.width1,"min-width":300,placement:e.placementComputed,draggable:e.draggable,scrollable:!0},on:{"update:width":function(t){e.width1=t}},model:{value:e.showWindowBDrawer,callback:function(t){e.showWindowBDrawer=t},expression:"showWindowBDrawer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"md-aperture",size:18}}),t("b",[e._v("这是标题")])],1),t("Button",{on:{click:function(t){e.showBDrawer3=!0}}},[e._v("显示多层")]),e._l(200,(function(r){return t("p",{key:r},[e._v(e._s(r))])}))],2)],1)},a=[],i=(r("99af"),function(){var e=this,t=e._self._c;return t("Drawer",e._g(e._b({ref:"drawerWrapper",attrs:{value:e.value,width:e.width,"class-name":e.outerClasses},on:{input:e.handleInput}},"Drawer",e.$attrs,!1),e.$listeners),[e._l(e.$slots,(function(r,n){return["default"!==n?e._l(r,(function(e,r){return t("render-dom",{key:"b_drawer_".concat(n,"_").concat(r),attrs:{slot:n,render:function(){return e}},slot:n})})):[t("div",{key:"b_drawer_".concat(n),class:"".concat(e.prefix,"-body-wrapper")},e._l(r,(function(e,r){return t("render-dom",{key:"b_drawer_".concat(n,"_").concat(r),attrs:{slot:n,render:function(){return e}},slot:n})})),1)]]})),e.draggable?t("div",{class:"".concat(e.prefix,"-trigger-wrapper"),style:e.triggerStyle,on:{mousedown:e.handleTriggerMousedown}},[e._t("trigger",(function(){return[t("drag-drawer-trigger")]}))],2):e._e(),e.$slots.footer?t("div",{class:"".concat(e.prefix,"-footer")},[e._t("footer")],2):e._e()],2)}),o=[],s=r("ade3"),d=(r("a9e3"),r("a15b"),{name:"RenderDom",functional:!0,props:{render:Function},render:function(e,t){return t.props.render(e)}}),c=function(){var e=this,t=e._self._c;return t("div",{class:"".concat(e.prefix,"-move-trigger")},[t("div",{class:"".concat(e.prefix,"-move-trigger-point")},[t("i"),t("i"),t("i"),t("i"),t("i")])])},l=[],u={data:function(){return{prefix:"drag-drawer"}}},p={name:"DragDrawerTrigger",mixins:[u]},h=p,w=r("2877"),f=Object(w["a"])(h,c,l,!1,null,null,null),m=f.exports,g=r("b893"),v=(r("1337"),{name:"BDrawer",components:{RenderDom:d,DragDrawerTrigger:m},mixins:[u],props:{value:{type:Boolean,default:!1},width:{type:[String,Number],default:256},draggable:{type:Boolean,default:!1},minWidth:{type:[String,Number],default:256}},data:function(){return{canMove:!1,wrapperWidth:0,wrapperLeft:0}},computed:{outerClasses:function(){var e=["".concat(this.prefix,"-wrapper"),this.canMove?"none-select pointer-events-none":""];return e.join(" ")},placement:function(){return this.$attrs.placement},innerWidth:function(){var e=this.width;return e<=100?this.wrapperWidth*e/100:e},triggerStyle:function(){var e;return e={},Object(s["a"])(e,this.placement,"".concat(this.innerWidth,"px")),Object(s["a"])(e,"position",this.$attrs.inner?"absolute":"fixed"),e}},methods:{handleInput:function(e){this.$emit("input",e)},handleTriggerMousedown:function(e){this.canMove=!0,this.$emit("on-resize-start"),window.getSelection().removeAllRanges()},handleMousemove:function(e){if(this.canMove){this.setWrapperWidth();var t=e.pageX-this.wrapperLeft,r="right"===this.placement?this.wrapperWidth-t:t;r=Math.max(r,parseFloat(this.minWidth)),e.atMin=r===parseFloat(this.minWidth),r<=100&&(r=r/this.wrapperWidth*100),this.$emit("update:width",parseInt(r)),this.$emit("on-resize",e)}},handleMouseup:function(e){this.canMove=!1,this.$emit("on-resize-end")},setWrapperWidth:function(){var e=this.$refs.drawerWrapper.$el.getBoundingClientRect(),t=e.width,r=e.left;this.wrapperWidth=t,this.wrapperLeft=r}},mounted:function(){Object(g["f"])(document,"mousemove",this.handleMousemove),Object(g["f"])(document,"mouseup",this.handleMouseup),this.setWrapperWidth()},beforeDestroy:function(){Object(g["e"])(document,"mousemove",this.handleMousemove),Object(g["e"])(document,"mouseup",this.handleMouseup)}}),b=v,_=Object(w["a"])(b,i,o,!1,null,null,null),y=_.exports,x=y,D={name:"drag_drawer",components:{DragDrawer:x},data:function(){return{showWindowBDrawer:!1,showContainerBDrawer:!1,showBDrawer3:!1,width1:300,width2:200,placement:!1,draggable:!0}},computed:{placementComputed:function(){return this.placement?"left":"right"}},methods:{handleResize:function(e){var t=e.atMin;console.log(t)}}},W=D,B=(r("93a2"),Object(w["a"])(W,n,a,!1,null,null,null));t["default"]=B.exports},1337:function(e,t,r){},"93a2":function(e,t,r){"use strict";r("dc67")},dc67:function(e,t,r){}}]);