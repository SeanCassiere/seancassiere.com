import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "@/site-config";
import { sortMDByDate } from "@/utils";

export async function GET({ site }: APIContext) {
	const posts = await getCollection("blog", ({ data }) => data.draft !== true);
	const sortedPosts = sortMDByDate(posts);

	return await rss({
		title: `${siteConfig.author}'s blog`,
		description: "Anything and everything I write about.",
		site: String(site),
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/blog/${post.slug}`,
		})),
		customData: "<language>en-gb</language>",
	});
}
