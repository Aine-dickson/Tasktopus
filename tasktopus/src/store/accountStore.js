import { defineStore } from "pinia";
import api from '../api/index'

export const useAccount = defineStore('account', {
    state: () => ({
        user: null,
        accInfo: null,
        accSettings: null,
        _csrf: null
    }),
    actions: {
        async login(user){
            try {
                const response = await api.put('/entrance/login', user)
                this.user = response.data
            } catch (error) {
                throw new Error(error.response.statusText)
            }
        },
        async signup(user){
            try {
                const response = await api.post('/entrance/signup', user)
                this.user = response.data
            } catch (error){
                throw new Error(error.response.statusText)
            }
        }, 
        async logout(){
            try {
                await api.post('/account/logout')
                this.user = null
            } catch (error){
                console.log(error.response.statusText)
                throw new Error(error.response.statusText)
            }
        }, 
    }
})