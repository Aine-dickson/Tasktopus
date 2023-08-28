<template>
    <section>
        <button @click="logout">Logout</button>
    </section>
</template>

<script>
    import { useAccount } from '../../../store/accountStore';
    import { useRouter } from 'vue-router'

    export default {
        setup(){
            const router = useRouter()
            const account = useAccount()

            const logout = async () => {
                try {
                    const response = await account.logout()
                    router.push({name: 'login'})
                } catch(error){
                    console.log(error)
                } 
            }

            return { logout }
        }
    }
</script>