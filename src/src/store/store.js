import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        message: 'Hello Artem'
    },
    mutations:{},
    actions:{},
    getters: {
        getMessage(state) {
            return state.message
        }
    }
})