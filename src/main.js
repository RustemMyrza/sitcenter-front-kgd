import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './index.css'
import '@fortawesome/fontawesome-free/js/all'
import VueApexCharts from "vue3-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { ru } from 'vuetify/locale'

const app = createApp(App)

// Use Vue ApexCharts
app.use(VueApexCharts)

// Create Vuetify instance with Russian locale
const vuetify = createVuetify({
  locale: {
    locales: { ru },
    current: 'ru',
  },
  components,
  directives,
})

app.use(store).use(router).use(vuetify).mount('#app')
