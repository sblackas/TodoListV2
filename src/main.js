import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddForm from './components/AddForm.vue'
import LisTodo from './components/LisTodo.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter)

// const router = new VueRouter ({
//   routes : [
//     { path: '/new', component: AddForm },
//     { path: '/list', component: LisTodo, props: {whatToDisplay: "all"}},
//     { path: '/done', component: LisTodo, props: {whatToDisplay: "done"}},
//     { path: '/todo', component: LisTodo, props: {whatToDisplay: "todo"}}
//     ]
// })

const routes = [
  { path: '/new', component: AddForm },
  { path: '/list', component: LisTodo, props: {whatToDisplay: "all"}},
  { path: '/done', component: LisTodo, props: {whatToDisplay: "done"}},
  { path: '/todo', component: LisTodo, props: {whatToDisplay: "todo"}}
  ]

  const router = new VueRouter ({
    routes
  })
//Install axios

Vue.use(VueAxios, axios)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


