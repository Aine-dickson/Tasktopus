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
        <div class="grid grid-cols-3 gap-4 h-[40%]">
            <div class="max-w-sm cursor-pointer h-full flex flex-col justify-between p-6 border border-purple-700 rounded-lg bg-gradient-to-br from-purple-900 hover:from-purple-800 via-purple-800 hover:via-purple-700 to-purple-700 hover:to-purple-600 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                <div>
                    <div class="p-2 rounded-lg bg-slate-800 bg-opacity-40 inline-flex">
                        <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                        </svg>
                    </div>
                </div>
                <h5 class="text-2xl font-bold tracking-tight">45</h5>
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
                <h5 class="text-2xl font-bold tracking-tight">15</h5>
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
                <h5 class="text-2xl font-bold tracking-tight">23</h5>
                <div class="inline-flex justify-between text-xl w-full items-center font-medium text-center text-white">
                    Completed
                    <svg aria-hidden="true" class="w-12 h-10 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <router-view></router-view>
    </section>
</template>

<script>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    export default{
        setup(){
            const router = useRouter()

            const block_display = ref(true)

            const switchDisplay = (value) => {
                block_display.value = value
            }

            return { switchDisplay, router, block_display }
        }
    }
</script>