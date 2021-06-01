import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePlyr from 'vue-plyr'
createApp(App)
  .use(VuePlyr)
  .use(router)
  .mount('#app')
