import{d as t,r as a,j as e,c as s}from"../assets/styled-components.browser.esm-BMm08tRd.js";const p=t.div`
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  * {
    line-height: normal;
  }
`,l=t.div`
  border: 4px solid;
  border-radius: 0.375rem; /* rounded-md */
  margin-bottom: 20px;
`,c=t.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  @media (min-width: 600px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`,h=t.div`
  text-align: center;
  font-size: 14px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`,x=t.div`
  font-size: 32px;
  @media (min-width: 600px) {
    font-size: 40px;
  }
`,g=t.span`
  font-weight: 700;
`,u=t.div`
  width: 100%;
  max-width: 250px;
  margin-bottom: 10px;
`,r="#e1bd62",m=t.input.attrs({type:"range"})`
  -webkit-appearance: none; /* Removes default styling in WebKit browsers */
  width: 100%;
  height: 8px;
  background: ${r}; /* Default track background */
  border-radius: 4px; /* Rounded track edges */
  outline: none;

  /* Track Styles */
  &::-webkit-slider-runnable-track {
    background: ${r}; /* Track color */
    height: 8px;
    border-radius: 4px; /* Rounded track edges */
  }

  /* Thumb Styles */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${r}; /* Thumb color */
    border-radius: 50%; /* Rounded thumb */
    cursor: pointer;
    margin-top: -6px; /* Adjusts thumb position */
    filter: brightness(90%);
  }

  /* Firefox specific track */
  &::-moz-range-track {
    background: ${r};
    height: 8px;
    border-radius: 4px;
  }

  /* Firefox specific thumb */
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${r};
    border-radius: 50%;
    cursor: pointer;
  }

  /* Internet Explorer/Edge specific track */
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
    height: 8px;
  }

  /* Internet Explorer/Edge specific thumb */
  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: ${r};
    border-radius: 50%;
    cursor: pointer;
  }

  /* Internet Explorer lower track */
  &::-ms-fill-lower {
    background: ${r};
  }

  /* Internet Explorer upper track */
  &::-ms-fill-upper {
    background: ${r};
  }
`,b=t.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`,f=t.label`
  font-size: 16px;
  margin-right: 10px;
  @media (min-width: 600px) {
    font-size: 20px;
  }
`,w=t.input`
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
  text-align: center;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 0px;
  border-bottom-width: 4px;
  border-radius: 2px;
  background-color: transparent;
  width: 100px;
  @media (min-width: 600px) {
    width: 120px;
  }
`,k=252,j=.85;function y(){const[n,o]=a.useState(k),d=Math.round(n*j);return e.jsxs(p,{children:[e.jsx(l,{children:e.jsxs(c,{children:[e.jsx(h,{children:"Your potential weight with GLP-1s:"}),e.jsxs(x,{children:[e.jsx(g,{children:d})," lbs"]})]})}),e.jsx(u,{children:e.jsx(m,{type:"range",min:"120",max:"400",value:n,onChange:i=>o(Number(i.target.value))})}),e.jsxs(b,{children:[e.jsx(f,{htmlFor:"weight",children:"Your current weight:"}),e.jsx(w,{type:"number",value:n,onChange:i=>o(Number(i.target.value)),name:"weight"})]})]})}s(document.getElementById("potential-weight-widget")).render(e.jsx(a.StrictMode,{children:e.jsx(y,{})}));
