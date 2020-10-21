import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/styles.css'
import Bootstrapvue from 'bootstrap-vue'
import moment from 'moment'

Vue.use(Bootstrapvue)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
Vue.filter('date', value => {
  if(!value) {
    return ''
  }

  return moment(value).format('MM, DD, YYYY')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
