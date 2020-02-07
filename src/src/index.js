import './js/com'
import './css/main.css'
import './scss/main.scss'


window.Vue = require('vue');

//Components
Vue.component('main-component',require('./components/main.vue').default);
Vue.component('messageList-component',require('./components/messageList.vue').default);
Vue.component('messageItem-component',require('./components/messageItem.vue').default);
Vue.component('header-component',require('./components/header.vue').default);


const app = new Vue({
   el: '#app',
});