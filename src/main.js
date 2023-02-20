import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
// import { getUserInfo } from "./api/dingding";
Vue.config.productionTip = false;
//  正式开发使用
// getUserInfo().then(userInfo => {
// 	localStorage.setItem("userInfo", JSON.stringify(userInfo));
// new Vue({
// 	router,
// 	render: h => h(App)
// }).$mount("#app");
// });

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
