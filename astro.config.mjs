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

const POSTS_TOC_HEADING = "Table of contents";

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
			[remarkToc, { ordered: true, heading: POSTS_TOC_HEADING }],
			[
				remarkCollapse,
				{
					test: POSTS_TOC_HEADING,
					summary: "View the structure of this article",
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
