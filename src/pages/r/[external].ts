import type { APIContext } from "astro";

const redirects = new Map([
	["linkedin", "https://www.linkedin.com/in/seancassiere/"],
	["seek", "https://www.seek.co.nz/profile/masssean-cassiere-1p4SpML6SN"],
]);

export async function getStaticPaths() {
	return [...redirects.keys()].map((slug) => ({ params: { external: slug } }));
}

export async function GET({ params }: APIContext) {
	let slug = params.external;

	// if no slug or
	if (!slug) {
		return new Response("Not found", { status: 404 });
	}

	slug = slug.toLowerCase();

	// if slug is not in map, return 404
	if (!redirects.has(slug)) {
		return new Response("Not found", { status: 404 });
	}

	// if slug is in map, redirect to the external URL
	return Response.redirect(redirects.get(slug)!, 301);
}
