import markdownItTaskList from 'markdown-it-task-lists';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ccat Documentation',
  description: 'Documentatation for the consulting contact application tool',
  lang: 'de',
  locales: {
    root: {
      label: 'German',
      lang: 'de',
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTaskList);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Einführung', link: '/' },
      { text: 'Für Anwender', link: '/users' },
      { text: 'Für Entwickler', link: '/developers' },
    ],
    sidebar: [
      {
        text: 'Einführung',
        link: '/',
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Anwender',
        items: [{ text: 'Einführung', link: '/users' }],
      },
      {
        text: 'Entwickler',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/developers' },
          { text: 'Architektur', link: '/developers/architecture' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Suche',
                buttonAriaLabel: 'Suche',
              },
              modal: {
                backButtonTitle: 'Zurück',
                displayDetails: 'Details anzeigen',
                noResultsText: 'Keine Ergebnisse gefunden',
                resetButtonTitle: 'Zurücksetzen',
                footer: {
                  closeText: 'Schließen',
                  navigateText: 'Navigieren',
                  selectText: 'Auswählen',
                  closeKeyAriaLabel: 'Schließen',
                  navigateDownKeyAriaLabel: 'Nach unten navigieren',
                  navigateUpKeyAriaLabel: 'Nach oben navigieren',
                  selectKeyAriaLabel: 'Auswählen',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/move-ev-sub/ccat' },
    ],
  },
});
