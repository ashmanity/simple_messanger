<template>
    <div class="userList">
        <userItem-component v-for="(users, i) in users" :key="users.id" :users="users" :id="i+1"></userItem-component>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "userList",
        computed: mapGetters(['allUsers']),
        async mounted() {
            this.$stored.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>