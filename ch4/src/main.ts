import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.provide('say', 'Hello World!')
app.mount('#app')
