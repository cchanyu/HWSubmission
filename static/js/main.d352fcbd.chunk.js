(this["webpackJsonpgiphy-search"]=this["webpackJsonpgiphy-search"]||[]).push([[0],{57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(31),s=a.n(c),i=a(22),r=a(23),o=a(36),l=a(16),u={text:"",isSignedIn:!1},j=Object(o.a)({text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return"SET_TEXT"===t.type?Object(l.a)(Object(l.a)({},e),{},{text:t.payload}):e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIGN_IN_STATUS":return Object(l.a)(Object(l.a)({},e),{},{isSignedIn:t.payload});case"SIGN_OUT":return Object(l.a)(Object(l.a)({},e),{},{isSignedIn:!1});default:return e}}}),b=Object(o.b)(j),d=a(11),h=a(12),m="https://cchanyu.github.io/HWSubmission/",p=(a(57),a(8)),O=function(e){var t=e.random;return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("div",{className:"homebox",children:[Object(p.jsx)("div",{className:"home--quote",children:t.quote}),Object(p.jsxs)("div",{className:"home--cred",children:[t.anime," - ",t.character]})]})})},v=(a(59),Object(r.b)((function(e){return e.text}))((function(e){var t=e.url,a=e.text,c=Object(n.useState)(Object(l.a)({},localStorage)),s=Object(d.a)(c,2),i=s[0],r=s[1],o=t.map((function(e){return Object(p.jsxs)("div",{className:"gifbox",children:[Object(p.jsx)("img",{className:"gif",src:e.images.original.url,onClick:function(){return t=e.images.original.url,void window.open(t);var t},alt:e.id},e.id),Object(p.jsxs)("div",{className:"gif--cred",children:[Object(p.jsxs)("div",{className:"gif--id",children:["ID: ",e.id]}),Object.keys(i).find((function(t){return t===e.id}))?Object(p.jsx)("button",{className:"saveit icon savedit",onClick:function(){return t=e.id,localStorage.removeItem(t),void r(Object(l.a)({},localStorage));var t},children:"Saved"}):Object(p.jsx)("button",{className:"saveit icon",onClick:function(){return t=e.id,localStorage.setItem(t,t),void r(Object(l.a)({},localStorage));var t},children:"Save \u2b50"})]})]})}));return Object(p.jsxs)("div",{className:"giphy",children:[Object(p.jsxs)("div",{className:"searched",children:["Search Result for: ",a]}),a.length<=0?Object(p.jsx)("div",{className:"beforesearch",children:"Start searching GIF by typing below"}):t.length<=0?Object(p.jsx)("div",{className:"beforesearch",children:"No Searched Result"}):Object(p.jsx)("div",{className:"images",children:o})]})}))),f=(a(60),function(){var e=Object(n.useState)(Object(l.a)({},localStorage)),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(Object.keys(Object(l.a)({},localStorage)).length),i=Object(d.a)(s,2),r=i[0],o=i[1],u=Object.keys(a).map((function(e,t){var a="https://media3.giphy.com/media/".concat(e,"/giphy.gif");return Object(p.jsxs)("div",{className:"saved--box",children:[Object(p.jsx)("img",{className:"saved--card",src:a,alt:e,onClick:function(){return e=a,void window.open(e);var e}},e),Object(p.jsxs)("div",{className:"gif--cred",children:[Object(p.jsxs)("div",{className:"gif--id",children:["ID: ",e]}),Object(p.jsx)("button",{className:"saveit icon del",onClick:function(){return t=e,localStorage.removeItem(t),c(Object(l.a)({},localStorage)),void o(Object.keys(Object(l.a)({},localStorage)).length);var t},children:"Delete"})]})]},t)}));return Object(p.jsxs)("div",{className:"saved",children:[Object(p.jsxs)("div",{className:"searched",children:["Saved GIFs: ",r]}),Object(p.jsx)("div",{className:"saved--list",children:Object.keys(a).length<=0?Object(p.jsx)("div",{className:"beforesearch",children:"No Saved GIF found"}):u})]})}),g=a(0),x=a.n(g),S=a(1),N=a(44),y=a(45),k=a(26),w=Object(N.a)({apiKey:"AIzaSyA3lsHu2D92yOvSdqZIXJgJNjoUT0VzY6E",authDomain:"dev-1-263119.firebaseapp.com",databaseURL:"https://dev-1-263119.firebaseio.com",projectId:"dev-1-263119",storageBucket:"dev-1-263119.appspot.com",messagingSenderId:"419198628817",appId:"1:419198628817:web:40a35523550576fe4de6f0"}),I=(Object(y.a)(w),Object(k.c)(w)),E=(new k.a,function(){var e=Object(S.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(k.c)(),e.abrupt("return",Object(k.b)(n,t,a));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),T=function(){var e=Object(S.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(k.c)(),e.abrupt("return",Object(k.d)(n,t,a));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=(a(62),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),l=o[0],u=o[1],j=Object(n.useState)(""),b=Object(d.a)(j,2),m=b[0],O=b[1],v=Object(h.f)(),f=Object(r.c)(),g=function(){var e=Object(S.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a&&l){e.next=4;break}return O("Please fill in all fields."),e.abrupt("return");case 4:if(N(a)){e.next=7;break}return O("Please enter a valid email address."),e.abrupt("return");case 7:return e.prev=7,e.next=10,T(a,l);case 10:console.log("Sign in successful!"),localStorage.setItem("email",a),f({type:"SET_SIGN_IN_STATUS",payload:!0}),c(""),u(""),v("/HWSubmission/home"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),console.error("Error signing in:",e.t0),O("Error signing in. Please try again.");case 22:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)};return Object(p.jsx)("div",{className:"login",children:Object(p.jsxs)("div",{className:"login-container",children:[Object(p.jsx)("div",{className:"login--title",children:"Login"}),m&&Object(p.jsx)("div",{className:"error-message",children:m}),Object(p.jsxs)("form",{id:"login--form",children:[Object(p.jsxs)("div",{className:"form--group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form--control input",value:a,onChange:function(e){c(e.target.value)},placeholder:"Email Address"})]}),Object(p.jsxs)("div",{className:"form--group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form--control input",value:l,onChange:function(e){u(e.target.value)},placeholder:"Password"})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-success signin",onClick:g,children:"Sign in"})]}),Object(p.jsxs)("span",{style:{marginTop:"30px",display:"block"},children:["Need an account? ",Object(p.jsx)(i.b,{to:"/HWSubmission/signup",className:"signup-btn",children:"Sign Up"})]})]})})}),H=function(e){return{type:"SET_SIGN_IN_STATUS",payload:e}},W=a.p+"static/media/search-solid.cc51b702.svg",_=(a(63),Object(r.b)((function(e){return{text:e.text,signedIn:e.auth}}))((function(e){var t=e.searchup,a=Object(r.c)(),c=Object(r.d)((function(e){return e.auth.isSignedIn})),s=Object(n.useState)(),o=Object(d.a)(s,2),l=o[0],u=o[1];Object(n.useEffect)((function(){var e=function(){var e=Object(S.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/api/signin-status"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,u(localStorage.getItem("email")),a(H(n.isSignedIn)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Failed to fetch sign-in status:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("div",{className:"footer--under"}),Object(p.jsxs)("div",{className:"footer--inside",children:[Object(p.jsxs)("div",{className:"footer-user",children:["Hello, ",c?l:"Guest",c&&Object(p.jsx)("button",{className:"footer-signout",onClick:function(){I.signOut().then((function(){console.log("Sign out successful!"),a({type:"SIGN_OUT"})})).catch((function(e){console.log("Error signing out:",e)}))},children:"Sign out"})]}),Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)(i.b,{className:"nav--home navli",activeClassName:"active",exact:"true",to:"/HWSubmission/home",children:"Home"}),Object(p.jsx)(i.b,{className:"nav--giphy navli",activeClassName:"active",to:"/HWSubmission/giphy",children:"Giphy"}),Object(p.jsx)(i.b,{className:"nav--saved navli",activeClassName:"active",to:"/HWSubmission/saved",children:"Saved"}),Object(p.jsx)(i.b,{className:"nav--login navli",activeClassName:"active",to:"/HWSubmission/login",children:"Login"})]}),Object(p.jsxs)("div",{className:"searchbox",children:[Object(p.jsx)("input",{id:"textarea",className:"search input",type:"text",onChange:function(e){a({type:"SET_TEXT",payload:e.target.value})},placeholder:"Keyword",onKeyDown:function(e){"Enter"===e.key&&t(e)}}),Object(p.jsx)("img",{className:"search--icon icon",onClick:t,src:W,alt:"search"})]})]})]})}))),U=(a(64),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),o=r[0],l=r[1],u=Object(n.useState)(""),j=Object(d.a)(u,2),b=j[0],m=j[1],O=Object(h.f)(),v=function(){var e=Object(S.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a&&o){e.next=4;break}return m("Please fill in all fields."),e.abrupt("return");case 4:if(f(a)){e.next=7;break}return m("Please enter a valid email address."),e.abrupt("return");case 7:return e.prev=7,e.next=10,E(a,o);case 10:console.log("Sign up successful!"),c(""),l(""),O("/HWSubmission/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),console.error("Error signing up:",e.t0),m("Error signing up. Please try again.");case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)};return Object(p.jsx)("div",{className:"signup",children:Object(p.jsxs)("div",{className:"signup-container",children:[Object(p.jsx)("div",{className:"login--title",children:"Sign Up"}),b&&Object(p.jsx)("div",{className:"error-message",children:b}),Object(p.jsxs)("form",{id:"login--form",children:[Object(p.jsxs)("div",{className:"form--group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form--control input",value:a,onChange:function(e){c(e.target.value)},placeholder:"Enter your email address"})]}),Object(p.jsxs)("div",{className:"form--group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form--control input",value:o,onChange:function(e){l(e.target.value)},placeholder:"Enter your password"})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-success signin",onClick:v,children:"Sign Up"})]}),Object(p.jsxs)("span",{style:{marginTop:"30px",display:"block"},children:["Already have an account? ",Object(p.jsx)(i.b,{to:"/HWSubmission/login",className:"signup-btn",children:"Sign in"})]})]})})}),G=a(46),D=a.n(G),P=(a(67),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)([]),j=Object(d.a)(u,2),b=j[0],g=j[1],x=Object(r.d)((function(e){return e.text}));Object(n.useEffect)((function(){fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()})).then((function(e){return c(e)})),fetch("".concat(m,"/api/quote")).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(D.a,{className:"snowfall"}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{exact:!0,path:"HWSubmission/",element:Object(p.jsx)(O,{random:a})}),Object(p.jsx)(h.a,{path:"HWSubmission/home",element:Object(p.jsx)(O,{random:a})}),Object(p.jsx)(h.a,{path:"HWSubmission/giphy",element:Object(p.jsx)(v,{url:b})}),Object(p.jsx)(h.a,{path:"HWSubmission/saved",element:Object(p.jsx)(f,{saved:o})}),Object(p.jsx)(h.a,{path:"HWSubmission/login",element:Object(p.jsx)(C,{})}),Object(p.jsx)(h.a,{path:"HWSubmission/signup",element:Object(p.jsx)(U,{})})]}),Object(p.jsx)(_,{searchup:function(e){if(e.preventDefault(),"string"===typeof x.text){var t=x.text.toUpperCase();fetch("https://api.giphy.com/v1/gifs/search?q=".concat(t,"&api_key=").concat("8Qa9guwiNt9gXfY6adO2e6a9p3u1eW7U")).then((function(e){return e.json()})).then((function(e){return g(e.data)}))}else console.log("Invalid input")}}),Object(p.jsx)("div",{className:"village"}),Object(p.jsx)("div",{className:"invisNav"})]})});a(68);s.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(r.a,{store:b,children:Object(p.jsx)(P,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.d352fcbd.chunk.js.map