import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Loading from './utils/Loading.vue'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('Loading', Loading)
app.use(VueAwesomePaginate)


app.mount('#app')
