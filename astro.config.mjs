import { defineConfig, sharpImageService } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkCodeTitle from "remark-code-title";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";

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
		gfm: true,
		remarkPlugins: [
			[remarkToc, { ordered: true, heading: POSTS_TOC_HEADING }],
			[
				remarkCollapse,
				{
					test: POSTS_TOC_HEADING,
					summary: "View the structure of this article",
				},
			],
			remarkCodeTitle,
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
