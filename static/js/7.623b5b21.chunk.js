(this["webpackJsonpmarvel-web-service"]=this["webpackJsonpmarvel-web-service"]||[]).push([[7],{217:function(e,t,c){},231:function(e,t,c){"use strict";c.r(t);var n=c(47),r=c(43),i=c(35),s=c(1),a=c(8),o=c(64),j=c(44),b=(c(217),c(0)),u=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],u=Object(s.useState)(!1),l=Object(i.a)(u,2),m=l[0],O=l[1],d=Object(s.useState)(0),f=Object(i.a)(d,2),h=f[0],x=f[1],v=Object(s.useState)(!1),p=Object(i.a)(v,2),_=p[0],g=p[1],w=Object(j.a)(),y=w.getAllComics,N=w.process,S=w.setProcess;Object(s.useEffect)((function(){k(h,!0)}),[]);var k=function(e,t){O(!t),y(e).then(A).then((function(){return S("confirmed")}))},A=function(e){var t=!1;e.length<8&&(t=!0),n([].concat(Object(r.a)(c),Object(r.a)(e))),O(!1),x(h+8),g(t)};return Object(b.jsxs)("div",{className:"comics__list",children:[Object(o.a)(N,(function(){return function(e){var t=e.map((function(e,t){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(a.b,{to:"/comics/".concat(e.id),children:[Object(b.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:e.title}),Object(b.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(b.jsx)("ul",{className:"comics__grid",children:t})}(c)}),m),Object(b.jsx)("button",{disabled:m,style:{display:_?"none":"block"},className:"button button__main button__long",onClick:function(){return k(h)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},l=c(104);t.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)("meta",{name:"Page with list of our comics",content:"Marvel information portal"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(l.a,{}),Object(b.jsx)(u,{})]})}},43:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(48);var r=c(45);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},64:function(e,t,c){"use strict";var n=c(13),r=c(38),i=c(0);t.a=function(e,t,c){switch(e){case"waiting":return Object(i.jsx)(n.a,{});case"loading":return c?Object(i.jsx)(t,{}):Object(i.jsx)(n.a,{});case"confirmed":return Object(i.jsx)(t,{});case"error":return Object(i.jsx)(r.a,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=7.623b5b21.chunk.js.map