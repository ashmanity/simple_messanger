export default {
    state:{
        users: []
    },
    mutations:{
        updateUsers(state, users) {
            state.users = users
        }
    },
    actions:{
        async fetchUsers(ctx) {
            const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=4");
            const users = await res.json();
            ctx.commit('updateUsers',users)
        }
    },
    getters: {
        allUsers(users) {
            return state.users
        }
    }
}