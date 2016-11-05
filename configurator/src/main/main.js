/* eslint-disable no-new */

import Vue from 'vue'

import router from './router'

// Include filters
const filters = require.context('./filters', true, /\.js$/)
filters.keys().forEach(filters)

new Vue({
  router,
  el: '#app',
  computed: {
    route() {
      return this.$route
    }
  }
})
