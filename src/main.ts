import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'

import App from './App.vue'
const app = createApp(App)

import { createPinia } from 'pinia'
const store = createPinia()

import piniaPluginPersist from 'pinia-plugin-persist'
store.use(piniaPluginPersist)

app.use(store)

import router from './router'
app.use(router)

import ElementPlus from 'element-plus'
app.use(ElementPlus)

import webgl3d_mc from "@supermap/iclient3d-vue-for-webgl"
app.use(webgl3d_mc)


app.mount('#app')
