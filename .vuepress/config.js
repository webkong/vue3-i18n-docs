const head = [];

if (process.env.NODE_ENV === "production") {
  head.push([
    "meta",
    { name: "theme-color", content: "#3eaf7c" },
    "script",
    {
      src: "https://unpkg.com/thesemetrics@latest",
      async: "",
    },
  ]);
}

module.exports = {
  base: "/",
  head,
  dest: "../../docs",
  locales: {
    "/": {
      lang: "en-US",
      title: "Vue3 i18n",
      description: "Vue3 i18n is internationalization plugin for Vue.js 3.0",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Vue3 i18n",
      description: "Vue3 i18n 是 Vue.js 3.0 的国际化插件",
    },
  },
  head: head,
  serviceWorker: false,
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        "/": {
          message: "New content is available.",
          buttonText: "Refresh",
        },
        "/zh": {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    },
  },
  themeConfig: {
    repo: "webkong/vue3-i18n",
    editLinks: true,
    sidebarDepth: 3,
    docsDir: "vuepress",
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Guide",
            link: "/guide/formatting",
          },
          {
            text: "API",
            link: "/api/api",
          },
          {
            text: "Release Notes",
            link: "https://github.com/webkong/vue3-i18n/releases",
          },
        ],
        sidebar: [
          "/installation",
          {
            title: "Guide",
            collapsable: false,
            children: ["/guide/formatting", "/guide/examples"],
          },
          "/api/api",
        ],
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "最近一次更新",
        nav: [
          {
            text: "指南",
            link: "/zh/guide/formatting",
          },
          {
            text: "API",
            link: "/zh/api/api",
          },

          {
            text: "发布日志",
            link: "https://github.com/webkong/vue3-i18n/releases",
          },
        ],
        sidebar: [
          "/zh/installation",
          {
            title: "Guide",
            collapsable: false,
            children: ["/zh/guide/formatting", "/zh/guide/examples"],
          },
          "/zh/api/api",
        ],
      },
    },
  },
};
