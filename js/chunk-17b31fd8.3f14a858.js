(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b31fd8"],{"3a86":function(t,a,e){"use strict";e("8002")},8002:function(t,a,e){},febf:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("div",[a("Row",[a("i-col",[a("Card",[a("Row",[a("i-col",{attrs:{span:"8"}},[a("Button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("显示可拖动弹窗")]),a("br"),a("Button",{directives:[{name:"draggable",rawName:"v-draggable",value:t.buttonOptions,expression:"buttonOptions"}],staticClass:"draggable-btn"},[t._v("这个按钮也是可以拖动的")])],1),a("i-col",{attrs:{span:"16"}},[a("div",{staticClass:"intro-con"},[t._v(' <Modal v-draggable="options" v-model="visible">标题</Modal> '),a("pre",{staticClass:"code-con"},[t._v("  options = {\n    trigger: '.ivu-modal-body',\n    body: '.ivu-modal'\n  }\n              ")])])])],1)],1)],1),a("Modal",{directives:[{name:"draggable",rawName:"v-draggable",value:t.options,expression:"options"}],model:{value:t.modalVisible,callback:function(a){t.modalVisible=a},expression:"modalVisible"}},[t._v(" 拖动这里即可拖动整个弹窗 ")])],1),a("Row",{staticStyle:{"margin-top":"10px"}},[a("i-col",[a("Card",[a("Row",[a("i-col",{attrs:{span:"8"}},[a("Input",{staticStyle:{width:"60%"},model:{value:t.inputValue,callback:function(a){t.inputValue=a},expression:"inputValue"}},[a("Button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.clipOptions,expression:"clipOptions"}],attrs:{slot:"append"},slot:"append"},[t._v("copy")])],1)],1),a("i-col",{attrs:{span:"16"}},[a("div",{staticClass:"intro-con"},[t._v(' <Input style="width: 60%" v-model="inputValue"> '),a("br"),t._v('    <Button slot="append" v-clipboard="clipOptions">copy</Button> '),a("br"),t._v(" </Input> "),a("pre",{staticClass:"code-con"},[t._v("  clipOptions: {\n    value: this.inputValue,\n    success: (e) => {\n      this.$Message.success('复制成功')\n    },\n    error: () => {\n      this.$Message.error('复制失败')\n    }\n  }\n              ")])])])],1)],1)],1),a("Modal",{directives:[{name:"draggable",rawName:"v-draggable",value:t.options,expression:"options"}],model:{value:t.modalVisible,callback:function(a){t.modalVisible=a},expression:"modalVisible"}},[t._v(" 拖动这里即可拖动整个弹窗 ")])],1)],1)},i=[],s={name:"directive_page",data:function(){return{modalVisible:!1,options:{trigger:".ivu-modal-body",body:".ivu-modal",recover:!0},buttonOptions:{trigger:".draggable-btn",body:".draggable-btn"},statu:1,inputValue:"这是输入的内容"}},computed:{clipOptions:function(){var t=this;return{value:this.inputValue,success:function(a){t.$Message.success("复制成功")},error:function(){t.$Message.error("复制失败")}}}},methods:{showModal:function(){this.modalVisible=!0}}},n=s,l=(e("3a86"),e("2877")),r=Object(l["a"])(n,o,i,!1,null,null,null);a["default"]=r.exports}}]);