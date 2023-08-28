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
                        Create an account
                    </h1>
                    <form @submit.prevent="validator" class="space-y-4" action="#" enctype="multipart/form-data">
                        <div v-if="criteria.blured == 'passwords'">
                            <label for="user_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                            <input ref="userName" v-model="user.user_name" type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ainedeveloper di Octopus" required="">
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input v-model="user.email" @focus="validator('userName')" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                        </div>
                        <div v-if="criteria.blured != 'passwords'">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                        </div>
                        <div v-if="criteria.blured != 'passwords'">
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input v-model="criteria.c_password" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            <span v-if="errors.unconfirmed" class="text-red-500 text-sm">Passwords do not match, check and fill again</span>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input v-model="criteria.terms"  id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <span @click="$router.push({name: 'login'})" class="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue';
    import { useAccount } from '../../store/accountStore';
    import { useRouter } from 'vue-router'

    export default{
        setup(){
            const store = useAccount()
            const router = useRouter()

            const userName = ref(null)
            const criteria = ref({
                terms: null,
                c_password: '',
                blured: 'passwords'
            })
            const errors = ref({
                shortPassword: false,
                unconfirmed: false,
                policy: false,
                email: {
                    length: false,
                    valid: false
                },
                invalidName: {
                    short: false,
                    forbidden: false
                }
            })
            const user = ref({
                email: '',
                user_name: '',
                password: '',
            })

            const validator = (target) => {
                if(target == 'userName'){
                    if(user.value.user_name.length > 1){
                        const userNamePattern= /^[^0-9][A-Za-z\s]*$/
                        if(!userNamePattern.test(user.value.user_name)){
                            errors.value.invalidName.forbidden = true
                            userName.value.focus()
                            return
                        } else {
                            criteria.value.blured = 'userName'
                        }
                    } else {
                        errors.value.invalidName.short = true
                        userName.value.focus()
                        return
                    }
                } else {
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
                    if(user.value.password.length >= 8){
                        if(user.value.password !== criteria.value.c_password){
                            errors.value.unconfirmed = true
                            return
                        }
                    } else {
                        errors.value.shortPassword = true
                        return
                    }
                    if(!criteria.value.terms){
                        errors.value.policy = true
                        return
                    }
                    create()
                }
            }

            const create = async () => {
                const data = new FormData() 
                data.append('emailAddress', user.value.email)
                data.append('fullName', user.value.user_name)
                data.append('password', user.value.password)

                try {
                    let response = await store.signup(data)
                    user.value = { email: '', user_name: '', password: ''}
                    errors.value = { shortPassword: false, unconfirmed: false,
                            policy: false, email: { length: false, valid: false },
                            invalidName: { short: false, forbidden: false }
                    }
                    criteria.value = { terms: null, c_password: ''}
                    router.push({name: 'dashboard'})
                } catch(error) {
                    console.log(error)
                }
            }

            const clear = () => {

            }
            return {criteria, user, errors, userName, validator}
        }
    }
</script>