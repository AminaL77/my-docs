import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // 使用 Vite 作为打包工具
  bundler: viteBundler(),
  // 使用默认主题
  theme: defaultTheme({
    // 在这里可以配置导航栏
    navbar: [
      { text: '首页', link: '/' },
      // 你可以稍后在这里添加更多导航链接，例如：
      // { text: '指南', link: '/guide/' },
    ],
    // 在这里可以配置侧边栏
    // sidebar: { ... },
  }),
  // 网站语言
  lang: 'zh-CN',
  // 网站标题
  title: '我的产品文档',
  // 网站描述
  description: '这是我的第一个VuePress文档网站',
})