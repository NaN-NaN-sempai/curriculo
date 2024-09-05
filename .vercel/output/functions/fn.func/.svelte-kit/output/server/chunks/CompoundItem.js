import { c as create_ssr_component, f as add_attribute, v as validate_component } from "./ssr.js";
import { I as ItemIcon } from "./_page.js";
const CompoundItem_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold.ttf");font-weight:bold}@font-face{font-family:"sansationLight";src:url("$fonts/sansation/Sansation_Light.ttf")}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Regular.ttf");font-weight:normal}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Italic.ttf");font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold_Italic.ttf");font-weight:bold;font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Light_Italic.ttf");font-weight:light;font-style:italic}@font-face{font-family:"moupali";src:url("$fonts/moupali/moupaliLatin.woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-VariableFont_wght.ttf");font-style:normal}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-Italic-VariableFont_wght.ttf");font-style:italic}:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-13eocov.svelte-13eocov:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-13eocov.svelte-13eocov:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.wrapper.svelte-13eocov.svelte-13eocov{display:flex;align-items:center;justify-content:flex-start;margin-bottom:5px;cursor:pointer}.wrapper.svelte-13eocov.svelte-13eocov:active{cursor:progress}.wrapper.svelte-13eocov span.svelte-13eocov{font-family:moupali;font-size:17px;text-transform:uppercase;color:var(--highlight);margin-left:10px;user-select:text}.wrapper.svelte-13eocov span div.svelte-13eocov{font-family:moupali;font-size:17px;text-transform:uppercase}.wrapper.svelte-13eocov span .output.svelte-13eocov{position:absolute}.wrapper.svelte-13eocov span .hidden.svelte-13eocov{opacity:0}',
  map: null
};
const CompoundItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "email" } = $$props;
  let { color = "#000000" } = $$props;
  let { colorB = "#FFFFFF" } = $$props;
  let { plus = false } = $$props;
  let span;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorB === void 0 && $$bindings.colorB && colorB !== void 0)
    $$bindings.colorB(colorB);
  if ($$props.plus === void 0 && $$bindings.plus && plus !== void 0)
    $$bindings.plus(plus);
  $$result.css.add(css);
  return `<div class="wrapper svelte-13eocov"${add_attribute("title", icon, 0)} aria-hidden>${validate_component(ItemIcon, "ItemIcon").$$render($$result, { icon, color, colorB, plus }, {}, {})} <span class="svelte-13eocov"${add_attribute("this", span, 0)}>${`${slots.default ? slots.default({}) : ``}`}</span> </div>`;
});
export {
  CompoundItem as default
};
