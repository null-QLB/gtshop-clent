import Vue from 'vue'
import app from './app'
import router from './router/index'
import store from './store'
new Vue({
  el:'#app',
  components:{app},
  template: '<app/>',
  router,
  store
});
