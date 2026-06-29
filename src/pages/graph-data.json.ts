import { getCollection } from 'astro:content'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const entries = await getCollection('wiki')
  const slugSet = new Set(entries.map(e => e.id))

  const nodes = entries.map(e => ({
    id: e.id,
    title: e.data.title ?? e.id,
    type: e.data.type ?? 'other',
    tags: e.data.tags,
    linkCount: e.data.related.filter(r => slugSet.has(r)).length,
  }))

  const edgeSet = new Set<string>()
  const edges: { source: string; target: string }[] = []

  for (const entry of entries) {
    for (const rel of entry.data.related) {
      if (slugSet.has(rel) && rel !== entry.id) {
        const key = [entry.id, rel].sort().join('\0')
        if (!edgeSet.has(key)) {
          edgeSet.add(key)
          edges.push({ source: entry.id, target: rel })
        }
      }
    }
  }

  return new Response(JSON.stringify({ nodes, edges }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
