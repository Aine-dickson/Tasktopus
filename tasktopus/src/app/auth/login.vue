<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div @click="$router.push({name: 'login'})" class="cursor-pointer flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/assets/images/tasktopus-logo.png" alt="logo">
                Tasktopus
            </div>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form @submit.prevent="validator" class="space-y-4 md:space-y-6" action="#" enctype="multipart/form-data">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input v-model="user.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input v-model="user.rememberMe" id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <span @click="$router.push({name: 'forgot_password'})" class="cursor-pointer text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</span>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <span @click="$router.push({name: 'signup'})" class="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500">Sign up</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    import { useAccount } from '../../store/accountStore';

    export default{
        setup(){
            const router = useRouter()
            const account = useAccount()

            const errors = ref({
                shortPassword: false,
                email: {
                    length: false,
                    valid: false
                }
            })
            const user = ref({
                email: '',
                password: '',
                rememberMe: false
            })
            const validator = () => {
                if(!user.value.email.length){
                    errors.value.email = true
                    return
                } else {
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                    if(!emailPattern.test(user.value.email)){
                        errors.value.email.valid = true
                        return
                    }
                }
                if(user.value.password.length < 8){
                    errors.value.shortPassword = true
                    return
                }
                login()
            }

            const login = async () => {
                const data = new FormData() 
                data.append('emailAddress', user.value.email)
                data.append('password', user.value.password)
                data.append('rememberMe', user.value.rememberMe)
                try{
                    let response = await account.login(data)
                    user.value = { email: '', user_name: '', password: '', rememberMe: false}
                    errors.value =  { shortPassword: false, email: {length: false, valid: false }}
                    router.push({name: 'dashboard'})
                } catch (error) {
                    console.log(error)
                }
            }

            const clear = () => {

            }

            return { validator, user }
        }
    }
</script>
