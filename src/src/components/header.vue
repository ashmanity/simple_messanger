<template>
    <div class="header">
        <div class="wrapper">
            <div class="logo">
                <a href="#">Logo</a>
            </div>
            <nav>
                <lu>
                    <li>Home</li>
                    <li>Friends</li>
                    <li>Login</li>
                    <li>Registration</li>
                </lu>
            </nav>
        </div>

    </div>
</template>

<script>
    export default {
        name: "header"
    }

</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }
    nav{
        display: flex;
    }
    lu{
        display: flex;

    }
    h1 {
        text-align: center;
        font-size: 40px;
    }
</style>