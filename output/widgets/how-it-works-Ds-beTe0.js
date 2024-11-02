import{R as l,d as a,j as i,r as y,c as x}from"../assets/styled-components.browser.esm-BMm08tRd.js";var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=l.createContext&&l.createContext(g),j=["attr","size","title"];function O(e,t){if(e==null)return{};var r=P(e,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function P(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(n){C(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function C(e,t,r){return t=z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){var t=S(e,"string");return typeof t=="symbol"?t:t+""}function S(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(e){return e&&e.map((t,r)=>l.createElement(t.tag,u({key:r},t.attr),b(t.child)))}function w(e){return t=>l.createElement(E,d({attr:u({},e.attr)},t),b(e.child))}function E(e){var t=r=>{var{attr:n,size:o,title:s}=e,v=O(e,j),f=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,v,{className:c,style:u(u({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),e.children)};return m!==void 0?l.createElement(m.Consumer,null,r=>t(r)):t(g)}function A(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function F(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"},child:[]}]})(e)}const I=a.div`
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
  font-size: 14px;
  width: 100%;
  @media (min-width: 600px) {
    width: 500px;
  }
`,N=a.div`
  margin-bottom: 30px;
`,D=a.div`
  display: flex;
  cursor: pointer;
  //font-size: 16px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`,M=a.div`
  display: flex;
  align-items: center;
`,T=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  min-width: 25px;
  height: 25px;
  background-color: ${e=>e.isOpen?"#FDD17C":"#F1F2F6"};
  border: 1px solid ${e=>e.isOpen?"#CFA90F":"#0000001a"};
  border-radius: 9999px;
  margin-right: 10px;
`,k=a.span`
  font-size: 12px;
  font-weight: 500;
`,_=a.span`
  font-weight: 600;
  text-align: left;
`,q=a.div`
  font-size: 21px;
`,B=a.p`
  margin: 0;
  text-align: left;
`,h=a.span`
  font-weight: 600;
`,H=[{title:"Take the quiz",content:i.jsxs(i.Fragment,{children:[i.jsx(h,{children:"Start with our free, 5-minute quiz"})," to see if you qualify for a Semaglutide prescription. Find out your potential baseline weight and what would that mean for your health.'"]})},{title:"Measure your baseline",content:i.jsxs(i.Fragment,{children:["Get a certified phlebotomist to conduct a ",i.jsx(h,{children:"comprehensive blood test quickly and conveniently at your home or office"}),", included in the price. Unlike other Telehealth companies, our blood test measures 50+ biomarkers to evaluate all areas of health, which is not possible with a fingerprick or a cheek swab."]})},{title:"Start your transformation",content:i.jsxs(i.Fragment,{children:[i.jsx(h,{children:"Meet with a board-certified clinician online to discuss your test results."})," Together, you'll develop a personalized health plan that's effective, enjoyable, and easy to follow. Your clinician will explain your body chemistry, including why fad diets and gym memberships failed to help you lose weight in the past. They will clarify your metabolic type and how you burn fat, helping to adjust your body's natural weight baseline. This plan allows you to integrate your favorite meals and manage your activity level in a way that suits you, empowering you to lose the stubborn weight for good."]})},{title:"Free re-testing, health coaches and more…",content:i.jsx(i.Fragment,{children:"Get your medicine and supplements delivered straight to your door. As a member, get re-tested every 3 months at no additional charge to track your progress and optimize your plan to feel even better. Chat or email with your dedicated health coach to answer your questions based on your specific biochemistry."})}],R=({number:e,title:t,content:r,isOpen:n,onClick:o})=>i.jsxs(N,{children:[i.jsxs(D,{onClick:o,children:[i.jsxs(M,{children:[i.jsx(T,{isOpen:n,children:i.jsx(k,{children:e})}),i.jsx(_,{children:t})]}),i.jsx(q,{children:n?i.jsx(F,{}):i.jsx(A,{})})]}),n&&i.jsx(B,{children:r})]}),W=()=>{const[e,t]=y.useState(-1),r=n=>{t(o=>o===n?-1:n)};return i.jsx(I,{children:H.map((n,o)=>i.jsx(R,{number:o+1,title:n.title,content:n.content,isOpen:e===o,onClick:()=>r(o)},o))})};x(document.getElementById("how-it-works-widget")).render(i.jsx(y.StrictMode,{children:i.jsx(W,{})}));
