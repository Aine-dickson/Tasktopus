<template>
    <article class="flex flex-col justify-center w-[20rem] p-4 bg-slate-800 rounded-lg">
        <div class="flex justify-between mb-2">
            <div class="flex flex-col space-y-2">
                <span class="font-semibold">{{ task.taskTitle }}</span>
                <span class="text-orange-200">{{ task.taskSubtitle }}</span>
            </div>
            <div>
                <input type="checkbox" :name="task.taskId">
            </div>
        </div>
        <hr>
        <div class="flex items-center justify-between mt-2">
            <span>{{ task.timeSchedule }}</span>
            <div class="flex">
                <div v-for="(member, index) in task.members" :key="index" class="h-10 w-10 rounded-full overflow-hidden">
                    <img :src="member.avatar" :alt="member.memberId" class="object-fill h-full w-full">
                </div>
            </div>
        </div>
    </article>
</template>

<script>

    import { ref } from 'vue';

    export default {
        props: [
            "taskId"
        ],
        setup(props){
            const task = ref({
                taskId: "oor",
                taskTitle: "Going to school",
                taskSubtitle: "Reading chemistry",
                timeSchedule: "12:00 - 13:40",
                members: [
                    {
                        memberId: 234,
                        avatar: "/assets/images/profile.jpg"
                    }
                ]
            })

            return { task }
        }
    }

</script>