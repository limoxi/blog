let path = require('path');

module.exports = {
	base: '/blog/',
    title: '个人主页', 
    description: 'limoxi的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        searchMaxSuggestions: 10,
        nav: [
            { text: '主页', link: '/' },
            { text: '数学', link: '/math/'},
            { text: '计算机', link: '/cs/' },
            { text: '网络', link: '/net/' },
            { text: '关于', link: '/about/'},
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', 
    },
    port: 9991,
    configureWebpack: {
        resolve: {
            alias: {
                '@public': path.join(__dirname, '.', 'public'),
            }
        }
      }
}