// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/', component: App },
  { path: '/todos', component: Todos },
  { path: '/todos/:todoId', name: 'singleTodo', component: SingleTodo }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
const app = new Vue({
  // el: '#app',
  // template: '<App/>',
  // components: { App },
  router
}).$mount('#app')
