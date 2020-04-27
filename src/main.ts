import Vue from 'vue';
import Component from 'vue-class-component';
import App from './App.vue';
import router from './router';
import store from './store/index';
import service from './utils/https';
import urls from './utils/urls';
import vuetify from '@/plugins/vuetify';
import mixin from './mixins';

Vue.mixin(mixin);

Vue.config.productionTip = false;
Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
Vue.prototype.$urls = urls; // 其他页面在使用 URLS 的时候直接  this.$urls 就可以了

// https://www.npmjs.com/package/vue-class-component#adding-custom-hooks
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
