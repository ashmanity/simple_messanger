<template>
    <div class="messageList">
        <messageItem-component v-for="(message, i) in message" :key="message.id" :message="message" :id="i+1"></messageItem-component>
    </div>
</template>

<script>
    export default {
        name: "messageList",
        data () {
            return {
                message: [{
                    id: 1,
                    firstName: "Ashot",
                    lastName: "Avanesyan",
                    message: "Hello"
                },{
                    id: 2,
                    firstName: "Artem",
                    lastName: "Avanesyan",
                    message: "Hi"
                },{
                    id: 3,
                    firstName: "Albert",
                    lastName: "Dargin",
                    message: "How are u"
                }]
            }
        }
    }
</script>

<style scoped>
    .messageList {
        border-bottom:2px solid darkorange;
    }
</style>