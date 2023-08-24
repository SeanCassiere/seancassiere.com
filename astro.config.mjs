import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	experimental: {
		viewTransitions: true,
	},
	site: "https://seancassiere.com",
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true,
		},
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutoLinkHeadings,
				{
					behavior: "wrap",
				},
			],
		],
	},
	integrations: [
		mdx(),
		tailwind(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		prefetch(),
	],
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
