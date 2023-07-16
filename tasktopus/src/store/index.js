import axios from '../api/api'
import { createStore } from 'vuex'

export default createStore({
    state:{
        specialPage: false,
        darkTheme: true,
        tasks: [],
        chatType: ''
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
        },
        chatDescriptor(state, payload){
            state.chatType = payload
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