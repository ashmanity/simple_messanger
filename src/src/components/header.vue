<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    .header {
        margin: 10px;
        padding: 10px;
    }
    h1 {
        text-align: center;
        font-size: 40px;
    }
</style>