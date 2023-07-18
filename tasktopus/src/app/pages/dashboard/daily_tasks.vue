<template>
    <section>
        <div class="flex justify-between items-start text-gray-600 dark:text-white">
            <div class="flex flex-col">
                <span>Today's tasks</span>
                <span class="text-xs text-gray-400">31st July 2023</span>
            </div>
            <span class="cursor-pointer text-blue-700 hover:text-blue-500">see more...</span>
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
                <div v-if="participants < 4" class="flex -space-x-4">
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
</template>

<script>
    import { onMounted } from 'vue'

    export default {
        setup(){

            return {  }
        }
    }
</script>