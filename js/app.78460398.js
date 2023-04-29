(function(){"use strict";var t={820:function(t,e,n){var r=n(489),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{logoName:"21DTHA6_2180602080_Nguyễn Khánh Duy"}}),n("Banner",{attrs:{title:"Nguyễn Khánh Duy"}}),n("AboutMe"),n("WritingSection")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("p",[t._v(t._s(t.logoName))])])},a=[],l={name:"Header",props:{logoName:String},created(){window.addEventListener("scroll",(function(){var t=this.document.querySelector(".header");t.classList.toggle("sticky",this.window.scrollY>0)}))},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},u=l,c=n(457),d=(0,c.Z)(u,s,a,!1,null,"dc8f8b56",null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("h1",[t._v(t._s(t.title))])])},f=[],v={name:"Header",props:{title:String}},g=v,_=(0,c.Z)(g,h,f,!1,null,"0df9d985",null),m=_.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aboutMe"},[r("Grid",{staticClass:"card"},[r("div",{staticClass:"itemLeft"},[r("img",{staticClass:"avatar",attrs:{src:n(937)}})]),r("div",{staticClass:"itemRight"},[r("div",{staticClass:"center"},[r("h2",[t._v("About me")]),r("p",[r("b",[t._v("Class:")]),t._v(" 21DTHA6")]),r("p",[r("b",[t._v("Student ID Number:")]),t._v(" 2180602080")]),r("p",[r("b",[t._v("Full name:")]),t._v(" Nguyễn Khánh Duy")])])])])],1)},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[t._t("default")],2)},k=[],C={name:"Grid"},x=C,N=(0,c.Z)(x,w,k,!1,null,"508ba42a",null),O=N.exports,D={name:"AboutMe",components:{Grid:O}},I=D,T=(0,c.Z)(I,b,y,!1,null,"7ff6907b",null),W=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"writingSection"},[n("h2",[t._v("WRITING")]),n("div",{staticClass:"box"},t._l(t.topics,(function(e){return n("div",{key:e.id,staticClass:"item"},[n("h3",[t._v("Writing "+t._s(e.id)+": "+t._s(e.title))]),n("p",[n("b",[t._v("Description:")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.desc)}})]),n("p",{staticClass:"warning"},[t._v(t._s(e.warning))]),n("a",{attrs:{href:t.getLinkId(e.linkId),target:"_blank"}},[t._v(" Go to document → ")])])})),0)])},A=[],E={name:"WritingSection",data:function(){return{topics:[{id:1,title:"Describe your favorite person",desc:'In <span style="color:#eb1c26">90 - 100 words</span>, you should write about your favorite person:\n<ul><li>Who is this person?</li><li>What is he/she like?</li><li>What do you like about this person?</li><li>What are his/her achievements?</li></ul>',warning:"Your writing has to be in full sentences and in the letter form. Tenses, vocabularies and conjunctions are used appropriately.",linkId:"1hNG_BsfNrltxUjw3w0Qu5-Q59pBlGOJ8ZD_Ct1yhNJU"},{id:2,title:"A green product",desc:'In <span style="color:#eb1c26">100 - 110 words</span>, you should <span style="color:#eb1c26">write a letter</span> to introduce a green product to the local newspaper:\n<ul><li>What are the environmental problems in your area?</li><li>What is the green product?</li><ul><li>material/design/function/price</li></ul><li>How does it help the local environment?</li></ul>',warning:"Your writing has to be in full sentences and in the letter form. Tenses, vocabularies and conjunctions are used appropriately.",linkId:""},{id:3,desc:"Coming soon!",linkId:""}]}},methods:{getLinkId:function(t){return""==t?"#":"https://docs.google.com/document/d/"+t+"/edit?usp=sharing"},getTitle:function(t){return t}}},H=E,S=(0,c.Z)(H,j,A,!1,null,"79759788",null),Z=S.exports,G={name:"App",components:{Header:p,Banner:m,AboutMe:W,WritingSection:Z}},L=G,$=(0,c.Z)(L,i,o,!1,null,null,null),M=$.exports;r.ZP.config.productionTip=!1,new r.ZP({render:function(t){return t(M)}}).$mount("#app")},937:function(t,e,n){t.exports=n.p+"img/avatar.31073049.jpg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/21DTHA6_2180602080_NguyenKhanhDuy/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],l=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(e&&e(r);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunk_21dtha6_2180602080_nguyenkhanhduy"]=self["webpackChunk_21dtha6_2180602080_nguyenkhanhduy"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(820)}));r=n.O(r)})();
//# sourceMappingURL=app.78460398.js.map