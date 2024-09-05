import { c as create_ssr_component, e as escape } from "./ssr.js";
const Icon_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--primary:#FFE2B6;--secondary:#FFD39C;--highlight:#E9773C;--auxiliar:#e6b77e;--iconbg:#F8A162;--gradientBegin:#EA7243;--gradientEnd:#E0881D;--switchTextColor:var(--highlight);--switchTextColor__checked:white}.svelte-1211mve.svelte-1211mve:has(#darkModeSwitch:not(:checked)){--primary:#1c1e27;--secondary:#0f1016;--highlight:#d14f0e;--auxiliar:#e6b77e;--iconbg:#1f2231;--gradientBegin:#aa4219;--gradientEnd:#c76e00;--switchTextColor:var( --highlight);--switchTextColor__checked:white}.svelte-1211mve.svelte-1211mve:export{primary:var(--primary);secondary:var(--secondary);highlight:var(--highlight);auxiliar:var(--auxiliar);iconbg:var(--iconbg);gradientBegin:var(--gradientBegin);gradientEnd:var(--gradientEnd)}.outer.svelte-1211mve.svelte-1211mve{background:linear-gradient(to right, var(--gradientBegin), var(--gradientEnd));padding:10px;margin:auto}.outer.svelte-1211mve.svelte-1211mve,.outer.svelte-1211mve .inner.svelte-1211mve{width:var(--size);height:var(--size);border-radius:50%;overflow:hidden}.outer.svelte-1211mve .inner.svelte-1211mve{background:radial-gradient(circle at 44% 57%, transparent 53%, var(--iconbg) 53.3%);background-size:100% 100%;display:flex;align-items:flex-end;position:relative}.outer.svelte-1211mve .inner .img.svelte-1211mve,.outer.svelte-1211mve .inner .shadow.svelte-1211mve{width:88%;position:absolute;left:-23px}.outer.svelte-1211mve .inner .shadow.svelte-1211mve{left:-43px;bottom:-4px;filter:brightness(0);opacity:0.2}.outer.svelte-1211mve .inner .img.rotate.svelte-1211mve,.outer.svelte-1211mve .inner .shadow.rotate.svelte-1211mve{transform:rotateY(180deg)}.outer.svelte-1211mve .inner .img.rotate.svelte-1211mve{left:50px}.outer.svelte-1211mve .inner .shadow.rotate.svelte-1211mve{left:33px;bottom:-8px}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "300px" } = $$props;
  let { flip = false } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  $$result.css.add(css);
  return `<div class="outer svelte-1211mve" style="${"--size: " + escape(size, true)}"><div class="inner svelte-1211mve"><img class="${"shadow " + escape(flip ? "rotate" : "", true) + " svelte-1211mve"}" src="assets/imgs/icon.png" alt="Sombra da imagem anterior"> <img class="${"img " + escape(flip ? "rotate" : "", true) + " svelte-1211mve"}" src="assets/imgs/icon.png" alt="Icone com imagem do Dev"></div> </div>`;
});
export {
  Icon as default
};
