<template>
    <section class="h-screen p-8 bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <router-view></router-view>
    </section>
</template>

<script>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    export default {
        setup(){

            const router = useRouter()
            onMounted(() => {
                router.push({name: 'login'})
            })
        }
    }
</script>