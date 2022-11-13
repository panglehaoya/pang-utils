export const themeData = {
  navbar: [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "Utils",
      link: "/views/Install",
    },
    {
      text: "github",
      link: "https://github.com/panglehaoya/pang-utils",
    },
  ],
  sidebar: [
    {
      text: "快速上手",
      children: [
        {
          text: "安装使用",
          link: "/views/Install",
        },
      ],
    },
    {
      text: "Utils",
      children: [
        {
          text: "websocket",
          link: "/views/Websocket",
        },
        {
          text: "水印",
          link: "/views/WaterMark",
        },
      ],
    },
    {
      text: "Hooks",
      children: [
        {
          text: "Hooks",
          link: "/views/Hooks",
        },
      ],
    },
  ],
  locales: {
    "/": {
      selectLanguageName: "English",
    },
  },
  logo: null,
  darkMode: true,
  repo: null,
  selectLanguageText: "Languages",
  selectLanguageAriaLabel: "Select language",
  sidebarDepth: 2,
  editLink: true,
  editLinkText: "Edit this page",
  lastUpdated: true,
  lastUpdatedText: "Last Updated",
  contributors: true,
  contributorsText: "Contributors",
  notFound: [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links.",
  ],
  backToHome: "Take me home",
  openInNewWindow: "open in new window",
  toggleDarkMode: "toggle dark mode",
  toggleSidebar: "toggle sidebar",
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  });
}
