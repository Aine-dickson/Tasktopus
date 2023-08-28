import '../public/assets/tailwind.css'

import { createApp } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import customStorage from './store/index'
import api from './api'
import { useAccount } from './store/accountStore'

const pinia = createPinia()
pinia.use(createPersistedState({
    key: (id) => `__tasktopus__${id}`,
    storage: customStorage,
    auto: true
}))

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

api.get('csrfToken').then(response => {
    const store = useAccount()
    store._csrf = response.data._csrf
})

