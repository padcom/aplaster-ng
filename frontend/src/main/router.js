import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from 'pages/HomePage'
import ConfiguratorPage from 'pages/ConfiguratorPage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: HomePage },
    { path: '/config', component: ConfiguratorPage }
  ]
})
