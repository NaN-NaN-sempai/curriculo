import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#000000" } = $$props;
  let { colorB = "#FFFFFF" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorB === void 0 && $$bindings.colorB && colorB !== void 0)
    $$bindings.colorB(colorB);
  return `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1C7.37033 1 6.45455 1.91578 6.45455 3.04546V6.45455H3.04545C1.91578 6.45455 1 7.37033 1 8.5C1 9.62967 1.91578 10.5455 3.04545 10.5455H6.45455V13.9545C6.45455 15.0842 7.37033 16 8.5 16C9.62967 16 10.5455 15.0842 10.5455 13.9545V10.5455H13.9545C15.0842 10.5455 16 9.62967 16 8.5C16 7.37033 15.0842 6.45455 13.9545 6.45455H10.5455V3.04545C10.5455 1.91578 9.62967 1 8.5 1Z"${add_attribute("fill", color, 0)}></path><path d="M6.45455 6.45455V7.45455H7.45455V6.45455H6.45455ZM6.45455 10.5455H7.45455V9.54545H6.45455V10.5455ZM10.5455 10.5455V9.54545H9.54545V10.5455H10.5455ZM10.5455 6.45455H9.54545V7.45455H10.5455V6.45455ZM7.45455 3.04546C7.45455 2.46807 7.92261 2 8.5 2V0C6.81804 0 5.45455 1.3635 5.45455 3.04546H7.45455ZM7.45455 6.45455V3.04546H5.45455V6.45455H7.45455ZM3.04545 7.45455H6.45455V5.45455H3.04545V7.45455ZM2 8.5C2 7.92261 2.46807 7.45455 3.04545 7.45455V5.45455C1.3635 5.45455 0 6.81804 0 8.5H2ZM3.04545 9.54545C2.46807 9.54545 2 9.07739 2 8.5H0C0 10.182 1.3635 11.5455 3.04545 11.5455V9.54545ZM6.45455 9.54545H3.04545V11.5455H6.45455V9.54545ZM7.45455 13.9545V10.5455H5.45455V13.9545H7.45455ZM8.5 15C7.92261 15 7.45455 14.5319 7.45455 13.9545H5.45455C5.45455 15.6365 6.81804 17 8.5 17V15ZM9.54545 13.9545C9.54545 14.5319 9.07739 15 8.5 15V17C10.182 17 11.5455 15.6365 11.5455 13.9545H9.54545ZM9.54545 10.5455V13.9545H11.5455V10.5455H9.54545ZM13.9545 9.54545H10.5455V11.5455H13.9545V9.54545ZM15 8.5C15 9.07739 14.5319 9.54545 13.9545 9.54545V11.5455C15.6365 11.5455 17 10.182 17 8.5H15ZM13.9545 7.45455C14.5319 7.45455 15 7.92261 15 8.5H17C17 6.81804 15.6365 5.45455 13.9545 5.45455V7.45455ZM10.5455 7.45455H13.9545V5.45455H10.5455V7.45455ZM9.54545 3.04545V6.45455H11.5455V3.04545H9.54545ZM8.5 2C9.07739 2 9.54545 2.46807 9.54545 3.04545H11.5455C11.5455 1.3635 10.182 0 8.5 0V2Z"${add_attribute("fill", colorB, 0)}></path></svg>`;
});
export {
  Plus as default
};