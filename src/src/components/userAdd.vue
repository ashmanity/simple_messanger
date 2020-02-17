<template>
    <div class="user">
        <form>
            <div class="form-group">
                <label for="firstName">firstName</label>
                <input type="text" class="form-control" id="firstName" placeholder="enter firstName" v-model="users.firstName">
            </div>
            <div class="form-group">
                <label for="lastName">lastName</label>
                <input type="text" class="form-control" id="lastName" placeholder="enter firstName" v-model="users.lastName">
            </div>
            <div class="form-group">
                <label for="age">age</label>
                <input type="text" class="form-control" id="age" placeholder="enter firstName" v-model="users.age">
            </div>
            <div class="form-group">
                <label for="email">email</label>
                <input type="text" class="form-control" id="email" placeholder="enter firstName" v-model="users.email">
            </div>
            <button type="submit" class="btn" @click.prevent="addUser">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "userAdd",
        data() {
            return {
                users: {}
            }
        },
        methods: {
            addUser() {
                let user = {
                    firstName: this.users.firstName,
                    lastName: this.users.lastName,
                    age: this.users.age,
                    email: this.users.email
                };
                this.$store.commit("setUser", user)
            }
        }
    }
</script>

<style scoped>
    .user {
        display: flex;
        flex-direction: column;
        border: 2px solid green;
        border-radius: 10px;
        padding: 5px;
        margin-top:10px;
    }
    form{
        padding: 5px;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        padding: 5px 0;

    }
    .form-group>label {
        font-size: 20px;
        font-weight: bold;
    }
    .form-control {
        border: 1px solid #cccccc;
        border-radius: 5px;
        outline: none;
        height: 25px;
        width: 300px;
        font-size: 15px;
    }
    .btn {
        width: 100px;
        height: 32px;
        background: #444ce0;
        color: white;
    }
</style>