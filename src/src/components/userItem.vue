<template>
    <div class="card">
        <div class="card-body">
            <p class="cardId">#{{ users.id }}</p>
            <div class="card-title">{{ users.name }}</div>
            <div class="card-info">
                age: {{ users.age }}
                email: {{ users.email }}
                phone: {{ users.phone }}
            </div>
        </div>
        <div class="function">
            <button class="btn btn-red"><a href="#">Delete</a> </button>
            <button class="btn btn-orange"><a href="#">Change</a></button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            users: {
                type: Object,
                required: true
            },
            id: [String, Number]
        },
        name: "userItem"
    }
</script>

<style scoped>
    .card {
        border:3px solid coral;
        border-radius: 10px;
        margin: 10px;
        display: flex;
        justify-content: space-around;
    }
    .card-body {
        padding: 5px;
    }
    .cardId {
        font-size: 14px;
        color: grey;
    }
    .function {
        margin: auto;

    }
    .btn {
        padding: 8px;
    }
    .btn-red{
        background: red;
    }
    .btn-orange {
        background: orange;
    }
    .btn>a {
        color: white;
    }

</style>