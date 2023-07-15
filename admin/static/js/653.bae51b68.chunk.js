"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[653],{2782:function(e,a,t){var s=t(3547),n=t(184);a.Z=function(e){var a=e.title,t=e.children,l=e.topMargin,i=e.TopSideButtons;return(0,n.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(l||"mt-6"),children:[(0,n.jsxs)(s.Z,{styleClass:i?"inline-block":"",children:[a,i&&(0,n.jsx)("div",{className:"inline-block float-right",children:i})]}),(0,n.jsx)("div",{className:"divider mt-2"}),(0,n.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:t})]})}},3547:function(e,a,t){var s=t(184);a.Z=function(e){var a=e.styleClass,t=e.children;return(0,s.jsx)("div",{className:"text-xl font-semibold ".concat(a),children:t})}},653:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var s=t(2791),n=t(9434),l=t(5054),i=t(2426),r=t.n(i),d=t(2782),c=t(8060),o=t(190),h=t(9313),m=t(5987),u=["title","titleId"];var x=s.forwardRef((function(e,a){var t=e.title,n=e.titleId,l=(0,m.Z)(e,u);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))})),j=t(184),f=function(){var e=(0,n.I0)();return(0,j.jsx)("div",{className:"inline-block float-right",children:(0,j.jsx)("button",{className:"btn px-6 btn-sm normal-case btn-primary",onClick:function(){e((0,c.h7)({title:"Add New Lead",bodyType:h.MODAL_BODY_TYPES.LEAD_ADD_NEW}))},children:"Add New"})})};var v=function(){var e=(0,n.v9)((function(e){return e.lead})).leads,a=(0,n.I0)();return(0,s.useEffect)((function(){a((0,o.Y8)())}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(d.Z,{title:"Current Leads",topMargin:"mt-2",TopSideButtons:(0,j.jsx)(f,{}),children:(0,j.jsx)("div",{className:"overflow-x-auto w-full",children:(0,j.jsxs)("table",{className:"table w-full",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Name"}),(0,j.jsx)("th",{children:"Email Id"}),(0,j.jsx)("th",{children:"Created At"}),(0,j.jsx)("th",{children:"Status"}),(0,j.jsx)("th",{children:"Assigned To"}),(0,j.jsx)("th",{})]})}),(0,j.jsx)("tbody",{children:e.map((function(e,t){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:(0,j.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,j.jsx)("div",{className:"avatar",children:(0,j.jsx)("div",{className:"mask mask-squircle w-12 h-12",children:(0,j.jsx)("img",{src:e.avatar,alt:"Avatar"})})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"font-bold",children:e.first_name}),(0,j.jsx)("div",{className:"text-sm opacity-50",children:e.last_name})]})]})}),(0,j.jsx)("td",{children:e.email}),(0,j.jsx)("td",{children:r()(new Date).add(-5*(t+2),"days").format("DD MMM YY")}),(0,j.jsx)("td",{children:(s=t,s%5===0?(0,j.jsx)("div",{className:"badge",children:"Not Interested"}):s%5===1?(0,j.jsx)("div",{className:"badge badge-primary",children:"In Progress"}):s%5===2?(0,j.jsx)("div",{className:"badge badge-secondary",children:"Sold"}):s%5===3?(0,j.jsx)("div",{className:"badge badge-accent",children:"Need Followup"}):(0,j.jsx)("div",{className:"badge badge-ghost",children:"Open"}))}),(0,j.jsx)("td",{children:e.last_name}),(0,j.jsx)("td",{children:(0,j.jsx)("button",{className:"btn btn-square btn-ghost",onClick:function(){return function(e){a((0,c.h7)({title:"Confirmation",bodyType:h.MODAL_BODY_TYPES.CONFIRMATION,extraObject:{message:"Are you sure you want to delete this lead?",type:h.CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,index:e}}))}(t)},children:(0,j.jsx)(x,{className:"w-5"})})})]},t);var s}))})]})})})})};var b=function(){var e=(0,n.I0)();return(0,s.useEffect)((function(){e((0,l.Iw)({title:"Leads"}))}),[]),(0,j.jsx)(v,{})}}}]);
//# sourceMappingURL=653.bae51b68.chunk.js.map