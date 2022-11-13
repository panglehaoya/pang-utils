export const data = {
  key: "v-70f68795",
  path: "/views/guide/Utils.html",
  title: "Utils",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "水印",
      slug: "水印",
      children: [],
    },
    {
      level: 2,
      title: "websocket",
      slug: "websocket",
      children: [],
    },
  ],
  git: {
    updatedTime: null,
    contributors: [],
  },
  filePathRelative: "views/guide/Utils.md",
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
