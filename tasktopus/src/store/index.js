import { createStore } from 'vuex'

export default createStore({
    state:{
        tasks: [],

    },
    getters: {

    },
    mutations:{
        tasksPopulator(state, payload){
            state.tasks = payload
        },
        
    },
    actions:{
        create: async({commit},task) => {
            try{
                let response = await fetch('127.0.0.1:5500/create', {
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