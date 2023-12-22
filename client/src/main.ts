import './assets/main.css'
import '@oruga-ui/theme-oruga/dist/scss/oruga-full.scss'
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import Toast from "vue-toastification";
import Oruga from '@oruga-ui/oruga-next';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(Toast, {}).use(Oruga)

app.mount('#app')
