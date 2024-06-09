export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/contact/index'
  ],
  subpackages: [
    {
      root: 'penguinFight',
      pages: [
        'pages/index/index',
        'pages/skin/index'
      ]
    }, {
      root: 'user',
      pages: [
        'pages/index/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTitleText: 'WeChat',
    navigationBarBackgroundColor: '#080808',
    navigationBarTextStyle: 'white'
  }
})
