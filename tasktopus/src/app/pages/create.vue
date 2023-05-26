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

    export default{
        setup(){
            const formData = ref({
                title: '',
                category: '',
                body: ''
            })

            const create = () => {

            }

            return { formData, create }
        }
    }

</script>