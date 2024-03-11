import { defineCollection, z } from 'astro:content';

const events = defineCollection({
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
      })
      .array()
      .optional(),
  }),
});

export const collections = { events };
