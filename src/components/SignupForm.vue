<template>
  <form @submit.prevent="submitHandler">
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <input type="email" required placeholder=" Your Email" v-model="email">
    <input type="password" required placeholder="Enter Password" v-model="password">
    <div>
      <button>Sign Up</button>
    </div>
    <div v-if="error" class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useSignup} from '../composables/useSignup.js'
import { useRouter } from 'vue-router'

export default {
    setup() {
        let displayName = ref('')
        let email = ref('')
        let password = ref('')
        let {error ,signup} = useSignup()
        let router = useRouter()

        const submitHandler = async () => {
         await signup(displayName.value, email.value, password.value)
         if(!error.value) router.push({name : 'chatroom'})
        }

        return{displayName, email, password , submitHandler , error}
    }
}
</script>

<style scoped>

</style>