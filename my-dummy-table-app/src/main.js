import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import store from "./store";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
