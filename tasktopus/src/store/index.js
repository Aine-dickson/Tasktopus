import { createStore } from 'vuex'

export default createStore({
    state:{
        specialPage: false,
        darkTheme: true,
        tasks: [],

    },
    getters: {

    },
    mutations:{
        tasksPopulator(state, payload){
            state.tasks = payload
        },
        themeToggle(state){
            state.darkTheme = !state.darkTheme
        },
        pageTeller(state, payload){
            state.specialPage = payload
        }
    },
    actions:{
        create: async({commit},task) => {
            try{
                let response = await fetch('localhost:1337', {
                    method: 'POST',
                    body: task
                })
                if(response.status != 200){
                    throw new Error('Unable to add task')
                } else {
                    commit('tasksPopulator', response)
                    console.log(response)
                }
            } catch(error) {
                console.log(error.message)
            }
        },

    }
})