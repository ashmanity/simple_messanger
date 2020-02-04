import './js/com'
import './css/main.css'
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

window.Vue = require('vue');

//Components
Vue.component('header-component',require('./components/header.vue').default);
Vue.component('registration-component',require('./components/registration.vue').default);

const app = new Vue({
   el: '#app',
});