<template>
    <section class="nav-container text-center h-full grid">
        <div class="logo h-full p-1 flex justify-center items-center text-blue-600 border-b border-gray-300">
            LOG
        </div>
        <nav class="nav-1 h-full p-1 py-8 border-b border-b-gray-200 text-2xl flex flex-col space-y-4">
            <router-link :to="{name: 'home'}">
                HM
            </router-link>
            <router-link :to="{name: 'home'}">
                ST
            </router-link>
            <router-link :to="{name: 'home'}">
                PR
            </router-link>
            <router-link :to="{name: 'home'}">
                AD
            </router-link>
            <router-link :to="{name: 'home'}">
                HM
            </router-link>
        </nav>
        <nav class="nav-2 h-full p-1 py-8 border-b border-b-gray-200 text-2xl flex flex-col space-y-4">
            <router-link :to="{name: 'home'}">
                HM
            </router-link>
            <router-link :to="{name: 'home'}">
                ST
            </router-link>
            <router-link :to="{name: 'home'}">
                PR
            </router-link>
            <router-link :to="{name: 'home'}">
                AD
            </router-link>
            <router-link :to="{name: 'home'}">
                HM
            </router-link>
            <router-link :to="{name: 'home'}">
                HM
            </router-link>
        </nav>
        <div class="theme h-full">
            TM
        </div> 
    </section>
</template>

<script>

    export default {
        setup(){

            return {}
        }
    }

</script>

<style>
.logo{
    grid-area: logo;
}
.nav-1{
    grid-area: nav-1;
}
.nav-2{
    grid-area: nav-2;
}
.theme{
    grid-area: theme;
}
.nav-container{
    grid-template-columns: 100%;
    grid-template-rows: 10% 40% 40% 10%;
    grid-template-areas: 
    "logo"
    "nav-1"
    "nav-2"
    "theme";
}

</style>