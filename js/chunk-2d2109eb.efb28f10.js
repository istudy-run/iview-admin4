(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2109eb"],{b953:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e._self._c;return r("div",{class:e.prefixCls},[r("div",{class:"".concat(e.prefixCls,"-header")}),r("div",{class:"".concat(e.prefixCls,"-container")},[r("div",{class:"".concat(e.prefixCls,"-container-top")},[r("div",{class:"".concat(e.prefixCls,"-container-logo")},[r("img",{attrs:{src:t("f66a"),alt:"logo"}})]),r("article",{class:"".concat(e.prefixCls,"-typography")},[r("h1",[e._v("iView Admin")]),r("div",{class:"".concat(e.prefixCls,"-typography")},[e._v("基于 iView Admin 2.0、ViewUI 4.0 的中台前端/设计解决方案")])])]),r("div",{class:"".concat(e.prefixCls,"-container-form")},[r("Form",{ref:"form",attrs:{model:e.form,rules:e.rule},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleRegister.apply(null,arguments)}}},[r("FormItem",{attrs:{prop:"email"}},[r("Input",{attrs:{size:"large",placeholder:"请输入邮箱"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-mail-outline"}})]},proxy:!0}]),model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{size:"large",type:"password",placeholder:"至少6位密码，区分大小写"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-lock-outline"}})]},proxy:!0}]),model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("FormItem",{attrs:{prop:"confirmPassword"}},[r("Input",{attrs:{size:"large",type:"password",placeholder:"确认密码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-lock-outline"}})]},proxy:!0}]),model:{value:e.form.confirmPassword,callback:function(r){e.$set(e.form,"confirmPassword",r)},expression:"form.confirmPassword"}})],1),r("FormItem",{attrs:{prop:"telPhone"}},[r("Input",{attrs:{size:"large",placeholder:"请输入手机号码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-phone-portrait"}})]},proxy:!0}]),model:{value:e.form.telPhone,callback:function(r){e.$set(e.form,"telPhone",r)},expression:"form.telPhone"}})],1),r("FormItem",{attrs:{prop:"captcha"}},[r("Row",{attrs:{gutter:8}},[r("Col",{attrs:{span:16}},[r("Input",{attrs:{size:"large",placeholder:"请输入验证码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-keypad-outline"}})]},proxy:!0}]),model:{value:e.form.captcha,callback:function(r){e.$set(e.form,"captcha",r)},expression:"form.captcha"}})],1),r("Col",{attrs:{span:8}},[r("Button",{attrs:{size:"large",long:""}},[e._v("获取验证码")])],1)],1)],1),r("div",{class:"".concat(e.prefixCls,"-container-submit")},[r("Button",{attrs:{type:"primary",size:"large",long:""},nativeOn:{click:function(r){return e.handleRegister.apply(null,arguments)}}},[e._v("登录")])],1)],1)],1),r("div",{class:"".concat(e.prefixCls,"-container-to-login")},[r("router-link",{attrs:{to:"/login"}},[e._v("使用已有账户登录")])],1)]),r("GlobalFooter")],1)},s=[],a=(t("e9c4"),t("cd4a")),n="ivu-admin-login",l={name:"register",components:{GlobalFooter:a["b"]},data:function(){return{prefixCls:n,form:{email:"",password:"",confirmPassword:"",telPhone:"",captcha:""},rule:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],password:[{required:!0,message:"密码不能为空！",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空！",trigger:"blur"}],telPhone:[{required:!0,message:"请输入手机号码！",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码！",trigger:"blur"}]}}},methods:{handleRegister:function(){var e=this;this.$refs.form.validate((function(r){r&&e.$Notice.success({title:"注册成功",desc:JSON.stringify(e.form,null,4)})}))}}},i=l,c=t("2877"),p=Object(c["a"])(i,o,s,!1,null,null,null);r["default"]=p.exports}}]);