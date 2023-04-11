<template>
    <section class="space-y-4">
        <div class="text-center">
            <span class="font-bold text-xl">Login</span>
        </div>
        <form @submit.prevent="formHandler" action="#" class="space-y-4">
            <div class="w-[90%] m-auto space-y-2">
                <label for="userEmail" class="text-2xl">Email</label>
                <div class="h-10 w-full rounded-md text-lg overflow-hidden">
                    <input type="email" name="userEmail" id="userEmail" placeholder="Enter a valid email" class="border-2 border-gray-600 rounded-md h-full w-full p-1 focus:outline-blue-600 bg-transparent">
                </div>
            </div>
            <div class="w-[90%] m-auto space-y-2">
                <label for="userPassword" class="text-2xl">Password</label>
                <div class="h-10 w-full rounded-md text-lg overflow-hidden">
                    <input type="password" name="userPassword" id="userPassword" placeholder="Enter strong password" class="border-2 border-gray-600 rounded-md h-full w-full p-1 focus:outline-blue-600 bg-transparent">
                </div>
            </div>
            <button type="submit" class="bg-blue-500 text-white p-2 w-[90%] m-auto block rounded-[5rem]">Login</button>
            <router-link :to="{name: 'passwordManager'}">
                <span class="block text-center text-blue-500">Forgot password?</span>
            </router-link>
            <span class="block text-center">--------Or--------</span>
            <button @click="googleConnect" class="border border-blue-500 rounded-[5rem] block w-[90%] m-auto p-2">Login with Google</button>
        </form>
        <div class="space-x-2 text-sm text-center">
            <span>Do not have an account?</span>
            <router-link :to="{name: 'signup'}">
                <span class="text-lg text-blue-500">Sign up</span>
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

            const userEmail = ref('')
            const userPassword = ref('')

            const googleConnect = () => {
                console.log("Loged in with google")
            }

            const formHandler = async() => {
                const userObject = {
                    userEmail: userEmail.value,
                    userPassword: userPassword.value
                }
                store.dispatch('login', userObject)
                .then(response => {
                    if(response){
                        router.push('/home')
                    } else {
                        console.log("Login failed")
                    }
                })
                userEmail.value = ''
                userPassword.value = ''
            }

            return { googleConnect, formHandler }
        }
    }

</script>