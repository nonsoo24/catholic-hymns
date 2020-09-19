import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/index.css';

window.onerror = function(message, source, line, column, error) {
  console.log('ONE ERROR HANDLER TO RULE THEM ALL:', message);
}
Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.config.errorHandler = function(err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
