import Vue from 'vue';
import App from './App.vue';
import services from '../services';
import global from './global';

Object.defineProperty(Vue.prototype, '$services', {
  get() {
    return services;
  },
  set() {
    throw new Error('cann`t set new services');
  },
});

Object.defineProperty(Vue.prototype, '$g', {
  get() {
    return global;
  },
  set() {
    throw new Error('cann`t set new global event');
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
