(this["webpackJsonpbjak-interview"]=this["webpackJsonpbjak-interview"]||[]).push([[0],{119:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(36),i=n.n(a),s=(n(119),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))}),l=(n(93),n(65)),o=n(21),d=n(28),j=n(67),h=n.n(j),b=n(42),u=n(150),O=n(47),m=n.n(O),f=n(156),p=n(157),x=n(6),g=function(e){var t=e.data,n=Object(o.e)(),r=Object(c.useState)([]),a=Object(d.a)(r,2),i=a[0],s=a[1],l=Object(c.useState)(!1),j=Object(d.a)(l,2),h=j[0],b=j[1],O=new Date;Object(c.useEffect)((function(){var e=t.currentSchedule.filter((function(e){var t=new Date(e.datetime.replace(" ","T"));return(O-t)/6e4<function(e){var t=e.split(":");return 60*Number(t[0])+Number(t[1])+Number(t[2])/60}(e.duration)}));s(e)}),[]);var g=function(){return Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[Object(x.jsx)("div",{style:{marginRight:20},children:Object(x.jsx)("img",{width:"60",src:t.imageUrl?t.imageUrl:t.backupImage,alt:t.title})}),Object(x.jsxs)("div",{style:{width:"100%"},children:[Object(x.jsxs)("div",{children:["CH",t.stbNumber]}),Object(x.jsx)("div",{style:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"bold"},children:t.title})]})]})};return Object(x.jsxs)(u.a,{hoverable:!0,onClick:function(){n.push("details/".concat(t.id))},title:Object(x.jsx)(g,{}),className:"channel-card",headStyle:{fontSize:"1em",textAlign:"left"},children:[Object(x.jsx)("div",{onClick:function(e){e.stopPropagation(),b(!h),console.log("Favourited",t.id)},style:{display:"flex",justifyContent:"center",alignItems:"center",width:30,height:30,position:"absolute",right:10,top:10,zIndex:1e3},children:h?Object(x.jsx)(f.a,{style:{color:"rgb(230, 0, 125)"}}):Object(x.jsx)(p.a,{})}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"On Now"}),Object(x.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Object(x.jsx)("strong",{children:i[0]?i[0].title:"No Information Available"})})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:i[1]?m()(i[1].datetime).format("hh:mm A"):"N/A"}),Object(x.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i[1]?i[1].title:"No Information Available"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:i[2]?m()(i[2].datetime).format("hh:mm A"):"N/A"}),Object(x.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i[2]?i[2].title:"No Information Available"})]})]})]})},v=n(151),w=function(e){var t=e.handleNameSearchProps,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],i=r[1];return Object(x.jsx)(v.a,{className:"search-input",type:"text",placeholder:"Search Channels",value:a,onChange:function(e){i(e.target.value),t(e.target.value)},name:"name"})},N=n(92),y=n(59),C=n(153),S=n(148),P=n(152),I=n(158),L=function(e){var t=e.handleSortProps,n=e.allCategoriesProps,r=e.allLanguagesProps,a=e.handleRefineProps,i=Object(c.useState)(!1),s=Object(d.a)(i,2),l=s[0],o=s[1],j=function(){o(!1)},h=function(e){var t=e.key;j(),a(t)},b=Object(x.jsx)(N.a,{onClick:h,children:n.map((function(e){return Object(x.jsx)(N.a.Item,{children:e},e)}))}),u=Object(x.jsx)(N.a,{onClick:h,children:r.map((function(e){return Object(x.jsx)(N.a.Item,{children:e},e)}))}),O=Object(x.jsxs)(N.a,{onClick:h,children:[Object(x.jsx)(N.a.Item,{children:"HD Channels"},"true"),Object(x.jsx)(N.a.Item,{children:"Non HD Channels"},"false")]});return Object(x.jsxs)("div",{className:"search-div",children:[Object(x.jsx)(y.a,{className:"refine-button",onClick:function(){o(!0)},icon:Object(x.jsx)(I.a,{}),children:"Refine"}),Object(x.jsxs)(C.a,{title:"Refine",visible:l,onClose:j,children:[Object(x.jsx)(S.a,{overlay:b,trigger:["click"],children:Object(x.jsx)("div",{style:{cursor:"pointer",marginBottom:10},children:Object(x.jsx)("strong",{children:"By Categories"})})}),Object(x.jsx)(S.a,{overlay:u,trigger:["click"],children:Object(x.jsx)("div",{style:{cursor:"pointer",marginBottom:10},children:Object(x.jsx)("strong",{children:"By Languages"})})}),Object(x.jsx)(S.a,{overlay:O,trigger:["click"],children:Object(x.jsx)("div",{style:{cursor:"pointer",marginBottom:10},children:Object(x.jsx)("strong",{children:"By Resolution"})})})]}),Object(x.jsxs)(P.a,{className:"sort-select",style:{width:"13em"},placeholder:"Sort channels",onChange:function(e){t(e)},children:[Object(x.jsx)(P.a.Option,{value:"name-asc",children:"Name (Ascending)"},"1"),Object(x.jsx)(P.a.Option,{value:"name-dsc",children:"Name (Descending)"},"2"),Object(x.jsx)(P.a.Option,{value:"number-asc",children:"Number (Ascending)"},"3"),Object(x.jsx)(P.a.Option,{value:"number-dsc",children:"Number (Descending)"},"4")]})]})},k=function(e){var t=e.data,n=e.handleNameSearchProps,r=e.allCategoriesProps,a=e.allLanguagesProps,i=e.handleRefineProps,s=Object(c.useState)([]),l=Object(d.a)(s,2),o=l[0],j=l[1];Object(c.useEffect)((function(){j(t)}),[t]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"search-div",children:Object(x.jsx)(w,{handleNameSearchProps:n})}),Object(x.jsx)(L,{handleRefineProps:i,handleSortProps:function(e){if(console.log("handle multi-sort",e),"name-asc"===e){var n=t.sort((function(e,t){return e.title.toLowerCase().localeCompare(t.title.toLowerCase())}));j(Object(b.a)(t)),j(Object(b.a)(n))}else if("name-dsc"===e){var c=t.sort((function(e,t){return e.title.toLowerCase().localeCompare(t.title.toLowerCase())?-1:1}));j(Object(b.a)(t)),j(Object(b.a)(c))}else if("number-asc"===e){var r=t.sort((function(e,t){return e.stbNumber-t.stbNumber}));j(Object(b.a)(t)),j(Object(b.a)(r))}else if("number-dsc"===e){var a=t.sort((function(e,t){return t.stbNumber-e.stbNumber}));j(Object(b.a)(t)),j(Object(b.a)(a))}},allCategoriesProps:r,allLanguagesProps:a}),Object(x.jsx)("div",{className:"wrapper-grid",children:o.map((function(e){return Object(x.jsx)(g,{data:e},e.id)}))})]})},A=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),s=i[0],l=i[1];Object(c.useEffect)((function(){h.a.get("https://contenthub-api.eco.astro.com.my/channel/all.json").then((function(e){console.log(e.data.response),r(e.data.response)})).catch((function(e){return console.error(e)})),l(n)}),[]);for(var o=[],j=0;j<n.length;j++){var b=n[j];-1===o.indexOf(b.language)&&o.push(b.language)}for(var u=[],O=0;O<n.length;O++){var m=n[O];-1===u.indexOf(m.category)&&u.push(m.category)}return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"Channel List"}),Object(x.jsx)(k,{handleRefineProps:function(e){var t=n.filter((function(t){var n=t.category===e,c=t.language===e,r=t.isHd.toString()===e;return n||c||r}));l(t)},allCategoriesProps:u,allLanguagesProps:o,handleNameSearchProps:function(e){var t=n.filter((function(t){var n=t.title.toLowerCase().includes(e.toLowerCase()),c=t.stbNumber.toLowerCase().includes(e.toLowerCase());return n||c}));l(t)},data:s.length?s:n})]})},D=n(91),B=n(155),R=n(154),T=D.a.TabPane,F=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(o.f)().slug;Object(c.useEffect)((function(){var e;e=a,h.a.get("https://contenthub-api.eco.astro.com.my/channel/".concat(e,".json")).then((function(e){console.log(e.data.response),r(e.data.response)})).catch((function(e){return console.error(e)}))}),[]);var i=[];for(var s in n.schedule)i.push(n.schedule[s]);var l=function(e){var t=e.split(":");return 60*Number(t[0])+Number(t[1])+Number(t[2])/60},j=new Date,b=function(e){var t=new Date(e.datetime.replace(" ","T"));return(j-t)/6e4<l(e.duration)&&t<j},u=i.map((function(e){return e.filter((function(e){var t=new Date(e.datetime.replace(" ","T"));return(j-t)/6e4<l(e.duration)}))}));return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"Channel Details Page"}),Object(x.jsxs)(B.a,{style:{marginBottom:30},children:[Object(x.jsx)(B.a.Item,{href:"/tv-guide",children:"Content"}),Object(x.jsx)(B.a.Item,{children:n.title})]}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%",marginBottom:20},children:[Object(x.jsx)("div",{style:{marginRight:20},children:Object(x.jsx)("img",{width:"60",src:n.imageUrl,alt:""})}),Object(x.jsxs)("div",{style:{width:"100%"},children:[Object(x.jsxs)("div",{children:["CH",n.stbNumber]}),Object(x.jsx)("div",{style:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"bold"},children:n.title})]})]}),Object(x.jsx)("p",{children:n.description}),Object(x.jsx)(D.a,{children:u.map((function(e){return Object(x.jsx)(T,{tab:e.length>0?m()(new Date).format("dddd")===m()(e[0].datetime).format("dddd")?"TODAY":m()(e[0].datetime).format("dddd"):"N/A",children:Object(x.jsx)("ul",{className:"spaced",children:e.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:b(e)?Object(x.jsx)("strong",{children:"On Now"}):m()(e.datetime).format("hh:mm A")}),Object(x.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:b(e)?Object(x.jsx)("strong",{children:e.title}):e.title})]},e.eventId)}))})},e.length>0?e[0].datetime:Object(R.a)())}))})]})},E=function(){return Object(x.jsx)(F,{})};var H=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.a,{basename:"/tv-guide",children:[Object(x.jsx)(o.a,{exact:!0,path:"/",component:A}),Object(x.jsx)(o.a,{path:"/details/:slug",component:E})]})})};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),s()},93:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.06b78aca.chunk.js.map