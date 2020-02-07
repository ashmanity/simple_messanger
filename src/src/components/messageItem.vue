<template>
    <div class="message">
        <div class="message-body">
            <h4 class="message-title">#{{ id }} {{ message.lastName }} {{ message.firstName}}</h4>
            <p class="message-text">{{ message.message }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: Object,
                required: true
            },
            id: [Number, String]
        },
        name: "messageItem",
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .message {
        width: 500px;
        border:3px solid coral;
        border-radius: 10px;
        margin: 10px;
    }
    .message-body {
        padding: 5px;
    }
    .message-title {
        font-size: 12px;
        color: grey;
    }
</style>