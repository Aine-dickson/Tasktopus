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
    </section>
</template>

<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    export default{
        setup(){
            const store = useStore()

            const tasks = computed(() => store.state.tasks)

            return { tasks }
        }
    }
</script>