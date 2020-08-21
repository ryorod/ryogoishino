import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
import VueTyperPlugin from 'vue-typer'
Vue.use(smoothScroll)
Vue.use(VueTyperPlugin)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
