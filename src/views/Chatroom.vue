<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
    <router-view name="footer" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import { onBeforeRouteLeave } from "vue-router";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    onBeforeRouteLeave((_, _2, next) => {
      const sure = confirm("sure to leave??");
      next(sure);
    });
  },
};
</script>
