(function(e){function n(n){for(var o,c,u=n[0],i=n[1],l=n[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,u=1;u<t.length;u++){var i=t[u];0!==r[i]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var s=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"5c0b":function(e,n,t){"use strict";var o=t("9c0c"),r=t.n(o);r.a},"9c0c":function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},a=[],c=(t("5c0b"),t("2877")),u={},i=Object(c["a"])(u,r,a,!1,null,null,null),l=i.exports,s=t("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var f=t("8c4f"),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("money")])},d=[],v={name:"Money"},b=v,h=Object(c["a"])(b,p,d,!1,null,"02957860",null),m=h.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("labels")])},y=[],w={name:"Labels"},_=w,O=Object(c["a"])(_,g,y,!1,null,"06c5b61f",null),j=O.exports,k=t("f820");o["a"].use(f["a"]);var x=[{path:"/",name:"Money",component:m},{path:"/money",name:"Money",component:m},{path:"/labels",name:"Labels",component:j},{path:"/about",name:"About",component:k["default"]},{path:"/about",name:"About",component:function(){return Promise.resolve().then(t.bind(null,"f820"))}}],P=new f["a"]({routes:x}),A=P,M=t("2f62");o["a"].use(M["a"]);var S=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:A,store:S,render:function(e){return e(l)}}).$mount("#app")},f820:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("about")])},r=[],a={name:"About"},c=a,u=t("2877"),i=Object(u["a"])(c,o,r,!1,null,"ae6d2906",null);n["default"]=i.exports}});
//# sourceMappingURL=app.18720026.js.map