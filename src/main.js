import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
console.log("dev changed");
console.log("dev debugged feature");
console.log("dev released feature");



console.log('change number 1');

createApp(App).use(router).mount("#app");
