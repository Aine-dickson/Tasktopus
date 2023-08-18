import '../public/assets/tailwind.css'

import { createApp } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import customStorage from './store/index'

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
