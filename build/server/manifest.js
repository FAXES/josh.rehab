const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/icons.svg","assets/main.css","favicon.png","logo.png"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.221d97a4.js","app":"_app/immutable/entry/app.b5599e46.js","imports":["_app/immutable/entry/start.221d97a4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.14889f53.js","_app/immutable/chunks/paths.fdc27482.js","_app/immutable/entry/app.b5599e46.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c9ad2b38.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-5abad431.js')),
			__memo(() => import('./chunks/1-50a637d3.js')),
			__memo(() => import('./chunks/2-bd739d19.js')),
			__memo(() => import('./chunks/3-ad9cb6ce.js')),
			__memo(() => import('./chunks/4-ef93659e.js')),
			__memo(() => import('./chunks/5-2cecfab1.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/book",
				pattern: /^\/book\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/whobuiltthis",
				pattern: /^\/whobuiltthis\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
