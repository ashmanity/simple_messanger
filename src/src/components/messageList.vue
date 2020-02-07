<template>
    <div>
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
                }]
            }
        }
    }
</script>

<style scoped>

</style>