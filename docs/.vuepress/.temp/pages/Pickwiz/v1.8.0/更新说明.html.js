import comp from "C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/PickWiz/V1.8.0/更新说明.html.vue"
const data = JSON.parse("{\"path\":\"/PickWiz/V1.8.0/%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E.html\",\"title\":\"更新说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"更新说明\"},\"git\":{\"updatedTime\":1765437058000,\"contributors\":[{\"name\":\"DYLiu\",\"username\":\"DYLiu\",\"email\":\"aminaliu77@gmail.com\",\"commits\":1,\"url\":\"https://github.com/DYLiu\"}],\"changelog\":[{\"hash\":\"010a7e4160a269885fa3ac0e3978a1bcfc7b2cb0\",\"time\":1765437058000,\"email\":\"aminaliu77@gmail.com\",\"author\":\"DYLiu\",\"message\":\"更新了某篇文档\"}]},\"filePathRelative\":\"PickWiz/V1.8.0/更新说明.md\"}")
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
