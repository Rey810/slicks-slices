(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Njg2:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"query",(function(){return f}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("9eSz"),o=a.n(l),s=a("vOnD"),c=s.b.div.withConfig({displayName:"Pagination__PaginationStyles",componentId:"sc-1g15gau-0"})(["display:flex;align-content:center;justify-items:center;border:1px solid var(--grey);margin:2rem 0;border-radius:5px;text-align:center;& > *{padding:1rem;flex:1;border-right:1px solid var(--grey);text-decoration:none;&[aria-current],&.current{color:var(--red);}&[disabled]{pointer-events:none;color:var(--grey);}}"]);function m(e){var t=e.pageSize,a=e.totalCount,r=e.currentPage,l=(e.skip,e.base),o=Math.ceil(a/t),s=r-1,m=r+1,d=m<=o,g=s>=1;return n.a.createElement(c,null,n.a.createElement(i.a,{disabled:!g,to:l+"/"+s},"← Prev"),Array.from({length:o}).map((function(e,t){return n.a.createElement(i.a,{className:1===r&&0===t?"current":"",to:l+"/"+(t>0?t+1:"")},t+1)})),n.a.createElement(i.a,{disabled:!d,to:l+"/"+m},"→ Next"))}var d=a("EYWl"),g=s.b.div.withConfig({displayName:"slicemasters__SlicemasterGrid",componentId:"sc-1ghrt1m-0"})(["display:grid;grid-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));"]),p=s.b.div.withConfig({displayName:"slicemasters__SlicemasterStyles",componentId:"sc-1ghrt1m-1"})(["a{text-decoration:none;}.gatsby-image-wrapper{height:400px;}h2{transform:rotate(-2deg);font-size:4rem;position:relative;text-align:center;margin-bottom:-2rem;z-index:2;}.description{background:var(--yellow);padding:1rem;margin:2rem;margin-top:-6rem;z-index:2;position:relative;transform:rotate(1deg);text-align:center;}"]);function u(e){var t=e.data,a=e.pageContext,r=t.slicemasters.nodes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{title:"Slicemasters - Page "+(a.currentPage||1)}),n.a.createElement(m,{pageSize:parseInt("4"),totalCount:t.slicemasters.totalCount,currentPage:a.currentPage||1,skip:a.skip,base:"/slicemasters"}),n.a.createElement(g,null,r.map((function(e){return n.a.createElement(p,null,n.a.createElement(i.a,{to:"/slicemaster/"+e.slug.current},n.a.createElement("h2",null,n.a.createElement("span",{className:"mark"},e.name))),n.a.createElement(o.a,{fluid:e.image.asset.fluid}),n.a.createElement("p",{className:"description"},e.description))}))))}var f="231331431"}}]);
//# sourceMappingURL=component---src-pages-slicemasters-js-f95277d9031be48a3dd0.js.map