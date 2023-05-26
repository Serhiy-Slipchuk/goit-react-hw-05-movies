"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{722:function(t,n,r){r.d(n,{Z:function(){return u}});var e="Heading_heading__f8N4J",a=r(184),u=function(t){var n=t.text;return(0,a.jsx)("h1",{className:e,children:n})}},2639:function(t,n,r){r.d(n,{Z:function(){return c}});var e="Loader_loader-thumb__JoWOU",a=r(643),u=r(184),c=function(){return(0,u.jsx)("div",{className:e,children:(0,u.jsx)(a.rj,{height:"100",width:"100",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0})})}},4254:function(t,n,r){r.d(n,{Z:function(){return s}});var e=r(1087),a="MovieCard_movie-card__STZx9",u="MovieCard_movie-title__xMPoI",c="MovieCard_no-image__-IyBV",i=r(458),o=r(184),s=function(t){var n=t.id,r=t.posterPath,s=t.title,f=t.location;return(0,o.jsx)("li",{className:a,children:(0,o.jsxs)(e.rU,{to:"/movies/".concat(n),state:{from:f},children:[r?(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r),alt:s}):(0,o.jsx)(i.scC,{className:c}),(0,o.jsx)("h2",{className:u,children:s})]})})}},9155:function(t,n,r){r.d(n,{Z:function(){return u}});var e="MoviesList_movies-list__xnKYG",a=r(184),u=function(t){var n=t.children;return(0,a.jsx)("ul",{className:e,children:n})}},4071:function(t,n,r){r.d(n,{M1:function(){return v},TP:function(){return p},_L:function(){return f},aA:function(){return l},tx:function(){return d}});var e=r(8683),a=r(5861),u=r(7757),c=r.n(u),i=r(1243),o="https://api.themoviedb.org/3",s={api_key:"53cf71a9dc9d51d5f353ddcd73e301a4",language:"en-US"},f=function(){var t=(0,a.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("".concat(o,"/trending/movie/day"),{params:s});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("".concat(o,"/search/movie"),{params:(0,e.Z)({query:n},s)});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("".concat(o,"/movie/").concat(n),{params:(0,e.Z)({movieId:n},s)});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("".concat(o,"/movie/").concat(n,"/reviews"),{params:(0,e.Z)({movieId:n},s)});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("".concat(o,"/movie/").concat(n,"/credits"),{params:(0,e.Z)({movieId:n},s)});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},991:function(t,n,r){r.r(n),r.d(n,{default:function(){return x}});var e=r(9439),a=r(2791),u=r(4071),c=r(722),i="SearchForm_form__o80os",o="SearchForm_input__HOxJo",s="Button_button__wiIYs",f=r(184),l=function(t){var n=t.type,r=t.text;return(0,f.jsx)("button",{className:s,type:n,children:r})},p=function(t){var n=t.handlerOnSubmit,r=(0,a.useState)(""),u=(0,e.Z)(r,2),c=u[0],s=u[1];return(0,f.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),n(c),s("")},children:[(0,f.jsx)("input",{className:o,type:"text",value:c,onChange:function(t){s(t.target.value)},autoComplete:"off"}),(0,f.jsx)(l,{type:"submit",text:"Search"})]})},d=r(9155),v=r(4254),m=r(2639),h=r(1087),_=r(7689),x=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],i=n[1],o=(0,a.useState)(!1),s=(0,e.Z)(o,2),l=s[0],x=s[1],Z=(0,h.lr)(),w=(0,e.Z)(Z,2),b=w[0],g=w[1],j=b.get("query"),y=(0,_.TH)();(0,a.useEffect)((function(t){j&&(x(!0),(0,u.aA)(j).then((function(t){var n=t.data,r=n.results,e=n.total_results;e&&0!==e?i(r):window.alert("There is no any movie by ".concat(j," search query"))})).catch((function(t){return window.alert(t)})).finally((function(){return x(!1)})))}),[j]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{text:"Search movie"}),(0,f.jsx)(p,{handlerOnSubmit:function(t){g(""!==t?{query:t}:{})}}),j&&(0,f.jsx)(d.Z,{children:r.map((function(t){var n=t.poster_path,r=t.original_title,e=t.id;return(0,f.jsx)(v.Z,{id:e,posterPath:n,title:r,location:y},e)}))}),l&&(0,f.jsx)(m.Z,{})]})}}}]);
//# sourceMappingURL=991.866b99c3.chunk.js.map