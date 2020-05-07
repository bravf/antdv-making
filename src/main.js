import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Stage from './components/stage'

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  render: h => h(Stage),
}).$mount('#app')
