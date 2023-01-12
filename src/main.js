import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import {store} from './vuex'
// import { store } from './vuex/store/'
// import { Store } from 'vuex'
// import store from 'vuex'
import store from './store'

createApp(App)
.use(store)
.mount('#app')