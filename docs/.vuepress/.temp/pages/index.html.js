export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"我是一级标题\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"我是二级标题\",\"slug\":\"我是二级标题\",\"link\":\"#我是二级标题\",\"children\":[{\"level\":3,\"title\":\"我是三级标题\",\"slug\":\"我是三级标题\",\"link\":\"#我是三级标题\",\"children\":[]}]},{\"level\":2,\"title\":\"我是二级标题\",\"slug\":\"我是二级标题-1\",\"link\":\"#我是二级标题-1\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
