(this["webpackJsonpmarvel-web-service"]=this["webpackJsonpmarvel-web-service"]||[]).push([[6],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},214:function(e,t,c){},226:function(e,t,c){"use strict";c.r(t);var a=c(35),r=c(1),n=c(47),s=c(13),i=c(37),o=c(44),l=(c(105),c.p+"static/media/mjolnir.61f31e18.png"),u=c(0),j=function(e){var t=e.char,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:a}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],h=Object(o.a)(),b=h.loading,d=h.error,m=h.getCharacter,O=h.clearError;Object(r.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var p=function(e){n(e)},f=function(){O();var e=Math.floor(400*Math.random())+1011e3;m(e).then(p)},v=d?Object(u.jsx)(i.a,{}):null,x=b?Object(u.jsx)(s.a,{}):null,_=b||d||!c?null:Object(u.jsx)(j,{char:c});return Object(u.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:f,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(43),d=c(227),m=c(228),O=(c(106),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],l=c[1],j=Object(r.useState)(!1),h=Object(a.a)(j,2),O=h[0],p=h[1],f=Object(r.useState)(0),v=Object(a.a)(f,2),x=v[0],_=v[1],g=Object(r.useState)(!1),N=Object(a.a)(g,2),k=N[0],y=N[1],w=Object(o.a)(),C=w.loading,S=w.error,E=w.getAllCharacters;Object(r.useEffect)((function(){F(x,!0)}),[]);var F=function(e,t){p(!t),E(e).then(T)},T=function(e){var t=!1;e.length<9&&(t=!0),l((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),p(!1),_((function(e){return e+9})),y(t)},I=Object(r.useRef)([]),q=function(e){I.current.forEach((function(e){return e.classList.remove("char__item_selected")})),I.current[e].classList.add("char__item_selected"),I.current[e].focus()};var A=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(u.jsx)(d.a,{timeout:500,classNames:"char__item",children:Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return I.current[c]=e},onClick:function(){e.onCharSelected(t.id),q(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),q(c))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(u.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:Object(u.jsx)(m.a,{component:null,children:c})})}(n),M=S?Object(u.jsx)(i.a,{}):null,B=C&&!O?Object(u.jsx)(s.a,{}):null;return Object(u.jsxs)("div",{className:"char__list",children:[M,B,A,Object(u.jsx)("button",{className:"button button__main button__long",disabled:O,style:{display:k?"none":"block"},onClick:function(){return F(x)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),p=(c(107),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),f=(c(108),function(e){var t=e.char,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:r,alt:c,style:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:a}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t<9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),v=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],l=c[1],j=Object(o.a)(),h=j.loading,b=j.error,d=j.getCharacter,m=j.clearError;Object(r.useEffect)((function(){O()}),[e.charId]);var O=function(){m();var t=e.charId;t&&d(t).then(v)},v=function(e){l(e)},x=n||h||b?null:Object(u.jsx)(p,{}),_=b?Object(u.jsx)(i.a,{}):null,g=h?Object(u.jsx)(s.a,{}):null,N=h||b||!n?null:Object(u.jsx)(f,{char:n});return Object(u.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},x=c(219),_=c(220),g=c(8),N=(c(214),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(o.a)(),l=s.loading,j=s.error,h=s.getCharacterByName,b=s.clearError,d=function(e){n(e)},m=j?Object(u.jsx)("div",{className:"char__search-critical-error",children:Object(u.jsx)(i.a,{})}):null,O=c?c.length>0?Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(u.jsx)(g.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"To page"})})]}):Object(u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(u.jsxs)("div",{className:"char__search-form",children:[Object(u.jsx)(x.d,{initialValues:{charName:""},validationSchema:_.a({charName:_.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),h(t).then(d)},children:Object(u.jsxs)(x.c,{children:[Object(u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsx)(x.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(u.jsx)("button",{type:"submit",className:"button button__main",disabled:l,children:Object(u.jsx)("div",{className:"inner",children:"find"})})]}),Object(u.jsx)(x.a,{component:"div",className:"char__search-error",name:"charName"})]})}),O,m]})}),k=c(33),y=c(34),w=c(40),C=c(41),S=function(e){Object(w.a)(c,e);var t=Object(C.a)(c);function c(){var e;Object(k.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(y.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(i.a,{}):this.props.children}}]),c}(r.Component),E=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(n.a,{children:[Object(u.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(u.jsx)("title",{children:"Marvel information portal"})]}),Object(u.jsx)(S,{children:Object(u.jsx)(h,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(S,{children:Object(u.jsx)(O,{onCharSelected:function(e){s(e)}})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{children:Object(u.jsx)(v,{charId:c})}),Object(u.jsx)(S,{children:Object(u.jsx)(N,{})})]})]}),Object(u.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})}},37:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}},44:function(e,t,c){"use strict";var a=c(49),r=c.n(a),n=c(50),s=c(35),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=53d38175c749705ccf900c3bc79006e2",j=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters?name=").concat(t,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",p(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:a,clearError:o,getAllCharacters:j,getCharacterByName:h,getCharacter:b,getAllComics:d,getComic:m}}}}]);
//# sourceMappingURL=6.6c955de3.chunk.js.map