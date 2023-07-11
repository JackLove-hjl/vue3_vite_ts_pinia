import { createApp } from 'vue'
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

import TreeItem from './components/Tree/TreeItem.vue'
app.component('tree',TreeItem)

import mitt from 'mitt'
const Mit = mitt()
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
app.config.globalProperties.$Bus = Mit


app.mount('#app')
