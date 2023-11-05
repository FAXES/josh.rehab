import { c as create_ssr_component, v as validate_component } from './ssr-bcb86966.js';

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header data-svelte-h="svelte-12mnhr6"><h1 class="title">Josh Rehab</h1> <div class="navbuttons"><a href="/">Home</a> <a href="/book">Book</a> <a href="/about">About</a></div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer data-svelte-h="svelte-jxadxa"><p>This is indeed a website, and not real company. Created by <a href="/whobuiltthis">someone?!?!</a></p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="content">${slots.default ? slots.default({}) : ``}</div> <div>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1337d300.js.map
