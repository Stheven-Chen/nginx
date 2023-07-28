import{j as e,r as o,a as k}from"./index-85e0cf12.js";import{N as y,M as v,T as N}from"./mainBox-cd6b68eb.js";import{C as B,A as P,p as C,a as M,P as T,B as h}from"./barChart-1275012b.js";import"./useDispatch-0515d7d3.js";B.register(P,C,M);const $=a=>e.jsx(T,{data:a.data,options:a.options}),F=()=>{const[a,t]=o.useState({premiumMinggu:"",premiumBulan:"",premiumTahun:"",baruMinggu:"",baruBulan:"",baruTahun:"",polis:"",showPremi:"",showBaru:""}),{nama:b,username:u}=k(r=>r.username),[n,l]=o.useState("week"),g=async()=>{try{const r=await fetch(`https://agentserver.stheven.website/${u}`);if(!r.ok)throw new Error("Failed to fetch data");const s=await r.json();t({premiumMinggu:s[0].data.premi.mingguan,premiumBulan:s[0].data.premi.bulanan,premiumTahun:s[0].data.premi.tahunan,baruMinggu:s[0].data.pengajuan_baru.mingguan,baruBulan:s[0].data.pengajuan_baru.bulanan,baruTahun:s[0].data.pengajuan_baru.tahunan,polis:s[0].data.total_polis,showPremi:s[0].data.premi.mingguan,showBaru:s[0].data.pengajuan_baru.mingguan})}catch(r){console.error(`Ada error ni ${r}`)}};o.useEffect(()=>{g()},[u]);const{premiumMinggu:p,premiumBulan:j,premiumTahun:m,baruMinggu:w,baruBulan:f,baruTahun:c,polis:i,showPremi:d,showBaru:x}=a;return e.jsxs("div",{className:"overflow-hidden",children:[e.jsx(y,{}),e.jsx(v,{content:e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-xl font-semibold font-Poppins",children:["Welcome, ",b]}),e.jsx("div",{className:"flex flex-col mt-5 justify-center items-center",children:c&&e.jsxs("div",{className:"bg-white w-full rounded-xl shadow-lg p-4",children:[e.jsx("span",{className:"text-2xl font-semibold font-Poppins text-dark",children:"Pengajuan Baru"}),e.jsxs("div",{className:"flex justify-between items-center my-2 space-x-4",children:[e.jsx("button",{className:`rounded-full w-16 text-sm text-white ${n==="week"?"bg-sky-700":"bg-sky-500"}`,onClick:()=>{t({...a,showBaru:w}),l("week")},children:"Week"}),e.jsx("button",{className:`rounded-full w-16 text-sm text-white ${n==="month"?"bg-sky-700":"bg-sky-500"}`,onClick:()=>{t({...a,showBaru:f}),l("month")},children:"Month"}),e.jsx("button",{className:`rounded-full w-16 text-sm text-white ${n==="year"?"bg-sky-700":"bg-sky-500"}`,onClick:()=>{t({...a,showBaru:c}),l("year")},children:"Year"})]}),e.jsx("div",{className:"mt-4 mx-auto max-w-lg",children:e.jsx(h,{data:{labels:Object.keys(x),datasets:[{label:"Pengajuan Baru",data:Object.values(x),backgroundColor:"#8BC34A"}]},options:{responsive:!0}})})]})}),e.jsx("div",{className:"flex flex-col mt-5 justify-center items-center",children:m&&e.jsxs("div",{className:"bg-white w-full rounded-xl shadow-lg p-4",children:[e.jsx("span",{className:"text-2xl font-semibold font-Poppins text-dark",children:"Premi"}),e.jsxs("div",{className:"flex justify-between items-center my-2 space-x-4",children:[e.jsx("button",{className:`rounded-full w-16 text-sm text-white ${n==="week"?"bg-sky-700":"bg-sky-500"}`,onClick:()=>{t({...a,showPremi:p}),l("week")},children:"Week"}),e.jsx("button",{className:`rounded-full w-16 text-sm text-white ${n==="month"?"bg-sky-700":"bg-sky-500"}`,onClick:()=>{t({...a,showPremi:j}),l("month")},children:"Month"}),e.jsx("button",{className:`rounded-full w-16 text-sm text-white ${n==="year"?"bg-sky-700":"bg-sky-500"}`,onClick:()=>{t({...a,showPremi:m}),l("year")},children:"Year"})]}),e.jsx("div",{className:"mt-4 mx-auto max-w-lg ",children:e.jsx(h,{data:{labels:Object.keys(d),datasets:[{label:"Premi",data:Object.values(d),backgroundColor:"#E91E63"}]},options:{responsive:!0}})})]})}),e.jsx("div",{className:"flex flex-col mt-5 justify-center items-center",children:i&&e.jsxs("div",{className:"bg-white w-full rounded-xl shadow-lg p-4",children:[e.jsx("span",{className:"text-2xl font-semibold font-Poppins text-dark",children:"Total Polis"}),e.jsx("div",{className:"mt-4 mx-auto max-w-lg",children:e.jsx($,{data:{labels:Object.keys(i),datasets:[{label:"Total Polis",data:Object.values(i),backgroundColor:["#00BCD4","#4CAF50","#3F51B5"]}]},options:{responsive:!0}})})]})})]})}),e.jsx(N,{})]})};export{F as default};