"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[442],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=c(a),s=n,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5645:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={id:"hardware-archival",title:"\uc544\uce74\uc774\ube0c \ub178\ub4dc\uc758 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d",sidebar_label:"\ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d",sidebar_position:1,description:"NEAR \uc544\uce74\uc774\ube0c \ub178\ub4dc\uc758 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d"},i=void 0,o={unversionedId:"archival/hardware-archival",id:"archival/hardware-archival",title:"\uc544\uce74\uc774\ube0c \ub178\ub4dc\uc758 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d",description:"NEAR \uc544\uce74\uc774\ube0c \ub178\ub4dc\uc758 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d",source:"@site/../docs/archival/hardware-archival.md",sourceDirName:"archival",slug:"/archival/hardware-archival",permalink:"/node-docs-kor/archival/hardware-archival",draft:!1,editUrl:"https://github.com/near/node-docs/edit/main/website/../docs/archival/hardware-archival.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1678419007,formattedLastUpdatedAt:"Mar 10, 2023",sidebarPosition:1,frontMatter:{id:"hardware-archival",title:"\uc544\uce74\uc774\ube0c \ub178\ub4dc\uc758 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d",sidebar_label:"\ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d",sidebar_position:1,description:"NEAR \uc544\uce74\uc774\ube0c \ub178\ub4dc\uc758 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d"},sidebar:"tutorialSidebar",previous:{title:"\uc544\uce74\uc774\ube0c \ub178\ub4dc",permalink:"/node-docs-kor/archival"},next:{title:"\ub178\ub4dc \uc2e4\ud589 \ud83d\ude80",permalink:"/node-docs-kor/archival/run-archival-node-without-nearup"}},p={},c=[{value:"\uad8c\uc7a5 \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc591",id:"recommended-hardware-specifications",level:2},{value:"\ucd5c\uc18c \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc591",id:"minimal-hardware-specifications",level:2},{value:"\ube44\uc6a9 \ucd94\uc815",id:"cost-estimation",level:2}],m={toc:c},u="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 NEAR \ud50c\ub7ab\ud3fc\uc5d0 \uc544\uce74\uc774\ube0c \ub178\ub4dc\ub85c \ucc38\uc5ec\ud558\uae30 \uc704\ud55c \ucd5c\uc18c \ubc0f \uad8c\uc7a5 \ud558\ub4dc\uc6e8\uc5b4 \uc694\uad6c \uc0ac\ud56d\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"recommended-hardware-specifications"},"\uad8c\uc7a5 \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc591"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud558\ub4dc\uc6e8\uc5b4"),(0,n.kt)("th",{parentName:"tr",align:null},"\uad8c\uc7a5 \uc0ac\uc591"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU"),(0,n.kt)("td",{parentName:"tr",align:null},"8\ucf54\uc5b4 (16 \uc2a4\ub808\ub4dc) Intel i7/Xeon \ub610\ub294 \ub3d9\uae09\uc758 AVX \uc9c0\uc6d0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU \uae30\ub2a5"),(0,n.kt)("td",{parentName:"tr",align:null},"CMPXCHG16B, POPCNT, SSE4.1, SSE4.2, AVX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RAM"),(0,n.kt)("td",{parentName:"tr",align:null},"24GB DDR4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc800\uc7a5\uc18c"),(0,n.kt)("td",{parentName:"tr",align:null},"7 \ud14c\ub77c\ubc14\uc774\ud2b8 SSD")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},"$ lscpu | grep -oh avx")," \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec Linux\uc5d0\uc11c AVX\uac00 \uc9c0\uc6d0\ub418\ub294\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ucd9c\ub825\uc774 \ube44\uc5b4 \uc788\uc73c\uba74 CPU\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,n.kt)("h2",{id:"minimal-hardware-specifications"},"\ucd5c\uc18c \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc591"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud558\ub4dc\uc6e8\uc5b4"),(0,n.kt)("th",{parentName:"tr",align:null},"\ucd5c\uc18c \uc0ac\uc591"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU"),(0,n.kt)("td",{parentName:"tr",align:null},"8\ucf54\uc5b4(16 \uc2a4\ub808\ub4dc) Intel i7/Xeon \ub610\ub294 \ub3d9\uae09\uc758 AVX \uc9c0\uc6d0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RAM"),(0,n.kt)("td",{parentName:"tr",align:null},"16GB DDR4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc800\uc7a5\uc18c"),(0,n.kt)("td",{parentName:"tr",align:null},"7 \ud14c\ub77c\ubc14\uc774\ud2b8 SSD")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},"$ lscpu | grep -oh avx")," \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec Linux\uc5d0\uc11c AVX\uac00 \uc9c0\uc6d0\ub418\ub294\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ucd9c\ub825\uc774 \ube44\uc5b4 \uc788\uc73c\uba74 CPU\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,n.kt)("h2",{id:"cost-estimation"},"\ube44\uc6a9 \ucd94\uc815"),(0,n.kt)("p",null,"\uc6b4\uc601 \uccb4\uc81c\uc5d0 \ub530\ub978 \uc608\uc0c1 \uc6d4\ubcc4 \ube44\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc790"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc7a5\uce58 \ud06c\uae30"),(0,n.kt)("th",{parentName:"tr",align:null},"Linux"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AWS"),(0,n.kt)("td",{parentName:"tr",align:null},"m5.2xlarge"),(0,n.kt)("td",{parentName:"tr",align:null},"$330 CPU + $800 storage \u2020")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GCP"),(0,n.kt)("td",{parentName:"tr",align:null},"n2-standard-8"),(0,n.kt)("td",{parentName:"tr",align:null},"$280 CPU + $800 storage \u2020")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure"),(0,n.kt)("td",{parentName:"tr",align:null},"Standard_F8s_v2"),(0,n.kt)("td",{parentName:"tr",align:null},"$180 CPU + $800 storage \u2020")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"( \u2020 ) \uc544\uce74\uc774\ube0c \ub178\ub4dc\ub294 \uc131\uc7a5\ud558\ub294 NEAR \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud568\uc5d0 \ub530\ub77c, \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc740 \uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \uc99d\uac00\ud569\ub2c8\ub2e4.")),(0,n.kt)("blockquote",{class:"info"},(0,n.kt)("strong",null,"\ube44\uc6a9 \ucd94\uc815\uc744 \uc704\ud55c \ub9ac\uc18c\uc2a4"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"\ubaa8\ub4e0 \uac00\uaca9\uc740 1\ub144 \uc57d\uc815\uc73c\ub85c, \ubaa8\ub4e0 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ub300\ud3ed \ud560\uc778\uc744 \uc81c\uacf5\ud558\ub294 ",(0,n.kt)("em",{parentName:"p"},"\uc608\uc57d \uc778\uc2a4\ud134\uc2a4")," \ub97c \ubc18\uc601\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cpu: ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ec2/pricing/reserved-instances/pricing"},"https://aws.amazon.com/ec2/pricing/reserved-instances/pricing")),(0,n.kt)("li",{parentName:"ul"},"\uc800\uc7a5\uc18c: ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ebs/pricing"},"https://aws.amazon.com/ebs/pricing")))),(0,n.kt)("li",{parentName:"ul"},"GCP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cpu: ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/vm-instance-pricing"},"https://cloud.google.com/compute/vm-instance-pricing")),(0,n.kt)("li",{parentName:"ul"},"\uc800\uc7a5\uc18c: ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/disks-image-pricing"},"https://cloud.google.com/compute/disks-image-pricing")))),(0,n.kt)("li",{parentName:"ul"},"Azure \u2014 ",(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/calculator"},"https://azure.microsoft.com/en-us/pricing/calculator")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?"),(0,n.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"}," > ",(0,n.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}d.isMDXComponent=!0}}]);