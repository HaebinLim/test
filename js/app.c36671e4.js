(function(){"use strict";var t={2586:function(t,e,r){var n=r(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticStyle:{position:"fixed",right:"0",top:"50%","z-index":"100"}},[t._v(t._s(t.current))]),e("swiper",{ref:"mySwiper",staticClass:"snbSwiper",attrs:{slidesPerView:"auto",preventClicks:!0,freeMode:!0},on:{slideChange:t.onChange}},t._l(t.array,(function(r){return e("swiper-slide",{key:r.id,class:{on:r.id===t.current}},[e("a",{attrs:{href:`#${r.id}`},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.clickSlide(e)}}},[t._v(t._s(r.txt))])])})),1),t._l(t.items,(function(r){return e("div",{key:r.id,ref:r.id,refInFor:!0,staticClass:"section"},[t._v(t._s(r.txt))])}))],2)},l=[],c=(r(7658),r(2258)),u=(r(2633),{name:"HelloWorld",props:{msg:String},components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},data(){return{current:"strawberry",array:[{id:"grape",txt:"포도"},{id:"blueberry",txt:"블루베리"},{id:"strawberry",txt:"딸기"},{id:"plum",txt:"자두"},{id:"watermelone",txt:"수박"},{id:"pear",txt:"배"},{id:"orange",txt:"오렌지"},{id:"shinemusket",txt:"샤인머스켓"}],items:[],swiper:null,slides:null,timer:null}},created(){for(const t of this.array)this.items.push({id:t.id,txt:t.txt})},watch:{current(t){this.moveSlides(t)}},mounted(){this.swiper=this.$refs.mySwiper.$swiper,this.onChange(this.current),window.addEventListener("scroll",this.onScroll)},methods:{clickSlide(t){this.onChange(t.currentTarget.hash.split("#")[1])},onChange(t){this.current=t,this.scrollY()},onScroll(){const t=window.scrollY+window.innerHeight/2;Object.keys(this.$refs).forEach((e=>{t>=this.$refs[e][0]?.offsetTop&&(this.current=e)}))},scrollY(){window.removeEventListener("scroll",this.onScroll);const t=this.$refs[this.current][0]?.offsetTop-48;window.scroll({top:t,left:0,behavior:"smooth"}),window.addEventListener("scroll",this.addEventScroll())},addEventScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{window.addEventListener("scroll",this.onScroll)}),1e3)},moveSlides(t){const e=document.querySelectorAll(".snbSwiper .swiper-slide");let r;Object.keys(this.$refs).forEach(((n,i)=>{n===t&&(r=e[i-1])}));let n=0;e.forEach((t=>n+=Number(t.offsetWidth)));const i=r.parentNode.offsetWidth,o=r.offsetLeft+r.offsetWidth/2,s=i/2;let l=0;l=n<i||o<=s?0:n-o<=s?n-i:o-s,r.parentNode.parentNode.scroll({top:0,left:l,behavior:"smooth"})}}}),a=u,d=r(1001),f=(0,d.Z)(a,s,l,!1,null,null,null),p=f.exports,h={name:"App",components:{HelloWorld:p},mounted(){},methods:{}},w=h,v=(0,d.Z)(w,i,o,!1,null,null,null),m=v.exports;n["default"].config.productionTip=!1,new n["default"]({render:t=>t(m)}).$mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,o){if(!n){var s=1/0;for(a=0;a<t.length;a++){n=t[a][0],i=t[a][1],o=t[a][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){t.splice(a--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var a=t.length;a>0&&t[a-1][2]>o;a--)t[a]=t[a-1];t[a]=[n,i,o]}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],l=n[1],c=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var a=c(r)}for(e&&e(n);u<s.length;u++)o=s[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(a)},n=self["webpackChunkswiper_test"]=self["webpackChunkswiper_test"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2586)}));n=r.O(n)})();
//# sourceMappingURL=app.c36671e4.js.map