import { projectAuth } from "@/firebase/config";
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Footer from "../views/Footer.vue";
import Chatroom from "../views/Chatroom.vue";

//auth gaurd
const requireAuth = (_, __, next) => {
  let user = projectAuth.currentUser;
  if (!user) next({ name: "welcome" });
  else next();
};
console.log("new dev debbugged");

//gaurd the welcome page if user is 'in' already
const noNeedAuth = (_, __, next) => {
  let user = projectAuth.currentUser;
  if (user) next({ name: "chatroom" });
  else next();
};

const routes = [
  {
    path: "/",
    name: "welcome",
    components: { default: Welcome, footer: Footer },
    beforeEnter: noNeedAuth,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    components: { default: Chatroom, footer: Footer },
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
