(function(){"use strict";var t={706:function(t,n,e){var i=e(489),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{logoName:"21DTHA6_2180602080_Nguyễn Khánh Duy"}}),e("Banner",{attrs:{title:"Nguyễn Khánh Duy"}}),e("AboutMe"),e("WrittingSection")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[e("p",[t._v(t._s(t.logoName))])])},s=[],u={name:"Header",props:{logoName:String},created(){window.addEventListener("scroll",(function(){var t=this.document.querySelector(".header");t.classList.toggle("sticky",this.window.scrollY>0)}))},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},c=u,l=e(457),d=(0,l.Z)(c,a,s,!1,null,"dc8f8b56",null),f=d.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("h1",[t._v(t._s(t.title))])])},p=[],h={name:"Header",props:{title:String}},_=h,g=(0,l.Z)(_,v,p,!1,null,"0df9d985",null),m=g.exports,b=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"aboutMe"},[i("Grid",{staticClass:"card"},[i("div",{staticClass:"itemLeft"},[i("img",{staticClass:"avatar",attrs:{src:e(937)}})]),i("div",{staticClass:"itemRight"},[i("div",{staticClass:"center"},[i("h2",[t._v("About me")]),i("p",[i("b",[t._v("Lớp:")]),t._v(" 21DTHA6")]),i("p",[i("b",[t._v("MSSV:")]),t._v(" 2180602080")]),i("p",[i("b",[t._v("Họ tên:")]),t._v(" Nguyễn Khánh Duy")])])])])],1)},y=[],C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid"},[t._t("default")],2)},k=[],w={name:"Grid"},x=w,O=(0,l.Z)(x,C,k,!1,null,"508ba42a",null),S=O.exports,E={name:"AboutMe",components:{Grid:S}},T=E,A=(0,l.Z)(T,b,y,!1,null,"893cd75a",null),H=A.exports,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"writtingSection"},[e("h2",[t._v("WRITTING")]),e("div",{staticClass:"box"},t._l(t.topics,(function(n){return e("div",{key:n.id,staticClass:"item"},[e("h3",[t._v("Writting "+t._s(n.id))]),e("p",[e("b",[t._v("Topic:")]),t._v(" "+t._s(n.title))]),e("a",{attrs:{href:t.getLink(n.linkId),target:"_blank"}},[t._v(" Go to document → ")])])})),0)])},Z=[],j={name:"WrittingSection",data:function(){return{topics:[{id:1,title:"Comming soon!",linkId:""},{id:2,title:"Comming soon!",linkId:""},{id:3,title:"Comming soon!",linkId:""}]}},methods:{getLink:function(t){return""==t?"#":"https://docs.google.com/document/d/"+t+"/edit?usp=sharing"}}},D=j,L=(0,l.Z)(D,N,Z,!1,null,"8fe5f114",null),$=L.exports,I={name:"App",components:{Header:f,Banner:m,AboutMe:H,WrittingSection:$}},G=I,M=(0,l.Z)(G,r,o,!1,null,null,null),W=M.exports;i.ZP.config.productionTip=!1,new i.ZP({render:function(t){return t(W)}}).$mount("#app")},937:function(t,n,e){t.exports=e.p+"img/avatar.31073049.jpg"}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,o){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[u])}))?i.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/21DTHA6_2180602080_NguyenKhanhDuy/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,o,a=i[0],s=i[1],u=i[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(u)var l=u(e)}for(n&&n(i);c<a.length;c++)o=a[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},i=self["webpackChunk_21dtha6_2180602080_nguyenkhanhduy"]=self["webpackChunk_21dtha6_2180602080_nguyenkhanhduy"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(706)}));i=e.O(i)})();
//# sourceMappingURL=app.8ec3ac55.js.map