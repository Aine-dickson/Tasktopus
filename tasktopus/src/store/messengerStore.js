import { defineStore } from "pinia";
import api from '../api/index'

export const useMessenger = defineStore('messenger', {
    state: () => ({
        chatType: null,
        chatInfo: null,
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
        }
    }
})