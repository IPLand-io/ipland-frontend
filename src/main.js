
import Vue from 'vue'
import App from './App.vue'
import i18n from "./assets/locales/lang";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import ElementUI from 'element-ui';
Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) });

import './element-variables.scss'

Vue.prototype.$loading = ElementUI.Loading.service
Vue.prototype.$message = ElementUI.Message
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
Vue.prototype.$alert = ElementUI.MessageBox.alert


Vue.prototype.$g_alert = (msg, callback) => {
  ElementUI.MessageBox.alert(msg, _app.$t('tip'), {
    confirmButtonText: _app.$t('btn_ok'),
    callback
  });
}

Vue.prototype.$develop = function () {
  Vue.prototype.$g_alert("coming soon");
}

import Btn from "./base/Btns/Btn.vue";
Vue.component("Btn", Btn);

import Empty from './base/Empty.vue'
Vue.component("Empty", Empty);

Vue.directive('focus', {
  inserted: function (el) {
    setTimeout(() => {
      console.log('el', el);
      el.querySelector('input').focus()
    }, 0);
  }
})

import smAjax from '@common/js/smAjax';
import { $c, config } from './common/js/common';

Vue.prototype.$config = config;
Vue.prototype.$core_asset_symbol = config.core_asset_symbol;

$c.pageInit();
Vue.prototype.$smAjax = smAjax;

Vue.config.debug = false;

import store from "./vuex/index.js"
import routeConfig from './router-config'
const router = new VueRouter({
  history: false,
  hashbang: true,
  routes: routeConfig
});

router.beforeEach((to, from, next) => {
  let src = from.query.src;
  if (src && src == 'app') {
  } else {
    next()
  }
})


window._app = new Vue({
  i18n,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
