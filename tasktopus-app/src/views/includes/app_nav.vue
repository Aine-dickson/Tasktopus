<template>
    <section class="nav-container text-center h-full grid">
        <div class="logo h-full p-1 flex justify-center items-center text-blue-600 border-b border-gray-300">
            LOG
        </div>
        <nav class="nav h-full p-1 xl:px-3 py-8 border-b border-b-gray-200 text-2xl flex flex-col space-y-4">
            <router-link :to="{name: 'overview'}">
                <div class="xl:flex space-x-4 items-center">
                    <span>HM</span>
                    <span class="hidden xl:inline text-lg">Overview</span>
                </div>
            </router-link>
            <router-link :to="{name: 'project'}">
                <div class="xl:flex space-x-4 items-center">
                    <span>PRO</span>
                    <span class="hidden xl:inline text-lg">Project</span>
                </div>
            </router-link>
            <router-link :to="{name: 'mytasks'}">
                <div class="xl:flex space-x-4 items-center">
                    <span>MyT</span>
                    <span class="hidden xl:inline text-lg">My tasks</span>
                </div>
            </router-link>
            <router-link :to="{name: 'noti'}">
                <div class="xl:flex space-x-4 items-center">
                    <span>NOT</span>
                    <span class="hidden xl:inline text-lg">Notifications</span>
                </div>
            </router-link>
            <router-link :to="{name: 'settings'}">
                <div class="xl:flex space-x-4 items-center">
                    <span>STG</span>
                    <span class="hidden xl:inline text-lg">Settings</span>
                </div>
            </router-link>
            <router-link :to="{name: 'msg'}">
                <div class="xl:flex space-x-4 items-center">
                    <span>MSG</span>
                    <span class="hidden xl:inline text-lg">Messages</span>
                </div>
            </router-link>
        </nav>
        <article class="theme h-full pt-3">
            <div class="rounded-[5rem] bg-gray-700 flex justify-between p-1 w-[80%] m-auto h-12">
                <span class="w-full md:w-[40%] flex justify-center items-center dark:hidden rounded-[5rem] md:dark:flex bg-gray-400 dark:bg-transparent">Li</span>
                <span class="w-full dark:flex md:flex justify-center items-center dark:bg-gray-400 md:w-[40%] rounded-[5rem] hidden">Da</span>
            </div>
            <div class="mt-4 flex space-x-2 px-4 items-center">
                <div class="rounded-full overflow-hidden h-14 w-14">
                    <img src="@/../public/assets/images/profile.jpg" alt="profile-pic" class="h-full w-full object-fill">
                </div>
                <div class="lg:flex flex-col hidden">
                    <span>{{ user.name }}</span>
                    <span>Manager</span>
                </div>
            </div>
        </article> 
    </section>
</template>

<script>

    import { useStore } from 'vuex';
    import { computed } from 'vue';

    export default {
        setup(){
            const store = useStore()

            const user = computed(() => store.state.user)

            return { user }
        }
    }

</script>

<style>
.logo{
    grid-area: logo;
}
.nav{
    grid-area: nav;
}
.theme{
    grid-area: theme;
}
.nav-container{
    grid-template-columns: 100%;
    grid-template-rows: 10% 70% 20%;
    grid-template-areas: 
    "logo"
    "nav"
    "theme";
}
@media screen and (max-width: 640px) {
    .nav-container{
        grid-template-columns: 100%;
        grid-template-rows: 80% 20%;
        grid-template-areas: 
        "nav"
        "theme";
    }
    .logo{
        display: none;
    }
}

</style>