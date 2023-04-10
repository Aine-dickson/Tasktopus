<template>
    <aside class="side-container grid h-full p-2">
        <section class="msg h-full">
            <div class="flex justify-between p-4">
                <span>Recent messages</span>
                <span>See more...</span>
            </div>
            <div v-if="messages.length" class="space-y-4 p-2 overflow-auto max-h-full">
                <message v-for="(message, index) in messages" :key="index" :senderId="message.senderId"/>
            </div>
            <div v-else>
                <span>You haven't received any messages yet!</span>
            </div>
        </section>
        <section class="team h-full my-4">
            <div class="flex justify-between p-4">
                <span>Team members</span>
                <span>See more...</span>
            </div>
            <div>

            </div>
        </section>
    </aside>
</template>

<script>

    import { ref } from 'vue';

    import message from '@/components/message.vue';

    export default {
        components: {
            message
        },
        setup(){
            const messages = ref([
                {
                    senderId: ''
                },
                {
                    senderId: ''
                },
                {
                    senderId: ''
                },
                {
                    senderId: ''
                },
            ])

            return { messages }
        }
    }

</script>

<style>
.msg{
    grid-area: msg;
}
.team{
    grid-area: team;
}
.side-container{
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    grid-template-areas: 
    "msg"
    "team";
}
</style>