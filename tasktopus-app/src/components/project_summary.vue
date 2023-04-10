<template>
    <section>
        <div class="flex justify-between p-2 px-4 items-center">
            <div class="flex flex-col space-y-2">
                <span class="font-bold text-xl">Project Summary</span>
                <span class="text-sm hidden md:inline">Add projects and manage all easily</span>
            </div>
            <button class="rounded-lg bg-blue-500 text-white p-2">+ Add project</button>
        </div>
        <div class="flex overflow-auto space-x-7 my-4 p-3">
            <project_level v-for="(project, index) in projects" :key="index" :icon="project.icon" :category="project.category" :content="project.content" :color="project.color"></project_level>
        </div>
    </section>
</template>

<script>

    import project_level from '@/components/progress.vue';

    import { ref } from 'vue';

    export default {
        components: {
            project_level
        },
        setup(){
            const projects =ref([
                {
                    category: "Upcoming projects",
                    icon: "doc",
                    content: 40,
                    color: "blue"
                },
                {
                    category: "In progress projects",
                    icon: "pen",
                    content: 82,
                    color: "blue"
                },
                {
                    category: "Completed projects",
                    icon: "tick",
                    content: 108,
                    color: "blue"
                },
            ])

            // const colors = ref(['purple', 'green', 'blue'])

            return { projects }
        }
    }

</script>