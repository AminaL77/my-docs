import comp from "C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/DexSense/index.html.vue"
const data = JSON.parse("{\"path\":\"/DexSense/\",\"title\":\"DexSense\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"DexSense\"},\"git\":{},\"filePathRelative\":\"DexSense/README.md\"}")
export { comp, data }

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
