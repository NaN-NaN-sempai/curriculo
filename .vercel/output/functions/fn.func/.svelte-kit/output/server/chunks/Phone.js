import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Phone_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-2hdm0e{position:relative;top:-2px;left:-.5x}",
  map: null
};
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#000000" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-2hdm0e"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.82997 0.776499C5.53597 0.773662 6.07278 1.37741 6.02466 2.06106C5.94892 3.13689 6.02955 3.91309 6.24666 4.87521C6.36593 5.40372 6.09612 5.94048 5.66736 6.28621C5.16447 6.69172 4.76487 7.19398 4.43838 7.65436C5.40271 9.71035 6.56189 10.907 8.58856 12.0009C9.06463 11.7525 9.57503 11.4457 10.0122 11.0448C10.4174 10.6733 10.9988 10.4778 11.5251 10.6563C12.483 10.9812 13.2673 11.1523 14.3768 11.2087C15.0818 11.2445 15.6348 11.8344 15.547 12.5143L15.2561 14.7666C15.2108 15.1172 15.0023 15.4362 14.6641 15.567C12.6559 16.3439 9.9743 15.6582 8.38035 14.8129L8.37984 14.8136C4.81168 13.058 2.8439 10.2266 1.79719 7.79982C1.78625 7.7813 1.7761 7.76232 1.76678 7.74288C1.00606 6.1567 0.490522 3.23441 1.60139 1.26006C1.77588 0.949935 2.12722 0.787361 2.49128 0.785898L4.82997 0.776499Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
export {
  Phone as default
};