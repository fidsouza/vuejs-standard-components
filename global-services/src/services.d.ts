import services from '../services';

Vue.prototype.$services = services;
declare module 'vue/types/vue' {
  interface Vue {
    $services: typeof services;
  }
}
