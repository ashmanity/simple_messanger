<template>
    <div class="main">
        <header-component>
            <h1>Ashmanity</h1>
        </header-component>
        <messageList-component></messageList-component>
        <div class="container">
            <userList-component></userList-component>
            <userAdd-component></userAdd-component>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>
    .main {
        background: white;
        padding: 0 20px;
        margin: 0 7%;
        border: 3px solid darkorange;
        height: 715px;
        border-radius: 10px;
    }
    .container {
        display: inline-flex;
    }
</style>