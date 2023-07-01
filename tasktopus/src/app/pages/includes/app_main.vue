<template>
    <main class="app-main grid h-full border dark:border-gray-800 border-b-0">
        <section class="main h-full grid border-r dark:border-r-gray-800">
            <header class="main-header h-full border-b dark:border-b-gray-800 flex items-center justify-around">
                <div class="w-[90%] h-9 flex items-center space-x-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-2 dark:bg-transparent dark:border-gray-600 dark:text-white dark:focus:border-gray-400">
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <input type="text" class="block w-full bg-transparent dark:placeholder-gray-400 h-full focus:outline-none" placeholder="Search tasks here...">
                </div>
                <div class="relative dark:bg-gray-800 p-2 rounded-lg">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                      <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                    </svg>
                    <span class="absolute top-3 left-5 transform -translate-y-1 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
            </header>
            <section class="router-view h-full p-4">
                <router-view></router-view>
            </section>
        </section>
        <section class="aside grid h-full">
            <section class="mgs h-full">
                <ul class="flex justify-between mx-2 my-1 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li @click="switchChats('private')" class="w-[50%]">
                        <span v-if="chats == 'private'" aria-current="page" class="inline-block p-3 w-full text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Private chats</span>
                        <span v-else class="inline-block p-3 w-full rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Private chats</span>
                    </li>
                    <li @click="switchChats('team')" class="w-[50%]">
                        <span v-if="chats == 'team'" aria-current="page" class="inline-block p-3 w-full text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Team chats</span>
                        <span v-else class="inline-block p-3 w-full rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Team chats</span>
                    </li>
                </ul>
                <div class="p-1">
                    <ol class="divide-y divide-gray-200 dark:divide-gray-800">
                        <li>
                            <div class="items-center p-2 flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                <img class="w-8 h-8 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-3.jpg" alt="profile image"/>
                                <div class="flex flex-grow justify-between text-gray-600 dark:text-gray-400">
                                    <div class="text-sm font-thin"><span class="italic text-gray-900 dark:text-white">Aine Dixon:</span> react to comment</div>
                                    <div class="text-xs">
                                        12:30
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <section class="tasks h-full p-2">
                <div class="flex justify-between items-start text-gray-600 dark:text-white">
                    <div class="flex flex-col">
                        <span>Today's tasks</span>
                        <span class="text-xs text-gray-400">31st July 2023</span>
                    </div>
                    <span>see more...</span>
                </div>
                <div class="max-w-sm p-2 mt-2 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                    <div class="flex">
                        <div>
                            <span>Task title</span>
                            <p class="text-xs text-gray-400">Task description</p>
                        </div>
                        <div class="hidden"></div>
                    </div>
                    <div class="border-t border-t-slate-500 text-xs pt-2 flex justify-between items-center">
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
    import { ref } from 'vue';

    export default {
        setup(){
            const chats = ref('team')

            const switchChats = (passport) => {
                chats.value = passport
            }

            return { switchChats, chats }
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
        grid-template-columns: 100%;
        grid-template-rows: 8% 92%;
        grid-template-areas: "mainHeader" "routerView";
    }
    .main-header{
        grid-area: mainHeader;
    }
    .router-view{
        grid-area: routerView;
    }
    .mgs{
        grid-area: messages;
    }
    .tasks{
        grid-area: tasksToday;
    }
    
</style>