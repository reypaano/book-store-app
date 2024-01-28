import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    // // Retrieve token from localStorage and set it in Vuex state
    // const token = localStorage.getItem("token");
    // if (token) {
    //   this.$store.commit("setToken", token);
    // }
  },
  render: (h) => h(App),
}).$mount("#app");
