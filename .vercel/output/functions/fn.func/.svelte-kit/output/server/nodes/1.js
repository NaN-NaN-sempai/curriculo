

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fdadae58.js","_app/immutable/chunks/scheduler.9f63a26f.js","_app/immutable/chunks/index.3c5c5b64.js","_app/immutable/chunks/singletons.47ea68e6.js"];
export const stylesheets = [];
export const fonts = [];