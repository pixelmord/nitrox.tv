import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const events = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/events" }),

	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		city: z.string().or(z.null()).optional(),
		location: z.string().or(z.null()).optional(),
		cover: z.string().optional(),
		tags: z.string().array().optional(),
		videos: z
			.object({
				name: z.string(),
				src: z.string().or(z.null()),
				thumbnail: z.string().or(z.null()).optional(),
				videoDescription: z.string().or(z.null()).optional(),
			})
			.array()
			.optional(),
		published: z.boolean().optional(),
	}),
});

export const collections = { events };
