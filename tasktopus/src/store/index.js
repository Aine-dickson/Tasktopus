import axios from '../api/api'
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
        createTask: async({commit},task) => {
            try{
                let response = await axios.post('/createTask')
                console.log(response.data)
            } catch(error) {
                console.log(error.message)
            }
        },

    }
})