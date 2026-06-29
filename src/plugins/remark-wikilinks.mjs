import { visit } from 'unist-util-visit'

const WIKILINK_RE = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g

export function remarkWikilinks(options = {}) {
  const base = options.base ?? ''

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index === null) return
      if (!node.value.includes('[[')) return

      const matches = [...node.value.matchAll(WIKILINK_RE)]
      if (!matches.length) return

      const children = []
      let lastIndex = 0

      for (const match of matches) {
        const [full, slug, label] = match
        const offset = match.index ?? 0

        if (offset > lastIndex) {
          children.push({ type: 'text', value: node.value.slice(lastIndex, offset) })
        }

        children.push({
          type: 'link',
          url: `${base}/wiki/${slug.trim()}/`,
          title: null,
          children: [{ type: 'text', value: (label ?? slug).trim() }],
        })

        lastIndex = offset + full.length
      }

      if (lastIndex < node.value.length) {
        children.push({ type: 'text', value: node.value.slice(lastIndex) })
      }

      parent.children.splice(index, 1, ...children)
      return index + children.length
    })
  }
}
