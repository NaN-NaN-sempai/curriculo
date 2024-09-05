import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Works_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-xvixvu{position:relative;top:1px;left:0px}",
  map: null
};
const Works = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#000000" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<svg width="21" height="13" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-xvixvu"><path d="M17.2167 14L21 14C21.5523 14 22 13.5523 22 13L22 3.68333C22 3.13105 21.5523 2.68333 21 2.68333L17.2167 2.68333L17.2167 14Z"${add_attribute("fill", color, 0)}></path><path d="M5.20002 2.68339H1.41669C0.864403 2.68339 0.416687 3.1311 0.416687 3.68339V13C0.416687 13.5523 0.864402 14 1.41669 14H5.20002V2.68339Z"${add_attribute("fill", color, 0)}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2833 0.933333C16.2833 0.417867 15.8655 0 15.35 0H7.06668C6.55122 0 6.13335 0.417867 6.13335 0.933333V14.0001H16.2833V0.933333ZM15.35 2.56667V1.05H7.06668V2.56667H15.35Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
export {
  Works as default
};
