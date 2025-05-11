import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(router);
app.use(ElementPlus)

router.isReady().then(()=> {
  app.mount("#app")
})
