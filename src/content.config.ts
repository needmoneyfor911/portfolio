import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		category: z.enum(['Personal', 'FSAE', 'Work']),
		tags: z.array(z.string()).default([]),
		repoUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		featured: z.boolean().default(false),
		minor: z.boolean().default(false),
	}),
});

export const collections = { projects };
