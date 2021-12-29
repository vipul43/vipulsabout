import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.config.productionTip = false
Vue.use(CKEditor);
require('dotenv').config()

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
