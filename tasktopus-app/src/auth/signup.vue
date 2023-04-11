<template>
    <section class="space-y-4">
        <div class="text-center">
            <span class="font-bold text-xl">Create an Account</span>
        </div>
        <form action="#" class="space-y-4" @submit.prevent="formHandler">
            <div class="w-[90%] m-auto space-y-2">
                <label for="userName" class="text-2xl">Name</label>
                <div class="h-10 w-full rounded-md text-lg overflow-hidden">
                    <input v-model="userName" type="text" name="userName" id="userName" placeholder="Enter full names" class="border-2 border-gray-600 rounded-md h-full w-full p-1 focus:outline-blue-600 bg-transparent">
                </div>
            </div>
            <div class="w-[90%] m-auto space-y-2">
                <label for="userEmail" class="text-2xl">Email</label>
                <div class="h-10 w-full rounded-md text-lg overflow-hidden">
                    <input v-model="userEmail" type="email" name="userEmail" id="userEmail" placeholder="Enter a valid email" class="border-2 border-gray-600 rounded-md h-full w-full p-1 focus:outline-blue-600 bg-transparent">
                </div>
            </div>
            <div class="w-[90%] m-auto space-y-2">
                <label for="userPassword" class="text-2xl">Password</label>
                <div class="h-10 w-full rounded-md text-lg overflow-hidden">
                    <input v-model="userPassword" type="password" name="userPassword" id="userPassword" placeholder="Enter strong password" class="border-2 border-gray-600 rounded-md h-full w-full p-1 focus:outline-blue-600 bg-transparent">
                </div>
            </div>
            <button type="submit" class="bg-blue-500 text-white p-2 w-[90%] m-auto block rounded-[5rem]">Create Account</button>
            <span class="block text-center">--------Or--------</span>
            <button @click="googleConnect" class="border border-blue-500 rounded-[5rem] block w-[90%] m-auto p-2">Sign up with Google</button>
        </form>
        <div class="space-x-2 text-sm text-center">
            <span>Already have an account?</span>
            <router-link :to="{name: 'login'}">
                <span class="text-lg text-blue-500">Login</span>
            </router-link>
        </div>
    </section>
</template>

<script>

    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    export default {
        setup(){
            const store = useStore()
            const router = useRouter()

            const userName = ref('')
            const userEmail = ref('')
            const userPassword = ref('')

            const googleConnect = () => {
                console.log("Loged in with google")
            }
            const formHandler = () => {
                let userObject = {
                    userEmail: userEmail.value,
                    userName: userName.value,
                    userPassword: userPassword.value
                }
                store.dispatch('signUp', userObject)
                .then(response => {
                    if (response) {
                        router.push('/home')
                    } else {
                        console.log("Signup not successful")
                    }
                })
                userEmail.value = ''
                userName.value = ''
                userPassword.value = ''
            }

            return { googleConnect, formHandler, userName, userEmail, userPassword }
        }
    }

</script>