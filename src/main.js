//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { formatDate, formatDateTime } from './filters/dateFilter';
import { capitalizeFirstLetter } from './filters/stringFilter';

const app = createApp(App)


app.config.globalProperties.$formatDate = formatDate;
app.config.globalProperties.$formatDateTime = formatDateTime;
app.config.globalProperties.$capitalizeFirstLetter = capitalizeFirstLetter;

app.use(createPinia())
app.use(router)

app.mount('#app')
