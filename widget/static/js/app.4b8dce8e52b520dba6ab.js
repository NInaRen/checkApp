webpackJsonp([18],{0:function(t,e){},Bfwr:function(t,e,n){"use strict";Boolean,String,String,String;var a={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(t){n("ErAa")},null,null);e.a=i.exports},ErAa:function(t,e){},KXlY:function(t,e){},LMSR:function(t,e,n){"use strict";e.a="http://192.168.4.49:80/mysqlcms/"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:this.transitionName}},[e("router-view",{staticClass:"view-box"})],1)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App",data:function(){return{transitionName:""}},watch:{$route:function(t,e,n){this.$store.commit("setRranisitionName",{toName:t.name,fromName:e.name}),this.transitionName=this.$store.getters.getTransitionName}}},o,!1,function(t){n("KXlY")},null,null).exports,r=n("/ocq"),s=[{path:"/setting",name:"setting",component:function(t){return Promise.all([n.e(0),n.e(16)]).then(function(){var e=[n("YyxV")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],c=[{path:"/applyVacationDept",name:"applyVacationDept",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("KHuh")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}},{path:"/applyVacationWindow",name:"applyVacationWindow",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("SjHf")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}},{path:"/vacationList",name:"vacationList",component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("386Q")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}},{path:"/checkList",name:"checkList",component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){var e=[n("ZrFe")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}},{path:"/vacationCheckWindow",name:"vacationCheckWindow",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("FwIh")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}},{path:"/vacationCheckDept",name:"vacationCheckDept",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("Pfqn")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}}],u=[{path:"/clockIn",name:"clockIn",component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("EZsJ")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/clockInRecord",name:"clockInRecord",component:function(t){return Promise.all([n.e(0),n.e(14)]).then(function(){var e=[n("7akf")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],l=n("Au9i"),p=n.n(l),m=n("LMSR"),d={LOGIN:function(t,e){return t.$http.post(m.a+"zhfwgl/leave/appUserLoginAction!appUserLogin.do",e)},LOGOUT:function(t,e){return t.$http.post(m.a+"zhfwgl/leave/appUserLoginAction!appUserLogout.do",e)},CHECKTOKEN:function(t,e){return t.$http.post(m.a+"zhfwgl/leave/appUserLoginAction!checkLoginState.do",e)}};a.default.use(r.a);var h=[{path:"/",name:"index",component:function(t){return n.e(15).then(function(){var e=[n("2NXm")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",name:"home",component:function(t){return n.e(5).then(function(){var e=[n("vkyI")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/attendance",name:"attendance",component:function(t){return n.e(7).then(function(){var e=[n("JHZo")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/leave",name:"leave",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("Q0EH")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireslogin:!1}},{path:"/mine",name:"mine",component:function(t){return n.e(4).then(function(){var e=[n("bdlY")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/login",name:"login",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("QlWu")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/checkTab",name:"checkTab",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("Yzmv")];t.apply(null,e)}.bind(this)).catch(n.oe)}}].concat(s).concat(u).concat(c),f=new r.a({routes:h});f.beforeEach(function(t,e,n){var a=f.app,o=a.$options.store.getters.getUser.token;""!==o&&void 0!==o?(l.Indicator.open({spinnerType:"fading-circle"}),d.CHECKTOKEN(a,{token:o}).then(function(e){l.Indicator.close();var o=e.body;o.success?n():"login"===t.name?n():l.MessageBox.alert(o.message,"操作提示").then(function(t){a.$router.push({name:"login"})})},function(t){l.Indicator.close(),n({name:e.name})})):"login"===t.name?n():a.$router.push({name:"login"})});var g=f,v=n("mvHQ"),y=n.n(v),k=n("NYxO");a.default.use(k.a);var I={state:function(){return{userData:{token:"",data:{}},menuType:"",isChecked:!1,vacationId:""}},getters:{getUser:function(t){var e=t.userData;return t.userData.token||(e=JSON.parse(localStorage.getItem("user")||"{}")),e},getMenuType:function(t){return t.menuType},getIsChecked:function(t){return t.isChecked},getVacationId:function(t){return t.vacationId}},mutations:{login:function(t,e){t.userData.token=e.token,t.userData.data=e.data,a.default.set(t,"userData",{token:e.token,data:e.data})},loginout:function(t){t.userData.token="",localStorage.setItem("user",""),a.default.set(t,"userData",{token:"",data:{}})},setMenuType:function(t,e){t.menuType=e.data},setIsChecked:function(t,e){t.isChecked=e.data},setVacationId:function(t,e){t.vacationId=e.data}},actions:{login:function(t,e){var n=e.loginid,a=e.password,o=e.from,i=e.loginIp,r=e.model;console.log(e),l.Indicator.open({text:"登录中...",spinnerType:"fading-circle"});var s=t.getters.getRegistrationId;d.LOGIN(e,{loginid:n,password:a,registrationId:s,loginIp:i,model:r}).then(function(n){l.Indicator.close();var a=n.body;if(a.success){var i={token:a.token,data:a.date};localStorage.setItem("user",y()(i)),t.commit("login",i),l.MessageBox.alert(a.message,"操作提示").then(function(t){""!==o&&o?"mine"===o?e.$router.push({name:"mine"}):e.$router.go(-1):e.$router.push({name:"home"})})}else l.MessageBox.alert(a.message,"操作提示")},function(t){l.Indicator.close()})},loginout:function(t,e){var n=t.getters.getUser.token;l.Indicator.open({text:"正在退出登录...",spinnerType:"fading-circle"}),d.LOGOUT(e,{token:n}).then(function(n){l.Indicator.close();var a=n.body;a.success?(t.commit("loginout"),l.MessageBox.alert(a.message,"操作提示").then(function(){e.$router.push({name:"login"})})):l.MessageBox.alert(a.message,"操作提示")},function(t){l.Indicator.close(),l.MessageBox.alert("退出登录失败","操作提示")})}}},w=new k.a.Store({modules:{transitionModel:{state:function(){return{transitionName:"",routerHistoryArr:[]}},getters:{getTransitionName:function(t){return t.transitionName},getRouterHistoryArr:function(t){return t.routerHistoryArr}},mutations:{setRranisitionName:function(t,e){var n=e.toName,a=e.fromName;return t.routerHistoryArr.indexOf(n)<0?t.routerHistoryArr.push(n):t.routerHistoryArr.indexOf(n)>t.routerHistoryArr.indexOf(a)?t.transitionName="slide-right":t.transitionName="slide-left",a||(t.transitionName=""),t.transitionName}}},userModel:I,registrationIdModel:{state:function(){return{registrationId:""}},getters:{getRegistrationId:function(t){return t.registrationId}},mutations:{setRegistrationId:function(t,e){t.registrationId=e}}},messageNumModel:{state:function(){return{msgNum:0}},getters:{getMsgNum:function(t){return t.msgNum}},mutations:{setMsgNum:function(t,e){t.msgNum=e}}}}}),N=n("8+8L"),b=n("Y+qm"),x=(n("d8/S"),n("sVYa"),n("v5o6"));n.n(x).a.attach(document.body),a.default.config.productionTip=!1,a.default.use(b.a),a.default.use(N.a),a.default.use(p.a),a.default.use(N.a),a.default.http.interceptors.push(function(t,e){t.credentials=!0,t.emulateJSON=!0,t.timeout=3e4;var n=void 0;t.timeout&&(n=setTimeout(function(){t.abort()},t.timeout)),e(function(t){clearTimeout(n);var e=t.body;return 0===t.status&&p.a.MessageBox.alert("请求失败","操作提示"),e.success?t:e.code&&"12"===e.code?void p.a.MessageBox.alert(e.message,"操作提示").then(function(){g.push({name:"login"})}):t})}),new a.default({el:"#app",router:g,store:w,components:{App:i},template:"<App/>"})},"d8/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4b8dce8e52b520dba6ab.js.map