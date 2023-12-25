import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
console.log("dev chnaged");

createApp(App).use(router).mount("#app");
