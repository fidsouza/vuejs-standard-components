import services from '../services';
import global from './global';

declare module 'vue/types/vue' {
  interface Vue {
    $services: typeof services;
    $g: typeof global;
  }
}
