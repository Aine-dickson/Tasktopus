<template>
    <div ref="app_cont" class="app-container grid h-screen bg-blue-700">
        <header class="app-header h-full bg-green-700">
            Header content
        </header>
        <nav @mouseenter="navManager(true)" @mouseout="navManager(false)" class="lg_app-nav h-full hidden sm:block bg-yellow-700">
            Nav content
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

    export default {
        setup(){
            const app_cont = ref('')

            // Function to manage hover effect on the side nav
            const navManager = (state) => {
                if(state){
                    app_cont.value.style.gridTemplateColumns = "15% 85%"
                } else {
                    app_cont.value.style.gridTemplateColumns = "5% 95%"
                }
            }

            return {app_cont, navManager}
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
    .app-container-hover {
      grid-template-columns: 15% 85%;
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
