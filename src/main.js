import Vue from 'vue'
import App from './App.vue'
import './plugins/ant-design-vue.js'
import "normalize.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
