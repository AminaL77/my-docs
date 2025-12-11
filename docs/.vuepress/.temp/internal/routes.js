export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎使用跨维智能 PickWiz 3D视觉引导软件！"} }],
  ["/DexSense/", { loader: () => import(/* webpackChunkName: "DexSense_index.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/DexSense/index.html.js"), meta: {"title":"DexSense"} }],
  ["/DexSense/software%20interface.html", { loader: () => import(/* webpackChunkName: "DexSense_software interface.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/DexSense/software interface.html.js"), meta: {"title":"Software interface 软件界面"} }],
  ["/PickWiz/", { loader: () => import(/* webpackChunkName: "PickWiz_index.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/PickWiz/index.html.js"), meta: {"title":"PickWiz"} }],
  ["/PickWiz/V1.8.0/%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E.html", { loader: () => import(/* webpackChunkName: "PickWiz_V1.8.0_更新说明.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/PickWiz/V1.8.0/更新说明.html.js"), meta: {"title":"更新说明"} }],
  ["/PickWiz/V1.8.0/%E8%A7%86%E8%A7%89%E6%96%B9%E6%A1%88.html", { loader: () => import(/* webpackChunkName: "PickWiz_V1.8.0_视觉方案.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/PickWiz/V1.8.0/视觉方案.html.js"), meta: {"title":"视觉方案"} }],
  ["/PickWiz/%E5%8E%86%E5%8F%B2%E7%89%88%E6%9C%AC/V1.7.6.html", { loader: () => import(/* webpackChunkName: "PickWiz_历史版本_V1.7.6.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/PickWiz/历史版本/V1.7.6.html.js"), meta: {"title":"V1.7.6"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Administrator/Desktop/my docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
