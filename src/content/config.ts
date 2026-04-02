import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    description: z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:  z.string(),
    year:   z.number(),
    order:  z.number().default(99),
    url:    z.string().url().optional(),
    source: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
