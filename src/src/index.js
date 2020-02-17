import './js/com'
import './css/main.css'
import './scss/main.scss'
import VueRouter from "vue-router";
import store from "./store/store";

window.Vue = require('vue');
Vue.use(VueRouter);
const axios = require('axios').default;

//Components
Vue.component('main-component',require('./components/main.vue').default);
Vue.component('messageList-component',require('./components/messageList.vue').default);
Vue.component('messageItem-component',require('./components/messageItem.vue').default);
Vue.component('header-component',require('./components/header.vue').default);
Vue.component('userItem-component',require('./components/userItem.vue').default);
Vue.component('userList-component',require('./components/userList.vue').default);
Vue.component('userAdd-component',require('./components/userAdd.vue').default);
Vue.component('admin-component',require('./components/Admin.vue').default);

const Home = require("./components/main.vue");
const Admin = require("./components/Admin.vue");


var router = new VueRouter({
   routes: [
      {path:'/home', component: Home},
      {path: '/admin', component: Admin}

   ]
});

const app = new Vue({
   el: '#app',
   router,
   axios,
   store
});