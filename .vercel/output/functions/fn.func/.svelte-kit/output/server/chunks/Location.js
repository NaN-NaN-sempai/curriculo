import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Location_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-1ngz7bw{position:relative;top:3px;left:-.3px}",
  map: null
};
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#000000" } = $$props;
  let { colorB = "#FFFFFF" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorB === void 0 && $$bindings.colorB && colorB !== void 0)
    $$bindings.colorB(colorB);
  $$result.css.add(css);
  return `<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1ngz7bw"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.80543 23.0545C6.36223 19.4699 0.505904 14.3814 0.816763 8.84625C1.32534 4.34622 5.15571 0.848785 9.80543 0.848785C14.4552 0.848785 18.2855 4.34622 18.7941 8.84625C19.0085 14.89 13.7175 19.072 9.80543 23.0545Z"${add_attribute("fill", color, 0)}></path><path d="M13.3473 9.95884C13.3473 11.8456 11.8824 13.3751 10.0754 13.3751C8.26835 13.3751 6.80347 11.8456 6.80347 9.95884C6.80347 8.07209 8.26835 6.54257 10.0754 6.54257C11.8824 6.54257 13.3473 8.07209 13.3473 9.95884Z"${add_attribute("fill", colorB, 0)}></path></svg>`;
});
export {
  Location as default
};
