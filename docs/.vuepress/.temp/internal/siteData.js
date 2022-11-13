export const siteData = {
  base: "/",
  lang: "en-US",
  title: "pang-utils",
  description: "vue常用函数库",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.jpg",
      },
    ],
  ],
  locales: {},
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData);
  });
}
