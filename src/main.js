import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initFlowbite } from 'flowbite'


import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(initFlowbite())

app.mount('#app')
