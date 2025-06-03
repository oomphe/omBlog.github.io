import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: 'omBlog.github.io',
  lang: 'zh-CN',
  title: 'Om-Blog',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      //导航栏
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar: [
      //侧边栏
      {
        text: '知识库',
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: 'JavaScript',
            link: '/notes/JavaScript',
            children: [],
          },
          {
            text: 'Vue',
            link: '/notes/Vue',
            children: [],
          },
        ],
      },
    ],
  }),
})
