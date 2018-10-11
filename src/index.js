import Clock from './vue-clock.vue';
export default Clock;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('clock', Clock);
}
