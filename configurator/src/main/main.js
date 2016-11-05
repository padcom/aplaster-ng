/* eslint-disable no-new */

import Vue from 'vue'
import Axios from 'axios'

Vue.prototype.$http = Axios

import router from './router'
import json from 'filters/json'

new Vue({
  router,
  el: '#app',
  filters: { json }
})
