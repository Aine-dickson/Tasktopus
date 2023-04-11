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
    async signUp({ commit }, userObject){
      try{
        let response = await axios.post('http://localhost:4000/userSignup', userObject)
        commit('userUpdate', response.data)
        if(response.status == 200){
          return true
        } else {
          return false
        }
      } catch {
        err => {
          let response = err.message
        }
      }
    },
    async login({ commit }, userObject){
      try{
        let response = await axios.post('http://localhost:4000/userLogin', userObject)
        commit('userUpdate', response.data)
        if(response.status == 2000){
          return true
        } else {
          return false
        }
      } catch {
        err => {console.log(err.message)}
      }
    }
  },
  modules: {
  }
})
