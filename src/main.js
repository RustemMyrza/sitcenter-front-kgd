import { createApp } from 'vue'
import App from './App.vue'


import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import '@fortawesome/fontawesome-free/js/all'

import VueApexCharts from "vue3-apexcharts";



const app = createApp(App)

app.use(VueApexCharts)


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(store).use(router).use(vuetify).mount('#app')
