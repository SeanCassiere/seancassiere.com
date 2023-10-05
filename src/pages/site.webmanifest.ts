import { siteConfig } from "@/site-config";

interface SiteManifest {
	name: string;
	short_name: string;
	description: string;
	icons: {
		src: string;
		sizes: string;
		type: string;
	}[];
	id: string;
	start_url: string;
	display: string;
}

export async function GET() {
	const body: SiteManifest = {
		name: siteConfig.siteName,
		short_name: siteConfig.siteName,
		description: siteConfig.description,
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-384x384.png",
				sizes: "384x384",
				type: "image/png",
			},
		],
		id: "/",
		start_url: "/",
		display: "standalone",
	};
	return new Response(JSON.stringify(body));
}
