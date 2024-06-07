
import { createApp } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
import store from '@/store'
import './app.less'

const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(store)
App.use(IconFont)
export default App
