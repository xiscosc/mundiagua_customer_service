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
import moment from 'moment'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '*', component: NotFound, props: { error: '404 Not Found'} },
  { path: '/', component: Home, name: 'home' },
  { path: '/repair/:repairId', component: RepairStatus, name: 'repair-status' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('app-contact', Contact);


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY HH:mm')
  }
});

Vue.filter('warrantySpanish', function(value) {
  if (value) {
    return 'Con';
  } else {
    return 'Sin';
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
