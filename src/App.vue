<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue"
</script>

<template>
    <header>
       <Menu></Menu>
    </header>

    <main>
        <RouterView />
    </main>
</template>

<style lang="scss" scoped>

</style>
