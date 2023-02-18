import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {install as VueWishdevComponent} from '@wishdevs/vue-components'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueWishdevComponent)

app.mount('#app')
