import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '@/assets/css/global.css'

createApp(App).use(store).use(router).use(ElementPlus, {locale, size: 'small'}).mount('#app')