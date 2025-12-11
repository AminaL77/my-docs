import comp from "C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"欢迎使用跨维智能 PickWiz 3D视觉引导软件！\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765437058000,\"contributors\":[{\"name\":\"DYLiu\",\"username\":\"DYLiu\",\"email\":\"aminaliu77@gmail.com\",\"commits\":2,\"url\":\"https://github.com/DYLiu\"}],\"changelog\":[{\"hash\":\"010a7e4160a269885fa3ac0e3978a1bcfc7b2cb0\",\"time\":1765437058000,\"email\":\"aminaliu77@gmail.com\",\"author\":\"DYLiu\",\"message\":\"更新了某篇文档\"},{\"hash\":\"25acb9e60be1c762abc63a2c54efbc4917b314a8\",\"time\":1765275856000,\"email\":\"aminaliu77@gmail.com\",\"author\":\"DYLiu\",\"message\":\"first commit\"}]},\"filePathRelative\":\"README.md\"}")
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
