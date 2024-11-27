import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ccat Documentation",
  description: "Documentatation for the consulting contact application tool",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Anwender", link: "/users" },
      { text: "Entwickler", link: "/developers" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Anwender",
        items: [{ text: "Einführung", link: "/users" }],
      },
      {
        text: "Entwickler",
        items: [{ text: "Einführung", link: "/developers" }],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/move-ev-sub/ccat" },
    ],
  },
});
