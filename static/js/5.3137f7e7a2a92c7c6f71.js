webpackJsonp([5],{"2f1a":function(e,t){},Wqb0:function(e,t){var r=t;r.escape=encodeURIComponent,r.unescape=function(e){return decodeURIComponent(e.replace(/\+/g," "))},r.stringify=function(e,t,c,i){if(!((l=e)&&"[object Object]"===n.call(l)&&"isPrototypeOf"in l))return"";var l;t=t||"&",c=c||"=",i=i||!1;var u,p,d=[],f=r.escape;for(u in e)if(o.call(e,u))if(p=e[u],u=r.escape(u),s(p))d.push(u,c,f(p+""),t);else if(a(p)&&p.length)for(var h=0;h<p.length;h++)s(p[h])&&d.push(u,(i?f("[]"):"")+c,f(p[h]+""),t);else d.push(u,c,t);return d.pop(),d.join("")},r.parse=function(e,t,n){void 0===e&&(e=document.location.search);var s={};if("string"!=typeof e||0===c(e).length)return s;var i=(e=e.replace(/^\?/,"")).split(t||"&");n=n||"=";for(var l=r.unescape,u=0;u<i.length;u++){var p=i[u].split(n),d=l(c(p[0])),f=l(c(p.slice(1).join(n))),h=d.match(/^(\w+)\[\]$/);h&&h[1]&&(d=h[1]),o.call(s,d)?(a(s[d])||(s[d]=[s[d]]),s[d].push(f)):s[d]=h?[f]:f}return s};var n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,a=Array.isArray||function(e){return"[object Array]"===n.call(e)},c=String.prototype.trim?function(e){return null==e?"":String.prototype.trim.call(e)}:function(e){return null==e?"":e.toString().replace(/^\s+/,"").replace(/\s+$/,"")};function s(e){return e!==Object(e)}},jT7l:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a=r("Wqb0"),c=r.n(a),s=r("NYxO"),i=(o()({},Object(s.d)(["UpdateToken","UpdateUserId"])),o()({},Object(s.e)(["errorText","userId","token"]),Object(s.c)(["domain"])),{name:"login",created:function(){var e=this;this.$router.go(1);var t=c.a.parse(window.location.href.split("?")[1]);localStorage.removeItem("userId"),localStorage.removeItem("token"),console.log(111),this.$ajax({method:"get",url:"static/test/login.json"}).then(function(r){localStorage.setItem("userId",r.data.userId),localStorage.setItem("token",r.data.token),e.UpdateToken(r.data.token),e.UpdateUserId(r.data.userId),console.log(r),0==t.from?e.$router.push("/user"):e.$router.push("/bystages")}).catch(function(e){this.errorEnv(e),this.$vux.alert.show({title:"提示",content:this.errorText||"登录失败,请刷新页面！"})})},methods:o()({},Object(s.d)(["UpdateToken","UpdateUserId"])),computed:o()({},Object(s.e)(["errorText","userId","token"]),Object(s.c)(["domain"]))}),l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"login"})},staticRenderFns:[]};var u=r("VU/8")(i,l,!1,function(e){r("2f1a")},"data-v-390a8911",null);t.default=u.exports}});
//# sourceMappingURL=5.3137f7e7a2a92c7c6f71.js.map