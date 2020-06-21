import Vue from 'vue';
import Component from 'vue-class-component';
import App from './App.vue';
import router from './router';
import store from './store/index';
import service from './utils/https';
import urls from './utils/urls';
import vuetify from '@/plugins/vuetify';
import mixin from './mixins';
import '../src/assets/icon/iconfont.js';


Vue.mixin(mixin);

Vue.config.productionTip = false;
Vue.prototype.$https = service;
Vue.prototype.$urls = urls;

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
