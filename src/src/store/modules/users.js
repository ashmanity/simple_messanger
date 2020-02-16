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
    mutations:{},
    actions:{},
    getters:{
        getUsers:  function (state) {
            return state.users
        }
    }
}