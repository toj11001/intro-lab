"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[712],{5996:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(4848),o=i(8453);const r={},d="\ud83d\udc50 Build a compound index following the ESR rule",s={id:"indexing/create-compound-index",title:"\ud83d\udc50 Build a compound index following the ESR rule",description:"In this exercise, you will build a compound index following the ESR rule, compare the query explain plans before and after creating the index, and analyze them.",source:"@site/docs/70-indexing/1-create-compound-index.mdx",sourceDirName:"70-indexing",slug:"/indexing/create-compound-index",permalink:"/intro-lab/docs/indexing/create-compound-index",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/intro-lab/blob/main/docs/70-indexing/1-create-compound-index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Indexing",permalink:"/intro-lab/docs/category/indexing"},next:{title:"Optimize the Application",permalink:"/intro-lab/docs/category/optimize-the-application"}},a={},c=[{value:"Explore the code",id:"explore-the-code",level:2},{value:"\ud83e\uddb8\u200d\u2640\ufe0f Try different indexes",id:"\ufe0f-try-different-indexes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-build-a-compound-index-following-the-esr-rule",children:"\ud83d\udc50 Build a compound index following the ESR rule"}),"\n",(0,t.jsx)(n.p,{children:"In this exercise, you will build a compound index following the ESR rule, compare the query explain plans before and after creating the index, and analyze them."}),"\n",(0,t.jsx)(n.h2,{id:"explore-the-code",children:"Explore the code"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the file ",(0,t.jsx)(n.code,{children:"server/src/indexing/borrowed-books-index.ts"})," ",(0,t.jsx)(n.a,{href:"https://github.com/mongodb-developer/library-management-system/blob/main/server/src/indexing/borrowed-books-index.ts",children:"file"})," in your GitHub Codespace."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Examine the code to build a compound index on the ",(0,t.jsx)(n.code,{children:"borrowedBooks"})," collection."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n* Create the index to support the following query:\n* issueDetails.find({\n*    'user._id': userID,\n*   borrowDate: { $gte: date },\n* }, {\n*  sort: { returnedDate: -1 }\n* })\n*/\nawait collections?.issueDetails?.createIndex({\n    // Equality\n    'user._id': 1,\n    // Sort\n    returnedDate: 1,\n    // Range\n    borrowDate: 1,\n});\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The index is created on the ",(0,t.jsx)(n.code,{children:"borrowedBooks"})," collection to support the query that finds the issue details for a user with a specific ",(0,t.jsx)(n.code,{children:"userID"}),", where the ",(0,t.jsx)(n.code,{children:"borrowDate"})," is greater than or equal to a specific ",(0,t.jsx)(n.code,{children:"date"}),", and sorts the results by ",(0,t.jsx)(n.code,{children:"returnedDate"})," in descending order."]}),(0,t.jsx)(n.p,{children:"This is compound index and it follows the ESR rule: Equality, Sort, and Range. This ensures optimal performance for the query."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the script to create the compound index."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx tsx src/indexing/borrowed-books-index.ts\n"})}),"\n",(0,t.jsx)(n.p,{children:"After a few seconds, you should see the following output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Connecting to MongoDB Atlas...\nConnected!\n\nBEFORE creating the index\n\nWinning plan stage: COLLSCAN\nNo index used\nTotal documents examined: 1284\nNumber of documents returned: 3\n\n-----------------------------\n\nAFTER creating the index\n\nWinning plan stage: IXSCAN\nIndex used: user._id_1_returnedDate_1_borrowDate_1\nTotal documents examined: 3\nNumber of documents returned: 3\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The script uses ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/method/cursor.explain/",children:"explain plans"})," to compare the query plans before and after creating the index."]}),(0,t.jsx)(n.p,{children:"Notice the difference in the winning plan stage and the number of documents examined before and after creating the index."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-try-different-indexes",children:"\ud83e\uddb8\u200d\u2640\ufe0f Try different indexes"}),"\n",(0,t.jsx)(n.p,{children:"Modify the compound index by adding and removing fields, and observe the changes in the query explain plans."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var t=i(6540);const o={},r=t.createContext(o);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);