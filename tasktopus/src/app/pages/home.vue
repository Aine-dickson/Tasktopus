<template>
    <section>
        <div v-if="!tasks.length">
            You have no task yet!
        </div>
        <div v-else v-for="(task, index) in tasks" :key="index">
            Title:{{ task.title }} <br>
            Category: {{ task.category }} <br>
            Body:<br>
            {{ task.body }}
        </div>
        <button @click="create">Create</button>
    </section>
</template>

<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    export default{
        setup(){
            const store = useStore()
            const router = useRouter()

            const tasks = computed(() => store.state.tasks)
            const create = () => {
                router.push('create')
            }

            return { tasks, create }
        }
    }
</script>