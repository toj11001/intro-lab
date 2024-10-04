"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[568],{8600:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(4848),i=o(8453);const r={},s="\ud83d\udc50 Optimize the Query",a={id:"optimize/optimize",title:"\ud83d\udc50 Optimize the Query",description:"Now that you know of the patterns that we used in our data schema, you can rewrite the getBook method to retrieve the book information.",source:"@site/docs/75-optimize/3-optimize.mdx",sourceDirName:"75-optimize",slug:"/optimize/optimize",permalink:"/intro-lab/docs/optimize/optimize",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/intro-lab/blob/main/docs/75-optimize/3-optimize.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Patterns Used",permalink:"/intro-lab/docs/optimize/patterns"},next:{title:"Troubleshooting the application",permalink:"/intro-lab/docs/category/troubleshooting-the-application"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-optimize-the-query",children:"\ud83d\udc50 Optimize the Query"}),"\n",(0,n.jsxs)(t.p,{children:["Now that you know of the patterns that we used in our data schema, you can rewrite the ",(0,n.jsx)(t.code,{children:"getBook"})," method to retrieve the book information."]}),"\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.code,{children:"server/src/controllers/books.ts"})," file, and look for the ",(0,n.jsx)(t.code,{children:"getBook"})," method. How could you rewrite this query to be blazing fast, and meet the requirements that we defined for this application?"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["How many calls do you need to do to your database now? Do you still need an aggregation pipeline? Look in the ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/",children:"documentation"})," for the ",(0,n.jsx)(t.code,{children:"findOne"})," method."]})}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Click here to see the answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"    public async getBook(bookId: string): Promise<Book> {\n        /**\n         * Optimized Code\n         */\n        const book = await collections?.books?.findOne({ _id: bookId });\n\n        return book;\n    }\n\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);