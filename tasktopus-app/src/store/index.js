import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    userUpdate(state, payload){
      state.user = payload
    }
  },
  actions: {
    async signUp(state, userObject){
      try{
        let response = await axios.post('http://localhost:4000/userSignup', userObject)
        .then((response) => {
          if(!response){
            throw new Error('Unable to connect')
          } else {
            
          }
        })
      } catch {
        err => {
          let response = err.message
        }
      }
    }
  },
  modules: {
  }
})
