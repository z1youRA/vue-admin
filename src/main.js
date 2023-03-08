import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import svgIcon from '@/components/SvgIcon/SvgIcon.vue'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
import store from '@/store/index'
import '@/router/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from '@/i18n/index.js'
import filters from '@/utils/filters.js'

const app = createApp(App)
//全局注册Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

filters(app)

app
  .use(router)
  .use(store)
  .use(i18n)
  .component('svg-icon', svgIcon)
  .mount('#app')
