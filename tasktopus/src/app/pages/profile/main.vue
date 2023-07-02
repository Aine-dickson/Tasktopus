<template>
    <section class="h-full">
        <div class="h-full">
            <div class="overfow-hidden w-full h-[30%] relative">
                <img src="/assets/images/aine.jpg" alt="cover-image" class="h-full w-full object-cover">
                <span class="absolute flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full left-12 -bottom-8 ring-8 ring-white dark:ring-slate-800 dark:bg-blue-900 overflow-hidden">
                    <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                </span>
            </div>
            <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center justify-between p-4 pl-32 pb-0 sm:flex bg-slate-50 border-b border-b-slate-300 shadow dark:bg-slate-800 dark:border-b-slate-600">
                <ul class="flex -mb-px overflow-x-auto items-baseline">
                    <li ref="defaultRoute" @click="[activate('general'), router.push({name: 'general_info', params: {id: 'Aine-dixon'}})]" class="mr-2 cursor-pointer">
                        <span v-if="active ==  'general'" href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">General Info</span>
                        <span v-else class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">General Info</span>
                    </li>
                    <li @click="[activate('timeline'), router.push({name: 'timeline', params: {id: 'Aine-dixon'}})]" class="mr-2 cursor-pointer">
                        <span v-if="active == 'timeline'" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Timeline</span>
                        <span v-else class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Timeline</span>
                    </li>
                    <li @click="[activate('teams'), router.push({name: 'teams', params: {id: 'Aine-dixon'}})]" class="mr-2 cursor-pointer">
                        <span v-if="active == 'teams'" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Teams</span>
                        <span v-else class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Teams</span>
                    </li>
                    <li @click="[activate('collabos'), router.push({name: 'collabos', params: {id: 'Aine-dixon'}})]" class="mr-2 cursor-pointer">
                        <span v-if="active == 'collabos'" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Collabos</span>
                        <span v-else class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Collabos</span>
                    </li>
                    <li @click="[activate('projects'), router.push({name: 'projects', params: {id: 'Aine-dixon'}})]" class="mr-2 cursor-pointer">
                        <span v-if="active == 'projects'" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Projects</span>
                        <span v-else class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Projects</span>
                    </li>
                    <li @click="[activate('schedule'), router.push({name: 'schedule', params: {id: 'Aine-dixon'}})]" class="mr-2 cursor-pointer">
                        <span v-if="active == 'schedule'" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Daily Schedule</span>
                        <span v-else class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Daily Schedule</span>
                    </li>
                </ul>
            </div>
            <div class="px-4 pt-2">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const router = useRouter()
            const store = useStore()

            const active = ref('general')
            const defaultRoute = ref() 

            const activate = (target) => {
                active.value = target
            }

            onMounted(() => {
                store.commit('pageTeller', true)
                defaultRoute.value.click()
            })
            onUnmounted(() => {
                store.commit('pageTeller', false)
            })

            return { activate, active, router, defaultRoute }
        }
    }
</script>