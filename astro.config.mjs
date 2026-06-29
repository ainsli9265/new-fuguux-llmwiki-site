import { defineConfig } from 'astro/config'
import { remarkWikilinks } from './src/plugins/remark-wikilinks.mjs'

export default defineConfig({
  site: 'https://ainsli9265.github.io',
  base: '/quartzsite',
  markdown: {
    remarkPlugins: [[remarkWikilinks, { base: '/quartzsite' }]],
    shikiConfig: { theme: 'one-dark-pro' },
  },
})
