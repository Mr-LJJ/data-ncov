(function(e){function t(t){for(var o,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return u.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"9903c9f8"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/data-ncov/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c64":function(e,t,n){"use strict";var o=n("d32a"),r=n.n(o);r.a},"62d4":function(e,t,n){},7343:function(e,t,n){"use strict";var o=n("93c3"),r=n.n(o);r.a},"93c3":function(e,t,n){},aea4:function(e,t,n){"use strict";var o=n("62d4"),r=n.n(o);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"Main"}}),n("div",{staticClass:"control"},[e.options.DataGeted?n("div",{staticClass:"item",on:{click:e.Submit}},[e._v("启动")]):n("div",[e._v("数据正在加载...")]),n("div",{staticClass:"item"},[e._v("速度"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.Step,expression:"options.Step"}],attrs:{type:"tel"},domProps:{value:e.options.Step},on:{input:function(t){t.target.composing||e.$set(e.options,"Step",t.target.value)}}}),e._v("小时；")]),n("div",{staticClass:"item"},[e._v("速度"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.SpeedShow,expression:"options.SpeedShow"}],attrs:{type:"tel"},domProps:{value:e.options.SpeedShow},on:{input:function(t){t.target.composing||e.$set(e.options,"SpeedShow",t.target.value)}}}),e._v("毫秒；")]),n("div",{staticClass:"item"},[e._v("X轴个数"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.ShowMaxNumber,expression:"options.ShowMaxNumber"}],attrs:{type:"tel"},domProps:{value:e.options.ShowMaxNumber},on:{input:function(t){t.target.composing||e.$set(e.options,"ShowMaxNumber",t.target.value)}}})]),n("div",{staticClass:"item"},[e._v("展示类型"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.ShowType,expression:"options.ShowType"}],attrs:{type:"tel"},domProps:{value:e.options.ShowType},on:{input:function(t){t.target.composing||e.$set(e.options,"ShowType",t.target.value)}}})])])])},a=[],i=n("d4ec"),u=n("bee2"),c=n("2caf"),s=n("262e"),l=n("9ab4"),d=n("60a3"),p=(n("4de4"),n("4160"),n("c975"),n("a15b"),n("a434"),n("ac1f"),n("1276"),n("159b"),n("5530")),m=(n("4d63"),n("25f0"),n("466d"),n("5319"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";e=h(e);var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},o=["日","一","二","三","四","五","六"];for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+o[e.getDay()])),n)new RegExp("(".concat(r,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?String(n[r]):("00"+n[r]).substr((""+n[r]).length)));return t});function h(e){if(!e)return new Date;if("string"===typeof e){var t=e.match(/(\d\d\d\d)\-(\d\d)\-(\d\d) (\d\d):(\d\d):?(\d\d)?/);if(t)return new Date(t[1],t[2]-1,t[3],t[4],t[5],t[6]||0);var n=e.match(/(\d\d\d\d)\-(\d\d)\-(\d\d)T(\d\d):(\d\d):?(\d\d)?/);if(n)return new Date(n[1],n[2]-1,n[3],n[4],n[5],n[6]||0)}return new Date(e)}var f=function(e,t){var n=[];e.forEach((function(e){"中国"===e.countryName&&"中国"!==e.provinceName&&(n.push(e),delete t[e.provinceName])})),n.forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}))},v={timer:null,myChart:{}},g=9,b=6,C=500,y=Date.now(),w=1,S=[],N=[],I={},k=0,x=0,E=0,R=0,O=0,j=!1,M=[],W=function(e,t,n){v.myChart=e,v.myChart.clear(),clearTimeout(v.timer),t.Step&&(b=t.Step),t.SpeedShow&&(C=t.SpeedShow),t.ShowMaxNumber&&(g=t.ShowMaxNumber),R=0,N=[],I={},k=0,E=0,j=!1,M=n.filter((function(e){return e.currentConfirmedCount||(e.currentConfirmedCount=e.confirmedCount-e.curedCount-e.deadCount),!0})),M.sort((function(e,t){return e.updateTime-t.updateTime})),T()};function T(){k=Date.now(),G();var e=[],t="40",n={itemStyle:{opacity:w},stack:"人数",type:"bar",barWidth:t},o=[{type:"bar",name:"累计确诊人数",data:[],itemStyle:{opacity:1},label:{show:!0,position:"right",color:"#000",distance:10},color:"#000",barGap:"-100%",barWidth:t},Object(p["a"])({name:"死亡人数",data:[],color:"#999"},n,{label:{show:!0,position:"top",offset:[34,4],formatter:function(e){return e.value?"死亡"+e.value+"人":""}}}),Object(p["a"])({name:"治愈人数",data:[],color:"#2cc"},n,{label:{show:!0,position:"inside",formatter:function(e){return e.value?e.value:""}}}),Object(p["a"])({name:"确诊人数",data:[],color:"#e25050"},n,{label:{show:!0,position:"inside",formatter:function(e){return e.value?e.value:""}}})];S.forEach((function(t,n){e.push(t.provinceName),o[1].data.push(t.deadCount),o[2].data.push(t.curedCount),o[3].data.push(t.currentConfirmedCount),o[0].data.push(t.confirmedCount)})),v.myChart.setOption({title:{text:"",subtext:"数据来源丁香园，截止时间："+m(O,"yyyy/MM/dd hh:mm:ss")},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"6%",left:"2%",right:"5%",bottom:"5%",containLabel:!0},legend:{data:["累计确诊人数","死亡人数","治愈人数","确诊人数"]},xAxis:{},yAxis:{type:"category",inverse:!0,axisLabel:{interval:0,rotate:0,formatter:function(e){return e.split("").join("\n")}},data:e},series:o});var r=Date.now(),a=r-k,i=Math.max(0,C-a);clearTimeout(v.timer),v.timer=setTimeout(T,i)}function G(){if(0===R&&(O=R=M[0].updateTime),!(R>y)){var e=new Date(R);for(e.setHours(e.getHours()+b),R=e.getTime();E<M.length;){var t=M[E];if(t.updateTime>R)break;if(O=t.updateTime,E++,x=Math.max(x,t.confirmedCount),!1===j&&"中国"===t.provinceName&&(j=!0,f(N,I)),j&&"中国"===t.countryName&&"中国"!==t.provinceName){var n=I[t.provinceName],o=N.indexOf(n);o>-1&&N.splice(o,1)}else t.provinceName in I?Object.assign(I[t.provinceName],t):(I[t.provinceName]=t,N.push(t)),N.sort((function(e,t){return t.confirmedCount-e.confirmedCount})),S.splice(0,S.length)}var r={provinceName:"其他地区",currentConfirmedCount:0,confirmedCount:0,suspectedCount:0,curedCount:0,deadCount:0,deadRate:"0.00",comment:"",operator:"",locationId:0,countryShortCode:"",countryFullName:"",statisticsData:"",incrVo:{currentConfirmedIncr:0,confirmedIncr:0,curedIncr:0,deadIncr:0},showRank:!1,continentName:"",countryName:"",provinceShortName:"",continentEnglishName:"",countryEnglishName:"",provinceEnglishName:"",updateTime:0};S=[],N.forEach((function(e,t){if(t<g)return S.push(e);r.currentConfirmedCount+=e.currentConfirmedCount,r.confirmedCount+=e.confirmedCount,r.suspectedCount+=e.suspectedCount,r.curedCount+=e.curedCount,r.deadCount+=e.deadCount})),S.push(r)}}var Z=9,P=6,Q=500,z=Date.now(),B=1,V=[],A=[],D={},U=0,Y=0,J=0,X=0,K=0,L=!1,H=[],F=function(e,t,n){v.myChart=e,v.myChart.clear(),clearTimeout(v.timer),t.Step&&(P=t.Step),t.SpeedShow&&(Q=t.SpeedShow),t.ShowMaxNumber&&(Z=t.ShowMaxNumber),X=0,A=[],D={},U=0,J=0,L=!1,H=n.filter((function(e){return e.currentConfirmedCount||(e.currentConfirmedCount=e.confirmedCount-e.curedCount-e.deadCount),!0})),H.sort((function(e,t){return e.updateTime-t.updateTime})),q()};function q(){U=Date.now(),_();var e=[],t="40",n={itemStyle:{opacity:B},stack:"人数",type:"bar",barWidth:t,coordinateSystem:"polar"},o=[Object(p["a"])({name:"死亡人数",data:[],color:"#999"},n,{label:{show:!0,position:"top",offset:[34,4],formatter:function(e){return e.value?"死亡"+e.value+"人":""}}}),Object(p["a"])({name:"治愈人数",data:[],color:"#2cc"},n,{label:{show:!0,position:"inside",formatter:function(e){return e.value?e.value:""}}}),Object(p["a"])({name:"确诊人数",data:[],color:"#e25050"},n,{label:{show:!0,position:"inside",formatter:function(e){return e.value?e.value:""}}})];V.forEach((function(t,n){e.push(t.provinceName),o[0].data.push(t.deadCount),o[1].data.push(t.curedCount),o[2].data.push(t.currentConfirmedCount)})),v.myChart.setOption({title:{text:"\n\n"+m(K,"yyyy/MM/dd hh:mm:ss"),subtext:"数据来源丁香园"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"6%",left:"2%",right:"5%",bottom:"5%",containLabel:!0},legend:{show:!0,data:["累计确诊人数","死亡人数","治愈人数","确诊人数"]},angleAxis:{},radiusAxis:{type:"category",data:e,inverse:!0,z:10,axisLabel:{interval:0,rotate:0}},polar:{},series:o});var r=Date.now(),a=r-U,i=Math.max(0,Q-a);clearTimeout(v.timer),v.timer=setTimeout(q,i)}function _(){if(0===X&&(K=X=H[0].updateTime),!(X>z)){var e=new Date(X);for(e.setHours(e.getHours()+P),X=e.getTime();J<H.length;){var t=H[J];if(t.updateTime>X)break;if(K=t.updateTime,J++,Y=Math.max(Y,t.confirmedCount),!1===L&&"中国"===t.provinceName&&(L=!0,f(A,D)),L&&"中国"===t.countryName&&"中国"!==t.provinceName){var n=D[t.provinceName],o=A.indexOf(n);o>-1&&A.splice(o,1)}else t.provinceName in D?Object.assign(D[t.provinceName],t):(D[t.provinceName]=t,A.push(t)),A.sort((function(e,t){return t.confirmedCount-e.confirmedCount})),V.splice(0,V.length)}var r={provinceName:"其他地区",currentConfirmedCount:0,confirmedCount:0,suspectedCount:0,curedCount:0,deadCount:0,deadRate:"0.00",comment:"",operator:"",locationId:0,countryShortCode:"",countryFullName:"",statisticsData:"",incrVo:{currentConfirmedIncr:0,confirmedIncr:0,curedIncr:0,deadIncr:0},showRank:!1,continentName:"",countryName:"",provinceShortName:"",continentEnglishName:"",countryEnglishName:"",provinceEnglishName:"",updateTime:0};V=[],A.forEach((function(e,t){if(t<Z)return V.push(e);r.currentConfirmedCount+=e.currentConfirmedCount,r.confirmedCount+=e.confirmedCount,r.suspectedCount+=e.suspectedCount,r.curedCount+=e.curedCount,r.deadCount+=e.deadCount})),V.push(r)}}var $=n("313e"),ee=n.n($),te=null,ne=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.options={Step:"6",SpeedShow:"200",ShowMaxNumber:"14",ShowType:"1",DataGeted:!1},e}return Object(u["a"])(n,[{key:"mounted",value:function(){var e=this;window.$.get("https://raw.githubusercontent.com/BlankerL/DXY-COVID-19-Data/master/json/DXYArea-TimeSeries.json",(function(t){e.options.DataGeted=!0,te=JSON.parse(t)}))}},{key:"Submit",value:function(){var e={Step:parseInt(this.options.Step),SpeedShow:parseInt(this.options.SpeedShow),ShowMaxNumber:parseInt(this.options.ShowMaxNumber),ShowType:parseInt(this.options.ShowType)},t=ee.a.init(document.getElementById("Main"));1===e.ShowType?F(t,e,te):2===e.ShowType&&W(t,e,te)}}]),n}(d["c"]);ne=Object(l["a"])([Object(d["a"])({components:{}})],ne);var oe=ne,re=oe,ae=(n("7343"),n("5c64"),n("2877")),ie=Object(ae["a"])(re,r,a,!1,null,"3a716fae",null),ue=ie.exports,ce=(n("d3b7"),n("8c4f")),se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},le=[],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},pe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],me=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(l["a"])([Object(d["b"])()],me.prototype,"msg",void 0),me=Object(l["a"])([d["a"]],me);var he=me,fe=he,ve=(n("aea4"),Object(ae["a"])(fe,de,pe,!1,null,"a38c91a8",null)),ge=ve.exports,be={name:"Home",components:{HelloWorld:ge}},Ce=be,ye=Object(ae["a"])(Ce,se,le,!1,null,null,null),we=ye.exports;o["a"].use(ce["a"]);var Se=[{path:"/",name:"Home",component:we},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ne=new ce["a"]({mode:"history",base:"/data-ncov/",routes:Se}),Ie=Ne;o["a"].config.productionTip=!1,new o["a"]({router:Ie,render:function(e){return e(ue)}}).$mount("#app")},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd1XVe53XvvD2eGQ/lXQcKuDwc2eFlCAGnUn7kT6T86J/+aNTgsWPchJJYciEOCQ8hF+G0hFCIHRSEqAuJBCqRaUEIEbmBppAIBGnESwZje8COZ+y587j3PLq+ffadGJix53HvPevcuz60xPjec89ZZ+39nf04+9vLSZKEFArFzHA1BAqFEkShUIIoFEoQhUIJolAoQRQKJYhCoQRRKJQgCoUSRKFQKEEUCiWIQrFo+Gv/8/YH+f/nsMWSHHMChyhxqPTTdyncWyJ3ScD/ztipiB3wXSqu6P17avN+TyFC5ggv4tRnmoxWTP1+5F+Mz17GPvPl49EKBWd3UsfXllPiso8VcYtmPba3fNuKrBVXrGFCbrdPwXndFL49ltI367roOpSUI4pGypv9s7q+ltj6JxqOQ07Bo/DgxGb2/a8cX0CnAWXJ5etz2TqdHiXHKlKj9w6i9XX8Ic41DmI8FVHhmmXk85MmRhCzJoiTWnig9LfJRHihgydxzAxJhBr7Bh/hK3yu+p9568FliTJF2aKMZfVd/kQOcKP6OBmS9+Rjm4zJ6faoeN0gOUn61MncLX4CJ+MRhe+P/dRxhfew2Df4CF/hs4jWg8vQYUKYMuWyRRkLjeHQ8YP0Z9mekVjA8Qj3VVcuoeDiXu63lkUE0ym6FA5PXBaNVr7qtPumGyPR4Bt8hK/wWUR5chn6XJYoU5StUHL8l+XEx2axhkS6yk+chJuP4rXLyOkIKJkS0B67adcqfL/0Y4pixxSysK6V8Yl9Mz7i3272NRFlhzJsu24Z5l9E9Ahmwfrpoj7uw3fZtktsRZKjIXnndlLxin7+W8ZTBwPf6I+Tg9HwxK2Ob8citbCoBoaxBxMCvsFH+CqjHCtUvLzflKWUcpwB91gupG5f9/Rtx39ZZBtmWyJtphKzHTQW0diP36b4aJmcLj/zGaSkHJPb4SWFi/tOJd8bTqd9s48VBRh4RKeUX/vjgXg8cpyCmz05xkJylxSoa8M5RF0eJaVIIkGOsg2yTc3UgpD94psiWxEOqDNYoOIXuHnGwE5AXUTFi46FTnRw4l/dwEm7/pSxcYnCF/gE3zInh52RRJkVP7/MlKFQcgCbjifHTAQBfsb2qsgBO3e1Cpf3UXBej3nRJKKrxU/rcH/pKzz4vNIQuRJTEmZklbg6EL4SPsE3GQPzinmfhbJDGQolB+r8w58abs5y8DqRt4ABeptLRR7koY9NleybEYw/MPisvF/ayT1/SvDewcnIcG32wfiCAbEvoCZyGaGsitdyz6XdTctQJq6fcT5mloNfYvu5yFZkpEz+RT0UrFoqpxVBV+vQxIrkaPnrbqdvXs6hcjbU+Jq4Nvvwd/BFRNeq2npwWfkX95iyE9p6PM72P/MhCPANTBSKu5WITHcC074Y9CUTkYglKBgcV/aVtlM5Kpp/RHFjDdfka7MP/2wG6m72661QNigjlBXKTGBtsjWKNs5atCf44Uds3xc5YD8Wknd2BxWuGjCzIxLWQzlFj+IjU108OL7bafM5sm5DDdfka/8T+9AJXyTMpqFsUEYoK5SZ0NbjVlvX500Q4Ha2A+JuCcEvhVS8qp/8MzspHhMSfO7mVPaP35BMRp9JsCQldbX+hmvxNfnamzJfqVvtWnGZoGxQRigroYs6UbfvOGHn4ORVkTaIbEWwtqg3MNO+Zql0JGCdVuCayhDuG9uJB7vp+oR17FbZc+NauCauLWLmKkqXr6NsUEYoK6GtxwY6CXXnEs0n2faIHLCPhhR8bikFKwRN+xZddHWu5a7Ol9yCZ2ZwHKdOxufGNeKRqS/hmnLWW1VMmQSrl5oyEkqOPbZu02IJAsic9sU7B+5uF9cOmqUfeLOdOaAZYb/CA+M/Ic9NxUoYMNfD/PT84f7xB807EAnrrbgMUBZt1w1SEpCIqfjF1Om5EuQNth0iu1r8tPLP76LCpX2yWpHDk2dGH018p6brtD5hOHf04cR3okOTZ0lqPVAW3gVdlMhdrfsTW6drRhDgRrYJcbeKZQxTkenvegNt6YBQwrQvOxG+P3ZHEia9TuClS9Br1XKge8XnxLlxjelzZ/2w4tijDMxyoHIsVQg1zvYPcy7KeZx4jG2zyFakFJF7Whu1XT2QvhfJeryeVNdplYPo4Pi9hKd7VVxVC8O5cH4+N65hXgoKuGfEHmWAskjGxI49Ntu6XHOCAD9ie1PcLSepjDNY00fB8m6KpSyJx/jgg9LfJEfLK40818w+LXY5e5zKaMfKl+DcIlSCZp0cd3U59igDI4+WOa2LunvfvDoD9RrcNLqAjDy3yzfrtKqbAkggSDIZmSlYxzz9a8BaJ101zF2rh3BuSTJaCKGMDEGujHbedXch0X2ebbdEkkDC6a9cQoWVguS53P0JP5xcHY1W/tppD9KxgrdAw5QxnwPn4nOukrPeqkzBJb0m9oJltLtt3a07QYD1IkMAeS7/hw0BXMhzJwXJc/eV7kuiyIN8OOGuUhLP06JUeoxz4FxiZLRouTsDM9WO2OdBRtsIgrzHtk3kgH00JO+cTipc2S9jqyCaluf2xwcnfuB6LndHuEsSzdP4N/gtzoFzSZHRIsaQQiPmidyXgttsnW0YQYDvsh2ROGBPxkMqXjNA/qlCFsnZ8UdlX+kfk0pymlnMWH2JOBfz0sWI+C3OMS1dzPphhPVWHOPC5wdMzIUOzFFHb1lwB2ARF+ZOPt0gshWBPLe/wCRZlu6CIkSei/cE0fD4g2ZbVWceyxH5WPwGvzXrrSTJaDnG7oBoGS3qaCULggCPsv1W5IAd8tzLllJwvpx1WthMIfyg9OVotHy1WVQ4V37wsfgNfkuSZLQcW8Q4lruU/RVbRykrggDXiwwN3uQWnXTa1xMkz2W/on2lndNajpNtAGePw2/MOicBMlqs+8K7GBNbjrFgGe2iX0nUgiAvs+0S2YpgndaFPVRc3SdmVanZlfGjifOiw5PrT/oGvPpG/vDkEH4jZ70Vt86rl5rYimmdP41/s3Uzc4Isup9XNxwvz+0tyNAlONPrtO6hctR+QnluKqNt52O3pxvtClhvxTH0egtmEwbBMlrUxU21OFGtCHKYbavIATv3j90z26kIea4QZRtahfhIuT0anrjH7O3rpjNVHzPIaLG3Lh8Tj5TbRQihjlNyehxTwTLarbZOiiEIcBfbPnGhMtroChXW9JN/VqeYdyPEY4nwwPj6ZCL8C1T+T61JhDqRv8MxZgwlJG2BxzEsrBmgeEzseqt9ti6SNIIA8t6wm901eFDZ66d7M4UkQ56LVgTTvvtKaRqFqoTWymjxGb6LpUzrImYcuzaOIWKJmAptPWpaB2sd+V+yvSB1wB6s7qXgwiUyBpbJdBqFq6MjU18mKCKhRsTyEbx558/wnRmYJzLiV+DYBat6JQ/MX7B1UCxBAKHy3IQrH6W7MhY9MWkUMNAN948/8Mm35/jMDIKlpC3gmBWQtsAjifkE61b36kGQP7DdL7KrVZXnXiYpjYKZxj09Gh7f4kB4yIa/8ZmU1brIIYiYIXaJ3Nbjflv3xBME+DZbSVwIzfIIK89dJkSea18Ihu+XflD9yPztCJnW5Ri5VRntpNh8giVb5ygvBIHu9yaRrchYRO6fFU0CSTPQlDLte6zshx9O3g3D3yJajySd4EDaAsQMsRPaetxk61zty+YTCXRqjf9jO19cOLnyYV+p8QffpcreMXJ7BeRgh77Ds6SIYhGbMBgB2tld1DW0nGL4VxbZfKBbdUHdhol1dl7mOi0MOjttGgWT11lAwU9r1mMSsX0oxwSxgYyWOvKXtiAvBPkV239I7GqZdVqX9FDw2V5+UoYipn2nt/WRMK3LMQlW9poYCZ7WfcrWsdwSBNggMrRYdcLdhjas0+q28lzJOc8bOU7jWLh2AwzEyLxclYm6Z2ZuBEE+YLtTZEVA9tzPdBh5biJ3q5rGD8yRjXbNAPkcm0RuyjTUqf3NQBDge2yHJFaGeDyi4tUD5J3WIXmzs8Y9NDgG3un80OCYIDZCHxqHbJ2iZiEIGmnB8twgzYIkd7vMxiBON59GLJyBQLKMdiM1qOPXyMn2f2f7X5EDdshzkUbhAtED0oZMXCAGiIXgtAW/YXusURdr9NsoufLcgmP20zKy2ErrNSNGRuunMUAshL7zABq61q/RBPkd2yNSn57+X3ZTQZA8t7H3H5p7RwwEt6KP2DrUtAQBIIUsiwt99Kf+tydFntuocVhVRltNWyBTRlumGslopRNkhO1mkRVlLCT3jHYzqyU48WSN+1ZWRou0BZDRyp3Ju9nWnaYnCHA3216JlQWy0gKy557dJSaNQn0nKNL1VrhnwTLavbbOUKsQBBApzzVpFHqsPFdIGoW6AfeG7cMwrcv3TC0io80LQZ5me07kU3WkYqSlhYvkpFGoz8C8bO7RyGjlpi14ztaVliMIIFOeizQKbpI+WdsDGfLcWvcmsaK53b4gdUW3lENZXjxrgrzNdq/IAftohbzzOql4eV/zjUUcu96K7w33KFhGi7rxVisTBEBSxWPiiqYqz71mGfmDQuS5tSIHstHyPZnd7+XKaI+RgKSxEggySWmKaXkVaSwi5xSbRmGiSdZpxVZGy/eEexMso73R1o2WJwiwk+11kQNZrNO6oo+Cc7vz39Wy07q4l+CKfnNvQu/ndVsnSAkifcCOAXq7R8W1y9JdRvI87QvfnTRtgdPeujLavBLkv9meEPnUHS2Tf1EPFT67lOKRnE77munrsrkH/+IeydPXqAO/VoLMDMhz5T2irTzXpFHoKeRPnluV0XYX0mlduTLamIRJtKUR5CDbbSIrGPfX/eUdVFyTQ3luku6OaNIW/HmH5LQFt9k6oAQ5Ab7PNiyxkmGndUhRvTNyJM9F1wrZaM9IZbQmG63MocewxIejRIKg+DaKbEXGI3KWBtT2hUFKyonUZeEfB3xkX4vsM3wXvIx/IwmMqCu0WH/B9qLIpzG6Wp/rpWBFj/x1WnaCAb4G7LPgad0XbZmTEmTukDnti0yzgZvKcwNPtDzXyGjZR5ONFincVEbbVAR5je0hkU/lkTL5F3TZzQ2EvjysJr1hH/0LuiVPTz9ky1oJsgB8iwQsN5hplISns5Hn9hXl9eurMlr2zUzrVsQuk5m0ZUxKkIXhKNsWkQN2yHNPhzx3WbqQMRZGYCOjXWZ8FDzjtsWWsRJkEfgh2zvyOvhWnovsucu75GTPtdlo4RN8i+W+s3nHli0pQRaPIXEeVeW53V46YJciz2Uf4IvxiX0juW/9h/JQ8fJCkGfZnpE5YK9QsHIJBZcIkOdW141d3Gt8EiyjfcaWqRKk6Z84kOc6duODjmzluUZGyz4g6Q18UhltaxHkXbbtIgfsRyvknQt5bobZc6dltP3Gl0SudmW7LUslSJ1mPUbFeWVUepDnDpB3SgazRtW0BXxt+ABfhE7rypyVbCKCTLF9U2QrgjQKg3b7zskGv3eI0+XsuDZ8EJy2YJMtQyVIHfEztldFDtghz728j4LzGphGoZq2gK9ZMDuwiH3ngTJ7OG+VLY8EAeTKc9ts9lwk42zEOi2st+JrYZIA1xYso12Xx4qWV4K8xPZzka3ISCrPDVY1YJ1WtfVYZWW0ctdbPW7LTAnSQHyDJCoykEYhTNdpuUsK6YDZqQ85cG5cw6y3CsWmLYBXG/NayfJMkI8oVR/KG7AfC8k7u4MKVw2kM1r1eB2RpDNXuAauJVhGe6stKyVIBrid7YA4r6o5N5BG4cxOI3mtaeWtymj53LiG4FwmKJs78lzB8k4QVIsN4ryqynN7AzP1ShXIc2tYg3GuSpJO6/aKltHK3KWmhQgCPMm2R+SAfTSkANlzV9Rw2rc6MDcyWtHZaPfYsiElSPaQOYVYiSnxiIprB8kpeGn+v8U2mZD8FjxzTpybKjqtqwQ5Od5g2yGyq4Xsued3UeHSvsW3IlUZLZ8L5xSctmCHLRMliCBgN/AJcV7F6SpbjBe8gUWkUaimLeBzmOUsU2JltOMkcbd+JQiNkYB8ErNVbPe0Nmq72i4kXMiwNUnfe+AcOJfgfCWbbVkoQQTiR2xvivPKynODNX0ULF9AGoVq2gL+Lc4hWEaL2N/XTBWq2Qgic3BYled2+ekeVfOV51az0WKNF59DsIx2XbNVpmYkyPNsuyWSBBJYf+USKsxHnlvNRsu/8WXLaHfb2CtBcoD1Ir2CPJf/wxSt2xmkupGT9c6QtoCPNdO66FfJldGub8aK1KwEeY9tm8gB+2hI3jmdVLii/+RbBdktfHAsfpPIfSm4zcZcCZIjfJftiMQBO1IQQBrrn3qCRYZ20SOOMTLacbHrrRDjW5q1EjUzQbiTTzeIbEUgz+232XNne59RfX+CbLT9omW0iHFFCZJPPMr2W5EDdshzL1tKwfkzrNOqrrfi73CMYBntKzbGpATJL64X6RXWZRVtxlnP+VgaBZO2wEu/wzGatkAJUk+8zLZLZCuCdVoXciux+rhVuXYVMD7Dd7Hc9Va7bGyVIE0Amf3kaXnuIHm9qTwXhr/xmWAZbUXk+E4JsmAcZtsqcsAOee6Z7VS08lwY/sZngmW0W21MlSBNhLvY9onzCqtIxipUuKqf3L6iMfyNz4RO6+6zsWwJ+NRawNvep8S1IhMxucie+8VT0o+6PIqPiB17rG+lCtNqBPkl2wts14gbsCONwqVLzT8Fr7d6wcawZeBS60Hm1GSSTu+a6d5EY6cEyQ5/YLtf4oCd4iQ1ma3H/TZ2SpAWwLfZSqSYK0o2ZqQEaQ1AN32T1vs54yYbMyVIC+GBVuwyLLBL+kCr3rzb4oV/vdZ/jZESZHb8iqS9F5GFp2yMlCAtjCENgcZGCTI79rPdqWH4FO60sVGCKOh7bIc0DNM4ZGNCShAFEFKOsyDVARttTJQgGoJpPMb2Gw2DicFjGgYlyExYpyHQGChBZsfv2B5p4ft/xMZAoQSZFZso3TKo1VC2965QgpwQI2w3t+B932zvXaEEOSnuZtvbQve7196zQgkyZ6zXe1UoQWbH02zPtcB9PmfvVaEEmTeG9B6VIIrZ8RbbvU18f/fae1QoQRYMJKU81oT3dYwkJj1VguQOk9REaY2Pw4323hRKkEVjJ9vrTXQ/r9t7UihBaobr9V6UIIrZ8Wu2J5rgPp6w96JQgtQcG2jmhGl5QWzvQaEEqQsOst2WY/9vs/egUILUtZIN59Dv4ZyTWwmSEyDnUx7luRtJar4qJUjT4RdsL+bI3xetzwolSMOwTn1Vgihmx2tsD+XAz4esrwolSMPxLZK9XGPS+qhQgmSCo2xbBPu3xfqoUIJkhh+yvSPQr3esbwolSOYYUp+UIIrZ8SzbM4L8ecb6pFCC6BNbWw8lSB7wLtt2AX5st74olCDikPWskfRZNSVIi2OKst2+c5P1QaEEEYuH2V7N4Lqv2msrlCDisa5FrqkEUSwIL7E93sDrPW6vqVCC5AaN0l/kVZ+iBGlxfMR2awOuc6u9lkIJkjvcwXagjuc/YK+hUILkEgnVdxeRDfYaCiVIbvEk2546nHePPbdCCZJ7rMvJORVKkEzwBtuOGp5vhz2nQgnSNMBu6uM1OM84Nedu80qQFscY1SYfx2Z7LoUSpOlwH9ubi/j9m/YcCiWIDth1YK4EaUU8z7Z7Ab/bbX+rUII0PdY36DcKJUgu8R7btnkcv83+RqEEaRncwnZkDscdsccqlCAthQrbDXM47gZ7rEIJ0nJ4lO2VE3z/ij1GoQRpWaxb4HcKJUhL4GW2XTN8vst+p1CCtDw+Oc6Y6/hEoQRpCRxm23rcv7fazxRKEIXFXZRuwBDZvxUC4GsIREHflguDkyQqaVYotIulUChBFAoliEKhBFEolCAKhRJEoVCCKBRKEIVCCaJQKJQgCoUSRKFQgigUShCFIhP8vwADACog5YM65zugAAAAAElFTkSuQmCC"},d32a:function(e,t,n){}});