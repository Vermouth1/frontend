const sidebar = require('./sidebar');
const plugins = require('./plugins');
const nav = require('./nav');

module.exports = {
  base: '/frontend/',
  title: 'whisperwind',
  dest: 'dist',
  port: '8089',
  plugins,
  themeConfig: {
    nav,
    repo: 'https://gitee.com/whisperw1nd/frontend', // 仓库和编辑链接
    repoLabel: 'gitee',
    smoothScroll: true, // 页面滚动
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    sidebar,
  }
}