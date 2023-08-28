import { defineStore } from "pinia";
import api from '../api/index'

export const useTasks = defineStore('task', {
    state: () => ({
        specialPage: null,
        tasks: []
    }),
    actions: {
        async create(task){
            try {
                let response = await api.post('/tasks/create', task)
                this.tasks = response.data
                return response.data
            } catch (error) {
                console.log(error)
                throw new Error(error.response)
            }
        },
        async fetch(quantity, id = ""){
            switch(quantity){
                case all:
                    try{
                        let response = await api.get('/tasks/:all')
                        this.tasks = response.data
                        return response.data
                    } catch(error){
                        console.log(error)
                        throw new Error(error.response)
                    }
                    break;
                case one:
                    try{
                        let response = await api.get('/tasks/?')
                        return response.data
                    } catch(error){
                        throw new Error(error.response)
                    }
                break;
            }
        },
        async update(){

        }
    }
})