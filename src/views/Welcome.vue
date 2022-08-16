<template>
  <div class="container welcome">
    <h1>welcome</h1>
    <div v-if="showLogin">
      <LoginForm />
      <p>
        no account yet ? <span @click="showLogin = !showLogin"> signup !</span>
      </p>
    </div>
    <div v-else>
      <SignupForm />
      <p>
        already registered ?
        <span @click="showLogin = !showLogin"> Login !</span>
      </p>
    </div>
  </div>
</template>

<script>
import { projectAuth } from "../firebase/config.js";
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    let showLogin = ref(true);
    console.log(projectAuth);

    return { showLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  widows: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  background: #111;
  width: 70%;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid rgb(95, 84, 84);
  outline: none;
  color: rgb(93, 92, 92);
  margin: 10px auto;
  border-radius: 0;
  background: transparent;
  color: #ffcc00;
  border: none;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
}
</style>
