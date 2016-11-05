/* eslint-disable no-new */

import Vue from 'vue'

import router from './router'

new Vue({
  router,

  el: '#app',
  template: '<div><router-link to="/">Home</router-link> <router-link to="/config">Configurator</router-link> <router-view /> </div>'
})
