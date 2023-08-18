import { defineStore } from "pinia";
import api from '../api/index'

export const useApp = defineStore('app', {
    state: () => ({
        specialPage: false,
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