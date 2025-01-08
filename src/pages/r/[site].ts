import type { APIRoute } from "astro";

export const prerender = false;

const sites = new Map<string, string>([
	["linkedin", "https://www.linkedin.com/in/seancassiere/"],
	["seek", "https://www.seek.co.nz/profile/masssean-cassiere-1p4SpML6SN"],
]);

export const GET: APIRoute = async ({ params, redirect }) => {
	let site = params.site;

	if (!site) {
		return redirect("/404");
	}

	site = site.toLowerCase();

	const url = sites.get(site);

	if (!url) {
		return redirect("/404");
	}

	return new Response(null, {
		status: 302,
		headers: {
			Location: url,
		},
	});
};
