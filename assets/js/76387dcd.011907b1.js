"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[349],{14:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(4848),i=t(8453),r=t(1179);const s={},a="\ud83d\udc50 Configure the Application",c={id:"demo-app/configure",title:"\ud83d\udc50 Configure the Application",description:"Now that your environment is set up, you can configure the application.",source:"@site/docs/50-demo-app/3-configure.mdx",sourceDirName:"50-demo-app",slug:"/demo-app/configure",permalink:"/intro-lab/docs/demo-app/configure",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/50-demo-app/3-configure.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Start the Application",permalink:"/intro-lab/docs/demo-app/start-app"},next:{title:"Schema Validation",permalink:"/intro-lab/docs/category/schema-validation"}},l={},d=[{value:"Reload the client",id:"reload-the-client",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-configure-the-application",children:"\ud83d\udc50 Configure the Application"}),"\n",(0,o.jsx)(n.p,{children:"Now that your environment is set up, you can configure the application."}),"\n",(0,o.jsxs)(n.p,{children:["There should already be a file open in the IDE. If not, look in the file explorer on the left, and open the file ",(0,o.jsx)(n.code,{children:"server/.env"}),". This file contains the configuration for the application."]}),"\n",(0,o.jsx)(n.p,{children:"The file should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'PORT=5000\nDATABASE_URI="mongodb+srv://user:password@serverurl"\nDATABASE_NAME="library"\nSECRET="secret"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You'll need to change the ",(0,o.jsx)(n.code,{children:"DATABASE_URI"})," parameter to match your connection string. That's the same one you used to import the data."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Don't remember how to get your connection string? Check out the ",(0,o.jsx)(n.a,{href:"/docs/mongodb-atlas/get-connection-string",children:"Import Data"})," section."]})}),"\n",(0,o.jsxs)(n.p,{children:["Copy and paste your connection string into the ",(0,o.jsx)(n.code,{children:"DATABASE_URI"})," parameter. The file will automatically save, and the server will restart."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"Terminal"})," tab at the bottom, look for the ",(0,o.jsx)(n.code,{children:"Server is running on port: 5000"})," line. If you see it, you're good to go!"]}),"\n",(0,o.jsx)(r.A,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/1-running.png",alt:"The terminal panel"}),"\n",(0,o.jsx)(n.h2,{id:"reload-the-client",children:"Reload the client"}),"\n",(0,o.jsx)(n.p,{children:"Now that the server is running, you can reload the client to see the application."}),"\n",(0,o.jsx)(n.p,{children:"In the upper right panel, click the refresh icon to reload the client."}),"\n",(0,o.jsx)(r.A,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/2-reload.png",alt:"The refresh icon"}),"\n",(0,o.jsx)(n.p,{children:"Clicking this will reload the client, which should now be connected to the database. You should see the application with some books listed now."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1179:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var o=t(4848);function i(e){const n=e.url||"http://localhost:3000";return(0,o.jsxs)("div",{className:"browser container",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"column left",children:[(0,o.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,o.jsx)("div",{className:"column middle",children:(0,o.jsx)("input",{type:"text",value:n})}),(0,o.jsx)("div",{className:"column right",children:(0,o.jsxs)("div",{style:{float:"right"},children:[(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"})]})})]}),(0,o.jsx)("div",{className:"content",children:e.children})]})}var r=t(8180);function s(e){return(0,o.jsx)(i,{...e,children:(0,o.jsx)("img",{src:(0,r.Ay)(e.src),alt:e.alt})})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);