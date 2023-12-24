import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { asyncDispose } from "core-js/fn/symbol";
console.log("dev changed");
console.log("dev debugged feature");
console.log("dev released feature");

createApp(App).use(router).mount("#app");
cxz;
dsad