<template>
    <div ref="app_cont" class="app-container grid h-screen bg-blue-700">
        <header class="app-header h-full bg-green-700">
            <app_header/>
        </header>
        <nav @mouseenter="navManager(true)" @mouseleave="navManager(false)" class="lg_app-nav h-full hidden sm:block bg-yellow-700 overflow-hidden">
            <app_lg_aside :navSize="nav_size"/>
        </nav>
        <nav class="sm_app-nav h-full sm:hidden">
            Nav content
        </nav>
        <main class="app-main h-full bg-gray-500">
            Main content
        </main>
        <footer class="app-footer h-full sm:hidden bg-red-700">
            Footer content
        </footer>
    </div>
</template>

<script>
    import { ref } from 'vue';

    import app_lg_aside from './pages/includes/app_lg_aside.vue';
    import app_header from './pages/includes/app_header.vue';

    export default {
        components: {
            app_lg_aside,
            app_header
        },
        setup(){
            const app_cont = ref('')
            const nav_size = ref('small')

            // Function to manage hover effect on the side nav
            const navManager = (state) => {
                if(state){
                    app_cont.value.style.gridTemplateColumns = "23% 77%"
                    nav_size.value = 'large'
                } else {
                    app_cont.value.style.gridTemplateColumns = "5% 95%"
                    nav_size.value = 'small'
                }
            }

            return {app_cont, navManager, nav_size}
        }
    }
</script>

<style>
    .app-container {
        display: grid;
        grid-template-columns: 5% 95%;
        grid-template-rows: 10% 90%;
        grid-template-areas: "header header" "lg_aside main";
    }
    .sm_app-nav {
       grid-area: sm_aside;
    }
    .app-main {
        grid-area: main;
    }
    .app-header {
        grid-area: header;
    }
</style>
