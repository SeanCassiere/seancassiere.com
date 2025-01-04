import { defineMiddleware } from "astro:middleware";

const redirects = new Map([
	["linkedin", "https://www.linkedin.com/in/seancassiere/"],
	["seek", "https://www.seek.co.nz/profile/masssean-cassiere-1p4SpML6SN"],
]);

export const onRequest = defineMiddleware((ctx, next) => {
	// if it matches /r/:external, then redirect
	if (ctx.url.pathname.toLowerCase().startsWith("/r/")) {
		const slug = ctx.url.pathname.slice(3);
		const url = redirects.get(slug);
		if (url) {
			return new Response(null, {
				status: 301,
				headers: {
					Location: url,
				},
			});
		}
	}

	return next();
});
