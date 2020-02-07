<template>
    <div class="main">
        <header-component></header-component>
        <messageList-component></messageList-component>
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
</style>