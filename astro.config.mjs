import { defineConfig } from 'astro/config'
import { remarkWikilinks } from './src/plugins/remark-wikilinks.mjs'

export default defineConfig({
  site: 'https://ainsli9265.github.io',
  base: '/new-fuguux-llmwiki-site',
  markdown: {
    remarkPlugins: [[remarkWikilinks, { base: '/new-fuguux-llmwiki-site' }]],
    shikiConfig: { theme: 'one-dark-pro' },
  },
})
