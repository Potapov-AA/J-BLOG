import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

import router from '@/router'


import 'bootstrap-icons/font/bootstrap-icons.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap"

import '@/scss/style.scss'

const pinia = createPinia(App)

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
