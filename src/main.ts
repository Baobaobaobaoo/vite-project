import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 全局引入组件库图标
import * as Icons from '@ant-design/icons-vue'

const pinia = createPinia()
const app = createApp(App)

// 注册图标组件
Object.keys(Icons).map(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

// console.log("环境变量", import.meta.env)

app.use(router).use(pinia).use(Antd)
app.mount('#app')
