export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "curriculo/_app",
	assets: new Set([".nojekyll","assets/cursor/star.png","assets/cursor/toDay.png","assets/cursor/toNight.png","assets/imgs/icon.png","assets/imgs/tools/designer/Fresco.png","assets/imgs/tools/designer/Illustrator.png","assets/imgs/tools/designer/index.js","assets/imgs/tools/designer/Photoshop.png","assets/imgs/tools/designer/Premiere.png","assets/imgs/tools/designer/XD.png","assets/imgs/tools/developer/Electron.png","assets/imgs/tools/developer/ESLint.png","assets/imgs/tools/developer/Firebase.png","assets/imgs/tools/developer/HTML.png","assets/imgs/tools/developer/JS.png","assets/imgs/tools/developer/Mongo.png","assets/imgs/tools/developer/Next JS.png","assets/imgs/tools/developer/Node JS.png","assets/imgs/tools/developer/SASS.png","assets/imgs/tools/developer/Svelte.png","assets/imgs/tools/developer/Vue.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.721b8a9b.js","app":"_app/immutable/entry/app.b9541b58.js","imports":["_app/immutable/entry/start.721b8a9b.js","_app/immutable/chunks/scheduler.9f63a26f.js","_app/immutable/chunks/singletons.47ea68e6.js","_app/immutable/entry/app.b9541b58.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.9f63a26f.js","_app/immutable/chunks/index.3c5c5b64.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
