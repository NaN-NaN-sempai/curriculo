import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Diferentials_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-xvixvu{position:relative;top:1px;left:0px}",
  map: null
};
const Diferentials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#000000" } = $$props;
  let { colorB = "#FFFFFF" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorB === void 0 && $$bindings.colorB && colorB !== void 0)
    $$bindings.colorB(colorB);
  $$result.css.add(css);
  return `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-xvixvu"><path d="M11.8844 1.67616C11.5092 0.965011 10.4908 0.965009 10.1156 1.67616L7.86732 5.93735C7.72262 6.2116 7.4589 6.40321 7.15336 6.45607L2.40598 7.27749C1.6137 7.41457 1.29897 8.38321 1.85936 8.95981L5.21726 12.4148C5.43337 12.6371 5.5341 12.9472 5.48997 13.2541L4.80416 18.0229C4.6897 18.8188 5.51367 19.4175 6.23522 19.0627L10.5588 16.9368C10.837 16.8 11.163 16.8 11.4412 16.9368L15.7648 19.0627C16.4863 19.4175 17.3103 18.8188 17.1958 18.023L16.51 13.2541C16.4659 12.9472 16.5666 12.6371 16.7827 12.4148L20.1406 8.95981C20.701 8.38321 20.3863 7.41457 19.594 7.27749L14.8466 6.45607C14.5411 6.40321 14.2774 6.2116 14.1327 5.93735L11.8844 1.67616Z"${add_attribute("fill", color, 0)}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1451 10.4016C12.1869 10.4016 13.0316 9.55694 13.0316 8.51505C13.0316 7.47316 12.1869 6.62854 11.1451 6.62854C10.1032 6.62854 9.25854 7.47316 9.25854 8.51505C9.25854 9.55694 10.1032 10.4016 11.1451 10.4016ZM11 11.3278C8.83029 11.3278 7.07142 13.0866 7.07141 15.2563H14.9285C14.9285 13.0866 13.1697 11.3278 11 11.3278Z"${add_attribute("fill", colorB, 0)}></path></svg>`;
});
export {
  Diferentials as default
};