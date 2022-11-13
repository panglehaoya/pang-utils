export const data = {
  key: "v-8daa1a0e",
  path: "/",
  title: "",
  lang: "en-US",
  frontmatter: {
    home: true,
    heroImage: "/logo.jpg",
    heroText: "vue项目中经常使用的函数库",
    tagline: "TS编写 支持Tree-Shaking 完整的单元测试",
    actions: [
      {
        text: "立即上手",
        link: "/views/Install",
        type: "primary",
      },
      {
        text: "Github",
        link: "https://github.com/m-baseui/m-baseui",
        type: "secondary",
      },
    ],
  },
  excerpt: "",
  headers: [],
  git: {
    updatedTime: 1668260947000,
    contributors: [
      {
        name: "panglehaoya",
        email: "waxxhgz@163.com",
        commits: 1,
      },
    ],
  },
  filePathRelative: "README.md",
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  });
}
