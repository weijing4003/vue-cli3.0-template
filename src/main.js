import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./lib/axios"

Vue.config.productionTip = false

Vue.prototype.axios = axios;

//vant 按需引用
import { Button} from 'vant';
Vue.use(Button)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
