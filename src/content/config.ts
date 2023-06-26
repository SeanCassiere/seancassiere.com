import { z, defineCollection } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(40).max(160),
		publishDate: z.string().transform((str) => new Date(str)),
		ogImage: z.string().optional(),
		draft: z.boolean().default(false).optional(),
	}),
});

export const collections = { blog };
