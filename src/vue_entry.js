import Vue from 'vue'
import VueApp from "./components/Home"

Vue.config.productionTip = false

new Vue({

    render: h => h(VueApp)
  }).$mount('#vue-app')