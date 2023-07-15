"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[620],{230:function(e,s,n){var a=n(184);s.Z=function(e){var s=e.className,n=e.children;return(0,a.jsx)("p",{className:"text-2xl font-bold  ".concat(s),children:n})}},9895:function(e,s,n){n.d(s,{Z:function(){return m}});n(2791);var a=n(9434),t=n(5524),l=n(230),i=n(3547),r=n(9697),o=n(184);var d=function(e){var s=e.className,n=e.children;return(0,o.jsx)("div",{className:"text-slate-400 ".concat(s),children:n})},c=(n(5054),n(2782));var m=function(){return(0,a.I0)(),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("article",{className:"prose",children:[(0,o.jsx)("h1",{className:"",children:"Components"}),"We have added some global components that are used commonly inside the project.",(0,o.jsx)("h2",{id:"component1",children:"Typography"}),(0,o.jsxs)("div",{children:["These components are present under ",(0,o.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/components/Typography"})," folder. It accepts styleClass as props which can be used to pass additional className for style. It has following components which you can import and use it -",(0,o.jsx)("div",{className:"mockup-code mt-4",children:(0,o.jsx)("pre",{className:"my-0 py-0",children:(0,o.jsx)("code",{children:'import  Title from "../components/Typography/Title"\n  <Title>Your Title here</Title>'})})}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"Title"})," - Use this component to show title",(0,o.jsx)(l.Z,{children:"Title Example"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"Subtitle"})," - Component that shows text smaller than title",(0,o.jsx)(i.Z,{styleClass:"mt-4 mb-6",children:"Subtitle Example"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"ErrorText"})," - Used for showing error messages",(0,o.jsx)(r.Z,{styleClass:"mt-2",children:"Error Text Example"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"HelperText"})," - Used for showing secondary message",(0,o.jsx)(d,{styleClass:"",children:"Helper Text Example"})]})]})]}),(0,o.jsx)("h2",{id:"component2",children:"Form Input"}),(0,o.jsxs)("p",{children:["Many times we have to use form input like text, select one or toogle and in every file we have to handle its state management, here we have added global form component that can be used in any file and state variables can be managed by passing props to it. It is present in ",(0,o.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/components/Input"})," folder."]}),"Ex-",(0,o.jsx)("div",{className:"mockup-code mt-4",children:(0,o.jsx)("pre",{className:"my-0 py-0",children:(0,o.jsx)("code",{children:'const INITIAL_LEAD_OBJ = {\n   first_name : "", \n   last_name : "", \n   email : "" \n  } \n   const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ) \n   const updateFormValue = ({updateType, value}) => {\n    setErrorMessage("") \n    setLeadObj({...leadObj, [updateType] : value})\n   }\n\n<InputText type="text" defaultValue={leadObj.first_name}  \n  updateType="first_name" containerStyle="mt-4"  \n  labelTitle="First Name" updateFormValue={updateFormValue}/>'})})}),(0,o.jsx)(t.Z,{type:"text",defaultValue:"input value",updateType:"first_name",containerStyle:"mt-3",labelTitle:"Label Title",updateFormValue:function(){}}),(0,o.jsx)("p",{children:" This example is from add new lead modal, here we are importing component for creating text input and passing some props to handle its content and state variable. Description of props are as follows - "}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"type"})," - Input type value like number, date, time etc.. "]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"updateType"})," - This is used to update state variable in parent component"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"containerStyle"})," - Style class for container of input, which include label as well"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"labelTitle"})," - Title of the label"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"font-bold",children:"updateFormValue"})," - Function of parent component to update state variable"]})]}),(0,o.jsx)("h2",{id:"component3",children:"Cards"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{href:"https://daisyui.com/components/card/",target:"_blank",children:"Daisy UI"})," already have many cards layout, on top of that we have added one card component that accept title props and shows children inside its body. Also there is a divider between title and body of card. On more provision has been added to add buttons on top left side of card using TopSideButtons props (check leads page)."]}),"Ex -",(0,o.jsx)("div",{className:"mockup-code mt-4",children:(0,o.jsx)("pre",{className:"my-0 py-0",children:(0,o.jsx)("code",{children:'<TitleCard title={"Card Title"}> <h1>Card Body</h1></TitleCard>'})})}),(0,o.jsx)("div",{className:"p-8 bg-base-300 rounded-lg mt-4",children:(0,o.jsxs)(c.Z,{title:"Card Title",children:[" ",(0,o.jsx)("h1",{children:"Card Body"})]})}),(0,o.jsx)("div",{className:"h-24"})]})})}},3379:function(e,s,n){var a=n(1413),t=n(9439),l=n(2791),i=n(184);s.Z=function(e){var s=[{name:"Typography",isActive:1===e.activeIndex},{name:"Form Input",isActive:!1},{name:"Cards",isActive:!1}],n=(0,l.useState)(s),r=(0,t.Z)(n,2),o=r[0],d=r[1];return(0,i.jsxs)("ul",{className:"menu w-56 mt-10 text-sm",children:[(0,i.jsx)("li",{className:"menu-title",children:(0,i.jsx)("span",{className:"",children:"Components"})}),o.map((function(e,s){return(0,i.jsx)("li",{onClick:function(){return e=s,d(o.map((function(s,n){return n===e?(0,a.Z)((0,a.Z)({},s),{},{isActive:!0}):(0,a.Z)((0,a.Z)({},s),{},{isActive:!1})}))),void document.getElementById("component"+(e+1)).scrollIntoView({behavior:"smooth"});var e},className:e.isActive?"bordered":"",children:(0,i.jsx)("a",{children:e.name})},s)}))]})}},9620:function(e,s,n){n.r(s),n.d(s,{default:function(){return c}});var a=n(2791),t=n(9434),l=(n(2782),n(5054)),i=n(3379),r=(n(1536),n(9895)),o=(n(5597),n(7249),n(184));var d=function(){var e=(0,t.I0)();return(0,a.useEffect)((function(){e((0,l.Iw)({title:"Documentation"}))}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"bg-base-100  flex overflow-hidden  rounded-lg",style:{height:"82vh"},children:[(0,o.jsx)("div",{className:"flex-none p-4",children:(0,o.jsx)(i.Z,{activeIndex:1})}),(0,o.jsx)("div",{className:"grow pt-16  overflow-y-scroll",children:(0,o.jsx)(r.Z,{})})]})})};var c=function(){return(0,o.jsx)("div",{className:"",children:(0,o.jsx)(d,{})})}}}]);
//# sourceMappingURL=620.2a1a730d.chunk.js.map