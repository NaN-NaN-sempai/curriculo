import { c as create_ssr_component } from "./ssr.js";
const ChangelessPanel_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-1v59uf:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-1v59uf:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}div.svelte-1v59uf{position:sticky;top:10px;background:var(--secondary);--border:200px;border-radius:300px;width:fit-content;display:flex;flex-direction:column;align-items:center;box-shadow:-15px 19px 5px 1px rgba(0, 0, 0, 0.25);padding:13px}",
  map: null
};
const ChangelessPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-1v59uf">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  ChangelessPanel as default
};
