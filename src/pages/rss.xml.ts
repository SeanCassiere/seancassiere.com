import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "@/site-config";
import { sortBlogPostsByDate } from "@/utils/content";

export async function GET({ site }: APIContext) {
	const posts = await getCollection("blog", ({ data }) => data.draft !== true);
	const sortedPosts = sortBlogPostsByDate(posts);

	return await rss({
		title: `${siteConfig.author}'s blog`,
		description: "Anything and everything I write about.",
		site: String(site),
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/blog/${post.slug}`,
			author: siteConfig.author,
		})),
		customData: "<language>en-gb</language>",
	});
}
