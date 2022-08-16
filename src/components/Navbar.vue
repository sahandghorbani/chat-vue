<template>
  <nav v-if="user">
    <h1>hey there {{ user.displayName }}</h1>
    <p class="email">currently loggedin as {{ user.email }} email</p>
    <button @click="logoutHandler">logout</button>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "../composables/useLogout.js";
import getUser from "../composables/getUser.js";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const logoutHandler = async () => {
      await logout();
      if (error.value) console.log(error.value);
      if (!error.value) router.push({ name: "welcome" });
    };

    return { useLogout, logoutHandler, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px !important;
  flex-basis: 100%;
  height: 0;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
