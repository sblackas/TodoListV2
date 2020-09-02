<template>
    <nav class="menu">
        <h2>Todo List</h2>
        <router-link to="/new">New</router-link>
        <router-link to="/list">List</router-link>
        <router-link to="/done">Done</router-link>
        <router-link to="/todo">Todo</router-link>
    </nav>
</template>

<script>
export default {
    name : 'MyHeader'
}
</script>

<style>
.menu {
    background-color:aquamarine;
    display: flex;
    justify-content: space-around; /* axe des y horizontal */
    align-items: center; /* axe des x vertical */
}
</style>