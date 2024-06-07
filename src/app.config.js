export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages: [
    {
      root: 'penguinFight',
      pages: [
        'pages/index/index'
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
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
