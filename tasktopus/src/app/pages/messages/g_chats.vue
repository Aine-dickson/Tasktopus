<template>
    <ol class="divide-y divide-gray-300 dark:divide-gray-800">
        <li v-for="(chat, index) in chats" :key="index" @click="reportChat(), $router.push({name: 'messages', params:{id: chat.id}})" class="cursor-pointer items-center p-2 flex hover:bg-gray-200 hover:shadow-md dark:hover:bg-gray-700">
            <img class="w-8 h-8 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-3.jpg" alt="profile image"/>
            <div class="text-gray-600 dark:text-gray-400 flex-grow">
                <div class="flex justify-between items-start">
                    <span class="dark:text-gray-300 text-gray-500 font-semibold">@{{ chat.name }}</span>
                    <time class="min-w-[2.8rem] block text-end mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{{ chat.sentAt }}</time>
                </div>
                <div class="flex justify-between items-start max-w-full overflow-clip flex-nowrap">
                    <div class="text-sm font-thin"><span class="italic text-gray-900 dark:text-white">{{ chat.lastMsg.owner }}:</span> {{ chat.lastMsg.msg }}</div>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
            </div>
        </li>
    </ol>
</template>

<script>
    import { onBeforeMount, ref } from 'vue';
    import { useMessenger } from '../../../store/messengerStore'
    import api from '../../../api';
    
    export default {
        setup(){
            const store = useMessenger()

            const chats = ref([
                {   id: '123', name: 'JHS OBs & OGs', sentAt: '12:24',
                    lastMsg: { owner: 'Aine Dixon', msg: 'commented on...' }
                },
                {   id: '456', name: 'ITD Interactions', sentAt: '12:33',
                    lastMsg: { owner: 'Jaka Owen', msg: 'Prepare next semester...' }
                }
            ])

            const fetchChats = async() => {
                let response = await api.post('')
            }
            const reportChat = () => {
                store.chatType = 'group'
            }

            onBeforeMount(() => {
                fetchChats().then((data)=> {
                    chats.value = data
                })
            })

            return { chats, reportChat }
        }
    }
</script>