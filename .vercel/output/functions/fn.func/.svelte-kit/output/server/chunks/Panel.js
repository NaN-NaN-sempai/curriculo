import { c as create_ssr_component } from "./ssr.js";
const Panel_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-jr1dgi:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-jr1dgi:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}div.svelte-jr1dgi{position:sticky;top:10px;background:var(--secondary);--border:200px;border-radius:300px;width:fit-content;display:flex;flex-direction:column;align-items:center;box-shadow:-15px 19px 5px 1px rgba(0, 0, 0, 0.25);padding:13px}@media only screen and (max-width: 700px){div.svelte-jr1dgi{background:linear-gradient(to top, var(--secondary) 10%, transparent);box-shadow:0 10px 7px 2px rgba(0, 0, 0, 0.25);margin:30px;--border:500px;--borderB:80px;border-radius:var(--border) var(--border) var(--borderB) var(--borderB)}}",
  map: null
};
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-jr1dgi">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Panel as default
};