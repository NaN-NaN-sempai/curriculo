

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.32b773fa.js","_app/immutable/chunks/scheduler.9f63a26f.js","_app/immutable/chunks/index.3c5c5b64.js"];
export const stylesheets = ["_app/immutable/assets/0.15f11a16.css"];
export const fonts = [];
