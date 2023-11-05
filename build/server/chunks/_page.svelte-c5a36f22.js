import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-bcb86966.js';

const giveme = "/_app/immutable/assets/giveme.35a4a92c.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-wfwms9_START -->${$$result.title = `<title>Book - Josh Rehab</title>`, ""}<meta property="og:title" content="Book"><meta name="description" content="Welcome to Josh Rehab – the place where we take a lighthearted approach to tackling a serious issue. Here at Josh Rehab, we've combined a unique blend of humor, camaraderie, and genuine support to create a one-of-a-kind parody drug addiction rehab experience."><meta property="og:description" content="Welcome to Josh Rehab – the place where we take a lighthearted approach to tackling a serious issue. Here at Josh Rehab, we've combined a unique blend of humor, camaraderie, and genuine support to create a one-of-a-kind parody drug addiction rehab experience."><!-- HEAD_svelte-wfwms9_END -->`, ""} <img${add_attribute("src", giveme, 0)} alt="Drug exchange"> <h3 class="center">${escape(data.chooseInsult)}</h3> <p class="center" style="margin-top: 2.5rem;margin-bottom: 2.5rem" data-svelte-h="svelte-l0up6">Addiction is actually bad, <a href="https://www.google.com/search?q=Rehab%20near%20me">find a rehab</a> near you</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c5a36f22.js.map
