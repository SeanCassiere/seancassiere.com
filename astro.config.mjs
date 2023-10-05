import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";

// https://astro.build/config
export default defineConfig({
	site: "https://seancassiere.com/",
	image: sharpImageService(),
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true,
		},
		remarkPlugins: [
			remarkToc,
			[
				remarkCollapse,
				{
					test: "Table of contents",
				},
			],
		],
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
	integrations: [mdx(), tailwind(), sitemap(), prefetch()],
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
