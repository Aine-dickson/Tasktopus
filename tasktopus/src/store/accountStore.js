import { defineStore } from "pinia";
import api from '../api/index'

export const useAccount = defineStore('account', {
    state: () => ({
        user: null,
        accInfo: null,
        accSettings: null
    }),
    actions: {
        async login(user){
            try {
                api.put('', user)
                .then(promise => {
                    if(promise.status == '201'){

                    }
                })
            } catch (error) {

            }
        },
        async signup(user){
            try {
                api.post('', user)
                .then(promise => {
                    if (promise.status) {
                        
                    }
                })
            } catch (error){
            
            }
        } 
    }
})