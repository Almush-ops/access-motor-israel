import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.enum(['sport', 'utility']),
    categoryName: z.string(),
    categorySlug: z.string(),
    engine: z.string(),
    seats: z.number(),
    image: z.string().optional(),
    badge: z.string().optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    features: z.array(z.string()),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = { models, blog };
