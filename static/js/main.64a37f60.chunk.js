(this["webpackJsonpbjak-interview"]=this["webpackJsonpbjak-interview"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(32),r=n.n(a),s=(n(96),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))}),l=(n(70),n(51)),o=n(19),d=n(37),j=n(52),h=n.n(j),b=n(128),u=n(40),m=n.n(u),O=n(6),f=function(e){var t=e.data,n=Object(o.e)();console.log("data",t);var i=function(){return Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[Object(O.jsx)("div",{style:{marginRight:20},children:Object(O.jsx)("img",{width:"60",src:t.imageUrl?t.imageUrl:t.backupImage,alt:t.title})}),Object(O.jsxs)("div",{style:{width:"100%"},children:[Object(O.jsxs)("div",{children:["CH",t.stbNumber]}),Object(O.jsx)("div",{style:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"bold"},children:t.title})]})]})},c=new Date,a=t.currentSchedule.filter((function(e){return(c-new Date(e.datetime))/6e4<function(e){var t=e.split(":");return 60*Number(t[0])+Number(t[1])+Number(t[2])/60}(e.duration)}));return Object(O.jsx)(b.a,{onClick:function(){n.push("details/".concat(t.id))},title:Object(O.jsx)(i,{}),className:"channel-card",headStyle:{fontSize:"1em",textAlign:"left"},children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"On Now"}),Object(O.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Object(O.jsx)("strong",{children:a[0]?a[0].title:"No Information Available"})})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:a[1]?m()(a[1].datetime).format("hh:mm A"):"N/A"}),Object(O.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a[1]?a[1].title:"No Information Available"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:a[2]?m()(a[2].datetime).format("hh:mm A"):"N/A"}),Object(O.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a[2]?a[2].title:"No Information Available"})]})]})})},x=n(126),p=function(e){var t=e.handleNameSearchProps,n=Object(i.useState)(""),c=Object(d.a)(n,2),a=c[0],r=c[1];return Object(O.jsx)(x.a,{style:{marginBottom:10},className:"search-input",type:"text",placeholder:"Search Channels",value:a,onChange:function(e){r(e.target.value),t(e.target.value)},name:"name"})},v=function(e){var t=e.data,n=e.handleNameSearchProps,c=Object(i.useState)(""),a=Object(d.a)(c,2);a[0],a[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{handleNameSearchProps:n}),Object(O.jsx)("div",{className:"wrapper-grid",children:t.map((function(e){return Object(O.jsx)(f,{data:e},e.id)}))})]})},w=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(d.a)(a,2),s=r[0],l=r[1];Object(i.useEffect)((function(){h.a.get("https://contenthub-api.eco.astro.com.my/channel/all.json").then((function(e){console.log(e.data.response),c(e.data.response)})).catch((function(e){return console.error(e)})),l(n)}),[]);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Channel List"}),Object(O.jsx)(v,{handleNameSearchProps:function(e){var t=n.filter((function(t){var n=t.title.toLowerCase().includes(e.toLowerCase()),i=t.stbNumber.toLowerCase().includes(e.toLowerCase());return n||i}));l(t)},data:s.length?s:n})]})},g=n(68),N=n(125),y=n(129),S=g.a.TabPane,C=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(o.f)().slug;Object(i.useEffect)((function(){var e;e=a,h.a.get("https://contenthub-api.eco.astro.com.my/channel/".concat(e,".json")).then((function(e){console.log(e.data.response),c(e.data.response)})).catch((function(e){return console.error(e)}))}),[]);var r=[];for(var s in n.schedule)r.push(n.schedule[s]);var l=function(e){var t=e.split(":");return 60*Number(t[0])+Number(t[1])+Number(t[2])/60},j=new Date,b=function(e){return(j-new Date(e.datetime))/6e4<l(e.duration)&&new Date(e.datetime)<j},u=r.map((function(e){return e.filter((function(e){return(j-new Date(e.datetime))/6e4<l(e.duration)}))}));return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Channel Details Page"}),Object(O.jsxs)(N.a,{style:{marginBottom:30},children:[Object(O.jsx)(N.a.Item,{href:"/tv-guide",children:"Content"}),Object(O.jsx)(N.a.Item,{children:n.title})]}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%",marginBottom:20},children:[Object(O.jsx)("div",{style:{marginRight:20},children:Object(O.jsx)("img",{width:"60",src:n.imageUrl,alt:""})}),Object(O.jsxs)("div",{style:{width:"100%"},children:[Object(O.jsxs)("div",{children:["CH",n.stbNumber]}),Object(O.jsx)("div",{style:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"bold"},children:n.title})]})]}),Object(O.jsx)("p",{children:n.description}),Object(O.jsx)(g.a,{children:u.map((function(e){return Object(O.jsx)(S,{tab:e.length>0?m()(new Date).format("dddd")===m()(e[0].datetime).format("dddd")?"TODAY":m()(e[0].datetime).format("dddd"):"N/A",children:Object(O.jsx)("ul",{className:"spaced",children:e.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:b(e)?Object(O.jsx)("strong",{children:"On Now"}):m()(e.datetime).format("hh:mm A")}),Object(O.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:b(e)?Object(O.jsx)("strong",{children:e.title}):e.title})]},e.eventId)}))})},e.length>0?e[0].datetime:Object(y.a)())}))})]})},A=function(){return Object(O.jsx)(C,{})};var I=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(l.a,{basename:"/tv-guide",children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(O.jsx)(o.a,{path:"/details/:slug",component:A})]})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),s()},70:function(e,t,n){},96:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.64a37f60.chunk.js.map