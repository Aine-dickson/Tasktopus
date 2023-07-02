<template>
    <section>
        <ul class="flex justify-between mx-2 my-1 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li @click="[switchChats('private'), router.push({name: 'private_chats'})]" class="w-[50%] cursor-pointer">
                <span v-if="chats == 'private'" aria-current="page" class="inline-block p-3 w-full text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Private chats</span>
                <span v-else class="inline-block p-3 w-full rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Private chats</span>
            </li>
            <li @click="[switchChats('team'), router.push({name: 'group_chats'})]" class="w-[50%] cursor-pointer">
                <span v-if="chats == 'team'" aria-current="page" class="inline-block p-3 w-full text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Team chats</span>
                <span v-else class="inline-block p-3 w-full rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Group chats</span>
            </li>
        </ul>
        <div class="p-1">
            <private_chats v-if="chats == 'private'"/>
            <group_chats v-if="chats == 'team'"/>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    import group_chats from './g_chats.vue'
    import private_chats from './p_chats.vue'

    export default {
        components: {
            group_chats,
            private_chats
        },
        setup(){
            const router = useRouter()

            const chats = ref('team')
            const switchChats = (passport) => {
                chats.value = passport
            }

            return { switchChats, chats, router }
        }
    }
</script>