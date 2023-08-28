<template>
    <section v-if="block_display" class="h-full overflow-y-auto px-4 pt-2">
        <div class="flex items-center justify-between mb-4">
            <div>
                <span>Project & Task summary</span>
                <p class="text-xs text-gray-400">Add a new project and manage all here</p>
            </div>
            <button @click="[switchDisplay(false), router.push({name: 'create_new'})]" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="w-4 h-4 mr-2 -ml-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <line x1="12" x2="12" y1="5" y2="19" />
                  <line x1="5" x2="19" y1="12" y2="12" />
                </svg>
                Add new
            </button>
        </div>
        <div class="grid grid-cols-3 gap-4 h-[40%] mb-8">
            <div class="max-w-sm cursor-pointer h-full flex flex-col justify-between p-6 border border-purple-700 rounded-lg bg-gradient-to-br from-purple-900 hover:from-purple-800 via-purple-800 hover:via-purple-700 to-purple-700 hover:to-purple-600 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                <div>
                    <div class="p-2 rounded-lg bg-slate-800 bg-opacity-40 inline-flex">
                        <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                        </svg>
                    </div>
                </div>
                <h5 class="text-2xl font-bold tracking-tight">{{ tasks.length }}</h5>
                <div class="inline-flex justify-between text-xl w-full items-center font-medium text-center text-white">
                    Pending
                    <svg aria-hidden="true" class="w-12 h-10 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div class="max-w-sm cursor-pointer h-full flex flex-col justify-between p-6 border border-cyan-700 rounded-lg bg-gradient-to-br from-cyan-900 hover:from-cyan-800 via-cyan-800 hover:via-cyan-700 to-cyan-700 hover:to-cyan-600 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <div>
                    <div class="p-2 rounded-lg bg-slate-800 bg-opacity-40 inline-flex">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"/>
                        </svg>
                    </div>
                </div>
                <h5 class="text-2xl font-bold tracking-tight">0</h5>
                <div class="inline-flex justify-between text-xl w-full items-center font-medium text-center text-white">
                    In progress
                    <svg aria-hidden="true" class="w-12 h-10 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div class="max-w-sm cursor-pointer h-full flex flex-col justify-between p-6 border border-blue-700 rounded-lg bg-gradient-to-br from-blue-900 hover:from-blue-800 via-blue-800 hover:via-blue-700 to-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80">
                <div>
                    <div class="p-2 rounded-lg bg-slate-800 bg-opacity-40 inline-flex">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
                        </svg>
                    </div>
                </div>
                <h5 class="text-2xl font-bold tracking-tight">0</h5>
                <div class="inline-flex justify-between text-xl w-full items-center font-medium text-center text-white">
                    Completed
                    <svg aria-hidden="true" class="w-12 h-10 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
        <div class="relative">
            <nav class="sticky -top-2 z-30 w-full bg-white border-t border-x border-gray-200 rounded-t-3xl dark:bg-slate-800 dark:border-gray-800">
                <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search tasks</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                              <input type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search filtrate..." required="">
                            </div>
                        </form>
                    </div>
                    <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
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
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Category</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">In progress</option>
                                <option value="finished">Finished</option>
                                <option value="disabled">Disabled</option>
                            </select>
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
                                <ul class="text-sm p-3" aria-labelledby="filterDropDown">
                                    <li class="flex items-center py-2">
                                        <input checked id="date" type="checkbox" value="date" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="date" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of creation</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="priority" type="checkbox" value="priority" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="priority" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Priority</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="progress" type="checkbox" value="progress" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="progress" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Progress</label>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <input id="rights" type="checkbox" value="rights" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                        <label for="rights" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rights</label>
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
            </nav>
            <div class="h-auto grid grid-cols-2 gap-4 border-x border-x-slate-800 p-2 px-4">
                <article v-for="(task, index) in tasks" :key="index" class="w-full p-3 mt-2 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                    <div class="flex justify-between p-4">
                        <div class="p-2 rounded-lg bg-slate-800 bg-opacity-40 inline-flex">
                            <svg v-if="status == 'pending'" class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                            </svg>
                            <svg v-if="status == 'progress'" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"/>
                            </svg>
                            <svg v-if="status == 'completed'" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
                            </svg>
                        </div>
                        <button :id="task.id+'dropdown'" :data-dropdown-toggle="'dashTask'+task.id" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span class="sr-only">Open dropdown</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div :id="'dashTask'+task.id" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2" :aria-labelledby="task.id+'dropdown'">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Preview</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Disable</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Mark as finished</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <div class="max-w-[80%]">
                            <div class="font-bold text-2xl my-2">{{ task.title }}</div>
                            <p class="text-sm text-gray-400 self-start">{{ task.description }}</p>
                        </div>
                        <img v-if="taskProfile" class="w-12 h-12 rounded-full" src="/assets/images/aine.jpg" alt="Default avatar">
                        <div v-else class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-14 h-14 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div class="mt-2 grid gap-2 grid-cols-2 border-t border-t-slate-500 text-sm pt-2">
                        <div class="flex flex-col">
                            <span>Status:</span>
                            <span class="text-gray-400">{{ task.status }}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>No. collaborators:</span>
                            <span class="text-gray-400">0</span>
                        </div>
                        <div class="flex flex-col">
                            <span>Created on:</span>
                            <span class="text-gray-400">{{ task.createdAt }}</span>
                        </div>
                        <span class="flex flex-col">
                            <span>Last modified on:</span>
                            <span class="text-gray-400">{{ task.updatedAt }}</span>
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section v-else>
        <router-view></router-view>
    </section>
</template>

<script>
    import { ref, onMounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { initFlowbite } from 'flowbite';
    import { useTasks } from '../../../store/taskStore';

    export default{
        setup(){
            const router = useRouter()
            const taskStore = useTasks()

            const selected = ref([])
            const block_display = ref(true)
            const tasks = computed(() => {
                return taskStore.tasks
            })
            const status = "pending"

            const switchDisplay = (value) => {
                block_display.value = value
            }

            const fetchTasks = async() => {
                try{
                    let response = await taskStore.fetch('all')
                    console.log(response)
                    // tasks.value = response
                } catch(error){
                    console.log(error)
                }
            }

            onMounted(() => {
                initFlowbite()
                // fetchTasks()
            })

            return { switchDisplay, router, block_display, tasks, selected, status }
        }
    }
</script>