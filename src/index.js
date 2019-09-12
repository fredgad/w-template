import './js/common'
import './css/main.css'
import './scss/main.scss'
window.Vue = require('vue')
import store from './store/index'

Vue.component('Wrapper', require('./components/Example.vue').default)

const app = new Vue({
    store,
    el: '#app'
})