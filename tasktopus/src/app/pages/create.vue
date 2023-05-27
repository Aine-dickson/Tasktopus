<template>
    <section>
        <form @submit.prevent="create">
            <div>
                <label for="name">Task name:</label>
                <input v-model="formData.title" type="text" id="name" name="taskName">
            </div>
            <div>
                <label for="body">Task definition:</label>
                <input v-model="formData.body" type="text" id="body" name="taskBody">
            </div>
            <div>
                <label for="category">Category</label>
                <select v-model="formData.category" name="category" id="category">
                    <option value="school">School</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                </select>
            </div>
            <div>
                <button type="submit">Create</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </section>
</template>

<script>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router'

    export default{
        setup(){
            const store = useStore()
            const router = useRouter()

            const formData = ref({
                title: '',
                category: '',
                body: ''
            })

            const create = () => {
                store.dispatch('create', formData.value)
                .then(() => {
                    router.push('home')
                })
            }

            return { formData, create }
        }
    }

</script>