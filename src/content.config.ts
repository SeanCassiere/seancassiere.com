import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(40).max(160),
		publishDate: z.string().transform((str) => new Date(str)),
		ogImage: z.string().optional(),
		draft: z.boolean().default(false).optional(),
	}),
});

export const collections = { blog };
