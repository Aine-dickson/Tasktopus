<template>
        <div class="h-full p-4 rounded-lg shadow sm:p-5">
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <button @click.prevent="" type="button" class="text-gray-400 text-sm p-1.5">
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                    </svg>
                </button>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Add task
                </h3>
            </div>
            <form action="#">
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <section class="space-y-4">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Select type</option>
                                <option value="project">Project</option>
                                <option value="task">Task</option>
                            </select>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date</label>
                            <VueDatePicker :teleport-center="true"/>
                        </div>
                        <div>
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Collaboration</label>
                            <div class="flex justify-between">
                                <div class="flex -space-x-4">
                                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="">
                                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="">
                                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="">
                                    <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                                </div>
                                <div class="flex space-x-2">
                                    <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="w-4 h-4 mr-2 -ml-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                          <line x1="12" x2="12" y1="5" y2="19" />
                                          <line x1="5" x2="19" y1="12" y2="12" />
                                        </svg>
                                        Add member
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="h-full space-y-10">
                        <div class="h-[66%]">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" rows="4" class="block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
                        </div>
                        <div>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reminder</label>
                            <div class="grid grid-cols-3 gap-2">
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="US">Notification</option>
                                    <option value="CA">EMAIL</option>
                                    <option value="FR">SMS</option>
                                    <option value="DE">Alarm</option>
                                </select>
                                <div>
                                    <input type="number" id="default-input" value="1" class="max-w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>
                                <select id="countries" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="US" selected>Hours</option>
                                    <option value="CA">Days</option>
                                    <option value="FR">Weeks</option>
                                    <option value="DE">Months</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <div class="grid grid-cols-2 gap-16 w-[95%] col-span-2 m-auto mt-4">
                        <button type="submit" class="text-white items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add new {{  }}
                        </button>
                        <button type="reset" class="text-white items-center bg-gray-600 hover:bg-gray-700 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Discard
                        </button>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>
    import VueDatePicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';


    export default {
        components: {
            VueDatePicker
        },
        setup(){
            const router = useRouter()

            const date_picker = ref()

            return { date_picker, router }
        }
    }
</script>