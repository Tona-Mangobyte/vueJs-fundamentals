import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
// app._context.config.warnRecursiveComputed = true
app.mount('#app')
// createApp(App).use(router).mount('#app')
