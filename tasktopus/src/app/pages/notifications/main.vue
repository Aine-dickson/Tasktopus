<template>
    <section class="h-full grid noti-screen">
        <div class="max-w-screen-xl w-full noti-header">
            <div class="relative bg-white shadow-md dark:bg-gray-800">
                <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search notifications</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                              <input type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search notifications..." required="">
                            </div>
                        </form>
                    </div>
                    <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                            Mark all as read
                            <svg class="w-4 h-4 text-gray-800 dark:text-white ml-2 -mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </button>
                        <div class="flex items-center w-full space-x-3 md:w-auto">
                            <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                                Actions
                            </button>
                            <div id="actionsDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                    <li>
                                        <a v-if="selected.length == 0" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select</a>
                                        <a v-if="selected.length > 0" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select all</a>
                                    </li>
                                    <li class="py-1">
                                        <a v-if="selected.length == 1" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Leave collabo</a>
                                        <a v-else-if="selected.length > 1" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Leave collabos</a>
                                    </li>
                                    <li v-if="selected.length == 1" class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Collabo Info</a>
                                    </li>
                                    <li v-if="selected.length == 1" class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Pin Collabo</a>
                                    </li>
                                    <li v-else-if="selected.length > 1" class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Pin Collabos</a>
                                    </li>
                                    <li  v-if="selected.length == 1" class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Archive Collabo</a>
                                    </li>
                                    <li v-else-if="selected.length > 1" class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Archive Collabos</a>
                                    </li>
                                </ul>
                            </div>
                            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                </svg>
                                Filter
                                <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <div id="filterDropdown" class="z-10 hidden divide-y divide-gray-100 w-48 bg-white rounded-lg shadow dark:bg-gray-700">
                                <ul class="text-sm p-3" aria-labelledby="dropdownDefault">
                                    <li class="flex items-center py-2">
                                        <input checked id="date" type="checkbox" value="date" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="date" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task Priority</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="priority" type="checkbox" value="priority" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="priority" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Labels</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="progress" type="checkbox" value="progress" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="progress" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reminders</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="rights" type="checkbox" value="rights" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="rights" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Events</label>
                                    </li>
                                </ul>
                                <ul class="p-3 text-sm">
                                    <li class="flex items-center py-1">
                                        <input checked id="ascending" type="radio" value="ascending" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="ascending" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ascending</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="decending" type="radio" value="descending" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="decending" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descending</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-full notis overflow-y-auto">
            <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-6 pt-2">                  
                <li class="mb-10 ml-6 w-[95%]">            
                    <span class="z-50 absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                    </span>
                    <div class="items-center justify-between p-4 sm:flex bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                    </div>
                </li>
                <li class="mb-10 ml-6 w-[95%]">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Thomas Lean image"/>
                    </span>
                    <div class="p-4 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <div class="items-center justify-between mb-3 sm:flex">
                            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
                        </div>
                        <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-slate-50 dark:bg-slate-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                    </div>
                </li>
                <li class="mb-10 ml-6 w-[95%]">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                    </span>
                    <div class="items-center justify-between p-4 sm:flex bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                    </div>
                </li>
                <li class="mb-10 ml-6 w-[95%]">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                    </span>
                    <div class="items-center justify-between p-4 sm:flex bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                    </div>
                </li>
                <li class="mb-10 ml-6 w-[95%]">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Thomas Lean image"/>
                    </span>
                    <div class="p-4 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <div class="items-center justify-between mb-3 sm:flex">
                            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
                        </div>
                        <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-slate-50 dark:bg-slate-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                    </div>
                </li><li class="mb-10 ml-6 w-[95%]">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                    </span>
                    <div class="items-center justify-between p-4 sm:flex bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup(){
            const selected = ref([])

            return { selected }
        }
    }
</script>

<style scoped>
    .noti-screen{
        grid-template-columns: 100%;
        grid-template-rows: 12.5% 87.5%;
        grid-template-areas: "header" "main";
    }
    .notis{
        grid-area: main;
    }
    .noti-header{
        grid-area: header;
    }
</style>