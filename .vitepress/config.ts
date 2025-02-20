import { DefaultTheme, defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: 'CCAT Documentation',
  description: 'Documentation of the ConsultingContact Application Tool',
  lang: 'de-DE',
  themeConfig: {
    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/move-ev-sub/ccat' },
    ],

    sidebar: {
      '/users': { base: '/users', items: sidebarUsers() },
      '/developers': { base: '/developers', items: sidebarDevelopers() },
    },

    editLink: {
      pattern: 'https://github.com/move-ev-sub/ccat-docs/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Anwender',
      link: '/users/introduction/',
      activeMatch: '/users/',
    },
    {
      text: 'Entwickler',
      link: '/developers/introduction/',
      activeMatch: '/developers/',
    },
  ];
}

function sidebarUsers(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Einführung', link: '/introduction' },
    { text: 'Was ist das CCAT?', link: '/what' },
    {
      text: 'Guides',
      base: '/users/guides',
      items: [{ text: 'Event vorbereitung', link: '/event-preperation' }],
    },
  ];
}

function sidebarDevelopers(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Einführung', link: '/introduction' },
    { text: 'Technologien', link: '/technologies' },
    {
      text: '@ccat/server',
      base: '/developers/ccat-server',
      items: [
        { text: 'Übersicht', link: '/overview' },
        {
          text: 'API',
          link: '/',
          base: '/developers/ccat-server/api',
          items: [{ text: 'User', link: '/user' }],
        },
      ],
    },
  ];
}
