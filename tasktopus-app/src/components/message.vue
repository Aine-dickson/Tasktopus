<template>
    <article class="flex space-x-4 p-2 items-center">
        <div class="overflow-hidden rounded-full h-8 w-8">
            <img :src="msgBody.image" :alt="msgBody.image" class="object-fill h-full w-full">
        </div>
        <div class="flex flex-col">
            <span class="font-semibold">{{ msgBody.senderName }}</span>
            <span class="text-orange-200 text-sm">{{ msgBody.mini_msg }}</span>
        </div>
        <div v-if="msgBody.msg_count > 0" class="bg-red-600 rounded-full w-7 h-7 flex justify-center items-center">{{ msgBody.msg_count }}</div>
    </article>
</template>

<script>

    import { ref } from 'vue';

    export default {
        props:[
            "senderId"
        ],
        setup(props){
            const msgBody = ref({
                image: '/assets/images/profile.jpg',
                senderName: "Aine Dixon",
                mini_msg: "Lorem ipsum dolor cest renso...",
                msg_count: 13
            })

            return { msgBody }
        }
    }

</script>