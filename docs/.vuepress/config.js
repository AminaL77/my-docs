import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/my-docs/', 
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { 
        text: 'PickWiz', 
        children: [
          { text: '概述', link: '/PickWiz/' },
          { text: '最新版本 V1.8.0', link: '/PickWiz/V1.8.0/' },
          { text: '历史版本', link: '/PickWiz/历史版本/' }
        ]
      },
      { text: 'DexSense', link: '/DexSense/' },
      { text: 'DexSpace', link: '/DexSpace/' },
      { text: 'DexVerse', link: '/DexVerse/' },
      { text: 'NAS', link: '/NAS/' },
      { text: '其他', link: '/其他/' },
    ],
    sidebar: {
      '/PickWiz/': [
        {
          text: 'PickWiz',
          collapsable: false,
          children: [
            { text: '概述', link: '' }, // 空字符串表示当前目录的README.md
            {
              text: 'PickWiz 1.8.0',
              collapsible: true,
              children: [
                { text: '更新说明', link: 'V1.8.0/更新说明.md' },
                { text: '视觉方案', link: 'V1.8.0/视觉方案.md' },
                { text: '安装指南', link: 'V1.8.0/安装指南.md' },
                { 
                  text: '软件简介', 
                  collaspsable: true,
                  children:[
                    {text: '术语和概念', link: 'V1.8.0/软件简介/术语和概念.md'},
                    {text: '软件界面', link:'V1.8.0/软件简介/软件界面.md'}
                  ] },
                { text: '常用操作', link: 'V1.8.0/常用操作.md' },
                { text: '手眼标定', link: 'V1.8.0/手眼标定.md' },
                { text: '视觉参数', link: 'V1.8.0/视觉参数.md' },
                { text: '功能选项', link: 'V1.8.0/功能选项.md' },
                { text: '常见问题与解决方案', link: 'V1.8.0/常见问题与解决方案.md' }
              ]
            },
            {
              text: '历史版本',
              collapsable: true,
              children: [
                { text: 'V1.7.6', link: '历史版本/V1.7.6.md' },
                { text: 'V1.7.5', link: '历史版本/V1.7.5.md' },
                { text: 'V1.7.4', link: '历史版本/V1.7.4.md' },
                { text: 'V1.7.3', link: '历史版本/V1.7.3.md' },
                { text: 'V1.7.2', link: '历史版本/V1.7.2.md' },
                { text: 'V1.7.1', link: '历史版本/V1.7.1.md' },
                { text: 'V1.7.0', link: '历史版本/V1.7.0.md' }
              ]
            }
          ]
        }
      ],
      // 其他产品的侧边栏配置
      '/DexSense/': [
        { text: 'DexSense', link: '' }
      ],
      '/DexSpace/': [
        { text: 'DexSpace', link: '' }
      ],
      '/DexVerse/': [
        { text: 'DexVerse', link: '' }
      ],
      '/NAS/': [
        { text: 'NAS', link: '' }
      ],
      '/其他/': [
        { text: '其他', link: '' }
      ],
    },
  }),
  lang: 'zh-CN',
  title: '跨维智能制造产品文档中心',
  description: '跨维智能制造产品文档中心',
})