<template>
    <svg id="menu-btn" viewBox="0 0 20 20" @click="drawer.show()">
        <line x1="0" y1="5" x2="20" y2="5" stroke="black"></line>
        <line x1="0" y1="10" x2="20" y2="10" stroke="black"></line>
        <line x1="0" y1="15" x2="20" y2="15" stroke="black"></line>
    </svg>

    <sl-drawer ref="drawer" label="Menu" placement="start" class="drawer-placement-start">
        <sl-menu>
            <sl-menu-item @click="router.push(`/`)">Home</sl-menu-item>
            
            <sl-divider></sl-divider>

            <sl-menu-item @click="router.push(`/design`)">Web Design</sl-menu-item>

            <sl-divider></sl-divider>

            <sl-menu-label>Games</sl-menu-label>
            <sl-menu-item @click="router.push(`/solitaire`)">Solitaire</sl-menu-item>
            <sl-menu-item @click="router.push(`/sudoku`)">Sudoku</sl-menu-item>
            
            <sl-divider></sl-divider>

            <sl-menu-item @click="router.push(`/rig`)">Rig</sl-menu-item>

            <sl-divider></sl-divider>

            <sl-menu-item @click="router.push(`/drawings`)">Drawings</sl-menu-item>
        </sl-menu>
    </sl-drawer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const drawer = $ref(null)

const router = useRouter()
</script>

<style lang="scss" scoped>
#menu-btn {
    position: fixed;
    top: 15px;
    left: 15px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    padding: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 10;
}

a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
</style>