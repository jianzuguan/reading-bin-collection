(this["webpackJsonpreading-bin-collection"]=this["webpackJsonpreading-bin-collection"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(6),a=n.n(s),i=(n(11),n(2)),u=n.n(i),o=n(3),d=n(4),b=(n(13),n(0)),l=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"postcode-search-bar",children:"Postcode:"}),Object(b.jsx)("input",{id:"postcode-search-bar",value:t,onChange:function(e){n(e.target.value)}})]})},j=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"door-number-search-bar",children:"Door Number:"}),Object(b.jsx)("input",{id:"door-number-search-bar",value:t,onChange:function(e){n(e.target.value)}})]})},f=function(e){var t=e.onClick,n=e.addressData.SiteShortAddress;return Object(b.jsx)("button",{onClick:t,children:n})},p=function(e){var t=e.addressList,n=e.doorNumber,r=e.setUprn,c=e.setSeletedAddress;return Object(b.jsx)("div",{children:t.map((function(e){var t;if(null===(t=e.SiteShortAddress)||void 0===t?void 0:t.includes(n))return Object(b.jsx)(f,{addressData:e,onClick:function(){r(e.AccountSiteUprn),c(e)}},e.AccountSiteUprn)}))})},v=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.next=4,fetch("https://api.reading.gov.uk/rbc/getaddresses/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(!("Addresses"in(r=e.sent))||null===r.Addresses){e.next=10;break}return e.abrupt("return",r.Addresses);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.collectionData,n=t.Service,r=t.Date;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:n}),Object(b.jsx)("p",{children:r})]})},O=function(e){var t=e.collectionList;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(h,{collectionData:e},t)}))})},x=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.next=4,fetch("https://api.reading.gov.uk/rbc/mycollections/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(!("Collections"in(r=e.sent))||null===r.Collections){e.next=10;break}return e.abrupt("return",r.Collections);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var g=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(d.a)(s,2),i=a[0],f=a[1],h=Object(r.useState)(),g=Object(d.a)(h,2),S=g[0],m=g[1],k=Object(r.useState)(),C=Object(d.a)(k,2),A=C[0],w=C[1],D=Object(r.useState)([]),y=Object(d.a)(D,2),F=y[0],L=y[1],E=Object(r.useState)([]),N=Object(d.a)(E,2),U=N[0],P=N[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n);case 2:t=e.sent,L(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m(void 0),w(void 0),L([]),P([]),function(e){var t=e.replace(/\s/g,"");return/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(t)}(n)&&e(),function(){}}),[n]),Object(r.useEffect)((function(){P([])}),[i]),Object(r.useEffect)((function(){if(void 0!==S){var e=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(S);case 2:t=e.sent,P(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();P([]),e()}}),[S]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(l,{value:n,onChange:c}),Object(b.jsx)(j,{value:i,onChange:f}),A&&Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Address: "}),A.SiteShortAddress]}),0===U.length?Object(b.jsx)(p,{addressList:F,doorNumber:i,setUprn:m,setSeletedAddress:w}):Object(b.jsx)(O,{collectionList:U})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),S()}},[[15,1,2]]]);
//# sourceMappingURL=main.3e6bbe77.chunk.js.map