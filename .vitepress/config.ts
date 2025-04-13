import { DefaultTheme, defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: 'CCAT Documentation',
  description: 'Documentation of the ConsultingContact Application Tool',
  themeConfig: {
    outline: "deep",
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
      copyright: 'Copyright © 2025 - Heute, move - studentische Unternehmensberatung e.V.',
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
    { text: 'Getting started', link: '/getting-started' },
    { text: 'Routes', link: '/routes' },
    { text: 'Versionierung', link: '/versioning' },
    {
      text: 'Datenbank',
      link: '/database',
    },
    {
      text: 'Git',
      base: '/developers/git',
      items: [
        { text: 'Repository', link: '/repository' },
        { text: 'Branching', link: '/branching' },
        { text: 'CI/CD', link: '/cicd' },
        { text: 'Commit messages', link: '/commit-messages' },
        { text: 'Suggested workflow', link: '/suggested-workflow' },
      ],
    },
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
