import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.scss'
import ShoelaceModelDirective from '@shoelace-style/vue-sl-model'

const app = createApp(App)

app.use(router)
app.use(ShoelaceModelDirective)

app.mount('#app')


