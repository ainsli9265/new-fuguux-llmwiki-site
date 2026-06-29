import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const wiki = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './fuguux2/wiki',
    generateId: ({ entry }) => {
      const parts = entry.replace(/\\/g, '/').split('/')
      return parts[parts.length - 1].replace(/\.md$/, '')
    },
  }),
  schema: z.object({
    type: z.string().optional(),
    title: z.string().optional(),
    tags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    created: z.coerce.string().optional(),
    updated: z.coerce.string().optional(),
    sources: z.array(z.string()).optional(),
    authors: z.array(z.string()).optional(),
    year: z.number().optional(),
    url: z.string().optional(),
    venue: z.string().optional(),
  }),
})

export const collections = { wiki }
