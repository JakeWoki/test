import Vue from 'vue'
import VirtualList from '@tarojs/components/virtual-list'
import './app.scss'

Vue.use(VirtualList)

const App = new Vue({
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
