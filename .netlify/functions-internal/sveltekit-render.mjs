import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/goal.png","assets/selection.png","assets/training.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CkVRwNIX.js","app":"_app/immutable/entry/app.B4MsDYr9.js","imports":["_app/immutable/entry/start.CkVRwNIX.js","_app/immutable/chunks/entry.Bti_ySeV.js","_app/immutable/chunks/scheduler.mo3GjxGz.js","_app/immutable/chunks/index.aL_LTlol.js","_app/immutable/entry/app.B4MsDYr9.js","_app/immutable/chunks/scheduler.mo3GjxGz.js","_app/immutable/chunks/index._rPf_Sl4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
		},
		server_assets: {}
	}
}
})());
