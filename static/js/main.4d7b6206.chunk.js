(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{166:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},218:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(28),i=n.n(a),r=(n(202),n(203),n(50)),l=n(27),o=n(19),A=n(302),j=(n(166),n(292)),d=n(36);function b(e){var t=Object(s.useState)(0),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useCallback)((function(){var t=e.current?e.current.getBoundingClientRect().top:null,n=e.current?e.current.getBoundingClientRect().bottom:null;t&&n&&(t>=0&&t<=window.innerHeight||n>=0&&n<=window.innerHeight)?a(t):a(-1)}),[e]);return Object(s.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[i]),c}var u=n(305),m=n.p+"static/media/c.09c93a34.jpg",x=n.p+"static/media/web.86bc3bbc.png",g=n(46),O=n(191),h=n(299),p=Object(s.createContext)({loginUser:"",setLoginUser:""}),f=c.a.createContext(null),w=c.a.createContext(!1),v=n(5);function I(){var e=Object(d.useSpring)((function(){return{opacity:0,textShadow:"0px 0px 0px white",zoom:1,paddingTop:"30px"}})),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useContext)(p).loginUser,i=Object(d.useSpring)((function(){return{opacity:0,paddingTop:"10vh",color:"white",paddingBottom:"10vh",zoom:1}})),l=Object(o.a)(i,2),A=l[0],j=l[1],f=Object(d.useSpring)((function(){return{opacity:1}})),w=Object(o.a)(f,2),I=w[0],y=w[1],C=Object(s.useRef)(null),F=b(C);return Object(s.useEffect)((function(){-1!==F?(c.start({opacity:1,textShadow:"5px 10px 5px gray",paddingTop:"0px",config:{duration:600},delay:500}),j.start({opacity:1,config:d.config.slow,delay:600}),y.start({opacity:1})):(c.start({opacity:0,config:d.config.slow}),j.start({opacity:0,config:d.config.slow}),y.start({opacity:.6,config:{duration:800},delay:500}))})),Object(v.jsxs)("div",{style:{width:"100vw",height:"100vh"},children:[Object(v.jsx)(d.animated.div,{className:"img1",style:I}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"left-info",children:Object(v.jsxs)(d.animated.div,{style:n,className:"title",onMouseOver:function(){c({zoom:1})},onMouseLeave:function(){c({zoom:1})},children:["\u6b22\u8fce\u6765\u5230",Object(v.jsx)("span",{style:{color:"skyblue"},ref:C,children:"\u7a0b\u5e8f\u5458\u4e4b\u5bb6"}),Object(v.jsxs)("div",{style:{fontSize:"1.7rem",textAlign:"left",marginTop:"3vh",textShadow:"5px 5px 5px gray",fontWeight:"normal"},children:[""===a&&Object(v.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(v.jsxs)("div",{children:["\u7a0b\u5e8f\u5458\u5927\u821e\u53f0,\u6709",Object(v.jsx)("span",{style:{color:"aqua"},children:'"\u624b"'}),"\u4f60\u5c31\u6765!"]}),Object(v.jsxs)("div",{children:["\u4f60\u77e5\u9053\u5417?\u7a0b\u5e8f\u5458\u4e4b\u5bb6\u7684",Object(v.jsx)("span",{style:{color:"aqua"},children:"\u5956\u72b6"}),"\u53ef\u4ee5\u7533\u8bf7",Object(v.jsx)("span",{style:{color:"aqua"},children:"\u521b\u65b0\u5b66\u5206\u548c\u5b66\u65f6"})]}),Object(v.jsxs)("div",{children:["\u7a0b\u5e8f\u5458\u4e4b\u5bb6\u662f\u6821\u5185\u5c11\u6709\u7684",Object(v.jsx)("span",{style:{color:"aqua"},children:"\u4e94\u661f\u7ea7"}),"\u793e\u56e2"]})]}),""!==a&&Object(v.jsxs)("div",{style:{marginBottom:"20px"},children:["\u5466\u5466\u5466,\u8fd9\u4e0d",a,"\u5417,\u53c8\u6765\u53c2\u52a0\u6bd4\u8d5b\u4e86?\u4f60\u53c2\u52a0\u6bd4\u8d5b\u7684\u6837\u5b50\u771f\u7684\u597d\u9753\u4ed4\u54e6 \u60f3\u4e0d\u51fa\u6765\u7684\u9a9a\u8bdd...\u60f3\u4e0d\u51fa\u6765\u7684\u9a9a\u8bdd..."]}),Object(v.jsx)(g.a,{size:"large",style:{marginRight:"2vw"},shape:"round",children:"\u4e86\u89e3\u8be6\u60c5"}),Object(v.jsxs)(g.a,{type:"primary",size:"large",shape:"round",children:[""!==a&&Object(v.jsx)(r.b,{to:"/competition",children:"\u62a5\u540d\u6bd4\u8d5b"}),""===a&&Object(v.jsx)("div",{onClick:function(){O.b.warning("\u8bf7\u5148\u767b\u5f55")},children:"\u62a5\u540d\u6bd4\u8d5b"})]})]})]})}),Object(v.jsx)(d.animated.div,{className:"right-info",style:n,children:Object(v.jsxs)(h.a,{autoplay:!0,children:[Object(v.jsx)("img",{src:m,alt:"c",className:"images"}),Object(v.jsx)("img",{src:x,alt:"web",className:"images"}),Object(v.jsx)("img",{src:"data:image/png;base64,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ARZgARZgwAIswAIswAIswIAFWIAFWIAFWIAF+Aa11E8/3nKXaYIFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswApd1r3odSN6lruXCRZgAQYswAIswAIswAIMWIAFWIAFWIAFWIABC7AAC7AAC7AAAxZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIDvVyv2ebZnOx855/ns9SZYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABBizAAqx4VduLPrvhXHgj2gT7ihZgARZgARZgAQYswAIswAIswAIMWIAFWIAFWIAFWIBvk/Oiz11vggVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmDAAizAilfN86L3P7/qehMswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7AAAxZgAVa8WvlPuD8FuuS50CbYV7QAC7AAC7AAC7AAAxZgARZgARZgAQYswAIswAIswAJ84+rvRa/7z2P3GxMswAIswAIswAIMWIAFWIAFWIAFGLBXAFiABViABViABRiwqtRu8jmnCRZgARZgARZgARZgwAIswAIswAIswIAFWIAFWIAFWIABq2yV96LHgWumCRZgARZgARZgAQYswAIswAIswAIMWIAFWIAFWIAFWIABK30196LXjeh5+MrH4etNsAALsAALsAADFmABFmABFmABBizAAizAAizAAgxYgAVY8aq5Fz3/dOU4+X9NsAALsAALMGABFmABFmABFmABBizAAizAAizAAgxYgAVYMWpewXfOixZgARZgARZgAQYswAIswAIswAIMWIAFWIAFWIAFGLAAK2dZ96LXHebxxnuZYAEWYAEWYAEGLMACLMACLMACDFiABViABViABRiwVwBYgBW13OdFT4AmGLAAC7AAC7AAC7AAAxZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7AAAxZgARZgARZgARZgwAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7AACzBgARZgARZgARZgwAIswAIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7D+VUv63GPz83zR3/mtaYIFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswApd1r3oGezvmGABFmABFmDAAizAAizAAizAgAVYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmDAAizAAizAAizAAgxYgAVYgAVYgAUYsAALsAALsAALMGCvALAAC7AAC7AACzBgARZgARZgARZgwAIswAIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7AACzBgAVbOlp7nWZ9hnqSbYAEWYAEWYMACLMACLMACLMACDFiABViABViABRiwAAuwAtXSPfG89O7DBAuwAAuwAAswYAEWYAEWYAEWYMACLMACLMACLMCABViABViABViABRiwAAuwAAuwAAswYAEWYAEWYAEWYMACLMACLMACLMACDFiABViABViABRiwAAuwAAuwAAuwAAMWYAEWYAEWYP2opXviAc0ECzBgARZgARZgARZgwAIswAIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAIswAIMWKVaundgggVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAizAgAVYgAVYgAVYgAELsAALsAALsAALMGABFmABFmABFmDAAizAAizAAizAgAVYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAizAAizAAgxYgAVYgAVYgAUYsAALsAALsAALsAADFmABFmABFmABBizAAizAAizAAgxYgAVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAuqZP/3kyN1tb/zMAAAAASUVORK5CYII=",alt:"web",className:"images"})]})})]}),Object(v.jsx)(d.animated.button,{className:"continue-button",style:A,onClick:function(){window.scrollTo({top:800,behavior:"smooth"})},onMouseOver:function(){j({color:"#1890ff",zoom:1})},onMouseLeave:function(){j({color:"white",zoom:1})},children:Object(v.jsx)(u.a,{})})]})}var y=n(298),C=n(306),F=n(307),B=n(308),L=n(309);n(218);function Y(){var e=[{title:"QQ\u4ea4\u6d41\u7fa4",text:12345678},{title:"\u62a5\u540d\u6bd4\u8d5b",text:"\u62a5\u540d\u6bd4\u8d5b\u5165\u53e3"},{title:"\u4e86\u89e3\u7a0b\u5e8f\u5458\u4e4b\u5bb6",text:"\u7a0b\u5e8f\u5458\u4e4b\u5bb6\u4ec0\u4e48\u793e\u56e2"},{title:"\u52a0\u5165\u7a0b\u5e8f\u5458\u4e4b\u5bb6",text:"\u4e00\u8d77\u6765\u4e3a\u793e\u56e2\u51fa\u5206\u529b"}],t=Object(d.useSprings)(e.length,(function(){return{marginTop:"30px",boxShadow:"0px 0px 0px 0px gray",backgroundColor:"#cecece",opacity:0}})),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(null),r=b(i);return Object(s.useEffect)((function(){-1!==r?a.start({opacity:1,config:{duration:1e3}}):a.start({opacity:0})}),[r,a]),Object(v.jsx)("div",{className:"option-menu",children:Object(v.jsx)("div",{className:"grid-display",ref:i,children:c.map((function(t,n){return Object(v.jsx)("div",{onMouseOver:function(){a.start((function(e){return{marginTop:e===n?"0px":"30px",boxShadow:e===n?"0px 0px 3px 3px #1890ff":"0px 0px 0px 0px white",config:d.config.wobbly}}))},onMouseLeave:function(){a.start({marginTop:"30px",boxShadow:"0px 0px 0px 0px gray"})},children:Object(v.jsxs)(d.animated.div,{className:"card-layout",style:t,children:["QQ\u4ea4\u6d41\u7fa4"===e[n].title&&Object(v.jsx)(C.a,{style:{fontSize:"5rem"}}),"\u62a5\u540d\u6bd4\u8d5b"===e[n].title&&Object(v.jsx)(F.a,{style:{fontSize:"5rem"}}),"\u4e86\u89e3\u7a0b\u5e8f\u5458\u4e4b\u5bb6"===e[n].title&&Object(v.jsx)(B.a,{style:{fontSize:"5rem"}}),"\u52a0\u5165\u7a0b\u5e8f\u5458\u4e4b\u5bb6"===e[n].title&&Object(v.jsx)(L.a,{style:{fontSize:"5rem"}}),Object(v.jsxs)(y.a,{children:[Object(v.jsx)(y.a.Paragraph,{className:"intro-title",children:e[n].title}),Object(v.jsx)(y.a.Text,{className:"intro-text",copyable:!n,children:e[n].text}),Object(v.jsx)(g.a,{className:"detail-button",type:"primary",children:"\u70b9\u51fb\u4e86\u89e3\u8be6\u60c5"})]})]},n)},n)}))})})}n(220);var S=n(303),W=n(26),k=n.n(W),z=n(40),R="ws://localhost:9001",V=function(){var e=Object(z.a)(k.a.mark((function e(t,n){var s,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://tohsaka888.xyz:9000").concat(t),{method:"POST",mode:"cors",body:JSON.stringify(n)});case 3:return s=e.sent,e.next=6,s.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();function N(){var e=Object(d.useSpring)((function(){return{opacity:0}})),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useRef)(null),i=Object(s.useRef)(null),r=b(a),l=b(i),A=Object(s.useState)([]),j=Object(o.a)(A,2),u=j[0],m=j[1],x=Object(d.useTrail)(u.length,(function(){return{transform:"translate3d(100%,0,0)"}})),g=Object(o.a)(x,2),O=g[0],h=g[1],p=Object(s.useCallback)((function(e,t,n,s){-1!==e?t.start(n):t.start(s)}),[]),f=Object(s.useCallback)((function(){V("/competitionList",{}).then((function(e){e&&e.competitionList&&0!==e.competitionList.length?(console.log(e.competitionList),m(e.competitionList)):m([])}))}),[]);return Object(s.useEffect)((function(){f()}),[f]),Object(s.useEffect)((function(){p(r,c,{opacity:1,delay:500},{opacity:0}),p(l,h,{transform:"translate3d(0,0,0)",delay:600},{transform:"translate3d(100%,0,0)"})}),[p,f,r,c,h,l]),Object(v.jsxs)("div",{children:[Object(v.jsx)(d.animated.div,{className:"recent-title",style:n,ref:a,children:"\u8fd1\u671f\u6d3b\u52a8"}),Object(v.jsx)("div",{ref:i,children:0!==u.length&&O.map((function(e,t){return Object(v.jsx)(d.animated.div,{style:e,children:Object(v.jsxs)("div",{className:"cards",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:u[t].imgUrl,alt:"web",className:"image"})}),Object(v.jsx)("div",{children:Object(v.jsxs)(y.a,{style:{textAlign:"left"},children:[Object(v.jsx)(y.a.Title,{level:2,children:u[t].title}),Object(v.jsx)("div",{style:{textAlign:"left",marginBottom:"2vh"},children:u[t].tag.map((function(e,t){return Object(v.jsx)(S.a,{color:"green",children:e},t)}))}),Object(v.jsx)(y.a.Paragraph,{ellipsis:{rows:3},children:u[t].intro})]})})]})},t)}))})]})}function E(){return Object(v.jsxs)(j.a.Content,{children:[Object(v.jsx)(I,{}),Object(v.jsx)(Y,{}),Object(v.jsx)(N,{})]})}var M=n(304),Z=n(86),T=n(300),q=n(297),P=n(301),Q=(n(221),n.p+"static/media/logo.dc0f5be5.png");function U(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(v.jsx)(T.a,{title:"\u516c\u544a",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",visible:n,onOk:function(){c(!1)},onCancel:function(){c(!1)},children:Object(v.jsxs)("div",{style:{fontSize:"1rem"},children:["\u65b0\u7528\u6237\u6ce8\u518c,\u7528\u6237\u540d\u8bf7\u586b\u5199",Object(v.jsx)("span",{style:{color:"red",fontWeight:"bold"},children:"\u771f\u5b9e\u59d3\u540d"})]})})}function D(){var e=j.a.Header,t=Object(l.f)(),n=Object(s.useState)(!1),c=Object(o.a)(n,2),a=c[0],i=c[1],r=Object(s.useState)(!1),A=Object(o.a)(r,2),d=A[0],b=A[1],u=Object(s.useState)(""),m=Object(o.a)(u,2),x=m[0],g=m[1],h=Object(s.useState)(""),f=Object(o.a)(h,2),w=f[0],I=f[1],C=Object(s.useState)(""),F=Object(o.a)(C,2),B=F[0],L=F[1],Y=Object(s.useState)(""),S=Object(o.a)(Y,2),W=S[0],N=S[1],E=Object(s.useState)(""),D=Object(o.a)(E,2),H=D[0],X=D[1],G=Object(s.useState)(""),K=Object(o.a)(G,2),J=K[0],_=K[1],$=Object(s.useState)(""),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],se=Object(s.useState)(""),ce=Object(o.a)(se,2),ae=ce[0],ie=ce[1],re=Object(s.useState)(""),le=Object(o.a)(re,2),oe=le[0],Ae=le[1],je=Object(s.useState)(!1),de=Object(o.a)(je,2),be=de[0],ue=de[1],me=Object(s.useContext)(p),xe=me.loginUser,ge=me.setLoginUser;function Oe(e){return!(!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)||11!==e.length)}var he=Object(s.useCallback)(Object(z.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,V("/login/status",{token:t});case 4:(n=e.sent)&&void 0!==n.username?ge(n.username):ge(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O.b.error(e.t0.name+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[ge]);Object(s.useEffect)((function(){he(),function(e){var t=new WebSocket(R);console.log(e),t.onopen=function(n){t.send(e)},t.onmessage=function(e){console.log(e.data)}}("hello"),function(){var e=new WebSocket(R);e.onopen=function(t){e.onmessage=function(e){console.log(e)}}}()}),[he]);var pe=Object(s.useCallback)((function(){return W.length>=6&&W===H}),[H,W]),fe=function(){var e=Object(z.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==x||""!==w){e.next=4;break}O.b.warning("\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0d\u5f97\u4e3a\u7a7a"),e.next=10;break;case 4:return O.b.loading({content:"\u767b\u5f55\u4e2d\xb7\xb7\xb7",key:"login"}),e.next=7,V("/login",{username:x,password:w});case 7:t=e.sent;try{void 0===t.code?O.b.error("\u670d\u52a1\u7aef\u54cd\u5e94\u9519\u8bef"):(b(!1),"\u767b\u5f55\u6210\u529f"===t.message?(O.b.success({content:t.message,key:"login"}),localStorage.setItem("token",t.token)):O.b.error(t.errmsg))}catch(n){console.log(n),O.b.error({content:"\u670d\u52a1\u7aef\u54cd\u5e94\u9519\u8bef",key:"login"})}he();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(z.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(B&&W&&H&&te&&ae&&oe&&J)){e.next=16;break}if(O.b.loading({content:"\u6ce8\u518c\u4e2d\xb7\xb7\xb7",key:"register"}),!pe()){e.next=13;break}if(!Oe(J)){e.next=10;break}return e.next=6,V("/register",{username:B,password:W,phone:J,classId:oe,college:ae,scoreNumber:te});case 6:t=e.sent;try{void 0===t.code?O.b.error("\u670d\u52a1\u7aef\u54cd\u5e94\u9519\u8bef"):200===t.code?(i(!1),O.b.success({content:t.message,key:"register"})):O.b.warning({content:t.errmsg,key:"register"})}catch(n){console.log(n),O.b.error({content:"\u670d\u52a1\u7aef\u54cd\u5e94\u9519\u8bef",key:"register"})}e.next=11;break;case 10:O.b.warning("\u624b\u673a\u53f7\u8f93\u5165\u6709\u8bef");case 11:e.next=14;break;case 13:O.b.warning("\u5bc6\u7801\u957f\u5ea6\u5c0f\u4e8e6\u6216\u8005\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4");case 14:e.next=17;break;case 16:O.b.warning("\u4fe1\u606f\u6ca1\u6709\u586b\u5199\u5b8c\u6574");case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(z.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,V("/logout",{token:n});case 3:200===e.sent.code&&(localStorage.removeItem("token"),he(),t.push("/"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(M.a,{offsetTop:0,children:[Object(v.jsxs)(e,{className:"header",children:[Object(v.jsx)("div",{className:"logo_outer",children:Object(v.jsx)("img",{src:Q,alt:"logo",className:"logo",onClick:function(){t.push("/")}})}),Object(v.jsxs)(Z.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["index"],style:{width:"50vw",justifyContent:"flex-end"},children:[""!==xe&&Object(v.jsx)(Z.a.Item,{disabled:!0,children:xe},xe),Object(v.jsx)(Z.a.Item,{onClick:function(){t.push("/")},children:"\u4e3b\u9875"},"index"),Object(v.jsx)(Z.a.Item,{onClick:function(){ue(!0)},children:"\u793e\u56e2\u4ecb\u7ecd"},"introduce"),Object(v.jsx)(Z.a.Item,{disabled:!0,children:"\u8054\u7cfb\u6211\u4eec"},"contact"),!xe&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Z.a.Item,{onClick:function(){b(!0)},children:"\u767b\u5f55"},"login"),Object(v.jsx)(Z.a.Item,{onClick:function(){i(!0)},children:"\u6ce8\u518c"},"register")]}),""!==xe&&Object(v.jsx)(Z.a.Item,{onClick:ve,children:"\u9000\u51fa\u767b\u5f55"},"logout")]})]}),Object(v.jsx)(U,{}),Object(v.jsx)(T.a,{visible:a,onCancel:function(){i(!1)},title:"\u6ce8\u518c",okText:"\u6ce8\u518c",cancelText:"\u53d6\u6d88",onOk:we,children:Object(v.jsxs)(q.a,{name:"register",labelCol:{span:5},wrapperCol:{span:17},children:[Object(v.jsx)(q.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(v.jsx)(P.a,{onChange:function(e){L(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(v.jsx)(P.a.Password,{onChange:function(e){N(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"Please input your password!"}],children:Object(v.jsx)(P.a.Password,{onChange:function(e){X(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u624b\u673a\u53f7",name:"phone",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(v.jsx)(P.a,{type:"number",onChange:function(e){_(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u5b66\u53f7",name:"scoreNumber",rules:[{required:!0,message:"Please input your score number!"}],children:Object(v.jsx)(P.a,{type:"number",onChange:function(e){ne(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u5b66\u9662",name:"collage",rules:[{required:!0,message:"Please input your collage!"}],children:Object(v.jsx)(P.a,{onChange:function(e){ie(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u73ed\u7ea7",name:"class",rules:[{required:!0,message:"Please input your class!"}],children:Object(v.jsx)(P.a,{onChange:function(e){Ae(e.target.value)}})})]})}),Object(v.jsxs)(T.a,{okText:"\u5df2\u4e86\u89e3",title:"\u793e\u56e2\u4ecb\u7ecd",cancelText:"\u53d6\u6d88",visible:be,width:700,onCancel:function(){ue(!1)},onOk:function(){ue(!1)},children:[Object(v.jsx)(y.a.Title,{level:3,children:"\u7a0b\u5e8f\u5458\u4e4b\u5bb6"}),Object(v.jsx)(y.a.Paragraph,{style:{fontSize:"1rem"},children:"\u7a0b\u5e8f\u5458\u4e4b\u5bb6\u662f\u7531\u793e\u56e2\u8054\u76df\u4e3b\u7ba1\uff0c\u4f4d\u4e8e\u8ba1\u7b97\u673a\u4fe1\u606f\u5de5\u7a0b\u5b66\u9662\u7684\u7a0b\u5e8f\u5458\u7231\u597d\u8005\u7684\u5bb6\u56ed\u3002\u793e\u56e2\u6210\u5458\u5728\u4e25\u683c\u9075\u5b88\u5b66\u6821\u5b88\u5219\u4ee5\u53ca\u5b66\u4e60\u56e2\u59d4\u7cbe\u795e\u7684\u57fa\u7840\u4e0a\uff0c\u4e3a\u793e\u56e2\u5efa\u8bbe\u505a\u51fa\u4e86\u4e0d\u61c8\u7684\u52aa\u529b\u3002 \u8ba1\u7b97\u673a\u4fe1\u606f\u5de5\u7a0b\u5b66\u9662\u7a0b\u5e8f\u5458\u4e4b\u5bb6\u793e\u56e2\u6210\u7acb\u4e8e2006\u5e74\uff0c\u7531\u4f1a\u957f\u53ca\u526f\u4f1a\uff0c\u4e0b\u8bbe\u79d8\u4e66\u5904\u3001\u5ba3\u4f20\u90e8\u3001\u516c\u5173 \u90e8\u3001\u7ec4\u7ec7\u90e8\uff08\u5185\u8bbe\u7b56\u5212\uff09\u3001\u6280\u672f\u90e8\uff0c\u662f\u4e00\u4e2a\u4ee5\u6280\u672f\u5b66\u4e60\u548c\u4ea4\u6d41\u4e3a\u57fa\u7840\u7684\u4f18\u79c0\u793e\u56e2\u3002\u793e\u56e2\u8fde\u7eed\u591a\u5e74\u88ab\u8bc4\u4e3a\u6821\u4f18\u79c0\u793e\u56e2\uff0c\u76ee\u524d\u4e3a\u6821\u4e94\u661f\u7ea7\u793e\u56e2\u3002"})]}),Object(v.jsx)(T.a,{okText:"\u767b\u5f55",cancelText:"\u53d6\u6d88",visible:d,title:"\u767b\u5f55",onCancel:function(){b(!1)},onOk:fe,children:Object(v.jsxs)(q.a,{name:"login",labelCol:{span:5},wrapperCol:{span:18},children:[Object(v.jsx)(q.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(v.jsx)(P.a,{onChange:function(e){g(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(v.jsx)(P.a.Password,{onChange:function(e){I(e.target.value)}})})]})})]})}var H=n(185),X=n(293),G=n(294),K=n(295),J=n(296),_=(n(287),n(310)),$=n(311),ee=n(312),te=n(313),ne=n(314),se=n(315),ce=n(316),ae=[{title:"\u59d3\u540d",dataIndex:"name",index:"name"},{title:"\u5b66\u9662",dataIndex:"collage",index:"collage"},{title:"\u73ed\u7ea7",dataIndex:"class",index:"class"},{title:"\u83b7\u5f97\u5956\u9879",dataIndex:"award",index:"award"},{title:"\u9886\u5956\u5730\u70b9",dataIndex:"place",index:"place"},{title:"\u9886\u5956\u65f6\u95f4",dataIndex:"time",index:"time"}],ie=[{key:"1",name:"\u5b59\u5178\u5178",collage:"\u8ba1\u7b97\u673a\u4fe1\u606f\u5de5\u7a0b\u5b66\u9662",class:"19\u8f6f\u4e8c",award:"\u4e00\u7b49\u5956",place:"\u5f00\u9633\u697cA312",time:"2021\u5e7410\u67081\u65e5"},{key:"2",name:"\u5f20\u5929\u5b87",collage:"\u8ba1\u7b97\u673a\u4fe1\u606f\u5de5\u7a0b\u5b66\u9662",class:"19\u8f6f\u4e8c",award:"\u4e00\u7b49\u5956",place:"\u5f00\u9633\u697cA312",time:"2021\u5e7410\u67081\u65e5"}];function re(){var e=Object(l.g)().id,t=Object(s.useState)({}),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),r=Object(o.a)(i,2),A=r[0],d=r[1],b=Object(s.useState)(!0),u=Object(o.a)(b,2),m=u[0],f=u[1],w=Object(s.useContext)(p).loginUser,I=Object(l.f)();Object(s.useEffect)((function(){document.body.scrollTop=document.documentElement.scrollTop=0,V("/pages",{id:e}).then((function(e){a(e.pageList[0])})),f(!1)}),[e]);var F=function(){var t=Object(z.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V("/isSignUp",{username:w,id:e}).then((function(t){!0===t.message[0].isSignUp?(O.b.warning("\u5df2\u7ecf\u53c2\u52a0\u6bd4\u8d5b,\u611f\u8c22\u652f\u6301!"),d(!1)):V("/signUpCompetition",{username:w,id:e}).then((function(e){"\u62a5\u540d\u6210\u529f"===e.message?(O.b.success(e.message),d(!1)):(O.b.error(e.message),d(!1))}))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(j.a,{style:{marginLeft:"13vw",width:"86vw"},children:Object(v.jsx)(H.a,{spinning:m,children:Object(v.jsxs)(j.a.Content,{className:"layout_content",children:[Object(v.jsx)("div",{className:"page_title_2",children:"\u6bd4\u8d5b\u4ecb\u7ecd"}),Object(v.jsxs)("div",{style:{display:"flex",height:"31vh"},className:"intro",children:[Object(v.jsx)("div",{className:"banner",children:Object(v.jsxs)(h.a,{autoplay:!0,children:[Object(v.jsx)("img",{src:x,alt:"web",className:"img"}),Object(v.jsx)("img",{src:x,alt:"web",className:"img"})]})}),Object(v.jsx)("div",{className:"right_text",children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(y.a.Title,{level:3,children:c.title}),Object(v.jsx)(y.a.Paragraph,{ellipsis:{rows:5,expandable:!0},children:c.intro})]})})]}),Object(v.jsx)("div",{className:"page_title_2",children:"\u6bd4\u8d5b\u987b\u77e5"}),Object(v.jsxs)("div",{className:"intro",style:{padding:"4vh 2vw"},children:[Object(v.jsxs)(X.a,{style:{textAlign:"left"},children:[Object(v.jsxs)(G.a,{span:8,children:[Object(v.jsx)(C.a,{style:{fontSize:"1.5rem"}}),Object(v.jsxs)("span",{style:{fontSize:"1.2rem",marginLeft:"1vw"},children:["\u7ade\u8d5bQQ\u7fa4\uff1a",c.QQ]})]}),Object(v.jsxs)(G.a,{span:8,children:[Object(v.jsx)(_.a,{style:{fontSize:"1.5rem"}}),Object(v.jsxs)("span",{style:{fontSize:"1.2rem",marginLeft:"1vw"},children:["\u62a5\u540d\u65f6\u95f4\uff1a",c.startTime]})]}),Object(v.jsxs)(G.a,{span:8,children:[Object(v.jsx)($.a,{style:{fontSize:"1.5rem"}}),Object(v.jsxs)("span",{style:{fontSize:"1.2rem",marginLeft:"1vw"},children:["\u6bd4\u8d5b\u65f6\u95f4\uff1a",c.endTime]})]})]}),Object(v.jsx)(K.a,{}),Object(v.jsxs)(X.a,{style:{textAlign:"left"},children:[Object(v.jsxs)(G.a,{span:8,children:[Object(v.jsx)(ee.a,{style:{fontSize:"1.5rem"}}),Object(v.jsxs)("span",{style:{fontSize:"1.2rem",marginLeft:"1vw"},children:["\u9650\u62a5\u4eba\u6570\uff1a",c.limitPeople," \u4eba"]})]}),Object(v.jsxs)(G.a,{span:8,children:[Object(v.jsx)(te.a,{style:{fontSize:"1.5rem"}}),Object(v.jsxs)("span",{style:{fontSize:"1.2rem",marginLeft:"1vw"},children:["\u6bd4\u8d5b\u65b9\u5f0f\uff1a",c.way]})]}),Object(v.jsxs)(G.a,{span:8,children:[Object(v.jsx)(ne.a,{style:{fontSize:"1.5rem"}}),Object(v.jsxs)("span",{style:{fontSize:"1.2rem",marginLeft:"1vw"},children:["\u6bd4\u8d5b\u5730\u70b9\uff1a",c.place]})]})]})]}),Object(v.jsx)("div",{className:"page_title_2",children:"\u5956\u9879\u8bbe\u7f6e"}),Object(v.jsx)("div",{className:"intro",children:Object(v.jsxs)(X.a,{style:{marginBottom:"4vh"},children:[Object(v.jsx)(G.a,{span:"6",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)(se.a,{style:{fontSize:"4rem",margin:"15% auto",color:"gold"}}),Object(v.jsx)("div",{className:"bonus",children:"\u4e00\u7b49\u5956"}),Object(v.jsxs)("div",{className:"bonus",children:[c.firstPeople,"\u540d"]})]})}),Object(v.jsx)(G.a,{span:"6",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)(se.a,{style:{fontSize:"4rem",margin:"15% auto",color:"silver"}}),Object(v.jsx)("div",{className:"bonus",children:"\u4e8c\u7b49\u5956"}),Object(v.jsxs)("div",{className:"bonus",children:[c.secondPeople,"\u540d"]})]})}),Object(v.jsx)(G.a,{span:"6",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)(se.a,{style:{fontSize:"4rem",margin:"15% auto",color:"sienna"}}),Object(v.jsx)("div",{className:"bonus",children:"\u4e09\u7b49\u5956"}),Object(v.jsxs)("div",{className:"bonus",children:[c.secondPeople,"\u540d"]})]})}),Object(v.jsx)(G.a,{span:"6",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)(se.a,{style:{fontSize:"4rem",margin:"15% auto"}}),Object(v.jsx)("div",{className:"bonus",children:"\u4f18\u79c0\u5956"}),Object(v.jsxs)("div",{className:"bonus",children:[c.otherPeople,"\u540d"]})]})})]})}),Object(v.jsx)("div",{className:"page_title_2",children:"\u83b7\u5956\u540d\u5355"}),Object(v.jsx)("div",{className:"intro",style:{padding:"3vh 2vw",marginTop:"2vh"},children:Object(v.jsx)(J.a,{columns:ae,bordered:!0,dataSource:ie})}),Object(v.jsxs)("div",{className:"page_title_2",style:{textAlign:"center",marginBottom:"0",paddingBottom:"2vh"},children:[Object(v.jsx)(g.a,{size:"large",style:{marginRight:"1vw"},onClick:function(){I.push("/")},children:"\u8fd4\u56de\u4e3b\u9875"}),Object(v.jsx)(g.a,{type:"primary",size:"large",onClick:function(){d(!0)},children:"\u62a5\u540d\u6bd4\u8d5b"})]})]})})}),Object(v.jsx)(T.a,{title:"\u62a5\u540d\u6bd4\u8d5b",visible:A,okText:"\u62a5\u540d",cancelText:"\u53d6\u6d88",onCancel:function(){d(!1)},onOk:F,children:Object(v.jsxs)("div",{style:{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)(ce.a,{style:{color:"orange",fontSize:"2rem"}}),Object(v.jsxs)("div",{style:{marginLeft:"1vw",fontSize:"1rem"},children:[Object(v.jsx)("div",{children:"\u786e\u5b9a\u8981\u53c2\u52a0\u6bd4\u8d5b\u5417?"}),Object(v.jsx)("div",{children:"\u53c2\u52a0\u540e\u4e0d\u53ef\u9000\u8d5b,\u6bd4\u8d5b\u5f53\u5929\u4e0d\u6765\u5c06\u5bfc\u81f4PU\u4fe1\u8a89\u5206\u4e0b\u964d"})]})]})})]},e)}function le(){var e=Object(s.useState)([{_id:""}]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(l.f)();return Object(s.useEffect)((function(){V("/competitionList",{}).then((function(e){c(e.competitionList),0!==e.competitionList.length&&a.push("/competition/".concat(e.competitionList[0]._id))}))}),[a]),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(j.a.Sider,{style:{position:"fixed",height:"100vh"},children:Object(v.jsx)(Z.a,{defaultSelectedKeys:["0"],style:{paddingTop:"1vh"},theme:"dark",children:0!==n.length&&n.map((function(e,t){return Object(v.jsx)(Z.a.Item,{children:Object(v.jsx)(r.b,{to:"/competition/".concat(e._id),children:e.title})},t.toString())}))})}),Object(v.jsx)(l.a,{path:"/competition/:id",component:re})]})}n(288);function oe(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),r=i[0],A=i[1],j=Object(l.f)(),d=Object(s.useCallback)(Object(z.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/adminLogin",{adminName:n,adminPass:r});case 2:200===(t=e.sent).code?(O.b.success(t.message),sessionStorage.setItem("code","200"),j.push("/management")):(O.b.error(t.message),sessionStorage.setItem("code",""),j.push("/"));case 4:case"end":return e.stop()}}),e)}))),[n,r,j]);return Object(v.jsx)("div",{style:{height:"90vh"},children:Object(v.jsxs)("div",{className:"admin",children:[Object(v.jsx)("div",{className:"admin-title",children:"\u7ba1\u7406\u5458\u767b\u5f55"}),Object(v.jsx)("div",{className:"admin-content",children:Object(v.jsxs)(q.a,{children:[Object(v.jsx)(q.a.Item,{label:"\u7ba1\u7406\u5458\u8d26\u53f7",children:Object(v.jsx)(P.a,{placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",onChange:function(e){return c(e.target.value)}})}),Object(v.jsx)(q.a.Item,{label:"\u7ba1\u7406\u5458\u5bc6\u7801",children:Object(v.jsx)(P.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",onChange:function(e){return A(e.target.value)}})}),Object(v.jsxs)(q.a.Item,{wrapperCol:{offset:8,span:10},children:[Object(v.jsx)(g.a,{style:{marginRight:"2vw"},children:"\u8fd4\u56de"}),Object(v.jsx)(g.a,{type:"primary",htmlType:"submit",onClick:d,children:"\u767b\u5f55"})]})]})})]})})}n(289);function Ae(){return Object(v.jsxs)(j.a.Content,{children:[Object(v.jsx)("div",{className:"management-title",children:"title"}),Object(v.jsx)("div",{className:"management-content",children:Object(v.jsx)("div",{className:"management-content-title",children:"\u57fa\u672c\u4fe1\u606f"})}),Object(v.jsx)(M.a,{offsetBottom:0,children:Object(v.jsxs)("div",{className:"management-bottom",children:[Object(v.jsx)(g.a,{style:{marginRight:"16px"},children:"\u91cd\u7f6e"}),Object(v.jsx)(g.a,{type:"primary",children:"\u4fdd\u5b58"})]})})]})}function je(){return Object(v.jsx)("div",{})}function de(){var e=Object(l.f)();return Object(s.useEffect)((function(){"200"!==sessionStorage.getItem("code")?(O.b.error("\u8bf7\u5148\u767b\u5f55\u7ba1\u7406\u5458\u8d26\u6237"),e.push("/")):e.push("/management/add/competitionIndroduce")}),[e]),Object(v.jsxs)(j.a,{style:{height:"100vh"},children:[Object(v.jsx)(j.a.Sider,{children:Object(v.jsxs)(Z.a,{theme:"dark",mode:"vertical",defaultSelectedKeys:["1"],children:[Object(v.jsx)(Z.a.Item,{children:Object(v.jsx)(r.b,{to:"/management/add/competitionIntroduce",children:"\u65b0\u5efa\u6bd4\u8d5b\u7b80\u4ecb"})},"competitionIntroduce"),Object(v.jsx)(Z.a.Item,{children:Object(v.jsx)(r.b,{to:"/management/add/competitionDetail",children:"\u65b0\u5efa\u6bd4\u8d5b\u8be6\u60c5"})},"competitionDetail"),Object(v.jsx)(Z.a.Item,{children:"\u65b0\u5efa\u516c\u544a"}),Object(v.jsx)(Z.a.Item,{children:"\u65b0\u5efa\u83b7\u5956\u540d\u5355"}),Object(v.jsx)(Z.a.Item,{children:"\u65b0\u5efa\u56fe\u5e8a"}),Object(v.jsx)(Z.a.Item,{children:"\u4fee\u6539\u6bd4\u8d5b\u7b80\u4ecb"}),Object(v.jsx)(Z.a.Item,{children:"\u4fee\u6539\u6bd4\u8d5b\u8be6\u60c5"}),Object(v.jsx)(Z.a.Item,{children:"\u4fee\u6539\u516c\u544a"}),Object(v.jsx)(Z.a.Item,{children:"\u4fee\u6539\u83b7\u5956\u540d\u5355"})]})}),Object(v.jsx)(l.a,{path:"/management/add/:id",children:Object(v.jsx)(Ae,{})}),Object(v.jsx)(l.a,{path:"/management/edit/:id",component:je})]})}function be(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),r=i[0],j=i[1];return Object(v.jsxs)(p.Provider,{value:{loginUser:r,setLoginUser:j},children:[Object(v.jsx)(D,{}),Object(v.jsx)(f.Provider,{value:c,children:Object(v.jsx)(w.Provider,{value:n,children:Object(v.jsx)(l.a,{exact:!0,path:"/",component:E})})}),Object(v.jsx)(l.a,{path:"/competition",component:le}),Object(v.jsx)(l.a,{path:"/adminLogin",component:oe}),Object(v.jsx)(l.a,{path:"/management",component:de}),Object(v.jsx)(A.a,{style:{zIndex:100}})]})}var ue=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(r.a,{children:Object(v.jsx)(l.c,{children:Object(v.jsx)(l.a,{component:be,path:"/"})})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,317)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(v.jsx)(ue,{}),document.getElementById("root")),me()}},[[290,1,2]]]);
//# sourceMappingURL=main.4d7b6206.chunk.js.map