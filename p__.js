(self["webpackChunkdoge4u"]=self["webpackChunkdoge4u"]||[]).push([[487],{94840:function(e){e.exports={logo_left:"logo_left___3JnhQ",user_icon:"user_icon___ZFgrj",logo:"logo___3lH5d",logoTxt:"logoTxt___2WxXM"}},66673:function(e){e.exports={main:"main___3HPOe",nav_banner:"nav_banner___2nTGC",phrase_front:"phrase_front___cXWc2",main_content:"main_content___1KFgE",progress_div:"progress_div___3WwlG",progress_title:"progress_title___1N9L7",logoTxt:"logoTxt___51dai",phrase_mask:"phrase_mask___3X7pQ",phrase_blur:"phrase_blur___MNacg",seeds:"seeds___1etyf"}},11869:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});n(13062);var s=n(36725),i=(n(89032),n(1635)),r=(n(22385),n(33862)),a=(n(49111),n(19650)),o=(n(57663),n(27884)),l=n(3182),c=n(2824),d=n(94043),h=n.n(d),p=n(21835),_=n.n(p),u=(n(2725),n(17904)),g=n(8870),x=n(67294),f=(n(31726),n(3301),n(94840)),j=n.n(f),m=(n(73677),n(85893)),y=function(e){var t=e.size,n=void 0===t?35:t,s=e.url,i=e.st;return(0,m.jsx)(u.C,{size:n,className:j().icon,src:s,style:(0,g.Z)({},i)})},b=n(17024),v=n(75279),Z=n(2603),k=n(33182),w=n(11075),S=n(25592),C=n(96486),z=n.n(C),E=n(66673),T=n.n(E),W=function(){var e=z().get(window,["bip39"]),t=z().get(window,["DOGE"]),n=(0,x.useState)(!1),d=(0,c.Z)(n,2),p=d[0],u=d[1],g=(0,x.useState)(!1),f=(0,c.Z)(g,2),j=f[0],C=f[1],E=(0,x.useState)(""),W=(0,c.Z)(E,2),G=W[0],N=W[1],D=(0,x.useState)(""),O=(0,c.Z)(D,2),P=O[0],F=O[1],K=(0,x.useState)(!1),A=(0,c.Z)(K,2),H=A[0],M=A[1],X=function t(){var n=e.generateMnemonic(),s=n.split(" "),i=z().uniq(s);return s.length!=i.length?t():n},Q=function(n,s,i,r){try{if(!z().isEmpty(n)&&!z().isEmpty(s)){var a=t.HDPrivateKey.fromSeed(e.mnemonicToSeedSync(n).toString("hex"),r),o=a.deriveChild("".concat(s,"/").concat(i)),l=o.privateKey.toString(),c=t.PrivateKey(l,r);return c.toAddress().toString()}}catch(d){throw d}},q=function(){var e=(0,l.Z)(h().mark((function e(){var t,n,s;return h().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,(0,b._v)(2e3);case 4:t=X(),N(t),n="m/44'/3'/0'/0",s=Q(t,n,0,"mainnet"),F(s),u(!0),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:return e.prev=14,M(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(s.Z,{justify:"center",align:"middle",children:(0,m.jsx)(i.Z,{children:(0,m.jsxs)("div",{className:T().main,children:[(0,m.jsx)(y,{size:69,url:_()}),"1 \xd0OGE = 1 \xd0OGE",(0,m.jsx)("br",{}),p?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:T().seeds,children:[(0,m.jsx)("div",{className:"".concat(j?"":T().phrase_blur," ").concat(T().phrase_front),children:G}),!j&&(0,m.jsxs)("div",{className:T().phrase_mask,onClick:function(){return C(!0)},children:[(0,m.jsx)(Z.Z,{style:{fontSize:"20px"}}),(0,m.jsx)("span",{style:{fontSize:"9px"},children:"Click And Show"})]})]}),(0,m.jsxs)(a.Z,{style:{marginTop:"10px"},direction:"vertical",children:[(0,m.jsxs)(a.Z,{align:"center",style:{width:"100%",justifyContent:"center"},children:[(0,m.jsxs)("a",{href:"https://chain.so/address/DOGE/".concat(P),target:"blank",children:[P," "]}),(0,m.jsx)(r.Z,{title:"Address Detail",children:(0,m.jsx)(k.Z,{style:{fontSize:"18px"},onClick:function(){window.open("https://chain.so/address/DOGE/".concat(P),"_blank").focus()}})})]}),(0,m.jsxs)(a.Z,{align:"center",style:{width:"100%",justifyContent:"center"},children:[(0,m.jsx)(o.Z,{type:"primary",shape:"round",icon:(0,m.jsx)(w.Z,{}),style:{height:"42px"},onClick:function(){u(!1)}}),(0,m.jsx)(o.Z,{loading:H,style:{height:"42px"},type:"primary",shape:"round",icon:(0,m.jsx)(S.Z,{}),onClick:function(){q()}})]})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)(a.Z,{align:"center",size:12,children:(0,m.jsx)(o.Z,{loading:H,type:"primary",shape:"round",icon:(0,m.jsx)(v.Z,{}),style:{height:"48px"},onClick:q,children:"Create Cold Wallet Seed"})})]}),(0,m.jsxs)(a.Z,{align:"center",style:{marginTop:"25px"},size:12,children:[(0,m.jsx)("a",{style:{fontSize:"10px"},href:"https://github.com/doge4ulibs/doge4ulibs.github.io",target:"blank",children:"doge4ulibs"}),(0,m.jsx)("a",{style:{fontSize:"10px"},href:"https://chrome.google.com/webstore/detail/dpal/lmkncnlpeipongihbffpljgehamdebgi",target:"_blank",children:"DPal Wallet"})]}),(0,m.jsxs)(a.Z,{children:[(0,m.jsx)("a",{style:{fontSize:"10px"},href:"https://en.bitcoin.it/wiki/Seed_phrase",target:"_blank",children:"What is Seed Phrase?"}),(0,m.jsx)("a",{style:{fontSize:"10px"},href:"https://www.investopedia.com/news/bitcoin-safe-storage-cold-wallet/",target:"_blank",children:"What is Cold Wallet?"})]})]})})})},G=W},73677:function(e,t,n){e.exports=n.p+"static/logo.71d620a5.svg"},21835:function(e,t,n){e.exports=n.p+"static/doge4u.eb65ea9e.jpg"}}]);