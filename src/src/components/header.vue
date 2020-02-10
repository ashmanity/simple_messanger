<template>
    <div class="header">
        <nav class="clearfix">
            <ul class="clearfix">
                <li><router-link to="/Home">Home</router-link></li>
                <li><router-link to="/Admin">Admin</router-link></li>
                <li><router-link to="/Messages">Messages</router-link></li>
            </ul>
            <a href="#" id="pull">Menu</a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>


<style scoped>
    .header {
        margin: 5px;
        padding: 5px;
    }
    nav{
        height: 40px;
        width: 100%;
        font-size: 16px;
        position: relative;
    }
    nav lu {
        padding: 0;
        margin: 0 auto;
        width: 600px;
        height: 40px;
    }
    nav li {
        display: inline;
        float: left;
    }
    .clearfix:before,
    .clearfix:after {
        content: " ";
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
    .clearfix {
        *zoom: 1;
    }
    nav a {
        color: black;
        display: inline-block;
        width: 100px;
        text-align: center;
        text-decoration: none;
        line-height: 40px;
    }
    nav li a {
        border-right: 1px solid #576979;
    }
    nav li:last-child a {
        border-right: 0;
    }
    nav a:hover, nav a:active {
        background-color: orange;
    }
    nav a#pull {
        display: none;
    }
</style>