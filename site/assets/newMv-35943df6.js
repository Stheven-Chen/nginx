import{r as o,u as K,j as a}from"./index-85e0cf12.js";import{N as w,T as C,M as F}from"./mainBox-cd6b68eb.js";import{F as S}from"./fab-0ebbc665.js";import{I as i}from"./input-e1590388.js";import{p as r}from"./postalCode-32098db5.js";import"./useDispatch-0515d7d3.js";const A=()=>{const[e,c]=o.useState({insuredName:"",nik:"",alamat:"",telp:"",email:"",prov:"",kota:"",kecamatan:"",kelurahan:""}),p=K(),[h,x]=o.useState([]),[v,j]=o.useState([]),[f,k]=o.useState([]),[N,b]=o.useState([]),[u,g]=o.useState(),[d,y]=o.useState({prov:"",kota:"",kecamatan:"",kelurahan:""}),n=t=>{const{name:l,value:m}=t.target;l==="prov"||l==="kota"||l==="kecamatan"||l==="kelurahan"?(c(s=>({...s,[l]:m})),y(s=>({...s,[l]:t.target.selectedOptions[0].textContent}))):c(s=>({...s,[l]:m}))};o.useEffect(()=>{(async()=>{let l="";const m=await r(l);if(x(m),e.prov){l=e.prov;const s=await r(l);j(s)}if(e.kota){l=e.kota;const s=await r(void 0,l);k(s)}if(e.kecamatan){l=e.kecamatan;const s=await r(void 0,void 0,l);b(s)}if(e.kelurahan){l=e.kelurahan;const s=await r(void 0,void 0,void 0,l);g(s[0].postal_code)}})()},[e.prov,e.kota,e.kecamatan,e.kelurahan]);const P=t=>{t.preventDefault(),p(`:${e.nik}`,{state:{insuredName:e.insuredName,NIK:e.nik,address:`${e.alamat} ${d.kelurahan} ${d.kecamatan} ${d.kota} ${d.prov} -${u}`,phone:e.telp,email:e.email,COB:"MV"}})};return a.jsxs(a.Fragment,{children:[a.jsx(w,{}),a.jsx(C,{}),a.jsx(F,{content:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"font-semibold text-xl mb-5",children:"New Application"}),a.jsxs("form",{onSubmit:P,children:[a.jsxs("div",{className:" relative my-5 ",children:[a.jsx("label",{htmlFor:"insuredName",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Insured Name"}),a.jsx(i,{id:"insuredName",name:"insuredName",placeholder:"",value:e.insuredName,onChange:n,additionalStyles:"rounded-xl pl-3"})]}),a.jsxs("div",{className:" relative mb-5 ",children:[a.jsx("label",{htmlFor:"nik",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"NIK"}),a.jsx(i,{id:"nik",name:"nik",placeholder:"",value:e.nik,onChange:n,additionalStyles:"rounded-xl pl-3"})]}),a.jsxs("div",{className:" relative mb-5 ",children:[a.jsx("label",{htmlFor:"alamat",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Alamat"}),a.jsx(i,{id:"alamat",name:"alamat",placeholder:"",value:e.alamat,onChange:n,additionalStyles:"rounded-xl pl-3"})]}),a.jsxs("div",{className:"relative my-5",children:[a.jsx("label",{htmlFor:"prov",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Provinsi:"}),a.jsxs("select",{id:"prov",name:"prov",value:e.prov,onChange:n,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[a.jsx("option",{value:"",children:"Pilih Provinsi"}),h.map((t,l)=>a.jsx("option",{value:t,children:t},l))]})]}),a.jsxs("div",{className:"relative my-5",children:[a.jsx("label",{htmlFor:"kota",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kota:"}),a.jsxs("select",{id:"kota",name:"kota",value:e.kota,onChange:n,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[a.jsx("option",{value:"",children:"Pilih Kota"}),v.map((t,l)=>a.jsx("option",{value:t.city_id,children:t.kota},l))]})]}),a.jsxs("div",{className:"relative my-5",children:[a.jsx("label",{htmlFor:"kecamatan",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kecamatan:"}),a.jsxs("select",{id:"kecamatan",name:"kecamatan",value:e.kecamatan,onChange:n,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[a.jsx("option",{value:"",children:"Pilih Kecamatan"}),f.map((t,l)=>a.jsx("option",{value:t.dis_id,children:t.dis_name},l))]})]}),a.jsxs("div",{className:"relative my-5",children:[a.jsx("label",{htmlFor:"kelurahan",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kelurahan:"}),a.jsxs("select",{id:"kelurahan",name:"kelurahan",value:e.kelurahan,onChange:n,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[a.jsx("option",{value:"",children:"Pilih Kelurahan"}),N.map((t,l)=>a.jsx("option",{value:t.subdis_id,children:t.subdis_name},l))]})]}),a.jsxs("div",{className:"relative my-5",children:[a.jsx("label",{htmlFor:"kodepos",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kode Pos:"}),a.jsx("input",{id:"kodepos",name:"kodepos",placeholder:"",value:u,onChange:n,className:"rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold",type:"text"})]}),a.jsxs("div",{className:" relative mb-5 ",children:[a.jsx("label",{htmlFor:"telp",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"No Telp"}),a.jsx(i,{id:"telp",name:"telp",placeholder:"",value:e.telp,onChange:n,additionalStyles:"rounded-xl pl-3"})]}),a.jsxs("div",{className:" relative mb-5 ",children:[a.jsx("label",{htmlFor:"email",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Email"}),a.jsx(i,{id:"email",name:"email",placeholder:"",value:e.email,onChange:n,additionalStyles:"rounded-xl pl-3"})]}),a.jsx("div",{className:"flex justify-center",children:a.jsx("button",{type:"submit",className:"bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90",children:"Send"})})]})]})}),a.jsx(S,{})]})};export{A as default};
