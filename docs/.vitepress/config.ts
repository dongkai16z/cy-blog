import { getThemeConfig, defineConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  author: 'cy',
  // 友链
  friend: [
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
      url: 'https://vitepress.vuejs.org/'
    }
  ],
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: 'pagefind'
})

export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'cy',
  description: 'cy-blog',
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新于',
    footer: {
      message: '',
      copyright:
        'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>'
    },
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
    //   }
    // ]
  }
})
