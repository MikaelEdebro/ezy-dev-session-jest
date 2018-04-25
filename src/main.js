// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import GlobalProperties from './plugins/GlobalProperties'
require('promise.prototype.finally').shim()

Vue.config.productionTip = false

Vue.use(GlobalProperties)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
