(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[125],{5014:function(e,a,n){n(2426);e.exports=Object.freeze({CALENDAR_EVENT_STYLE:{BLUE:"bg-blue-200 dark:bg-blue-600 dark:text-blue-100",GREEN:"bg-green-200 dark:bg-green-600 dark:text-green-100",PURPLE:"bg-purple-200 dark:bg-purple-600 dark:text-purple-100",ORANGE:"bg-orange-200 dark:bg-orange-600 dark:text-orange-100",PINK:"bg-pink-200 dark:bg-pink-600 dark:text-pink-100",MORE:"hover:underline cursor-pointer font-medium "}})},5524:function(e,a,n){"use strict";var t=n(9439),s=n(2791),r=n(184);a.Z=function(e){var a=e.labelTitle,n=e.labelStyle,l=e.type,i=e.containerStyle,c=e.defaultValue,o=e.placeholder,d=e.updateFormValue,m=e.updateType,u=(0,s.useState)(c),p=(0,t.Z)(u,2),h=p[0],x=p[1];return(0,r.jsxs)("div",{className:"form-control w-full ".concat(i),children:[(0,r.jsx)("label",{className:"label",children:(0,r.jsx)("span",{className:"label-text text-base-content "+n,children:a})}),(0,r.jsx)("input",{type:l||"text",value:h,placeholder:o||"",onChange:function(e){return a=e.target.value,x(a),void d({updateType:m,value:a});var a},className:"input  input-bordered w-full "})]})}},9697:function(e,a,n){"use strict";var t=n(184);a.Z=function(e){var a=e.styleClass,n=e.children;return(0,t.jsx)("p",{className:"text-center  text-error ".concat(a),children:n})}},5101:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return Ee}});var t=n(9439),s=n(9255),r=n(2791),l=n(9434),i=n(7306),c=n(6337),o=n(4880),d=n(8303),m=n(6084),u=n(9313),p=n(1087),h=n(184);var x=function(){var e=(0,l.I0)(),a=(0,l.v9)((function(e){return e.header})),n=a.noOfNotifications,x=a.pageTitle,b=(0,r.useState)(localStorage.getItem("theme")),f=(0,t.Z)(b,2),j=f[0],N=f[1];return(0,r.useEffect)((function(){(0,s.themeChange)(!1),null===j&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?N("dark"):N("light"))}),[]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"navbar  flex justify-between bg-base-100  z-10 shadow-md ",children:[(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("label",{htmlFor:"left-sidebar-drawer",className:"btn btn-primary drawer-button lg:hidden",children:(0,h.jsx)(c.Z,{className:"h-5 inline-block w-5"})}),(0,h.jsx)("h1",{className:"text-2xl font-semibold ml-2",children:x})]}),(0,h.jsxs)("div",{className:"order-last",children:[(0,h.jsxs)("label",{className:"swap ",children:[(0,h.jsx)("input",{type:"checkbox"}),(0,h.jsx)(d.Z,{"data-set-theme":"light","data-act-class":"ACTIVECLASS",className:"fill-current w-6 h-6 "+("dark"===j?"swap-on":"swap-off")}),(0,h.jsx)(o.Z,{"data-set-theme":"dark","data-act-class":"ACTIVECLASS",className:"fill-current w-6 h-6 "+("light"===j?"swap-on":"swap-off")})]}),(0,h.jsx)("button",{className:"btn btn-ghost ml-4  btn-circle",onClick:function(){e((0,m.Q3)({header:"Notifications",bodyType:u.RIGHT_DRAWER_TYPES.NOTIFICATION}))},children:(0,h.jsxs)("div",{className:"indicator",children:[(0,h.jsx)(i.Z,{className:"h-6 w-6"}),n>0?(0,h.jsx)("span",{className:"indicator-item badge badge-secondary badge-sm",children:n}):null]})}),(0,h.jsxs)("div",{className:"dropdown dropdown-end ml-4",children:[(0,h.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,h.jsx)("div",{className:"w-10 rounded-full",children:(0,h.jsx)("img",{src:"https://placeimg.com/80/80/people",alt:"profile"})})}),(0,h.jsxs)("ul",{tabIndex:0,className:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",children:[(0,h.jsx)("li",{className:"justify-between",children:(0,h.jsxs)(p.rU,{to:"/app/settings-profile",children:["Profile Settings",(0,h.jsx)("span",{className:"badge",children:"New"})]})}),(0,h.jsx)("li",{className:"",children:(0,h.jsx)(p.rU,{to:"/app/settings-billing",children:"Bill History"})}),(0,h.jsx)("div",{className:"divider mt-0 mb-0"}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{onClick:function(){localStorage.clear(),window.location.href="/"},children:"Logout"})})]})]})]})]})})},b=n(7689),f=(0,r.lazy)((function(){return Promise.all([n.e(482),n.e(501)]).then(n.bind(n,2501))})),j=(0,r.lazy)((function(){return n.e(924).then(n.bind(n,4924))})),N=(0,r.lazy)((function(){return n.e(158).then(n.bind(n,2158))})),g=(0,r.lazy)((function(){return n.e(394).then(n.bind(n,2394))})),v=(0,r.lazy)((function(){return Promise.all([n.e(482),n.e(380)]).then(n.bind(n,9380))})),w=(0,r.lazy)((function(){return n.e(653).then(n.bind(n,653))})),E=(0,r.lazy)((function(){return n.e(375).then(n.bind(n,1375))})),y=(0,r.lazy)((function(){return n.e(964).then(n.bind(n,4964))})),T=(0,r.lazy)((function(){return n.e(709).then(n.bind(n,2709))})),A=(0,r.lazy)((function(){return n.e(749).then(n.bind(n,1749))})),_=(0,r.lazy)((function(){return n.e(351).then(n.bind(n,7351))})),Z=[{path:"/admin/admin/dashboard",component:f},{path:"/admin/welcome",component:j},{path:"/admin/leads",component:w},{path:"/admin/settings-team",component:T},{path:"/admin/calendar",component:y},{path:"/admin/transactions",component:A},{path:"/admin/settings-profile",component:(0,r.lazy)((function(){return n.e(455).then(n.bind(n,8455))}))},{path:"/admin/settings-billing",component:_},{path:"/admin/getting-started",component:(0,r.lazy)((function(){return n.e(928).then(n.bind(n,1928))}))},{path:"/admin/features",component:(0,r.lazy)((function(){return Promise.all([n.e(811),n.e(442)]).then(n.bind(n,7442))}))},{path:"/admin/components",component:(0,r.lazy)((function(){return Promise.all([n.e(811),n.e(620)]).then(n.bind(n,9620))}))},{path:"/admin/integration",component:E},{path:"/admin/charts",component:v},{path:"/admin/404",component:N},{path:"/admin/blank",component:g}],k=n(5901),D=(0,r.lazy)((function(){return n.e(158).then(n.bind(n,2158))}));var I=function(){var e=(0,r.useRef)(null),a=(0,l.v9)((function(e){return e.header})).pageTitle;return(0,r.useEffect)((function(){e.current.scroll({top:0,behavior:"smooth"})}),[a]),(0,h.jsxs)("div",{className:"drawer-content flex flex-col ",children:[(0,h.jsx)(x,{}),(0,h.jsxs)("main",{className:"flex-1 overflow-y-auto pt-8 px-6  bg-base-200",ref:e,children:[(0,h.jsx)(r.Suspense,{fallback:(0,h.jsx)(k.Z,{}),children:(0,h.jsxs)(b.Z5,{children:[Z.map((function(e,a){return(0,h.jsx)(b.AW,{exact:!0,path:"".concat(e.path),element:(0,h.jsx)(e.component,{})},a)})),(0,h.jsx)(b.AW,{path:"*",element:(0,h.jsx)(D,{})})]})}),(0,h.jsx)("div",{className:"h-16"})]})]})},O=n(1413),S=n(4842),C=n(1207),L=n(3759),R=n(3951),F=n(7263),M=n(7626),P=n(9205),z=n(2686),Y=n(9134),V=n(3739),B=n(6399),U=n(4341),W=n(747),G=n(2316),H=n(7915),q=n(3596),K=n(2986),Q=n(4780),J="h-6 w-6",X="h-5 w-5",$=[{path:"/admin/app/dashboard",icon:(0,h.jsx)(C.Z,{className:J}),name:"Dashboard"},{path:"/admin/app/leads",icon:(0,h.jsx)(H.Z,{className:J}),name:"Leads"},{path:"/admin/app/transactions",icon:(0,h.jsx)(G.Z,{className:J}),name:"Transactions"},{path:"/admin/app/charts",icon:(0,h.jsx)(W.Z,{className:J}),name:"Analytics"},{path:"/admin/app/integration",icon:(0,h.jsx)(U.Z,{className:J}),name:"Integration"},{path:"/admin/app/calendar",icon:(0,h.jsx)(z.Z,{className:J}),name:"Calendar"},{path:"",icon:(0,h.jsx)(Q.Z,{className:"".concat(J," inline")}),name:"Pages",submenu:[{path:"./login",icon:(0,h.jsx)(Y.Z,{className:X}),name:"Login"},{path:"./register",icon:(0,h.jsx)(V.Z,{className:X}),name:"Register"},{path:"./forgot-password",icon:(0,h.jsx)(K.Z,{className:X}),name:"Forgot Password"},{path:"./app/blank",icon:(0,h.jsx)(M.Z,{className:X}),name:"Blank Page"},{path:"./app/404",icon:(0,h.jsx)(P.Z,{className:X}),name:"404"}]},{path:"",icon:(0,h.jsx)(B.Z,{className:"".concat(J," inline")}),name:"Settings",submenu:[{path:"./app/settings-profile",icon:(0,h.jsx)(V.Z,{className:X}),name:"Profile"},{path:"./app/settings-billing",icon:(0,h.jsx)(R.Z,{className:X}),name:"Billing"},{path:"./app/settings-team",icon:(0,h.jsx)(q.Z,{className:X}),name:"Team Members"}]},{path:"",icon:(0,h.jsx)(S.Z,{className:"".concat(J," inline")}),name:"Documentation",submenu:[{path:"./app/getting-started",icon:(0,h.jsx)(S.Z,{className:X}),name:"Getting Started"},{path:"./app/features",icon:(0,h.jsx)(L.Z,{className:X}),name:"Features"},{path:"./app/components",icon:(0,h.jsx)(F.Z,{className:X}),name:"Components"}]}],ee=n(5409);var ae=function(e){var a=e.submenu,n=e.name,s=e.icon,l=(0,b.TH)(),i=(0,r.useState)(!1),c=(0,t.Z)(i,2),o=c[0],d=c[1];return(0,r.useEffect)((function(){a.filter((function(e){return e.path===l.pathname}))[0]&&d(!0)}),[]),(0,h.jsxs)("div",{className:"flex-col",children:[(0,h.jsxs)("div",{className:"w-full",onClick:function(){return d(!o)},children:[s," ",n,(0,h.jsx)(ee.Z,{className:"w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  "+(o?"rotate-180":"")})]}),(0,h.jsx)("div",{className:" w-full "+(o?"":"hidden"),children:(0,h.jsx)("ul",{className:"menu menu-compact",children:a.map((function(e,a){return(0,h.jsx)("li",{children:(0,h.jsxs)(p.rU,{to:e.path,children:[e.icon," ",e.name,l.pathname==e.path?(0,h.jsx)("span",{className:"absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary ","aria-hidden":"true"}):null]})},a)}))})})]})},ne=n(9138);var te=function(){var e=(0,b.TH)();return(0,l.I0)(),(0,h.jsxs)("div",{className:"drawer-side ",children:[(0,h.jsx)("label",{htmlFor:"left-sidebar-drawer",className:"drawer-overlay"}),(0,h.jsxs)("ul",{className:"menu  pt-2 w-80 bg-base-100 text-base-content",children:[(0,h.jsx)("button",{className:"btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden",onClick:function(){document.getElementById("left-sidebar-drawer").click()},children:(0,h.jsx)(ne.Z,{className:"h-5 inline-block w-5"})}),(0,h.jsxs)("li",{className:"mb-2 font-semibold text-xl",children:[(0,h.jsxs)(p.rU,{to:"welcome",children:[(0,h.jsx)("img",{className:"mask mask-squircle w-10",src:"https://images.squarespace-cdn.com/content/v1/60e5c5e28ba0347d102e500b/a77238a6-e4b1-43e8-87bb-8e566e6bc924/ABAM+logo.png?format=1500w",alt:"ABAM"}),"ABAM"]})," "]}),$.map((function(a,n){return(0,h.jsx)("li",{className:"",children:a.submenu?(0,h.jsx)(ae,(0,O.Z)({},a)):(0,h.jsxs)(p.OL,{end:!0,to:a.path,className:function(e){var a=e.isActive;return"".concat(a?"font-semibold  bg-base-200 ":"font-normal")},children:[a.icon," ",a.name,e.pathname===a.path?(0,h.jsx)("span",{className:"absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary ","aria-hidden":"true"}):null]})},n)}))]})]})},se=n(4942),re=n(9283),le=n(3433);var ie=function(){return(0,h.jsx)(h.Fragment,{children:(0,le.Z)(Array(15)).map((function(e,a){return(0,h.jsx)("div",{className:"grid mt-3 card bg-base-200 rounded-box p-3"+(a<5?" bg-blue-100":""),children:a%2===0?"Your sales has increased by 30% yesterday":"Total likes for instagram post - New launch this week,  has crossed 100k "},a)}))})},ce=n(5014).CALENDAR_EVENT_STYLE;var oe=function(e){var a=e.filteredEvents;return(0,h.jsx)(h.Fragment,{children:a.map((function(e,a){return(0,h.jsx)("div",{className:"grid mt-3 card  rounded-box p-3 ".concat(ce[e.theme]||""),children:e.title},a)}))})};var de=function(){var e,a=(0,l.v9)((function(e){return e.rightDrawer})),n=a.isOpen,t=a.bodyType,s=a.extraObject,r=a.header,i=(0,l.I0)(),c=function(e){i((0,m.o8)(e))};return(0,h.jsxs)("div",{className:" fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "+(n?" transition-opacity opacity-100 duration-500 translate-x-0  ":" transition-all delay-500 opacity-0 translate-x-full  "),children:[(0,h.jsx)("section",{className:"w-80 md:w-96  right-0 absolute bg-base-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  "+(n?" translate-x-0 ":" translate-x-full "),children:(0,h.jsxs)("div",{className:"relative  pb-5 flex flex-col  h-full",children:[(0,h.jsxs)("div",{className:"navbar   flex pl-4 pr-4   shadow-md ",children:[(0,h.jsx)("button",{className:"float-left btn btn-circle btn-outline btn-sm",onClick:function(){return c()},children:(0,h.jsx)(re.Z,{className:"h-5 w-5"})}),(0,h.jsx)("span",{className:"ml-2 font-bold text-xl",children:r})]}),(0,h.jsx)("div",{className:"overflow-y-scroll pl-4 pr-4",children:(0,h.jsx)("div",{className:"flex flex-col w-full",children:(e={},(0,se.Z)(e,u.RIGHT_DRAWER_TYPES.NOTIFICATION,(0,h.jsx)(ie,(0,O.Z)((0,O.Z)({},s),{},{closeRightDrawer:c}))),(0,se.Z)(e,u.RIGHT_DRAWER_TYPES.CALENDAR_EVENTS,(0,h.jsx)(oe,(0,O.Z)((0,O.Z)({},s),{},{closeRightDrawer:c}))),(0,se.Z)(e,u.RIGHT_DRAWER_TYPES.DEFAULT,(0,h.jsx)("div",{})),e)[t]})})]})}),(0,h.jsx)("section",{className:" w-screen h-full cursor-pointer ",onClick:function(){return c()}})]})},me=n(5054),ue=n(4221),pe=(n(1138),n(8060)),he=n(5524),xe=n(9697),be=n(190),fe={first_name:"",last_name:"",email:""};var je=function(e){var a=e.closeModal,n=(0,l.I0)(),s=(0,r.useState)(!1),i=(0,t.Z)(s,2),c=(i[0],i[1],(0,r.useState)("")),o=(0,t.Z)(c,2),d=o[0],m=o[1],u=(0,r.useState)(fe),p=(0,t.Z)(u,2),x=p[0],b=p[1],f=function(e){var a=e.updateType,n=e.value;m(""),b((0,O.Z)((0,O.Z)({},x),{},(0,se.Z)({},a,n)))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(he.Z,{type:"text",defaultValue:x.first_name,updateType:"first_name",containerStyle:"mt-4",labelTitle:"First Name",updateFormValue:f}),(0,h.jsx)(he.Z,{type:"text",defaultValue:x.last_name,updateType:"last_name",containerStyle:"mt-4",labelTitle:"Last Name",updateFormValue:f}),(0,h.jsx)(he.Z,{type:"email",defaultValue:x.email,updateType:"email",containerStyle:"mt-4",labelTitle:"Email Id",updateFormValue:f}),(0,h.jsx)(xe.Z,{styleClass:"mt-16",children:d}),(0,h.jsxs)("div",{className:"modal-action",children:[(0,h.jsx)("button",{className:"btn btn-ghost",onClick:function(){return a()},children:"Cancel"}),(0,h.jsx)("button",{className:"btn btn-primary px-6",onClick:function(){return function(){if(""===x.first_name.trim())return m("First Name is required!");if(""===x.email.trim())return m("Email id is required!");var e={id:7,email:x.email,first_name:x.first_name,last_name:x.last_name,avatar:"https://reqres.in/img/faces/1-image.jpg"};n((0,be.Yf)({newLeadObj:e})),n((0,me.c0)({message:"New Lead Added!",status:1})),a()}()},children:"Save"})]})]})},Ne=n(4165),ge=n(5861);var ve=function(e){var a=e.extraObject,n=e.closeModal,t=(0,l.I0)(),s=a.message,r=a.type,i=(a._id,a.index),c=function(){var e=(0,ge.Z)((0,Ne.Z)().mark((function e(){return(0,Ne.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r===u.CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE&&(t((0,be.u9)({index:i})),t((0,me.c0)({message:"Lead Deleted!",status:1}))),n();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:" text-xl mt-8 text-center",children:s}),(0,h.jsxs)("div",{className:"modal-action mt-12",children:[(0,h.jsx)("button",{className:"btn btn-outline   ",onClick:function(){return n()},children:"Cancel"}),(0,h.jsx)("button",{className:"btn btn-primary w-36",onClick:function(){return c()},children:"Yes"})]})]})};var we=function(){var e,a=(0,l.v9)((function(e){return e.modal})),n=a.isOpen,t=a.bodyType,s=a.size,r=a.extraObject,i=a.title,c=(0,l.I0)(),o=function(e){c((0,pe.Mr)(e))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"modal ".concat(n?"modal-open":""),children:(0,h.jsxs)("div",{className:"modal-box  ".concat("lg"===s?"max-w-5xl":""),children:[(0,h.jsx)("button",{className:"btn btn-sm btn-circle absolute right-2 top-2",onClick:function(){return o()},children:"\u2715"}),(0,h.jsx)("h3",{className:"font-semibold text-2xl pb-6 text-center",children:i}),(e={},(0,se.Z)(e,u.MODAL_BODY_TYPES.LEAD_ADD_NEW,(0,h.jsx)(je,{closeModal:o,extraObject:r})),(0,se.Z)(e,u.MODAL_BODY_TYPES.CONFIRMATION,(0,h.jsx)(ve,{extraObject:r,closeModal:o})),(0,se.Z)(e,u.MODAL_BODY_TYPES.DEFAULT,(0,h.jsx)("div",{})),e)[t]]})})})};var Ee=function(){var e=(0,l.I0)(),a=(0,l.v9)((function(e){return e.header})),n=a.newNotificationMessage,t=a.newNotificationStatus;return(0,r.useEffect)((function(){""!==n&&(1===t&&ue.fn.success(n,"Success"),0===t&&ue.fn.error(n,"Error"),e((0,me.DO)()))}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"drawer drawer-mobile",children:[(0,h.jsx)("input",{id:"left-sidebar-drawer",type:"checkbox",className:"drawer-toggle"}),(0,h.jsx)(I,{}),(0,h.jsx)(te,{})]}),(0,h.jsx)(de,{}),(0,h.jsx)(ue.mh,{}),(0,h.jsx)(we,{})]})}},9313:function(e){e.exports=Object.freeze({MODAL_BODY_TYPES:{USER_DETAIL:"USER_DETAIL",LEAD_ADD_NEW:"LEAD_ADD_NEW",CONFIRMATION:"CONFIRMATION",DEFAULT:""},RIGHT_DRAWER_TYPES:{NOTIFICATION:"NOTIFICATION",CALENDAR_EVENTS:"CALENDAR_EVENTS"},CONFIRMATION_MODAL_CLOSE_TYPES:{LEAD_DELETE:"LEAD_DELETE"}})}}]);
//# sourceMappingURL=125.189720c8.chunk.js.map