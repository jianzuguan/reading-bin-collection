(this["webpackJsonpreading-bin-collection"]=this["webpackJsonpreading-bin-collection"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),s=n.n(a),i=(n(11),n(2)),o=n.n(i),u=n(3),b=n(4),d=(n(13),n(0)),j=function(e){var t=e.onChange;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"postcode-search-bar",children:"Postcode:"}),Object(d.jsx)("input",{id:"postcode-search-bar",onChange:function(e){t(e.target.value)}})]})},l=function(e){var t=e.onChange;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"door-number-search-bar",children:"Door Number:"}),Object(d.jsx)("input",{id:"door-number-search-bar",onChange:function(e){t(e.target.value)}})]})},f=function(e){var t=e.onClick,n=e.addressData.SiteShortAddress;return Object(d.jsx)("button",{onClick:t,children:n})},p=function(e){var t=e.addressList,n=e.doorNumber,r=e.setUprn;return Object(d.jsx)("div",{children:t.map((function(e){var t;if(null===(t=e.SiteShortAddress)||void 0===t?void 0:t.includes(n))return Object(d.jsx)(f,{addressData:e,onClick:function(){r(e.AccountSiteUprn)}},e.AccountSiteUprn)}))})},h=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.next=4,fetch("https://api.reading.gov.uk/rbc/getaddresses/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(!("Addresses"in(r=e.sent))||null===r.Addresses){e.next=10;break}return e.abrupt("return",r.Addresses);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.collectionData,n=t.Service,r=t.Date;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:n}),Object(d.jsx)("p",{children:r})]})},O=function(e){var t=e.collectionList;return Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsx)(v,{collectionData:e},t)}))})},x=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.next=4,fetch("https://api.reading.gov.uk/rbc/mycollections/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(!("Collections"in(r=e.sent))||null===r.Collections){e.next=10;break}return e.abrupt("return",r.Collections);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var g=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(b.a)(a,2),i=s[0],f=s[1],v=Object(r.useState)(),g=Object(b.a)(v,2),m=g[0],k=g[1],C=Object(r.useState)([]),S=Object(b.a)(C,2),w=S[0],A=S[1],D=Object(r.useState)([]),y=Object(b.a)(D,2),F=y[0],L=y[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:t=e.sent,A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f(""),k(void 0),A([]),L([]),function(e){var t=e.replace(/\s/g,"");return/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(t)}(n)&&e(),function(){}}),[n]),Object(r.useEffect)((function(){L([])}),[i]),Object(r.useEffect)((function(){if(void 0!==m){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(m);case 2:t=e.sent,L(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();L([]),e()}}),[m]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{onChange:c}),Object(d.jsx)(l,{onChange:f}),0===F.length?Object(d.jsx)(p,{addressList:w,doorNumber:i,setUprn:k}):Object(d.jsx)(O,{collectionList:F})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.8cba9483.chunk.js.map