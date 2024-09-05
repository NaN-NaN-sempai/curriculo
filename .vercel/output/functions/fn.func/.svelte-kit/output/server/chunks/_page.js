import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component, d as each, f as add_attribute } from "./ssr.js";
const Year_svelte_svelte_type_style_lang = "";
const css$c = {
  code: '@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold.ttf");font-weight:bold}@font-face{font-family:"sansationLight";src:url("$fonts/sansation/Sansation_Light.ttf")}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Regular.ttf");font-weight:normal}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Italic.ttf");font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold_Italic.ttf");font-weight:bold;font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Light_Italic.ttf");font-weight:light;font-style:italic}@font-face{font-family:"moupali";src:url("$fonts/moupali/moupaliLatin.woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-VariableFont_wght.ttf");font-style:normal}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-Italic-VariableFont_wght.ttf");font-style:italic}:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-khl45r.svelte-khl45r:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-khl45r.svelte-khl45r:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}div.svelte-khl45r.svelte-khl45r{border-radius:50px;background:linear-gradient(to right, var(--gradientBegin), var(--gradientEnd));padding:5px;box-shadow:-7px 8px 5px 1px rgba(0, 0, 0, 0.25)}div.svelte-khl45r p.svelte-khl45r{border-radius:50px;color:var(--highlight);background-color:var(--secondary);font-family:sansation;font-size:20px;--amountH:15px;--amountV:4px;padding:var(--amountV) var(--amountH)}@media only screen and (max-width: 700px){div.svelte-khl45r.svelte-khl45r{border-radius:0;width:100%;padding-left:0;padding-right:0;box-shadow:0 8px 5px 1px rgba(0, 0, 0, 0.25)}div.svelte-khl45r p.svelte-khl45r{border-radius:0;text-align:center;--amountV:2px}}',
  map: null
};
const Year = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `<div class="svelte-khl45r"><p class="svelte-khl45r">${slots.default ? slots.default({}) : ``}</p> </div>`;
});
const imports$1 = /* @__PURE__ */ Object.assign({ "./Declaration.svelte": () => import("./Declaration.js"), "./Diferentials.svelte": () => import("./Diferentials.js"), "./Education.svelte": () => import("./Education.js"), "./Email.svelte": () => import("./Email.js"), "./Github.svelte": () => import("./Github.js"), "./Location.svelte": () => import("./Location.js"), "./Phone.svelte": () => import("./Phone.js"), "./Plus.svelte": () => import("./Plus.js"), "./Projects.svelte": () => import("./Projects.js"), "./Website.svelte": () => import("./Website.js"), "./Whatsapp.svelte": () => import("./Whatsapp.js"), "./Works.svelte": () => import("./Works.js") });
const loadModules$1 = async () => {
  const components = {};
  for (const path in imports$1) {
    const name = path.split("/").pop().replace(".svelte", "");
    const imported = await imports$1[path]();
    const component = imported.default;
    components[name] = component;
  }
  return components;
};
const Icons = await loadModules$1();
const ItemIcon_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-8tbqw0.svelte-8tbqw0:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-8tbqw0.svelte-8tbqw0:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.container.svelte-8tbqw0.svelte-8tbqw0{background-color:var(--highlight);border-radius:50%;width:var(--size);height:var(--size);position:relative}.container.svelte-8tbqw0 .icon.svelte-8tbqw0{position:absolute;top:50%;right:50%;transform:translate(50%, -50%)}.container.svelte-8tbqw0 .icon .plus.svelte-8tbqw0{position:absolute;left:12px;top:9px}",
  map: null
};
const ItemIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "29px" } = $$props;
  let { icon = "Email" } = $$props;
  let { color = "#000000" } = $$props;
  let { colorB = "#FFFFFF" } = $$props;
  let { plus = false } = $$props;
  let selectedIcon = Icons[icon];
  if (!selectedIcon)
    selectedIcon = Icons["Email"];
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorB === void 0 && $$bindings.colorB && colorB !== void 0)
    $$bindings.colorB(colorB);
  if ($$props.plus === void 0 && $$bindings.plus && plus !== void 0)
    $$bindings.plus(plus);
  $$result.css.add(css$b);
  return `<div class="container svelte-8tbqw0" style="${"--size: " + escape(size, true)}"><div class="icon svelte-8tbqw0">${validate_component(selectedIcon || missing_component, "svelte:component").$$render($$result, { color, colorB }, {}, {})} ${plus ? `<div class="plus svelte-8tbqw0">${validate_component(Icons["Plus"] || missing_component, "svelte:component").$$render($$result, { color, colorB }, {}, {})}</div>` : ``}</div> </div>`;
});
const ItemIcon$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ItemIcon
}, Symbol.toStringTag, { value: "Module" }));
const primary = "var(--primary)";
const secondary = "var(--secondary)";
const highlight = "var(--highlight)";
const auxiliar = "var(--auxiliar)";
const iconbg = "var(--iconbg)";
const gradientBegin = "var(--gradientBegin)";
const gradientEnd = "var(--gradientEnd)";
const palette = {
  primary,
  secondary,
  highlight,
  auxiliar,
  iconbg,
  gradientBegin,
  gradientEnd
};
const Dot_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-1hjw17u:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-1hjw17u:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}div.svelte-1hjw17u{position:sticky;top:20px;background-color:var(--color);width:9px;height:9px;margin-top:7px;border:5px solid var(--highlight);border-radius:50%;--time:1s;transition:border-radius var(--time), transform var(--time), box-shadow var(--time)}div.svelte-1hjw17u:hover,div.svelte-1hjw17u:active{border-radius:2px;transform:skew(-45deg, 45deg);box-shadow:0 0 5px 5px var(--color)}",
  map: null
};
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FFFFFF" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$a);
  return `<div style="${"--color: " + escape(color, true)}" class="svelte-1hjw17u"></div>`;
});
const Content_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: '@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold.ttf");font-weight:bold}@font-face{font-family:"sansationLight";src:url("$fonts/sansation/Sansation_Light.ttf")}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Regular.ttf");font-weight:normal}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Italic.ttf");font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold_Italic.ttf");font-weight:bold;font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Light_Italic.ttf");font-weight:light;font-style:italic}@font-face{font-family:"moupali";src:url("$fonts/moupali/moupaliLatin.woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-VariableFont_wght.ttf");font-style:normal}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-Italic-VariableFont_wght.ttf");font-style:italic}:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-1we7wqf.svelte-1we7wqf:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-1we7wqf.svelte-1we7wqf:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}:root{--sliderWidth:70px}.content.svelte-1we7wqf.svelte-1we7wqf,.title.svelte-1we7wqf.svelte-1we7wqf{font-family:sansation;color:var(--highlight);text-align:left}.title.svelte-1we7wqf.svelte-1we7wqf{font-size:26px;text-transform:uppercase}.split.svelte-1we7wqf.svelte-1we7wqf{display:flex;justify-content:flex-start;flex-direction:row}.split.head.svelte-1we7wqf.svelte-1we7wqf{flex-wrap:nowrap;align-items:flex-start}.split.head.svelte-1we7wqf .icon.svelte-1we7wqf{margin-top:2px}.split.body.svelte-1we7wqf.svelte-1we7wqf{margin-top:10px;margin-bottom:20px}.split.body.svelte-1we7wqf .content.svelte-1we7wqf{font-weight:normal;font-size:23px;text-align:justify;width:100%}.split.body.svelte-1we7wqf .content .contentHeader.svelte-1we7wqf{margin-bottom:10px;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between}.split.body.svelte-1we7wqf .content .contentHeader .contentTitle.svelte-1we7wqf{font-family:sansation;font-size:20px;font-weight:bold}.split.body.svelte-1we7wqf .content .contentHeader .contentType.svelte-1we7wqf{font-family:sansation;font-size:20px;font-size:17px;text-transform:uppercase;font-family:sansationLight}.split.body.svelte-1we7wqf .content .contentHeader .contentTime.svelte-1we7wqf{font-family:sansation;font-size:20px}.split.body.svelte-1we7wqf .content.list.svelte-1we7wqf{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start}.split.body.svelte-1we7wqf .content.list .listItem.svelte-1we7wqf{background:var(--secondary);margin:5px;font-size:20px;padding:2px 5px;border-radius:7px;box-shadow:-2px 2px 3px 1px rgba(0, 0, 0, 0.4);z-index:1;--time:.2s;transition:box-shadow var(--time), background var(--time);cursor:url("assets/cursor/star.png") 23 23, wait}.split.body.svelte-1we7wqf .content.list .listItem.svelte-1we7wqf:hover{color:var(--primary);background:linear-gradient(to right, var(--gradientBegin), var(--gradientEnd));box-shadow:0px 0px 5px 2px var(--highlight)}.split.svelte-1we7wqf .icon.svelte-1we7wqf{min-width:var(--sliderWidth);display:flex;flex-direction:column;align-items:center;position:relative}.split.svelte-1we7wqf .content.svelte-1we7wqf{align-items:flex-start}.main.svelte-1we7wqf.svelte-1we7wqf{position:relative;margin-bottom:20px}.sliderWrapper.svelte-1we7wqf.svelte-1we7wqf{width:var(--sliderWidth);display:flex;flex-direction:column;align-items:center;position:absolute;height:100%}.sliderWrapper.svelte-1we7wqf .slider.svelte-1we7wqf{width:8px;height:90%;margin-top:15px;background:var(--highlight);position:sticky;top:-18%;border-radius:20px}@media only screen and (max-width: 700px){:root{--sliderWidth:54px}.split.body.svelte-1we7wqf.svelte-1we7wqf{margin-right:20px}.split.body.svelte-1we7wqf .content.svelte-1we7wqf{text-align:left}.split.body.svelte-1we7wqf .content.list .listItem.svelte-1we7wqf{text-align:center}}@media only screen and (max-width: 350px){.title.svelte-1we7wqf.svelte-1we7wqf{font-size:8vw}.content.svelte-1we7wqf.svelte-1we7wqf{font-size:7vw}.contentHeader.svelte-1we7wqf .contentTitle.svelte-1we7wqf{font-size:6vw}.contentHeader.svelte-1we7wqf .contentType.svelte-1we7wqf{font-size:5vw}.contentHeader.svelte-1we7wqf .contentTime.svelte-1we7wqf{font-size:5vw}}',
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "title" } = $$props;
  let { icon = "Declaration" } = $$props;
  let { color = "#000000" } = $$props;
  let { colorB = "#FFFFFF" } = $$props;
  let { plus = false } = $$props;
  let { content = [
    {
      list: false,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum id metus ac fermentum. Nullam non tellus turpis. Proin a lacus rutrum, molestie quam id, imperdiet nunc. Praesent ullamcorper turpis non finibus convallis."
    }
  ] } = $$props;
  let language = "PT";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorB === void 0 && $$bindings.colorB && colorB !== void 0)
    $$bindings.colorB(colorB);
  if ($$props.plus === void 0 && $$bindings.plus && plus !== void 0)
    $$bindings.plus(plus);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$9);
  return `<div class="main svelte-1we7wqf"><div class="sliderWrapper svelte-1we7wqf" data-svelte-h="svelte-yguv7j"><div class="slider svelte-1we7wqf"></div></div> <div class="split head svelte-1we7wqf"><div class="icon svelte-1we7wqf">${validate_component(ItemIcon, "ItemIcon").$$render($$result, { icon, color, colorB, plus }, {}, {})}</div> <div class="content svelte-1we7wqf"><h4 class="title svelte-1we7wqf">${escape(title)}</h4></div></div> ${each(content, (item) => {
    return `<div class="split body svelte-1we7wqf"><div class="icon svelte-1we7wqf">${validate_component(Dot, "Dot").$$render($$result, { color }, {}, {})}</div> <div class="${"content" + escape(item.list ? " list" : "", true) + " svelte-1we7wqf"}">${item.title || item.type || item.time ? `<div class="contentHeader svelte-1we7wqf">${item.title ? `<span class="contentTitle svelte-1we7wqf">${escape(typeof item.title == "string" ? item.title : item.title[language])} </span>` : ``} ${item.type ? `<span class="contentType svelte-1we7wqf">${escape(typeof item.type == "string" ? item.type : item.type[language])} </span>` : ``} ${item.time ? `<span class="contentTime svelte-1we7wqf">${escape(typeof item.time == "string" ? item.time : item.time[language])} </span>` : ``} </div>` : ``} ${item.list ? `${each(item.content[language], (listItem) => {
      return `<span class="listItem svelte-1we7wqf">${escape(listItem)} </span>`;
    })}` : `<!-- HTML_TAG_START -->${"<style>a { color: " + palette.highlight + "; } </style>" + item.content[language]}<!-- HTML_TAG_END -->`}</div> </div>`;
  })} </div>`;
});
const imports = /* @__PURE__ */ Object.assign({ "./ChangelessPanel.svelte": () => import("./ChangelessPanel.js"), "./CompoundItem.svelte": () => import("./CompoundItem.js"), "./Icon.svelte": () => import("./Icon.js"), "./ItemIcon.svelte": () => Promise.resolve().then(() => ItemIcon$1), "./Panel.svelte": () => import("./Panel.js"), "./Title.svelte": () => import("./Title.js") });
const loadModules = async () => {
  const components = {};
  for (const path in imports) {
    const name = path.split("/").pop().replace(".svelte", "");
    const imported = await imports[path]();
    const component = imported.default;
    components[name] = component;
  }
  return components;
};
const Comp = await loadModules();
const Flyout_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-k46aok.svelte-k46aok:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-k46aok.svelte-k46aok:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.itemList.svelte-k46aok.svelte-k46aok{margin-bottom:70px;display:flex;flex-direction:column;align-items:flex-start;flex-wrap:nowrap}.lineHeight.svelte-k46aok.svelte-k46aok{line-height:15px;text-align:left;font-family:moupali;user-select:text}.link.svelte-k46aok.svelte-k46aok{color:var(--highlight)}.name.svelte-k46aok.svelte-k46aok{display:none}@media only screen and (max-width: 700px){.name.svelte-k46aok.svelte-k46aok{display:block;text-align:center;margin-top:20px;margin-bottom:10px}.itemList.svelte-k46aok.svelte-k46aok{flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around;margin-bottom:0}.itemList.svelte-k46aok .item.svelte-k46aok{width:200px}}",
  map: null
};
const Flyout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `${validate_component(Comp.Panel, "Comp.Panel").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Comp.Icon, "Comp.Icon").$$render($$result, { size: "200px" }, {}, {})} <div class="name svelte-k46aok">${validate_component(Comp.Title, "Comp.Title").$$render($$result, { name: true }, {}, {
        default: () => {
          return `Luís Henrique de Almeida`;
        }
      })}</div> ${validate_component(Comp.Title, "Comp.Title").$$render($$result, {}, {}, {
        default: () => {
          return `Contatos:`;
        }
      })} <div class="itemList svelte-k46aok"><a class="link item svelte-k46aok" href="mailto:luis.h.wrk@gmail.com" target="_blank">${validate_component(Comp.CompoundItem, "Comp.CompoundItem").$$render($$result, { icon: "Email", color: palette.secondary }, {}, {
        default: () => {
          return `luis.h.wrk@gmail.com`;
        }
      })}</a> <a class="item svelte-k46aok" href="tel:+5574981395580">${validate_component(Comp.CompoundItem, "Comp.CompoundItem").$$render($$result, { icon: "Phone", color: palette.secondary }, {}, {
        default: () => {
          return `+55 (71) 98883-4482`;
        }
      })}</a> <a class="link item svelte-k46aok" href="https://wa.me/+5574981395580" target="_blank">${validate_component(Comp.CompoundItem, "Comp.CompoundItem").$$render(
        $$result,
        {
          icon: "Whatsapp",
          color: palette.secondary,
          colorB: palette.highlight
        },
        {},
        {
          default: () => {
            return `+55 (74) 98139-5580`;
          }
        }
      )}</a> <a class="link item svelte-k46aok" href="https://luishenrique.site/pt" target="_blank">${validate_component(Comp.CompoundItem, "Comp.CompoundItem").$$render(
        $$result,
        {
          icon: "Website",
          color: palette.secondary
        },
        {},
        {
          default: () => {
            return `luishenrique.site`;
          }
        }
      )}</a> <a class="link item svelte-k46aok" href="https://github.com/NaN-NaN-sempai" target="_blank">${validate_component(Comp.CompoundItem, "Comp.CompoundItem").$$render(
        $$result,
        {
          icon: "Github",
          color: palette.secondary,
          colorB: palette.highlight
        },
        {},
        {
          default: () => {
            return `NaN-NaN-sempai`;
          }
        }
      )}</a> <div class="item svelte-k46aok">${validate_component(Comp.CompoundItem, "Comp.CompoundItem").$$render(
        $$result,
        {
          icon: "Location",
          color: palette.secondary,
          colorB: palette.highlight
        },
        {},
        {
          default: () => {
            return `<div class="lineHeight svelte-k46aok" data-svelte-h="svelte-1y03muv">Sr. do Bonfim,
                    <br class="svelte-k46aok">
                    BA, Brasil</div>`;
          }
        }
      )}</div></div>`;
    }
  })}`;
});
const Intro_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold.ttf");font-weight:bold}@font-face{font-family:"sansationLight";src:url("$fonts/sansation/Sansation_Light.ttf")}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Regular.ttf");font-weight:normal}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Italic.ttf");font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold_Italic.ttf");font-weight:bold;font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Light_Italic.ttf");font-weight:light;font-style:italic}@font-face{font-family:"moupali";src:url("$fonts/moupali/moupaliLatin.woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-VariableFont_wght.ttf");font-style:normal}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-Italic-VariableFont_wght.ttf");font-style:italic}:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-k1bkxk.svelte-k1bkxk:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-k1bkxk.svelte-k1bkxk:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.contentHeader.svelte-k1bkxk.svelte-k1bkxk{margin-bottom:50px;display:flex;align-items:center;justify-content:space-between}.contentHeader.svelte-k1bkxk .title.svelte-k1bkxk{font-family:robotoMono;text-transform:uppercase;color:var(--highlight);text-shadow:-4px 4px 4px rgba(0, 0, 0, 0.25)}.contentHeader.svelte-k1bkxk .year.svelte-k1bkxk{margin-left:20px}.contentHeader.svelte-k1bkxk .year .hidden.svelte-k1bkxk{display:none}.wrapper.svelte-k1bkxk.svelte-k1bkxk{display:flex;justify-content:center;font-size:30px;text-align:right;padding:25px;max-width:1940px}.wrapper.svelte-k1bkxk .right.svelte-k1bkxk{width:100%;max-width:1300px}@media only screen and (max-width: 700px){.contentHeader.svelte-k1bkxk.svelte-k1bkxk{flex-direction:column;margin-bottom:50px}.contentHeader.svelte-k1bkxk .title.svelte-k1bkxk{display:none}.contentHeader.svelte-k1bkxk .year.svelte-k1bkxk{width:100%;margin-left:0}.contentHeader.svelte-k1bkxk .year .hidden.svelte-k1bkxk{display:inline}.wrapper.svelte-k1bkxk.svelte-k1bkxk{padding:0;flex-direction:column;align-items:center}.wrapper.svelte-k1bkxk .flyout.svelte-k1bkxk{margin-bottom:10px}}',
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language = "PT";
  let title = {
    PT: "CURRÍCULO",
    EN: "CURRICULUM",
    FR: "CURRICULUM VITAE"
  };
  let declaration = [
    {
      content: {
        PT: "Estou em busca de uma oportunidade profissional que me proporcione uma jornada de aprendizado e desenvolvimento. Sou flexível, criativo, eficiente,  e me adapto facilmente a novos desafios e mudanças. Estou entusiasmado para aplicar minhas habilidades e embarcar nessa jornada em direção ao sucesso profissional!",
        EN: "I'm seeking a professional opportunity that offers a journey of learning and development. I am flexible, creative, efficient, and easily adapt to new challenges and changes. I'm excited to apply my skills and embark on this journey towards professional success!",
        FR: "Je suis a chercher d'un emploi 😊<br> J'apprends vite et je suis créatif.<br><br>(GPT)<br>Je suis à la recherche d'une opportunité professionnelle qui me permet de vivre une expérience d'apprentissage et de développement. Je suis flexible, créatif, efficace et m'adapte facilement aux nouveaux défis et aux changements. Je suis enthousiaste à l'idée d'appliquer mes compétences et d'entreprendre ce voyage vers le succès professionnel!"
      }
    }
  ];
  let diferentials = [
    {
      list: true,
      content: {
        PT: [
          "Apaixonado por desafios",
          "Rápida aprendizagem",
          "Versátil e adaptável",
          "Sincero e ético",
          "Dedicado à organização",
          "Comprometido com excelência e qualidade",
          "Fluente em inglês",
          "Francês Básico",
          "Colaborativo e eficiente em trabalho em equipe",
          "Criativo e inovador em soluções tecnológicas",
          "Exímio em JavaScript",
          "Forte expertise em Design",
          "Experiência em scripts JSX para aplicativos Adobe",
          "Experiência em desenvolvimento WEB e mobile",
          "Experiência na criação de sistemas",
          "Experiência em desenvolvimento com Arduino"
        ],
        EN: [
          "Passionate about challenges",
          "Quick learner",
          "Versatile and adaptable",
          "Honest and ethical",
          "Dedicated to organization",
          "Committed to excellence and quality",
          "Fluent in English",
          "Basic French",
          "Collaborative and efficient in teamwork",
          "Creative and innovative in technological solutions",
          "Expert in JavaScript",
          "Strong expertise in Design",
          "Experience in JSX scripts for Adobe applications",
          "Experience in WEB and mobile development",
          "Experience in system creation",
          "Experience in Arduino development"
        ],
        FR: [
          "Passionné par les défis",
          "Apprentissage rapide",
          "Polyvalent et adaptable",
          "Sincère et éthique",
          "Dévoué à l'organisation",
          "Engagé pour l'excellence et la qualité",
          "Courant en anglais",
          "Français de base",
          "Collaboratif et efficace en travail d'équipe",
          "Créatif et innovant dans les solutions technologiques",
          "Expert en JavaScript",
          "Forte expertise en Design",
          "Expérience dans les scripts JSX pour les applications Adobe",
          "Expérience en développement WEB et mobile",
          "Expérience dans la création de systèmes",
          "Expérience en développement avec Arduino"
        ]
      }
    }
  ];
  let titleDecraration = {
    PT: "DECLARAÇÃO PROFISSIONAL",
    EN: "PROFESSIONAL STATEMENT",
    FR: "DÉCLARATION PROFESSIONNELLE"
  };
  let titleDiferential = {
    PT: "DIFERENCIAIS",
    EN: "DIFFERENTIATORS",
    FR: "DIFFÉRENTIATEURS"
  };
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-k1bkxk"><div class="flyout svelte-k1bkxk">${validate_component(Flyout, "Flyout").$$render($$result, {}, {}, {})}</div> <div class="right svelte-k1bkxk"><div class="contentHeader svelte-k1bkxk"><div class="year svelte-k1bkxk">${validate_component(Year, "Year").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="hidden svelte-k1bkxk">${escape(title[language])}</span> 2024`;
    }
  })}</div> <h1 class="title svelte-k1bkxk" data-svelte-h="svelte-1ksl1o5">Luís Henrique de Almeida</h1></div> <div class="content svelte-k1bkxk">${validate_component(Content, "Content").$$render(
    $$result,
    {
      title: titleDecraration[language],
      icon: "Declaration",
      color: palette.primary,
      colorB: palette.highlight,
      content: declaration
    },
    {},
    {}
  )} ${validate_component(Content, "Content").$$render(
    $$result,
    {
      title: titleDiferential[language],
      icon: "Diferentials",
      color: palette.primary,
      colorB: palette.highlight,
      content: diferentials
    },
    {},
    {}
  )}</div></div> </div>`;
});
const SplitScreen_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-3jn31a.svelte-3jn31a:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-3jn31a.svelte-3jn31a:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.wrapper.svelte-3jn31a.svelte-3jn31a{width:100%;max-width:1940px;display:flex;flex-direction:row;align-items:stretch;justify-content:center;position:relative}.wrapper.svelte-3jn31a .split.svelte-3jn31a{padding-block:20px;padding-bottom:30px;width:50%;max-width:800px;transition:width 0.2s}.wrapper.svelte-3jn31a .split.svelte-3jn31a:hover{width:70%}.wrapper.svelte-3jn31a .split.first.svelte-3jn31a{background:linear-gradient(to right, var(--secondary) 50%, transparent);border:6px solid var(--highlight);border-right:none;border-bottom:none;margin:-6px;border-radius:50px 0 0 0;-webkit-mask:linear-gradient(white 95%, transparent);mask:linear-gradient(white 95%, transparent)}.wrapper.svelte-3jn31a .split.second.svelte-3jn31a{padding-right:20px}.bar.svelte-3jn31a.svelte-3jn31a{width:80%;height:6px;position:absolute;right:45%;top:-6px;transform:translateX(50%);background:var(--highlight);border-radius:10px}@media only screen and (max-width: 700px){.bar.svelte-3jn31a.svelte-3jn31a{display:none}.wrapper.svelte-3jn31a.svelte-3jn31a{flex-direction:column}.wrapper.svelte-3jn31a .split.svelte-3jn31a{padding:10px;padding-left:0 !important;padding-right:0 !important;border-bottom:6px solid var(--highlight)}.wrapper.svelte-3jn31a .split.svelte-3jn31a,.wrapper.svelte-3jn31a .split.svelte-3jn31a:hover{width:100%}.wrapper.svelte-3jn31a .split.first.svelte-3jn31a{background:linear-gradient(to bottom, var(--secondary) 90%, transparent);padding-top:10px;margin:0;border:none;border-top:6px solid var(--highlight);border-radius:0}}",
  map: null
};
const SplitScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="wrapper svelte-3jn31a"><div class="bar svelte-3jn31a"></div> <div class="split first svelte-3jn31a">${slots.left ? slots.left({}) : ``}</div> <div class="split second svelte-3jn31a">${slots.right ? slots.right({}) : ``}</div> </div>`;
});
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language = "PT";
  let formation = [
    /* CS50 */
    {
      title: "CS50's Web Programming with Python and JavaScript",
      type: {
        PT: "TREINAMENTO ESPECIALIZADO",
        EN: "SPECIALIZED TRAINING",
        FR: "FORMATION SPÉCIALISÉE"
      },
      time: "2023",
      content: {
        PT: "Participei do curso disponibilizado por Harvard, onde aprofundei meus conhecimentos em programação web. Adquiri conceitos essenciais para desenvolver aplicativos web modernos e dinâmicos.",
        EN: "I participated in the course offered by Harvard, where I deepened my knowledge in web programming. I acquired essential concepts for developing modern and dynamic web applications.",
        FR: "J'ai participé au cours proposé par Harvard, où j'ai approfondi mes connaissances en programmation web. J'ai acquis des concepts essentiels pour développer des applications web modernes et dynamiques."
      }
    },
    /* LCI IF */
    {
      title: {
        PT: "Ciências da Computação",
        EN: "Computer Science",
        FR: "Sciences de l'Informatique"
      },
      type: {
        PT: "ENSINO SUPERIOR - INCOMPLETO",
        EN: "UNDERGRADUATE - INCOMPLETE",
        FR: "SUPÉRIEUR - INCOMPLET"
      },
      time: "2019/2023",
      content: {
        PT: "Consolidei ainda mais meu conhecimento de programação e tecnologia durante o curso de Licenciatura no IF Baiano - Sr. do Bonfim, Bahia, Brasil, onde coloquei em prática a maioria dos meus projetos.",
        EN: "I further consolidated my knowledge in programming and technology during the Bachelor's course at IF Baiano - Sr. do Bonfim, Bahia, Brazil, where I put most of my projects into practice.",
        FR: "J'ai encore renforcé mes connaissances en programmation et en technologie pendant le cours de Licence à l'IF Baiano - Sr. do Bonfim, Bahia, Brésil, où j'ai mis en pratique la plupart de mes projets."
      }
    },
    /* SENAI */
    {
      title: {
        PT: "Suporte Técnico em TI",
        EN: "IT Technical Support",
        FR: "Support Technique en TI"
      },
      type: {
        PT: "CURSO PROFISSIONALIZANTE",
        EN: "PROFESSIONAL COURSE",
        FR: "COURS PROFESSIONNALISANT"
      },
      time: "2017/2018",
      content: {
        PT: "Iniciei minha carreira acadêmica com um curso de Suporte Técnico em TI no SENAI Cetind em Lauro de Freitas, Bahia, Brasil, obtendo uma base sólida sobre redes, programação, suporte técnico e outros assuntos, fortalecendo minha paixão pela área.",
        EN: "I began my academic career with a Technical Support course at SENAI Cetind in Lauro de Freitas, Bahia, Brazil, gaining a solid foundation in networks, programming, technical support, and other areas, strengthening my passion for the field.",
        FR: "J'ai commencé ma carrière académique avec un cours de Support Technique au SENAI Cetind à Lauro de Freitas, Bahia, Brésil, obtenant une base solide en réseaux, programmation, support technique et autres domaines, renforçant ma passion pour le secteur."
      }
    }
  ];
  let formationPlus = [
    /* LGPD */
    {
      title: "LGPD",
      type: {
        PT: "CURSO PROFISSIONALIZANTE",
        EN: "PROFESSIONAL COURSE",
        FR: "COURS PROFESSIONNEL"
      },
      time: {
        PT: "4 horas - 2021",
        EN: "4 hours - 2021",
        FR: "4 heures - 2021"
      },
      content: {
        PT: `Fiz um curso online no SENAI São Paulo, Brasil, sobre "Privacidade e Proteção de Dados", aprendendo sobre segurança de informações e regulamentações de privacidade.`,
        EN: `I completed an online course at SENAI São Paulo, Brazil, on "Privacy and Data Protection," learning about information security and privacy regulations.`,
        FR: `J'ai suivi un cours en ligne au SENAI São Paulo, Brésil, sur "La Vie Privée et la Protection des Données", apprenant sur la sécurité des informations et les réglementations en matière de confidentialité.`
      }
    },
    /* LOGICA DE PROGRAMAÇAO */
    {
      title: {
        PT: "Competências Transversais em Lógica de Programação",
        EN: "Transversal Competencies in Programming Logic",
        FR: "Compétences Transversales en Logique de Programmation"
      },
      type: {
        PT: "CURSO PROFISSIONALIZANTE",
        EN: "PROFESSIONAL COURSE",
        FR: "COURS PROFESSIONNEL"
      },
      time: {
        PT: "14 horas - 2017",
        EN: "14 hours - 2017",
        FR: "14 heures - 2017"
      },
      content: {
        PT: "Cursei a distância no SENAI Bahia, Brasil, o curso de Lógica de Programação, adquirindo fundamentos em programação e lógica.",
        EN: "I completed an online Programming Logic course at SENAI Bahia, Brazil, gaining fundamentals in programming and logic.",
        FR: "J'ai suivi à distance le cours de Logique de Programmation au SENAI Bahia, Brésil, acquérant des bases en programmation et en logique."
      }
    },
    /* EMPREENDEDORISMO */
    {
      title: {
        PT: "Competências Transversais em Empreendedorismo",
        EN: "Transversal Competencies in Entrepreneurship",
        FR: "Compétences Transversales en Entrepreneuriat"
      },
      type: {
        PT: "CURSO PROFISSIONALIZANTE",
        EN: "PROFESSIONAL COURSE",
        FR: "COURS PROFESSIONNEL"
      },
      time: {
        PT: "14 horas - 2017",
        EN: "14 hours - 2017",
        FR: "14 heures - 2017"
      },
      content: {
        PT: "Fiz um curso a distância no SENAI Bahia, Brasil, sobre Empreendedorismo, adquirindo habilidades essenciais relacionadas ao empreendedorismo e à gestão de negócios.",
        EN: "I completed an online Entrepreneurship course at SENAI Bahia, Brazil, acquiring essential skills related to entrepreneurship and business management.",
        FR: "J'ai suivi un cours à distance sur l'Entrepreneuriat au SENAI Bahia, Brésil, acquérant des compétences essentielles liées à l'entrepreneuriat et à la gestion des affaires."
      }
    }
  ];
  let education = {
    PT: "FORMAÇÃO ACADÊMICA",
    EN: "ACADEMIC BACKGROUND",
    FR: "FORMATION ACADÉMIQUE"
  };
  let education2 = {
    PT: "CURSOS COMPLEMENTARES",
    EN: "SUPPLEMENTARY COURSES",
    FR: "COURS COMPLÉMENTAIRES"
  };
  return `${validate_component(SplitScreen, "SplitScreen").$$render($$result, {}, {}, {
    right: () => {
      return `<div slot="right">${validate_component(Content, "Content").$$render(
        $$result,
        {
          title: education2[language],
          icon: "Education",
          content: formationPlus,
          color: palette.primary,
          colorB: palette.highlight,
          plus: true
        },
        {},
        {}
      )}</div>`;
    },
    left: () => {
      return `<div slot="left">${validate_component(Content, "Content").$$render(
        $$result,
        {
          title: education[language],
          icon: "Education",
          content: formation,
          color: palette.secondary
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const Scroller_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-1f4vslx.svelte-1f4vslx:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-1f4vslx.svelte-1f4vslx:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.wrapper.svelte-1f4vslx.svelte-1f4vslx{display:flex;justify-content:center;width:100%}.wrapper.svelte-1f4vslx .scroller .innerScroller.svelte-1f4vslx{padding:20px;display:flex;justify-content:center;flex-wrap:wrap;flex-direction:row;gap:10px}.scroller[data-animated=true]{padding-block:15px;max-width:90vw;overflow:hidden;-webkit-mask:linear-gradient(to right, transparent, white 5%, white 95%, transparent);mask:linear-gradient(to right, transparent, white 5%, white 95%, transparent)}.scroller[data-animated=true] .innerScroller.svelte-1f4vslx.svelte-1f4vslx{padding:0;width:fit-content;display:flex;flex-direction:row;flex-wrap:nowrap;gap:10px;animation:svelte-1f4vslx-scroll var(--speed) linear infinite var(--direction, forwards)}@keyframes svelte-1f4vslx-scroll{to{transform:translate(calc(-50% - 5px))}}",
  map: null
};
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { speed = "150s" } = $$props;
  let { direction = "forwards" } = $$props;
  let scroller;
  let scrollerInner;
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  $$result.css.add(css$5);
  return `<div class="wrapper svelte-1f4vslx" style="${"--speed: " + escape(speed, true) + "; --direction: " + escape(direction, true)}"><div class="scroller svelte-1f4vslx"${add_attribute("this", scroller, 0)}><div class="innerScroller svelte-1f4vslx"${add_attribute("this", scrollerInner, 0)}>${slots.default ? slots.default({}) : ``}</div></div> </div>`;
});
const Tools_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".wrapper.svelte-9mec46{width:100%;max-width:1940px}.toolImage.svelte-9mec46{height:60px;filter:drop-shadow(0 10px 2px rgba(0, 0, 0, 0.25));transition:filter 0.5s}.toolImage.svelte-9mec46:hover{filter:drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5))}",
  map: null
};
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let designer = /* @__PURE__ */ Object.assign({ "/src/assets/imgs/tools/designer/Figma.png": () => import("./Figma.js"), "/src/assets/imgs/tools/designer/Photopea.png": () => import("./Photopea.js") });
  let adobe = /* @__PURE__ */ Object.assign({ "/src/assets/imgs/tools/designer/Adobe/Fresco.png": () => import("./Fresco.js"), "/src/assets/imgs/tools/designer/Adobe/Illustrator.png": () => import("./Illustrator.js"), "/src/assets/imgs/tools/designer/Adobe/Photoshop.png": () => import("./Photoshop.js"), "/src/assets/imgs/tools/designer/Adobe/Premiere.png": () => import("./Premiere.js"), "/src/assets/imgs/tools/designer/Adobe/XD.png": () => import("./XD.js") });
  let developer = /* @__PURE__ */ Object.assign({ "/src/assets/imgs/tools/developer/CSS.png": () => import("./CSS.js"), "/src/assets/imgs/tools/developer/ESLint.png": () => import("./ESLint.js"), "/src/assets/imgs/tools/developer/Electron.png": () => import("./Electron.js"), "/src/assets/imgs/tools/developer/Firebase.png": () => import("./Firebase.js"), "/src/assets/imgs/tools/developer/GitHub.png": () => import("./GitHub2.js"), "/src/assets/imgs/tools/developer/HTML.png": () => import("./HTML.js"), "/src/assets/imgs/tools/developer/JS.png": () => import("./JS.js"), "/src/assets/imgs/tools/developer/Mongo.png": () => import("./Mongo.js"), "/src/assets/imgs/tools/developer/MySQL.png": () => import("./MySQL.js"), "/src/assets/imgs/tools/developer/Next JS.png": () => import("./Next JS.js"), "/src/assets/imgs/tools/developer/Node JS.png": () => import("./Node JS.js"), "/src/assets/imgs/tools/developer/Open AI.png": () => import("./Open AI.js"), "/src/assets/imgs/tools/developer/Oracle Apex.png": () => import("./Oracle Apex.js"), "/src/assets/imgs/tools/developer/SASS.png": () => import("./SASS.js"), "/src/assets/imgs/tools/developer/SQLite.png": () => import("./SQLite.js"), "/src/assets/imgs/tools/developer/Stack Overflow.png": () => import("./Stack Overflow.js"), "/src/assets/imgs/tools/developer/Svelte.png": () => import("./Svelte.js"), "/src/assets/imgs/tools/developer/Vercel.svg": () => import("./Vercel.js"), "/src/assets/imgs/tools/developer/Vue.png": () => import("./Vue.js") });
  let tools = { ...adobe, ...designer, ...developer };
  let toolsArray = [];
  for (const path in tools) {
    const name = path.split("/").pop().replace(".png", "").replace(".svg", "");
    toolsArray.push({ path, name });
  }
  $$result.css.add(css$4);
  return `<div class="wrapper svelte-9mec46">${validate_component(Scroller, "Scroller").$$render($$result, {}, {}, {
    default: () => {
      return `${each(toolsArray, (tool) => {
        return `<img class="toolImage svelte-9mec46"${add_attribute("src", tool.path, 0)}${add_attribute("alt", tool.name, 0)}${add_attribute("title", tool.name, 0)}>`;
      })}`;
    }
  })} </div>`;
});
const SingleContent_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-1bqcflm.svelte-1bqcflm:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-1bqcflm.svelte-1bqcflm:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.wrapper.svelte-1bqcflm.svelte-1bqcflm{width:100%;max-width:1940px;display:flex;flex-direction:row;align-items:stretch;justify-content:center}.wrapper.svelte-1bqcflm .container.svelte-1bqcflm{max-width:1600px;margin-right:20px}@media only screen and (max-width: 700px){.wrapper.svelte-1bqcflm .container.svelte-1bqcflm{margin-right:0}}",
  map: null
};
const SingleContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="wrapper svelte-1bqcflm"><div class="container svelte-1bqcflm">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language = "PT";
  let projects = [
    /* PROJETOS */
    {
      title: {
        PT: "Projetos Pessoais",
        EN: "Personal Projects",
        FR: "Projets Personnels"
      },
      type: { PT: "HOBBY", EN: "HOBBY", FR: "LOISIR" },
      time: {
        PT: "PERIODICAMENTE",
        EN: "OCCASIONALLY",
        FR: "PÉRIODIQUEMENT"
      },
      content: {
        PT: `
                Além destes projetos citados aqui, tenho uma ampla variedade de projetos disponíveis no meu perfil do GitHub: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou no meu site pessoal: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Meus projetos demonstram minha paixão por aprender e minha capacidade de criar soluções inovadoras por meio da programação.
                `,
        EN: `
                In addition to the projects mentioned here, I have a wide variety of projects available on my GitHub profile: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> or on my personal website: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. My projects showcase my passion for learning and my ability to create innovative solutions through programming.
                `,
        FR: `
                En plus des projets mentionnés ici, j'ai une grande variété de projets disponibles sur mon profil GitHub : <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou sur mon site personnel : <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Mes projets démontrent ma passion pour l'apprentissage et ma capacité à créer des solutions innovantes grâce à la programmation.
                `
      }
    },
    /* PDEF */
    {
      title: "PDEF",
      type: {
        PT: "PROJETO ACADÊMICO",
        EN: "ACADEMIC PROJECT",
        FR: "PROJET ACADÉMIQUE"
      },
      time: "2021",
      content: {
        PT: `
                Plotador de Funções (PDEF), projeto requisitado durante a matéria de Aplicações Gráficas no IF Baiano. O PDEF é uma plataforma que permite a criação de gráficos usando JavaScript. Esse projeto se tornou uma ferramenta valiosa para visualizar e compreender conceitos gráficos, além de ser uma realização pessoal como programador. Pode ser acessado em: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
                `,
        EN: `
                Plotador de Funções - PDEF (Function Plotter), a project required during the Graphics Applications course at IF Baiano. PDEF is a platform that allows for the creation of graphs using JavaScript. This project has become a valuable tool for visualizing and understanding graphical concepts, as well as a personal achievement as a programmer. It can be accessed at: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
                `,
        FR: `
                Plotador de Funções - PDEF (Traceur de Fonctions), un projet requis lors du cours d'Applications Graphiques à l'IF Baiano. PDEF est une plateforme qui permet la création de graphiques en utilisant JavaScript. Ce projet est devenu un outil précieux pour visualiser et comprendre les concepts graphiques, ainsi qu'une réalisation personnelle en tant que programmeur. Il peut être consulté à l'adresse suivante : <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
                `
      }
    },
    /* LICA APP */
    {
      title: {
        PT: "Aplicativo LiCA App",
        EN: "LiCA App",
        FR: "Application LiCA"
      },
      type: {
        PT: "PROJETO ACADÊMICO",
        EN: "ACADEMIC PROJECT",
        FR: "PROJET ACADÉMIQUE"
      },
      time: "2021",
      content: {
        PT: `
                O LiCA App foi meu primeiro aplicativo para Android, desenvolvido com meu colega Joel Junior como parte da disciplina de Aplicações Gráficas no IF Baiano. Este aplicativo foi projetado para exibir a ementa do Curso de Licenciatura em Ciências Agrárias e esteve disponível no Google Play Store até 14/03/2024. Disponível em: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
                `,
        EN: `
                LiCA App was my first Android application, developed with my colleague Joel Junior as part of the Graphics Applications course at IF Baiano. This app was designed to display the syllabus of the Bachelor's Degree in Agricultural Sciences and was available on the Google Play Store until 03/14/2024. Available at: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
                `,
        FR: `
                LiCA App a été ma première application Android, développée avec mon collègue Joel Junior dans le cadre du cours d'Applications Graphiques à l'IF Baiano. Cette application était conçue pour afficher le programme du Diplôme de Licence en Sciences Agronomiques et était disponible sur le Google Play Store jusqu'au 14/03/2024. Disponible à : <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
                `
      }
    },
    /* OFICINA */
    {
      title: {
        PT: "Oficina Sobre Computação",
        EN: "Computing Workshop",
        FR: "Atelier sur l'Informatique"
      },
      type: {
        PT: "ESTÁGIO ACADÊMICO",
        EN: "ACADEMIC INTERNSHIP",
        FR: "STAGE ACADÉMIQUE"
      },
      time: "2022",
      content: {
        PT: `
                Na matéria Estágio I no IF Baiano, eu e meu colega Marcos Santos organizamos uma oficina online (devido à pandemia de COVID-19) de "Introdução à Computação", abordando tópicos como história da computação, hardware, software, redes, programação, desenvolvimento web e oportunidades de emprego. Algumas informações em: 
                <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
                `,
        EN: `
                In the Internship I course at IF Baiano, my colleague Marcos Santos and I organized an online workshop (due to the COVID-19 pandemic) on "Introduction to Computing," covering topics such as the history of computing, hardware, software, networks, programming, web development, and job opportunities. More information at: 
                <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
                `,
        FR: `
                Dans le cadre du stage I à l'IF Baiano, mon collègue Marcos Santos et moi avons organisé un atelier en ligne (en raison de la pandémie de COVID-19) sur "Introduction à l'Informatique", abordant des sujets tels que l'histoire de l'informatique, le matériel, les logiciels, les réseaux, la programmation, le développement web et les opportunités d'emploi. Plus d'informations sur : 
                <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
                `
      }
    },
    /* ARTIGO */
    {
      title: {
        PT: "Artigo Publicado",
        EN: "Published Article (In Portuguese)",
        FR: "Article Publié (En Portugais)"
      },
      type: {
        PT: "PROJETO ACADÊMICO",
        EN: "ACADEMIC PROJECT",
        FR: "PROJET ACADÉMIQUE"
      },
      time: "2022",
      content: {
        PT: `
                Participei do Programa Institucional de Bolsas de Iniciação à Docência (PIBID) trabalhando com o professor de física Damon Ferreira Farias, e juntamente com colegas, publiquei um artigo no Conedu sobre segurança da informação nas escolas. PDF disponível em: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
                `,
        EN: `
                I participated in the Institutional Program for Teaching Initiation Scholarships (PIBID), working with physics professor Damon Ferreira Farias, and together with colleagues, published an article at Conedu on information security in schools. PDF available at: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
                `,
        FR: `
                J'ai participé au Programme Institutionnel de Bourses d'Initiation à l'Enseignement (PIBID) en travaillant avec le professeur de physique Damon Ferreira Farias, et avec des collègues, j'ai publié un article lors du Conedu sur la sécurité de l'information dans les écoles. PDF disponible sur : <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
                `
      }
    },
    /* WINDOWS APP FOLDER */
    {
      title: {
        PT: "Programa para Computador",
        EN: "Computer Program",
        FR: "Programme pour Ordinateur"
      },
      type: {
        PT: "HOBBY / NECESSIDADE PESSOAL",
        EN: "HOBBY / PERSONAL NEED",
        FR: "LOISIR / BESOIN PERSONNEL"
      },
      time: "2023",
      content: {
        PT: `
                O Windows App Folder é um aplicativo para Windows feito com Electron.js que cria pastas personalizadas para organizar aplicativos ou arquivos, inspirado nas pastas de aplicativos da Samsung no Android. Acesse: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
                `,
        EN: `
                The Windows App Folder is a Windows application created with Electron.js that creates custom folders to organize apps or files, inspired by Samsung's app folders on Android. Access it at: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
                `,
        FR: `
                Le Windows App Folder est une application pour Windows créée avec Electron.js qui permet de créer des dossiers personnalisés pour organiser des applications ou des fichiers, inspirée des dossiers d'applications de Samsung sur Android. Accédez-y à : <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
                `
      }
    },
    /* USEBASE */
    {
      title: "UseBase",
      type: {
        PT: "HOBBY / NECESSIDADE PESSOAL",
        EN: "HOBBY / PERSONAL NEED",
        FR: "LOISIR / BESOIN PERSONNEL"
      },
      time: "2023",
      content: {
        PT: `
                O UseBase é uma biblioteca JavaScript versátil projetada para simplificar o processo de codificação e decodificação de números usando várias bases numéricas. Seja para representar inteiros em binário, hexadecimal, conjuntos de caracteres personalizados ou até emojis, o UseBase oferece uma solução flexível. Disponível em <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
                `,
        EN: `
                UseBase is a versatile JavaScript library designed to simplify the process of encoding and decoding numbers using various numeric bases. Whether representing integers in binary, hexadecimal, custom character sets, or even emojis, UseBase provides a flexible solution. Available at <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
                `,
        FR: `
                UseBase est une bibliothèque JavaScript polyvalente conçue pour simplifier le processus de codage et de décodage de nombres en utilisant différentes bases numériques. Que ce soit pour représenter des entiers en binaire, hexadécimal, ensembles de caractères personnalisés ou même des emojis, UseBase offre une solution flexible. Disponible sur <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
                `
      }
    }
  ];
  let projects2 = [
    /* MPJS */
    {
      title: "MPJS",
      type: {
        PT: "Projeto pessoal",
        EN: "Personal Project",
        FR: "Projet Personnel"
      },
      time: {
        PT: "2023 / EM DESENVOLVIMENTO",
        EN: "2023 / IN DEVELOPMENT",
        FR: "2023 / EN DÉVELOPPEMENT"
      },
      content: {
        PT: `
                Math Plotter Javascript (MPJS) é uma evolução do PDEF, agora com uma interface aprimorada que incorpora o Monaco Editor e uma sintaxe de JavaScript mais avançada para criar gráficos complexos. Disponível em: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
                `,
        EN: `
                Math Plotter Javascript (MPJS) is an evolution of PDEF, now with an enhanced interface that incorporates the Monaco Editor and more advanced JavaScript syntax for creating complex graphs. Available at: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
                `,
        FR: `
                Math Plotter Javascript (MPJS) est une évolution du PDEF, maintenant avec une interface améliorée qui intègre l'éditeur Monaco et une syntaxe JavaScript plus avancée pour créer des graphiques complexes. Disponible sur : <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
                `
      }
    }
  ];
  let titleProjects = {
    PT: "TRABALHOS E PROJETOS",
    EN: "WORK AND PROJECTS",
    FR: "TRAVAUX ET PROJETS"
  };
  let titleProjects2 = {
    PT: "PROJETOS EM DESENVOLVIMENTO",
    EN: "PROJECTS IN DEVELOPMENT",
    FR: "PROJETS EN DÉVELOPPEMENT"
  };
  return `${validate_component(SingleContent, "SingleContent").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render(
        $$result,
        {
          title: titleProjects[language],
          icon: "Projects",
          content: projects,
          color: palette.primary,
          colorB: palette.highlight
        },
        {},
        {}
      )} ${validate_component(Content, "Content").$$render(
        $$result,
        {
          title: titleProjects2[language],
          plus: true,
          icon: "Projects",
          content: projects2,
          color: palette.primary,
          colorB: palette.highlight
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const SecondFlyout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Comp.ChangelessPanel, "Comp.ChangelessPanel").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Comp.Icon, "Comp.Icon").$$render($$result, { size: "160px", flip: true }, {}, {})}`;
    }
  })}`;
});
const Works = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language = "PT";
  let works = [
    /* INOVAR */
    {
      title: {
        PT: "DESIGNER GRÁFICO",
        EN: "GRAPHIC DESIGNER",
        FR: "DESIGNER GRAPHIQUE"
      },
      type: {
        PT: "INFORMAL",
        EN: "INFORMAL",
        FR: "INFORMEL"
      },
      time: "2021/2024",
      content: {
        PT: `
                Trabalhei na Inovar Personalizações como designer, criando designs exclusivos para encadernações e cartonados. Durante esse período, apliquei minhas habilidades de desenvolvedor ao introduzir uma nova metodologia para a criação dos designs e criando Scripts JSX para a Adobe, além de aprimorar o sistema de gestão de clientes e pedidos utilizado pela empresa.
                `,
        EN: `
                I worked at Inovar Personalizações as a graphic designer, creating unique designs for bindings and cardboard products. During this time, I applied my developer skills by introducing a new methodology for creating designs and creating JSX Scripts for Adobe, as well as improving the customer and order management system used by the company.
                `,
        FR: `
                J'ai travaillé chez Inovar Personalizações en tant que designer graphique, créant des designs uniques pour les reliures et les cartons. Pendant cette période, j'ai appliqué mes compétences de développeur en introduisant une nouvelle méthodologie pour la création des designs et en créant des Scripts JSX pour Adobe, ainsi qu'en améliorant le système de gestion des clients et des commandes utilisé par l'entreprise.
                `
      }
    }
  ];
  let worksPlus = [
    /* PESQUISADOR */
    {
      title: {
        PT: "PESQUISADOR",
        EN: "RESEARCHER",
        FR: "CHERCHEUR"
      },
      type: {
        PT: "CONTRATO",
        EN: "CONTRACT",
        FR: "CONTRAT"
      },
      time: {
        PT: "1 mês - 2023",
        EN: "1 month - 2023",
        FR: "1 mois - 2023"
      },
      content: {
        PT: `
                Durante um mês, viajei por várias cidades da Bahia realizando pesquisas em nome da empresa UniFel.
                `,
        EN: `
                For one month, I traveled to several cities in Bahia, Brazil, conducting research on behalf of UniFel.
                `,
        FR: `
                Pendant un mois, j'ai voyagé dans plusieurs villes de Bahia, Bresil, pour effectuer des recherches au nom de l'entreprise UniFel.
                `
      }
    },
    /* ENTREGADOR */
    {
      title: {
        PT: "ENTREGADOR DE PACOTES",
        EN: "PACKAGE DELIVERY DRIVER",
        FR: "LIVREUR DE COLIS"
      },
      type: {
        PT: "CONTRATO",
        EN: "CONTRACT",
        FR: "CONTRAT"
      },
      time: {
        PT: "2 meses - 2023",
        EN: "2 months - 2023",
        FR: "2 mois - 2023"
      },
      content: {
        PT: `
                Trabalhei como entregador na J&T Express, aprimorando habilidades organizacionais, eficiência na gestão de rotas e o cumprimento de metas. Responsável pela entrega pontual dos pacotes, mantive um alto padrão de desempenho.
                `,
        EN: `
                I worked as a delivery driver at J&T Express, improving organizational skills, route management efficiency, and meeting targets. Responsible for the timely delivery of packages, I maintained a high standard of performance.
                `,
        FR: `
                J'ai travaillé comme livreur chez J&T Express, améliorant mes compétences organisationnelles, l'efficacité dans la gestion des itinéraires et le respect des objectifs. Responsable de la livraison ponctuelle des colis, j'ai maintenu un haut niveau de performance.
                `
      }
    },
    /* FREELANCER */
    {
      title: {
        PT: "FREELANCER",
        EN: "FREELANCER",
        FR: "FREELANCE"
      },
      type: {
        PT: "INFORMAL",
        EN: "INFORMAL",
        FR: "INFORMEL"
      },
      time: {
        PT: "PERIODICAMENTE",
        EN: "PERIODICALLY",
        FR: "PÉRIODIQUEMENT"
      },
      content: {
        PT: `
                Atuo como freelancer, oferecendo meus serviços tanto em programação quanto em design. Também dou aulas e tutoriais sobre a área.
                `,
        EN: `
                I work as a freelancer, offering my services in both programming and design. I also provide lessons and tutorials in the field.
                `,
        FR: `
                Je travaille en tant que freelance, offrant mes services en programmation et en design. Je donne également des cours et des tutoriels dans le domaine.
                `
      }
    }
  ];
  let titleWorks = {
    PT: "EXPERIÊNCIA PROFISSIONAL",
    EN: "PROFESSIONAL EXPERIENCE",
    FR: "EXPÉRIENCE PROFESSIONNELLE"
  };
  let titleWorks2 = { PT: "OUTROS", EN: "OTHERS", FR: "AUTRES" };
  return `${validate_component(SplitScreen, "SplitScreen").$$render($$result, {}, {}, {
    right: () => {
      return `<div slot="right">${validate_component(Content, "Content").$$render(
        $$result,
        {
          title: titleWorks2[language],
          icon: "Works",
          content: worksPlus,
          color: palette.primary,
          colorB: palette.highlight,
          plus: true
        },
        {},
        {}
      )}</div>`;
    },
    left: () => {
      return `<div slot="left">${validate_component(Content, "Content").$$render(
        $$result,
        {
          title: titleWorks[language],
          icon: "Works",
          content: works,
          color: palette.secondary
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const DarkModeSwitch_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@charset "UTF-8";:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-xhkig2.svelte-xhkig2:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-xhkig2.svelte-xhkig2:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.switch.svelte-xhkig2.svelte-xhkig2{display:inline-block;position:relative;filter:drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.25))}.switch__input.svelte-xhkig2.svelte-xhkig2{clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}.switch__label.svelte-xhkig2.svelte-xhkig2{position:relative;display:inline-block;width:120px;height:60px;background:var(--secondary);border:5px solid var(--iconbg);border-radius:9999px;cursor:url(assets/cursor/toDay.png), auto;transition:all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96)}.switch__indicator.svelte-xhkig2.svelte-xhkig2{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) translateX(-72%);display:block;width:40px;height:40px;background-color:#7B7B7B;border-radius:9999px;box-shadow:10px 0px 0 0 rgba(0, 0, 0, 0.2) inset;overflow:hidden}.switch__indicator.svelte-xhkig2.svelte-xhkig2::before,.switch__indicator.svelte-xhkig2.svelte-xhkig2::after{position:absolute;content:"";display:block;background-color:#FFFFFF;border-radius:9999px}.switch__indicator.svelte-xhkig2.svelte-xhkig2::before{top:7px;left:7px;width:9px;height:9px;opacity:0.6}.switch__indicator.svelte-xhkig2.svelte-xhkig2::after{bottom:8px;right:6px;width:14px;height:14px;opacity:0.8}.switch__decoration.svelte-xhkig2.svelte-xhkig2{position:absolute;top:65%;left:50%;display:block;width:5px;height:5px;background-color:transparent;border-radius:9999px;animation:svelte-xhkig2-twinkle 0.8s infinite -0.6s}.switch__decoration.svelte-xhkig2.svelte-xhkig2::before,.switch__decoration.svelte-xhkig2.svelte-xhkig2::after{position:absolute;display:block;content:"✦";width:5px;height:5px;background-color:transparent;color:#FFFFFF;border-radius:9999px}.switch__decoration.svelte-xhkig2.svelte-xhkig2::before{top:-35px;left:5px;opacity:1}.switch__decoration.svelte-xhkig2.svelte-xhkig2::after{top:-10px;left:25px}@keyframes svelte-xhkig2-twinkle{50%{opacity:0.2}}.switch__indicator.svelte-xhkig2.svelte-xhkig2,.switch__indicator.svelte-xhkig2.svelte-xhkig2::before,.switch__indicator.svelte-xhkig2.svelte-xhkig2::after{transition:all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96)}.switch__input.svelte-xhkig2:checked+.switch__label.svelte-xhkig2{background-color:#8FB5F5;border-color:var(--highlight);cursor:url(assets/cursor/toNight.png), auto}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__indicator.svelte-xhkig2{background:linear-gradient(#ECD21F, var(--highlight));box-shadow:none;transform:translate(-50%, -50%) translateX(72%)}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__indicator.svelte-xhkig2::before,.switch__input:checked+.switch__label.svelte-xhkig2 .switch__indicator.svelte-xhkig2::after{display:none}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2{top:50%;transform:translate(0%, -50%);animation:svelte-xhkig2-cloud 8s infinite;width:20px;height:20px;opacity:0.8;background:white}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2::before{width:10px;height:10px;top:auto;bottom:0;left:-8px;animation:none}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2::after{width:15px;height:15px;top:auto;bottom:0;left:16px;animation:none}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2,.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2::before,.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2::after{content:"";background:white;border-radius:9999px 9999px 0 0}.switch__input:checked+.switch__label.svelte-xhkig2 .switch__decoration.svelte-xhkig2::after{border-bottom-right-radius:9999px}@keyframes svelte-xhkig2-cloud{0%{transform:translate(0%, -40%)}50%{transform:translate(-100%, -40%)}100%{transform:translate(0%, -40%)}}',
  map: null
};
const DarkModeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked = false;
  $$result.css.add(css$2);
  return `<div class="switch svelte-xhkig2"><input type="checkbox" class="switch__input svelte-xhkig2" id="darkModeSwitch"${add_attribute("checked", checked, 1)}> <label class="switch__label svelte-xhkig2" for="darkModeSwitch" data-svelte-h="svelte-1obgfeh"><span class="switch__indicator svelte-xhkig2"></span> <span class="switch__decoration svelte-xhkig2"></span></label> </div>`;
});
const ChoseLanguageSwitch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-20f4tc.svelte-20f4tc:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-20f4tc.svelte-20f4tc:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.switch.svelte-20f4tc.svelte-20f4tc{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:10px;position:relative;filter:drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.25))}.selectLanguageInput.svelte-20f4tc.svelte-20f4tc{clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}.switch__label.svelte-20f4tc.svelte-20f4tc{position:relative;display:inline-block;width:120px;height:60px;background:var(--secondary);border:5px solid var(--iconbg);border-radius:9999px;cursor:pointer;transition:all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96)}.switch__label.svelte-20f4tc .text.svelte-20f4tc{color:var(--switchTextColor);text-transform:capitalize;font-weight:bold;font-size:large;display:flex;justify-content:center;align-items:center;height:100%}.selectLanguageInput.svelte-20f4tc:checked+.switch__label.svelte-20f4tc{background-color:#8FB5F5;border-color:var(--highlight)}.selectLanguageInput:checked+.switch__label.svelte-20f4tc .text.svelte-20f4tc{color:var(--switchTextColor__checked)}",
  map: null
};
const ChoseLanguageSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="switch svelte-20f4tc"><input type="checkbox" class="selectLanguageInput svelte-20f4tc" id="PT" ${"checked"}> <label class="switch__label svelte-20f4tc" for="PT"><div class="text svelte-20f4tc">${`🗣️`}
            PT</div></label> <input type="checkbox" class="selectLanguageInput svelte-20f4tc" id="EN" ${""}> <label class="switch__label svelte-20f4tc" for="EN"><div class="text svelte-20f4tc">${``}
            EN</div></label> <input type="checkbox" class="selectLanguageInput svelte-20f4tc" id="FR" ${""}> <label class="switch__label svelte-20f4tc" for="FR"><div class="text svelte-20f4tc">${``}
            FR (GPT)</div></label> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold.ttf");font-weight:bold}@font-face{font-family:"sansationLight";src:url("$fonts/sansation/Sansation_Light.ttf")}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Regular.ttf");font-weight:normal}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Italic.ttf");font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Bold_Italic.ttf");font-weight:bold;font-style:italic}@font-face{font-family:"sansation";src:url("$fonts/sansation/Sansation_Light_Italic.ttf");font-weight:light;font-style:italic}@font-face{font-family:"moupali";src:url("$fonts/moupali/moupaliLatin.woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-VariableFont_wght.ttf");font-style:normal}@font-face{font-family:"robotoMono";src:url("$fonts/robotoMono/RobotoMono-Italic-VariableFont_wght.ttf");font-style:italic}:root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-te5ouf.svelte-te5ouf:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-te5ouf.svelte-te5ouf:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}@media only screen and (min-width: 600px){.outer.svelte-te5ouf.svelte-te5ouf{display:flex;flex-direction:column;align-items:center}}.inner.svelte-te5ouf>.svelte-te5ouf{margin-block:40px}.darkmode.svelte-te5ouf.svelte-te5ouf{display:flex;flex-direction:column;align-items:center}.chooselang.svelte-te5ouf.svelte-te5ouf{display:flex;flex-direction:column;align-items:center}.splitter.svelte-te5ouf.svelte-te5ouf{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:30px}.splitter.svelte-te5ouf .hidden.svelte-te5ouf{display:none}@media(max-width: 700px){.splitter.svelte-te5ouf .hidden.svelte-te5ouf{display:block}}.splitter.svelte-te5ouf .name.svelte-te5ouf{font-family:sansation;font-weight:bold;text-transform:uppercase;color:var(--highlight);text-shadow:-4px 4px 4px rgba(0, 0, 0, 0.25);font-size:40px;text-align:center;display:flex;flex-direction:column;gap:10px}@media(max-width: 700px){.splitter.svelte-te5ouf.svelte-te5ouf{flex-direction:column}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language = "PT";
  let title = {
    PT: "CURRÍCULO",
    EN: "CURRICULUM",
    FR: "CURRICULUM VITAE"
  };
  $$result.css.add(css);
  return `<div class="outer svelte-te5ouf"><div class="inner svelte-te5ouf"><div class="darkmode svelte-te5ouf">${validate_component(DarkModeSwitch, "DarkModeSwitch").$$render($$result, {}, {}, {})}</div> <div class="chooselang svelte-te5ouf">${validate_component(ChoseLanguageSwitch, "ChooseLanguageSwitch").$$render($$result, {}, {}, {})}</div> <div class="intro svelte-te5ouf">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}</div> <div class="tools svelte-te5ouf">${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})}</div> <div class="education svelte-te5ouf">${validate_component(Education, "Education").$$render($$result, {}, {}, {})}</div> <div class="splitter svelte-te5ouf"><div class="name svelte-te5ouf" data-svelte-h="svelte-3a6zyl"><span class="svelte-te5ouf">Luís Henrique de Almeida</span></div> <div class="secondFlyout svelte-te5ouf">${validate_component(SecondFlyout, "SecondFlyout").$$render($$result, {}, {}, {})}</div> ${validate_component(Year, "Year").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="hidden svelte-te5ouf">${escape(title[language])}</span> 2024`;
    }
  })}</div> <div class="projects svelte-te5ouf">${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</div> <div class="works svelte-te5ouf">${validate_component(Works, "Works").$$render($$result, {}, {}, {})}</div></div> </div>`;
});
export {
  ItemIcon as I,
  Page as P
};
