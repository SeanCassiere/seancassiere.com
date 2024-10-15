import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { APIContext, GetStaticPaths } from "astro";
import { getCollection, getEntry } from "astro:content";
import { Resvg } from "@resvg/resvg-js";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";

import { getFormattedDate } from "@/utils/dates";

import { siteConfig } from "@/site-config";

const AssetDir = resolve("src", "assets");
const RobotoMonoPath = join(AssetDir, "roboto-mono-regular.ttf");
const RobotoMonoBoldPath = join(AssetDir, "roboto-mono-700.ttf");

const RobotoMonoReg = readFileSync(RobotoMonoPath);
const RobotoMonoBold = readFileSync(RobotoMonoBoldPath);

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	fonts: [
		{
			name: "Roboto Mono",
			data: RobotoMonoReg,
			weight: 400,
			style: "normal",
		},
		{
			name: "Roboto Mono",
			data: RobotoMonoBold,
			weight: 700,
			style: "normal",
		},
	],
	graphemeImages: {
		"👋🏼": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f44b-1f3fc.svg",
		"🚀": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f680.svg",
	},
};

const markup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full justify-between bg-[#fffcf5] py-8">
		<div tw="flex flex-col w-full justify-center px-10">
			<p tw="text-3xl mb-5 font-medium text-neutral-600">${pubDate}</p>
			<h1 tw="text-6xl font-bold -mt-1 leading-snug">${title}</h1>
		</div>
		<div
			tw="flex w-full items-center justify-between border-t border-zinc-200 pt-8 px-10"
		>
			<div tw="flex items-center">
				<span tw="w-[30px] h-[30px] bg-black mr-3" />
				<p tw="font-semibold text-3xl">${siteConfig.short_url}</p>
			</div>
			<div tw="text-3xl text-neutral-900">by ${siteConfig.author}</div>
		</div>
	</div>`;

export async function GET({ params: { slug } }: APIContext) {
	const post = await getEntry("blog", slug!);
	const title = post?.data.title ?? siteConfig.title;
	const postDate = getFormattedDate(post?.data.publishDate ?? Date.now(), {
		weekday: "long",
		month: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return new Response(png, { headers: { "Content-Type": "image/png" } });
}

export const getStaticPaths = (async () => {
	const posts = await getCollection("blog");
	return posts
		.filter(({ data }) => !data.ogImage)
		.map(({ slug }) => ({ params: { slug } }));
}) satisfies GetStaticPaths;
