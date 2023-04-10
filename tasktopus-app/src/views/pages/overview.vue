<template>
    <section class="p-4 max-h-full overflow-auto">
        <project_summary/>
        <taskToday/>
    </section>
</template>

<script>

    import project_summary from '@/components/project_summary.vue';
    import taskToday from '@/components/taskToday.vue';

    export default {
        components: {
            project_summary,
            taskToday
        },
        setup(){

        }
    }

</script>