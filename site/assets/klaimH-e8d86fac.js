import{r as j,u as f,a as N,j as e,d as g}from"./index-85e0cf12.js";import{N as v,T as b,M as k}from"./mainBox-cd6b68eb.js";import{I as n}from"./input-e1590388.js";import{F as P}from"./fab-0ebbc665.js";import{u as y}from"./today-9e8006eb.js";import{u as F}from"./useDispatch-0515d7d3.js";const T=()=>{const[a,t]=j.useState({nPolis:"",insuredName:"",periode:"",polis:"",okupasi:"",dol:"",kronologi:""}),r=F(),d=f(),{username:m}=N(l=>l.username),i=y(),o=new Date;o.setDate(o.getDate()-10);const u=o.toISOString().split("T")[0],s=l=>{const{name:c,value:h}=l.target;t(x=>({...x,[c]:h}))},p=l=>{l.preventDefault(),r(g({insuredName:a.insuredName,nPolis:a.nPolis,type:"Klaim",COB:"Harta Benda",periode:a.periode,polis:a.polis,okupasi:a.okupasi,dol:a.dol,kronologi:a.kronologi,addedDate:i,status:"First Report",agentName:m})),d("/application")};return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(b,{}),e.jsx(k,{content:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-semibold text-xl mb-5",children:"Klaim"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"nPolis",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"No Polis"}),e.jsx(n,{id:"nPolis",name:"nPolis",placeholder:"",value:a.nPolis,onChange:s,additionalStyles:"rounded-xl pl-3"})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"insuredName",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Insured Name"}),e.jsx(n,{id:"insuredName",name:"insuredName",placeholder:"",value:a.insuredName,onChange:s,additionalStyles:"rounded-xl pl-3"})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"polis",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Polis:"}),e.jsxs("select",{id:"polis",name:"polis",value:a.polis,onChange:s,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[e.jsx("option",{value:"",children:"Jenis Polis"}),e.jsx("option",{value:"FLEXAS",children:"FLEXAS"}),e.jsx("option",{value:"PAR",children:"PAR"})]})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"okupasi",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Okupasi:"}),e.jsxs("select",{id:"okupasi",name:"okupasi",value:a.okupasi,onChange:s,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[e.jsx("option",{value:"",children:"Pilih Okupasi"}),e.jsx("option",{value:"Rumah Tinggal",children:"Rumah Tinggal"}),e.jsx("option",{value:"Ruko",children:"Ruko"})]})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"dol",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Tanggal Kejadian:"}),e.jsx("div",{className:"flex justify-between items-center gap-4",children:e.jsx("input",{id:"dol",name:"dol",placeholder:"",value:a.dol,onChange:s,className:"rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold",type:"date",min:u,max:i})}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"kronologi",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kronologi Kejadian"}),e.jsx("textarea",{id:"kronologi",name:"kronologi",placeholder:"",value:a.kronologi,onChange:s,className:"rounded-xl pl-3 w-full h-32 mt-5 p-3 font-Poppins font-semibold",rows:5})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90",children:"Send"})})]})]})}),e.jsx(P,{})]})};export{T as default};