import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    repoUrl: z.string().optional(),
  }),
});

const musingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'musings': musingsCollection,
};