export const data = {
  key: "v-59558e10",
  path: "/views/Install.html",
  title: "安装使用",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "安装",
      slug: "安装",
      children: [],
    },
    {
      level: 2,
      title: "引入 pang-utils",
      slug: "引入-pang-utils",
      children: [],
    },
  ],
  git: {
    updatedTime: null,
    contributors: [],
  },
  filePathRelative: "views/Install.md",
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
