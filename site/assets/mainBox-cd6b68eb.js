import{u as a,j as s,f as i}from"./index-85e0cf12.js";import{u as o}from"./useDispatch-0515d7d3.js";const l="/assets/logout-4b8faa4b.svg",f=()=>{const e=o(),t=a(),n=()=>{e(i()),t("/")};return s.jsx(s.Fragment,{children:s.jsxs("nav",{className:"flex items-center justify-between bg-primary w-full h-14 lg:h-78px font-Poppins px-4 lg:px-2",children:[s.jsx("span",{className:"text-xl font-bold text-white",children:"BCA Insurance"}),s.jsx("img",{className:"w-10 h-7",src:l,alt:"logout",onClick:n})]})})},m="/assets/home-07fe7d54.svg",r="/assets/application-63c01214.svg",x="/assets/commision-fba2d1a2.svg",g=()=>{const e=a(),t=()=>{e("/home")},n=()=>{e("/application")},c=()=>{e("/commision")};return s.jsxs("div",{className:"flex items-center justify-between  fixed bottom-0 left-0 w-full z-50 bg-primary h-14 p-5 font-Poppins rounded-t-30px",children:[s.jsxs("div",{onClick:t,className:"flex items-center justify-center flex-col w-20",children:[s.jsx("img",{className:"w-5 h-5",src:m,alt:"home"}),s.jsx("span",{className:"text-white",children:"Home"})]}),s.jsxs("div",{onClick:n,className:"flex items-center justify-center flex-col w-20",children:[s.jsx("img",{className:"w-5 h-5",src:r,alt:"application"}),s.jsx("span",{className:"text-white",children:"Application"})]}),s.jsxs("div",{onClick:c,className:"flex items-center justify-center flex-col w-20",children:[s.jsx("img",{className:"w-5 h-5",src:x,alt:"commision"}),s.jsx("span",{className:"text-white",children:"Commision"})]})]})},d=e=>s.jsx("main",{className:"font-Poppins rounded-30px px-8 py-6 bg-login mb-16 min-h-screen  w-screen",children:e.content});export{d as M,f as N,g as T};