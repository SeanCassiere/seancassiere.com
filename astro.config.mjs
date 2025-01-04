import { defineConfig, sharpImageService } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkCodeTitle from "remark-code-title";

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	site: "https://seancassiere.com/",
	image: sharpImageService(),
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true,
		},
		gfm: true,
		remarkPlugins: [remarkCodeTitle],
		rehypePlugins: [
			rehypeSlug,
			rehypeHeadingIds,
			[
				rehypeAutoLinkHeadings,
				{
					behavior: "wrap",
				},
			],
		],
	},
	integrations: [mdx(), tailwind(), sitemap()],
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
