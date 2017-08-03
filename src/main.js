// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
// import filter from './filter'
// import filter from './filters/uppercase'

import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // filter,
  store,
  template: '<App/>',
  components: {
    App
  }
})
