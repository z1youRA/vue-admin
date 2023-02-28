import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import svgIcon from '@/components/SvgIcon/SvgIcon.vue'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).component('svg-icon', svgIcon).mount('#app')
