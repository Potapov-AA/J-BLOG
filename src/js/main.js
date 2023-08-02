import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router'

import 'bootstrap-icons/font/bootstrap-icons.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap"

import '@/scss/style.scss'


createApp(App)
.use(router)
.mount('#app')