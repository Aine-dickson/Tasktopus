<template>
    <div ref="app_cont" class="app-container grid h-screen bg-slate-100 dark:bg-gray-800">
        <header class="app-header h-full">
            <app_header/>
        </header>
        <nav @mouseenter="navManager(true)" @mouseleave="navManager(false)" class="lg_app-nav h-full hidden sm:block overflow-hidden">
            <app_lg_aside :navSize="nav_size"/>
        </nav>
        <nav class="sm_app-nav h-full hidden">
            Small aside nav
        </nav>
        <main class="app-main h-full bg-slate-50 p-4 dark:bg-gray-900">
            <app_main/>
        </main>
        <footer class="app-footer h-full sm:hidden">
            <app_footer/>
        </footer>
    </div>
</template>

<script>
    import { ref } from 'vue';

    import app_lg_aside from './pages/includes/app_lg_aside.vue';
    import app_header from './pages/includes/app_header.vue';
    import app_main from './pages/home/main.vue';
    import app_footer from './pages/includes/app_footer.vue'

    export default {
        components: {
            app_lg_aside,
            app_header,
            app_main,
            app_footer
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
        grid-template-columns: 100%;
        grid-template-rows: 10% 80% 10%;
        grid-template-areas: "header" "main" "footer";
    }
    @media screen and (min-width: 639px) {
        .app-container {
            display: grid;
            grid-template-columns: 5% 95%;
            grid-template-rows: 10% 90%;
            grid-template-areas: "header header" "lg_aside main";
        }
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
