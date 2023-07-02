<template>
    <main class="app-main grid h-full border dark:border-gray-800 border-b-0">
        <section class="main h-full border-r dark:border-r-gray-800">
            <header v-if="!special" class="main-header h-[8%] border-b dark:border-b-gray-800 flex items-center justify-around">
                <div class="w-[90%] h-9 flex items-center space-x-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-2 dark:bg-transparent dark:border-gray-600 dark:text-white dark:focus:border-gray-400">
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <input type="text" class="block w-full bg-transparent dark:placeholder-gray-400 h-full focus:outline-none" placeholder="Search tasks here...">
                </div>
                <div @click="router.push({name: 'notifications'})" class="relative dark:bg-gray-800 p-2 rounded-lg">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                      <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                    </svg>
                    <span class="absolute top-3 left-5 transform -translate-y-1 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
            </header>
            <section v-if="!special" class="router-view h-[92%]">
                <router-view></router-view>
            </section>
            <section v-else class="router-view h-full">
                <router-view></router-view>
            </section>
        </section>
        <section class="aside grid h-full">
            <chats class="mgs h-full"/>
            <section class="tasks h-full p-2">
                <div class="flex justify-between items-start text-gray-600 dark:text-white">
                    <div class="flex flex-col">
                        <span>Today's tasks</span>
                        <span class="text-xs text-gray-400">31st July 2023</span>
                    </div>
                    <span>see more...</span>
                </div>
                <div class="cursor-pointer max-w-sm p-2 mt-2 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                    <div class="flex">
                        <div>
                            <span>Task title</span>
                            <p class="text-xs text-gray-400">Task description</p>
                        </div>
                        <div class="hidden"></div>
                    </div>
                    <div class="mt-1 border-t border-t-slate-500 text-xs pt-2 flex justify-between items-center">
                        <span>11:30</span>
                        <div v-if="active < 4" class="flex -space-x-4">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="">
                        </div>
                        <div v-else class="flex -space-x-4">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="">
                            <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="">
                            <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </main>
</template>

<script>
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    import chats from '../messages/chats.vue';

    export default {
        components: {
            chats
        },
        setup(){
            const router = useRouter()
            const store = useStore()

            const special = computed(() => {
                return store.state.specialPage
            })

            return { router, special }
        }
    }
</script>

<style scope>
    .app-main {
        grid-template-columns: 73% 27%;
        grid-template-rows: 100%;
        grid-template-areas: "main aside";
    }
    .aside {
       grid-area: aside;
       grid-template-columns: 100%;
       grid-template-rows: 55% 45%;
       grid-template-areas: "messages" "tasksToday";
    }
    .main {
        grid-area: main;
        /* grid-template-columns: 100%;
        grid-template-rows: 8% 92%;
        grid-template-areas: "mainHeader" "routerView"; */
    }
    /* .main-header{
        grid-area: mainHeader;
    }
    .router-view{
        grid-area: routerView;
    } */
    .mgs{
        grid-area: messages;
    }
    .tasks{
        grid-area: tasksToday;
    }
    
</style>