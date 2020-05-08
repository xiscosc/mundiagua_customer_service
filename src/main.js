import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import VueRouter from 'vue-router'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Home from "./components/Home";
import RepairStatus from "./components/RepairStatus";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '*', component: NotFound },
  { path: '/', component: Home, name: 'home' },
  { path: '/repair/:repairId', component: RepairStatus, name: 'repair-status' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('app-contact', Contact);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
