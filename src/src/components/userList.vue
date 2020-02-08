<template>
    <div class="userList">
        <userItem-component v-for="(users, i) in users" :key="users.id" :users="users" :id="i+1"></userItem-component>
    </div>
</template>

<script>
    export default {
        name: "userList",
        data () {
            return {
                users: [{
                    id:1,
                    firstName: "David",
                    lastName: "Irden",
                    age: "19",
                    email: "fff@fff.ff"
                },{
                    id:2,
                    firstName: "Stat",
                    lastName: "Pieha",
                    age: "12",
                    email: "fff@fff.ff"
                },{
                    id:3,
                    firstName: "Stat",
                    lastName: "Pieha",
                    age: "12",
                    email: "fff@fff.ff"
                }]
            }
        },
        methods: {
            addUser(firstName, lastName, age, email) {
                let id = this.users[this.users.length-1].id + 1;
                this.users.push({
                    id,
                    firstName,
                    lastName,
                    age,
                    email
                })
            }
        }
    }
</script>

<style scoped>

</style>