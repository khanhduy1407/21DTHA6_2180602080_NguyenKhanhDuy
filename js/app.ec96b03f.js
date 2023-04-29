(function(){"use strict";var t={951:function(t,e,n){var i=n(489),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{logoName:"21DTHA6_2180602080_Nguyễn Khánh Duy"}}),n("Banner",{attrs:{title:"Nguyễn Khánh Duy"}}),n("AboutMe"),n("WrittingSection")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("p",[t._v(t._s(t.logoName))])])},a=[],l={name:"Header",props:{logoName:String},created(){window.addEventListener("scroll",(function(){var t=this.document.querySelector(".header");t.classList.toggle("sticky",this.window.scrollY>0)}))},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},u=l,c=n(457),d=(0,c.Z)(u,s,a,!1,null,"dc8f8b56",null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("h1",[t._v(t._s(t.title))])])},f=[],v={name:"Header",props:{title:String}},g=v,m=(0,c.Z)(g,h,f,!1,null,"0df9d985",null),_=m.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutMe"},[i("Grid",{staticClass:"card"},[i("div",{staticClass:"itemLeft"},[i("img",{staticClass:"avatar",attrs:{src:n(937)}})]),i("div",{staticClass:"itemRight"},[i("div",{staticClass:"center"},[i("h2",[t._v("About me")]),i("p",[i("b",[t._v("Class:")]),t._v(" 21DTHA6")]),i("p",[i("b",[t._v("Student ID Number:")]),t._v(" 2180602080")]),i("p",[i("b",[t._v("Full name:")]),t._v(" Nguyễn Khánh Duy")])])])])],1)},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[t._t("default")],2)},k=[],C={name:"Grid"},x=C,T=(0,c.Z)(x,w,k,!1,null,"508ba42a",null),I=T.exports,O={name:"AboutMe",components:{Grid:I}},W=O,D=(0,c.Z)(W,b,y,!1,null,"7ff6907b",null),j=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"writtingSection"},[n("h2",[t._v("WRITTING")]),n("div",{staticClass:"box"},t._l(t.topics,(function(e){return n("div",{key:e.id,staticClass:"item"},[n("h3",[t._v("Writting "+t._s(e.id)+": "+t._s(e.title))]),n("p",[n("b",[t._v("Description:")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.desc)}})]),n("p",{staticClass:"warning"},[t._v(t._s(e.warning))]),n("a",{attrs:{href:t.getLinkId(e.linkId),target:"_blank"}},[t._v(" Go to document → ")])])})),0)])},E=[],H={name:"WrittingSection",data:function(){return{topics:[{id:1,title:"Describe your favorite person",desc:'In <span style="color:#eb1c26">90 - 100 words</span>, you should write about your favorite person:\n<ul><li>Who is this person?</li><li>What is he/she like?</li><li>What do you like about this person?</li><li>What are his/her achievements?</li></ul>',warning:"Your writing has to be in full sentences and in the letter form. Tenses, vocabularies and conjunctions are used appropriately.",linkId:""},{id:2,title:"A green product",desc:'In <span style="color:#eb1c26">100 - 110 words</span>, you should <span style="color:#eb1c26">write a letter</span> to introduce a green product to the local newspaper:\n<ul><li>What are the environmental problems in your area?</li><li>What is the green product?</li><ul><li>material/design/function/price</li></ul><li>How does it help the local environment?</li></ul>',warning:"Your writing has to be in full sentences and in the letter form. Tenses, vocabularies and conjunctions are used appropriately.",linkId:""},{id:3,desc:"Coming soon!",linkId:""}]}},methods:{getLinkId:function(t){return""==t?"#":"https://docs.google.com/document/d/"+t+"/edit?usp=sharing"},getTitle:function(t){return t}}},N=H,S=(0,c.Z)(N,A,E,!1,null,"177626e8",null),Z=S.exports,L={name:"App",components:{Header:p,Banner:_,AboutMe:j,WrittingSection:Z}},$=L,G=(0,c.Z)($,r,o,!1,null,null,null),M=G.exports;i.ZP.config.productionTip=!1,new i.ZP({render:function(t){return t(M)}}).$mount("#app")},937:function(t,e,n){t.exports=n.p+"img/avatar.31073049.jpg"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/21DTHA6_2180602080_NguyenKhanhDuy/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(e&&e(i);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunk_21dtha6_2180602080_nguyenkhanhduy"]=self["webpackChunk_21dtha6_2180602080_nguyenkhanhduy"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(951)}));i=n.O(i)})();
//# sourceMappingURL=app.ec96b03f.js.map