import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './rem/rem' // 转rem

import * as echarts from 'echarts' // 引入数据可视化

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts // 挂载

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
