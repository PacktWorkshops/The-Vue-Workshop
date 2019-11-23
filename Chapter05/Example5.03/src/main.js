import Vue from 'vue'
import App from './App.vue'
import CustomButton from './components/CustomButton.vue'

Vue.config.productionTip = false

Vue.component('CustomButton', CustomButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
