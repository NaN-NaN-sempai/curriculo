import { c as create_ssr_component, e as escape, h as null_to_empty } from "./ssr.js";
const Title_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold.ttf");font-weight:bold}@font-face{font-family:"sansationLight";src:url("$fonts/sansation/Sansation_Light.ttf")}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Regular.ttf");font-weight:normal}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Italic.ttf");font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold_Italic.ttf");font-weight:bold;font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Light_Italic.ttf");font-weight:light;font-style:italic}@font-face{font-family:"moupali";src:url("$fonts/moupali/moupaliLatin.woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-VariableFont_wght.ttf");font-style:normal}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-Italic-VariableFont_wght.ttf");font-style:italic}:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-yggsbp:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-yggsbp:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}span.svelte-yggsbp{font-size:40px;color:var(--highlight);text-transform:uppercase;font-family:moupali}span.name.svelte-yggsbp{font-family:sansation;text-align:center;font-weight:bold}',
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<span class="${escape(null_to_empty(name ? "name" : ""), true) + " svelte-yggsbp"}">${slots.default ? slots.default({}) : ``}</span>`;
});
export {
  Title as default
};
