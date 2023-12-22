import './assets/main.css'
import "vue-toastification/dist/index.css";
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

import { createApp } from 'vue'
import Toast from "vue-toastification";
import SimpleTypeahead from 'vue3-simple-typeahead';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(Toast, {}).use(SimpleTypeahead)

app.mount('#app')
