import { defineStore } from "pinia";
import api from '../api/index'

export const useTasks = defineStore('task', {
    state: () => ({
        specialPage: null,
    }),
    actions: {
        async create(task){
            try {
                api.put('', task)
                .then(promise => {
                    if(promise.status == '201'){
                        
                    }
                })
            } catch (error) {

            }
        }
    }
})