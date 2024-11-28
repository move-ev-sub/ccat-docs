// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CardGrid from '../../components/CardGrid.vue'
import CardLink from '../../components/CardLink.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components)
    app.component("CardLink", CardLink)
    app.component("CardGrid", CardGrid)
  }
} satisfies Theme