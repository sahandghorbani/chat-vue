<template>
  <form @submit.prevent="submitHandler">
    <input type="email" required placeholder=" Your Email" v-model="email">
    <input type="password" required placeholder="Enter Password" v-model="password">
    <div>
    <button @click="submitHandler">Log-In</button>
    </div>
    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useLogin} from '../composables/useLogin.js'
import { useRouter } from 'vue-router'

export default {
    setup() {
        let { login , error } = useLogin()
        let email = ref('')
        let password = ref('')
        let router = useRouter()

        const submitHandler = async () => {
           await login(email.value, password.value)
           if(!error.value) router.push({name : 'chatroom'})
        }

     return{email, password , submitHandler ,error}

    }
}
</script>

<style>

</style>