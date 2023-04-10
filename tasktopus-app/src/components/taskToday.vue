<template>
    <section class="my-8 max-h-full overflow-auto">
        <div v-if="tasks.length" class="flex justify-between mb-4">
            <div>
                <span class="text-2xl font-semibold">Today's Tasks</span>
                <span>{{ currentDate }}</span>
            </div>
            <button @click="taskCreator" class="bg-blue-500 text-white rounded-lg p-2 w-16">Add</button>
        </div>
        <div v-else class="flex justify-between mb-4">
            <span class="text-2xl font-semibold">Today's Tasks</span>
            <span>{{ currentDate }}</span>
        </div>
        <div v-if="tasks.length" class="flex flex-wrap space-y-2 justify-evenly items-center">
            <task @click="taskLoger(task.taskId)" v-for="(task, index) in tasks" :key="index" :taskId="task.taskId"/>
        </div>
        <div v-else class="flex justify-between items-center text-xl">
            <span>You haven't created any tasks yet</span>
            <button @click="taskCreator" class="bg-blue-500 text-white rounded-lg p-2">Create Task</button>
        </div>
    </section>
</template>

<script>

    import task from './mini_task.vue';
    import { ref } from 'vue';

    export default {
        components: {
            task
        },
        setup(){
            let id = 0
            const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

            const currentDate = ref('')
            const tasks = ref([
                
            ])

            const date = () => {
                let today = new Date()
                let date = today.getDate()
                let day = today.getDay()
                let month = today.getMonth()
                let year = today.getFullYear()
                currentDate.value = `${days[day]} ${date} ${months[month]} ${year}`
            }

            const taskLoger = (id) => {
                console.log("Item " + id + " has been clicked" )
            }
            const taskCreator = () => {
                tasks.value.push({id: id})
                id++
            }

            return { tasks, currentDate, taskLoger, taskCreator }
        }
    }

</script>