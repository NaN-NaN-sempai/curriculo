import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Email_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-cim9ft{position:relative;top:-2px\r\n    }",
  map: null
};
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#000000" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-cim9ft"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7424 0.0838623C18.3238 0.0838623 18.8401 0.355095 19.1649 0.774626L9.73024 8.47522L0.379607 0.914461C0.692248 0.416344 1.25614 0.0838623 1.89982 0.0838623H17.7424ZM0.119751 12.9028V2.2809L6.82908 7.70595L0.133582 13.1198C0.124455 13.0487 0.119751 12.9763 0.119751 12.9028ZM0.73336 14.2114C1.04576 14.4754 1.45362 14.6351 1.89982 14.6351H17.7424C18.1259 14.6351 18.4811 14.5171 18.7717 14.3163L11.6423 8.49727L10.3602 9.5437C9.99759 9.83965 9.46936 9.84084 9.10537 9.54651L7.80397 8.49423L0.73336 14.2114ZM12.6118 7.70595L19.4738 13.3067C19.5056 13.1772 19.5225 13.0419 19.5225 12.9028V2.06543L12.6118 7.70595Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
export {
  Email as default
};