<template>
    <div class="userList">
        <userItem-component v-for="(users, i) in users" :key="users.id" :users="users" :id="i+1"></userItem-component>
    </div>
</template>

<script>
    export default {
        name: "userList",
        data() {
            return {

            }
        },
        computed: {
            users(){
                return this.$store.getters.getUsers
            }
        }
    }
</script>

<style scoped>

</style>