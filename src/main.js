import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import './plugins/validator';
import api from './plugins/axios'
import vSelect from 'vue-select'

const moment = require('moment')
require('moment/locale/es')

Vue.config.productionTip = false
Vue.prototype.$api = api;

Vue.use(require('vue-moment'), { moment })
Vue.component('v-select', vSelect)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
