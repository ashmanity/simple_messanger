import './js/com'
import './css/main.css'
import './scss/main.scss'
window.Vue = require('vue');
import store from "./store/store";

//Components
Vue.component('main-component',require('./components/main.vue').default);
Vue.component('messageList-component',require('./components/messageList.vue').default);
Vue.component('messageItem-component',require('./components/messageItem.vue').default);
Vue.component('header-component',require('./components/header.vue').default);
Vue.component('userItem-component',require('./components/userItem.vue').default);
Vue.component('userList-component',require('./components/userList.vue').default);
Vue.component('userAdd-component',require('./components/userAdd.vue').default);



const app = new Vue({
   store,
   el: '#app'
});