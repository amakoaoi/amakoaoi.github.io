<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue"
</script>

<template>
    <Menu></Menu>

    <main>
        <RouterView />
    </main>
</template>

<style lang="scss" scoped>

</style>
