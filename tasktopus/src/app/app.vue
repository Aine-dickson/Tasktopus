<template>
    <div class="app-container grid h-screen bg-blue-700">
        <header class="app-header h-full bg-green-700">
            Header content
        </header>
        <nav class="lg_app-nav h-full hidden sm:block bg-yellow-700">
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

<style>
    .app-container {
        display: grid;
        grid-template-columns: 5% 95%;
        grid-template-rows: 10% 90%;
        grid-template-areas: "header header" "lg_aside main";
    }
    .lg_app-nav {
       grid-area: lg_aside;
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
