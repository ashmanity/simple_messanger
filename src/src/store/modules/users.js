export default {
    state:{
        users:[{
            id:1,
            name: "max",
            age: 2,
            email: "fff@sss.com",
            phone: "8962923143"
        },{
            id:2,
            name: "denis",
            age: 1,
            email: "fff@ssdasds.com",
            phone: "8632923143"
        },{
            id:3,
            name: "petya",
            age: 0,
            email: "sas@ssdasds.com",
            phone: "89642453143"
        },{
            id:4,
            name: "kolya",
            age: 9999,
            email: "kek@sap.com",
            phone: "8896934592"
        }]
    },
    mutations:{
        setUser: (state,payload) => {
            state.users = payload
        },
        addUSer: (state, payload) => {
            state.users.push(payload)
        }
    },
    actions:{
        getUser: async (context, payload) => {
            let { data } = await Axios.get("URL");
            context.commit(setUser,data)
        },
        saveUser: async (context, payload) => {
            let { data } = await Axios.post('URL');
            context.commit('ADD_TODO',payload)
        }
    },
    getters:{
        getUsers: state => {
            return state.users
        }
    }
}