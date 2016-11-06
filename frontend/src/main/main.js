/* eslint-disable no-new */

import Vue from 'vue'
import Axios from 'axios'

Vue.prototype.$http = Axios

import router from './router'
import json from 'filters/json'
import * as API from './api'

new Vue({
  router,
  el: '#app',
  filters: { json },
  data: {
    messages: []
  },
  created() {
    this.updater = API.listenForUpdates(event => {
      this.messages.unshift({ timestamp: new Date().toString(), content: JSON.parse(event.data).message })
    })
  },
  destroyed() {
    this.updater.close()
  }
})
