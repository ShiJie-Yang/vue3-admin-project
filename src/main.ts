import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import { createPinia } from 'pinia'
import './router/permission'
import mock from 'mockjs'
import '@/mock'
mock.setup({
  timeout: 200
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
